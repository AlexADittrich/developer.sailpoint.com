"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[7770],{801318:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(785893),i=n(511151);const s={id:"python-sdk-pagination",title:"Paginate Results with The Python SDK",pagination_label:"Paginate Results",sidebar_label:"Paginate Results",sidebar_position:5,sidebar_class_name:"pythonsdk",keywords:["python","sdk","paginate"],description:"Learn how to use the Python SDK to paginate results.",slug:"/tools/sdk/python/paginate",tags:["SDK"]},a=void 0,r={id:"tools/sdk/python/python-sdk-pagination",title:"Paginate Results with The Python SDK",description:"Learn how to use the Python SDK to paginate results.",source:"@site/docs/tools/sdk/python/pagination.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/paginate",permalink:"/docs/tools/sdk/python/paginate",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/pagination.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:5,frontMatter:{id:"python-sdk-pagination",title:"Paginate Results with The Python SDK",pagination_label:"Paginate Results",sidebar_label:"Paginate Results",sidebar_position:5,sidebar_class_name:"pythonsdk",keywords:["python","sdk","paginate"],description:"Learn how to use the Python SDK to paginate results.",slug:"/tools/sdk/python/paginate",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Delete a resource",permalink:"/docs/tools/sdk/python/delete"},next:{title:"Search",permalink:"/docs/tools/sdk/python/search"}},l={},p=[];function c(t){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to ",(0,o.jsx)(e.a,{href:"/docs/api/standard-collection-parameters/#paginating-results",children:"Paginating Results"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"Here is an example of how to implement pagination with the SDK on line 10:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nfrom sailpoint.paginator import Paginator\n\nconfiguration = Configuration()\n\napi_client = sailpoint.v3.ApiClient(configuration)\n\naccounts = Paginator.paginate(sailpoint.v3.AccountsApi(api_client).list_accounts, result_limit=1000, limit=250)\n\nprint(accounts)\n"})}),"\n",(0,o.jsx)(e.p,{children:"Run this command to run the code:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"python sdk.py\n"})}),"\n",(0,o.jsx)(e.p,{children:"This example returns 1000 accounts, 250 accounts per page."}),"\n",(0,o.jsxs)(e.p,{children:["The function takes a few parameters: the first is the function you want to invoke the pagination against. The earlier example calls ",(0,o.jsx)(e.code,{children:"sailpoint.v3.AccountsApi(api_client).list_accounts"})," to list accounts."]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"result_limit"})," specifies the total number of results you can return, 1000. The following limit number, 250, refers to the ",(0,o.jsx)(e.code,{children:"increment"}),", the number of records per page. For example, changing the ",(0,o.jsx)(e.code,{children:"result_limit"}),' to 50 and the following "250" to 5 would change the request to return a total of 50 records, 5 per page.']}),"\n",(0,o.jsxs)(e.p,{children:["You can also provide an ",(0,o.jsx)(e.code,{children:"offset"})," value to specify which record number to start the request on. For example, you can add ",(0,o.jsx)(e.code,{children:"offset=11"})," to start getting accounts from the 12th record, 11, instead of the first, 0."]}),"\n",(0,o.jsxs)(e.p,{children:["To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in ",(0,o.jsx)(e.a,{href:"/docs/api/standard-collection-parameters/#paginating-results",children:"Paginating Results"}),"."]})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}}}]);