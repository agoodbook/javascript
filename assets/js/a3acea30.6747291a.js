"use strict";(self.webpackChunkjavascript_docs=self.webpackChunkjavascript_docs||[]).push([[4390],{58713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(85893),a=n(11151),o=n(85162),s=n(74866),c=n(9286);const l=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{title:"\u6dfb\u52a0\u989d\u5916\u5c5e\u6027",children:"const car = {\n  make: 'Toyota',\n  model: 'Corolla',\n};\n\nconst myCar = Object.create(car, {\n  year: {\n    value: 2020,\n    writable: true,\n    enumerable: true,\n  },\n});\n\nconsole.log(myCar.make); // \u8f93\u51fa\uff1a'Toyota'\nconsole.log(myCar.year); // \u8f93\u51fa\uff1a2020\n"}),(0,r.jsx)(c.Z,{title:"\u5efa\u7acb\u539f\u578b\u94fe\u7684\u7ee7\u627f\u5173\u7cfb",children:'// \u5b9a\u4e49\u4e00\u4e2a\u52a8\u7269\u5bf9\u8c61\u4f5c\u4e3a\u539f\u578b\nconst animal = {\n  type: "Animal",\n  sound() {\n    console.log("Animal makes a sound");\n  },\n};\n\n// \u4f7f\u7528 Object.create() \u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u5e76\u5c06 animal \u8bbe\u7f6e\u4e3a\u5b83\u7684\u539f\u578b\nconst dog = Object.create(animal);\ndog.type = "Dog"; // \u53ef\u4ee5\u8986\u76d6\u539f\u578b\u4e2d\u7684\u5c5e\u6027\n\ndog.bark = function () {\n  console.log("Woof Woof!");\n};\n\n// \u521b\u5efa\u53e6\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e5f\u7ee7\u627f\u81ea animal \u539f\u578b\nconst cat = Object.create(animal);\ncat.type = "Cat";\n\ncat.meow = function () {\n  console.log("Meow Meow!");\n};\n\n// \u6d4b\u8bd5\u7ee7\u627f\u5173\u7cfb\u548c\u65b9\u6cd5\u8c03\u7528\nconsole.log(dog.type); // \u8f93\u51fa: Dog\ndog.sound(); // \u8f93\u51fa: Animal makes a sound\ndog.bark(); // \u8f93\u51fa: Woof Woof!\n\nconsole.log(cat.type); // \u8f93\u51fa: Cat\ncat.sound(); // \u8f93\u51fa: Animal makes a sound\ncat.meow(); // \u8f93\u51fa: Meow Meow!'})]}),i={},u="Object",d={id:"api/basic-objects/object",title:"Object",description:"Object.create()",source:"@site/docs/api/basic-objects/object.mdx",sourceDirName:"api/basic-objects",slug:"/api/basic-objects/object",permalink:"/javascript-docs/api/basic-objects/object",draft:!1,unlisted:!1,editUrl:"https://github.com/nonfan/javascript-docs/tree/main/docs/api/basic-objects/object.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"\u5168\u5c40\u5bf9\u8c61",permalink:"/javascript-docs/api/global-object"}},b={},p=[{value:"Object.create()",id:"objectcreate",level:2}];function h(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"object",children:"Object"}),"\n",(0,r.jsx)(t.h2,{id:"objectcreate",children:"Object.create()"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Object.create()"})," \u9759\u6001\u65b9\u6cd5\u4ee5\u4e00\u4e2a\u73b0\u6709\u5bf9\u8c61\u4f5c\u4e3a\u539f\u578b\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.Z,{value:"\u8bed\u6cd5",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"Object.create(proto);\nObject.create(proto, propertiesObject);\n"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"proto"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u65b0\u521b\u5efa\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\u3002"}),"\n"]}),(0,r.jsx)("p",{className:"optional",children:(0,r.jsx)(t.code,{children:"propertiesObject"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u5982\u679c\u8be5\u53c2\u6570\u88ab\u6307\u5b9a\u4e14\u4e0d\u4e3a ",(0,r.jsx)(t.code,{children:"undefined"}),"\uff0c\u5219\u8be5\u4f20\u5165\u5bf9\u8c61\u53ef\u679a\u4e3e\u7684\u81ea\u6709\u5c5e\u6027\u5c06\u4e3a\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u6dfb\u52a0\u5177\u6709\u5bf9\u5e94\u5c5e\u6027\u540d\u79f0\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002\u8fd9\u4e9b\u5c5e\u6027\u5bf9\u5e94\u4e8e ",(0,r.jsx)(t.code,{children:"Object.defineProperties()"})," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"]}),"\n"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u8fd4\u56de\u503c"})}),(0,r.jsx)(t.p,{children:"\u6839\u636e\u6307\u5b9a\u7684\u539f\u578b\u5bf9\u8c61\u548c\u5c5e\u6027\u521b\u5efa\u7684\u65b0\u5bf9\u8c61\u3002"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u5f02\u5e38"})}),(0,r.jsxs)(t.p,{children:["\u5982\u679c ",(0,r.jsx)(t.code,{children:"proto"})," \u65e2\u4e0d\u662f null\uff0c\u4e5f\u4e0d\u662f Object\uff0c\u5219\u629b\u51fa TypeError\u3002"]}),(0,r.jsxs)(t.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"Object.create()"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5229\u7528\u539f\u578b\u94fe\u7684\u7279\u6027\u6765\u5b9e\u73b0\u5bf9\u8c61\u4e4b\u95f4\u7684\u7ee7\u627f\u5173\u7cfb\uff0c\u975e\u5e38\u6709\u7528\u4e8e\u9762\u5411\u5bf9\u8c61\u7684 JavaScript \u7f16\u7a0b\u3002"]})]}),(0,r.jsx)(o.Z,{value:"\u793a\u4f8b",children:(0,r.jsx)(l,{})})]})]})}function j(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),a=n(36905),o=n(12466),s=n(16550),c=n(20469),l=n(91980),i=n(67392),u=n(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=b(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,d]=h({queryString:n,groupId:a}),[j,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??j;return p({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=c[n].value;a!==r&&(i(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=j(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function k(e){const t=(0,m.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}}}]);