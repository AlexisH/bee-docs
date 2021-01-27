(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return a?r.a.createElement(h,c(c({ref:t},s),{},{components:a})):r.a.createElement(h,c({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(100)),i={title:"Manual Installation",id:"manual"},c={unversionedId:"installation/manual",id:"installation/manual",isDocsHomePage:!1,title:"Manual Installation",description:"Quick Install (Stable)",source:"@site/docs/installation/manual.md",slug:"/installation/manual",permalink:"/docs/installation/manual",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/manual.md",version:"current",sidebar:"Balls",previous:{title:"Configuration",permalink:"/docs/installation/configuration"},next:{title:"Build from Source",permalink:"/docs/installation/build-from-source"}},l=[{value:"Quick Install (Stable)",id:"quick-install-stable",children:[]},{value:"Bee Clef External Signer",id:"bee-clef-external-signer",children:[]},{value:"Run Bee",id:"run-bee",children:[]},{value:"Create Your Wallet",id:"create-your-wallet",children:[]},{value:"SWAP Bandwidth Incentives",id:"swap-bandwidth-incentives",children:[]},{value:"Join the Swarm",id:"join-the-swarm",children:[]},{value:"Getting help",id:"getting-help",children:[{value:"Upgrading Bee",id:"upgrading-bee",children:[]},{value:"Edge (Unstable)",id:"edge-unstable",children:[]}]}],s={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"quick-install-stable"},"Quick Install (Stable)"),Object(o.a)("p",null,"We provide a convenient ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee/blob/637b67a8e0a2b15e707f510bb7f49aea4ef6c110/install.sh"}),"installation script"),", which automatically detects your execution environment and installs the latest stable version of the Bee client on your computer."),Object(o.a)("p",null,"If your system is not supported, you might want to try to ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/build-from-source"}),"build directly from source"),"."),Object(o.a)("p",null,"To install the binary using our quick install script, run either one of the following commands in your Terminal..."),Object(o.a)("h4",{id:"wget"},"wget"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget -q -O - https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | TAG=v0.4.2 bash\n")),Object(o.a)("h4",{id:"curl"},"curl"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | TAG=v0.4.2 bash\n")),Object(o.a)("h3",{id:"bee-clef-external-signer"},"Bee Clef External Signer"),Object(o.a)("p",null,"We recommend that Swarm node implementations make use of Go Ethereum's Clef external signer. Instructions of installing and integrating this with Bee can be found ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/bee-clef"}),"here"),"."),Object(o.a)("h3",{id:"run-bee"},"Run Bee"),Object(o.a)("p",null,"Once you have installed Bee, you can test that it has been successfully installed by running."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"bee version\n")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"0.4.2\n")),Object(o.a)("p",null,"Now your Bee node is installed, you can fund your node with gBZZ join us in the swarm! \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d"),Object(o.a)("p",null,"With Bee installed, simply type ",Object(o.a)("inlineCode",{parentName:"p"},"bee start")," in your Terminal. "),Object(o.a)("p",null,"This command will start Bee for the first time and prompt you to create your Bee wallet."),Object(o.a)("h2",{id:"create-your-wallet"},"Create Your Wallet"),Object(o.a)("p",null,"When you first run Bee, you will be asked to input a user password. It is important to choose a strong unique password, as this will protect your valuable ",Object(o.a)("strong",{parentName:"p"},"private key")," which is generated during startup. "),Object(o.a)("p",null,"This secret key is stored encrypted in your ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/configuration#--data-dir"}),"Bee data directory")," (usually ",Object(o.a)("inlineCode",{parentName:"p"},"~/.bee"),"). It represents your Swarm Address - your anonymous identity in Swarm."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"bee start\n> Welcome to the Swarm.... Bzzz Bzzzz Bzzzz\n                \\     /\n            \\    o ^ o    /\n              \\ (     ) /\n   ____________(%%%%%%%)____________\n  (     /   /  )%%%%%%%(  \\   \\     )\n  (___/___/__/           \\__\\___\\___)\n     (     /  /(%%%%%%%)\\  \\     )\n      (__/___/ (%%%%%%%) \\___\\__)\n              /(       )\\\n            /   (%%%%%)   \\\n                 (%%%)\n                   !\nPassword:\n")),Object(o.a)("h2",{id:"swap-bandwidth-incentives"},"SWAP Bandwidth Incentives"),Object(o.a)("p",null,"SWAP mode is now enabled by default for testing on Swarm mainnet, you must include configuration parameters specifying a valid ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://goerli.net/"}),"Goerli Testnet")," RPC endpoint. You can run your ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/goerli/testnet"}),"own Goerli node"),", or use a RPC provider such as ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://rpc.slock.it/goerli"}),"rpc.slock.it/goerli")," or ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://infura.io/"}),"Infura"),"."),Object(o.a)("p",null,"When running your Bee node with SWAP enabled for the first time, your Bee node will deploy a 'chequebook' contract using the canonical factory contract which is deployed by Swarm. A factory is used to ensure every node is using legitimate and verifiable chequebook contracts. Once the chequebook is deployed, Bee will deposit a certain amount of gBZZ (Goerli BZZ tokens) in the chequebook contract so that it can pay other nodes in return for their services."),Object(o.a)("p",null,"In order to interact with the Goerli blockchain to deploy contracts and make payments, we must fund our account with Goerli ETH (GETH), and to make payments in return for services our account must also own some Goerli BZZ (gBZZ). We can get both tokens for trial purposes from the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://faucet.ethswarm.org/"}),"Swarm Goerli Faucet"),"."),Object(o.a)("p",null,"To find out your Ethereum address, we can simply run our Bee node and point it at the Goerli rpc endpoint."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"bee start \\\n  --verbosity 5 \\\n  --swap-endpoint https://rpc.slock.it/goerli \\\n  --debug-api-enable\n")),Object(o.a)("p",null,"Since we haven't yet funded our account, we will see a message in our logs asking us to fund our Ethereum account. Navigate to the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://faucet.ethswarm.org/"}),"Swarm Goerli Faucet")," and submit your address, ensuring it is prepended with the characters ",Object(o.a)("inlineCode",{parentName:"p"},"0x")," to the faucet, fill out the recaptcha and wait for confirmation that your gETH and gBZZ have been dispensed."),Object(o.a)("p",null,"Now, we can run our Bee node and we will start to see Bee creating and waiting for transactions to complete. Please be patient as this might take a few moments."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"INFO[2020-09-28T14:59:38+01:00] no chequebook found, deploying new one.\nINFO[2020-09-28T14:59:39+01:00] deploying new chequebook in transaction 5c2949675b49d069c4c5755e1901aa59fa4224ea2a763efe78a5293f36e04370\nINFO[2020-09-28T14:59:57+01:00] deployed chequebook at address a22c864fe5bd53cc3ae130709647a0e60e67f714\nINFO[2020-09-28T14:59:57+01:00] depositing 100000000 token into new chequebook\nINFO[2020-09-28T14:59:57+01:00] sent deposit transaction c25714a0569131707513c68f6108553bb861131253230a606a26d390e790e0f1\nINFO[2020-09-28T15:00:12+01:00] successfully deposited to chequebook\n")),Object(o.a)("p",null,"Now our chequebook is deployed, and credited with an initial deposit of gBZZ ready to be given to reward our fellow busy Bee nodes for their services. You will also provide services, and be rewarded by your peers for services you provide for them."),Object(o.a)("p",null,"For more info on bandwidth accounting, see ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced/swap"}),"SWAP Bandwidth Accounting"),"."),Object(o.a)("h2",{id:"join-the-swarm"},"Join the Swarm"),Object(o.a)("p",null,"If all goes well, you will see your node automatically begin to connect to other Bee nodes all over the world. "),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"INFO[2020-08-29T11:55:16Z] greeting <Hi I am a very buzzy bee bzzzz bzzz bzz. \ud83d\udc1d> from peer: b6ae5b22d4dc93ce5ee46a9799ef5975d436eb63a4b085bfc104fcdcbda3b82c\n")),Object(o.a)("p",null,"Now your node will begin to request chunks of data that fall within your ",Object(o.a)("em",{parentName:"p"},"radius of responsibilty")," - data that you will then serve to other p2p clients running in the swarm. Your node will then begin to respond to requests for these chunks from other peers, for which you will soon be rewarded in BZZ."),Object(o.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Incentivisation")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"In Swarm, storing chunks of data, serving and forwarding them to other nodes earns you rewards! Read about incentives in ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced/swap"}),"SWAP")," for more info."))),Object(o.a)("p",null,"Your Bee client has now generated an elliptic curve keypair similar to an Ethereum wallet. These are stored in your ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/configuration#--data-dir"}),"data directory"),", in the ",Object(o.a)("inlineCode",{parentName:"p"},"keys")," folder."),Object(o.a)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Keep Your Keys and Password Safe!")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Your keys and password are very important, back these files up and store them in a secure place that only you have access to. With great privacy comes great responsibility - while no-one will ever be able to guess your key, but you will not be able to recover them if you lose them either, so be sure to look after them well and keep secure backups."))),Object(o.a)("h2",{id:"getting-help"},"Getting help"),Object(o.a)("p",null,"The CLI has documentation build-in. Running ",Object(o.a)("inlineCode",{parentName:"p"},"bee")," gives you an entry point to the documentation. Running ",Object(o.a)("inlineCode",{parentName:"p"},"bee start -h")," or ",Object(o.a)("inlineCode",{parentName:"p"},"bee start --help")," will tell you how you can configure you bee node via the command line arguments."),Object(o.a)("p",null,"You may also check out the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/configuration"}),"configuration guide"),", or simply run your Bee terminal command with the ",Object(o.a)("inlineCode",{parentName:"p"},"--help")," flag, eg. ",Object(o.a)("inlineCode",{parentName:"p"},"bee start --help")," or ",Object(o.a)("inlineCode",{parentName:"p"},"bee --help"),"."),Object(o.a)("h3",{id:"upgrading-bee"},"Upgrading Bee"),Object(o.a)("p",null,"To upgrade previous versions of Bee installed using the above method, simply re-run the installation command above."),Object(o.a)("h3",{id:"edge-unstable"},"Edge (Unstable)"),Object(o.a)("p",null,"To get a sneak preview of the latest features added to Bee, you may also install the Edge version, which tracks the master branch of the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee"}),"Github respository")),Object(o.a)("h4",{id:"wget-1"},"wget"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"wget -q -O - https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | bash\n")),Object(o.a)("h4",{id:"curl-1"},"curl"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -s https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | bash\n")))}u.isMDXComponent=!0}}]);