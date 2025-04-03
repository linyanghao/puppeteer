/*! For license information please see 7799d9a8.0220d3ed.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79053],{28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(96540);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}},29698:(e,r)=>{var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(e,r,t){var a=null;if(void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),"key"in r)for(var s in t={},r)"key"!==s&&(t[s]=r[s]);else t=r;return r=t.ref,{$$typeof:n,type:e,key:a,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=a,r.jsxs=a},70674:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"api/puppeteer.frame.frameelement","title":"Frame.frameElement() method","description":"Signature","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.frame.frameelement.md","sourceDirName":"api","slug":"/api/puppeteer.frame.frameelement","permalink":"/api/puppeteer.frame.frameelement","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Frame.frameElement"},"sidebar":"api","previous":{"title":"Frame.focus","permalink":"/api/puppeteer.frame.focus"},"next":{"title":"Frame.goto","permalink":"/api/puppeteer.frame.goto"}}');var a=n(74848),s=n(28453);const o={sidebar_label:"Frame.frameElement"},i="Frame.frameElement() method",l={},m=[{value:"Signature",id:"signature",level:3}];function p(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"frameframeelement-method",children:"Frame.frameElement() method"})}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  frameElement(): Promise<HandleFor<HTMLIFrameElement> | null>;\n}\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:["Promise<",(0,a.jsx)(r.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<HTMLIFrameElement> | null>"]}),"\n",(0,a.jsx)(r.p,{children:"The frame element associated with this frame (if any)."})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},74848:(e,r,n)=>{e.exports=n(29698)}}]);