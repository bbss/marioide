(ns marioide.replumb.core
  (:require
    [replumb.core :as replumb]
    [marioide.console :as console]
    )
  (:import goog.net.XhrIo)
  )


(defn fetch-file!
  "Very simple implementation of XMLHttpRequests that given a file path
  calls src-cb with the string fetched of nil in case of error.
  See doc at https://developers.google.com/closure/library/docs/xhrio"
  [file-url src-cb]
  (try
    (.send XhrIo file-url
           (fn [e]
             (if (.isSuccess (.-target e))
               (src-cb (.. e -target getResponseText))
               (src-cb nil))))
    (catch :default e
      (src-cb nil))))

(defn handle-result!
  [write-return! write-exception! result]
  (let [write-fn (if (replumb/success? result)
                   write-return!
                   write-exception!)]
    (write-fn (replumb/unwrap-result result))))

(defn eval [form]
  (let [repl-opts (merge (replumb/options :browser
                                          ["/src/cljs" "/js/compiled/out" "/js/compiled/devcards_out"]
                                          fetch-file!)
                         {:warning-as-error true
                          :verbose          true})]
    (replumb/read-eval-call
      repl-opts
      (partial handle-result!
               console/write-return!
               console/write-exception!)
      form)))




