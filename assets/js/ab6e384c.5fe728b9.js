"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[69975],{225451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(785893),i=n(511151);const c={id:"source-account-created",title:"Source Account Created",pagination_label:"Source Account Created",sidebar_label:"Source Account Created",sidebar_class_name:"sourceAccountCreated",keywords:["event","trigger","source","account","created","early access"],description:"Fires after a source account is created.",slug:"/extensibility/event-triggers/triggers/source-account-created",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},a=void 0,s={id:"extensibility/event-triggers/early-access/source-account-created",title:"Source Account Created",description:"Fires after a source account is created.",source:"@site/docs/extensibility/event-triggers/early-access/source-account-created.md",sourceDirName:"extensibility/event-triggers/early-access",slug:"/extensibility/event-triggers/triggers/source-account-created",permalink:"/docs/extensibility/event-triggers/triggers/source-account-created",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/early-access/source-account-created.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Early Access Event Triggers",permalink:"/docs/tags/early-access-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,frontMatter:{id:"source-account-created",title:"Source Account Created",pagination_label:"Source Account Created",sidebar_label:"Source Account Created",sidebar_class_name:"sourceAccountCreated",keywords:["event","trigger","source","account","created","early access"],description:"Fires after a source account is created.",slug:"/extensibility/event-triggers/triggers/source-account-created",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Identity Deleted",permalink:"/docs/extensibility/event-triggers/triggers/identity-deleted"},next:{title:"Source Account Deleted",permalink:"/docs/extensibility/event-triggers/triggers/source-account-deleted"}},o={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional information and links",id:"additional-information-and-links",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This is an early access event trigger. Please contact support to have it enabled in your tenant."})}),"\n",(0,r.jsx)(t.h2,{id:"event-context",children:"Event Context"}),"\n",(0,r.jsx)(t.p,{children:"Source Account Created events occur after a new account is detected during an account aggregration and refresh from a source. This trigger cannot determine whether account creation happened on a source or in Identity Security Cloud. It omits events related to Identity Security Cloud accounts, such as the Identity Security Cloud Admin."}),"\n",(0,r.jsx)(t.p,{children:"Use this event trigger to watch for new accounts with highly privileged access, such as an account created in Active Directory Domain Admins."}),"\n",(0,r.jsx)(t.p,{children:"This is an example input from this trigger:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "uuid": "b7264868-7201-415f-9118-b581d431c688",\n  "id": "ee769173319b41d19ccec35ba52f237b",\n  "nativeIdentifier": "E009",\n  "sourceId": "2c918082814e693601816e09471b29b6",\n  "sourceName": "Active Directory",\n  "identityId": "ee769173319b41d19ccec6c235423237b",\n  "identityName": "john.doe",\n  "attributes": {\n    "firstname": "John",\n    "lastname": "Doe",\n    "email": "john.doe@gmail.com",\n    "department": "Sales",\n    "displayName": "John Doe",\n    "created": "2020-04-27T16:48:33.597Z",\n    "employeeNumber": "E009",\n    "uid": "E009",\n    "inactive": "true",\n    "phone": null,\n    "identificationNumber": "E009"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"additional-information-and-links",children:"Additional information and links"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Trigger Type"}),": ",(0,r.jsx)(t.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);