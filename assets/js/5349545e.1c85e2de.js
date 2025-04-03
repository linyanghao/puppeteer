/*! For license information please see 5349545e.1c85e2de.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41815],{16129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.elementfor","title":"ElementFor type","description":"Signature","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.elementfor.md","sourceDirName":"api","slug":"/api/puppeteer.elementfor","permalink":"/api/puppeteer.elementfor","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"ElementFor"},"sidebar":"api","previous":{"title":"DownloadPolicy","permalink":"/api/puppeteer.downloadpolicy"},"next":{"title":"ElementScreenshotOptions","permalink":"/api/puppeteer.elementscreenshotoptions"}}');var a=n(74848),o=n(28453);const s={sidebar_label:"ElementFor"},i="ElementFor type",p={},l=[{value:"Signature",id:"signature",level:3}];function m(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"elementfor-type",children:"ElementFor type"})}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"export type ElementFor<\n  TagName extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,\n> = TagName extends keyof HTMLElementTagNameMap\n  ? HTMLElementTagNameMap[TagName]\n  : TagName extends keyof SVGElementTagNameMap\n    ? SVGElementTagNameMap[TagName]\n    : never;\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(29698)}}]);