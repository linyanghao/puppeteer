"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_label:"WebWorker.evaluateHandle"},p="WebWorker.evaluateHandle() method",i={unversionedId:"api/puppeteer.webworker.evaluatehandle",id:"version-18.0.5/api/puppeteer.webworker.evaluatehandle",title:"WebWorker.evaluateHandle() method",description:"The only difference between worker.evaluate and worker.evaluateHandle is that worker.evaluateHandle returns in-page object (JSHandle). If the function passed to the worker.evaluateHandle returns a Promise, then worker.evaluateHandle would wait for the promise to resolve and return its value. Shortcut for await worker.executionContext()).evaluateHandle(pageFunction, ...args)",source:"@site/versioned_docs/version-18.0.5/api/puppeteer.webworker.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.evaluatehandle",permalink:"/api/puppeteer.webworker.evaluatehandle",draft:!1,tags:[],version:"18.0.5",frontMatter:{sidebar_label:"WebWorker.evaluateHandle"},sidebar:"sidebar",previous:{title:"WebWorker.evaluate",permalink:"/api/puppeteer.webworker.evaluate"},next:{title:"WebWorker.url",permalink:"/api/puppeteer.webworker.url"}},u={},c=[{value:"Parameters",id:"parameters",level:2}],s={toc:c};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"webworkerevaluatehandle-method"}),"WebWorker.evaluateHandle() method"),(0,n.kt)("p",null,"The only difference between ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluate")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),", then ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",(0,n.kt)("inlineCode",{parentName:"p"},"await worker.executionContext()).evaluateHandle(pageFunction, ...args)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class WebWorker {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"pageFunction"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Func ","|"," string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Function to be evaluated in the page context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"args"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Params"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Arguments to pass to ",(0,n.kt)("code",null,"pageFunction"),".")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.handlefor"}),"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,n.kt)("p",null,"Promise which resolves to the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."))}d.isMDXComponent=!0}}]);