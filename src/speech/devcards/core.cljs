(ns speech.devcards.core
  (:require [devcards-om-next.core :refer-macros [#_defcard-om-next om-next-root]]
            [speech.core :refer [Gists r]]
            [speech.eval :refer [eval-results]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [devcards.core :as dc :refer [defcard defcard-om-next deftest dom-node]]))

(defcard-om-next gists-card
  Gists
  r)

(defcard results
  eval-results)
