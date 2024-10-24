/*! For license information please see 505fffe4.0213811d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96134],{19510:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=n(74848),t=n(28453);const i={sidebar_label:"Page.screenshot"},a="Page.screenshot() method",o={id:"api/puppeteer.page.screenshot",title:"Page.screenshot() method",description:"screenshot(): Promise&lt;string&gt;",source:"@site/versioned_docs/version-23.6.0/api/puppeteer.page.screenshot.md",sourceDirName:"api",slug:"/api/puppeteer.page.screenshot",permalink:"/api/puppeteer.page.screenshot",draft:!1,unlisted:!1,tags:[],version:"23.6.0",frontMatter:{sidebar_label:"Page.screenshot"},sidebar:"api",previous:{title:"Page.screencast",permalink:"/api/puppeteer.page.screencast"},next:{title:"Page.select",permalink:"/api/puppeteer.page.select"}},c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Parameters",id:"parameters-1",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"pagescreenshot-method",children:"Page.screenshot() method"})}),"\n",(0,s.jsx)("h2",{id:"screenshot",children:"screenshot(): Promise<string>"}),"\n",(0,s.jsxs)(r.p,{children:["Captures a screenshot of this ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  screenshot(\n    options: Readonly<ScreenshotOptions> & {\n      encoding: 'base64';\n    }\n  ): Promise<string>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Readonly<",(0,s.jsx)(r.a,{href:"/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),"> & { encoding: 'base64'; }"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Configures screenshot behavior."})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<string>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["While a screenshot is being taken in a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"}),", the following methods will automatically wait for the screenshot to finish to prevent interference with the screenshot process: ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browsercontext.newpage",children:"BrowserContext.newPage()"}),", ",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser.newpage",children:"Browser.newPage()"}),", ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.close",children:"Page.close()"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Calling ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.bringtofront",children:"Page.bringToFront()"})," will not wait for existing screenshot operations."]}),"\n",(0,s.jsx)("h2",{id:"screenshot-1",children:"screenshot(): Promise<Uint8Array>"}),"\n",(0,s.jsx)(r.h3,{id:"signature-1",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Readonly<",(0,s.jsx)(r.a,{href:"/api/puppeteer.screenshotoptions",children:"ScreenshotOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"(Optional)"})})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<Uint8Array>"})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var s,i={},p=null,h=null;for(s in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(h=r.ref),r)a.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:p,ref:h,props:i,_owner:o.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);