!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("stimulus"),require("lodash.camelcase")):"function"==typeof define&&define.amd?define(["exports","stimulus","lodash.camelcase"],t):t((e||self).stimulusLibrary={},e.stimulus,e.camelCase)}(this,function(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(n);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){function t(t){var n;return n=e.call(this,t)||this,new Proxy(c(n),{get:function(e,t){var r=Reflect.get(e,t),i=c(n);if(function(e){switch(e){case"application":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof r)return new Proxy(r,{apply:function(e,n,r){return i.log(t.toString(),{args:r}),Reflect.apply(e,n,r)}});n.log(t.toString())}return r}})||c(n)}return l(t,e),t.prototype.log=function(e,t){if(void 0===t&&(t={}),this.application.debug){var n=console;n.groupCollapsed("%c"+this.identifier+" %c#"+e,"color: #3B82F6","color: unset"),n.log(a({element:this.element},t)),n.groupEnd()}},t}(t.Controller),h=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){this.loadContent()},n.loadContent=function(){var e=this.hasReplaceTarget?this.replaceTarget:this.element;fetch(this.endpointValue).then(function(e){return e.text()}).then(function(t){var n=document.createElement("div");n.innerHTML=t,e.replaceWith(n);var r=new CustomEvent("ajax:success",{detail:""});e.dispatchEvent(r)}).catch(function(t){e.replaceWith("Sorry, this content failed to load");var n=new CustomEvent("ajax:error",{detail:""});e.dispatchEvent(n)}).finally(function(){var t=new CustomEvent("ajax:complete",{detail:""});e.dispatchEvent(t)})},t}(u);h.targets=["replace"],h.values={endpoint:String};var d=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.addEventListener("change",e.boundHandler)})},n.disconnect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.removeEventListener("change",e.boundHandler)})},n.handler=function(e){this.element.dispatchEvent(new CustomEvent("submit",{bubbles:!0,cancelable:!0}))},t}(u);const f=(e,t)=>{const n=e[t];return"function"==typeof n?n:(...e)=>{}},p=(e,t,n)=>{let r=e;return!0===n?r=`${t.identifier}:${e}`:"string"==typeof n&&(r=`${n}:${e}`),r},v=(e,t,n)=>{const{bubbles:r,cancelable:i,composed:o}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(n,{originalEvent:t}),new CustomEvent(e,{bubbles:r,cancelable:i,composed:o,detail:n})},g={dispatchEvent:!0,eventPrefix:!0},m={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},b={debug:!1,logger:console};class y{constructor(e,t={}){var n,r,i;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(r=null!==(n=null==t?void 0:t.debug)&&void 0!==n?n:e.application.stimulusUseDebug)&&void 0!==r?r:b.debug,this.logger=null!==(i=null==t?void 0:t.logger)&&void 0!==i?i:b.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class E extends y{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{f(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{f(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class w extends y{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{f(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const C=e=>{const t=t=>{const{innerWidth:n,innerHeight:r}=window,i={height:r||Infinity,width:n||Infinity,event:t};f(e,"windowResize").call(e,i)},n=e.disconnect.bind(e),r=()=>{window.addEventListener("resize",t),t()},i=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){i(),n()}}),r(),[r,i]},T=(e,t=200)=>{let n=null;return function(){const r=arguments,i=this,o=()=>e.apply(i,r);n&&clearTimeout(n),n=setTimeout(o,t)}};var V=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this.boundHandler),e.addEventListener("focus",this.boundHandler),C(this),requestAnimationFrame(this.boundHandler)},n.windowResize=function(){this.handler()},n.handler=function(){this.autosize(this.element)},n.autosize=function(e){var t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"},t}(u),k=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateCharCount.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){this.updateCharCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateCharCount=function(){var e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(u);k.targets=["input","output"],k.values={min:Number,max:Number},k.classes=["error"];var L=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.initialize=function(){this.toggle=this.toggle.bind(this),this.refresh=this.refresh.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){e.hasCheckboxAllTarget&&(e.selectAllTarget.addEventListener("change",e.toggle),e.checkboxTargets.forEach(function(t){return t.addEventListener("change",e.refresh)}),e.refresh())})},n.disconnect=function(){var e=this;this.hasCheckboxAllTarget&&(this.selectAllTarget.removeEventListener("change",this.toggle),this.checkboxTargets.forEach(function(t){return t.removeEventListener("change",e.refresh)}))},n.toggle=function(e){e.preventDefault();var t=e.target;this.checkboxTargets.forEach(function(e){return e.checked=t.checked})},n.refresh=function(){var e=this.checkboxTargets.length,t=this.checked.length;this.selectAllTarget.checked=t>0,this.selectAllTarget.indeterminate=t>0&&t<e},s(t,[{key:"checked",get:function(){return this.checkboxTargets.filter(function(e){return e.checked})}},{key:"unchecked",get:function(){return this.checkboxTargets.filter(function(e){return!e.checked})}}]),t}(u);L.targets=["selectAll","checkbox"];var S=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).supported=!1,t}l(t,e);var n=t.prototype;return n.connect=function(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())},n.select=function(e){e&&e.preventDefault(),this.sourceTarget.select()},n.copy=function(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")},t}(u);S.targets=["button","copy","fallback"],S.values={removeUnused:Boolean};var H=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){var e=this,t=this.messageValue;window.onbeforeunload=function(){return null==t||t},window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",function(){window.removeEventListener("popstate",e.handlePopstate),window.onbeforeunload=null})},n.handlePopstate=function(e){return!1},t}(u);H.values={message:String};var I=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.connect=function(){console.log("Debug Controller",this,this.testTargets)},t}(u);I.targets=["test"];var x=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).initialValue=null,t.boundHandler=t.handler.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;this.initialValue=this.isInputElement(e)&&this.isCheckable(e)?e.checked:e.value,e.addEventListener("input",this.boundHandler),e.addEventListener("change",this.boundHandler)},n.disconnect=function(){var e=this.element;e.removeEventListener("input",this.boundHandler),e.removeEventListener("change",this.boundHandler)},n.restore=function(){var e=this.element;this.isInputElement(e)&&this.isCheckable(e)?e.checked=this.initialValue:e.value=this.initialValue},n.handler=function(e){var t=this.element;this.initialValue!==t.value?t.setAttribute("data-dirty","true"):t.removeAttribute("data-dirty")},n.isCheckable=function(e){return"radio"===e.type||"checkbox"===e.type},n.isInputElement=function(e){return"INPUT"===e.tagName},t}(u),M=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.disableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.disableTargets.forEach(function(e,t){e.disabled=!1})},t}(u);M.targets=["disabler","disable"],M.values={clear:Boolean};var D=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.dismiss=function(){this.element.remove()},t}(u),O=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){((e,t={})=>{new w(this,t)})(0,{element:this.element,childList:!0}),this.checkEmpty()},n.mutate=function(e){this.checkEmpty()},n.checkEmpty=function(){var e,t=this;0===(e=this.hasScopeSelectorValue?this.element.querySelectorAll(this.scopeSelectorValue):this.element.children).length?(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.element.dispatchEvent(new CustomEvent("dom:empty",{bubbles:!0,cancelable:!0}))):(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.element.dispatchEvent(new CustomEvent("dom:not-empty",{bubbles:!0,cancelable:!0,detail:{count:e.length}})))},t}(u);O.classes=["empty","notEmpty"],O.values={scopeSelector:String};var A=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.enableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.enableTargets.forEach(function(e,t){e.disabled=!1})},t}(u);A.targets=["enabler","enable"],A.values={clear:Boolean};var P=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.connect=function(){var e=this,t=this.element;t.onerror=function(){e.hasPlaceholderValue?t.src=e.placeholderValue:t.style.display="none"}},t}(u);P.values={placeholder:String};var R=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){if(this.options={element:this.element,threshold:.3},"IntersectionObserver"in window){var e=((e,t={})=>{const{dispatchEvent:n,eventPrefix:r}=Object.assign({},g,t),i=(null==t?void 0:t.element)||e.element,o=e.disconnect.bind(e),s=new IntersectionObserver(t=>{const[o]=t;o.isIntersecting?(t=>{if(e.isVisible=!0,f(e,"appear").call(e,t),n){const n=p("appear",e,r),o=v(n,null,{controller:e,entry:t});i.dispatchEvent(o)}})(o):e.isVisible&&(t=>{if(e.isVisible=!1,f(e,"disappear").call(e,t),n){const n=p("disappear",e,r),o=v(n,null,{controller:e,entry:t});i.dispatchEvent(o)}})(o)},t),a=()=>{s.observe(i)},l=()=>{s.unobserve(i)};return Object.assign(e,{isVisible:!1,disconnect(){l(),o()}}),a(),[a,l]})(this,this.options);this.observe=e[0],this.unobserve=e[1]}else this.loadContent()},n.appear=function(e){var t=this.element;""===t.src&&e.target===t&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())},t}(h),j=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).maxSelections=0,t.boundHandleInputs=t.handleInputs.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.inputTargets.forEach(function(t){return t.addEventListener("change",e.boundHandleInputs)})},n.disconnect=function(){var e=this;this.inputTargets.forEach(function(t){return t.removeEventListener("change",e.boundHandleInputs)})},n.handleInputs=function(e){var t=this.inputTargets.reduce(function(e,t){return t.checked?e+1:e},0),n=e.target;t>this.maxSelections?(e.preventDefault(),n.checked=!1,n.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0})),n.dispatchEvent(new CustomEvent("limited-selection:too-many",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(n.dispatchEvent(new CustomEvent("limited-selection:selection",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))},t}(u);j.targets=["input","error"],j.values={max:Number,message:String};var N=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){this.checkStructure()},n.add=function(e){e&&e.preventDefault();var t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,this.generateID());this.targetTarget.insertAdjacentHTML(this.insertMode,t)},n.remove=function(e){e.preventDefault();var t=e.target.closest(this.wrapperClass);if(null==t)throw new Error("#remove was clicked from outside of a child record. Could not find an ancestor with class "+this.wrapperClass);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";var n=t.querySelector("input[name*='_destroy']");if(null==n)throw new Error("Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.");n.value="1"}},n.generateID=function(){return(new Date).getTime().toString()+Math.random()},n.checkStructure=function(){if(this.templateTarget.innerHTML.indexOf("NEW_RECORD"))throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`")},s(t,[{key:"wrapperClass",get:function(){return this.hasWrapperSelectorValue?this.wrapperClassValue:"nested-fields"}},{key:"insertMode",get:function(){return this.hasInsertModeValue?this.insertModeValue:"beforeend"}}]),t}(u);N.targets=["target","template"],N.values={insertMode:String,wrapperClass:String};var F=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundCheckPasswordsMatch=t.checkPasswordsMatch.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.addEventListener("change",e.boundCheckPasswordsMatch)})},n.disconnect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.removeEventListener("change",e.boundCheckPasswordsMatch)})},n.allPasswordsMatch=function(){var e=new Set(this.passwordTargets.map(function(e){return e.value}));return e.has("")||1==e.size},n.checkPasswordsMatch=function(){var e=this;this.allPasswordsMatch()?(this.element.dispatchEvent(new CustomEvent("password-confirm:match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.remove(e.errorClass)})):(this.element.dispatchEvent(new CustomEvent("password-confirm:no-match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.add(e.errorClass)}))},t}(u);F.targets=["password"],F.classes=["error"];var B=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.peak=function(e){e&&e.preventDefault(),this.passwordTarget.type="text"},n.hide=function(e){e&&e.preventDefault(),this.passwordTarget.type="password"},n.toggle=function(e){e&&e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()},t}(u);B.targets=["password"];var z=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundMessageReceived=t.messageReceived.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){window.addEventListener("message",this.boundMessageReceived)},n.disconnect=function(){window.removeEventListener("message",this.boundMessageReceived)},n.messageReceived=function(e){var t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)},n.resize=function(e){this.element.style.height=e+"px"},t}(u),W=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){var e,t,n;window.self!==window.top&&(C(this),t={},null===(n=(e=this).constructor.debounces)||void 0===n||n.forEach(n=>{if("string"==typeof n&&(e[n]=T(e[n],null==t?void 0:t.wait)),"object"==typeof n){const{name:r,wait:i}=n;if(!r)return;e[r]=T(e[r],i||(null==t?void 0:t.wait))}}),this.postUpdate())},n.windowResize=function(e){this.postUpdate()},n.postUpdate=function(){var e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")},n.getHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},t}(u);W.debounces=["postUpdate"];var q,$=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.cleanupSelf=function(){this.cleanup(this.element)},n.cleanup=function(e){var t,n,r,o=this;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp("(s|^)"+this.identifier+"(s|$)","g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;var s=new RegExp("(s|^)"+this.identifier+"\\..+?(s|$)","g");e.dataset.target=(null==(n=e.dataset.target)?void 0:n.replaceAll(s,""))||"",delete e.dataset[i.default(this.identifier+"-target")],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(r=e.dataset.target)?void 0:r.replaceAll(s,""))||"",delete e.dataset[i.default(this.identifier+"-action")],""==e.dataset.action&&delete e.dataset.action;var a=this.constructor.values;a&&Object.keys(a).forEach(function(t){return delete e.dataset[i.default(o.identifier+"-"+t+"-value")]});var l=this.constructor.classes;l&&Object.keys(l).forEach(function(t){return delete e.dataset[i.default(o.identifier+"-"+t+"-class")]})},t}(u),_=function(e,t){var n=void 0===t?{}:t,r=n.behavior,i=void 0===r?"smooth":r,o=n.block,s=void 0===o?"start":o,a=n.inline,l=void 0===a?"nearest":a;try{var c=function(){e.scrollIntoView({behavior:i,block:s,inline:l})},u=function(){if("smooth"==i&&!U)return Promise.resolve(function(){try{return Promise.resolve(import("smoothscroll-polyfill")).then(function(e){q||(q=!0,(0,e.polyfill)())})}catch(e){return Promise.reject(e)}}()).then(function(){})}();return Promise.resolve(u&&u.then?u.then(c):c())}catch(e){return Promise.reject(e)}},U="scrollBehavior"in document.documentElement.style;function Y(e){if(!e)return null;var t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:Y(e.parentElement)||document.body}var G=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.connect=function(){var e=this;requestAnimationFrame(function(){_(e.element,{behavior:e.hasBehaviorValue?e.behaviorValue:"smooth",block:e.hasBlockValue?e.blockValue:"center",inline:e.hasInlineValue?e.inlineValue:"center"}).catch(function(){return e.element.scrollIntoView()}),e.cleanupSelf()})},t}($);G.values={behavior:String,block:String,inline:String};var J=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:Y(this.element))&&_(t,{behavior:"smooth",block:"end"}).catch(function(){return t.scrollIntoView(!1)})},t}(u);J.values={mode:String};var K=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.scroll=function(){var e=document.querySelector(this.selectorValue);e?_(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(function(){return e.scrollIntoView()}):console.warn("Could not find target for '"+this.selectorValue+"'")},t}(u);K.values={selector:String,behavior:String,block:String,inline:String};var Q=function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:Y(this.element))&&_(t,{behavior:"smooth",block:"start"}).catch(function(){return t.scrollIntoView(!1)})},t}(u);Q.values={mode:String};var X=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).timeout=null,t}l(t,e);var n=t.prototype;return n.connect=function(){var e=this;requestAnimationFrame(function(){e.timeout=setTimeout(function(){return e.element.remove()},1e3*e.secondsValue)})},n.disconnect=function(){this.timeout&&clearTimeout(this.timeout)},t}(u);X.values={seconds:Number};var Z=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(function(){e.hasImmediateValue&&e.immediateValue&&e.execute()})},n.execute=function(e){e&&e.preventDefault();var t=document.querySelector(this.targetValue);if(null!=t){var n=this.element.cloneNode(!0);switch(this.cleanup(n),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":t.insertAdjacentHTML(this.insertValue,n.outerHTML);break;case"replaceOuter":t.outerHTML=n.outerHTML;break;case"replaceInner":t.innerHTML=n.outerHTML;break;case"prepend":t.insertAdjacentHTML("afterbegin",n.outerHTML);break;case"append":t.insertAdjacentHTML("beforeend",n.outerHTML);break;default:throw new Error("`insert` value was not specified")}this.element.remove()}else this.element.dispatchEvent(new CustomEvent("teleport:error",{bubbles:!0,cancelable:!0}))},t}($);Z.values={target:String,insert:String,immediate:Boolean};var ee=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new E(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:n,dispatchEvent:r,events:i,eventPrefix:o}=Object.assign({},m,t),s=i=>{const s=(null==t?void 0:t.element)||e.element;if(!(s.contains(i.target)||!function(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth;return t.top<=n&&t.top+t.height>=0&&t.left<=r&&t.left+t.width>=0}(s)&&n)&&(e.clickOutside&&e.clickOutside(i),r)){const t=p("click:outside",e,o),n=v(t,i,{controller:e});s.dispatchEvent(n)}},a=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==i||i.forEach(e=>{window.removeEventListener(e,s,!1)}),a()}}),null==i||i.forEach(e=>{window.addEventListener(e,s,!1)})})(this),requestAnimationFrame(function(){e.hasInitialValue&&e.toggleTargets.forEach("on"===e.initialValue?function(t){return e.elementOn(t)}:function(t){return e.elementOff(t)})})},n.clickOutside=function(){var e=this;this.toggleTargets.forEach(function(t){e.elementWasToggled(t)&&(e.elementToggleStatus(t),e.elementToggle(t))})},n.mouseEnter=function(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.mouseLeave=function(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.on=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOn(e)})},n.off=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOff(e)})},n.toggle=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementToggle(e)})},n.elementWasToggled=function(e){return"true"==e.dataset.toggled},n.elementToggleStatus=function(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"},n.elementToggle=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t)})},n.elementOn=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!0)})},n.elementOff=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!1)})},t}(u);ee.targets=["toggle"],ee.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};var te=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.toggle=function(e){e&&e.preventDefault();var t=this.getFrame().src;null==t||t!==this.getSrc()?this.setSrc():this.clear()},n.setSrc=function(e){e&&e.preventDefault();var t=this.getFrame();this.hasLoadingMessageValue&&(t.innerHTML=this.loadingMessageValue),t.src=this.getSrc()},n.clear=function(e){e&&e.preventDefault();var t=this.getFrame();t.src="",t.innerHTML=""},n.getFrame=function(){var e=document.getElementById(""+this.frameIdValue);if(null==e)throw new Error("Could not find frame with ID '"+this.frameIdValue+"'");if("TURBO-FRAME"!=e.nodeName)throw new Error("Element targeted by ID '"+this.frameIdValue+"'");return e},n.getSrc=function(){var e=this.element;if(this.hasSrcValue)return this.srcValue;if(function(e){return"A"==e.nodeName}(e))return e.href;throw new Error("No link given to drive frame to")},t}(u);te.values={frameId:String,src:String,loadingMessage:String};var ne=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateWordCount.bind(c(t)),t}l(t,e);var n=t.prototype;return n.connect=function(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateWordCount=function(){var e=0,t=this.inputTarget.value.match(/\S+/g);this.outputTarget.innerText=(e=t&&t.length||0).toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(u);ne.targets=["input","output"],ne.values={min:Number,max:Number},ne.classes=["error"],e.AsyncBlockController=h,e.AutoSubmitFormController=d,e.AutosizeController=V,e.CharCountController=k,e.CheckboxSelectAllController=L,e.ClipboardController=S,e.ConfirmNavigationController=H,e.DebugController=I,e.DetectDirtyController=x,e.DisableInputsController=M,e.DismissableController=D,e.EmptyDomController=O,e.EnableInputsController=A,e.FallbackImageController=P,e.LazyBlockController=R,e.LimitedSelectionCheckboxesController=j,e.NestedFormController=N,e.PasswordConfirmController=F,e.PasswordPeekController=B,e.ResponsiveIframeBodyController=W,e.ResponsiveIframeWrapperController=z,e.ScrollIntoFocusController=G,e.ScrollToBottomController=J,e.ScrollToController=K,e.ScrollToTopController=Q,e.SelfDestructController=X,e.TeleportController=Z,e.ToggleClassController=ee,e.TurboFrameRCController=te,e.WordCountController=ne});
//# sourceMappingURL=stimulus-library.umd.js.map
