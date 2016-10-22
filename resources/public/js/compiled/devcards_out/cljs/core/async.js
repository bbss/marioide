// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args46284 = [];
var len__45008__auto___46290 = arguments.length;
var i__45009__auto___46291 = (0);
while(true){
if((i__45009__auto___46291 < len__45008__auto___46290)){
args46284.push((arguments[i__45009__auto___46291]));

var G__46292 = (i__45009__auto___46291 + (1));
i__45009__auto___46291 = G__46292;
continue;
} else {
}
break;
}

var G__46286 = args46284.length;
switch (G__46286) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46284.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46287 = (function (f,blockable,meta46288){
this.f = f;
this.blockable = blockable;
this.meta46288 = meta46288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46289,meta46288__$1){
var self__ = this;
var _46289__$1 = this;
return (new cljs.core.async.t_cljs$core$async46287(self__.f,self__.blockable,meta46288__$1));
});

cljs.core.async.t_cljs$core$async46287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46289){
var self__ = this;
var _46289__$1 = this;
return self__.meta46288;
});

cljs.core.async.t_cljs$core$async46287.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46288","meta46288",-1809562235,null)], null);
});

cljs.core.async.t_cljs$core$async46287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46287";

cljs.core.async.t_cljs$core$async46287.cljs$lang$ctorPrWriter = (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async46287");
});

cljs.core.async.__GT_t_cljs$core$async46287 = (function cljs$core$async$__GT_t_cljs$core$async46287(f__$1,blockable__$1,meta46288){
return (new cljs.core.async.t_cljs$core$async46287(f__$1,blockable__$1,meta46288));
});

}

return (new cljs.core.async.t_cljs$core$async46287(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args46296 = [];
var len__45008__auto___46299 = arguments.length;
var i__45009__auto___46300 = (0);
while(true){
if((i__45009__auto___46300 < len__45008__auto___46299)){
args46296.push((arguments[i__45009__auto___46300]));

var G__46301 = (i__45009__auto___46300 + (1));
i__45009__auto___46300 = G__46301;
continue;
} else {
}
break;
}

var G__46298 = args46296.length;
switch (G__46298) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46296.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args46303 = [];
var len__45008__auto___46306 = arguments.length;
var i__45009__auto___46307 = (0);
while(true){
if((i__45009__auto___46307 < len__45008__auto___46306)){
args46303.push((arguments[i__45009__auto___46307]));

var G__46308 = (i__45009__auto___46307 + (1));
i__45009__auto___46307 = G__46308;
continue;
} else {
}
break;
}

var G__46305 = args46303.length;
switch (G__46305) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46303.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args46310 = [];
var len__45008__auto___46313 = arguments.length;
var i__45009__auto___46314 = (0);
while(true){
if((i__45009__auto___46314 < len__45008__auto___46313)){
args46310.push((arguments[i__45009__auto___46314]));

var G__46315 = (i__45009__auto___46314 + (1));
i__45009__auto___46314 = G__46315;
continue;
} else {
}
break;
}

var G__46312 = args46310.length;
switch (G__46312) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46310.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46317 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46317);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46317,ret){
return (function (){
return fn1.call(null,val_46317);
});})(val_46317,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args46318 = [];
var len__45008__auto___46321 = arguments.length;
var i__45009__auto___46322 = (0);
while(true){
if((i__45009__auto___46322 < len__45008__auto___46321)){
args46318.push((arguments[i__45009__auto___46322]));

var G__46323 = (i__45009__auto___46322 + (1));
i__45009__auto___46322 = G__46323;
continue;
} else {
}
break;
}

var G__46320 = args46318.length;
switch (G__46320) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46318.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__44848__auto___46325 = n;
var x_46326 = (0);
while(true){
if((x_46326 < n__44848__auto___46325)){
(a[x_46326] = (0));

var G__46327 = (x_46326 + (1));
x_46326 = G__46327;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46328 = (i + (1));
i = G__46328;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46332 = (function (alt_flag,flag,meta46333){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46333 = meta46333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46334,meta46333__$1){
var self__ = this;
var _46334__$1 = this;
return (new cljs.core.async.t_cljs$core$async46332(self__.alt_flag,self__.flag,meta46333__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46334){
var self__ = this;
var _46334__$1 = this;
return self__.meta46333;
});})(flag))
;

cljs.core.async.t_cljs$core$async46332.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46332.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46333","meta46333",-1883395877,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46332";

cljs.core.async.t_cljs$core$async46332.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async46332");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46332 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46332(alt_flag__$1,flag__$1,meta46333){
return (new cljs.core.async.t_cljs$core$async46332(alt_flag__$1,flag__$1,meta46333));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46332(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46338 = (function (alt_handler,flag,cb,meta46339){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46339 = meta46339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46340,meta46339__$1){
var self__ = this;
var _46340__$1 = this;
return (new cljs.core.async.t_cljs$core$async46338(self__.alt_handler,self__.flag,self__.cb,meta46339__$1));
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46340){
var self__ = this;
var _46340__$1 = this;
return self__.meta46339;
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46339","meta46339",513872140,null)], null);
});

cljs.core.async.t_cljs$core$async46338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46338";

cljs.core.async.t_cljs$core$async46338.cljs$lang$ctorPrWriter = (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async46338");
});

cljs.core.async.__GT_t_cljs$core$async46338 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46338(alt_handler__$1,flag__$1,cb__$1,meta46339){
return (new cljs.core.async.t_cljs$core$async46338(alt_handler__$1,flag__$1,cb__$1,meta46339));
});

}

return (new cljs.core.async.t_cljs$core$async46338(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46341_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46341_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46342_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46342_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__43933__auto__ = wport;
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46343 = (i + (1));
i = G__46343;
continue;
}
} else {
return null;
}
break;
}
})();
var or__43933__auto__ = ret;
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__43921__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__43921__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__43921__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45015__auto__ = [];
var len__45008__auto___46349 = arguments.length;
var i__45009__auto___46350 = (0);
while(true){
if((i__45009__auto___46350 < len__45008__auto___46349)){
args__45015__auto__.push((arguments[i__45009__auto___46350]));

var G__46351 = (i__45009__auto___46350 + (1));
i__45009__auto___46350 = G__46351;
continue;
} else {
}
break;
}

var argseq__45016__auto__ = ((((1) < args__45015__auto__.length))?(new cljs.core.IndexedSeq(args__45015__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45016__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46346){
var map__46347 = p__46346;
var map__46347__$1 = ((((!((map__46347 == null)))?((((map__46347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46347):map__46347);
var opts = map__46347__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46344){
var G__46345 = cljs.core.first.call(null,seq46344);
var seq46344__$1 = cljs.core.next.call(null,seq46344);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46345,seq46344__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args46352 = [];
var len__45008__auto___46402 = arguments.length;
var i__45009__auto___46403 = (0);
while(true){
if((i__45009__auto___46403 < len__45008__auto___46402)){
args46352.push((arguments[i__45009__auto___46403]));

var G__46404 = (i__45009__auto___46403 + (1));
i__45009__auto___46403 = G__46404;
continue;
} else {
}
break;
}

var G__46354 = args46352.length;
switch (G__46354) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46352.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46239__auto___46406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___46406){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___46406){
return (function (state_46378){
var state_val_46379 = (state_46378[(1)]);
if((state_val_46379 === (7))){
var inst_46374 = (state_46378[(2)]);
var state_46378__$1 = state_46378;
var statearr_46380_46407 = state_46378__$1;
(statearr_46380_46407[(2)] = inst_46374);

(statearr_46380_46407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (1))){
var state_46378__$1 = state_46378;
var statearr_46381_46408 = state_46378__$1;
(statearr_46381_46408[(2)] = null);

(statearr_46381_46408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (4))){
var inst_46357 = (state_46378[(7)]);
var inst_46357__$1 = (state_46378[(2)]);
var inst_46358 = (inst_46357__$1 == null);
var state_46378__$1 = (function (){var statearr_46382 = state_46378;
(statearr_46382[(7)] = inst_46357__$1);

return statearr_46382;
})();
if(cljs.core.truth_(inst_46358)){
var statearr_46383_46409 = state_46378__$1;
(statearr_46383_46409[(1)] = (5));

} else {
var statearr_46384_46410 = state_46378__$1;
(statearr_46384_46410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (13))){
var state_46378__$1 = state_46378;
var statearr_46385_46411 = state_46378__$1;
(statearr_46385_46411[(2)] = null);

(statearr_46385_46411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (6))){
var inst_46357 = (state_46378[(7)]);
var state_46378__$1 = state_46378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46378__$1,(11),to,inst_46357);
} else {
if((state_val_46379 === (3))){
var inst_46376 = (state_46378[(2)]);
var state_46378__$1 = state_46378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46378__$1,inst_46376);
} else {
if((state_val_46379 === (12))){
var state_46378__$1 = state_46378;
var statearr_46386_46412 = state_46378__$1;
(statearr_46386_46412[(2)] = null);

(statearr_46386_46412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (2))){
var state_46378__$1 = state_46378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46378__$1,(4),from);
} else {
if((state_val_46379 === (11))){
var inst_46367 = (state_46378[(2)]);
var state_46378__$1 = state_46378;
if(cljs.core.truth_(inst_46367)){
var statearr_46387_46413 = state_46378__$1;
(statearr_46387_46413[(1)] = (12));

} else {
var statearr_46388_46414 = state_46378__$1;
(statearr_46388_46414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (9))){
var state_46378__$1 = state_46378;
var statearr_46389_46415 = state_46378__$1;
(statearr_46389_46415[(2)] = null);

(statearr_46389_46415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (5))){
var state_46378__$1 = state_46378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46390_46416 = state_46378__$1;
(statearr_46390_46416[(1)] = (8));

} else {
var statearr_46391_46417 = state_46378__$1;
(statearr_46391_46417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (14))){
var inst_46372 = (state_46378[(2)]);
var state_46378__$1 = state_46378;
var statearr_46392_46418 = state_46378__$1;
(statearr_46392_46418[(2)] = inst_46372);

(statearr_46392_46418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (10))){
var inst_46364 = (state_46378[(2)]);
var state_46378__$1 = state_46378;
var statearr_46393_46419 = state_46378__$1;
(statearr_46393_46419[(2)] = inst_46364);

(statearr_46393_46419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46379 === (8))){
var inst_46361 = cljs.core.async.close_BANG_.call(null,to);
var state_46378__$1 = state_46378;
var statearr_46394_46420 = state_46378__$1;
(statearr_46394_46420[(2)] = inst_46361);

(statearr_46394_46420[(1)] = (10));


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
});})(c__46239__auto___46406))
;
return ((function (switch__46127__auto__,c__46239__auto___46406){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_46398 = [null,null,null,null,null,null,null,null];
(statearr_46398[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_46398[(1)] = (1));

return statearr_46398;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_46378){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_46378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e46399){if((e46399 instanceof Object)){
var ex__46131__auto__ = e46399;
var statearr_46400_46421 = state_46378;
(statearr_46400_46421[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46422 = state_46378;
state_46378 = G__46422;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_46378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_46378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___46406))
})();
var state__46241__auto__ = (function (){var statearr_46401 = f__46240__auto__.call(null);
(statearr_46401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___46406);

return statearr_46401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___46406))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__46610){
var vec__46611 = p__46610;
var v = cljs.core.nth.call(null,vec__46611,(0),null);
var p = cljs.core.nth.call(null,vec__46611,(1),null);
var job = vec__46611;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46239__auto___46797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___46797,res,vec__46611,v,p,job,jobs,results){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___46797,res,vec__46611,v,p,job,jobs,results){
return (function (state_46618){
var state_val_46619 = (state_46618[(1)]);
if((state_val_46619 === (1))){
var state_46618__$1 = state_46618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46618__$1,(2),res,v);
} else {
if((state_val_46619 === (2))){
var inst_46615 = (state_46618[(2)]);
var inst_46616 = cljs.core.async.close_BANG_.call(null,res);
var state_46618__$1 = (function (){var statearr_46620 = state_46618;
(statearr_46620[(7)] = inst_46615);

return statearr_46620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46618__$1,inst_46616);
} else {
return null;
}
}
});})(c__46239__auto___46797,res,vec__46611,v,p,job,jobs,results))
;
return ((function (switch__46127__auto__,c__46239__auto___46797,res,vec__46611,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0 = (function (){
var statearr_46624 = [null,null,null,null,null,null,null,null];
(statearr_46624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__);

(statearr_46624[(1)] = (1));

return statearr_46624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1 = (function (state_46618){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_46618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e46625){if((e46625 instanceof Object)){
var ex__46131__auto__ = e46625;
var statearr_46626_46798 = state_46618;
(statearr_46626_46798[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46799 = state_46618;
state_46618 = G__46799;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = function(state_46618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1.call(this,state_46618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___46797,res,vec__46611,v,p,job,jobs,results))
})();
var state__46241__auto__ = (function (){var statearr_46627 = f__46240__auto__.call(null);
(statearr_46627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___46797);

return statearr_46627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___46797,res,vec__46611,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46628){
var vec__46629 = p__46628;
var v = cljs.core.nth.call(null,vec__46629,(0),null);
var p = cljs.core.nth.call(null,vec__46629,(1),null);
var job = vec__46629;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__44848__auto___46800 = n;
var __46801 = (0);
while(true){
if((__46801 < n__44848__auto___46800)){
var G__46632_46802 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46632_46802) {
case "compute":
var c__46239__auto___46804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46801,c__46239__auto___46804,G__46632_46802,n__44848__auto___46800,jobs,results,process,async){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (__46801,c__46239__auto___46804,G__46632_46802,n__44848__auto___46800,jobs,results,process,async){
return (function (state_46645){
var state_val_46646 = (state_46645[(1)]);
if((state_val_46646 === (1))){
var state_46645__$1 = state_46645;
var statearr_46647_46805 = state_46645__$1;
(statearr_46647_46805[(2)] = null);

(statearr_46647_46805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46646 === (2))){
var state_46645__$1 = state_46645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46645__$1,(4),jobs);
} else {
if((state_val_46646 === (3))){
var inst_46643 = (state_46645[(2)]);
var state_46645__$1 = state_46645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46645__$1,inst_46643);
} else {
if((state_val_46646 === (4))){
var inst_46635 = (state_46645[(2)]);
var inst_46636 = process.call(null,inst_46635);
var state_46645__$1 = state_46645;
if(cljs.core.truth_(inst_46636)){
var statearr_46648_46806 = state_46645__$1;
(statearr_46648_46806[(1)] = (5));

} else {
var statearr_46649_46807 = state_46645__$1;
(statearr_46649_46807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46646 === (5))){
var state_46645__$1 = state_46645;
var statearr_46650_46808 = state_46645__$1;
(statearr_46650_46808[(2)] = null);

(statearr_46650_46808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46646 === (6))){
var state_46645__$1 = state_46645;
var statearr_46651_46809 = state_46645__$1;
(statearr_46651_46809[(2)] = null);

(statearr_46651_46809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46646 === (7))){
var inst_46641 = (state_46645[(2)]);
var state_46645__$1 = state_46645;
var statearr_46652_46810 = state_46645__$1;
(statearr_46652_46810[(2)] = inst_46641);

(statearr_46652_46810[(1)] = (3));


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
});})(__46801,c__46239__auto___46804,G__46632_46802,n__44848__auto___46800,jobs,results,process,async))
;
return ((function (__46801,switch__46127__auto__,c__46239__auto___46804,G__46632_46802,n__44848__auto___46800,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0 = (function (){
var statearr_46656 = [null,null,null,null,null,null,null];
(statearr_46656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__);

(statearr_46656[(1)] = (1));

return statearr_46656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1 = (function (state_46645){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_46645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e46657){if((e46657 instanceof Object)){
var ex__46131__auto__ = e46657;
var statearr_46658_46811 = state_46645;
(statearr_46658_46811[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46812 = state_46645;
state_46645 = G__46812;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = function(state_46645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1.call(this,state_46645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__;
})()
;})(__46801,switch__46127__auto__,c__46239__auto___46804,G__46632_46802,n__44848__auto___46800,jobs,results,process,async))
})();
var state__46241__auto__ = (function (){var statearr_46659 = f__46240__auto__.call(null);
(statearr_46659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___46804);

return statearr_46659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(__46801,c__46239__auto___46804,G__46632_46802,n__44848__auto___46800,jobs,results,process,async))
);


break;
case "async":
var c__46239__auto___46813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__46801,c__46239__auto___46813,G__46632_46802,n__44848__auto___46800,jobs,results,process,async){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (__46801,c__46239__auto___46813,G__46632_46802,n__44848__auto___46800,jobs,results,process,async){
return (function (state_46672){
var state_val_46673 = (state_46672[(1)]);
if((state_val_46673 === (1))){
var state_46672__$1 = state_46672;
var statearr_46674_46814 = state_46672__$1;
(statearr_46674_46814[(2)] = null);

(statearr_46674_46814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (2))){
var state_46672__$1 = state_46672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46672__$1,(4),jobs);
} else {
if((state_val_46673 === (3))){
var inst_46670 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46672__$1,inst_46670);
} else {
if((state_val_46673 === (4))){
var inst_46662 = (state_46672[(2)]);
var inst_46663 = async.call(null,inst_46662);
var state_46672__$1 = state_46672;
if(cljs.core.truth_(inst_46663)){
var statearr_46675_46815 = state_46672__$1;
(statearr_46675_46815[(1)] = (5));

} else {
var statearr_46676_46816 = state_46672__$1;
(statearr_46676_46816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (5))){
var state_46672__$1 = state_46672;
var statearr_46677_46817 = state_46672__$1;
(statearr_46677_46817[(2)] = null);

(statearr_46677_46817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (6))){
var state_46672__$1 = state_46672;
var statearr_46678_46818 = state_46672__$1;
(statearr_46678_46818[(2)] = null);

(statearr_46678_46818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46673 === (7))){
var inst_46668 = (state_46672[(2)]);
var state_46672__$1 = state_46672;
var statearr_46679_46819 = state_46672__$1;
(statearr_46679_46819[(2)] = inst_46668);

(statearr_46679_46819[(1)] = (3));


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
});})(__46801,c__46239__auto___46813,G__46632_46802,n__44848__auto___46800,jobs,results,process,async))
;
return ((function (__46801,switch__46127__auto__,c__46239__auto___46813,G__46632_46802,n__44848__auto___46800,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0 = (function (){
var statearr_46683 = [null,null,null,null,null,null,null];
(statearr_46683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__);

(statearr_46683[(1)] = (1));

return statearr_46683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1 = (function (state_46672){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_46672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e46684){if((e46684 instanceof Object)){
var ex__46131__auto__ = e46684;
var statearr_46685_46820 = state_46672;
(statearr_46685_46820[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46821 = state_46672;
state_46672 = G__46821;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = function(state_46672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1.call(this,state_46672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__;
})()
;})(__46801,switch__46127__auto__,c__46239__auto___46813,G__46632_46802,n__44848__auto___46800,jobs,results,process,async))
})();
var state__46241__auto__ = (function (){var statearr_46686 = f__46240__auto__.call(null);
(statearr_46686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___46813);

return statearr_46686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(__46801,c__46239__auto___46813,G__46632_46802,n__44848__auto___46800,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__46822 = (__46801 + (1));
__46801 = G__46822;
continue;
} else {
}
break;
}

var c__46239__auto___46823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___46823,jobs,results,process,async){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___46823,jobs,results,process,async){
return (function (state_46708){
var state_val_46709 = (state_46708[(1)]);
if((state_val_46709 === (1))){
var state_46708__$1 = state_46708;
var statearr_46710_46824 = state_46708__$1;
(statearr_46710_46824[(2)] = null);

(statearr_46710_46824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46709 === (2))){
var state_46708__$1 = state_46708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46708__$1,(4),from);
} else {
if((state_val_46709 === (3))){
var inst_46706 = (state_46708[(2)]);
var state_46708__$1 = state_46708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46708__$1,inst_46706);
} else {
if((state_val_46709 === (4))){
var inst_46689 = (state_46708[(7)]);
var inst_46689__$1 = (state_46708[(2)]);
var inst_46690 = (inst_46689__$1 == null);
var state_46708__$1 = (function (){var statearr_46711 = state_46708;
(statearr_46711[(7)] = inst_46689__$1);

return statearr_46711;
})();
if(cljs.core.truth_(inst_46690)){
var statearr_46712_46825 = state_46708__$1;
(statearr_46712_46825[(1)] = (5));

} else {
var statearr_46713_46826 = state_46708__$1;
(statearr_46713_46826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46709 === (5))){
var inst_46692 = cljs.core.async.close_BANG_.call(null,jobs);
var state_46708__$1 = state_46708;
var statearr_46714_46827 = state_46708__$1;
(statearr_46714_46827[(2)] = inst_46692);

(statearr_46714_46827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46709 === (6))){
var inst_46694 = (state_46708[(8)]);
var inst_46689 = (state_46708[(7)]);
var inst_46694__$1 = cljs.core.async.chan.call(null,(1));
var inst_46695 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46696 = [inst_46689,inst_46694__$1];
var inst_46697 = (new cljs.core.PersistentVector(null,2,(5),inst_46695,inst_46696,null));
var state_46708__$1 = (function (){var statearr_46715 = state_46708;
(statearr_46715[(8)] = inst_46694__$1);

return statearr_46715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46708__$1,(8),jobs,inst_46697);
} else {
if((state_val_46709 === (7))){
var inst_46704 = (state_46708[(2)]);
var state_46708__$1 = state_46708;
var statearr_46716_46828 = state_46708__$1;
(statearr_46716_46828[(2)] = inst_46704);

(statearr_46716_46828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46709 === (8))){
var inst_46694 = (state_46708[(8)]);
var inst_46699 = (state_46708[(2)]);
var state_46708__$1 = (function (){var statearr_46717 = state_46708;
(statearr_46717[(9)] = inst_46699);

return statearr_46717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46708__$1,(9),results,inst_46694);
} else {
if((state_val_46709 === (9))){
var inst_46701 = (state_46708[(2)]);
var state_46708__$1 = (function (){var statearr_46718 = state_46708;
(statearr_46718[(10)] = inst_46701);

return statearr_46718;
})();
var statearr_46719_46829 = state_46708__$1;
(statearr_46719_46829[(2)] = null);

(statearr_46719_46829[(1)] = (2));


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
});})(c__46239__auto___46823,jobs,results,process,async))
;
return ((function (switch__46127__auto__,c__46239__auto___46823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0 = (function (){
var statearr_46723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__);

(statearr_46723[(1)] = (1));

return statearr_46723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1 = (function (state_46708){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_46708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e46724){if((e46724 instanceof Object)){
var ex__46131__auto__ = e46724;
var statearr_46725_46830 = state_46708;
(statearr_46725_46830[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46831 = state_46708;
state_46708 = G__46831;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = function(state_46708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1.call(this,state_46708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___46823,jobs,results,process,async))
})();
var state__46241__auto__ = (function (){var statearr_46726 = f__46240__auto__.call(null);
(statearr_46726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___46823);

return statearr_46726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___46823,jobs,results,process,async))
);


var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__,jobs,results,process,async){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__,jobs,results,process,async){
return (function (state_46764){
var state_val_46765 = (state_46764[(1)]);
if((state_val_46765 === (7))){
var inst_46760 = (state_46764[(2)]);
var state_46764__$1 = state_46764;
var statearr_46766_46832 = state_46764__$1;
(statearr_46766_46832[(2)] = inst_46760);

(statearr_46766_46832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (20))){
var state_46764__$1 = state_46764;
var statearr_46767_46833 = state_46764__$1;
(statearr_46767_46833[(2)] = null);

(statearr_46767_46833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (1))){
var state_46764__$1 = state_46764;
var statearr_46768_46834 = state_46764__$1;
(statearr_46768_46834[(2)] = null);

(statearr_46768_46834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (4))){
var inst_46729 = (state_46764[(7)]);
var inst_46729__$1 = (state_46764[(2)]);
var inst_46730 = (inst_46729__$1 == null);
var state_46764__$1 = (function (){var statearr_46769 = state_46764;
(statearr_46769[(7)] = inst_46729__$1);

return statearr_46769;
})();
if(cljs.core.truth_(inst_46730)){
var statearr_46770_46835 = state_46764__$1;
(statearr_46770_46835[(1)] = (5));

} else {
var statearr_46771_46836 = state_46764__$1;
(statearr_46771_46836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (15))){
var inst_46742 = (state_46764[(8)]);
var state_46764__$1 = state_46764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46764__$1,(18),to,inst_46742);
} else {
if((state_val_46765 === (21))){
var inst_46755 = (state_46764[(2)]);
var state_46764__$1 = state_46764;
var statearr_46772_46837 = state_46764__$1;
(statearr_46772_46837[(2)] = inst_46755);

(statearr_46772_46837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (13))){
var inst_46757 = (state_46764[(2)]);
var state_46764__$1 = (function (){var statearr_46773 = state_46764;
(statearr_46773[(9)] = inst_46757);

return statearr_46773;
})();
var statearr_46774_46838 = state_46764__$1;
(statearr_46774_46838[(2)] = null);

(statearr_46774_46838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (6))){
var inst_46729 = (state_46764[(7)]);
var state_46764__$1 = state_46764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46764__$1,(11),inst_46729);
} else {
if((state_val_46765 === (17))){
var inst_46750 = (state_46764[(2)]);
var state_46764__$1 = state_46764;
if(cljs.core.truth_(inst_46750)){
var statearr_46775_46839 = state_46764__$1;
(statearr_46775_46839[(1)] = (19));

} else {
var statearr_46776_46840 = state_46764__$1;
(statearr_46776_46840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (3))){
var inst_46762 = (state_46764[(2)]);
var state_46764__$1 = state_46764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46764__$1,inst_46762);
} else {
if((state_val_46765 === (12))){
var inst_46739 = (state_46764[(10)]);
var state_46764__$1 = state_46764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46764__$1,(14),inst_46739);
} else {
if((state_val_46765 === (2))){
var state_46764__$1 = state_46764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46764__$1,(4),results);
} else {
if((state_val_46765 === (19))){
var state_46764__$1 = state_46764;
var statearr_46777_46841 = state_46764__$1;
(statearr_46777_46841[(2)] = null);

(statearr_46777_46841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (11))){
var inst_46739 = (state_46764[(2)]);
var state_46764__$1 = (function (){var statearr_46778 = state_46764;
(statearr_46778[(10)] = inst_46739);

return statearr_46778;
})();
var statearr_46779_46842 = state_46764__$1;
(statearr_46779_46842[(2)] = null);

(statearr_46779_46842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (9))){
var state_46764__$1 = state_46764;
var statearr_46780_46843 = state_46764__$1;
(statearr_46780_46843[(2)] = null);

(statearr_46780_46843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (5))){
var state_46764__$1 = state_46764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46781_46844 = state_46764__$1;
(statearr_46781_46844[(1)] = (8));

} else {
var statearr_46782_46845 = state_46764__$1;
(statearr_46782_46845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (14))){
var inst_46744 = (state_46764[(11)]);
var inst_46742 = (state_46764[(8)]);
var inst_46742__$1 = (state_46764[(2)]);
var inst_46743 = (inst_46742__$1 == null);
var inst_46744__$1 = cljs.core.not.call(null,inst_46743);
var state_46764__$1 = (function (){var statearr_46783 = state_46764;
(statearr_46783[(11)] = inst_46744__$1);

(statearr_46783[(8)] = inst_46742__$1);

return statearr_46783;
})();
if(inst_46744__$1){
var statearr_46784_46846 = state_46764__$1;
(statearr_46784_46846[(1)] = (15));

} else {
var statearr_46785_46847 = state_46764__$1;
(statearr_46785_46847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (16))){
var inst_46744 = (state_46764[(11)]);
var state_46764__$1 = state_46764;
var statearr_46786_46848 = state_46764__$1;
(statearr_46786_46848[(2)] = inst_46744);

(statearr_46786_46848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (10))){
var inst_46736 = (state_46764[(2)]);
var state_46764__$1 = state_46764;
var statearr_46787_46849 = state_46764__$1;
(statearr_46787_46849[(2)] = inst_46736);

(statearr_46787_46849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (18))){
var inst_46747 = (state_46764[(2)]);
var state_46764__$1 = state_46764;
var statearr_46788_46850 = state_46764__$1;
(statearr_46788_46850[(2)] = inst_46747);

(statearr_46788_46850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46765 === (8))){
var inst_46733 = cljs.core.async.close_BANG_.call(null,to);
var state_46764__$1 = state_46764;
var statearr_46789_46851 = state_46764__$1;
(statearr_46789_46851[(2)] = inst_46733);

(statearr_46789_46851[(1)] = (10));


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
});})(c__46239__auto__,jobs,results,process,async))
;
return ((function (switch__46127__auto__,c__46239__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0 = (function (){
var statearr_46793 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__);

(statearr_46793[(1)] = (1));

return statearr_46793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1 = (function (state_46764){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_46764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e46794){if((e46794 instanceof Object)){
var ex__46131__auto__ = e46794;
var statearr_46795_46852 = state_46764;
(statearr_46795_46852[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46853 = state_46764;
state_46764 = G__46853;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__ = function(state_46764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1.call(this,state_46764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46128__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__,jobs,results,process,async))
})();
var state__46241__auto__ = (function (){var statearr_46796 = f__46240__auto__.call(null);
(statearr_46796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_46796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__,jobs,results,process,async))
);

return c__46239__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args46854 = [];
var len__45008__auto___46857 = arguments.length;
var i__45009__auto___46858 = (0);
while(true){
if((i__45009__auto___46858 < len__45008__auto___46857)){
args46854.push((arguments[i__45009__auto___46858]));

var G__46859 = (i__45009__auto___46858 + (1));
i__45009__auto___46858 = G__46859;
continue;
} else {
}
break;
}

var G__46856 = args46854.length;
switch (G__46856) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46854.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args46861 = [];
var len__45008__auto___46864 = arguments.length;
var i__45009__auto___46865 = (0);
while(true){
if((i__45009__auto___46865 < len__45008__auto___46864)){
args46861.push((arguments[i__45009__auto___46865]));

var G__46866 = (i__45009__auto___46865 + (1));
i__45009__auto___46865 = G__46866;
continue;
} else {
}
break;
}

var G__46863 = args46861.length;
switch (G__46863) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46861.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args46868 = [];
var len__45008__auto___46921 = arguments.length;
var i__45009__auto___46922 = (0);
while(true){
if((i__45009__auto___46922 < len__45008__auto___46921)){
args46868.push((arguments[i__45009__auto___46922]));

var G__46923 = (i__45009__auto___46922 + (1));
i__45009__auto___46922 = G__46923;
continue;
} else {
}
break;
}

var G__46870 = args46868.length;
switch (G__46870) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46868.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__46239__auto___46925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___46925,tc,fc){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___46925,tc,fc){
return (function (state_46896){
var state_val_46897 = (state_46896[(1)]);
if((state_val_46897 === (7))){
var inst_46892 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46898_46926 = state_46896__$1;
(statearr_46898_46926[(2)] = inst_46892);

(statearr_46898_46926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (1))){
var state_46896__$1 = state_46896;
var statearr_46899_46927 = state_46896__$1;
(statearr_46899_46927[(2)] = null);

(statearr_46899_46927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (4))){
var inst_46873 = (state_46896[(7)]);
var inst_46873__$1 = (state_46896[(2)]);
var inst_46874 = (inst_46873__$1 == null);
var state_46896__$1 = (function (){var statearr_46900 = state_46896;
(statearr_46900[(7)] = inst_46873__$1);

return statearr_46900;
})();
if(cljs.core.truth_(inst_46874)){
var statearr_46901_46928 = state_46896__$1;
(statearr_46901_46928[(1)] = (5));

} else {
var statearr_46902_46929 = state_46896__$1;
(statearr_46902_46929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (13))){
var state_46896__$1 = state_46896;
var statearr_46903_46930 = state_46896__$1;
(statearr_46903_46930[(2)] = null);

(statearr_46903_46930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (6))){
var inst_46873 = (state_46896[(7)]);
var inst_46879 = p.call(null,inst_46873);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46879)){
var statearr_46904_46931 = state_46896__$1;
(statearr_46904_46931[(1)] = (9));

} else {
var statearr_46905_46932 = state_46896__$1;
(statearr_46905_46932[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (3))){
var inst_46894 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46896__$1,inst_46894);
} else {
if((state_val_46897 === (12))){
var state_46896__$1 = state_46896;
var statearr_46906_46933 = state_46896__$1;
(statearr_46906_46933[(2)] = null);

(statearr_46906_46933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (2))){
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46896__$1,(4),ch);
} else {
if((state_val_46897 === (11))){
var inst_46873 = (state_46896[(7)]);
var inst_46883 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46896__$1,(8),inst_46883,inst_46873);
} else {
if((state_val_46897 === (9))){
var state_46896__$1 = state_46896;
var statearr_46907_46934 = state_46896__$1;
(statearr_46907_46934[(2)] = tc);

(statearr_46907_46934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (5))){
var inst_46876 = cljs.core.async.close_BANG_.call(null,tc);
var inst_46877 = cljs.core.async.close_BANG_.call(null,fc);
var state_46896__$1 = (function (){var statearr_46908 = state_46896;
(statearr_46908[(8)] = inst_46876);

return statearr_46908;
})();
var statearr_46909_46935 = state_46896__$1;
(statearr_46909_46935[(2)] = inst_46877);

(statearr_46909_46935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (14))){
var inst_46890 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
var statearr_46910_46936 = state_46896__$1;
(statearr_46910_46936[(2)] = inst_46890);

(statearr_46910_46936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (10))){
var state_46896__$1 = state_46896;
var statearr_46911_46937 = state_46896__$1;
(statearr_46911_46937[(2)] = fc);

(statearr_46911_46937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46897 === (8))){
var inst_46885 = (state_46896[(2)]);
var state_46896__$1 = state_46896;
if(cljs.core.truth_(inst_46885)){
var statearr_46912_46938 = state_46896__$1;
(statearr_46912_46938[(1)] = (12));

} else {
var statearr_46913_46939 = state_46896__$1;
(statearr_46913_46939[(1)] = (13));

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
});})(c__46239__auto___46925,tc,fc))
;
return ((function (switch__46127__auto__,c__46239__auto___46925,tc,fc){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_46917 = [null,null,null,null,null,null,null,null,null];
(statearr_46917[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_46917[(1)] = (1));

return statearr_46917;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_46896){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_46896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e46918){if((e46918 instanceof Object)){
var ex__46131__auto__ = e46918;
var statearr_46919_46940 = state_46896;
(statearr_46919_46940[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46941 = state_46896;
state_46896 = G__46941;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_46896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_46896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___46925,tc,fc))
})();
var state__46241__auto__ = (function (){var statearr_46920 = f__46240__auto__.call(null);
(statearr_46920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___46925);

return statearr_46920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___46925,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__){
return (function (state_47005){
var state_val_47006 = (state_47005[(1)]);
if((state_val_47006 === (7))){
var inst_47001 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
var statearr_47007_47028 = state_47005__$1;
(statearr_47007_47028[(2)] = inst_47001);

(statearr_47007_47028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (1))){
var inst_46985 = init;
var state_47005__$1 = (function (){var statearr_47008 = state_47005;
(statearr_47008[(7)] = inst_46985);

return statearr_47008;
})();
var statearr_47009_47029 = state_47005__$1;
(statearr_47009_47029[(2)] = null);

(statearr_47009_47029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (4))){
var inst_46988 = (state_47005[(8)]);
var inst_46988__$1 = (state_47005[(2)]);
var inst_46989 = (inst_46988__$1 == null);
var state_47005__$1 = (function (){var statearr_47010 = state_47005;
(statearr_47010[(8)] = inst_46988__$1);

return statearr_47010;
})();
if(cljs.core.truth_(inst_46989)){
var statearr_47011_47030 = state_47005__$1;
(statearr_47011_47030[(1)] = (5));

} else {
var statearr_47012_47031 = state_47005__$1;
(statearr_47012_47031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (6))){
var inst_46988 = (state_47005[(8)]);
var inst_46985 = (state_47005[(7)]);
var inst_46992 = (state_47005[(9)]);
var inst_46992__$1 = f.call(null,inst_46985,inst_46988);
var inst_46993 = cljs.core.reduced_QMARK_.call(null,inst_46992__$1);
var state_47005__$1 = (function (){var statearr_47013 = state_47005;
(statearr_47013[(9)] = inst_46992__$1);

return statearr_47013;
})();
if(inst_46993){
var statearr_47014_47032 = state_47005__$1;
(statearr_47014_47032[(1)] = (8));

} else {
var statearr_47015_47033 = state_47005__$1;
(statearr_47015_47033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (3))){
var inst_47003 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47005__$1,inst_47003);
} else {
if((state_val_47006 === (2))){
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47005__$1,(4),ch);
} else {
if((state_val_47006 === (9))){
var inst_46992 = (state_47005[(9)]);
var inst_46985 = inst_46992;
var state_47005__$1 = (function (){var statearr_47016 = state_47005;
(statearr_47016[(7)] = inst_46985);

return statearr_47016;
})();
var statearr_47017_47034 = state_47005__$1;
(statearr_47017_47034[(2)] = null);

(statearr_47017_47034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (5))){
var inst_46985 = (state_47005[(7)]);
var state_47005__$1 = state_47005;
var statearr_47018_47035 = state_47005__$1;
(statearr_47018_47035[(2)] = inst_46985);

(statearr_47018_47035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (10))){
var inst_46999 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
var statearr_47019_47036 = state_47005__$1;
(statearr_47019_47036[(2)] = inst_46999);

(statearr_47019_47036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (8))){
var inst_46992 = (state_47005[(9)]);
var inst_46995 = cljs.core.deref.call(null,inst_46992);
var state_47005__$1 = state_47005;
var statearr_47020_47037 = state_47005__$1;
(statearr_47020_47037[(2)] = inst_46995);

(statearr_47020_47037[(1)] = (10));


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
});})(c__46239__auto__))
;
return ((function (switch__46127__auto__,c__46239__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46128__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46128__auto____0 = (function (){
var statearr_47024 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47024[(0)] = cljs$core$async$reduce_$_state_machine__46128__auto__);

(statearr_47024[(1)] = (1));

return statearr_47024;
});
var cljs$core$async$reduce_$_state_machine__46128__auto____1 = (function (state_47005){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_47005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e47025){if((e47025 instanceof Object)){
var ex__46131__auto__ = e47025;
var statearr_47026_47038 = state_47005;
(statearr_47026_47038[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47039 = state_47005;
state_47005 = G__47039;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46128__auto__ = function(state_47005){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46128__auto____1.call(this,state_47005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46128__auto____0;
cljs$core$async$reduce_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46128__auto____1;
return cljs$core$async$reduce_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__))
})();
var state__46241__auto__ = (function (){var statearr_47027 = f__46240__auto__.call(null);
(statearr_47027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_47027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__))
);

return c__46239__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__,f__$1){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__,f__$1){
return (function (state_47059){
var state_val_47060 = (state_47059[(1)]);
if((state_val_47060 === (1))){
var inst_47054 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47059__$1,(2),inst_47054);
} else {
if((state_val_47060 === (2))){
var inst_47056 = (state_47059[(2)]);
var inst_47057 = f__$1.call(null,inst_47056);
var state_47059__$1 = state_47059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47059__$1,inst_47057);
} else {
return null;
}
}
});})(c__46239__auto__,f__$1))
;
return ((function (switch__46127__auto__,c__46239__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46128__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46128__auto____0 = (function (){
var statearr_47064 = [null,null,null,null,null,null,null];
(statearr_47064[(0)] = cljs$core$async$transduce_$_state_machine__46128__auto__);

(statearr_47064[(1)] = (1));

return statearr_47064;
});
var cljs$core$async$transduce_$_state_machine__46128__auto____1 = (function (state_47059){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_47059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e47065){if((e47065 instanceof Object)){
var ex__46131__auto__ = e47065;
var statearr_47066_47068 = state_47059;
(statearr_47066_47068[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47069 = state_47059;
state_47059 = G__47069;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46128__auto__ = function(state_47059){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46128__auto____1.call(this,state_47059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46128__auto____0;
cljs$core$async$transduce_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46128__auto____1;
return cljs$core$async$transduce_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__,f__$1))
})();
var state__46241__auto__ = (function (){var statearr_47067 = f__46240__auto__.call(null);
(statearr_47067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_47067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__,f__$1))
);

return c__46239__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args47070 = [];
var len__45008__auto___47122 = arguments.length;
var i__45009__auto___47123 = (0);
while(true){
if((i__45009__auto___47123 < len__45008__auto___47122)){
args47070.push((arguments[i__45009__auto___47123]));

var G__47124 = (i__45009__auto___47123 + (1));
i__45009__auto___47123 = G__47124;
continue;
} else {
}
break;
}

var G__47072 = args47070.length;
switch (G__47072) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47070.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__){
return (function (state_47097){
var state_val_47098 = (state_47097[(1)]);
if((state_val_47098 === (7))){
var inst_47079 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47099_47126 = state_47097__$1;
(statearr_47099_47126[(2)] = inst_47079);

(statearr_47099_47126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (1))){
var inst_47073 = cljs.core.seq.call(null,coll);
var inst_47074 = inst_47073;
var state_47097__$1 = (function (){var statearr_47100 = state_47097;
(statearr_47100[(7)] = inst_47074);

return statearr_47100;
})();
var statearr_47101_47127 = state_47097__$1;
(statearr_47101_47127[(2)] = null);

(statearr_47101_47127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (4))){
var inst_47074 = (state_47097[(7)]);
var inst_47077 = cljs.core.first.call(null,inst_47074);
var state_47097__$1 = state_47097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47097__$1,(7),ch,inst_47077);
} else {
if((state_val_47098 === (13))){
var inst_47091 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47102_47128 = state_47097__$1;
(statearr_47102_47128[(2)] = inst_47091);

(statearr_47102_47128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (6))){
var inst_47082 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47082)){
var statearr_47103_47129 = state_47097__$1;
(statearr_47103_47129[(1)] = (8));

} else {
var statearr_47104_47130 = state_47097__$1;
(statearr_47104_47130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (3))){
var inst_47095 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47097__$1,inst_47095);
} else {
if((state_val_47098 === (12))){
var state_47097__$1 = state_47097;
var statearr_47105_47131 = state_47097__$1;
(statearr_47105_47131[(2)] = null);

(statearr_47105_47131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (2))){
var inst_47074 = (state_47097[(7)]);
var state_47097__$1 = state_47097;
if(cljs.core.truth_(inst_47074)){
var statearr_47106_47132 = state_47097__$1;
(statearr_47106_47132[(1)] = (4));

} else {
var statearr_47107_47133 = state_47097__$1;
(statearr_47107_47133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (11))){
var inst_47088 = cljs.core.async.close_BANG_.call(null,ch);
var state_47097__$1 = state_47097;
var statearr_47108_47134 = state_47097__$1;
(statearr_47108_47134[(2)] = inst_47088);

(statearr_47108_47134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (9))){
var state_47097__$1 = state_47097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47109_47135 = state_47097__$1;
(statearr_47109_47135[(1)] = (11));

} else {
var statearr_47110_47136 = state_47097__$1;
(statearr_47110_47136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (5))){
var inst_47074 = (state_47097[(7)]);
var state_47097__$1 = state_47097;
var statearr_47111_47137 = state_47097__$1;
(statearr_47111_47137[(2)] = inst_47074);

(statearr_47111_47137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (10))){
var inst_47093 = (state_47097[(2)]);
var state_47097__$1 = state_47097;
var statearr_47112_47138 = state_47097__$1;
(statearr_47112_47138[(2)] = inst_47093);

(statearr_47112_47138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47098 === (8))){
var inst_47074 = (state_47097[(7)]);
var inst_47084 = cljs.core.next.call(null,inst_47074);
var inst_47074__$1 = inst_47084;
var state_47097__$1 = (function (){var statearr_47113 = state_47097;
(statearr_47113[(7)] = inst_47074__$1);

return statearr_47113;
})();
var statearr_47114_47139 = state_47097__$1;
(statearr_47114_47139[(2)] = null);

(statearr_47114_47139[(1)] = (2));


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
});})(c__46239__auto__))
;
return ((function (switch__46127__auto__,c__46239__auto__){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_47118 = [null,null,null,null,null,null,null,null];
(statearr_47118[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_47118[(1)] = (1));

return statearr_47118;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_47097){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_47097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e47119){if((e47119 instanceof Object)){
var ex__46131__auto__ = e47119;
var statearr_47120_47140 = state_47097;
(statearr_47120_47140[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47141 = state_47097;
state_47097 = G__47141;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_47097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_47097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__))
})();
var state__46241__auto__ = (function (){var statearr_47121 = f__46240__auto__.call(null);
(statearr_47121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_47121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__))
);

return c__46239__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44596__auto__ = (((_ == null))?null:_);
var m__44597__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,_);
} else {
var m__44597__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44597__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m,ch);
} else {
var m__44597__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m);
} else {
var m__44597__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47367 = (function (mult,ch,cs,meta47368){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47368 = meta47368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47369,meta47368__$1){
var self__ = this;
var _47369__$1 = this;
return (new cljs.core.async.t_cljs$core$async47367(self__.mult,self__.ch,self__.cs,meta47368__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47369){
var self__ = this;
var _47369__$1 = this;
return self__.meta47368;
});})(cs))
;

cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47367.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47367.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47368","meta47368",1500177292,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47367";

cljs.core.async.t_cljs$core$async47367.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async47367");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47367 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47367(mult__$1,ch__$1,cs__$1,meta47368){
return (new cljs.core.async.t_cljs$core$async47367(mult__$1,ch__$1,cs__$1,meta47368));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47367(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__46239__auto___47592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___47592,cs,m,dchan,dctr,done){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___47592,cs,m,dchan,dctr,done){
return (function (state_47504){
var state_val_47505 = (state_47504[(1)]);
if((state_val_47505 === (7))){
var inst_47500 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47506_47593 = state_47504__$1;
(statearr_47506_47593[(2)] = inst_47500);

(statearr_47506_47593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (20))){
var inst_47403 = (state_47504[(7)]);
var inst_47415 = cljs.core.first.call(null,inst_47403);
var inst_47416 = cljs.core.nth.call(null,inst_47415,(0),null);
var inst_47417 = cljs.core.nth.call(null,inst_47415,(1),null);
var state_47504__$1 = (function (){var statearr_47507 = state_47504;
(statearr_47507[(8)] = inst_47416);

return statearr_47507;
})();
if(cljs.core.truth_(inst_47417)){
var statearr_47508_47594 = state_47504__$1;
(statearr_47508_47594[(1)] = (22));

} else {
var statearr_47509_47595 = state_47504__$1;
(statearr_47509_47595[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (27))){
var inst_47372 = (state_47504[(9)]);
var inst_47445 = (state_47504[(10)]);
var inst_47452 = (state_47504[(11)]);
var inst_47447 = (state_47504[(12)]);
var inst_47452__$1 = cljs.core._nth.call(null,inst_47445,inst_47447);
var inst_47453 = cljs.core.async.put_BANG_.call(null,inst_47452__$1,inst_47372,done);
var state_47504__$1 = (function (){var statearr_47510 = state_47504;
(statearr_47510[(11)] = inst_47452__$1);

return statearr_47510;
})();
if(cljs.core.truth_(inst_47453)){
var statearr_47511_47596 = state_47504__$1;
(statearr_47511_47596[(1)] = (30));

} else {
var statearr_47512_47597 = state_47504__$1;
(statearr_47512_47597[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (1))){
var state_47504__$1 = state_47504;
var statearr_47513_47598 = state_47504__$1;
(statearr_47513_47598[(2)] = null);

(statearr_47513_47598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (24))){
var inst_47403 = (state_47504[(7)]);
var inst_47422 = (state_47504[(2)]);
var inst_47423 = cljs.core.next.call(null,inst_47403);
var inst_47381 = inst_47423;
var inst_47382 = null;
var inst_47383 = (0);
var inst_47384 = (0);
var state_47504__$1 = (function (){var statearr_47514 = state_47504;
(statearr_47514[(13)] = inst_47381);

(statearr_47514[(14)] = inst_47383);

(statearr_47514[(15)] = inst_47384);

(statearr_47514[(16)] = inst_47422);

(statearr_47514[(17)] = inst_47382);

return statearr_47514;
})();
var statearr_47515_47599 = state_47504__$1;
(statearr_47515_47599[(2)] = null);

(statearr_47515_47599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (39))){
var state_47504__$1 = state_47504;
var statearr_47519_47600 = state_47504__$1;
(statearr_47519_47600[(2)] = null);

(statearr_47519_47600[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (4))){
var inst_47372 = (state_47504[(9)]);
var inst_47372__$1 = (state_47504[(2)]);
var inst_47373 = (inst_47372__$1 == null);
var state_47504__$1 = (function (){var statearr_47520 = state_47504;
(statearr_47520[(9)] = inst_47372__$1);

return statearr_47520;
})();
if(cljs.core.truth_(inst_47373)){
var statearr_47521_47601 = state_47504__$1;
(statearr_47521_47601[(1)] = (5));

} else {
var statearr_47522_47602 = state_47504__$1;
(statearr_47522_47602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (15))){
var inst_47381 = (state_47504[(13)]);
var inst_47383 = (state_47504[(14)]);
var inst_47384 = (state_47504[(15)]);
var inst_47382 = (state_47504[(17)]);
var inst_47399 = (state_47504[(2)]);
var inst_47400 = (inst_47384 + (1));
var tmp47516 = inst_47381;
var tmp47517 = inst_47383;
var tmp47518 = inst_47382;
var inst_47381__$1 = tmp47516;
var inst_47382__$1 = tmp47518;
var inst_47383__$1 = tmp47517;
var inst_47384__$1 = inst_47400;
var state_47504__$1 = (function (){var statearr_47523 = state_47504;
(statearr_47523[(13)] = inst_47381__$1);

(statearr_47523[(14)] = inst_47383__$1);

(statearr_47523[(15)] = inst_47384__$1);

(statearr_47523[(17)] = inst_47382__$1);

(statearr_47523[(18)] = inst_47399);

return statearr_47523;
})();
var statearr_47524_47603 = state_47504__$1;
(statearr_47524_47603[(2)] = null);

(statearr_47524_47603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (21))){
var inst_47426 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47528_47604 = state_47504__$1;
(statearr_47528_47604[(2)] = inst_47426);

(statearr_47528_47604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (31))){
var inst_47452 = (state_47504[(11)]);
var inst_47456 = done.call(null,null);
var inst_47457 = cljs.core.async.untap_STAR_.call(null,m,inst_47452);
var state_47504__$1 = (function (){var statearr_47529 = state_47504;
(statearr_47529[(19)] = inst_47456);

return statearr_47529;
})();
var statearr_47530_47605 = state_47504__$1;
(statearr_47530_47605[(2)] = inst_47457);

(statearr_47530_47605[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (32))){
var inst_47444 = (state_47504[(20)]);
var inst_47445 = (state_47504[(10)]);
var inst_47446 = (state_47504[(21)]);
var inst_47447 = (state_47504[(12)]);
var inst_47459 = (state_47504[(2)]);
var inst_47460 = (inst_47447 + (1));
var tmp47525 = inst_47444;
var tmp47526 = inst_47445;
var tmp47527 = inst_47446;
var inst_47444__$1 = tmp47525;
var inst_47445__$1 = tmp47526;
var inst_47446__$1 = tmp47527;
var inst_47447__$1 = inst_47460;
var state_47504__$1 = (function (){var statearr_47531 = state_47504;
(statearr_47531[(20)] = inst_47444__$1);

(statearr_47531[(10)] = inst_47445__$1);

(statearr_47531[(21)] = inst_47446__$1);

(statearr_47531[(22)] = inst_47459);

(statearr_47531[(12)] = inst_47447__$1);

return statearr_47531;
})();
var statearr_47532_47606 = state_47504__$1;
(statearr_47532_47606[(2)] = null);

(statearr_47532_47606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (40))){
var inst_47472 = (state_47504[(23)]);
var inst_47476 = done.call(null,null);
var inst_47477 = cljs.core.async.untap_STAR_.call(null,m,inst_47472);
var state_47504__$1 = (function (){var statearr_47533 = state_47504;
(statearr_47533[(24)] = inst_47476);

return statearr_47533;
})();
var statearr_47534_47607 = state_47504__$1;
(statearr_47534_47607[(2)] = inst_47477);

(statearr_47534_47607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (33))){
var inst_47463 = (state_47504[(25)]);
var inst_47465 = cljs.core.chunked_seq_QMARK_.call(null,inst_47463);
var state_47504__$1 = state_47504;
if(inst_47465){
var statearr_47535_47608 = state_47504__$1;
(statearr_47535_47608[(1)] = (36));

} else {
var statearr_47536_47609 = state_47504__$1;
(statearr_47536_47609[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (13))){
var inst_47393 = (state_47504[(26)]);
var inst_47396 = cljs.core.async.close_BANG_.call(null,inst_47393);
var state_47504__$1 = state_47504;
var statearr_47537_47610 = state_47504__$1;
(statearr_47537_47610[(2)] = inst_47396);

(statearr_47537_47610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (22))){
var inst_47416 = (state_47504[(8)]);
var inst_47419 = cljs.core.async.close_BANG_.call(null,inst_47416);
var state_47504__$1 = state_47504;
var statearr_47538_47611 = state_47504__$1;
(statearr_47538_47611[(2)] = inst_47419);

(statearr_47538_47611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (36))){
var inst_47463 = (state_47504[(25)]);
var inst_47467 = cljs.core.chunk_first.call(null,inst_47463);
var inst_47468 = cljs.core.chunk_rest.call(null,inst_47463);
var inst_47469 = cljs.core.count.call(null,inst_47467);
var inst_47444 = inst_47468;
var inst_47445 = inst_47467;
var inst_47446 = inst_47469;
var inst_47447 = (0);
var state_47504__$1 = (function (){var statearr_47539 = state_47504;
(statearr_47539[(20)] = inst_47444);

(statearr_47539[(10)] = inst_47445);

(statearr_47539[(21)] = inst_47446);

(statearr_47539[(12)] = inst_47447);

return statearr_47539;
})();
var statearr_47540_47612 = state_47504__$1;
(statearr_47540_47612[(2)] = null);

(statearr_47540_47612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (41))){
var inst_47463 = (state_47504[(25)]);
var inst_47479 = (state_47504[(2)]);
var inst_47480 = cljs.core.next.call(null,inst_47463);
var inst_47444 = inst_47480;
var inst_47445 = null;
var inst_47446 = (0);
var inst_47447 = (0);
var state_47504__$1 = (function (){var statearr_47541 = state_47504;
(statearr_47541[(20)] = inst_47444);

(statearr_47541[(10)] = inst_47445);

(statearr_47541[(27)] = inst_47479);

(statearr_47541[(21)] = inst_47446);

(statearr_47541[(12)] = inst_47447);

return statearr_47541;
})();
var statearr_47542_47613 = state_47504__$1;
(statearr_47542_47613[(2)] = null);

(statearr_47542_47613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (43))){
var state_47504__$1 = state_47504;
var statearr_47543_47614 = state_47504__$1;
(statearr_47543_47614[(2)] = null);

(statearr_47543_47614[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (29))){
var inst_47488 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47544_47615 = state_47504__$1;
(statearr_47544_47615[(2)] = inst_47488);

(statearr_47544_47615[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (44))){
var inst_47497 = (state_47504[(2)]);
var state_47504__$1 = (function (){var statearr_47545 = state_47504;
(statearr_47545[(28)] = inst_47497);

return statearr_47545;
})();
var statearr_47546_47616 = state_47504__$1;
(statearr_47546_47616[(2)] = null);

(statearr_47546_47616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (6))){
var inst_47436 = (state_47504[(29)]);
var inst_47435 = cljs.core.deref.call(null,cs);
var inst_47436__$1 = cljs.core.keys.call(null,inst_47435);
var inst_47437 = cljs.core.count.call(null,inst_47436__$1);
var inst_47438 = cljs.core.reset_BANG_.call(null,dctr,inst_47437);
var inst_47443 = cljs.core.seq.call(null,inst_47436__$1);
var inst_47444 = inst_47443;
var inst_47445 = null;
var inst_47446 = (0);
var inst_47447 = (0);
var state_47504__$1 = (function (){var statearr_47547 = state_47504;
(statearr_47547[(20)] = inst_47444);

(statearr_47547[(29)] = inst_47436__$1);

(statearr_47547[(10)] = inst_47445);

(statearr_47547[(30)] = inst_47438);

(statearr_47547[(21)] = inst_47446);

(statearr_47547[(12)] = inst_47447);

return statearr_47547;
})();
var statearr_47548_47617 = state_47504__$1;
(statearr_47548_47617[(2)] = null);

(statearr_47548_47617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (28))){
var inst_47444 = (state_47504[(20)]);
var inst_47463 = (state_47504[(25)]);
var inst_47463__$1 = cljs.core.seq.call(null,inst_47444);
var state_47504__$1 = (function (){var statearr_47549 = state_47504;
(statearr_47549[(25)] = inst_47463__$1);

return statearr_47549;
})();
if(inst_47463__$1){
var statearr_47550_47618 = state_47504__$1;
(statearr_47550_47618[(1)] = (33));

} else {
var statearr_47551_47619 = state_47504__$1;
(statearr_47551_47619[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (25))){
var inst_47446 = (state_47504[(21)]);
var inst_47447 = (state_47504[(12)]);
var inst_47449 = (inst_47447 < inst_47446);
var inst_47450 = inst_47449;
var state_47504__$1 = state_47504;
if(cljs.core.truth_(inst_47450)){
var statearr_47552_47620 = state_47504__$1;
(statearr_47552_47620[(1)] = (27));

} else {
var statearr_47553_47621 = state_47504__$1;
(statearr_47553_47621[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (34))){
var state_47504__$1 = state_47504;
var statearr_47554_47622 = state_47504__$1;
(statearr_47554_47622[(2)] = null);

(statearr_47554_47622[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (17))){
var state_47504__$1 = state_47504;
var statearr_47555_47623 = state_47504__$1;
(statearr_47555_47623[(2)] = null);

(statearr_47555_47623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (3))){
var inst_47502 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47504__$1,inst_47502);
} else {
if((state_val_47505 === (12))){
var inst_47431 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47556_47624 = state_47504__$1;
(statearr_47556_47624[(2)] = inst_47431);

(statearr_47556_47624[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (2))){
var state_47504__$1 = state_47504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47504__$1,(4),ch);
} else {
if((state_val_47505 === (23))){
var state_47504__$1 = state_47504;
var statearr_47557_47625 = state_47504__$1;
(statearr_47557_47625[(2)] = null);

(statearr_47557_47625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (35))){
var inst_47486 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47558_47626 = state_47504__$1;
(statearr_47558_47626[(2)] = inst_47486);

(statearr_47558_47626[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (19))){
var inst_47403 = (state_47504[(7)]);
var inst_47407 = cljs.core.chunk_first.call(null,inst_47403);
var inst_47408 = cljs.core.chunk_rest.call(null,inst_47403);
var inst_47409 = cljs.core.count.call(null,inst_47407);
var inst_47381 = inst_47408;
var inst_47382 = inst_47407;
var inst_47383 = inst_47409;
var inst_47384 = (0);
var state_47504__$1 = (function (){var statearr_47559 = state_47504;
(statearr_47559[(13)] = inst_47381);

(statearr_47559[(14)] = inst_47383);

(statearr_47559[(15)] = inst_47384);

(statearr_47559[(17)] = inst_47382);

return statearr_47559;
})();
var statearr_47560_47627 = state_47504__$1;
(statearr_47560_47627[(2)] = null);

(statearr_47560_47627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (11))){
var inst_47381 = (state_47504[(13)]);
var inst_47403 = (state_47504[(7)]);
var inst_47403__$1 = cljs.core.seq.call(null,inst_47381);
var state_47504__$1 = (function (){var statearr_47561 = state_47504;
(statearr_47561[(7)] = inst_47403__$1);

return statearr_47561;
})();
if(inst_47403__$1){
var statearr_47562_47628 = state_47504__$1;
(statearr_47562_47628[(1)] = (16));

} else {
var statearr_47563_47629 = state_47504__$1;
(statearr_47563_47629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (9))){
var inst_47433 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47564_47630 = state_47504__$1;
(statearr_47564_47630[(2)] = inst_47433);

(statearr_47564_47630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (5))){
var inst_47379 = cljs.core.deref.call(null,cs);
var inst_47380 = cljs.core.seq.call(null,inst_47379);
var inst_47381 = inst_47380;
var inst_47382 = null;
var inst_47383 = (0);
var inst_47384 = (0);
var state_47504__$1 = (function (){var statearr_47565 = state_47504;
(statearr_47565[(13)] = inst_47381);

(statearr_47565[(14)] = inst_47383);

(statearr_47565[(15)] = inst_47384);

(statearr_47565[(17)] = inst_47382);

return statearr_47565;
})();
var statearr_47566_47631 = state_47504__$1;
(statearr_47566_47631[(2)] = null);

(statearr_47566_47631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (14))){
var state_47504__$1 = state_47504;
var statearr_47567_47632 = state_47504__$1;
(statearr_47567_47632[(2)] = null);

(statearr_47567_47632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (45))){
var inst_47494 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47568_47633 = state_47504__$1;
(statearr_47568_47633[(2)] = inst_47494);

(statearr_47568_47633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (26))){
var inst_47436 = (state_47504[(29)]);
var inst_47490 = (state_47504[(2)]);
var inst_47491 = cljs.core.seq.call(null,inst_47436);
var state_47504__$1 = (function (){var statearr_47569 = state_47504;
(statearr_47569[(31)] = inst_47490);

return statearr_47569;
})();
if(inst_47491){
var statearr_47570_47634 = state_47504__$1;
(statearr_47570_47634[(1)] = (42));

} else {
var statearr_47571_47635 = state_47504__$1;
(statearr_47571_47635[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (16))){
var inst_47403 = (state_47504[(7)]);
var inst_47405 = cljs.core.chunked_seq_QMARK_.call(null,inst_47403);
var state_47504__$1 = state_47504;
if(inst_47405){
var statearr_47572_47636 = state_47504__$1;
(statearr_47572_47636[(1)] = (19));

} else {
var statearr_47573_47637 = state_47504__$1;
(statearr_47573_47637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (38))){
var inst_47483 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47574_47638 = state_47504__$1;
(statearr_47574_47638[(2)] = inst_47483);

(statearr_47574_47638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (30))){
var state_47504__$1 = state_47504;
var statearr_47575_47639 = state_47504__$1;
(statearr_47575_47639[(2)] = null);

(statearr_47575_47639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (10))){
var inst_47384 = (state_47504[(15)]);
var inst_47382 = (state_47504[(17)]);
var inst_47392 = cljs.core._nth.call(null,inst_47382,inst_47384);
var inst_47393 = cljs.core.nth.call(null,inst_47392,(0),null);
var inst_47394 = cljs.core.nth.call(null,inst_47392,(1),null);
var state_47504__$1 = (function (){var statearr_47576 = state_47504;
(statearr_47576[(26)] = inst_47393);

return statearr_47576;
})();
if(cljs.core.truth_(inst_47394)){
var statearr_47577_47640 = state_47504__$1;
(statearr_47577_47640[(1)] = (13));

} else {
var statearr_47578_47641 = state_47504__$1;
(statearr_47578_47641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (18))){
var inst_47429 = (state_47504[(2)]);
var state_47504__$1 = state_47504;
var statearr_47579_47642 = state_47504__$1;
(statearr_47579_47642[(2)] = inst_47429);

(statearr_47579_47642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (42))){
var state_47504__$1 = state_47504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47504__$1,(45),dchan);
} else {
if((state_val_47505 === (37))){
var inst_47372 = (state_47504[(9)]);
var inst_47463 = (state_47504[(25)]);
var inst_47472 = (state_47504[(23)]);
var inst_47472__$1 = cljs.core.first.call(null,inst_47463);
var inst_47473 = cljs.core.async.put_BANG_.call(null,inst_47472__$1,inst_47372,done);
var state_47504__$1 = (function (){var statearr_47580 = state_47504;
(statearr_47580[(23)] = inst_47472__$1);

return statearr_47580;
})();
if(cljs.core.truth_(inst_47473)){
var statearr_47581_47643 = state_47504__$1;
(statearr_47581_47643[(1)] = (39));

} else {
var statearr_47582_47644 = state_47504__$1;
(statearr_47582_47644[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47505 === (8))){
var inst_47383 = (state_47504[(14)]);
var inst_47384 = (state_47504[(15)]);
var inst_47386 = (inst_47384 < inst_47383);
var inst_47387 = inst_47386;
var state_47504__$1 = state_47504;
if(cljs.core.truth_(inst_47387)){
var statearr_47583_47645 = state_47504__$1;
(statearr_47583_47645[(1)] = (10));

} else {
var statearr_47584_47646 = state_47504__$1;
(statearr_47584_47646[(1)] = (11));

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
});})(c__46239__auto___47592,cs,m,dchan,dctr,done))
;
return ((function (switch__46127__auto__,c__46239__auto___47592,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46128__auto__ = null;
var cljs$core$async$mult_$_state_machine__46128__auto____0 = (function (){
var statearr_47588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47588[(0)] = cljs$core$async$mult_$_state_machine__46128__auto__);

(statearr_47588[(1)] = (1));

return statearr_47588;
});
var cljs$core$async$mult_$_state_machine__46128__auto____1 = (function (state_47504){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_47504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e47589){if((e47589 instanceof Object)){
var ex__46131__auto__ = e47589;
var statearr_47590_47647 = state_47504;
(statearr_47590_47647[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47648 = state_47504;
state_47504 = G__47648;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46128__auto__ = function(state_47504){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46128__auto____1.call(this,state_47504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46128__auto____0;
cljs$core$async$mult_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46128__auto____1;
return cljs$core$async$mult_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___47592,cs,m,dchan,dctr,done))
})();
var state__46241__auto__ = (function (){var statearr_47591 = f__46240__auto__.call(null);
(statearr_47591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___47592);

return statearr_47591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___47592,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args47649 = [];
var len__45008__auto___47652 = arguments.length;
var i__45009__auto___47653 = (0);
while(true){
if((i__45009__auto___47653 < len__45008__auto___47652)){
args47649.push((arguments[i__45009__auto___47653]));

var G__47654 = (i__45009__auto___47653 + (1));
i__45009__auto___47653 = G__47654;
continue;
} else {
}
break;
}

var G__47651 = args47649.length;
switch (G__47651) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47649.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m,ch);
} else {
var m__44597__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m,ch);
} else {
var m__44597__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m);
} else {
var m__44597__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m,state_map);
} else {
var m__44597__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44596__auto__ = (((m == null))?null:m);
var m__44597__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,m,mode);
} else {
var m__44597__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45015__auto__ = [];
var len__45008__auto___47666 = arguments.length;
var i__45009__auto___47667 = (0);
while(true){
if((i__45009__auto___47667 < len__45008__auto___47666)){
args__45015__auto__.push((arguments[i__45009__auto___47667]));

var G__47668 = (i__45009__auto___47667 + (1));
i__45009__auto___47667 = G__47668;
continue;
} else {
}
break;
}

var argseq__45016__auto__ = ((((3) < args__45015__auto__.length))?(new cljs.core.IndexedSeq(args__45015__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45016__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47660){
var map__47661 = p__47660;
var map__47661__$1 = ((((!((map__47661 == null)))?((((map__47661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47661):map__47661);
var opts = map__47661__$1;
var statearr_47663_47669 = state;
(statearr_47663_47669[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__47661,map__47661__$1,opts){
return (function (val){
var statearr_47664_47670 = state;
(statearr_47664_47670[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__47661,map__47661__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_47665_47671 = state;
(statearr_47665_47671[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47656){
var G__47657 = cljs.core.first.call(null,seq47656);
var seq47656__$1 = cljs.core.next.call(null,seq47656);
var G__47658 = cljs.core.first.call(null,seq47656__$1);
var seq47656__$2 = cljs.core.next.call(null,seq47656__$1);
var G__47659 = cljs.core.first.call(null,seq47656__$2);
var seq47656__$3 = cljs.core.next.call(null,seq47656__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47657,G__47658,G__47659,seq47656__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47837 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47838){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47838 = meta47838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47839,meta47838__$1){
var self__ = this;
var _47839__$1 = this;
return (new cljs.core.async.t_cljs$core$async47837(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47838__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47839){
var self__ = this;
var _47839__$1 = this;
return self__.meta47838;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47838","meta47838",206514666,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47837";

cljs.core.async.t_cljs$core$async47837.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async47837");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async47837 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47837(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47838){
return (new cljs.core.async.t_cljs$core$async47837(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47838));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47837(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46239__auto___48002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47939){
var state_val_47940 = (state_47939[(1)]);
if((state_val_47940 === (7))){
var inst_47855 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47941_48003 = state_47939__$1;
(statearr_47941_48003[(2)] = inst_47855);

(statearr_47941_48003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (20))){
var inst_47867 = (state_47939[(7)]);
var state_47939__$1 = state_47939;
var statearr_47942_48004 = state_47939__$1;
(statearr_47942_48004[(2)] = inst_47867);

(statearr_47942_48004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (27))){
var state_47939__$1 = state_47939;
var statearr_47943_48005 = state_47939__$1;
(statearr_47943_48005[(2)] = null);

(statearr_47943_48005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (1))){
var inst_47843 = (state_47939[(8)]);
var inst_47843__$1 = calc_state.call(null);
var inst_47845 = (inst_47843__$1 == null);
var inst_47846 = cljs.core.not.call(null,inst_47845);
var state_47939__$1 = (function (){var statearr_47944 = state_47939;
(statearr_47944[(8)] = inst_47843__$1);

return statearr_47944;
})();
if(inst_47846){
var statearr_47945_48006 = state_47939__$1;
(statearr_47945_48006[(1)] = (2));

} else {
var statearr_47946_48007 = state_47939__$1;
(statearr_47946_48007[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (24))){
var inst_47890 = (state_47939[(9)]);
var inst_47899 = (state_47939[(10)]);
var inst_47913 = (state_47939[(11)]);
var inst_47913__$1 = inst_47890.call(null,inst_47899);
var state_47939__$1 = (function (){var statearr_47947 = state_47939;
(statearr_47947[(11)] = inst_47913__$1);

return statearr_47947;
})();
if(cljs.core.truth_(inst_47913__$1)){
var statearr_47948_48008 = state_47939__$1;
(statearr_47948_48008[(1)] = (29));

} else {
var statearr_47949_48009 = state_47939__$1;
(statearr_47949_48009[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (4))){
var inst_47858 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47858)){
var statearr_47950_48010 = state_47939__$1;
(statearr_47950_48010[(1)] = (8));

} else {
var statearr_47951_48011 = state_47939__$1;
(statearr_47951_48011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (15))){
var inst_47884 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47884)){
var statearr_47952_48012 = state_47939__$1;
(statearr_47952_48012[(1)] = (19));

} else {
var statearr_47953_48013 = state_47939__$1;
(statearr_47953_48013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (21))){
var inst_47889 = (state_47939[(12)]);
var inst_47889__$1 = (state_47939[(2)]);
var inst_47890 = cljs.core.get.call(null,inst_47889__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47891 = cljs.core.get.call(null,inst_47889__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47892 = cljs.core.get.call(null,inst_47889__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47939__$1 = (function (){var statearr_47954 = state_47939;
(statearr_47954[(9)] = inst_47890);

(statearr_47954[(12)] = inst_47889__$1);

(statearr_47954[(13)] = inst_47891);

return statearr_47954;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47939__$1,(22),inst_47892);
} else {
if((state_val_47940 === (31))){
var inst_47921 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47921)){
var statearr_47955_48014 = state_47939__$1;
(statearr_47955_48014[(1)] = (32));

} else {
var statearr_47956_48015 = state_47939__$1;
(statearr_47956_48015[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (32))){
var inst_47898 = (state_47939[(14)]);
var state_47939__$1 = state_47939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47939__$1,(35),out,inst_47898);
} else {
if((state_val_47940 === (33))){
var inst_47889 = (state_47939[(12)]);
var inst_47867 = inst_47889;
var state_47939__$1 = (function (){var statearr_47957 = state_47939;
(statearr_47957[(7)] = inst_47867);

return statearr_47957;
})();
var statearr_47958_48016 = state_47939__$1;
(statearr_47958_48016[(2)] = null);

(statearr_47958_48016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (13))){
var inst_47867 = (state_47939[(7)]);
var inst_47874 = inst_47867.cljs$lang$protocol_mask$partition0$;
var inst_47875 = (inst_47874 & (64));
var inst_47876 = inst_47867.cljs$core$ISeq$;
var inst_47877 = (inst_47875) || (inst_47876);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47877)){
var statearr_47959_48017 = state_47939__$1;
(statearr_47959_48017[(1)] = (16));

} else {
var statearr_47960_48018 = state_47939__$1;
(statearr_47960_48018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (22))){
var inst_47899 = (state_47939[(10)]);
var inst_47898 = (state_47939[(14)]);
var inst_47897 = (state_47939[(2)]);
var inst_47898__$1 = cljs.core.nth.call(null,inst_47897,(0),null);
var inst_47899__$1 = cljs.core.nth.call(null,inst_47897,(1),null);
var inst_47900 = (inst_47898__$1 == null);
var inst_47901 = cljs.core._EQ_.call(null,inst_47899__$1,change);
var inst_47902 = (inst_47900) || (inst_47901);
var state_47939__$1 = (function (){var statearr_47961 = state_47939;
(statearr_47961[(10)] = inst_47899__$1);

(statearr_47961[(14)] = inst_47898__$1);

return statearr_47961;
})();
if(cljs.core.truth_(inst_47902)){
var statearr_47962_48019 = state_47939__$1;
(statearr_47962_48019[(1)] = (23));

} else {
var statearr_47963_48020 = state_47939__$1;
(statearr_47963_48020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (36))){
var inst_47889 = (state_47939[(12)]);
var inst_47867 = inst_47889;
var state_47939__$1 = (function (){var statearr_47964 = state_47939;
(statearr_47964[(7)] = inst_47867);

return statearr_47964;
})();
var statearr_47965_48021 = state_47939__$1;
(statearr_47965_48021[(2)] = null);

(statearr_47965_48021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (29))){
var inst_47913 = (state_47939[(11)]);
var state_47939__$1 = state_47939;
var statearr_47966_48022 = state_47939__$1;
(statearr_47966_48022[(2)] = inst_47913);

(statearr_47966_48022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (6))){
var state_47939__$1 = state_47939;
var statearr_47967_48023 = state_47939__$1;
(statearr_47967_48023[(2)] = false);

(statearr_47967_48023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (28))){
var inst_47909 = (state_47939[(2)]);
var inst_47910 = calc_state.call(null);
var inst_47867 = inst_47910;
var state_47939__$1 = (function (){var statearr_47968 = state_47939;
(statearr_47968[(15)] = inst_47909);

(statearr_47968[(7)] = inst_47867);

return statearr_47968;
})();
var statearr_47969_48024 = state_47939__$1;
(statearr_47969_48024[(2)] = null);

(statearr_47969_48024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (25))){
var inst_47935 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47970_48025 = state_47939__$1;
(statearr_47970_48025[(2)] = inst_47935);

(statearr_47970_48025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (34))){
var inst_47933 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47971_48026 = state_47939__$1;
(statearr_47971_48026[(2)] = inst_47933);

(statearr_47971_48026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (17))){
var state_47939__$1 = state_47939;
var statearr_47972_48027 = state_47939__$1;
(statearr_47972_48027[(2)] = false);

(statearr_47972_48027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (3))){
var state_47939__$1 = state_47939;
var statearr_47973_48028 = state_47939__$1;
(statearr_47973_48028[(2)] = false);

(statearr_47973_48028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (12))){
var inst_47937 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47939__$1,inst_47937);
} else {
if((state_val_47940 === (2))){
var inst_47843 = (state_47939[(8)]);
var inst_47848 = inst_47843.cljs$lang$protocol_mask$partition0$;
var inst_47849 = (inst_47848 & (64));
var inst_47850 = inst_47843.cljs$core$ISeq$;
var inst_47851 = (inst_47849) || (inst_47850);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47851)){
var statearr_47974_48029 = state_47939__$1;
(statearr_47974_48029[(1)] = (5));

} else {
var statearr_47975_48030 = state_47939__$1;
(statearr_47975_48030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (23))){
var inst_47898 = (state_47939[(14)]);
var inst_47904 = (inst_47898 == null);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47904)){
var statearr_47976_48031 = state_47939__$1;
(statearr_47976_48031[(1)] = (26));

} else {
var statearr_47977_48032 = state_47939__$1;
(statearr_47977_48032[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (35))){
var inst_47924 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
if(cljs.core.truth_(inst_47924)){
var statearr_47978_48033 = state_47939__$1;
(statearr_47978_48033[(1)] = (36));

} else {
var statearr_47979_48034 = state_47939__$1;
(statearr_47979_48034[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (19))){
var inst_47867 = (state_47939[(7)]);
var inst_47886 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47867);
var state_47939__$1 = state_47939;
var statearr_47980_48035 = state_47939__$1;
(statearr_47980_48035[(2)] = inst_47886);

(statearr_47980_48035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (11))){
var inst_47867 = (state_47939[(7)]);
var inst_47871 = (inst_47867 == null);
var inst_47872 = cljs.core.not.call(null,inst_47871);
var state_47939__$1 = state_47939;
if(inst_47872){
var statearr_47981_48036 = state_47939__$1;
(statearr_47981_48036[(1)] = (13));

} else {
var statearr_47982_48037 = state_47939__$1;
(statearr_47982_48037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (9))){
var inst_47843 = (state_47939[(8)]);
var state_47939__$1 = state_47939;
var statearr_47983_48038 = state_47939__$1;
(statearr_47983_48038[(2)] = inst_47843);

(statearr_47983_48038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (5))){
var state_47939__$1 = state_47939;
var statearr_47984_48039 = state_47939__$1;
(statearr_47984_48039[(2)] = true);

(statearr_47984_48039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (14))){
var state_47939__$1 = state_47939;
var statearr_47985_48040 = state_47939__$1;
(statearr_47985_48040[(2)] = false);

(statearr_47985_48040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (26))){
var inst_47899 = (state_47939[(10)]);
var inst_47906 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_47899);
var state_47939__$1 = state_47939;
var statearr_47986_48041 = state_47939__$1;
(statearr_47986_48041[(2)] = inst_47906);

(statearr_47986_48041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (16))){
var state_47939__$1 = state_47939;
var statearr_47987_48042 = state_47939__$1;
(statearr_47987_48042[(2)] = true);

(statearr_47987_48042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (38))){
var inst_47929 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47988_48043 = state_47939__$1;
(statearr_47988_48043[(2)] = inst_47929);

(statearr_47988_48043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (30))){
var inst_47890 = (state_47939[(9)]);
var inst_47899 = (state_47939[(10)]);
var inst_47891 = (state_47939[(13)]);
var inst_47916 = cljs.core.empty_QMARK_.call(null,inst_47890);
var inst_47917 = inst_47891.call(null,inst_47899);
var inst_47918 = cljs.core.not.call(null,inst_47917);
var inst_47919 = (inst_47916) && (inst_47918);
var state_47939__$1 = state_47939;
var statearr_47989_48044 = state_47939__$1;
(statearr_47989_48044[(2)] = inst_47919);

(statearr_47989_48044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (10))){
var inst_47843 = (state_47939[(8)]);
var inst_47863 = (state_47939[(2)]);
var inst_47864 = cljs.core.get.call(null,inst_47863,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47865 = cljs.core.get.call(null,inst_47863,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47866 = cljs.core.get.call(null,inst_47863,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47867 = inst_47843;
var state_47939__$1 = (function (){var statearr_47990 = state_47939;
(statearr_47990[(16)] = inst_47866);

(statearr_47990[(7)] = inst_47867);

(statearr_47990[(17)] = inst_47864);

(statearr_47990[(18)] = inst_47865);

return statearr_47990;
})();
var statearr_47991_48045 = state_47939__$1;
(statearr_47991_48045[(2)] = null);

(statearr_47991_48045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (18))){
var inst_47881 = (state_47939[(2)]);
var state_47939__$1 = state_47939;
var statearr_47992_48046 = state_47939__$1;
(statearr_47992_48046[(2)] = inst_47881);

(statearr_47992_48046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (37))){
var state_47939__$1 = state_47939;
var statearr_47993_48047 = state_47939__$1;
(statearr_47993_48047[(2)] = null);

(statearr_47993_48047[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47940 === (8))){
var inst_47843 = (state_47939[(8)]);
var inst_47860 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47843);
var state_47939__$1 = state_47939;
var statearr_47994_48048 = state_47939__$1;
(statearr_47994_48048[(2)] = inst_47860);

(statearr_47994_48048[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__46239__auto___48002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46127__auto__,c__46239__auto___48002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46128__auto__ = null;
var cljs$core$async$mix_$_state_machine__46128__auto____0 = (function (){
var statearr_47998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47998[(0)] = cljs$core$async$mix_$_state_machine__46128__auto__);

(statearr_47998[(1)] = (1));

return statearr_47998;
});
var cljs$core$async$mix_$_state_machine__46128__auto____1 = (function (state_47939){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_47939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e47999){if((e47999 instanceof Object)){
var ex__46131__auto__ = e47999;
var statearr_48000_48049 = state_47939;
(statearr_48000_48049[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48050 = state_47939;
state_47939 = G__48050;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46128__auto__ = function(state_47939){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46128__auto____1.call(this,state_47939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46128__auto____0;
cljs$core$async$mix_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46128__auto____1;
return cljs$core$async$mix_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46241__auto__ = (function (){var statearr_48001 = f__46240__auto__.call(null);
(statearr_48001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48002);

return statearr_48001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44596__auto__ = (((p == null))?null:p);
var m__44597__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44597__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44596__auto__ = (((p == null))?null:p);
var m__44597__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,p,v,ch);
} else {
var m__44597__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48051 = [];
var len__45008__auto___48054 = arguments.length;
var i__45009__auto___48055 = (0);
while(true){
if((i__45009__auto___48055 < len__45008__auto___48054)){
args48051.push((arguments[i__45009__auto___48055]));

var G__48056 = (i__45009__auto___48055 + (1));
i__45009__auto___48055 = G__48056;
continue;
} else {
}
break;
}

var G__48053 = args48051.length;
switch (G__48053) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48051.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44596__auto__ = (((p == null))?null:p);
var m__44597__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,p);
} else {
var m__44597__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44596__auto__ = (((p == null))?null:p);
var m__44597__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44596__auto__)]);
if(!((m__44597__auto__ == null))){
return m__44597__auto__.call(null,p,v);
} else {
var m__44597__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44597__auto____$1 == null))){
return m__44597__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args48059 = [];
var len__45008__auto___48184 = arguments.length;
var i__45009__auto___48185 = (0);
while(true){
if((i__45009__auto___48185 < len__45008__auto___48184)){
args48059.push((arguments[i__45009__auto___48185]));

var G__48186 = (i__45009__auto___48185 + (1));
i__45009__auto___48185 = G__48186;
continue;
} else {
}
break;
}

var G__48061 = args48059.length;
switch (G__48061) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48059.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__43933__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__43933__auto__,mults){
return (function (p1__48058_SHARP_){
if(cljs.core.truth_(p1__48058_SHARP_.call(null,topic))){
return p1__48058_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48058_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__43933__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48062 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48063){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48063 = meta48063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48064,meta48063__$1){
var self__ = this;
var _48064__$1 = this;
return (new cljs.core.async.t_cljs$core$async48062(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48063__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48064){
var self__ = this;
var _48064__$1 = this;
return self__.meta48063;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48063","meta48063",-781974657,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48062";

cljs.core.async.t_cljs$core$async48062.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async48062");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48062 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48063){
return (new cljs.core.async.t_cljs$core$async48062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48063));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48062(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46239__auto___48188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48188,mults,ensure_mult,p){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48188,mults,ensure_mult,p){
return (function (state_48136){
var state_val_48137 = (state_48136[(1)]);
if((state_val_48137 === (7))){
var inst_48132 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
var statearr_48138_48189 = state_48136__$1;
(statearr_48138_48189[(2)] = inst_48132);

(statearr_48138_48189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (20))){
var state_48136__$1 = state_48136;
var statearr_48139_48190 = state_48136__$1;
(statearr_48139_48190[(2)] = null);

(statearr_48139_48190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (1))){
var state_48136__$1 = state_48136;
var statearr_48140_48191 = state_48136__$1;
(statearr_48140_48191[(2)] = null);

(statearr_48140_48191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (24))){
var inst_48115 = (state_48136[(7)]);
var inst_48124 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48115);
var state_48136__$1 = state_48136;
var statearr_48141_48192 = state_48136__$1;
(statearr_48141_48192[(2)] = inst_48124);

(statearr_48141_48192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (4))){
var inst_48067 = (state_48136[(8)]);
var inst_48067__$1 = (state_48136[(2)]);
var inst_48068 = (inst_48067__$1 == null);
var state_48136__$1 = (function (){var statearr_48142 = state_48136;
(statearr_48142[(8)] = inst_48067__$1);

return statearr_48142;
})();
if(cljs.core.truth_(inst_48068)){
var statearr_48143_48193 = state_48136__$1;
(statearr_48143_48193[(1)] = (5));

} else {
var statearr_48144_48194 = state_48136__$1;
(statearr_48144_48194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (15))){
var inst_48109 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
var statearr_48145_48195 = state_48136__$1;
(statearr_48145_48195[(2)] = inst_48109);

(statearr_48145_48195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (21))){
var inst_48129 = (state_48136[(2)]);
var state_48136__$1 = (function (){var statearr_48146 = state_48136;
(statearr_48146[(9)] = inst_48129);

return statearr_48146;
})();
var statearr_48147_48196 = state_48136__$1;
(statearr_48147_48196[(2)] = null);

(statearr_48147_48196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (13))){
var inst_48091 = (state_48136[(10)]);
var inst_48093 = cljs.core.chunked_seq_QMARK_.call(null,inst_48091);
var state_48136__$1 = state_48136;
if(inst_48093){
var statearr_48148_48197 = state_48136__$1;
(statearr_48148_48197[(1)] = (16));

} else {
var statearr_48149_48198 = state_48136__$1;
(statearr_48149_48198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (22))){
var inst_48121 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
if(cljs.core.truth_(inst_48121)){
var statearr_48150_48199 = state_48136__$1;
(statearr_48150_48199[(1)] = (23));

} else {
var statearr_48151_48200 = state_48136__$1;
(statearr_48151_48200[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (6))){
var inst_48067 = (state_48136[(8)]);
var inst_48117 = (state_48136[(11)]);
var inst_48115 = (state_48136[(7)]);
var inst_48115__$1 = topic_fn.call(null,inst_48067);
var inst_48116 = cljs.core.deref.call(null,mults);
var inst_48117__$1 = cljs.core.get.call(null,inst_48116,inst_48115__$1);
var state_48136__$1 = (function (){var statearr_48152 = state_48136;
(statearr_48152[(11)] = inst_48117__$1);

(statearr_48152[(7)] = inst_48115__$1);

return statearr_48152;
})();
if(cljs.core.truth_(inst_48117__$1)){
var statearr_48153_48201 = state_48136__$1;
(statearr_48153_48201[(1)] = (19));

} else {
var statearr_48154_48202 = state_48136__$1;
(statearr_48154_48202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (25))){
var inst_48126 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
var statearr_48155_48203 = state_48136__$1;
(statearr_48155_48203[(2)] = inst_48126);

(statearr_48155_48203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (17))){
var inst_48091 = (state_48136[(10)]);
var inst_48100 = cljs.core.first.call(null,inst_48091);
var inst_48101 = cljs.core.async.muxch_STAR_.call(null,inst_48100);
var inst_48102 = cljs.core.async.close_BANG_.call(null,inst_48101);
var inst_48103 = cljs.core.next.call(null,inst_48091);
var inst_48077 = inst_48103;
var inst_48078 = null;
var inst_48079 = (0);
var inst_48080 = (0);
var state_48136__$1 = (function (){var statearr_48156 = state_48136;
(statearr_48156[(12)] = inst_48078);

(statearr_48156[(13)] = inst_48080);

(statearr_48156[(14)] = inst_48077);

(statearr_48156[(15)] = inst_48079);

(statearr_48156[(16)] = inst_48102);

return statearr_48156;
})();
var statearr_48157_48204 = state_48136__$1;
(statearr_48157_48204[(2)] = null);

(statearr_48157_48204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (3))){
var inst_48134 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48136__$1,inst_48134);
} else {
if((state_val_48137 === (12))){
var inst_48111 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
var statearr_48158_48205 = state_48136__$1;
(statearr_48158_48205[(2)] = inst_48111);

(statearr_48158_48205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (2))){
var state_48136__$1 = state_48136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48136__$1,(4),ch);
} else {
if((state_val_48137 === (23))){
var state_48136__$1 = state_48136;
var statearr_48159_48206 = state_48136__$1;
(statearr_48159_48206[(2)] = null);

(statearr_48159_48206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (19))){
var inst_48067 = (state_48136[(8)]);
var inst_48117 = (state_48136[(11)]);
var inst_48119 = cljs.core.async.muxch_STAR_.call(null,inst_48117);
var state_48136__$1 = state_48136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48136__$1,(22),inst_48119,inst_48067);
} else {
if((state_val_48137 === (11))){
var inst_48077 = (state_48136[(14)]);
var inst_48091 = (state_48136[(10)]);
var inst_48091__$1 = cljs.core.seq.call(null,inst_48077);
var state_48136__$1 = (function (){var statearr_48160 = state_48136;
(statearr_48160[(10)] = inst_48091__$1);

return statearr_48160;
})();
if(inst_48091__$1){
var statearr_48161_48207 = state_48136__$1;
(statearr_48161_48207[(1)] = (13));

} else {
var statearr_48162_48208 = state_48136__$1;
(statearr_48162_48208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (9))){
var inst_48113 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
var statearr_48163_48209 = state_48136__$1;
(statearr_48163_48209[(2)] = inst_48113);

(statearr_48163_48209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (5))){
var inst_48074 = cljs.core.deref.call(null,mults);
var inst_48075 = cljs.core.vals.call(null,inst_48074);
var inst_48076 = cljs.core.seq.call(null,inst_48075);
var inst_48077 = inst_48076;
var inst_48078 = null;
var inst_48079 = (0);
var inst_48080 = (0);
var state_48136__$1 = (function (){var statearr_48164 = state_48136;
(statearr_48164[(12)] = inst_48078);

(statearr_48164[(13)] = inst_48080);

(statearr_48164[(14)] = inst_48077);

(statearr_48164[(15)] = inst_48079);

return statearr_48164;
})();
var statearr_48165_48210 = state_48136__$1;
(statearr_48165_48210[(2)] = null);

(statearr_48165_48210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (14))){
var state_48136__$1 = state_48136;
var statearr_48169_48211 = state_48136__$1;
(statearr_48169_48211[(2)] = null);

(statearr_48169_48211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (16))){
var inst_48091 = (state_48136[(10)]);
var inst_48095 = cljs.core.chunk_first.call(null,inst_48091);
var inst_48096 = cljs.core.chunk_rest.call(null,inst_48091);
var inst_48097 = cljs.core.count.call(null,inst_48095);
var inst_48077 = inst_48096;
var inst_48078 = inst_48095;
var inst_48079 = inst_48097;
var inst_48080 = (0);
var state_48136__$1 = (function (){var statearr_48170 = state_48136;
(statearr_48170[(12)] = inst_48078);

(statearr_48170[(13)] = inst_48080);

(statearr_48170[(14)] = inst_48077);

(statearr_48170[(15)] = inst_48079);

return statearr_48170;
})();
var statearr_48171_48212 = state_48136__$1;
(statearr_48171_48212[(2)] = null);

(statearr_48171_48212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (10))){
var inst_48078 = (state_48136[(12)]);
var inst_48080 = (state_48136[(13)]);
var inst_48077 = (state_48136[(14)]);
var inst_48079 = (state_48136[(15)]);
var inst_48085 = cljs.core._nth.call(null,inst_48078,inst_48080);
var inst_48086 = cljs.core.async.muxch_STAR_.call(null,inst_48085);
var inst_48087 = cljs.core.async.close_BANG_.call(null,inst_48086);
var inst_48088 = (inst_48080 + (1));
var tmp48166 = inst_48078;
var tmp48167 = inst_48077;
var tmp48168 = inst_48079;
var inst_48077__$1 = tmp48167;
var inst_48078__$1 = tmp48166;
var inst_48079__$1 = tmp48168;
var inst_48080__$1 = inst_48088;
var state_48136__$1 = (function (){var statearr_48172 = state_48136;
(statearr_48172[(12)] = inst_48078__$1);

(statearr_48172[(17)] = inst_48087);

(statearr_48172[(13)] = inst_48080__$1);

(statearr_48172[(14)] = inst_48077__$1);

(statearr_48172[(15)] = inst_48079__$1);

return statearr_48172;
})();
var statearr_48173_48213 = state_48136__$1;
(statearr_48173_48213[(2)] = null);

(statearr_48173_48213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (18))){
var inst_48106 = (state_48136[(2)]);
var state_48136__$1 = state_48136;
var statearr_48174_48214 = state_48136__$1;
(statearr_48174_48214[(2)] = inst_48106);

(statearr_48174_48214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48137 === (8))){
var inst_48080 = (state_48136[(13)]);
var inst_48079 = (state_48136[(15)]);
var inst_48082 = (inst_48080 < inst_48079);
var inst_48083 = inst_48082;
var state_48136__$1 = state_48136;
if(cljs.core.truth_(inst_48083)){
var statearr_48175_48215 = state_48136__$1;
(statearr_48175_48215[(1)] = (10));

} else {
var statearr_48176_48216 = state_48136__$1;
(statearr_48176_48216[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__46239__auto___48188,mults,ensure_mult,p))
;
return ((function (switch__46127__auto__,c__46239__auto___48188,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_48180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48180[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_48180[(1)] = (1));

return statearr_48180;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_48136){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48181){if((e48181 instanceof Object)){
var ex__46131__auto__ = e48181;
var statearr_48182_48217 = state_48136;
(statearr_48182_48217[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48218 = state_48136;
state_48136 = G__48218;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_48136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_48136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48188,mults,ensure_mult,p))
})();
var state__46241__auto__ = (function (){var statearr_48183 = f__46240__auto__.call(null);
(statearr_48183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48188);

return statearr_48183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48188,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args48219 = [];
var len__45008__auto___48222 = arguments.length;
var i__45009__auto___48223 = (0);
while(true){
if((i__45009__auto___48223 < len__45008__auto___48222)){
args48219.push((arguments[i__45009__auto___48223]));

var G__48224 = (i__45009__auto___48223 + (1));
i__45009__auto___48223 = G__48224;
continue;
} else {
}
break;
}

var G__48221 = args48219.length;
switch (G__48221) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48219.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args48226 = [];
var len__45008__auto___48229 = arguments.length;
var i__45009__auto___48230 = (0);
while(true){
if((i__45009__auto___48230 < len__45008__auto___48229)){
args48226.push((arguments[i__45009__auto___48230]));

var G__48231 = (i__45009__auto___48230 + (1));
i__45009__auto___48230 = G__48231;
continue;
} else {
}
break;
}

var G__48228 = args48226.length;
switch (G__48228) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48226.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args48233 = [];
var len__45008__auto___48304 = arguments.length;
var i__45009__auto___48305 = (0);
while(true){
if((i__45009__auto___48305 < len__45008__auto___48304)){
args48233.push((arguments[i__45009__auto___48305]));

var G__48306 = (i__45009__auto___48305 + (1));
i__45009__auto___48305 = G__48306;
continue;
} else {
}
break;
}

var G__48235 = args48233.length;
switch (G__48235) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48233.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__46239__auto___48308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48274){
var state_val_48275 = (state_48274[(1)]);
if((state_val_48275 === (7))){
var state_48274__$1 = state_48274;
var statearr_48276_48309 = state_48274__$1;
(statearr_48276_48309[(2)] = null);

(statearr_48276_48309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (1))){
var state_48274__$1 = state_48274;
var statearr_48277_48310 = state_48274__$1;
(statearr_48277_48310[(2)] = null);

(statearr_48277_48310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (4))){
var inst_48238 = (state_48274[(7)]);
var inst_48240 = (inst_48238 < cnt);
var state_48274__$1 = state_48274;
if(cljs.core.truth_(inst_48240)){
var statearr_48278_48311 = state_48274__$1;
(statearr_48278_48311[(1)] = (6));

} else {
var statearr_48279_48312 = state_48274__$1;
(statearr_48279_48312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (15))){
var inst_48270 = (state_48274[(2)]);
var state_48274__$1 = state_48274;
var statearr_48280_48313 = state_48274__$1;
(statearr_48280_48313[(2)] = inst_48270);

(statearr_48280_48313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (13))){
var inst_48263 = cljs.core.async.close_BANG_.call(null,out);
var state_48274__$1 = state_48274;
var statearr_48281_48314 = state_48274__$1;
(statearr_48281_48314[(2)] = inst_48263);

(statearr_48281_48314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (6))){
var state_48274__$1 = state_48274;
var statearr_48282_48315 = state_48274__$1;
(statearr_48282_48315[(2)] = null);

(statearr_48282_48315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (3))){
var inst_48272 = (state_48274[(2)]);
var state_48274__$1 = state_48274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48274__$1,inst_48272);
} else {
if((state_val_48275 === (12))){
var inst_48260 = (state_48274[(8)]);
var inst_48260__$1 = (state_48274[(2)]);
var inst_48261 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48260__$1);
var state_48274__$1 = (function (){var statearr_48283 = state_48274;
(statearr_48283[(8)] = inst_48260__$1);

return statearr_48283;
})();
if(cljs.core.truth_(inst_48261)){
var statearr_48284_48316 = state_48274__$1;
(statearr_48284_48316[(1)] = (13));

} else {
var statearr_48285_48317 = state_48274__$1;
(statearr_48285_48317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (2))){
var inst_48237 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48238 = (0);
var state_48274__$1 = (function (){var statearr_48286 = state_48274;
(statearr_48286[(7)] = inst_48238);

(statearr_48286[(9)] = inst_48237);

return statearr_48286;
})();
var statearr_48287_48318 = state_48274__$1;
(statearr_48287_48318[(2)] = null);

(statearr_48287_48318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (11))){
var inst_48238 = (state_48274[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48274,(10),Object,null,(9));
var inst_48247 = chs__$1.call(null,inst_48238);
var inst_48248 = done.call(null,inst_48238);
var inst_48249 = cljs.core.async.take_BANG_.call(null,inst_48247,inst_48248);
var state_48274__$1 = state_48274;
var statearr_48288_48319 = state_48274__$1;
(statearr_48288_48319[(2)] = inst_48249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (9))){
var inst_48238 = (state_48274[(7)]);
var inst_48251 = (state_48274[(2)]);
var inst_48252 = (inst_48238 + (1));
var inst_48238__$1 = inst_48252;
var state_48274__$1 = (function (){var statearr_48289 = state_48274;
(statearr_48289[(10)] = inst_48251);

(statearr_48289[(7)] = inst_48238__$1);

return statearr_48289;
})();
var statearr_48290_48320 = state_48274__$1;
(statearr_48290_48320[(2)] = null);

(statearr_48290_48320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (5))){
var inst_48258 = (state_48274[(2)]);
var state_48274__$1 = (function (){var statearr_48291 = state_48274;
(statearr_48291[(11)] = inst_48258);

return statearr_48291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48274__$1,(12),dchan);
} else {
if((state_val_48275 === (14))){
var inst_48260 = (state_48274[(8)]);
var inst_48265 = cljs.core.apply.call(null,f,inst_48260);
var state_48274__$1 = state_48274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48274__$1,(16),out,inst_48265);
} else {
if((state_val_48275 === (16))){
var inst_48267 = (state_48274[(2)]);
var state_48274__$1 = (function (){var statearr_48292 = state_48274;
(statearr_48292[(12)] = inst_48267);

return statearr_48292;
})();
var statearr_48293_48321 = state_48274__$1;
(statearr_48293_48321[(2)] = null);

(statearr_48293_48321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (10))){
var inst_48242 = (state_48274[(2)]);
var inst_48243 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48274__$1 = (function (){var statearr_48294 = state_48274;
(statearr_48294[(13)] = inst_48242);

return statearr_48294;
})();
var statearr_48295_48322 = state_48274__$1;
(statearr_48295_48322[(2)] = inst_48243);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48275 === (8))){
var inst_48256 = (state_48274[(2)]);
var state_48274__$1 = state_48274;
var statearr_48296_48323 = state_48274__$1;
(statearr_48296_48323[(2)] = inst_48256);

(statearr_48296_48323[(1)] = (5));


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
});})(c__46239__auto___48308,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46127__auto__,c__46239__auto___48308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_48300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48300[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_48300[(1)] = (1));

return statearr_48300;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_48274){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48301){if((e48301 instanceof Object)){
var ex__46131__auto__ = e48301;
var statearr_48302_48324 = state_48274;
(statearr_48302_48324[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48325 = state_48274;
state_48274 = G__48325;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_48274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_48274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48308,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46241__auto__ = (function (){var statearr_48303 = f__46240__auto__.call(null);
(statearr_48303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48308);

return statearr_48303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48308,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args48327 = [];
var len__45008__auto___48385 = arguments.length;
var i__45009__auto___48386 = (0);
while(true){
if((i__45009__auto___48386 < len__45008__auto___48385)){
args48327.push((arguments[i__45009__auto___48386]));

var G__48387 = (i__45009__auto___48386 + (1));
i__45009__auto___48386 = G__48387;
continue;
} else {
}
break;
}

var G__48329 = args48327.length;
switch (G__48329) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48327.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46239__auto___48389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48389,out){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48389,out){
return (function (state_48361){
var state_val_48362 = (state_48361[(1)]);
if((state_val_48362 === (7))){
var inst_48341 = (state_48361[(7)]);
var inst_48340 = (state_48361[(8)]);
var inst_48340__$1 = (state_48361[(2)]);
var inst_48341__$1 = cljs.core.nth.call(null,inst_48340__$1,(0),null);
var inst_48342 = cljs.core.nth.call(null,inst_48340__$1,(1),null);
var inst_48343 = (inst_48341__$1 == null);
var state_48361__$1 = (function (){var statearr_48363 = state_48361;
(statearr_48363[(7)] = inst_48341__$1);

(statearr_48363[(8)] = inst_48340__$1);

(statearr_48363[(9)] = inst_48342);

return statearr_48363;
})();
if(cljs.core.truth_(inst_48343)){
var statearr_48364_48390 = state_48361__$1;
(statearr_48364_48390[(1)] = (8));

} else {
var statearr_48365_48391 = state_48361__$1;
(statearr_48365_48391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (1))){
var inst_48330 = cljs.core.vec.call(null,chs);
var inst_48331 = inst_48330;
var state_48361__$1 = (function (){var statearr_48366 = state_48361;
(statearr_48366[(10)] = inst_48331);

return statearr_48366;
})();
var statearr_48367_48392 = state_48361__$1;
(statearr_48367_48392[(2)] = null);

(statearr_48367_48392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (4))){
var inst_48331 = (state_48361[(10)]);
var state_48361__$1 = state_48361;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48361__$1,(7),inst_48331);
} else {
if((state_val_48362 === (6))){
var inst_48357 = (state_48361[(2)]);
var state_48361__$1 = state_48361;
var statearr_48368_48393 = state_48361__$1;
(statearr_48368_48393[(2)] = inst_48357);

(statearr_48368_48393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (3))){
var inst_48359 = (state_48361[(2)]);
var state_48361__$1 = state_48361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48361__$1,inst_48359);
} else {
if((state_val_48362 === (2))){
var inst_48331 = (state_48361[(10)]);
var inst_48333 = cljs.core.count.call(null,inst_48331);
var inst_48334 = (inst_48333 > (0));
var state_48361__$1 = state_48361;
if(cljs.core.truth_(inst_48334)){
var statearr_48370_48394 = state_48361__$1;
(statearr_48370_48394[(1)] = (4));

} else {
var statearr_48371_48395 = state_48361__$1;
(statearr_48371_48395[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (11))){
var inst_48331 = (state_48361[(10)]);
var inst_48350 = (state_48361[(2)]);
var tmp48369 = inst_48331;
var inst_48331__$1 = tmp48369;
var state_48361__$1 = (function (){var statearr_48372 = state_48361;
(statearr_48372[(10)] = inst_48331__$1);

(statearr_48372[(11)] = inst_48350);

return statearr_48372;
})();
var statearr_48373_48396 = state_48361__$1;
(statearr_48373_48396[(2)] = null);

(statearr_48373_48396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (9))){
var inst_48341 = (state_48361[(7)]);
var state_48361__$1 = state_48361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48361__$1,(11),out,inst_48341);
} else {
if((state_val_48362 === (5))){
var inst_48355 = cljs.core.async.close_BANG_.call(null,out);
var state_48361__$1 = state_48361;
var statearr_48374_48397 = state_48361__$1;
(statearr_48374_48397[(2)] = inst_48355);

(statearr_48374_48397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (10))){
var inst_48353 = (state_48361[(2)]);
var state_48361__$1 = state_48361;
var statearr_48375_48398 = state_48361__$1;
(statearr_48375_48398[(2)] = inst_48353);

(statearr_48375_48398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48362 === (8))){
var inst_48341 = (state_48361[(7)]);
var inst_48331 = (state_48361[(10)]);
var inst_48340 = (state_48361[(8)]);
var inst_48342 = (state_48361[(9)]);
var inst_48345 = (function (){var cs = inst_48331;
var vec__48336 = inst_48340;
var v = inst_48341;
var c = inst_48342;
return ((function (cs,vec__48336,v,c,inst_48341,inst_48331,inst_48340,inst_48342,state_val_48362,c__46239__auto___48389,out){
return (function (p1__48326_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48326_SHARP_);
});
;})(cs,vec__48336,v,c,inst_48341,inst_48331,inst_48340,inst_48342,state_val_48362,c__46239__auto___48389,out))
})();
var inst_48346 = cljs.core.filterv.call(null,inst_48345,inst_48331);
var inst_48331__$1 = inst_48346;
var state_48361__$1 = (function (){var statearr_48376 = state_48361;
(statearr_48376[(10)] = inst_48331__$1);

return statearr_48376;
})();
var statearr_48377_48399 = state_48361__$1;
(statearr_48377_48399[(2)] = null);

(statearr_48377_48399[(1)] = (2));


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
});})(c__46239__auto___48389,out))
;
return ((function (switch__46127__auto__,c__46239__auto___48389,out){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_48381 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48381[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_48381[(1)] = (1));

return statearr_48381;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_48361){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48382){if((e48382 instanceof Object)){
var ex__46131__auto__ = e48382;
var statearr_48383_48400 = state_48361;
(statearr_48383_48400[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48401 = state_48361;
state_48361 = G__48401;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_48361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_48361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48389,out))
})();
var state__46241__auto__ = (function (){var statearr_48384 = f__46240__auto__.call(null);
(statearr_48384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48389);

return statearr_48384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48389,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args48402 = [];
var len__45008__auto___48451 = arguments.length;
var i__45009__auto___48452 = (0);
while(true){
if((i__45009__auto___48452 < len__45008__auto___48451)){
args48402.push((arguments[i__45009__auto___48452]));

var G__48453 = (i__45009__auto___48452 + (1));
i__45009__auto___48452 = G__48453;
continue;
} else {
}
break;
}

var G__48404 = args48402.length;
switch (G__48404) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48402.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46239__auto___48455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48455,out){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48455,out){
return (function (state_48428){
var state_val_48429 = (state_48428[(1)]);
if((state_val_48429 === (7))){
var inst_48410 = (state_48428[(7)]);
var inst_48410__$1 = (state_48428[(2)]);
var inst_48411 = (inst_48410__$1 == null);
var inst_48412 = cljs.core.not.call(null,inst_48411);
var state_48428__$1 = (function (){var statearr_48430 = state_48428;
(statearr_48430[(7)] = inst_48410__$1);

return statearr_48430;
})();
if(inst_48412){
var statearr_48431_48456 = state_48428__$1;
(statearr_48431_48456[(1)] = (8));

} else {
var statearr_48432_48457 = state_48428__$1;
(statearr_48432_48457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (1))){
var inst_48405 = (0);
var state_48428__$1 = (function (){var statearr_48433 = state_48428;
(statearr_48433[(8)] = inst_48405);

return statearr_48433;
})();
var statearr_48434_48458 = state_48428__$1;
(statearr_48434_48458[(2)] = null);

(statearr_48434_48458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (4))){
var state_48428__$1 = state_48428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48428__$1,(7),ch);
} else {
if((state_val_48429 === (6))){
var inst_48423 = (state_48428[(2)]);
var state_48428__$1 = state_48428;
var statearr_48435_48459 = state_48428__$1;
(statearr_48435_48459[(2)] = inst_48423);

(statearr_48435_48459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (3))){
var inst_48425 = (state_48428[(2)]);
var inst_48426 = cljs.core.async.close_BANG_.call(null,out);
var state_48428__$1 = (function (){var statearr_48436 = state_48428;
(statearr_48436[(9)] = inst_48425);

return statearr_48436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48428__$1,inst_48426);
} else {
if((state_val_48429 === (2))){
var inst_48405 = (state_48428[(8)]);
var inst_48407 = (inst_48405 < n);
var state_48428__$1 = state_48428;
if(cljs.core.truth_(inst_48407)){
var statearr_48437_48460 = state_48428__$1;
(statearr_48437_48460[(1)] = (4));

} else {
var statearr_48438_48461 = state_48428__$1;
(statearr_48438_48461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (11))){
var inst_48405 = (state_48428[(8)]);
var inst_48415 = (state_48428[(2)]);
var inst_48416 = (inst_48405 + (1));
var inst_48405__$1 = inst_48416;
var state_48428__$1 = (function (){var statearr_48439 = state_48428;
(statearr_48439[(10)] = inst_48415);

(statearr_48439[(8)] = inst_48405__$1);

return statearr_48439;
})();
var statearr_48440_48462 = state_48428__$1;
(statearr_48440_48462[(2)] = null);

(statearr_48440_48462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (9))){
var state_48428__$1 = state_48428;
var statearr_48441_48463 = state_48428__$1;
(statearr_48441_48463[(2)] = null);

(statearr_48441_48463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (5))){
var state_48428__$1 = state_48428;
var statearr_48442_48464 = state_48428__$1;
(statearr_48442_48464[(2)] = null);

(statearr_48442_48464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (10))){
var inst_48420 = (state_48428[(2)]);
var state_48428__$1 = state_48428;
var statearr_48443_48465 = state_48428__$1;
(statearr_48443_48465[(2)] = inst_48420);

(statearr_48443_48465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48429 === (8))){
var inst_48410 = (state_48428[(7)]);
var state_48428__$1 = state_48428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48428__$1,(11),out,inst_48410);
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
});})(c__46239__auto___48455,out))
;
return ((function (switch__46127__auto__,c__46239__auto___48455,out){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_48447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48447[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_48447[(1)] = (1));

return statearr_48447;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_48428){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48448){if((e48448 instanceof Object)){
var ex__46131__auto__ = e48448;
var statearr_48449_48466 = state_48428;
(statearr_48449_48466[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48467 = state_48428;
state_48428 = G__48467;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_48428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_48428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48455,out))
})();
var state__46241__auto__ = (function (){var statearr_48450 = f__46240__auto__.call(null);
(statearr_48450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48455);

return statearr_48450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48455,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48475 = (function (map_LT_,f,ch,meta48476){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48476 = meta48476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48477,meta48476__$1){
var self__ = this;
var _48477__$1 = this;
return (new cljs.core.async.t_cljs$core$async48475(self__.map_LT_,self__.f,self__.ch,meta48476__$1));
});

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48477){
var self__ = this;
var _48477__$1 = this;
return self__.meta48476;
});

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48478 = (function (map_LT_,f,ch,meta48476,_,fn1,meta48479){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48476 = meta48476;
this._ = _;
this.fn1 = fn1;
this.meta48479 = meta48479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48480,meta48479__$1){
var self__ = this;
var _48480__$1 = this;
return (new cljs.core.async.t_cljs$core$async48478(self__.map_LT_,self__.f,self__.ch,self__.meta48476,self__._,self__.fn1,meta48479__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48480){
var self__ = this;
var _48480__$1 = this;
return self__.meta48479;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48478.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48468_SHARP_){
return f1.call(null,(((p1__48468_SHARP_ == null))?null:self__.f.call(null,p1__48468_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48478.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48476","meta48476",2111524291,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48475","cljs.core.async/t_cljs$core$async48475",-1718430639,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48479","meta48479",-909470780,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48478";

cljs.core.async.t_cljs$core$async48478.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async48478");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48478 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48478(map_LT___$1,f__$1,ch__$1,meta48476__$1,___$2,fn1__$1,meta48479){
return (new cljs.core.async.t_cljs$core$async48478(map_LT___$1,f__$1,ch__$1,meta48476__$1,___$2,fn1__$1,meta48479));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48478(self__.map_LT_,self__.f,self__.ch,self__.meta48476,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__43921__auto__ = ret;
if(cljs.core.truth_(and__43921__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__43921__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48476","meta48476",2111524291,null)], null);
});

cljs.core.async.t_cljs$core$async48475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48475";

cljs.core.async.t_cljs$core$async48475.cljs$lang$ctorPrWriter = (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async48475");
});

cljs.core.async.__GT_t_cljs$core$async48475 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48475(map_LT___$1,f__$1,ch__$1,meta48476){
return (new cljs.core.async.t_cljs$core$async48475(map_LT___$1,f__$1,ch__$1,meta48476));
});

}

return (new cljs.core.async.t_cljs$core$async48475(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48484 = (function (map_GT_,f,ch,meta48485){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta48485 = meta48485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48486,meta48485__$1){
var self__ = this;
var _48486__$1 = this;
return (new cljs.core.async.t_cljs$core$async48484(self__.map_GT_,self__.f,self__.ch,meta48485__$1));
});

cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48486){
var self__ = this;
var _48486__$1 = this;
return self__.meta48485;
});

cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48485","meta48485",961003048,null)], null);
});

cljs.core.async.t_cljs$core$async48484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48484";

cljs.core.async.t_cljs$core$async48484.cljs$lang$ctorPrWriter = (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async48484");
});

cljs.core.async.__GT_t_cljs$core$async48484 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48484(map_GT___$1,f__$1,ch__$1,meta48485){
return (new cljs.core.async.t_cljs$core$async48484(map_GT___$1,f__$1,ch__$1,meta48485));
});

}

return (new cljs.core.async.t_cljs$core$async48484(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48490 = (function (filter_GT_,p,ch,meta48491){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta48491 = meta48491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48492,meta48491__$1){
var self__ = this;
var _48492__$1 = this;
return (new cljs.core.async.t_cljs$core$async48490(self__.filter_GT_,self__.p,self__.ch,meta48491__$1));
});

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48492){
var self__ = this;
var _48492__$1 = this;
return self__.meta48491;
});

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48491","meta48491",-1398622968,null)], null);
});

cljs.core.async.t_cljs$core$async48490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48490";

cljs.core.async.t_cljs$core$async48490.cljs$lang$ctorPrWriter = (function (this__44539__auto__,writer__44540__auto__,opt__44541__auto__){
return cljs.core._write.call(null,writer__44540__auto__,"cljs.core.async/t_cljs$core$async48490");
});

cljs.core.async.__GT_t_cljs$core$async48490 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48490(filter_GT___$1,p__$1,ch__$1,meta48491){
return (new cljs.core.async.t_cljs$core$async48490(filter_GT___$1,p__$1,ch__$1,meta48491));
});

}

return (new cljs.core.async.t_cljs$core$async48490(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args48493 = [];
var len__45008__auto___48537 = arguments.length;
var i__45009__auto___48538 = (0);
while(true){
if((i__45009__auto___48538 < len__45008__auto___48537)){
args48493.push((arguments[i__45009__auto___48538]));

var G__48539 = (i__45009__auto___48538 + (1));
i__45009__auto___48538 = G__48539;
continue;
} else {
}
break;
}

var G__48495 = args48493.length;
switch (G__48495) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48493.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46239__auto___48541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48541,out){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48541,out){
return (function (state_48516){
var state_val_48517 = (state_48516[(1)]);
if((state_val_48517 === (7))){
var inst_48512 = (state_48516[(2)]);
var state_48516__$1 = state_48516;
var statearr_48518_48542 = state_48516__$1;
(statearr_48518_48542[(2)] = inst_48512);

(statearr_48518_48542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (1))){
var state_48516__$1 = state_48516;
var statearr_48519_48543 = state_48516__$1;
(statearr_48519_48543[(2)] = null);

(statearr_48519_48543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (4))){
var inst_48498 = (state_48516[(7)]);
var inst_48498__$1 = (state_48516[(2)]);
var inst_48499 = (inst_48498__$1 == null);
var state_48516__$1 = (function (){var statearr_48520 = state_48516;
(statearr_48520[(7)] = inst_48498__$1);

return statearr_48520;
})();
if(cljs.core.truth_(inst_48499)){
var statearr_48521_48544 = state_48516__$1;
(statearr_48521_48544[(1)] = (5));

} else {
var statearr_48522_48545 = state_48516__$1;
(statearr_48522_48545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (6))){
var inst_48498 = (state_48516[(7)]);
var inst_48503 = p.call(null,inst_48498);
var state_48516__$1 = state_48516;
if(cljs.core.truth_(inst_48503)){
var statearr_48523_48546 = state_48516__$1;
(statearr_48523_48546[(1)] = (8));

} else {
var statearr_48524_48547 = state_48516__$1;
(statearr_48524_48547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (3))){
var inst_48514 = (state_48516[(2)]);
var state_48516__$1 = state_48516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48516__$1,inst_48514);
} else {
if((state_val_48517 === (2))){
var state_48516__$1 = state_48516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48516__$1,(4),ch);
} else {
if((state_val_48517 === (11))){
var inst_48506 = (state_48516[(2)]);
var state_48516__$1 = state_48516;
var statearr_48525_48548 = state_48516__$1;
(statearr_48525_48548[(2)] = inst_48506);

(statearr_48525_48548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (9))){
var state_48516__$1 = state_48516;
var statearr_48526_48549 = state_48516__$1;
(statearr_48526_48549[(2)] = null);

(statearr_48526_48549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (5))){
var inst_48501 = cljs.core.async.close_BANG_.call(null,out);
var state_48516__$1 = state_48516;
var statearr_48527_48550 = state_48516__$1;
(statearr_48527_48550[(2)] = inst_48501);

(statearr_48527_48550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (10))){
var inst_48509 = (state_48516[(2)]);
var state_48516__$1 = (function (){var statearr_48528 = state_48516;
(statearr_48528[(8)] = inst_48509);

return statearr_48528;
})();
var statearr_48529_48551 = state_48516__$1;
(statearr_48529_48551[(2)] = null);

(statearr_48529_48551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48517 === (8))){
var inst_48498 = (state_48516[(7)]);
var state_48516__$1 = state_48516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48516__$1,(11),out,inst_48498);
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
});})(c__46239__auto___48541,out))
;
return ((function (switch__46127__auto__,c__46239__auto___48541,out){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_48533 = [null,null,null,null,null,null,null,null,null];
(statearr_48533[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_48533[(1)] = (1));

return statearr_48533;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_48516){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48534){if((e48534 instanceof Object)){
var ex__46131__auto__ = e48534;
var statearr_48535_48552 = state_48516;
(statearr_48535_48552[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48553 = state_48516;
state_48516 = G__48553;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_48516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_48516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48541,out))
})();
var state__46241__auto__ = (function (){var statearr_48536 = f__46240__auto__.call(null);
(statearr_48536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48541);

return statearr_48536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48541,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args48554 = [];
var len__45008__auto___48557 = arguments.length;
var i__45009__auto___48558 = (0);
while(true){
if((i__45009__auto___48558 < len__45008__auto___48557)){
args48554.push((arguments[i__45009__auto___48558]));

var G__48559 = (i__45009__auto___48558 + (1));
i__45009__auto___48558 = G__48559;
continue;
} else {
}
break;
}

var G__48556 = args48554.length;
switch (G__48556) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48554.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__){
return (function (state_48726){
var state_val_48727 = (state_48726[(1)]);
if((state_val_48727 === (7))){
var inst_48722 = (state_48726[(2)]);
var state_48726__$1 = state_48726;
var statearr_48728_48769 = state_48726__$1;
(statearr_48728_48769[(2)] = inst_48722);

(statearr_48728_48769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (20))){
var inst_48692 = (state_48726[(7)]);
var inst_48703 = (state_48726[(2)]);
var inst_48704 = cljs.core.next.call(null,inst_48692);
var inst_48678 = inst_48704;
var inst_48679 = null;
var inst_48680 = (0);
var inst_48681 = (0);
var state_48726__$1 = (function (){var statearr_48729 = state_48726;
(statearr_48729[(8)] = inst_48680);

(statearr_48729[(9)] = inst_48681);

(statearr_48729[(10)] = inst_48703);

(statearr_48729[(11)] = inst_48679);

(statearr_48729[(12)] = inst_48678);

return statearr_48729;
})();
var statearr_48730_48770 = state_48726__$1;
(statearr_48730_48770[(2)] = null);

(statearr_48730_48770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (1))){
var state_48726__$1 = state_48726;
var statearr_48731_48771 = state_48726__$1;
(statearr_48731_48771[(2)] = null);

(statearr_48731_48771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (4))){
var inst_48667 = (state_48726[(13)]);
var inst_48667__$1 = (state_48726[(2)]);
var inst_48668 = (inst_48667__$1 == null);
var state_48726__$1 = (function (){var statearr_48732 = state_48726;
(statearr_48732[(13)] = inst_48667__$1);

return statearr_48732;
})();
if(cljs.core.truth_(inst_48668)){
var statearr_48733_48772 = state_48726__$1;
(statearr_48733_48772[(1)] = (5));

} else {
var statearr_48734_48773 = state_48726__$1;
(statearr_48734_48773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (15))){
var state_48726__$1 = state_48726;
var statearr_48738_48774 = state_48726__$1;
(statearr_48738_48774[(2)] = null);

(statearr_48738_48774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (21))){
var state_48726__$1 = state_48726;
var statearr_48739_48775 = state_48726__$1;
(statearr_48739_48775[(2)] = null);

(statearr_48739_48775[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (13))){
var inst_48680 = (state_48726[(8)]);
var inst_48681 = (state_48726[(9)]);
var inst_48679 = (state_48726[(11)]);
var inst_48678 = (state_48726[(12)]);
var inst_48688 = (state_48726[(2)]);
var inst_48689 = (inst_48681 + (1));
var tmp48735 = inst_48680;
var tmp48736 = inst_48679;
var tmp48737 = inst_48678;
var inst_48678__$1 = tmp48737;
var inst_48679__$1 = tmp48736;
var inst_48680__$1 = tmp48735;
var inst_48681__$1 = inst_48689;
var state_48726__$1 = (function (){var statearr_48740 = state_48726;
(statearr_48740[(14)] = inst_48688);

(statearr_48740[(8)] = inst_48680__$1);

(statearr_48740[(9)] = inst_48681__$1);

(statearr_48740[(11)] = inst_48679__$1);

(statearr_48740[(12)] = inst_48678__$1);

return statearr_48740;
})();
var statearr_48741_48776 = state_48726__$1;
(statearr_48741_48776[(2)] = null);

(statearr_48741_48776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (22))){
var state_48726__$1 = state_48726;
var statearr_48742_48777 = state_48726__$1;
(statearr_48742_48777[(2)] = null);

(statearr_48742_48777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (6))){
var inst_48667 = (state_48726[(13)]);
var inst_48676 = f.call(null,inst_48667);
var inst_48677 = cljs.core.seq.call(null,inst_48676);
var inst_48678 = inst_48677;
var inst_48679 = null;
var inst_48680 = (0);
var inst_48681 = (0);
var state_48726__$1 = (function (){var statearr_48743 = state_48726;
(statearr_48743[(8)] = inst_48680);

(statearr_48743[(9)] = inst_48681);

(statearr_48743[(11)] = inst_48679);

(statearr_48743[(12)] = inst_48678);

return statearr_48743;
})();
var statearr_48744_48778 = state_48726__$1;
(statearr_48744_48778[(2)] = null);

(statearr_48744_48778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (17))){
var inst_48692 = (state_48726[(7)]);
var inst_48696 = cljs.core.chunk_first.call(null,inst_48692);
var inst_48697 = cljs.core.chunk_rest.call(null,inst_48692);
var inst_48698 = cljs.core.count.call(null,inst_48696);
var inst_48678 = inst_48697;
var inst_48679 = inst_48696;
var inst_48680 = inst_48698;
var inst_48681 = (0);
var state_48726__$1 = (function (){var statearr_48745 = state_48726;
(statearr_48745[(8)] = inst_48680);

(statearr_48745[(9)] = inst_48681);

(statearr_48745[(11)] = inst_48679);

(statearr_48745[(12)] = inst_48678);

return statearr_48745;
})();
var statearr_48746_48779 = state_48726__$1;
(statearr_48746_48779[(2)] = null);

(statearr_48746_48779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (3))){
var inst_48724 = (state_48726[(2)]);
var state_48726__$1 = state_48726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48726__$1,inst_48724);
} else {
if((state_val_48727 === (12))){
var inst_48712 = (state_48726[(2)]);
var state_48726__$1 = state_48726;
var statearr_48747_48780 = state_48726__$1;
(statearr_48747_48780[(2)] = inst_48712);

(statearr_48747_48780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (2))){
var state_48726__$1 = state_48726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48726__$1,(4),in$);
} else {
if((state_val_48727 === (23))){
var inst_48720 = (state_48726[(2)]);
var state_48726__$1 = state_48726;
var statearr_48748_48781 = state_48726__$1;
(statearr_48748_48781[(2)] = inst_48720);

(statearr_48748_48781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (19))){
var inst_48707 = (state_48726[(2)]);
var state_48726__$1 = state_48726;
var statearr_48749_48782 = state_48726__$1;
(statearr_48749_48782[(2)] = inst_48707);

(statearr_48749_48782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (11))){
var inst_48692 = (state_48726[(7)]);
var inst_48678 = (state_48726[(12)]);
var inst_48692__$1 = cljs.core.seq.call(null,inst_48678);
var state_48726__$1 = (function (){var statearr_48750 = state_48726;
(statearr_48750[(7)] = inst_48692__$1);

return statearr_48750;
})();
if(inst_48692__$1){
var statearr_48751_48783 = state_48726__$1;
(statearr_48751_48783[(1)] = (14));

} else {
var statearr_48752_48784 = state_48726__$1;
(statearr_48752_48784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (9))){
var inst_48714 = (state_48726[(2)]);
var inst_48715 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48726__$1 = (function (){var statearr_48753 = state_48726;
(statearr_48753[(15)] = inst_48714);

return statearr_48753;
})();
if(cljs.core.truth_(inst_48715)){
var statearr_48754_48785 = state_48726__$1;
(statearr_48754_48785[(1)] = (21));

} else {
var statearr_48755_48786 = state_48726__$1;
(statearr_48755_48786[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (5))){
var inst_48670 = cljs.core.async.close_BANG_.call(null,out);
var state_48726__$1 = state_48726;
var statearr_48756_48787 = state_48726__$1;
(statearr_48756_48787[(2)] = inst_48670);

(statearr_48756_48787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (14))){
var inst_48692 = (state_48726[(7)]);
var inst_48694 = cljs.core.chunked_seq_QMARK_.call(null,inst_48692);
var state_48726__$1 = state_48726;
if(inst_48694){
var statearr_48757_48788 = state_48726__$1;
(statearr_48757_48788[(1)] = (17));

} else {
var statearr_48758_48789 = state_48726__$1;
(statearr_48758_48789[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (16))){
var inst_48710 = (state_48726[(2)]);
var state_48726__$1 = state_48726;
var statearr_48759_48790 = state_48726__$1;
(statearr_48759_48790[(2)] = inst_48710);

(statearr_48759_48790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48727 === (10))){
var inst_48681 = (state_48726[(9)]);
var inst_48679 = (state_48726[(11)]);
var inst_48686 = cljs.core._nth.call(null,inst_48679,inst_48681);
var state_48726__$1 = state_48726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48726__$1,(13),out,inst_48686);
} else {
if((state_val_48727 === (18))){
var inst_48692 = (state_48726[(7)]);
var inst_48701 = cljs.core.first.call(null,inst_48692);
var state_48726__$1 = state_48726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48726__$1,(20),out,inst_48701);
} else {
if((state_val_48727 === (8))){
var inst_48680 = (state_48726[(8)]);
var inst_48681 = (state_48726[(9)]);
var inst_48683 = (inst_48681 < inst_48680);
var inst_48684 = inst_48683;
var state_48726__$1 = state_48726;
if(cljs.core.truth_(inst_48684)){
var statearr_48760_48791 = state_48726__$1;
(statearr_48760_48791[(1)] = (10));

} else {
var statearr_48761_48792 = state_48726__$1;
(statearr_48761_48792[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__46128__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46128__auto____0 = (function (){
var statearr_48765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48765[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46128__auto__);

(statearr_48765[(1)] = (1));

return statearr_48765;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46128__auto____1 = (function (state_48726){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48766){if((e48766 instanceof Object)){
var ex__46131__auto__ = e48766;
var statearr_48767_48793 = state_48726;
(statearr_48767_48793[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48794 = state_48726;
state_48726 = G__48794;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46128__auto__ = function(state_48726){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46128__auto____1.call(this,state_48726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46128__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46128__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__))
})();
var state__46241__auto__ = (function (){var statearr_48768 = f__46240__auto__.call(null);
(statearr_48768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_48768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__))
);

return c__46239__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args48795 = [];
var len__45008__auto___48798 = arguments.length;
var i__45009__auto___48799 = (0);
while(true){
if((i__45009__auto___48799 < len__45008__auto___48798)){
args48795.push((arguments[i__45009__auto___48799]));

var G__48800 = (i__45009__auto___48799 + (1));
i__45009__auto___48799 = G__48800;
continue;
} else {
}
break;
}

var G__48797 = args48795.length;
switch (G__48797) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48795.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args48802 = [];
var len__45008__auto___48805 = arguments.length;
var i__45009__auto___48806 = (0);
while(true){
if((i__45009__auto___48806 < len__45008__auto___48805)){
args48802.push((arguments[i__45009__auto___48806]));

var G__48807 = (i__45009__auto___48806 + (1));
i__45009__auto___48806 = G__48807;
continue;
} else {
}
break;
}

var G__48804 = args48802.length;
switch (G__48804) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48802.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args48809 = [];
var len__45008__auto___48860 = arguments.length;
var i__45009__auto___48861 = (0);
while(true){
if((i__45009__auto___48861 < len__45008__auto___48860)){
args48809.push((arguments[i__45009__auto___48861]));

var G__48862 = (i__45009__auto___48861 + (1));
i__45009__auto___48861 = G__48862;
continue;
} else {
}
break;
}

var G__48811 = args48809.length;
switch (G__48811) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48809.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46239__auto___48864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48864,out){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48864,out){
return (function (state_48835){
var state_val_48836 = (state_48835[(1)]);
if((state_val_48836 === (7))){
var inst_48830 = (state_48835[(2)]);
var state_48835__$1 = state_48835;
var statearr_48837_48865 = state_48835__$1;
(statearr_48837_48865[(2)] = inst_48830);

(statearr_48837_48865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (1))){
var inst_48812 = null;
var state_48835__$1 = (function (){var statearr_48838 = state_48835;
(statearr_48838[(7)] = inst_48812);

return statearr_48838;
})();
var statearr_48839_48866 = state_48835__$1;
(statearr_48839_48866[(2)] = null);

(statearr_48839_48866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (4))){
var inst_48815 = (state_48835[(8)]);
var inst_48815__$1 = (state_48835[(2)]);
var inst_48816 = (inst_48815__$1 == null);
var inst_48817 = cljs.core.not.call(null,inst_48816);
var state_48835__$1 = (function (){var statearr_48840 = state_48835;
(statearr_48840[(8)] = inst_48815__$1);

return statearr_48840;
})();
if(inst_48817){
var statearr_48841_48867 = state_48835__$1;
(statearr_48841_48867[(1)] = (5));

} else {
var statearr_48842_48868 = state_48835__$1;
(statearr_48842_48868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (6))){
var state_48835__$1 = state_48835;
var statearr_48843_48869 = state_48835__$1;
(statearr_48843_48869[(2)] = null);

(statearr_48843_48869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (3))){
var inst_48832 = (state_48835[(2)]);
var inst_48833 = cljs.core.async.close_BANG_.call(null,out);
var state_48835__$1 = (function (){var statearr_48844 = state_48835;
(statearr_48844[(9)] = inst_48832);

return statearr_48844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48835__$1,inst_48833);
} else {
if((state_val_48836 === (2))){
var state_48835__$1 = state_48835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48835__$1,(4),ch);
} else {
if((state_val_48836 === (11))){
var inst_48815 = (state_48835[(8)]);
var inst_48824 = (state_48835[(2)]);
var inst_48812 = inst_48815;
var state_48835__$1 = (function (){var statearr_48845 = state_48835;
(statearr_48845[(7)] = inst_48812);

(statearr_48845[(10)] = inst_48824);

return statearr_48845;
})();
var statearr_48846_48870 = state_48835__$1;
(statearr_48846_48870[(2)] = null);

(statearr_48846_48870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (9))){
var inst_48815 = (state_48835[(8)]);
var state_48835__$1 = state_48835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48835__$1,(11),out,inst_48815);
} else {
if((state_val_48836 === (5))){
var inst_48815 = (state_48835[(8)]);
var inst_48812 = (state_48835[(7)]);
var inst_48819 = cljs.core._EQ_.call(null,inst_48815,inst_48812);
var state_48835__$1 = state_48835;
if(inst_48819){
var statearr_48848_48871 = state_48835__$1;
(statearr_48848_48871[(1)] = (8));

} else {
var statearr_48849_48872 = state_48835__$1;
(statearr_48849_48872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (10))){
var inst_48827 = (state_48835[(2)]);
var state_48835__$1 = state_48835;
var statearr_48850_48873 = state_48835__$1;
(statearr_48850_48873[(2)] = inst_48827);

(statearr_48850_48873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48836 === (8))){
var inst_48812 = (state_48835[(7)]);
var tmp48847 = inst_48812;
var inst_48812__$1 = tmp48847;
var state_48835__$1 = (function (){var statearr_48851 = state_48835;
(statearr_48851[(7)] = inst_48812__$1);

return statearr_48851;
})();
var statearr_48852_48874 = state_48835__$1;
(statearr_48852_48874[(2)] = null);

(statearr_48852_48874[(1)] = (2));


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
});})(c__46239__auto___48864,out))
;
return ((function (switch__46127__auto__,c__46239__auto___48864,out){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_48856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48856[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_48856[(1)] = (1));

return statearr_48856;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_48835){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48857){if((e48857 instanceof Object)){
var ex__46131__auto__ = e48857;
var statearr_48858_48875 = state_48835;
(statearr_48858_48875[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48876 = state_48835;
state_48835 = G__48876;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_48835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_48835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48864,out))
})();
var state__46241__auto__ = (function (){var statearr_48859 = f__46240__auto__.call(null);
(statearr_48859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48864);

return statearr_48859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48864,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args48877 = [];
var len__45008__auto___48947 = arguments.length;
var i__45009__auto___48948 = (0);
while(true){
if((i__45009__auto___48948 < len__45008__auto___48947)){
args48877.push((arguments[i__45009__auto___48948]));

var G__48949 = (i__45009__auto___48948 + (1));
i__45009__auto___48948 = G__48949;
continue;
} else {
}
break;
}

var G__48879 = args48877.length;
switch (G__48879) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48877.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46239__auto___48951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___48951,out){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___48951,out){
return (function (state_48917){
var state_val_48918 = (state_48917[(1)]);
if((state_val_48918 === (7))){
var inst_48913 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48919_48952 = state_48917__$1;
(statearr_48919_48952[(2)] = inst_48913);

(statearr_48919_48952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (1))){
var inst_48880 = (new Array(n));
var inst_48881 = inst_48880;
var inst_48882 = (0);
var state_48917__$1 = (function (){var statearr_48920 = state_48917;
(statearr_48920[(7)] = inst_48882);

(statearr_48920[(8)] = inst_48881);

return statearr_48920;
})();
var statearr_48921_48953 = state_48917__$1;
(statearr_48921_48953[(2)] = null);

(statearr_48921_48953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (4))){
var inst_48885 = (state_48917[(9)]);
var inst_48885__$1 = (state_48917[(2)]);
var inst_48886 = (inst_48885__$1 == null);
var inst_48887 = cljs.core.not.call(null,inst_48886);
var state_48917__$1 = (function (){var statearr_48922 = state_48917;
(statearr_48922[(9)] = inst_48885__$1);

return statearr_48922;
})();
if(inst_48887){
var statearr_48923_48954 = state_48917__$1;
(statearr_48923_48954[(1)] = (5));

} else {
var statearr_48924_48955 = state_48917__$1;
(statearr_48924_48955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (15))){
var inst_48907 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48925_48956 = state_48917__$1;
(statearr_48925_48956[(2)] = inst_48907);

(statearr_48925_48956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (13))){
var state_48917__$1 = state_48917;
var statearr_48926_48957 = state_48917__$1;
(statearr_48926_48957[(2)] = null);

(statearr_48926_48957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (6))){
var inst_48882 = (state_48917[(7)]);
var inst_48903 = (inst_48882 > (0));
var state_48917__$1 = state_48917;
if(cljs.core.truth_(inst_48903)){
var statearr_48927_48958 = state_48917__$1;
(statearr_48927_48958[(1)] = (12));

} else {
var statearr_48928_48959 = state_48917__$1;
(statearr_48928_48959[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (3))){
var inst_48915 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48917__$1,inst_48915);
} else {
if((state_val_48918 === (12))){
var inst_48881 = (state_48917[(8)]);
var inst_48905 = cljs.core.vec.call(null,inst_48881);
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48917__$1,(15),out,inst_48905);
} else {
if((state_val_48918 === (2))){
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48917__$1,(4),ch);
} else {
if((state_val_48918 === (11))){
var inst_48897 = (state_48917[(2)]);
var inst_48898 = (new Array(n));
var inst_48881 = inst_48898;
var inst_48882 = (0);
var state_48917__$1 = (function (){var statearr_48929 = state_48917;
(statearr_48929[(7)] = inst_48882);

(statearr_48929[(10)] = inst_48897);

(statearr_48929[(8)] = inst_48881);

return statearr_48929;
})();
var statearr_48930_48960 = state_48917__$1;
(statearr_48930_48960[(2)] = null);

(statearr_48930_48960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (9))){
var inst_48881 = (state_48917[(8)]);
var inst_48895 = cljs.core.vec.call(null,inst_48881);
var state_48917__$1 = state_48917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48917__$1,(11),out,inst_48895);
} else {
if((state_val_48918 === (5))){
var inst_48882 = (state_48917[(7)]);
var inst_48881 = (state_48917[(8)]);
var inst_48890 = (state_48917[(11)]);
var inst_48885 = (state_48917[(9)]);
var inst_48889 = (inst_48881[inst_48882] = inst_48885);
var inst_48890__$1 = (inst_48882 + (1));
var inst_48891 = (inst_48890__$1 < n);
var state_48917__$1 = (function (){var statearr_48931 = state_48917;
(statearr_48931[(12)] = inst_48889);

(statearr_48931[(11)] = inst_48890__$1);

return statearr_48931;
})();
if(cljs.core.truth_(inst_48891)){
var statearr_48932_48961 = state_48917__$1;
(statearr_48932_48961[(1)] = (8));

} else {
var statearr_48933_48962 = state_48917__$1;
(statearr_48933_48962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (14))){
var inst_48910 = (state_48917[(2)]);
var inst_48911 = cljs.core.async.close_BANG_.call(null,out);
var state_48917__$1 = (function (){var statearr_48935 = state_48917;
(statearr_48935[(13)] = inst_48910);

return statearr_48935;
})();
var statearr_48936_48963 = state_48917__$1;
(statearr_48936_48963[(2)] = inst_48911);

(statearr_48936_48963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (10))){
var inst_48901 = (state_48917[(2)]);
var state_48917__$1 = state_48917;
var statearr_48937_48964 = state_48917__$1;
(statearr_48937_48964[(2)] = inst_48901);

(statearr_48937_48964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48918 === (8))){
var inst_48881 = (state_48917[(8)]);
var inst_48890 = (state_48917[(11)]);
var tmp48934 = inst_48881;
var inst_48881__$1 = tmp48934;
var inst_48882 = inst_48890;
var state_48917__$1 = (function (){var statearr_48938 = state_48917;
(statearr_48938[(7)] = inst_48882);

(statearr_48938[(8)] = inst_48881__$1);

return statearr_48938;
})();
var statearr_48939_48965 = state_48917__$1;
(statearr_48939_48965[(2)] = null);

(statearr_48939_48965[(1)] = (2));


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
});})(c__46239__auto___48951,out))
;
return ((function (switch__46127__auto__,c__46239__auto___48951,out){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_48943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48943[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_48943[(1)] = (1));

return statearr_48943;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_48917){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_48917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e48944){if((e48944 instanceof Object)){
var ex__46131__auto__ = e48944;
var statearr_48945_48966 = state_48917;
(statearr_48945_48966[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48967 = state_48917;
state_48917 = G__48967;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_48917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_48917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___48951,out))
})();
var state__46241__auto__ = (function (){var statearr_48946 = f__46240__auto__.call(null);
(statearr_48946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___48951);

return statearr_48946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___48951,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args48968 = [];
var len__45008__auto___49042 = arguments.length;
var i__45009__auto___49043 = (0);
while(true){
if((i__45009__auto___49043 < len__45008__auto___49042)){
args48968.push((arguments[i__45009__auto___49043]));

var G__49044 = (i__45009__auto___49043 + (1));
i__45009__auto___49043 = G__49044;
continue;
} else {
}
break;
}

var G__48970 = args48968.length;
switch (G__48970) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48968.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46239__auto___49046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___49046,out){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___49046,out){
return (function (state_49012){
var state_val_49013 = (state_49012[(1)]);
if((state_val_49013 === (7))){
var inst_49008 = (state_49012[(2)]);
var state_49012__$1 = state_49012;
var statearr_49014_49047 = state_49012__$1;
(statearr_49014_49047[(2)] = inst_49008);

(statearr_49014_49047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (1))){
var inst_48971 = [];
var inst_48972 = inst_48971;
var inst_48973 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49012__$1 = (function (){var statearr_49015 = state_49012;
(statearr_49015[(7)] = inst_48972);

(statearr_49015[(8)] = inst_48973);

return statearr_49015;
})();
var statearr_49016_49048 = state_49012__$1;
(statearr_49016_49048[(2)] = null);

(statearr_49016_49048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (4))){
var inst_48976 = (state_49012[(9)]);
var inst_48976__$1 = (state_49012[(2)]);
var inst_48977 = (inst_48976__$1 == null);
var inst_48978 = cljs.core.not.call(null,inst_48977);
var state_49012__$1 = (function (){var statearr_49017 = state_49012;
(statearr_49017[(9)] = inst_48976__$1);

return statearr_49017;
})();
if(inst_48978){
var statearr_49018_49049 = state_49012__$1;
(statearr_49018_49049[(1)] = (5));

} else {
var statearr_49019_49050 = state_49012__$1;
(statearr_49019_49050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (15))){
var inst_49002 = (state_49012[(2)]);
var state_49012__$1 = state_49012;
var statearr_49020_49051 = state_49012__$1;
(statearr_49020_49051[(2)] = inst_49002);

(statearr_49020_49051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (13))){
var state_49012__$1 = state_49012;
var statearr_49021_49052 = state_49012__$1;
(statearr_49021_49052[(2)] = null);

(statearr_49021_49052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (6))){
var inst_48972 = (state_49012[(7)]);
var inst_48997 = inst_48972.length;
var inst_48998 = (inst_48997 > (0));
var state_49012__$1 = state_49012;
if(cljs.core.truth_(inst_48998)){
var statearr_49022_49053 = state_49012__$1;
(statearr_49022_49053[(1)] = (12));

} else {
var statearr_49023_49054 = state_49012__$1;
(statearr_49023_49054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (3))){
var inst_49010 = (state_49012[(2)]);
var state_49012__$1 = state_49012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49012__$1,inst_49010);
} else {
if((state_val_49013 === (12))){
var inst_48972 = (state_49012[(7)]);
var inst_49000 = cljs.core.vec.call(null,inst_48972);
var state_49012__$1 = state_49012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49012__$1,(15),out,inst_49000);
} else {
if((state_val_49013 === (2))){
var state_49012__$1 = state_49012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49012__$1,(4),ch);
} else {
if((state_val_49013 === (11))){
var inst_48980 = (state_49012[(10)]);
var inst_48976 = (state_49012[(9)]);
var inst_48990 = (state_49012[(2)]);
var inst_48991 = [];
var inst_48992 = inst_48991.push(inst_48976);
var inst_48972 = inst_48991;
var inst_48973 = inst_48980;
var state_49012__$1 = (function (){var statearr_49024 = state_49012;
(statearr_49024[(7)] = inst_48972);

(statearr_49024[(11)] = inst_48990);

(statearr_49024[(8)] = inst_48973);

(statearr_49024[(12)] = inst_48992);

return statearr_49024;
})();
var statearr_49025_49055 = state_49012__$1;
(statearr_49025_49055[(2)] = null);

(statearr_49025_49055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (9))){
var inst_48972 = (state_49012[(7)]);
var inst_48988 = cljs.core.vec.call(null,inst_48972);
var state_49012__$1 = state_49012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49012__$1,(11),out,inst_48988);
} else {
if((state_val_49013 === (5))){
var inst_48980 = (state_49012[(10)]);
var inst_48976 = (state_49012[(9)]);
var inst_48973 = (state_49012[(8)]);
var inst_48980__$1 = f.call(null,inst_48976);
var inst_48981 = cljs.core._EQ_.call(null,inst_48980__$1,inst_48973);
var inst_48982 = cljs.core.keyword_identical_QMARK_.call(null,inst_48973,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48983 = (inst_48981) || (inst_48982);
var state_49012__$1 = (function (){var statearr_49026 = state_49012;
(statearr_49026[(10)] = inst_48980__$1);

return statearr_49026;
})();
if(cljs.core.truth_(inst_48983)){
var statearr_49027_49056 = state_49012__$1;
(statearr_49027_49056[(1)] = (8));

} else {
var statearr_49028_49057 = state_49012__$1;
(statearr_49028_49057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (14))){
var inst_49005 = (state_49012[(2)]);
var inst_49006 = cljs.core.async.close_BANG_.call(null,out);
var state_49012__$1 = (function (){var statearr_49030 = state_49012;
(statearr_49030[(13)] = inst_49005);

return statearr_49030;
})();
var statearr_49031_49058 = state_49012__$1;
(statearr_49031_49058[(2)] = inst_49006);

(statearr_49031_49058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (10))){
var inst_48995 = (state_49012[(2)]);
var state_49012__$1 = state_49012;
var statearr_49032_49059 = state_49012__$1;
(statearr_49032_49059[(2)] = inst_48995);

(statearr_49032_49059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49013 === (8))){
var inst_48972 = (state_49012[(7)]);
var inst_48980 = (state_49012[(10)]);
var inst_48976 = (state_49012[(9)]);
var inst_48985 = inst_48972.push(inst_48976);
var tmp49029 = inst_48972;
var inst_48972__$1 = tmp49029;
var inst_48973 = inst_48980;
var state_49012__$1 = (function (){var statearr_49033 = state_49012;
(statearr_49033[(7)] = inst_48972__$1);

(statearr_49033[(14)] = inst_48985);

(statearr_49033[(8)] = inst_48973);

return statearr_49033;
})();
var statearr_49034_49060 = state_49012__$1;
(statearr_49034_49060[(2)] = null);

(statearr_49034_49060[(1)] = (2));


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
});})(c__46239__auto___49046,out))
;
return ((function (switch__46127__auto__,c__46239__auto___49046,out){
return (function() {
var cljs$core$async$state_machine__46128__auto__ = null;
var cljs$core$async$state_machine__46128__auto____0 = (function (){
var statearr_49038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49038[(0)] = cljs$core$async$state_machine__46128__auto__);

(statearr_49038[(1)] = (1));

return statearr_49038;
});
var cljs$core$async$state_machine__46128__auto____1 = (function (state_49012){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_49012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e49039){if((e49039 instanceof Object)){
var ex__46131__auto__ = e49039;
var statearr_49040_49061 = state_49012;
(statearr_49040_49061[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49062 = state_49012;
state_49012 = G__49062;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
cljs$core$async$state_machine__46128__auto__ = function(state_49012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46128__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46128__auto____1.call(this,state_49012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46128__auto____0;
cljs$core$async$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46128__auto____1;
return cljs$core$async$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___49046,out))
})();
var state__46241__auto__ = (function (){var statearr_49041 = f__46240__auto__.call(null);
(statearr_49041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___49046);

return statearr_49041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___49046,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476707532498