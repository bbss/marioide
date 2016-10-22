// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('dirac.project');
goog.require('dirac.runtime.prefs');
dirac.runtime.util.make_version_info = (function dirac$runtime$util$make_version_info(version){
return [cljs.core.str("v"),cljs.core.str(version)].join('');
});
dirac.runtime.util.make_lib_info = (function dirac$runtime$util$make_lib_info(version){
return [cljs.core.str("Dirac Runtime "),cljs.core.str(dirac.runtime.util.make_version_info.call(null,version))].join('');
});
dirac.runtime.util.unknown_feature_msg = (function dirac$runtime$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(lib_info),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.call(null,known_features))].join('');
});
dirac.runtime.util.feature_not_available_msg = (function dirac$runtime$util$feature_not_available_msg(feature){
return [cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. "),cljs.core.str("Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join('');
});
dirac.runtime.util.get_lib_info = (function dirac$runtime$util$get_lib_info(){
return dirac.runtime.util.make_lib_info.call(null,"0.7.2");
});
dirac.runtime.util.feature_for_display = (function dirac$runtime$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str(feature)].join('')], null)], null);
});
dirac.runtime.util.feature_list_display = (function dirac$runtime$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,dirac.runtime.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first.call(null,accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
dirac.runtime.util.display_banner_BANG_ = (function dirac$runtime$util$display_banner_BANG_(var_args){
var args__45316__auto__ = [];
var len__45309__auto___46135 = arguments.length;
var i__45310__auto___46136 = (0);
while(true){
if((i__45310__auto___46136 < len__45309__auto___46135)){
args__45316__auto__.push((arguments[i__45310__auto___46136]));

var G__46137 = (i__45310__auto___46136 + (1));
i__45310__auto___46136 = G__46137;
continue;
} else {
}
break;
}

var argseq__45317__auto__ = ((((3) < args__45316__auto__.length))?(new cljs.core.IndexedSeq(args__45316__auto__.slice((3)),(0),null)):null);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45317__auto__);
});

dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__46132 = dirac.runtime.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__46132,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__46132,(1),null);
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(fmt),cljs.core.str(" "),cljs.core.str(fmt_str)].join('')], null),params,fmt_params);
return console.info.apply(console,cljs.core.into_array.call(null,items));
});

dirac.runtime.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

dirac.runtime.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq46128){
var G__46129 = cljs.core.first.call(null,seq46128);
var seq46128__$1 = cljs.core.next.call(null,seq46128);
var G__46130 = cljs.core.first.call(null,seq46128__$1);
var seq46128__$2 = cljs.core.next.call(null,seq46128__$1);
var G__46131 = cljs.core.first.call(null,seq46128__$2);
var seq46128__$3 = cljs.core.next.call(null,seq46128__$2);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46129,G__46130,G__46131,seq46128__$3);
});

dirac.runtime.util.display_banner_if_needed_BANG_ = (function dirac$runtime$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.truth_(dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
return null;
} else {
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
return dirac.runtime.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,lib_info_style,dirac.runtime.util.get_lib_info.call(null),reset_style);
}
});
dirac.runtime.util.report_unknown_features_BANG_ = (function dirac$runtime$util$report_unknown_features_BANG_(features,known_features){
var lib_info = dirac.runtime.util.get_lib_info.call(null);
var seq__46142 = cljs.core.seq.call(null,features);
var chunk__46143 = null;
var count__46144 = (0);
var i__46145 = (0);
while(true){
if((i__46145 < count__46144)){
var feature = cljs.core._nth.call(null,chunk__46143,i__46145);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__46146 = seq__46142;
var G__46147 = chunk__46143;
var G__46148 = count__46144;
var G__46149 = (i__46145 + (1));
seq__46142 = G__46146;
chunk__46143 = G__46147;
count__46144 = G__46148;
i__46145 = G__46149;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46142);
if(temp__4657__auto__){
var seq__46142__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46142__$1)){
var c__45045__auto__ = cljs.core.chunk_first.call(null,seq__46142__$1);
var G__46150 = cljs.core.chunk_rest.call(null,seq__46142__$1);
var G__46151 = c__45045__auto__;
var G__46152 = cljs.core.count.call(null,c__45045__auto__);
var G__46153 = (0);
seq__46142 = G__46150;
chunk__46143 = G__46151;
count__46144 = G__46152;
i__46145 = G__46153;
continue;
} else {
var feature = cljs.core.first.call(null,seq__46142__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__46154 = cljs.core.next.call(null,seq__46142__$1);
var G__46155 = null;
var G__46156 = (0);
var G__46157 = (0);
seq__46142 = G__46154;
chunk__46143 = G__46155;
count__46144 = G__46156;
i__46145 = G__46157;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.util.is_known_feature_QMARK_ = (function dirac$runtime$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features));
});
dirac.runtime.util.sanititze_features_BANG_ = (function dirac$runtime$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
dirac.runtime.util.report_unknown_features_BANG_.call(null,features,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,dirac.runtime.util.is_known_feature_QMARK_,known_features),features);
});
dirac.runtime.util.resolve_features_BANG_ = (function dirac$runtime$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__44222__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__44222__auto__){
return features_desc.call(null,feature_groups);
} else {
return and__44222__auto__;
}
})())?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return dirac.runtime.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
dirac.runtime.util.install_feature_BANG_ = (function dirac$runtime$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),features_to_install))){
if(cljs.core.truth_(available_fn.call(null,feature))){
return install_fn.call(null);
} else {
return console.warn(dirac.runtime.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1476719402620