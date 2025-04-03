/*! For license information please see d317453e.88136fe7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25441],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},29698:(e,n)=>{var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(e,n,r){var t=null;if(void 0!==r&&(t=""+r),void 0!==n.key&&(t=""+n.key),"key"in n)for(var i in r={},n)"key"!==i&&(r[i]=n[i]);else r=n;return n=r.ref,{$$typeof:s,type:e,key:t,ref:void 0!==n?n:null,props:r}}n.Fragment=r,n.jsx=t,n.jsxs=t},63546:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.screenshot","title":"ElementHandle.screenshot() method","description":"screenshot(): Promise&lt;string&gt;","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.elementhandle.screenshot.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.screenshot","permalink":"/api/puppeteer.elementhandle.screenshot","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"ElementHandle.screenshot"},"sidebar":"api","previous":{"title":"ElementHandle.press","permalink":"/api/puppeteer.elementhandle.press"},"next":{"title":"ElementHandle.scrollIntoView","permalink":"/api/puppeteer.elementhandle.scrollintoview"}}');var t=s(74848),i=s(28453);const l={sidebar_label:"ElementHandle.screenshot"},o="ElementHandle.screenshot() method",a={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Parameters",id:"parameters-1",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"elementhandlescreenshot-method",children:"ElementHandle.screenshot() method"})}),"\n",(0,t.jsx)("h2",{id:"screenshot",children:"screenshot(): Promise<string>"}),"\n",(0,t.jsxs)(n.p,{children:["This method scrolls element into view if needed, and then uses ",(0,t.jsx)(n.a,{href:"/api/puppeteer.page.screenshot",children:"Page.screenshot()"})," to take a screenshot of the element. If the element is detached from DOM, the method throws an error."]}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  screenshot(\n    options: Readonly<ScreenshotOptions> & {\n      encoding: 'base64';\n    },\n  ): Promise<string>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["Readonly<",(0,t.jsx)(n.a,{href:"/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),"> & { encoding: 'base64'; }"]})}),(0,t.jsx)("td",{})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<string>"}),"\n",(0,t.jsx)("h2",{id:"screenshot-1",children:"screenshot(): Promise<Uint8Array>"}),"\n",(0,t.jsx)(n.h3,{id:"signature-1",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["Readonly<",(0,t.jsx)(n.a,{href:"/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),">"]})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<Uint8Array>"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},74848:(e,n,s)=>{e.exports=s(29698)}}]);