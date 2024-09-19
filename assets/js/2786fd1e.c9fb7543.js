"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11435],{429965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=t(785893),i=t(511151);const l={id:"cli-set",title:"Set",pagination_label:"CLI-Set",sidebar_label:"Set",sidebar_position:4,sidebar_class_name:"cli",keywords:["cli","set"],description:"Learn how to configure your CLI settings in this guide.",slug:"/tools/cli/set",tags:["CLI"]},a=void 0,r={id:"tools/cli/cli-set",title:"Set",description:"Learn how to configure your CLI settings in this guide.",source:"@site/docs/tools/cli/set.md",sourceDirName:"tools/cli",slug:"/tools/cli/set",permalink:"/docs/tools/cli/set",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/set.md",tags:[{inline:!0,label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:4,frontMatter:{id:"cli-set",title:"Set",pagination_label:"CLI-Set",sidebar_label:"Set",sidebar_position:4,sidebar_class_name:"cli",keywords:["cli","set"],description:"Learn how to configure your CLI settings in this guide.",slug:"/tools/cli/set",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-Search",permalink:"/docs/tools/cli/search"},next:{title:"CLI-SPConfig",permalink:"/docs/tools/cli/spconfig"}},o={},c=[{value:"Set",id:"set",level:2},{value:"Auth",id:"auth",level:3},{value:"Debug",id:"debug",level:3},{value:"PAT",id:"pat",level:3},{value:"Search templates",id:"search-templates",level:3},{value:"File format",id:"file-format",level:4},{value:"Export templates",id:"export-templates",level:3},{value:"File format",id:"file-format-1",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"set",children:"Set"}),"\n",(0,s.jsx)(n.p,{children:"Learn how to configure your CLI settings in this guide."}),"\n",(0,s.jsx)(n.p,{children:"This includes setting your authentication mode, your debug mode, and the filepaths for the templates your CLI uses to make your search and export processes easier."}),"\n",(0,s.jsxs)(n.p,{children:["You can use these ",(0,s.jsx)(n.code,{children:"set"})," commands to configure your CLI settings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#set",children:"Set"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#auth",children:"Auth"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#debug",children:"Debug"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#pat",children:"PAT"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#search-templates",children:"Search templates"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#file-format",children:"File format"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#export-templates",children:"Export templates"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#file-format-1",children:"File format"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"auth",children:"Auth"}),"\n",(0,s.jsx)(n.p,{children:"To set the current authentication method for the CLI, run this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sail set auth {authentication type}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can currently set authentication to either ",(0,s.jsx)(n.code,{children:"pat"})," to use a personal access token (PAT), or ",(0,s.jsx)(n.code,{children:"oauth"})," to use OAuth2 authentication via browser authentication."]}),"\n",(0,s.jsx)(n.h3,{id:"debug",children:"Debug"}),"\n",(0,s.jsx)(n.p,{children:"To enable debug mode, run this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sail set debug enable\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To disable debug mode, run the same command with ",(0,s.jsx)(n.code,{children:"disable"})," instead."]}),"\n",(0,s.jsx)(n.h3,{id:"pat",children:"PAT"}),"\n",(0,s.jsx)(n.p,{children:"To configure PAT authentication for a given environment, run this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sail set pat\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then follow the prompts to provide your PAT client ID and client secret."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/sailpoint-oss/sailpoint-cli/blob/main/assets/img/vhs/configure/configure-pat.gif?raw=true",alt:"Configure PAT"})}),"\n",(0,s.jsx)(n.h3,{id:"search-templates",children:"Search templates"}),"\n",(0,s.jsx)(n.p,{children:"To set the filepath for the search templates your CLI uses, run this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'sail set searchTemplates "path/to/search/template/file"\n\nor\n\nsail set search "path/to/search/template/file"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"file-format",children:"File format"}),"\n",(0,s.jsx)(n.p,{children:"Here are a couple examples of the file format a search template uses:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "all-provisioning-events",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [{"name": "days", "prompt": "Days before today"}],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-{{days}}d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  },\n  {\n    "name": "all-provisioning-events-90-days",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-90d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  }\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"In the first example, the template uses variables in its query. The second example is a fully predefined template without variables."}),"\n",(0,s.jsx)(n.h3,{id:"export-templates",children:"Export templates"}),"\n",(0,s.jsx)(n.p,{children:"To set the filepath for the export templates your CLI uses, run this command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'sail set exportTemplates "path/to/export/template/file"\n\nor\n\nsail set export "path/to/export/template/file"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"file-format-1",children:"File format"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of the file format an export template uses:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "all-objects",\n    "description": "Export all available objects",\n    "variables": [],\n    "exportBody": {\n      "description": "Export all available objects",\n      "excludeTypes": [],\n      "includeTypes": [\n        "SOURCE",\n        "RULE",\n        "TRIGGER_SUBSCRIPTION",\n        "TRANSFORM",\n        "IDENTITY_PROFILE"\n      ],\n      "objectOptions": {}\n    }\n  }\n]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);