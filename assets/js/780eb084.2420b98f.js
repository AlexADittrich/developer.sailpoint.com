"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21340],{783031:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=r(785893),t=r(511151);const o={id:"powershell-sdk-search",title:"Search with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Search",sidebar_position:5,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","search"],description:"Learn how to search using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/search",tags:["SDK"]},i=void 0,a={id:"tools/sdk/powershell/powershell-sdk-search",title:"Search with the PowerShell SDK",description:"Learn how to search using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/search.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/search",permalink:"/docs/tools/sdk/powershell/search",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/search.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:5,frontMatter:{id:"powershell-sdk-search",title:"Search with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Search",sidebar_position:5,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","search"],description:"Learn how to search using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/search",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/paginate"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/retries"}},l={},h=[{value:"Paginate search results",id:"paginate-search-results",level:3}];function c(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The PowerShell SDK provides you access to Identity Security Cloud's ",(0,n.jsx)(s.a,{href:"https://documentation.sailpoint.com/saas/help/search/index.html",children:"Search"})," functionality."]}),"\n",(0,n.jsx)(s.p,{children:"Here is an example search you can copy into your PowerShell instance to try it out:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-powershell",children:'$Json = @"\n{\n "indices": [\n  "identities"\n ],\n "query": {\n  "query": "\\"john.doe\\"",\n  "fields": [\n  "name"\n  ]\n }\n }\n"@\n\n$Search = ConvertFrom-JsonToSearch -Json $Json\n\ntry {\n    Search-Post -Search $Search\n} catch {\n    Write-Host ("Exception occurred when calling Search-Post: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["This example request uses the ",(0,n.jsx)(s.a,{href:"/docs/api/v3/search-post",children:"Perform Search endpoint"}),' to search your tenant for identities with the name "john.doe".']}),"\n",(0,n.jsx)(s.h3,{id:"paginate-search-results",children:"Paginate search results"}),"\n",(0,n.jsx)(s.p,{children:"You can paginate your search results to get records past the default limit of 10000. With pagination, you can get as many records as you want."}),"\n",(0,n.jsx)(s.p,{children:"Use the syntax shown in this example to paginate your search results:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-powershell",children:'$JSON = @"\n{\n "indices": [\n  "identities"\n ],\n "query": {\n  "query": "*",\n  "fields": [\n  "name"\n  ]\n },\n "sort": [\n  "-displayName"\n ]\n }\n"@\n\n$Search = ConvertFrom-JsonToSearch -Json $JSON\n\ntry {\n\n    Invoke-PaginateSearch -Increment 5000 -Limit 150000 -Search $Search\n\n} catch {\n    Write-Host $_\n    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Paginate-Search")\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["This example searches your Identity Security Cloud tenant for all identities and sorts them by their ",(0,n.jsx)(s.code,{children:"displayName"})," in descending order. The search returns a maximum of 150000 records (the ",(0,n.jsx)(s.code,{children:"Limit"}),") and 5000 records per page (the ",(0,n.jsx)(s.code,{children:"Increment"}),")."]}),"\n",(0,n.jsx)(s.p,{children:"To paginate the search results, you can specify these parameters:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"-Increment"}),": The number of records to return per page."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"-Limit"}),": The maximum number of records to return per request. The default is 10000."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"-Offset"}),": The number of the first record to return with the request. The default is 0."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);