(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},p=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=n,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return t?i.a.createElement(m,o(o({ref:a},s),{},{components:t})):i.a.createElement(m,o({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},78:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(3),i=t(7),r=(t(0),t(100)),c={title:"Quick Start",id:"quick-start"},o={unversionedId:"installation/quick-start",id:"installation/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Bee is packaged for MacOS and Ubuntu, Raspbian, Debian and CentOS based Linux distributions.",source:"@site/docs/installation/quick-start.md",slug:"/installation/quick-start",permalink:"/docs/installation/quick-start",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/quick-start.md",version:"current",sidebar:"Balls",previous:{title:"Welcome!",permalink:"/docs/"},next:{title:"Configuration",permalink:"/docs/installation/configuration"}},l=[{value:"Install Bee Clef",id:"install-bee-clef",children:[]},{value:"Install Bee",id:"install-bee",children:[{value:"Ubuntu / Raspbian / Debian",id:"ubuntu--raspbian--debian",children:[]},{value:"CentOS",id:"centos",children:[]},{value:"MacOS",id:"macos",children:[]}]},{value:"SWAP Blockchain Endpoint",id:"swap-blockchain-endpoint",children:[]},{value:"Interact With Bee",id:"interact-with-bee",children:[{value:"Linux",id:"linux",children:[]},{value:"MacOS",id:"macos-1",children:[]},{value:"Fund Your Node",id:"fund-your-node",children:[]}]},{value:"Updating Bee",id:"updating-bee",children:[]},{value:"Uninstalling Bee",id:"uninstalling-bee",children:[{value:"Ubuntu / Debian / Raspbian",id:"ubuntu--debian--raspbian",children:[]},{value:"Centos",id:"centos-1",children:[]}]},{value:"Data Locations",id:"data-locations",children:[{value:"Bee-clef",id:"bee-clef",children:[]},{value:"Bee",id:"bee",children:[]}]}],s={toc:l};function b(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"Bee is packaged for MacOS and Ubuntu, Raspbian, Debian and CentOS based Linux distributions."),Object(r.a)("p",null,"If your system is not supported, please see the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/manual"}),"manual installation")," section for information on how to install Bee."),Object(r.a)("p",null,"The overview of the installation process:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"(Recommended) set up an external signer for Bee (i.e. install ",Object(r.a)("em",{parentName:"li"},"bee-clef"),")"),Object(r.a)("li",{parentName:"ol"},"install the Bee application package"),Object(r.a)("li",{parentName:"ol"},"fund your node with gETH and gBZZ")),Object(r.a)("h2",{id:"install-bee-clef"},"Install Bee Clef"),Object(r.a)("p",null,"Before installing Bee, it is recommended that you first ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/bee-clef"}),"install the Bee clef package"),". This will set up a Bee specific instance of the Go-Ethereum Clef signer which will be integrated with your Bee node."),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"While it is not necessary that node operators make use of Go Ethereum's Clef external signer to manage your Ethereum key pair. The following instructions include and integrate Bee-clef alongside Bee to help keep your keys safe!"))),Object(r.a)("h2",{id:"install-bee"},"Install Bee"),Object(r.a)("p",null,"To install Bee itself, simply choose the appropriate command from the ones below. This will set up Bee and start running it in the background as a service on your computer."),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Follow post install guide in terminal for initial configuration and how to start ",Object(r.a)("inlineCode",{parentName:"p"},"bee"),"."))),Object(r.a)("h3",{id:"ubuntu--raspbian--debian"},"Ubuntu / Raspbian / Debian"),Object(r.a)("h4",{id:"amd64"},"AMD64"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/ethersphere/bee/releases/download/v0.4.2/bee_0.4.2_amd64.deb\nsudo dpkg -i bee_0.4.2_amd64.deb\n")),Object(r.a)("h4",{id:"arm-raspberry-pi"},"ARM (Raspberry Pi)"),Object(r.a)("h5",{id:"armv7"},"ARMv7"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/ethersphere/bee/releases/download/v0.4.2/bee_0.4.2_armv7.deb\nsudo dpkg -i bee_0.4.2_armv7.deb\n")),Object(r.a)("h5",{id:"arm64"},"ARM64"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/ethersphere/bee/releases/download/v0.4.2/bee_0.4.2_arm64.deb\nsudo dpkg -i bee_0.4.2_arm64.deb\n")),Object(r.a)("h3",{id:"centos"},"CentOS"),Object(r.a)("h4",{id:"amd64-1"},"AMD64"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/ethersphere/bee/releases/download/v0.4.2/bee_0.4.2_amd64.rpm\nsudo rpm -i bee_0.4.2_amd64.rpm\n")),Object(r.a)("h4",{id:"arm-raspberry-pi-1"},"ARM (Raspberry Pi)"),Object(r.a)("h5",{id:"armv7-1"},"ARMv7"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/ethersphere/bee/releases/download/v0.4.2/bee_0.4.2_armv7.rpm\nsudo rpm -i bee_0.4.2_armv7.rpm\n")),Object(r.a)("h5",{id:"arm64-1"},"ARM64"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget https://github.com/ethersphere/bee/releases/download/v0.4.2/bee_0.4.2_arm64.rpm\nsudo rpm -i bee_0.4.2_arm64.rpm\n")),Object(r.a)("h3",{id:"macos"},"MacOS"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"brew tap ethersphere/tap\nbrew install swarm-bee\n")),Object(r.a)("p",null,"To run Bee as a service now and on startup, run:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"brew services start swarm-bee\n")),Object(r.a)("h2",{id:"swap-blockchain-endpoint"},"SWAP Blockchain Endpoint"),Object(r.a)("p",null,"Your Bee node must have access to the Ethereum blockchain, so that it\ncan interact and deploy your chequebook contract. You can run your\n",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/goerli/testnet"}),"own Goerli node"),", or use a\nprovider such as ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://rpc.slock.it/goerli"}),"rpc.slock.it/goerli")," or\n",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://infura.io/"}),"Infura"),"."),Object(r.a)("p",null,"By default, Bee expects a local Goerli node at ",Object(r.a)("inlineCode",{parentName:"p"},"http://localhost:8545"),". To use a provider instead, simply change your ",Object(r.a)("inlineCode",{parentName:"p"},"--swap-endpoint")," in your ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/configuration#configuring-bee-installed-using-a-package-manager"}),"configuration file"),"."),Object(r.a)("h2",{id:"interact-with-bee"},"Interact With Bee"),Object(r.a)("p",null,"Once Bee has been installed, it will start up as a ",Object(r.a)("inlineCode",{parentName:"p"},"systemd")," service,\nand once it has been funded, its HTTP based\n",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"API")," will start listening at\n",Object(r.a)("inlineCode",{parentName:"p"},"localhost:1633"),"."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl localhost:1633\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"Ethereum Swarm Bee\n")),Object(r.a)("h3",{id:"linux"},"Linux"),Object(r.a)("p",null,"We can now manage the Bee service using ",Object(r.a)("inlineCode",{parentName:"p"},"systemctl"),"."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"systemctl status bee\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"\u25cf bee.service - Bee - Ethereum Swarm node\n     Loaded: loaded (/lib/systemd/system/bee.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2020-11-20 23:50:15 GMT; 6s ago\n")),Object(r.a)("p",null,"Logs are available using the ",Object(r.a)("inlineCode",{parentName:"p"},"journalctl")," command:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"journalctl --lines=100 --follow --unit bee\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'Nov 20 23:50:17 sig-ln bee[55528]: time="2020-11-20T23:50:17Z" level=info msg="using swarm network address through clef: 2c24e02f26f7fdd8c5c3>\nNov 20 23:50:17 sig-ln bee[55528]: time="2020-11-20T23:50:17Z" level=info msg="swarm public key 0269fb8085bf4ac07a5f5050d7a5104a8e623e5379f64>\nNov 20 23:50:17 sig-ln bee[55528]: time="2020-11-20T23:50:17Z" level=info msg="pss public key 02f32c79a2f314afd3263e3cf9478b076acf211be1bfd88>\nNov 20 23:50:17 sig-ln bee[55528]: time="2020-11-20T23:50:17Z" level=info msg="using ethereum address 06c5aefd35d85028d65554660f353defa5ba989>\nNov 20 23:50:18 sig-ln bee[55528]: time="2020-11-20T23:50:18Z" level=info msg="using default factory address for chain id 5: a6b88705036f2a56>\nNov 20 23:50:18 sig-ln bee[55528]: time="2020-11-20T23:50:18Z" level=info msg="no chequebook found, deploying new one."\nNov 20 23:50:18 sig-ln bee[55528]: time="2020-11-20T23:50:18Z" level=warning msg="please make sure there is sufficient eth and bzz available >\nNov 20 23:50:18 sig-ln bee[55528]: time="2020-11-20T23:50:18Z" level=warning msg="on goerli you can get both goerli eth and goerli bzz from https://faucet.ethswarm.org?address=06c5aefd35d85028d65554660f353defa5ba989>\n\n')),Object(r.a)("h3",{id:"macos-1"},"MacOS"),Object(r.a)("p",null,"Services are managed using Homebrew services."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"brew services restart bee\n")),Object(r.a)("p",null,"Logs are available at ",Object(r.a)("inlineCode",{parentName:"p"},"/usr/local/var/log/swarm-bee/bee.log")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"tail -f /usr/local/var/log/swarm-bee/bee.log\n")),Object(r.a)("h3",{id:"fund-your-node"},"Fund Your Node"),Object(r.a)("p",null,"A SWAP enabled Bee node requires both ETH and BZZ to begin\noperation. The current version of Swarm incentives is running on the\nEthereum testnet called Goerli. You can acquire free Goerli tokens\nfrom the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://faucet.ethswarm.org"}),"Swarm faucet"),"."),Object(r.a)("p",null,"To find a Bee node's Ethereum address you can:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"look into its logs (see above),"),Object(r.a)("li",{parentName:"ul"},"use the handy ",Object(r.a)("inlineCode",{parentName:"li"},"bee-get-addr")," utility,"),Object(r.a)("li",{parentName:"ul"},"send a request to our Bee node's\n",Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"/docs/api-reference/api-reference"}),"debug API")," endpoint\ncalled  ",Object(r.a)("em",{parentName:"li"},"addresses"),".")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"bee-get-addr\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"Please make sure there is sufficient eth and bzz available on 06c5aefd35d85028d65554660f353defa5ba989 address.\nYou can get both goerli eth and goerli bzz from https://faucet.ethswarm.org\n")),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"For a new installation of Bee, the debug API endpoint is not yet exposed for security reasons. To enable the debug API endpoints, set ",Object(r.a)("inlineCode",{parentName:"p"},"debug-api-enable")," to ",Object(r.a)("inlineCode",{parentName:"p"},"true")," in your ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/configuration#configuring-bee-installed-using-a-package-manager"}),"configuration file")," and restart your Bee service."))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s localhost:1635/addresses | jq .ethereum\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"0x97a472ff3a28a2e93ef4d2f523ff48e39c4bf579"\n')),Object(r.a)("p",null,"Visit ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://faucet.ethswarm.org"}),"https://faucet.ethswarm.org")," and fill out the form to receive your initial supply of gBZZ and GETH."),Object(r.a)("p",null,"Once this has been credited, we can now watch our logs and watch as Bee automatically deploys a chequebook and makes an initial deposit."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"journalctl --lines=100 --follow --unit bee\n")),Object(r.a)("p",null,"Once this is complete, we should start to see our Bee node connect to other nodes in the network as it begins to take part in the swarm."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'...\nNov 20 23:52:44 sig-ln bee[55528]: time="2020-11-20T23:52:44Z" level=info msg="greeting <Welcome to the Swarm, you are Bee-ing connected!> from peer: a0c8fb41346b877b87e7aa31b109a9eef1f38f476304631f4962407b732e3db0"\n...\n')),Object(r.a)("p",null,"If these messages are missing, check out our comprehensive guide to Bee ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/connectivity"}),"connectivity"),"."),Object(r.a)("h2",{id:"updating-bee"},"Updating Bee"),Object(r.a)("p",null,"Your Bee and Bee-clef installations can be updated by repeating the install steps above. Bee sure to ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/maintenance/backups"}),"backup")," your clef key material and Bee data before applying updates."),Object(r.a)("h2",{id:"uninstalling-bee"},"Uninstalling Bee"),Object(r.a)("p",null,"If you need to remove Bee, you may simply run the below commands."),Object(r.a)("h3",{id:"ubuntu--debian--raspbian"},"Ubuntu / Debian / Raspbian"),Object(r.a)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Uninstalling Bee will also delete Bee and Bee-clef data! Make sure you ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/maintenance/backups"}),"make backups")," so you don't lose your keys and data."))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"sudo apt-get remove bee\nsudo apt-get remove bee-clef\n")),Object(r.a)("h3",{id:"centos-1"},"Centos"),Object(r.a)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Uninstalling Bee will also delete Bee and Bee-clef data! Make sure you ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/maintenance/backups"}),"make backups")," so you don't lose your keys and data."))),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"sudo yum remove bee\nsudo yum remove bee-clef\n")),Object(r.a)("h2",{id:"data-locations"},"Data Locations"),Object(r.a)("h3",{id:"bee-clef"},"Bee-clef"),Object(r.a)("p",null,"Configuration files are stored in ",Object(r.a)("inlineCode",{parentName:"p"},"/etc/bee-clef/")),Object(r.a)("p",null,"Key material and other data is stored in ",Object(r.a)("inlineCode",{parentName:"p"},"/var/lib/bee-clef/")),Object(r.a)("h3",{id:"bee"},"Bee"),Object(r.a)("p",null,"Configuration files are stored in ",Object(r.a)("inlineCode",{parentName:"p"},"/etc/bee/")),Object(r.a)("p",null,"State, chunks and other data is stored in ",Object(r.a)("inlineCode",{parentName:"p"},"/var/lib/bee/")))}b.isMDXComponent=!0}}]);