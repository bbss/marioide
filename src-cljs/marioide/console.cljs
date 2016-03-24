(ns marioide.console)

(def res-atom (atom {}))

(defn create-div-with-text [text]
  (let [div (.createElement js/document "div")]
    (set! (.-innerHTML div) text)
    div))

;timer to test css

(defn notification
  ([text] (notification text 3000))
  ([text timeout]
   (let [element (create-div-with-text text)
         _ (.setAttribute element "class" "notification")]
     (.appendChild js/document.body element)
     (js/setTimeout #(.remove element) timeout)
     )))

(defn write-return! [res]
  (notification res)
  (swap! res-atom assoc :success res))

(defn write-exception! [res]
  (notification res 5000)
  (swap! res-atom assoc :exception res))
