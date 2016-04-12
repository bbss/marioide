(defproject marioide "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.34"]
                 [devcards "0.2.1-6"]
                 [sablono "0.5.3"]

                 ;; need to specify this for sablono
                 ;; when not using devcards
                 [cljsjs/react-with-addons "0.14.3-0"]
                 [cljsjs/react-dom "0.14.3-1"]
                 [cljsjs/react-dom-server "0.14.3-0"]

                 [org.omcljs/om "1.0.0-alpha31"]
                 [figwheel-sidecar "0.5.0-6" :exclusions [org.clojure/core.cache]]

                 [parinfer-cljs "1.5.1-0"]
                 [parinfer "1.4.0-0"]
                 [replumb "0.2.2-SNAPSHOT"]
                 [cljsjs/react-motion "0.4.1-1"]
                 [cljsjs/hammer "2.0.4-5"]
                 [cljsjs/react-mdl "1.4.3-0"]


                 [navis/untangled-client "0.4.6"]
                 [navis/untangled-server "0.4.5" :exclusions [io.aviso/pretty org.clojure/clojurescript]]
                 [navis/untangled-datomic "0.4.4" :exclusions [org.clojure/tools.cli]]
                 [com.datomic/datomic-free "0.9.5350"]
                 [secretary "1.2.3" :exclusions [com.cemerick/clojurescript.test]]

                 ]

  :plugins [[lein-environ "1.0.2"]
            [lein-cljsbuild "1.1.2" :exclusions [org.clojure/clojure]]
            ]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src-cljs"]
  :exclusions [cljsjs/react [cljsjs/react]]
  :cljsbuild {
              :builds [{:id           "devcards"
                        :source-paths ["src-cljs"]
                        :figwheel     {:devcards true}      ;; <- note this
                        :compiler     {:main                 "marioide.core"
                                       :asset-path           "js/compiled/devcards_out"
                                       :output-to            "resources/public/js/compiled/marioide_devcards.js"
                                       :output-dir           "resources/public/js/compiled/devcards_out"
                                       :recompile-dependents true
                                       :source-map-timestamp true}}
                       {:id           "dev"
                        :source-paths ["src-cljs"]
                        :figwheel     true
                        :compiler     {:main                 "marioide.core"
                                       :asset-path           "js/compiled/out"
                                       :output-to            "resources/public/js/compiled/marioide.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :source-map-timestamp true}}
                       {:id           "prod"
                        :source-paths ["src-cljs"]
                        :compiler     {:main          "marioide.core"
                                       :asset-path    "js/compiled/out"
                                       :output-to     "resources/public/js/compiled/marioide.js"
                                       :optimizations :advanced
                                       :externs       ["resources/public/codemirror/lib/closure-externs.js"
                                                       "resources/public/js/lib/scrollMonitor.externs.js"
                                                       "resources/public/js/lib/gears.d3.externs.js"
                                                       "resources/public/js/lib/d3.ext.js"
                                                       "resources/public/js/lib/jsdiff.externs.js"]}}]}

  :figwheel {
             :server-port 3123                              ;; default

             :css-dirs    ["resources/public/css"]})
