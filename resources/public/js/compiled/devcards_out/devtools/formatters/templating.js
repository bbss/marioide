// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x63289_63290 = value;

x63289_63290.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x63294_63295 = value;

x63294_63295.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x63299_63300 = value;

x63299_63300.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__44222__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__44222__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__44222__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__45316__auto__ = [];
var len__45309__auto___63308 = arguments.length;
var i__45310__auto___63309 = (0);
while(true){
if((i__45310__auto___63309 < len__45309__auto___63308)){
args__45316__auto__.push((arguments[i__45310__auto___63309]));

var G__63310 = (i__45310__auto___63309 + (1));
i__45310__auto___63309 = G__63310;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__63304_63311 = cljs.core.seq.call(null,items);
var chunk__63305_63312 = null;
var count__63306_63313 = (0);
var i__63307_63314 = (0);
while(true){
if((i__63307_63314 < count__63306_63313)){
var item_63315 = cljs.core._nth.call(null,chunk__63305_63312,i__63307_63314);
if(cljs.core.some_QMARK_.call(null,item_63315)){
if(cljs.core.coll_QMARK_.call(null,item_63315)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_63315)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_63315));
}
} else {
}

var G__63316 = seq__63304_63311;
var G__63317 = chunk__63305_63312;
var G__63318 = count__63306_63313;
var G__63319 = (i__63307_63314 + (1));
seq__63304_63311 = G__63316;
chunk__63305_63312 = G__63317;
count__63306_63313 = G__63318;
i__63307_63314 = G__63319;
continue;
} else {
var temp__4657__auto___63320 = cljs.core.seq.call(null,seq__63304_63311);
if(temp__4657__auto___63320){
var seq__63304_63321__$1 = temp__4657__auto___63320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63304_63321__$1)){
var c__45045__auto___63322 = cljs.core.chunk_first.call(null,seq__63304_63321__$1);
var G__63323 = cljs.core.chunk_rest.call(null,seq__63304_63321__$1);
var G__63324 = c__45045__auto___63322;
var G__63325 = cljs.core.count.call(null,c__45045__auto___63322);
var G__63326 = (0);
seq__63304_63311 = G__63323;
chunk__63305_63312 = G__63324;
count__63306_63313 = G__63325;
i__63307_63314 = G__63326;
continue;
} else {
var item_63327 = cljs.core.first.call(null,seq__63304_63321__$1);
if(cljs.core.some_QMARK_.call(null,item_63327)){
if(cljs.core.coll_QMARK_.call(null,item_63327)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_63327)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_63327));
}
} else {
}

var G__63328 = cljs.core.next.call(null,seq__63304_63321__$1);
var G__63329 = null;
var G__63330 = (0);
var G__63331 = (0);
seq__63304_63311 = G__63328;
chunk__63305_63312 = G__63329;
count__63306_63313 = G__63330;
i__63307_63314 = G__63331;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq63303){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63303));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__45316__auto__ = [];
var len__45309__auto___63339 = arguments.length;
var i__45310__auto___63340 = (0);
while(true){
if((i__45310__auto___63340 < len__45309__auto___63339)){
args__45316__auto__.push((arguments[i__45310__auto___63340]));

var G__63341 = (i__45310__auto___63340 + (1));
i__45310__auto___63340 = G__63341;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((2) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45317__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__63335_63342 = cljs.core.seq.call(null,children);
var chunk__63336_63343 = null;
var count__63337_63344 = (0);
var i__63338_63345 = (0);
while(true){
if((i__63338_63345 < count__63337_63344)){
var child_63346 = cljs.core._nth.call(null,chunk__63336_63343,i__63338_63345);
if(cljs.core.some_QMARK_.call(null,child_63346)){
if(cljs.core.coll_QMARK_.call(null,child_63346)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_63346))));
} else {
var temp__4655__auto___63347 = devtools.formatters.helpers.pref.call(null,child_63346);
if(cljs.core.truth_(temp__4655__auto___63347)){
var child_value_63348 = temp__4655__auto___63347;
template.push(child_value_63348);
} else {
}
}
} else {
}

var G__63349 = seq__63335_63342;
var G__63350 = chunk__63336_63343;
var G__63351 = count__63337_63344;
var G__63352 = (i__63338_63345 + (1));
seq__63335_63342 = G__63349;
chunk__63336_63343 = G__63350;
count__63337_63344 = G__63351;
i__63338_63345 = G__63352;
continue;
} else {
var temp__4657__auto___63353 = cljs.core.seq.call(null,seq__63335_63342);
if(temp__4657__auto___63353){
var seq__63335_63354__$1 = temp__4657__auto___63353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63335_63354__$1)){
var c__45045__auto___63355 = cljs.core.chunk_first.call(null,seq__63335_63354__$1);
var G__63356 = cljs.core.chunk_rest.call(null,seq__63335_63354__$1);
var G__63357 = c__45045__auto___63355;
var G__63358 = cljs.core.count.call(null,c__45045__auto___63355);
var G__63359 = (0);
seq__63335_63342 = G__63356;
chunk__63336_63343 = G__63357;
count__63337_63344 = G__63358;
i__63338_63345 = G__63359;
continue;
} else {
var child_63360 = cljs.core.first.call(null,seq__63335_63354__$1);
if(cljs.core.some_QMARK_.call(null,child_63360)){
if(cljs.core.coll_QMARK_.call(null,child_63360)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_63360))));
} else {
var temp__4655__auto___63361 = devtools.formatters.helpers.pref.call(null,child_63360);
if(cljs.core.truth_(temp__4655__auto___63361)){
var child_value_63362 = temp__4655__auto___63361;
template.push(child_value_63362);
} else {
}
}
} else {
}

var G__63363 = cljs.core.next.call(null,seq__63335_63354__$1);
var G__63364 = null;
var G__63365 = (0);
var G__63366 = (0);
seq__63335_63342 = G__63363;
chunk__63336_63343 = G__63364;
count__63337_63344 = G__63365;
i__63338_63345 = G__63366;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq63332){
var G__63333 = cljs.core.first.call(null,seq63332);
var seq63332__$1 = cljs.core.next.call(null,seq63332);
var G__63334 = cljs.core.first.call(null,seq63332__$1);
var seq63332__$2 = cljs.core.next.call(null,seq63332__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__63333,G__63334,seq63332__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__45316__auto__ = [];
var len__45309__auto___63369 = arguments.length;
var i__45310__auto___63370 = (0);
while(true){
if((i__45310__auto___63370 < len__45309__auto___63369)){
args__45316__auto__.push((arguments[i__45310__auto___63370]));

var G__63371 = (i__45310__auto___63370 + (1));
i__45310__auto___63370 = G__63371;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((1) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45317__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq63367){
var G__63368 = cljs.core.first.call(null,seq63367);
var seq63367__$1 = cljs.core.next.call(null,seq63367);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63368,seq63367__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__45316__auto__ = [];
var len__45309__auto___63374 = arguments.length;
var i__45310__auto___63375 = (0);
while(true){
if((i__45310__auto___63375 < len__45309__auto___63374)){
args__45316__auto__.push((arguments[i__45310__auto___63375]));

var G__63376 = (i__45310__auto___63375 + (1));
i__45310__auto___63375 = G__63376;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((1) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45317__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq63372){
var G__63373 = cljs.core.first.call(null,seq63372);
var seq63372__$1 = cljs.core.next.call(null,seq63372);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63373,seq63372__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args63377 = [];
var len__45309__auto___63382 = arguments.length;
var i__45310__auto___63383 = (0);
while(true){
if((i__45310__auto___63383 < len__45309__auto___63382)){
args63377.push((arguments[i__45310__auto___63383]));

var G__63384 = (i__45310__auto___63383 + (1));
i__45310__auto___63383 = G__63384;
continue;
} else {
}
break;
}

var G__63379 = args63377.length;
switch (G__63379) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63377.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj63381 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__44234__auto__ = start_index;
if(cljs.core.truth_(or__44234__auto__)){
return or__44234__auto__;
} else {
return (0);
}
})()};
return obj63381;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__45316__auto__ = [];
var len__45309__auto___63392 = arguments.length;
var i__45310__auto___63393 = (0);
while(true){
if((i__45310__auto___63393 < len__45309__auto___63392)){
args__45316__auto__.push((arguments[i__45310__auto___63393]));

var G__63394 = (i__45310__auto___63393 + (1));
i__45310__auto___63393 = G__63394;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((1) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45317__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__63388){
var vec__63389 = p__63388;
var state_override_fn = cljs.core.nth.call(null,vec__63389,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq63386){
var G__63387 = cljs.core.first.call(null,seq63386);
var seq63386__$1 = cljs.core.next.call(null,seq63386);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__63387,seq63386__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__45220__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_63398_63401 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_63399_63402 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_63398_63401,_STAR_print_fn_STAR_63399_63402,sb__45220__auto__){
return (function (x__45221__auto__){
return sb__45220__auto__.append(x__45221__auto__);
});})(_STAR_print_newline_STAR_63398_63401,_STAR_print_fn_STAR_63399_63402,sb__45220__auto__))
;

try{var _STAR_print_level_STAR_63400_63403 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_63400_63403;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_63399_63402;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_63398_63401;
}
return [cljs.core.str(sb__45220__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_63405 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_63405;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__63407 = name;
switch (G__63407) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__63412 = tag;
var html_tag = cljs.core.nth.call(null,vec__63412,(0),null);
var style = cljs.core.nth.call(null,vec__63412,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_63416 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_63416;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_63419 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_63420 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_63420;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_63419;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__63421 = initial_value;
var G__63422 = value.call(null);
initial_value = G__63421;
value = G__63422;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__63423 = initial_value;
var G__63424 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__63423;
value = G__63424;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__63425 = initial_value;
var G__63426 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__63425;
value = G__63426;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1476719766644