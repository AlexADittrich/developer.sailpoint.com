"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[34449],{187954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=t(785893),r=t(511151);const i={id:"python-sdk-create",title:"Creating resources with The Python SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"pythonsdk",keywords:["python","sdk","create"],description:"Learn how to use the Python SDK to create new resources.",slug:"/tools/sdk/python/create",tags:["SDK"]},s=void 0,a={id:"tools/sdk/python/python-sdk-create",title:"Creating resources with The Python SDK",description:"Learn how to use the Python SDK to create new resources.",source:"@site/docs/tools/sdk/python/creating-resources.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/create",permalink:"/docs/tools/sdk/python/create",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/creating-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:2,frontMatter:{id:"python-sdk-create",title:"Creating resources with The Python SDK",pagination_label:"Create a resource",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"pythonsdk",keywords:["python","sdk","create"],description:"Learn how to use the Python SDK to create new resources.",slug:"/tools/sdk/python/create",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Python SDK",permalink:"/docs/tools/sdk/python/getting-started"},next:{title:"Update a resource",permalink:"/docs/tools/sdk/python/update"}},c={},p=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"You can use the SDK to create new resources."}),"\n",(0,o.jsxs)(n.p,{children:["For example, you can run a script to create a work group, also known as a ",(0,o.jsx)(n.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html",children:"governance group"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Copy this 'create WorkGroup' script from the beta APIs into your Python project to try it out:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"import sailpoint\nimport sailpoint.v3\nimport sailpoint.beta\nfrom sailpoint.beta.models.workgroup_dto import WorkgroupDto\nfrom sailpoint.beta.models.owner_dto import OwnerDto\nfrom sailpoint.configuration import Configuration\n\nconfiguration = Configuration()\n\napi_client = sailpoint.v3.ApiClient(configuration)\napi_client_beta = sailpoint.beta.ApiClient(configuration)\n\nidentities_api_instance = sailpoint.v3.PublicIdentitiesApi(api_client)\nworkgroups_api_instance = sailpoint.beta.GovernanceGroupsApi(api_client_beta)\n\nidentity = identities_api_instance.get_public_identities(limit=1)[0]\n\nworkgroup = WorkgroupDto(name='DB Access Governance Group', \n                         description='Description of the Governance Group', \n                         owner=OwnerDto(id=identity.id, \n                                        name=identity.name, \n                                        type='IDENTITY'))\n\n\ntry:\n    workgroupResponse = workgroups_api_instance.create_workgroup(workgroup)\n    print(\"The response of GovernanceGroupsApi->create_workgroup:\\n\")\n    print(workgroupResponse)\nexcept Exception as e:\n    print(\"Exception when calling GovernanceGroupsApi->create_workgroup: %s\\n\" % e)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Run this command to run the code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python sdk.py\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The example uses the ",(0,o.jsx)(n.code,{children:"getPublicIdentities"})," method from the ",(0,o.jsx)(n.code,{children:"PublicIdentitiesApi"})," to pull an identity needed to be the owner of the work group."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"create_workgroup"})," request is initialized on lines 18-22, using the identity's ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"id"})," in the owner object."]}),"\n",(0,o.jsx)(n.p,{children:"The SDK will return the created work group:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"id='d287a1e2-81fc-474e-bc0c-155bd8ab0899' \nname='DB Access Governance Group' \ndescription='Description of the Governance Group' \nmember_count=0 \nconnection_count=0\nowner=OwnerDto(type='IDENTITY', \n               id='0003c25c365e492381d4e557b6159f9b', \n               name='Brian Mendoza')\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);