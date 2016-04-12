(ns marioide.forms
  (:require [marioide.parinfer.core :refer [create-editor! start-editor-sync!]]
            [marioide.radial-menu :refer [radial-button-menu radial-menu-db
                                          RadialButtonMenu
                                          RadialMenu toggle-local-state-key]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [untangled.client.mutations :as m]
            [untangled.client.core :as uc]
            [marioide.replumb.core :refer [eval]]
            )
  (:require-macros [devcards.core :as dc :refer [defcard-doc]])
  )

(defn create-codemirror! [comp id]
  (let [textarea (.createElement js/document "textarea")
        _ (.appendChild (dom/node comp) textarea)
        cm (create-editor! textarea id id {:mode "clojure-parinfer"
                                           :eval eval})]
    (start-editor-sync!)
    cm))

(defmethod m/mutate 'form/add-codemirror
  [{:keys [state ast]} key {:keys [id codemirror] :as params}]
  {:action
   #(swap! state update-in
           [:form/by-id id :form/codemirror] (fn [] codemirror))})

(defui Form
       static om/Ident
       (ident [this {:keys [:db/id]}]
              [:form/by-id id])
       static om/IQuery
       (query [this]
              '[:db/id :form/content :form/codemirror])
       Object
       (componentDidMount [this]
                          (let [{:keys [form/content form/codemirror db/id]} (om/props this)
                                next-codemirror (or codemirror (create-codemirror! this id))]
                            (when (not codemirror)
                              (om/transact! this `[(form/add-codemirror
                                                     {:id ~id :codemirror ~next-codemirror})
                                                   [:form/by-id ~id]]))
                            (print "formmount" next-codemirror)
                            (.appendChild
                              (dom/node this)
                              (.getWrapperElement next-codemirror))
                            (.setValue next-codemirror content)))


       (shouldComponentUpdate [this next-props next-state]
                              (let [{:keys [form/codemirror]} (om/props this)]
                                (when codemirror
                                  (.appendChild
                                    (dom/node this)
                                    (.getWrapperElement codemirror)))
                                false))
       (render [this]
               (let [{:keys [db/id]} (om/props this)]
                 (dom/div (clj->js {:key   id
                                    :style {:padding   "1rem"
                                            :margin    "2rem"
                                            :width     "fit-content"
                                            :boxShadow "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"}})))))

(def form (om/factory Form {:keyfn :db/id}))

(defui ^:once Forms
       static om/IQuery
       (query [this]
              `[:ui/react-key
                {:forms ~(om/get-query Form)}
                {:main-menu-item ~(om/get-query RadialButtonMenu)}])
       Object
       (render [this]
               (let [{:keys [ui/react-key forms main-menu-item]} (om/props this)]
                 (dom/div
                   (clj->js {:key react-key})
                   [(dom/div (clj->js {:key "forms"
                                       :style {:position "relative"
                                               :float    "right"
                                               :zIndex   10
                                               :right    "50px"}})
                             (map (fn [item]
                                    (radial-button-menu (om/computed
                                                          item
                                                          {:toggle-expanded         (toggle-local-state-key :expanded)
                                                           :depth                   0
                                                           :visible                 false
                                                           :start-direction-degrees 90
                                                           :max-fan-angle-degrees   90
                                                           :fly-out-radius          120
                                                           :start-position          [0 0]
                                                           :end-position            [0 0]
                                                           :diameter                50})))
                                  main-menu-item))
                    (map form forms)]))))

(def forms (om/factory Forms))

(def forms-db {:forms      [[:form/by-id 0] [:form/by-id 1]]
               :form/by-id {0 {:db/id        0
                               :form/content "((adder 1) 2)"}
                            1 {:db/id        1
                               :form/content "(defn adder [num] (fn [sec] (+ num sec)))"}}})

