"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[9622],{7018:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>j,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var i=s(5893),a=s(1151);const l={},t="JSON",r={id:"json",title:"JSON",description:"2006 \u5e74\uff0cDouglas Crockford \u5728\u56fd\u9645\u4e92\u8054\u7f51\u5de5\u7a0b\u4efb\u52a1\u7ec4\uff08IETF\uff0cThe Internet Engineering Task Force\uff09\u5236\u5b9a\u4e86 JavaScript \u5bf9\u8c61\u7b80\u8c31\uff08JSON\uff0cJavaScript Object Notation\uff09\u6807\u51c6\uff0c\u5373 RFC 4627\u3002\u4f46\u5b9e\u9645\u4e0a\uff0cJSON\u65e9\u5728 2001 \u5e74\u5c31\u5f00\u59cb\u4f7f\u7528\u4e86\u3002JSON \u662f JavaScript \u7684\u4e25\u683c\u5b50\u96c6\uff0c\u5229\u7528 JavaScript \u4e2d\u7684\u51e0\u79cd\u6a21\u5f0f\u6765\u8868\u793a\u7ed3\u6784\u5316\u6570\u636e\u3002Crockford \u5c06 JSON \u4f5c\u4e3a\u66ff\u4ee3 XML \u7684\u4e00\u4e2a\u65b9\u6848\u63d0\u51fa\uff0c\u56e0\u4e3a JSON \u53ef\u4ee5\u76f4\u63a5\u4f20\u7ed9 eval() \u800c\u4e0d\u9700\u8981\u521b\u5efa DOM\u3002",source:"@site/docs/json.mdx",sourceDirName:".",slug:"/json",permalink:"/javascript-docs/json",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/json.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"history \u5bf9\u8c61",permalink:"/javascript-docs/bom/history"},next:{title:"\u7f51\u7edc\u8bf7\u6c42",permalink:"/javascript-docs/network-requests-and-remote-resources/network-requests"}},c={},o=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u7b80\u5355\u503c",id:"\u7b80\u5355\u503c",level:3},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",level:3},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:3},{value:"\u89e3\u6790\u4e0e\u5e8f\u5217\u5316",id:"\u89e3\u6790\u4e0e\u5e8f\u5217\u5316",level:2},{value:"JSON \u5bf9\u8c61",id:"json-\u5bf9\u8c61",level:3},{value:"JSON.stringify",id:"jsonstringify",level:3},{value:"\u8fc7\u6ee4\u5668",id:"\u8fc7\u6ee4\u5668",level:4},{value:"\u5b57\u7b26\u4e32\u7f29\u8fdb",id:"\u5b57\u7b26\u4e32\u7f29\u8fdb",level:4},{value:"toJSON",id:"tojson",level:4},{value:"JSON.parse",id:"jsonparse",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"json",children:"JSON"}),"\n",(0,i.jsxs)(n.p,{children:["2006 \u5e74\uff0cDouglas Crockford \u5728\u56fd\u9645\u4e92\u8054\u7f51\u5de5\u7a0b\u4efb\u52a1\u7ec4\uff08IETF\uff0cThe Internet Engineering Task Force\uff09\u5236\u5b9a\u4e86 JavaScript \u5bf9\u8c61\u7b80\u8c31\uff08JSON\uff0cJavaScript Object Notation\uff09\u6807\u51c6\uff0c\u5373 RFC 4627\u3002\u4f46\u5b9e\u9645\u4e0a\uff0cJSON\u65e9\u5728 2001 \u5e74\u5c31\u5f00\u59cb\u4f7f\u7528\u4e86\u3002JSON \u662f JavaScript \u7684",(0,i.jsx)(n.strong,{children:"\u4e25\u683c\u5b50\u96c6"}),"\uff0c\u5229\u7528 JavaScript \u4e2d\u7684\u51e0\u79cd\u6a21\u5f0f\u6765\u8868\u793a\u7ed3\u6784\u5316\u6570\u636e\u3002Crockford \u5c06 JSON \u4f5c\u4e3a\u66ff\u4ee3 XML \u7684\u4e00\u4e2a\u65b9\u6848\u63d0\u51fa\uff0c\u56e0\u4e3a JSON \u53ef\u4ee5\u76f4\u63a5\u4f20\u7ed9 ",(0,i.jsx)(n.code,{children:"eval()"})," \u800c\u4e0d\u9700\u8981\u521b\u5efa DOM\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7406\u89e3 JSON \u6700\u5173\u952e\u7684\u4e00\u70b9\u662f\u8981\u628a\u5b83\u5f53\u6210\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u800c\u4e0d\u662f\u7f16\u7a0b\u8bed\u8a00\u3002JSON \u4e0d\u5c5e\u4e8e JavaScript\uff0c\u5b83\u4eec\u53ea\u662f\u62e5\u6709\u76f8\u540c\u7684\u8bed\u6cd5\u800c\u5df2\u3002JSON \u4e5f\u4e0d\u662f\u53ea\u80fd\u5728 JavaScript \u4e2d\u4f7f\u7528\uff0c\u5b83\u662f\u4e00\u79cd\u901a\u7528\u6570\u636e\u683c\u5f0f\u3002\u5f88\u591a\u8bed\u8a00\u90fd\u6709\u89e3\u6790\u548c\u5e8f\u5217\u5316 JSON \u7684\u5185\u7f6e\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"JSON \u8bed\u6cd5\u652f\u6301\u8868\u793a3\u79cd\u7c7b\u578b\u7684\u503c\uff1a"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u7b80\u5355\u503c\uff1a\u5b57\u7b26\u4e32\u3001\u6570\u503c\u3001\u5e03\u5c14\u503c \u548c ",(0,i.jsx)(n.code,{children:"null"})," \u53ef\u4ee5\u5728 JSON \u4e2d\u51fa\u73b0\uff0c\u5c31\u50cf JavaScript \u4e2d\u4e00\u6837\u3002\u7279\u6b8a\u503c ",(0,i.jsx)(n.code,{children:"undefined"})," \u4e0d\u53ef\u4ee5\u3002"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u5bf9\u8c61\uff1a\u7b2c\u4e00\u79cd\u590d\u6742\u6570\u636e\u7c7b\u578b\uff0c\u5bf9\u8c61\u8868\u793a\u6709\u5e8f\u952e\u503c\u5bf9\u3002\u6bcf\u4e2a\u503c\u53ef\u4ee5\u662f\u7b80\u5355\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u590d\u6742\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u6570\u7ec4\uff1a\u7b2c\u4e8c\u79cd\u590d\u6742\u6570\u636e\u7c7b\u578b\uff0c\u6570\u7ec4\u8868\u793a\u53ef\u4ee5\u901a\u8fc7\u6570\u503c\u7d22\u5f15\u8bbf\u95ee\u7684\u503c\u7684\u6709\u5e8f\u5217\u8868\u3002\u6570\u7ec4\u7684\u5143\u7d20\u53ef\u4ee5\u662f\u7b80\u5355\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u590d\u6742\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7b80\u5355\u503c",children:"\u7b80\u5355\u503c"}),"\n",(0,i.jsx)(n.p,{children:"JavaScript \u5b57\u7b26\u4e32\u4e0e JSON \u5b57\u7b26\u4e32\u7684\u4e3b\u8981\u533a\u522b\u662f\uff0cJSON \u5b57\u7b26\u4e32\u5fc5\u987b\u4f7f\u7528\u53cc\u5f15\u53f7\uff08\u5355\u5f15\u53f7\u4f1a\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef\uff09\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"hello world!"\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"false\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"5\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"null\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5bf9\u8c61",children:"\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.p,{children:"JavaScript \u4e0d\u540c\uff0cJSON \u4e2d\u7684\u5bf9\u8c61\u5c5e\u6027\u540d\u5fc5\u987b\u59cb\u7ec8\u5e26\u53cc\u5f15\u53f7\u3002\u624b\u52a8\u7f16\u5199 JSON \u65f6\u6f0f\u6389\u8fd9\u4e9b\u53cc\u5f15\u53f7\u6216\u4f7f\u7528\u5355\u5f15\u53f7\u662f\u5e38\u89c1\u9519\u8bef\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="\u6f14\u793aJSON\u5bf9\u8c61"',children:'{\n  "key": "value",\n  "one": [],\n  "two": {},\n  "three": "\u7b80\u5355\u503c"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u8c61\u4f7f\u7528\u4e0e JavaScript \u5bf9\u8c61\u5b57\u9762\u91cf\u7565\u4e3a\u4e0d\u540c\u7684\u65b9\u5f0f\u8868\u793a\u3002\u4ee5\u4e0b\u662f JavaScript \u4e2d\u7684\u5bf9\u8c61\u5b57\u9762\u91cf\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let obj = {\n  key: 'value',\n  one: [],\n  two: {},\n  three: '\u4efb\u610f\u503c\uff0c\u5305\u62ec JSON \u4e0d\u80fd\u4f7f\u7528\u7684 undefined',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n",(0,i.jsx)(n.p,{children:"\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u53ef\u4ee5\u662f\u7b80\u5355\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u590d\u6742\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'["\u7b80\u5355\u503c", 5, {}, []]\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="\u521b\u5efa\u66f4\u4e3a\u590d\u6742\u7684\u7ed3\u6784\u6570\u636e"',children:'[\n  {\n    "title": "Professional JavaScript",\n    "authors": ["Nicholas C. Zakas", "Matt Frisbie"],\n    "edition": 4,\n    "year": 2017\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u89e3\u6790\u4e0e\u5e8f\u5217\u5316",children:"\u89e3\u6790\u4e0e\u5e8f\u5217\u5316"}),"\n",(0,i.jsx)(n.p,{children:"JSON \u7684\u8fc5\u901f\u6d41\u884c\u5e76\u4e0d\u4ec5\u4ec5\u56e0\u4e3a\u5176\u8bed\u6cd5\u4e0e JavaScript \u7c7b\u4f3c\uff0c\u5f88\u5927\u7a0b\u5ea6\u4e0a\u8fd8\u56e0\u4e3a JSON \u53ef\u4ee5\u76f4\u63a5\u88ab\u89e3\u6790\u6210\u53ef\u7528\u7684 JavaScript \u5bf9\u8c61\u3002\u4e0e\u89e3\u6790\u4e3a DOM \u6587\u6863\u7684 XML \u76f8\u6bd4\uff0c\u8fd9\u4e2a\u4f18\u52bf\u975e\u5e38\u660e\u663e\u3002\u4e3a\u6b64\uff0cJavaScript \u5f00\u53d1\u8005\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u4f7f\u7528 JSON \u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"json-\u5bf9\u8c61",children:"JSON \u5bf9\u8c61"}),"\n",(0,i.jsxs)(n.p,{children:["\u65e9\u671f\u7684 JSON \u89e3\u6790\u5668\u57fa\u672c\u4e0a\u5c31\u76f8\u5f53\u4e8e JavaScript \u7684 ",(0,i.jsx)(n.code,{children:"eval()"})," \u51fd\u6570\u3002\u56e0\u4e3a JSON \u662f JavaScript \u8bed\u6cd5\u7684\u5b50\u96c6\uff0c\u6240\u4ee5 ",(0,i.jsx)(n.code,{children:"eval()"})," \u53ef\u4ee5\u89e3\u6790\u3001\u89e3\u91ca\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a JavaScript \u5bf9\u8c61\u548c\u6570\u7ec4\u8fd4\u56de\u3002ECMAScript 5 \u589e\u52a0\u4e86 JSON\u5168\u5c40\u5bf9\u8c61\uff0c\u6b63\u5f0f\u5f15\u5165\u89e3\u6790 JSON \u7684\u80fd\u529b\u3002\u8fd9\u4e2a\u5bf9\u8c61\u5728\u6240\u6709\u4e3b\u6d41\u6d4f\u89c8\u5668\u4e2d\u90fd\u5f97\u5230\u4e86\u652f\u6301\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["JSON \u5bf9\u8c61\u6709\u4e24\u4e2a\u65b9\u6cd5\uff1a",(0,i.jsx)(n.code,{children:"stringify()"})," \u548c ",(0,i.jsx)(n.code,{children:"parse()"}),"\u3002\u5728\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\uff0c\u524d\u8005\u53ef\u4ee5\u5c06 JavaScript\u5e8f\u5217\u5316\u4e3aJSON\u5b57\u7b26\u4e32\uff0c\u540e\u8005\u5c06JSON\u6587\u672c\u6570\u636e\u503c\u89e3\u6790\u4e3aJavaScript\u503c\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'let obj = {\n  key: \'value\',\n};\n\nlet jsonText = JSON.stringify(obj);\n\nconsole.log(jsonText); // {"key":"value"}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u628a\u4e00\u4e2a JavaScript \u5bf9\u8c61\u5e8f\u5217\u5316\u4e3a\u4e00\u4e2a JSON \u5b57\u7b26\u4e32\uff0c\u4fdd\u5b58\u5728\u53d8\u91cf jsonText \u4e2d\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u4f1a\u8f93\u51fa\u4e0d\u5305\u542b\u7a7a\u683c\u6216\u7f29\u8fdb\u7684 JSON \u5b57\u7b26\u4e32\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5e8f\u5217\u5316 JavaScript \u5bf9\u8c61\u65f6\uff0c\u6240\u6709\u51fd\u6570\u548c\u539f\u578b\u6210\u5458\u90fd\u4f1a\u6709\u610f\u5730\u5728\u7ed3\u679c\u4e2d\u7701\u7565\u3002\u6b64\u5916\uff0c\u503c\u4e3a undefined\u7684\u4efb\u4f55\u5c5e\u6027\u4e5f\u4f1a\u88ab\u8df3\u8fc7\u3002\u6700\u7ec8\u5f97\u5230\u7684\u5c31\u662f\u6240\u6709\u5b9e\u4f8b\u5c5e\u6027\u5747\u4e3a\u6709\u6548 JSON \u6570\u636e\u7c7b\u578b\u7684\u8868\u793a\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["JSON \u5b57\u7b26\u4e32\u53ef\u4ee5\u76f4\u63a5\u4f20\u7ed9 ",(0,i.jsx)(n.code,{children:"JSON.parse()"}),"\uff0c\u7136\u540e\u5f97\u5230\u76f8\u5e94\u7684 JavaScript \u503c\u3002\u6bd4\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u521b\u5efa\u4e0e\u539f\u5148\u5bf9\u8c61\u7c7b\u4f3c\u7684\u65b0\u5bf9\u8c61\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let obj = {\n  key: 'value',\n};\n\nlet jsonText = JSON.stringify(obj);\n\nlet objCopy = JSON.parse(jsonText);\n\nconsole.log(obj === objCopy); // false\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u4e24\u8005\u662f\u5b8c\u5168\u4e0d\u540c\u7684\u5bf9\u8c61\uff0c\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\u3002\u4f46\u662f\u5b83\u4eec\u62e5\u6709\u76f8\u540c\u7684\u5c5e\u6027\u548c\u503c\u3002\u5982\u679c\u7ed9 ",(0,i.jsx)(n.code,{children:"JSON.parse()"})," \u4f20\u5165\u7684 JSON \u5b57\u7b26\u4e32\u65e0\u6548\uff0c\u5219\u4f1a\u5bfc\u81f4\u629b\u51fa\u9519\u8bef\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"jsonstringify",children:"JSON.stringify"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u53ef\u4ee5\u63a5\u6536\u4e09\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8fc7\u6ee4\u5668\uff0c\u53ef\u4ee5\u662f\u6570\u7ec4\u6216\u51fd\u6570\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u7528\u4e8e\u7f29\u8fdb\u7ed3\u679c JSON \u5b57\u7b26\u4e32\u7684\u9009\u9879\u3002\u5355\u72ec\u6216\u7ec4\u5408\u4f7f\u7528\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u66f4\u597d\u5730\u63a7\u5236 JSON \u5e8f\u5217\u5316\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8fc7\u6ee4\u5668",children:"\u8fc7\u6ee4\u5668"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u90a3\u4e48 ",(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u653e\u56de\u7684\u7ed3\u679c\u53ea\u4f1a\u5305\u542b\u8be5\u6570\u7ec4\u4e2d\u5217\u51fa\u7684\u5bf9\u8c61\u5c5e\u6027\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let book = {\n  title: 'Professional JavaScript',\n  authors: ['Nicholas C. Zakas', 'Matt Frisbie'],\n  edition: 4,\n  year: 2017,\n};\nlet jsonText = JSON.stringify(book, ['title', 'edition']);\nconsole.log(jsonText); // {\"title\":\"Professional JavaScript\",\"edition\":4}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5219\u884c\u4e3a\u53c8\u6709\u4e0d\u540c\u3002\u63d0\u4f9b\u7684\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a\u5c5e\u6027\u540d\uff08key\uff09\u548c\u5c5e\u6027\u503c\uff08value\uff09\u3002\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2a key \u51b3\u5b9a\u8981\u5bf9\u76f8\u5e94\u5c5e\u6027\u6267\u884c\u4ec0\u4e48\u64cd\u4f5c\u3002\u8fd9\u4e2a key \u59cb\u7ec8\u662f\u5b57\u7b26\u4e32\uff0c\u53ea\u662f\u5728\u503c\u4e0d\u5c5e\u4e8e\u67d0\u4e2a\u952e/\u503c\u5bf9\uff08\u5c5e\u4e8e\u7b80\u5355\u503c\uff09\u65f6\u4f1a\u662f\u7a7a\u5b57\u7b26\u4e32\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u6539\u53d8\u5bf9\u8c61\u7684\u5e8f\u5217\u5316\u7ed3\u679c\uff0c\u8fd4\u56de\u7684\u503c\u5c31\u662f\u76f8\u5e94 key \u5e94\u8be5\u5305\u542b\u7684\u7ed3\u679c\u3002\u6ce8\u610f\uff0c\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"undefined"})," \u4f1a\u5bfc\u81f4\u5c5e\u6027\u88ab\u5ffd\u7565\u3002\u4e0b\u9762\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let book = {\u2026\u2026}\nlet jsonText = JSON.stringify(book, (key, value) => {\n  switch (key) {\n    case 'authors':\n      return value.join(',');\n    default:\n      return undefined;\n  }\n});\n\nconsole.log(jsonText) // undefined\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5370\u7ed3\u679c\u5e94\u8be5\u662f ",(0,i.jsx)(n.code,{children:'{"authors":"Nicholas C. Zakas,Matt Frisbie"}'})," \u4f46\u4e8b\u5b9e\u771f\u7684\u5982\u6b64\u5417\uff1f"]}),"\n",(0,i.jsxs)(n.p,{children:['\u8fd9\u4e2a\u51fd\u6570\u57fa\u4e8e\u952e\u8fdb\u884c\u4e86\u8fc7\u6ee4\u3002\u5982\u679c\u952e\u662f"authors"\uff0c\u5219\u5c06\u6570\u7ec4\u503c\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002\u5176\u4ed6\u952e\u8fd4\u56de ',(0,i.jsx)(n.code,{children:"undefined"})," \u5ffd\u7565\u8be5\u5c5e\u6027\u3002\u4f46\u662f\uff0c\u6700\u540e\u4e00\u5b9a\u8981\u63d0\u4f9b\u9ed8\u8ba4\u8fd4\u56de\u503c\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u7ed3\u679c\u4e3a undefined\u3002",(0,i.jsx)(n.strong,{children:"\u7b2c\u4e00\u6b21\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u5b9e\u9645\u4e0a\u4f1a\u4f20\u5165\u7a7a\u5b57\u7b26\u4e32key\uff0c\u503c\u662f book \u5bf9\u8c61"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="\u5982\u4f55\u80fd\u591f\u5ffd\u7565\u5176\u4ed6\u5c5e\u6027\uff0c\u9664\u4e86 anthors \u5c5e\u6027"',children:'/**\n * \u8bbe\u8ba1\u4e00\u4e2a\u5f00\u5173\uff0c\u53ea\u5728\u51fd\u6570\u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u624d\u4f1a\u6267\u884c\n */\nlet book = {\u2026\u2026}\n\nfunction jsonFilter(key, value) {\n  /**\n  * \u521d\u59cb\u65f6\uff0chasBeenCalled \u5c5e\u6027\u4e0d\u5b58\u5728\n  * \u7b2c\u4e00\u6b21\u8c03\u7528\uff0c\u5c06\u6267\u884c\u51fd\u6570\u903b\u8f91\n  */\n  if (!jsonFilter.hasBeenCalled) {\n    jsonFilter.hasBeenCalled = true;\n    return value;\n  }\n\n  if (key === "authors") {\n    return value.join(",");\n  }\n\n  return undefined;\n}\n\nlet jsonText = JSON.stringify(book, jsonFilter);\n\nconsole.log(jsonText); // {"authors":"Nicholas C. Zakas,Matt Frisbie"}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u5b57\u7b26\u4e32\u7f29\u8fdb",children:"\u5b57\u7b26\u4e32\u7f29\u8fdb"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u65b9\u6cd5\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u63a7\u5236\u7f29\u8fdb\u548c\u7a7a\u683c\u3002\u5728\u8fd9\u4e2a\u53c2\u6570\u662f\u6570\u503c\u65f6\uff0c\u8868\u793a\u6bcf\u4e00\u7ea7\u7f29\u8fdb\u7684\u7a7a\u683c\u6570\u3002\u4f8b\u5982\uff0c\u6bcf\u7ea7\u7f29\u8fdb 4 \u4e2a\u7a7a\u683c\uff0c\u53ef\u4ee5\u8fd9\u6837\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let book = {\n  title: 'Professional JavaScript',\n  authors: ['Nicholas C. Zakas', 'Matt Frisbie'],\n  edition: 4,\n  year: 2017,\n};\nlet jsonText = JSON.stringify(book, null, 4);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xjson",metastring:'title="\u5c55\u793a jsonText \u7ed3\u679c"',children:'{\n    "title": "Professional JavaScript",\n    "authors": [\n        "Nicholas C. Zakas",\n        "Matt Frisbie"\n    ],\n    "edition": 4,\n    "year": 2017\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u9664\u4e86\u7f29\u8fdb\uff0c",(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u65b9\u6cd5\u8fd8\u4e3a\u65b9\u4fbf\u9605\u8bfb\u63d2\u5165\u4e86\u6362\u884c\u7b26\u3002\u8fd9\u4e2a\u884c\u4e3a\u5bf9\u4e8e\u6240\u6709\u6709\u6548\u7684\u7f29\u8fdb\u53c2\u6570\u90fd\u4f1a\u53d1\u751f\u3002\uff08\u53ea\u7f29\u8fdb\u4e0d\u6362\u884c\u4e5f\u6ca1\u4ec0\u4e48\u7528\u3002\uff09\u6700\u5927\u7f29\u8fdb\u503c\u4e3a 10\uff0c\u5927\u4e8e 10 \u7684\u503c\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u4e3a 10\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u7f29\u8fdb\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u800c\u975e\u6570\u503c\uff0c\u90a3\u4e48 JSON \u5b57\u7b26\u4e32\u4e2d\u5c31\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u5b57\u7b26\u4e32\u800c\u4e0d\u662f\u7a7a\u683c\u6765\u7f29\u8fdb\u3002\u4f7f\u7528\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u4ee5\u5c06\u7f29\u8fdb\u5b57\u7b26\u8bbe\u7f6e\u4e3a Tab \u6216\u4efb\u610f\u5b57\u7b26\uff0c\u5982\u4e24\u4e2a\u8fde\u5b57\u7b26\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'let book = {\u2026\u2026}\nlet jsonText = JSON.stringify(book, null, "--" );\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xjson",metastring:'title="jsonText \u7684\u503c\u4f1a\u53d8\u6210\u5982\u4e0b\u683c\u5f0f"',children:'{\n--"title": "Professional JavaScript",\n--"authors": [\n----"Nicholas C. Zakas",\n----"Matt Frisbie"\n--],\n--"edition": 4,\n--"year": 2017\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u5b57\u7b26\u4e32\u65f6\u540c\u6837\u6709 10 \u4e2a\u5b57\u7b26\u7684\u957f\u5ea6\u9650\u5236\u3002\u5982\u679c\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7 10\uff0c\u5219\u4f1a\u5728\u7b2c 10 \u4e2a\u5b57\u7b26\u5904\u622a\u65ad\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"tojson",children:"toJSON"}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u65f6\u5019\uff0c\u5bf9\u8c61\u9700\u8981\u5728 ",(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u4e4b\u4e0a\u81ea\u5b9a\u4e49 JSON \u5e8f\u5217\u5316\u3002\u6b64\u65f6\uff0c\u53ef\u4ee5\u5728\u8981\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u4e2d\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:"toJSON()"})," \u65b9\u6cd5\uff0c\u5e8f\u5217\u5316\u65f6\u4f1a\u57fa\u4e8e\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u9002\u5f53\u7684 JSON \u8868\u793a\u3002\u4e8b\u5b9e\u4e0a\uff0c\u539f\u751f Date \u5bf9\u8c61\u5c31\u6709\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"toJSON()"})," \u65b9\u6cd5\uff0c\u80fd\u591f\u81ea\u52a8\u5c06 JavaScript \u7684 Date \u5bf9\u8c61\u8f6c\u6362\u4e3a ISO 8601 \u65e5\u671f\u5b57\u7b26\u4e32\uff08\u672c\u8d28\u4e0a\u4e0e\u5728Date \u5bf9\u8c61\u4e0a\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"toISOString()"})," \u65b9\u6cd5\u4e00\u6837\uff09\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="\u4e3a\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u800c\u6dfb\u52a0\u4e86\u4e00\u4e2a toJSON()\u65b9\u6cd5"',children:"let book = {\n  title: 'Professional JavaScript',\n  authors: ['Nicholas C. Zakas', 'Matt Frisbie'],\n  edition: 4,\n  year: 2017,\n  toJSON: function () {\n    return this.title;\n  },\n};\nlet jsonText = JSON.stringify(book);\nconsole.log(jsonText); // \"Professional JavaScript\"\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u6765\u5b9a\u4e49 ",(0,i.jsx)(n.code,{children:"toJSON()"})," \u65b9\u6cd5\u3002\u4e3b\u8981\u539f\u56e0\u662f\u7bad\u5934\u51fd\u6570\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\u662f\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e0d\u5408\u9002\u3002",(0,i.jsx)(n.code,{children:"toJSON()"})," \u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56de\u4efb\u610f\u5e8f\u5217\u5316\u503c\uff0c\u8fd4\u56de undefined \u4f1a\u5bfc\u81f4\u503c\u88ab\u5ffd\u7565\uff0c\u6216\u8005\u5982\u679c\u662f\u9876\n\u7ea7\u5bf9\u8c61\uff0c\u5219\u672c\u8eab\u5c31\u662f undefined\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"toJSON()"})," \u65b9\u6cd5\u53ef\u4ee5\u4e0e\u8fc7\u6ee4\u51fd\u6570\u4e00\u8d77\u4f7f\u7528\uff0c\u56e0\u6b64\u7406\u89e3\u4e0d\u540c\u5e8f\u5217\u5316\u6d41\u7a0b\u7684\u987a\u5e8f\u975e\u5e38\u91cd\u8981\u3002\u5728\u628a\u5bf9\u8c61\u4f20\u7ed9 ",(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u65f6\u4f1a\u6267\u884c\u5982\u4e0b\u6b65\u9aa4\u3002"]}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u7b2c\u4e00\u6b65\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"toJSON"})," \u51fd\u6570\u83b7\u53d6\u5230\u5b9e\u9645\u7684\u503c\u3002"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u7b2c\u4e8c\u6b65\uff0c",(0,i.jsx)(n.code,{children:"JSON.stringify"})," \u5982\u679c\u63d0\u4f9b\u4e86\u7b2c\u4e8c\u4e2a\u53c2\u6570 \u5219\u5e94\u7528\u8fc7\u6ee4\u3002\u8fc7\u6ee4\u51fd\u6570\u63a5\u6536\u7684\uff08key/value\uff09 \u7531\u7b2c\u4e00\u6b65\u83b7\u53d6\u5230\u7684\u5b9e\u9645\u503c\u4f20\u5165\u3002"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u7b2c\u4e09\u6b65\u8fdb\u884c\u5e8f\u5217\u5316\u3002"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u7b2c\u56db\u6b65\uff0c\u5982\u679c\u63d0\u4f9b\u4e86\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u5219\u76f8\u5e94\u5730\u8fdb\u884c\u7f29\u8fdb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"jsonparse",children:"JSON.parse"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JSON.parse()"})," \u65b9\u6cd5\u4e5f\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u989d\u5916\u7684\u53c2\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u4f1a\u9488\u5bf9\u6bcf\u4e2a\u952e/\u503c\u5bf9\u90fd\u8c03\u7528\u4e00\u6b21\u3002\u4e3a\u533a\u522b\u4e8e\u4f20\u7ed9 ",(0,i.jsx)(n.code,{children:"JSON.stringify()"})," \u7684\u8d77\u8fc7\u6ee4\u4f5c\u7528\u7684\u66ff\u4ee3\u51fd\u6570\uff08replacer\uff09\uff0c\u8fd9\u4e2a\u51fd\u6570\u88ab\u79f0\u4e3a\u8fd8\u539f\u51fd\u6570\uff08reviver\uff09\u3002\u5b9e\u9645\u4e0a\u5b83\u4eec\u7684\u683c\u5f0f\u5b8c\u5168\u4e00\u6837\uff0c\u5373\u8fd8\u539f\u51fd\u6570\u4e5f\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u5c5e\u6027\u540d\uff08key\uff09\u548c\u5c5e\u6027\u503c\uff08value\uff09\uff0c\u53e6\u5916\u4e5f\u9700\u8981\u8fd4\u56de\u503c\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u8fd8\u539f\u51fd\u6570\u8fd4\u56de undefined\uff0c\u5219\u7ed3\u679c\u4e2d\u5c31\u4f1a\u5220\u9664\u76f8\u5e94\u7684\u952e\u3002\u5982\u679c\u8fd4\u56de\u4e86\u5176\u4ed6\u4efb\u4f55\u503c\uff0c\u5219\u8be5\u503c\u5c31\u4f1a\u6210\u4e3a\u76f8\u5e94\u952e\u7684\u503c\u63d2\u5165\u5230\u7ed3\u679c\u4e2d\u3002\u8fd8\u539f\u51fd\u6570\u7ecf\u5e38\u88ab\u7528\u4e8e\u628a\u65e5\u671f\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a Date \u5bf9\u8c61\u3002\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let people = {\n  name: 'AGoodBook',\n  year: 2024,\n  releaseDate: new Date(2024, 1, 10),\n};\nlet jsonText = JSON.stringify(people);\nlet peopleCopy = JSON.parse(jsonText, (key, value) =>\n  key == 'releaseDate' ? new Date(value) : value,\n);\nconsole.log(peopleCopy.releaseDate.getFullYear()); // 2024\n"})}),"\n",(0,i.jsx)(n.p,{children:'\u4ee5\u4e0a\u4ee3\u7801\u5728 people \u5bf9\u8c61\u4e2d\u589e\u52a0\u4e86 releaseDate \u5c5e\u6027\uff0c\u662f\u4e00\u4e2a Date \u5bf9\u8c61\u3002\u8fd9\u4e2a\u5bf9\u8c61\u5728\u88ab\u5e8f\u5217\u5316\u4e3a JSON \u5b57\u7b26\u4e32\u540e\uff0c\u53c8\u88ab\u91cd\u65b0\u89e3\u6790\u4e3a\u4e00\u4e2a\u5bf9\u8c61 peopleCopy\u3002\u8fd9\u91cc\u7684\u8fd8\u539f\u51fd\u6570\u4f1a\u67e5\u627e"releaseDate"\u952e\uff0c\u5982\u679c\u627e\u5230\u5c31\u4f1a\u6839\u636e\u5b83\u7684\u65e5\u671f\u5b57\u7b26\u4e32\u521b\u5efa\u65b0\u7684 Date \u5bf9\u8c61\u3002\u5f97\u5230\u7684 bookCopy.releaseDate \u5c5e\u6027\u53c8\u53d8\u56de\u4e86Date \u5bf9\u8c61\uff0c\u56e0\u6b64\u53ef\u4ee5\u8c03\u7528\u5176\u539f\u578b\u7684\u65b9\u6cd5\u3002'}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"JSON \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u6570\u636e\u683c\u5f0f\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u8868\u793a\u590d\u6742\u6570\u636e\u7ed3\u6784\u3002\u8fd9\u4e2a\u683c\u5f0f\u4f7f\u7528 JavaScript \u8bed\u6cd5\u7684\u4e00\u4e2a\u5b50\u96c6\u8868\u793a\u5bf9\u8c61\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u6570\u503c\u3001\u5e03\u5c14\u503c\u548c null\u3002\u867d\u7136 XML \u4e5f\u80fd\u80dc\u4efb\u540c\u6837\u7684\u89d2\u8272\uff0c\u4f46 JSON \u66f4\u7b80\u6d01\uff0cJavaScript \u652f\u6301\u4e5f\u66f4\u597d\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u5df2\u7ecf\u539f\u751f\u652f\u6301\u5168\u5c40 JSON \u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"ECMAScript 5 \u5b9a\u4e49\u4e86\u539f\u751f JSON \u5bf9\u8c61\uff0c\u7528\u4e8e\u5c06 JavaScript \u5bf9\u8c61\u5e8f\u5217\u5316\u4e3a JSON \u5b57\u7b26\u4e32\uff0c\u4ee5\u53ca\u5c06 JSON\u6570\u7ec4\u89e3\u6790\u4e3a JavaScript \u5bf9\u8c61\u3002JSON.stringify()\u548c JSON.parse()\u65b9\u6cd5\u5206\u522b\u7528\u4e8e\u5b9e\u73b0\u8fd9\u4e24\u79cd\u64cd\u4f5c\u3002\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u90fd\u6709\u4e00\u4e9b\u9009\u9879\u53ef\u4ee5\u7528\u6765\u6539\u53d8\u9ed8\u8ba4\u7684\u884c\u4e3a\uff0c\u4ee5\u5b9e\u73b0\u8fc7\u6ee4\u6216\u4fee\u6539\u6d41\u7a0b\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var i=s(7294);const a={},l=i.createContext(a);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);