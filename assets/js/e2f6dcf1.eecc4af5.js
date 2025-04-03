/*! For license information please see e2f6dcf1.eecc4af5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82622],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(e,t,r){var s=null;if(void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:s,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=s,t.jsxs=s},74848:(e,t,n)=>{e.exports=n(29698)},80034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/puppeteer.page.setgeolocation","title":"Page.setGeolocation() method","description":"Sets the page\'s geolocation.","source":"@site/../docs/api/puppeteer.page.setgeolocation.md","sourceDirName":"api","slug":"/api/puppeteer.page.setgeolocation","permalink":"/next/api/puppeteer.page.setgeolocation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.setGeolocation"},"sidebar":"api","previous":{"title":"Page.setExtraHTTPHeaders","permalink":"/next/api/puppeteer.page.setextrahttpheaders"},"next":{"title":"Page.setJavaScriptEnabled","permalink":"/next/api/puppeteer.page.setjavascriptenabled"}}');var s=n(74848),a=n(28453);const o={sidebar_label:"Page.setGeolocation"},i="Page.setGeolocation() method",l={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pagesetgeolocation-method",children:"Page.setGeolocation() method"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the page's geolocation."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setGeolocation(options: GeolocationOptions): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.geolocationoptions",children:"GeolocationOptions"})})}),(0,s.jsx)("td",{})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Consider using ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.browsercontext.overridepermissions",children:"BrowserContext.overridePermissions()"})," to grant permissions for the page to read its geolocation."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"await page.setGeolocation({latitude: 59.95, longitude: 30.31667});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);