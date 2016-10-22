// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__55031_55035 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__55032_55036 = null;
var count__55033_55037 = (0);
var i__55034_55038 = (0);
while(true){
if((i__55034_55038 < count__55033_55037)){
var k_55039 = cljs.core._nth.call(null,chunk__55032_55036,i__55034_55038);
var v_55040 = (b[k_55039]);
(a[k_55039] = v_55040);

var G__55041 = seq__55031_55035;
var G__55042 = chunk__55032_55036;
var G__55043 = count__55033_55037;
var G__55044 = (i__55034_55038 + (1));
seq__55031_55035 = G__55041;
chunk__55032_55036 = G__55042;
count__55033_55037 = G__55043;
i__55034_55038 = G__55044;
continue;
} else {
var temp__4657__auto___55045 = cljs.core.seq.call(null,seq__55031_55035);
if(temp__4657__auto___55045){
var seq__55031_55046__$1 = temp__4657__auto___55045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55031_55046__$1)){
var c__44720__auto___55047 = cljs.core.chunk_first.call(null,seq__55031_55046__$1);
var G__55048 = cljs.core.chunk_rest.call(null,seq__55031_55046__$1);
var G__55049 = c__44720__auto___55047;
var G__55050 = cljs.core.count.call(null,c__44720__auto___55047);
var G__55051 = (0);
seq__55031_55035 = G__55048;
chunk__55032_55036 = G__55049;
count__55033_55037 = G__55050;
i__55034_55038 = G__55051;
continue;
} else {
var k_55052 = cljs.core.first.call(null,seq__55031_55046__$1);
var v_55053 = (b[k_55052]);
(a[k_55052] = v_55053);

var G__55054 = cljs.core.next.call(null,seq__55031_55046__$1);
var G__55055 = null;
var G__55056 = (0);
var G__55057 = (0);
seq__55031_55035 = G__55054;
chunk__55032_55036 = G__55055;
count__55033_55037 = G__55056;
i__55034_55038 = G__55057;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args55058 = [];
var len__44984__auto___55061 = arguments.length;
var i__44985__auto___55062 = (0);
while(true){
if((i__44985__auto___55062 < len__44984__auto___55061)){
args55058.push((arguments[i__44985__auto___55062]));

var G__55063 = (i__44985__auto___55062 + (1));
i__44985__auto___55062 = G__55063;
continue;
} else {
}
break;
}

var G__55060 = args55058.length;
switch (G__55060) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55058.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__55065 = (i + (2));
var G__55066 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__55065;
ret = G__55066;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__55067_55071 = cljs.core.seq.call(null,v);
var chunk__55068_55072 = null;
var count__55069_55073 = (0);
var i__55070_55074 = (0);
while(true){
if((i__55070_55074 < count__55069_55073)){
var x_55075 = cljs.core._nth.call(null,chunk__55068_55072,i__55070_55074);
ret.push(x_55075);

var G__55076 = seq__55067_55071;
var G__55077 = chunk__55068_55072;
var G__55078 = count__55069_55073;
var G__55079 = (i__55070_55074 + (1));
seq__55067_55071 = G__55076;
chunk__55068_55072 = G__55077;
count__55069_55073 = G__55078;
i__55070_55074 = G__55079;
continue;
} else {
var temp__4657__auto___55080 = cljs.core.seq.call(null,seq__55067_55071);
if(temp__4657__auto___55080){
var seq__55067_55081__$1 = temp__4657__auto___55080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55067_55081__$1)){
var c__44720__auto___55082 = cljs.core.chunk_first.call(null,seq__55067_55081__$1);
var G__55083 = cljs.core.chunk_rest.call(null,seq__55067_55081__$1);
var G__55084 = c__44720__auto___55082;
var G__55085 = cljs.core.count.call(null,c__44720__auto___55082);
var G__55086 = (0);
seq__55067_55071 = G__55083;
chunk__55068_55072 = G__55084;
count__55069_55073 = G__55085;
i__55070_55074 = G__55086;
continue;
} else {
var x_55087 = cljs.core.first.call(null,seq__55067_55081__$1);
ret.push(x_55087);

var G__55088 = cljs.core.next.call(null,seq__55067_55081__$1);
var G__55089 = null;
var G__55090 = (0);
var G__55091 = (0);
seq__55067_55071 = G__55088;
chunk__55068_55072 = G__55089;
count__55069_55073 = G__55090;
i__55070_55074 = G__55091;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__55092_55096 = cljs.core.seq.call(null,v);
var chunk__55093_55097 = null;
var count__55094_55098 = (0);
var i__55095_55099 = (0);
while(true){
if((i__55095_55099 < count__55094_55098)){
var x_55100 = cljs.core._nth.call(null,chunk__55093_55097,i__55095_55099);
ret.push(x_55100);

var G__55101 = seq__55092_55096;
var G__55102 = chunk__55093_55097;
var G__55103 = count__55094_55098;
var G__55104 = (i__55095_55099 + (1));
seq__55092_55096 = G__55101;
chunk__55093_55097 = G__55102;
count__55094_55098 = G__55103;
i__55095_55099 = G__55104;
continue;
} else {
var temp__4657__auto___55105 = cljs.core.seq.call(null,seq__55092_55096);
if(temp__4657__auto___55105){
var seq__55092_55106__$1 = temp__4657__auto___55105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55092_55106__$1)){
var c__44720__auto___55107 = cljs.core.chunk_first.call(null,seq__55092_55106__$1);
var G__55108 = cljs.core.chunk_rest.call(null,seq__55092_55106__$1);
var G__55109 = c__44720__auto___55107;
var G__55110 = cljs.core.count.call(null,c__44720__auto___55107);
var G__55111 = (0);
seq__55092_55096 = G__55108;
chunk__55093_55097 = G__55109;
count__55094_55098 = G__55110;
i__55095_55099 = G__55111;
continue;
} else {
var x_55112 = cljs.core.first.call(null,seq__55092_55106__$1);
ret.push(x_55112);

var G__55113 = cljs.core.next.call(null,seq__55092_55106__$1);
var G__55114 = null;
var G__55115 = (0);
var G__55116 = (0);
seq__55092_55096 = G__55113;
chunk__55093_55097 = G__55114;
count__55094_55098 = G__55115;
i__55095_55099 = G__55116;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__55117_55121 = cljs.core.seq.call(null,v);
var chunk__55118_55122 = null;
var count__55119_55123 = (0);
var i__55120_55124 = (0);
while(true){
if((i__55120_55124 < count__55119_55123)){
var x_55125 = cljs.core._nth.call(null,chunk__55118_55122,i__55120_55124);
ret.push(x_55125);

var G__55126 = seq__55117_55121;
var G__55127 = chunk__55118_55122;
var G__55128 = count__55119_55123;
var G__55129 = (i__55120_55124 + (1));
seq__55117_55121 = G__55126;
chunk__55118_55122 = G__55127;
count__55119_55123 = G__55128;
i__55120_55124 = G__55129;
continue;
} else {
var temp__4657__auto___55130 = cljs.core.seq.call(null,seq__55117_55121);
if(temp__4657__auto___55130){
var seq__55117_55131__$1 = temp__4657__auto___55130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55117_55131__$1)){
var c__44720__auto___55132 = cljs.core.chunk_first.call(null,seq__55117_55131__$1);
var G__55133 = cljs.core.chunk_rest.call(null,seq__55117_55131__$1);
var G__55134 = c__44720__auto___55132;
var G__55135 = cljs.core.count.call(null,c__44720__auto___55132);
var G__55136 = (0);
seq__55117_55121 = G__55133;
chunk__55118_55122 = G__55134;
count__55119_55123 = G__55135;
i__55120_55124 = G__55136;
continue;
} else {
var x_55137 = cljs.core.first.call(null,seq__55117_55131__$1);
ret.push(x_55137);

var G__55138 = cljs.core.next.call(null,seq__55117_55131__$1);
var G__55139 = null;
var G__55140 = (0);
var G__55141 = (0);
seq__55117_55121 = G__55138;
chunk__55118_55122 = G__55139;
count__55119_55123 = G__55140;
i__55120_55124 = G__55141;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args55142 = [];
var len__44984__auto___55157 = arguments.length;
var i__44985__auto___55158 = (0);
while(true){
if((i__44985__auto___55158 < len__44984__auto___55157)){
args55142.push((arguments[i__44985__auto___55158]));

var G__55159 = (i__44985__auto___55158 + (1));
i__44985__auto___55158 = G__55159;
continue;
} else {
}
break;
}

var G__55144 = args55142.length;
switch (G__55144) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55142.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__55145 = obj;
G__55145.push(kfn.call(null,k),vfn.call(null,v));

return G__55145;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x55146 = cljs.core.clone.call(null,handlers);
x55146.forEach = ((function (x55146,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__55147 = cljs.core.seq.call(null,coll);
var chunk__55148 = null;
var count__55149 = (0);
var i__55150 = (0);
while(true){
if((i__55150 < count__55149)){
var vec__55151 = cljs.core._nth.call(null,chunk__55148,i__55150);
var k = cljs.core.nth.call(null,vec__55151,(0),null);
var v = cljs.core.nth.call(null,vec__55151,(1),null);
f.call(null,v,k);

var G__55161 = seq__55147;
var G__55162 = chunk__55148;
var G__55163 = count__55149;
var G__55164 = (i__55150 + (1));
seq__55147 = G__55161;
chunk__55148 = G__55162;
count__55149 = G__55163;
i__55150 = G__55164;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55147);
if(temp__4657__auto__){
var seq__55147__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55147__$1)){
var c__44720__auto__ = cljs.core.chunk_first.call(null,seq__55147__$1);
var G__55165 = cljs.core.chunk_rest.call(null,seq__55147__$1);
var G__55166 = c__44720__auto__;
var G__55167 = cljs.core.count.call(null,c__44720__auto__);
var G__55168 = (0);
seq__55147 = G__55165;
chunk__55148 = G__55166;
count__55149 = G__55167;
i__55150 = G__55168;
continue;
} else {
var vec__55154 = cljs.core.first.call(null,seq__55147__$1);
var k = cljs.core.nth.call(null,vec__55154,(0),null);
var v = cljs.core.nth.call(null,vec__55154,(1),null);
f.call(null,v,k);

var G__55169 = cljs.core.next.call(null,seq__55147__$1);
var G__55170 = null;
var G__55171 = (0);
var G__55172 = (0);
seq__55147 = G__55169;
chunk__55148 = G__55170;
count__55149 = G__55171;
i__55150 = G__55172;
continue;
}
} else {
return null;
}
}
break;
}
});})(x55146,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x55146;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args55173 = [];
var len__44984__auto___55179 = arguments.length;
var i__44985__auto___55180 = (0);
while(true){
if((i__44985__auto___55180 < len__44984__auto___55179)){
args55173.push((arguments[i__44985__auto___55180]));

var G__55181 = (i__44985__auto___55180 + (1));
i__44985__auto___55180 = G__55181;
continue;
} else {
}
break;
}

var G__55175 = args55173.length;
switch (G__55175) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55173.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit55176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit55176 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta55177){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta55177 = meta55177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit55176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55178,meta55177__$1){
var self__ = this;
var _55178__$1 = this;
return (new cognitect.transit.t_cognitect$transit55176(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta55177__$1));
});

cognitect.transit.t_cognitect$transit55176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55178){
var self__ = this;
var _55178__$1 = this;
return self__.meta55177;
});

cognitect.transit.t_cognitect$transit55176.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit55176.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit55176.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit55176.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit55176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta55177","meta55177",1375095502,null)], null);
});

cognitect.transit.t_cognitect$transit55176.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit55176.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit55176";

cognitect.transit.t_cognitect$transit55176.cljs$lang$ctorPrWriter = (function (this__44515__auto__,writer__44516__auto__,opt__44517__auto__){
return cljs.core._write.call(null,writer__44516__auto__,"cognitect.transit/t_cognitect$transit55176");
});

cognitect.transit.__GT_t_cognitect$transit55176 = (function cognitect$transit$__GT_t_cognitect$transit55176(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta55177){
return (new cognitect.transit.t_cognitect$transit55176(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta55177));
});

}

return (new cognitect.transit.t_cognitect$transit55176(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__43909__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__43909__auto__)){
return or__43909__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1476618795922