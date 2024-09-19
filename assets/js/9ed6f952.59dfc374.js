"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[42654],{287228:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=o(785893),n=o(511151);const s={id:"community-toolbox",title:"Community Toolbox",pagination_label:"ADMIN",sidebar_label:"Community Toolbox",sidebar_position:5,sidebar_class_name:"rudk",keywords:["UI","admin","console"],description:"The Admin's toolbox.",slug:"/tools/community-toolbox",tags:["UI"]},r=void 0,a={id:"tools/community-toolbox/community-toolbox",title:"Community Toolbox",description:"The Admin's toolbox.",source:"@site/docs/tools/community-toolbox/index.md",sourceDirName:"tools/community-toolbox",slug:"/tools/community-toolbox",permalink:"/docs/tools/community-toolbox",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/community-toolbox/index.md",tags:[{inline:!0,label:"UI",permalink:"/docs/tags/ui"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:5,frontMatter:{id:"community-toolbox",title:"Community Toolbox",pagination_label:"ADMIN",sidebar_label:"Community Toolbox",sidebar_position:5,sidebar_class_name:"rudk",keywords:["UI","admin","console"],description:"The Admin's toolbox.",slug:"/tools/community-toolbox",tags:["UI"]},sidebar:"openApiSidebar",previous:{title:"UDK",permalink:"/docs/tools/ui-development-kit/error-handling"},next:{title:"Reporting",permalink:"/docs/reporting"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Log in to the Community Toolbox",id:"log-in-to-the-community-toolbox",level:2},{value:"Community Toolbox home page features",id:"community-toolbox-home-page-features",level:2},{value:"Community Toolbox side tab features",id:"community-toolbox-side-tab-features",level:2},{value:"Sources",id:"sources",level:3},{value:"Identities",id:"identities",level:3},{value:"Reports",id:"reports",level:3},{value:"Courier",id:"courier",level:3},{value:"Discuss",id:"discuss",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The Identity Security Cloud (ISC) Community Toolbox is a desktop application you can use to administer and troubleshoot ISC. The ISC Community Toolbox is built using Electron and Sveltekit, and it's developed and maintained by the SailPoint Developer Relations team."}),"\n",(0,i.jsx)(t.p,{children:"Use the Community Toolbox to perform common administrative tasks and troubleshoot issues in your ISC tenant."}),"\n",(0,i.jsx)(t.p,{children:"This document provides an overview of the Community Toolbox and its setup."}),"\n",(0,i.jsxs)(t.p,{children:["You can find all the project's code in the Community Toolbox's GitHub repository ",(0,i.jsx)(t.a,{href:"https://github.com/sailpoint-oss/isc-community-toolbox",children:"here"}),"."]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Set up Community Toolbox from release"}),(0,i.jsx)(t.p,{children:"The only requirement to use the Community Toolbox from a release is access to the ISC tenant you want to administer and troubleshoot."}),(0,i.jsxs)(t.p,{children:["The easiest way to set up the Community Toolbox is to download the latest release ",(0,i.jsx)(t.a,{href:"https://github.com/sailpoint-oss/isc-community-toolbox/releases",children:"here"}),"."]}),(0,i.jsx)(t.p,{children:"The Community Toolbox application will be named something like 'isc-community-toolbox-svelte-0.0.4-setup.exe' (0.0.4 refers to the release version)."}),(0,i.jsx)(t.p,{children:"You can then launch the Community Toolbox application."})]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Build the Community Toolbox from source"}),(0,i.jsx)(t.p,{children:"You may want to build the application from source, which allows you to get the latest changes directly from the repository, rather than wait for a new release."}),(0,i.jsx)(t.p,{children:"These are the requirements to build the Community Toolbox from source."}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You must have the ",(0,i.jsx)(t.a,{href:"https://docs.npmjs.com/about-npm",children:"Node.js package manager (npm)"})," installed. You can find instructions about how to install npm ",(0,i.jsx)(t.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["You must clone the ",(0,i.jsx)(t.a,{href:"https://github.com/sailpoint-oss/isc-community-toolbox",children:"Community Toolbox's GitHub repository"}),". You can find instructions about how to clone a GitHub repository ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",children:"here"}),"."]}),"\n"]}),(0,i.jsx)(t.p,{children:"Once you have ensured that you have npm installed and you have cloned the Community Toolbox's GitHub repository, you can build the Community Toolbox from source."}),(0,i.jsx)(t.p,{children:"Follow these steps to build the Community Toolbox from source:"}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Install npm."}),"\n"]}),(0,i.jsx)(t.p,{children:"To install npm, run this command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install\n"})}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Build the application."}),"\n"]}),(0,i.jsx)(t.p,{children:"There is a different command for each OS. You can find these commands in the 'package.json' file. Run these commands to build the application for your OS:"}),(0,i.jsx)(t.p,{children:"To build the application for Windows, run this command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run build:win\n"})}),(0,i.jsx)(t.p,{children:"To build the application for Mac, run this command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run build:mac\n"})}),(0,i.jsx)(t.p,{children:"To build the application for Linux, run this command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run build:linux\n"})}),(0,i.jsx)(t.p,{children:"Any one of these commands creates a 'dist' folder that contains the application."}),(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Run the application."}),"\n"]}),(0,i.jsx)(t.p,{children:"These are the two different ways to run the application:"}),(0,i.jsx)(t.p,{children:"The first way to run the application is to open the 'dist' folder in your file explorer and then open the Community Toolbox executable file. The file will be called something like 'isc-community-toolbox-svelte-0.0.4-setup.exe' (0.0.0.4 refers to the release version)."}),(0,i.jsx)(t.p,{children:"The second way to run the application is to run this command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})})]}),"\n",(0,i.jsx)(t.h2,{id:"log-in-to-the-community-toolbox",children:"Log in to the Community Toolbox"}),"\n",(0,i.jsx)(t.p,{children:"When you launch the Community Toolbox, it prompts you to provide your tenant information."}),"\n",(0,i.jsx)(t.p,{children:"You must provide this tenant information to be able to log in:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Tenant"}),": This is your organization's tenant name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Domain"}),": This is usually 'identitynow'."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Base URL"}),": This is the API URL - it is 'https://[tenant].[domain].com', like 'https",":acme",".identitynow.com', for example."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Tenant URL"}),": This is the tenant URL - it is often the same as the API URL."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Once you have provided your tenant information, the Community Toolbox prompts you to log in to your tenant the same way you would from the browser. You must provide a password and possibly some additional form of authentication."}),"\n",(0,i.jsx)(t.h2,{id:"community-toolbox-home-page-features",children:"Community Toolbox home page features"}),"\n",(0,i.jsx)(t.p,{children:"Once you log in, the Community Toolbox's home page displays. The home page has four panels with different links. You can access these different Community Toolbox functionalities from the home page panels:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status"}),': The Status panel shows you the platform\'s status, such as "All Systems Operational". Click the status to open ',(0,i.jsx)(t.a,{href:"https://status.sailpoint.com",children:"https://status.sailpoint.com"})," in an Community Toolbox window. You will see the latest status updates for the platform there."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Tenant Links"}),": Use these links for direct access to some areas of your tenant common for administrative functions. Click these links to open your ISC tenant UI within an Community Toolbox window. From the Community Toolbox window, you can also access the entirety of your tenant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resources"}),": Use these links to access common SailPoint resources, such as the ",(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community"})," and the different forms of SailPoint documentation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Support"}),": Use these links to access ",(0,i.jsx)(t.a,{href:"https://support.sailpoint.com/csm",children:"SailPoint Customer Support"})," and submit support tickets."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"community-toolbox-side-tab-features",children:"Community Toolbox side tab features"}),"\n",(0,i.jsx)(t.p,{children:"The Community Toolbox's side bar has five different tabs. The first tab, 'Home', displays the Community Toolbox's home page. The other four provide unique admin access within the Community Toolbox:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#sources",children:"Sources"}),": Use this tab to see your tenant's list of sources, with the raw JSON object for each source exposed. This tab makes it easier for administrators to find relevant information about sources, such as IDs, when they or others (Support, Services) troubleshoot your environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#identities",children:"Identities"}),": Use this tab to see your tenant's list of identities, with the raw JSON object for each identity exposed. This tab makes it easier for administrators to find relevant information about identities, such as IDs, when they or others (Support, Services) troubleshoot your environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#reports",children:"Reports"}),": Use this tab to find common queries, with the raw JSON object for each report exposed, that administrators may need to run to understand the health and current situation of your tenant. This tab makes it easier for administrators to run common queries to help them or others (Support, Services) troubleshoot your environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#courier",children:"Courier"}),": Use the Courier to send API requests from the Community Toolbox, without needing to manage authentication and authorization in a separate tool. You can copy the JSON objects from the other tabs into the courier to make quick and easy changes. The courier makes it easier for administrators to use the APIs to get additional information and make changes from within the Community Toolbox when they troubleshoot your environment."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"sources",children:"Sources"}),"\n",(0,i.jsx)(t.p,{children:"When you open the Sources tab, the Community Toolbox displays a list of your tenant's sources, along with their IDs, which don't display in the ISC UI. This is helpful because you need a source's ID to manage it with the API."}),"\n",(0,i.jsx)(t.p,{children:"Each source provides the options to either 'Open' or 'View it. If you 'Open' a source, the Community Toolbox displays a page with some additional useful information about the source, such as its Virtual Appliance (VA) Cluster and its most recent account and entitlement aggregations. At the end of the source's page, the Community Toolbox displays both the raw JSON for the source's connector attributes, which can be extensive and detailed, and the raw JSON for the full source. You can copy these JSONs and paste them in the Courier or an external tool to make changes with the API."}),"\n",(0,i.jsx)(t.p,{children:"If you 'View' a source, the Community Toolbox displays the raw JSON for the full source in a window within the list, without the additional information shown when you 'Open' the source. You can copy this JSON and paste it in the Courier or an external tool to make changes with the API."}),"\n",(0,i.jsx)(t.h3,{id:"identities",children:"Identities"}),"\n",(0,i.jsx)(t.p,{children:"When you open the Identities tab, the Community Toolbox displays a list of your tenant's identities, along with their IDs, which don't display in the ISC UI. This is helpful because you need an identity's ID to manage it with the API."}),"\n",(0,i.jsx)(t.p,{children:"Each identity provides the options to either 'Open' or 'View' it. If you 'Open' an identity, the Community Toolbox displays a page with some additional information about the identity, such as its current lifecycle state. The Community Toolbox also displays the identity's raw JSON, which you can copy and paste in the Courier or an external tool to make changes with the API. At the end of the identity's page, the Community Toolbox displays the identity's recent events, such as a changed identity state or an updated identity attribute value, along with their raw JSONs. These events can help administrators or others (Support, Services) troubleshoot the identity's issues or potential issues."}),"\n",(0,i.jsx)(t.p,{children:"If you 'View' an identity, the Community Toolbox displays the raw JSON for the identity in a window within the list, without the additional information shown when you 'Open' the identity. You can copy this JSON and paste it in the Courier or an external tool to make changes with the API."}),"\n",(0,i.jsx)(t.h3,{id:"reports",children:"Reports"}),"\n",(0,i.jsx)(t.p,{children:"When you open the Reports tab, the Community Toolbox displays a list of common queries administrators may need to run to understand your tenant's health and current situation. Each report contains a different summary, depending on the report."}),"\n",(0,i.jsx)(t.p,{children:"The Community Toolbox offers these five reports:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Source Account Create Error"}),": This report displays a list of all source accounts with associated account create errors, along with the raw JSONs for the errors. Click an error in the list to view its raw JSON. You can copy these JSONs and provide them to Support or Services so they can better help you troubleshoot."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Inactive Identities with Access"}),": This report displays a list of all identities that are inactive but still have access to sources, along with the sources they can access. You can either 'Open' an identity or 'View' it. If you 'Open' an identity, the Community Toolbox displays a page with some additional information about the identity, as well as the identity's raw JSON, and its recent identity events (and their raw JSONs). If you 'View' an identity, the Community Toolbox displays the raw JSON for the identity in a window within the list. You can copy either of these JSONs into the Courier or an external tool to make changes to the identity's access."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Missing Cloud Life Cycle State"}),": This report displays a list of all identities that are missing the cloud life cycle state attribute. You can either 'Open' an identity or 'View' it. If you 'Open' an identity, the Community Toolbox displays a page with some additional information about the identity, such as its current missing lifecycle state, as well as the identity's raw JSON, and its recent identity events (and their raw JSONs). If you 'View' an identity, the Community Toolbox displays the raw JSON for the identity in a window within the list. You can copy either of these JSONs into the Courier or an external tool to make changes to the identity's missing lifecycle state."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Source Owner Configured"}),": This report displays a list of all sources and their configured owners. Each source provides the options to either 'Open' or 'View it. If you 'Open' a source, the Community Toolbox displays a page with some additional useful information about the source, as well as a raw JSON for its connector attributes and a raw JSON for the full source itself. If you 'View' a source, the Community Toolbox displays the raw JSON for the full source in a window within the list. You can copy these JSONs and paste them in the Courier or an external tool to make changes with the API."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Source Aggregations"}),": This report displays all sources and their most recent account and entitlement aggregation events, along with their raw JSONs. You can view the JSONs of account and entitlement aggregations for both 'started' and 'passed' aggregation events. You can copy these JSONs and provide them to Support or Services so they can better help you troubleshoot."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"courier",children:"Courier"}),"\n",(0,i.jsx)(t.p,{children:"Use the Courier to send API requests from the Community Toolbox without needing to manage authentication and authorization in a separate tool. You can copy the JSON objects from the other tabs into the courier to make quick and easy changes. The courier makes it easier for administrators to use the APIs to get additional information and make changes from within the Community Toolbox when they or others (Support, Services) troubleshoot your environment."}),"\n",(0,i.jsx)(t.p,{children:"When you open the Courier tab, the Community Toolbox displays its Courier tool. The Courier tool comprises four parts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"API Details"}),": Use this dropdown menu to first select the type of API you want to call. You can either call V3 ISC APIs, the Beta ISC APIs, or Custom APIs. Once you have selected an API type, you can select the endpoint you want to call from a list, such as beta/access-profiles."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"API Call"}),": Use this dropdown menu to select the type of request you want to send to the endpoint, such as a GET, POST, PUT, PATCH, or DELETE. Then use the 'Call' button to send your request."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"API Request Body"}),": Use this section to specify your API request's body. You can copy a raw JSON into this area, or you can manually create an object or an array."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"API Response Body"}),": This section displays the API response to your request. You can copy this raw JSON and use it for additional troubleshooting."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,i.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about the ISC Community Toolbox and discuss it with SailPoint Developer Community members, go to the ",(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);