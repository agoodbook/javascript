"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[8428],{76266:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=s(85893),c=s(11151);const o={},l="Web Socket",i={id:"network-requests-and-remote-resources/websocket",title:"Web Socket",description:"Web Socket\uff08\u5957\u63a5\u5b57\uff09\u7684\u76ee\u6807\u662f\u901a\u8fc7\u4e00\u4e2a\u957f\u65f6\u8fde\u63a5\u5b9e\u73b0\u4e0e\u670d\u52a1\u5668\u5168\u53cc\u5de5\u3001\u53cc\u5411\u7684\u901a\u4fe1\u3002\u5728 JavaScript\u4e2d\u521b\u5efa Web Socket \u65f6\uff0c\u4e00\u4e2a HTTP \u8bf7\u6c42\u4f1a\u53d1\u9001\u5230\u670d\u52a1\u5668\u4ee5\u521d\u59cb\u5316\u8fde\u63a5\u3002\u670d\u52a1\u5668\u54cd\u5e94\u540e\uff0c\u8fde\u63a5\u4f7f\u7528 HTTP\u7684 Upgrade \u5934\u90e8\u4ece HTTP \u534f\u8bae\u5207\u6362\u5230 Web Socket \u534f\u8bae\u3002\u8fd9\u610f\u5473\u7740 Web Socket \u4e0d\u80fd\u901a\u8fc7\u6807\u51c6 HTTP \u670d\u52a1\u5668\u5b9e\u73b0\uff0c\u800c\u5fc5\u987b\u4f7f\u7528\u652f\u6301\u8be5\u534f\u8bae\u7684\u4e13\u6709\u670d\u52a1\u5668\u3002",source:"@site/docs/network-requests-and-remote-resources/websocket.mdx",sourceDirName:"network-requests-and-remote-resources",slug:"/network-requests-and-remote-resources/websocket",permalink:"/javascript-docs/network-requests-and-remote-resources/websocket",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/network-requests-and-remote-resources/websocket.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Beacon API",permalink:"/javascript-docs/network-requests-and-remote-resources/beacon-api"},next:{title:"Cookie",permalink:"/javascript-docs/client-storage/cookie"}},r={},a=[{value:"API",id:"api",level:2},{value:"\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e",id:"\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e",level:2},{value:"\u901a\u8baf\u7528\u4f8b",id:"\u901a\u8baf\u7528\u4f8b",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"binaryType",id:"binarytype",level:3},{value:"readyState",id:"readystate",level:3},{value:"url",id:"url",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"web-socket",children:"Web Socket"}),"\n",(0,t.jsx)(n.p,{children:"Web Socket\uff08\u5957\u63a5\u5b57\uff09\u7684\u76ee\u6807\u662f\u901a\u8fc7\u4e00\u4e2a\u957f\u65f6\u8fde\u63a5\u5b9e\u73b0\u4e0e\u670d\u52a1\u5668\u5168\u53cc\u5de5\u3001\u53cc\u5411\u7684\u901a\u4fe1\u3002\u5728 JavaScript\u4e2d\u521b\u5efa Web Socket \u65f6\uff0c\u4e00\u4e2a HTTP \u8bf7\u6c42\u4f1a\u53d1\u9001\u5230\u670d\u52a1\u5668\u4ee5\u521d\u59cb\u5316\u8fde\u63a5\u3002\u670d\u52a1\u5668\u54cd\u5e94\u540e\uff0c\u8fde\u63a5\u4f7f\u7528 HTTP\u7684 Upgrade \u5934\u90e8\u4ece HTTP \u534f\u8bae\u5207\u6362\u5230 Web Socket \u534f\u8bae\u3002\u8fd9\u610f\u5473\u7740 Web Socket \u4e0d\u80fd\u901a\u8fc7\u6807\u51c6 HTTP \u670d\u52a1\u5668\u5b9e\u73b0\uff0c\u800c\u5fc5\u987b\u4f7f\u7528\u652f\u6301\u8be5\u534f\u8bae\u7684\u4e13\u6709\u670d\u52a1\u5668\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3a Web Socket\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u534f\u8bae\uff0c\u6240\u4ee5 URL\u65b9\u6848\uff08scheme\uff09\u7a0d\u6709\u53d8\u5316\uff1a\u4e0d\u80fd\u518d\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"http://"})," \u6216 ",(0,t.jsx)(n.code,{children:"https://"}),"\uff0c\u800c\u8981\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ws://"})," \u548c ",(0,t.jsx)(n.code,{children:"wss://"}),"\u3002\u524d\u8005\u662f\u4e0d\u5b89\u5168\u7684\u8fde\u63a5\uff0c\u540e\u8005\u662f\u5b89\u5168\u8fde\u63a5\u3002\u5728\u6307\u5b9a Web Socket URL \u65f6\uff0c\u5fc5\u987b\u5305\u542b URL \u65b9\u6848\uff0c\u56e0\u4e3a\u5c06\u6765\u6709\u53ef\u80fd\u518d\u652f\u6301\u5176\u4ed6\u65b9\u6848\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u534f\u8bae\u800c\u975e HTTP \u534f\u8bae\u7684\u597d\u5904\u662f\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u53ef\u4ee5\u53d1\u9001\u975e\u5e38\u5c11\u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u5bf9HTTP \u9020\u6210\u4efb\u4f55\u8d1f\u62c5\u3002\u4f7f\u7528\u66f4\u5c0f\u7684\u6570\u636e\u5305\u8ba9 Web Socket \u975e\u5e38\u9002\u5408\u5e26\u5bbd\u548c\u5ef6\u8fdf\u95ee\u9898\u6bd4\u8f83\u660e\u663e\u7684\u79fb\u52a8\u5e94\u7528\u3002\u4f7f\u7528\u81ea\u5b9a\u4e49\u534f\u8bae\u7684\u7f3a\u70b9\u662f\uff0c\u5b9a\u4e49\u534f\u8bae\u7684\u65f6\u95f4\u6bd4\u5b9a\u4e49 JavaScript API \u8981\u957f\u3002Web Socket \u5f97\u5230\u4e86\u6240\u6709\u4e3b\u6d41\u6d4f\u89c8\u5668\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Web Socket\uff0c\u5c31\u8981\u5b9e\u4f8b\u5316\u4e00\u4e2a WebSocket \u5bf9\u8c61\u5e76\u4f20\u5165\u63d0\u4f9b\u8fde\u63a5\u7684 URL\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let socket = new WebSocket('ws://127.0.0.1');\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u5fc5\u987b\u7ed9 WebSocket \u6784\u9020\u51fd\u6570\u4f20\u5165\u4e00\u4e2a\u7edd\u5bf9 URL\u3002\u540c\u6e90\u7b56\u7565\u4e0d\u9002\u7528\u4e8e Web Socket\uff0c\u56e0\u6b64\u53ef\u4ee5\u6253\u5f00\u5230\u4efb\u610f\u7ad9\u70b9\u7684\u8fde\u63a5\u3002\u81f3\u4e8e\u662f\u5426\u4e0e\u6765\u81ea\u7279\u5b9a\u6e90\u7684\u9875\u9762\u901a\u4fe1\uff0c\u5219\u5b8c\u5168\u53d6\u51b3\u4e8e\u670d\u52a1\u5668\u3002\uff08\u5728\u63e1\u624b\u9636\u6bb5\u5c31\u53ef\u4ee5\u786e\u5b9a\u8bf7\u6c42\u6765\u81ea\u54ea\u91cc\u3002\uff09"}),"\n",(0,t.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u4f1a\u5728\u521d\u59cb\u5316 WebSocket \u5bf9\u8c61\u4e4b\u540e\u7acb\u5373\u521b\u5efa\u8fde\u63a5\u3002\u4e0e XHR \u7c7b\u4f3c\uff0cWebSocket \u4e5f\u6709\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"readyState"})," \u5c5e\u6027\u8868\u793a\u5f53\u524d\u72b6\u6001\u3002\u4e0d\u8fc7\uff0c\u8fd9\u4e2a\u503c\u4e0e XHR \u4e2d\u76f8\u5e94\u7684\u503c\u4e0d\u4e00\u6837\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"WebSocket \u6784\u9020\u51fd\u6570\u539f\u578b\u643a\u5e26\u5982\u4e0b\u5c5e\u6027\uff0creadyState \u503c\u4e0e\u5c5e\u6027\u4e00\u4e00\u5bf9\u5e94\u3002"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.OPENING(0)"}),": \u8fde\u63a5\u6b63\u5728\u5efa\u7acb\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.OPEN(1)"}),": \u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.CLOSING(2)"}),": \u8fde\u63a5\u6b63\u5728\u5173\u95ed\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.CLOSE(3)"}),": \u8fde\u63a5\u5df2\u7ecf\u5173\u95ed\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["WebSocket \u5bf9\u8c61\u6ca1\u6709 ",(0,t.jsx)(n.code,{children:"readystatechange"})," \u4e8b\u4ef6\uff0c\u800c\u662f\u6709\u4e0e\u4e0a\u8ff0\u4e0d\u540c\u72b6\u6001\u5bf9\u5e94\u7684\u5176\u4ed6\u4e8b\u4ef6\u3002",(0,t.jsx)(n.code,{children:"readyState"})," \u503c\u4ece 0 \u5f00\u59cb\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u8c03\u7528 close()\u65b9\u6cd5\u5173\u95ed Web Socket \u8fde\u63a5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"socket.close();\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8c03\u7528 close()\u4e4b\u540e\uff0creadyState \u7acb\u5373\u53d8\u4e3a 2\uff08\u8fde\u63a5\u6b63\u5728\u5173\u95ed\uff09\uff0c\u5e76\u4f1a\u5728\u5173\u95ed\u540e\u53d8\u4e3a 3\uff08\u8fde\u63a5\u5df2\u7ecf\u5173\u95ed\uff09\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let socket = new WebSocket('ws://127.0.0.1');\n\nsocket.addEventListener('open', () => {\n  console.log('WebSocket \u5efa\u7acb\u8fde\u63a5', socket.readyState);\n});\n\nsocket.addEventListener('close', event => {\n  console.log('WebSocket \u65ad\u5f00\u8fde\u63a5', socket.readyState);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e",children:"\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u6253\u5f00 Web Socket \u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fde\u63a5\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\u3002\u8981\u5411\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\uff0c\u4f7f\u7528 send()\u65b9\u6cd5\u5e76\n\u4f20\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\u3001ArrayBuffer \u6216 Blob\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let socket = new WebSocket('ws://127.0.0.1');\n\nlet stringData = 'Hello world!';\nlet blobData = new Blob(['f', 'o', 'o']);\n\nfunction sendMessage() {\n  socket.send(stringData);\n  socket.send(blobData);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u6d88\u606f\u65f6\uff0cWebSocket \u5bf9\u8c61\u4e0a\u4f1a\u89e6\u53d1 message \u4e8b\u4ef6\u3002\u8fd9\u4e2a message \u4e8b\u4ef6\u4e0e\u5176\u4ed6\u6d88\u606f\u534f\u8bae\u7c7b\u4f3c\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"event.data"})," \u5c5e\u6027\u8bbf\u95ee\u5230\u6709\u6548\u8f7d\u8377\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"socket.onmessage = function (event) {\n  let data = event.data;\n  // \u5bf9\u6570\u636e\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0e\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"send()"})," \u65b9\u6cd5\u53d1\u9001\u7684\u6570\u636e\u7c7b\u4f3c\uff0c",(0,t.jsx)(n.code,{children:"event.data"}),' \u8fd4\u56de\u7684\u6570\u636e\u4e5f\u53ef\u80fd\u662f ArrayBuffer \u6216 Blob\u3002\u8fd9\u7531 WebSocket \u5bf9\u8c61\u7684 binaryType \u5c5e\u6027\u51b3\u5b9a\uff0c\u8be5\u5c5e\u6027\u53ef\u80fd\u662f"blob"\u6216"arraybuffer"\u3002']}),"\n",(0,t.jsx)(n.h3,{id:"\u901a\u8baf\u7528\u4f8b",children:"\u901a\u8baf\u7528\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u524d\u7aef\u901a\u8fc7 WebSocket \u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u5230\u540e\u7aef\u65f6\uff0c\u540e\u7aef\u901a\u5e38\u4f1a\u5c06\u8fd9\u4e9b\u4e8c\u8fdb\u5236\u6570\u636e\u5b58\u50a8\u4e3a Buffer \u5bf9\u8c61\uff08\u5728Node.js\u73af\u5883\u4e2d\uff09\uff0c\u800c\u5728\u524d\u7aef\u63a5\u6536\u5230\u540e\u7aef\u8fd4\u56de\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u65f6\uff0c\u4f1a\u4ee5 Blob \u5bf9\u8c61\u7684\u5f62\u5f0f\u8868\u793a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u5982\u4f55\u5904\u7406\u6570\u636e\u7684\u8f6c\u6362\u5341\u5206\u91cd\u8981\uff01"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="\u524d\u7aef"',children:"<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>WebSocket Chat</title>\n  </head>\n  <body>\n    <ul id=\"client\">\n      <li>\u5176\u5b83\u5ba2\u6237\u7aef\u7aef\u53d1\u9001\u7684\u6d88\u606f\u5217\u8868</li>\n    </ul>\n    <input type=\"text\" autocomplete=\"off\" /><button onclick=\"sendMessage()\">\n      \u53d1\u9001\n    </button>\n\n    <button onclick=\"closeSocket()\">\u65ad\u5f00</button>\n    <script>\n      const socket = new WebSocket('ws://127.0.0.1:8080');\n\n      // \u76d1\u542c\u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\n      socket.addEventListener('open', event => {\n        console.log('WebSocket connection opened');\n      });\n\n      // \u76d1\u542c\u63a5\u6536\u5230\u6d88\u606f\u4e8b\u4ef6\n      socket.addEventListener('message', event => {\n        event.data.text().then(text => {\n          let li = document.createElement('li');\n          li.innerText = text;\n          document.querySelector('#client').appendChild(li);\n        });\n      });\n\n      // \u76d1\u542c\u53d1\u751f\u9519\u8bef\u4e8b\u4ef6\n      socket.addEventListener('error', event => {\n        console.error('WebSocket error:', event);\n      });\n\n      // \u76d1\u542c\u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\n      socket.addEventListener('close', event => {\n        console.log('WebSocket connection closed');\n      });\n\n      function sendMessage() {\n        let value = document.querySelector('input').value;\n\n        socket.send(value);\n      }\n\n      function closeSocket() {\n        socket.close();\n      }\n    <\/script>\n  </body>\n</html>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="\u540e\u7aef\uff08NodeJS\uff09"',children:"const WebSocket = require('ws');\nconst http = require('http');\nconst express = require('express');\n\nconst app = express();\nconst server = http.createServer(app);\nconst wss = new WebSocket.Server({ server });\n\nwss.on('connection', ws => {\n  console.log('\u5ba2\u6237\u7aef\u5df2\u8fde\u63a5');\n\n  // \u76d1\u542c\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u6d88\u606f\n  ws.on('message', message => {\n    console.log('\u5ba2\u6237\u7aef\u6536\u5230\u6d88\u606f:', message);\n\n    // \u5e7f\u64ad\u6d88\u606f\u7ed9\u6240\u6709\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\n    wss.clients.forEach(client => {\n      if (client !== ws && client.readyState === WebSocket.OPEN) {\n        client.send(message);\n      }\n    });\n  });\n\n  // \u76d1\u542c\u8fde\u63a5\u65ad\u5f00\u4e8b\u4ef6\n  ws.on('close', () => {\n    console.log('\u8fde\u63a5\u5173\u95ed');\n  });\n});\n\nserver.listen(8080, () => {\n  console.log('Server is running on http://localhost:8080');\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,t.jsx)(n.h3,{id:"binarytype",children:"binaryType"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WebSocket.binaryType"})," \u8fd4\u56de websocket \u8fde\u63a5\u6240\u4f20\u8f93\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u7c7b\u578b\u3002\u4e24\u79cd\u7c7b\u578b\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"blob"})]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"arraybuffer"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"readystate",children:"readyState"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u5f53\u524d WebSocket \u7684\u8fde\u63a5\u72b6\u6001\uff0c\u53ea\u8bfb\u3002\u503c\u4e3a 0 - 3\uff0c\u5bf9\u5e94\u5982\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.OPENING(0)"}),": \u8fde\u63a5\u6b63\u5728\u5efa\u7acb\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.OPEN(1)"}),": \u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.CLOSING(2)"}),": \u8fde\u63a5\u6b63\u5728\u5173\u95ed\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"WebSocket.CLOSE(3)"}),": \u8fde\u63a5\u5df2\u7ecf\u5173\u95ed\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"url"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WebSocket.url"})," \u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u8fd4\u56de\u503c\u4e3a\u5f53\u6784\u9020\u51fd\u6570\u521b\u5efa WebSocket \u5b9e\u4f8b\u5bf9\u8c61\u65f6 URL \u7684\u7edd\u5bf9\u8def\u5f84\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"WebSocket \u5bf9\u8c61\u5728\u8fde\u63a5\u751f\u547d\u5468\u671f\u4e2d\u6709\u53ef\u80fd\u89e6\u53d1 3 \u4e2a\u5176\u4ed6\u4e8b\u4ef6\u548c 1 \u4e2a\u901a\u8baf\u4e8b\u4ef6\u3002"}),"\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"open"}),": \u5728\u8fde\u63a5\u6210\u529f\u5efa\u7acb\u65f6\u89e6\u53d1\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"error"}),": \u5728\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1\u3002\u8fde\u63a5\u65e0\u6cd5\u5b58\u7eed\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"close"}),": \u5728\u8fde\u63a5\u5173\u95ed\u65f6\u89e6\u53d1\u3002"]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.code,{children:"message"}),": \u4f1a\u5728 WebSocket \u63a5\u6536\u5230\u65b0\u6d88\u606f\u65f6\u88ab\u89e6\u53d1\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let socket = new WebSocket('ws://127.0.0.1');\n\nsocket.addEventListener('open', () => console.log('\u8fde\u63a5\u5efa\u7acb'));\nsocket.addEventListener('error', () => console.log('\u8fde\u63a5\u9519\u8bef'));\nsocket.addEventListener('close', () => console.log('\u8fde\u63a5\u5173\u95ed'));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd9\u4e9b\u4e8b\u4ef6\u4e2d\uff0c\u53ea\u6709 ",(0,t.jsx)(n.code,{children:"close"})," \u4e8b\u4ef6\u7684 event \u5bf9\u8c61\u4e0a\u6709\u989d\u5916\u4fe1\u606f\u3002\u8fd9\u4e2a\u5bf9\u8c61\u4e0a\u6709 3 \u4e2a\u989d\u5916\u5c5e\u6027\uff1a",(0,t.jsx)(n.code,{children:"wasClean"}),"\u3001",(0,t.jsx)(n.code,{children:"code"})," \u548c ",(0,t.jsx)(n.code,{children:"reason"}),"\u3002\u5176\u4e2d\uff0c",(0,t.jsx)(n.code,{children:"wasClean"})," \u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8fde\u63a5\u662f\u5426\u5e72\u51c0\u5730\u5173\u95ed\uff1b",(0,t.jsx)(n.code,{children:"code"})," \u662f\u4e00\u4e2a\u6765\u81ea\u670d\u52a1\u5668\u7684\u6570\u503c\u72b6\u6001\u7801\uff1b",(0,t.jsx)(n.code,{children:"reason"})," \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5305\u542b\u670d\u52a1\u5668\u53d1\u6765\u7684\u6d88\u606f\u3002\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u4fe1\u606f\u663e\u793a\u7ed9\u7528\u6237\u6216\u8bb0\u5f55\u5230\u65e5\u5fd7\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"socket.onclose = function (event) {\n  console.log(\n    `as clean? ${event.wasClean} Code=${event.code} Reason=${event.reason}`,\n  );\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const c={},o=t.createContext(c);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);