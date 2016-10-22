(ns speech.core
  (:require
   [sablono.core :as sab :include-macros true]
   [goog.object :as gobj]
   [om.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [devcards-om-next.core :refer-macros [defcard-om-next om-next-root]]
   [cljs.core.match :refer-macros [match]]
   [cljs.core.async :refer [chan put! timeout take! <! >!]]
   [clojure.string :refer [includes? replace-first]]
   [dirac.runtime]
   [devtools.core :as devtools])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.core :as dc :refer [defcard deftest]]))

(devtools/install! [:formatters :hints :async])
(dirac.runtime/install!)

(enable-console-print!)

(defonce state
  (atom {}))

(defn prr [thing] (js/console.log thing))

(def new-utterances (chan))

(defonce recognizer (js/webkitSpeechRecognition.))

(def recognizer-config
  {"continuous" true
   "interimResults" true
   "lang" "en-US"
   "maxAlternatives" 4
   "onresult"
   (fn [res]
     (prr res)
     (gobj/forEach
      (gobj/get res "results")
      (fn [v k o]
        (when (.hasOwnProperty o k)
          (put! new-utterances
                {:index (gobj/get res "resultIndex")
                 :is-final (gobj/get (gobj/get o k) "isFinal")
                 :alternatives (-> v
                                   (gobj/filter (fn [_ k t] (.hasOwnProperty t k)))
                                   (gobj/map (fn [v] (.-transcript v)))
                                   js->clj
                                   vals)
                 })))))
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
     (js/console.log res "soundstart" (js/Date.)))
   })

(doall (map (fn [[k v]] (gobj/set recognizer k v)) recognizer-config))

(defn start []
  (.start recognizer))

(defmulti read om/dispatch)

(defmethod read :last
  [{:keys [state]} k _]
  {:value (get @state k "")})

(def p (om/parser {:read read}))

(defonce r (om/reconciler
            {:parser p
             :state state
             }))

(def utterances-taker
  (go-loop []
    (when-let [utterance (<! new-utterances)]
      (prr utterance)
      (swap! state assoc :last utterance)
      (recur))))

(defui ^:once SpeechInteraction
  static om/IQuery
  (query [props]
         '[:last])
  Object
  (render [this]
          (let [{:keys [last]} (om/props this)]
            (dom/span nil
                      [#_(if (not (empty? last))
                         (dom/span #js {:key "last"} "I heard you say:" (dom/h2 nil last))
                         (dom/p #js {:key "start talking"} "Press the button and start talking to me!"))
                       (dom/button #js {:onClick start
                                        :key "button"}
                                   "Talk to me")]))))



(defn utter
  ([utterance] (utter utterance {}))
  ([utterance {:keys [mode/type]}]
   ))

(utter "open paren")

(utter "type defn")

(utter "open vector")

(utter ["open parent"
        "open paren"])

(defcard-om-next speech-interaction-card
  SpeechInteraction
  r)

(defonce root (atom nil))

(defn init []
  (if (nil? @root)
    (let [target (js/document.getElementById "com-rigsomelight-devcards-main")]
      (om/add-root! r SpeechInteraction target)
      (reset! root SpeechInteraction))
    (.forceUpdate (om/app-root r))))

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
