"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28774],{997936:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=r(785893),t=r(511151);const n={id:"powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Error Handling",sidebar_position:7,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","error"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/error-handling",tags:["SDK"]},l=void 0,i={id:"tools/sdk/powershell/powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",description:"Learn how to delete resources using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/error-handling.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/error-handling",permalink:"/docs/tools/sdk/powershell/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/error-handling.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,sidebarPosition:7,frontMatter:{id:"powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Error Handling",sidebar_position:7,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","error"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/error-handling",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/retries"},next:{title:"Python SDK",permalink:"/docs/tools/sdk/python"}},a={},d=[];function h(e){const s={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"The SDK uses the Invoke-WebRequest cmdlet to handle HTTP requests. Invoke-WebRequest will throw a terminating error for any response that falls out of the range of 2xx. A non-2xx response will immediately halt the program and produce a stack trace."}),"\n",(0,o.jsxs)(s.p,{children:["You can use a ",(0,o.jsx)(s.code,{children:"try/catch"})," function to intercept any non success response and take actions on the results, such as logging the message or performing additional actions before exiting the program:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-powershell",children:'# Catch any non 2xx response and log the status code and error message\ntry {\n    Get-Transforms -Filters "id eq"\n}\ncatch {\n    Write-Host $_.Exception.Response.StatusCode.value__\n    Write-Host $_.ErrorDetails\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"catch"})," block will handle the error, and the script execution will continue. If you want to stop the scripts execution, include an ",(0,o.jsx)(s.code,{children:"Exit"})," in the ",(0,o.jsx)(s.code,{children:"catch"})," block:"]}),"\n",(0,o.jsxs)(s.p,{children:["This code ensures that the ",(0,o.jsx)(s.code,{children:"Get-AccessProfiles"})," cmdlet will never be called:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-powershell",children:'# Catch any non 2xx response and log the status code and error message. Stop the script with the Exit keyword.\ntry {\n    Get-Transforms -Filters "id eq"\n}\ncatch {\n    Write-Host $_.Exception.Response.StatusCode.value__\n    Write-Host $_.ErrorDetails\n    Exit\n}\n\nGet-AccessProfiles\n'})})]})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);