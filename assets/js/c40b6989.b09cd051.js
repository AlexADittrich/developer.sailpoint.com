"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[85741],{811455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(785893),o=r(511151),a=r(841282),c=r(476828);const i={id:"governance-groups",title:"Governance Groups",description:"Governance Groups",custom_edit_url:null},s=void 0,l={id:"api/v2024/governance-groups",title:"Governance Groups",description:"Governance Groups",source:"@site/docs/api/v2024/governance-groups.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/governance-groups",permalink:"/docs/api/v2024/governance-groups",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"governance-groups",title:"Governance Groups",description:"Governance Groups",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Update security network configuration.",permalink:"/docs/api/v2024/patch-auth-org-network-config"},next:{title:"List Governance Groups",permalink:"/docs/api/v2024/list-workgroups"}},u={},d=[];function p(e){const t={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Use this API to implement and customize Governance Group functionality. With this functionality in place, administrators can create Governance Groups and configure them for use throughout Identity Security Cloud."}),"\n",(0,n.jsx)(t.p,{children:"A governance group is a group of users that can make governance decisions about access. If your organization has the Access Request or Certifications service, you can configure governance groups to review access requests or certifications. A governance group can determine whether specific access is appropriate for a user."}),"\n",(0,n.jsxs)(t.p,{children:["Refer to ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html",children:"Creating and Managing Governance Groups"})," for more information about how to build Governance Groups in the visual builder in the Identity Security Cloud UI."]}),"\n","\n",(0,n.jsx)(a.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(667294),o=r(490512),a=r(476828),c=r(370393),i=r(585597),s=r(935096),l=r(633084),u=r(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=r(799603),m=r(921702);function f({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",d.cardContainer)},t)}function g({href:e,icon:t,title:r,description:a}){return n.createElement(f,{href:e},n.createElement(u.default,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:r},t," ",r),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:a},a))}function v({item:e}){var t;const r=(0,a.LM)(e),o=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?n.createElement(g,{href:r,icon:n.createElement(p.G,{icon:m.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:o(e.items.length)}):null}function h({item:e}){var t,r;const o=(0,s.Z)(e.href)?n.createElement(p.G,{icon:m.FL8,className:d.docCardIcon}):n.createElement(p.G,{icon:m.wlW,className:d.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(g,{href:e.href,icon:o,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function y({item:e}){switch(e.type){case"link":return n.createElement(h,{item:e});case"category":return n.createElement(v,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var G=Object.defineProperty,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&C(e,r,t[r]);if(b)for(var r of b(t))E.call(t,r)&&C(e,r,t[r]);return e};function j({className:e}){const t=(0,a.jA)();return n.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(j,_({},e));const c=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}}}]);