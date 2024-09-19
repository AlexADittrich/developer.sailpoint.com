"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[29349],{196875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(785893),o=n(511151),a=n(841282),c=n(476828);const i={id:"governance-groups",title:"Governance Groups",description:"Governance Groups",custom_edit_url:null},s=void 0,l={id:"api/beta/governance-groups",title:"Governance Groups",description:"Governance Groups",source:"@site/docs/api/beta/governance-groups.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/governance-groups",permalink:"/docs/api/beta/governance-groups",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"governance-groups",title:"Governance Groups",description:"Governance Groups",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Aggregate Entitlements",permalink:"/docs/api/beta/import-entitlements-by-source"},next:{title:"List Governance Groups",permalink:"/docs/api/beta/list-workgroups"}},u={},d=[];function p(e){const t={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud."}),"\n",(0,r.jsx)(t.p,{children:"A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user."}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html",children:"Creating and Managing Governance Groups"})," for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI."]}),"\n","\n",(0,r.jsx)(a.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(667294),o=n(490512),a=n(476828),c=n(370393),i=n(585597),s=n(935096),l=n(633084),u=n(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=n(799603),m=n(921702);function g({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",d.cardContainer)},t)}function f({href:e,icon:t,title:n,description:a}){return r.createElement(g,{href:e},r.createElement(u.default,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:n},t," ",n),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:a},a))}function h({item:e}){var t;const n=(0,a.LM)(e),o=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(f,{href:n,icon:r.createElement(p.G,{icon:m.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:o(e.items.length)}):null}function v({item:e}){var t,n;const o=(0,s.Z)(e.href)?r.createElement(p.G,{icon:m.FL8,className:d.docCardIcon}):r.createElement(p.G,{icon:m.wlW,className:d.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(f,{href:e.href,icon:o,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function b({item:e}){switch(e.type){case"link":return r.createElement(v,{item:e});case"category":return r.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,G=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))E.call(t,n)&&C(e,n,t[n]);if(G)for(var n of G(t))w.call(t,n)&&C(e,n,t[n]);return e};function j({className:e}){const t=(0,a.jA)();return r.createElement(x,{items:t.items,className:e})}function x(e){const{items:t,className:n}=e;if(!t)return r.createElement(j,_({},e));const c=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}}}]);