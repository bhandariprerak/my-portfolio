(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3638,5004],{29406:(e,n,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/apis/pricing",function(){return s(10208)}])},3638:(e,n,s)=>{"use strict";s.d(n,{A:()=>P});var o=s(74848),i=s(14953),r=s.n(i),t=s(96540),a=s(26646),l=s(43049),p=s(2584),c=s.n(p),m=s(67776),d=s.n(m);s(34811);var h=s(65723),u=s(94598);let Y=r()(()=>s.e(2245).then(s.bind(s,92245)),{loadableGenerated:{webpack:()=>[92245]},ssr:!1}),P=e=>{let n=(0,u.M)(),[s,i]=(0,t.useState)({}),[r,p]=(0,t.useState)(null);return(0,t.useEffect)(()=>{i({code:n=>{var s,i;let r=Array.isArray(n.children)?null===(s=n.children[0])||void 0===s?void 0:s.trim():null===(i=n.children)||void 0===i?void 0:i.trim();return n.inline?(0,o.jsx)("code",{children:r}):(0,o.jsx)(Y,{language:n.language||n.className,value:r,disableCopyPaste:e.disableCopyPaste})},a:e=>(0,o.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer nofollow",children:e.children})}),p((null==n?void 0:n.theme)==="dark"?"dark":"light")},[n.theme]),(0,o.jsx)(a.$,{className:"md-view oc-theme-".concat(r," ").concat(e.disableCopyPaste?"unselectable":""),remarkPlugins:[d(),c(),h.A],rehypePlugins:[l.A],components:{...s},children:e.markdown||""})}},13684:(e,n,s)=>{"use strict";s.d(n,{A:()=>E});var o=s(74848),i=s(46550),r=s(52064),t=s(11347),a=s(20889),l=s(12515),p=s(23278),c=s(2424),m=s(66247),d=s(96540),h=s(80923),u=s(63279),Y=s(3638);let P=[{title:"APIs Overview",path:"/apis"},{title:"Code Execution APIs",path:"/apis/code-execution"},{title:"Embed Editor",path:"/apis/embed-editor"},{title:"Embed Challenges",path:"/apis/embed-challenges"},{title:"Embed Studio",path:"/apis/embed-studio"},{title:"Enterprise APIs",path:"/apis/enterprise"},{title:"Pricing",path:"/apis/pricing"}],E=function(e){let[n,s]=d.useState(!1),E=(0,o.jsxs)("div",{children:[(0,o.jsx)(r.A,{sx:e=>({...e.mixins.toolbar})}),P.map(n=>(0,o.jsx)(u.Link,{route:n.path,children:(0,o.jsx)(r.A,{component:"span",sx:e=>({textDecoration:"none",color:e.palette.text.primary}),children:(0,o.jsx)(t.A,{selected:e.path===n.path,children:(0,o.jsx)(a.A,{primary:n.title})})})},n.path))]});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.A,{position:"fixed"}),(0,o.jsxs)(r.A,{component:"nav",sx:e=>({[e.breakpoints.up("md")]:{width:240,flexShrink:0}}),children:[(0,o.jsx)(l.Ay,{sx:{display:{xs:"block",md:"none"},"& .MuiDrawer-paper":{width:240}},variant:"temporary",anchor:"left",open:n,onClose:()=>s(e=>!e),ModalProps:{keepMounted:!0},children:E}),(0,o.jsx)(l.Ay,{sx:{display:{xs:"none",md:"block"},"& .MuiDrawer-paper":{width:240}},variant:"permanent",open:!0,children:E})]}),(0,o.jsx)(r.A,{component:"main",sx:e=>({width:"100%",padding:e.spacing(3)}),children:(0,o.jsxs)(p.A,{maxWidth:"lg",children:[(0,o.jsx)(r.A,{sx:e=>({...e.mixins.toolbar})}),(0,o.jsx)(c.A,{sx:e=>({marginRight:e.spacing(2),[e.breakpoints.up("md")]:{display:"none"}}),color:"inherit",edge:"start",onClick:()=>s(e=>!e),size:"large",children:(0,o.jsx)(i.A,{})}),(0,o.jsx)(m.A,{variant:"h5",component:"h1",gutterBottom:!0,align:"center",children:e.title}),(0,o.jsx)(Y.A,{markdown:e.markdown||""})]})})]})}},10208:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>a});var o=s(74848),i=s(4853);s(96540);var r=s(13684);let t="\n## APIs Pricing\n\n|| P1 | P2 | P3 | P4 | More/Custom |\n|---|---|---|---|---|---|\n|Price|$5 per month | $10 per month | $25 per month | $50 per month | Contact Us|\n|Calls per month| 10,000| 30,000| 100,000| 300,000| Unlimited |\n| Code Execution| Yes|Yes|Yes|Yes|Yes|\n| Support| Email| Email| Email| Email| Email/ Slack/ Phone|\n\n\nYou can also purchase the APIs online below\n- [RapidAPI Marketplace](https://rapidapi.com/onecompiler-onecompiler-default/api/onecompiler-apis/pricing)\n- [Zyla API Hub](https://zylalabs.com/api-marketplace/tools/onecompiler/3763)\n\n\n## Enterprise Pricing (pay as you go model)\n\n| | E1 | E2 | E3| E4| More/Custom |\n|---|---|---|---|---|---|\n|Price| $100 per month| $200 per month|  $1,000 per month | $2,000 per month | Contact Us|\n|Calls per month| 500,000 | 1,000,000 | 5,000,000| 10,000,000|  Unlimited |\n|Challenge APIs| Yes| Yes| Yes| Yes|  Yes|\n|Priority Execution| Yes| Yes| Yes | Yes|  Yes|\n|Max runtime| 7s|  7s | 10s| 20s|  Custom|\n|Custom Theme| No| Yes| Yes| Yes |  Yes|\n|SSO| No| Yes| Yes| Yes|  Yes|\n|Report APIs| No| No| Yes| Yes|  Yes|\n|Studio| No| No | No | Yes ~#~ |  Yes ~#~|\n|Internet Permission (In Editor)| No| No| No| Yes|  Yes|\n|Support | Email| Email| Email/ Slack/ Phone| Email/ Slack/ Phone| Email/ Slack/ Phone|\n\n\n[comment]: <> (|Isolated Runs| No| No| Yes| Yes| Yes|)\n[comment]: <> (|Write Access| No| Yes| Yes| Yes| Yes|)\n\nNote: No limit on the number of users.\n\n\n\n## Enterprise Pricing (per user model)\n\n| | EU1 | EU2 | EU3| More/Custom |\n|---|---|---|---|---|\n|Price| $2 per user per year|  $5 per user per year | $12 per user per year | Contact Us|\n|Minimum Users| 1000| 500| 500|  Custom|\n|Editor| Yes| Yes| Yes|  Yes|\n|Challenges | Yes| Yes| Yes|  Yes|\n|Report APIs | Yes| Yes| Yes|  Yes|\n|LMS App| No| Yes| Yes|  Yes|\n|Custom Theme| No| Yes| Yes|  Yes|\n|Custom Domain| No| Yes| Yes|  Yes|\n|SLA| No| Yes| Yes|  Yes|\n|SSO| No| Yes| Yes|  Yes|\n|Internet Permission (In Editor)| No| No| Yes| Yes|\n|Studio| No| No| Yes ~#~ |  Yes|\n|Support| Email| Email/ Slack/ Phone| Email/ Slack/ Phone| Email/ Slack/ Phone|\n\nNote: No limit on the number of API calls/ challenges.\n\n## Support Plans\n\nEnterprise plans typically bundled with support plans.\nPlease double check your existing support plan before purchasing the dedicated support plans.\n\n| |Basic (Default) | Developer | Business| Enterprise|\n|---|---|---|---|---|\n|Price| Free|  $100 per month | $500 per month | $1000 per month|\n|Email Support| Yes| Yes| Yes| Yes|\n|Slack Invitation| No| Yes| Yes| Yes|\n|Phone Support| No| No| No| Yes|\n|Priority Support| No| No| No| Yes|\n|Max Response Time| 24 hours| 12 hours| 6 hours| 1 hour|\n\n";t+="## Studio Pricing\n\nSome of the Enterprise plans comes with Studio.  \n\n\n\\#  E2, E3, E4 supports pay as you go model for Studio.\n\\#  EU3 plan gives 20hrs of studio time per user per month.\n\nFollowing is the pricing for **pay as you go** Studio usage.\n\n| Workspace Configuration | Price per hour| Recommended for |\n|---|---|---|\n| 1 core CPU + 512MB Memory| $0.06| NodeJS, Python, React, C, C++, HTML|\n| 1 core CPU + 1GB Memory  | $0.12| MERN, Java, Flask, Angular |\n| 2 core CPU + 2GB Memory  | $0.20| Spring Boot, Django, Flutter |\n\n\n## Other Links: \n- [Pricing in INR](/apis/pricing-inr)\n- [Pricing in EUR](/apis/pricing-euro)\n";let a=function(){return(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)(i.bV,{title:"OneCompiler APIs | Code Execution | Embeddable Editor | Challenge APIs | Enterprise APIs | Pricing"}),(0,o.jsx)(r.A,{title:"",path:"/apis/pricing",markdown:t})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[2611,2058,7062,863,7840,8851,7862,2101,2350,655,1884,9637,3554,4853,328,923,636,6593,8792],()=>n(29406)),_N_E=e.O()}]);