"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8327],{448555:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=c(785893),a=c(511151),i=c(841282),r=c(476828);const o={id:"iai-common-access",title:"IAI Common Access",description:"IAI Common Access",custom_edit_url:null},s=void 0,l={id:"api/beta/iai-common-access",title:"IAI Common Access",description:"IAI Common Access",source:"@site/docs/api/beta/iai-common-access.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/iai-common-access",permalink:"/docs/api/beta/iai-common-access",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"iai-common-access",title:"IAI Common Access",description:"IAI Common Access",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Notification of Viewed Access Request Recommendations in Bulk",permalink:"/docs/api/beta/add-access-request-recommendations-viewed-items"},next:{title:"Get a paginated list of common access",permalink:"/docs/api/beta/get-common-access"}},m={},d=[];function u(e){return(0,n.jsx)(i.Z,{items:(0,r.jA)().items})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},841282:(e,t,c)=>{c.d(t,{Z:()=>_});var n=c(667294),a=c(490512),i=c(476828),r=c(370393),o=c(585597),s=c(935096),l=c(633084),m=c(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=c(799603),p=c(921702);function f({href:e,children:t}){return n.createElement(r.Z,{href:e,className:(0,a.Z)("card padding--lg",d.cardContainer)},t)}function b({href:e,icon:t,title:c,description:i}){return n.createElement(f,{href:e},n.createElement(m.default,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:c},t," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:i},i))}function h({item:e}){var t;const c=(0,i.LM)(e),a=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return c?n.createElement(b,{href:c,icon:n.createElement(u.G,{icon:p.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function g({item:e}){var t,c;const a=(0,s.Z)(e.href)?n.createElement(u.G,{icon:p.FL8,className:d.docCardIcon}):n.createElement(u.G,{icon:p.wlW,className:d.docCardIcon}),r=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(b,{href:e.href,icon:a,title:e.label,description:(null!=(c=e.description)?c:"<Heading"!=(null==r?void 0:r.description)&&"<span"!=(null==r?void 0:r.description))?null==r?void 0:r.description:e.label})}function I({item:e}){switch(e.type){case"link":return n.createElement(g,{item:e});case"category":return n.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,C=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,w=(e,t,c)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,A=(e,t)=>{for(var c in t||(t={}))E.call(t,c)&&w(e,c,t[c]);if(C)for(var c of C(t))y.call(t,c)&&w(e,c,t[c]);return e};function N({className:e}){const t=(0,i.jA)();return n.createElement(_,{items:t.items,className:e})}function _(e){const{items:t,className:c}=e;if(!t)return n.createElement(N,A({},e));const r=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",c)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(I,{item:e})))))}}}]);