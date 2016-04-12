(ns marioide.core
  (:require
    marioide.radial-menu
    marioide.devcards.forms
    cljsjs.react
    [sablono.core :as sab :refer-macros [html]]
    [replumb.core :as replumb]
    [marioide.parinfer.core :refer [attach-editor! editor-state
                                    current-selection cm-selection-or-form]]
    [om.next :as om :refer-macros [defui]]
    [marioide.replumb.core :refer [eval]]
    [marioide.console :refer [res-atom]]
    [marioide.forms :refer [forms-db Forms]]
    [marioide.radial-menu :refer [radial-menu-db]]
    [untangled.client.core :as uc]
    )
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node mkdn-pprint-source
                                  defcard-doc]]))

(enable-console-print!)

(defn on-app-started [app]
  (let [reconciler (:reconciler app)
        state (om/app-state reconciler)
        ]
    (when-let [cljs-logo (js/document.querySelector ".cljs-logo")]
      (set! (.-innerHTML (.-parentNode cljs-logo)) ""))
    ))

(defonce app (atom (uc/new-untangled-client
                     :initial-state {:main-menu-item [:db/id 0]
                                     :db/id          {0 {:db/id              0
                                                         :sub-menu-item/list [[:db/id 1]
                                                                              [:db/id 3]]}
                                                      1 {:db/id  1
                                                         :action #((eval (current-selection)))
                                                         }
                                                      3 {:db/id  3
                                                         :action #((fn [] .webkitRequestFullscreen (.-documentElement js/document)))
                                                         }}}
                     :started-callback on-app-started)))

(defcard app-card
         (dc/dom-node
           (fn [state-atom node]
             (when (js/document.querySelector ".cljs-logo")
               (set! (.-innerHTML (.-parentNode (js/document.querySelector ".cljs-logo"))) ""))
             (set! (.. node -innerHTML) "")
             (defonce ap (atom (uc/new-untangled-client :initial-state @state-atom)))
             (reset! ap (uc/mount @ap Forms node))))
         (om/db->tree (om/get-query Forms)
                      (merge forms-db radial-menu-db)
                      (merge forms-db radial-menu-db))
         {:inspect-data true
          :history      true})

(defcard-doc
  (dc/mkdn-pprint-source Forms))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))


(main)

