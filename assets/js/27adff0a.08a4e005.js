/*! For license information please see 27adff0a.08a4e005.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96816],{28453:(e,t,r)=>{r.d(t,{R:()=>p,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function p(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:p(e.components),n.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var s in n={},t)"key"!==s&&(n[s]=t[s]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:a,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=a,t.jsxs=a},74848:(e,t,r)=>{e.exports=r(29698)},79319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.target.page","title":"Target.page() method","description":"If the target is not of type \\"page\\", \\"webview\\" or \\"background_page\\", returns null.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.target.page.md","sourceDirName":"api","slug":"/api/puppeteer.target.page","permalink":"/api/puppeteer.target.page","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Target.page"},"sidebar":"api","previous":{"title":"Target.opener","permalink":"/api/puppeteer.target.opener"},"next":{"title":"Target.type","permalink":"/api/puppeteer.target.type"}}');var a=r(74848),s=r(28453);const p={sidebar_label:"Target.page"},o="Target.page() method",i={},c=[{value:"Signature",id:"signature",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"targetpage-method",children:"Target.page() method"})}),"\n",(0,a.jsxs)(t.p,{children:["If the target is not of type ",(0,a.jsx)(t.code,{children:'"page"'}),", ",(0,a.jsx)(t.code,{children:'"webview"'})," or ",(0,a.jsx)(t.code,{children:'"background_page"'}),", returns ",(0,a.jsx)(t.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Target {\n  page(): Promise<Page | null>;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/api/puppeteer.page",children:"Page"})," | null>"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);