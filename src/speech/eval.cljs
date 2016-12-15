(ns speech.eval
  (:require [replumb.core :as replumb]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]])
  (:import goog.net.XhrIo))

(defn fetch-file!
  [file-url src-cb]
  (try
    (.send XhrIo file-url
           (fn [e]
             (if (.isSuccess (.-target e))
               (src-cb (.. e -target getResponseText))
               (src-cb nil))))
    (catch :default e
      (src-cb nil))))

(def eval-results (atom {}))

(defn handle-result!
  [console result]
  (let [write-fn (if (replumb/success? result)
                   (juxt console.log
                         (fn [res] (swap! eval-results assoc-in [:results (js/performance.now)]
                                          {:status :eval-success
                                           :result res})
                           ))
                   (juxt console.error
                         (fn [res] (swap! eval-results assoc-in [:results (js/performance.now)]
                                          {:status :eval-fail
                                           :result res}))))]
    (write-fn (replumb/unwrap-result result))))

(defn eval [user-input ]
  (replumb/read-eval-call (merge (replumb/options :browser
                                                  ["/src/cljs" "/src/speech" "/js/compiled/out"]
                                                  fetch-file!)
                                 {:warning-as-error true
                                  :verbose false})
                          (partial handle-result! js/console)
                          user-input))

(defui ConsoleElement
  Object
  (render [this]
          (dom/div nil "console")))

(def console-element (om/factory ConsoleElement))
