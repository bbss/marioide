// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61790){
var map__61815 = p__61790;
var map__61815__$1 = ((((!((map__61815 == null)))?((((map__61815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61815):map__61815);
var m = map__61815__$1;
var n = cljs.core.get.call(null,map__61815__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__61815__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61817_61839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61818_61840 = null;
var count__61819_61841 = (0);
var i__61820_61842 = (0);
while(true){
if((i__61820_61842 < count__61819_61841)){
var f_61843 = cljs.core._nth.call(null,chunk__61818_61840,i__61820_61842);
cljs.core.println.call(null,"  ",f_61843);

var G__61844 = seq__61817_61839;
var G__61845 = chunk__61818_61840;
var G__61846 = count__61819_61841;
var G__61847 = (i__61820_61842 + (1));
seq__61817_61839 = G__61844;
chunk__61818_61840 = G__61845;
count__61819_61841 = G__61846;
i__61820_61842 = G__61847;
continue;
} else {
var temp__4657__auto___61848 = cljs.core.seq.call(null,seq__61817_61839);
if(temp__4657__auto___61848){
var seq__61817_61849__$1 = temp__4657__auto___61848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61817_61849__$1)){
var c__44720__auto___61850 = cljs.core.chunk_first.call(null,seq__61817_61849__$1);
var G__61851 = cljs.core.chunk_rest.call(null,seq__61817_61849__$1);
var G__61852 = c__44720__auto___61850;
var G__61853 = cljs.core.count.call(null,c__44720__auto___61850);
var G__61854 = (0);
seq__61817_61839 = G__61851;
chunk__61818_61840 = G__61852;
count__61819_61841 = G__61853;
i__61820_61842 = G__61854;
continue;
} else {
var f_61855 = cljs.core.first.call(null,seq__61817_61849__$1);
cljs.core.println.call(null,"  ",f_61855);

var G__61856 = cljs.core.next.call(null,seq__61817_61849__$1);
var G__61857 = null;
var G__61858 = (0);
var G__61859 = (0);
seq__61817_61839 = G__61856;
chunk__61818_61840 = G__61857;
count__61819_61841 = G__61858;
i__61820_61842 = G__61859;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61860 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__43909__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__43909__auto__)){
return or__43909__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_61860);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_61860)))?cljs.core.second.call(null,arglists_61860):arglists_61860));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61821_61861 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61822_61862 = null;
var count__61823_61863 = (0);
var i__61824_61864 = (0);
while(true){
if((i__61824_61864 < count__61823_61863)){
var vec__61825_61865 = cljs.core._nth.call(null,chunk__61822_61862,i__61824_61864);
var name_61866 = cljs.core.nth.call(null,vec__61825_61865,(0),null);
var map__61828_61867 = cljs.core.nth.call(null,vec__61825_61865,(1),null);
var map__61828_61868__$1 = ((((!((map__61828_61867 == null)))?((((map__61828_61867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61828_61867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61828_61867):map__61828_61867);
var doc_61869 = cljs.core.get.call(null,map__61828_61868__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61870 = cljs.core.get.call(null,map__61828_61868__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61866);

cljs.core.println.call(null," ",arglists_61870);

if(cljs.core.truth_(doc_61869)){
cljs.core.println.call(null," ",doc_61869);
} else {
}

var G__61871 = seq__61821_61861;
var G__61872 = chunk__61822_61862;
var G__61873 = count__61823_61863;
var G__61874 = (i__61824_61864 + (1));
seq__61821_61861 = G__61871;
chunk__61822_61862 = G__61872;
count__61823_61863 = G__61873;
i__61824_61864 = G__61874;
continue;
} else {
var temp__4657__auto___61875 = cljs.core.seq.call(null,seq__61821_61861);
if(temp__4657__auto___61875){
var seq__61821_61876__$1 = temp__4657__auto___61875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61821_61876__$1)){
var c__44720__auto___61877 = cljs.core.chunk_first.call(null,seq__61821_61876__$1);
var G__61878 = cljs.core.chunk_rest.call(null,seq__61821_61876__$1);
var G__61879 = c__44720__auto___61877;
var G__61880 = cljs.core.count.call(null,c__44720__auto___61877);
var G__61881 = (0);
seq__61821_61861 = G__61878;
chunk__61822_61862 = G__61879;
count__61823_61863 = G__61880;
i__61824_61864 = G__61881;
continue;
} else {
var vec__61830_61882 = cljs.core.first.call(null,seq__61821_61876__$1);
var name_61883 = cljs.core.nth.call(null,vec__61830_61882,(0),null);
var map__61833_61884 = cljs.core.nth.call(null,vec__61830_61882,(1),null);
var map__61833_61885__$1 = ((((!((map__61833_61884 == null)))?((((map__61833_61884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61833_61884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61833_61884):map__61833_61884);
var doc_61886 = cljs.core.get.call(null,map__61833_61885__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61887 = cljs.core.get.call(null,map__61833_61885__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61883);

cljs.core.println.call(null," ",arglists_61887);

if(cljs.core.truth_(doc_61886)){
cljs.core.println.call(null," ",doc_61886);
} else {
}

var G__61888 = cljs.core.next.call(null,seq__61821_61876__$1);
var G__61889 = null;
var G__61890 = (0);
var G__61891 = (0);
seq__61821_61861 = G__61888;
chunk__61822_61862 = G__61889;
count__61823_61863 = G__61890;
i__61824_61864 = G__61891;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__61835 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61836 = null;
var count__61837 = (0);
var i__61838 = (0);
while(true){
if((i__61838 < count__61837)){
var role = cljs.core._nth.call(null,chunk__61836,i__61838);
var temp__4657__auto___61892__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61892__$1)){
var spec_61893 = temp__4657__auto___61892__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_61893));
} else {
}

var G__61894 = seq__61835;
var G__61895 = chunk__61836;
var G__61896 = count__61837;
var G__61897 = (i__61838 + (1));
seq__61835 = G__61894;
chunk__61836 = G__61895;
count__61837 = G__61896;
i__61838 = G__61897;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__61835);
if(temp__4657__auto____$1){
var seq__61835__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61835__$1)){
var c__44720__auto__ = cljs.core.chunk_first.call(null,seq__61835__$1);
var G__61898 = cljs.core.chunk_rest.call(null,seq__61835__$1);
var G__61899 = c__44720__auto__;
var G__61900 = cljs.core.count.call(null,c__44720__auto__);
var G__61901 = (0);
seq__61835 = G__61898;
chunk__61836 = G__61899;
count__61837 = G__61900;
i__61838 = G__61901;
continue;
} else {
var role = cljs.core.first.call(null,seq__61835__$1);
var temp__4657__auto___61902__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61902__$2)){
var spec_61903 = temp__4657__auto___61902__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_61903));
} else {
}

var G__61904 = cljs.core.next.call(null,seq__61835__$1);
var G__61905 = null;
var G__61906 = (0);
var G__61907 = (0);
seq__61835 = G__61904;
chunk__61836 = G__61905;
count__61837 = G__61906;
i__61838 = G__61907;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1476618811642