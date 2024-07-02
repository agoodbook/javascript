"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[1109],{9792:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var c=s(85893),r=s(11151);const a={},t="\u5f02\u6b65\u7f16\u7a0b",i={id:"promise-and-async-function/async-program",title:"\u5f02\u6b65\u7f16\u7a0b",description:"\u540c\u6b65\u884c\u4e3a\u548c\u5f02\u6b65\u884c\u4e3a\u7684\u5bf9\u7acb\u7edf\u4e00\u662f\u8ba1\u7b97\u673a\u79d1\u5b66\u7684\u4e00\u4e2a\u57fa\u672c\u6982\u5ff5\u3002\u7279\u522b\u662f\u5728 JavaScript \u8fd9\u79cd\u5355\u7ebf\u7a0b\u4e8b\u4ef6\u5faa\u73af\u6a21\u578b\u4e2d\uff0c\u540c\u6b65\u64cd\u4f5c\u4e0e\u5f02\u6b65\u64cd\u4f5c\u66f4\u662f\u4ee3\u7801\u6240\u8981\u4f9d\u8d56\u7684\u6838\u5fc3\u673a\u5236\u3002\u5f02\u6b65\u884c\u4e3a\u662f\u4e3a\u4e86\u4f18\u5316\u56e0\u8ba1\u7b97\u91cf\u5927\u800c\u65f6\u95f4\u957f\u7684\u64cd\u4f5c\u3002\u5982\u679c\u5728\u7b49\u5f85\u5176\u4ed6\u64cd\u4f5c\u5b8c\u6210\u7684\u540c\u65f6\uff0c\u5373\u4f7f\u8fd0\u884c\u5176\u4ed6\u6307\u4ee4\uff0c\u7cfb\u7edf\u4e5f\u80fd\u4fdd\u5b58\u7a33\u5b9a\uff0c\u90a3\u4e48\u8fd9\u6837\u505a\u5c31\u662f\u52a1\u5b9e\u7684\u3002",source:"@site/docs/promise-and-async-function/async-program.mdx",sourceDirName:"promise-and-async-function",slug:"/promise-and-async-function/async-program",permalink:"/javascript-docs/promise-and-async-function/async-program",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/promise-and-async-function/async-program.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u51fd\u6570",permalink:"/javascript-docs/function"},next:{title:"\u671f\u7ea6 Promise",permalink:"/javascript-docs/promise-and-async-function/promise"}},l={},o=[{value:"\u540c\u6b65\u4e0e\u5f02\u6b65",id:"\u540c\u6b65\u4e0e\u5f02\u6b65",level:2},{value:"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f",id:"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f",level:2}];function u(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"\u5f02\u6b65\u7f16\u7a0b",children:"\u5f02\u6b65\u7f16\u7a0b"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u540c\u6b65\u884c\u4e3a"}),"\u548c",(0,c.jsx)(e.strong,{children:"\u5f02\u6b65\u884c\u4e3a"}),"\u7684\u5bf9\u7acb\u7edf\u4e00\u662f\u8ba1\u7b97\u673a\u79d1\u5b66\u7684\u4e00\u4e2a\u57fa\u672c\u6982\u5ff5\u3002\u7279\u522b\u662f\u5728 JavaScript \u8fd9\u79cd\u5355\u7ebf\u7a0b\u4e8b\u4ef6\u5faa\u73af\u6a21\u578b\u4e2d\uff0c\u540c\u6b65\u64cd\u4f5c\u4e0e\u5f02\u6b65\u64cd\u4f5c\u66f4\u662f\u4ee3\u7801\u6240\u8981\u4f9d\u8d56\u7684\u6838\u5fc3\u673a\u5236\u3002\u5f02\u6b65\u884c\u4e3a\u662f\u4e3a\u4e86\u4f18\u5316\u56e0\u8ba1\u7b97\u91cf\u5927\u800c\u65f6\u95f4\u957f\u7684\u64cd\u4f5c\u3002\u5982\u679c\u5728\u7b49\u5f85\u5176\u4ed6\u64cd\u4f5c\u5b8c\u6210\u7684\u540c\u65f6\uff0c\u5373\u4f7f\u8fd0\u884c\u5176\u4ed6\u6307\u4ee4\uff0c\u7cfb\u7edf\u4e5f\u80fd\u4fdd\u5b58\u7a33\u5b9a\uff0c\u90a3\u4e48\u8fd9\u6837\u505a\u5c31\u662f\u52a1\u5b9e\u7684\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u91cd\u8981\u7684\u662f\uff0c\u5f02\u6b65\u64cd\u4f5c\u5e76\u4e0d\u4e00\u5b9a\u8ba1\u7b97\u91cf\u5927\u6216\u7b49\u5f85\u65f6\u95f4\u957f\u3002\u53ea\u8981\u4f60\u4e0d\u60f3\u4e3a\u7b49\u5f85\u67d0\u4e2a\u540c\u6b65\u64cd\u4f5c\u800c\u963b\u585e\u7ebf\u7a0b\u6267\u884c\uff0c\u90a3\u4e48\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u4f7f\u7528\u5f02\u6b65\u64cd\u4f5c\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u540c\u6b65\u4e0e\u5f02\u6b65",children:"\u540c\u6b65\u4e0e\u5f02\u6b65"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u540c\u6b65\u884c\u4e3a"}),"\u5bf9\u5e94\u5185\u5b58\u4e2d\u987a\u5e8f\u6267\u884c\u7684\u5904\u7406\u5668\u6307\u4ee4\u3002\u6bcf\u6761\u6307\u4ee4\u90fd\u4f1a\u4e25\u683c\u6309\u7167\u5b83\u4eec\u51fa\u73b0\u7684\u987a\u5e8f\u6765\u6267\u884c\uff0c\u800c\u6bcf\u6761\u6307\u4ee4\u6267\u884c\u540e\u4e5f\u80fd\u7acb\u5373\u83b7\u5f97\u5b58\u50a8\u5728\u7cfb\u7edf\u672c\u5730\uff08\u5982\u5bc4\u5b58\u5668\u6216\u7cfb\u7edf\u5185\u5b58\uff09\u7684\u4fe1\u606f\u3002\u8fd9\u6837\u7684\u6267\u884c\u6d41\u7a0b\u5bb9\u6613\u5206\u6790\u7a0b\u5e8f\u5728\u6267\u884c\u5230\u4ee3\u7801\u4efb\u610f\u4f4d\u7f6e\u65f6\u7684\u72b6\u6001\uff08\u6bd4\u5982\u53d8\u91cf\u7684\u503c\uff09\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",metastring:'title="\u6f14\u793a\u540c\u6b65\u884c\u4e3a"',children:"let age = 18;\nage = age + 1;\n"})}),"\n",(0,c.jsx)(e.admonition,{title:"\u6269\u5c55",type:"info",children:(0,c.jsx)(e.p,{children:"\u8fd9\u4e24\u884c JavaScript \u4ee3\u7801\u5bf9\u5e94\u7684\u4f4e\u7ea7\u6307\u4ee4\uff08\u4ece JavaScript \u5230 x86\uff09\u5e76\u4e0d\u96be\u60f3\u8c61\u3002\u9996\u5148\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u5728\u6808\u5185\u5b58\u4e0a\u5206\u914d\u4e00\u4e2a\u5b58\u50a8\u6d6e\u70b9\u6570\u503c\u7684\u7a7a\u95f4\uff0c\u7136\u540e\u9488\u5bf9\u8fd9\u4e2a\u503c\u505a\u4e00\u6b21\u6570\u5b66\u8ba1\u7b97\uff0c\u518d\u628a\u8ba1\u7b97\u7ed3\u679c\u5199\u56de\u4e4b\u524d\u5206\u914d\u7684\u5185\u5b58\u4e2d\u3002\u6240\u6709\u8fd9\u4e9b\u6307\u4ee4\u90fd\u662f\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e2d\u6309\u987a\u5e8f\u6267\u884c\u7684\u3002\u5728\u4f4e\u7ea7\u6307\u4ee4\u7684\u5c42\u9762\uff0c\u6709\u5145\u8db3\u7684\u5de5\u5177\u53ef\u4ee5\u786e\u5b9a\u7cfb\u7edf\u72b6\u6001\u3002"})}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u7a0b\u5e8f\u6267\u884c\u7684\u6bcf\u4e00\u6b65\uff0c\u90fd\u53ef\u4ee5\u63a8\u65ad\u51fa\u7a0b\u5e8f\u7684\u72b6\u6001\u3002\u8fd9\u662f\u56e0\u4e3a\u540e\u9762\u7684\u6307\u4ee4\u603b\u662f\u5728\u524d\u9762\u7684\u6307\u4ee4\u5b8c\u6210\u540e\u624d\u4f1a\u6267\u884c\u3002\u7b49\u5230\u6700\u540e\u4e00\u6761\u6307\u5b9a\u6267\u884c\u5b8c\u6bd5\uff0c\u5b58\u50a8\u5728 x \u7684\u503c\u5c31\u7acb\u5373\u53ef\u4ee5\u4f7f\u7528\u3002"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u5f02\u6b65\u64cd\u4f5c"}),"\u7c7b\u4f3c\u4e8e\u7cfb\u7edf\u4e2d\u65ad\uff0c\u5373\u5f53\u524d\u8fdb\u7a0b\u5916\u90e8\u7684\u5b9e\u4f53\u53ef\u4ee5\u89e6\u53d1\u4ee3\u7801\u6267\u884c\u3002\u5f02\u6b65\u64cd\u4f5c\u7ecf\u5e38\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u5f3a\u5236\u8fdb\u7a0b\u7b49\u5f85\u4e00\u4e2a\u957f\u65f6\u95f4\u7684\u64cd\u4f5c\u901a\u5e38\u662f\u4e0d\u53ef\u884c\u7684\uff08\u540c\u6b65\u64cd\u4f5c\u5219\u5fc5\u987b\u7b49\u5f85\uff09\u3002\u5982\u679c\u4ee3\u7801\u8981\u8bbf\u95ee\u4e00\u4e9b\u9ad8\u5ef6\u8fdf\u7684\u8d44\u6e90\uff0c\u6bd4\u5982\u5411\u8fdc\u7a0b\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u5e76\u7b49\u5f85\u54cd\u5e94\uff0c\u90a3\u4e48\u5c31\u4f1a\u51fa\u73b0\u957f\u65f6\u95f4\u7684\u7b49\u5f85\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",metastring:'title="\u6f14\u793a\u5f02\u6b65\u884c\u4e3a"',children:"let age = 18;\n\n// \u4f7f\u7528\u5b9a\u65f6\u5668\u6a21\u62df\u5f02\u6b65\u884c\u4e3a\nsetTimeout(() => age = age + 1, 1000);\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u6bb5\u7a0b\u5e8f\u6700\u7ec8\u4e0e\u540c\u6b65\u4ee3\u7801\u6267\u884c\u7684\u4efb\u52a1\u4e00\u6837\uff0c\u90fd\u662f\u628a\u4e24\u4e2a\u6570\u52a0\u5728\u4e00\u8d77\uff0c\u4f46\u8fd9\u4e00\u6b21\u6267\u884c\u7ebf\u7a0b\u4e0d\u77e5\u9053 age \u503c \u4f55\u65f6\u4f1a\u6539\u53d8\uff0c\u56e0\u4e3a\u8fd9\u53d6\u51b3\u4e8e\u56de\u8c03\u4f55\u65f6\u4ece\u6d88\u606f\u961f\u5217\u51fa\u5217\u5e76\u6267\u884c\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f",children:"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f"}),"\n",(0,c.jsx)(e.p,{children:"\u5f02\u6b65\u884c\u4e3a\u662f JavaScript \u7684\u57fa\u7840\uff0c\u4f46\u4ee5\u524d\u7684\u5b9e\u73b0\u4e0d\u7406\u60f3\u3002\u5728\u65e9\u671f\u7684 JavaScript \u4e2d\uff0c\u53ea\u652f\u6301\u5b9a\u4e49\u56de\u8c03\u51fd\u6570\u6765\u8868\u660e\u5f02\u6b65\u64cd\u4f5c\u5b8c\u6210\u3002\u4e32\u8054\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u95ee\u9898\uff0c\u901a\u5e38\u9700\u8981\u6df1\u5ea6\u5d4c\u5957\u7684\u56de\u8c03\u51fd\u6570\uff08\u4fd7\u79f0\u201c\u56de\u8c03\u5730\u72f1\u201d\uff09\u6765\u89e3\u51b3\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",metastring:'title="\u6f14\u793a\u4f7f\u7528\u4e86 setTimeout \u5728\u4e00\u79d2\u949f\u4e4b\u540e\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c"',children:"function double(value) {\n setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);\n}\ndouble(3);\n// 6\uff08\u5927\u7ea6 1000 \u6beb\u79d2\u4e4b\u540e\uff09\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd9\u91cc\u7684\u4ee3\u7801\u6ca1\u4ec0\u4e48\u795e\u79d8\u7684\uff0c\u4f46\u5173\u952e\u662f\u7406\u89e3\u4e3a\u4ec0\u4e48\u8bf4\u5b83\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u3002",(0,c.jsx)(e.code,{children:"setTimeout"})," \u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u5728\u6307\u5b9a\u65f6\u95f4\u4e4b\u540e\u4f1a\u88ab\u8c03\u5ea6\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u3002\u5bf9\u8fd9\u4e2a\u4f8b\u5b50\u800c\u8a00\uff0c1000 \u6beb\u79d2\u4e4b\u540e\uff0cJavaScript \u8fd0\u884c\u65f6\u4f1a\u628a\u56de\u8c03\u51fd\u6570\u63a8\u5230\u81ea\u5df1\u7684\u6d88\u606f\u961f\u5217\u4e0a\u53bb\u7b49\u5f85\u6267\u884c\u3002\u63a8\u5230\u961f\u5217\u4e4b\u540e\uff0c\u56de\u8c03\u4ec0\u4e48\u65f6\u5019\u51fa\u5217\u88ab\u6267\u884c\u5bf9 JavaScript \u4ee3\u7801\u5c31\u5b8c\u5168\u4e0d\u53ef\u89c1\u4e86\u3002\u8fd8\u6709\u4e00\u70b9\uff0c",(0,c.jsx)(e.code,{children:"double()"})," \u51fd\u6570\u5728 ",(0,c.jsx)(e.code,{children:"setTimeout"})," \u6210\u529f\u8c03\u5ea6\u5f02\u6b65\u64cd\u4f5c\u4e4b\u540e\u4f1a\u7acb\u5373\u9000\u51fa\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"1. \u5f02\u6b65\u8fd4\u56de\u503c"})}),"\n",(0,c.jsx)(e.p,{children:"\u5047\u8bbe setTimeout \u64cd\u4f5c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6709\u7528\u7684\u503c\u3002\u6709\u4ec0\u4e48\u597d\u529e\u6cd5\u628a\u8fd9\u4e2a\u503c\u4f20\u7ed9\u9700\u8981\u5b83\u7684\u5730\u65b9\uff1f\u5e7f\u6cdb\u63a5\u53d7\u7684\u4e00\u4e2a\u7b56\u7565\u662f\u7ed9\u5f02\u6b65\u64cd\u4f5c\u63d0\u4f9b\u4e00\u4e2a\u56de\u8c03\uff0c\u8fd9\u4e2a\u56de\u8c03\u4e2d\u5305\u542b\u8981\u4f7f\u7528\u5f02\u6b65\u8fd4\u56de\u503c\u7684\u4ee3\u7801\uff08\u4f5c\u4e3a\u56de\u8c03\u7684\u53c2\u6570\uff09\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",metastring:'title="\u6f14\u793a\u5f02\u6b65\u8fd4\u56de\u503c\u83b7\u53d6\u65b9\u6cd5"',children:"function double(value, callback) {\n setTimeout(() => callback(value * 2), 1000);\n}\ndouble(3, (x) => console.log(`I was given: ${x}`));\n// I was given: 6\uff08\u5927\u7ea6 1000 \u6beb\u79d2\u4e4b\u540e\uff09\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u91cc\u7684 setTimeout \u8c03\u7528\u544a\u8bc9 JavaScript \u8fd0\u884c\u65f6\u5728 1000 \u6beb\u79d2\u4e4b\u540e\u628a\u4e00\u4e2a\u51fd\u6570\u63a8\u5230\u6d88\u606f\u961f\u5217\u4e0a\u3002\u8fd9\u4e2a\u51fd\u6570\u4f1a\u7531\u8fd0\u884c\u65f6\u8d1f\u8d23\u5f02\u6b65\u8c03\u5ea6\u6267\u884c\u3002\u800c\u4f4d\u4e8e\u51fd\u6570\u95ed\u5305\u4e2d\u7684\u56de\u8c03\u53ca\u5176\u53c2\u6570\u5728\u5f02\u6b65\u6267\u884c\u65f6\u4ecd\u7136\u662f\u53ef\u7528\u7684\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"2. \u5931\u8d25\u5904\u7406"})}),"\n",(0,c.jsx)(e.p,{children:"\u5f02\u6b65\u64cd\u4f5c\u7684\u5931\u8d25\u5904\u7406\u5728\u56de\u8c03\u6a21\u578b\u4e2d\u4e5f\u8981\u8003\u8651\uff0c\u56e0\u6b64\u81ea\u7136\u5c31\u51fa\u73b0\u4e86\u6210\u529f\u56de\u8c03\u51fd\u6570\u548c\u5931\u8d25\u56de\u8c03\u51fd\u6570\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",metastring:'title="\u6f14\u793a\u4ee3\u7801"',children:'function double(value, success, failure) {\n  setTimeout(() => {\n    try {\n      if (typeof value !== "number") {\n        throw "Must provide number as first argument";\n      }\n      success(2 * value);\n    } catch (e) {\n      failure(e);\n    }\n  }, 1000);\n}\n\n/**\n* @handler successCallback \u6210\u529f\u56de\u8c03\u51fd\u6570\n* @handler failureCallback \u5931\u8d25\u56de\u8c03\u51fd\u6570\n*/\nconst successCallback = (result) => console.log(`Success: ${result}`);\nconst failureCallback = (error) => console.log(`Failure: ${error}`);\n\ndouble(3, successCallback, failureCallback);   // Success: 6\uff08\u5927\u7ea6 1000 \u6beb\u79d2\u4e4b\u540e\uff09\ndouble(\'b\', successCallback, failureCallback); // Failure: Must provide number as first argument\uff08\u5927\u7ea6 1000 \u6beb\u79d2\u4e4b\u540e\uff09\n\n'})}),"\n",(0,c.jsx)(e.admonition,{type:"warning",children:(0,c.jsx)(e.p,{children:"\u8fd9\u79cd\u6a21\u5f0f\u5df2\u7ecf\u4e0d\u53ef\u53d6\u4e86\uff0c\u56e0\u4e3a\u5fc5\u987b\u5728\u521d\u59cb\u5316\u5f02\u6b65\u64cd\u4f5c\u65f6\u5b9a\u4e49\u56de\u8c03\u3002\u5f02\u6b65\u51fd\u6570\u7684\u8fd4\u56de\u503c\u53ea\u5728\u77ed\u65f6\u95f4\u5185\u5b58\u5728\uff0c\u53ea\u6709\u9884\u5907\u597d\u5c06\u8fd9\u4e2a\u77ed\u65f6\u95f4\u5185\u5b58\u5728\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u7684\u56de\u8c03\u624d\u80fd\u63a5\u6536\u5230\u5b83\u3002"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"3. \u5d4c\u5957\u5f02\u6b65\u56de\u8c03"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u5f02\u6b65\u8fd4\u503c\u53c8\u4f9d\u8d56\u53e6\u4e00\u4e2a\u5f02\u6b65\u8fd4\u56de\u503c\uff0c\u90a3\u4e48\u56de\u8c03\u7684\u60c5\u51b5\u8fd8\u4f1a\u8fdb\u4e00\u6b65\u53d8\u590d\u6742\u3002\u5728\u5b9e\u9645\u7684\u4ee3\u7801\u4e2d\uff0c\u8fd9\u5c31\u8981\u6c42\u5d4c\u5957\u56de\u8c03\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",metastring:'title="\u6f14\u793a\u5f02\u6b65\u5d4c\u5957"',children:'function double(value, success, failure) {\n  setTimeout(() => {\n    try {\n      if (typeof value !== "number") {\n        throw "Must provide number as first argument";\n      }\n      success(2 * value);\n    } catch (e) {\n      failure(e);\n    }\n  }, 1000);\n}\n// highlight-start\nconst successCallback = (x) => {\n  // \u4f9d\u8d56\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de x\n  double(x, (y) => console.log(`Success: ${y}`));\n};\n// highlight-end\nconst failureCallback = (error) => console.log(`Failure: ${error}`);\n\ndouble(3, successCallback, failureCallback);\n// Success: 12\uff08\u5927\u7ea6 1000 \u6beb\u79d2\u4e4b\u540e\uff09\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u7136\uff0c\u968f\u7740\u4ee3\u7801\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u56de\u8c03\u7b56\u7565\u662f\u4e0d\u5177\u6709\u6269\u5c55\u6027\u7684\u3002\u201c\u56de\u8c03\u5730\u72f1\u201d\u8fd9\u4e2a\u79f0\u547c\u53ef\u8c13\u540d\u81f3\u5b9e\u5f52\u3002\u5d4c\u5957\u56de\u8c03\u7684\u4ee3\u7801\u7ef4\u62a4\u8d77\u6765\u5c31\u662f\u5669\u68a6\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>t});var c=s(67294);const r={},a=c.createContext(r);function t(n){const e=c.useContext(a);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),c.createElement(a.Provider,{value:e},n.children)}}}]);