(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(100)),i={id:"introduction",title:"Welcome!"},l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!0,title:"Welcome!",description:"Hello and welcome to the swarm! We are very happy to have you here with us! \ud83d\udc1d",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/introduction.md",version:"current",sidebar:"Balls",next:{title:"Quick Start",permalink:"/docs/installation/quick-start"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Dapps",id:"dapps",children:[]},{value:"Incentives",id:"incentives",children:[]},{value:"Find Out More",id:"find-out-more",children:[]},{value:"Development",id:"development",children:[]},{value:"Community",id:"community",children:[]},{value:"Reporting a bug",id:"reporting-a-bug",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Hello and welcome to the swarm! We are very happy to have you here with us! \ud83d\udc1d "),Object(o.a)("p",null,"As soon as your Bee client is up and running you will begin to connect with peers all over the world to become a part of Swarm, a global p2p network tasked with storing and distributing all of the world's data."),Object(o.a)("p",null,"Swarm is a decentralised data storage and distribution technology, ready to power the next generation of censorship resistant unstoppable serverless apps. It is the complement to blockchain based smart contracts originally envisaged by the Ethereum cryptocurrency and provides the mass storage piece in the Dapp building puzzle. Swarm is the hard drive of the world computer."),Object(o.a)("h2",{id:"installation"},"Installation"),Object(o.a)("p",null,"Don't have Bee installed yet? It's easy! Head over to the ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/quick-start"}),"installation")," section to get Bee up and running on your computer."),Object(o.a)("h2",{id:"usage"},"Usage"),Object(o.a)("p",null,"To learn more about how to get the most out of Bee, head over to the ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/upload-and-download"}),"tutorials")," section to find out how to share files with your friends, use Bee to host a website on a public Swarm Gateway, and much more..."),Object(o.a)("h2",{id:"dapps"},"Dapps"),Object(o.a)("p",null,"Swarm is all about Dapps. We provide the most developer friendly environment to build Dapps on. Built on principles of functionality, flexibility and accessibility, Bee provides high level constructs for file storage, feeds and key-value stores, while also providing the low level access to other applications and libraries that create Single Owner and Trojan chunks clientside, with total e2e privacy."),Object(o.a)("h2",{id:"incentives"},"Incentives"),Object(o.a)("p",null,"Need even more incentive to get involved with the wonderful world of Swarm? Find out how you'll soon be earning BZZ tokens for storing and distributing your share of the worlds data, sharing is caring!"),Object(o.a)("h2",{id:"find-out-more"},"Find Out More"),Object(o.a)("p",null,"What happens with your Bee node when you start it up? Want to know more about the amazing Swarm technology behind Bee?\nWant to make your own client? Read ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://swarm-gateways.net/bzz:/latest.bookofswarm.eth/the-book-of-swarm.pdf"}),"The Book of Swarm"),",\nour 250 page epic guide to the future tech underpinning the Swarm network."),Object(o.a)("h2",{id:"development"},"Development"),Object(o.a)("p",null,"We'd love you to join us! Are you up to the challenge of helping us to create Bee and the other incredible technologies we're building on top of it? You are invited to contribute code to the Bee Client or any of the other projects in Swarm's ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ethersphere"}),"Ethersphere"),"."),Object(o.a)("h2",{id:"community"},"Community"),Object(o.a)("p",null,"There is a vibrant and buzzing community behind Swarm, get involved in one of our group channels."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"http://swarm.ethereum.org"}),"Swarm"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://beehive.ethswarm.org/"}),"Beehive Chat on Mattermost"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://t.me/joinchat/GoVG8RHYjUpD_-bEnLC4EQ"}),"Orange Lounge"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/ethswarm"}),"Twitter @ethswarm"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(a.a)({parentName:"li"},{href:"https://www.reddit.com/r/ethswarm/"}),"reddit channel"),".")),Object(o.a)("h2",{id:"reporting-a-bug"},"Reporting a bug"),Object(o.a)("p",null,"If your Bee isn't working, ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee/issues"}),"get in touch and let us know!")," Every Bee is important to us and we'll get right to work on fixing it for you as soon as possible. \ud83d\udc1d"),Object(o.a)("p",null,"Thanks for being here, we wish you Love and Bees from the Swarm Team x"))}u.isMDXComponent=!0}}]);