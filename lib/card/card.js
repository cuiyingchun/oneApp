!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["bos-ui"]=t():e["bos-ui"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=121)}({0:function(e,t){e.exports=function(e,t,n,o,r){var s,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,u=e.default);var a="function"==typeof u?u.options:u;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o);var d;if(r?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},a._ssrRegister=d):n&&(d=n),d){var c=a.functional,f=c?a.render:a.beforeCreate;c?a.render=function(e,t){return d.call(t),f(e,t)}:a.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:u,options:a}}},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(122),r=function(e){return e&&e.__esModule?e:{default:e}}(o);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},122:function(e,t,n){var o=n(0)(n(123),n(124),null,null,null);o.options.__file="E:\\Git\\bos-ui\\packages\\card\\src\\main.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BosCard",props:["header","bodyStyle"]}},124:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bos-card"},[e.$slots.header||e.header?n("div",{staticClass:"bos-card__header"},[e._t("header",[e._v(e._s(e.header))])],2):e._e(),e._v(" "),n("div",{staticClass:"bos-card__body",style:e.bodyStyle},[e._t("default")],2)])},staticRenderFns:[]},e.exports.render._withStripped=!0}})});