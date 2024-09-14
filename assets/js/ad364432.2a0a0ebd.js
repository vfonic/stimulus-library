"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[5824],{2351:(e,t,n)=>{n.d(t,{Ay:()=>o});var r=n(4848),s=n(8453);function l(e){const t={code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Action"}),(0,r.jsx)(t.th,{children:"Purpose"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"-"})}),(0,r.jsx)(t.td,{children:"-"})]})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5166:(e,t,n)=>{n.d(t,{Ay:()=>o});var r=n(4848),s=n(8453);function l(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(t.p,{children:"None"})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=n(4848),s=n(8453),l=n(2351),o=n(5166);const c={id:"EmptyDomController",title:"EmptyDomController"},d=void 0,i={id:"controllers/general/EmptyDomController",title:"EmptyDomController",description:"Purpose",source:"@site/docs/controllers/general/empty_dom_controller.mdx",sourceDirName:"controllers/general",slug:"/controllers/general/EmptyDomController",permalink:"/stimulus-library/docs/controllers/general/EmptyDomController",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"EmptyDomController",title:"EmptyDomController"},sidebar:"DocsSidebar",previous:{title:"ElementSaveController",permalink:"/stimulus-library/docs/controllers/general/ElementSaveController"},next:{title:"EqualizeController",permalink:"/stimulus-library/docs/controllers/general/EqualizeController"}},h={},a=[{value:"Purpose",id:"purpose",level:2},{value:"Actions",id:"actions",level:2},{value:"Targets",id:"targets",level:2},{value:"Classes",id:"classes",level:2},{value:"Values",id:"values",level:2},{value:"Events",id:"events",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"How to Use",id:"how-to-use",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(t.p,{children:"Mainly for use with TurboStreams or AJAX loaded content that modifies a container interactively. When interactions mutate the DOM and add/remove content, detect when the container you attach the controller to becomes empty/not empty."}),"\n",(0,r.jsx)(t.p,{children:"You can then style the controller, or show a nice placeholder when the container is empty, rather than showing empty space."}),"\n",(0,r.jsx)(t.h2,{id:"actions",children:(0,r.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/actions",children:"Actions"})}),"\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"targets",children:(0,r.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/targets",children:"Targets"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Target"}),(0,r.jsx)(t.th,{children:"Purpose"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"container"})," (Optional)"]}),(0,r.jsx)(t.td,{children:"The DOM element whose childList to observe for emptiness"}),(0,r.jsx)(t.td,{children:"the controller root element"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"classes",children:(0,r.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/classes",children:"Classes"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Class"}),(0,r.jsx)(t.th,{children:"Purpose"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"empty"})," (Optional)"]}),(0,r.jsx)(t.td,{children:"The class to apply to the attached element when it is empty"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"-"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"notEmpty"})," (Optional)"]}),(0,r.jsxs)(t.td,{children:["The class to apply to the attached element when it is ",(0,r.jsx)(t.strong,{children:"not"})," empty"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"-"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"values",children:(0,r.jsx)(t.a,{href:"https://stimulus.hotwire.dev/reference/values",children:"Values"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"scopeSelector"})," (Optional)"]}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["A CSS selector to pass to ",(0,r.jsx)(t.code,{children:"querySelectorAll"})," to limit what elements are included in the count of empty/not-empty"]}),(0,r.jsx)(t.td,{children:"All child elements of controller element"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Event"}),(0,r.jsx)(t.th,{children:"When"}),(0,r.jsx)(t.th,{children:"Dispatched on"}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.code,{children:"event.detail"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"empty-dom:empty"})}),(0,r.jsx)(t.td,{children:"When the subtree of the attached element becomes empty"}),(0,r.jsx)(t.td,{children:"The controller element"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"empty-dom:not-empty"})}),(0,r.jsx)(t.td,{children:"When the subtree of the attached element is no longer empty"}),(0,r.jsx)(t.td,{children:"The controller element"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"count"})," - The number of matching elements that are now present"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"side-effects",children:"Side Effects"}),"\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,r.jsxs)(t.p,{children:["The controller emits an event ",(0,r.jsx)(t.code,{children:"dom:empty"})," when the container becomes empty, and ",(0,r.jsx)(t.code,{children:"dom:not-empty"})," when it is no longer empty (and for every DOM update that means it is still not empty). Use those events to hook up other Stimulus actions.\nAlternatively, set a particular class when the watched container becomes empty or filled."]}),"\n",(0,r.jsxs)(t.p,{children:["You can also scope what the controller watches for inside the container using a CSS selector in the ",(0,r.jsx)(t.code,{children:"data-empty-dom-scope-selector-value"})," attribute."]}),"\n",(0,r.jsxs)(t.p,{children:["The selector you specify will be used to ",(0,r.jsx)(t.code,{children:"querySelectorAll"})," the children/subtree of the container you attach the controller too, and fire the\n",(0,r.jsx)(t.code,{children:"dom:empty"})," and ",(0,r.jsx)(t.code,{children:"dom:not-empty"})," events when the results of the query are empty/not empty."]}),"\n",(0,r.jsx)("iframe",{src:"https:///stimulus-library.netlify.app/controllers/empty_dom_controller.html",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const s={},l=r.createContext(s);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);