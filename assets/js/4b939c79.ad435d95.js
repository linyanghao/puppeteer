/*! For license information please see 4b939c79.ad435d95.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88965],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,r,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var o in n={},r)"key"!==o&&(n[o]=r[o]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:s,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=s,r.jsxs=s},73798:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/puppeteer.page.goto","title":"Page.goto() method","description":"Navigates the frame or page to the given url.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.page.goto.md","sourceDirName":"api","slug":"/api/puppeteer.page.goto","permalink":"/api/puppeteer.page.goto","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Page.goto"},"sidebar":"api","previous":{"title":"Page.goForward","permalink":"/api/puppeteer.page.goforward"},"next":{"title":"Page.hover","permalink":"/api/puppeteer.page.hover"}}');var s=t(74848),o=t(28453);const i={sidebar_label:"Page.goto"},a="Page.goto() method",l={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"pagegoto-method",children:"Page.goto() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Navigates the frame or page to the given ",(0,s.jsx)(r.code,{children:"url"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  goto(url: string, options?: GoToOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"url"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["URL to navigate the frame to. The URL should include scheme, e.g. ",(0,s.jsx)(r.code,{children:"https://"})]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.gotooptions",children:"GoToOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," Options to configure waiting behavior."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:["Promise<",(0,s.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,s.jsx)(r.p,{children:"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Navigation to ",(0,s.jsx)(r.code,{children:"about:blank"})," or navigation to the same URL with a different hash will succeed and return ",(0,s.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsxs)(r.p,{children:["Headless shell mode doesn't support navigation to a PDF document. See the ",(0,s.jsx)(r.a,{href:"https://crbug.com/761295",children:"upstream issue"}),"."]})}),"\n",(0,s.jsxs)(r.p,{children:['In headless shell, this method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,s.jsx)(r.a,{href:"/api/puppeteer.httpresponse.status",children:"HTTPResponse.status()"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);