"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[75790],{297818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(785893),s=n(511151);const o={id:"account-create",title:"Account Create",pagination_label:"Account Create",sidebar_label:"Account Create",keywords:["connectivity","connectors","account create"],description:"Create account on the source.",slug:"/connectivity/saas-connectivity/commands/account-create",tags:["Connectivity","Connector Command"]},i=void 0,r={id:"connectivity/saas-connectivity/connector-commands/account-create",title:"Account Create",description:"Create account on the source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/account-create.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/account-create",permalink:"/docs/connectivity/saas-connectivity/commands/account-create",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/account-create.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,frontMatter:{id:"account-create",title:"Account Create",pagination_label:"Account Create",sidebar_label:"Account Create",keywords:["connectivity","connectors","account create"],description:"Create account on the source.",slug:"/connectivity/saas-connectivity/commands/account-create",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Connector Commands",permalink:"/docs/connectivity/saas-connectivity/connector-commands"},next:{title:"Account Delete",permalink:"/docs/connectivity/saas-connectivity/commands/account-delete"}},c={},d=[{value:"Example StdAccountCreateInput",id:"example-stdaccountcreateinput",level:3},{value:"Example StdAccountCreateOutput",id:"example-stdaccountcreateoutput",level:3},{value:"Description",id:"description",level:2},{value:"The Provisioning Plan",id:"the-provisioning-plan",level:2},{value:"The return object",id:"the-return-object",level:2},{value:"Password Handling",id:"password-handling",level:2},{value:"Testing in Identity Security Cloud",id:"testing-in-identity-security-cloud",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountCreateInput"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountCreateOutput"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"example-stdaccountcreateinput",children:"Example StdAccountCreateInput"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'{\n    "attributes": {\n        "id": "john.doe",\n        "email": "example@gmail.com",\n        "department": "external",\n        "displayName": "John Doe",\n        "password": "test",\n        "entitlements": [\n            "user",\n            "administrator"\n        ]\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"example-stdaccountcreateoutput",children:"Example StdAccountCreateOutput"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"The account create command triggers whenever ISC is told to provision entitlements for an identity on the target source, but no account for the identity on the target source exists yet. For example, if you create an access profile that grants a group on the target source and then add that access profile to a role, any identity matching that role\u2019s membership criteria will be granted to the group. ISC determines which identities do not have accounts on the target source and triggers the account create command for each identity. If an identity already has an account, then it invokes the account update command."}),"\n",(0,a.jsxs)(t.p,{children:["To use this command, you must specify this value in the ",(0,a.jsx)(t.code,{children:"commands"})," array: ",(0,a.jsx)(t.code,{children:"std:account:create"})]}),"\n",(0,a.jsx)(t.h2,{id:"the-provisioning-plan",children:"The Provisioning Plan"}),"\n",(0,a.jsx)(t.p,{children:"The account create command accepts a provisioning plan from ISC and creates the corresponding account(s) in the target source. When you configure your source in ISC, you must set up \u2018Create Profile\u2019 to tell ISC how to provision new accounts for your source."}),"\n",(0,a.jsxs)(t.p,{children:["You can create the provisioning plan through the ",(0,a.jsx)(t.code,{children:"accountCreateTemplate"})," in the ",(0,a.jsx)(t.code,{children:"connector-spec.json"})," file, and you can also modify its behavior in ISC using the create profile screen:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Account Create",src:n(280851).Z+"",width:"1096",height:"699"})}),"\n",(0,a.jsx)(t.p,{children:"\u2018Create Profile\u2019 provides the instructions for the provisioning plan and determines which attributes are sent to your connector code. For example, if all the account attributes in the preceding image are configured for a value, then the following JSON payload is sent to your connector:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "password": "secretPassword",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The provisioning plan does not include any disabled attributes. In the earlier image, ",(0,a.jsx)(t.code,{children:"password"})," is disabled, so the payload to your connector does not not include a field for ",(0,a.jsx)(t.code,{children:"password"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"The provisioning plan presents multi-valued entitlements in two different ways:"}),"\n",(0,a.jsx)(t.p,{children:"If a multi-valued entitlement, like groups, has only one value, then the provisioning plan represents it as a string value:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "email": "example@sailpoint.com",\n        "entitlements": "user"\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"If a multi-valued entitlement has more than one value, then the plan represents it as an array:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Your connector code must handle the possibility of both cases. The following code example from ",(0,a.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/models/AirtableAccount.ts",children:"AirtableAccount.ts"})," shows how to handle a multi-valued attribute:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"public static createWithStdAccountCreateInput(record: StdAccountCreateInput): AirtableAccount {\n    const account = new AirtableAccount();\n    ...\n    if (record.attributes['entitlements'] != null) {\n        if (!Array.isArray(record.attributes['entitlements'])) {\n            account.entitlments = [record.attributes['entitlements']]\n        } else {\n            account.entitlments = record.attributes['entitlements']\n        }\n    } else {\n        account.entitlments = []\n    }\n\n    return account;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"the-return-object",children:"The return object"}),"\n",(0,a.jsx)(t.p,{children:"When the account is returned to ISC, any values you set are updated in ISC. So if an account ID is auto-generated on the source system, you must send the account ID back to ISC so ISC is aware of it for future account update activities. This is useful for the compound key type."}),"\n",(0,a.jsx)(t.h2,{id:"password-handling",children:"Password Handling"}),"\n",(0,a.jsx)(t.p,{children:"There are three main ways to handle passwords on a source:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"SSO, LDAP, or other federated authentication mechanisms are the preferred means of providing user login on a target source. If your source can integrate with a federated login service, use that service. If your source requires you to provide a password when you create accounts, even with a federated login, it is best to create a strong, random password. Your users will use the federated login, so they never need to know this password."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If your source has a password reset feature at login, it is best to initially create the account with a strong, random password the user does not have access to. Once the account is created, make the user request a password reset to set their own password. This method is the safest alternative to federated authentication because the initial password is strong and never known to anyone, and the user can generate his or her own password through secure channels."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The least secure method is setting a static password in the create profile that is well known among your users. This approach is not recommended. It does not require any automated communications with your users."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are two ways you can generate random passwords:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Use the \u201cCreate Password\u201d generator in \u2018Create Profile.\u2019 (This can also be configured in the ",(0,a.jsx)(t.code,{children:"accountCreateTemplate"}),")"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create Password",src:n(642871).Z+"",width:"1057",height:"762"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Disable the 'password' field."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Use \u2018Create Profile\u2019 and generate a random password in code. There are some JavaScript libraries that can generate random strings suitable for passwords, like ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/random-string",children:"random-string"})," and ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/crypto-random-string",children:"crypto-random-string"}),". Import either one of these libraries into your code to use them. The following example from ",(0,a.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts",children:"airtable.ts"})," uses a ternary operator to ensure the password is always provided. If the provisioning plan provides a password, use that value. If the provisioning plan does not provide a password, generate a random one."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'async createAccount(input: StdAccountCreateInput): Promise<AirtableAccount> {\n    const account = AirtableAccount.createWithStdAccountCreateInput(input);\n\n    return this.airTableBase(\'Users\').create({\n        "displayName": account.displayName,\n        "email": account.email,\n        "id": account.id,\n        "enabled": account.enabled ? \'true\' : \'false\',\n        "department": account.department,\n        "firstName": account.firstName,\n        "lastName": account.lastName,\n        "locked": account.locked ? \'true\' : \'false\',\n        "password": account.password ? account.password : crypto.randomBytes(20).toString(\'hex\'),\n        "entitlements": account.entitlments.join(\',\')\n    }).then(record => {\n        const airtableRecord = AirtableAccount.createWithRecords(record)\n        return airtableRecord\n    }).catch(err => {\n        throw new ConnectorError(\'error while getting accounts: \' + err)\n    })\n\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"testing-in-identity-security-cloud",children:"Testing in Identity Security Cloud"}),"\n",(0,a.jsx)(t.p,{children:"One way to test whether the account create code works in ISC is to set up an access profile and role that grants members an entitlement from the connector\u2019s target source. Start by creating an access profile that grants one or more entitlements from the target source."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Testing 1",src:n(517191).Z+"",width:"2560",height:"1309"})}),"\n",(0,a.jsx)(t.p,{children:"Next, create a role that uses the access profile created in the previous step."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Testing 2",src:n(44450).Z+"",width:"2559",height:"698"})}),"\n",(0,a.jsx)(t.p,{children:"Modify the role membership to use \u2018Identity List\u2019 and select one or more users that do not have accounts in the target source yet."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Testing 3",src:n(647002).Z+"",width:"2559",height:"866"})}),"\n",(0,a.jsx)(t.p,{children:"Click the \u2018Update\u2019 button in the upper right corner to initiate the account provisioning process. Doing so creates the account(s) on the target source once the process is complete."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},280851:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account_create_idn-3c594f9e3939be612ad0ea1bf2b40e23.png"},642871:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_password_idn-b0b313e36cdafc4e5b699bc9e1f659a6.png"},517191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/testing1-40dfe466d829b49e36e6c32fedae2606.png"},44450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/testing2-2fd94939238c1ef9e9d4ed34d9ac86eb.png"},647002:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/testing3-0a5523aa67a5f6fb98aacc63e5dc96c1.png"}}]);