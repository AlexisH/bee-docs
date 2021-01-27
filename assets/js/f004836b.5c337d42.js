(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||r;return a?o.a.createElement(m,c(c({ref:t},l),{},{components:a})):o.a.createElement(m,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(100)),i={title:"Connectivity",id:"connectivity"},c={unversionedId:"installation/connectivity",id:"installation/connectivity",isDocsHomePage:!1,title:"Connectivity",description:"To fully connect to the swarm, your Bee node needs to be able to both send and receive messages from the outside world. Normally, your router will not allow other IP's on the internet to connect, unless you have connected to them first. In Swarm, we welcome newcomers, as long as they play by the rules. If a node misbehaves, we will simply add it to a list of blocked nodes and refuse future connections from them.",source:"@site/docs/installation/connectivity.md",slug:"/installation/connectivity",permalink:"/docs/installation/connectivity",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/connectivity.md",version:"current",sidebar:"Balls",previous:{title:"Bee Using Docker",permalink:"/docs/installation/docker"},next:{title:"Clef External Signer",permalink:"/docs/installation/bee-clef"}},s=[{value:"Networking Basics",id:"networking-basics",children:[]},{value:"Your IP",id:"your-ip",children:[{value:"Datacenters and Computers Connected Directly to the Internet",id:"datacenters-and-computers-connected-directly-to-the-internet",children:[]},{value:"Home, Commercial and Business Networks and Other Networks Behind NAT",id:"home-commercial-and-business-networks-and-other-networks-behind-nat",children:[]},{value:"Debugging Connectivity",id:"debugging-connectivity",children:[]}]}],l={toc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"To fully connect to the swarm, your Bee node needs to be able to both send and receive messages from the outside world. Normally, your router will not allow other IP's on the internet to connect, unless you have connected to them first. In Swarm, we welcome newcomers, as long as they play by the rules. If a node misbehaves, we will simply add it to a list of blocked nodes and refuse future connections from them."),Object(r.a)("p",null,"In Swarm, every Bee counts! To make sure all Bees can join the swarm, below you will find a detailed guide to navigating your way through your network and making out into the wild so you can buzz with the crowd. If you still have problems, join us in ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://beehive.ethswarm.org/"}),"The Beehive")," and we'll help you find the way! \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d"),Object(r.a)("h3",{id:"networking-basics"},"Networking Basics"),Object(r.a)("p",null,"In a network, each computer is assigned an IP. Each IP is then subdivided into thousands of ",Object(r.a)("em",{parentName:"p"},"sockets")," or ",Object(r.a)("em",{parentName:"p"},"ports"),", each of which has an incoming and outgoing component."),Object(r.a)("p",null,"In a completely trusted network of computers, connections to or from any of these ports are allowed. However, to protect ourselves from nefarious actors when we join the wider internet, it is sometimes important to filter this traffic so that some of these ports are off limits to the public."),Object(r.a)("p",null,"In order to allow other Bee nodes we have previously not met to be able to send messages to our p2p port, usually ",Object(r.a)("inlineCode",{parentName:"p"},"1634"),", we must ensure that our network is set up to receive incoming connections."),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"There are also some ports which you should never expose to the outside internet. Make sure that your ",Object(r.a)("inlineCode",{parentName:"p"},"api-addr"),", usually port ",Object(r.a)("inlineCode",{parentName:"p"},"1633")," is only exposed in ",Object(r.a)("inlineCode",{parentName:"p"},"Gateway Mode")," and your ",Object(r.a)("inlineCode",{parentName:"p"},"--debug-api-addr"),", usually ",Object(r.a)("inlineCode",{parentName:"p"},"1635")," is never exposed to the internet. It is good practice to employ one or more firewalls which block traffic on every port except for those for whom you are expecting it."))),Object(r.a)("h2",{id:"your-ip"},"Your IP"),Object(r.a)("p",null,"When you connect to the internet, you are assigned a unique number called an IP Address. IP stands for ",Object(r.a)("strong",{parentName:"p"},"Internet Protocol"),". The most prevalent IP version used is ",Object(r.a)("em",{parentName:"p"},"still")," the archaic ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IPv4"}),"IPv4")," which was invented way back in 1981. IPv6 is available but not well used. Due to the mitigation of the deficiencies within this standard, we may encounter some complications."),Object(r.a)("h3",{id:"datacenters-and-computers-connected-directly-to-the-internet"},"Datacenters and Computers Connected Directly to the Internet"),Object(r.a)("p",null,"If you are renting space in a datacenter, the chances are that your computer will be connected directly to the real internet. This means that the IP of your networking interface will be directly set to be the same as your public IP."),Object(r.a)("p",null,"You can investigate this by running:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"ifconfig\n")),Object(r.a)("p",null,"or "),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"ip address\n")),Object(r.a)("p",null,"Your output should contain something like:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 178.128.196.191  netmask 255.255.240.0  broadcast 178.128.207.255\n")),Object(r.a)("p",null,"Here we can see our computer's ",Object(r.a)("strong",{parentName:"p"},"public IP")," ",Object(r.a)("inlineCode",{parentName:"p"},"178.128.196.191"),". This is the address that is used by other computers we connect to over the internet. We can verify this using a third party service such as ",Object(r.a)("em",{parentName:"p"},"icanhazip"),"."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl icanhazip.com\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"178.128.196.191\n")),Object(r.a)("p",null,"If these numbers correspond, congratulations! You may skip the next section!"),Object(r.a)("h3",{id:"home-commercial-and-business-networks-and-other-networks-behind-nat"},"Home, Commercial and Business Networks and Other Networks Behind NAT"),Object(r.a)("p",null,"To address the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IPv4_address_exhaustion"}),"scarcity of IP numbers"),", Network Address Translation (NAT) was implemented. This approach creates a smaller, private network which many devices connect to in order to share a public IP. Traffic destined for the internet at large is then mediated by another specialised computer. In the cases of the a home network, this computer is the familiar home router, normally also used to provide a wifi network."),Object(r.a)("p",null,"If we run the above commands to find the computer's IP in this scenario, we will see a different output."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"ip address\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500\n    ...\n    inet 192.168.0.10 netmask 0xffffff00 broadcast 192.168.0.255\n    ...\n")),Object(r.a)("p",null,"Here we can see that, instead of the public IP, we can see that our computers IP is ",Object(r.a)("inlineCode",{parentName:"p"},"192.168.0.10"),". This is part of the IP address space that the Internet Engineering Task Force has designated for ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Private_network"}),"private networks"),". "),Object(r.a)("p",null,"As this IP won't work on the global internet, our router remembers that our computer has been assigned this IP. It then uses Network Address Translation to modify all requests from our computer to another computer somewhere in the internet. As the requests pass through the router it changes our local IP to the public IP of the router, and vice versa when the responses are sent back, from the public IP to the local one."),Object(r.a)("h4",{id:"navigating-through-the-nat"},"Navigating Through the NAT"),Object(r.a)("p",null,"The presence of Network Address Translations presents two problems for p2p networking. "),Object(r.a)("p",null,"The first is that it can be difficult for programs running on our computer to know our real public IP as it is not explicitly known by our computer's networking interface, which is configured with a private network IP. This is a relatively easy problem to solve as we can simply discover our public IP and then specify it in Bee's configuration, or indeed determine it using other means."),Object(r.a)("p",null,"The second issue is that our router has only 65535 ports to expose to the public network, however, ",Object(r.a)("em",{parentName:"p"},"each device on your private network")," is capable of exposing 65535 ",Object(r.a)("em",{parentName:"p"},"each"),". To the global internet, it appears that there is only one set of ports to connect to, whereas, in actual fact, there is a full set of ports for each of the devices which are connected to the private network. To solve this second problem, routers commonly employ an approach known as ",Object(r.a)("em",{parentName:"p"},"port forwarding"),"."),Object(r.a)("p",null,"Bee's solution to these problems come in two flavours, automatic and manual."),Object(r.a)("h5",{id:"automatic-universal-plug-and-play-upnp"},"Automatic: Universal Plug and Play (UPNP)"),Object(r.a)("p",null,"UPNP is a protocol designed to simplify the administration of NAT and port forwarding by the end user by providing an API which software running within the network can use to ask the router for the external IP and to request for ports to be forwarded to the internal IP of the computer running the software."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-danger"}),"UPNP can be considered a security risk as it exposes your (real) public IP to any processes running on your computer, and also allows them to open arbitrary ports which may be used to transfer malicious traffic, for example a [RAT](https://en.wikipedia.org/wiki/Remote_desktop_software#RAT). We recommend you disable UPNP on your router and use manual port forwarding as described below.\n")),Object(r.a)("p",null,"Bee will use UPNP to determine your public IP, which is required for various internal processes."),Object(r.a)("p",null,"In addition to this, a request will be sent to your router to ask it\nto forward a random one of its ports, which are exposed directly to\nthe internet, to the Bee p2p port (usually ",Object(r.a)("inlineCode",{parentName:"p"},"1634"),") which your computer\nis exposing only to the private network. Doing this creates a tunnel\nthrough which other Bee's may connect to your computer safely."),Object(r.a)("p",null,"If you start your Bee node in a private network with UPNP available, the output of the addresses endpoint of your debug API will look something like this:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip4/86.98.94.9/tcp/20529/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP"\n]\n')),Object(r.a)("p",null,"Note that the port in the external ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.libp2p.io/concepts/addressing/"}),"multiaddress")," is the router's randomly selected ",Object(r.a)("inlineCode",{parentName:"p"},"20529")," which is forwarded by the router to ",Object(r.a)("inlineCode",{parentName:"p"},"192.168.0.10:1634"),"."),Object(r.a)("h5",{id:"manual-configure-your-router-and-bee"},"Manual: Configure Your Router and Bee"),Object(r.a)("p",null,"Inspecting the underlay addresses in the output of the addresses endpoint our debug API, we can see addresses only for ",Object(r.a)("em",{parentName:"p"},"localhost")," ",Object(r.a)("inlineCode",{parentName:"p"},"127.0.0.1")," and our ",Object(r.a)("em",{parentName:"p"},"private network IP")," ",Object(r.a)("inlineCode",{parentName:"p"},"192.168.0.10"),". Bee must be having trouble navigating our NAT."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n]\n')),Object(r.a)("p",null,"To help fix the first problem, let's determine our public IP."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl icanhazip.com\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"86.98.94.9\n")),Object(r.a)("p",null,"Now we can simply supply this IP in our Bee configuration on startup."),Object(r.a)("p",null,"Solving our second problem is a little more difficult as we will need to interact with our router's firmware, which is a little cranky."),Object(r.a)("p",null,"Each router is different, but the concept is usually the same. Log in to your router by navigating your browser to your router's configuration user interface, usually at ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://192.168.0.1"}),"http://192.168.0.1"),". You will need to log in with a password. Sadly, passwords are often left to be the defaults, which can be found readily on the internet."),Object(r.a)("p",null,"Once logged in, find the interface to set up port forwarding. The ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://portforward.com/router.htm"}),"Port Forward")," website provides some good information, or you may refer to your router manual or provider."),Object(r.a)("p",null,"Here, we will then set up a rule that forwards port ",Object(r.a)("inlineCode",{parentName:"p"},"1634")," of our internal IP ",Object(r.a)("inlineCode",{parentName:"p"},"192.168.0.10")," to the same port ",Object(r.a)("inlineCode",{parentName:"p"},"1634")," of our external IP."),Object(r.a)("p",null,"Now, when requests arrive at our external address ",Object(r.a)("inlineCode",{parentName:"p"},"86.98.94.9:1634")," they are modified by our router and forwarded to our internal IP and port ",Object(r.a)("inlineCode",{parentName:"p"},"192.168.0.10:1634"),"."),Object(r.a)("p",null,"Sometimes this can be a little tricky, so let's verify we are able to make a TCP connection using ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://nmap.org/ncat/"}),"netcat"),"."),Object(r.a)("p",null,"First, with Bee ",Object(r.a)("strong",{parentName:"p"},"not")," running, let's set up a simple TCP listener using Netcat on the same machine we would like to run Bee on."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"nc -l 0.0.0.0 1634\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"nc -zv 86.98.94.9 1634\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"Connection to 86.98.94.9 port 1834 [tcp/*] succeeded!\n")),Object(r.a)("p",null,"Success! \u2728"),Object(r.a)("p",null,"If this didn't work for you, check out our Debugging Connectivity guide below."),Object(r.a)("p",null,"If it did, let's start our Bee node with the ",Object(r.a)("inlineCode",{parentName:"p"},"--nat-addr")," configured."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"bee start --nat-addr 86.98.94.9:1634\n")),Object(r.a)("p",null,"Checking our addresses endpoint again, we can now see that Bee has been able to successfully assign a public address! Congratulations, your Bee is now connected to the outside world!"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/86.98.94.9/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB"\n]\n')),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"If you are regularly connecting and disconnecting to a network, you\nmay also want to use your router's firmware to configure the router to\nreserve and only assign the same local network IP from its DHCP pool\nto your computer's MAC address. This will ensure that your Bee\nseamlessly connects when you rejoin the network!"))),Object(r.a)("h3",{id:"debugging-connectivity"},"Debugging Connectivity"),Object(r.a)("p",null,"The above guide navigates your NAT, but there are still a few hurdles to overcome. To make sure there is a clear path from your computer to the outside world, let's follow our Bee's journey from the inside out."),Object(r.a)("p",null,"Let's set up a Netcat listener on all interfaces on the computer we'd like to run Bee on as we have above."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"nc -l 0.0.0.0 1634\n")),Object(r.a)("p",null,"Now, let's verify we're above to test this by checking the connection on our local machine."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"nc -zv 127.0.0.1 1634\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"Connection to 127.0.0.1 port 1634 [tcp/*] succeeded!\n")),Object(r.a)("p",null,"This should be a no brainer, the connection between localhost in not normally mediated. "),Object(r.a)("p",null,"If there is a problem here, the problem is with some other software running on your operating system or your operating system itself. Try a different port, such as ",Object(r.a)("inlineCode",{parentName:"p"},"1734")," and turning off any unneccesary software. If this doesn't work, you may need to try a different operating system environment. Please get in touch and we'll try to help!"),Object(r.a)("p",null,"If we were successful, let's move on to the next stage."),Object(r.a)("div",{className:"admonition admonition-info alert alert--info"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"If you are not able to get access to some firewall settings, or otherwise debug incoming connectivity, don't worry! All is not lost. Bee can function just fine with just outgoing connections. However, if you can, it is worth the effort to allow incoming connections, as this benefits the whole of the swarm."))),Object(r.a)("p",null,"Let's find out what our IP looks like to the internet."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl icanhazip.com\n")),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"86.98.94.9\n")),Object(r.a)("p",null,"Now try to connect to your port using the global IP."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"nc -zv 86.98.94.9 1634\n")),Object(r.a)("p",null,"If this is successful, our Bee node's path is clear!"),Object(r.a)("p",null,"If not, we can try a few things to make sure there are no barriers stopping us from getting through."),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Check your computers firewall.")),Object(r.a)("p",null,"Sometimes your computer is configured to prevent connections. If you are on a private network mediated by NAT, you can check if this is the problem by trying to connect from another device on your network using the local IP ",Object(r.a)("inlineCode",{parentName:"p"},"nc -zv 192.168.0.10 1634"),"."),Object(r.a)("p",null,"Ubuntu uses ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://help.ubuntu.com/community/UFW"}),"UFW"),", MacOS can be configured using the ",Object(r.a)("em",{parentName:"p"},"Firewall")," tab in the ",Object(r.a)("em",{parentName:"p"},"Security & Privacy")," section of ",Object(r.a)("em",{parentName:"p"},"System Preferences"),". Windows uses ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://support.microsoft.com/en-us/help/4028544/windows-10-turn-microsoft-defender-firewall-on-or-off"}),"Defender Firewall"),"."),Object(r.a)("p",null,"For each of these firewalls, set a special rule to allow UDP and TCP traffic to pass through on port ",Object(r.a)("inlineCode",{parentName:"p"},"1634"),". You may want to limit this traffic to the Bee application only."),Object(r.a)("ol",{start:2},Object(r.a)("li",{parentName:"ol"},"Check your ingress firewall.")),Object(r.a)("p",null,"For a datacenter hired server, this configuration will often take place in somewhere in the web user interface. Refer to your server hosting provider's documentation to work out how to open ports to the open internet. Ensure that both TCP and UDP traffic are allowed."),Object(r.a)("p",null,"Similarly, if you are connecting from within a private network, you may find that the port is blocked by the router. Each router is different, so consult your router's firware documentation to make sure there are no firewalls in place blocking traffic on your Bee's designated p2p port."),Object(r.a)("p",null,"You may check this using Netcat by trying to connect using your computer's public IP, as above ",Object(r.a)("inlineCode",{parentName:"p"},"nc -zv 86.98.94.9 1634"),"."),Object(r.a)("ol",{start:3},Object(r.a)("li",{parentName:"ol"},"Docker")),Object(r.a)("p",null,"Docker adds another level of complexity. "),Object(r.a)("p",null,"To debug docker connectivity issues, we may use netcat as above to check port connections are working as expected. Double check that you are exposing the right ports to your local network, either by using the command line flags or in your docker-compose.yaml. You should be able to successfully check the connection locally using eg. ",Object(r.a)("inlineCode",{parentName:"p"},"nc -zv localhost 1634")," then follow instructions above to make sure your local network has the correct ports exposed to the internet."),Object(r.a)("ol",{start:3},Object(r.a)("li",{parentName:"ol"},"Something else entirely?")),Object(r.a)("p",null,"Networking is a complex topic, but it keeps us all together. If you still can't connect to your Bee, get in touch via ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"http://beehive.ethswarm.org/"}),"The Beehive")," and we'll do our best to get you connected. In the swarm, no Bee is left behind. "))}p.isMDXComponent=!0}}]);