"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[90364],{180797:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var s=i(785893),r=i(511151);const n={id:"event-triggers",title:"Event Triggers",pagination_label:"Event Triggers",sidebar_label:"Event Triggers",sidebar_position:3,sidebar_class_name:"eventTriggers",keywords:["event","triggers","webhooks"],description:"Actions triggered by specific events.",slug:"/extensibility/event-triggers",tags:["Event Triggers"]},o=void 0,a={id:"extensibility/event-triggers/event-triggers",title:"Event Triggers",description:"Actions triggered by specific events.",source:"@site/docs/extensibility/event-triggers/index.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers",permalink:"/docs/extensibility/event-triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/index.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:3,frontMatter:{id:"event-triggers",title:"Event Triggers",pagination_label:"Event Triggers",sidebar_label:"Event Triggers",sidebar_position:3,sidebar_class_name:"eventTriggers",keywords:["event","triggers","webhooks"],description:"Actions triggered by specific events.",slug:"/extensibility/event-triggers",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Java Docs",permalink:"/docs/extensibility/rules/java-docs"},next:{title:"Trigger Types",permalink:"/docs/extensibility/event-triggers/trigger-types"}},g={},l=[{value:"What Are Triggers",id:"what-are-triggers",level:2},{value:"How Are Triggers Different from APIs",id:"how-are-triggers-different-from-apis",level:2},{value:"When to Use Triggers",id:"when-to-use-triggers",level:2},{value:"How to Get Started With Event Triggers",id:"how-to-get-started-with-event-triggers",level:2}];function c(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"what-are-triggers",children:"What Are Triggers"}),"\n",(0,s.jsxs)(t.p,{children:["The result of any action performed in a service is called an ",(0,s.jsx)(t.strong,{children:"event"}),". Services like Identity Security Cloud constantly generate events like an update to a setting or the completion of an account aggregation. Most events a service generates are of little value to clients, so services create event triggers, also known as web hooks, that allow clients to subscribe to specific events they are interested in. Similar to news letters or RSS feeds, each subscription tells the service what event a client is interested in and where to send the client the notification."]}),"\n",(0,s.jsx)(t.h2,{id:"how-are-triggers-different-from-apis",children:"How Are Triggers Different from APIs"}),"\n",(0,s.jsx)(t.p,{children:"The biggest difference between event triggers and APIs is how data is accessed. Requesting data with an API is an active process, but receiving data from an event trigger is a passive process. Clients who want to get the latest data with an API must initiate the request. Clients who subscribe to an event trigger do not need to initiate a request. They are notified when the event occurs. This is similar to keeping up with the latest world news on the internet. You can initiate the request for data by opening a news website in your browser, or you can subscribe to a mail list to receive the latest news as it happens."}),"\n",(0,s.jsx)(t.h2,{id:"when-to-use-triggers",children:"When to Use Triggers"}),"\n",(0,s.jsx)(t.p,{children:"It is best to use event triggers when you need to react to an event in real-time. Although you can set up a polling mechanism using APIs, polling uses more bandwidth and resources, and if you poll too quickly, you can reach an API's rate limits. Event triggers use less bandwidth, they do not affect your API rate limit, and they are as close as you can get to real-time. However, event triggers have downsides to consider. They must be accessible from the public internet so the trigger service knows where to send the notification, and they can be harder to configure and operate than APIs are."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-get-started-with-event-triggers",children:"How to Get Started With Event Triggers"}),"\n",(0,s.jsxs)(t.p,{children:["Event triggers require different setup and testing steps than APIs do, so you should follow each document to better understand event triggers and the necessary steps to configure one. If this is your first time using event triggers, then you should use the ",(0,s.jsx)(t.a,{href:"/docs/extensibility/event-triggers/preparing-subscriber-service#webhook-testing-service",children:"webhook testing service"})," as you follow along."]}),"\n",(0,s.jsx)("div",{class:"text--center",children:(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/brhOnLNEN8o?si=_4IfDOFRQIaHHqMG",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);