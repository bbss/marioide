// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.bootstrap');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = false;
dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_ = (100);
dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
dirac.runtime.bootstrap.notify_listeners_BANG_ = (function dirac$runtime$bootstrap$notify_listeners_BANG_(listeners){
var seq__45922 = cljs.core.seq.call(null,listeners);
var chunk__45923 = null;
var count__45924 = (0);
var i__45925 = (0);
while(true){
if((i__45925 < count__45924)){
var listener = cljs.core._nth.call(null,chunk__45923,i__45925);
listener.call(null);

var G__45926 = seq__45922;
var G__45927 = chunk__45923;
var G__45928 = count__45924;
var G__45929 = (i__45925 + (1));
seq__45922 = G__45926;
chunk__45923 = G__45927;
count__45924 = G__45928;
i__45925 = G__45929;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45922);
if(temp__4657__auto__){
var seq__45922__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45922__$1)){
var c__45045__auto__ = cljs.core.chunk_first.call(null,seq__45922__$1);
var G__45930 = cljs.core.chunk_rest.call(null,seq__45922__$1);
var G__45931 = c__45045__auto__;
var G__45932 = cljs.core.count.call(null,c__45045__auto__);
var G__45933 = (0);
seq__45922 = G__45930;
chunk__45923 = G__45931;
count__45924 = G__45932;
i__45925 = G__45933;
continue;
} else {
var listener = cljs.core.first.call(null,seq__45922__$1);
listener.call(null);

var G__45934 = cljs.core.next.call(null,seq__45922__$1);
var G__45935 = null;
var G__45936 = (0);
var G__45937 = (0);
seq__45922 = G__45934;
chunk__45923 = G__45935;
count__45924 = G__45936;
i__45925 = G__45937;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.bootstrap.boostrap_if_needed_BANG_ = (function dirac$runtime$bootstrap$boostrap_if_needed_BANG_(){
if(cljs.core.truth_(dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_)){
} else {
clojure.browser.repl.bootstrap.call(null);

dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = true;
}

dirac.runtime.bootstrap.notify_listeners_BANG_.call(null,dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_);

return dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
});
dirac.runtime.bootstrap.call_after_document_finished_loading = (function dirac$runtime$bootstrap$call_after_document_finished_loading(f,timeout){
if(cljs.core._EQ_.call(null,document.readyState,"loading")){
return setTimeout((function (){
return dirac$runtime$bootstrap$call_after_document_finished_loading.call(null,f,dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_);
}),timeout);
} else {
return f.call(null);
}
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 * 
 *   Note that this function might do its job asynchronously if at the time of calling the document is still loading.
 *   You may provide a callback which will be called immediatelly after bootstrapping happens.
 *   It has no effect if called after bootstrapping has been already done. Only the callback is called immediatelly.
 */
dirac.runtime.bootstrap.bootstrap_BANG_ = (function dirac$runtime$bootstrap$bootstrap_BANG_(var_args){
var args45938 = [];
var len__45309__auto___45941 = arguments.length;
var i__45310__auto___45942 = (0);
while(true){
if((i__45310__auto___45942 < len__45309__auto___45941)){
args45938.push((arguments[i__45310__auto___45942]));

var G__45943 = (i__45310__auto___45942 + (1));
i__45310__auto___45942 = G__45943;
continue;
} else {
}
break;
}

var G__45940 = args45938.length;
switch (G__45940) {
case 0:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45938.length)].join('')));

}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.bootstrap.bootstrap_BANG_.call(null,null);
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (callback){
if(cljs.core.some_QMARK_.call(null,callback)){
if(cljs.core.fn_QMARK_.call(null,callback)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The callback parameter to clojure.browser.repl/bootstrap expected to be a function."),cljs.core.str("Got "),cljs.core.str(cljs.core.type.call(null,callback)),cljs.core.str(" instead.")].join('')),cljs.core.str("\n"),cljs.core.str("(fn? callback)")].join('')));
}

dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_.push(callback);
} else {
}

return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,dirac.runtime.bootstrap.boostrap_if_needed_BANG_,(0));
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=bootstrap.js.map?rel=1476719402143