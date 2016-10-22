// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__44897__auto__ = (((value == null))?null:value);
var m__44898__auto__ = (devtools.format._header[goog.typeOf(x__44897__auto__)]);
if(!((m__44898__auto__ == null))){
return m__44898__auto__.call(null,value);
} else {
var m__44898__auto____$1 = (devtools.format._header["_"]);
if(!((m__44898__auto____$1 == null))){
return m__44898__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__44897__auto__ = (((value == null))?null:value);
var m__44898__auto__ = (devtools.format._has_body[goog.typeOf(x__44897__auto__)]);
if(!((m__44898__auto__ == null))){
return m__44898__auto__.call(null,value);
} else {
var m__44898__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__44898__auto____$1 == null))){
return m__44898__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__44897__auto__ = (((value == null))?null:value);
var m__44898__auto__ = (devtools.format._body[goog.typeOf(x__44897__auto__)]);
if(!((m__44898__auto__ == null))){
return m__44898__auto__.call(null,value);
} else {
var m__44898__auto____$1 = (devtools.format._body["_"]);
if(!((m__44898__auto____$1 == null))){
return m__44898__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__62419__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__62419__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__62419__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__62419__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__62418__auto__ = temp__4657__auto____$2;
return goog.object.get(o__62418__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__62419__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__62419__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__62419__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__62419__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__62418__auto__ = temp__4657__auto____$2;
return goog.object.get(o__62418__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__62419__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__62419__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__62419__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__62419__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__62418__auto__ = temp__4657__auto____$2;
return goog.object.get(o__62418__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__62419__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__62419__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__62419__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__62419__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__62418__auto__ = temp__4657__auto____$2;
return goog.object.get(o__62418__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__62419__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__62419__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__62419__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__62419__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__62418__auto__ = temp__4657__auto____$2;
return goog.object.get(o__62418__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__62419__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__62419__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__62419__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__62419__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__62418__auto__ = temp__4657__auto____$2;
return goog.object.get(o__62418__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__62419__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__62419__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__62419__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__62419__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__62418__auto__ = temp__4657__auto____$2;
return goog.object.get(o__62418__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62440 = arguments.length;
var i__45310__auto___62441 = (0);
while(true){
if((i__45310__auto___62441 < len__45309__auto___62440)){
args__45316__auto__.push((arguments[i__45310__auto___62441]));

var G__62442 = (i__45310__auto___62441 + (1));
i__45310__auto___62441 = G__62442;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq62439){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62439));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62444 = arguments.length;
var i__45310__auto___62445 = (0);
while(true){
if((i__45310__auto___62445 < len__45309__auto___62444)){
args__45316__auto__.push((arguments[i__45310__auto___62445]));

var G__62446 = (i__45310__auto___62445 + (1));
i__45310__auto___62445 = G__62446;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq62443){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62443));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62448 = arguments.length;
var i__45310__auto___62449 = (0);
while(true){
if((i__45310__auto___62449 < len__45309__auto___62448)){
args__45316__auto__.push((arguments[i__45310__auto___62449]));

var G__62450 = (i__45310__auto___62449 + (1));
i__45310__auto___62449 = G__62450;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq62447){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62447));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62452 = arguments.length;
var i__45310__auto___62453 = (0);
while(true){
if((i__45310__auto___62453 < len__45309__auto___62452)){
args__45316__auto__.push((arguments[i__45310__auto___62453]));

var G__62454 = (i__45310__auto___62453 + (1));
i__45310__auto___62453 = G__62454;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq62451){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62451));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62456 = arguments.length;
var i__45310__auto___62457 = (0);
while(true){
if((i__45310__auto___62457 < len__45309__auto___62456)){
args__45316__auto__.push((arguments[i__45310__auto___62457]));

var G__62458 = (i__45310__auto___62457 + (1));
i__45310__auto___62457 = G__62458;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq62455){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62455));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62460 = arguments.length;
var i__45310__auto___62461 = (0);
while(true){
if((i__45310__auto___62461 < len__45309__auto___62460)){
args__45316__auto__.push((arguments[i__45310__auto___62461]));

var G__62462 = (i__45310__auto___62461 + (1));
i__45310__auto___62461 = G__62462;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq62459){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62459));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62464 = arguments.length;
var i__45310__auto___62465 = (0);
while(true){
if((i__45310__auto___62465 < len__45309__auto___62464)){
args__45316__auto__.push((arguments[i__45310__auto___62465]));

var G__62466 = (i__45310__auto___62465 + (1));
i__45310__auto___62465 = G__62466;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq62463){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62463));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62474 = arguments.length;
var i__45310__auto___62475 = (0);
while(true){
if((i__45310__auto___62475 < len__45309__auto___62474)){
args__45316__auto__.push((arguments[i__45310__auto___62475]));

var G__62476 = (i__45310__auto___62475 + (1));
i__45310__auto___62475 = G__62476;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((1) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45317__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__62470){
var vec__62471 = p__62470;
var state_override = cljs.core.nth.call(null,vec__62471,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__62471,state_override){
return (function (p1__62467_SHARP_){
return cljs.core.merge.call(null,p1__62467_SHARP_,state_override);
});})(vec__62471,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq62468){
var G__62469 = cljs.core.first.call(null,seq62468);
var seq62468__$1 = cljs.core.next.call(null,seq62468);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__62469,seq62468__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62478 = arguments.length;
var i__45310__auto___62479 = (0);
while(true){
if((i__45310__auto___62479 < len__45309__auto___62478)){
args__45316__auto__.push((arguments[i__45310__auto___62479]));

var G__62480 = (i__45310__auto___62479 + (1));
i__45310__auto___62479 = G__62480;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((0) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__45317__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq62477){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62477));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__45316__auto__ = [];
var len__45309__auto___62483 = arguments.length;
var i__45310__auto___62484 = (0);
while(true){
if((i__45310__auto___62484 < len__45309__auto___62483)){
args__45316__auto__.push((arguments[i__45310__auto___62484]));

var G__62485 = (i__45310__auto___62484 + (1));
i__45310__auto___62484 = G__62485;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((1) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45317__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq62481){
var G__62482 = cljs.core.first.call(null,seq62481);
var seq62481__$1 = cljs.core.next.call(null,seq62481);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__62482,seq62481__$1);
});


//# sourceMappingURL=format.js.map?rel=1476719765293