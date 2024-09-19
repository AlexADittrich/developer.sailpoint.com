"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9689],{177509:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=n(785893),t=n(511151);const s={id:"before-provisioning-rule",title:"Before Provisioning Rule",pagination_label:"Before Provisioning Rule",sidebar_label:"Before Provisioning Rule",sidebar_class_name:"beforeProvisioningRule",keywords:["cloud","rules","before provisioning"],description:"This rule runs before provisioning to a source.",slug:"/extensibility/rules/cloud-rules/before-provisioning-rule",tags:["Rules"]},r=void 0,l={id:"extensibility/rules/cloud-rules/before-provisioning-rule",title:"Before Provisioning Rule",description:"This rule runs before provisioning to a source.",source:"@site/docs/extensibility/rules/cloud-rules/before_provisioning_rule.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/before-provisioning-rule",permalink:"/docs/extensibility/rules/cloud-rules/before-provisioning-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/before_provisioning_rule.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,frontMatter:{id:"before-provisioning-rule",title:"Before Provisioning Rule",pagination_label:"Before Provisioning Rule",sidebar_label:"Before Provisioning Rule",sidebar_class_name:"beforeProvisioningRule",keywords:["cloud","rules","before provisioning"],description:"This rule runs before provisioning to a source.",slug:"/extensibility/rules/cloud-rules/before-provisioning-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Account Profile Attribute Generator (from Template)",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator-template"},next:{title:"BuildMap Rule",permalink:"/docs/extensibility/rules/cloud-rules/buildmap-rule"}},a={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Before Provisioning Rule that Changes Disables and Enables to a Modify",id:"example---before-provisioning-rule-that-changes-disables-and-enables-to-a-modify",level:2}];function c(e){const i={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(i.p,{children:"Use this rule to modify a provisioning plan as provisioning is sent out. Do not use this rule to create new attributes. Use an account creation profile (provisioning policy) instead."}),"\n",(0,o.jsx)(i.p,{children:"These are some examples of when to use this rule:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Disable account and remove groups during provisioning when the lifecycle state of an identity is set to terminated"}),"\n",(0,o.jsx)(i.li,{children:"Remove or add permissions when certain attribute criteria are met"}),"\n",(0,o.jsx)(i.li,{children:"Move users to a specific organizational unit (OU) in Active Directory based upon attribute criteria"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"execution",children:"Execution"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Cloud Execution"})," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Logging"})," - Logging statements are currently only visible to SailPoint personnel."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Rule Execution",src:n(544490).Z+"",width:"1594",height:"635"})}),"\n",(0,o.jsx)(i.h2,{id:"input",children:"Input"}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Argument"}),(0,o.jsx)(i.th,{children:"Type"}),(0,o.jsx)(i.th,{children:"Purpose"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"log"}),(0,o.jsx)(i.td,{children:"org.apache.log4j.Logger"}),(0,o.jsxs)(i.td,{children:["Logger to log statements. ",(0,o.jsx)(i.em,{children:"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."})]})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"idn"}),(0,o.jsx)(i.td,{children:"sailpoint.server.IdnRuleUtil"}),(0,o.jsxs)(i.td,{children:["Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,o.jsx)(i.a,{href:"/docs/extensibility/rules/rule-utility",children:"IdnRuleUtil"}),"."]})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"plan"}),(0,o.jsx)(i.td,{children:"sailpoint.object.ProvisioningPlan"}),(0,o.jsx)(i.td,{children:"A set of provisioning instructions which are sent to the source connectors."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"application"}),(0,o.jsx)(i.td,{children:"sailpoint.object.Application"}),(0,o.jsx)(i.td,{children:"Read-only reference to application object that represents the source to which provisioning is being done."})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"output",children:"Output"}),"\n",(0,o.jsx)(i.p,{children:"There is no output for a Before Provisioning rule."}),"\n",(0,o.jsx)(i.h2,{id:"template",children:"Template"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BeforeProvisioning">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,o.jsx)(i.h2,{id:"example---before-provisioning-rule-that-changes-disables-and-enables-to-a-modify",children:"Example - Before Provisioning Rule that Changes Disables and Enables to a Modify"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BeforeProvisioning">\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\n  <Source><![CDATA[\nimport sailpoint.object.*;\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\nimport sailpoint.object.ProvisioningPlan;\nimport sailpoint.object.ProvisioningPlan.Operation;\n\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\n  }\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\n  }\n}\n\n  ]]></Source>\n</Rule>\n'})})]})}function d(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},544490:(e,i,n)=>{n.d(i,{Z:()=>o});const o=n.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);