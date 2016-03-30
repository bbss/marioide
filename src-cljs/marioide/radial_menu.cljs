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
                   (* 5 diameter))
        delta-y (+ (* fly-out-radius y)
                   (* 5 diameter))]
    [(spring delta-x) (spring delta-y)])
  )
(def cljs-logo-svg "<svg class=\"cljs-logo\" width=\"50px\" height=\"50px\" style=\"float: right; display: inline-block; position:relative; right: 0px;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 428 428\" enable-background=\"new 0 0 428 428\" xml:space=\"preserve\">\n<circle fill=\"#fff\" cx=\"213\" cy=\"214\" r=\"213\"></circle>\n<g>\n<path fill=\"#96CA4B\" d=\"M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z\"></path>\n<path fill=\"#96CA4B\" d=\"M194.4,265.1h-17.8V147.3h17.8V265.1z\"></path>\n<path fill=\"#5F7FBF\" d=\"M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z\"></path>\n<path fill=\"#5F7FBF\" d=\"M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z\"></path>\n</g>\n<path fill=\"#96CA4B\" stroke=\"#96CA4B\" stroke-width=\"6\" stroke-miterlimit=\"10\" d=\"M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z\"></path>\n<path fill=\"#5F7FBF\" stroke=\"#5F7FBF\" stroke-width=\"6\" stroke-miterlimit=\"10\" d=\"M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z\"></path>\n</svg>")

(declare radial-button-menu)
(defui RadialButtonMenu
  static om/IQuery
  (query [this]
    '[{:main-menu-item [:db/id :icon {:sub-menu-item/list ...}]}])
  Object
  (initLocalState [this]
    {:expanded true})
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
          child-diameter (/ diameter 1.5)
          [x y] (if visible end-position start-position)
          expanded (:expanded (om/get-state this))
          ]
      (dom/div (clj->js {:style {:position "absolute"}})
               [(map-indexed
                  (fn [index props]
                    (radial-button-menu
                      (om/computed
                        props
                        {:visible                 expanded
                         :toggle-expanded         toggle-expanded
                         :depth                   (inc depth)
                         :start-direction-degrees 0
                         :max-fan-angle-degrees   90
                         :fly-out-radius          (/ fly-out-radius 2)
                         :start-position          [(spring (+ diameter (* child-diameter 3.2)))
                                                   (spring (+ diameter (* child-diameter 3.2)))
                                                   ]
                         :end-position            (end-positions
                                                    index
                                                    child-diameter
                                                    start-direction-degrees
                                                    (/ max-fan-angle-degrees (dec (count list)))
                                                    fly-out-radius)
                         :diameter                child-diameter})))
                  list)
                (motion #js {:top  y
                             :left x}
                        (fn [res]
                          (dom/a (clj->js {:style                   {:position         "absolute"
                                                                     :WebkitUserSelect "none"
                                                                     :top              (aget res "top")
                                                                     :left             (aget res "left")
                                                                     :width            diameter
                                                                     :height           diameter
                                                                     :borderRadius     (/ diameter 2)
                                                                     :display          "flex"
                                                                     :justifyContent   "center"
                                                                     :alignItems       "center"}
                                           :dangerouslySetInnerHTML {:__html cljs-logo-svg}
                                           :onMouseDown             (fn [e]
                                                                      (.preventDefault e)
                                                                      (.stopPropagation e)
                                                                      (toggle-expanded this))})
                                 )))]))))

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
                                                        :db/id 1}
                                                       {:db/id 2
                                                        :icon  "c2"}
                                                       {:db/id 3
                                                        :icon  "c3"}]}}
                (db->tree (om/get-query RadialButtonMenu)
                          radial-menu-db radial-menu-db))))


(defn toggle-local-state-key [key]
  (fn [cmp] (om/update-state! cmp update key
                              (fn [toggled] (not toggled)))))

(defcard radial-button-menu-card
         (fn [st]
           (dom/div (clj->js {:style {:height 350}})
                    (radial-button-menu
                      (om/computed (:main-menu-item @st)
                                   {:toggle-expanded         (toggle-local-state-key :expanded)
                                    :visible                 false
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





