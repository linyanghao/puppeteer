/*! For license information please see 7b5ce059.0eee4dbf.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24273],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var s=r(96540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}},29698:(e,n)=>{var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function t(e,n,s){var t=null;if(void 0!==s&&(t=""+s),void 0!==n.key&&(t=""+n.key),"key"in n)for(var o in s={},n)"key"!==o&&(s[o]=n[o]);else s=n;return n=s.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:s}}n.Fragment=s,n.jsx=t,n.jsxs=t},66115:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"api/puppeteer.mouse.move","title":"Mouse.move() method","description":"Moves the mouse to the given coordinate.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.mouse.move.md","sourceDirName":"api","slug":"/api/puppeteer.mouse.move","permalink":"/api/puppeteer.mouse.move","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Mouse.move"},"sidebar":"api","previous":{"title":"Mouse.drop","permalink":"/api/puppeteer.mouse.drop"},"next":{"title":"Mouse.reset","permalink":"/api/puppeteer.mouse.reset"}}');var t=r(74848),o=r(28453);const i={sidebar_label:"Mouse.move"},d="Mouse.move() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mousemove-method",children:"Mouse.move() method"})}),"\n",(0,t.jsx)(n.p,{children:"Moves the mouse to the given coordinate."}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Mouse {\n  abstract move(\n    x: number,\n    y: number,\n    options?: Readonly<MouseMoveOptions>,\n  ): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"x"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"number"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Horizontal position of the mouse."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"y"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"number"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Vertical position of the mouse."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["Readonly<",(0,t.jsx)(n.a,{href:"/api/puppeteer.mousemoveoptions",children:"MouseMoveOptions"}),">"]})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," Options to configure behavior."]})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<void>"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},74848:(e,n,r)=>{e.exports=r(29698)}}]);