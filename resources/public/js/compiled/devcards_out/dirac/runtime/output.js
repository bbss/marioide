// Compiled by ClojureScript 1.9.229 {}
goog.provide('dirac.runtime.output');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.string');
goog.require('dirac.runtime.prefs');
dirac.runtime.output.re_split = (new RegExp("(---<.*?>---)","g"));
dirac.runtime.output.re_style = (new RegExp("---<(.*?)>---"));
dirac.runtime.output.re_code = (new RegExp("`(.*?)`","g"));
dirac.runtime.output.mark_code = (function dirac$runtime$output$mark_code(text){
var code_style = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-code-style","rich-text-code-style",-1907727780));
var reset_style = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-reset-style","rich-text-reset-style",433055243));
return text.replace(dirac.runtime.output.re_code,[cljs.core.str("---<"),cljs.core.str(code_style),cljs.core.str(">---$1---<"),cljs.core.str(reset_style),cljs.core.str(">---")].join(''));
});
dirac.runtime.output.CSI = "\u001B\\[";
dirac.runtime.output.re_ansi = (new RegExp([cljs.core.str(dirac.runtime.output.CSI),cljs.core.str("([0-9;]+)"),cljs.core.str("m")].join(''),"g"));
dirac.runtime.output.parse_int = (function dirac$runtime$output$parse_int(v){
var res = parseInt(v,(10));
if(cljs.core.not.call(null,isNaN(res))){
return res;
} else {
return null;
}
});
dirac.runtime.output.command_to_style = (function dirac$runtime$output$command_to_style(command){
var pref_key = cljs.core.keyword.call(null,[cljs.core.str("rich-text-ansi-style-"),cljs.core.str(command)].join(''));
return dirac.runtime.prefs.pref.call(null,pref_key);
});
dirac.runtime.output.ansi_code_to_style = (function dirac$runtime$output$ansi_code_to_style(sgr_code){
var commands = cljs.core.keep.call(null,dirac.runtime.output.parse_int,sgr_code.split(";"));
var sanitized_commands = ((cljs.core.empty_QMARK_.call(null,commands))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null):commands);
var styles = cljs.core.map.call(null,dirac.runtime.output.command_to_style,sanitized_commands);
return clojure.string.join.call(null,";",styles);
});
dirac.runtime.output.mark_ansi = (function dirac$runtime$output$mark_ansi(text){
return text.replace(dirac.runtime.output.re_ansi,(function (match,sgr_code){
return [cljs.core.str("---<"),cljs.core.str(dirac.runtime.output.ansi_code_to_style.call(null,sgr_code)),cljs.core.str(">---")].join('');
}));
});
dirac.runtime.output.style_QMARK_ = (function dirac$runtime$output$style_QMARK_(s){
return dirac.runtime.output.re_style.test(s);
});
dirac.runtime.output.build_format_string = (function dirac$runtime$output$build_format_string(soup){
return clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__46031_SHARP_){
if(cljs.core.truth_(dirac.runtime.output.style_QMARK_.call(null,p1__46031_SHARP_))){
return "%c";
} else {
return "%s";
}
}),soup));
});
dirac.runtime.output.boil_soup = (function dirac$runtime$output$boil_soup(soup){
var _STAR_ = (function (x){
if(cljs.core.truth_(dirac.runtime.output.style_QMARK_.call(null,x))){
return cljs.core.second.call(null,x.match(dirac.runtime.output.re_style));
} else {
return x;
}
});
return cljs.core.map.call(null,_STAR_,soup);
});
dirac.runtime.output.boil_rich_text = (function dirac$runtime$output$boil_rich_text(text){
var marked_text = dirac.runtime.output.mark_ansi.call(null,dirac.runtime.output.mark_code.call(null,text));
var soup = marked_text.split(dirac.runtime.output.re_split);
var format_string = dirac.runtime.output.build_format_string.call(null,soup);
var boiled_soup = dirac.runtime.output.boil_soup.call(null,soup);
return cljs.core.cons.call(null,format_string,boiled_soup);
});

//# sourceMappingURL=output.js.map?rel=1476719402392