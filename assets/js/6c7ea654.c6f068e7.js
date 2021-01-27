(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return t?r.a.createElement(m,i(i({ref:a},l),{},{components:t})):r.a.createElement(m,i({ref:a},l))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),o=(t(0),t(100)),c={title:"Backups",id:"backups"},i={unversionedId:"maintenance/backups",id:"maintenance/backups",isDocsHomePage:!1,title:"Backups",description:"In order to ensure you are able to redeploy your Bee node in the event of a disaster, the contents of several directories must be retained.",source:"@site/docs/maintenance/backups.md",slug:"/maintenance/backups",permalink:"/docs/maintenance/backups",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/maintenance/backups.md",version:"current",sidebar:"Balls",previous:{title:"Clef External Signer",permalink:"/docs/installation/bee-clef"},next:{title:"Working With Your Node",permalink:"/docs/getting-started/working-with-your-node"}},s=[{value:"Bee",id:"bee",children:[{value:"Ubuntu / Debian / Raspbian / CentOS Package Managers",id:"ubuntu--debian--raspbian--centos-package-managers",children:[]},{value:"Manual",id:"manual",children:[]},{value:"Docker Compose",id:"docker-compose",children:[]}]},{value:"Data Types",id:"data-types",children:[{value:"Keystore",id:"keystore",children:[]},{value:"Statestore",id:"statestore",children:[]},{value:"Chunkstore",id:"chunkstore",children:[]}]},{value:"Clef",id:"clef",children:[{value:"Ubuntu / Debian / Raspbian / CentOS Package Managers",id:"ubuntu--debian--raspbian--centos-package-managers-1",children:[]},{value:"Manual",id:"manual-1",children:[]}]}],l={toc:s};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("p",null,"In order to ensure you are able to redeploy your Bee node in the event of a disaster, the contents of several directories must be retained."),Object(o.a)("div",{className:"admonition admonition-info alert alert--info"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Don't forget - it's not a backup until you have restored from it! Make sure to test your backups out so that you can be sure of recovery incase of data loss or data corruption."))),Object(o.a)("h2",{id:"bee"},"Bee"),Object(o.a)("p",null,"To restore a Bee node you must have the following directories, all backed up in an atomic moment so that they are syncronised."),Object(o.a)("p",null,"All of this data is contained within the ",Object(o.a)("em",{parentName:"p"},"data directory")," specified in your Bee configuration. "),Object(o.a)("h3",{id:"ubuntu--debian--raspbian--centos-package-managers"},"Ubuntu / Debian / Raspbian / CentOS Package Managers"),Object(o.a)("p",null,"For Linux installations from package managers ",Object(o.a)("em",{parentName:"p"},"yum")," or ",Object(o.a)("em",{parentName:"p"},"apt"),", your data directory is located at:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"/var/lib/bee\n")),Object(o.a)("p",null,"It may be also useful for you to retain your configuration files, which are held at:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"/etc/bee\n")),Object(o.a)("h3",{id:"manual"},"Manual"),Object(o.a)("p",null,"For a ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/manual"}),"manual installation")," your data directory is normally located at:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"~/.bee\n")),Object(o.a)("h3",{id:"docker-compose"},"Docker Compose"),Object(o.a)("p",null,"When using our ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/docker"}),"Docker Compose")," configuration files to run your node, Docker will create a volume for Bee and a volume for Bee Clef."),Object(o.a)("p",null,"You may use ",Object(o.a)("inlineCode",{parentName:"p"},"docker cp")," to retrieve the contents of these folders."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker cp bee_bee_1:/home/bee/.bee/ bee\ndocker cp bee_clef_1:/app clef\n")),Object(o.a)("h2",{id:"data-types"},"Data Types"),Object(o.a)("p",null,"The Bee data directory contains three stores."),Object(o.a)("h3",{id:"keystore"},"Keystore"),Object(o.a)("p",null,"The keystore contains your important key material. This is the most important data by far, and is produced and retained from Bee's initialisation procedure. If you have used ",Object(o.a)("strong",{parentName:"p"},"Bee-clef")," to manage your key material and signing procedures, see ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/maintenance/backups#ubuntu--debian--raspbian--centos-package-managers-1"}),"below")," for information on how to keep backups."),Object(o.a)("h3",{id:"statestore"},"Statestore"),Object(o.a)("p",null,"The statestore retains information related to your node, including SWAP balances, info on peers, blocklisting and much more."),Object(o.a)("h3",{id:"chunkstore"},"Chunkstore"),Object(o.a)("p",null,"The chunkstore contains chunks that are pinned in your node, or are in your neighbourhood of responsibility."),Object(o.a)("h2",{id:"clef"},"Clef"),Object(o.a)("p",null,"It is also important to back up Clef's stored data. This includes your sensitive key material, so make sure to keep this private and safe!"),Object(o.a)("h3",{id:"ubuntu--debian--raspbian--centos-package-managers-1"},"Ubuntu / Debian / Raspbian / CentOS Package Managers"),Object(o.a)("p",null,"For Linux installations from package managers ",Object(o.a)("em",{parentName:"p"},"yum")," or ",Object(o.a)("em",{parentName:"p"},"apt"),", your Clef data directory is located at:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"/var/lib/bee-clef/\n")),Object(o.a)("p",null,"Configuration files are stored in:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"/etc/bee-clef/\n")),Object(o.a)("h3",{id:"manual-1"},"Manual"),Object(o.a)("p",null,"For a manual installation of Clef your data directory is normally located at:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"~/.clef\n")))}u.isMDXComponent=!0}}]);