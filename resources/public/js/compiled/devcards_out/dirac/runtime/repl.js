// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.repl');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('dirac.runtime.deps');
goog.require('goog.labs.userAgent.browser');
goog.require('dirac.runtime.bootstrap');
goog.require('dirac.runtime.output');
goog.require('clojure.string');
goog.require('dirac.runtime.prefs');
dirac.runtime.repl.available_QMARK_ = (function dirac$runtime$repl$available_QMARK_(){
var and__44222__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__44222__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__44222__auto__;
}
});
dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = false;
dirac.runtime.repl.console_tunnel = (function dirac$runtime$repl$console_tunnel(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46056 = arguments.length;
var i__45310__auto___46057 = (0);
while(true){
if((i__45310__auto___46057 < len__45309__auto___46056)){
args__45316__auto__.push((arguments[i__45310__auto___46057]));

var G__46058 = (i__45310__auto___46057 + (1));
i__45310__auto___46057 = G__46058;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((1) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45317__auto__);
});

dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.to_array.call(null,args));
});

dirac.runtime.repl.console_tunnel.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq46054){
var G__46055 = cljs.core.first.call(null,seq46054);
var seq46054__$1 = cljs.core.next.call(null,seq46054);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__46055,seq46054__$1);
});

dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46061 = arguments.length;
var i__45310__auto___46062 = (0);
while(true){
if((i__45310__auto___46062 < len__45309__auto___46061)){
args__45316__auto__.push((arguments[i__45310__auto___46062]));

var G__46063 = (i__45310__auto___46062 + (1));
i__45310__auto___46062 = G__46063;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((1) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45317__auto__);
});

dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_msg_args.call(null,name,args));
});

dirac.runtime.repl.call_dirac.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq46059){
var G__46060 = cljs.core.first.call(null,seq46059);
var seq46059__$1 = cljs.core.next.call(null,seq46059);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__46060,seq46059__$1);
});

dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46067 = arguments.length;
var i__45310__auto___46068 = (0);
while(true){
if((i__45310__auto___46068 < len__45309__auto___46067)){
args__45316__auto__.push((arguments[i__45310__auto___46068]));

var G__46069 = (i__45310__auto___46068 + (1));
i__45310__auto___46068 = G__46069;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((2) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45317__auto__);
});

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.log.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq46064){
var G__46065 = cljs.core.first.call(null,seq46064);
var seq46064__$1 = cljs.core.next.call(null,seq46064);
var G__46066 = cljs.core.first.call(null,seq46064__$1);
var seq46064__$2 = cljs.core.next.call(null,seq46064__$1);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(G__46065,G__46066,seq46064__$2);
});

dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46073 = arguments.length;
var i__45310__auto___46074 = (0);
while(true){
if((i__45310__auto___46074 < len__45309__auto___46073)){
args__45316__auto__.push((arguments[i__45310__auto___46074]));

var G__46075 = (i__45310__auto___46074 + (1));
i__45310__auto___46074 = G__46075;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((2) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45317__auto__);
});

dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"warn",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.warn.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq46070){
var G__46071 = cljs.core.first.call(null,seq46070);
var seq46070__$1 = cljs.core.next.call(null,seq46070);
var G__46072 = cljs.core.first.call(null,seq46070__$1);
var seq46070__$2 = cljs.core.next.call(null,seq46070__$1);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(G__46071,G__46072,seq46070__$2);
});

dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46079 = arguments.length;
var i__45310__auto___46080 = (0);
while(true){
if((i__45310__auto___46080 < len__45309__auto___46079)){
args__45316__auto__.push((arguments[i__45310__auto___46080]));

var G__46081 = (i__45310__auto___46080 + (1));
i__45310__auto___46080 = G__46081;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((2) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45317__auto__);
});

dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"error",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.error.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq46076){
var G__46077 = cljs.core.first.call(null,seq46076);
var seq46076__$1 = cljs.core.next.call(null,seq46076);
var G__46078 = cljs.core.first.call(null,seq46076__$1);
var seq46076__$2 = cljs.core.next.call(null,seq46076__$1);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(G__46077,G__46078,seq46076__$2);
});

dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46086 = arguments.length;
var i__45310__auto___46087 = (0);
while(true){
if((i__45310__auto___46087 < len__45309__auto___46086)){
args__45316__auto__.push((arguments[i__45310__auto___46087]));

var G__46088 = (i__45310__auto___46087 + (1));
i__45310__auto___46087 = G__46088;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((3) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((3)),(0),null)):null);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45317__auto__);
});

dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.group_STAR_.cljs$lang$maxFixedArity = (3);

dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq46082){
var G__46083 = cljs.core.first.call(null,seq46082);
var seq46082__$1 = cljs.core.next.call(null,seq46082);
var G__46084 = cljs.core.first.call(null,seq46082__$1);
var seq46082__$2 = cljs.core.next.call(null,seq46082__$1);
var G__46085 = cljs.core.first.call(null,seq46082__$2);
var seq46082__$3 = cljs.core.next.call(null,seq46082__$2);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__46083,G__46084,G__46085,seq46082__$3);
});

dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46090 = arguments.length;
var i__45310__auto___46091 = (0);
while(true){
if((i__45310__auto___46091 < len__45309__auto___46090)){
args__45316__auto__.push((arguments[i__45310__auto___46091]));

var G__46092 = (i__45310__auto___46091 + (1));
i__45310__auto___46091 = G__46092;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,true,args);
});

dirac.runtime.repl.group_collapsed.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq46089){
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46089));
});

dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46094 = arguments.length;
var i__45310__auto___46095 = (0);
while(true){
if((i__45310__auto___46095 < len__45309__auto___46094)){
args__45316__auto__.push((arguments[i__45310__auto___46095]));

var G__46096 = (i__45310__auto___46095 + (1));
i__45310__auto___46095 = G__46096;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,false,args);
});

dirac.runtime.repl.group.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq46093){
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46093));
});

dirac.runtime.repl.group_end = (function dirac$runtime$repl$group_end(){
return console.groupEnd();
});
dirac.runtime.repl.detect_and_strip = (function dirac$runtime$repl$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count.call(null,prefix);
var s = cljs.core.subs.call(null,text,(0),prefix_len);
if(cljs.core._EQ_.call(null,s,prefix)){
return clojure.string.triml.call(null,cljs.core.subs.call(null,text,prefix_len));
} else {
return null;
}
});
dirac.runtime.repl.get_whitespace_prefix_length = (function dirac$runtime$repl$get_whitespace_prefix_length(line){
var temp__4655__auto__ = cljs.core.re_find.call(null,/^([ ]+)/,line);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return cljs.core.count.call(null,cljs.core.second.call(null,m));
} else {
return (0);
}
});
dirac.runtime.repl.remove_common_whitespace_prefix = (function dirac$runtime$repl$remove_common_whitespace_prefix(text){
var text_with_spaces = clojure.string.replace.call(null,text,"\t","  ");
var lines = clojure.string.split.call(null,text_with_spaces,/\n/);
var common_prefix_length = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,dirac.runtime.repl.get_whitespace_prefix_length,lines));
if((common_prefix_length > (0))){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,((function (text_with_spaces,lines,common_prefix_length){
return (function (p1__46097_SHARP_){
return cljs.core.subs.call(null,p1__46097_SHARP_,common_prefix_length);
});})(text_with_spaces,lines,common_prefix_length))
,lines));
} else {
return text;
}
});
dirac.runtime.repl.present_java_trace = (function dirac$runtime$repl$present_java_trace(request_id,text){
var lines = clojure.string.split.call(null,text,/\n/);
var first_line = cljs.core.first.call(null,lines);
var rest_content = clojure.string.join.call(null,"\n",cljs.core.rest.call(null,lines));
if(cljs.core.empty_QMARK_.call(null,rest_content)){
return dirac.runtime.repl.error.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),first_line);
} else {
dirac.runtime.repl.group_collapsed.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"%c%s",dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239)),first_line);

dirac.runtime.repl.log.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),dirac.runtime.repl.remove_common_whitespace_prefix.call(null,rest_content));

return dirac.runtime.repl.group_end.call(null);
}
});
dirac.runtime.repl.should_silence_warning_QMARK_ = (function dirac$runtime$repl$should_silence_warning_QMARK_(message){
if(cljs.core.truth_((function (){var and__44222__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-use-of-undeclared-var-warnings","silence-use-of-undeclared-var-warnings",341047901));
if(cljs.core.truth_(and__44222__auto__)){
return cljs.core.re_find.call(null,/^Use of undeclared Var/,message);
} else {
return and__44222__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__44222__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-no-such-namespace-warnings","silence-no-such-namespace-warnings",2078733745));
if(cljs.core.truth_(and__44222__auto__)){
return cljs.core.re_find.call(null,/^No such namespace/,message);
} else {
return and__44222__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
dirac.runtime.repl.should_silence_error_QMARK_ = (function dirac$runtime$repl$should_silence_error_QMARK_(_message){
return false;

});
dirac.runtime.repl.emit_warning_BANG_ = (function dirac$runtime$repl$emit_warning_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_warning_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.warn.call(null,request_id,"warning",message);
}
});
dirac.runtime.repl.emit_error_BANG_ = (function dirac$runtime$repl$emit_error_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_error_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.error.call(null,request_id,"error",message);
}
});
dirac.runtime.repl.formatted_log = (function dirac$runtime$repl$formatted_log(request_id,kind,format,text){
if(cljs.core.not.call(null,(function (){var and__44222__auto__ = cljs.core._EQ_.call(null,format,"rich-text");
if(and__44222__auto__){
return dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-enabled","rich-text-enabled",1247614521));
} else {
return and__44222__auto__;
}
})())){
return dirac.runtime.repl.log.call(null,request_id,kind,text);
} else {
var soup = dirac.runtime.output.boil_rich_text.call(null,text);
return cljs.core.apply.call(null,dirac.runtime.repl.log,request_id,kind,soup);
}
});
dirac.runtime.repl.api_version = (6);
dirac.runtime.repl.get_api_version = (function dirac$runtime$repl$get_api_version(){
return dirac.runtime.repl.api_version;
});
goog.exportSymbol('dirac.runtime.repl.get_api_version', dirac.runtime.repl.get_api_version);
dirac.runtime.repl.get_effective_config = (function dirac$runtime$repl$get_effective_config(){
return cljs.core.clj__GT_js.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
goog.exportSymbol('dirac.runtime.repl.get_effective_config', dirac.runtime.repl.get_effective_config);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation result.
 */
dirac.runtime.repl.present_repl_result = (function dirac$runtime$repl$present_repl_result(request_id,value){
dirac.runtime.repl.log.call(null,request_id,"result",value);

return value;
});
goog.exportSymbol('dirac.runtime.repl.present_repl_result', dirac.runtime.repl.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation exception.
 */
dirac.runtime.repl.present_repl_exception = (function dirac$runtime$repl$present_repl_exception(request_id,exception){
return dirac.runtime.repl.error.call(null,request_id,"exception",exception);
});
goog.exportSymbol('dirac.runtime.repl.present_repl_exception', dirac.runtime.repl.present_repl_exception);
dirac.runtime.repl.present_output = (function dirac$runtime$repl$present_output(request_id,kind,format,text){
var G__46099 = kind;
switch (G__46099) {
case "java-trace":
return dirac.runtime.repl.present_java_trace.call(null,request_id,text);

break;
default:
var temp__4655__auto__ = dirac.runtime.repl.detect_and_strip.call(null,"WARNING:",text);
if(cljs.core.truth_(temp__4655__auto__)){
var warning_msg = temp__4655__auto__;
return dirac.runtime.repl.emit_warning_BANG_.call(null,request_id,warning_msg);
} else {
var temp__4655__auto____$1 = dirac.runtime.repl.detect_and_strip.call(null,"ERROR:",text);
if(cljs.core.truth_(temp__4655__auto____$1)){
var error_msg = temp__4655__auto____$1;
return dirac.runtime.repl.emit_error_BANG_.call(null,request_id,error_msg);
} else {
return dirac.runtime.repl.formatted_log.call(null,request_id,kind,format,text);
}
}

}
});
goog.exportSymbol('dirac.runtime.repl.present_output', dirac.runtime.repl.present_output);
/**
 * This is a postprocessing function wrapping weasel javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length via with-safe-printing.
 */
dirac.runtime.repl.postprocess_successful_eval = (function dirac$runtime$repl$postprocess_successful_eval(value){
var _STAR_print_level_STAR_46103 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_46104 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-level","safe-print-level",-1010991983));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-length","safe-print-length",1870129082));

try{return ({"status": "success", "value": [cljs.core.str(value)].join('')});
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_46104;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46103;
}});
goog.exportSymbol('dirac.runtime.repl.postprocess_successful_eval', dirac.runtime.repl.postprocess_successful_eval);
dirac.runtime.repl.postprocess_unsuccessful_eval = (function dirac$runtime$repl$postprocess_unsuccessful_eval(ex){

var _STAR_print_level_STAR_46107 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_46108 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-level","safe-print-level",-1010991983));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-length","safe-print-length",1870129082));

try{return ({"status": "exception", "value": cljs.core.pr_str.call(null,ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?ex.stack:"No stacktrace available.")});
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_46108;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46107;
}});
goog.exportSymbol('dirac.runtime.repl.postprocess_unsuccessful_eval', dirac.runtime.repl.postprocess_unsuccessful_eval);
dirac.runtime.repl.request_eval_cljs = (function dirac$runtime$repl$request_eval_cljs(code){
if(typeof code === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Code passed for evaluation must be a string"),cljs.core.str("\n"),cljs.core.str("(string? code)")].join('')));
}

return dirac.runtime.repl.call_dirac.call(null,"eval-cljs",code);
});
goog.exportSymbol('dirac.runtime.repl.request_eval_cljs', dirac.runtime.repl.request_eval_cljs);
dirac.runtime.repl.request_eval_js = (function dirac$runtime$repl$request_eval_js(code){
if(typeof code === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Code passed for evaluation must be a string"),cljs.core.str("\n"),cljs.core.str("(string? code)")].join('')));
}

return dirac.runtime.repl.call_dirac.call(null,"eval-js",code);
});
goog.exportSymbol('dirac.runtime.repl.request_eval_js', dirac.runtime.repl.request_eval_js);
dirac.runtime.repl.bootstrapped_QMARK_ = (function dirac$runtime$repl$bootstrapped_QMARK_(){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.bootstrapped_QMARK_', dirac.runtime.repl.bootstrapped_QMARK_);
dirac.runtime.repl.installed_QMARK_ = (function dirac$runtime$repl$installed_QMARK_(){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.installed_QMARK_', dirac.runtime.repl.installed_QMARK_);
dirac.runtime.repl.install_BANG_ = (function dirac$runtime$repl$install_BANG_(){
if(cljs.core.not.call(null,dirac.runtime.repl.installed_QMARK_.call(null))){
dirac.runtime.bootstrap.bootstrap_BANG_.call(null,(function (){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = true;
}));

dirac.runtime.repl._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.install_BANG_', dirac.runtime.repl.install_BANG_);
dirac.runtime.repl.uninstall_BANG_ = (function dirac$runtime$repl$uninstall_BANG_(){
if(cljs.core.truth_(dirac.runtime.repl.installed_QMARK_.call(null))){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.uninstall_BANG_', dirac.runtime.repl.uninstall_BANG_);

//# sourceMappingURL=repl.js.map?rel=1476719402530