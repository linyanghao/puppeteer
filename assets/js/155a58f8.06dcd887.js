/*! For license information please see 155a58f8.06dcd887.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89286],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>p});var t=r(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}},29698:(e,n)=>{var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(e,n,t){var i=null;if(void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),"key"in n)for(var o in t={},n)"key"!==o&&(t[o]=n[o]);else t=n;return n=t.ref,{$$typeof:r,type:e,key:i,ref:void 0!==n?n:null,props:t}}n.Fragment=t,n.jsx=i,n.jsxs=i},71948:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"guides/running-puppeteer-in-the-browser","title":"Running Puppeteer in the browser","description":"Puppeteer is a powerful tool for automating browsers, but did you know it can also run within a browser itself? This enables you to leverage Puppeteer\'s capabilities for tasks that don\'t require Node.js specific features.","source":"@site/versioned_docs/version-24.6.0/guides/running-puppeteer-in-the-browser.md","sourceDirName":"guides","slug":"/guides/running-puppeteer-in-the-browser","permalink":"/guides/running-puppeteer-in-the-browser","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{},"sidebar":"docs","previous":{"title":"Files","permalink":"/guides/files"},"next":{"title":"Running Puppeteer in Chrome extensions","permalink":"/guides/running-puppeteer-in-extensions"}}');var i=r(74848),o=r(28453);const s={},p="Running Puppeteer in the browser",u={},a=[{value:"Supported Features",id:"supported-features",level:2},{value:"How to run Puppeteer in the browser",id:"how-to-run-puppeteer-in-the-browser",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"running-puppeteer-in-the-browser",children:"Running Puppeteer in the browser"})}),"\n",(0,i.jsx)(n.p,{children:"Puppeteer is a powerful tool for automating browsers, but did you know it can also run within a browser itself? This enables you to leverage Puppeteer's capabilities for tasks that don't require Node.js specific features."}),"\n",(0,i.jsx)(n.h2,{id:"supported-features",children:"Supported Features"}),"\n",(0,i.jsx)(n.p,{children:"While running in the browser, Puppeteer offers a variety of functionalities including:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"WebSocket Connections: Establish connections to existing browser instances using WebSockets. Launching or downloading browsers directly is not supported as it relies on Node.js APIs."}),"\n",(0,i.jsx)(n.li,{children:"Script Evaluation: Execute JavaScript code within the browser context."}),"\n",(0,i.jsx)(n.li,{children:"Document Manipulation: Generate PDFs and screenshots of the current web page."}),"\n",(0,i.jsx)(n.li,{children:"Page Management: Create, close, and navigate between different web pages."}),"\n",(0,i.jsx)(n.li,{children:"Cookie Handling: Inspect, modify, and manage cookies within the browser."}),"\n",(0,i.jsx)(n.li,{children:"Network Control: Monitor and intercept network requests made by the browser."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-run-puppeteer-in-the-browser",children:"How to run Puppeteer in the browser"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-browser",children:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-browser"})," for a complete example."]})}),"\n",(0,i.jsx)(n.p,{children:"To run Puppeteer in the browser, first you need to produce a browser-compatible build using a bundler such as rollup or webpack:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["When importing Puppeteer use the browser-specific entrypoint from puppeteer-core ",(0,i.jsx)(n.code,{children:"puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js'"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js';\n\nconst browser = await puppeteer.connect({\n  browserWSEndpoint: wsUrl,\n});\n\nalert('Browser has ' + (await browser.pages()).length + ' pages');\n\nbrowser.disconnect();\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Build your app using a bundler. For example, the following configuration can be used with rollup:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {nodeResolve} from '@rollup/plugin-node-resolve';\n\nexport default {\n  input: 'main.mjs',\n  output: {\n    format: 'esm',\n    dir: 'out',\n  },\n  // If you do not need to use WebDriver BiDi protocol,\n  // exclude chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js to minimize the bundle size.\n  external: ['chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'],\n  plugins: [\n    nodeResolve({\n      // Indicate that we target a browser environment.\n      browser: true,\n      // Exclude any dependencies except for puppeteer-core.\n      // `npm install puppeteer-core` # To install puppeteer-core if needed.\n      resolveOnly: ['puppeteer-core'],\n    }),\n  ],\n};\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Do not forget to include a valid browser WebSocket endpoint when connecting to an instance."})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Include the produced bundle into a web page."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},74848:(e,n,r)=>{e.exports=r(29698)}}]);