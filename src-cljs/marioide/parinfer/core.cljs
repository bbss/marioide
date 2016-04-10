(ns marioide.parinfer.core
  (:require
    [clojure.string :refer [join]]
    [marioide.replumb.core :refer [eval]])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node]]))

(defn- convert-changed-line [e]
  {:line-no (aget e "lineNo")
   :line    (aget e "line")})

(defn- convert-error [e]
  (when e
    {:name    (aget e "name")
     :message (aget e "message")
     :line-no (aget e "lineNo")
     :x       (aget e "x")}))

(defn- convert-result [result]
  {:text          (aget result "text")
   :cursor-x      (aget result "cursorX")
   :success?      (aget result "success")
   :changed-lines (mapv convert-changed-line (aget result "changedLines"))
   :error         (convert-error (aget result "error"))})

(defn- convert-options [option]
  #js {:cursorX            (:cursor-x option)
       :cursorLine         (:cursor-line option)
       :cursorDx           (:cursor-dx option)
       :previewCursorScope (:preview-cursor-scope option)})

(def indent-mode* (aget js/window "parinfer" "indentMode"))
(def paren-mode* (aget js/window "parinfer" "parenMode"))

(defn indent-mode
  ([text] (convert-result (indent-mode* text)))
  ([text options] (convert-result (indent-mode* text (convert-options options)))))

(defn paren-mode
  ([text] (convert-result (paren-mode* text)))
  ([text options] (convert-result (paren-mode* text (convert-options options)))))

(defprotocol IEditor
  "Custom data/methods for a CodeMirror editor."
  (cm-key [this])
  (get-prev-state [this])
  (frame-updated? [this])
  (set-frame-updated! [this value])
  (record-change! [this thing]))

;; map of editor key -> editor state
(defonce editor-state
         (atom {}))

(def empty-editor-state
  {:text    ""                                              ;; text of the editor
   :mode    :indent-mode                                    ;; editor mode (:indent-mode, :paren-mode)
   :options nil                                             ;; Parinfer input options
   :result  nil                                             ;; Parinfer result
   :cm      nil                                             ;; the CodeMirror instance
   :watcher nil})                                           ;; the ScrollMonitor instance

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
          {:start-line    (.. change -from -line)
           :end-line      (inc (.. change -to -line))
           :num-new-lines (alength (.-text change))}

          (let [start (:cursor-line prev-state)
                end (inc start)]
            {:start-line    start
             :end-line      end
             :num-new-lines (- end start)}))

        lines (for [i (range start-line (+ start-line num-new-lines))]
                (.getLine cm i))]
    {:line-no  [start-line end-line]
     :new-line lines}))

(defn fix-text!
  "Correctly format the text from the given editor."
  [cm & {:keys [change use-cache?]
         :or   {change nil, use-cache? false}}]
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
                 :cursor-x    (.-ch cursor)
                 :cursor-dx   (compute-cursor-dx cursor change)}

        key- (cm-key cm)
        options (merge options (get-in @editor-state [key- :options]))
        mode (or (get-in @editor-state [key- :mode]) :indent-mode)

        prev-state (get-prev-state cm)

        result
        (case mode
          :indent-mode (indent-mode current-text options)
          :paren-mode (paren-mode current-text options)
          nil)

        ;; format the text
        new-text (:text result)
        new-cursor-x (:cursor-x result)]

    (when (= key- :demo)
      (swap! editor-state assoc-in [key- :result] result)
      (swap! editor-state assoc-in [key- :prev-options] options))

    ;; update the text
    (swap! editor-state assoc-in [key- :text] new-text)

    ;; restore the selection, cursor, and scroll
    ;; since these are reset when overwriting codemirror's value.
    (if selection?
      (.setSelections cm selections)
      (.setCursor cm (aget cursor "line") new-cursor-x))
    (.scrollTo cm scroll-x scroll-y)))

;;----------------------------------------------------------------------
;; Life Cycle events
;;----------------------------------------------------------------------

;; NOTE:
;; Text is either updated after a change in text or
;; a cursor movement, but not both.
;;
;; When typing, on-change is called, then on-cursor-activity.
;; So we prevent updating the text twice by using an update flag.

(def frame-updates (atom {}))

(defn selection [cm]
  (map (fn [s]
         (clojure.string/replace
           s
           "[object Object]" ""))
       (.getSelections cm (.listSelections cm))))

(defn before-change
  "Called before any change is applied to the editor."
  [cm change]
  ;; keep CodeMirror from reacting to a change from "setValue"
  ;; if it is not a new value.
  (when (and (= "setValue" (.-origin change))
             (= (.getValue cm) (join "\n" (.-text change))))
    (.cancel change)))

(defn on-change
  "Called after any change is applied to the editor."
  [cm change]
  (when (not= "setValue" (.-origin change))
    (fix-text! cm :change change)
    (set-frame-updated! cm true)))

(defn on-cursor-activity
  "Called after the cursor moves in the editor."
  [cm]
  (when-not (frame-updated? cm)
    (fix-text! cm))
  (set-frame-updated! cm false))

(defn on-tab
  "Indent selection or insert two spaces when tab is pressed.
  from: https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785"
  [cm]
  (if (.somethingSelected cm)
    (.indentSelection cm)
    (let [n (.getOption cm "indentUnit")
          spaces (apply str (repeat n " "))]
      (.replaceSelection cm spaces))))

;;----------------------------------------------------------------------
;; Setup
;;----------------------------------------------------------------------

(def editor-opts
  {:mode          "clojure-parinfer"
   :theme         "github"
   :matchBrackets true
   :extraKeys     {:Tab on-tab}})

(aset js/CodeMirror "keyMap" "default" "Shift-Tab" "indentLess")

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

(defn cm-selection-or-form [cm]
  (let [selection (or (when (= (first (selection cm)) "")
                        (.getValue cm))
                      (first (selection cm)))]
    selection))

(def latest-cm (atom {}))

(defn current-selection []
  (cm-selection-or-form
    @latest-cm))

(defn create-editor!
  "Create a parinfer editor."
  ([element-id key-] (create-editor! element-id key- {}))
  ([element-id key- opts]
    (create-editor! (js/document.getElementById element-id) element-id key- opts)
   )
  ([element element-id key- opts]
   (when-not (get @editor-state key-)
     (let [cm (js/CodeMirror.fromTextArea element (clj->js (merge editor-opts opts)))
           wrapper (.getWrapperElement cm)
           watcher (js/scrollMonitor.create wrapper)
           initial-state (assoc empty-editor-state
                           :mode (or (:parinfer-mode opts) :indent-mode))
           prev-editor-state (atom nil)
           evaluate (or (:eval opts) print)]


       (set! (.-id wrapper) (str "cm-" element-id))

       (when-not (:readOnly opts)

         ;; on blur, start playing animation again, if we are not dev mode.
         (.on cm "blur" (fn [e]
                          #_(when-not (:show? @controls-state)
                              (when (.-isInViewport watcher)
                                (play-recording! key-)))))

         ;; on focus, set recording controls to focus on this editor.
         ;; and stop any animation.
         (.on cm "focus" (fn [e]
                           #_(swap! controls-state assoc :target-key key-)
                           #_(stop-playing! key-)
                           (reset! latest-cm cm)
                           (on-cursor-activity cm)
                           )))

       (when-not (get @editor-state key-)
         (swap! frame-updates assoc key- {}))

       (swap! editor-state update-in [key-]
              #(-> (or % initial-state)
                   (assoc :cm cm
                          :watcher watcher)))

       ;; Extend the code mirror object with some utility methods.
       (specify! cm
         IEditor
         (get-prev-state [this] prev-editor-state)
         (cm-key [this] key-)
         (frame-updated? [this] (get-in @frame-updates [key- :frame-updated?]))
         (set-frame-updated! [this value] (swap! frame-updates assoc-in [key- :frame-updated?] value))
         )

       ;; handle code mirror events
       (.on cm "change" on-change)

       (.on cm "beforeChange" before-change)
       (.on cm "cursorActivity" on-cursor-activity)

       (.addKeyMap cm #js {"Ctrl-Enter" (fn [] (evaluate (cm-selection-or-form cm)))})

       cm))
   )
  )



;;----------------------------------------------------------------------
;; Setup
;;----------------------------------------------------------------------

(defn on-state-change
  "Called everytime the state changes to sync the code editor."
  [_ _ old-state new-state]
  (doseq [[k {:keys [cm text]}] new-state]
    (let [changed? (not= text (.getValue cm))]
      (when changed?
        (.setValue cm text)))))

(defn force-editor-sync! []
  (doseq [[k {:keys [cm text]}] @editor-state]
    (.setValue cm text)))

(defn start-editor-sync! []
  ;; sync state changes to the editor
  (add-watch editor-state :editor-updater on-state-change)
  (force-editor-sync!))

(defn attach-editor! [st node]
  (if-not (:editor @editor-state)
    (let [_ (set! (.-innerHTML node) "<div></div>")
          textarea (.appendChild node (.createElement js/document "textarea"))
          _ (.setAttribute textarea "id" "repl")]
      (create-editor! "repl" :editor {:mode "clojure"
                                      :eval eval})
      (start-editor-sync!))
    (let [_ (set! (.-innerHTML node) "<div></div>")
          editor-el (:cm (:editor @editor-state))
          _ (.appendChild node (.-wrapper (.-display editor-el)))
          ]
      ))
  )
