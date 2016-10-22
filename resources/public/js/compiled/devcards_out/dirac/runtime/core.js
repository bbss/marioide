// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.core');
goog.require('cljs.core');
goog.require('dirac.runtime.prefs');
goog.require('goog.labs.userAgent.platform');
goog.require('goog.labs.userAgent.browser');
goog.require('dirac.runtime.repl');
goog.require('dirac.project');
goog.require('dirac.runtime.util');
dirac.runtime.core.is_feature_available_QMARK_ = (function dirac$runtime$core$is_feature_available_QMARK_(feature){
var G__46187 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__46187) {
case "repl":
return dirac.runtime.repl.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
dirac.runtime.core.available_QMARK_ = (function dirac$runtime$core$available_QMARK_(var_args){
var args46189 = [];
var len__45309__auto___46192 = arguments.length;
var i__45310__auto___46193 = (0);
while(true){
if((i__45310__auto___46193 < len__45309__auto___46192)){
args46189.push((arguments[i__45310__auto___46193]));

var G__46194 = (i__45310__auto___46193 + (1));
i__45310__auto___46193 = G__46194;
continue;
} else {
}
break;
}

var G__46191 = args46189.length;
switch (G__46191) {
case 0:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46189.length)].join('')));

}
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.available_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_available_QMARK_,features);
}
});

dirac.runtime.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.is_feature_installed_QMARK_ = (function dirac$runtime$core$is_feature_installed_QMARK_(feature){
var G__46197 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__46197) {
case "repl":
return dirac.runtime.repl.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
dirac.runtime.core.installed_QMARK_ = (function dirac$runtime$core$installed_QMARK_(var_args){
var args46199 = [];
var len__45309__auto___46202 = arguments.length;
var i__45310__auto___46203 = (0);
while(true){
if((i__45310__auto___46203 < len__45309__auto___46202)){
args46199.push((arguments[i__45310__auto___46203]));

var G__46204 = (i__45310__auto___46203 + (1));
i__45310__auto___46203 = G__46204;
continue;
} else {
}
break;
}

var G__46201 = args46199.length;
switch (G__46201) {
case 0:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46199.length)].join('')));

}
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.installed_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_installed_QMARK_,features);
}
});

dirac.runtime.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.install_BANG_ = (function dirac$runtime$core$install_BANG_(var_args){
var args46206 = [];
var len__45309__auto___46209 = arguments.length;
var i__45310__auto___46210 = (0);
while(true){
if((i__45310__auto___46210 < len__45309__auto___46209)){
args46206.push((arguments[i__45310__auto___46210]));

var G__46211 = (i__45310__auto___46210 + (1));
i__45310__auto___46210 = G__46211;
continue;
} else {
}
break;
}

var G__46208 = args46206.length;
switch (G__46208) {
case 0:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46206.length)].join('')));

}
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.install_BANG_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
dirac.runtime.util.display_banner_if_needed_BANG_.call(null,features,dirac.runtime.prefs.feature_groups);

return dirac.runtime.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),features,dirac.runtime.core.is_feature_available_QMARK_,dirac.runtime.repl.install_BANG_);
});

dirac.runtime.core.install_BANG_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.uninstall_BANG_ = (function dirac$runtime$core$uninstall_BANG_(){
return dirac.runtime.repl.uninstall_BANG_.call(null);
});
dirac.runtime.core.part_str = (function dirac$runtime$core$part_str(val,placeholder){
if(cljs.core.empty_QMARK_.call(null,val)){
return placeholder;
} else {
return val;
}
});
dirac.runtime.core.combo_str = (function dirac$runtime$core$combo_str(name,name_placeholder,version,version_placeholder){
return [cljs.core.str(dirac.runtime.core.part_str.call(null,name,name_placeholder)),cljs.core.str("/"),cljs.core.str(dirac.runtime.core.part_str.call(null,version,version_placeholder))].join('');
});
dirac.runtime.core.get_tag_data = (function dirac$runtime$core$get_tag_data(){
var tag = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847));
var url = [cljs.core.str(location)].join('');
var browser_name = clojure.string.join.call(null,", ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.browser.isOpera())?"Opera":null),(cljs.core.truth_(goog.labs.userAgent.browser.isIE())?"IE":null),(cljs.core.truth_(goog.labs.userAgent.browser.isEdge())?"Edge":null),(cljs.core.truth_(goog.labs.userAgent.browser.isFirefox())?"Firefox":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSafari())?"Safari":null),(cljs.core.truth_(goog.labs.userAgent.browser.isCoast())?"Coast":null),(cljs.core.truth_(goog.labs.userAgent.browser.isChrome())?"Chrome":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSilk())?"Silk":null)], null)));
var browser_version = goog.labs.userAgent.browser.getVersion();
var browser = dirac.runtime.core.combo_str.call(null,browser_name,"?",browser_version,"?");
var platform_name = clojure.string.join.call(null,", ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.platform.isAndroid())?"Android":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpod())?"iPod":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIphone())?"iPhone":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpad())?"iPad":null),(cljs.core.truth_(goog.labs.userAgent.platform.isMacintosh())?"Mac":null),(cljs.core.truth_(goog.labs.userAgent.platform.isLinux())?"Linux":null),(cljs.core.truth_(goog.labs.userAgent.platform.isWindows())?"Windows":null),(cljs.core.truth_(goog.labs.userAgent.platform.isChromeOS())?"ChromeOS":null)], null)));
var platform_version = goog.labs.userAgent.platform.getVersion();
var platform = dirac.runtime.core.combo_str.call(null,platform_name,"?",platform_version,"?");
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"browser","browser",828191719),browser,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
});
dirac.runtime.core.get_tag = (function dirac$runtime$core$get_tag(){
var map__46215 = dirac.runtime.core.get_tag_data.call(null);
var map__46215__$1 = ((((!((map__46215 == null)))?((((map__46215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46215):map__46215);
var tag = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var url = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"url","url",276297046));
var browser = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"browser","browser",828191719));
var platform = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"platform","platform",-1086422114));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," | ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,url,browser,platform], null)));
});

//# sourceMappingURL=core.js.map?rel=1476719402692