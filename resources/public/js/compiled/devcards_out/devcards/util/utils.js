// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__44895__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_47756_47758 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_47757_47759 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_47756_47758,_STAR_print_fn_STAR_47757_47759,sb__44895__auto__){
return (function (x__44896__auto__){
return sb__44895__auto__.append(x__44896__auto__);
});})(_STAR_print_newline_STAR_47756_47758,_STAR_print_fn_STAR_47757_47759,sb__44895__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47757_47759;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_47756_47758;
}
return [cljs.core.str(sb__44895__auto__)].join('');
}catch (e47754){if((e47754 instanceof Error)){
var e1 = e47754;
try{return obj.toString();
}catch (e47755){if((e47755 instanceof Error)){
var e2 = e47755;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e47755;

}
}} else {
throw e47754;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_47761 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_47761;
}});

//# sourceMappingURL=utils.js.map?rel=1476618788431