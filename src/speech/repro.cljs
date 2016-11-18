(ns speech.repro)

;; (defui B
;;   static om/IQueryParams
;;   (params [this]
;;           {:b-id ""
;;            :a-id ""})
;;   static om/IQuery
;;   (query [this]
;;          '[(:some-prop {:b-id ?b-id :a-id ?a-id})]))

;; (defui A
;;   static om/IQueryParams
;;   (params [this]
;;           {:b (om/get-query B)})
;;   static om/IQuery
;;   (query [this]
;;          '[:id {:b/list ?b}]))

;; (defui Root
;;   static om/IQuery
;;   (query [this]
;;          [{:a/list (om/get-query A)}]))

;; (def st (atom {}))

;; (defmulti rea om/dispatch)
;; (defmethod rea :some-prop [_ _ _])

;; (def par (om/parser {:read rea}))
;; (def rec (om/reconciler {:state st
;;                          :parser pa}))
