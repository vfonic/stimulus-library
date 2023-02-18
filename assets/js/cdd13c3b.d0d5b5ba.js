"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"BaseController",title:"BaseController"},o=void 0,i={unversionedId:"controllers/extendable/BaseController",id:"controllers/extendable/BaseController",title:"BaseController",description:"Purpose",source:"@site/docs/controllers/extendable/base_controller.mdx",sourceDirName:"controllers/extendable",slug:"/controllers/extendable/BaseController",permalink:"/stimulus-library/docs/controllers/extendable/BaseController",draft:!1,tags:[],version:"current",frontMatter:{id:"BaseController",title:"BaseController"},sidebar:"DocsSidebar",previous:{title:"PollBlockController",permalink:"/stimulus-library/docs/controllers/ajax/PollBlockController"},next:{title:"EphemeralController",permalink:"/stimulus-library/docs/controllers/extendable/EphemeralController"}},d={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Side Effects / Inherited Behaviour",id:"side-effects--inherited-behaviour",level:2},{value:"How to Use",id:"how-to-use",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"Provide common utilities and base functionality for all Stimulus controllers that extend this controller."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"This controller provides the following properties to controllers that extend it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Return Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"el")),(0,r.kt)("td",{parentName:"tr",align:null},"For Typescript projects, provides a wrapper around ",(0,r.kt)("inlineCode",{parentName:"td"},"this.element")," typecast to ",(0,r.kt)("inlineCode",{parentName:"td"},"HTMLElement")," so that type-hinting correctly works for all DOM APIs"),(0,r.kt)("td",{parentName:"tr",align:null},"The controller root element, as an ",(0,r.kt)("inlineCode",{parentName:"td"},"HTMLElement"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isTurboPreview")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not the document is currently displaying a preview from the Hotwire/Turbo cache ",(0,r.kt)("a",{parentName:"td",href:"https://turbo.hotwire.dev/handbook/building#detecting-when-a-preview-is-visible"},"https://turbo.hotwire.dev/handbook/building#detecting-when-a-preview-is-visible"),". Also works with legacy Turbolinks"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isTurbolinksPreview")),(0,r.kt)("td",{parentName:"tr",align:null},"Alias for ",(0,r.kt)("inlineCode",{parentName:"td"},"isTurboPreview"),", both methods work for both Turbolinks and Hotwire"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"csrfToken")),(0,r.kt)("td",{parentName:"tr",align:null},"The current Rails CSRF token, taken from the ",(0,r.kt)("inlineCode",{parentName:"td"},"<meta>")," tag Rails inserts into the document head, if present."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"This controller provides the following methods to controllers that extend it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dispatchEvent")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dispatch a custom event"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"element")),(0,r.kt)("td",{parentName:"tr",align:null},"The element to dispatch the event on"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:null},"The fully qualified name of the event. Usually follows the format ",(0,r.kt)("inlineCode",{parentName:"td"},"controller-identifier:event")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The options to initialize the event with. See the options ",(0,r.kt)("inlineCode",{parentName:"td"},"eventInit")," accepts: ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event"},"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ bubbles: true, cancellable: true, details: { element: this.element } }"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Return value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metaValue")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch a value from a ",(0,r.kt)("inlineCode",{parentName:"td"},"<meta>")," tag in the ",(0,r.kt)("inlineCode",{parentName:"td"},"<head>")," of the document."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"td"},"meta")," tag to fetch the value of"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Return value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Construct an colon separated event name using the controllers identifier .i.e in ",(0,r.kt)("inlineCode",{parentName:"td"},"FooController")," calling ",(0,r.kt)("inlineCode",{parentName:"td"},'eventName("loaded")')," would result in ",(0,r.kt)("inlineCode",{parentName:"td"},"foo:loaded"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the event to append to the controllers identifier to create a fully namespaced event"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"side-effects--inherited-behaviour"},"Side Effects / Inherited Behaviour"),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"/docs/debugging"},"debug mode")," is enabled, any controller that extends BaseController controller will automatically log calls to any actions or methods, and events dispatched with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatchEvent")," method provided by stimulus-library."),(0,r.kt)("p",null,"If there are any getters, setters, methods or properties that should not be logged, you should name them with an underscore prefix i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"_foo() {}"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},'_bar = "baz"')," to indicate that they are private methods."),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {BaseController} from "stimulus-library";\n\nexport default class FooController extends BaseController {\n  // ...\n\n foo() {\n   this.dispatchEvent(this.el, "foo:something-happened", { bubbles: true, cancellable: true, detail: { element: this.el, data: \'thing\' } } ) // dispatches a custom event named `foo:something-happened`\n   // or\n   this.dispatchEvent(this.el, this.eventName("something-happened"), { bubbles: true, cancellable: true, detail: { element: this.el, data: \'thing\' } } ) // also dispatches `foo:something-happened`\n }\n\n}\n')))}s.isMDXComponent=!0}}]);