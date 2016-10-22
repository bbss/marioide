// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards_om_next.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('devcards.util.utils');
goog.require('om.next');
goog.require('om.next.protocols');
var base__49651__auto___52856 = ({"getInitialState": (function (){
return ({"state_change_count": (0), "omnext$unique-id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"omnext-component-","omnext-component-",217631378,null)))].join('')});
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var watch_atom_QMARK_ = new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152))));
var or__43933__auto__ = watch_atom_QMARK_;
if(cljs.core.truth_(or__43933__auto__)){
return or__43933__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),next_state.state_change_count);
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var map__52841 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
var map__52841__$1 = ((((!((map__52841 == null)))?((((map__52841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52841):map__52841);
var data_atom = cljs.core.get.call(null,map__52841__$1,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var mount_fn = cljs.core.get.call(null,map__52841__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
mount_fn.call(null,target);

if(cljs.core.truth_(data_atom)){
return cljs.core.add_watch.call(null,data_atom,unique_id,((function (map__52841,map__52841__$1,data_atom,mount_fn,unique_id,target,this$){
return (function (_,___$1,___$2,___$3){
var new_change_count = (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1));
return this$.setState(({"state_change_count": new_change_count}));
});})(map__52841,map__52841__$1,data_atom,mount_fn,unique_id,target,this$))
);
} else {
return null;
}
}):(function (){
return null;
})), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
if(cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),prev_state.state_change_count)){
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__52843 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
var map__52843__$1 = ((((!((map__52843 == null)))?((((map__52843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52843):map__52843);
var mount_fn = cljs.core.get.call(null,map__52843__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var component = cljs.core.get.call(null,map__52843__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var reconciler = cljs.core.get.call(null,map__52843__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
var temp__4655__auto__ = om.next.class__GT_any.call(null,reconciler,component);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return c.forceUpdate();
} else {
return mount_fn.call(null,target);
}
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var data_atom = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),new cljs.core.Keyword(null,"data_atom","data_atom",257894504)], null));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
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
}), "render": (function (){
var this$ = this;
var map__52845 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var map__52845__$1 = ((((!((map__52845 == null)))?((((map__52845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52845):map__52845);
var card = map__52845__$1;
var map__52846 = cljs.core.get.call(null,map__52845__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__52846__$1 = ((((!((map__52846 == null)))?((((map__52846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52846):map__52846);
var watch_atom = cljs.core.get.call(null,map__52846__$1,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308));
var map__52847 = cljs.core.get.call(null,map__52845__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var map__52847__$1 = ((((!((map__52847 == null)))?((((map__52847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52847):map__52847);
var mount_fn = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256));
var data_atom = cljs.core.get.call(null,map__52847__$1,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var main = (function (){var G__52851 = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?React.createElement("div",({"id": unique_id})):mount_fn.call(null));
if(cljs.core.not.call(null,watch_atom)){
return devcards.core.dont_update.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),G__52851);
} else {
return G__52851;
}
})();
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards_om_next.core.OmNextNode !== 'undefined'){
} else {
devcards_om_next.core.OmNextNode = React.createClass(base__49651__auto___52856);
}

var seq__52852_52857 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__52853_52858 = null;
var count__52854_52859 = (0);
var i__52855_52860 = (0);
while(true){
if((i__52855_52860 < count__52854_52859)){
var property__49652__auto___52861 = cljs.core._nth.call(null,chunk__52853_52858,i__52855_52860);
if(cljs.core.truth_((base__49651__auto___52856[property__49652__auto___52861]))){
(devcards_om_next.core.OmNextNode.prototype[property__49652__auto___52861] = (base__49651__auto___52856[property__49652__auto___52861]));
} else {
}

var G__52862 = seq__52852_52857;
var G__52863 = chunk__52853_52858;
var G__52864 = count__52854_52859;
var G__52865 = (i__52855_52860 + (1));
seq__52852_52857 = G__52862;
chunk__52853_52858 = G__52863;
count__52854_52859 = G__52864;
i__52855_52860 = G__52865;
continue;
} else {
var temp__4657__auto___52866 = cljs.core.seq.call(null,seq__52852_52857);
if(temp__4657__auto___52866){
var seq__52852_52867__$1 = temp__4657__auto___52866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52852_52867__$1)){
var c__44744__auto___52868 = cljs.core.chunk_first.call(null,seq__52852_52867__$1);
var G__52869 = cljs.core.chunk_rest.call(null,seq__52852_52867__$1);
var G__52870 = c__44744__auto___52868;
var G__52871 = cljs.core.count.call(null,c__44744__auto___52868);
var G__52872 = (0);
seq__52852_52857 = G__52869;
chunk__52853_52858 = G__52870;
count__52854_52859 = G__52871;
i__52855_52860 = G__52872;
continue;
} else {
var property__49652__auto___52873 = cljs.core.first.call(null,seq__52852_52867__$1);
if(cljs.core.truth_((base__49651__auto___52856[property__49652__auto___52873]))){
(devcards_om_next.core.OmNextNode.prototype[property__49652__auto___52873] = (base__49651__auto___52856[property__49652__auto___52873]));
} else {
}

var G__52874 = cljs.core.next.call(null,seq__52852_52867__$1);
var G__52875 = null;
var G__52876 = (0);
var G__52877 = (0);
seq__52852_52857 = G__52874;
chunk__52853_52858 = G__52875;
count__52854_52859 = G__52876;
i__52855_52860 = G__52877;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=core.js.map?rel=1476707535374