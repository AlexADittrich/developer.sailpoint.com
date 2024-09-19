"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28367],{432579:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=t(785893),r=t(511151),n=t(871336);const s={id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/reporting/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},c="Secure Data Share Audit ER Diagram",o={id:"reporting/secure-data-share/secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",description:"Secure Data Share Audit ER Diagram",source:"@site/docs/reporting/secure-data-share/audit-er-diagram.md",sourceDirName:"reporting/secure-data-share",slug:"/reporting/sds-audit-er-diagram",permalink:"/docs/reporting/sds-audit-er-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/secure-data-share/audit-er-diagram.md",tags:[{inline:!0,label:"SecureDataShare",permalink:"/docs/tags/secure-data-share"},{inline:!0,label:"SDS",permalink:"/docs/tags/sds"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:2,frontMatter:{id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/reporting/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Secure Data Share ER Diagram",permalink:"/docs/reporting/sds-er-diagram"},next:{title:"Guides",permalink:"/docs/guides"}},d={},u=[];function l(e){const a={h1:"h1",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"secure-data-share-audit-er-diagram",children:"Secure Data Share Audit ER Diagram"}),"\n",(0,i.jsx)(n.Z,{diagram:'erDiagram\nAUDIT_EVENTS {\ntext TENANT_ID "Unique Id for an Organization tenant"\ntext ID PK "Unique Id of the event"\ntimestamp_ntz CREATED "Date When the event happened"\ntext ACTION "action taken related to the Audit Event"\ntext TYPE "type of Audit Event,Ex: Auth, SSO, ROLE, ACCESS_REQUEST, PROVISIONING, USER_MANAGEMENT, etc."\ntext ACTOR_NAME "Who/what performed the action, this can be an Identity or a Service name"\ntext TARGET_NAME "Who/what the action was performed on, this can be an Identity or a Service name"\ntext STACK "Which internal service was associated with the Audit Event"\ntext SOURCE_NAME "Name of the Source associated with the Audit Event"\ntext ACCOUNT_NAME "Name of Account associated with the Audit Event"\ntext INFO "Any additional info that might be available"\ntext SOURCE_ID "ID of the source associated with the Audit Event"\ntext OPERATION "Operation happened examples include EMAIL, FORWARD, UPDATE, REQUEST, etc."\ntext STATUS "What was the status of the Audit Event, examples include PASSED, FAILED, TERMINATED, etc."\ntimestamp_ntz SYNC_DATE "Date Audit Event Synced"\n}'})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},871336:(e,a,t)=>{t.d(a,{Z:()=>c});var i=t(667294),r=t(181581),n=t(725026);const s={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function c({children:e,diagram:a}){r.N.contentLoaded();const[t,c]=i.useState(0),[o,d]=i.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[u,l]=i.useState({x:0,y:0}),[m,h]=i.useState(!1);function g(e){e.screenX?(d({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:u.x,offsetY:u.y}),l({x:u.x,y:u.y})):(d({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:u.x,offsetY:u.y}),l({x:u.x,y:u.y}))}function p(e){d({cursor:"grab",clickX:0,clickY:0})}function S(e){"grabbing"===o.cursor&&(e.screenX?l({x:o.clickX-e.screenX+o.offsetX,y:o.clickY-e.screenY+o.offsetY}):l({x:o.clickX-e.changedTouches[0].screenX+o.offsetX,y:o.clickY-e.changedTouches[0].screenY+o.offsetY}))}let E,f;return i.useEffect((()=>{let e=!1;return setTimeout((()=>{e||h(!0)}),100),()=>{e=!0}})),!0===m?(f=i.createElement("div",null),E=i.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-u.y+"px",left:-u.x+"px",width:"calc(100% + "+t+"px)",maxHeight:"1000px"}},a)):(f=i.createElement("div",null,"Diagram Loading ..."),E=i.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-u.y+"px",left:-u.x+"px",width:"calc(100% + "+t+"px)",maxHeight:"1000px"}},a)),i.createElement("div",null,i.createElement("img",{className:s.zoomIn,onClick:e=>{c(t+300)},src:(0,n.default)("/icons/magnifying-glass-plus-regular.svg")}),i.createElement("img",{className:s.zoomIn,onClick:e=>function(e){c(0),d({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),l({x:0,y:0})}(e),src:(0,n.default)("/icons/house-regular.svg")}),i.createElement("img",{className:s.zoomIn,onClick:e=>{c(t-300)},src:(0,n.default)("/icons/magnifying-glass-minus-regular.svg")}),i.createElement("div",{style:{cursor:o.cursor},className:s.mermaidContainer,onMouseMove:e=>S(e),onTouchMove:e=>S(e),onMouseDown:e=>g(e),onTouchStart:e=>g(e),onMouseUp:e=>p(),onTouchEnd:e=>p(),onMouseLeave:e=>p()},f,E))}}}]);