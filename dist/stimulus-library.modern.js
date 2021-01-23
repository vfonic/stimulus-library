import{Controller as e}from"stimulus";import t from"lodash.camelcase";function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}class n extends e{constructor(e){return super(e),new Proxy(this,{get:(e,t)=>{let s=Reflect.get(e,t),n=this;if(function(e){switch(e){case"application":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof s)return new Proxy(s,{apply:(e,s,i)=>(n.log(t.toString(),{args:i}),Reflect.apply(e,s,i))});this.log(t.toString())}return s}})}log(e,t={}){if(!this.application.debug)return;let n=console;n.groupCollapsed(`%c${this.identifier} %c#${e}`,"color: #3B82F6","color: unset"),n.log(s({element:this.element},t)),n.groupEnd()}}class i extends n{connect(){this.loadContent()}loadContent(){let e=this.hasReplaceTarget?this.replaceTarget:this.element;fetch(this.endpointValue).then(e=>e.text()).then(t=>{let s=document.createElement("div");s.innerHTML=t,e.replaceWith(s);let n=new CustomEvent("ajax:success",{detail:""});e.dispatchEvent(n)}).catch(t=>{e.replaceWith("Sorry, this content failed to load");let s=new CustomEvent("ajax:error",{detail:""});e.dispatchEvent(s)}).finally(()=>{let t=new CustomEvent("ajax:complete",{detail:""});e.dispatchEvent(t)})}}i.targets=["replace"],i.values={endpoint:String};class a extends n{constructor(){super(...arguments),this.boundHandler=this.handler.bind(this)}connect(){this.element.querySelectorAll("input, select, textarea").forEach(e=>e.addEventListener("change",this.boundHandler))}disconnect(){this.element.querySelectorAll("input, select, textarea").forEach(e=>e.removeEventListener("change",this.boundHandler))}handler(e){this.element.dispatchEvent(new CustomEvent("submit",{bubbles:!0,cancelable:!0}))}}const l=(e,t)=>{const s=e[t];return"function"==typeof s?s:(...e)=>{}},o=(e,t,s)=>{let n=e;return!0===s?n=`${t.identifier}:${e}`:"string"==typeof s&&(n=`${s}:${e}`),n},r=(e,t,s)=>{const{bubbles:n,cancelable:i,composed:a}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(s,{originalEvent:t}),new CustomEvent(e,{bubbles:n,cancelable:i,composed:a,detail:s})},c={dispatchEvent:!0,eventPrefix:!0},h={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},d={debug:!1,logger:console};class u{constructor(e,t={}){var s,n,i;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(n=null!==(s=null==t?void 0:t.debug)&&void 0!==s?s:e.application.stimulusUseDebug)&&void 0!==n?n:d.debug,this.logger=null!==(i=null==t?void 0:t.logger)&&void 0!==i?i:d.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class g extends u{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{l(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{l(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class m extends u{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{l(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const p=e=>{const t=t=>{const{innerWidth:s,innerHeight:n}=window,i={height:n||Infinity,width:s||Infinity,event:t};l(e,"windowResize").call(e,i)},s=e.disconnect.bind(e),n=()=>{window.addEventListener("resize",t),t()},i=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){i(),s()}}),n(),[n,i]},b=(e,t=200)=>{let s=null;return function(){const n=arguments,i=this,a=()=>e.apply(i,n);s&&clearTimeout(s),s=setTimeout(a,t)}};class v extends n{constructor(){super(...arguments),this.boundHandler=this.handler.bind(this)}connect(){let e=this.element;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this.boundHandler),e.addEventListener("focus",this.boundHandler),p(this),requestAnimationFrame(this.boundHandler)}windowResize(){this.handler()}handler(){this.autosize(this.element)}autosize(e){let t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"}}class f extends n{constructor(){super(...arguments),this.boundHandler=this.updateCharCount.bind(this)}connect(){this.updateCharCount(),this.inputTarget.addEventListener("input",this.boundHandler)}disconnect(){this.inputTarget.removeEventListener("input",this.boundHandler)}updateCharCount(){let e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))}isValidCount(e){let t=0,s=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(s=this.maxValue),e>=t&&e<=s}}f.targets=["input","output"],f.values={min:Number,max:Number},f.classes=["error"];class E extends n{constructor(){super(...arguments),this.supported=!1}connect(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())}select(e){e&&e.preventDefault(),this.sourceTarget.select()}copy(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")}}E.targets=["button","copy","fallback"],E.values={removeUnused:Boolean};class w extends n{connect(){let e=this.messageValue;window.onbeforeunload=()=>null==e||e,window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",()=>{window.removeEventListener("popstate",this.handlePopstate),window.onbeforeunload=null})}handlePopstate(e){return!1}}w.values={message:String};class y extends n{connect(){console.log("Debug Controller",this,this.testTargets)}}y.targets=["test"];class T extends n{constructor(){super(...arguments),this.initialValue=null,this.boundHandler=this.handler.bind(this)}connect(){let e=this.element;this.initialValue=this.isInputElement(e)&&this.isCheckable(e)?e.checked:e.value,e.addEventListener("input",this.boundHandler),e.addEventListener("change",this.boundHandler)}disconnect(){let e=this.element;e.removeEventListener("input",this.boundHandler),e.removeEventListener("change",this.boundHandler)}restore(){let e=this.element;this.isInputElement(e)&&this.isCheckable(e)?e.checked=this.initialValue:e.value=this.initialValue}handler(e){let t=this.element;this.initialValue!==t.value?t.setAttribute("data-dirty","true"):t.removeAttribute("data-dirty")}isCheckable(e){return"radio"===e.type||"checkbox"===e.type}isInputElement(e){return"INPUT"===e.tagName}}class V extends n{connect(){this.toggle()}toggle(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()}disableInputs(){this.disableTargets.forEach((e,t)=>{e.disabled=!0})}enableInputs(){this.disableTargets.forEach((e,t)=>{e.disabled=!1})}}V.targets=["disabler","disable"];class C extends n{dismiss(){this.element.remove()}}class x extends n{connect(){((e,t={})=>{new m(this,t)})(0,{element:this.element,childList:!0}),this.checkEmpty()}mutate(e){this.checkEmpty()}checkEmpty(){let e;e=this.hasScopeSelectorValue?this.element.querySelectorAll(this.scopeSelectorValue):this.element.children,0===e.length?(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(e=>this.element.classList.remove(e)),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(e=>this.element.classList.add(e)),this.element.dispatchEvent(new CustomEvent("dom:empty",{bubbles:!0,cancelable:!0}))):(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(e=>this.element.classList.add(e)),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(e=>this.element.classList.remove(e)),this.element.dispatchEvent(new CustomEvent("dom:not-empty",{bubbles:!0,cancelable:!0})))}}x.classes=["empty","notEmpty"],x.values={scopeSelector:String};class L extends n{connect(){this.toggle()}toggle(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()}disableInputs(){this.enableTargets.forEach((e,t)=>{e.disabled=!0})}enableInputs(){this.enableTargets.forEach((e,t)=>{e.disabled=!1})}}L.targets=["enabler","enable"];class k extends n{connect(){let e=this.element;e.onerror=()=>{this.hasPlaceholderValue?e.src=this.placeholderValue:e.style.display="none"}}}k.values={placeholder:String};class H extends i{connect(){this.options={element:this.element,threshold:.3},"IntersectionObserver"in window?[this.observe,this.unobserve]=((e,t={})=>{const{dispatchEvent:s,eventPrefix:n}=Object.assign({},c,t),i=(null==t?void 0:t.element)||e.element,a=e.disconnect.bind(e),h=new IntersectionObserver(t=>{const[a]=t;a.isIntersecting?(t=>{if(e.isVisible=!0,l(e,"appear").call(e,t),s){const s=o("appear",e,n),a=r(s,null,{controller:e,entry:t});i.dispatchEvent(a)}})(a):e.isVisible&&(t=>{if(e.isVisible=!1,l(e,"disappear").call(e,t),s){const s=o("disappear",e,n),a=r(s,null,{controller:e,entry:t});i.dispatchEvent(a)}})(a)},t),d=()=>{h.observe(i)},u=()=>{h.unobserve(i)};return Object.assign(e,{isVisible:!1,disconnect(){u(),a()}}),d(),[d,u]})(this,this.options):this.loadContent()}appear(e){let t=this.element;""===t.src&&e.target===t&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())}}class S extends n{constructor(){super(...arguments),this.maxSelections=0,this.boundHandleInputs=this.handleInputs.bind(this)}connect(){this.inputTargets.forEach(e=>e.addEventListener("change",this.boundHandleInputs))}disconnect(){this.inputTargets.forEach(e=>e.removeEventListener("change",this.boundHandleInputs))}handleInputs(e){let t=this.inputTargets.reduce((e,t)=>t.checked?e+1:e,0),s=e.target;t>this.maxSelections?(e.preventDefault(),s.checked=!1,s.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0})),s.dispatchEvent(new CustomEvent("limited-selection:too-many",{bubbles:!0,cancelable:!0,detail:{target:s}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(s.dispatchEvent(new CustomEvent("limited-selection:selection",{bubbles:!0,cancelable:!0,detail:{target:s}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))}}S.targets=["input","error"],S.values={max:Number,message:String};class I extends n{constructor(){super(...arguments),this.boundCheckPasswordsMatch=this.checkPasswordsMatch.bind(this)}connect(){this.passwordTargets.forEach(e=>e.addEventListener("change",this.boundCheckPasswordsMatch))}disconnect(){this.passwordTargets.forEach(e=>e.removeEventListener("change",this.boundCheckPasswordsMatch))}allPasswordsMatch(){let e=new Set(this.passwordTargets.map(e=>e.value));return e.has("")||1==e.size}checkPasswordsMatch(){this.allPasswordsMatch()?(this.element.dispatchEvent(new CustomEvent("password-confirm:match")),this.hasErrorClass&&this.passwordTargets.forEach(e=>e.classList.remove(this.errorClass))):(this.element.dispatchEvent(new CustomEvent("password-confirm:no-match")),this.hasErrorClass&&this.passwordTargets.forEach(e=>e.classList.add(this.errorClass)))}}I.targets=["password"],I.classes=["error"];class M extends n{peak(e){e&&e.preventDefault(),this.passwordTarget.type="text"}hide(e){e&&e.preventDefault(),this.passwordTarget.type="password"}toggle(e){e&&e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()}}M.targets=["password"];class O extends n{constructor(){super(...arguments),this.boundMessageReceived=this.messageReceived.bind(this)}connect(){window.addEventListener("message",this.boundMessageReceived)}disconnect(){window.removeEventListener("message",this.boundMessageReceived)}messageReceived(e){let t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)}resize(e){this.element.style.height=`${e}px`}}class $ extends n{connect(){var e,t,s;window.self!==window.top&&(p(this),t={},null===(s=(e=this).constructor.debounces)||void 0===s||s.forEach(s=>{if("string"==typeof s&&(e[s]=b(e[s],null==t?void 0:t.wait)),"object"==typeof s){const{name:n,wait:i}=s;if(!n)return;e[n]=b(e[n],i||(null==t?void 0:t.wait))}}),this.postUpdate())}windowResize(e){this.postUpdate()}postUpdate(){let e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")}getHeight(){const e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}}$.debounces=["postUpdate"];class P extends n{cleanupSelf(){this.cleanup(this.element)}cleanup(e){var s,n,i;e.dataset.controller=(null==(s=e.dataset.controller)?void 0:s.replaceAll(new RegExp(`(s|^)${this.identifier}(s|$)`,"g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;let a=new RegExp(`(s|^)${this.identifier}\\..+?(s|$)`,"g");e.dataset.target=(null==(n=e.dataset.target)?void 0:n.replaceAll(a,""))||"",delete e.dataset[t(`${this.identifier}-target`)],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(i=e.dataset.target)?void 0:i.replaceAll(a,""))||"",delete e.dataset[t(`${this.identifier}-action`)],""==e.dataset.action&&delete e.dataset.action;let l=this.constructor.values;l&&Object.keys(l).forEach(s=>delete e.dataset[t(`${this.identifier}-${s}-value`)]);let o=this.constructor.classes;o&&Object.keys(o).forEach(s=>delete e.dataset[t(`${this.identifier}-${s}-class`)])}}const j="scrollBehavior"in document.documentElement.style;let A;async function z(e,{behavior:t="smooth",block:s="start",inline:n="nearest"}={}){"smooth"!=t||j||await async function(){const{polyfill:e}=await import("smoothscroll-polyfill");A||(A=!0,e())}(),e.scrollIntoView({behavior:t,block:s,inline:n})}function D(e){if(!e)return null;const t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:D(e.parentElement)||document.body}class R extends P{connect(){requestAnimationFrame(()=>{z(this.element,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(()=>this.element.scrollIntoView()),this.cleanupSelf()})}}R.values={behavior:String,block:String,inline:String};class q extends n{scroll(e){let t;e&&e.preventDefault(),t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:D(this.element),null!=t&&z(t,{behavior:"smooth",block:"end"}).catch(()=>t.scrollIntoView(!1))}}q.values={mode:String};class B extends n{scroll(){let e=document.querySelector(this.selectorValue);e?z(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(()=>e.scrollIntoView()):console.warn(`Could not find target for '${this.selectorValue}'`)}}B.values={selector:String,behavior:String,block:String,inline:String};class N extends n{scroll(e){let t;e&&e.preventDefault(),t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:D(this.element),null!=t&&z(t,{behavior:"smooth",block:"start"}).catch(()=>t.scrollIntoView(!1))}}N.values={mode:String};class W extends n{constructor(){super(...arguments),this.timeout=null}connect(){requestAnimationFrame(()=>{this.timeout=setTimeout(()=>this.element.remove(),1e3*this.secondsValue)})}disconnect(){this.timeout&&clearTimeout(this.timeout)}}W.values={seconds:Number};class U extends P{connect(){if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(()=>{this.hasImmediateValue&&this.immediateValue&&this.execute()})}execute(e){e&&e.preventDefault();let t=document.querySelector(this.targetValue);if(null==t)return void this.element.dispatchEvent(new CustomEvent("teleport:error",{bubbles:!0,cancelable:!0}));let s=this.element.cloneNode(!0);switch(this.cleanup(s),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":t.insertAdjacentHTML(this.insertValue,s.outerHTML);break;case"replaceOuter":t.outerHTML=s.outerHTML;break;case"replaceInner":t.innerHTML=s.outerHTML;break;case"prepend":t.insertAdjacentHTML("afterbegin",s.outerHTML);break;case"append":t.insertAdjacentHTML("beforeend",s.outerHTML);break;default:throw new Error("`insert` value was not specified")}this.element.remove()}}U.values={target:String,insert:String,immediate:Boolean};class F extends n{connect(){if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new g(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:s,dispatchEvent:n,events:i,eventPrefix:a}=Object.assign({},h,t),l=i=>{const l=(null==t?void 0:t.element)||e.element;if(!(l.contains(i.target)||!function(e){const t=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth;return t.top<=s&&t.top+t.height>=0&&t.left<=n&&t.left+t.width>=0}(l)&&s)&&(e.clickOutside&&e.clickOutside(i),n)){const t=o("click:outside",e,a),s=r(t,i,{controller:e});l.dispatchEvent(s)}},c=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==i||i.forEach(e=>{window.removeEventListener(e,l,!1)}),c()}}),null==i||i.forEach(e=>{window.addEventListener(e,l,!1)})})(this),requestAnimationFrame(()=>{this.hasInitialValue&&this.toggleTargets.forEach("on"===this.initialValue?e=>this.elementOn(e):e=>this.elementOff(e))})}clickOutside(){this.toggleTargets.forEach(e=>{this.elementWasToggled(e)&&(this.elementToggleStatus(e),this.elementToggle(e))})}mouseEnter(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}}mouseLeave(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}}on(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementOn(e)})}off(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementOff(e)})}toggle(e){this.toggleTargets.forEach(e=>{this.elementToggleStatus(e),this.elementToggle(e)})}elementWasToggled(e){return"true"==e.dataset.toggled}elementToggleStatus(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"}elementToggle(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t))}elementOn(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t,!0))}elementOff(e){this.classValue.split(" ").forEach(t=>e.classList.toggle(t,!1))}}F.targets=["toggle"],F.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};class Y extends n{constructor(){super(...arguments),this.boundHandler=this.updateWordCount.bind(this)}connect(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.boundHandler)}disconnect(){this.inputTarget.removeEventListener("input",this.boundHandler)}updateWordCount(){let e=0,t=this.inputTarget.value.match(/\S+/g);e=t&&t.length||0,this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))}isValidCount(e){let t=0,s=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(s=this.maxValue),e>=t&&e<=s}}Y.targets=["input","output"],Y.values={min:Number,max:Number},Y.classes=["error"];export{i as AsyncBlockController,a as AutoSubmitFormController,v as AutosizeController,f as CharCountController,E as ClipboardController,w as ConfirmNavigationController,y as DebugController,T as DetectDirtyController,V as DisableInputsController,C as DismissableController,x as EmptyDomController,L as EnableInputsController,k as FallbackImageController,H as LazyBlockController,S as LimitedSelectionCheckboxesController,I as PasswordConfirmController,M as PasswordPeekController,$ as ResponsiveIframeBodyController,O as ResponsiveIframeWrapperController,R as ScrollIntoFocusController,q as ScrollToBottomController,B as ScrollToController,N as ScrollToTopController,W as SelfDestructController,U as TeleportController,F as ToggleClassController,Y as WordCountController};
//# sourceMappingURL=stimulus-library.modern.js.map
