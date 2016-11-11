(ns marioide.clj.core
  (:require [yada.yada :as yada :refer [yada]]
            [bidi.bidi :as bidi]
            [bidi.ring :refer [redirect]]
            [bidi.vhosts :refer [vhosts-model]]
            [yada.oauth :as oauth]
            [alandipert.enduro :as e]
            [clojure.string :as str]
            [buddy.core.hash :as hash]
            [clj-http.client :as client]
            [clojure.pprint :refer [pprint]]
            [environ.core :refer [env]]
            [tentacles.gists :as gists]
            [tentacles.users :as users]
            [manifold.deferred :as d]))

(def produced-types
  #{"application/transit+json"
                                        ;"application/transit+msgpack"
    "application/json"
    "application/edn"
    "text/html"})


(def consumed-types
  #{"application/transit+json"
                                        ;"application/transit+msgpack"
    "application/json"
    "application/edn"})

(def state (e/file-atom {} "/tmp/marioide.clj" :pending-dir "/tmp"))

(defn get-token [{:keys [id]}]
  (:at (first (filter (comp  (partial = id) :id) (:users @state)))))

(defn build-routes []
  (try ["" [["/api"
             [
              ["" (yada/redirect ::index)]
              ["/" (yada/redirect ::index)]
              ["/index.html" (-> (yada/resource
                                  {:methods {:get {:response (fn [ctx] "sup doge")
                                                   :produces {:media-type "text/plain"}}}})
                                 (assoc :id ::index))]
              ["/oauth2" (let [github-client-id (env :gh-client-id)
                               github-client-secret (env :gh-client-secret)
                               secret (hash/sha256 "bla")]
                           [["/login"
                             (yada/resource
                              {:produces "text/plain"
                               :response (fn [ctx]
                                           (if-let [uri (:href (yada/uri-for ctx ::initiate-github))]
                                             (assoc (:response ctx)
                                                    :status 302
                                                    :headers {"location" uri})
                                             (println "no uri")))})]
                            ["/initiate-github" (oauth/oauth2-initiate-resource
                                                 {:id ::initiate-github
                                                  :type :github
                                                  :client-id github-client-id
                                                  :redirect-uri ::github-oauth-callback
                                                  :secret secret
                                                  :target-uri ::cards
                                                  :authorization-uri "https://github.com/login/oauth/authorize"
                                                  :scope (str/join "," ["user:email" "gist"])})]

                            ["/callback-github"
                             (oauth/oauth2-callback-resource-github
                              {:id ::github-oauth-callback
                               :client-id github-client-id
                               :client-secret github-client-secret
                               :user-agent "yada"
                               :secret secret
                               :access-token-url "https://github.com/login/oauth/access_token"
                               :access-token-handler (fn [at]
                                                       (d/let-flow [email (->>
                                                                           (users/emails {:oauth-token at})
                                                                           (filter :verified)
                                                                           (map :email)
                                                                           first)
                                                                    name (:name (users/me {:oauth-token at}))]
                                                         (e/swap! state update :users (fn [users]
                                                                                        (conj users {:id email
                                                                                                     :name name
                                                                                                     :at at})))
                                                         {:id email
                                                          :name name}))})]
                            ["/gist"
                             [["" (-> (yada/resource
                                       {:methods {:get {:response
                                                        (fn [ctx] (def posted ctx)
                                                                    (if-let [user (-> ctx :authentication (get "default"))]
                                                                      "ok" #_(gists/gists {:oauth-token (get-token user)})
                                                                      "unauthed"))
                                                        :produces {:media-type produced-types}}
                                                  :post {:response (fn [ctx] (def posted ctx)
                                                                     true)
                                                        :produces {:media-type produced-types}}}})
                                      (assoc :id ::index))]
                              ["/list"
                               (yada/resource
                                {:id ::welcome

                                 :access-control
                                 {:authentication-schemes [{:scheme :oauth2 :yada.oauth2/secret secret}]}

                                 :methods
                                 {:get {:produces produced-types
                                        :response (fn [ctx]
                                                    (if-let [user (-> ctx :authentication (get "default"))]
                                                      (gists/gists {:oauth-token (get-token user)})
                                                      "unauthed"))}}})]]]])]]]
            ["/cards.html" (-> (yada (clojure.java.io/file "resources/public/cards.html"))
                               (assoc :id ::cards))]
            ["/" (yada.resources.file-resource/new-directory-resource
                  (clojure.java.io/file "resources/public") {})]]]
       (catch Throwable e
         (println e))))

(declare svr)

(defn restart []
  ((:close svr))
  (def svr
    (yada/listener (vhosts-model
                    [{:scheme :http :host "localhost:3000"}
                     (build-routes)])
                   {:port 3000})))
