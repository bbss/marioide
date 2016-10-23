(ns speech.fixtures.definition)

(def def-recognizer
  {:i-said "open parens def recognizer"
   :want-to {:action-type :typing
             :value "'(def recognizer)"}
   :recognized-sequence
   [{:index 0 :is-final false :alternatives '("open") :at 1477129402336}
    {:index 0 :is-final false :alternatives '("okay") :at 1477129402343}
    {:index 0 :is-final false :alternatives '("open") :at 1477129402748}
    {:index 0
     :is-final false
     :alternatives '("open the")
     :at 1477129403053}
    {:index 0 :is-final false :alternatives '(" the") :at 1477129403076}
    {:index 0
     :is-final false
     :alternatives '(" their")
     :at 1477129403319}
    {:index 0
     :is-final false
     :alternatives '(" Theron")
     :at 1477129403461}
    {:index 0
     :is-final false
     :alternatives '(" Pairings")
     :at 1477129403550}
    {:index 0
     :is-final true
     :alternatives
     '("Open Pairings" "open Theron" "open settings" "open fairings")
     :at 1477129403996}
    {:index 1 :is-final false :alternatives '(" the") :at 1477129404412}
    {:index 1
     :is-final false
     :alternatives '(" death")
     :at 1477129404579}
    {:index 1
     :is-final false
     :alternatives '(" best")
     :at 1477129404636}
    {:index 1
     :is-final false
     :alternatives '(" Destin")
     :at 1477129404940}
    {:index 1
     :is-final false
     :alternatives '(" that's right")
     :at 1477129404960}
    {:index 1
     :is-final false
     :alternatives '(" best Wrecker")
     :at 1477129405307}
    {:index 1
     :is-final false
     :alternatives '(" best record")
     :at 1477129405315}
    {:index 1
     :is-final false
     :alternatives '(" death records")
     :at 1477129405352}
    {:index 1
     :is-final false
     :alternatives '(" best record my")
     :at 1477129405392}
    {:index 1
     :is-final false
     :alternatives '(" best recognize")
     :at 1477129405399}
    {:index 1
     :is-final false
     :alternatives '(" best recognizer")
     :at 1477129405638}
    {:index 1
     :is-final false
     :alternatives '(" recognizer")
     :at 1477129405927}
    {:index 1
     :is-final false
     :alternatives '(" best recognizer")
     :at 1477129406239}
    {:index 1
     :is-final true
     :alternatives
     '(" best recognizer"
      " deaths recognizer"
      " that's recognizer"
      " desks recognizer")
     :at 1477129408001}]})
