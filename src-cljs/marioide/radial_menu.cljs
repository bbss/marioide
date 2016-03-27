(ns marioide.radial-menu
  (:require
    [sablono.core :as sab :refer-macros [html]]
    [om.next :as om :refer [db->tree] :refer-macros [defui]]
    [om.dom :as dom]
    [cljsjs.react-motion]
    )
  (:require-macros
    [cljs.test :refer [is]]
    [devcards.core :as dc :refer [defcard deftest dom-node]]
    ))

(defn deg->rad [deg] (* deg 0.0174533))

(declare radial-menu-button)

(def motion-factory (React.createFactory js/ReactMotion.Motion))
(def spring js/ReactMotion.spring)

(defn motion [style children] (motion-factory #js {:style    style
                                                   :children children}))

(defn end-positions [index diameter base-angle separation-angle fly-out-radius]
  (let [angle (+ base-angle (* separation-angle index))
        in-radians (deg->rad angle)
        x (js/Math.cos in-radians)
        y (js/Math.sin in-radians)
        delta-x (+ (* fly-out-radius x)
                   (/ diameter 2))
        delta-y (+ (* fly-out-radius y)
                   (/ diameter 2))]
    [(spring delta-x) (spring delta-y)])
  )

(defui RadialButtonMenu
  static om/IQuery
  (query [this]
    '[{:main-menu-item [:db/id :icon {:sub-menu-item/list ...}]}])
  Object
  (initLocalState [this]
    {:expanded false})
  (render [this]
    (let [{:keys [toggle-expanded
                  start-direction-degrees
                  max-fan-angle-degrees
                  fly-out-radius
                  start-position
                  end-position
                  diameter
                  depth
                  visible]} (om/get-computed this)
          {:keys [sub-menu-item/list icon]} (om/props this)
          child-diameter (/ diameter 2)
          [x y] (if visible end-position start-position)
          expanded (:expanded (om/get-state this))
          ]
      (motion #js {:top  y
                   :left x}
              (fn [res]
                (dom/div (clj->js {:style   {:position         "absolute"
                                             :zIndex           (when (not visible) -1)
                                             :WebkitUserSelect "none"
                                             :backgroundColor  "#39ef90"
                                             :top              (aget res "top")
                                             :left             (aget res "left")
                                             :width            diameter
                                             :height           diameter
                                             :borderRadius     (/ diameter 2)
                                             :display          "flex"
                                             :justifyContent   "center"
                                             :alignItems       "center"}
                                   :onClick (fn [e]
                                              (.preventDefault e)
                                              (.stopPropagation e)
                                              (toggle-expanded this))})
                         (conj
                           (map-indexed
                             (fn [index props]
                               (radial-button-menu
                                 (om/computed
                                   props
                                   {:visible                 expanded
                                    :toggle-expanded         toggle-expanded
                                    :start-direction-degrees 0
                                    :max-fan-angle-degrees   90
                                    :fly-out-radius          (/ fly-out-radius 2)
                                    :start-position          [(spring (- diameter child-diameter))
                                                              (spring (- diameter child-diameter))]
                                    :end-position            (end-positions
                                                               index
                                                               child-diameter
                                                               start-direction-degrees
                                                               (/ max-fan-angle-degrees (dec (count list)))
                                                               fly-out-radius)
                                    :diameter                child-diameter})))
                             list)
                           icon)))))))

(def radial-button-menu (om/factory RadialButtonMenu {:keyfn :db/id}))

(def radial-menu-db {:main-menu-item [:db/id 0]
                     :db/id          {0 {:db/id              0
                                         :icon               "p"
                                         :sub-menu-item/list [[:db/id 1]
                                                              [:db/id 2]
                                                              [:db/id 3]]}
                                      1 {:db/id 1
                                         :icon  "c"}
                                      2 {:db/id 2
                                         :icon  "c2"}
                                      3 {:db/id 3
                                         :icon  "c3"}}})

(deftest radial-menu-query
         (is (= {:main-menu-item {:icon               "p"
                                  :db/id              0
                                  :sub-menu-item/list [{:icon  "c"
                                                        :db/id 1}]}}
                (db->tree (om/get-query RadialButtonMenu)
                          radial-menu-db radial-menu-db))))


(defn toggle-local-state-key [key]
  (fn [cmp] (om/update-state! cmp update key
                              (fn [toggled] (not toggled)))))


(defcard radial-button-menu
         (fn [st]
           (dom/div (clj->js {:style {:height 350}})
                    (radial-button-menu
                      (om/computed (:main-menu-item @st)
                                   {:toggle-expanded         (toggle-local-state-key :expanded)
                                    :visible                 true
                                    :start-direction-degrees 90
                                    :max-fan-angle-degrees   90
                                    :fly-out-radius          120
                                    :start-position          [150 150]
                                    :end-position            [150 150]
                                    :diameter                50}))))
         (db->tree (om/get-query RadialButtonMenu)
                   radial-menu-db radial-menu-db)
         {:inspect-data true
          :history      true})





