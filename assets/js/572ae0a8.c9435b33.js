"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[1697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"useInterval",title:"useInterval"},i=void 0,o={unversionedId:"mixins/useInterval",id:"mixins/useInterval",title:"useInterval",description:"Purpose",source:"@site/docs/mixins/use_interval.mdx",sourceDirName:"mixins",slug:"/mixins/useInterval",permalink:"/stimulus-library/docs/mixins/useInterval",draft:!1,tags:[],version:"current",frontMatter:{id:"useInterval",title:"useInterval"},sidebar:"DocsSidebar",previous:{title:"useIntersection",permalink:"/stimulus-library/docs/mixins/useIntersection"},next:{title:"useLocalStorage",permalink:"/stimulus-library/docs/mixins/useLocalStorage"}},u={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"Usage",id:"usage",level:2},{value:"useInterval",id:"useinterval",level:3},{value:"How to Use",id:"how-to-use",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Set a function that will be called periodically at the given interval, and automatically cleaned up on controller ",(0,a.kt)("inlineCode",{parentName:"p"},"disconnect"),".\nAutomatically sets the correct Javascript binding so that ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," inside the event listener corresponds to the controller instance."),(0,a.kt)("h2",{id:"side-effects"},"Side Effects"),(0,a.kt)("p",null,"The controller will use ",(0,a.kt)("inlineCode",{parentName:"p"},"setInterval")," to register the given callback at the provided interval."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"useinterval"},"useInterval"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"controller")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Controller")),(0,a.kt)("td",{parentName:"tr",align:null},"The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,a.kt)("inlineCode",{parentName:"td"},"disconnect"),"."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"A function to run after the elapsed time"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"timeout")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},"The time in ms between each handler function being run."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Return Values"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"}),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"teardown")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:null},"Call this function if you want to cancel the interval")))),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nimport {Controller} from 'stimulus';\nimport {useInterval} from 'stimulus-library';\n\nexport default class extends Controller {\n\n  connect() {\n    // Run `handler`every 5 seconds until disconnect.\n    useInterval(this, this.handler, 5000)\n  }\n\n  handler() {\n    console.log('Look at me run!')\n  }\n}\n\n")))}c.isMDXComponent=!0}}]);