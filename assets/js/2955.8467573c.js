"use strict";(self.webpackChunkagoodbook=self.webpackChunkagoodbook||[]).push([[2955],{2955:(e,t,l)=>{l.d(t,{diagram:()=>f});var o=l(9206),a=l(4218),n=l(5625),i=l(4863),s=l(905);l(7484),l(7967),l(7856),l(1644),l(6060);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,o,a){const n=Object.keys(e);i.l.info("keys:",n),i.l.info(e),n.filter((t=>e[t].parent==a)).forEach((function(l){var n,s;const r=e[l],c=r.cssClasses.join(" "),b=(0,i.k)(r.styles),p=r.label??r.id,f={labelStyle:b.labelStyle,shape:"class_box",labelText:d(p),classData:r,rx:0,ry:0,class:c,style:b.style,id:r.id,domId:r.domId,tooltip:o.db.getTooltip(r.id,a)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(n=(0,i.c)().flowchart)?void 0:n.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,f),a&&t.setParent(r.id,a),i.l.info("setNode",f)}))};function b(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const p={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,o){i.l.info("Drawing class - ",t);const p=(0,i.c)().flowchart??(0,i.c)().class,f=(0,i.c)().securityLevel;i.l.info("config:",p);const g=(null==p?void 0:p.nodeSpacing)??50,y=(null==p?void 0:p.rankSpacing)??50,u=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:o.db.getDirection(),nodesep:g,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=o.db.getNamespaces(),v=o.db.getClasses(),k=o.db.getRelations(),w=o.db.getNotes();let x;i.l.info(k),function(e,t,l,o){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.forEach((function(a){var n,s;const r=e[a],b={shape:"rect",id:r.id,domId:r.domId,labelText:d(r.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(n=(0,i.c)().flowchart)?void 0:n.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,b),c(r.classes,t,l,o,r.id),i.l.info("setNode",b)}))}(h,u,t,o),c(v,u,t,o),function(e,t){const l=(0,i.c)().flowchart;let o=0;e.forEach((function(e){var n;o++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${o}`,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:b(e.relation.type1),arrowTypeEnd:b(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.n)(null==l?void 0:l.curve,a.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(n=(0,i.c)().flowchart)?void 0:n.htmlLabels)??(0,i.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,o)}))}(k,u),function(e,t,l,o){i.l.info(e),e.forEach((function(e,n){var s,c;const b=e,p="",f="",g=b.text,y={labelStyle:p,shape:"note",labelText:d(g),noteData:b,rx:0,ry:0,class:"",style:f,id:b.id,domId:b.id,tooltip:"",type:"note",padding:(null==(s=(0,i.c)().flowchart)?void 0:s.padding)??(null==(c=(0,i.c)().class)?void 0:c.padding)};if(t.setNode(b.id,y),i.l.info("setNode",y),!b.class||!(b.class in o))return;const u=l+n,h={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.n)(r.curve,a.c_6)};t.setEdge(b.id,b.class,h,u)}))}(w,u,k.length+1,v),"sandbox"===f&&(x=(0,a.Ys)("#i"+t));const m="sandbox"===f?(0,a.Ys)(x.nodes()[0].contentDocument.body):(0,a.Ys)("body"),T=m.select(`[id="${t}"]`),S=m.select("#"+t+" g");if(await(0,s.r)(S,u,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(T,"classTitleText",(null==p?void 0:p.titleTopMargin)??5,o.db.getDiagramTitle()),(0,i.o)(u,T,null==p?void 0:p.diagramPadding,null==p?void 0:p.useMaxWidth),!(null==p?void 0:p.htmlLabels)){const e="sandbox"===f?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),o=e.createElementNS("http://www.w3.org/2000/svg","rect");o.setAttribute("rx",0),o.setAttribute("ry",0),o.setAttribute("width",l.width),o.setAttribute("height",l.height),t.insertBefore(o,t.firstChild)}}}},f={parser:o.p,db:o.d,renderer:p,styles:o.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);