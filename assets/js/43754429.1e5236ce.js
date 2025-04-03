/*! For license information please see 43754429.1e5236ce.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9535],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,r,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var a in n={},r)"key"!==a&&(n[a]=r[a]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:s,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=s,r.jsxs=s},49483:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.mouse.dragover","title":"Mouse.dragOver() method","description":"Dispatches a dragover event.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.mouse.dragover.md","sourceDirName":"api","slug":"/api/puppeteer.mouse.dragover","permalink":"/api/puppeteer.mouse.dragover","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Mouse.dragOver"},"sidebar":"api","previous":{"title":"Mouse.dragEnter","permalink":"/api/puppeteer.mouse.dragenter"},"next":{"title":"Mouse.drop","permalink":"/api/puppeteer.mouse.drop"}}');var s=t(74848),a=t(28453);const i={sidebar_label:"Mouse.dragOver"},o="Mouse.dragOver() method",d={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"mousedragover-method",children:"Mouse.dragOver() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Dispatches a ",(0,s.jsx)(r.code,{children:"dragover"})," event."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragOver(\n    target: Point,\n    data: Protocol.Input.DragData,\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"target"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["point for emitting ",(0,s.jsx)(r.code,{children:"dragover"})," event"]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"data"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Protocol.Input.DragData"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"drag data containing items and operations mask"})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);