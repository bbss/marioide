// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__43933__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__43933__auto__){
return or__43933__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__43933__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54585_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54585_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__54590 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54591 = null;
var count__54592 = (0);
var i__54593 = (0);
while(true){
if((i__54593 < count__54592)){
var n = cljs.core._nth.call(null,chunk__54591,i__54593);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54594 = seq__54590;
var G__54595 = chunk__54591;
var G__54596 = count__54592;
var G__54597 = (i__54593 + (1));
seq__54590 = G__54594;
chunk__54591 = G__54595;
count__54592 = G__54596;
i__54593 = G__54597;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54590);
if(temp__4657__auto__){
var seq__54590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54590__$1)){
var c__44744__auto__ = cljs.core.chunk_first.call(null,seq__54590__$1);
var G__54598 = cljs.core.chunk_rest.call(null,seq__54590__$1);
var G__54599 = c__44744__auto__;
var G__54600 = cljs.core.count.call(null,c__44744__auto__);
var G__54601 = (0);
seq__54590 = G__54598;
chunk__54591 = G__54599;
count__54592 = G__54600;
i__54593 = G__54601;
continue;
} else {
var n = cljs.core.first.call(null,seq__54590__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54602 = cljs.core.next.call(null,seq__54590__$1);
var G__54603 = null;
var G__54604 = (0);
var G__54605 = (0);
seq__54590 = G__54602;
chunk__54591 = G__54603;
count__54592 = G__54604;
i__54593 = G__54605;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__54656_54667 = cljs.core.seq.call(null,deps);
var chunk__54657_54668 = null;
var count__54658_54669 = (0);
var i__54659_54670 = (0);
while(true){
if((i__54659_54670 < count__54658_54669)){
var dep_54671 = cljs.core._nth.call(null,chunk__54657_54668,i__54659_54670);
topo_sort_helper_STAR_.call(null,dep_54671,(depth + (1)),state);

var G__54672 = seq__54656_54667;
var G__54673 = chunk__54657_54668;
var G__54674 = count__54658_54669;
var G__54675 = (i__54659_54670 + (1));
seq__54656_54667 = G__54672;
chunk__54657_54668 = G__54673;
count__54658_54669 = G__54674;
i__54659_54670 = G__54675;
continue;
} else {
var temp__4657__auto___54676 = cljs.core.seq.call(null,seq__54656_54667);
if(temp__4657__auto___54676){
var seq__54656_54677__$1 = temp__4657__auto___54676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54656_54677__$1)){
var c__44744__auto___54678 = cljs.core.chunk_first.call(null,seq__54656_54677__$1);
var G__54679 = cljs.core.chunk_rest.call(null,seq__54656_54677__$1);
var G__54680 = c__44744__auto___54678;
var G__54681 = cljs.core.count.call(null,c__44744__auto___54678);
var G__54682 = (0);
seq__54656_54667 = G__54679;
chunk__54657_54668 = G__54680;
count__54658_54669 = G__54681;
i__54659_54670 = G__54682;
continue;
} else {
var dep_54683 = cljs.core.first.call(null,seq__54656_54677__$1);
topo_sort_helper_STAR_.call(null,dep_54683,(depth + (1)),state);

var G__54684 = cljs.core.next.call(null,seq__54656_54677__$1);
var G__54685 = null;
var G__54686 = (0);
var G__54687 = (0);
seq__54656_54667 = G__54684;
chunk__54657_54668 = G__54685;
count__54658_54669 = G__54686;
i__54659_54670 = G__54687;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54660){
var vec__54664 = p__54660;
var seq__54665 = cljs.core.seq.call(null,vec__54664);
var first__54666 = cljs.core.first.call(null,seq__54665);
var seq__54665__$1 = cljs.core.next.call(null,seq__54665);
var x = first__54666;
var xs = seq__54665__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54664,seq__54665,first__54666,seq__54665__$1,x,xs,get_deps__$1){
return (function (p1__54606_SHARP_){
return clojure.set.difference.call(null,p1__54606_SHARP_,x);
});})(vec__54664,seq__54665,first__54666,seq__54665__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__54700 = cljs.core.seq.call(null,provides);
var chunk__54701 = null;
var count__54702 = (0);
var i__54703 = (0);
while(true){
if((i__54703 < count__54702)){
var prov = cljs.core._nth.call(null,chunk__54701,i__54703);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54704_54712 = cljs.core.seq.call(null,requires);
var chunk__54705_54713 = null;
var count__54706_54714 = (0);
var i__54707_54715 = (0);
while(true){
if((i__54707_54715 < count__54706_54714)){
var req_54716 = cljs.core._nth.call(null,chunk__54705_54713,i__54707_54715);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54716,prov);

var G__54717 = seq__54704_54712;
var G__54718 = chunk__54705_54713;
var G__54719 = count__54706_54714;
var G__54720 = (i__54707_54715 + (1));
seq__54704_54712 = G__54717;
chunk__54705_54713 = G__54718;
count__54706_54714 = G__54719;
i__54707_54715 = G__54720;
continue;
} else {
var temp__4657__auto___54721 = cljs.core.seq.call(null,seq__54704_54712);
if(temp__4657__auto___54721){
var seq__54704_54722__$1 = temp__4657__auto___54721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54704_54722__$1)){
var c__44744__auto___54723 = cljs.core.chunk_first.call(null,seq__54704_54722__$1);
var G__54724 = cljs.core.chunk_rest.call(null,seq__54704_54722__$1);
var G__54725 = c__44744__auto___54723;
var G__54726 = cljs.core.count.call(null,c__44744__auto___54723);
var G__54727 = (0);
seq__54704_54712 = G__54724;
chunk__54705_54713 = G__54725;
count__54706_54714 = G__54726;
i__54707_54715 = G__54727;
continue;
} else {
var req_54728 = cljs.core.first.call(null,seq__54704_54722__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54728,prov);

var G__54729 = cljs.core.next.call(null,seq__54704_54722__$1);
var G__54730 = null;
var G__54731 = (0);
var G__54732 = (0);
seq__54704_54712 = G__54729;
chunk__54705_54713 = G__54730;
count__54706_54714 = G__54731;
i__54707_54715 = G__54732;
continue;
}
} else {
}
}
break;
}

var G__54733 = seq__54700;
var G__54734 = chunk__54701;
var G__54735 = count__54702;
var G__54736 = (i__54703 + (1));
seq__54700 = G__54733;
chunk__54701 = G__54734;
count__54702 = G__54735;
i__54703 = G__54736;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54700);
if(temp__4657__auto__){
var seq__54700__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54700__$1)){
var c__44744__auto__ = cljs.core.chunk_first.call(null,seq__54700__$1);
var G__54737 = cljs.core.chunk_rest.call(null,seq__54700__$1);
var G__54738 = c__44744__auto__;
var G__54739 = cljs.core.count.call(null,c__44744__auto__);
var G__54740 = (0);
seq__54700 = G__54737;
chunk__54701 = G__54738;
count__54702 = G__54739;
i__54703 = G__54740;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54700__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54708_54741 = cljs.core.seq.call(null,requires);
var chunk__54709_54742 = null;
var count__54710_54743 = (0);
var i__54711_54744 = (0);
while(true){
if((i__54711_54744 < count__54710_54743)){
var req_54745 = cljs.core._nth.call(null,chunk__54709_54742,i__54711_54744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54745,prov);

var G__54746 = seq__54708_54741;
var G__54747 = chunk__54709_54742;
var G__54748 = count__54710_54743;
var G__54749 = (i__54711_54744 + (1));
seq__54708_54741 = G__54746;
chunk__54709_54742 = G__54747;
count__54710_54743 = G__54748;
i__54711_54744 = G__54749;
continue;
} else {
var temp__4657__auto___54750__$1 = cljs.core.seq.call(null,seq__54708_54741);
if(temp__4657__auto___54750__$1){
var seq__54708_54751__$1 = temp__4657__auto___54750__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54708_54751__$1)){
var c__44744__auto___54752 = cljs.core.chunk_first.call(null,seq__54708_54751__$1);
var G__54753 = cljs.core.chunk_rest.call(null,seq__54708_54751__$1);
var G__54754 = c__44744__auto___54752;
var G__54755 = cljs.core.count.call(null,c__44744__auto___54752);
var G__54756 = (0);
seq__54708_54741 = G__54753;
chunk__54709_54742 = G__54754;
count__54710_54743 = G__54755;
i__54711_54744 = G__54756;
continue;
} else {
var req_54757 = cljs.core.first.call(null,seq__54708_54751__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54757,prov);

var G__54758 = cljs.core.next.call(null,seq__54708_54751__$1);
var G__54759 = null;
var G__54760 = (0);
var G__54761 = (0);
seq__54708_54741 = G__54758;
chunk__54709_54742 = G__54759;
count__54710_54743 = G__54760;
i__54711_54744 = G__54761;
continue;
}
} else {
}
}
break;
}

var G__54762 = cljs.core.next.call(null,seq__54700__$1);
var G__54763 = null;
var G__54764 = (0);
var G__54765 = (0);
seq__54700 = G__54762;
chunk__54701 = G__54763;
count__54702 = G__54764;
i__54703 = G__54765;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__54770_54774 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54771_54775 = null;
var count__54772_54776 = (0);
var i__54773_54777 = (0);
while(true){
if((i__54773_54777 < count__54772_54776)){
var ns_54778 = cljs.core._nth.call(null,chunk__54771_54775,i__54773_54777);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54778);

var G__54779 = seq__54770_54774;
var G__54780 = chunk__54771_54775;
var G__54781 = count__54772_54776;
var G__54782 = (i__54773_54777 + (1));
seq__54770_54774 = G__54779;
chunk__54771_54775 = G__54780;
count__54772_54776 = G__54781;
i__54773_54777 = G__54782;
continue;
} else {
var temp__4657__auto___54783 = cljs.core.seq.call(null,seq__54770_54774);
if(temp__4657__auto___54783){
var seq__54770_54784__$1 = temp__4657__auto___54783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54770_54784__$1)){
var c__44744__auto___54785 = cljs.core.chunk_first.call(null,seq__54770_54784__$1);
var G__54786 = cljs.core.chunk_rest.call(null,seq__54770_54784__$1);
var G__54787 = c__44744__auto___54785;
var G__54788 = cljs.core.count.call(null,c__44744__auto___54785);
var G__54789 = (0);
seq__54770_54774 = G__54786;
chunk__54771_54775 = G__54787;
count__54772_54776 = G__54788;
i__54773_54777 = G__54789;
continue;
} else {
var ns_54790 = cljs.core.first.call(null,seq__54770_54784__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54790);

var G__54791 = cljs.core.next.call(null,seq__54770_54784__$1);
var G__54792 = null;
var G__54793 = (0);
var G__54794 = (0);
seq__54770_54774 = G__54791;
chunk__54771_54775 = G__54792;
count__54772_54776 = G__54793;
i__54773_54777 = G__54794;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__43933__auto__ = goog.require__;
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__54795__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54796__i = 0, G__54796__a = new Array(arguments.length -  0);
while (G__54796__i < G__54796__a.length) {G__54796__a[G__54796__i] = arguments[G__54796__i + 0]; ++G__54796__i;}
  args = new cljs.core.IndexedSeq(G__54796__a,0);
} 
return G__54795__delegate.call(this,args);};
G__54795.cljs$lang$maxFixedArity = 0;
G__54795.cljs$lang$applyTo = (function (arglist__54797){
var args = cljs.core.seq(arglist__54797);
return G__54795__delegate(args);
});
G__54795.cljs$core$IFn$_invoke$arity$variadic = G__54795__delegate;
return G__54795;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54799 = cljs.core._EQ_;
var expr__54800 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54799.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__54800))){
var path_parts = ((function (pred__54799,expr__54800){
return (function (p1__54798_SHARP_){
return clojure.string.split.call(null,p1__54798_SHARP_,/[\/\\]/);
});})(pred__54799,expr__54800))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__54799,expr__54800){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e54802){if((e54802 instanceof Error)){
var e = e54802;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54802;

}
}})());
});
;})(path_parts,sep,root,pred__54799,expr__54800))
} else {
if(cljs.core.truth_(pred__54799.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__54800))){
return ((function (pred__54799,expr__54800){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__54799,expr__54800){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__54799,expr__54800))
);

return deferred.addErrback(((function (deferred,pred__54799,expr__54800){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__54799,expr__54800))
);
});
;})(pred__54799,expr__54800))
} else {
return ((function (pred__54799,expr__54800){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__54799,expr__54800))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54803,callback){
var map__54806 = p__54803;
var map__54806__$1 = ((((!((map__54806 == null)))?((((map__54806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54806):map__54806);
var file_msg = map__54806__$1;
var request_url = cljs.core.get.call(null,map__54806__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__54806,map__54806__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54806,map__54806__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__){
return (function (state_54830){
var state_val_54831 = (state_54830[(1)]);
if((state_val_54831 === (7))){
var inst_54826 = (state_54830[(2)]);
var state_54830__$1 = state_54830;
var statearr_54832_54852 = state_54830__$1;
(statearr_54832_54852[(2)] = inst_54826);

(statearr_54832_54852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54831 === (1))){
var state_54830__$1 = state_54830;
var statearr_54833_54853 = state_54830__$1;
(statearr_54833_54853[(2)] = null);

(statearr_54833_54853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54831 === (4))){
var inst_54810 = (state_54830[(7)]);
var inst_54810__$1 = (state_54830[(2)]);
var state_54830__$1 = (function (){var statearr_54834 = state_54830;
(statearr_54834[(7)] = inst_54810__$1);

return statearr_54834;
})();
if(cljs.core.truth_(inst_54810__$1)){
var statearr_54835_54854 = state_54830__$1;
(statearr_54835_54854[(1)] = (5));

} else {
var statearr_54836_54855 = state_54830__$1;
(statearr_54836_54855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54831 === (6))){
var state_54830__$1 = state_54830;
var statearr_54837_54856 = state_54830__$1;
(statearr_54837_54856[(2)] = null);

(statearr_54837_54856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54831 === (3))){
var inst_54828 = (state_54830[(2)]);
var state_54830__$1 = state_54830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54830__$1,inst_54828);
} else {
if((state_val_54831 === (2))){
var state_54830__$1 = state_54830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54830__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54831 === (11))){
var inst_54822 = (state_54830[(2)]);
var state_54830__$1 = (function (){var statearr_54838 = state_54830;
(statearr_54838[(8)] = inst_54822);

return statearr_54838;
})();
var statearr_54839_54857 = state_54830__$1;
(statearr_54839_54857[(2)] = null);

(statearr_54839_54857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54831 === (9))){
var inst_54814 = (state_54830[(9)]);
var inst_54816 = (state_54830[(10)]);
var inst_54818 = inst_54816.call(null,inst_54814);
var state_54830__$1 = state_54830;
var statearr_54840_54858 = state_54830__$1;
(statearr_54840_54858[(2)] = inst_54818);

(statearr_54840_54858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54831 === (5))){
var inst_54810 = (state_54830[(7)]);
var inst_54812 = figwheel.client.file_reloading.blocking_load.call(null,inst_54810);
var state_54830__$1 = state_54830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54830__$1,(8),inst_54812);
} else {
if((state_val_54831 === (10))){
var inst_54814 = (state_54830[(9)]);
var inst_54820 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54814);
var state_54830__$1 = state_54830;
var statearr_54841_54859 = state_54830__$1;
(statearr_54841_54859[(2)] = inst_54820);

(statearr_54841_54859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54831 === (8))){
var inst_54816 = (state_54830[(10)]);
var inst_54810 = (state_54830[(7)]);
var inst_54814 = (state_54830[(2)]);
var inst_54815 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54816__$1 = cljs.core.get.call(null,inst_54815,inst_54810);
var state_54830__$1 = (function (){var statearr_54842 = state_54830;
(statearr_54842[(9)] = inst_54814);

(statearr_54842[(10)] = inst_54816__$1);

return statearr_54842;
})();
if(cljs.core.truth_(inst_54816__$1)){
var statearr_54843_54860 = state_54830__$1;
(statearr_54843_54860[(1)] = (9));

} else {
var statearr_54844_54861 = state_54830__$1;
(statearr_54844_54861[(1)] = (10));

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
});})(c__46239__auto__))
;
return ((function (switch__46127__auto__,c__46239__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46128__auto__ = null;
var figwheel$client$file_reloading$state_machine__46128__auto____0 = (function (){
var statearr_54848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54848[(0)] = figwheel$client$file_reloading$state_machine__46128__auto__);

(statearr_54848[(1)] = (1));

return statearr_54848;
});
var figwheel$client$file_reloading$state_machine__46128__auto____1 = (function (state_54830){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_54830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e54849){if((e54849 instanceof Object)){
var ex__46131__auto__ = e54849;
var statearr_54850_54862 = state_54830;
(statearr_54850_54862[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54863 = state_54830;
state_54830 = G__54863;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46128__auto__ = function(state_54830){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46128__auto____1.call(this,state_54830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46128__auto____0;
figwheel$client$file_reloading$state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46128__auto____1;
return figwheel$client$file_reloading$state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__))
})();
var state__46241__auto__ = (function (){var statearr_54851 = f__46240__auto__.call(null);
(statearr_54851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_54851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__))
);

return c__46239__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54864,callback){
var map__54867 = p__54864;
var map__54867__$1 = ((((!((map__54867 == null)))?((((map__54867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54867):map__54867);
var file_msg = map__54867__$1;
var namespace = cljs.core.get.call(null,map__54867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54867,map__54867__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__54867,map__54867__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54869){
var map__54872 = p__54869;
var map__54872__$1 = ((((!((map__54872 == null)))?((((map__54872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54872):map__54872);
var file_msg = map__54872__$1;
var namespace = cljs.core.get.call(null,map__54872__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__43921__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__43921__auto__){
var or__43933__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
var or__43933__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__43933__auto____$1)){
return or__43933__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__43921__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54874,callback){
var map__54877 = p__54874;
var map__54877__$1 = ((((!((map__54877 == null)))?((((map__54877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54877):map__54877);
var file_msg = map__54877__$1;
var request_url = cljs.core.get.call(null,map__54877__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__54877__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__46239__auto___54981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto___54981,out){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto___54981,out){
return (function (state_54963){
var state_val_54964 = (state_54963[(1)]);
if((state_val_54964 === (1))){
var inst_54937 = cljs.core.seq.call(null,files);
var inst_54938 = cljs.core.first.call(null,inst_54937);
var inst_54939 = cljs.core.next.call(null,inst_54937);
var inst_54940 = files;
var state_54963__$1 = (function (){var statearr_54965 = state_54963;
(statearr_54965[(7)] = inst_54940);

(statearr_54965[(8)] = inst_54938);

(statearr_54965[(9)] = inst_54939);

return statearr_54965;
})();
var statearr_54966_54982 = state_54963__$1;
(statearr_54966_54982[(2)] = null);

(statearr_54966_54982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (2))){
var inst_54940 = (state_54963[(7)]);
var inst_54946 = (state_54963[(10)]);
var inst_54945 = cljs.core.seq.call(null,inst_54940);
var inst_54946__$1 = cljs.core.first.call(null,inst_54945);
var inst_54947 = cljs.core.next.call(null,inst_54945);
var inst_54948 = (inst_54946__$1 == null);
var inst_54949 = cljs.core.not.call(null,inst_54948);
var state_54963__$1 = (function (){var statearr_54967 = state_54963;
(statearr_54967[(10)] = inst_54946__$1);

(statearr_54967[(11)] = inst_54947);

return statearr_54967;
})();
if(inst_54949){
var statearr_54968_54983 = state_54963__$1;
(statearr_54968_54983[(1)] = (4));

} else {
var statearr_54969_54984 = state_54963__$1;
(statearr_54969_54984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (3))){
var inst_54961 = (state_54963[(2)]);
var state_54963__$1 = state_54963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54963__$1,inst_54961);
} else {
if((state_val_54964 === (4))){
var inst_54946 = (state_54963[(10)]);
var inst_54951 = figwheel.client.file_reloading.reload_js_file.call(null,inst_54946);
var state_54963__$1 = state_54963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54963__$1,(7),inst_54951);
} else {
if((state_val_54964 === (5))){
var inst_54957 = cljs.core.async.close_BANG_.call(null,out);
var state_54963__$1 = state_54963;
var statearr_54970_54985 = state_54963__$1;
(statearr_54970_54985[(2)] = inst_54957);

(statearr_54970_54985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (6))){
var inst_54959 = (state_54963[(2)]);
var state_54963__$1 = state_54963;
var statearr_54971_54986 = state_54963__$1;
(statearr_54971_54986[(2)] = inst_54959);

(statearr_54971_54986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (7))){
var inst_54947 = (state_54963[(11)]);
var inst_54953 = (state_54963[(2)]);
var inst_54954 = cljs.core.async.put_BANG_.call(null,out,inst_54953);
var inst_54940 = inst_54947;
var state_54963__$1 = (function (){var statearr_54972 = state_54963;
(statearr_54972[(12)] = inst_54954);

(statearr_54972[(7)] = inst_54940);

return statearr_54972;
})();
var statearr_54973_54987 = state_54963__$1;
(statearr_54973_54987[(2)] = null);

(statearr_54973_54987[(1)] = (2));


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
});})(c__46239__auto___54981,out))
;
return ((function (switch__46127__auto__,c__46239__auto___54981,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto____0 = (function (){
var statearr_54977 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54977[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto__);

(statearr_54977[(1)] = (1));

return statearr_54977;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto____1 = (function (state_54963){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_54963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e54978){if((e54978 instanceof Object)){
var ex__46131__auto__ = e54978;
var statearr_54979_54988 = state_54963;
(statearr_54979_54988[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54989 = state_54963;
state_54963 = G__54989;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto__ = function(state_54963){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto____1.call(this,state_54963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto___54981,out))
})();
var state__46241__auto__ = (function (){var statearr_54980 = f__46240__auto__.call(null);
(statearr_54980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto___54981);

return statearr_54980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto___54981,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__54990,opts){
var map__54994 = p__54990;
var map__54994__$1 = ((((!((map__54994 == null)))?((((map__54994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54994):map__54994);
var eval_body__$1 = cljs.core.get.call(null,map__54994__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__54994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__43921__auto__ = eval_body__$1;
if(cljs.core.truth_(and__43921__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__43921__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e54996){var e = e54996;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__54997_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54997_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__55006){
var vec__55007 = p__55006;
var k = cljs.core.nth.call(null,vec__55007,(0),null);
var v = cljs.core.nth.call(null,vec__55007,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__55010){
var vec__55011 = p__55010;
var k = cljs.core.nth.call(null,vec__55011,(0),null);
var v = cljs.core.nth.call(null,vec__55011,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__55017,p__55018){
var map__55265 = p__55017;
var map__55265__$1 = ((((!((map__55265 == null)))?((((map__55265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55265):map__55265);
var opts = map__55265__$1;
var before_jsload = cljs.core.get.call(null,map__55265__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__55265__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__55265__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__55266 = p__55018;
var map__55266__$1 = ((((!((map__55266 == null)))?((((map__55266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55266):map__55266);
var msg = map__55266__$1;
var files = cljs.core.get.call(null,map__55266__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__55266__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__55266__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46239__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46240__auto__ = (function (){var switch__46127__auto__ = ((function (c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55419){
var state_val_55420 = (state_55419[(1)]);
if((state_val_55420 === (7))){
var inst_55282 = (state_55419[(7)]);
var inst_55283 = (state_55419[(8)]);
var inst_55280 = (state_55419[(9)]);
var inst_55281 = (state_55419[(10)]);
var inst_55288 = cljs.core._nth.call(null,inst_55281,inst_55283);
var inst_55289 = figwheel.client.file_reloading.eval_body.call(null,inst_55288,opts);
var inst_55290 = (inst_55283 + (1));
var tmp55421 = inst_55282;
var tmp55422 = inst_55280;
var tmp55423 = inst_55281;
var inst_55280__$1 = tmp55422;
var inst_55281__$1 = tmp55423;
var inst_55282__$1 = tmp55421;
var inst_55283__$1 = inst_55290;
var state_55419__$1 = (function (){var statearr_55424 = state_55419;
(statearr_55424[(7)] = inst_55282__$1);

(statearr_55424[(8)] = inst_55283__$1);

(statearr_55424[(9)] = inst_55280__$1);

(statearr_55424[(11)] = inst_55289);

(statearr_55424[(10)] = inst_55281__$1);

return statearr_55424;
})();
var statearr_55425_55511 = state_55419__$1;
(statearr_55425_55511[(2)] = null);

(statearr_55425_55511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (20))){
var inst_55323 = (state_55419[(12)]);
var inst_55331 = figwheel.client.file_reloading.sort_files.call(null,inst_55323);
var state_55419__$1 = state_55419;
var statearr_55426_55512 = state_55419__$1;
(statearr_55426_55512[(2)] = inst_55331);

(statearr_55426_55512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (27))){
var state_55419__$1 = state_55419;
var statearr_55427_55513 = state_55419__$1;
(statearr_55427_55513[(2)] = null);

(statearr_55427_55513[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (1))){
var inst_55272 = (state_55419[(13)]);
var inst_55269 = before_jsload.call(null,files);
var inst_55270 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_55271 = (function (){return ((function (inst_55272,inst_55269,inst_55270,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55014_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55014_SHARP_);
});
;})(inst_55272,inst_55269,inst_55270,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55272__$1 = cljs.core.filter.call(null,inst_55271,files);
var inst_55273 = cljs.core.not_empty.call(null,inst_55272__$1);
var state_55419__$1 = (function (){var statearr_55428 = state_55419;
(statearr_55428[(13)] = inst_55272__$1);

(statearr_55428[(14)] = inst_55269);

(statearr_55428[(15)] = inst_55270);

return statearr_55428;
})();
if(cljs.core.truth_(inst_55273)){
var statearr_55429_55514 = state_55419__$1;
(statearr_55429_55514[(1)] = (2));

} else {
var statearr_55430_55515 = state_55419__$1;
(statearr_55430_55515[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (24))){
var state_55419__$1 = state_55419;
var statearr_55431_55516 = state_55419__$1;
(statearr_55431_55516[(2)] = null);

(statearr_55431_55516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (39))){
var inst_55373 = (state_55419[(16)]);
var state_55419__$1 = state_55419;
var statearr_55432_55517 = state_55419__$1;
(statearr_55432_55517[(2)] = inst_55373);

(statearr_55432_55517[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (46))){
var inst_55414 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
var statearr_55433_55518 = state_55419__$1;
(statearr_55433_55518[(2)] = inst_55414);

(statearr_55433_55518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (4))){
var inst_55317 = (state_55419[(2)]);
var inst_55318 = cljs.core.List.EMPTY;
var inst_55319 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_55318);
var inst_55320 = (function (){return ((function (inst_55317,inst_55318,inst_55319,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55015_SHARP_){
var and__43921__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55015_SHARP_);
if(cljs.core.truth_(and__43921__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55015_SHARP_));
} else {
return and__43921__auto__;
}
});
;})(inst_55317,inst_55318,inst_55319,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55321 = cljs.core.filter.call(null,inst_55320,files);
var inst_55322 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_55323 = cljs.core.concat.call(null,inst_55321,inst_55322);
var state_55419__$1 = (function (){var statearr_55434 = state_55419;
(statearr_55434[(12)] = inst_55323);

(statearr_55434[(17)] = inst_55319);

(statearr_55434[(18)] = inst_55317);

return statearr_55434;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55435_55519 = state_55419__$1;
(statearr_55435_55519[(1)] = (16));

} else {
var statearr_55436_55520 = state_55419__$1;
(statearr_55436_55520[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (15))){
var inst_55307 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
var statearr_55437_55521 = state_55419__$1;
(statearr_55437_55521[(2)] = inst_55307);

(statearr_55437_55521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (21))){
var inst_55333 = (state_55419[(19)]);
var inst_55333__$1 = (state_55419[(2)]);
var inst_55334 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_55333__$1);
var state_55419__$1 = (function (){var statearr_55438 = state_55419;
(statearr_55438[(19)] = inst_55333__$1);

return statearr_55438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55419__$1,(22),inst_55334);
} else {
if((state_val_55420 === (31))){
var inst_55417 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55419__$1,inst_55417);
} else {
if((state_val_55420 === (32))){
var inst_55373 = (state_55419[(16)]);
var inst_55378 = inst_55373.cljs$lang$protocol_mask$partition0$;
var inst_55379 = (inst_55378 & (64));
var inst_55380 = inst_55373.cljs$core$ISeq$;
var inst_55381 = (inst_55379) || (inst_55380);
var state_55419__$1 = state_55419;
if(cljs.core.truth_(inst_55381)){
var statearr_55439_55522 = state_55419__$1;
(statearr_55439_55522[(1)] = (35));

} else {
var statearr_55440_55523 = state_55419__$1;
(statearr_55440_55523[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (40))){
var inst_55394 = (state_55419[(20)]);
var inst_55393 = (state_55419[(2)]);
var inst_55394__$1 = cljs.core.get.call(null,inst_55393,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55395 = cljs.core.get.call(null,inst_55393,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55396 = cljs.core.not_empty.call(null,inst_55394__$1);
var state_55419__$1 = (function (){var statearr_55441 = state_55419;
(statearr_55441[(20)] = inst_55394__$1);

(statearr_55441[(21)] = inst_55395);

return statearr_55441;
})();
if(cljs.core.truth_(inst_55396)){
var statearr_55442_55524 = state_55419__$1;
(statearr_55442_55524[(1)] = (41));

} else {
var statearr_55443_55525 = state_55419__$1;
(statearr_55443_55525[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (33))){
var state_55419__$1 = state_55419;
var statearr_55444_55526 = state_55419__$1;
(statearr_55444_55526[(2)] = false);

(statearr_55444_55526[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (13))){
var inst_55293 = (state_55419[(22)]);
var inst_55297 = cljs.core.chunk_first.call(null,inst_55293);
var inst_55298 = cljs.core.chunk_rest.call(null,inst_55293);
var inst_55299 = cljs.core.count.call(null,inst_55297);
var inst_55280 = inst_55298;
var inst_55281 = inst_55297;
var inst_55282 = inst_55299;
var inst_55283 = (0);
var state_55419__$1 = (function (){var statearr_55445 = state_55419;
(statearr_55445[(7)] = inst_55282);

(statearr_55445[(8)] = inst_55283);

(statearr_55445[(9)] = inst_55280);

(statearr_55445[(10)] = inst_55281);

return statearr_55445;
})();
var statearr_55446_55527 = state_55419__$1;
(statearr_55446_55527[(2)] = null);

(statearr_55446_55527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (22))){
var inst_55336 = (state_55419[(23)]);
var inst_55333 = (state_55419[(19)]);
var inst_55341 = (state_55419[(24)]);
var inst_55337 = (state_55419[(25)]);
var inst_55336__$1 = (state_55419[(2)]);
var inst_55337__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55336__$1);
var inst_55338 = (function (){var all_files = inst_55333;
var res_SINGLEQUOTE_ = inst_55336__$1;
var res = inst_55337__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_55336,inst_55333,inst_55341,inst_55337,inst_55336__$1,inst_55337__$1,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55016_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__55016_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_55336,inst_55333,inst_55341,inst_55337,inst_55336__$1,inst_55337__$1,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55339 = cljs.core.filter.call(null,inst_55338,inst_55336__$1);
var inst_55340 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55341__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55340);
var inst_55342 = cljs.core.not_empty.call(null,inst_55341__$1);
var state_55419__$1 = (function (){var statearr_55447 = state_55419;
(statearr_55447[(23)] = inst_55336__$1);

(statearr_55447[(24)] = inst_55341__$1);

(statearr_55447[(25)] = inst_55337__$1);

(statearr_55447[(26)] = inst_55339);

return statearr_55447;
})();
if(cljs.core.truth_(inst_55342)){
var statearr_55448_55528 = state_55419__$1;
(statearr_55448_55528[(1)] = (23));

} else {
var statearr_55449_55529 = state_55419__$1;
(statearr_55449_55529[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (36))){
var state_55419__$1 = state_55419;
var statearr_55450_55530 = state_55419__$1;
(statearr_55450_55530[(2)] = false);

(statearr_55450_55530[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (41))){
var inst_55394 = (state_55419[(20)]);
var inst_55398 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55399 = cljs.core.map.call(null,inst_55398,inst_55394);
var inst_55400 = cljs.core.pr_str.call(null,inst_55399);
var inst_55401 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_55400)].join('');
var inst_55402 = figwheel.client.utils.log.call(null,inst_55401);
var state_55419__$1 = state_55419;
var statearr_55451_55531 = state_55419__$1;
(statearr_55451_55531[(2)] = inst_55402);

(statearr_55451_55531[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (43))){
var inst_55395 = (state_55419[(21)]);
var inst_55405 = (state_55419[(2)]);
var inst_55406 = cljs.core.not_empty.call(null,inst_55395);
var state_55419__$1 = (function (){var statearr_55452 = state_55419;
(statearr_55452[(27)] = inst_55405);

return statearr_55452;
})();
if(cljs.core.truth_(inst_55406)){
var statearr_55453_55532 = state_55419__$1;
(statearr_55453_55532[(1)] = (44));

} else {
var statearr_55454_55533 = state_55419__$1;
(statearr_55454_55533[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (29))){
var inst_55336 = (state_55419[(23)]);
var inst_55333 = (state_55419[(19)]);
var inst_55341 = (state_55419[(24)]);
var inst_55337 = (state_55419[(25)]);
var inst_55339 = (state_55419[(26)]);
var inst_55373 = (state_55419[(16)]);
var inst_55369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55372 = (function (){var all_files = inst_55333;
var res_SINGLEQUOTE_ = inst_55336;
var res = inst_55337;
var files_not_loaded = inst_55339;
var dependencies_that_loaded = inst_55341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55373,inst_55369,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55371){
var map__55455 = p__55371;
var map__55455__$1 = ((((!((map__55455 == null)))?((((map__55455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55455):map__55455);
var namespace = cljs.core.get.call(null,map__55455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55373,inst_55369,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55373__$1 = cljs.core.group_by.call(null,inst_55372,inst_55339);
var inst_55375 = (inst_55373__$1 == null);
var inst_55376 = cljs.core.not.call(null,inst_55375);
var state_55419__$1 = (function (){var statearr_55457 = state_55419;
(statearr_55457[(16)] = inst_55373__$1);

(statearr_55457[(28)] = inst_55369);

return statearr_55457;
})();
if(inst_55376){
var statearr_55458_55534 = state_55419__$1;
(statearr_55458_55534[(1)] = (32));

} else {
var statearr_55459_55535 = state_55419__$1;
(statearr_55459_55535[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (44))){
var inst_55395 = (state_55419[(21)]);
var inst_55408 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55395);
var inst_55409 = cljs.core.pr_str.call(null,inst_55408);
var inst_55410 = [cljs.core.str("not required: "),cljs.core.str(inst_55409)].join('');
var inst_55411 = figwheel.client.utils.log.call(null,inst_55410);
var state_55419__$1 = state_55419;
var statearr_55460_55536 = state_55419__$1;
(statearr_55460_55536[(2)] = inst_55411);

(statearr_55460_55536[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (6))){
var inst_55314 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
var statearr_55461_55537 = state_55419__$1;
(statearr_55461_55537[(2)] = inst_55314);

(statearr_55461_55537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (28))){
var inst_55339 = (state_55419[(26)]);
var inst_55366 = (state_55419[(2)]);
var inst_55367 = cljs.core.not_empty.call(null,inst_55339);
var state_55419__$1 = (function (){var statearr_55462 = state_55419;
(statearr_55462[(29)] = inst_55366);

return statearr_55462;
})();
if(cljs.core.truth_(inst_55367)){
var statearr_55463_55538 = state_55419__$1;
(statearr_55463_55538[(1)] = (29));

} else {
var statearr_55464_55539 = state_55419__$1;
(statearr_55464_55539[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (25))){
var inst_55337 = (state_55419[(25)]);
var inst_55353 = (state_55419[(2)]);
var inst_55354 = cljs.core.not_empty.call(null,inst_55337);
var state_55419__$1 = (function (){var statearr_55465 = state_55419;
(statearr_55465[(30)] = inst_55353);

return statearr_55465;
})();
if(cljs.core.truth_(inst_55354)){
var statearr_55466_55540 = state_55419__$1;
(statearr_55466_55540[(1)] = (26));

} else {
var statearr_55467_55541 = state_55419__$1;
(statearr_55467_55541[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (34))){
var inst_55388 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
if(cljs.core.truth_(inst_55388)){
var statearr_55468_55542 = state_55419__$1;
(statearr_55468_55542[(1)] = (38));

} else {
var statearr_55469_55543 = state_55419__$1;
(statearr_55469_55543[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (17))){
var state_55419__$1 = state_55419;
var statearr_55470_55544 = state_55419__$1;
(statearr_55470_55544[(2)] = recompile_dependents);

(statearr_55470_55544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (3))){
var state_55419__$1 = state_55419;
var statearr_55471_55545 = state_55419__$1;
(statearr_55471_55545[(2)] = null);

(statearr_55471_55545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (12))){
var inst_55310 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
var statearr_55472_55546 = state_55419__$1;
(statearr_55472_55546[(2)] = inst_55310);

(statearr_55472_55546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (2))){
var inst_55272 = (state_55419[(13)]);
var inst_55279 = cljs.core.seq.call(null,inst_55272);
var inst_55280 = inst_55279;
var inst_55281 = null;
var inst_55282 = (0);
var inst_55283 = (0);
var state_55419__$1 = (function (){var statearr_55473 = state_55419;
(statearr_55473[(7)] = inst_55282);

(statearr_55473[(8)] = inst_55283);

(statearr_55473[(9)] = inst_55280);

(statearr_55473[(10)] = inst_55281);

return statearr_55473;
})();
var statearr_55474_55547 = state_55419__$1;
(statearr_55474_55547[(2)] = null);

(statearr_55474_55547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (23))){
var inst_55336 = (state_55419[(23)]);
var inst_55333 = (state_55419[(19)]);
var inst_55341 = (state_55419[(24)]);
var inst_55337 = (state_55419[(25)]);
var inst_55339 = (state_55419[(26)]);
var inst_55344 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55346 = (function (){var all_files = inst_55333;
var res_SINGLEQUOTE_ = inst_55336;
var res = inst_55337;
var files_not_loaded = inst_55339;
var dependencies_that_loaded = inst_55341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55344,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55345){
var map__55475 = p__55345;
var map__55475__$1 = ((((!((map__55475 == null)))?((((map__55475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55475):map__55475);
var request_url = cljs.core.get.call(null,map__55475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55344,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55347 = cljs.core.reverse.call(null,inst_55341);
var inst_55348 = cljs.core.map.call(null,inst_55346,inst_55347);
var inst_55349 = cljs.core.pr_str.call(null,inst_55348);
var inst_55350 = figwheel.client.utils.log.call(null,inst_55349);
var state_55419__$1 = (function (){var statearr_55477 = state_55419;
(statearr_55477[(31)] = inst_55344);

return statearr_55477;
})();
var statearr_55478_55548 = state_55419__$1;
(statearr_55478_55548[(2)] = inst_55350);

(statearr_55478_55548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (35))){
var state_55419__$1 = state_55419;
var statearr_55479_55549 = state_55419__$1;
(statearr_55479_55549[(2)] = true);

(statearr_55479_55549[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (19))){
var inst_55323 = (state_55419[(12)]);
var inst_55329 = figwheel.client.file_reloading.expand_files.call(null,inst_55323);
var state_55419__$1 = state_55419;
var statearr_55480_55550 = state_55419__$1;
(statearr_55480_55550[(2)] = inst_55329);

(statearr_55480_55550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (11))){
var state_55419__$1 = state_55419;
var statearr_55481_55551 = state_55419__$1;
(statearr_55481_55551[(2)] = null);

(statearr_55481_55551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (9))){
var inst_55312 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
var statearr_55482_55552 = state_55419__$1;
(statearr_55482_55552[(2)] = inst_55312);

(statearr_55482_55552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (5))){
var inst_55282 = (state_55419[(7)]);
var inst_55283 = (state_55419[(8)]);
var inst_55285 = (inst_55283 < inst_55282);
var inst_55286 = inst_55285;
var state_55419__$1 = state_55419;
if(cljs.core.truth_(inst_55286)){
var statearr_55483_55553 = state_55419__$1;
(statearr_55483_55553[(1)] = (7));

} else {
var statearr_55484_55554 = state_55419__$1;
(statearr_55484_55554[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (14))){
var inst_55293 = (state_55419[(22)]);
var inst_55302 = cljs.core.first.call(null,inst_55293);
var inst_55303 = figwheel.client.file_reloading.eval_body.call(null,inst_55302,opts);
var inst_55304 = cljs.core.next.call(null,inst_55293);
var inst_55280 = inst_55304;
var inst_55281 = null;
var inst_55282 = (0);
var inst_55283 = (0);
var state_55419__$1 = (function (){var statearr_55485 = state_55419;
(statearr_55485[(7)] = inst_55282);

(statearr_55485[(32)] = inst_55303);

(statearr_55485[(8)] = inst_55283);

(statearr_55485[(9)] = inst_55280);

(statearr_55485[(10)] = inst_55281);

return statearr_55485;
})();
var statearr_55486_55555 = state_55419__$1;
(statearr_55486_55555[(2)] = null);

(statearr_55486_55555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (45))){
var state_55419__$1 = state_55419;
var statearr_55487_55556 = state_55419__$1;
(statearr_55487_55556[(2)] = null);

(statearr_55487_55556[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (26))){
var inst_55336 = (state_55419[(23)]);
var inst_55333 = (state_55419[(19)]);
var inst_55341 = (state_55419[(24)]);
var inst_55337 = (state_55419[(25)]);
var inst_55339 = (state_55419[(26)]);
var inst_55356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55358 = (function (){var all_files = inst_55333;
var res_SINGLEQUOTE_ = inst_55336;
var res = inst_55337;
var files_not_loaded = inst_55339;
var dependencies_that_loaded = inst_55341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55356,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55357){
var map__55488 = p__55357;
var map__55488__$1 = ((((!((map__55488 == null)))?((((map__55488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55488):map__55488);
var namespace = cljs.core.get.call(null,map__55488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55488__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55356,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55359 = cljs.core.map.call(null,inst_55358,inst_55337);
var inst_55360 = cljs.core.pr_str.call(null,inst_55359);
var inst_55361 = figwheel.client.utils.log.call(null,inst_55360);
var inst_55362 = (function (){var all_files = inst_55333;
var res_SINGLEQUOTE_ = inst_55336;
var res = inst_55337;
var files_not_loaded = inst_55339;
var dependencies_that_loaded = inst_55341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55356,inst_55358,inst_55359,inst_55360,inst_55361,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55336,inst_55333,inst_55341,inst_55337,inst_55339,inst_55356,inst_55358,inst_55359,inst_55360,inst_55361,state_val_55420,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55363 = setTimeout(inst_55362,(10));
var state_55419__$1 = (function (){var statearr_55490 = state_55419;
(statearr_55490[(33)] = inst_55361);

(statearr_55490[(34)] = inst_55356);

return statearr_55490;
})();
var statearr_55491_55557 = state_55419__$1;
(statearr_55491_55557[(2)] = inst_55363);

(statearr_55491_55557[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (16))){
var state_55419__$1 = state_55419;
var statearr_55492_55558 = state_55419__$1;
(statearr_55492_55558[(2)] = reload_dependents);

(statearr_55492_55558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (38))){
var inst_55373 = (state_55419[(16)]);
var inst_55390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55373);
var state_55419__$1 = state_55419;
var statearr_55493_55559 = state_55419__$1;
(statearr_55493_55559[(2)] = inst_55390);

(statearr_55493_55559[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (30))){
var state_55419__$1 = state_55419;
var statearr_55494_55560 = state_55419__$1;
(statearr_55494_55560[(2)] = null);

(statearr_55494_55560[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (10))){
var inst_55293 = (state_55419[(22)]);
var inst_55295 = cljs.core.chunked_seq_QMARK_.call(null,inst_55293);
var state_55419__$1 = state_55419;
if(inst_55295){
var statearr_55495_55561 = state_55419__$1;
(statearr_55495_55561[(1)] = (13));

} else {
var statearr_55496_55562 = state_55419__$1;
(statearr_55496_55562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (18))){
var inst_55327 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
if(cljs.core.truth_(inst_55327)){
var statearr_55497_55563 = state_55419__$1;
(statearr_55497_55563[(1)] = (19));

} else {
var statearr_55498_55564 = state_55419__$1;
(statearr_55498_55564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (42))){
var state_55419__$1 = state_55419;
var statearr_55499_55565 = state_55419__$1;
(statearr_55499_55565[(2)] = null);

(statearr_55499_55565[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (37))){
var inst_55385 = (state_55419[(2)]);
var state_55419__$1 = state_55419;
var statearr_55500_55566 = state_55419__$1;
(statearr_55500_55566[(2)] = inst_55385);

(statearr_55500_55566[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55420 === (8))){
var inst_55280 = (state_55419[(9)]);
var inst_55293 = (state_55419[(22)]);
var inst_55293__$1 = cljs.core.seq.call(null,inst_55280);
var state_55419__$1 = (function (){var statearr_55501 = state_55419;
(statearr_55501[(22)] = inst_55293__$1);

return statearr_55501;
})();
if(inst_55293__$1){
var statearr_55502_55567 = state_55419__$1;
(statearr_55502_55567[(1)] = (10));

} else {
var statearr_55503_55568 = state_55419__$1;
(statearr_55503_55568[(1)] = (11));

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
}
});})(c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46127__auto__,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto____0 = (function (){
var statearr_55507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55507[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto__);

(statearr_55507[(1)] = (1));

return statearr_55507;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto____1 = (function (state_55419){
while(true){
var ret_value__46129__auto__ = (function (){try{while(true){
var result__46130__auto__ = switch__46127__auto__.call(null,state_55419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46130__auto__;
}
break;
}
}catch (e55508){if((e55508 instanceof Object)){
var ex__46131__auto__ = e55508;
var statearr_55509_55569 = state_55419;
(statearr_55509_55569[(5)] = ex__46131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55570 = state_55419;
state_55419 = G__55570;
continue;
} else {
return ret_value__46129__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto__ = function(state_55419){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto____1.call(this,state_55419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46128__auto__;
})()
;})(switch__46127__auto__,c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46241__auto__ = (function (){var statearr_55510 = f__46240__auto__.call(null);
(statearr_55510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46239__auto__);

return statearr_55510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46241__auto__);
});})(c__46239__auto__,map__55265,map__55265__$1,opts,before_jsload,on_jsload,reload_dependents,map__55266,map__55266__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46239__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55573,link){
var map__55576 = p__55573;
var map__55576__$1 = ((((!((map__55576 == null)))?((((map__55576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55576):map__55576);
var file = cljs.core.get.call(null,map__55576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__55576,map__55576__$1,file){
return (function (p1__55571_SHARP_,p2__55572_SHARP_){
if(cljs.core._EQ_.call(null,p1__55571_SHARP_,p2__55572_SHARP_)){
return p1__55571_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__55576,map__55576__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55582){
var map__55583 = p__55582;
var map__55583__$1 = ((((!((map__55583 == null)))?((((map__55583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55583):map__55583);
var match_length = cljs.core.get.call(null,map__55583__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55583__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55578_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55578_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args55585 = [];
var len__45008__auto___55588 = arguments.length;
var i__45009__auto___55589 = (0);
while(true){
if((i__45009__auto___55589 < len__45008__auto___55588)){
args55585.push((arguments[i__45009__auto___55589]));

var G__55590 = (i__45009__auto___55589 + (1));
i__45009__auto___55589 = G__55590;
continue;
} else {
}
break;
}

var G__55587 = args55585.length;
switch (G__55587) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55585.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55592_SHARP_,p2__55593_SHARP_){
return cljs.core.assoc.call(null,p1__55592_SHARP_,cljs.core.get.call(null,p2__55593_SHARP_,key),p2__55593_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__55594){
var map__55597 = p__55594;
var map__55597__$1 = ((((!((map__55597 == null)))?((((map__55597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55597):map__55597);
var f_data = map__55597__$1;
var file = cljs.core.get.call(null,map__55597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55599,p__55600){
var map__55609 = p__55599;
var map__55609__$1 = ((((!((map__55609 == null)))?((((map__55609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55609):map__55609);
var opts = map__55609__$1;
var on_cssload = cljs.core.get.call(null,map__55609__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__55610 = p__55600;
var map__55610__$1 = ((((!((map__55610 == null)))?((((map__55610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55610):map__55610);
var files_msg = map__55610__$1;
var files = cljs.core.get.call(null,map__55610__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__55613_55617 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__55614_55618 = null;
var count__55615_55619 = (0);
var i__55616_55620 = (0);
while(true){
if((i__55616_55620 < count__55615_55619)){
var f_55621 = cljs.core._nth.call(null,chunk__55614_55618,i__55616_55620);
figwheel.client.file_reloading.reload_css_file.call(null,f_55621);

var G__55622 = seq__55613_55617;
var G__55623 = chunk__55614_55618;
var G__55624 = count__55615_55619;
var G__55625 = (i__55616_55620 + (1));
seq__55613_55617 = G__55622;
chunk__55614_55618 = G__55623;
count__55615_55619 = G__55624;
i__55616_55620 = G__55625;
continue;
} else {
var temp__4657__auto___55626 = cljs.core.seq.call(null,seq__55613_55617);
if(temp__4657__auto___55626){
var seq__55613_55627__$1 = temp__4657__auto___55626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55613_55627__$1)){
var c__44744__auto___55628 = cljs.core.chunk_first.call(null,seq__55613_55627__$1);
var G__55629 = cljs.core.chunk_rest.call(null,seq__55613_55627__$1);
var G__55630 = c__44744__auto___55628;
var G__55631 = cljs.core.count.call(null,c__44744__auto___55628);
var G__55632 = (0);
seq__55613_55617 = G__55629;
chunk__55614_55618 = G__55630;
count__55615_55619 = G__55631;
i__55616_55620 = G__55632;
continue;
} else {
var f_55633 = cljs.core.first.call(null,seq__55613_55627__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_55633);

var G__55634 = cljs.core.next.call(null,seq__55613_55627__$1);
var G__55635 = null;
var G__55636 = (0);
var G__55637 = (0);
seq__55613_55617 = G__55634;
chunk__55614_55618 = G__55635;
count__55615_55619 = G__55636;
i__55616_55620 = G__55637;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__55609,map__55609__$1,opts,on_cssload,map__55610,map__55610__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__55609,map__55609__$1,opts,on_cssload,map__55610,map__55610__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1476707536845