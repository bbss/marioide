// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.prefs');
goog.require('cljs.core');
dirac.runtime.prefs.known_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null);
dirac.runtime.prefs.default_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null);
dirac.runtime.prefs.feature_groups = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),dirac.runtime.prefs.known_features,new cljs.core.Keyword(null,"default","default",-1987822328),dirac.runtime.prefs.default_features], null);
dirac.runtime.prefs.reset_styles = "color:inherit;background-color:none;font-weight:normal;text-decoration:none;font-style:normal";
dirac.runtime.prefs.default_prefs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rich-text-ansi-style-46","rich-text-ansi-style-46",-506968896),new cljs.core.Keyword(null,"weasel-auto-reconnect","weasel-auto-reconnect",-1029132223),new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239),new cljs.core.Keyword(null,"rich-text-ansi-style-37","rich-text-ansi-style-37",-433097246),new cljs.core.Keyword(null,"rich-text-ansi-style-36","rich-text-ansi-style-36",-1084734845),new cljs.core.Keyword(null,"rich-text-ansi-style-43","rich-text-ansi-style-43",1322553123),new cljs.core.Keyword(null,"rich-text-ansi-style-35","rich-text-ansi-style-35",-920571933),new cljs.core.Keyword(null,"rich-text-ansi-style-47","rich-text-ansi-style-47",1487863940),new cljs.core.Keyword(null,"eval-time-limit","eval-time-limit",1470179717),new cljs.core.Keyword(null,"agent-verbose","agent-verbose",714204005),new cljs.core.Keyword(null,"rich-text-ansi-style-3","rich-text-ansi-style-3",-383061562),new cljs.core.Keyword(null,"agent-response-timeout","agent-response-timeout",-104323929),new cljs.core.Keyword(null,"rich-text-ansi-style-31","rich-text-ansi-style-31",321872041),new cljs.core.Keyword(null,"rich-text-ansi-style-45","rich-text-ansi-style-45",1191367657),new cljs.core.Keyword(null,"rich-text-ansi-style-40","rich-text-ansi-style-40",543706570),new cljs.core.Keyword(null,"context-availability-total-time-limit","context-availability-total-time-limit",1837238667),new cljs.core.Keyword(null,"rich-text-reset-style","rich-text-reset-style",433055243),new cljs.core.Keyword(null,"rich-text-ansi-style-29","rich-text-ansi-style-29",1577819789),new cljs.core.Keyword(null,"rich-text-ansi-style-1","rich-text-ansi-style-1",-1788624051),new cljs.core.Keyword(null,"rich-text-ansi-style-42","rich-text-ansi-style-42",-489322993),new cljs.core.Keyword(null,"rich-text-ansi-style-32","rich-text-ansi-style-32",2046877423),new cljs.core.Keyword(null,"rich-text-ansi-style-24","rich-text-ansi-style-24",-1205330065),new cljs.core.Keyword(null,"context-availability-next-trial-waiting-time","context-availability-next-trial-waiting-time",-1223193744),new cljs.core.Keyword(null,"rich-text-ansi-style-4","rich-text-ansi-style-4",1929834609),new cljs.core.Keyword(null,"safe-print-level","safe-print-level",-1010991983),new cljs.core.Keyword(null,"silence-no-such-namespace-warnings","silence-no-such-namespace-warnings",2078733745),new cljs.core.Keyword(null,"rich-text-ansi-style-30","rich-text-ansi-style-30",-1406579436),new cljs.core.Keyword(null,"rich-text-ansi-style-34","rich-text-ansi-style-34",1815134036),new cljs.core.Keyword(null,"agent-host","agent-host",-544377515),new cljs.core.Keyword(null,"rich-text-ansi-style-9","rich-text-ansi-style-9",911884534),new cljs.core.Keyword(null,"weasel-verbose","weasel-verbose",613531446),new cljs.core.Keyword(null,"rich-text-ansi-style-0","rich-text-ansi-style-0",217847766),new cljs.core.Keyword(null,"rich-text-ansi-style-22","rich-text-ansi-style-22",577452022),new cljs.core.Keyword(null,"rich-text-ansi-style-33","rich-text-ansi-style-33",393992600),new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847),new cljs.core.Keyword(null,"rich-text-enabled","rich-text-enabled",1247614521),new cljs.core.Keyword(null,"nrepl-config","nrepl-config",-1085169863),new cljs.core.Keyword(null,"safe-print-length","safe-print-length",1870129082),new cljs.core.Keyword(null,"weasel-pre-eval-delay","weasel-pre-eval-delay",1053650811),new cljs.core.Keyword(null,"rich-text-code-style","rich-text-code-style",-1907727780),new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261),new cljs.core.Keyword(null,"silence-use-of-undeclared-var-warnings","silence-use-of-undeclared-var-warnings",341047901),new cljs.core.Keyword(null,"rich-text-ansi-style-44","rich-text-ansi-style-44",-570344579),new cljs.core.Keyword(null,"install-check-next-trial-waiting-time","install-check-next-trial-waiting-time",1679580093),new cljs.core.Keyword(null,"install-check-eval-time-limit","install-check-eval-time-limit",-1484307459),new cljs.core.Keyword(null,"agent-port","agent-port",1866425630),new cljs.core.Keyword(null,"rich-text-ansi-style-41","rich-text-ansi-style-41",-1168056930),new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370),new cljs.core.Keyword(null,"agent-auto-reconnect","agent-auto-reconnect",-416343458),new cljs.core.Keyword(null,"install-check-total-time-limit","install-check-total-time-limit",-912454882),new cljs.core.Keyword(null,"rich-text-ansi-style-23","rich-text-ansi-style-23",1754056606)],["background-color: rgba(0, 128, 128, 0.2)",false,"color:red","color: rgb(128, 128, 128)","color: rgb(0, 128, 128)","background-color: rgba(128, 128, 0, 0.2)","color: rgb(128, 0, 128)","background-color: rgba(128, 128, 128, 0.2)",(10000),false,"font-style: italic",(5000),"color: rgb(128, 0, 0)","background-color: rgba(128, 0, 128, 0.2)","background-color: rgba(0, 0, 0, 0.2)",(3000),dirac.runtime.prefs.reset_styles,"text-decoration:none;","font-weight:bold","background-color: rgba(0, 128, 0, 0.2)","color: rgb(0, 128, 0)","text-decoration:none;",(10),"text-decoration: underline",(1),true,"color: rgb(0, 0, 0)","color: rgb(0, 0, 128)","localhost","text-decoration: line-through",false,dirac.runtime.prefs.reset_styles,"font-weight:normal;","color: rgb(128, 128, 0)","unidentified",true,null,(10),(100),"color:#666; background-color:rgba(198, 198, 198, 0.3)",new cljs.core.Keyword(null,"default","default",-1987822328),true,"background-color: rgba(0, 0, 128, 0.2)",(500),(300),"8231","background-color: rgba(128, 0, 0, 0.2)",false,true,(3000),"font-style:normal"]);
dirac.runtime.prefs.static_prefs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847),"speech"], null);
dirac.runtime.prefs.current_prefs = cljs.core.atom.call(null,cljs.core.merge.call(null,dirac.runtime.prefs.default_prefs,dirac.runtime.prefs.static_prefs));
dirac.runtime.prefs.get_prefs = (function dirac$runtime$prefs$get_prefs(){
return cljs.core.deref.call(null,dirac.runtime.prefs.current_prefs);
});
dirac.runtime.prefs.pref = (function dirac$runtime$prefs$pref(key){
return key.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
dirac.runtime.prefs.set_prefs_BANG_ = (function dirac$runtime$prefs$set_prefs_BANG_(new_prefs){
return cljs.core.reset_BANG_.call(null,dirac.runtime.prefs.current_prefs,new_prefs);
});
dirac.runtime.prefs.set_pref_BANG_ = (function dirac$runtime$prefs$set_pref_BANG_(key,val){
return cljs.core.swap_BANG_.call(null,dirac.runtime.prefs.current_prefs,cljs.core.assoc,key,val);
});
dirac.runtime.prefs.merge_prefs_BANG_ = (function dirac$runtime$prefs$merge_prefs_BANG_(m){
return cljs.core.swap_BANG_.call(null,dirac.runtime.prefs.current_prefs,cljs.core.merge,m);
});
dirac.runtime.prefs.update_pref_BANG_ = (function dirac$runtime$prefs$update_pref_BANG_(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46026 = arguments.length;
var i__45310__auto___46027 = (0);
while(true){
if((i__45310__auto___46027 < len__45309__auto___46026)){
args__45316__auto__.push((arguments[i__45310__auto___46027]));

var G__46028 = (i__45310__auto___46027 + (1));
i__45310__auto___46027 = G__46028;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((2) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((2)),(0),null)):null);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45317__auto__);
});

dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,dirac.runtime.prefs.current_prefs,cljs.core.update,key,f,args);
});

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq46023){
var G__46024 = cljs.core.first.call(null,seq46023);
var seq46023__$1 = cljs.core.next.call(null,seq46023);
var G__46025 = cljs.core.first.call(null,seq46023__$1);
var seq46023__$2 = cljs.core.next.call(null,seq46023__$1);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46024,G__46025,seq46023__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1476719402359