"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37945],{993266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(785893),r=n(511151);const i={id:"date-math",title:"Date Math",pagination_label:"Date Math",sidebar_label:"Date Math",sidebar_class_name:"dateMath",keywords:["transforms","operations","date","math"],description:"Add, subtract, and round components of a timestamp's incoming value.",slug:"/extensibility/transforms/operations/date-math",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/date-math",title:"Date Math",description:"Add, subtract, and round components of a timestamp's incoming value.",source:"@site/docs/extensibility/transforms/operations/date-math.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/date-math",permalink:"/docs/extensibility/transforms/operations/date-math",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/date-math.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1726759952e3,frontMatter:{id:"date-math",title:"Date Math",pagination_label:"Date Math",sidebar_label:"Date Math",sidebar_class_name:"dateMath",keywords:["transforms","operations","date","math"],description:"Add, subtract, and round components of a timestamp's incoming value.",slug:"/extensibility/transforms/operations/date-math",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Date Format",permalink:"/docs/extensibility/transforms/operations/date-format"},next:{title:"Decompose Diacritial Marks",permalink:"/docs/extensibility/transforms/operations/decompose-diacritical-marks"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:'Use the date math transform to add, subtract, and round components of a timestamp\'s incoming value. It also allows you to work with a referential value of "now" to run operations against the current date and time instead of a fixed value.'}),"\n",(0,s.jsxs)(t.p,{children:["The output format for the DateMath transform is \"yyyy-MM-dd'T'HH",":mm",'". When you use this transform inside another transform (e.g., ',(0,s.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/date-compare",children:"dateCompare"}),"), make sure to convert to ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"ISO8601"})," first."]}),"\n",(0,s.jsx)(t.admonition,{title:"Other Considerations",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The input datetime value must always be in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"ISO8601 format"}),", in UTC time zone:"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Use this format: \"yyyy-MM-dd'T'HH:mm",":ss",'.SSSZ", i.e., "2020-10-28T12:00:00.000Z".']}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The dateFormat transform can help get data into this format."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The industry standard for rounding is actually date/time truncation. When the transform is rounding down, it truncates the the fractional value from the incoming data. When the transform is rounding up, it truncates the fractional value and adds the next unit of time. For examples, refer to the ",(0,s.jsx)(t.a,{href:"#transform-structure",children:"Transform Structure"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'The "week" unit of time is not supported as a metric when you are rounding. Rounding up or down a week will result in an error.'}),"\n",(0,s.jsxs)(t.li,{children:['If you are using the "now" keyword and you have also applied an input date as the implicitly or explicitly definted input parameter, the transform prefers using "now" and ignores the data in the ',(0,s.jsx)(t.code,{children:"input"})," attribute."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(t.p,{children:["The date math transform takes the input value and executes addition, subtraction and/or rounding operations to that value based on an ",(0,s.jsx)(t.code,{children:"expression"})," configuration value. As indicated earlier, the input datetime must be in ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"ISO8601 format"}),". The ",(0,s.jsx)(t.code,{children:"expression"})," value leverages the following abbreviations to indicate which date or time component to evaluate:"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'"y" - year'}),"\n",(0,s.jsx)(t.li,{children:'"M" - month'}),"\n",(0,s.jsx)(t.li,{children:'"w" - week'}),"\n",(0,s.jsx)(t.li,{children:'"d" - day'}),"\n",(0,s.jsx)(t.li,{children:'"h" - hour'}),"\n",(0,s.jsx)(t.li,{children:'"m" - minute'}),"\n",(0,s.jsx)(t.li,{children:'"s" - second'}),"\n",(0,s.jsx)(t.li,{children:'"now" - the current instant in time'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Also, the operational logic is defined by usage of one of the following symbols:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'"+" - add; This must be followed by a valid time unit.'}),"\n",(0,s.jsx)(t.li,{children:'"-" - subtract; This must be followed by a valid time unit.'}),"\n",(0,s.jsx)(t.li,{children:'"/" - round; This must be followed by a valid time unit.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Some examples of expressions are:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"expression": "now"'})," returns the current date and time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"expression": "now/h"'})," returns the current date and time, rounded to the hour."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"expression": "now+1w"'})," returns one week from the current date and time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"expression": "now+1y+1M+2d-4h+1m-3s/s"'})," returns the current date and time plus one year, one month, two days, minus four hours, plus one minute and minus three seconds, rounded to the second."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'"expression": "+3M"'})," returns the date and time that would be three months more than the value provided as an input to the transform."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "expression": "+3M/h",\n    "roundUp": true,\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "startDate"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "dateMath",\n  "name": "Test Date Math Transform"\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,s.jsx)(t.code,{children:"dateMath"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"expression"})," - A string value of the date and time components to operate on, along with the math operations to execute. Multiple operations on multiple components are supported."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"roundUp"})," - This ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})," value indicates whether the transform rounds up or down when the ",(0,s.jsx)(t.code,{children:"expression"}),' defines a rounding ("/") operation. If this value is not provided, the transform defaults to ',(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"true"})," indicates the transform rounds up (i.e., truncate the fractional date/time component indicated and then add one unit of that component)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"false"})," indicates the transform rounds down (i.e., truncate the fractional date/time component indicated)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"This transform takes the current date, subtracts five days from it, and rounds down to the lowest day."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "expression": "now-5d/d",\n    "roundUp": false\n  },\n  "type": "dateMath",\n  "name": "Date Math Transform"\n}\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsxs)(t.p,{children:["This transform takes the ",(0,s.jsx)(t.code,{children:"startDate"}),' attribute from a user\'s record in the "HR Source," converts it from its native format to an ',(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"ISO8601-formatted"})," string, and then adds twelve hours to it. The final value is then rounded up to the next second."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "expression": "+12h/s",\n    "roundUp": true,\n    "input": {\n      "attributes": {\n        "input": {\n          "attributes": {\n            "sourceName": "HR Source",\n            "attributeName": "startDate"\n          },\n          "type": "accountAttribute"\n        },\n        "inputFormat": "MMM dd yyyy, HH:mm:ss.SSS",\n        "outputFormat": "ISO8601"\n      },\n      "type": "dateFormat"\n    }\n  },\n  "type": "dateMath",\n  "name": "Date Math Transform"\n}\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsxs)(t.p,{children:["This transform take the ",(0,s.jsx)(t.code,{children:"HIREDATE"})," from Workday and converts it to ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:"ISO8601"})," to be used in the Date Math transform. The Date Math transform then creates a new Date of ",(0,s.jsx)(t.code,{children:"HIREDATE + 1"}),". Since that is then outputted in the format \"yyyy-MM-dd'T'HH",":mm",'", you can then use it in a ',(0,s.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/date-format",children:"dateFormat"})," transform to give a WIN32 formatted date."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "type": "dateFormat",\n  "name": "WD - HireDate",\n  "attributes": {\n    "input": {\n      "attributes": {\n        "expression": "+1d",\n        "input": {\n          "attributes": {\n            "input": {\n              "attributes": {\n                "attributeName": "HIREDATE",\n                "sourceName": "Workday"\n              },\n              "type": "accountAttribute"\n            },\n            "inputFormat": "MM/dd/yyyy",\n            "outputFormat": "ISO8601"\n          },\n          "type": "dateFormat"\n        },\n        "roundUp": true\n      },\n      "type": "dateMath"\n    },\n    "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n    "outputFormat": "EPOCH_TIME_WIN32"\n  }\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);