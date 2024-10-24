/*! For license information please see ee48950f.bd083d22.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26149],{73918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(74848),r=t(28453);const s={sidebar_label:"FrameWaitForFunctionOptions"},o="FrameWaitForFunctionOptions interface",c={id:"api/puppeteer.framewaitforfunctionoptions",title:"FrameWaitForFunctionOptions interface",description:"Signature",source:"@site/versioned_docs/version-23.6.0/api/puppeteer.framewaitforfunctionoptions.md",sourceDirName:"api",slug:"/api/puppeteer.framewaitforfunctionoptions",permalink:"/api/puppeteer.framewaitforfunctionoptions",draft:!1,unlisted:!1,tags:[],version:"23.6.0",frontMatter:{sidebar_label:"FrameWaitForFunctionOptions"},sidebar:"api",previous:{title:"FrameEvents",permalink:"/api/puppeteer.frameevents"},next:{title:"GeolocationOptions",permalink:"/api/puppeteer.geolocationoptions"}},l={},a=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"framewaitforfunctionoptions-interface",children:"FrameWaitForFunctionOptions interface"})}),"\n",(0,i.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export interface FrameWaitForFunctionOptions\n"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(n.p,{children:"Property"})}),(0,i.jsx)("th",{children:(0,i.jsx)(n.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(n.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(n.p,{children:"Description"})}),(0,i.jsx)("th",{children:(0,i.jsx)(n.p,{children:"Default"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"polling",children:"polling"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"'raf' | 'mutation' | number"})}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["An interval at which the ",(0,i.jsx)(n.code,{children:"pageFunction"})," is executed, defaults to ",(0,i.jsx)(n.code,{children:"raf"}),". If ",(0,i.jsx)(n.code,{children:"polling"})," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",(0,i.jsx)(n.code,{children:"polling"})," is a string, then it can be one of the following values:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"raf"})," - to constantly execute ",(0,i.jsx)(n.code,{children:"pageFunction"})," in ",(0,i.jsx)(n.code,{children:"requestAnimationFrame"})," callback. This is the tightest polling mode which is suitable to observe styling changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mutation"})," - to execute ",(0,i.jsx)(n.code,{children:"pageFunction"})," on every DOM mutation."]}),"\n"]}),"\n"]})]}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"signal",children:"signal"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"AbortSignal"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"A signal object that allows you to cancel a waitForFunction call."})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"timeout",children:"timeout"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"number"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:["Maximum time to wait in milliseconds. Defaults to ",(0,i.jsx)(n.code,{children:"30000"})," (30 seconds). Pass ",(0,i.jsx)(n.code,{children:"0"})," to disable the timeout. Puppeteer's default timeout can be changed using ",(0,i.jsx)(n.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"}),"."]})}),(0,i.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var i=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var i,s={},a=null,d=null;for(i in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:a,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);