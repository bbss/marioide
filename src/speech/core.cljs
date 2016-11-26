(ns speech.core
  (:require
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [cljs-react-material-ui.icons :as ic]
   [speech.fixtures.definition :refer [def-recognizer]]
   [speech.editor :refer [e-state create-editor-el! start-editor-sync!]]
   [speech.eval :refer [ConsoleElement console-element eval-results]]
   [sablono.core :as sab :include-macros true]
   [goog.object :as gobj]
   [om.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [cljs.core.match :refer-macros [match]]
   [cljs.core.async :refer [chan put! timeout take! <! >!]]
   [clojure.string :refer [includes? replace-first]]
   [dirac.runtime]
   [devcards-om-next.core :refer-macros [#_defcard-om-next om-next-root]]
   [devtools.core :as devtools]
   [parinfer-cljs.core :refer [indent-mode paren-mode]]
   [cljs-http.client :as http]
   [cljsjs.react-motion])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.core :as dc :refer [defcard defcard-om-next deftest dom-node]])
  )

(devtools/install! [:formatters :hints :async])

(dirac.runtime/install!)

(enable-console-print!)

(declare init)
(defonce refresh-key (atom 0))

(defn fig-reload []
  (swap! refresh-key inc)
  (init))

(defonce state
  (atom {}))

(defn deep-merge [& xs]
  "Merges nested maps without overwriting existing keys."
  (if (every? map? xs)
    (apply merge-with deep-merge xs)
    (last xs)))

(defn prr [& args] (js/console.log args))

(defn ppr [& args] (cljs.pprint/pprint args))

(def base-url "http://localhost:3000/api/oauth2")

(defn clojure-replize [cm id content]
  (speech.editor/parinferize! cm id :indent-mode "")
  (speech.editor/start-editor-sync!)
  (swap! speech.editor/e-state assoc-in [id :text] (str content)))

(defn replize [cm id content]
  (speech.editor/parinferize! cm id :none "")
  (speech.editor/start-editor-sync!)
  (swap! speech.editor/e-state assoc-in [id :text] (str content)))

(defui File
  static om/Ident
  (ident [this {:keys [file/id]}]
         [:file/id id])
  static om/IQuery
  (query [this]
         [:file/content :file/type :file/language :file/name :file/id])
  Object
  (componentDidUpdate [this prev-props _]
                      (let [{:keys [file/content file/type file/language file/id]}
                            (om/props this)
                            cm (:file/editor (om/get-state this))]
                        (when content
                          (case language
                            "Clojure" (clojure-replize cm id (str content))
                            (replize cm id (str content))))))
  (componentDidMount [this]
                     (let [{:keys [:file/content :file/name :file/id :file/type :file/language]} (om/props this)
                           cm (js/CodeMirror.fromTextArea
                               (dom/node this id)
                               (clj->js speech.editor/editor-opts))
                           ]
                       (om/set-state! this {:file/editor cm})))
  (render [this]
          (let [{:keys [:file/content :file/name :file/id]} (om/props this)]
            (ui/card (ui/subheader name)
                     (dom/textarea #js {:ref id
                                        :value (str content)})))))

(def file-component (om/factory File {:keyfn :file/id}))

(defui Gist
  static om/Ident
  (ident [this {:keys [gist/id]}]
         [:gist/id id])
  static om/IQuery
  (query [this]
         [:gist/id {:file/list (om/get-query File)} :gist/description :gist/expanded])
  Object
  (render [this]
          (let [{:keys [gist/id file/list gist/description gist/expanded]} (om/props this)
                {:keys [save-gist expand-gist add-file]} (om/get-computed this)]
            (ui/list-item {:open expanded
                           :primary-text (if (not (empty? description))
                                           description
                                           id)
                           :on-nested-list-toggle #(expand-gist id)
                           :primary-toggles-nested-list true
                           :nested-items [(for [file list]
                                            (file-component file))
                                          (ui/flat-button {:label "Save gist to Github"
                                                           :key "button"
                                                           :on-touch-tap #(save-gist id)})
                                          (ui/flat-button {:label "Add new file"
                                                           :key "add file"
                                                           :style {:float "right"}
                                                           :icon (ic/content-add-circle)
                                                           :on-touch-tap #(add-file id)})]}))))

(def gist-component (om/factory Gist {:keyfn :gist/id}))

(defui Gists
  static om/IQuery
  (query [this]
         [{:gist/list (om/get-query Gist)}])
  Object
  (initLocalState [this]
                  {"tab-index" 0})
  (render [this]
          (let [{:keys [gist/list]} (om/props this)
                actions {:add-file
                         (fn [id]
                           (om/transact! this `[(app/add-file {:id ~id}) [:gist/list]]))
                         :save-gist
                         (fn [id]
                           (om/transact! this `[(app/save-gist {:id ~id})]))
                         :expand-gist
                         (fn [id]
                           (om/transact! this `[(app/expand-gist {:id ~id}) [:gist/list]]))}]
            (ui/mui-theme-provider
             {:mui-theme (ui/get-mui-theme)}
             (ui/card
              (ui/tabs {:on-change (fn [i] (om/set-state! this {"tab-index" i}))
                        :value (om/get-state this "tab-index")}
                       (ui/tab {:label "Code"
                                :value 0})
                       (ui/tab {:label "Results"
                                :value 1}))
              (js/React.createElement
               js/SwipeableViews
               #js {"index" (om/get-state this "tab-index")}
               (ui/card (for [gist list]
                          (gist-component
                           (om/computed gist
                                        actions)))
                        (ui/card-actions
                         (ui/floating-action-button
                          {:label "Add new Gist"
                           :mini true
                           :on-touch-tap #(om/transact! this '[(app/new-gist) [:gist/list]])
                           }
                          (ic/content-add))))
               (ui/grid-list {:cols 1}
                             (for [[_ result] (reverse (sort-by first (:results @eval-results)))]
                               (ui/grid-tile {:style {:background-color
                                                      (case (:status result)
                                                        :eval-fail (ui/color "deepOrange100")
                                                        :eval-success (ui/color "lightGreen100")
                                                        "white")}}
                                             (devcards.util.edn-renderer/html-edn (:result result)))))))))))

(defmulti read om/dispatch)

(defmulti mutate om/dispatch)

(defn get-gist-files [gist-id]
  (apply
   merge
   (flatten
    (for [{:keys [:file/id]}
          (->> (om/db->tree (om/get-query Gist)
                            (:gist/list @state)
                            @state
                            )
               (filter (fn [gist] (= gist-id (:gist/id gist))))
               first
               :file/list)]
      [{(clojure.string/replace id gist-id "")
        (let [file (get-in @state [:file/id id])]
          {:content (if-let [cm (get @speech.editor/e-state id)]
                      (.getValue (:cm cm))
                      (:file/content file)
                      )
           :filename (:file/name file)
           :language (:file/language file)})}]))))

(defmethod mutate 'app/save-gist
  [_ _ {:keys [id]}]
  {:action (fn [] (go (take! (http/post (str base-url "/gist")
                                         {:transit-params
                                          {:gist-id id
                                           :files (get-gist-files id)}})
                               print)))})

(defmethod mutate 'app/expand-gist
  [{:keys [state]} _ {:keys [id]}]
  {:action (fn []
             (swap! state update-in [:gist/id id :gist/expanded] not))})

(defmethod mutate 'app/new-gist
  [{:keys [state]} _ _]
  {:action (fn []
             (go (take! (http/post (str base-url "/gist/new"))
                        print)))})

(defmethod mutate 'app/add-file
  [{:keys [state]} _ {:keys [id]}]
  {:action (fn []
             (swap! state
                    (fn [st]
                      (let [new-file-id (->> (get-in @state [:gist/id id :file/list])
                                             (map second)
                                             (reduce max)
                                             inc)]
                        (-> st
                            (update-in [:gist/id id :file/list]
                                       (fn [files]
                                         (conj files [:file/id new-file-id])))
                            (assoc-in [:file/id new-file-id]
                                      {:file/id new-file-id
                                       :file/type "text/plain"
                                       :file/language "Clojure"
                                       :file/content ";;start coding!"
                                       :file/name "rename-me.clj"}))))))})

(defonce p (om/parser {:read read :mutate mutate}))

(defn grab-and-merge-file [merge-cb state gist-id]
  (when-let [expanded (get-in @state [:gist/id gist-id :gist/expanded])]
    (go (take! (http/get (str base-url "/gist")
                         {:query-params
                          {"gist-id" gist-id}})
               (fn [{:keys [body]}]
                 (let [merged
                       (reduce (fn [acc [file-id {:keys [content type language filename]}]]
                                 (deep-merge acc {:file/id {(str gist-id (name file-id))
                                                            {:file/content content
                                                             :file/type type
                                                             :file/language language
                                                             :file/name filename}}}))
                               {}
                               (:files body))]
                   (merge-cb (deep-merge
                              {:file/id (:file/id @state)}
                              merged))))))))

(defn rename-gist-keys [gist]
  (-> gist
      (clojure.set/rename-keys
       {:id :gist/id :files :file/list
        :description :gist/description})
      (update :file/list
              (fn [files]
                (into []
                      (map (fn [[file-id file]]
                             {:file/id (str (:id gist)
                                            (name file-id))})
                           files))))))

(defn extract-gists [query state merge-cb {:keys [body]}]
  (merge-cb (deep-merge (om/tree->db (om/get-query Gists)
                                     {:gist/list
                                      (into
                                       []
                                       (doall (map (fn [gist]
                                                     (grab-and-merge-file merge-cb state (:id gist))
                                                     (rename-gist-keys gist))
                                                   body)))}
                                     true
                                     )
                        @state)))

(defonce r (om/reconciler
            {:state state
             :parser p
             :remotes [:gist/list]
             :send (fn [{:keys [:gist/list]} cb]
                     (go (take! (http/get (str base-url "/gist/list"))
                                (partial extract-gists
                                         list state cb))))}))

(defmethod read :gist/list
  [{:keys [state] :as env} k _]
  {:value (or (om/db->tree (om/get-query Gist)
                        (:gist/list @state)
                        @state
                        )
              [])
   :gist/list true})

(defmethod read :default
  [{:keys [state] :as env} k _]
  {:value (get @state k)})

(defcard-om-next gists-card
  Gists
  r)

(defcard results
  eval-results)

(defonce root (atom nil))

(defn init []
  #_(swap! state assoc :ui/react-key @refresh-key)
  #_(if (nil? @root)
    (reset! root Gists)
    (.forceUpdate (om/app-root r))))

;;fix parsing of multiple files in gist











































(defn containing-symbols [utterance bias-dictionary]
  (->> (.split utterance " ")
       (filter (fn [word]
                 (get bias-dictionary (.toLowerCase word))))
       (map bias-dictionary)))

(def open-symbol-bias
  {"paren" "paren"
   "parens" "paren"
   "theron" "paren"
   "pairings" "paren"
   "settings" "paren"
   "fairings" "paren"
   "currents" "paren"
   "parenthesis" "paren"
   "parentheses" "paren"
   "brace" "brace"
   "braces" "brace"
   "bracket" "bracket"
   "brackets" "bracket"})

(def symbol-name-to-symbol
  {"paren" "("
   "brace" "{"
   "bracket" "["})

(def open-symbol-matcher
  {:predicates [(fn [utterance]
                  (.startsWith (.toLowerCase utterance) "open"))
                (fn [utterance]
                  (not (empty? (containing-symbols utterance open-symbol-bias))))]
   :actions-fn (fn [utterance _]
                (->> (containing-symbols utterance open-symbol-bias)
                     (map symbol-name-to-symbol)
                     (map (fn [symbol]
                            {:action/type :action/open-symbol
                             :action/value symbol}))))})

(defn utter
  ([utterances] (utter utterances {}))
  ([utterances _]
   (map (fn [utterance]
             (if (every? true?
                         (map (fn [pred] (pred utterance))
                              (:predicates open-symbol-matcher)))
               ((:actions-fn open-symbol-matcher) utterance)
               [{:action/type :action/typing
                 :action/value utterance}]))
           utterances)
   ;;aantal mutations committen na debounce
   ;;welke mutations horen bij gesprek
   ;;append de is finals
   ;;geef user keuze
   ;;elke isfinal meerdere keuzes, scoring bepaalt welke keuze gemaakt wordt
   ;;default keuze na timer of nieuwe utterance
   ))

(defui InterpretationOption
  static om/IQuery
  (query [this] [:text :actions :result])
  Object
  (render [this]
          (dom/div nil "bla")))

(def new-utterances (chan))

(defonce recognizer (js/webkitSpeechRecognition.))

(def recognizer-config
  {"continuous" true
   "interimResults" true
   "lang" "en-US"
   "maxAlternatives" 4
   "onresult"
   (fn [res]
     (let [results (gobj/get res "results")
           last-translation (gobj/get results (dec (gobj/get results "length")))]
       (put! new-utterances
             {:index (gobj/get res "resultIndex")
              :is-final (gobj/get last-translation "isFinal")
              :alternatives (-> last-translation
                                (gobj/filter (fn [_ k t] (.hasOwnProperty t k)))
                                (gobj/map (fn [v] (.-transcript v)))
                                js->clj
                                vals)
              :at (.getTime (js/Date.))
              })))
   "onerror"
   (fn [res]
     (js/console.log res "error" "nomatch" )
     )
   "onnomatch"
   (fn [res]
     (js/console.log res "nomatch" (js/Date.))
     )
   "onend"
   (fn [res]
     (js/console.log res "end" (js/Date.)))
   "onsoundstart"
   (fn [res]
     (swap! state assoc :last {})
     (js/console.log res "soundstart" (js/Date.)))
   })

(doall (map (fn [[k v]] (gobj/set recognizer k v)) recognizer-config))

(def utterance-recording [])

(def utterances-taker
  (go-loop []
    (when-let [utterance (<! new-utterances)]
      #_(def utterance-recording (conj utterance-recording utterance))
      (utter utterance)
      (swap! state update-in [:last (:index utterance)] (fn [] utterance))
      (recur))))

(defn utterance-part [[index {:keys [is-final alternatives]}]]
  (dom/span #js {:key index
                 :style #js {:color (if is-final
                                      "black"
                                      "gray")}}
            (dom/span nil (first alternatives))))

(defn start []
  (.start recognizer))


(defn replicate-interval-sending [sequence send-fn]
  (reduce (fn [current-utterance next-utterance]
            (let [period-from-start (or (:period-from-start current-utterance)
                                        (let []
                                          (send-fn current-utterance)
                                          0))
                  period-between (- (:at next-utterance)
                                    (:at current-utterance))]
              (js/setTimeout (fn [] (send-fn (dissoc next-utterance :period-from-start)))
                             period-from-start)
              (merge {:period-from-start (+ period-from-start
                                            period-between)}
                     next-utterance)))
          sequence))

#_(let []
  (swap! state assoc :last {})
  (replicate-interval-sending (:recognized-sequence def-recognizer)
                              #(put! new-utterances %)
                              #_(swap! state update-in [:last (:index %)] (fn [] %))))

(defmethod read :last
  [{:keys [state ast]} k _]
  {:value (get @state k "")})

(defmethod read :interaction/options
  [{:keys [state]} k _]
  {:value []})


(defui ^:once SpeechInteraction
  static om/IQuery
  (query [props]
         '[:last :interaction/options])
  Object
  (render [this]
          (let [{:keys [last interaction/options gist/list]} (om/props this)]
            (dom/span nil
                      [(if (not (empty? last))
                         (dom/span #js {:key "last"} "I heard you say:"
                                   (dom/br nil)
                                   (map utterance-part
                                        last))
                         (dom/p #js {:key "start talking"}
                                "Press the button and start talking to me!"))
                       (dom/button #js {:onClick start
                                        :key "button"}
                                   "Talk to me")]))))
