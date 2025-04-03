/*! For license information please see f44fb288.24757f05.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84815],{28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>s});var n=a(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}},29698:(e,t)=>{var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(e,t,n){var r=null;if(void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return t=n.ref,{$$typeof:a,type:e,key:r,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=r,t.jsxs=r},74848:(e,t,a)=>{e.exports=a(29698)},82253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.awaitable","title":"Awaitable type","description":"Signature","source":"@site/../docs/api/puppeteer.awaitable.md","sourceDirName":"api","slug":"/api/puppeteer.awaitable","permalink":"/next/api/puppeteer.awaitable","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Awaitable"},"sidebar":"api","previous":{"title":"AutofillData","permalink":"/next/api/puppeteer.autofilldata"},"next":{"title":"AwaitableIterable","permalink":"/next/api/puppeteer.awaitableiterable"}}');var r=a(74848),i=a(28453);const l={sidebar_label:"Awaitable"},s="Awaitable type",o={},p=[{value:"Signature",id:"signature",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"awaitable-type",children:"Awaitable type"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type Awaitable<T> = T | PromiseLike<T>;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);