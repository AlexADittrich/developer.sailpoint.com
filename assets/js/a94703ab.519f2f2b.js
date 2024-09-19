"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[94368],{362991:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ye});var n=a(667294),r=a(490512),o=a(6465),l=a(483631),i=a(476828),c=a(957250),s=a(633084),d=a(568834);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function u(){const{shown:e,scrollToTop:t}=(0,d.a)({threshold:300});return n.createElement("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var b=a(923909),p=a(616550),f=a(789078),h=a(457343),v=a(971366),E=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,_=(e,t,a)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,I=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&_(e,a,t[a]);if(y)for(var a of y(t))k.call(t,a)&&_(e,a,t[a]);return e};function C(e){return n.createElement("svg",I({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function O({onClick:e}){return n.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:e},n.createElement(C,{className:S.collapseSidebarButtonIcon}))}var x=a(375218),N=a(8757),w=a(150221),T=a(421651),B=a(665897),P=a(603044),A=a(370393),j=a(254939),L=Object.defineProperty,Z=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,W=(e,t,a)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,R=(e,t)=>{for(var a in t||(t={}))H.call(t,a)&&W(e,a,t[a]);if(Z)for(var a of Z(t))M.call(t,a)&&W(e,a,t[a]);return e},D=(e,t)=>{var a={};for(var n in e)H.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&Z)for(var n of Z(e))t.indexOf(n)<0&&M.call(e,n)&&(a[n]=e[n]);return a};function F({collapsed:e,categoryLabel:t,onClick:a}){return n.createElement("button",{"aria-label":e?(0,s.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,s.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),"aria-expanded":!e,type:"button",className:"clean-btn menu__caret",onClick:a})}function V(e){var t=e,{item:a,onItemClick:o,activePath:c,level:s,index:d}=t,m=D(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:b,collapsible:p,className:f,href:v}=a,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,h.L)(),y=function(e){const t=(0,j.default)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,i.LM)(e):void 0),[e,t])}(a),g=(0,i._F)(a,c),k=(0,P.Mg)(v,c),{collapsed:_,setCollapsed:I}=(0,B.u)({initialState:()=>!!p&&(!g&&a.collapsed)}),{expandedItem:C,setExpandedItem:S}=(0,w.f)(),O=(e=!_)=>{S(e?null:d),I(e)};return function({isActive:e,collapsed:t,updateCollapsed:a}){const r=(0,T.D9)(e);(0,n.useEffect)((()=>{e&&!r&&t&&a(!1)}),[e,r,t,a])}({isActive:g,collapsed:_,updateCollapsed:O}),(0,n.useEffect)((()=>{p&&null!=C&&C!==d&&E&&I(!0)}),[p,C,d,I,E]),n.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":_},f)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(A.Z,R({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!v&&p,"menu__link--active":g}),onClick:p?e=>{null==o||o(a),v?O(!1):(e.preventDefault(),O())}:()=>{null==o||o(a)},"aria-current":k?"page":void 0,role:p&&!v?"button":void 0,"aria-expanded":p&&!v?!_:void 0,href:p?null!=y?y:"#":y},m),b),v&&p&&n.createElement(F,{collapsed:_,categoryLabel:b,onClick:e=>{e.preventDefault(),O()}})),n.createElement(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.createElement(he,{items:u,tabIndex:_?-1:0,onItemClick:o,activePath:c,level:s+1})))}var U=a(935096),K=a(74546);const z={menuExternalLink:"menuExternalLink_NmtK"};var G=Object.defineProperty,Y=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(e,t,a)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,X=(e,t)=>{for(var a in t||(t={}))q.call(t,a)&&Q(e,a,t[a]);if(Y)for(var a of Y(t))J.call(t,a)&&Q(e,a,t[a]);return e},$=(e,t)=>{var a={};for(var n in e)q.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&Y)for(var n of Y(e))t.indexOf(n)<0&&J.call(e,n)&&(a[n]=e[n]);return a};function ee(e){var t=e,{item:a,onItemClick:o,activePath:c,level:s,index:d}=t,m=$(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p,autoAddBaseUrl:f}=a,h=(0,i._F)(a,c),v=(0,U.Z)(u);return n.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:b},n.createElement(A.Z,X(X({className:(0,r.Z)("menu__link",!v&&z.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:f,"aria-current":h?"page":void 0,to:u},v&&{onClick:o?()=>o(a):void 0}),m),b,!v&&n.createElement(K.Z,null)))}const te={menuHtmlItem:"menuHtmlItem_M9Kj"};function ae({item:e,level:t,index:a}){const{value:o,defaultStyle:i,className:c}=e;return n.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),i&&[te.menuHtmlItem,"menu__list-item"],c),key:a,dangerouslySetInnerHTML:{__html:o}})}var ne=Object.defineProperty,re=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ie=(e,t,a)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ce=(e,t)=>{for(var a in t||(t={}))oe.call(t,a)&&ie(e,a,t[a]);if(re)for(var a of re(t))le.call(t,a)&&ie(e,a,t[a]);return e},se=(e,t)=>{var a={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&re)for(var n of re(e))t.indexOf(n)<0&&le.call(e,n)&&(a[n]=e[n]);return a};function de(e){var t=e,{item:a}=t,r=se(t,["item"]);switch(a.type){case"category":return n.createElement(V,ce({item:a},r));case"html":return n.createElement(ae,ce({item:a},r));default:return n.createElement(ee,ce({item:a},r))}}var me=Object.defineProperty,ue=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,fe=(e,t,a)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const he=(0,n.memo)((function(e){var t=e,{items:a}=t,r=((e,t)=>{var a={};for(var n in e)be.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&ue)for(var n of ue(e))t.indexOf(n)<0&&pe.call(e,n)&&(a[n]=e[n]);return a})(t,["items"]);const o=(0,i.f)(a,r.activePath);return n.createElement(w.D,null,o.map(((e,t)=>n.createElement(de,((e,t)=>{for(var a in t||(t={}))be.call(t,a)&&fe(e,a,t[a]);if(ue)for(var a of ue(t))pe.call(t,a)&&fe(e,a,t[a]);return e})({key:t,item:e,index:t},r)))))})),ve={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Ee({path:e,sidebar:t,className:a}){const o=function(){const{isActive:e}=(0,x.n)(),[t,a]=(0,n.useState)(e);return(0,N.RF)((({scrollY:t})=>{e&&a(0===t)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,s.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",ve.menu,o&&ve.menuWithAnnouncementBar,a)},n.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},n.createElement(he,{items:t,activePath:e,level:1})))}const ye="sidebar_njMd",ge="sidebarWithHideableNavbar_wUlq",ke="sidebarHidden_VK0M",_e="sidebarLogo_isFc";const Ie=n.memo((function({path:e,sidebar:t,onCollapse:a,isHidden:o}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:i}}}=(0,h.L)();return n.createElement("div",{className:(0,r.Z)(ye,l&&ge,o&&ke)},l&&n.createElement(v.Z,{tabIndex:-1,className:_e}),n.createElement(Ee,{path:e,sidebar:t}),i&&n.createElement(O,{onClick:a}))}));var Ce=a(915043),Se=a(879698);const Oe=({sidebar:e,path:t})=>{const a=(0,Se.e)();return n.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},n.createElement(he,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};const xe=n.memo((function(e){return n.createElement(Ce.Zo,{component:Oe,props:e})}));var Ne=Object.defineProperty,we=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,Pe=(e,t,a)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Ae=(e,t)=>{for(var a in t||(t={}))Te.call(t,a)&&Pe(e,a,t[a]);if(we)for(var a of we(t))Be.call(t,a)&&Pe(e,a,t[a]);return e};function je(e){const t=(0,f.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Ie,Ae({},e)),r&&n.createElement(xe,Ae({},e)))}const Le={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function Ze({toggleSidebar:e}){return n.createElement("div",{className:Le.expandButton,title:(0,s.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},n.createElement(C,{className:Le.expandButtonIcon}))}const He={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function Me({children:e}){var t;const a=(0,c.V)();return n.createElement(n.Fragment,{key:null!=(t=null==a?void 0:a.name)?t:"noSidebar"},e)}function We({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:a}){const{pathname:o}=(0,p.TH)(),[i,c]=(0,n.useState)(!1),s=(0,n.useCallback)((()=>{i&&c(!1),!i&&(0,b.n)()&&c(!0),a((e=>!e))}),[a,i]);return n.createElement("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,He.docSidebarContainer,t&&He.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(He.docSidebarContainer)&&t&&c(!0)}},n.createElement(Me,null,n.createElement("div",{className:(0,r.Z)(He.sidebarViewport,i&&He.sidebarViewportHidden)},n.createElement(je,{sidebar:e,path:o,onCollapse:s,isHidden:i}),i&&n.createElement(Ze,{toggleSidebar:s}))))}const Re={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function De({hiddenSidebarContainer:e,children:t}){const a=(0,c.V)();return n.createElement("main",{className:(0,r.Z)(Re.docMainContainer,(e||!a)&&Re.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Re.docItemWrapper,e&&Re.docItemWrapperEnhanced)},t))}const Fe={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function Ve({children:e}){const t=(0,c.V)(),[a,r]=(0,n.useState)(!1);return n.createElement("div",{className:Fe.docsWrapper},n.createElement(u,null),n.createElement("div",{className:Fe.docRoot},t&&n.createElement(We,{sidebar:t.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}),n.createElement(De,{hiddenSidebarContainer:a},e)))}var Ue=a(555199),Ke=a(433939),ze=a(725026);function Ge({className:e}){return n.createElement("main",{className:(0,r.Z)("container margin-vert--xl",e),style:{textAlign:"center"}},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement(Ue.default,{as:"h1",className:"hero__title"},n.createElement(s.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,"Our docs and API specifications have recently moved\u2014checkout the navbar at the top of this page to find their new home. If you can't find the document you're looking for,"," ",n.createElement("a",{href:"https://developer.sailpoint.com/discuss/docs-request",target:"_blank",rel:"noopener noreferrer"},"let us know"),"."),n.createElement(Ke.default,{height:"60%",sources:{light:(0,ze.default)("img/not-found/codey.png"),dark:(0,ze.default)("img/not-found/codey.png")}}))))}function Ye(e){const t=(0,i.SN)(e);if(!t)return n.createElement(Ge,null);const{docElement:a,sidebarName:s,sidebarItems:d}=t;return n.createElement(o.FG,{className:(0,r.Z)(l.k.page.docsDocPage)},n.createElement(c.b,{name:s,items:d},n.createElement(Ve,null,a)))}}}]);