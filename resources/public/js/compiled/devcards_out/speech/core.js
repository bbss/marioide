// Compiled by ClojureScript 1.9.229 {}
goog.provide('speech.core');
goog.require('cljs.core');
goog.require('devcards_om_next.core');
goog.require('om.dom');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devtools.core');
goog.require('dirac.runtime');
goog.require('om.next');
goog.require('clojure.string');
goog.require('cljs.core.match');
devtools.core.install_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.Keyword(null,"async","async",1050769601)], null));
dirac.runtime.install_BANG_.call(null);
cljs.core.enable_console_print_BANG_.call(null);
if(typeof speech.core.state !== 'undefined'){
} else {
speech.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
speech.core.prr = (function speech$core$prr(thing){
return console.log(thing);
});
speech.core.new_utterances = cljs.core.async.chan.call(null);
if(typeof speech.core.recognizer !== 'undefined'){
} else {
speech.core.recognizer = (new webkitSpeechRecognition());
}
speech.core.recognizer_config = cljs.core.PersistentHashMap.fromArrays(["lang","onerror","onnomatch","onsoundstart","interimResults","maxAlternatives","onend","onresult","continuous"],["en-US",(function (res){
return console.log(res,"error","nomatch");
}),(function (res){
return console.log(res,"nomatch",(new Date()));
}),(function (res){
return console.log(res,"soundstart",(new Date()));
}),true,(4),(function (res){
return console.log(res,"end",(new Date()));
}),(function (res){
speech.core.prr.call(null,res);

return goog.object.forEach(goog.object.get(res,"results"),(function (v,k,o){
if(cljs.core.truth_(o.hasOwnProperty(k))){
return cljs.core.async.put_BANG_.call(null,speech.core.new_utterances,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),goog.object.get(res,"resultIndex"),new cljs.core.Keyword(null,"is-final","is-final",-576501257),goog.object.get(goog.object.get(o,k),"isFinal"),new cljs.core.Keyword(null,"alternatives","alternatives",1927759600),cljs.core.vals.call(null,cljs.core.js__GT_clj.call(null,goog.object.map(goog.object.filter(v,(function (_,k__$1,t){
return t.hasOwnProperty(k__$1);
})),(function (v__$1){
return v__$1.transcript;
}))))], null));
} else {
return null;
}
}));
}),true]);
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__65196){
var vec__65197 = p__65196;
var k = cljs.core.nth.call(null,vec__65197,(0),null);
var v = cljs.core.nth.call(null,vec__65197,(1),null);
return goog.object.set(speech.core.recognizer,k,v);
}),speech.core.recognizer_config));
speech.core.start = (function speech$core$start(){
return speech.core.recognizer.start();
});
if(typeof speech.core.read !== 'undefined'){
} else {
speech.core.read = (function (){var method_table__45159__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__45160__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__45161__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__45162__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__45163__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speech.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__45163__auto__,method_table__45159__auto__,prefer_table__45160__auto__,method_cache__45161__auto__,cached_hierarchy__45162__auto__));
})();
}
cljs.core._add_method.call(null,speech.core.read,new cljs.core.Keyword(null,"last","last",1105735132),(function (p__65200,k,_){
var map__65201 = p__65200;
var map__65201__$1 = ((((!((map__65201 == null)))?((((map__65201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65201):map__65201);
var state = cljs.core.get.call(null,map__65201__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k,"")], null);
}));
speech.core.p = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),speech.core.read], null));
if(typeof speech.core.r !== 'undefined'){
} else {
speech.core.r = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parser","parser",-1543495310),speech.core.p,new cljs.core.Keyword(null,"state","state",-1988618099),speech.core.state], null));
}
speech.core.utterances_taker = (function (){var c__48619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48619__auto__){
return (function (){
var f__48620__auto__ = (function (){var switch__48554__auto__ = ((function (c__48619__auto__){
return (function (state_65216){
var state_val_65217 = (state_65216[(1)]);
if((state_val_65217 === (1))){
var state_65216__$1 = state_65216;
var statearr_65218_65233 = state_65216__$1;
(statearr_65218_65233[(2)] = null);

(statearr_65218_65233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65217 === (2))){
var state_65216__$1 = state_65216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65216__$1,(4),speech.core.new_utterances);
} else {
if((state_val_65217 === (3))){
var inst_65214 = (state_65216[(2)]);
var state_65216__$1 = state_65216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65216__$1,inst_65214);
} else {
if((state_val_65217 === (4))){
var inst_65205 = (state_65216[(7)]);
var inst_65205__$1 = (state_65216[(2)]);
var state_65216__$1 = (function (){var statearr_65219 = state_65216;
(statearr_65219[(7)] = inst_65205__$1);

return statearr_65219;
})();
if(cljs.core.truth_(inst_65205__$1)){
var statearr_65220_65234 = state_65216__$1;
(statearr_65220_65234[(1)] = (5));

} else {
var statearr_65221_65235 = state_65216__$1;
(statearr_65221_65235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65217 === (5))){
var inst_65205 = (state_65216[(7)]);
var inst_65207 = speech.core.prr.call(null,inst_65205);
var inst_65208 = cljs.core.swap_BANG_.call(null,speech.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"last","last",1105735132),inst_65205);
var state_65216__$1 = (function (){var statearr_65222 = state_65216;
(statearr_65222[(8)] = inst_65208);

(statearr_65222[(9)] = inst_65207);

return statearr_65222;
})();
var statearr_65223_65236 = state_65216__$1;
(statearr_65223_65236[(2)] = null);

(statearr_65223_65236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65217 === (6))){
var state_65216__$1 = state_65216;
var statearr_65224_65237 = state_65216__$1;
(statearr_65224_65237[(2)] = null);

(statearr_65224_65237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65217 === (7))){
var inst_65212 = (state_65216[(2)]);
var state_65216__$1 = state_65216;
var statearr_65225_65238 = state_65216__$1;
(statearr_65225_65238[(2)] = inst_65212);

(statearr_65225_65238[(1)] = (3));


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
});})(c__48619__auto__))
;
return ((function (switch__48554__auto__,c__48619__auto__){
return (function() {
var speech$core$state_machine__48555__auto__ = null;
var speech$core$state_machine__48555__auto____0 = (function (){
var statearr_65229 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65229[(0)] = speech$core$state_machine__48555__auto__);

(statearr_65229[(1)] = (1));

return statearr_65229;
});
var speech$core$state_machine__48555__auto____1 = (function (state_65216){
while(true){
var ret_value__48556__auto__ = (function (){try{while(true){
var result__48557__auto__ = switch__48554__auto__.call(null,state_65216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48557__auto__;
}
break;
}
}catch (e65230){if((e65230 instanceof Object)){
var ex__48558__auto__ = e65230;
var statearr_65231_65239 = state_65216;
(statearr_65231_65239[(5)] = ex__48558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65240 = state_65216;
state_65216 = G__65240;
continue;
} else {
return ret_value__48556__auto__;
}
break;
}
});
speech$core$state_machine__48555__auto__ = function(state_65216){
switch(arguments.length){
case 0:
return speech$core$state_machine__48555__auto____0.call(this);
case 1:
return speech$core$state_machine__48555__auto____1.call(this,state_65216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
speech$core$state_machine__48555__auto__.cljs$core$IFn$_invoke$arity$0 = speech$core$state_machine__48555__auto____0;
speech$core$state_machine__48555__auto__.cljs$core$IFn$_invoke$arity$1 = speech$core$state_machine__48555__auto____1;
return speech$core$state_machine__48555__auto__;
})()
;})(switch__48554__auto__,c__48619__auto__))
})();
var state__48621__auto__ = (function (){var statearr_65232 = f__48620__auto__.call(null);
(statearr_65232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48619__auto__);

return statearr_65232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48621__auto__);
});})(c__48619__auto__))
);

return c__48619__auto__;
})();
if(typeof speech.core.SpeechInteraction !== 'undefined'){
} else {
/**
 * @constructor
 */
speech.core.SpeechInteraction = (function speech$core$SpeechInteraction(){
var this__55394__auto__ = this;
React.Component.apply(this__55394__auto__,arguments);

if(!((this__55394__auto__.initLocalState == null))){
this__55394__auto__.state = this__55394__auto__.initLocalState();
} else {
this__55394__auto__.state = {};
}

return this__55394__auto__;
});

speech.core.SpeechInteraction.prototype = goog.object.clone(React.Component.prototype);
}

var x65245_65257 = speech.core.SpeechInteraction.prototype;
x65245_65257.componentWillUpdate = ((function (x65245_65257){
return (function (next_props__55299__auto__,next_state__55300__auto__){
var this__55298__auto__ = this;
if(((!((this__55298__auto__ == null)))?(((false) || (this__55298__auto__.om$next$Ident$))?true:false):false)){
var ident__55302__auto___65258 = om.next.ident.call(null,this__55298__auto__,om.next.props.call(null,this__55298__auto__));
var next_ident__55303__auto___65259 = om.next.ident.call(null,this__55298__auto__,om.next._next_props.call(null,next_props__55299__auto__,this__55298__auto__));
if(cljs.core.not_EQ_.call(null,ident__55302__auto___65258,next_ident__55303__auto___65259)){
var idxr__55304__auto___65260 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__55298__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__55304__auto___65260 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__55304__auto___65260),((function (idxr__55304__auto___65260,ident__55302__auto___65258,next_ident__55303__auto___65259,this__55298__auto__,x65245_65257){
return (function (indexes__55305__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__55305__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__55302__auto___65258], null),cljs.core.disj,this__55298__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__55303__auto___65259], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__55298__auto__);
});})(idxr__55304__auto___65260,ident__55302__auto___65258,next_ident__55303__auto___65259,this__55298__auto__,x65245_65257))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__55298__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__55298__auto__);
});})(x65245_65257))
;

x65245_65257.shouldComponentUpdate = ((function (x65245_65257){
return (function (next_props__55299__auto__,next_state__55300__auto__){
var this__55298__auto__ = this;
var next_children__55301__auto__ = next_props__55299__auto__.children;
var next_props__55299__auto____$1 = goog.object.get(next_props__55299__auto__,"omcljs$value");
var next_props__55299__auto____$2 = (function (){var G__65247 = next_props__55299__auto____$1;
if((next_props__55299__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__65247);
} else {
return G__65247;
}
})();
var or__44234__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__55298__auto__),next_props__55299__auto____$2);
if(or__44234__auto__){
return or__44234__auto__;
} else {
var or__44234__auto____$1 = (function (){var and__44222__auto__ = this__55298__auto__.state;
if(cljs.core.truth_(and__44222__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__55298__auto__.state,"omcljs$state"),goog.object.get(next_state__55300__auto__,"omcljs$state"));
} else {
return and__44222__auto__;
}
})();
if(cljs.core.truth_(or__44234__auto____$1)){
return or__44234__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__55298__auto__.props.children,next_children__55301__auto__);
}
}
});})(x65245_65257))
;

x65245_65257.componentWillUnmount = ((function (x65245_65257){
return (function (){
var this__55298__auto__ = this;
var r__55309__auto__ = om.next.get_reconciler.call(null,this__55298__auto__);
var cfg__55310__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__55309__auto__);
var st__55311__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__55310__auto__);
var indexer__55308__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__55310__auto__);
if(cljs.core.truth_((function (){var and__44222__auto__ = !((st__55311__auto__ == null));
if(and__44222__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__55311__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__55298__auto__], null));
} else {
return and__44222__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__55311__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__55298__auto__);
} else {
}

if((indexer__55308__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__55308__auto__,this__55298__auto__);
}
});})(x65245_65257))
;

x65245_65257.componentDidUpdate = ((function (x65245_65257){
return (function (prev_props__55306__auto__,prev_state__55307__auto__){
var this__55298__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__55298__auto__);
});})(x65245_65257))
;

x65245_65257.isMounted = ((function (x65245_65257){
return (function (){
var this__55298__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__55298__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x65245_65257))
;

x65245_65257.componentWillMount = ((function (x65245_65257){
return (function (){
var this__55298__auto__ = this;
var indexer__55308__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__55298__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__55308__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__55308__auto__,this__55298__auto__);
}
});})(x65245_65257))
;

x65245_65257.render = ((function (x65245_65257){
return (function (){
var this__55297__auto__ = this;
var this$ = this__55297__auto__;
var _STAR_reconciler_STAR_65248 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_65249 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_65250 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_65251 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_65252 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__55297__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__55297__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__55297__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__55297__auto__);

om.next._STAR_parent_STAR_ = this__55297__auto__;

try{var map__65253 = om.next.props.call(null,this$);
var map__65253__$1 = ((((!((map__65253 == null)))?((((map__65253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65253):map__65253);
var last = cljs.core.get.call(null,map__65253__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return om.dom.span.call(null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.button.call(null,({"onClick": speech.core.start, "key": "button"}),"Talk to me")], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_65252;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_65251;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_65250;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_65249;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_65248;
}});})(x65245_65257))
;


speech.core.SpeechInteraction.prototype.constructor = speech.core.SpeechInteraction;

speech.core.SpeechInteraction.prototype.constructor.displayName = "speech.core/SpeechInteraction";

speech.core.SpeechInteraction.prototype.om$isComponent = true;

var x65255_65261 = speech.core.SpeechInteraction;
/** @nocollapse */
x65255_65261.om$next$IQuery$ = true;

/** @nocollapse */
x65255_65261.om$next$IQuery$query$arity$1 = ((function (x65255_65261){
return (function (props){
var props__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null);
});})(x65255_65261))
;


var x65256_65262 = speech.core.SpeechInteraction.prototype;

x65256_65262.om$next$IQuery$ = true;


x65256_65262.om$next$IQuery$query$arity$1 = ((function (x65256_65262){
return (function (props){
var props__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null);
});})(x65256_65262))
;


speech.core.SpeechInteraction.cljs$lang$type = true;

speech.core.SpeechInteraction.cljs$lang$ctorStr = "speech.core/SpeechInteraction";

speech.core.SpeechInteraction.cljs$lang$ctorPrWriter = (function (this__55397__auto__,writer__55398__auto__,opt__55399__auto__){
return cljs.core._write.call(null,writer__55398__auto__,"speech.core/SpeechInteraction");
});
speech.core.utter = (function speech$core$utter(var_args){
var args65263 = [];
var len__45309__auto___65269 = arguments.length;
var i__45310__auto___65270 = (0);
while(true){
if((i__45310__auto___65270 < len__45309__auto___65269)){
args65263.push((arguments[i__45310__auto___65270]));

var G__65271 = (i__45310__auto___65270 + (1));
i__45310__auto___65270 = G__65271;
continue;
} else {
}
break;
}

var G__65265 = args65263.length;
switch (G__65265) {
case 1:
return speech.core.utter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speech.core.utter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65263.length)].join('')));

}
});

speech.core.utter.cljs$core$IFn$_invoke$arity$1 = (function (utterance){
return speech.core.utter.call(null,utterance,cljs.core.PersistentArrayMap.EMPTY);
});

speech.core.utter.cljs$core$IFn$_invoke$arity$2 = (function (utterance,p__65266){
var map__65267 = p__65266;
var map__65267__$1 = ((((!((map__65267 == null)))?((((map__65267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65267):map__65267);
var type = cljs.core.get.call(null,map__65267__$1,new cljs.core.Keyword("mode","type","mode/type",1170409007));
return null;
});

speech.core.utter.cljs$lang$maxFixedArity = 2;

speech.core.utter.call(null,"open paren");
speech.core.utter.call(null,"type defn");
speech.core.utter.call(null,"open vector");
speech.core.utter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["open parent","open paren"], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speech.core","speech.core",-944794083),new cljs.core.Keyword(null,"speech-interaction-card","speech-interaction-card",603877648)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"speech-interaction-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof speech.core.t_speech$core65273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
speech.core.t_speech$core65273 = (function (meta65274){
this.meta65274 = meta65274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

speech.core.t_speech$core65273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65275,meta65274__$1){
var self__ = this;
var _65275__$1 = this;
return (new speech.core.t_speech$core65273(meta65274__$1));
});


speech.core.t_speech$core65273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65275){
var self__ = this;
var _65275__$1 = this;
return self__.meta65274;
});


speech.core.t_speech$core65273.prototype.devcards$core$IDevcard$ = true;


speech.core.t_speech$core65273.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this__57271__auto__,devcard_opts__57272__auto__){
var self__ = this;
var this__57271__auto____$1 = this;
var init_data__57273__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcard_opts__57272__auto__);
var state__57274__auto__ = ((om.next.reconciler_QMARK_.call(null,speech.core.r))?null:(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,init_data__57273__auto__))?init_data__57273__auto__:((!(cljs.core.empty_QMARK_.call(null,init_data__57273__auto__)))?cljs.core.atom.call(null,init_data__57273__auto__):((cljs.core.map_QMARK_.call(null,speech.core.r))?cljs.core.atom.call(null,speech.core.r):(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,speech.core.r))?speech.core.r:cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)
)))));
var reconciler__57275__auto__ = ((om.next.reconciler_QMARK_.call(null,speech.core.r))?speech.core.r:om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__57274__auto__,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),((function (init_data__57273__auto__,state__57274__auto__,this__57271__auto____$1){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),state__57274__auto__], null);
});})(init_data__57273__auto__,state__57274__auto__,this__57271__auto____$1))
], null))], null)));
var main_obj__57276__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256),(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?((function (init_data__57273__auto__,state__57274__auto__,reconciler__57275__auto__,this__57271__auto____$1){
return (function (p1__57270__57277__auto__){
return om.next.add_root_BANG_.call(null,reconciler__57275__auto__,speech.core.SpeechInteraction,p1__57270__57277__auto__);
});})(init_data__57273__auto__,state__57274__auto__,reconciler__57275__auto__,this__57271__auto____$1))
:((function (init_data__57273__auto__,state__57274__auto__,reconciler__57275__auto__,this__57271__auto____$1){
return (function (){
return om.next.protocols.add_root_BANG_.call(null,reconciler__57275__auto__,speech.core.SpeechInteraction,null,null);
});})(init_data__57273__auto__,state__57274__auto__,reconciler__57275__auto__,this__57271__auto____$1))
),new cljs.core.Keyword(null,"data_atom","data_atom",257894504),om.next.app_state.call(null,reconciler__57275__auto__),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__57275__auto__,new cljs.core.Keyword(null,"component","component",1555936782),speech.core.SpeechInteraction], null);
var card__57278__auto__ = devcards.core.add_environment_defaults.call(null,cljs.core.assoc.call(null,devcard_opts__57272__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),main_obj__57276__auto__,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__57272__auto__)))));
return React.createElement(devcards_om_next.core.OmNextNode,(function (){var obj65277 = {"card":card__57278__auto__};
return obj65277;
})());
});

speech.core.t_speech$core65273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta65274","meta65274",-410951946,null)], null);
});

speech.core.t_speech$core65273.cljs$lang$type = true;

speech.core.t_speech$core65273.cljs$lang$ctorStr = "speech.core/t_speech$core65273";

speech.core.t_speech$core65273.cljs$lang$ctorPrWriter = (function (this__44840__auto__,writer__44841__auto__,opt__44842__auto__){
return cljs.core._write.call(null,writer__44841__auto__,"speech.core/t_speech$core65273");
});

speech.core.__GT_t_speech$core65273 = (function speech$core$__GT_t_speech$core65273(meta65274){
return (new speech.core.t_speech$core65273(meta65274));
});

}

return (new speech.core.t_speech$core65273(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null)], null));
})], null));
if(typeof speech.core.root !== 'undefined'){
} else {
speech.core.root = cljs.core.atom.call(null,null);
}
speech.core.init = (function speech$core$init(){
if((cljs.core.deref.call(null,speech.core.root) == null)){
var target = document.getElementById("com-rigsomelight-devcards-main");
om.next.add_root_BANG_.call(null,speech.core.r,speech.core.SpeechInteraction,target);

return cljs.core.reset_BANG_.call(null,speech.core.root,speech.core.SpeechInteraction);
} else {
return om.next.app_root.call(null,speech.core.r).forceUpdate();
}
});

//# sourceMappingURL=core.js.map?rel=1476721967483