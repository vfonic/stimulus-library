"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[3667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"useIntersection",title:"useIntersection"},i=void 0,o={unversionedId:"mixins/useIntersection",id:"mixins/useIntersection",title:"useIntersection",description:"Purpose",source:"@site/docs/mixins/use_intersection.mdx",sourceDirName:"mixins",slug:"/mixins/useIntersection",permalink:"/stimulus-library/docs/mixins/useIntersection",draft:!1,tags:[],version:"current",frontMatter:{id:"useIntersection",title:"useIntersection"},sidebar:"DocsSidebar",previous:{title:"useInjectedHTML",permalink:"/stimulus-library/docs/mixins/useInjectedHTML"},next:{title:"useInterval",permalink:"/stimulus-library/docs/mixins/useInterval"}},s={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"Usage",id:"usage",level:2},{value:"useIntersection",id:"useintersection",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useIntersection")," hook allows you to observe the intersection of a target element with an ancestor element or with a top-level document's viewport."),(0,a.kt)("p",null,"This behavior is built on top of the Intersection Observer API. See ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API")," for more information."),(0,a.kt)("h2",{id:"side-effects"},"Side Effects"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useIntersection")," hook will create an ",(0,a.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," instance when the hook is called. The ",(0,a.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," instance will be destroyed when the component unmounts."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"useintersection"},"useIntersection"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"controller")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Controller")),(0,a.kt)("td",{parentName:"tr",align:null},"The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,a.kt)("inlineCode",{parentName:"td"},"disconnect"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"this"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"element")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HTMLElement")),(0,a.kt)("td",{parentName:"tr",align:null},"The element to observe."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"appear"),"  (Optional)"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"The callback to invoke when the element scrolls into the viewport. Accepts a single parameter of type ",(0,a.kt)("inlineCode",{parentName:"td"},"IntersectionObserverEntry")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"disappear")," (Optional)"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"The callback to invoke when the element scrolls out of the viewport. Accepts a single parameter of type ",(0,a.kt)("inlineCode",{parentName:"td"},"IntersectionObserverEntry")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"options")," (Optional)"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IntersectionObserverInit")),(0,a.kt)("td",{parentName:"tr",align:null},"The raw options to pass to initialize the IntersectionObserver"),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);