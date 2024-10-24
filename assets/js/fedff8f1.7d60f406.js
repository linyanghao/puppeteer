/*! For license information please see fedff8f1.7d60f406.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43527],{30630:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=r(74848),s=r(28453);const o={sidebar_label:"Connection.send"},i="Connection.send() method",c={id:"api/puppeteer.connection.send",title:"Connection.send() method",description:"Signature",source:"@site/../docs/api/puppeteer.connection.send.md",sourceDirName:"api",slug:"/api/puppeteer.connection.send",permalink:"/next/api/puppeteer.connection.send",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Connection.send"},sidebar:"api",previous:{title:"Connection.fromSession",permalink:"/next/api/puppeteer.connection.fromsession"},next:{title:"Connection.session",permalink:"/next/api/puppeteer.connection.session"}},d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connectionsend-method",children:"Connection.send() method"})}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Connection {\n  send<T extends keyof ProtocolMapping.Commands>(\n    method: T,\n    params?: ProtocolMapping.Commands[T]['paramsType'][0],\n    options?: CommandOptions,\n  ): Promise<ProtocolMapping.Commands[T]['returnType']>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"method"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"T"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"params"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"ProtocolMapping.Commands[T]['paramsType'][0]"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/next/api/puppeteer.commandoptions",children:"CommandOptions"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<ProtocolMapping.Commands[T]['returnType']>"})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,r){var t,o={},p=null,a=null;for(t in void 0!==r&&(p=""+r),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:p,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=p,n.jsxs=p},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);