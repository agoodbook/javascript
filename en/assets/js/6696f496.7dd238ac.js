"use strict";(self.webpackChunkagoodbook=self.webpackChunkagoodbook||[]).push([[8428],{2528:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=o(5893),s=o(1151);const c={},n="Web Socket",a={id:"network-requests-and-remote-resources/websocket",title:"Web Socket",description:"Web Socket\uff08\u5957\u63a5\u5b57\uff09\u7684\u76ee\u6807\u662f\u901a\u8fc7\u4e00\u4e2a\u957f\u65f6\u8fde\u63a5\u5b9e\u73b0\u4e0e\u670d\u52a1\u5668\u5168\u53cc\u5de5\u3001\u53cc\u5411\u7684\u901a\u4fe1\u3002\u5728 JavaScript\u4e2d\u521b\u5efa Web Socket \u65f6\uff0c\u4e00\u4e2a HTTP \u8bf7\u6c42\u4f1a\u53d1\u9001\u5230\u670d\u52a1\u5668\u4ee5\u521d\u59cb\u5316\u8fde\u63a5\u3002\u670d\u52a1\u5668\u54cd\u5e94\u540e\uff0c\u8fde\u63a5\u4f7f\u7528 HTTP\u7684 Upgrade \u5934\u90e8\u4ece HTTP \u534f\u8bae\u5207\u6362\u5230 Web Socket \u534f\u8bae\u3002\u8fd9\u610f\u5473\u7740 Web Socket \u4e0d\u80fd\u901a\u8fc7\u6807\u51c6 HTTP \u670d\u52a1\u5668\u5b9e\u73b0\uff0c\u800c\u5fc5\u987b\u4f7f\u7528\u652f\u6301\u8be5\u534f\u8bae\u7684\u4e13\u6709\u670d\u52a1\u5668\u3002",source:"@site/docs/network-requests-and-remote-resources/websocket.mdx",sourceDirName:"network-requests-and-remote-resources",slug:"/network-requests-and-remote-resources/websocket",permalink:"/javascript/en/network-requests-and-remote-resources/websocket",draft:!1,unlisted:!1,editUrl:"https://github.com/agoodbook/javascript/tree/main/docs/network-requests-and-remote-resources/websocket.mdx",tags:[],version:"current",lastUpdatedAt:1709918578,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Beacon API",permalink:"/javascript/en/network-requests-and-remote-resources/beacon-api"},next:{title:"Cookie",permalink:"/javascript/en/client-storage/cookie"}},i={},d=[];function k(e){const t={a:"a",code:"code",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"web-socket",children:"Web Socket"}),"\n",(0,r.jsx)(t.p,{children:"Web Socket\uff08\u5957\u63a5\u5b57\uff09\u7684\u76ee\u6807\u662f\u901a\u8fc7\u4e00\u4e2a\u957f\u65f6\u8fde\u63a5\u5b9e\u73b0\u4e0e\u670d\u52a1\u5668\u5168\u53cc\u5de5\u3001\u53cc\u5411\u7684\u901a\u4fe1\u3002\u5728 JavaScript\u4e2d\u521b\u5efa Web Socket \u65f6\uff0c\u4e00\u4e2a HTTP \u8bf7\u6c42\u4f1a\u53d1\u9001\u5230\u670d\u52a1\u5668\u4ee5\u521d\u59cb\u5316\u8fde\u63a5\u3002\u670d\u52a1\u5668\u54cd\u5e94\u540e\uff0c\u8fde\u63a5\u4f7f\u7528 HTTP\u7684 Upgrade \u5934\u90e8\u4ece HTTP \u534f\u8bae\u5207\u6362\u5230 Web Socket \u534f\u8bae\u3002\u8fd9\u610f\u5473\u7740 Web Socket \u4e0d\u80fd\u901a\u8fc7\u6807\u51c6 HTTP \u670d\u52a1\u5668\u5b9e\u73b0\uff0c\u800c\u5fc5\u987b\u4f7f\u7528\u652f\u6301\u8be5\u534f\u8bae\u7684\u4e13\u6709\u670d\u52a1\u5668\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u56e0\u4e3a Web Socket\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u534f\u8bae\uff0c\u6240\u4ee5 URL\u65b9\u6848\uff08scheme\uff09\u7a0d\u6709\u53d8\u5316\uff1a\u4e0d\u80fd\u518d\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"http://"})," \u6216 ",(0,r.jsx)(t.code,{children:"https://"}),"\uff0c\u800c\u8981\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"ws://"})," \u548c ",(0,r.jsx)(t.code,{children:"wss://"}),"\u3002\u524d\u8005\u662f\u4e0d\u5b89\u5168\u7684\u8fde\u63a5\uff0c\u540e\u8005\u662f\u5b89\u5168\u8fde\u63a5\u3002\u5728\u6307\u5b9a Web Socket URL \u65f6\uff0c\u5fc5\u987b\u5305\u542b URL \u65b9\u6848\uff0c\u56e0\u4e3a\u5c06\u6765\u6709\u53ef\u80fd\u518d\u652f\u6301\u5176\u4ed6\u65b9\u6848\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u534f\u8bae\u800c\u975e HTTP \u534f\u8bae\u7684\u597d\u5904\u662f\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u53ef\u4ee5\u53d1\u9001\u975e\u5e38\u5c11\u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u5bf9HTTP \u9020\u6210\u4efb\u4f55\u8d1f\u62c5\u3002\u4f7f\u7528\u66f4\u5c0f\u7684\u6570\u636e\u5305\u8ba9 Web Socket \u975e\u5e38\u9002\u5408\u5e26\u5bbd\u548c\u5ef6\u8fdf\u95ee\u9898\u6bd4\u8f83\u660e\u663e\u7684\u79fb\u52a8\u5e94\u7528\u3002\u4f7f\u7528\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u7f3a\u70b9\u662f\uff0c\u5b9a\u4e49\u534f\u8bae\u7684\u65f6\u95f4\u6bd4\u5b9a\u4e49 JavaScript API \u8981\u957f\u3002Web Socket \u5f97\u5230\u4e86\u6240\u6709\u4e3b\u6d41\u6d4f\u89c8\u5668\u652f\u6301\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://agoodbook.github.io/websocket/",children:"\u5168\u9762\u5b66\u4e60 Web Socket"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://agoodbook.github.io/socket.io/",children:"\u6846\u67b6 Socket.io"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>n});var r=o(7294);const s={},c=r.createContext(s);function n(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);