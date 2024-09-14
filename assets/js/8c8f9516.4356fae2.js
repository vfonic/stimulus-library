"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[253],{5166:(e,n,t)=>{t.d(n,{Ay:()=>l});var s=t(4848),d=t(8453);function r(e){const n={p:"p",...(0,d.R)(),...e.components};return(0,s.jsx)(n.p,{children:"None"})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},9513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=t(4848),d=t(8453),r=t(5166);const l={id:"useInjectedHTML",title:"useInjectedHTML"},c=void 0,i={id:"mixins/useInjectedHTML",title:"useInjectedHTML",description:"Purpose",source:"@site/docs/mixins/use_injected_html.mdx",sourceDirName:"mixins",slug:"/mixins/useInjectedHTML",permalink:"/stimulus-library/docs/mixins/useInjectedHTML",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"useInjectedHTML",title:"useInjectedHTML"},sidebar:"DocsSidebar",previous:{title:"useGeolocation",permalink:"/stimulus-library/docs/mixins/useGeolocation"},next:{title:"useIntersection",permalink:"/stimulus-library/docs/mixins/useIntersection"}},o={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"Usage",id:"usage",level:2},{value:"useInjectedHTML",id:"useinjectedhtml",level:3},{value:"useInjectedElement",id:"useinjectedelement",level:3},{value:"useInjectedElement",id:"useinjectedelement-1",level:3},{value:"How to Use",id:"how-to-use",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsx)(n.p,{children:"Add HTML/HTML Elements/HTML Fragments that enable a controller's behaviour, and automatically clean up the\nDOM when the controller disconnects."}),"\n",(0,s.jsx)(n.h2,{id:"side-effects",children:"Side Effects"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["There are 3 functions provided as part of this Mixin.\n",(0,s.jsx)(n.code,{children:"useInjectedHTML"})," for HTML snippets\n",(0,s.jsx)(n.code,{children:"useInjectedElement"})," for an HTML Element you have already constructed,\nand\n",(0,s.jsx)(n.code,{children:"useInjectedFragment"})," for an HTML DocumentFragment you have already constructed,"]}),"\n",(0,s.jsx)(n.h3,{id:"useinjectedhtml",children:"useInjectedHTML"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameters"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Purpose"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"controller"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Controller"})}),(0,s.jsxs)(n.td,{children:["The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,s.jsx)(n.code,{children:"disconnect"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"this"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"targetElement"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"HTMLElement"})}),(0,s.jsx)(n.td,{children:"The element to insert the given elements near"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"insertPosition"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsxs)(n.td,{children:["Where to place the given elements. Accepts any one of the parameters accepted by ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML",children:(0,s.jsx)(n.code,{children:"insertAdjacentHTML"})})]}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"html"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The HTML string to inject into the DOM"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"useinjectedelement",children:"useInjectedElement"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameters"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Purpose"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"controller"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Controller"})}),(0,s.jsxs)(n.td,{children:["The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,s.jsx)(n.code,{children:"disconnect"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"this"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"targetElement"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"HTMLElement"})}),(0,s.jsx)(n.td,{children:"The element to insert the given elements near"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"insertPosition"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsxs)(n.td,{children:["Where to place the given elements. Accepts any one of the parameters accepted by ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML",children:(0,s.jsx)(n.code,{children:"insertAdjacentHTML"})})]}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"element"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"HTMLElement"})}),(0,s.jsx)(n.td,{children:"The HTMLElement to inject into the DOM"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"useinjectedelement-1",children:"useInjectedElement"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameters"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Purpose"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"controller"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Controller"})}),(0,s.jsxs)(n.td,{children:["The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,s.jsx)(n.code,{children:"disconnect"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"this"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"targetElement"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"HTMLElement"})}),(0,s.jsx)(n.td,{children:"The element to insert the given elements near"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"insertPosition"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsxs)(n.td,{children:["Where to place the given elements. Accepts any one of the parameters accepted by ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML",children:(0,s.jsx)(n.code,{children:"insertAdjacentHTML"})})]}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fragment"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DocumentFragment"})}),(0,s.jsx)(n.td,{children:"The DocumentFragment to inject into the DOM"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"\nimport {Controller} from '@hotwired/stimulus';\nimport {useInjectedHTML, useInjectedElement, useInjectedFragment} from 'stimulus-library';\n\nexport default class extends Controller {\n\n  get magicElement() {\n    let element = document.createElement('div');\n    element.innerHTML = '<div class=\"magic\"></div>';\n    return element;\n  }\n\n  connect() {\n    // Inject an element into the DOM that the controller can use\n    let [node, cleanupElement] = useInjectedElement(this, this.element, 'prepend', this.magicElement)\n    console.log('Created node', node, node.innerHTML) // Do something with the created node\n    cleanupElement() // Cleanup the created node early.\n\n    // Inject some HTML into the DOM that the controller can use\n    let [nodes, cleanupElements] = useInjectedHTML(this, this.element, 'prepend', `<p>Hello World</p>`);\n    console.log('Created', nodes.length, 'nodes') // Do something with the created nodes\n    cleanupElements() // Cleanup the created nodes early.\n\n    // Inject multiple elements into the DOM that the controller can use, using a DocumentFragment.\n    let elements = [ document.createElement('div'), document.createElement('p'), document.createElement('span') ];\n    let fragment = document.createDocumentFragment();\n    elements.forEach(element => fragment.append(element));\n    useInjectedFragment(this, this.element, 'prepend', fragment);\n  }\n\n  disconnect() {\n    // All injected elements will be automatically removed when the controller is disconnected\n    // No need to do anything here\n  }\n\n\n}\n\n"})})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(6540);const d={},r=s.createContext(d);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);