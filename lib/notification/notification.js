!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports["bos-ui"]=t(require("vue")):e["bos-ui"]=t(e.Vue)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=233)}({0:function(e,t){e.exports=function(e,t,o,n,i){var s,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,r=e.default);var a="function"==typeof r?r.options:r;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=d):o&&(d=o),d){var u=a.functional,c=u?a.render:a.beforeCreate;u?a.render=function(e,t){return d.call(t),c(e,t)}:a.beforeCreate=c?[].concat(c,d):[d]}return{esModule:s,exports:r,options:a}}},1:function(t,o){t.exports=e},10:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n),s=o(3),r=!1,l=function(){if(!i.default.prototype.$isServer){var e=d.modalDom;return e?r=!0:(r=!1,e=document.createElement("div"),d.modalDom=e,e.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()}),e.addEventListener("click",function(){d.doOnModalClick&&d.doOnModalClick()})),e}},a={},d={zIndex:2e3,modalFade:!0,getInstance:function(e){return a[e]},register:function(e,t){e&&t&&(a[e]=t)},deregister:function(e){e&&(a[e]=null,delete a[e])},nextZIndex:function(){return d.zIndex++},modalStack:[],doOnModalClick:function(){var e=d.modalStack[d.modalStack.length-1];if(e){var t=d.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,o,n,a){if(!i.default.prototype.$isServer&&e&&void 0!==t){this.modalFade=a;for(var d=this.modalStack,u=0,c=d.length;u<c;u++){if(d[u].id===e)return}var f=l();if((0,s.addClass)(f,"v-modal"),this.modalFade&&!r&&(0,s.addClass)(f,"v-modal-enter"),n){n.trim().split(/\s+/).forEach(function(e){return(0,s.addClass)(f,e)})}setTimeout(function(){(0,s.removeClass)(f,"v-modal-enter")},200),o&&o.parentNode&&11!==o.parentNode.nodeType?o.parentNode.appendChild(f):document.body.appendChild(f),t&&(f.style.zIndex=t),f.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:n})}},closeModal:function(e){var t=this.modalStack,o=l();if(t.length>0){var n=t[t.length-1];if(n.id===e){if(n.modalClass){n.modalClass.trim().split(/\s+/).forEach(function(e){return(0,s.removeClass)(o,e)})}t.pop(),t.length>0&&(o.style.zIndex=t[t.length-1].zIndex)}else for(var i=t.length-1;i>=0;i--)if(t[i].id===e){t.splice(i,1);break}}0===t.length&&(this.modalFade&&(0,s.addClass)(o,"v-modal-leave"),setTimeout(function(){0===t.length&&(o.parentNode&&o.parentNode.removeChild(o),o.style.display="none",d.modalDom=void 0),(0,s.removeClass)(o,"v-modal-leave")},200))}},u=function(){if(!i.default.prototype.$isServer&&d.modalStack.length>0){var e=d.modalStack[d.modalStack.length-1];if(!e)return;return d.getInstance(e.id)}};i.default.prototype.$isServer||window.addEventListener("keydown",function(e){if(27===e.keyCode){var t=u();t&&t.closeOnPressEscape&&(t.handleClose?t.handleClose():t.handleAction?t.handleAction("cancel"):t.close())}}),t.default=d},19:function(e,t,o){"use strict";function n(e){return"object"===(void 0===e?"undefined":s(e))&&(0,r.hasOwn)(e,"componentOptions")}function i(e){return e&&e.filter(function(e){return e&&e.tag})[0]}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isVNode=n,t.getFirstComponentChild=i;var r=o(9)},233:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(234),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default},234:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n),s=o(7),r=o(19),l=i.default.extend(o(235)),a=void 0,d=[],u=1,c=function e(t){if(!i.default.prototype.$isServer){t=t||{};var o=t.onClose,n="notification_"+u++;t.onClose=function(){e.close(n,o)},a=new l({data:t}),(0,r.isVNode)(t.message)&&(a.$slots.default=[t.message],t.message=""),a.id=n,a.vm=a.$mount(),document.body.appendChild(a.vm.$el),a.vm.visible=!0,a.dom=a.vm.$el,a.dom.style.zIndex=s.PopupManager.nextZIndex();for(var c=t.offset||0,f=c,p=0,h=d.length;p<h;p++)f+=d[p].$el.offsetHeight+16;return f+=16,a.top=f,d.push(a),a.vm}};["success","warning","info","error"].forEach(function(e){c[e]=function(t){return("string"==typeof t||(0,r.isVNode)(t))&&(t={message:t}),t.type=e,c(t)}}),c.close=function(e,t){for(var o=void 0,n=void 0,i=0,s=d.length;i<s;i++)if(e===d[i].id){"function"==typeof t&&t(d[i]),o=i,n=d[i].dom.offsetHeight,d.splice(i,1);break}if(s>1)for(i=o;i<s-1;i++)d[i].dom.style.top=parseInt(d[i].dom.style.top,10)-n-16+"px"},t.default=c},235:function(e,t,o){var n=o(0)(o(236),o(237),null,null,null);n.options.__file="E:\\Git\\bos-ui\\packages\\notification\\src\\main.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},236:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={success:"circle-check",info:"information",warning:"warning",error:"circle-cross"};t.default={data:function(){return{visible:!1,title:"",message:"",duration:4500,type:"",customClass:"",iconClass:"",onClose:null,onClick:null,closed:!1,top:null,timer:null}},computed:{typeClass:function(){return this.type&&n[this.type]?"bos-icon-"+n[this.type]:""}},watch:{closed:function(e){e&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement))}},methods:{destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},click:function(){"function"==typeof this.onClick&&this.onClick()},close:function(){this.closed=!0,"function"==typeof this.onClose&&this.onClose()},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout(function(){e.closed||e.close()},this.duration))}},mounted:function(){var e=this;this.duration>0&&(this.timer=setTimeout(function(){e.closed||e.close()},this.duration))}}},237:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"bos-notification-fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"bos-notification",class:e.customClass,style:{top:e.top?e.top+"px":"auto"},on:{mouseenter:function(t){e.clearTimer()},mouseleave:function(t){e.startTimer()},click:e.click}},[e.type||e.iconClass?o("i",{staticClass:"bos-notification__icon",class:[e.typeClass,e.iconClass]}):e._e(),e._v(" "),o("div",{staticClass:"bos-notification__group",class:{"is-with-icon":e.typeClass||e.iconClass}},[o("h2",{staticClass:"bos-notification__title",domProps:{textContent:e._s(e.title)}}),e._v(" "),o("div",{staticClass:"bos-notification__content"},[e._t("default",[e._v(e._s(e.message))])],2),e._v(" "),o("div",{staticClass:"bos-notification__closeBtn bos-icon-close",on:{click:function(t){t.stopPropagation(),e.close(t)}}})])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,o){"use strict";function n(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function i(e,t){if(e){for(var o=e.className,i=(t||"").split(" "),s=0,r=i.length;s<r;s++){var l=i[s];l&&(e.classList?e.classList.add(l):n(e,l)||(o+=" "+l))}e.classList||(e.className=o)}}function s(e,t){if(e&&t){for(var o=t.split(" "),i=" "+e.className+" ",s=0,r=o.length;s<r;s++){var l=o[s];l&&(e.classList?e.classList.remove(l):n(e,l)&&(i=i.replace(" "+l+" "," ")))}e.classList||(e.className=h(i))}}function r(e,t,o){if(e&&t)if("object"===(void 0===t?"undefined":l(t)))for(var n in t)t.hasOwnProperty(n)&&r(e,n,t[n]);else t=v(t),"opacity"===t&&p<9?e.style.filter=isNaN(o)?"":"alpha(opacity="+100*o+")":e.style[t]=o}Object.defineProperty(t,"__esModule",{value:!0}),t.getStyle=t.once=t.off=t.on=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=n,t.addClass=i,t.removeClass=s,t.setStyle=r;var a=o(1),d=function(e){return e&&e.__esModule?e:{default:e}}(a),u=d.default.prototype.$isServer,c=/([\:\-\_]+(.))/g,f=/^moz([A-Z])/,p=u?0:Number(document.documentMode),h=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},v=function(e){return e.replace(c,function(e,t,o,n){return n?o.toUpperCase():o}).replace(f,"Moz$1")},m=t.on=function(){return!u&&document.addEventListener?function(e,t,o){e&&t&&o&&e.addEventListener(t,o,!1)}:function(e,t,o){e&&t&&o&&e.attachEvent("on"+t,o)}}(),y=t.off=function(){return!u&&document.removeEventListener?function(e,t,o){e&&t&&e.removeEventListener(t,o,!1)}:function(e,t,o){e&&t&&e.detachEvent("on"+t,o)}}();t.once=function(e,t,o){m(e,t,function n(){o&&o.apply(this,arguments),y(e,t,n)})},t.getStyle=p<9?function(e,t){if(!u){if(!e||!t)return null;t=v(t),"float"===t&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(o){return e.style[t]}}}:function(e,t){if(!u){if(!e||!t)return null;t=v(t),"float"===t&&(t="cssFloat");try{var o=document.defaultView.getComputedStyle(e,"");return e.style[t]||o?o[t]:null}catch(o){return e.style[t]}}}},4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=1,o=arguments.length;t<o;t++){var n=arguments[t]||{};for(var i in n)if(n.hasOwnProperty(i)){var s=n[i];void 0!==s&&(e[i]=s)}}return e}},6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(i.default.prototype.$isServer)return 0;if(void 0!==s)return s;var e=document.createElement("div");e.className="bos-scrollbar__wrap",e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var o=document.createElement("div");o.style.width="100%",e.appendChild(o);var n=o.offsetWidth;return e.parentNode.removeChild(e),s=t-n};var n=o(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n),s=void 0},7:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.PopupManager=void 0;var i=o(1),s=n(i),r=o(4),l=n(r),a=o(10),d=n(a),u=o(6),c=n(u),f=1,p=[],h=function(e){if(-1===p.indexOf(e)){var t=function(e){var t=e.__vue__;if(!t){var o=e.previousSibling;o.__vue__&&(t=o.__vue__)}return t};s.default.transition(e,{afterEnter:function(e){var o=t(e);o&&o.doAfterOpen&&o.doAfterOpen()},afterLeave:function(e){var o=t(e);o&&o.doAfterClose&&o.doAfterClose()}})}},v=void 0,m=function e(t){return 3===t.nodeType&&(t=t.nextElementSibling||t.nextSibling,e(t)),t};t.default={model:{prop:"visible",event:"visible-change"},props:{visible:{type:Boolean,default:!1},transition:{type:String,default:""},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,default:!1},modalFade:{type:Boolean,default:!0},modalClass:{},modalAppendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!1}},created:function(){this.transition&&h(this.transition)},beforeMount:function(){this._popupId="popup-"+f++,d.default.register(this._popupId,this)},beforeDestroy:function(){d.default.deregister(this._popupId),d.default.closeModal(this._popupId),this.modal&&null!==this.bodyOverflow&&"hidden"!==this.bodyOverflow&&(document.body.style.overflow=this.bodyOverflow,document.body.style.paddingRight=this.bodyPaddingRight),this.bodyOverflow=null,this.bodyPaddingRight=null},data:function(){return{opened:!1,bodyOverflow:null,bodyPaddingRight:null,rendered:!1}},watch:{visible:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,s.default.nextTick(function(){t.open()}))}else this.close()}},methods:{open:function(e){var t=this;this.rendered||(this.rendered=!0,this.$emit("visible-change",!0));var o=(0,l.default)({},this.$props||this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var n=Number(o.openDelay);n>0?this._openTimer=setTimeout(function(){t._openTimer=null,t.doOpen(o)},n):this.doOpen(o)},doOpen:function(e){if(!this.$isServer&&(!this.willOpen||this.willOpen())&&!this.opened){this._opening=!0,this.$emit("visible-change",!0);var t=m(this.$el),o=e.modal,n=e.zIndex;if(n&&(d.default.zIndex=n),o&&(this._closing&&(d.default.closeModal(this._popupId),this._closing=!1),d.default.openModal(this._popupId,d.default.nextZIndex(),this.modalAppendToBody?void 0:t,e.modalClass,e.modalFade),e.lockScroll)){this.bodyOverflow||(this.bodyPaddingRight=document.body.style.paddingRight,this.bodyOverflow=document.body.style.overflow),v=(0,c.default)();var i=document.documentElement.clientHeight<document.body.scrollHeight;v>0&&i&&(document.body.style.paddingRight=v+"px"),document.body.style.overflow="hidden"}"static"===getComputedStyle(t).position&&(t.style.position="absolute"),t.style.zIndex=d.default.nextZIndex(),this.opened=!0,this.onOpen&&this.onOpen(),this.transition||this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout(function(){e._closeTimer=null,e.doClose()},t):this.doClose()}},doClose:function(){var e=this;this.$emit("visible-change",!1),this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&setTimeout(function(){e.modal&&"hidden"!==e.bodyOverflow&&(document.body.style.overflow=e.bodyOverflow,document.body.style.paddingRight=e.bodyPaddingRight),e.bodyOverflow=null,e.bodyPaddingRight=null},200),this.opened=!1,this.transition||this.doAfterClose()},doAfterClose:function(){d.default.closeModal(this._popupId),this._closing=!1}}},t.PopupManager=d.default},9:function(e,t,o){"use strict";function n(e,t){return r.call(e,t)}function i(e,t){for(var o in t)e[o]=t[o];return e}function s(e){for(var t={},o=0;o<e.length;o++)e[o]&&i(t,e[o]);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.hasOwn=n,t.toObject=s;var r=Object.prototype.hasOwnProperty}})});