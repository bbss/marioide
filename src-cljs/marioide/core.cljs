(ns marioide.core
  (:require
    marioide.radial-menu
    marioide.devcards.forms
    cljsjs.react
    cljsjs.react-mdl
    [sablono.core :as sab :refer-macros [html]]
    [replumb.core :as replumb]
    [marioide.parinfer.core :refer [attach-editor! editor-state
                                    current-selection cm-selection-or-form]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [marioide.replumb.core :refer [eval]]
    [marioide.console :refer [res-atom]]
    [untangled.client.core :as uc]
    [untangled.client.data-fetch :as df]
    )
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node mkdn-pprint-source
                                  defcard-doc]]))

(enable-console-print!)
(defcard
  editor
  (dom-node
    attach-editor!))

(defn on-app-started [app]
  (let [reconciler (:reconciler app)
        state (om/app-state reconciler)
        ]
    (when (js/document.querySelector ".cljs-logo")
      (set! (.-innerHTML (.-parentNode (js/document.querySelector ".cljs-logo"))) ""))
    #_(df/load-data reconciler (om/get-query RadialButtonMenu))
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



(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))


(main)

