(ns marioide.core
  (:require
    marioide.radial-menu
    [sablono.core :as sab :refer-macros [html]]
    [replumb.core :as replumb]
    [marioide.parinfer.core :refer [attach-editor! editor-state cm-selection-or-form]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [marioide.replumb.core :refer [eval]]
    [marioide.console :refer [res-atom]]
    )
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node]]))

(enable-console-print!)

(defcard
  editor
  (dom-node
    attach-editor!))



(defcard
  eval
  (html [:button {:style   {:width 200 :height 30}
                  :onClick #(let []
                             (eval (cm-selection-or-form (:cm (:editor @editor-state)))))
                  }
         "eval"]))

(defcard result res-atom)

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))


(main)

(js/setTimeout #(.setAttribute (js/document.querySelector "[enable-background]")
                 "onclick" "document.body.webkitRequestFullscreen()")
               3000)
