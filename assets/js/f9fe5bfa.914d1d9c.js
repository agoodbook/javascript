"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[6891],{52234:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=s(85893),c=s(11151);const o={},t="ECAMScript 9",l={id:"features/es9",title:"ECAMScript 9",description:"ECMAScript 2018 (ES9) \u5f15\u5165\u4e86\u51e0\u9879\u65b0\u529f\u80fd\u548c\u6539\u8fdb\u3002\u4ee5\u4e0b\u662f ES9 \u7684\u4e3b\u8981\u66f4\u65b0\u5185\u5bb9\uff1a",source:"@site/docs/features/es9.mdx",sourceDirName:"features",slug:"/features/es9",permalink:"/javascript-docs/features/es9",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/features/es9.mdx",tags:[],version:"current",frontMatter:{},sidebar:"features",previous:{title:"ECAMScript 8",permalink:"/javascript-docs/features/es8"},next:{title:"ECAMScript 10",permalink:"/javascript-docs/features/es10"}},a={},i=[{value:"\u5f02\u6b65\u8fed\u4ee3",id:"\u5f02\u6b65\u8fed\u4ee3",level:2},{value:"\u5269\u4f59\u5c5e\u6027\u548c\u5c55\u5f00\u5c5e\u6027",id:"\u5269\u4f59\u5c5e\u6027\u548c\u5c55\u5f00\u5c5e\u6027",level:2},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\u6539\u8fdb",id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u6539\u8fdb",level:2},{value:"Promise.finally",id:"promisefinally",level:2},{value:"\u6a21\u677f\u5b57\u7b26\u4e32\u6539\u8fdb",id:"\u6a21\u677f\u5b57\u7b26\u4e32\u6539\u8fdb",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ecamscript-9",children:"ECAMScript 9"}),"\n",(0,r.jsx)(n.p,{children:"ECMAScript 2018 (ES9) \u5f15\u5165\u4e86\u51e0\u9879\u65b0\u529f\u80fd\u548c\u6539\u8fdb\u3002\u4ee5\u4e0b\u662f ES9 \u7684\u4e3b\u8981\u66f4\u65b0\u5185\u5bb9\uff1a"}),"\n",(0,r.jsx)(n.h2,{id:"\u5f02\u6b65\u8fed\u4ee3",children:"\u5f02\u6b65\u8fed\u4ee3"}),"\n",(0,r.jsxs)(n.p,{children:["ES9 \u5f15\u5165\u4e86\u5f02\u6b65\u8fed\u4ee3\u5668\u548c ",(0,r.jsx)(n.code,{children:"for-await-of"})," \u5faa\u73af\u3002\u8fd9\u4f7f\u5f97\u5728\u5faa\u73af\u4e2d\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u66f4\u52a0\u5bb9\u6613\uff0c\u65b9\u4fbf\u5904\u7406\u5f02\u6b65\u6570\u636e\u6e90\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"async function processData(stream) {\n  for await (const chunk of stream) {\n    console.log(chunk);\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5269\u4f59\u5c5e\u6027\u548c\u5c55\u5f00\u5c5e\u6027",children:"\u5269\u4f59\u5c5e\u6027\u548c\u5c55\u5f00\u5c5e\u6027"}),"\n",(0,r.jsx)(n.p,{children:"ES9 \u4e3a\u5bf9\u8c61\u89e3\u6784\u8d4b\u503c\u6dfb\u52a0\u4e86\u5269\u4f59\u5c5e\u6027\uff0c\u5e76\u4e3a\u5bf9\u8c61\u5b57\u9762\u91cf\u6dfb\u52a0\u4e86\u5c55\u5f00\u5c5e\u6027\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };\nconsole.log(rest); // { c: 3, d: 4 }\n\nconst obj1 = { x: 1, y: 2 };\nconst obj2 = { ...obj1, z: 3 };\nconsole.log(obj2); // { x: 1, y: 2, z: 3 }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u6539\u8fdb",children:"\u6b63\u5219\u8868\u8fbe\u5f0f\u6539\u8fdb"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u547d\u540d\u6355\u83b7\u7ec4"}),"\uff1a\u4f7f\u7528\u547d\u540d\u6355\u83b7\u7ec4\u53ef\u4ee5\u66f4\u6e05\u6670\u5730\u6355\u83b7\u5339\u914d\u7684\u5b50\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const re = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;\nconst result = re.exec('2023-06-27');\nconsole.log(result.groups.year); // 2023\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6b63\u5219\u8868\u8fbe\u5f0f\u53cd\u5411\u65ad\u8a00"}),"\uff1a\u652f\u6301\u6b63\u5411\u65ad\u8a00\u548c\u53cd\u5411\u65ad\u8a00\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const re = /(?<=\\$)\\d+/;\nconst result = re.exec('$123');\nconsole.log(result[0]); // 123\n"})}),"\n",(0,r.jsx)(n.h2,{id:"promisefinally",children:"Promise.finally"}),"\n",(0,r.jsxs)(n.p,{children:["ES9 \u4e3a Promise \u5bf9\u8c61\u6dfb\u52a0\u4e86 ",(0,r.jsx)(n.code,{children:"finally"})," \u65b9\u6cd5\uff0c\u65e0\u8bba Promise \u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff0c",(0,r.jsx)(n.code,{children:"finally"})," \u65b9\u6cd5\u90fd\u4f1a\u6267\u884c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .catch(error => console.error(error)) // TypeError: Failed to fetch\n  .finally(() => console.log('\u8bf7\u6c42\u5b8c\u6210')); // \u8bf7\u6c42\u5b8c\u6210\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u677f\u5b57\u7b26\u4e32\u6539\u8fdb",children:"\u6a21\u677f\u5b57\u7b26\u4e32\u6539\u8fdb"}),"\n",(0,r.jsx)(n.p,{children:"\u5141\u8bb8\u5728\u6a21\u677f\u5b57\u7b26\u4e32\u4e2d\u4f7f\u7528\u8f6c\u4e49\u5e8f\u5217\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const str = `\u884c\u5c3e\u7684\u6362\u884c\u7b26\u4f1a\u88ab\u79fb\u9664\uff1a\\u2028\u8fd9\u662f\u4e00\u4e2a\u65b0\u884c`;\nconsole.log(str);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\\u2028"})," \u548c ",(0,r.jsx)(n.code,{children:"\\u2029"})," \u5728 Unicode \u4e2d\u5206\u522b\u8868\u793a\u884c\u5206\u9694\u7b26\uff08Line Separator\uff09\u548c\u6bb5\u843d\u5206\u9694\u7b26\uff08Paragraph Separator\uff09\u3002\u5b83\u4eec\u5728\u67d0\u4e9b\u6587\u672c\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6709\u7279\u5b9a\u7684\u610f\u4e49\uff0c\u4f8b\u5982\u6587\u672c\u7f16\u8f91\u5668\u548c\u4e00\u4e9b\u6587\u6863\u5904\u7406\u7cfb\u7edf\u4f1a\u5c06\u5b83\u4eec\u89e3\u91ca\u4e3a\u6362\u884c\u7b26\u6216\u6bb5\u843d\u5206\u9694\u7b26\u3002\u7136\u800c\uff0c\u5728\u5927\u591a\u6570\u7f16\u7a0b\u8bed\u8a00\u548c\u73af\u5883\u4e2d\uff0c\u5305\u62ec JavaScript \u548c Node.js\uff0c\u8fd9\u4e9b\u5b57\u7b26\u901a\u5e38\u88ab\u89c6\u4e3a\u666e\u901a\u7684 Unicode \u5b57\u7b26\uff0c\u800c\u4e0d\u4f1a\u81ea\u52a8\u5bfc\u81f4\u6362\u884c\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u5728\u6a21\u677f\u5b57\u7b26\u4e32\u4e2d\u5b9e\u73b0\u6362\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b9e\u9645\u7684\u6362\u884c\u7b26 ",(0,r.jsx)(n.code,{children:"\\n"})," \u6216\u4f7f\u7528\u591a\u884c\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const str = `\u8fd9\u662f\u7b2c\u4e00\u884c\\n\u8fd9\u662f\u7b2c\u4e8c\u884c`;\nconsole.log(str);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var r=s(67294);const c={},o=r.createContext(c);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);