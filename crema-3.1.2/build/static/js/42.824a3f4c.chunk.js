(this.webpackJsonphister=this.webpackJsonphister||[]).push([[42],{1661:function(e,t,n){"use strict";var a=n(13),s=n(3),o=n(2),i=(n(8),n(12)),r=n(153),d=n(17),c=n(25),u=n(1495),m=n(167),l=n(1),p=["className"],y=Object(d.a)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,n=e.ownerState;return Object(s.a)({minWidth:56,color:t.palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),h=o.forwardRef((function(e,t){var n=Object(c.a)({props:e,name:"MuiListItemIcon"}),d=n.className,h=Object(a.a)(n,p),b=o.useContext(m.a),f=Object(s.a)({},n,{alignItems:b.alignItems}),v=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return Object(r.a)(a,u.b,n)}(f);return Object(l.jsx)(y,Object(s.a)({className:Object(i.default)(v.root,d),ownerState:f,ref:t},h))}));t.a=h},1673:function(e,t,n){"use strict";var a=n(2),s=a.createContext({});t.a=s},1760:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(94)),o=n(1),i=(0,s.default)((0,o.jsx)("path",{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"}),"DescriptionOutlined");t.default=i},1931:function(e,t,n){"use strict";var a=n(752),s=n(14),o=n(6),i=n(13),r=n(3),d=n(2),c=(n(312),n(8),n(12)),u=n(153),m=n(17),l=n(25),p=n(1576),y=n(604),h=n(1673),b=n(260),f=n(101),v=n(98);function x(e){return Object(f.a)("MuiAccordion",e)}var j=Object(v.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),g=n(1),O=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],k=Object(m.a)(y.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[Object(o.a)({},"& .".concat(j.region),t.region),t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a={duration:n.transitions.duration.shortest};return t={position:"relative",transition:n.transitions.create(["margin"],a),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:n.palette.divider,transition:n.transitions.create(["opacity","background-color"],a)},"&:first-of-type":{"&:before":{display:"none"}}},Object(o.a)(t,"&.".concat(j.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(o.a)(t,"&.".concat(j.disabled),{backgroundColor:n.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&Object(o.a)({},"&.".concat(j.expanded),{margin:"16px 0"}))})),I=d.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiAccordion"}),o=n.children,m=n.className,y=n.defaultExpanded,f=void 0!==y&&y,v=n.disabled,j=void 0!==v&&v,I=n.disableGutters,w=void 0!==I&&I,q=n.expanded,M=n.onChange,S=n.square,R=void 0!==S&&S,C=n.TransitionComponent,L=void 0===C?p.a:C,W=n.TransitionProps,A=Object(i.a)(n,O),N=Object(b.a)({controlled:q,default:f,name:"Accordion",state:"expanded"}),D=Object(s.a)(N,2),z=D[0],G=D[1],T=d.useCallback((function(e){G(!z),M&&M(e,!z)}),[z,M,G]),V=d.Children.toArray(o),H=Object(a.a)(V),B=H[0],P=H.slice(1),E=d.useMemo((function(){return{expanded:z,disabled:j,disableGutters:w,toggle:T}}),[z,j,w,T]),_=Object(r.a)({},n,{square:R,disabled:j,disableGutters:w,expanded:z}),F=function(e){var t=e.classes,n={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(u.a)(n,x,t)}(_);return Object(g.jsxs)(k,Object(r.a)({className:Object(c.default)(F.root,m),ref:t,ownerState:_,square:R},A,{children:[Object(g.jsx)(h.a.Provider,{value:E,children:B}),Object(g.jsx)(L,Object(r.a)({in:z,timeout:"auto"},W,{children:Object(g.jsx)("div",{"aria-labelledby":B.props.id,id:B.props["aria-controls"],role:"region",className:F.region,children:P})}))]}))}));t.a=I},1932:function(e,t,n){"use strict";var a=n(6),s=n(13),o=n(3),i=n(2),r=(n(8),n(12)),d=n(153),c=n(17),u=n(25),m=n(1456),l=n(1673),p=n(101),y=n(98);function h(e){return Object(p.a)("MuiAccordionSummary",e)}var b=Object(y.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),f=n(1),v=["children","className","expandIcon","focusVisibleClassName","onClick"],x=Object(c.a)(m.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme,s=e.ownerState,i={duration:n.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],i)},Object(a.a)(t,"&.".concat(b.focusVisible),{backgroundColor:n.palette.action.focus}),Object(a.a)(t,"&.".concat(b.disabled),{opacity:n.palette.action.disabledOpacity}),Object(a.a)(t,"&:hover:not(.".concat(b.disabled,")"),{cursor:"pointer"}),t),!s.disableGutters&&Object(a.a)({},"&.".concat(b.expanded),{minHeight:64}))})),j=Object(c.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,n=e.ownerState;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&Object(a.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(b.expanded),{margin:"20px 0"}))})),g=Object(c.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(a.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(b.expanded),{transform:"rotate(180deg)"})})),O=i.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiAccordionSummary"}),a=n.children,c=n.className,m=n.expandIcon,p=n.focusVisibleClassName,y=n.onClick,b=Object(s.a)(n,v),O=i.useContext(l.a),k=O.disabled,I=void 0!==k&&k,w=O.disableGutters,q=O.expanded,M=O.toggle,S=Object(o.a)({},n,{expanded:q,disabled:I,disableGutters:w}),R=function(e){var t=e.classes,n=e.expanded,a=e.disabled,s=e.disableGutters,o={root:["root",n&&"expanded",a&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return Object(d.a)(o,h,t)}(S);return Object(f.jsxs)(x,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:I,component:"div","aria-expanded":q,className:Object(r.default)(R.root,c),focusVisibleClassName:Object(r.default)(R.focusVisible,p),onClick:function(e){M&&M(e),y&&y(e)},ref:t,ownerState:S},b,{children:[Object(f.jsx)(j,{className:R.content,ownerState:S,children:a}),m&&Object(f.jsx)(g,{className:R.expandIconWrapper,ownerState:S,children:m})]}))}));t.a=O},1933:function(e,t,n){"use strict";var a=n(3),s=n(13),o=n(2),i=(n(8),n(12)),r=n(153),d=n(17),c=n(25),u=n(101),m=n(98);function l(e){return Object(u.a)("MuiAccordionDetails",e)}Object(m.a)("MuiAccordionDetails",["root"]);var p=n(1),y=["className"],h=Object(d.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),b=o.forwardRef((function(e,t){var n=Object(c.a)({props:e,name:"MuiAccordionDetails"}),o=n.className,d=Object(s.a)(n,y),u=n,m=function(e){var t=e.classes;return Object(r.a)({root:["root"]},l,t)}(u);return Object(p.jsx)(h,Object(a.a)({className:Object(i.default)(m.root,o),ref:t,ownerState:u},d))}));t.a=b},1965:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(94)),o=n(1),i=(0,s.default)((0,o.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");t.default=i},1966:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(94)),o=n(1),i=(0,s.default)((0,o.jsx)("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");t.default=i},1967:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(94)),o=n(1),i=(0,s.default)((0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"InsertEmoticon");t.default=i},2339:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(2),o=n(1458),i=n(60),r=n(725),d=n(70),c=n(1582),u=n(1965),m=n.n(u),l=n(899),p=n.n(l),y=n(1966),h=n.n(y),b=n(1760),f=n.n(b),v=n(1967),x=n.n(v),j=n(34),g=n(206),O=n(1661),k=n(1562),I=n(990),w=n(12),q=n(1),M=function(e){var t=e.item,n=e.onGetFaqData,a=e.selectionId;return Object(q.jsxs)(I.a,{button:!0,className:Object(w.default)("listItem",{active:t.id===a}),onClick:function(){return n(t.id)},children:[Object(q.jsx)(g.a,{sx:{mr:3,color:"text.primary"},children:Object(q.jsx)(O.a,{sx:{minWidth:10},children:t.icon})}),Object(q.jsx)(k.a,{primary:t.name})]})},S=n(15),R=n(85),C=[{id:101,name:Object(q.jsx)(j.a,{id:"faq.general"}),icon:Object(q.jsx)(m.a,{})},{id:102,name:Object(q.jsx)(j.a,{id:"knowledge.installation"}),icon:Object(q.jsx)(p.a,{})},{id:103,name:Object(q.jsx)(j.a,{id:"faq.pricing"}),icon:Object(q.jsx)(h.a,{})},{id:104,name:Object(q.jsx)(j.a,{id:"faq.licenseTypes"}),icon:Object(q.jsx)(f.a,{})},{id:105,name:Object(q.jsx)(j.a,{id:"faq.support"}),icon:Object(q.jsx)(x.a,{})}],L=function(e){var t=e.onGetFaqData,n=e.selectionId;return Object(q.jsx)(R.b,{children:Object(q.jsxs)(d.a,{children:[Object(q.jsx)(g.a,{component:"h3",sx:{mb:4,fontWeight:S.a.BOLD,fontSize:16},children:Object(q.jsx)(j.a,{id:"faq.queries"})}),Object(q.jsx)(c.a,{component:"nav","aria-label":"main mailbox folders",sx:{paddingTop:0,paddingBottom:0,"& .listItem":{paddingLeft:"0",paddingRight:"0",paddingTop:1,paddingBottom:1,backgroundColor:"transparent","& .MuiTypography-body1":{fontSize:14,fontWeight:S.a.MEDIUM},"&:hover,&:focus,&.active":{backgroundColor:"transparent",color:"primary.main","& svg":{fontSize:18,color:"primary.main"}},"&.active":{color:"primary.main"},"& svg":{fontSize:18}}},children:C.map((function(e){return Object(q.jsx)(M,{item:e,selectionId:n,onGetFaqData:t},e.id)}))})]})})},W=n(1931),A=n(1932),N=n(1933),D=n(730),z=n.n(D),G=function(e){var t=e.faqList;return Object(q.jsx)(g.a,{sx:{height:"100%"},children:t.map((function(e){return Object(q.jsxs)(W.a,{sx:{color:"text.secondary",marginBottom:.5,padding:"10px 20px","&:before":{display:"none"}},children:[Object(q.jsx)(A.a,{sx:{fontWeight:S.a.MEDIUM,color:"text.primary",fontSize:16,padding:0},expandIcon:Object(q.jsx)(z.a,{}),children:Object(q.jsx)(g.a,{children:e.ques})}),Object(q.jsx)(N.a,{sx:{padding:"0 0 10px"},children:Object(q.jsx)(g.a,{children:e.ans})})]},e.id)}))})},T=[{id:1001,ques:"Do you have any document to demonstrate the installation process",ans:"Yes, We have prepared a document stating the complete process of installation along with the tools needed for the installation."},{id:1002,ques:"Is there any need of external softwares for installing this AppThemeProvider ?",ans:"No, you just have to run this app, everything is integrated in it, so there is no need of any extra installation."},{id:1003,ques:"Do you have any document to demonstrate the installation process",ans:"Yes, We have prepared a document stating the complete process of installation along with the tools needed for the installation."},{id:1004,ques:"Is there any need of external softwares for installing this AppThemeProvider ?",ans:"No, you just have to run this app, everything is integrated in it, so there is no need of any extra installation."},{id:1005,ques:"Do you have any document to demonstrate the installation process",ans:"Yes, We have prepared a document stating the complete process of installation along with the tools needed for the installation."},{id:1006,ques:"Is there any need of external softwares for installing this AppThemeProvider ?",ans:"No, you just have to run this app, everything is integrated in it, so there is no need of any extra installation."}],V=[{id:2001,ques:"Approximately how many people work in your company?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2002,ques:"What are some common system requirement to install your software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2003,ques:"What are some pre-requisites before installing your software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2004,ques:"Is there any document available for instructions regarding to installation of software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2005,ques:"What are some common system requirement to install your software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}],H=[{id:2001,ques:"What is the price of complete software kit?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2002,ques:"Do you offer any discount on bulk purchase order?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2003,ques:"Is there EMI option available on payment?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2004,ques:"Do you offer any warranty on purchase of your product?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2005,ques:"What are some common system requirement to install your software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}],B=[{id:2001,ques:"What type of license is required for using your product?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2002,ques:"Is there any universal license for all your products?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2003,ques:"What is the validity of the product license?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2004,ques:"What are some of the common terms and conditions written in license?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2005,ques:"What are some common system requirement to install your software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}],P=[{id:2001,ques:"Do you offer after sale support on purchase of xyz software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2002,ques:"Do you have customer care service available for your customers?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2003,ques:"What is the toll-free contact number to use customer care service?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2004,ques:"What are your charges of offering service at door step?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2005,ques:"What are some common system requirement to install your software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}],E=n(334),_=n(279);t.default=function(){var e=Object(s.useState)(T),t=Object(a.a)(e,2),n=t[0],d=t[1],c=Object(s.useState)(101),u=Object(a.a)(c,2),m=u[0],l=u[1];return Object(q.jsx)(_.a,{animation:"transition.slideUpIn",delay:200,children:Object(q.jsxs)(g.a,{sx:{flex:1},children:[Object(q.jsxs)(g.a,{sx:{backgroundColor:E.a[500],color:"primary.contrastText",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",minHeight:224,width:"100%",p:1.5,mb:2},children:[Object(q.jsx)(g.a,{component:"h2",sx:{mb:5,fontSize:20,fontWeight:S.a.MEDIUM},children:Object(q.jsx)(j.a,{id:"faq.heading"})}),Object(q.jsx)(g.a,{component:"p",sx:{fontSize:16},children:Object(q.jsx)(j.a,{id:"faq.content"})})]}),Object(q.jsxs)(i.a,{children:[Object(q.jsx)(o.a,{item:!0,xs:12,sm:4,lg:3,children:Object(q.jsx)(L,{onGetFaqData:function(e){switch(l(e),e){case 101:d(T);break;case 102:d(V);break;case 103:d(H);break;case 104:d(B);break;case 105:d(P)}},selectionId:m})}),Object(q.jsxs)(o.a,{item:!0,xs:12,sm:8,lg:9,children:[Object(q.jsx)(G,{faqList:n}),Object(q.jsx)(r.a,{})]})]})]})})}}}]);
//# sourceMappingURL=42.824a3f4c.chunk.js.map