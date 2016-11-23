(defproject speech "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [devcards "0.2.2"]
                 [sablono "0.7.4"]
                 [org.omcljs/om "1.0.0-alpha47"]
                 [org.clojure/core.async "0.2.395"]
                 [binaryage/dirac "0.7.2"]
                 [binaryage/devtools "0.8.2"]
                 [alandipert/enduro "1.2.0"]

                 [org.clojure/core.match "0.3.0-alpha4"]
                 [cljsjs/codemirror "5.19.0-0"]
                 [replumb "0.2.4"]
                 [parinfer-cljs "1.5.1-0"]
                 [cljs-react-material-ui "0.2.30"]

                 [cljsjs/react "15.3.1-0"]
                 [cljsjs/react-dom "15.3.1-0"]
                 [devcards-om-next "0.3.0"]

                 [yada "1.1.35"]
                 [aleph "0.4.2-alpha8"]
                 [manifold "0.1.5"]
                 [bidi "2.0.10"]
                 [clj-http "3.3.0"]
                 [environ "1.1.0"]
                 [tentacles "0.5.1"]
                 [cljs-http "0.1.42"]
                 [alandipert/enduro "1.2.0"]
                 ]

  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.4" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "speech.core/fig-reload"
                                   :devcards true}
                        :compiler { :main       "speech.core"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/speech_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "speech.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/speech.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "speech.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/speech.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] }

  :profiles {:dev {:dependencies [[binaryage/devtools "0.8.2"]
                                  [figwheel-sidecar "0.5.8"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {; for nREPL dev you really need to limit output
                                  :init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
