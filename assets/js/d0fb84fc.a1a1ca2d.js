/*! For license information please see d0fb84fc.a1a1ca2d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2134],{28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(e,r,t){var s=null;if(void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),"key"in r)for(var o in t={},r)"key"!==o&&(t[o]=r[o]);else t=r;return r=t.ref,{$$typeof:n,type:e,key:s,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=s,r.jsxs=s},45562:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"api/puppeteer.puppeteernode.launch","title":"PuppeteerNode.launch() method","description":"Launches a browser instance with given arguments and options when specified.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.puppeteernode.launch.md","sourceDirName":"api","slug":"/api/puppeteer.puppeteernode.launch","permalink":"/api/puppeteer.puppeteernode.launch","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"PuppeteerNode.launch"},"sidebar":"api","previous":{"title":"PuppeteerNode.executablePath","permalink":"/api/puppeteer.puppeteernode.executablepath"},"next":{"title":"PuppeteerNode.trimCache","permalink":"/api/puppeteer.puppeteernode.trimcache"}}');var s=n(74848),o=n(28453);const i={sidebar_label:"PuppeteerNode.launch"},a="PuppeteerNode.launch() method",p={},h=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"puppeteernodelaunch-method",children:"PuppeteerNode.launch() method"})}),"\n",(0,s.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),"\n",(0,s.jsxs)(r.p,{children:["When using with ",(0,s.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,s.jsx)(r.a,{href:"/api/puppeteer.launchoptions#executablepath",children:"options.executablePath"})," or ",(0,s.jsx)(r.a,{href:"/api/puppeteer.launchoptions#channel",children:"options.channel"})," must be provided."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class PuppeteerNode {\n  launch(options?: LaunchOptions): Promise<Browser>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.launchoptions",children:"LaunchOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," Options to configure launching behavior."]})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:["Promise<",(0,s.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),">"]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chrome for Testing downloaded by default. There is no guarantee it will work with any other version. If Google Chrome (rather than Chrome for Testing) is preferred, a ",(0,s.jsx)(r.a,{href:"https://www.google.com/chrome/browser/canary.html",children:"Chrome Canary"})," or ",(0,s.jsx)(r.a,{href:"https://www.chromium.org/getting-involved/dev-channel",children:"Dev Channel"})," build is suggested. See ",(0,s.jsx)(r.a,{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",children:"this article"})," for a description of the differences between Chromium and Chrome. ",(0,s.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md",children:"This article"})," describes some differences for Linux users. See ",(0,s.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"this doc"})," for the description of Chrome for Testing."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["You can use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.launchoptions#ignoredefaultargs",children:"options.ignoreDefaultArgs"})," to filter out ",(0,s.jsx)(r.code,{children:"--mute-audio"})," from default arguments:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio'],\n});\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},74848:(e,r,n)=>{e.exports=n(29698)}}]);