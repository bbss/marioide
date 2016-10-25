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
   [devtools.core :as devtools]
   [speech.fixtures.definition :refer [def-recognizer]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.core :as dc :refer [defcard deftest]]))

(devtools/install! [:formatters :hints :async])
(dirac.runtime/install!)

(enable-console-print!)

(defonce state
  (atom {}))

(defn prr [& args] (js/console.log args))

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


(let []
  (swap! state assoc :last {})
  (replicate-interval-sending (:recognized-sequence def-recognizer)
                              #(swap! state update-in [:last (:index %)] (fn [] %))))


(defmulti read om/dispatch)

(defmethod read :last
  [{:keys [state]} k _]
  {:value (get @state k "")})

(def p (om/parser {:read read}))

(defonce r (om/reconciler
            {:parser p
             :state state
             }))

(def recognized-sequence [])

(def utterances-taker
  (go-loop []
    (when-let [utterance (<! new-utterances)]
      (def recognized-sequence (conj recognized-sequence utterance))
      (swap! state update-in [:last (:index utterance)] (fn [] utterance))
      (recur))))

(defn utterance-part [[index {:keys [is-final alternatives]}]]
  (dom/span #js {:key index
                 :style #js {:color (if is-final
                                      "black"
                                      "gray")}}
            (dom/span nil (first alternatives))))

#_(cljs.pprint/pprint recognized-sequence)

(defui ^:once SpeechInteraction
  static om/IQuery
  (query [props]
         '[:last])
  Object
  (render [this]
          (let [{:keys [last]} (om/props this)]
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
  ([utterance] (utter utterance {}))
  ([utterance _]
   (if (every? true?
               (map (fn [pred] (pred utterance))
                    (:predicates open-symbol-matcher)))
     ((:actions-fn open-symbol-matcher) utterance)
     [{:action/type :action/typing
       :action/value utterance}])
   ;;aantal mutations committen na debounce
   ;;welke mutations horen bij gesprek
   ;;append de is finals
   ;;geef user keuze
   ;;elke isfinal meerdere keuzes, scoring bepaalt welke keuze gemaakt wordt
   ;;default keuze na timer of nieuwe utterance
   ))

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
