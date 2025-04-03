/*! For license information please see 12929251.d7d6d01c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31840],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,t,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:s,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=s,t.jsxs=s},74848:(e,t,r)=>{e.exports=r(29698)},83533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"api/puppeteer.httprequest.redirectchain","title":"HTTPRequest.redirectChain() method","description":"A redirectChain is a chain of requests initiated to fetch a resource.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.httprequest.redirectchain.md","sourceDirName":"api","slug":"/api/puppeteer.httprequest.redirectchain","permalink":"/api/puppeteer.httprequest.redirectchain","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"HTTPRequest.redirectChain"},"sidebar":"api","previous":{"title":"HTTPRequest.postData","permalink":"/api/puppeteer.httprequest.postdata"},"next":{"title":"HTTPRequest.resourceType","permalink":"/api/puppeteer.httprequest.resourcetype"}}');var s=r(74848),i=r(28453);const a={sidebar_label:"HTTPRequest.redirectChain"},c="HTTPRequest.redirectChain() method",o={},h=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"httprequestredirectchain-method",children:"HTTPRequest.redirectChain() method"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"redirectChain"})," is a chain of requests initiated to fetch a resource."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract redirectChain(): HTTPRequest[];\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"[]"]}),"\n",(0,s.jsx)(t.p,{children:"the chain of requests - if a server responds with at least a single redirect, this chain will contain all requests that were redirected."}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"redirectChain"})," is shared between all the requests of the same chain."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if the website ",(0,s.jsx)(t.code,{children:"http://example.com"})," has a single redirect to ",(0,s.jsx)(t.code,{children:"https://example.com"}),", then the chain will contain one request:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const response = await page.goto('http://example.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 1\nconsole.log(chain[0].url()); // 'http://example.com'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If the website ",(0,s.jsx)(t.code,{children:"https://google.com"})," has no redirects, then the chain will be empty:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const response = await page.goto('https://google.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 0\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);