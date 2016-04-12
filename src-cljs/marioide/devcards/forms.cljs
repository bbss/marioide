(ns marioide.devcards.forms
  (:require
    [marioide.forms :refer [Form Forms forms-db]]
    [marioide.radial-menu :refer [radial-menu-db]]
    [untangled.client.core :as uc]
    [om.next :as om]
    [om.dom :as dom]
    )
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node defcard-doc]]
    ))


(defcard forms-card
         (dc/dom-node
           (fn [state-atom node]
             (when-let [cljs-logo (js/document.querySelector ".cljs-logo")]
               (set! (.-innerHTML (.-parentNode cljs-logo)) ""))
             (defonce ap (atom (uc/new-untangled-client
                                 :initial-state
                                 @state-atom)))
             (uc/mount @ap Forms node)
             ))
         (om/db->tree (om/get-query Forms)
                      (merge forms-db radial-menu-db) (merge forms-db radial-menu-db))
         {:inspect-data true
          :history      true})


(defcard-doc "###form component"
             (dc/mkdn-pprint-source Form))

(defcard-doc "###forms component"
             (dc/mkdn-pprint-source Forms))

(defcard-doc "###forms database format"
             (dc/mkdn-pprint-source forms-db))
