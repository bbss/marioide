(ns speech.editor
  (:require
   [speech.eval :refer [eval]]
   [clojure.string :as string :refer [join]]
   [parinfer-cljs.core :refer [indent-mode paren-mode]]
   cljsjs.codemirror
   cljsjs.codemirror.mode.clojure
   cljsjs.codemirror.addon.edit.matchbrackets
   cljsjs.codemirror.keymap.emacs
   cljsjs.codemirror.addon.selection.active-line
   ))

(def frame-updates (atom {}))

(defonce e-state
  (atom {}))

(def empty-editor-state
  {:text ""             ;; text of the editor
   :mode :indent-mode   ;; editor mode (:indent-mode, :paren-mode)
   :cm nil              ;; the CodeMirror instance
   :watcher nil})       ;; the ScrollMonitor instance

(defn before-change
  "Called before any change is applied to the editor."
  [cm change]
  ;; keep CodeMirror from reacting to a change from "setValue"
  ;; if it is not a new value.
  (when (and (= "setValue" (.-origin change))
             (= (.getValue cm) (join "\n" (.-text change))))
    (.cancel change)))

(defprotocol IEditor
  "Custom data/methods for a CodeMirror editor."
  (cm-key [this])
  (get-prev-state [this])
  (frame-updated? [this])
  (set-frame-updated! [this value])
  #_(record-change! [this thing]))

;;----------------------------------------------------------------------
;; Operations
;;----------------------------------------------------------------------

(defn update-cursor!
  "Correctly position cursor after text that was just typed.
  We need this since reformatting the text can shift things forward past our cursor."
  [cm change]
  (when (= "+input" (.-origin change))
    (let [selection? (.somethingSelected cm)
          text (join "\n" (.-text change))
          from-x (.. change -from -ch)
          line-no (.. change -from -line)
          line (.getLine cm line-no)
          insert-x (.indexOf line text from-x)
          after-x (+ insert-x (count text))]
      (cond
        ;; something is selected, don't touch the cursor
        selection?
        nil

        ;; pressing return, keep current position then.
        (= text "\n")
        nil

        ;; only move the semicolon ahead since it can be pushed forward by
        ;; commenting out inferred parens meaning they are immediately
        ;; reinserted behind it.
        (= text ";")
        (.setCursor cm line-no after-x)

        ;; typed character not found where expected it, we probably prevented it. keep cursor where it was.
        (or (= -1 insert-x)
            (> insert-x from-x))
        (.setCursor cm line-no from-x)

        :else nil))))


(defn selection [cm]
  (map (fn [s]
         (clojure.string/replace
          s
          "[object Object]" ""))
       (.getSelections cm (.listSelections cm))))

(defn cm-selection-or-form [cm]
  (let [selection (or (when (= (first (selection cm)) "")
                        (.getValue cm))
                      (first (selection cm)))]
    selection))

(defn current-selection [cm]
  (cm-selection-or-form cm))

(defn compute-cursor-dx
  [cursor change]
  (when change
    (let [;; This is a hack for codemirror.
          ;; For some reason codemirror triggers an "+input" change after the
          ;; indent spaces are already applied.  So I modified codemirror to
          ;; label these changes as +indenthack so we can ignore them.
          ignore? (= "+indenthack" (.-origin change))]
      (if ignore?
        0
        (let [start-x (.. change -to -ch)
              new-lines (.. change -text)
              len-last-line (count (last new-lines))
              end-x (if (> (count new-lines) 1)
                      len-last-line
                      (+ len-last-line (.. change -from -ch)))]
          (- end-x start-x))))))

(defn compute-cm-change
  [cm change options prev-state]
  (let [{:keys [start-line end-line num-new-lines]}
        (if change
          {:start-line (.. change -from -line)
           :end-line (inc (.. change -to -line))
           :num-new-lines (alength (.-text change))}

          (let [start (:cursor-line prev-state)
                end (inc start)]
            {:start-line start
             :end-line end
             :num-new-lines (- end start)}))

        lines (for [i (range start-line (+ start-line num-new-lines))]
                (.getLine cm i))]
    {:line-no [start-line end-line]
     :new-line lines}))

(defn fix-text!
  "Correctly format the text from the given editor."
  [cm & {:keys [change use-cache?]
         :or {change nil, use-cache? false}}]
  (let [;; get the current state of the editor
        ;; (e.g. text, cursor, selections, scroll)

        current-text (.getValue cm)
        selection? (.somethingSelected cm)
        selections (.listSelections cm)
        cursor (.getCursor cm)
        scroller (.getScrollerElement cm)
        scroll-x (.-scrollLeft scroller)
        scroll-y (.-scrollTop scroller)

        options {:cursor-line (.-line cursor)
                 :cursor-x (.-ch cursor)
                 :cursor-dx (compute-cursor-dx cursor change)}

        key- (cm-key cm)
        mode (or (get-in @e-state [key- :mode]) :indent-mode)

        prev-state (get-prev-state cm)

        ;; format the text
        new-text
        (case mode
          :indent-mode
          (let [result (indent-mode current-text options)]
            (when (:valid? result)
              (reset! prev-state (:state result)))
            (:text result))

          :paren-mode
          (let [result (paren-mode current-text options)]
            (:text result))

          nil)]

    ;; update the text
    (swap! e-state assoc-in [key- :text] new-text)

    ;; restore the selection, cursor, and scroll
    ;; since these are reset when overwriting codemirror's value.
    (if selection?
      (.setSelections cm selections)
      (.setCursor cm cursor))
    (.scrollTo cm scroll-x scroll-y)))


(defn on-change
  "Called after any change is applied to the editor."
  [cm change]
  (when (not= "setValue" (.-origin change))
    (fix-text! cm :change change)
    (update-cursor! cm change)
    (set-frame-updated! cm true)))

(defn on-cursor-activity
  "Called after the cursor moves in the editor."
  [cm]
  (when-not (frame-updated? cm)
    (fix-text! cm))
  (set-frame-updated! cm false))

;;----------------------------------------------------------------------
;; Setup
;;----------------------------------------------------------------------
(def key-map
  #js {"Ctrl-Enter" (fn [cm] (eval (current-selection cm)))})

(defn parinferize!
  "Add parinfer goodness to a codemirror editor"
  ([cm key- parinfer-mode initial-value]
   (when-not (get @e-state key-)
     (let [initial-state (assoc empty-editor-state
                                :mode parinfer-mode
                                :text initial-value)
           prev-editor-state (atom nil)]

       (when-not (get @e-state key-)
         (swap! frame-updates assoc key- {}))

       (swap! e-state update-in [key-]
              #(-> (or % initial-state)
                   (assoc :cm cm)))

       ;; Extend the code mirror object with some utility methods.
       (specify! cm
                 IEditor
                 (get-prev-state [this] prev-editor-state)
                 (cm-key [this] key-)
                 (frame-updated? [this] (get-in @frame-updates [key- :frame-updated?]))
                 (set-frame-updated! [this value] (swap! frame-updates assoc-in [key- :frame-updated?] value)))

       ;; handle code mirror events
       (.on cm "change" on-change)
       (.on cm "beforeChange" before-change)
       (.on cm "cursorActivity" on-cursor-activity)
       (.addKeyMap cm "emacs")
       (.addKeyMap cm key-map)
       (set! (.-save (.-commands js/CodeMirror))
             (fn [cm] ))

       cm))))

;;----------------------------------------------------------------------
;; Sync changes
;;----------------------------------------------------------------------

(defn on-state-change
  "Called every time the state changes to sync the code editor."
  [_ _ old-state new-state]
  (doseq [[k {:keys [cm text]}] new-state]
    (let [changed? (not= text (.getValue cm))]
      (when changed?
        (.setValue cm text)))))

(defn force-editor-sync! []
  (doseq [[k {:keys [cm text]}] @e-state]
    (.setValue cm text)))

(defn start-editor-sync! []
  ;; sync state changes to the editor
  (add-watch e-state :editor-updater on-state-change)
  (force-editor-sync!))

(defn on-tab
  "Indent selection or insert two spaces when tab is pressed.
  from: https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785"
  [cm]
  (if (.somethingSelected cm)
    (.indentSelection cm)
    (let [n (.getOption cm "indentUnit")
          spaces (apply str (repeat n " "))]
      (.replaceSelection cm spaces))))

(def editor-opts
  {:mode "clojure"
   :matchBrackets true
   :extraKeys {:Tab on-tab
               :Shift-Tab "indentLess"}})

(defn create-regular-editor!
  "Create a non-parinfer editor."
  ([element-id] (create-regular-editor! element-id {}))
  ([element-id opts]
   (let [element (js/document.getElementById element-id)]
     (when-not (= "none" (.. element -style -display))
       (let [cm (js/CodeMirror.fromTextArea element (clj->js (merge editor-opts {:mode "clojure"} opts)))
             wrapper (.getWrapperElement cm)]
         (set! (.-id wrapper) (str "cm-" element-id))
         cm)))))

(defn create-editor!
  "Create a parinfer editor."
  ([element-id key-] (create-editor! element-id key- {}))
  ([element-id key- opts]
   (when-not (get @e-state key-)
     (let [element (js/document.getElementById element-id)
           cm (js/CodeMirror.fromTextArea element (clj->js (merge editor-opts opts)))
           wrapper (.getWrapperElement cm)
           ]

       (set! (.-id wrapper) (str "cm-" element-id))

       (parinferize! cm key- (:parinfer-mode opts) "")

       cm))))

(defn create-editor-el!
  "Create a parinfer editor."
  ([element-id key-] (create-editor-el! element-id key- {}))
  ([element key- opts]
   (when-not (get @e-state key-)
     (let [cm (js/CodeMirror.fromTextArea element (clj->js (merge editor-opts opts)))
           wrapper (.getWrapperElement cm)
           ]

       (parinferize! cm key- :indent-mode "")

       cm))))
