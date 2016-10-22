// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__51269__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__51266 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__51267 = cljs.core.seq.call(null,vec__51266);
var first__51268 = cljs.core.first.call(null,seq__51267);
var seq__51267__$1 = cljs.core.next.call(null,seq__51267);
var tag = first__51268;
var body = seq__51267__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__51269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51270__i = 0, G__51270__a = new Array(arguments.length -  0);
while (G__51270__i < G__51270__a.length) {G__51270__a[G__51270__i] = arguments[G__51270__i + 0]; ++G__51270__i;}
  args = new cljs.core.IndexedSeq(G__51270__a,0);
} 
return G__51269__delegate.call(this,args);};
G__51269.cljs$lang$maxFixedArity = 0;
G__51269.cljs$lang$applyTo = (function (arglist__51271){
var args = cljs.core.seq(arglist__51271);
return G__51269__delegate(args);
});
G__51269.cljs$core$IFn$_invoke$arity$variadic = G__51269__delegate;
return G__51269;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__44689__auto__ = (function sablono$core$update_arglists_$_iter__51276(s__51277){
return (new cljs.core.LazySeq(null,(function (){
var s__51277__$1 = s__51277;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51277__$1);
if(temp__4657__auto__){
var s__51277__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51277__$2)){
var c__44687__auto__ = cljs.core.chunk_first.call(null,s__51277__$2);
var size__44688__auto__ = cljs.core.count.call(null,c__44687__auto__);
var b__51279 = cljs.core.chunk_buffer.call(null,size__44688__auto__);
if((function (){var i__51278 = (0);
while(true){
if((i__51278 < size__44688__auto__)){
var args = cljs.core._nth.call(null,c__44687__auto__,i__51278);
cljs.core.chunk_append.call(null,b__51279,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__51280 = (i__51278 + (1));
i__51278 = G__51280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51279),sablono$core$update_arglists_$_iter__51276.call(null,cljs.core.chunk_rest.call(null,s__51277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51279),null);
}
} else {
var args = cljs.core.first.call(null,s__51277__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__51276.call(null,cljs.core.rest.call(null,s__51277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44689__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__44991__auto__ = [];
var len__44984__auto___51286 = arguments.length;
var i__44985__auto___51287 = (0);
while(true){
if((i__44985__auto___51287 < len__44984__auto___51286)){
args__44991__auto__.push((arguments[i__44985__auto___51287]));

var G__51288 = (i__44985__auto___51287 + (1));
i__44985__auto___51287 = G__51288;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__44689__auto__ = (function sablono$core$iter__51282(s__51283){
return (new cljs.core.LazySeq(null,(function (){
var s__51283__$1 = s__51283;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51283__$1);
if(temp__4657__auto__){
var s__51283__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51283__$2)){
var c__44687__auto__ = cljs.core.chunk_first.call(null,s__51283__$2);
var size__44688__auto__ = cljs.core.count.call(null,c__44687__auto__);
var b__51285 = cljs.core.chunk_buffer.call(null,size__44688__auto__);
if((function (){var i__51284 = (0);
while(true){
if((i__51284 < size__44688__auto__)){
var style = cljs.core._nth.call(null,c__44687__auto__,i__51284);
cljs.core.chunk_append.call(null,b__51285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__51289 = (i__51284 + (1));
i__51284 = G__51289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51285),sablono$core$iter__51282.call(null,cljs.core.chunk_rest.call(null,s__51283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51285),null);
}
} else {
var style = cljs.core.first.call(null,s__51283__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__51282.call(null,cljs.core.rest.call(null,s__51283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44689__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq51281){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51281));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to51290 = (function sablono$core$link_to51290(var_args){
var args__44991__auto__ = [];
var len__44984__auto___51293 = arguments.length;
var i__44985__auto___51294 = (0);
while(true){
if((i__44985__auto___51294 < len__44984__auto___51293)){
args__44991__auto__.push((arguments[i__44985__auto___51294]));

var G__51295 = (i__44985__auto___51294 + (1));
i__44985__auto___51294 = G__51295;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((1) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to51290.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44992__auto__);
});

sablono.core.link_to51290.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to51290.cljs$lang$maxFixedArity = (1);

sablono.core.link_to51290.cljs$lang$applyTo = (function (seq51291){
var G__51292 = cljs.core.first.call(null,seq51291);
var seq51291__$1 = cljs.core.next.call(null,seq51291);
return sablono.core.link_to51290.cljs$core$IFn$_invoke$arity$variadic(G__51292,seq51291__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to51290);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to51296 = (function sablono$core$mail_to51296(var_args){
var args__44991__auto__ = [];
var len__44984__auto___51303 = arguments.length;
var i__44985__auto___51304 = (0);
while(true){
if((i__44985__auto___51304 < len__44984__auto___51303)){
args__44991__auto__.push((arguments[i__44985__auto___51304]));

var G__51305 = (i__44985__auto___51304 + (1));
i__44985__auto___51304 = G__51305;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((1) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to51296.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44992__auto__);
});

sablono.core.mail_to51296.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__51299){
var vec__51300 = p__51299;
var content = cljs.core.nth.call(null,vec__51300,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__43909__auto__ = content;
if(cljs.core.truth_(or__43909__auto__)){
return or__43909__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to51296.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to51296.cljs$lang$applyTo = (function (seq51297){
var G__51298 = cljs.core.first.call(null,seq51297);
var seq51297__$1 = cljs.core.next.call(null,seq51297);
return sablono.core.mail_to51296.cljs$core$IFn$_invoke$arity$variadic(G__51298,seq51297__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to51296);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list51306 = (function sablono$core$unordered_list51306(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__44689__auto__ = (function sablono$core$unordered_list51306_$_iter__51311(s__51312){
return (new cljs.core.LazySeq(null,(function (){
var s__51312__$1 = s__51312;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51312__$1);
if(temp__4657__auto__){
var s__51312__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51312__$2)){
var c__44687__auto__ = cljs.core.chunk_first.call(null,s__51312__$2);
var size__44688__auto__ = cljs.core.count.call(null,c__44687__auto__);
var b__51314 = cljs.core.chunk_buffer.call(null,size__44688__auto__);
if((function (){var i__51313 = (0);
while(true){
if((i__51313 < size__44688__auto__)){
var x = cljs.core._nth.call(null,c__44687__auto__,i__51313);
cljs.core.chunk_append.call(null,b__51314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51315 = (i__51313 + (1));
i__51313 = G__51315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51314),sablono$core$unordered_list51306_$_iter__51311.call(null,cljs.core.chunk_rest.call(null,s__51312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51314),null);
}
} else {
var x = cljs.core.first.call(null,s__51312__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list51306_$_iter__51311.call(null,cljs.core.rest.call(null,s__51312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44689__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list51306);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list51316 = (function sablono$core$ordered_list51316(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__44689__auto__ = (function sablono$core$ordered_list51316_$_iter__51321(s__51322){
return (new cljs.core.LazySeq(null,(function (){
var s__51322__$1 = s__51322;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51322__$1);
if(temp__4657__auto__){
var s__51322__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51322__$2)){
var c__44687__auto__ = cljs.core.chunk_first.call(null,s__51322__$2);
var size__44688__auto__ = cljs.core.count.call(null,c__44687__auto__);
var b__51324 = cljs.core.chunk_buffer.call(null,size__44688__auto__);
if((function (){var i__51323 = (0);
while(true){
if((i__51323 < size__44688__auto__)){
var x = cljs.core._nth.call(null,c__44687__auto__,i__51323);
cljs.core.chunk_append.call(null,b__51324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51325 = (i__51323 + (1));
i__51323 = G__51325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51324),sablono$core$ordered_list51316_$_iter__51321.call(null,cljs.core.chunk_rest.call(null,s__51322__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51324),null);
}
} else {
var x = cljs.core.first.call(null,s__51322__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list51316_$_iter__51321.call(null,cljs.core.rest.call(null,s__51322__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44689__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list51316);
/**
 * Create an image element.
 */
sablono.core.image51326 = (function sablono$core$image51326(var_args){
var args51327 = [];
var len__44984__auto___51330 = arguments.length;
var i__44985__auto___51331 = (0);
while(true){
if((i__44985__auto___51331 < len__44984__auto___51330)){
args51327.push((arguments[i__44985__auto___51331]));

var G__51332 = (i__44985__auto___51331 + (1));
i__44985__auto___51331 = G__51332;
continue;
} else {
}
break;
}

var G__51329 = args51327.length;
switch (G__51329) {
case 1:
return sablono.core.image51326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image51326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51327.length)].join('')));

}
});

sablono.core.image51326.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image51326.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image51326.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image51326);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__51334_SHARP_,p2__51335_SHARP_){
return [cljs.core.str(p1__51334_SHARP_),cljs.core.str("["),cljs.core.str(p2__51335_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__51336_SHARP_,p2__51337_SHARP_){
return [cljs.core.str(p1__51336_SHARP_),cljs.core.str("-"),cljs.core.str(p2__51337_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43909__auto__ = value;
if(cljs.core.truth_(or__43909__auto__)){
return or__43909__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field51338 = (function sablono$core$color_field51338(var_args){
var args51339 = [];
var len__44984__auto___51406 = arguments.length;
var i__44985__auto___51407 = (0);
while(true){
if((i__44985__auto___51407 < len__44984__auto___51406)){
args51339.push((arguments[i__44985__auto___51407]));

var G__51408 = (i__44985__auto___51407 + (1));
i__44985__auto___51407 = G__51408;
continue;
} else {
}
break;
}

var G__51341 = args51339.length;
switch (G__51341) {
case 1:
return sablono.core.color_field51338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field51338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51339.length)].join('')));

}
});

sablono.core.color_field51338.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.color_field51338.call(null,name__51253__auto__,null);
});

sablono.core.color_field51338.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.color_field51338.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field51338);

/**
 * Creates a date input field.
 */
sablono.core.date_field51342 = (function sablono$core$date_field51342(var_args){
var args51343 = [];
var len__44984__auto___51410 = arguments.length;
var i__44985__auto___51411 = (0);
while(true){
if((i__44985__auto___51411 < len__44984__auto___51410)){
args51343.push((arguments[i__44985__auto___51411]));

var G__51412 = (i__44985__auto___51411 + (1));
i__44985__auto___51411 = G__51412;
continue;
} else {
}
break;
}

var G__51345 = args51343.length;
switch (G__51345) {
case 1:
return sablono.core.date_field51342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field51342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51343.length)].join('')));

}
});

sablono.core.date_field51342.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.date_field51342.call(null,name__51253__auto__,null);
});

sablono.core.date_field51342.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.date_field51342.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field51342);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field51346 = (function sablono$core$datetime_field51346(var_args){
var args51347 = [];
var len__44984__auto___51414 = arguments.length;
var i__44985__auto___51415 = (0);
while(true){
if((i__44985__auto___51415 < len__44984__auto___51414)){
args51347.push((arguments[i__44985__auto___51415]));

var G__51416 = (i__44985__auto___51415 + (1));
i__44985__auto___51415 = G__51416;
continue;
} else {
}
break;
}

var G__51349 = args51347.length;
switch (G__51349) {
case 1:
return sablono.core.datetime_field51346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field51346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51347.length)].join('')));

}
});

sablono.core.datetime_field51346.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.datetime_field51346.call(null,name__51253__auto__,null);
});

sablono.core.datetime_field51346.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.datetime_field51346.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field51346);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field51350 = (function sablono$core$datetime_local_field51350(var_args){
var args51351 = [];
var len__44984__auto___51418 = arguments.length;
var i__44985__auto___51419 = (0);
while(true){
if((i__44985__auto___51419 < len__44984__auto___51418)){
args51351.push((arguments[i__44985__auto___51419]));

var G__51420 = (i__44985__auto___51419 + (1));
i__44985__auto___51419 = G__51420;
continue;
} else {
}
break;
}

var G__51353 = args51351.length;
switch (G__51353) {
case 1:
return sablono.core.datetime_local_field51350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field51350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51351.length)].join('')));

}
});

sablono.core.datetime_local_field51350.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.datetime_local_field51350.call(null,name__51253__auto__,null);
});

sablono.core.datetime_local_field51350.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.datetime_local_field51350.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field51350);

/**
 * Creates a email input field.
 */
sablono.core.email_field51354 = (function sablono$core$email_field51354(var_args){
var args51355 = [];
var len__44984__auto___51422 = arguments.length;
var i__44985__auto___51423 = (0);
while(true){
if((i__44985__auto___51423 < len__44984__auto___51422)){
args51355.push((arguments[i__44985__auto___51423]));

var G__51424 = (i__44985__auto___51423 + (1));
i__44985__auto___51423 = G__51424;
continue;
} else {
}
break;
}

var G__51357 = args51355.length;
switch (G__51357) {
case 1:
return sablono.core.email_field51354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field51354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51355.length)].join('')));

}
});

sablono.core.email_field51354.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.email_field51354.call(null,name__51253__auto__,null);
});

sablono.core.email_field51354.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.email_field51354.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field51354);

/**
 * Creates a file input field.
 */
sablono.core.file_field51358 = (function sablono$core$file_field51358(var_args){
var args51359 = [];
var len__44984__auto___51426 = arguments.length;
var i__44985__auto___51427 = (0);
while(true){
if((i__44985__auto___51427 < len__44984__auto___51426)){
args51359.push((arguments[i__44985__auto___51427]));

var G__51428 = (i__44985__auto___51427 + (1));
i__44985__auto___51427 = G__51428;
continue;
} else {
}
break;
}

var G__51361 = args51359.length;
switch (G__51361) {
case 1:
return sablono.core.file_field51358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field51358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51359.length)].join('')));

}
});

sablono.core.file_field51358.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.file_field51358.call(null,name__51253__auto__,null);
});

sablono.core.file_field51358.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.file_field51358.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field51358);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field51362 = (function sablono$core$hidden_field51362(var_args){
var args51363 = [];
var len__44984__auto___51430 = arguments.length;
var i__44985__auto___51431 = (0);
while(true){
if((i__44985__auto___51431 < len__44984__auto___51430)){
args51363.push((arguments[i__44985__auto___51431]));

var G__51432 = (i__44985__auto___51431 + (1));
i__44985__auto___51431 = G__51432;
continue;
} else {
}
break;
}

var G__51365 = args51363.length;
switch (G__51365) {
case 1:
return sablono.core.hidden_field51362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field51362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51363.length)].join('')));

}
});

sablono.core.hidden_field51362.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.hidden_field51362.call(null,name__51253__auto__,null);
});

sablono.core.hidden_field51362.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.hidden_field51362.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field51362);

/**
 * Creates a month input field.
 */
sablono.core.month_field51366 = (function sablono$core$month_field51366(var_args){
var args51367 = [];
var len__44984__auto___51434 = arguments.length;
var i__44985__auto___51435 = (0);
while(true){
if((i__44985__auto___51435 < len__44984__auto___51434)){
args51367.push((arguments[i__44985__auto___51435]));

var G__51436 = (i__44985__auto___51435 + (1));
i__44985__auto___51435 = G__51436;
continue;
} else {
}
break;
}

var G__51369 = args51367.length;
switch (G__51369) {
case 1:
return sablono.core.month_field51366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field51366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51367.length)].join('')));

}
});

sablono.core.month_field51366.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.month_field51366.call(null,name__51253__auto__,null);
});

sablono.core.month_field51366.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.month_field51366.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field51366);

/**
 * Creates a number input field.
 */
sablono.core.number_field51370 = (function sablono$core$number_field51370(var_args){
var args51371 = [];
var len__44984__auto___51438 = arguments.length;
var i__44985__auto___51439 = (0);
while(true){
if((i__44985__auto___51439 < len__44984__auto___51438)){
args51371.push((arguments[i__44985__auto___51439]));

var G__51440 = (i__44985__auto___51439 + (1));
i__44985__auto___51439 = G__51440;
continue;
} else {
}
break;
}

var G__51373 = args51371.length;
switch (G__51373) {
case 1:
return sablono.core.number_field51370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field51370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51371.length)].join('')));

}
});

sablono.core.number_field51370.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.number_field51370.call(null,name__51253__auto__,null);
});

sablono.core.number_field51370.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.number_field51370.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field51370);

/**
 * Creates a password input field.
 */
sablono.core.password_field51374 = (function sablono$core$password_field51374(var_args){
var args51375 = [];
var len__44984__auto___51442 = arguments.length;
var i__44985__auto___51443 = (0);
while(true){
if((i__44985__auto___51443 < len__44984__auto___51442)){
args51375.push((arguments[i__44985__auto___51443]));

var G__51444 = (i__44985__auto___51443 + (1));
i__44985__auto___51443 = G__51444;
continue;
} else {
}
break;
}

var G__51377 = args51375.length;
switch (G__51377) {
case 1:
return sablono.core.password_field51374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field51374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51375.length)].join('')));

}
});

sablono.core.password_field51374.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.password_field51374.call(null,name__51253__auto__,null);
});

sablono.core.password_field51374.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.password_field51374.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field51374);

/**
 * Creates a range input field.
 */
sablono.core.range_field51378 = (function sablono$core$range_field51378(var_args){
var args51379 = [];
var len__44984__auto___51446 = arguments.length;
var i__44985__auto___51447 = (0);
while(true){
if((i__44985__auto___51447 < len__44984__auto___51446)){
args51379.push((arguments[i__44985__auto___51447]));

var G__51448 = (i__44985__auto___51447 + (1));
i__44985__auto___51447 = G__51448;
continue;
} else {
}
break;
}

var G__51381 = args51379.length;
switch (G__51381) {
case 1:
return sablono.core.range_field51378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field51378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51379.length)].join('')));

}
});

sablono.core.range_field51378.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.range_field51378.call(null,name__51253__auto__,null);
});

sablono.core.range_field51378.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.range_field51378.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field51378);

/**
 * Creates a search input field.
 */
sablono.core.search_field51382 = (function sablono$core$search_field51382(var_args){
var args51383 = [];
var len__44984__auto___51450 = arguments.length;
var i__44985__auto___51451 = (0);
while(true){
if((i__44985__auto___51451 < len__44984__auto___51450)){
args51383.push((arguments[i__44985__auto___51451]));

var G__51452 = (i__44985__auto___51451 + (1));
i__44985__auto___51451 = G__51452;
continue;
} else {
}
break;
}

var G__51385 = args51383.length;
switch (G__51385) {
case 1:
return sablono.core.search_field51382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field51382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51383.length)].join('')));

}
});

sablono.core.search_field51382.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.search_field51382.call(null,name__51253__auto__,null);
});

sablono.core.search_field51382.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.search_field51382.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field51382);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field51386 = (function sablono$core$tel_field51386(var_args){
var args51387 = [];
var len__44984__auto___51454 = arguments.length;
var i__44985__auto___51455 = (0);
while(true){
if((i__44985__auto___51455 < len__44984__auto___51454)){
args51387.push((arguments[i__44985__auto___51455]));

var G__51456 = (i__44985__auto___51455 + (1));
i__44985__auto___51455 = G__51456;
continue;
} else {
}
break;
}

var G__51389 = args51387.length;
switch (G__51389) {
case 1:
return sablono.core.tel_field51386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field51386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51387.length)].join('')));

}
});

sablono.core.tel_field51386.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.tel_field51386.call(null,name__51253__auto__,null);
});

sablono.core.tel_field51386.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.tel_field51386.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field51386);

/**
 * Creates a text input field.
 */
sablono.core.text_field51390 = (function sablono$core$text_field51390(var_args){
var args51391 = [];
var len__44984__auto___51458 = arguments.length;
var i__44985__auto___51459 = (0);
while(true){
if((i__44985__auto___51459 < len__44984__auto___51458)){
args51391.push((arguments[i__44985__auto___51459]));

var G__51460 = (i__44985__auto___51459 + (1));
i__44985__auto___51459 = G__51460;
continue;
} else {
}
break;
}

var G__51393 = args51391.length;
switch (G__51393) {
case 1:
return sablono.core.text_field51390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field51390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51391.length)].join('')));

}
});

sablono.core.text_field51390.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.text_field51390.call(null,name__51253__auto__,null);
});

sablono.core.text_field51390.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.text_field51390.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field51390);

/**
 * Creates a time input field.
 */
sablono.core.time_field51394 = (function sablono$core$time_field51394(var_args){
var args51395 = [];
var len__44984__auto___51462 = arguments.length;
var i__44985__auto___51463 = (0);
while(true){
if((i__44985__auto___51463 < len__44984__auto___51462)){
args51395.push((arguments[i__44985__auto___51463]));

var G__51464 = (i__44985__auto___51463 + (1));
i__44985__auto___51463 = G__51464;
continue;
} else {
}
break;
}

var G__51397 = args51395.length;
switch (G__51397) {
case 1:
return sablono.core.time_field51394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field51394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51395.length)].join('')));

}
});

sablono.core.time_field51394.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.time_field51394.call(null,name__51253__auto__,null);
});

sablono.core.time_field51394.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.time_field51394.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field51394);

/**
 * Creates a url input field.
 */
sablono.core.url_field51398 = (function sablono$core$url_field51398(var_args){
var args51399 = [];
var len__44984__auto___51466 = arguments.length;
var i__44985__auto___51467 = (0);
while(true){
if((i__44985__auto___51467 < len__44984__auto___51466)){
args51399.push((arguments[i__44985__auto___51467]));

var G__51468 = (i__44985__auto___51467 + (1));
i__44985__auto___51467 = G__51468;
continue;
} else {
}
break;
}

var G__51401 = args51399.length;
switch (G__51401) {
case 1:
return sablono.core.url_field51398.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field51398.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51399.length)].join('')));

}
});

sablono.core.url_field51398.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.url_field51398.call(null,name__51253__auto__,null);
});

sablono.core.url_field51398.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.url_field51398.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field51398);

/**
 * Creates a week input field.
 */
sablono.core.week_field51402 = (function sablono$core$week_field51402(var_args){
var args51403 = [];
var len__44984__auto___51470 = arguments.length;
var i__44985__auto___51471 = (0);
while(true){
if((i__44985__auto___51471 < len__44984__auto___51470)){
args51403.push((arguments[i__44985__auto___51471]));

var G__51472 = (i__44985__auto___51471 + (1));
i__44985__auto___51471 = G__51472;
continue;
} else {
}
break;
}

var G__51405 = args51403.length;
switch (G__51405) {
case 1:
return sablono.core.week_field51402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field51402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51403.length)].join('')));

}
});

sablono.core.week_field51402.cljs$core$IFn$_invoke$arity$1 = (function (name__51253__auto__){
return sablono.core.week_field51402.call(null,name__51253__auto__,null);
});

sablono.core.week_field51402.cljs$core$IFn$_invoke$arity$2 = (function (name__51253__auto__,value__51254__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__51253__auto__,value__51254__auto__);
});

sablono.core.week_field51402.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field51402);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box51474 = (function sablono$core$check_box51474(var_args){
var args51475 = [];
var len__44984__auto___51478 = arguments.length;
var i__44985__auto___51479 = (0);
while(true){
if((i__44985__auto___51479 < len__44984__auto___51478)){
args51475.push((arguments[i__44985__auto___51479]));

var G__51480 = (i__44985__auto___51479 + (1));
i__44985__auto___51479 = G__51480;
continue;
} else {
}
break;
}

var G__51477 = args51475.length;
switch (G__51477) {
case 1:
return sablono.core.check_box51474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box51474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box51474.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51475.length)].join('')));

}
});

sablono.core.check_box51474.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box51474.call(null,name,null);
});

sablono.core.check_box51474.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box51474.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box51474.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43909__auto__ = value;
if(cljs.core.truth_(or__43909__auto__)){
return or__43909__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box51474.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box51474);
/**
 * Creates a radio button.
 */
sablono.core.radio_button51482 = (function sablono$core$radio_button51482(var_args){
var args51483 = [];
var len__44984__auto___51486 = arguments.length;
var i__44985__auto___51487 = (0);
while(true){
if((i__44985__auto___51487 < len__44984__auto___51486)){
args51483.push((arguments[i__44985__auto___51487]));

var G__51488 = (i__44985__auto___51487 + (1));
i__44985__auto___51487 = G__51488;
continue;
} else {
}
break;
}

var G__51485 = args51483.length;
switch (G__51485) {
case 1:
return sablono.core.radio_button51482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button51482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button51482.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51483.length)].join('')));

}
});

sablono.core.radio_button51482.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button51482.call(null,group,null);
});

sablono.core.radio_button51482.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button51482.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button51482.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43909__auto__ = value;
if(cljs.core.truth_(or__43909__auto__)){
return or__43909__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button51482.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button51482);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options51490 = (function sablono$core$select_options51490(coll){
var iter__44689__auto__ = (function sablono$core$select_options51490_$_iter__51507(s__51508){
return (new cljs.core.LazySeq(null,(function (){
var s__51508__$1 = s__51508;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51508__$1);
if(temp__4657__auto__){
var s__51508__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51508__$2)){
var c__44687__auto__ = cljs.core.chunk_first.call(null,s__51508__$2);
var size__44688__auto__ = cljs.core.count.call(null,c__44687__auto__);
var b__51510 = cljs.core.chunk_buffer.call(null,size__44688__auto__);
if((function (){var i__51509 = (0);
while(true){
if((i__51509 < size__44688__auto__)){
var x = cljs.core._nth.call(null,c__44687__auto__,i__51509);
cljs.core.chunk_append.call(null,b__51510,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51517 = x;
var text = cljs.core.nth.call(null,vec__51517,(0),null);
var val = cljs.core.nth.call(null,vec__51517,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__51517,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options51490.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__51523 = (i__51509 + (1));
i__51509 = G__51523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51510),sablono$core$select_options51490_$_iter__51507.call(null,cljs.core.chunk_rest.call(null,s__51508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51510),null);
}
} else {
var x = cljs.core.first.call(null,s__51508__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51520 = x;
var text = cljs.core.nth.call(null,vec__51520,(0),null);
var val = cljs.core.nth.call(null,vec__51520,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__51520,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options51490.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options51490_$_iter__51507.call(null,cljs.core.rest.call(null,s__51508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44689__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options51490);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down51524 = (function sablono$core$drop_down51524(var_args){
var args51525 = [];
var len__44984__auto___51528 = arguments.length;
var i__44985__auto___51529 = (0);
while(true){
if((i__44985__auto___51529 < len__44984__auto___51528)){
args51525.push((arguments[i__44985__auto___51529]));

var G__51530 = (i__44985__auto___51529 + (1));
i__44985__auto___51529 = G__51530;
continue;
} else {
}
break;
}

var G__51527 = args51525.length;
switch (G__51527) {
case 2:
return sablono.core.drop_down51524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down51524.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51525.length)].join('')));

}
});

sablono.core.drop_down51524.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down51524.call(null,name,options,null);
});

sablono.core.drop_down51524.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down51524.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down51524);
/**
 * Creates a text area element.
 */
sablono.core.text_area51532 = (function sablono$core$text_area51532(var_args){
var args51533 = [];
var len__44984__auto___51536 = arguments.length;
var i__44985__auto___51537 = (0);
while(true){
if((i__44985__auto___51537 < len__44984__auto___51536)){
args51533.push((arguments[i__44985__auto___51537]));

var G__51538 = (i__44985__auto___51537 + (1));
i__44985__auto___51537 = G__51538;
continue;
} else {
}
break;
}

var G__51535 = args51533.length;
switch (G__51535) {
case 1:
return sablono.core.text_area51532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area51532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51533.length)].join('')));

}
});

sablono.core.text_area51532.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area51532.call(null,name,null);
});

sablono.core.text_area51532.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__43909__auto__ = value;
if(cljs.core.truth_(or__43909__auto__)){
return or__43909__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area51532.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area51532);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label51540 = (function sablono$core$label51540(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label51540);
/**
 * Creates a submit button.
 */
sablono.core.submit_button51541 = (function sablono$core$submit_button51541(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button51541);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button51542 = (function sablono$core$reset_button51542(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button51542);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to51543 = (function sablono$core$form_to51543(var_args){
var args__44991__auto__ = [];
var len__44984__auto___51550 = arguments.length;
var i__44985__auto___51551 = (0);
while(true){
if((i__44985__auto___51551 < len__44984__auto___51550)){
args__44991__auto__.push((arguments[i__44985__auto___51551]));

var G__51552 = (i__44985__auto___51551 + (1));
i__44985__auto___51551 = G__51552;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((1) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to51543.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44992__auto__);
});

sablono.core.form_to51543.cljs$core$IFn$_invoke$arity$variadic = (function (p__51546,body){
var vec__51547 = p__51546;
var method = cljs.core.nth.call(null,vec__51547,(0),null);
var action = cljs.core.nth.call(null,vec__51547,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to51543.cljs$lang$maxFixedArity = (1);

sablono.core.form_to51543.cljs$lang$applyTo = (function (seq51544){
var G__51545 = cljs.core.first.call(null,seq51544);
var seq51544__$1 = cljs.core.next.call(null,seq51544);
return sablono.core.form_to51543.cljs$core$IFn$_invoke$arity$variadic(G__51545,seq51544__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to51543);

//# sourceMappingURL=core.js.map?rel=1476618791137