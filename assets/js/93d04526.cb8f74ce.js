/*! For license information please see 93d04526.cb8f74ce.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5738],{28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,r,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var o in n={},r)"key"!==o&&(n[o]=r[o]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:s,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=s,r.jsxs=s},74848:(e,r,t)=>{e.exports=t(29698)},88914:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.page.workers","title":"Page.workers() method","description":"All of the dedicated WebWorkers associated with the page.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.page.workers.md","sourceDirName":"api","slug":"/api/puppeteer.page.workers","permalink":"/api/puppeteer.page.workers","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Page.workers"},"sidebar":"api","previous":{"title":"Page.waitForSelector","permalink":"/api/puppeteer.page.waitforselector"},"next":{"title":"Locator","permalink":"/api/puppeteer.locator"}}');var s=t(74848),o=t(28453);const a={sidebar_label:"Page.workers"},i="Page.workers() method",p={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"pageworkers-method",children:"Page.workers() method"})}),"\n",(0,s.jsxs)(r.p,{children:["All of the dedicated ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",children:"WebWorkers"})," associated with the page."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract workers(): WebWorker[];\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/puppeteer.webworker",children:"WebWorker"}),"[]"]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This does not contain ServiceWorkers"})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);