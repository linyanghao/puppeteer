/*! For license information please see e2f0aee2.413e7143.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6623],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,t,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:s,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=s,t.jsxs=s},74848:(e,t,r)=>{e.exports=r(29698)},92700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/puppeteer.frame.isdetached","title":"Frame.isDetached() method","description":"Warning: This API is now obsolete.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.frame.isdetached.md","sourceDirName":"api","slug":"/api/puppeteer.frame.isdetached","permalink":"/api/puppeteer.frame.isdetached","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Frame.isDetached"},"sidebar":"api","previous":{"title":"Frame.hover","permalink":"/api/puppeteer.frame.hover"},"next":{"title":"Frame.locator","permalink":"/api/puppeteer.frame.locator"}}');var s=r(74848),a=r(28453);const i={sidebar_label:"Frame.isDetached"},o="Frame.isDetached() method",c={},d=[{value:"Signature",id:"signature",level:3}];function l(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"frameisdetached-method",children:"Frame.isDetached() method"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"detached"})," getter."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Is",(0,s.jsx)(t.code,{children:"true"})," if the frame has been detached. Otherwise, ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  isDetached(): boolean;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"boolean"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);