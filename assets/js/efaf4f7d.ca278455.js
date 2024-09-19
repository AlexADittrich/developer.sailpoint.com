"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60100],{851928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=t(785893),o=t(511151);const c={id:"cli-advanced",title:"CLI - Advanced",pagination_label:"CLI - Advanced",sidebar_label:"CLI - Advanced",sidebar_position:1,sidebar_class_name:"cliAdvanced",keywords:["connectivity","connectors","cli"],description:"Using the CLI to properly test and debug your connector in Identity Security Cloud",slug:"/connectivity/saas-connectivity/in-depth/cli-advanced",tags:["Connectivity"]},a=void 0,s={id:"connectivity/saas-connectivity/in-depth/cli-advanced",title:"CLI - Advanced",description:"Using the CLI to properly test and debug your connector in Identity Security Cloud",source:"@site/docs/connectivity/saas-connectivity/in-depth/cli-advanced.md",sourceDirName:"connectivity/saas-connectivity/in-depth",slug:"/connectivity/saas-connectivity/in-depth/cli-advanced",permalink:"/docs/connectivity/saas-connectivity/in-depth/cli-advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/cli-advanced.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:1,frontMatter:{id:"cli-advanced",title:"CLI - Advanced",pagination_label:"CLI - Advanced",sidebar_label:"CLI - Advanced",sidebar_position:1,sidebar_class_name:"cliAdvanced",keywords:["connectivity","connectors","cli"],description:"Using the CLI to properly test and debug your connector in Identity Security Cloud",slug:"/connectivity/saas-connectivity/in-depth/cli-advanced",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"API Calls",permalink:"/docs/connectivity/saas-connectivity/in-depth/api-calls"},next:{title:"Connector Timeouts",permalink:"/docs/connectivity/saas-connectivity/in-depth/connector-timeouts"}},d={},l=[{value:"Use provided CLI invoke calls",id:"use-provided-cli-invoke-calls",level:2},{value:"Use sail conn invoke raw",id:"use-sail-conn-invoke-raw",level:2}];function r(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"You can use the CLI to invoke a number of calls in Identity Security Cloud, including calls that aren't specifically defined by the CLI. This section includes examples that show how you can invoke those calls:"}),"\n",(0,i.jsx)(n.h2,{id:"use-provided-cli-invoke-calls",children:"Use provided CLI invoke calls"}),"\n",(0,i.jsxs)(n.p,{children:["To find commands supported by the CLI, you can use the ",(0,i.jsx)(n.code,{children:"sail conn invoke -h"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Available Commands:\n  account-create          Invoke a std:account:create command\n  account-delete          Invoke a std:account:delete command\n  account-discover-schema Invoke a std:account:discover-schema command\n  account-list            Invoke a std:account:list command\n  account-read            Invoke a std:account:read command\n  account-update          Invoke a std:account:update command\n  change-password         Invoke a change-password command\n  entitlement-list        Invoke a std:entitlement:list command\n  entitlement-read        Invoke a std:entitlement:read command\n  raw                     Invoke a raw command\n  source-data-discover    Invoke a std:source-data:discover command\n  source-data-read        Invoke a std:source-data:read command\n  test-connection         Invoke a std:test-connection command\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To understand the required parameters to invoke a command from the CLI, you can use the help command to get a list of required parameters. For example, to read an account using the CLI, first call ",(0,i.jsx)(n.code,{children:"sail conn invoke account-read -h"}),". The CLI will respond with the required input:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'Usage:\n  sail connectors invoke account-read [id/lookupId] [uniqueId] [flags]\n\nFlags:\n  -h, --help            help for account-read\n      --schema string   Optional - Custom account schema\n\nGlobal Flags:\n      --config-json string     Config JSON to use for commands\n  -p, --config-path string     Path to config to use for commands\n  -e, --conn-endpoint string   Override connectors endpoint (default "/beta/platform-connectors")\n      --debug                  Enable debug logging\n      --env string             Environment to use for SailPoint CLI commands\n  -c, --id string              Connector ID or Alias\n  -v, --version string         Optional. Run against a specific version if provided. Otherwise run against the latest tag.\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this case, you need to provide the connector ID, the config path that contains the necessary configuration for the connector, and the ID for the account."}),"\n",(0,i.jsx)(n.p,{children:"The config file will look something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "apiKey": "<API_KEY>",\n  "airtableBase": "<BASE_ID>"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command to invoke account-read will look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail conn invoke account-read philip.ellis -c 4b12cf79-b2ac-44ac-842b-b5a6268548f5 -p config.json\n"})}),"\n",(0,i.jsx)(n.h2,{id:"use-sail-conn-invoke-raw",children:"Use sail conn invoke raw"}),"\n",(0,i.jsxs)(n.p,{children:["Even if a command isn't supported by the CLI, you can still invoke it. The ",(0,i.jsx)(n.code,{children:"invoke raw"})," command allows you to specify the entire JSON object used to invoke the command."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the Postman collection as a way to build the JSON object needed to invoke the command. For example, if you want to run the ",(0,i.jsx)(n.code,{children:"account-disable"})," command, you can create a JSON object with the required fields. If you look at this example, you will see that it closely resembles the same information that is sent when debugging the command using Postman:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "type": "std:account:disable",\n    "input": {\n        "key": {"simple": { "id": "philip.ellis"}}\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Running the ",(0,i.jsx)(n.code,{children:"raw"})," command is similar to running the other commands, except now you pass the JSON file created earlier with the ",(0,i.jsx)(n.code,{children:"-f"})," flag:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sail conn invoke raw -c 4b12cf79-b2ac-44ac-842b-b5a6268548f5 -f account-disable.json -p config.json\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}}}]);