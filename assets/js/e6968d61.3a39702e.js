/*! For license information please see e6968d61.3a39702e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4524],{28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>o});var t=a(96540);const n={},i=t.createContext(n);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,r,t){var n=null;if(void 0!==t&&(n=""+t),void 0!==r.key&&(n=""+r.key),"key"in r)for(var i in t={},r)"key"!==i&&(t[i]=r[i]);else t=r;return r=t.ref,{$$typeof:a,type:e,key:n,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=n,r.jsxs=n},46052:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"api/puppeteer.page.waitforframe","title":"Page.waitForFrame() method","description":"Waits for a frame matching the given conditions to appear.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.page.waitforframe.md","sourceDirName":"api","slug":"/api/puppeteer.page.waitforframe","permalink":"/api/puppeteer.page.waitforframe","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Page.waitForFrame"},"sidebar":"api","previous":{"title":"Page.waitForFileChooser","permalink":"/api/puppeteer.page.waitforfilechooser"},"next":{"title":"Page.waitForFunction","permalink":"/api/puppeteer.page.waitforfunction"}}');var n=a(74848),i=a(28453);const s={sidebar_label:"Page.waitForFrame"},o="Page.waitForFrame() method",l={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"pagewaitforframe-method",children:"Page.waitForFrame() method"})}),"\n",(0,n.jsx)(r.p,{children:"Waits for a frame matching the given conditions to appear."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  waitForFrame(\n    urlOrPredicate: string | ((frame: Frame) => Awaitable<boolean>),\n    options?: WaitTimeoutOptions,\n  ): Promise<Frame>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"urlOrPredicate"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["string | ((frame: ",(0,n.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"}),") => ",(0,n.jsx)(r.a,{href:"/api/puppeteer.awaitable",children:"Awaitable"}),"<boolean>)"]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"}),">"]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const frame = await page.waitForFrame(async frame => {\n  const frameElement = await frame.frameElement();\n  if (!frameElement) {\n    return false;\n  }\n  const name = await frameElement.evaluate(el => el.getAttribute('name'));\n  return name === 'test';\n});\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},74848:(e,r,a)=>{e.exports=a(29698)}}]);