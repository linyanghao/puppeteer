"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_label:"Configuration"},p="Configuration interface",o={unversionedId:"api/puppeteer.configuration",id:"version-19.7.1/api/puppeteer.configuration",title:"Configuration interface",description:"Defines options to configure Puppeteer's behavior during installation and runtime.",source:"@site/versioned_docs/version-19.7.1/api/puppeteer.configuration.md",sourceDirName:"api",slug:"/api/puppeteer.configuration",permalink:"/api/puppeteer.configuration",draft:!1,tags:[],version:"19.7.1",frontMatter:{sidebar_label:"Configuration"},sidebar:"api",previous:{title:"CommonEventEmitter.removeListener",permalink:"/api/puppeteer.commoneventemitter.removelistener"},next:{title:"Configuration.browserRevision",permalink:"/api/puppeteer.configuration.browserrevision"}},u={},d=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}],c={toc:d};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"configuration-interface"}),"Configuration interface"),(0,r.kt)("p",null,"Defines options to configure Puppeteer's behavior during installation and runtime."),(0,r.kt)("p",null,"See individual properties for more information."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export interface Configuration\n")),(0,r.kt)("h2",a({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.browserrevision"}),"browserRevision?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Specifies a certain version of the browser you'd like Puppeteer to use."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_BROWSER_REVISION"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteernode.launch"}),"puppeteer.launch")," on how executable path is inferred.")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"A compatible-revision of the browser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.cachedirectory"}),"cacheDirectory?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Defines the directory to be used by Puppeteer for caching."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_CACHE_DIR"),".")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"path.join(os.homedir(), '.cache', 'puppeteer')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.defaultproduct"}),"defaultProduct?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.product"}),"Product")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Specifies which browser you'd like Puppeteer to use."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_PRODUCT"),".")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"'chrome'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.downloadhost"}),"downloadHost?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Specifies the URL prefix that is used to download Chromium."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_DOWNLOAD_HOST"),".")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Either ",(0,r.kt)("a",a({parentName:"td"},{href:"https://storage.googleapis.com"}),"https://storage.googleapis.com")," or ",(0,r.kt)("a",a({parentName:"td"},{href:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central"}),"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central"),", depending on the product.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.downloadpath"}),"downloadPath?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Specifies the path for the downloads folder."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_DOWNLOAD_PATH"),".")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"<","cache",">","/","<","product",">")," where ",(0,r.kt)("code",null,"<","cache",">")," is Puppeteer's cache directory and ",(0,r.kt)("code",null,"<","product",">")," is the name of the browser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.executablepath"}),"executablePath?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Specifies an executable path to be used in ",(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.puppeteernode.launch"}),"puppeteer.launch"),"."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_EXECUTABLE_PATH"),".")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Auto-computed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.experiments"}),"experiments?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.experimentsconfiguration"}),"ExperimentsConfiguration")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("i",null,"(Optional)")," Defines experimental options for Puppeteer."),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.loglevel"}),"logLevel?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"'silent' ","|"," 'error' ","|"," 'warn'"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Tells Puppeteer to log at the given level."),(0,r.kt)("p",null,"At the moment, any option silences logging.")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.skipdownload"}),"skipDownload?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Tells Puppeteer to not download during installation."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_SKIP_DOWNLOAD"),".")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.configuration.temporarydirectory"}),"temporaryDirectory?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," Defines the directory to be used by Puppeteer for creating temporary files."),(0,r.kt)("p",null,"Can be overridden by ",(0,r.kt)("code",null,"PUPPETEER_TMP_DIR"),".")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"os.tmpdir()"))))))}m.isMDXComponent=!0}}]);