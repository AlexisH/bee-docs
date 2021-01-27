(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(100)),i={title:"API and Debug API",id:"api-reference"},c={unversionedId:"api-reference/api-reference",id:"api-reference/api-reference",isDocsHomePage:!1,title:"API and Debug API",description:"The Bee node exposes two HTTP API endpoints, the API and the DebugAPI. These endpoints are the",source:"@site/docs/api-reference/api-reference.md",slug:"/api-reference/api-reference",permalink:"/docs/api-reference/api-reference",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/api-reference/api-reference.md",version:"current",sidebar:"Balls",previous:{title:"Starting a Test Network",permalink:"/docs/advanced/starting-a-test-network"},next:{title:"Useful Developer Info",permalink:"/docs/bee-developers/useful-dev-info"}},p=[{value:"API",id:"api",children:[]},{value:"Debug API",id:"debug-api",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The Bee node exposes two HTTP API endpoints, the ",Object(o.a)("inlineCode",{parentName:"p"},"API")," and the ",Object(o.a)("inlineCode",{parentName:"p"},"DebugAPI"),". These endpoints are the\nprimary interfaces to a ",Object(o.a)("em",{parentName:"p"},"running")," Bee node. API-endpoints can be queried using familiar HTTP\nrequests, and will respond with a semantically accurate\n",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"}),"HTTP status and error codes"),"\nas well as data payloads in ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://www.json.org/json-en.html"}),"JSON")," format where appropriate."),Object(o.a)("h2",{id:"api"},"API"),Object(o.a)("p",null,"The API-endpoint exposes all functionality to upload and download content to and from the Swarm network. By default, it runs on port ",Object(o.a)("inlineCode",{parentName:"p"},":1633"),"."),Object(o.a)("p",null,"Detailed information about Bee API endpoint can be found here:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{href:"../../api",target:"_blank",rel:"noopener noreferrer"},"Bee API reference."))),Object(o.a)("h2",{id:"debug-api"},"Debug API"),Object(o.a)("p",null,"The debug-API is disabled by default but be enabled by setting the ",Object(o.a)("inlineCode",{parentName:"p"},"enable-debug-api")," configuration option to ",Object(o.a)("inlineCode",{parentName:"p"},"true"),". The debug-API exposes functionality to inspect the state of your Bee node while it is running, as well as some other features that should not be exposed to the public internet. The Debug API runs on port ",Object(o.a)("inlineCode",{parentName:"p"},":1635")," by default."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{href:"../../debug-api",target:"_blank",rel:"noopener noreferrer"},"Debug API reference."),",")),Object(o.a)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Your Debug API should not be exposed to the public internet, make sure that your network has a firewall which blocks port ",Object(o.a)("inlineCode",{parentName:"p"},"1635"),", or bind the Debug API to ",Object(o.a)("inlineCode",{parentName:"p"},"localhost")))))}s.isMDXComponent=!0}}]);