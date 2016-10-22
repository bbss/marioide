// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__43933__auto__ = (function (){var and__43921__auto__ = typeof Symbol !== 'undefined';
if(and__43921__auto__){
var and__43921__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__43921__auto____$1){
var and__43921__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__43921__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__43921__auto____$2;
}
} else {
return and__43921__auto____$1;
}
} else {
return and__43921__auto__;
}
})();
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__50316_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__50316_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args50317 = [];
var len__45008__auto___50320 = arguments.length;
var i__45009__auto___50321 = (0);
while(true){
if((i__45009__auto___50321 < len__45008__auto___50320)){
args50317.push((arguments[i__45009__auto___50321]));

var G__50322 = (i__45009__auto___50321 + (1));
i__45009__auto___50321 = G__50322;
continue;
} else {
}
break;
}

var G__50319 = args50317.length;
switch (G__50319) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50317.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__43921__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__43921__auto__){
var map__50330 = c;
var map__50330__$1 = ((((!((map__50330 == null)))?((((map__50330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50330):map__50330);
var path = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__50330__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__43921__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
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
var base__49651__auto___50336 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__43933__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__49651__auto___50336);
}

var seq__50332_50337 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__50333_50338 = null;
var count__50334_50339 = (0);
var i__50335_50340 = (0);
while(true){
if((i__50335_50340 < count__50334_50339)){
var property__49652__auto___50341 = cljs.core._nth.call(null,chunk__50333_50338,i__50335_50340);
if(cljs.core.truth_((base__49651__auto___50336[property__49652__auto___50341]))){
(devcards.core.CodeHighlight.prototype[property__49652__auto___50341] = (base__49651__auto___50336[property__49652__auto___50341]));
} else {
}

var G__50342 = seq__50332_50337;
var G__50343 = chunk__50333_50338;
var G__50344 = count__50334_50339;
var G__50345 = (i__50335_50340 + (1));
seq__50332_50337 = G__50342;
chunk__50333_50338 = G__50343;
count__50334_50339 = G__50344;
i__50335_50340 = G__50345;
continue;
} else {
var temp__4657__auto___50346 = cljs.core.seq.call(null,seq__50332_50337);
if(temp__4657__auto___50346){
var seq__50332_50347__$1 = temp__4657__auto___50346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50332_50347__$1)){
var c__44744__auto___50348 = cljs.core.chunk_first.call(null,seq__50332_50347__$1);
var G__50349 = cljs.core.chunk_rest.call(null,seq__50332_50347__$1);
var G__50350 = c__44744__auto___50348;
var G__50351 = cljs.core.count.call(null,c__44744__auto___50348);
var G__50352 = (0);
seq__50332_50337 = G__50349;
chunk__50333_50338 = G__50350;
count__50334_50339 = G__50351;
i__50335_50340 = G__50352;
continue;
} else {
var property__49652__auto___50353 = cljs.core.first.call(null,seq__50332_50347__$1);
if(cljs.core.truth_((base__49651__auto___50336[property__49652__auto___50353]))){
(devcards.core.CodeHighlight.prototype[property__49652__auto___50353] = (base__49651__auto___50336[property__49652__auto___50353]));
} else {
}

var G__50354 = cljs.core.next.call(null,seq__50332_50347__$1);
var G__50355 = null;
var G__50356 = (0);
var G__50357 = (0);
seq__50332_50337 = G__50354;
chunk__50333_50338 = G__50355;
count__50334_50339 = G__50356;
i__50335_50340 = G__50357;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__44858__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__44859__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__44860__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__44861__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__44862__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__44862__auto__,method_table__44858__auto__,prefer_table__44859__auto__,method_cache__44860__auto__,cached_hierarchy__44861__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__50358){
var map__50359 = p__50358;
var map__50359__$1 = ((((!((map__50359 == null)))?((((map__50359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50359):map__50359);
var content = cljs.core.get.call(null,map__50359__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__50361){
var map__50362 = p__50361;
var map__50362__$1 = ((((!((map__50362 == null)))?((((map__50362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50362):map__50362);
var block = map__50362__$1;
var content = cljs.core.get.call(null,map__50362__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__45015__auto__ = [];
var len__45008__auto___50365 = arguments.length;
var i__45009__auto___50366 = (0);
while(true){
if((i__45009__auto___50366 < len__45008__auto___50365)){
args__45015__auto__.push((arguments[i__45009__auto___50366]));

var G__50367 = (i__45009__auto___50366 + (1));
i__45009__auto___50366 = G__50367;
continue;
} else {
}
break;
}

var argseq__45016__auto__ = ((((0) < args__45015__auto__.length))?(new cljs.core.IndexedSeq(args__45015__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__45016__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq50364){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50364));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__50369 = devcards.system.devcards_rendered_card_class;
var G__50369__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__50369),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__50369);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__50369__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__50369__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args50370 = [];
var len__45008__auto___50378 = arguments.length;
var i__45009__auto___50379 = (0);
while(true){
if((i__45009__auto___50379 < len__45008__auto___50378)){
args50370.push((arguments[i__45009__auto___50379]));

var G__50380 = (i__45009__auto___50379 + (1));
i__45009__auto___50379 = G__50380;
continue;
} else {
}
break;
}

var G__50372 = args50370.length;
switch (G__50372) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50370.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__50373 = card;
var map__50373__$1 = ((((!((map__50373 == null)))?((((map__50373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50373):map__50373);
var path = cljs.core.get.call(null,map__50373__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__50373__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__50373,map__50373__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__50373,map__50373__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs50375 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs50375))?sablono.interpreter.attributes.call(null,attrs50375):null),((cljs.core.map_QMARK_.call(null,attrs50375))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50375)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__44596__auto__ = (((this$ == null))?null:this$);
var m__44597__auto__ = (devcards.core._devcard_options[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,this$,devcard_opts);
} else {
var m__44597__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__44596__auto__ = (((this$ == null))?null:this$);
var m__44597__auto__ = (devcards.core._devcard[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,this$,devcard_opts);
} else {
var m__44597__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__49651__auto___50387 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs50382 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50382))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs50382)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs50382))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50382)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__49651__auto___50387);
}

var seq__50383_50388 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__50384_50389 = null;
var count__50385_50390 = (0);
var i__50386_50391 = (0);
while(true){
if((i__50386_50391 < count__50385_50390)){
var property__49652__auto___50392 = cljs.core._nth.call(null,chunk__50384_50389,i__50386_50391);
if(cljs.core.truth_((base__49651__auto___50387[property__49652__auto___50392]))){
(devcards.core.DontUpdate.prototype[property__49652__auto___50392] = (base__49651__auto___50387[property__49652__auto___50392]));
} else {
}

var G__50393 = seq__50383_50388;
var G__50394 = chunk__50384_50389;
var G__50395 = count__50385_50390;
var G__50396 = (i__50386_50391 + (1));
seq__50383_50388 = G__50393;
chunk__50384_50389 = G__50394;
count__50385_50390 = G__50395;
i__50386_50391 = G__50396;
continue;
} else {
var temp__4657__auto___50397 = cljs.core.seq.call(null,seq__50383_50388);
if(temp__4657__auto___50397){
var seq__50383_50398__$1 = temp__4657__auto___50397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50383_50398__$1)){
var c__44744__auto___50399 = cljs.core.chunk_first.call(null,seq__50383_50398__$1);
var G__50400 = cljs.core.chunk_rest.call(null,seq__50383_50398__$1);
var G__50401 = c__44744__auto___50399;
var G__50402 = cljs.core.count.call(null,c__44744__auto___50399);
var G__50403 = (0);
seq__50383_50388 = G__50400;
chunk__50384_50389 = G__50401;
count__50385_50390 = G__50402;
i__50386_50391 = G__50403;
continue;
} else {
var property__49652__auto___50404 = cljs.core.first.call(null,seq__50383_50398__$1);
if(cljs.core.truth_((base__49651__auto___50387[property__49652__auto___50404]))){
(devcards.core.DontUpdate.prototype[property__49652__auto___50404] = (base__49651__auto___50387[property__49652__auto___50404]));
} else {
}

var G__50405 = cljs.core.next.call(null,seq__50383_50398__$1);
var G__50406 = null;
var G__50407 = (0);
var G__50408 = (0);
seq__50383_50388 = G__50405;
chunk__50384_50389 = G__50406;
count__50385_50390 = G__50407;
i__50386_50391 = G__50408;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__43933__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__44767__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__44767__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__44767__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__44767__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44767__auto____$3);
})(),x__44767__auto____$2);
})(),x__44767__auto____$1);
})(),x__44767__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__49651__auto___50415 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__43933__auto__ = (function (){var and__43921__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__43921__auto__)){
return this$.state;
} else {
return and__43921__auto__;
}
})();
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__43921__auto__ = data_atom;
if(cljs.core.truth_(and__43921__auto__)){
return id;
} else {
return and__43921__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__49651__auto___50415);
}

var seq__50411_50416 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__50412_50417 = null;
var count__50413_50418 = (0);
var i__50414_50419 = (0);
while(true){
if((i__50414_50419 < count__50413_50418)){
var property__49652__auto___50420 = cljs.core._nth.call(null,chunk__50412_50417,i__50414_50419);
if(cljs.core.truth_((base__49651__auto___50415[property__49652__auto___50420]))){
(devcards.core.DevcardBase.prototype[property__49652__auto___50420] = (base__49651__auto___50415[property__49652__auto___50420]));
} else {
}

var G__50421 = seq__50411_50416;
var G__50422 = chunk__50412_50417;
var G__50423 = count__50413_50418;
var G__50424 = (i__50414_50419 + (1));
seq__50411_50416 = G__50421;
chunk__50412_50417 = G__50422;
count__50413_50418 = G__50423;
i__50414_50419 = G__50424;
continue;
} else {
var temp__4657__auto___50425 = cljs.core.seq.call(null,seq__50411_50416);
if(temp__4657__auto___50425){
var seq__50411_50426__$1 = temp__4657__auto___50425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50411_50426__$1)){
var c__44744__auto___50427 = cljs.core.chunk_first.call(null,seq__50411_50426__$1);
var G__50428 = cljs.core.chunk_rest.call(null,seq__50411_50426__$1);
var G__50429 = c__44744__auto___50427;
var G__50430 = cljs.core.count.call(null,c__44744__auto___50427);
var G__50431 = (0);
seq__50411_50416 = G__50428;
chunk__50412_50417 = G__50429;
count__50413_50418 = G__50430;
i__50414_50419 = G__50431;
continue;
} else {
var property__49652__auto___50432 = cljs.core.first.call(null,seq__50411_50426__$1);
if(cljs.core.truth_((base__49651__auto___50415[property__49652__auto___50432]))){
(devcards.core.DevcardBase.prototype[property__49652__auto___50432] = (base__49651__auto___50415[property__49652__auto___50432]));
} else {
}

var G__50433 = cljs.core.next.call(null,seq__50411_50426__$1);
var G__50434 = null;
var G__50435 = (0);
var G__50436 = (0);
seq__50411_50416 = G__50433;
chunk__50412_50417 = G__50434;
count__50413_50418 = G__50435;
i__50414_50419 = G__50436;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__49651__auto___50441 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__43921__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__43921__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__43921__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__49651__auto___50441);
}

var seq__50437_50442 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__50438_50443 = null;
var count__50439_50444 = (0);
var i__50440_50445 = (0);
while(true){
if((i__50440_50445 < count__50439_50444)){
var property__49652__auto___50446 = cljs.core._nth.call(null,chunk__50438_50443,i__50440_50445);
if(cljs.core.truth_((base__49651__auto___50441[property__49652__auto___50446]))){
(devcards.core.DomComponent.prototype[property__49652__auto___50446] = (base__49651__auto___50441[property__49652__auto___50446]));
} else {
}

var G__50447 = seq__50437_50442;
var G__50448 = chunk__50438_50443;
var G__50449 = count__50439_50444;
var G__50450 = (i__50440_50445 + (1));
seq__50437_50442 = G__50447;
chunk__50438_50443 = G__50448;
count__50439_50444 = G__50449;
i__50440_50445 = G__50450;
continue;
} else {
var temp__4657__auto___50451 = cljs.core.seq.call(null,seq__50437_50442);
if(temp__4657__auto___50451){
var seq__50437_50452__$1 = temp__4657__auto___50451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50437_50452__$1)){
var c__44744__auto___50453 = cljs.core.chunk_first.call(null,seq__50437_50452__$1);
var G__50454 = cljs.core.chunk_rest.call(null,seq__50437_50452__$1);
var G__50455 = c__44744__auto___50453;
var G__50456 = cljs.core.count.call(null,c__44744__auto___50453);
var G__50457 = (0);
seq__50437_50442 = G__50454;
chunk__50438_50443 = G__50455;
count__50439_50444 = G__50456;
i__50440_50445 = G__50457;
continue;
} else {
var property__49652__auto___50458 = cljs.core.first.call(null,seq__50437_50452__$1);
if(cljs.core.truth_((base__49651__auto___50441[property__49652__auto___50458]))){
(devcards.core.DomComponent.prototype[property__49652__auto___50458] = (base__49651__auto___50441[property__49652__auto___50458]));
} else {
}

var G__50459 = cljs.core.next.call(null,seq__50437_50452__$1);
var G__50460 = null;
var G__50461 = (0);
var G__50462 = (0);
seq__50437_50442 = G__50459;
chunk__50438_50443 = G__50460;
count__50439_50444 = G__50461;
i__50440_50445 = G__50462;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__43933__auto__ = x === true;
if(or__43933__auto__){
return or__43933__auto__;
} else {
var or__43933__auto____$1 = x === false;
if(or__43933__auto____$1){
return or__43933__auto____$1;
} else {
var or__43933__auto____$2 = (x == null);
if(or__43933__auto____$2){
return or__43933__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__43933__auto__ = typeof x === 'string';
if(or__43933__auto__){
return or__43933__auto__;
} else {
var or__43933__auto____$1 = (x == null);
if(or__43933__auto____$1){
return or__43933__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__43933__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__50463_SHARP_){
return !(p1__50463_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__50472 = opts;
var map__50472__$1 = ((((!((map__50472 == null)))?((((map__50472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50472):map__50472);
var name = cljs.core.get.call(null,map__50472__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__50472__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__50472__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__50472__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__43933__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__43933__auto__){
return or__43933__auto__;
} else {
var or__43933__auto____$1 = (options == null);
if(or__43933__auto____$1){
return or__43933__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__43933__auto__ = (initial_data == null);
if(or__43933__auto__){
return or__43933__auto__;
} else {
var or__43933__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__43933__auto____$1){
return or__43933__auto____$1;
} else {
var or__43933__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__43933__auto____$2){
return or__43933__auto____$2;
} else {
var or__43933__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__43933__auto____$3){
return or__43933__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__50472,map__50472__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__50464_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__50464_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__50472,map__50472__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs50480 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs50480))?sablono.interpreter.attributes.call(null,attrs50480):null),((cljs.core.map_QMARK_.call(null,attrs50480))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50480)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs50484 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50484))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs50484)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs50484))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50484)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs50485 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50485))?sablono.interpreter.attributes.call(null,attrs50485):null),((cljs.core.map_QMARK_.call(null,attrs50485))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50485)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs50486 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50486))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs50486)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs50486))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50486)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__50487_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__50487_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44555__auto__,k__44556__auto__){
var self__ = this;
var this__44555__auto____$1 = this;
return cljs.core._lookup.call(null,this__44555__auto____$1,k__44556__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44557__auto__,k50489,else__44558__auto__){
var self__ = this;
var this__44557__auto____$1 = this;
var G__50491 = (((k50489 instanceof cljs.core.Keyword))?k50489.fqn:null);
switch (G__50491) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50489,else__44558__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44569__auto__,writer__44570__auto__,opts__44571__auto__){
var self__ = this;
var this__44569__auto____$1 = this;
var pr_pair__44572__auto__ = ((function (this__44569__auto____$1){
return (function (keyval__44573__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44570__auto__,cljs.core.pr_writer,""," ","",opts__44571__auto__,keyval__44573__auto__);
});})(this__44569__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44570__auto__,pr_pair__44572__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__44571__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50488){
var self__ = this;
var G__50488__$1 = this;
return (new cljs.core.RecordIter((0),G__50488__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44553__auto__){
var self__ = this;
var this__44553__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44549__auto__){
var self__ = this;
var this__44549__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44559__auto__){
var self__ = this;
var this__44559__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44550__auto__){
var self__ = this;
var this__44550__auto____$1 = this;
var h__44368__auto__ = self__.__hash;
if(!((h__44368__auto__ == null))){
return h__44368__auto__;
} else {
var h__44368__auto____$1 = cljs.core.hash_imap.call(null,this__44550__auto____$1);
self__.__hash = h__44368__auto____$1;

return h__44368__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__44551__auto__,other__44552__auto__){
var self__ = this;
var this__44551__auto____$1 = this;
if(cljs.core.truth_((function (){var and__43921__auto__ = other__44552__auto__;
if(cljs.core.truth_(and__43921__auto__)){
var and__43921__auto____$1 = (this__44551__auto____$1.constructor === other__44552__auto__.constructor);
if(and__43921__auto____$1){
return cljs.core.equiv_map.call(null,this__44551__auto____$1,other__44552__auto__);
} else {
return and__43921__auto____$1;
}
} else {
return and__43921__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44564__auto__,k__44565__auto__){
var self__ = this;
var this__44564__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__44565__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44564__auto____$1),self__.__meta),k__44565__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44565__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44562__auto__,k__44563__auto__,G__50488){
var self__ = this;
var this__44562__auto____$1 = this;
var pred__50492 = cljs.core.keyword_identical_QMARK_;
var expr__50493 = k__44563__auto__;
if(cljs.core.truth_(pred__50492.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__50493))){
return (new devcards.core.IdentiyOptions(G__50488,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44563__auto__,G__50488),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44567__auto__){
var self__ = this;
var this__44567__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44554__auto__,G__50488){
var self__ = this;
var this__44554__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__50488,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44560__auto__,entry__44561__auto__){
var self__ = this;
var this__44560__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44561__auto__)){
return cljs.core._assoc.call(null,this__44560__auto____$1,cljs.core._nth.call(null,entry__44561__auto__,(0)),cljs.core._nth.call(null,entry__44561__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44560__auto____$1,entry__44561__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__44589__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__44589__auto__,writer__44590__auto__){
return cljs.core._write.call(null,writer__44590__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__50490){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__50490),null,cljs.core.dissoc.call(null,G__50490,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__50496){
var map__50499 = p__50496;
var map__50499__$1 = ((((!((map__50499 == null)))?((((map__50499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50499):map__50499);
var devcard_opts = map__50499__$1;
var options = cljs.core.get.call(null,map__50499__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__50499,map__50499__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__50499,map__50499__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44555__auto__,k__44556__auto__){
var self__ = this;
var this__44555__auto____$1 = this;
return cljs.core._lookup.call(null,this__44555__auto____$1,k__44556__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44557__auto__,k50502,else__44558__auto__){
var self__ = this;
var this__44557__auto____$1 = this;
var G__50504 = (((k50502 instanceof cljs.core.Keyword))?k50502.fqn:null);
switch (G__50504) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50502,else__44558__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44569__auto__,writer__44570__auto__,opts__44571__auto__){
var self__ = this;
var this__44569__auto____$1 = this;
var pr_pair__44572__auto__ = ((function (this__44569__auto____$1){
return (function (keyval__44573__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44570__auto__,cljs.core.pr_writer,""," ","",opts__44571__auto__,keyval__44573__auto__);
});})(this__44569__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44570__auto__,pr_pair__44572__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__44571__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50501){
var self__ = this;
var G__50501__$1 = this;
return (new cljs.core.RecordIter((0),G__50501__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44553__auto__){
var self__ = this;
var this__44553__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44549__auto__){
var self__ = this;
var this__44549__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44559__auto__){
var self__ = this;
var this__44559__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44550__auto__){
var self__ = this;
var this__44550__auto____$1 = this;
var h__44368__auto__ = self__.__hash;
if(!((h__44368__auto__ == null))){
return h__44368__auto__;
} else {
var h__44368__auto____$1 = cljs.core.hash_imap.call(null,this__44550__auto____$1);
self__.__hash = h__44368__auto____$1;

return h__44368__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__44551__auto__,other__44552__auto__){
var self__ = this;
var this__44551__auto____$1 = this;
if(cljs.core.truth_((function (){var and__43921__auto__ = other__44552__auto__;
if(cljs.core.truth_(and__43921__auto__)){
var and__43921__auto____$1 = (this__44551__auto____$1.constructor === other__44552__auto__.constructor);
if(and__43921__auto____$1){
return cljs.core.equiv_map.call(null,this__44551__auto____$1,other__44552__auto__);
} else {
return and__43921__auto____$1;
}
} else {
return and__43921__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44564__auto__,k__44565__auto__){
var self__ = this;
var this__44564__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__44565__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44564__auto____$1),self__.__meta),k__44565__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44565__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44562__auto__,k__44563__auto__,G__50501){
var self__ = this;
var this__44562__auto____$1 = this;
var pred__50505 = cljs.core.keyword_identical_QMARK_;
var expr__50506 = k__44563__auto__;
if(cljs.core.truth_(pred__50505.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__50506))){
return (new devcards.core.AtomLikeOptions(G__50501,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44563__auto__,G__50501),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44567__auto__){
var self__ = this;
var this__44567__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44554__auto__,G__50501){
var self__ = this;
var this__44554__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__50501,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44560__auto__,entry__44561__auto__){
var self__ = this;
var this__44560__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44561__auto__)){
return cljs.core._assoc.call(null,this__44560__auto____$1,cljs.core._nth.call(null,entry__44561__auto__,(0)),cljs.core._nth.call(null,entry__44561__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44560__auto____$1,entry__44561__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__44589__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__44589__auto__,writer__44590__auto__){
return cljs.core._write.call(null,writer__44590__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__50503){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__50503),null,cljs.core.dissoc.call(null,G__50503,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44555__auto__,k__44556__auto__){
var self__ = this;
var this__44555__auto____$1 = this;
return cljs.core._lookup.call(null,this__44555__auto____$1,k__44556__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44557__auto__,k50512,else__44558__auto__){
var self__ = this;
var this__44557__auto____$1 = this;
var G__50514 = (((k50512 instanceof cljs.core.Keyword))?k50512.fqn:null);
switch (G__50514) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50512,else__44558__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44569__auto__,writer__44570__auto__,opts__44571__auto__){
var self__ = this;
var this__44569__auto____$1 = this;
var pr_pair__44572__auto__ = ((function (this__44569__auto____$1){
return (function (keyval__44573__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44570__auto__,cljs.core.pr_writer,""," ","",opts__44571__auto__,keyval__44573__auto__);
});})(this__44569__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44570__auto__,pr_pair__44572__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__44571__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50511){
var self__ = this;
var G__50511__$1 = this;
return (new cljs.core.RecordIter((0),G__50511__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44553__auto__){
var self__ = this;
var this__44553__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44549__auto__){
var self__ = this;
var this__44549__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44559__auto__){
var self__ = this;
var this__44559__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44550__auto__){
var self__ = this;
var this__44550__auto____$1 = this;
var h__44368__auto__ = self__.__hash;
if(!((h__44368__auto__ == null))){
return h__44368__auto__;
} else {
var h__44368__auto____$1 = cljs.core.hash_imap.call(null,this__44550__auto____$1);
self__.__hash = h__44368__auto____$1;

return h__44368__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__44551__auto__,other__44552__auto__){
var self__ = this;
var this__44551__auto____$1 = this;
if(cljs.core.truth_((function (){var and__43921__auto__ = other__44552__auto__;
if(cljs.core.truth_(and__43921__auto__)){
var and__43921__auto____$1 = (this__44551__auto____$1.constructor === other__44552__auto__.constructor);
if(and__43921__auto____$1){
return cljs.core.equiv_map.call(null,this__44551__auto____$1,other__44552__auto__);
} else {
return and__43921__auto____$1;
}
} else {
return and__43921__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44564__auto__,k__44565__auto__){
var self__ = this;
var this__44564__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__44565__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44564__auto____$1),self__.__meta),k__44565__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44565__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44562__auto__,k__44563__auto__,G__50511){
var self__ = this;
var this__44562__auto____$1 = this;
var pred__50515 = cljs.core.keyword_identical_QMARK_;
var expr__50516 = k__44563__auto__;
if(cljs.core.truth_(pred__50515.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__50516))){
return (new devcards.core.EdnLikeOptions(G__50511,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44563__auto__,G__50511),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44567__auto__){
var self__ = this;
var this__44567__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44554__auto__,G__50511){
var self__ = this;
var this__44554__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__50511,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44560__auto__,entry__44561__auto__){
var self__ = this;
var this__44560__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44561__auto__)){
return cljs.core._assoc.call(null,this__44560__auto____$1,cljs.core._nth.call(null,entry__44561__auto__,(0)),cljs.core._nth.call(null,entry__44561__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44560__auto____$1,entry__44561__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__44589__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__44589__auto__,writer__44590__auto__){
return cljs.core._write.call(null,writer__44590__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__50513){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__50513),null,cljs.core.dissoc.call(null,G__50513,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__43921__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__43921__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__43921__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__50530 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__50530 == null))){
if((false) || (G__50530.devcards$core$IDevcard$)){
return true;
} else {
if((!G__50530.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__50530);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__50530);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__50533 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__50533__$1 = ((((!((map__50533 == null)))?((((map__50533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50533):map__50533);
var history = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__50533__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__50537 = cljs.core.deref.call(null,history_atom);
var map__50537__$1 = ((((!((map__50537 == null)))?((((map__50537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50537):map__50537);
var history = cljs.core.get.call(null,map__50537__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__50537__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__50541 = cljs.core.deref.call(null,history_atom);
var map__50541__$1 = ((((!((map__50541 == null)))?((((map__50541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50541):map__50541);
var history = cljs.core.get.call(null,map__50541__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__50541__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__50545 = cljs.core.deref.call(null,history_atom);
var map__50545__$1 = ((((!((map__50545 == null)))?((((map__50545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50545):map__50545);
var history = cljs.core.get.call(null,map__50545__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__44767__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44767__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__43921__auto__ = data_atom;
if(cljs.core.truth_(and__43921__auto__)){
return id;
} else {
return and__43921__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__50547){
var map__50548 = p__50547;
var map__50548__$1 = ((((!((map__50548 == null)))?((((map__50548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50548):map__50548);
var ha = map__50548__$1;
var pointer = cljs.core.get.call(null,map__50548__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__50548__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__50548__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__43933__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__43933__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_50563 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_50563;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__44858__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__44859__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__44860__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__44861__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__44862__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__44862__auto__,method_table__44858__auto__,prefer_table__44859__auto__,method_cache__44860__auto__,cached_hierarchy__44861__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs50564 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50564))?sablono.interpreter.attributes.call(null,attrs50564):null),((cljs.core.map_QMARK_.call(null,attrs50564))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50564)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__50565,body){
var map__50569 = p__50565;
var map__50569__$1 = ((((!((map__50569 == null)))?((((map__50569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50569):map__50569);
var message = cljs.core.get.call(null,map__50569__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs50571 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs50571))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs50571)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs50571))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50571)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__50572){
var map__50580 = p__50572;
var map__50580__$1 = ((((!((map__50580 == null)))?((((map__50580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50580):map__50580);
var m = map__50580__$1;
var expected = cljs.core.get.call(null,map__50580__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__50580__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__50580__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs50582 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50582))?sablono.interpreter.attributes.call(null,attrs50582):null),((cljs.core.map_QMARK_.call(null,attrs50582))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50582),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs50589 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs50589))?sablono.interpreter.attributes.call(null,attrs50589):null),((cljs.core.map_QMARK_.call(null,attrs50589))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50589)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs50590 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50590))?sablono.interpreter.attributes.call(null,attrs50590):null),((cljs.core.map_QMARK_.call(null,attrs50590))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50590)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__50591){
var map__50592 = p__50591;
var map__50592__$1 = ((((!((map__50592 == null)))?((((map__50592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50592):map__50592);
var testing_contexts = cljs.core.get.call(null,map__50592__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs50594 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__50592,map__50592__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__50592,map__50592__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__44767__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44767__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50594))?sablono.interpreter.attributes.call(null,attrs50594):null),((cljs.core.map_QMARK_.call(null,attrs50594))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50594)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs50603 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__50604,p__50605){
var map__50606 = p__50604;
var map__50606__$1 = ((((!((map__50606 == null)))?((((map__50606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50606):map__50606);
var last_context = cljs.core.get.call(null,map__50606__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__50606__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__50607 = p__50605;
var i = cljs.core.nth.call(null,vec__50607,(0),null);
var t = cljs.core.nth.call(null,vec__50607,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__44767__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__44767__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50603))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs50603)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs50603))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50603)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__50623){
var map__50624 = p__50623;
var map__50624__$1 = ((((!((map__50624 == null)))?((((map__50624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50624):map__50624);
var type = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__50622 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__50622__$1 = ((((!((map__50622 == null)))?((((map__50622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50622):map__50622);
var fail = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1){
return (function (p__50627){
var map__50628 = p__50627;
var map__50628__$1 = ((((!((map__50628 == null)))?((((map__50628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50628):map__50628);
var type = cljs.core.get.call(null,map__50628__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1){
return (function (p__50630){
var map__50631 = p__50630;
var map__50631__$1 = ((((!((map__50631 == null)))?((((map__50631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50631):map__50631);
var type = cljs.core.get.call(null,map__50631__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__50622,map__50622__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__43933__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__){
return (function (state_50721){
var state_val_50722 = (state_50721[(1)]);
if((state_val_50722 === (7))){
var state_50721__$1 = state_50721;
var statearr_50723_50772 = state_50721__$1;
(statearr_50723_50772[(2)] = false);

(statearr_50723_50772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (20))){
var inst_50660 = (state_50721[(7)]);
var inst_50679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50660);
var state_50721__$1 = state_50721;
var statearr_50724_50773 = state_50721__$1;
(statearr_50724_50773[(2)] = inst_50679);

(statearr_50724_50773[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (27))){
var inst_50684 = (state_50721[(8)]);
var inst_50696 = (state_50721[(9)]);
var inst_50700 = inst_50684.call(null,inst_50696);
var state_50721__$1 = state_50721;
var statearr_50725_50774 = state_50721__$1;
(statearr_50725_50774[(2)] = inst_50700);

(statearr_50725_50774[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (1))){
var state_50721__$1 = state_50721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50721__$1,(2),devcards.core.test_channel);
} else {
if((state_val_50722 === (24))){
var state_50721__$1 = state_50721;
var statearr_50726_50775 = state_50721__$1;
(statearr_50726_50775[(2)] = null);

(statearr_50726_50775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (4))){
var state_50721__$1 = state_50721;
var statearr_50727_50776 = state_50721__$1;
(statearr_50727_50776[(2)] = false);

(statearr_50727_50776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (15))){
var state_50721__$1 = state_50721;
var statearr_50728_50777 = state_50721__$1;
(statearr_50728_50777[(2)] = false);

(statearr_50728_50777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (21))){
var inst_50660 = (state_50721[(7)]);
var state_50721__$1 = state_50721;
var statearr_50729_50778 = state_50721__$1;
(statearr_50729_50778[(2)] = inst_50660);

(statearr_50729_50778[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (13))){
var inst_50719 = (state_50721[(2)]);
var state_50721__$1 = state_50721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50721__$1,inst_50719);
} else {
if((state_val_50722 === (22))){
var inst_50683 = (state_50721[(10)]);
var inst_50682 = (state_50721[(2)]);
var inst_50683__$1 = cljs.core.get.call(null,inst_50682,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_50684 = cljs.core.get.call(null,inst_50682,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_50721__$1 = (function (){var statearr_50730 = state_50721;
(statearr_50730[(8)] = inst_50684);

(statearr_50730[(10)] = inst_50683__$1);

return statearr_50730;
})();
if(cljs.core.truth_(inst_50683__$1)){
var statearr_50731_50779 = state_50721__$1;
(statearr_50731_50779[(1)] = (23));

} else {
var statearr_50732_50780 = state_50721__$1;
(statearr_50732_50780[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (29))){
var inst_50710 = (state_50721[(2)]);
var inst_50711 = cljs.test.clear_env_BANG_.call(null);
var state_50721__$1 = (function (){var statearr_50733 = state_50721;
(statearr_50733[(11)] = inst_50711);

(statearr_50733[(12)] = inst_50710);

return statearr_50733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50721__$1,(30),devcards.core.test_channel);
} else {
if((state_val_50722 === (6))){
var state_50721__$1 = state_50721;
var statearr_50734_50781 = state_50721__$1;
(statearr_50734_50781[(2)] = true);

(statearr_50734_50781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (28))){
var inst_50684 = (state_50721[(8)]);
var inst_50702 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_50703 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_50704 = cljs.core.PersistentHashMap.fromArrays(inst_50702,inst_50703);
var inst_50705 = devcards.core.collect_test.call(null,inst_50704);
var inst_50706 = cljs.test.get_current_env.call(null);
var inst_50707 = cljs.core.assoc.call(null,inst_50706,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_50708 = inst_50684.call(null,inst_50707);
var state_50721__$1 = (function (){var statearr_50735 = state_50721;
(statearr_50735[(13)] = inst_50705);

return statearr_50735;
})();
var statearr_50736_50782 = state_50721__$1;
(statearr_50736_50782[(2)] = inst_50708);

(statearr_50736_50782[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (25))){
var inst_50717 = (state_50721[(2)]);
var state_50721__$1 = state_50721;
var statearr_50737_50783 = state_50721__$1;
(statearr_50737_50783[(2)] = inst_50717);

(statearr_50737_50783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (17))){
var state_50721__$1 = state_50721;
var statearr_50738_50784 = state_50721__$1;
(statearr_50738_50784[(2)] = true);

(statearr_50738_50784[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (3))){
var inst_50637 = (state_50721[(14)]);
var inst_50642 = inst_50637.cljs$lang$protocol_mask$partition0$;
var inst_50643 = (inst_50642 & (64));
var inst_50644 = inst_50637.cljs$core$ISeq$;
var inst_50645 = (inst_50643) || (inst_50644);
var state_50721__$1 = state_50721;
if(cljs.core.truth_(inst_50645)){
var statearr_50739_50785 = state_50721__$1;
(statearr_50739_50785[(1)] = (6));

} else {
var statearr_50740_50786 = state_50721__$1;
(statearr_50740_50786[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (12))){
var inst_50660 = (state_50721[(7)]);
var inst_50664 = (inst_50660 == null);
var inst_50665 = cljs.core.not.call(null,inst_50664);
var state_50721__$1 = state_50721;
if(inst_50665){
var statearr_50741_50787 = state_50721__$1;
(statearr_50741_50787[(1)] = (14));

} else {
var statearr_50742_50788 = state_50721__$1;
(statearr_50742_50788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (2))){
var inst_50637 = (state_50721[(14)]);
var inst_50637__$1 = (state_50721[(2)]);
var inst_50639 = (inst_50637__$1 == null);
var inst_50640 = cljs.core.not.call(null,inst_50639);
var state_50721__$1 = (function (){var statearr_50743 = state_50721;
(statearr_50743[(14)] = inst_50637__$1);

return statearr_50743;
})();
if(inst_50640){
var statearr_50744_50789 = state_50721__$1;
(statearr_50744_50789[(1)] = (3));

} else {
var statearr_50745_50790 = state_50721__$1;
(statearr_50745_50790[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (23))){
var inst_50683 = (state_50721[(10)]);
var inst_50689 = (state_50721[(15)]);
var inst_50689__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_50690 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50691 = devcards.core.run_card_tests.call(null,inst_50683);
var inst_50692 = [inst_50691,inst_50689__$1];
var inst_50693 = (new cljs.core.PersistentVector(null,2,(5),inst_50690,inst_50692,null));
var state_50721__$1 = (function (){var statearr_50746 = state_50721;
(statearr_50746[(15)] = inst_50689__$1);

return statearr_50746;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_50721__$1,(26),inst_50693);
} else {
if((state_val_50722 === (19))){
var inst_50674 = (state_50721[(2)]);
var state_50721__$1 = state_50721;
var statearr_50747_50791 = state_50721__$1;
(statearr_50747_50791[(2)] = inst_50674);

(statearr_50747_50791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (11))){
var inst_50637 = (state_50721[(14)]);
var inst_50657 = (state_50721[(2)]);
var inst_50658 = cljs.core.get.call(null,inst_50657,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_50659 = cljs.core.get.call(null,inst_50657,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_50660 = inst_50637;
var state_50721__$1 = (function (){var statearr_50748 = state_50721;
(statearr_50748[(16)] = inst_50659);

(statearr_50748[(17)] = inst_50658);

(statearr_50748[(7)] = inst_50660);

return statearr_50748;
})();
var statearr_50749_50792 = state_50721__$1;
(statearr_50749_50792[(2)] = null);

(statearr_50749_50792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (9))){
var inst_50637 = (state_50721[(14)]);
var inst_50654 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50637);
var state_50721__$1 = state_50721;
var statearr_50750_50793 = state_50721__$1;
(statearr_50750_50793[(2)] = inst_50654);

(statearr_50750_50793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (5))){
var inst_50652 = (state_50721[(2)]);
var state_50721__$1 = state_50721;
if(cljs.core.truth_(inst_50652)){
var statearr_50751_50794 = state_50721__$1;
(statearr_50751_50794[(1)] = (9));

} else {
var statearr_50752_50795 = state_50721__$1;
(statearr_50752_50795[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (14))){
var inst_50660 = (state_50721[(7)]);
var inst_50667 = inst_50660.cljs$lang$protocol_mask$partition0$;
var inst_50668 = (inst_50667 & (64));
var inst_50669 = inst_50660.cljs$core$ISeq$;
var inst_50670 = (inst_50668) || (inst_50669);
var state_50721__$1 = state_50721;
if(cljs.core.truth_(inst_50670)){
var statearr_50753_50796 = state_50721__$1;
(statearr_50753_50796[(1)] = (17));

} else {
var statearr_50754_50797 = state_50721__$1;
(statearr_50754_50797[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (26))){
var inst_50689 = (state_50721[(15)]);
var inst_50695 = (state_50721[(2)]);
var inst_50696 = cljs.core.nth.call(null,inst_50695,(0),null);
var inst_50697 = cljs.core.nth.call(null,inst_50695,(1),null);
var inst_50698 = cljs.core.not_EQ_.call(null,inst_50697,inst_50689);
var state_50721__$1 = (function (){var statearr_50755 = state_50721;
(statearr_50755[(9)] = inst_50696);

return statearr_50755;
})();
if(inst_50698){
var statearr_50756_50798 = state_50721__$1;
(statearr_50756_50798[(1)] = (27));

} else {
var statearr_50757_50799 = state_50721__$1;
(statearr_50757_50799[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (16))){
var inst_50677 = (state_50721[(2)]);
var state_50721__$1 = state_50721;
if(cljs.core.truth_(inst_50677)){
var statearr_50758_50800 = state_50721__$1;
(statearr_50758_50800[(1)] = (20));

} else {
var statearr_50759_50801 = state_50721__$1;
(statearr_50759_50801[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (30))){
var inst_50713 = (state_50721[(2)]);
var inst_50660 = inst_50713;
var state_50721__$1 = (function (){var statearr_50760 = state_50721;
(statearr_50760[(7)] = inst_50660);

return statearr_50760;
})();
var statearr_50761_50802 = state_50721__$1;
(statearr_50761_50802[(2)] = null);

(statearr_50761_50802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (10))){
var inst_50637 = (state_50721[(14)]);
var state_50721__$1 = state_50721;
var statearr_50762_50803 = state_50721__$1;
(statearr_50762_50803[(2)] = inst_50637);

(statearr_50762_50803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (18))){
var state_50721__$1 = state_50721;
var statearr_50763_50804 = state_50721__$1;
(statearr_50763_50804[(2)] = false);

(statearr_50763_50804[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50722 === (8))){
var inst_50649 = (state_50721[(2)]);
var state_50721__$1 = state_50721;
var statearr_50764_50805 = state_50721__$1;
(statearr_50764_50805[(2)] = inst_50649);

(statearr_50764_50805[(1)] = (5));


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
});})(c__46239__auto__))
;
return ((function (switch__46127__auto__,c__46239__auto__){
return (function() {
var devcards$core$state_machine__46128__auto__ = null;
var devcards$core$state_machine__46128__auto____0 = (function (){
var statearr_50768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50768[(0)] = devcards$core$state_machine__46128__auto__);

(statearr_50768[(1)] = (1));

return statearr_50768;
});
var devcards$core$state_machine__46128__auto____1 = (function (state_50721){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_50721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e50769){if((e50769 instanceof Object)){
var ex__46131__auto__ = e50769;
var statearr_50770_50806 = state_50721;
(statearr_50770_50806[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50807 = state_50721;
state_50721 = G__50807;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
devcards$core$state_machine__46128__auto__ = function(state_50721){
switch(arguments.length){
case 0:
return devcards$core$state_machine__46128__auto____0.call(this);
case 1:
return devcards$core$state_machine__46128__auto____1.call(this,state_50721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__46128__auto____0;
devcards$core$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__46128__auto____1;
return devcards$core$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__))
})();
var state__46241__auto__ = (function (){var statearr_50771 = f__46240__auto__.call(null);
(statearr_50771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_50771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__))
);

return c__46239__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__49651__auto___50812 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__49651__auto___50812);
}

var seq__50808_50813 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__50809_50814 = null;
var count__50810_50815 = (0);
var i__50811_50816 = (0);
while(true){
if((i__50811_50816 < count__50810_50815)){
var property__49652__auto___50817 = cljs.core._nth.call(null,chunk__50809_50814,i__50811_50816);
if(cljs.core.truth_((base__49651__auto___50812[property__49652__auto___50817]))){
(devcards.core.TestDevcard.prototype[property__49652__auto___50817] = (base__49651__auto___50812[property__49652__auto___50817]));
} else {
}

var G__50818 = seq__50808_50813;
var G__50819 = chunk__50809_50814;
var G__50820 = count__50810_50815;
var G__50821 = (i__50811_50816 + (1));
seq__50808_50813 = G__50818;
chunk__50809_50814 = G__50819;
count__50810_50815 = G__50820;
i__50811_50816 = G__50821;
continue;
} else {
var temp__4657__auto___50822 = cljs.core.seq.call(null,seq__50808_50813);
if(temp__4657__auto___50822){
var seq__50808_50823__$1 = temp__4657__auto___50822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50808_50823__$1)){
var c__44744__auto___50824 = cljs.core.chunk_first.call(null,seq__50808_50823__$1);
var G__50825 = cljs.core.chunk_rest.call(null,seq__50808_50823__$1);
var G__50826 = c__44744__auto___50824;
var G__50827 = cljs.core.count.call(null,c__44744__auto___50824);
var G__50828 = (0);
seq__50808_50813 = G__50825;
chunk__50809_50814 = G__50826;
count__50810_50815 = G__50827;
i__50811_50816 = G__50828;
continue;
} else {
var property__49652__auto___50829 = cljs.core.first.call(null,seq__50808_50823__$1);
if(cljs.core.truth_((base__49651__auto___50812[property__49652__auto___50829]))){
(devcards.core.TestDevcard.prototype[property__49652__auto___50829] = (base__49651__auto___50812[property__49652__auto___50829]));
} else {
}

var G__50830 = cljs.core.next.call(null,seq__50808_50823__$1);
var G__50831 = null;
var G__50832 = (0);
var G__50833 = (0);
seq__50808_50813 = G__50830;
chunk__50809_50814 = G__50831;
count__50810_50815 = G__50832;
i__50811_50816 = G__50833;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__45015__auto__ = [];
var len__45008__auto___50838 = arguments.length;
var i__45009__auto___50839 = (0);
while(true){
if((i__45009__auto___50839 < len__45008__auto___50838)){
args__45015__auto__.push((arguments[i__45009__auto___50839]));

var G__50840 = (i__45009__auto___50839 + (1));
i__45009__auto___50839 = G__50840;
continue;
} else {
}
break;
}

var argseq__45016__auto__ = ((((0) < args__45015__auto__.length))?(new cljs.core.IndexedSeq(args__45015__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__45016__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core50835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core50835 = (function (test_thunks,meta50836){
this.test_thunks = test_thunks;
this.meta50836 = meta50836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core50835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50837,meta50836__$1){
var self__ = this;
var _50837__$1 = this;
return (new devcards.core.t_devcards$core50835(self__.test_thunks,meta50836__$1));
});

devcards.core.t_devcards$core50835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50837){
var self__ = this;
var _50837__$1 = this;
return self__.meta50836;
});

devcards.core.t_devcards$core50835.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core50835.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core50835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta50836","meta50836",1443616787,null)], null);
});

devcards.core.t_devcards$core50835.cljs$lang$type = true;

devcards.core.t_devcards$core50835.cljs$lang$ctorStr = "devcards.core/t_devcards$core50835";

devcards.core.t_devcards$core50835.cljs$lang$ctorPrWriter = (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"devcards.core/t_devcards$core50835");
});

devcards.core.__GT_t_devcards$core50835 = (function devcards$core$__GT_t_devcards$core50835(test_thunks__$1,meta50836){
return (new devcards.core.t_devcards$core50835(test_thunks__$1,meta50836));
});

}

return (new devcards.core.t_devcards$core50835(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq50834){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50834));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs50842 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50842))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs50842)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs50842))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50842)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs50844 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs50844))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs50844)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs50844))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50844)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__){
return (function (state_50874){
var state_val_50875 = (state_50874[(1)]);
if((state_val_50875 === (1))){
var inst_50865 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_50874__$1 = state_50874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50874__$1,(2),inst_50865);
} else {
if((state_val_50875 === (2))){
var inst_50867 = (state_50874[(2)]);
var inst_50868 = cljs.core.async.timeout.call(null,(100));
var state_50874__$1 = (function (){var statearr_50876 = state_50874;
(statearr_50876[(7)] = inst_50867);

return statearr_50876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50874__$1,(3),inst_50868);
} else {
if((state_val_50875 === (3))){
var inst_50870 = (state_50874[(2)]);
var inst_50871 = (function (){return ((function (inst_50870,state_val_50875,c__46239__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_50870,state_val_50875,c__46239__auto__))
})();
var inst_50872 = setTimeout(inst_50871,(0));
var state_50874__$1 = (function (){var statearr_50877 = state_50874;
(statearr_50877[(8)] = inst_50870);

return statearr_50877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50874__$1,inst_50872);
} else {
return null;
}
}
}
});})(c__46239__auto__))
;
return ((function (switch__46127__auto__,c__46239__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__46128__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__46128__auto____0 = (function (){
var statearr_50881 = [null,null,null,null,null,null,null,null,null];
(statearr_50881[(0)] = devcards$core$mount_namespace_$_state_machine__46128__auto__);

(statearr_50881[(1)] = (1));

return statearr_50881;
});
var devcards$core$mount_namespace_$_state_machine__46128__auto____1 = (function (state_50874){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_50874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e50882){if((e50882 instanceof Object)){
var ex__46131__auto__ = e50882;
var statearr_50883_50885 = state_50874;
(statearr_50883_50885[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50886 = state_50874;
state_50874 = G__50886;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__46128__auto__ = function(state_50874){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__46128__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__46128__auto____1.call(this,state_50874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__46128__auto____0;
devcards$core$mount_namespace_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__46128__auto____1;
return devcards$core$mount_namespace_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__))
})();
var state__46241__auto__ = (function (){var statearr_50884 = f__46240__auto__.call(null);
(statearr_50884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_50884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__))
);

return c__46239__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1476707534479