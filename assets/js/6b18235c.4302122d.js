/*! For license information please see 6b18235c.4302122d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46701],{13852:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.deletecookiesrequest","title":"DeleteCookiesRequest interface","description":"Signature","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.deletecookiesrequest.md","sourceDirName":"api","slug":"/api/puppeteer.deletecookiesrequest","permalink":"/api/puppeteer.deletecookiesrequest","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"DeleteCookiesRequest"},"sidebar":"api","previous":{"title":"defaultArgs","permalink":"/api/puppeteer.defaultargs"},"next":{"title":"Device","permalink":"/api/puppeteer.device"}}');var s=i(74848),n=i(28453);const d={sidebar_label:"DeleteCookiesRequest"},o="DeleteCookiesRequest interface",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"deletecookiesrequest-interface",children:"DeleteCookiesRequest interface"})}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export interface DeleteCookiesRequest\n"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"domain",children:"domain"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"If specified, deletes only cookies with the exact domain."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"name",children:"name"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Name of the cookies to remove."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"partitionkey",children:"partitionKey"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/puppeteer.cookiepartitionkey",children:"CookiePartitionKey"})," | string"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["If specified, deletes cookies in the given partition key. In Chrome, partitionKey matches the top-level site the partitioned cookie is available in. In Firefox, it matches the source origin in the ",(0,s.jsx)(t.a,{href:"https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey",children:"PartitionKey"}),"."]})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"path",children:"path"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"If specified, deletes only cookies with the exact path."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"url",children:"url"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"If specified, deletes all the cookies with the given name where domain and path match provided URL. Otherwise, deletes only cookies related to the current page's domain."})}),(0,s.jsx)("td",{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var r=i(96540);const s={},n=r.createContext(s);function d(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(n.Provider,{value:t},e.children)}},29698:(e,t)=>{var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(e,t,r){var s=null;if(void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),"key"in t)for(var n in r={},t)"key"!==n&&(r[n]=t[n]);else r=t;return t=r.ref,{$$typeof:i,type:e,key:s,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=s,t.jsxs=s},74848:(e,t,i)=>{e.exports=i(29698)}}]);