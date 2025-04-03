/*! For license information please see 8853ef84.65783dd5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65657],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var l in n={},t)"key"!==l&&(n[l]=t[l]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:a,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=a,t.jsxs=a},74848:(e,t,r)=>{e.exports=r(29698)},85775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.page.emulatecputhrottling","title":"Page.emulateCPUThrottling() method","description":"Enables CPU throttling to emulate slow CPUs.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.page.emulatecputhrottling.md","sourceDirName":"api","slug":"/api/puppeteer.page.emulatecputhrottling","permalink":"/api/puppeteer.page.emulatecputhrottling","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Page.emulateCPUThrottling"},"sidebar":"api","previous":{"title":"Page.emulate","permalink":"/api/puppeteer.page.emulate"},"next":{"title":"Page.emulateIdleState","permalink":"/api/puppeteer.page.emulateidlestate"}}');var a=r(74848),l=r(28453);const s={sidebar_label:"Page.emulateCPUThrottling"},i="Page.emulateCPUThrottling() method",o={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"pageemulatecputhrottling-method",children:"Page.emulateCPUThrottling() method"})}),"\n",(0,a.jsx)(t.p,{children:"Enables CPU throttling to emulate slow CPUs."}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateCPUThrottling(factor: number | null): Promise<void>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"factor"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"number | null"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"slowdown factor (1 is no throttle, 2 is 2x slowdown, etc)."})})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(t.p,{children:"Promise<void>"})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);