"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77634],{698957:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(667294);const n={colabTitle:"colabTitle_sndK",titleContainer:"titleContainer_shlt"};var i=a(370393);function l(){return r.createElement(i.Z,{to:"/colab"},r.createElement("div",{className:n.titleContainer}))}},965495:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(667294);const n={featuredGridContainer:"featuredGridContainer_JObN",multipleGridContainer:"multipleGridContainer_g6gp",gridContainer:"gridContainer_KFdq",center:"center_gcgr",space:"space_AM5c",noFound:"noFound_mX9x",cardExit:"cardExit_MTVV",featuredSpinnerCenter:"featuredSpinnerCenter_zus4",spinnerCenterMultiple:"spinnerCenterMultiple_e6Tx",spinnerCenterSingle:"spinnerCenterSingle_GQ9J"},i={card:"card_lIUR",featuredCard:"featuredCard_vS7R",featuredCardImage:"featuredCardImage_TngV",cardText:"cardText_iMvO",cardImage:"cardImage_Ks_l",split:"split_d3LL",featuredCardTitle:"featuredCardTitle_bBYM",cardTitle:"cardTitle_f5JS",cardBody:"cardBody_TFpj",cardUser:"cardUser_migz",featuredCardFace:"featuredCardFace_a02g",cardFace:"cardFace_oiXQ",cardName:"cardName_wy_u",cardCreatorTitle:"cardCreatorTitle_EIN7",cardBadge:"cardBadge_Wgdi",cardBadgeImage:"cardBadgeImage_bSy6",certifiedText:"certifiedText_j8Gb",cardBadgeText:"cardBadgeText_ihfQ",cardBadgeCertified:"cardBadgeCertified_S23p",cardBadgeCertifiedImage:"cardBadgeCertifiedImage_nusu",docCardIcon:"docCardIcon_pXmA",badgeText:"badgeText_NQL3",badgeContainer:"badgeContainer_vUw8"};var l=a(725026),c=a(799603),s=a(473582),o=a(370393);function d({post:e,featured:t}){let a=r.createElement("div",null);return e.tags.includes("sailpoint-developed")?a=r.createElement("div",{className:i.cardBadge},r.createElement("img",{className:i.cardBadgeImage,src:(0,l.default)("/icons/SailPoint-LogoIcon-RGB-Color.svg")}),r.createElement("span",{className:i.cardBadgeText},"SailPoint Developed")):e.tags.includes("sailpoint-certified")&&(a=r.createElement("div",{className:i.badgeContainer},r.createElement("div",{title:"SailPoint Certified",className:i.cardBadgeCertified},r.createElement(c.G,{icon:s.ip0,className:i.docCardIcon,size:"2x"})))),r.createElement(o.Z,{to:e.link},r.createElement("div",{className:t?i.featuredCard:i.card},r.createElement("div",{className:i.cardText},r.createElement("img",{className:t?i.featuredCardImage:i.cardImage,src:(0,l.default)(e.image)}),r.createElement("div",{className:i.split}),r.createElement("div",{className:t?i.featuredCardTitle:i.cardTitle},e.title),r.createElement("div",{className:i.cardUser},r.createElement("img",{className:t?i.featuredCardFace:i.cardFace,src:(0,l.default)(e.creatorImage)}),r.createElement("div",{className:i.cardName},e.creatorName),r.createElement("div",{className:i.cardCreatorTitle},e.creatorTitle),r.createElement("div",null))),a))}var m=a(183253),u=a.n(m),g=a(890427),p=a(238767),f=a(632718);function v({filterCallback:e,featured:t,limit:a,multiple:i}){const[c,s]=r.useState(),[o,m]=r.useState(!1),[p,v]=r.useState(""),[_,C]=r.useState(!0),h=((0,l.default)("/icons/circle-xmark-regular.svg"),e=>{v({data:void 0,raw:void 0}),(async e=>{const t=await(0,f.RS)(e.id);v({data:e,raw:t})})(e),m(!0)});return r.useEffect((()=>{}),[o,p]),u().setAppElement("#__docusaurus"),r.useEffect((()=>{(async()=>{let r=e.tags;t&&(r=["featured"]);const n=await(0,f.FO)(r?r.join("+"):"",e.category),i=[],l=[];if(n.topic_list){for(const e of n.topic_list.topics)if(e.tags.length>0){let t={};for(let a of e.posters)if(a.description.includes("Original Poster"))for(let e of n.users)if(e.id===a.user_id){if(l.find((t=>t.group===e.primary_group_name)))e.title=l.find((t=>t.group===e.primary_group_name)).title;else{let t=await(0,f.vw)(e.primary_group_name);void 0===t.group?l.push({group:e.primary_group_name,title:""}):(l.push({group:e.primary_group_name,title:t.group.title||""}),e.title=t.group.title)}t=e}i.push(await E(e,t))}s(a?i.slice(0,a):i)}else s(void 0);C(!1)})(),s(void 0),C(!0)}),[e]),r.createElement("div",{className:t?n.featuredCenter:n.center},_?r.createElement("div",null,t?r.createElement("div",{className:n.featuredSpinnerCenter},r.createElement(g.Z,null)):r.createElement("div",{className:i?n.spinnerCenterMultiple:n.spinnerCenterSingle},r.createElement(g.Z,null))):c&&c.length>0?r.createElement(r.Fragment,null,i?r.createElement("div",{className:n.multipleGridContainer},c.map((function(e,a){return r.createElement(d,{featured:t,post:e,key:a+e.link,openDialogFunc:h})}))):r.createElement("div",{className:t?n.featuredGridContainer:n.gridContainer},c.map((function(e,a){return r.createElement(d,{featured:t,post:e,key:a+e.link,openDialogFunc:h})})))):r.createElement("div",null,r.createElement("div",{className:n.noFound}," ","Hey there, looks like no integrations match your search criteria. Check out our"," ",r.createElement("a",{href:"https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230"},"getting started guide"),", and consider being the first to contribute this integration!")))}async function E(e,t){return{id:e.id,creatorName:t.name,excerpt:(r=C(e.excerpt),r.length>93?r.substring(0,93)+"...":r),creatorImage:_(t.avatar_template),creatorTitle:t.title,tags:e.tags,image:e.image_url,link:(0,p.O$)()+"t/"+e.slug+"/"+e.id,title:(a=e.title,a.length>63?a.substring(0,62)+"...":a),views:e.views,liked:e.like_count,replies:e.posts_count,solution:e.has_accepted_answer,readTime:parseInt(5)};var a,r}function _(e){return e.includes((0,p.gK)())?"https://"+(0,p.gK)()+e.replace("{size}","120"):e.replace("{size}","120")}function C(e){if(e){const t=(e=e.replace(/:[^:]*:/g,"")).match(/Description([\s\S]*?)Legal Agreement/);return t&&(e=t[1].trim()),e.length>150?e.slice(0,100)+"...":e.replace("&hellip;","")}return""}},890427:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(667294);const n={container:"container_hkNt",line:"line_KXFO",pulse:"pulse_pBme"};function i(){return r.createElement(r.Fragment,null,r.createElement("div",{className:n.container},r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line})))}},548569:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(667294),n=a(299927),i=a(698957),l=a(370393);const c={cardContainer:"cardContainer_IyWs",container:"container_gsYg",featured:"featured_j5VM",discourseContainer:"discourseContainer_v5Kx",title:"title_i9uc",link:"link_Idan",mainCard:"mainCard_sDPv",gettingStartedText:"gettingStartedText_Zbaj",gettingStartedOne:"gettingStartedOne_yfUw",gettingStartedTwo:"gettingStartedTwo_JDEM",gettingStartedThree:"gettingStartedThree_Pyy5",bold:"bold_A2uk",gridContainer:"gridContainer_i4k5",video:"video_NkSt",carousel:"carousel__tKq",contentContainer:"contentContainer_iTfy"};var s=a(965495);function o(){const[e]=r.useState({category:"colab-iiq-plugins",tags:[]}),[t]=r.useState({category:"colab-rules",tags:["identity-security-cloud"]}),[a]=r.useState({category:"colab-saas-connectors",tags:[]}),[o]=r.useState({category:"colab-transforms",tags:[]}),[d]=r.useState({category:"colab",tags:["workflows"]}),[m]=r.useState({category:"colab-community-tools",tags:[]});return r.createElement(n.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."},r.createElement("main",null,r.createElement(i.Z,null),r.createElement("div",null,r.createElement("div",{className:c.mainCard},r.createElement("div",{className:c.contentContainer},r.createElement("div",{className:c.gettingStartedText},r.createElement("div",{className:c.gettingStartedOne},"CoLab Marketplace"),r.createElement("div",{className:c.gettingStartedTwo},"What is the CoLab?"),r.createElement("div",{className:c.gettingStartedThree},r.createElement("span",null,"The community CoLab is a place where members of our community can build fully-featured solutions on our platform and share those solutions with each other. Users collaborate on these solutions to benefit both themselves and the community at large.")," ",r.createElement("br",null),r.createElement("br",null),r.createElement("a",{href:"https://developer.sailpoint.com/discuss/t/developer-community-colab-getting-started-guide/11230"},"Get started with the CoLab \u2192")))),r.createElement("div",{className:c.carousel},r.createElement("iframe",{className:c.video,src:"https://www.youtube.com/embed/J-Z1b654Vtk?si=YKK-tvGxL5N1WjNi",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})))),r.createElement("div",{className:c.container},r.createElement("div",null,r.createElement("div",{className:c.cardContainer},r.createElement("div",{className:c.titleContainer},r.createElement("h1",{className:c.title},"Workflows"),r.createElement(l.Z,{to:"/colab/workflows",className:c.link},"View All \u2192")),r.createElement(s.Z,{filterCallback:d,limit:5,multiple:!0})),r.createElement("div",{className:c.cardContainer},r.createElement("div",{className:c.titleContainer},r.createElement("h1",{className:c.title},"SaaS Connectors"),r.createElement(l.Z,{to:"/colab/saasconnectors",className:c.link},"View All \u2192")),r.createElement(s.Z,{filterCallback:a,limit:5,multiple:!0})),r.createElement("div",{className:c.cardContainer},r.createElement("div",{className:c.titleContainer},r.createElement("h1",{className:c.title},"Community Tools"),r.createElement(l.Z,{to:"/colab/communitytools",className:c.link},"View All \u2192")),r.createElement(s.Z,{filterCallback:m,limit:5,multiple:!0})),r.createElement("div",{className:c.cardContainer},r.createElement("div",{className:c.titleContainer},r.createElement("h1",{className:c.title},"Rules"),r.createElement(l.Z,{to:"/colab/rules",className:c.link},"View All \u2192")),r.createElement(s.Z,{filterCallback:t,limit:5,multiple:!0})),r.createElement("div",{className:c.cardContainer},r.createElement("div",{className:c.titleContainer},r.createElement("h1",{className:c.title},"Transforms"),r.createElement(l.Z,{to:"/colab/transforms",className:c.link},"View All \u2192")),r.createElement(s.Z,{filterCallback:o,limit:5,multiple:!0})),r.createElement("div",{className:c.cardContainer},r.createElement("div",null,r.createElement("h1",{className:c.title},"IIQ Plugins"),r.createElement(l.Z,{to:"/colab/plugins",className:c.link},"View All \u2192")),r.createElement(s.Z,{filterCallback:e,limit:5,multiple:!0}))))))}},632718:(e,t,a)=>{a.d(t,{F2:()=>s,FO:()=>u,IN:()=>l,KG:()=>i,NJ:()=>p,RS:()=>g,ZS:()=>c,cz:()=>m,u3:()=>o,vw:()=>d});var r=a(238767),n=a(425108);async function i(){try{const e=await fetch((0,r.O$)()+"top.json");return await e.json()}catch(e){return[]}}async function l(e,t,a){try{if(e){const e=await fetch((0,r.O$)()+"groups/expert_ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}{const e=await fetch((0,r.O$)()+"groups/ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}}catch(n){return[]}}async function c(e){try{const t=await fetch((0,r.O$)()+"user-cards.json?user_ids="+e.join(","));return await t.json()}catch(t){return[]}}async function s(){try{const e=await fetch((0,r.O$)()+"leaderboard/14.json");return await e.json()}catch(e){return[]}}async function o(e){let t="",a={users:[],topic_list:{topics:[]}};t=e.length<1?(0,r.O$)()+"c/content/community-blog/125.json":(0,r.O$)()+`tags/c/content/community-blog/${e}.json`;try{let r=0;for(;;){const n=0===r?t:`${t}${e.length>1?"&":"?"}page=${r}`,i=await fetch(n),l=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(l.topic_list.topics),a.users=a.users.concat(l.users),l.topic_list.topics.length<30)break;r++}return a}catch(n){return[]}}async function d(e){let t=(0,r.O$)()+"g/"+e+".json";try{const e=await fetch(t);return await e.json()}catch(a){return n.log(a),[]}}async function m(e){let t="",a={users:[],topic_list:{topics:[]}};e?(e.length<1&&(t=(0,r.O$)()+"c/content/video-library/127.json"),1===e.length&&(t=(0,r.O$)()+`/tags/c/content/video-library/127/${e}.json`),2===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}`),3===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}%2B${e[2]}`)):t=(0,r.O$)()+"c/content/video-library/l/latest.json";try{let r=0;for(;;){const n=0===r?t:`${t}${e.length>1?"&":"?"}page=${r}`,i=await fetch(n),l=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(l.topic_list.topics),a.users=a.users.concat(l.users),l.topic_list.topics.length<30)break;r++}return a}catch(n){return[]}}async function u(e,t){let a="colab";t&&"colab"!=t&&(a=a+"/"+t);let n="";n=e?(0,r.O$)()+"c/"+a+"/l/latest.json?tags="+e:(0,r.O$)()+"c/"+a+"/l/latest.json";try{const e=await fetch(n);return await e.json()}catch(i){return[]}}async function g(e){try{const t=await fetch((0,r.O$)()+"raw/"+e+".json");return await t.text()}catch(t){return[]}}async function p(){try{const e=await fetch((0,r.O$)()+"tags.json");return await e.json()}catch(e){return[]}}}}]);