!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["bos-ui"]=t():e["bos-ui"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=39)}({0:function(e,t){e.exports=function(e,t,n,o,r){var s,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,i=e.default);var a="function"==typeof i?i.options:i;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},a._ssrRegister=l):n&&(l=n),l){var d=a.functional,c=d?a.render:a.beforeCreate;d?a.render=function(e,t){return l.call(t),c(e,t)}:a.beforeCreate=c?[].concat(c,l):[l]}return{esModule:s,exports:i,options:a}}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(46),r=function(e){return e&&e.__esModule?e:{default:e}}(o);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},46:function(e,t,n){var o=n(0)(n(47),n(48),null,null,null);o.options.__file="E:\\Git\\bos-ui\\packages\\button\\src\\button.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BosButton",props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean},methods:{handleClick:function(e){this.$emit("click",e)}}}},48:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"bos-button",class:[e.type?"bos-button--"+e.type:"",e.size?"bos-button--"+e.size:"",{"is-disabled":e.disabled,"is-loading":e.loading,"is-plain":e.plain}],attrs:{disabled:e.disabled,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?n("i",{staticClass:"bos-icon-loading"}):e._e(),e._v(" "),e.icon&&!e.loading?n("i",{class:"bos-icon-"+e.icon}):e._e(),e._v(" "),e.$slots.default?n("span",[e._t("default")],2):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0}})});