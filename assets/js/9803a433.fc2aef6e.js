"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[6344],{101611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var s=t(785893),a=t(511151);const c={id:"change-password-customizer",title:"Change Password",pagination_label:"Change Password",sidebar_label:"Change Password",keywords:["connectivity","connectors","Change Password"],description:"Intercept the change password command.",slug:"/connectivity/saas-connectivity/customizers/commands/change-password",tags:["Connectivity","Connector Command"]},o=void 0,i={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/change-password-customizer",title:"Change Password",description:"Intercept the change password command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/change-password.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/change-password",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/change-password",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/change-password.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,frontMatter:{id:"change-password-customizer",title:"Change Password",pagination_label:"Change Password",sidebar_label:"Change Password",keywords:["connectivity","connectors","Change Password"],description:"Intercept the change password command.",slug:"/connectivity/saas-connectivity/customizers/commands/change-password",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Update",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-update"},next:{title:"Entitlement List",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-list"}},d={},r=[{value:"Overview",id:"overview",level:2},{value:"Example StdChangePasswordInput",id:"example-stdchangepasswordinput",level:3},{value:"Example StdChangePasswordOutput",id:"example-stdchangepasswordoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before change-password command",id:"before-change-password-command",level:3},{value:"After change-password command",id:"after-change-password-command",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Use these commands to intercept the ",(0,s.jsx)(n.a,{href:"../../commands/change-password",children:"change-password"})," command."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Input"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"StdChangePasswordInput"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Output"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"StdChangePasswordOutput"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example-stdchangepasswordinput",children:"Example StdChangePasswordInput"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n},\n"password": "newPassword"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"example-stdchangepasswordoutput",children:"Example StdChangePasswordOutput"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"{\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.h3,{id:"before-change-password-command",children:"Before change-password command"}),"\n",(0,s.jsx)(n.p,{children:"Use this logic to implement the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"    .beforeStdChangePassword(async (context: Context, input: StdChangePasswordInput) => {\n        logger.info(`Running before change password for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,s.jsx)(n.h3,{id:"after-change-password-command",children:"After change-password command"}),"\n",(0,s.jsx)(n.p,{children:"Use this logic to implement the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"    .afterStdChangePassword(async (context: Context, output: StdChangePasswordOutput) => {\n        logger.info(`Running after change password`)\n        return output\n    })\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);