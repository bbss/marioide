// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60526 = arguments.length;
var i__44985__auto___60527 = (0);
while(true){
if((i__44985__auto___60527 < len__44984__auto___60526)){
args__44991__auto__.push((arguments[i__44985__auto___60527]));

var G__60528 = (i__44985__auto___60527 + (1));
i__44985__auto___60527 = G__60528;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq60525){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60525));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60530 = arguments.length;
var i__44985__auto___60531 = (0);
while(true){
if((i__44985__auto___60531 < len__44984__auto___60530)){
args__44991__auto__.push((arguments[i__44985__auto___60531]));

var G__60532 = (i__44985__auto___60531 + (1));
i__44985__auto___60531 = G__60532;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq60529){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60529));
});

var g_QMARK__60533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_60534 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__60533){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__60533))
,null));
var mkg_60535 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__60533,g_60534){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__60533,g_60534))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__60533,g_60534,mkg_60535){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__60533).call(null,x);
});})(g_QMARK__60533,g_60534,mkg_60535))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__60533,g_60534,mkg_60535){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_60535).call(null,gfn);
});})(g_QMARK__60533,g_60534,mkg_60535))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__60533,g_60534,mkg_60535){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_60534).call(null,generator);
});})(g_QMARK__60533,g_60534,mkg_60535))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__60497__auto___60554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__60497__auto___60554){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60555 = arguments.length;
var i__44985__auto___60556 = (0);
while(true){
if((i__44985__auto___60556 < len__44984__auto___60555)){
args__44991__auto__.push((arguments[i__44985__auto___60556]));

var G__60557 = (i__44985__auto___60556 + (1));
i__44985__auto___60556 = G__60557;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60554))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60554),args);
});})(g__60497__auto___60554))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__60497__auto___60554){
return (function (seq60536){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60536));
});})(g__60497__auto___60554))
;


var g__60497__auto___60558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__60497__auto___60558){
return (function cljs$spec$impl$gen$list(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60559 = arguments.length;
var i__44985__auto___60560 = (0);
while(true){
if((i__44985__auto___60560 < len__44984__auto___60559)){
args__44991__auto__.push((arguments[i__44985__auto___60560]));

var G__60561 = (i__44985__auto___60560 + (1));
i__44985__auto___60560 = G__60561;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60558))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60558),args);
});})(g__60497__auto___60558))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__60497__auto___60558){
return (function (seq60537){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60537));
});})(g__60497__auto___60558))
;


var g__60497__auto___60562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__60497__auto___60562){
return (function cljs$spec$impl$gen$map(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60563 = arguments.length;
var i__44985__auto___60564 = (0);
while(true){
if((i__44985__auto___60564 < len__44984__auto___60563)){
args__44991__auto__.push((arguments[i__44985__auto___60564]));

var G__60565 = (i__44985__auto___60564 + (1));
i__44985__auto___60564 = G__60565;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60562))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60562),args);
});})(g__60497__auto___60562))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__60497__auto___60562){
return (function (seq60538){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60538));
});})(g__60497__auto___60562))
;


var g__60497__auto___60566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__60497__auto___60566){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60567 = arguments.length;
var i__44985__auto___60568 = (0);
while(true){
if((i__44985__auto___60568 < len__44984__auto___60567)){
args__44991__auto__.push((arguments[i__44985__auto___60568]));

var G__60569 = (i__44985__auto___60568 + (1));
i__44985__auto___60568 = G__60569;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60566))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60566),args);
});})(g__60497__auto___60566))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__60497__auto___60566){
return (function (seq60539){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60539));
});})(g__60497__auto___60566))
;


var g__60497__auto___60570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__60497__auto___60570){
return (function cljs$spec$impl$gen$set(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60571 = arguments.length;
var i__44985__auto___60572 = (0);
while(true){
if((i__44985__auto___60572 < len__44984__auto___60571)){
args__44991__auto__.push((arguments[i__44985__auto___60572]));

var G__60573 = (i__44985__auto___60572 + (1));
i__44985__auto___60572 = G__60573;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60570))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60570),args);
});})(g__60497__auto___60570))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__60497__auto___60570){
return (function (seq60540){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60540));
});})(g__60497__auto___60570))
;


var g__60497__auto___60574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__60497__auto___60574){
return (function cljs$spec$impl$gen$vector(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60575 = arguments.length;
var i__44985__auto___60576 = (0);
while(true){
if((i__44985__auto___60576 < len__44984__auto___60575)){
args__44991__auto__.push((arguments[i__44985__auto___60576]));

var G__60577 = (i__44985__auto___60576 + (1));
i__44985__auto___60576 = G__60577;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60574))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60574),args);
});})(g__60497__auto___60574))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__60497__auto___60574){
return (function (seq60541){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60541));
});})(g__60497__auto___60574))
;


var g__60497__auto___60578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__60497__auto___60578){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60579 = arguments.length;
var i__44985__auto___60580 = (0);
while(true){
if((i__44985__auto___60580 < len__44984__auto___60579)){
args__44991__auto__.push((arguments[i__44985__auto___60580]));

var G__60581 = (i__44985__auto___60580 + (1));
i__44985__auto___60580 = G__60581;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60578))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60578),args);
});})(g__60497__auto___60578))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__60497__auto___60578){
return (function (seq60542){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60542));
});})(g__60497__auto___60578))
;


var g__60497__auto___60582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__60497__auto___60582){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60583 = arguments.length;
var i__44985__auto___60584 = (0);
while(true){
if((i__44985__auto___60584 < len__44984__auto___60583)){
args__44991__auto__.push((arguments[i__44985__auto___60584]));

var G__60585 = (i__44985__auto___60584 + (1));
i__44985__auto___60584 = G__60585;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60582))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60582),args);
});})(g__60497__auto___60582))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__60497__auto___60582){
return (function (seq60543){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60543));
});})(g__60497__auto___60582))
;


var g__60497__auto___60586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__60497__auto___60586){
return (function cljs$spec$impl$gen$elements(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60587 = arguments.length;
var i__44985__auto___60588 = (0);
while(true){
if((i__44985__auto___60588 < len__44984__auto___60587)){
args__44991__auto__.push((arguments[i__44985__auto___60588]));

var G__60589 = (i__44985__auto___60588 + (1));
i__44985__auto___60588 = G__60589;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60586))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60586),args);
});})(g__60497__auto___60586))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__60497__auto___60586){
return (function (seq60544){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60544));
});})(g__60497__auto___60586))
;


var g__60497__auto___60590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__60497__auto___60590){
return (function cljs$spec$impl$gen$bind(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60591 = arguments.length;
var i__44985__auto___60592 = (0);
while(true){
if((i__44985__auto___60592 < len__44984__auto___60591)){
args__44991__auto__.push((arguments[i__44985__auto___60592]));

var G__60593 = (i__44985__auto___60592 + (1));
i__44985__auto___60592 = G__60593;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60590))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60590),args);
});})(g__60497__auto___60590))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__60497__auto___60590){
return (function (seq60545){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60545));
});})(g__60497__auto___60590))
;


var g__60497__auto___60594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__60497__auto___60594){
return (function cljs$spec$impl$gen$choose(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60595 = arguments.length;
var i__44985__auto___60596 = (0);
while(true){
if((i__44985__auto___60596 < len__44984__auto___60595)){
args__44991__auto__.push((arguments[i__44985__auto___60596]));

var G__60597 = (i__44985__auto___60596 + (1));
i__44985__auto___60596 = G__60597;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60594))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60594),args);
});})(g__60497__auto___60594))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__60497__auto___60594){
return (function (seq60546){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60546));
});})(g__60497__auto___60594))
;


var g__60497__auto___60598 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__60497__auto___60598){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60599 = arguments.length;
var i__44985__auto___60600 = (0);
while(true){
if((i__44985__auto___60600 < len__44984__auto___60599)){
args__44991__auto__.push((arguments[i__44985__auto___60600]));

var G__60601 = (i__44985__auto___60600 + (1));
i__44985__auto___60600 = G__60601;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60598))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60598){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60598),args);
});})(g__60497__auto___60598))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__60497__auto___60598){
return (function (seq60547){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60547));
});})(g__60497__auto___60598))
;


var g__60497__auto___60602 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__60497__auto___60602){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60603 = arguments.length;
var i__44985__auto___60604 = (0);
while(true){
if((i__44985__auto___60604 < len__44984__auto___60603)){
args__44991__auto__.push((arguments[i__44985__auto___60604]));

var G__60605 = (i__44985__auto___60604 + (1));
i__44985__auto___60604 = G__60605;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60602))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60602),args);
});})(g__60497__auto___60602))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__60497__auto___60602){
return (function (seq60548){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60548));
});})(g__60497__auto___60602))
;


var g__60497__auto___60606 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__60497__auto___60606){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60607 = arguments.length;
var i__44985__auto___60608 = (0);
while(true){
if((i__44985__auto___60608 < len__44984__auto___60607)){
args__44991__auto__.push((arguments[i__44985__auto___60608]));

var G__60609 = (i__44985__auto___60608 + (1));
i__44985__auto___60608 = G__60609;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60606))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60606){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60606),args);
});})(g__60497__auto___60606))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__60497__auto___60606){
return (function (seq60549){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60549));
});})(g__60497__auto___60606))
;


var g__60497__auto___60610 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__60497__auto___60610){
return (function cljs$spec$impl$gen$sample(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60611 = arguments.length;
var i__44985__auto___60612 = (0);
while(true){
if((i__44985__auto___60612 < len__44984__auto___60611)){
args__44991__auto__.push((arguments[i__44985__auto___60612]));

var G__60613 = (i__44985__auto___60612 + (1));
i__44985__auto___60612 = G__60613;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60610))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60610){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60610),args);
});})(g__60497__auto___60610))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__60497__auto___60610){
return (function (seq60550){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60550));
});})(g__60497__auto___60610))
;


var g__60497__auto___60614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__60497__auto___60614){
return (function cljs$spec$impl$gen$return(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60615 = arguments.length;
var i__44985__auto___60616 = (0);
while(true){
if((i__44985__auto___60616 < len__44984__auto___60615)){
args__44991__auto__.push((arguments[i__44985__auto___60616]));

var G__60617 = (i__44985__auto___60616 + (1));
i__44985__auto___60616 = G__60617;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60614))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60614){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60614),args);
});})(g__60497__auto___60614))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__60497__auto___60614){
return (function (seq60551){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60551));
});})(g__60497__auto___60614))
;


var g__60497__auto___60618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__60497__auto___60618){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60619 = arguments.length;
var i__44985__auto___60620 = (0);
while(true){
if((i__44985__auto___60620 < len__44984__auto___60619)){
args__44991__auto__.push((arguments[i__44985__auto___60620]));

var G__60621 = (i__44985__auto___60620 + (1));
i__44985__auto___60620 = G__60621;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60618))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60618){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60618),args);
});})(g__60497__auto___60618))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__60497__auto___60618){
return (function (seq60552){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60552));
});})(g__60497__auto___60618))
;


var g__60497__auto___60622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__60497__auto___60622){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60623 = arguments.length;
var i__44985__auto___60624 = (0);
while(true){
if((i__44985__auto___60624 < len__44984__auto___60623)){
args__44991__auto__.push((arguments[i__44985__auto___60624]));

var G__60625 = (i__44985__auto___60624 + (1));
i__44985__auto___60624 = G__60625;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60497__auto___60622))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60497__auto___60622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60497__auto___60622),args);
});})(g__60497__auto___60622))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__60497__auto___60622){
return (function (seq60553){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60553));
});})(g__60497__auto___60622))
;

var g__60510__auto___60647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__60510__auto___60647){
return (function cljs$spec$impl$gen$any(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60648 = arguments.length;
var i__44985__auto___60649 = (0);
while(true){
if((i__44985__auto___60649 < len__44984__auto___60648)){
args__44991__auto__.push((arguments[i__44985__auto___60649]));

var G__60650 = (i__44985__auto___60649 + (1));
i__44985__auto___60649 = G__60650;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60647))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60647){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60647);
});})(g__60510__auto___60647))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__60510__auto___60647){
return (function (seq60626){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60626));
});})(g__60510__auto___60647))
;


var g__60510__auto___60651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__60510__auto___60651){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60652 = arguments.length;
var i__44985__auto___60653 = (0);
while(true){
if((i__44985__auto___60653 < len__44984__auto___60652)){
args__44991__auto__.push((arguments[i__44985__auto___60653]));

var G__60654 = (i__44985__auto___60653 + (1));
i__44985__auto___60653 = G__60654;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60651))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60651){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60651);
});})(g__60510__auto___60651))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__60510__auto___60651){
return (function (seq60627){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60627));
});})(g__60510__auto___60651))
;


var g__60510__auto___60655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__60510__auto___60655){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60656 = arguments.length;
var i__44985__auto___60657 = (0);
while(true){
if((i__44985__auto___60657 < len__44984__auto___60656)){
args__44991__auto__.push((arguments[i__44985__auto___60657]));

var G__60658 = (i__44985__auto___60657 + (1));
i__44985__auto___60657 = G__60658;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60655))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60655){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60655);
});})(g__60510__auto___60655))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__60510__auto___60655){
return (function (seq60628){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60628));
});})(g__60510__auto___60655))
;


var g__60510__auto___60659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__60510__auto___60659){
return (function cljs$spec$impl$gen$char(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60660 = arguments.length;
var i__44985__auto___60661 = (0);
while(true){
if((i__44985__auto___60661 < len__44984__auto___60660)){
args__44991__auto__.push((arguments[i__44985__auto___60661]));

var G__60662 = (i__44985__auto___60661 + (1));
i__44985__auto___60661 = G__60662;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60659))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60659){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60659);
});})(g__60510__auto___60659))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__60510__auto___60659){
return (function (seq60629){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60629));
});})(g__60510__auto___60659))
;


var g__60510__auto___60663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__60510__auto___60663){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60664 = arguments.length;
var i__44985__auto___60665 = (0);
while(true){
if((i__44985__auto___60665 < len__44984__auto___60664)){
args__44991__auto__.push((arguments[i__44985__auto___60665]));

var G__60666 = (i__44985__auto___60665 + (1));
i__44985__auto___60665 = G__60666;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60663))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60663){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60663);
});})(g__60510__auto___60663))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__60510__auto___60663){
return (function (seq60630){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60630));
});})(g__60510__auto___60663))
;


var g__60510__auto___60667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__60510__auto___60667){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60668 = arguments.length;
var i__44985__auto___60669 = (0);
while(true){
if((i__44985__auto___60669 < len__44984__auto___60668)){
args__44991__auto__.push((arguments[i__44985__auto___60669]));

var G__60670 = (i__44985__auto___60669 + (1));
i__44985__auto___60669 = G__60670;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60667))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60667){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60667);
});})(g__60510__auto___60667))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__60510__auto___60667){
return (function (seq60631){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60631));
});})(g__60510__auto___60667))
;


var g__60510__auto___60671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__60510__auto___60671){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60672 = arguments.length;
var i__44985__auto___60673 = (0);
while(true){
if((i__44985__auto___60673 < len__44984__auto___60672)){
args__44991__auto__.push((arguments[i__44985__auto___60673]));

var G__60674 = (i__44985__auto___60673 + (1));
i__44985__auto___60673 = G__60674;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60671))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60671){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60671);
});})(g__60510__auto___60671))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__60510__auto___60671){
return (function (seq60632){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60632));
});})(g__60510__auto___60671))
;


var g__60510__auto___60675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__60510__auto___60675){
return (function cljs$spec$impl$gen$double(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60676 = arguments.length;
var i__44985__auto___60677 = (0);
while(true){
if((i__44985__auto___60677 < len__44984__auto___60676)){
args__44991__auto__.push((arguments[i__44985__auto___60677]));

var G__60678 = (i__44985__auto___60677 + (1));
i__44985__auto___60677 = G__60678;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60675))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60675){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60675);
});})(g__60510__auto___60675))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__60510__auto___60675){
return (function (seq60633){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60633));
});})(g__60510__auto___60675))
;


var g__60510__auto___60679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__60510__auto___60679){
return (function cljs$spec$impl$gen$int(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60680 = arguments.length;
var i__44985__auto___60681 = (0);
while(true){
if((i__44985__auto___60681 < len__44984__auto___60680)){
args__44991__auto__.push((arguments[i__44985__auto___60681]));

var G__60682 = (i__44985__auto___60681 + (1));
i__44985__auto___60681 = G__60682;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60679))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60679){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60679);
});})(g__60510__auto___60679))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__60510__auto___60679){
return (function (seq60634){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60634));
});})(g__60510__auto___60679))
;


var g__60510__auto___60683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__60510__auto___60683){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60684 = arguments.length;
var i__44985__auto___60685 = (0);
while(true){
if((i__44985__auto___60685 < len__44984__auto___60684)){
args__44991__auto__.push((arguments[i__44985__auto___60685]));

var G__60686 = (i__44985__auto___60685 + (1));
i__44985__auto___60685 = G__60686;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60683))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60683){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60683);
});})(g__60510__auto___60683))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__60510__auto___60683){
return (function (seq60635){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60635));
});})(g__60510__auto___60683))
;


var g__60510__auto___60687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__60510__auto___60687){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60688 = arguments.length;
var i__44985__auto___60689 = (0);
while(true){
if((i__44985__auto___60689 < len__44984__auto___60688)){
args__44991__auto__.push((arguments[i__44985__auto___60689]));

var G__60690 = (i__44985__auto___60689 + (1));
i__44985__auto___60689 = G__60690;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60687))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60687){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60687);
});})(g__60510__auto___60687))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__60510__auto___60687){
return (function (seq60636){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60636));
});})(g__60510__auto___60687))
;


var g__60510__auto___60691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__60510__auto___60691){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60692 = arguments.length;
var i__44985__auto___60693 = (0);
while(true){
if((i__44985__auto___60693 < len__44984__auto___60692)){
args__44991__auto__.push((arguments[i__44985__auto___60693]));

var G__60694 = (i__44985__auto___60693 + (1));
i__44985__auto___60693 = G__60694;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60691))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60691){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60691);
});})(g__60510__auto___60691))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__60510__auto___60691){
return (function (seq60637){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60637));
});})(g__60510__auto___60691))
;


var g__60510__auto___60695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__60510__auto___60695){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60696 = arguments.length;
var i__44985__auto___60697 = (0);
while(true){
if((i__44985__auto___60697 < len__44984__auto___60696)){
args__44991__auto__.push((arguments[i__44985__auto___60697]));

var G__60698 = (i__44985__auto___60697 + (1));
i__44985__auto___60697 = G__60698;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60695))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60695){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60695);
});})(g__60510__auto___60695))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__60510__auto___60695){
return (function (seq60638){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60638));
});})(g__60510__auto___60695))
;


var g__60510__auto___60699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__60510__auto___60699){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60700 = arguments.length;
var i__44985__auto___60701 = (0);
while(true){
if((i__44985__auto___60701 < len__44984__auto___60700)){
args__44991__auto__.push((arguments[i__44985__auto___60701]));

var G__60702 = (i__44985__auto___60701 + (1));
i__44985__auto___60701 = G__60702;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60699))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60699){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60699);
});})(g__60510__auto___60699))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__60510__auto___60699){
return (function (seq60639){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60639));
});})(g__60510__auto___60699))
;


var g__60510__auto___60703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__60510__auto___60703){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60704 = arguments.length;
var i__44985__auto___60705 = (0);
while(true){
if((i__44985__auto___60705 < len__44984__auto___60704)){
args__44991__auto__.push((arguments[i__44985__auto___60705]));

var G__60706 = (i__44985__auto___60705 + (1));
i__44985__auto___60705 = G__60706;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60703))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60703){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60703);
});})(g__60510__auto___60703))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__60510__auto___60703){
return (function (seq60640){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60640));
});})(g__60510__auto___60703))
;


var g__60510__auto___60707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__60510__auto___60707){
return (function cljs$spec$impl$gen$string(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60708 = arguments.length;
var i__44985__auto___60709 = (0);
while(true){
if((i__44985__auto___60709 < len__44984__auto___60708)){
args__44991__auto__.push((arguments[i__44985__auto___60709]));

var G__60710 = (i__44985__auto___60709 + (1));
i__44985__auto___60709 = G__60710;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60707))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60707){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60707);
});})(g__60510__auto___60707))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__60510__auto___60707){
return (function (seq60641){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60641));
});})(g__60510__auto___60707))
;


var g__60510__auto___60711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__60510__auto___60711){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60712 = arguments.length;
var i__44985__auto___60713 = (0);
while(true){
if((i__44985__auto___60713 < len__44984__auto___60712)){
args__44991__auto__.push((arguments[i__44985__auto___60713]));

var G__60714 = (i__44985__auto___60713 + (1));
i__44985__auto___60713 = G__60714;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60711))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60711){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60711);
});})(g__60510__auto___60711))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__60510__auto___60711){
return (function (seq60642){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60642));
});})(g__60510__auto___60711))
;


var g__60510__auto___60715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__60510__auto___60715){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60716 = arguments.length;
var i__44985__auto___60717 = (0);
while(true){
if((i__44985__auto___60717 < len__44984__auto___60716)){
args__44991__auto__.push((arguments[i__44985__auto___60717]));

var G__60718 = (i__44985__auto___60717 + (1));
i__44985__auto___60717 = G__60718;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60715))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60715){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60715);
});})(g__60510__auto___60715))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__60510__auto___60715){
return (function (seq60643){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60643));
});})(g__60510__auto___60715))
;


var g__60510__auto___60719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__60510__auto___60719){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60720 = arguments.length;
var i__44985__auto___60721 = (0);
while(true){
if((i__44985__auto___60721 < len__44984__auto___60720)){
args__44991__auto__.push((arguments[i__44985__auto___60721]));

var G__60722 = (i__44985__auto___60721 + (1));
i__44985__auto___60721 = G__60722;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60719))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60719){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60719);
});})(g__60510__auto___60719))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__60510__auto___60719){
return (function (seq60644){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60644));
});})(g__60510__auto___60719))
;


var g__60510__auto___60723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__60510__auto___60723){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60724 = arguments.length;
var i__44985__auto___60725 = (0);
while(true){
if((i__44985__auto___60725 < len__44984__auto___60724)){
args__44991__auto__.push((arguments[i__44985__auto___60725]));

var G__60726 = (i__44985__auto___60725 + (1));
i__44985__auto___60725 = G__60726;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60723))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60723){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60723);
});})(g__60510__auto___60723))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__60510__auto___60723){
return (function (seq60645){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60645));
});})(g__60510__auto___60723))
;


var g__60510__auto___60727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__60510__auto___60727){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60728 = arguments.length;
var i__44985__auto___60729 = (0);
while(true){
if((i__44985__auto___60729 < len__44984__auto___60728)){
args__44991__auto__.push((arguments[i__44985__auto___60729]));

var G__60730 = (i__44985__auto___60729 + (1));
i__44985__auto___60729 = G__60730;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});})(g__60510__auto___60727))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60510__auto___60727){
return (function (args){
return cljs.core.deref.call(null,g__60510__auto___60727);
});})(g__60510__auto___60727))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__60510__auto___60727){
return (function (seq60646){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60646));
});})(g__60510__auto___60727))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__44991__auto__ = [];
var len__44984__auto___60733 = arguments.length;
var i__44985__auto___60734 = (0);
while(true){
if((i__44985__auto___60734 < len__44984__auto___60733)){
args__44991__auto__.push((arguments[i__44985__auto___60734]));

var G__60735 = (i__44985__auto___60734 + (1));
i__44985__auto___60734 = G__60735;
continue;
} else {
}
break;
}

var argseq__44992__auto__ = ((((0) < args__44991__auto__.length))?(new cljs.core.IndexedSeq(args__44991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__44992__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__60731_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__60731_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq60732){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60732));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__60736_SHARP_){
return (new Date(p1__60736_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1476618810113