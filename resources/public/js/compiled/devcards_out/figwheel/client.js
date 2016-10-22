// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args56232 = [];
var len__45008__auto___56235 = arguments.length;
var i__45009__auto___56236 = (0);
while(true){
if((i__45009__auto___56236 < len__45008__auto___56235)){
args56232.push((arguments[i__45009__auto___56236]));

var G__56237 = (i__45009__auto___56236 + (1));
i__45009__auto___56236 = G__56237;
continue;
} else {
}
break;
}

var G__56234 = args56232.length;
switch (G__56234) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56232.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45015__auto__ = [];
var len__45008__auto___56240 = arguments.length;
var i__45009__auto___56241 = (0);
while(true){
if((i__45009__auto___56241 < len__45008__auto___56240)){
args__45015__auto__.push((arguments[i__45009__auto___56241]));

var G__56242 = (i__45009__auto___56241 + (1));
i__45009__auto___56241 = G__56242;
continue;
} else {
}
break;
}

var argseq__45016__auto__ = ((((0) < args__45015__auto__.length))?(new cljs.core.IndexedSeq(args__45015__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45016__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq56239){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56239));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45015__auto__ = [];
var len__45008__auto___56244 = arguments.length;
var i__45009__auto___56245 = (0);
while(true){
if((i__45009__auto___56245 < len__45008__auto___56244)){
args__45015__auto__.push((arguments[i__45009__auto___56245]));

var G__56246 = (i__45009__auto___56245 + (1));
i__45009__auto___56245 = G__56246;
continue;
} else {
}
break;
}

var argseq__45016__auto__ = ((((0) < args__45015__auto__.length))?(new cljs.core.IndexedSeq(args__45015__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45016__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq56243){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56243));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__56247 = cljs.core._EQ_;
var expr__56248 = (function (){var or__43933__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e56251){if((e56251 instanceof Error)){
var e = e56251;
return false;
} else {
throw e56251;

}
}})();
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__56247.call(null,"true",expr__56248))){
return true;
} else {
if(cljs.core.truth_(pred__56247.call(null,"false",expr__56248))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__56248)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e56253){if((e56253 instanceof Error)){
var e = e56253;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e56253;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__56254){
var map__56257 = p__56254;
var map__56257__$1 = ((((!((map__56257 == null)))?((((map__56257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56257):map__56257);
var message = cljs.core.get.call(null,map__56257__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__56257__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__43933__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__43921__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__43921__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__43921__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__46239__auto___56419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___56419,ch){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___56419,ch){
return (function (state_56388){
var state_val_56389 = (state_56388[(1)]);
if((state_val_56389 === (7))){
var inst_56384 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56390_56420 = state_56388__$1;
(statearr_56390_56420[(2)] = inst_56384);

(statearr_56390_56420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (1))){
var state_56388__$1 = state_56388;
var statearr_56391_56421 = state_56388__$1;
(statearr_56391_56421[(2)] = null);

(statearr_56391_56421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (4))){
var inst_56341 = (state_56388[(7)]);
var inst_56341__$1 = (state_56388[(2)]);
var state_56388__$1 = (function (){var statearr_56392 = state_56388;
(statearr_56392[(7)] = inst_56341__$1);

return statearr_56392;
})();
if(cljs.core.truth_(inst_56341__$1)){
var statearr_56393_56422 = state_56388__$1;
(statearr_56393_56422[(1)] = (5));

} else {
var statearr_56394_56423 = state_56388__$1;
(statearr_56394_56423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (15))){
var inst_56348 = (state_56388[(8)]);
var inst_56363 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56348);
var inst_56364 = cljs.core.first.call(null,inst_56363);
var inst_56365 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_56364);
var inst_56366 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_56365)].join('');
var inst_56367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_56366);
var state_56388__$1 = state_56388;
var statearr_56395_56424 = state_56388__$1;
(statearr_56395_56424[(2)] = inst_56367);

(statearr_56395_56424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (13))){
var inst_56372 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56396_56425 = state_56388__$1;
(statearr_56396_56425[(2)] = inst_56372);

(statearr_56396_56425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (6))){
var state_56388__$1 = state_56388;
var statearr_56397_56426 = state_56388__$1;
(statearr_56397_56426[(2)] = null);

(statearr_56397_56426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (17))){
var inst_56370 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56398_56427 = state_56388__$1;
(statearr_56398_56427[(2)] = inst_56370);

(statearr_56398_56427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (3))){
var inst_56386 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56388__$1,inst_56386);
} else {
if((state_val_56389 === (12))){
var inst_56347 = (state_56388[(9)]);
var inst_56361 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_56347,opts);
var state_56388__$1 = state_56388;
if(cljs.core.truth_(inst_56361)){
var statearr_56399_56428 = state_56388__$1;
(statearr_56399_56428[(1)] = (15));

} else {
var statearr_56400_56429 = state_56388__$1;
(statearr_56400_56429[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (2))){
var state_56388__$1 = state_56388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56388__$1,(4),ch);
} else {
if((state_val_56389 === (11))){
var inst_56348 = (state_56388[(8)]);
var inst_56353 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56354 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_56348);
var inst_56355 = cljs.core.async.timeout.call(null,(1000));
var inst_56356 = [inst_56354,inst_56355];
var inst_56357 = (new cljs.core.PersistentVector(null,2,(5),inst_56353,inst_56356,null));
var state_56388__$1 = state_56388;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56388__$1,(14),inst_56357);
} else {
if((state_val_56389 === (9))){
var inst_56348 = (state_56388[(8)]);
var inst_56374 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_56375 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56348);
var inst_56376 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56375);
var inst_56377 = [cljs.core.str("Not loading: "),cljs.core.str(inst_56376)].join('');
var inst_56378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_56377);
var state_56388__$1 = (function (){var statearr_56401 = state_56388;
(statearr_56401[(10)] = inst_56374);

return statearr_56401;
})();
var statearr_56402_56430 = state_56388__$1;
(statearr_56402_56430[(2)] = inst_56378);

(statearr_56402_56430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (5))){
var inst_56341 = (state_56388[(7)]);
var inst_56343 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_56344 = (new cljs.core.PersistentArrayMap(null,2,inst_56343,null));
var inst_56345 = (new cljs.core.PersistentHashSet(null,inst_56344,null));
var inst_56346 = figwheel.client.focus_msgs.call(null,inst_56345,inst_56341);
var inst_56347 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_56346);
var inst_56348 = cljs.core.first.call(null,inst_56346);
var inst_56349 = figwheel.client.autoload_QMARK_.call(null);
var state_56388__$1 = (function (){var statearr_56403 = state_56388;
(statearr_56403[(8)] = inst_56348);

(statearr_56403[(9)] = inst_56347);

return statearr_56403;
})();
if(cljs.core.truth_(inst_56349)){
var statearr_56404_56431 = state_56388__$1;
(statearr_56404_56431[(1)] = (8));

} else {
var statearr_56405_56432 = state_56388__$1;
(statearr_56405_56432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (14))){
var inst_56359 = (state_56388[(2)]);
var state_56388__$1 = state_56388;
var statearr_56406_56433 = state_56388__$1;
(statearr_56406_56433[(2)] = inst_56359);

(statearr_56406_56433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (16))){
var state_56388__$1 = state_56388;
var statearr_56407_56434 = state_56388__$1;
(statearr_56407_56434[(2)] = null);

(statearr_56407_56434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (10))){
var inst_56380 = (state_56388[(2)]);
var state_56388__$1 = (function (){var statearr_56408 = state_56388;
(statearr_56408[(11)] = inst_56380);

return statearr_56408;
})();
var statearr_56409_56435 = state_56388__$1;
(statearr_56409_56435[(2)] = null);

(statearr_56409_56435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56389 === (8))){
var inst_56347 = (state_56388[(9)]);
var inst_56351 = figwheel.client.reload_file_state_QMARK_.call(null,inst_56347,opts);
var state_56388__$1 = state_56388;
if(cljs.core.truth_(inst_56351)){
var statearr_56410_56436 = state_56388__$1;
(statearr_56410_56436[(1)] = (11));

} else {
var statearr_56411_56437 = state_56388__$1;
(statearr_56411_56437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46239__auto___56419,ch))
;
return ((function (switch__46127__auto__,c__46239__auto___56419,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46128__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46128__auto____0 = (function (){
var statearr_56415 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56415[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46128__auto__);

(statearr_56415[(1)] = (1));

return statearr_56415;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46128__auto____1 = (function (state_56388){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_56388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e56416){if((e56416 instanceof Object)){
var ex__46131__auto__ = e56416;
var statearr_56417_56438 = state_56388;
(statearr_56417_56438[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56439 = state_56388;
state_56388 = G__56439;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46128__auto__ = function(state_56388){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46128__auto____1.call(this,state_56388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46128__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46128__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___56419,ch))
})();
var state__46241__auto__ = (function (){var statearr_56418 = f__46240__auto__.call(null);
(statearr_56418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___56419);

return statearr_56418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___56419,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__56440_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__56440_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_56443 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_56443){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e56442){if((e56442 instanceof Error)){
var e = e56442;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_56443], null));
} else {
var e = e56442;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_56443))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__56444){
var map__56453 = p__56444;
var map__56453__$1 = ((((!((map__56453 == null)))?((((map__56453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56453):map__56453);
var opts = map__56453__$1;
var build_id = cljs.core.get.call(null,map__56453__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__56453,map__56453__$1,opts,build_id){
return (function (p__56455){
var vec__56456 = p__56455;
var seq__56457 = cljs.core.seq.call(null,vec__56456);
var first__56458 = cljs.core.first.call(null,seq__56457);
var seq__56457__$1 = cljs.core.next.call(null,seq__56457);
var map__56459 = first__56458;
var map__56459__$1 = ((((!((map__56459 == null)))?((((map__56459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56459):map__56459);
var msg = map__56459__$1;
var msg_name = cljs.core.get.call(null,map__56459__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56457__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__56456,seq__56457,first__56458,seq__56457__$1,map__56459,map__56459__$1,msg,msg_name,_,map__56453,map__56453__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__56456,seq__56457,first__56458,seq__56457__$1,map__56459,map__56459__$1,msg,msg_name,_,map__56453,map__56453__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__56453,map__56453__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56467){
var vec__56468 = p__56467;
var seq__56469 = cljs.core.seq.call(null,vec__56468);
var first__56470 = cljs.core.first.call(null,seq__56469);
var seq__56469__$1 = cljs.core.next.call(null,seq__56469);
var map__56471 = first__56470;
var map__56471__$1 = ((((!((map__56471 == null)))?((((map__56471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56471):map__56471);
var msg = map__56471__$1;
var msg_name = cljs.core.get.call(null,map__56471__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56469__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56473){
var map__56485 = p__56473;
var map__56485__$1 = ((((!((map__56485 == null)))?((((map__56485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56485):map__56485);
var on_compile_warning = cljs.core.get.call(null,map__56485__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56485__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56485,map__56485__$1,on_compile_warning,on_compile_fail){
return (function (p__56487){
var vec__56488 = p__56487;
var seq__56489 = cljs.core.seq.call(null,vec__56488);
var first__56490 = cljs.core.first.call(null,seq__56489);
var seq__56489__$1 = cljs.core.next.call(null,seq__56489);
var map__56491 = first__56490;
var map__56491__$1 = ((((!((map__56491 == null)))?((((map__56491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56491):map__56491);
var msg = map__56491__$1;
var msg_name = cljs.core.get.call(null,map__56491__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56489__$1;
var pred__56493 = cljs.core._EQ_;
var expr__56494 = msg_name;
if(cljs.core.truth_(pred__56493.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56494))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56493.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56494))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__56485,map__56485__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__,msg_hist,msg_names,msg){
return (function (state_56722){
var state_val_56723 = (state_56722[(1)]);
if((state_val_56723 === (7))){
var inst_56642 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56642)){
var statearr_56724_56774 = state_56722__$1;
(statearr_56724_56774[(1)] = (8));

} else {
var statearr_56725_56775 = state_56722__$1;
(statearr_56725_56775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (20))){
var inst_56716 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56726_56776 = state_56722__$1;
(statearr_56726_56776[(2)] = inst_56716);

(statearr_56726_56776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (27))){
var inst_56712 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56727_56777 = state_56722__$1;
(statearr_56727_56777[(2)] = inst_56712);

(statearr_56727_56777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (1))){
var inst_56635 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56635)){
var statearr_56728_56778 = state_56722__$1;
(statearr_56728_56778[(1)] = (2));

} else {
var statearr_56729_56779 = state_56722__$1;
(statearr_56729_56779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (24))){
var inst_56714 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56730_56780 = state_56722__$1;
(statearr_56730_56780[(2)] = inst_56714);

(statearr_56730_56780[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (4))){
var inst_56720 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56722__$1,inst_56720);
} else {
if((state_val_56723 === (15))){
var inst_56718 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56731_56781 = state_56722__$1;
(statearr_56731_56781[(2)] = inst_56718);

(statearr_56731_56781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (21))){
var inst_56671 = (state_56722[(2)]);
var inst_56672 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56673 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56672);
var state_56722__$1 = (function (){var statearr_56732 = state_56722;
(statearr_56732[(7)] = inst_56671);

return statearr_56732;
})();
var statearr_56733_56782 = state_56722__$1;
(statearr_56733_56782[(2)] = inst_56673);

(statearr_56733_56782[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (31))){
var inst_56701 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56701)){
var statearr_56734_56783 = state_56722__$1;
(statearr_56734_56783[(1)] = (34));

} else {
var statearr_56735_56784 = state_56722__$1;
(statearr_56735_56784[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (32))){
var inst_56710 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56736_56785 = state_56722__$1;
(statearr_56736_56785[(2)] = inst_56710);

(statearr_56736_56785[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (33))){
var inst_56697 = (state_56722[(2)]);
var inst_56698 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56699 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56698);
var state_56722__$1 = (function (){var statearr_56737 = state_56722;
(statearr_56737[(8)] = inst_56697);

return statearr_56737;
})();
var statearr_56738_56786 = state_56722__$1;
(statearr_56738_56786[(2)] = inst_56699);

(statearr_56738_56786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (13))){
var inst_56656 = figwheel.client.heads_up.clear.call(null);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(16),inst_56656);
} else {
if((state_val_56723 === (22))){
var inst_56677 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56678 = figwheel.client.heads_up.append_warning_message.call(null,inst_56677);
var state_56722__$1 = state_56722;
var statearr_56739_56787 = state_56722__$1;
(statearr_56739_56787[(2)] = inst_56678);

(statearr_56739_56787[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (36))){
var inst_56708 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56740_56788 = state_56722__$1;
(statearr_56740_56788[(2)] = inst_56708);

(statearr_56740_56788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (29))){
var inst_56688 = (state_56722[(2)]);
var inst_56689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56690 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56689);
var state_56722__$1 = (function (){var statearr_56741 = state_56722;
(statearr_56741[(9)] = inst_56688);

return statearr_56741;
})();
var statearr_56742_56789 = state_56722__$1;
(statearr_56742_56789[(2)] = inst_56690);

(statearr_56742_56789[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (6))){
var inst_56637 = (state_56722[(10)]);
var state_56722__$1 = state_56722;
var statearr_56743_56790 = state_56722__$1;
(statearr_56743_56790[(2)] = inst_56637);

(statearr_56743_56790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (28))){
var inst_56684 = (state_56722[(2)]);
var inst_56685 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56686 = figwheel.client.heads_up.display_warning.call(null,inst_56685);
var state_56722__$1 = (function (){var statearr_56744 = state_56722;
(statearr_56744[(11)] = inst_56684);

return statearr_56744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(29),inst_56686);
} else {
if((state_val_56723 === (25))){
var inst_56682 = figwheel.client.heads_up.clear.call(null);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(28),inst_56682);
} else {
if((state_val_56723 === (34))){
var inst_56703 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(37),inst_56703);
} else {
if((state_val_56723 === (17))){
var inst_56662 = (state_56722[(2)]);
var inst_56663 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56664 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56663);
var state_56722__$1 = (function (){var statearr_56745 = state_56722;
(statearr_56745[(12)] = inst_56662);

return statearr_56745;
})();
var statearr_56746_56791 = state_56722__$1;
(statearr_56746_56791[(2)] = inst_56664);

(statearr_56746_56791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (3))){
var inst_56654 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56654)){
var statearr_56747_56792 = state_56722__$1;
(statearr_56747_56792[(1)] = (13));

} else {
var statearr_56748_56793 = state_56722__$1;
(statearr_56748_56793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (12))){
var inst_56650 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56749_56794 = state_56722__$1;
(statearr_56749_56794[(2)] = inst_56650);

(statearr_56749_56794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (2))){
var inst_56637 = (state_56722[(10)]);
var inst_56637__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56722__$1 = (function (){var statearr_56750 = state_56722;
(statearr_56750[(10)] = inst_56637__$1);

return statearr_56750;
})();
if(cljs.core.truth_(inst_56637__$1)){
var statearr_56751_56795 = state_56722__$1;
(statearr_56751_56795[(1)] = (5));

} else {
var statearr_56752_56796 = state_56722__$1;
(statearr_56752_56796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (23))){
var inst_56680 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56680)){
var statearr_56753_56797 = state_56722__$1;
(statearr_56753_56797[(1)] = (25));

} else {
var statearr_56754_56798 = state_56722__$1;
(statearr_56754_56798[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (35))){
var state_56722__$1 = state_56722;
var statearr_56755_56799 = state_56722__$1;
(statearr_56755_56799[(2)] = null);

(statearr_56755_56799[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (19))){
var inst_56675 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56675)){
var statearr_56756_56800 = state_56722__$1;
(statearr_56756_56800[(1)] = (22));

} else {
var statearr_56757_56801 = state_56722__$1;
(statearr_56757_56801[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (11))){
var inst_56646 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56758_56802 = state_56722__$1;
(statearr_56758_56802[(2)] = inst_56646);

(statearr_56758_56802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (9))){
var inst_56648 = figwheel.client.heads_up.clear.call(null);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(12),inst_56648);
} else {
if((state_val_56723 === (5))){
var inst_56639 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56722__$1 = state_56722;
var statearr_56759_56803 = state_56722__$1;
(statearr_56759_56803[(2)] = inst_56639);

(statearr_56759_56803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (14))){
var inst_56666 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56666)){
var statearr_56760_56804 = state_56722__$1;
(statearr_56760_56804[(1)] = (18));

} else {
var statearr_56761_56805 = state_56722__$1;
(statearr_56761_56805[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (26))){
var inst_56692 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56722__$1 = state_56722;
if(cljs.core.truth_(inst_56692)){
var statearr_56762_56806 = state_56722__$1;
(statearr_56762_56806[(1)] = (30));

} else {
var statearr_56763_56807 = state_56722__$1;
(statearr_56763_56807[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (16))){
var inst_56658 = (state_56722[(2)]);
var inst_56659 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56660 = figwheel.client.heads_up.display_exception.call(null,inst_56659);
var state_56722__$1 = (function (){var statearr_56764 = state_56722;
(statearr_56764[(13)] = inst_56658);

return statearr_56764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(17),inst_56660);
} else {
if((state_val_56723 === (30))){
var inst_56694 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56695 = figwheel.client.heads_up.display_warning.call(null,inst_56694);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(33),inst_56695);
} else {
if((state_val_56723 === (10))){
var inst_56652 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56765_56808 = state_56722__$1;
(statearr_56765_56808[(2)] = inst_56652);

(statearr_56765_56808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (18))){
var inst_56668 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56669 = figwheel.client.heads_up.display_exception.call(null,inst_56668);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(21),inst_56669);
} else {
if((state_val_56723 === (37))){
var inst_56705 = (state_56722[(2)]);
var state_56722__$1 = state_56722;
var statearr_56766_56809 = state_56722__$1;
(statearr_56766_56809[(2)] = inst_56705);

(statearr_56766_56809[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56723 === (8))){
var inst_56644 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56722__$1 = state_56722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56722__$1,(11),inst_56644);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46239__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46127__auto__,c__46239__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto____0 = (function (){
var statearr_56770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56770[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto__);

(statearr_56770[(1)] = (1));

return statearr_56770;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto____1 = (function (state_56722){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_56722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e56771){if((e56771 instanceof Object)){
var ex__46131__auto__ = e56771;
var statearr_56772_56810 = state_56722;
(statearr_56772_56810[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56811 = state_56722;
state_56722 = G__56811;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto__ = function(state_56722){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto____1.call(this,state_56722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__,msg_hist,msg_names,msg))
})();
var state__46241__auto__ = (function (){var statearr_56773 = f__46240__auto__.call(null);
(statearr_56773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_56773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__,msg_hist,msg_names,msg))
);

return c__46239__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46239__auto___56874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___56874,ch){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___56874,ch){
return (function (state_56857){
var state_val_56858 = (state_56857[(1)]);
if((state_val_56858 === (1))){
var state_56857__$1 = state_56857;
var statearr_56859_56875 = state_56857__$1;
(statearr_56859_56875[(2)] = null);

(statearr_56859_56875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56858 === (2))){
var state_56857__$1 = state_56857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56857__$1,(4),ch);
} else {
if((state_val_56858 === (3))){
var inst_56855 = (state_56857[(2)]);
var state_56857__$1 = state_56857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56857__$1,inst_56855);
} else {
if((state_val_56858 === (4))){
var inst_56845 = (state_56857[(7)]);
var inst_56845__$1 = (state_56857[(2)]);
var state_56857__$1 = (function (){var statearr_56860 = state_56857;
(statearr_56860[(7)] = inst_56845__$1);

return statearr_56860;
})();
if(cljs.core.truth_(inst_56845__$1)){
var statearr_56861_56876 = state_56857__$1;
(statearr_56861_56876[(1)] = (5));

} else {
var statearr_56862_56877 = state_56857__$1;
(statearr_56862_56877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56858 === (5))){
var inst_56845 = (state_56857[(7)]);
var inst_56847 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56845);
var state_56857__$1 = state_56857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56857__$1,(8),inst_56847);
} else {
if((state_val_56858 === (6))){
var state_56857__$1 = state_56857;
var statearr_56863_56878 = state_56857__$1;
(statearr_56863_56878[(2)] = null);

(statearr_56863_56878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56858 === (7))){
var inst_56853 = (state_56857[(2)]);
var state_56857__$1 = state_56857;
var statearr_56864_56879 = state_56857__$1;
(statearr_56864_56879[(2)] = inst_56853);

(statearr_56864_56879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56858 === (8))){
var inst_56849 = (state_56857[(2)]);
var state_56857__$1 = (function (){var statearr_56865 = state_56857;
(statearr_56865[(8)] = inst_56849);

return statearr_56865;
})();
var statearr_56866_56880 = state_56857__$1;
(statearr_56866_56880[(2)] = null);

(statearr_56866_56880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__46239__auto___56874,ch))
;
return ((function (switch__46127__auto__,c__46239__auto___56874,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46128__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46128__auto____0 = (function (){
var statearr_56870 = [null,null,null,null,null,null,null,null,null];
(statearr_56870[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46128__auto__);

(statearr_56870[(1)] = (1));

return statearr_56870;
});
var figwheel$client$heads_up_plugin_$_state_machine__46128__auto____1 = (function (state_56857){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_56857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e56871){if((e56871 instanceof Object)){
var ex__46131__auto__ = e56871;
var statearr_56872_56881 = state_56857;
(statearr_56872_56881[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56882 = state_56857;
state_56857 = G__56882;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46128__auto__ = function(state_56857){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46128__auto____1.call(this,state_56857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46128__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46128__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___56874,ch))
})();
var state__46241__auto__ = (function (){var statearr_56873 = f__46240__auto__.call(null);
(statearr_56873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___56874);

return statearr_56873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___56874,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__){
return (function (state_56903){
var state_val_56904 = (state_56903[(1)]);
if((state_val_56904 === (1))){
var inst_56898 = cljs.core.async.timeout.call(null,(3000));
var state_56903__$1 = state_56903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56903__$1,(2),inst_56898);
} else {
if((state_val_56904 === (2))){
var inst_56900 = (state_56903[(2)]);
var inst_56901 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56903__$1 = (function (){var statearr_56905 = state_56903;
(statearr_56905[(7)] = inst_56900);

return statearr_56905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56903__$1,inst_56901);
} else {
return null;
}
}
});})(c__46239__auto__))
;
return ((function (switch__46127__auto__,c__46239__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46128__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46128__auto____0 = (function (){
var statearr_56909 = [null,null,null,null,null,null,null,null];
(statearr_56909[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46128__auto__);

(statearr_56909[(1)] = (1));

return statearr_56909;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46128__auto____1 = (function (state_56903){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_56903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e56910){if((e56910 instanceof Object)){
var ex__46131__auto__ = e56910;
var statearr_56911_56913 = state_56903;
(statearr_56911_56913[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56914 = state_56903;
state_56903 = G__56914;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46128__auto__ = function(state_56903){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46128__auto____1.call(this,state_56903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46128__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46128__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__))
})();
var state__46241__auto__ = (function (){var statearr_56912 = f__46240__auto__.call(null);
(statearr_56912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_56912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__))
);

return c__46239__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__,figwheel_version,temp__4657__auto__){
return (function (state_56937){
var state_val_56938 = (state_56937[(1)]);
if((state_val_56938 === (1))){
var inst_56931 = cljs.core.async.timeout.call(null,(2000));
var state_56937__$1 = state_56937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56937__$1,(2),inst_56931);
} else {
if((state_val_56938 === (2))){
var inst_56933 = (state_56937[(2)]);
var inst_56934 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_56935 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_56934);
var state_56937__$1 = (function (){var statearr_56939 = state_56937;
(statearr_56939[(7)] = inst_56933);

return statearr_56939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56937__$1,inst_56935);
} else {
return null;
}
}
});})(c__46239__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__46127__auto__,c__46239__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto____0 = (function (){
var statearr_56943 = [null,null,null,null,null,null,null,null];
(statearr_56943[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto__);

(statearr_56943[(1)] = (1));

return statearr_56943;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto____1 = (function (state_56937){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_56937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e56944){if((e56944 instanceof Object)){
var ex__46131__auto__ = e56944;
var statearr_56945_56947 = state_56937;
(statearr_56945_56947[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56948 = state_56937;
state_56937 = G__56948;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto__ = function(state_56937){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto____1.call(this,state_56937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__,figwheel_version,temp__4657__auto__))
})();
var state__46241__auto__ = (function (){var statearr_56946 = f__46240__auto__.call(null);
(statearr_56946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_56946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__,figwheel_version,temp__4657__auto__))
);

return c__46239__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__56949){
var map__56953 = p__56949;
var map__56953__$1 = ((((!((map__56953 == null)))?((((map__56953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56953):map__56953);
var file = cljs.core.get.call(null,map__56953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__56953__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__56953__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__56955 = "";
var G__56955__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__56955),cljs.core.str("file "),cljs.core.str(file)].join(''):G__56955);
var G__56955__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__56955__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__56955__$1);
if(cljs.core.truth_((function (){var and__43921__auto__ = line;
if(cljs.core.truth_(and__43921__auto__)){
return column;
} else {
return and__43921__auto__;
}
})())){
return [cljs.core.str(G__56955__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__56955__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__56956){
var map__56963 = p__56956;
var map__56963__$1 = ((((!((map__56963 == null)))?((((map__56963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56963):map__56963);
var ed = map__56963__$1;
var formatted_exception = cljs.core.get.call(null,map__56963__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__56963__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__56963__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__56965_56969 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__56966_56970 = null;
var count__56967_56971 = (0);
var i__56968_56972 = (0);
while(true){
if((i__56968_56972 < count__56967_56971)){
var msg_56973 = cljs.core._nth.call(null,chunk__56966_56970,i__56968_56972);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56973);

var G__56974 = seq__56965_56969;
var G__56975 = chunk__56966_56970;
var G__56976 = count__56967_56971;
var G__56977 = (i__56968_56972 + (1));
seq__56965_56969 = G__56974;
chunk__56966_56970 = G__56975;
count__56967_56971 = G__56976;
i__56968_56972 = G__56977;
continue;
} else {
var temp__4657__auto___56978 = cljs.core.seq.call(null,seq__56965_56969);
if(temp__4657__auto___56978){
var seq__56965_56979__$1 = temp__4657__auto___56978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56965_56979__$1)){
var c__44744__auto___56980 = cljs.core.chunk_first.call(null,seq__56965_56979__$1);
var G__56981 = cljs.core.chunk_rest.call(null,seq__56965_56979__$1);
var G__56982 = c__44744__auto___56980;
var G__56983 = cljs.core.count.call(null,c__44744__auto___56980);
var G__56984 = (0);
seq__56965_56969 = G__56981;
chunk__56966_56970 = G__56982;
count__56967_56971 = G__56983;
i__56968_56972 = G__56984;
continue;
} else {
var msg_56985 = cljs.core.first.call(null,seq__56965_56979__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56985);

var G__56986 = cljs.core.next.call(null,seq__56965_56979__$1);
var G__56987 = null;
var G__56988 = (0);
var G__56989 = (0);
seq__56965_56969 = G__56986;
chunk__56966_56970 = G__56987;
count__56967_56971 = G__56988;
i__56968_56972 = G__56989;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__56990){
var map__56993 = p__56990;
var map__56993__$1 = ((((!((map__56993 == null)))?((((map__56993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56993):map__56993);
var w = map__56993__$1;
var message = cljs.core.get.call(null,map__56993__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__43921__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__43921__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__43921__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__57005 = cljs.core.seq.call(null,plugins);
var chunk__57006 = null;
var count__57007 = (0);
var i__57008 = (0);
while(true){
if((i__57008 < count__57007)){
var vec__57009 = cljs.core._nth.call(null,chunk__57006,i__57008);
var k = cljs.core.nth.call(null,vec__57009,(0),null);
var plugin = cljs.core.nth.call(null,vec__57009,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57015 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57005,chunk__57006,count__57007,i__57008,pl_57015,vec__57009,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57015.call(null,msg_hist);
});})(seq__57005,chunk__57006,count__57007,i__57008,pl_57015,vec__57009,k,plugin))
);
} else {
}

var G__57016 = seq__57005;
var G__57017 = chunk__57006;
var G__57018 = count__57007;
var G__57019 = (i__57008 + (1));
seq__57005 = G__57016;
chunk__57006 = G__57017;
count__57007 = G__57018;
i__57008 = G__57019;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57005);
if(temp__4657__auto__){
var seq__57005__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57005__$1)){
var c__44744__auto__ = cljs.core.chunk_first.call(null,seq__57005__$1);
var G__57020 = cljs.core.chunk_rest.call(null,seq__57005__$1);
var G__57021 = c__44744__auto__;
var G__57022 = cljs.core.count.call(null,c__44744__auto__);
var G__57023 = (0);
seq__57005 = G__57020;
chunk__57006 = G__57021;
count__57007 = G__57022;
i__57008 = G__57023;
continue;
} else {
var vec__57012 = cljs.core.first.call(null,seq__57005__$1);
var k = cljs.core.nth.call(null,vec__57012,(0),null);
var plugin = cljs.core.nth.call(null,vec__57012,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57024 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57005,chunk__57006,count__57007,i__57008,pl_57024,vec__57012,k,plugin,seq__57005__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57024.call(null,msg_hist);
});})(seq__57005,chunk__57006,count__57007,i__57008,pl_57024,vec__57012,k,plugin,seq__57005__$1,temp__4657__auto__))
);
} else {
}

var G__57025 = cljs.core.next.call(null,seq__57005__$1);
var G__57026 = null;
var G__57027 = (0);
var G__57028 = (0);
seq__57005 = G__57025;
chunk__57006 = G__57026;
count__57007 = G__57027;
i__57008 = G__57028;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args57029 = [];
var len__45008__auto___57036 = arguments.length;
var i__45009__auto___57037 = (0);
while(true){
if((i__45009__auto___57037 < len__45008__auto___57036)){
args57029.push((arguments[i__45009__auto___57037]));

var G__57038 = (i__45009__auto___57037 + (1));
i__45009__auto___57037 = G__57038;
continue;
} else {
}
break;
}

var G__57031 = args57029.length;
switch (G__57031) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57029.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__57032_57040 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57033_57041 = null;
var count__57034_57042 = (0);
var i__57035_57043 = (0);
while(true){
if((i__57035_57043 < count__57034_57042)){
var msg_57044 = cljs.core._nth.call(null,chunk__57033_57041,i__57035_57043);
figwheel.client.socket.handle_incoming_message.call(null,msg_57044);

var G__57045 = seq__57032_57040;
var G__57046 = chunk__57033_57041;
var G__57047 = count__57034_57042;
var G__57048 = (i__57035_57043 + (1));
seq__57032_57040 = G__57045;
chunk__57033_57041 = G__57046;
count__57034_57042 = G__57047;
i__57035_57043 = G__57048;
continue;
} else {
var temp__4657__auto___57049 = cljs.core.seq.call(null,seq__57032_57040);
if(temp__4657__auto___57049){
var seq__57032_57050__$1 = temp__4657__auto___57049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57032_57050__$1)){
var c__44744__auto___57051 = cljs.core.chunk_first.call(null,seq__57032_57050__$1);
var G__57052 = cljs.core.chunk_rest.call(null,seq__57032_57050__$1);
var G__57053 = c__44744__auto___57051;
var G__57054 = cljs.core.count.call(null,c__44744__auto___57051);
var G__57055 = (0);
seq__57032_57040 = G__57052;
chunk__57033_57041 = G__57053;
count__57034_57042 = G__57054;
i__57035_57043 = G__57055;
continue;
} else {
var msg_57056 = cljs.core.first.call(null,seq__57032_57050__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57056);

var G__57057 = cljs.core.next.call(null,seq__57032_57050__$1);
var G__57058 = null;
var G__57059 = (0);
var G__57060 = (0);
seq__57032_57040 = G__57057;
chunk__57033_57041 = G__57058;
count__57034_57042 = G__57059;
i__57035_57043 = G__57060;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45015__auto__ = [];
var len__45008__auto___57065 = arguments.length;
var i__45009__auto___57066 = (0);
while(true){
if((i__45009__auto___57066 < len__45008__auto___57065)){
args__45015__auto__.push((arguments[i__45009__auto___57066]));

var G__57067 = (i__45009__auto___57066 + (1));
i__45009__auto___57066 = G__57067;
continue;
} else {
}
break;
}

var argseq__45016__auto__ = ((((0) < args__45015__auto__.length))?(new cljs.core.IndexedSeq(args__45015__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45016__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57062){
var map__57063 = p__57062;
var map__57063__$1 = ((((!((map__57063 == null)))?((((map__57063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57063):map__57063);
var opts = map__57063__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57061){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57061));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57069){if((e57069 instanceof Error)){
var e = e57069;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57069;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__57073){
var map__57074 = p__57073;
var map__57074__$1 = ((((!((map__57074 == null)))?((((map__57074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57074):map__57074);
var msg_name = cljs.core.get.call(null,map__57074__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1476707537751