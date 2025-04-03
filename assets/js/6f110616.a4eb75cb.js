/*! For license information please see 6f110616.a4eb75cb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47942],{28453:(e,r,n)=>{n.d(r,{R:()=>p,x:()=>i});var a=n(96540);const t={},s=a.createContext(t);function p(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:p(e.components),a.createElement(s.Provider,{value:r},e.children)}},29698:(e,r)=>{var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function t(e,r,a){var t=null;if(void 0!==a&&(t=""+a),void 0!==r.key&&(t=""+r.key),"key"in r)for(var s in a={},r)"key"!==s&&(a[s]=r[s]);else a=r;return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}r.Fragment=a,r.jsx=t,r.jsxs=t},74848:(e,r,n)=>{e.exports=n(29698)},95480:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"api/puppeteer.frame.parentframe","title":"Frame.parentFrame() method","description":"The parent frame, if any. Detached and main frames return null.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.frame.parentframe.md","sourceDirName":"api","slug":"/api/puppeteer.frame.parentframe","permalink":"/api/puppeteer.frame.parentframe","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Frame.parentFrame"},"sidebar":"api","previous":{"title":"Frame.page","permalink":"/api/puppeteer.frame.page"},"next":{"title":"Frame.select","permalink":"/api/puppeteer.frame.select"}}');var t=n(74848),s=n(28453);const p={sidebar_label:"Frame.parentFrame"},i="Frame.parentFrame() method",o={},l=[{value:"Signature",id:"signature",level:3}];function m(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"frameparentframe-method",children:"Frame.parentFrame() method"})}),"\n",(0,t.jsxs)(r.p,{children:["The parent frame, if any. Detached and main frames return ",(0,t.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  abstract parentFrame(): Frame | null;\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"})," | null"]})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);