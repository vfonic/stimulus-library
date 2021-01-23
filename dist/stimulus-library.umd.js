!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("stimulus"),require("lodash.camelcase")):"function"==typeof define&&define.amd?define(["exports","stimulus","lodash.camelcase"],t):t((e||self).stimulusLibrary={},e.stimulus,e.camelCase)}(this,function(e,t,n){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=i(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){function t(t){var n;return n=e.call(this,t)||this,new Proxy(a(n),{get:function(e,t){var i=Reflect.get(e,t),r=a(n);if(function(e){switch(e){case"application":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof i)return new Proxy(i,{apply:function(e,n,i){return r.log(t.toString(),{args:i}),Reflect.apply(e,n,i)}});n.log(t.toString())}return i}})||a(n)}return s(t,e),t.prototype.log=function(e,t){if(void 0===t&&(t={}),this.application.debug){var n=console;n.groupCollapsed("%c"+this.identifier+" %c#"+e,"color: #3B82F6","color: unset"),n.log(o({element:this.element},t)),n.groupEnd()}},t}(t.Controller),c=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){this.loadContent()},n.loadContent=function(){var e=this.hasReplaceTarget?this.replaceTarget:this.element;fetch(this.endpointValue).then(function(e){return e.text()}).then(function(t){var n=document.createElement("div");n.innerHTML=t,e.replaceWith(n);var i=new CustomEvent("ajax:success",{detail:""});e.dispatchEvent(i)}).catch(function(t){e.replaceWith("Sorry, this content failed to load");var n=new CustomEvent("ajax:error",{detail:""});e.dispatchEvent(n)}).finally(function(){var t=new CustomEvent("ajax:complete",{detail:""});e.dispatchEvent(t)})},t}(l);c.targets=["replace"],c.values={endpoint:String};var u=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.addEventListener("change",e.boundHandler)})},n.disconnect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.removeEventListener("change",e.boundHandler)})},n.handler=function(e){this.element.dispatchEvent(new CustomEvent("submit",{bubbles:!0,cancelable:!0}))},t}(l);const h=(e,t)=>{const n=e[t];return"function"==typeof n?n:(...e)=>{}},d=(e,t,n)=>{let i=e;return!0===n?i=`${t.identifier}:${e}`:"string"==typeof n&&(i=`${n}:${e}`),i},p=(e,t,n)=>{const{bubbles:i,cancelable:r,composed:o}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(n,{originalEvent:t}),new CustomEvent(e,{bubbles:i,cancelable:r,composed:o,detail:n})},f={dispatchEvent:!0,eventPrefix:!0},v={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},m={debug:!1,logger:console};class g{constructor(e,t={}){var n,i,r;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(i=null!==(n=null==t?void 0:t.debug)&&void 0!==n?n:e.application.stimulusUseDebug)&&void 0!==i?i:m.debug,this.logger=null!==(r=null==t?void 0:t.logger)&&void 0!==r?r:m.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class b extends g{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{h(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{h(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class y extends g{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{h(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const E=e=>{const t=t=>{const{innerWidth:n,innerHeight:i}=window,r={height:i||Infinity,width:n||Infinity,event:t};h(e,"windowResize").call(e,r)},n=e.disconnect.bind(e),i=()=>{window.addEventListener("resize",t),t()},r=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){r(),n()}}),i(),[i,r]},w=(e,t=200)=>{let n=null;return function(){const i=arguments,r=this,o=()=>e.apply(r,i);n&&clearTimeout(n),n=setTimeout(o,t)}};var C=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this.boundHandler),e.addEventListener("focus",this.boundHandler),E(this),requestAnimationFrame(this.boundHandler)},n.windowResize=function(){this.handler()},n.handler=function(){this.autosize(this.element)},n.autosize=function(e){var t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"},t}(l),T=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateCharCount.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){this.updateCharCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateCharCount=function(){var e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(l);T.targets=["input","output"],T.values={min:Number,max:Number},T.classes=["error"];var V=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).supported=!1,t}s(t,e);var n=t.prototype;return n.connect=function(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())},n.select=function(e){e&&e.preventDefault(),this.sourceTarget.select()},n.copy=function(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")},t}(l);V.targets=["button","copy","fallback"],V.values={removeUnused:Boolean};var L=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){var e=this,t=this.messageValue;window.onbeforeunload=function(){return null==t||t},window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",function(){window.removeEventListener("popstate",e.handlePopstate),window.onbeforeunload=null})},n.handlePopstate=function(e){return!1},t}(l);L.values={message:String};var k=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.connect=function(){console.log("Debug Controller",this,this.testTargets)},t}(l);k.targets=["test"];var S=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).initialValue=null,t.boundHandler=t.handler.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;this.initialValue=this.isInputElement(e)&&this.isCheckable(e)?e.checked:e.value,e.addEventListener("input",this.boundHandler),e.addEventListener("change",this.boundHandler)},n.disconnect=function(){var e=this.element;e.removeEventListener("input",this.boundHandler),e.removeEventListener("change",this.boundHandler)},n.restore=function(){var e=this.element;this.isInputElement(e)&&this.isCheckable(e)?e.checked=this.initialValue:e.value=this.initialValue},n.handler=function(e){var t=this.element;this.initialValue!==t.value?t.setAttribute("data-dirty","true"):t.removeAttribute("data-dirty")},n.isCheckable=function(e){return"radio"===e.type||"checkbox"===e.type},n.isInputElement=function(e){return"INPUT"===e.tagName},t}(l),H=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()},n.disableInputs=function(){this.disableTargets.forEach(function(e,t){e.disabled=!0})},n.enableInputs=function(){this.disableTargets.forEach(function(e,t){e.disabled=!1})},t}(l);H.targets=["disabler","disable"];var I=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.dismiss=function(){this.element.remove()},t}(l),x=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){((e,t={})=>{new y(this,t)})(0,{element:this.element,childList:!0}),this.checkEmpty()},n.mutate=function(e){this.checkEmpty()},n.checkEmpty=function(){var e=this;0===(this.hasScopeSelectorValue?this.element.querySelectorAll(this.scopeSelectorValue):this.element.children).length?(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(t){return e.element.classList.remove(t)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(t){return e.element.classList.add(t)}),this.element.dispatchEvent(new CustomEvent("dom:empty",{bubbles:!0,cancelable:!0}))):(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(t){return e.element.classList.add(t)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(t){return e.element.classList.remove(t)}),this.element.dispatchEvent(new CustomEvent("dom:not-empty",{bubbles:!0,cancelable:!0})))},t}(l);x.classes=["empty","notEmpty"],x.values={scopeSelector:String};var M=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()},n.disableInputs=function(){this.enableTargets.forEach(function(e,t){e.disabled=!0})},n.enableInputs=function(){this.enableTargets.forEach(function(e,t){e.disabled=!1})},t}(l);M.targets=["enabler","enable"];var O=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.connect=function(){var e=this,t=this.element;t.onerror=function(){e.hasPlaceholderValue?t.src=e.placeholderValue:t.style.display="none"}},t}(l);O.values={placeholder:String};var P=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){if(this.options={element:this.element,threshold:.3},"IntersectionObserver"in window){var e=((e,t={})=>{const{dispatchEvent:n,eventPrefix:i}=Object.assign({},f,t),r=(null==t?void 0:t.element)||e.element,o=e.disconnect.bind(e),s=new IntersectionObserver(t=>{const[o]=t;o.isIntersecting?(t=>{if(e.isVisible=!0,h(e,"appear").call(e,t),n){const n=d("appear",e,i),o=p(n,null,{controller:e,entry:t});r.dispatchEvent(o)}})(o):e.isVisible&&(t=>{if(e.isVisible=!1,h(e,"disappear").call(e,t),n){const n=d("disappear",e,i),o=p(n,null,{controller:e,entry:t});r.dispatchEvent(o)}})(o)},t),a=()=>{s.observe(r)},l=()=>{s.unobserve(r)};return Object.assign(e,{isVisible:!1,disconnect(){l(),o()}}),a(),[a,l]})(this,this.options);this.observe=e[0],this.unobserve=e[1]}else this.loadContent()},n.appear=function(e){var t=this.element;""===t.src&&e.target===t&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())},t}(c),j=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).maxSelections=0,t.boundHandleInputs=t.handleInputs.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.inputTargets.forEach(function(t){return t.addEventListener("change",e.boundHandleInputs)})},n.disconnect=function(){var e=this;this.inputTargets.forEach(function(t){return t.removeEventListener("change",e.boundHandleInputs)})},n.handleInputs=function(e){var t=this.inputTargets.reduce(function(e,t){return t.checked?e+1:e},0),n=e.target;t>this.maxSelections?(e.preventDefault(),n.checked=!1,n.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0})),n.dispatchEvent(new CustomEvent("limited-selection:too-many",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(n.dispatchEvent(new CustomEvent("limited-selection:selection",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))},t}(l);j.targets=["input","error"],j.values={max:Number,message:String};var A=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundCheckPasswordsMatch=t.checkPasswordsMatch.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.addEventListener("change",e.boundCheckPasswordsMatch)})},n.disconnect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.removeEventListener("change",e.boundCheckPasswordsMatch)})},n.allPasswordsMatch=function(){var e=new Set(this.passwordTargets.map(function(e){return e.value}));return e.has("")||1==e.size},n.checkPasswordsMatch=function(){var e=this;this.allPasswordsMatch()?(this.element.dispatchEvent(new CustomEvent("password-confirm:match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.remove(e.errorClass)})):(this.element.dispatchEvent(new CustomEvent("password-confirm:no-match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.add(e.errorClass)}))},t}(l);A.targets=["password"],A.classes=["error"];var D=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.peak=function(e){e&&e.preventDefault(),this.passwordTarget.type="text"},n.hide=function(e){e&&e.preventDefault(),this.passwordTarget.type="password"},n.toggle=function(e){e&&e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()},t}(l);D.targets=["password"];var R=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundMessageReceived=t.messageReceived.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){window.addEventListener("message",this.boundMessageReceived)},n.disconnect=function(){window.removeEventListener("message",this.boundMessageReceived)},n.messageReceived=function(e){var t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)},n.resize=function(e){this.element.style.height=e+"px"},t}(l),z=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){var e,t,n;window.self!==window.top&&(E(this),t={},null===(n=(e=this).constructor.debounces)||void 0===n||n.forEach(n=>{if("string"==typeof n&&(e[n]=w(e[n],null==t?void 0:t.wait)),"object"==typeof n){const{name:i,wait:r}=n;if(!i)return;e[i]=w(e[i],r||(null==t?void 0:t.wait))}}),this.postUpdate())},n.windowResize=function(e){this.postUpdate()},n.postUpdate=function(){var e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")},n.getHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},t}(l);z.debounces=["postUpdate"];var B,q=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.cleanupSelf=function(){this.cleanup(this.element)},n.cleanup=function(e){var t,n,i,o=this;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp("(s|^)"+this.identifier+"(s|$)","g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;var s=new RegExp("(s|^)"+this.identifier+"\\..+?(s|$)","g");e.dataset.target=(null==(n=e.dataset.target)?void 0:n.replaceAll(s,""))||"",delete e.dataset[r.default(this.identifier+"-target")],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(i=e.dataset.target)?void 0:i.replaceAll(s,""))||"",delete e.dataset[r.default(this.identifier+"-action")],""==e.dataset.action&&delete e.dataset.action;var a=this.constructor.values;a&&Object.keys(a).forEach(function(t){return delete e.dataset[r.default(o.identifier+"-"+t+"-value")]});var l=this.constructor.classes;l&&Object.keys(l).forEach(function(t){return delete e.dataset[r.default(o.identifier+"-"+t+"-class")]})},t}(l),W=function(e,t){var n=void 0===t?{}:t,i=n.behavior,r=void 0===i?"smooth":i,o=n.block,s=void 0===o?"start":o,a=n.inline,l=void 0===a?"nearest":a;try{var c=function(){e.scrollIntoView({behavior:r,block:s,inline:l})},u=function(){if("smooth"==r&&!N)return Promise.resolve(function(){try{return Promise.resolve(import("smoothscroll-polyfill")).then(function(e){B||(B=!0,(0,e.polyfill)())})}catch(e){return Promise.reject(e)}}()).then(function(){})}();return Promise.resolve(u&&u.then?u.then(c):c())}catch(e){return Promise.reject(e)}},N="scrollBehavior"in document.documentElement.style;function $(e){if(!e)return null;var t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:$(e.parentElement)||document.body}var F=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.connect=function(){var e=this;requestAnimationFrame(function(){W(e.element,{behavior:e.hasBehaviorValue?e.behaviorValue:"smooth",block:e.hasBlockValue?e.blockValue:"center",inline:e.hasInlineValue?e.inlineValue:"center"}).catch(function(){return e.element.scrollIntoView()}),e.cleanupSelf()})},t}(q);F.values={behavior:String,block:String,inline:String};var U=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:$(this.element))&&W(t,{behavior:"smooth",block:"end"}).catch(function(){return t.scrollIntoView(!1)})},t}(l);U.values={mode:String};var _=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.scroll=function(){var e=document.querySelector(this.selectorValue);e?W(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(function(){return e.scrollIntoView()}):console.warn("Could not find target for '"+this.selectorValue+"'")},t}(l);_.values={selector:String,behavior:String,block:String,inline:String};var Y=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:$(this.element))&&W(t,{behavior:"smooth",block:"start"}).catch(function(){return t.scrollIntoView(!1)})},t}(l);Y.values={mode:String};var G=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).timeout=null,t}s(t,e);var n=t.prototype;return n.connect=function(){var e=this;requestAnimationFrame(function(){e.timeout=setTimeout(function(){return e.element.remove()},1e3*e.secondsValue)})},n.disconnect=function(){this.timeout&&clearTimeout(this.timeout)},t}(l);G.values={seconds:Number};var J=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(function(){e.hasImmediateValue&&e.immediateValue&&e.execute()})},n.execute=function(e){e&&e.preventDefault();var t=document.querySelector(this.targetValue);if(null!=t){var n=this.element.cloneNode(!0);switch(this.cleanup(n),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":t.insertAdjacentHTML(this.insertValue,n.outerHTML);break;case"replaceOuter":t.outerHTML=n.outerHTML;break;case"replaceInner":t.innerHTML=n.outerHTML;break;case"prepend":t.insertAdjacentHTML("afterbegin",n.outerHTML);break;case"append":t.insertAdjacentHTML("beforeend",n.outerHTML);break;default:throw new Error("`insert` value was not specified")}this.element.remove()}else this.element.dispatchEvent(new CustomEvent("teleport:error",{bubbles:!0,cancelable:!0}))},t}(q);J.values={target:String,insert:String,immediate:Boolean};var K=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new b(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:n,dispatchEvent:i,events:r,eventPrefix:o}=Object.assign({},v,t),s=r=>{const s=(null==t?void 0:t.element)||e.element;if(!(s.contains(r.target)||!function(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return t.top<=n&&t.top+t.height>=0&&t.left<=i&&t.left+t.width>=0}(s)&&n)&&(e.clickOutside&&e.clickOutside(r),i)){const t=d("click:outside",e,o),n=p(t,r,{controller:e});s.dispatchEvent(n)}},a=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==r||r.forEach(e=>{window.removeEventListener(e,s,!1)}),a()}}),null==r||r.forEach(e=>{window.addEventListener(e,s,!1)})})(this),requestAnimationFrame(function(){e.hasInitialValue&&e.toggleTargets.forEach("on"===e.initialValue?function(t){return e.elementOn(t)}:function(t){return e.elementOff(t)})})},n.clickOutside=function(){var e=this;this.toggleTargets.forEach(function(t){e.elementWasToggled(t)&&(e.elementToggleStatus(t),e.elementToggle(t))})},n.mouseEnter=function(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.mouseLeave=function(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.on=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOn(e)})},n.off=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOff(e)})},n.toggle=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementToggle(e)})},n.elementWasToggled=function(e){return"true"==e.dataset.toggled},n.elementToggleStatus=function(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"},n.elementToggle=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t)})},n.elementOn=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!0)})},n.elementOff=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!1)})},t}(l);K.targets=["toggle"],K.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};var Q=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateWordCount.bind(a(t)),t}s(t,e);var n=t.prototype;return n.connect=function(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateWordCount=function(){var e=0,t=this.inputTarget.value.match(/\S+/g);this.outputTarget.innerText=(e=t&&t.length||0).toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(l);Q.targets=["input","output"],Q.values={min:Number,max:Number},Q.classes=["error"],e.AsyncBlockController=c,e.AutoSubmitFormController=u,e.AutosizeController=C,e.CharCountController=T,e.ClipboardController=V,e.ConfirmNavigationController=L,e.DebugController=k,e.DetectDirtyController=S,e.DisableInputsController=H,e.DismissableController=I,e.EmptyDomController=x,e.EnableInputsController=M,e.FallbackImageController=O,e.LazyBlockController=P,e.LimitedSelectionCheckboxesController=j,e.PasswordConfirmController=A,e.PasswordPeekController=D,e.ResponsiveIframeBodyController=z,e.ResponsiveIframeWrapperController=R,e.ScrollIntoFocusController=F,e.ScrollToBottomController=U,e.ScrollToController=_,e.ScrollToTopController=Y,e.SelfDestructController=G,e.TeleportController=J,e.ToggleClassController=K,e.WordCountController=Q});
//# sourceMappingURL=stimulus-library.umd.js.map
