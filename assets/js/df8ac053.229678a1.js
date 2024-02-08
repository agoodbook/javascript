"use strict";(self.webpackChunkagoodbook=self.webpackChunkagoodbook||[]).push([[438],{1706:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var n=o(5893),t=o(1151);const l={},i="Web Storage",c={id:"client-storage/web-storage",title:"Web Storage",description:"Web Storage \u6700\u65e9\u662f\u7f51\u9875\u8d85\u6587\u672c\u5e94\u7528\u6280\u672f\u7ec4\u5728 Web Application1.0\u89c4\u8303\u63d0\u51fa\u3002\u8fd9\u4e2a\u89c4\u8303\u4e2d\u7684\u8349\u6848\u6700\u7ec8\u6210\u4e3a\u4e86HTML5\u7684\u4e00\u90e8\u5206\uff0c\u540e\u6765\u53c8\u72ec\u7acb\u6210\u4e3a\u81ea\u5df1\u7684\u89c4\u8303\u3002Web Storage \u7684\u76ee\u7684\u662f\u89e3\u51b3\u901a\u8fc7\u5ba2\u6237\u7aef\u5b58\u50a8\u4e0d\u9700\u8981\u9891\u7e41\u53d1\u9001\u670d\u52a1\u5668\u7684\u6570\u636e\u65f6\u4f7f\u7528cookie\u7684\u95ee\u9898\u3002",source:"@site/docs/client-storage/web-storage.mdx",sourceDirName:"client-storage",slug:"/client-storage/web-storage",permalink:"/javascript/client-storage/web-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/agoodbook/javascript/tree/main/docs/client-storage/web-storage.mdx",tags:[],version:"current",lastUpdatedAt:1707396334,formattedLastUpdatedAt:"2024\u5e742\u67088\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Cookie",permalink:"/javascript/client-storage/cookie"},next:{title:"IndexedDB",permalink:"/javascript/client-storage/indexed-db"}},r={},a=[{value:"Storage \u7c7b\u578b",id:"storage-\u7c7b\u578b",level:2},{value:"sessionStorage \u5bf9\u8c61",id:"sessionstorage-\u5bf9\u8c61",level:2},{value:"localStorage \u5bf9\u8c61",id:"localstorage-\u5bf9\u8c61",level:2},{value:"\u5b58\u50a8\u4e8b\u4ef6",id:"\u5b58\u50a8\u4e8b\u4ef6",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"web-storage",children:"Web Storage"}),"\n",(0,n.jsx)(s.p,{children:"Web Storage \u6700\u65e9\u662f\u7f51\u9875\u8d85\u6587\u672c\u5e94\u7528\u6280\u672f\u7ec4\u5728 Web Application1.0\u89c4\u8303\u63d0\u51fa\u3002\u8fd9\u4e2a\u89c4\u8303\u4e2d\u7684\u8349\u6848\u6700\u7ec8\u6210\u4e3a\u4e86HTML5\u7684\u4e00\u90e8\u5206\uff0c\u540e\u6765\u53c8\u72ec\u7acb\u6210\u4e3a\u81ea\u5df1\u7684\u89c4\u8303\u3002Web Storage \u7684\u76ee\u7684\u662f\u89e3\u51b3\u901a\u8fc7\u5ba2\u6237\u7aef\u5b58\u50a8\u4e0d\u9700\u8981\u9891\u7e41\u53d1\u9001\u670d\u52a1\u5668\u7684\u6570\u636e\u65f6\u4f7f\u7528cookie\u7684\u95ee\u9898\u3002"}),"\n",(0,n.jsx)(s.p,{children:"Web Storage\u6700\u65b0\u89c4\u8303\u5b9e\u73b0\u7684\u4e24\u4e2a\u76ee\u6807\uff1a"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\u63d0\u4f9b\u5728cookie\u4e00\u5916\u7684\u5b58\u50a8\u4f1a\u8bdd\u6570\u636e\u9014\u5f84\uff1b"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\u63d0\u4f9b\u8de8\u4f1a\u8bdd\u6301\u4e45\u5316\u5b58\u50a8\u5927\u91cf\u6570\u636e\u7684\u673a\u5236\uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Web Storage \u5b9a\u4e49\u4e86\u4e24\u4e2a\u5bf9\u8c61\uff1a",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage",children:"localStorage"})," \u548c ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage",children:"sessionStorage"}),"\u3002",(0,n.jsx)(s.code,{children:"localStorage"})," \u662f\u6c38\u4e45\u5b58\u50a8\u673a\u5236\uff0c",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u662f\u8de8\u4f1a\u8bdd\u7684\u5b58\u50a8\u673a\u5236\u3002\u8fd9\u4e24\u79cd\u6d4f\u89c8\u5668\u5b58\u50a8 API \u63d0\u4f9b\u4e86\u5728\u6d4f\u89c8\u5668\u4e2d\u4e0d\u53d7\u9875\u9762\u5237\u65b0\u5f71\u54cd\u800c\u5b58\u50a8\u6570\u636e\u7684\u4e24\u79cd\u65b9\u5f0f\u3002"]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["Web Storage \u7b2c\u4e00\u7248\u66fe\u4f7f\u7528\u8fc7 ",(0,n.jsx)(s.code,{children:"globalStorage"}),"\uff0c\u4e0d\u8fc7\u76ee\u524d ",(0,n.jsx)(s.code,{children:"globalStorage"})," \u5df2\u5e9f\u5f03"]})}),"\n",(0,n.jsx)(s.h2,{id:"storage-\u7c7b\u578b",children:"Storage \u7c7b\u578b"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Storage",children:"Storage"})," \u7c7b\u578b\u7528\u4e8e\u4fdd\u5b58\u5065(key)/\u503c(value)\u5bf9\u6570\u636e\uff0c\u76f4\u81f3\u5b58\u50a8\u7a7a\u95f4\u4e0a\u9650\uff08\u7531\u6d4f\u89c8\u5668\u51b3\u5b9a\uff09\u3002Storage \u7684\u5b9e\u4f8b\u4e0e\u5176\u5b83\u5bf9\u8c61\u4e00\u6837\uff0c\u4f46\u589e\u52a0\u4e86\u4e00\u4e0b\u65b9\u6cd5\u3002"]}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"clear()"}),": \u5220\u9664\u6240\u6709\u5b58\u50a8\u6570\u636e\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"getItem(key)"}),": \u5220\u9664\u6240\u6709\u5b58\u50a8\u6570\u636e\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"key(index)"}),": \u6839\u636e\u7d22\u5f15\uff0c\u53d6\u5f97\u7ed9\u5b9a\u6570\u503c\u4f4d\u7f6e\u7684key\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"removeItem(key)"}),": \u5220\u9664\u5065key\u7684\u6570\u636e\u5b58\u50a8\u8bb0\u5f55\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"setItem(key\uff0cvalue)"}),": \u5b58\u50a8\u5065/\u503c\u5bf9\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"getItem()"})," \u3001",(0,n.jsx)(s.code,{children:"removeItem()"})," \u548c ",(0,n.jsx)(s.code,{children:"setItem()"}),"\u65b9\u6cd5\u53ef\u4ee5\u76f4\u63a5\u6216\u95f4\u63a5\u901a\u8fc7 Storage \u5bf9\u8c61\u8c03\u7528\u3002\u56e0\u4e3a\u6bcf\u4e2a\u6570\u636e\u9879\u90fd\u4f5c\u4e3a\u5c5e\u6027\u5b58\u50a8\u5728\u8be5\u5bf9\u8c61\u4e0a\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7\u70b9\u6216\u65b9\u62ec\u53f7\u64cd\u4f5c\u7b26\u8bbf\u95ee\u8fd9\u4e9b\u5c5e\u6027\uff0c\u901a\u8fc7\u540c\u6837\u7684\u64cd\u4f5c\u6765\u8bbe\u7f6e\u503c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528delete\u64cd\u4f5c\u7b26\u5220\u9664\u5c5e\u6027\u3002\u5373\u4fbf\u5982\u6b64\uff0c\u901a\u5e38\u8fd8\u662f\u5efa\u8bae\u4f7f\u7528\u65b9\u6cd5\u800c\u975e\u5c5e\u6027\u6765\u6267\u884c\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u4ee5\u514d\u610f\u5916\u91cd\u5199\u67d0\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684\u5bf9\u8c61\u6210\u5458\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u901a\u8fc7",(0,n.jsx)(s.code,{children:"length"}),"\u5c5e\u6027\u53ef\u4ee5\u786e\u5b9a Storage \u5bf9\u8c61\u4fdd\u5b58\u4e86\u591a\u5c11\u6761\u6570\u636e\u3002\u6211\u4eec\u65e0\u6cd5\u786e\u5b9a\u5bf9\u8c61\u4e2d\u6240\u6709\u6570\u636e\u5360\u7528\u7684\u7a7a\u95f4\u5927\u5c0f\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="\u6f14\u793a\u4ee3\u7801"',children:'// \u4e0d\u5efa\u8bae\u7684\u64cd\u4f5c\u65b9\u6cd5\nlet storage = localStorage;\nstorage.myEmail = "agoodbook@foxmail.com";\ndelete storage.myEmail;\n\n// \u63a8\u8350\nlocalStorage.setItem("my-email", "agoodbook@foxmail.com");\nlocalStorage.remove("my-email");\n\n// \u67e5\u770b\u5b58\u50a8\u6570\u636e\u6761\u6570\nlocalStorage.length;\n'})}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"Storage \u7c7b\u578b\u53ea\u80fd\u5b58\u50a8\u5b57\u7b26\u4e32\u3002\u975e\u5b57\u7b26\u4e32\u6570\u636e\u5728\u5b58\u50a8\u4e4b\u524d\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002\u6ce8\u610f\uff0c\u8fd9\u79cd\u8f6c\u6362\u4e0d\u80fd\u5728\u83b7\u53d6\u6570\u636e\u65f6\u64a4\u9500\u3002"})}),"\n",(0,n.jsx)(s.h2,{id:"sessionstorage-\u5bf9\u8c61",children:"sessionStorage \u5bf9\u8c61"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"sessionStorage"})," \u5bf9\u8c61\u53ea\u5b58\u50a8\u5728\u4f1a\u8bdd\u6570\u636e\uff0c\u8fd9\u610f\u5473\u7740\u6570\u636e\u53ea\u5b58\u50a8\u5230\u6d4f\u89c8\u5668\u5173\u95ed\u3002\u8fd9\u8ddf\u6d4f\u89c8\u5668\u5173\u95ed\u65f6\u4f1a\u6d88\u5931cookie\u7c7b\u4f3c\u3002\u5b58\u50a8\u5728 ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u4e2d\u7684\u6570\u636e\u4e0d\u53d7\u9875\u9762\u5237\u65b0\u5f71\u54cd\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u5d29\u6e83\u5e76\u91cd\u542f\u540e\u6062\u590d\uff08\u53d6\u51b3\u4e8e\u6d4f\u89c8\u5668\u5b9e\u73b0\uff09"]}),"\n",(0,n.jsxs)(s.p,{children:["\u56e0\u4e3a ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u5bf9\u8c61\u4e2d\u7684\u6570\u636e\u4e0e\u670d\u52a1\u5668\u4f1a\u8bdd\u7d27\u5bc6\u76f8\u5173\uff0c\u6240\u6709\u8fd0\u884c\u5728\u672c\u5730\u6587\u4ef6\u65f6\u4e0d\u80fd\u4f7f\u7528\u3002\u5b58\u50a8\u5728 ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u5bf9\u8c61\u4e2d\u7684\u6570\u636e\u53ea\u80fd\u7531\u6700\u521d\u5b58\u50a8\u6570\u636e\u7684\u9875\u9762\u4f7f\u7528\uff0c\u5728\u591a\u9875\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7528\u5904\u6709\u9650\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u7684\u4f5c\u7528\u8303\u56f4\u9650\u5b9a\u5728\u540c\u4e00\u7a97\u53e3\u6216\u6807\u7b7e\u9875\u5185\u3002"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"\u7531\u4e8e sessionStorage \u7684\u8bbe\u8ba1\u521d\u8877\u662f\u4e3a\u4e86\u5728\u6d4f\u89c8\u5668\u4f1a\u8bdd\u671f\u95f4\u4fdd\u5b58\u6570\u636e\uff0c\u56e0\u6b64\u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e0a\u76f4\u63a5\u6253\u5f00 HTML \u6587\u4ef6\u65f6\uff0c\u5b83\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\u8fd9\u662f\u51fa\u4e8e\u5b89\u5168\u548c\u9690\u79c1\u65b9\u9762\u7684\u8003\u8651\uff0c\u4ee5\u9632\u6b62\u5728\u6ca1\u6709\u670d\u52a1\u5668\u652f\u6301\u7684\u60c5\u51b5\u4e0b\u6ee5\u7528\u5ba2\u6237\u7aef\u5b58\u50a8\u3002"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u56e0\u4e3a ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u5bf9\u8c61\u662f Storage \u7684\u5b9e\u4f8b\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"setItem()"})," \u65b9\u6cd5\u6216\u76f4\u63a5\u5c5e\u6027\u8d4b\u503c\u7ed9\u5b83\u6dfb\u52a0\u6570\u636e\u3002\u5982\u4e0b\u4e24\u79cd\u65b9\u6cd5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="\u4ee3\u7801\u6f14\u793a"',children:'// \u4f7f\u7528\u65b9\u6cd5\u5b58\u50a8\u6570\u636e\nsessionStorage.setItem("book", "agoodbook");\n\n// \u4f7f\u7528\u5c5e\u6027\u5b58\u50a8\u6570\u636e\nsessionStorage.book = "agoodbook";\n'})}),"\n",(0,n.jsx)(s.p,{children:"\u6240\u6709\u73b0\u4ee3\u6d4f\u89c8\u5668\u5728\u5b9e\u73b0\u5b58\u50a8\u5199\u5165\u65f6\u90fd\u4f7f\u7528\u4e86\u540c\u6b65\u963b\u585e\u65b9\u6cd5\uff0c\u56e0\u6b64\u6570\u636e\u4f1a\u88ab\u7acb\u5373\u63d0\u4ea4\u5230\u5b58\u50a8\u3002\u5177\u4f53 API \u7684\u5b9e\u73b0\u53ef\u80fd\u4e0d\u80fd\u7acb\u5373\u628a\u6570\u636e\u5199\u5165\u78c1\u76d8\uff08\u800c\u662f\u4f7f\u7528\u67d0\u79cd\u4e0d\u540c\u7684\u7269\u7406\u5b58\u50a8\uff09\uff0c\u4f46\u8fd9\u4e2a\u533a\u522b\u5728 JavaScript \u5c42\u9762\u662f\u4e0d\u53ef\u89c1\u7684\u3002\u901a\u8fc7 Web Storage \u5199\u5165\u7684\u4efb\u4f55\u6570\u636e\u90fd\u53ef\u4ee5\u7acb\u5373\u88ab\u8bfb\u53d6\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u5bf9\u5b58\u5728\u4e8e ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u4e0a\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"getItem()"})," \u6216\u76f4\u63a5\u8bbf\u95ee\u5c5e\u6027\u540d\u6765\u53d6\u5f97\u3002\u5982\u4e0b\u4e24\u79cd\u65b9\u6cd5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="\u4ee3\u7801\u6f14\u793a"',children:'// \u4f7f\u7528\u65b9\u6cd5\u53d6\u5f97\u6570\u636e\nlet book = sessionStorage.getItem("book");\n\n// \u4f7f\u7528\u5c5e\u6027\u53d6\u5f97\u6570\u636e\nlet book = sessionStorage.book;\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4ee5\u7ed3\u5408 ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u7684 ",(0,n.jsx)(s.code,{children:"length"})," \u5c5e\u6027\u548c ",(0,n.jsx)(s.code,{children:"key()"})," \u65b9\u6cd5\u904d\u5386\u6240\u6709\u7684\u503c\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="\u4ee3\u7801\u6f14\u793a"',children:"for (let i = 0; i < sessionStorage.length; i++) {\n  let key = sessionStorage.key(i);\n  let value = sessionStorage.getItem(key);\n  console.log(`\u8f93\u51fakey: ${key}, value: ${value}`);\n}\n\n// \u4f7f\u7528for-in\u5faa\u73af\u8fed\u4ee3sessionStorage\u7684\u503c\nfor (let key in sessionStorage) {\n  let value = sessionStorage.getItem(key);\n  console.log(`\u8f93\u51fakey: ${key}, value: ${value}`);\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u8981\u4ece ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u4e2d\u5220\u9664\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"delete"})," \u64cd\u4f5c\u7b26\u76f4\u63a5\u5220\u9664\u5bf9\u8c61\u5c5e\u6027\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"removeItem()"})," \u65b9\u6cd5\u3002\u5982\u4e0b\u4e24\u79cd\u65b9\u6cd5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="\u4ee3\u7801\u6f14\u793a"',children:'// \u4f7f\u7528 delete \u5220\u9664\u503c\ndelete sessionStorage.book;\n\n// \u4f7f\u7528\u65b9\u6cd5\u5220\u9664\u503c\nsessionStorage.removeItem("book");\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"sessionStorage"})," \u5bf9\u8c61\u5e94\u8be5\u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\u53ea\u5728\u4f1a\u8bdd\u671f\u95f4\u6709\u6548\u7684\u5c0f\u5757\u6570\u636e\u3002\u5982\u4f55\u9700\u8981\u8de8\u4f1a\u8bdd\u6301\u4e45\u5b58\u50a8\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"localStorage"}),"\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"localstorage-\u5bf9\u8c61",children:"localStorage \u5bf9\u8c61"}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u4fee\u8ba2\u7684 HTML5 \u89c4\u8303\u91cc\uff0c",(0,n.jsx)(s.code,{children:"localStorage"})," \u5bf9\u8c61\u53d6\u4ee3\u4e86 ",(0,n.jsx)(s.code,{children:"globalStorage"}),", \u4f5c\u4e3a\u5ba2\u6237\u7aef\u6301\u4e45\u5b58\u50a8\u6570\u636e\u7684\u673a\u5236\u3002\u8981\u8bbf\u95ee\u540c\u4e00\u4e2a ",(0,n.jsx)(s.code,{children:"localStorage"})," \u5bf9\u8c61\uff0c\u9875\u9762\u5fc5\u987b\u6765\u81ea\u540c\u4e00\u4e2a\u57df\uff08\u5b50\u57df\u4e0d\u53ef\u4ee5\uff09\u3001\u76f8\u540c\u7684\u7aef\u53e3\u4e0a\u4f7f\u7528\u76f8\u540c\u7684\u534f\u8bae\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u56e0\u4e3a ",(0,n.jsx)(s.code,{children:"localStorage"})," \u662f Storage \u7684\u5b9e\u4f8b\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u50cf ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u4e00\u6837\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"localStorage"}),"\u3002\u5982\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="\u4ee3\u7801\u6f14\u793a"',children:'// \u4f7f\u7528\u65b9\u6cd5\u5b58\u50a8\u6570\u636e\nlocalStorage.setItem("book", "agoodbook");\n\n// \u4f7f\u7528\u5c5e\u6027\u5b58\u50a8\u6570\u636e\nlocalStorage.book = "agoodbook";\n\n// \u4f7f\u7528\u65b9\u6cd5\u53d6\u5f97\u6570\u636e\nlet book = localStorage.getItem("book");\n\n// \u4f7f\u7528\u5c5e\u6027\u53d6\u5f97\u6570\u636e\nlet book = localStorage.book;\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u4e24\u79cd\u5b58\u50a8\u65b9\u6cd5\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5b58\u50a8\u5728 ",(0,n.jsx)(s.code,{children:"localStorage"})," \u4e2d\u7684\u6570\u636e\u4f1a\u4fdd\u7559\u5230\u901a\u8fc7 JavaScript \u5220\u9664\u6216\u8005\u7528\u6237\u6e05\u9664\u6d4f\u89c8\u5668\u7f13\u5b58\u3002 ",(0,n.jsx)(s.code,{children:"localStorage"})," \u6570\u636e\u4e0d\u53d7\u9875\u9762\u5237\u65b0\u5f71\u54cd\uff0c\u4e5f\u4e0d\u4f1a\u56e0\u5173\u95ed\u7a97\u53e3\u3001\u6807\u7b7e\u9875\u6216\u91cd\u65b0\u542f\u52a8\u6d4f\u89c8\u5668\u800c\u4e22\u5931\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u5b58\u50a8\u4e8b\u4ef6",children:"\u5b58\u50a8\u4e8b\u4ef6"}),"\n",(0,n.jsx)(s.p,{children:"\u5f53\u524d\u9875\u9762\u4f7f\u7528\u7684 storage \u88ab\u5176\u4ed6\u9875\u9762\u4fee\u6539\u65f6\u4f1a\u89e6\u53d1 StorageEvent \u4e8b\u4ef6\u3002"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["\u4e8b\u4ef6\u5728\u540c\u4e00\u4e2a\u57df\u4e0b\u7684\u4e0d\u540c\u9875\u9762\u4e4b\u95f4\u89e6\u53d1\uff0c\u5373\u5728 A \u9875\u9762\u6ce8\u518c\u4e86 ",(0,n.jsx)(s.code,{children:"storage"})," \u7684\u76d1\u542c\u5904\u7406\uff0c\u53ea\u6709\u5728\u8ddf A \u540c\u57df\u540d\u4e0b\u7684 B \u9875\u9762\u64cd\u4f5c ",(0,n.jsx)(s.code,{children:"storage"})," \u5bf9\u8c61\uff0cA \u9875\u9762\u624d\u4f1a\u88ab\u89e6\u53d1 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6bcf\u5f53 Storage \u5bf9\u8c61\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u90fd\u4f1a\u5728\u6587\u6863\u4e0a\u89e6\u53d1 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6\u3002\u4f7f\u7528\u5c5e\u6027\u6216 ",(0,n.jsx)(s.code,{children:"setItem()"})," \u8bbe\u7f6e\u503c\u3001\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"delete"})," \u6216 ",(0,n.jsx)(s.code,{children:"removeItem()"})," \u5220\u9664\u503c\uff0c\u4ee5\u53ca\u6bcf\u6b21\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"clear()"})," \u65f6\u90fd\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u3002\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u5bf9\u8c61\u6709\u5982\u4e0b6\u4e2a\u5c5e\u6027\uff1a"]}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"domain"}),": \u5b58\u50a8\u53d8\u5316\u5bf9\u5e94\u7684\u57df\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"key"}),": \u88ab\u4fee\u6539\u7684\u952e\u540d\u3002\u5f53\u88ab clear() \u65b9\u6cd5\u6e05\u9664\u540e\u8be5\u5c5e\u6027\u503c\u4e3a ",(0,n.jsx)(s.code,{children:"null"}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"newValue"}),": \u5065\u88ab\u8bbe\u7f6e\u7684\u65b0\u503c\uff0c\u82e5\u5065\u88ab\u5220\u9664\u5219\u4e3a ",(0,n.jsx)(s.code,{children:"null"}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"oldValue"}),": \u5065\u53d8\u5316\u4e4b\u524d\u7684\u503c\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"url"}),": \u8bb0\u5f55 Storage \u65f6\u95f4\u53d1\u751f\u65f6\u7684\u6e90\u5730\u5740\u3002"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.code,{children:"storageArea"}),": \u88ab\u64cd\u4f5c\u7684 Storage \u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="\u4ee3\u7801\u6f14\u793a"',children:'// \u76d1\u542c storage \u4e8b\u4ef6\nwindow.addEventListener("storage", (event) => {\n  console.log(event.domain);\n});\n'})}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["\u89e6\u53d1 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6"]}),(0,n.jsxs)(s.p,{children:["\u5728\u540c\u4e00\u4e2a\u7a97\u53e3\u6216\u6807\u7b7e\u9875\u4e2d\u4fee\u6539 ",(0,n.jsx)(s.code,{children:"localStorage"})," \u6570\u636e\u662f\u4e0d\u4f1a\u89e6\u53d1 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6\u7684\u3002\u4e8b\u4ef6\u662f\u5728\u5176\u4ed6\u7a97\u53e3\u6216\u6807\u7b7e\u9875\u4e0a\u53d1\u751f\u5b58\u50a8\u64cd\u4f5c\u65f6\u624d\u4f1a\u89e6\u53d1\u7684\u3002"]})]}),"\n",(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["\u5bf9\u4e8e ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u5982\u4f55 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6\u5b58\u7591"]}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"sessionStorage"})," \u53ea\u5728\u540c\u4e00\u4e2a\u7a97\u53e3\u6216\u6807\u7b7e\u9875\u4e0b\u5171\u4eab\u6570\u636e\uff0c\u82e5\u8981\u89e6\u53d1 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6\u9700\u8981\u501f\u52a9 ",(0,n.jsx)(s.code,{children:"iframe"})," \u6807\u7b7e\uff0c\u8fd9\u6837\u5b83\u4eec\u5c5e\u4e8e\u540c\u6e90\u9875\u9762\u3002"]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u5bf9\u4e8e ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u548c ",(0,n.jsx)(s.code,{children:"localStorage"})," \u4e0a\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4f1a\u89e6\u53d1 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6\uff0c\u4f46 ",(0,n.jsx)(s.code,{children:"storage"})," \u4e8b\u4ef6\u4e0d\u4f1a\u533a\u5206\u8fd9\u4e24\u8005\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,n.jsx)(s.p,{children:"\u4e0e\u5176\u4ed6\u5ba2\u6237\u7aef\u6570\u636e\u5b58\u50a8\u65b9\u6848\u4e00\u6837\uff0c Web Storage \u4e5f\u6709\u9650\u5236\u3002\u5177\u4f53\u7684\u9650\u5236\u53d6\u51b3\u4e8e\u7279\u5b9a\u7684\u6d4f\u89c8\u5668\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u5ba2\u6237\u7aef\u6570\u636e\u7684\u5927\u5c0f\u9650\u5236\u662f\u6309\u7167\u6bcf\u4e2a\u6e90\uff08\u534f\u8bae\u3001\u57df\u548c\u7aef\u53e3\uff09\u6765\u8bbe\u7f6e\u7684\uff0c\u56e0\u6b64\u6bcf\u4e2a\u6e90\u6709\u56fa\u5b9a\u5927\u5c0f\u7684\u6570\u636e\u5b58\u50a8\u7a7a\u95f4\u3002\u5206\u6790\u5b58\u50a8\u6570\u636e\u7684\u9875\u9762\u7684\u6e90\u53ef\u4ee5\u52a0\u5f3a\u8fd9\u4e00\u9650\u5236\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u4e0d\u540c\u6d4f\u89c8\u5668\u7ed9 ",(0,n.jsx)(s.code,{children:"localStorage"})," \u548c ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u8bbe\u7f6e\u4e86\u4e0d\u540c\u7684\u7a7a\u95f4\u9650\u5236\uff0c\u4f46\u5927\u591a\u6570\u4f1a\u9650\u5236\u4e3a\u6bcf\u4e2a\u6e90 5MB\u3002"]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["\u5f53 ",(0,n.jsx)(s.code,{children:"localStorage"})," \u6216 ",(0,n.jsx)(s.code,{children:"sessionStorage"})," \u5b58\u50a8\u8d85\u8fc7\u4e86\u6d4f\u89c8\u5668\u7684\u9650\u5236\uff08\u901a\u5e38\u4e3a\u7ea6 5MB\uff09\uff0c\u6d4f\u89c8\u5668\u7684\u884c\u4e3a\u53ef\u80fd\u56e0\u6d4f\u89c8\u5668\u7c7b\u578b\u548c\u7248\u672c\u800c\u5f02\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u8d85\u51fa\u5b58\u50a8\u9650\u5236\u65f6\u53ef\u80fd\u4f1a\u89e6\u53d1\u201cQUOTA_EXCEEDED_ERR\u201d\u9519\u8bef\u3002"]})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>c,a:()=>i});var n=o(7294);const t={},l=n.createContext(t);function i(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);