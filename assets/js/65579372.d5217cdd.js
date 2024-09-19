"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[75787],{406464:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=i(785893),s=i(511151);const n={id:"trigger-types",title:"Trigger Types",pagination_label:"Trigger Types",sidebar_label:"Trigger Types",sidebar_position:1,sidebar_class_name:"triggerTypes",keywords:["event","trigger","types"],description:"These are the different trigger types you can use.",slug:"/extensibility/event-triggers/trigger-types",tags:["Event Triggers"]},a=void 0,o={id:"extensibility/event-triggers/trigger-types",title:"Trigger Types",description:"These are the different trigger types you can use.",source:"@site/docs/extensibility/event-triggers/trigger-types.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/trigger-types",permalink:"/docs/extensibility/event-triggers/trigger-types",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/trigger-types.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:1,frontMatter:{id:"trigger-types",title:"Trigger Types",pagination_label:"Trigger Types",sidebar_label:"Trigger Types",sidebar_position:1,sidebar_class_name:"triggerTypes",keywords:["event","trigger","types"],description:"These are the different trigger types you can use.",slug:"/extensibility/event-triggers/trigger-types",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Event Triggers",permalink:"/docs/extensibility/event-triggers"},next:{title:"Preparing a Subscriber Service",permalink:"/docs/extensibility/event-triggers/preparing-subscriber-service"}},g={},p=[{value:"Fire and Forget",id:"fire-and-forget",level:2},{value:"Response Required",id:"response-required",level:2}];function l(e){const t={admonition:"admonition",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"fire-and-forget",children:"Fire and Forget"}),"\n",(0,r.jsx)(t.p,{children:"A fire and forget trigger only supports one-way communication with subscribers. Its only job is to forward each event it receives to each subscribing service. This trigger type doesn't wait for a response from subscribers. It has no way of knowing whether subscribers actually receive the event, and it doesn't have any mechanism for resending events. Think of this trigger type as live television. You can only see what is happening in real-time. You cannot rewind the live feed or interact with the broadcast in any way. This trigger type is the simplest and most common trigger type among SailPoint's event triggers."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Fire and forget triggers can have a maximum of 50 subscribers per event."})}),"\n",(0,r.jsx)(t.h2,{id:"response-required",children:"Response Required"}),"\n",(0,r.jsx)(t.p,{children:"A response required trigger allows two-way communication between the trigger service and the subscriber. This trigger type expects a response from the subscriber with directions about how to proceed with the event. For example, the access request dynamic approval event trigger will send the subscriber details about the access request, and the subscriber may respond to the trigger with the identity ID to include in the approval process for an access request. This trigger type allows subscribers to not only receive events in real-time, but to act on them as well."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Response required triggers can only have one subscriber per event."})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);