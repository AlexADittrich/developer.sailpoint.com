"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[3157],{46671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(785893),c=n(511151),r=n(841282),i=n(476828);const s={id:"account-usages",title:"Account Usages",description:"Account Usages",custom_edit_url:null},o=void 0,l={id:"api/beta/account-usages",title:"Account Usages",description:"Account Usages",source:"@site/docs/api/beta/account-usages.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/account-usages",permalink:"/docs/api/beta/account-usages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-usages",title:"Account Usages",description:"Account Usages",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"In-progress Account Aggregation status",permalink:"/docs/api/beta/get-account-aggregation-status"},next:{title:"Returns account usage insights",permalink:"/docs/api/beta/get-usages-by-account-id"}},u={},d=[];function m(e){const t={p:"p",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Use this API to implement account usage insight functionality.\nWith this functionality in place, administrators can gather information and insights about how their tenants' source accounts are being used.\nThis allows organizations to get the information they need to start optimizing and securing source account usage."}),"\n","\n",(0,a.jsx)(r.Z,{items:(0,i.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(667294),c=n(490512),r=n(476828),i=n(370393),s=n(585597),o=n(935096),l=n(633084),u=n(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=n(799603),p=n(921702);function g({href:e,children:t}){return a.createElement(i.Z,{href:e,className:(0,c.Z)("card padding--lg",d.cardContainer)},t)}function f({href:e,icon:t,title:n,description:r}){return a.createElement(g,{href:e},a.createElement(u.default,{as:"h2",className:(0,c.Z)("text--truncate",d.cardTitle),title:n},t," ",n),r&&a.createElement("p",{className:(0,c.Z)("text--truncate",d.cardDescription),title:r},r))}function h({item:e}){var t;const n=(0,r.LM)(e),c=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?a.createElement(f,{href:n,icon:a.createElement(m.G,{icon:p.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:c(e.items.length)}):null}function b({item:e}){var t,n;const c=(0,o.Z)(e.href)?a.createElement(m.G,{icon:p.FL8,className:d.docCardIcon}):a.createElement(m.G,{icon:p.wlW,className:d.docCardIcon}),i=(0,r.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(f,{href:e.href,icon:c,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==i?void 0:i.description)&&"<span"!=(null==i?void 0:i.description))?null==i?void 0:i.description:e.label})}function y({item:e}){switch(e.type){case"link":return a.createElement(b,{item:e});case"category":return a.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))w.call(t,n)&&N(e,n,t[n]);if(E)for(var n of E(t))_.call(t,n)&&N(e,n,t[n]);return e};function j({className:e}){const t=(0,r.jA)();return a.createElement(x,{items:t.items,className:e})}function x(e){const{items:t,className:n}=e;if(!t)return a.createElement(j,C({},e));const i=(0,r.MN)(t);return a.createElement("section",{className:(0,c.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(y,{item:e})))))}}}]);