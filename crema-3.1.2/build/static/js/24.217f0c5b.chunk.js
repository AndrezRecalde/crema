(this.webpackJsonphister=this.webpackJsonphister||[]).push([[24],{1626:function(e,t,n){"use strict";var a=n(5),i=(n(2),n(51)),c=n(725),r=n(206),s=n(1452),o=n(979),l=n(1572),d=n(718),j=n(103),x=n.n(j),u=n(1460),b=n(61),p=n(6),m=n(1508),h=n(949),O=n(1),f=function(e){var t=e.isAppDrawerOpen,n=e.sidebarContent,a=Object(i.useDispatch)();return Object(O.jsx)(o.a,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsxs)(r.a,{sx:{height:"100%",width:{lg:280}},children:[Object(O.jsx)(l.a,{lgUp:!0,children:Object(O.jsx)(m.a,{open:t,onClose:function(){return a(Object(b.eb)())},sx:Object(p.a)({position:"absolute"},"& .".concat(h.a.paper),{width:280,"& .listItem":{zIndex:1305}}),children:n})}),Object(O.jsx)(l.a,{lgDown:!0,children:Object(O.jsx)(u.a,{style:{height:"100%"},children:n})})]})})},g=n(47),v=n(15),y=n(23),w=["children","navStyle","footer"],S=function(e,t){return e===v.g.BIT_BUCKET?t>=1200?0:70:t>=600?70:56},z=function(e){var t=e.children,n=e.navStyle,i=e.footer,c=Object(y.a)(e,w);return Object(O.jsx)(r.a,Object(a.a)(Object(a.a)({sx:{display:"flex",height:{xs:"calc(100vh - ".concat(87+S(n,0)+(i?47:0),"px) !important"),sm:"calc(100vh - ".concat(87+S(n,600)+(i?47:0),"px) !important"),md:"calc(100vh - ".concat(107+S(n,900)+(i?47:0),"px) !important"),lg:"calc(100vh - ".concat(100+S(n,1200)+(i?47:0),"px) !important"),xl:"calc(100vh - ".concat(140+S(n,1536)+(i?57:0),"px) !important")}}},c),{},{children:t}))},M=function(e){var t=Object(i.useDispatch)(),n=Object(i.useSelector)((function(e){return e.common.isAppDrawerOpen})),j=Object(g.c)().footer,p=Object(g.c)().navStyle,m=e.title,h=e.sidebarContent,y=e.fullView,w=e.children;return Object(O.jsxs)(r.a,{sx:Object(a.a)({flex:1,display:"flex",flexDirection:"column",overflow:"hidden",margin:-4,padding:4},e.sxStyle),children:[Object(O.jsxs)(r.a,{sx:{marginTop:y?0:-4,display:"flex",alignItems:"center",mb:{xs:y?4:2,lg:4},mt:{xs:y?0:-4,lg:0}},children:[y?null:Object(O.jsx)(l.a,{lgUp:!0,children:Object(O.jsx)(d.a,{edge:"start",sx:{marginRight:function(e){return e.spacing(2)}},color:"inherit","aria-label":"open drawer",onClick:function(){return t(Object(b.eb)())},size:"large",children:Object(O.jsx)(x.a,{sx:{width:35,height:35}})})}),Object(O.jsx)(s.a,{in:!0,style:{transitionDelay:"300ms"},children:Object(O.jsx)(r.a,{component:"h2",variant:"h2",sx:{fontSize:16,color:"text.primary",fontWeight:v.a.SEMI_BOLD},children:m})})]}),Object(O.jsxs)(z,{navStyle:p,footer:j,children:[h?Object(O.jsx)(f,{isAppDrawerOpen:n,footer:j,fullView:y,navStyle:p,sidebarContent:h}):null,Object(O.jsxs)(r.a,{sx:{display:"flex",flexDirection:"column",width:{xs:"100%",lg:"calc(100% - ".concat(y?0:280,"px)")},pl:{lg:e.fullView?0:8}},children:[Object(O.jsx)(o.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsx)(u.a,{style:Object(a.a)({height:"100%",display:"flex",flexDirection:"column",position:"relative"},e.cardStyle),children:w})}),Object(O.jsx)(c.a,{})]})]})]})};t.a=M;M.defaultProps={title:""}},1644:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.default=r},1648:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z"}),"SendOutlined");t.default=r},1665:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");t.default=r},1675:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.default=r},1700:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"}),"PhoneOutlined");t.default=r},1741:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}),"CheckCircleOutlined");t.default=r},1742:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonOutlined");t.default=r},1762:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"}),"ThumbUpAltOutlined");t.default=r},1779:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"}),"VideocamOutlined");t.default=r},1926:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)([(0,c.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,c.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,c.jsx)("path",{d:"M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z"},"2"),(0,c.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"3")],"EmojiEmotionsOutlined");t.default=r},1936:function(e,t,n){"use strict";var a=n(13),i=n(3),c=n(2),r=(n(8),n(12)),s=n(153),o=n(25),l=n(17),d=n(101),j=n(98);function x(e){return Object(d.a)("MuiCardMedia",e)}Object(j.a)("MuiCardMedia",["root","media","img"]);var u=n(1),b=["children","className","component","image","src","style"],p=Object(l.a)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.isMediaComponent,i=n.isImageComponent;return[t.root,a&&t.media,i&&t.img]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),m=["video","audio","picture","iframe","img"],h=["picture","img"],O=c.forwardRef((function(e,t){var n=Object(o.a)({props:e,name:"MuiCardMedia"}),c=n.children,l=n.className,d=n.component,j=void 0===d?"div":d,O=n.image,f=n.src,g=n.style,v=Object(a.a)(n,b),y=-1!==m.indexOf(j),w=!y&&O?Object(i.a)({backgroundImage:'url("'.concat(O,'")')},g):g,S=Object(i.a)({},n,{component:j,isMediaComponent:y,isImageComponent:-1!==h.indexOf(j)}),z=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(s.a)(n,x,t)}(S);return Object(u.jsx)(p,Object(i.a)({className:Object(r.default)(z.root,l),as:j,role:!y&&O?"img":void 0,ref:t,style:w,ownerState:S,src:y?O||f:void 0},v,{children:c}))}));t.a=O},2186:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z"}),"PhotoOutlined");t.default=r},2187:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"}),"CommentOutlined");t.default=r},2188:function(e,t,n){"use strict";var a=n(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94)),c=n(1),r=(0,i.default)((0,c.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"ShareOutlined");t.default=r},2287:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(2),c=n(60),r=n(1458),s=n(51),o=n(61),l=n(154),d=n(206),j=n(988),x=n(719),u=n(1936),b=n(223),p=n(1700),m=n.n(p),h=n(1779),O=n.n(h),f=n(896),g=n.n(f),v=n(34),y=n(17),w=n(15),S=n(1),z=Object(y.a)("div")((function(e){var t=e.theme;return Object(a.a)({display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",marginBottom:20},t.breakpoints.up("xl"),{marginBottom:30})})),M=Object(y.a)("div")((function(e){var t=e.theme;return{position:"relative","& .MuiAvatar-root":{border:"solid 5px ".concat(t.palette.background.paper),marginBottom:10,width:84,height:84,marginTop:-42}}})),I=Object(y.a)("div")((function(e){var t=e.theme;return{position:"absolute",right:2,bottom:12,zIndex:1,width:30,height:30,backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText,borderRadius:"50%",border:"solid 3px ".concat(t.palette.primary.contrastText),display:"flex",justifyContent:"center",alignItems:"center","& .MuiSvgIcon-root":{fontSize:14}}})),R=Object(y.a)(j.a)((function(e){var t=e.theme;return{border:"2px solid ".concat(t.palette.primary.contrastText),marginRight:-4,width:28,height:28}})),C=Object(y.a)("div")((function(e){var t=e.theme;return{border:"2px solid ".concat(t.palette.primary.contrastText),width:28,height:28,backgroundColor:t.palette.success.main,color:t.palette.common.white,borderRadius:"50%",marginRight:-4,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",fontSize:12,fontWeight:w.a.BOLD}})),k=function(e){var t=e.data,n=t.users,a=t.title;return Object(S.jsxs)(l.a,{sxStyle:{mb:8},contentStyle:{p:0,"&:last-of-type":{pb:0}},children:[Object(S.jsx)(u.a,{sx:{height:140,width:"100%"},image:"/assets/images/wall/v-card.jpg",alt:"Video Thumb"}),Object(S.jsxs)(d.a,{px:5,pb:4,children:[Object(S.jsxs)(z,{children:[Object(S.jsxs)(M,{children:[Object(S.jsx)(j.a,{src:"/assets/images/avatar/A5.jpg",alt:"User"}),Object(S.jsx)(I,{children:Object(S.jsx)(g.a,{})})]}),Object(S.jsx)(b.a,{component:"h3",variant:"h3",children:Object(S.jsx)(v.a,{id:"wall.ericBrickey"})}),Object(S.jsx)(d.a,{component:"p",color:"text.secondary",mt:1,children:Object(S.jsx)(v.a,{id:"wall.osloNorway"})})]}),Object(S.jsxs)(d.a,{sx:{display:"flex",alignItems:"center",textAlign:"center",flexDirection:"column"},children:[Object(S.jsx)(d.a,{mb:2.5,component:"h4",children:a}),Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",mb:{xs:5,xl:7.5},children:[n.slice(0,4).map((function(e){return Object(S.jsx)(R,{src:e.profilePic},e.id)})),n.length>4?Object(S.jsxs)(C,{children:["+",n.length-4]}):null]}),Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:[Object(S.jsx)(d.a,{mx:2,mb:2,children:Object(S.jsx)(x.a,{startIcon:Object(S.jsx)(m.a,{}),color:"primary",variant:"contained",sx:{textTransform:"capitalize"},children:Object(S.jsx)(v.a,{id:"wall.groupCall"})})}),Object(S.jsx)(d.a,{mx:2,mb:2,children:Object(S.jsx)(x.a,{startIcon:Object(S.jsx)(O.a,{}),color:"primary",variant:"outlined",sx:{textTransform:"capitalize"},children:Object(S.jsx)(v.a,{id:"wall.videoCall"})})})]})]})]})]})},P=n(722),D=n(221),_=function(e){var t=e.request;return Object(S.jsxs)(d.a,{className:"item-hover",sx:{display:"flex",alignItems:"center",px:5,py:2},children:[Object(S.jsx)(j.a,{sx:{width:36,height:36},src:t.profilePic}),Object(S.jsxs)(d.a,{sx:{ml:3.5,flex:1,display:"flex",alignItems:"center",flexWrap:"wrap",overflow:"hidden"},children:[Object(S.jsx)(d.a,{flex:1,mr:1,children:Object(S.jsx)(b.a,{sx:{marginBottom:1,whiteSpace:"nowrap"},component:"h5",variant:"h5",children:t.name})}),Object(S.jsx)(d.a,{component:"p",color:"text.secondary",mb:1,children:Object(D.b)(t.date)})]})]})},T=n(698),B=function(e){var t=e.friendRequests,n=Object(T.a)().messages;return Object(S.jsx)(l.a,{sxStyle:{mb:8},title:n["wall.friends"],action:n["common.viewAll"],contentStyle:{px:0,pt:2},children:Object(S.jsx)(P.a,{animation:"transition.slideRightBigIn",data:t,renderRow:function(e,t){return Object(S.jsx)(_,{request:e},t)}})})},L=n(14),H=n(345),N=n(744),W=n(12),A=Object(y.a)("img")((function(e){return{borderRadius:e.theme.cardRadius,display:"block",width:"100%",cursor:"pointer"}})),E=function(e){var t=e.photos,n=Object(i.useState)(-1),a=Object(L.a)(n,2),c=a[0],r=a[1],s=Object(T.a)().messages;return Object(S.jsxs)(l.a,{sxStyle:{mb:8},title:s["wall.photos"],action:s["common.viewAll"],children:[Object(S.jsx)("div",{children:Object(S.jsx)(H.a,{data:t,column:3,itemPadding:4,responsive:{xs:1,sm:2,md:2,lg:3,xl:3},renderRow:function(e,t){return Object(S.jsx)(A,{onClick:function(){return r(t)},className:Object(W.default)("card-hover"),src:e.thumb,alt:"user"},t)}})}),Object(S.jsx)(N.a,{index:c,medias:t.map((function(e){return{url:e.thumb,mime_type:"image/*"}})),onClose:function(){r(-1)}})]})},V=function(e){var t=e.item;return Object(S.jsxs)(d.a,{className:"item-hover",display:"flex",px:5,py:2,children:[Object(S.jsx)(j.a,{sx:{width:36,height:36},src:t.user.profilePic}),Object(S.jsxs)(d.a,{ml:3.5,children:[Object(S.jsx)(d.a,{component:"h5",mb:.5,children:t.title}),Object(S.jsxs)(d.a,{component:"p",color:"text.secondary",children:[t.desc,Object(S.jsx)(d.a,{ml:2,component:"span",fontSize:13,color:"primary.main",className:"pointer",children:"Read More"})]})]})]})},F=function(e){var t=e.recentNews,n=Object(T.a)().messages;return Object(S.jsx)(l.a,{title:n["wall.recentNews"],contentStyle:{px:0,pt:2},children:Object(S.jsx)(P.a,{data:t,renderRow:function(e,t){return Object(S.jsx)(V,{item:e},t)}})})},U=n(1741),q=n.n(U),J=function(e){var t=e.item;return Object(S.jsxs)(d.a,{className:"item-hover",px:5,py:2,display:"flex",children:[Object(S.jsx)(j.a,{sx:{width:36,height:36,marginTop:.5},src:t.profilePic}),Object(S.jsxs)(d.a,{ml:3.5,flex:1,display:"flex",alignItems:"center",flexWrap:"wrap",children:[Object(S.jsxs)(d.a,{mb:1,flex:1,mr:1,children:[Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",children:[Object(S.jsx)(b.a,{component:"h5",variant:"h5",children:t.title}),Object(S.jsx)(d.a,{sx:{marginLeft:6,display:"block","& svg":{fontSize:16,color:"success.main"}},children:Object(S.jsx)(q.a,{})})]}),Object(S.jsx)(d.a,{component:"p",color:"text.secondary",children:t.subTitle})]}),Object(S.jsx)(d.a,{mb:1,children:Object(S.jsx)(x.a,{variant:"outlined",color:"primary",size:"small",sx:{borderRadius:30},children:"Follow"})})]})]})},K=function(e){var t=e.whoToFollow,n=Object(T.a)().messages;return Object(S.jsx)(l.a,{sxStyle:{mb:8},title:n["wall.whoToFollow"],contentStyle:{px:0},action:n["common.viewAll"],children:Object(S.jsx)(P.a,{data:t,renderRow:function(e,t){return Object(S.jsx)(J,{item:e},t)}})})},X=Object(y.a)(j.a)((function(e){var t=e.theme;return Object(a.a)({width:50,height:50,borderRadius:10},t.breakpoints.up("xl"),{width:70,height:70})})),Y=function(e){var t=e.item;return Object(S.jsx)(d.a,{className:"item-hover",px:5,py:2,children:Object(S.jsxs)(d.a,{display:"flex",children:[Object(S.jsx)(d.a,{mr:4,children:Object(S.jsx)(X,{src:t.thumb,alt:t.name})}),Object(S.jsxs)("div",{children:[Object(S.jsx)(d.a,{component:"h5",mb:.5,children:t.name}),Object(S.jsx)(d.a,{component:"p",color:"text.secondary",children:t.desc})]})]})})},$=function(e){var t=e.suggestions,n=Object(T.a)().messages;return Object(S.jsx)(l.a,{title:n["wall.suggestions"],contentStyle:{px:0,pt:2},children:Object(S.jsx)(P.a,{data:t,renderRow:function(e,t){return Object(S.jsx)(Y,{item:e},t)}})})},G=n(5),Q=n(28),Z=n(239),ee=n(1466),te=n(2186),ne=n.n(te),ae=n(1926),ie=n.n(ae),ce=n(1742),re=n.n(ce),se=n(718),oe=n(1648),le=n.n(oe),de=n(145),je=Object(y.a)("div")((function(e){var t=e.theme;return{flex:1,display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:Object(de.b)(t.palette.background.paper,.03),borderRadius:30,padding:"7px 20px","@media screen and (min-width: 600px) and (max-width: 800px)":{alignItems:"flex-start",flexDirection:"column",borderRadius:8},"@media (max-width: 485px)":{alignItems:"flex-start",flexDirection:"column",borderRadius:8}}})),xe=Object(y.a)(ee.a)((function(){return{"& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"},"& .MuiOutlinedInput-root":{"&.Mui-focused, &:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}}},"& .MuiInputBase-input":{padding:"6px 5px 7px"}}})),ue=Object(y.a)(se.a)((function(){return{padding:6,"& .MuiSvgIcon-root":{fontSize:20}}})),be=Object(y.a)("img")((function(){return{width:60,height:60,objectFit:"cover",borderRadius:4,display:"block"}})),pe=function(){var e=Object(s.useDispatch)(),t=Object(s.useSelector)((function(e){return e.wall.wallData})),n=Object(i.useState)(""),a=Object(L.a)(n,2),c=a[0],r=a[1],x=Object(i.useState)([]),u=Object(L.a)(x,2),b=u[0],p=u[1],m=Object(Z.a)({accept:"image/*, .pdf",multiple:!0,onDrop:function(e){var t=e.map((function(e){return{id:Math.floor(1e4*Math.random()),path:e.path,metaData:{type:e.type,size:e.size},preview:URL.createObjectURL(e)}}));g(t)}}),h=m.getRootProps,f=m.getInputProps,g=function(e){p([].concat(Object(Q.a)(b),Object(Q.a)(e)))},v=Object(T.a)().messages;return Object(S.jsxs)(l.a,{sxStyle:{mb:8},headerStyle:{paddingTop:5},title:v["wall.createPost"],children:[Object(S.jsxs)(d.a,{display:"flex",mb:1,children:[Object(S.jsx)(j.a,{sx:{marginRight:3.5,width:44,height:44},src:t.profilePic,alt:t.name}),Object(S.jsxs)(je,{children:[Object(S.jsx)(xe,{placeholder:"What's in your mind?",fullWidth:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(S.jsx)(d.a,{display:"flex",flexWrap:"wrap",children:Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",children:[Object(S.jsxs)("span",Object(G.a)(Object(G.a)({},h()),{},{children:[Object(S.jsx)("input",Object(G.a)({},f())),Object(S.jsx)(ue,{size:"large",children:Object(S.jsx)(ne.a,{})})]})),Object(S.jsx)(ue,{size:"large",children:Object(S.jsx)(O.a,{})}),Object(S.jsx)(ue,{size:"large",children:Object(S.jsx)(ie.a,{})}),Object(S.jsx)(ue,{size:"large",children:Object(S.jsx)(re.a,{})}),Object(S.jsx)(ue,{disabled:!c.trim()&&0===b.length,onClick:function(){var n={message:c,attachments:b,owner:{name:t.name,profilePic:t.profilePic,id:t.id}};e(Object(o.o)(n)),p([]),r("")},size:"large",children:Object(S.jsx)(le.a,{})})]})})]})]}),Object(S.jsx)(P.a,{data:b,containerStyle:{display:"flex",flexWrap:"wrap"},renderRow:function(e,t){return Object(S.jsx)(d.a,{p:1,children:Object(S.jsx)(be,{src:e.preview,alt:"upload"})},t)}})]})},me=n(747),he=n(1675),Oe=n.n(he),fe=Object(y.a)(d.a)((function(e){var t,n=e.theme;return t={cursor:"pointer",borderRadius:4,overflow:"hidden",position:"relative",height:140,width:"100%","& img":{width:"100%",height:"100%",objectFit:"cover",display:"block"}},Object(a.a)(t,n.breakpoints.up("md"),{height:180}),Object(a.a)(t,n.breakpoints.up("xl"),{height:200}),t})),ge=Object(y.a)(d.a)((function(e){var t=e.theme;return{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",backgroundColor:Object(de.a)(t.palette.common.black,.5),color:t.palette.common.white,display:"flex",justifyContent:"center",alignItems:"center",fontSize:18}})),ve=function(e){var t=e.attachments,n=Object(i.useState)(-1),a=Object(L.a)(n,2),c=a[0],r=a[1];return Object(S.jsxs)(d.a,{mb:4,children:[Object(S.jsx)(H.a,{itemPadding:8,data:t.length>4?t.slice(0,4):t,column:t.length>3?2:t.length,renderRow:function(e,n){return Object(S.jsxs)(fe,{children:[Object(S.jsx)("img",{src:e.preview,alt:"attachment",onClick:function(){return r(n)}}),t.length>4&&3===n&&Object(S.jsxs)(ge,{children:["+ ",t.length-3]})]},n)}}),Object(S.jsx)(N.a,{index:c,medias:t.map((function(e){return{url:e.preview,mime_type:"image/*"}})),onClose:function(){r(-1)}})]})},ye=n(1762),we=n.n(ye),Se=n(2188),ze=n.n(Se),Me=n(2187),Ie=n.n(Me),Re=function(e){var t=e.post,n=Object(s.useDispatch)();return Object(S.jsxs)(d.a,{mb:{xs:4,xl:6},fontWeight:w.a.MEDIUM,color:"text.secondary",display:"flex",alignItems:"center",justifyContent:"space-around",children:[Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",className:"pointer",color:t.liked?"primary.main":"text.secondary",onClick:function(){n(Object(me.e)(t.id,!t.liked))},children:[Object(S.jsx)(we.a,{sx:{fontSize:18}}),Object(S.jsxs)(d.a,{fontSize:{xs:12,md:14},component:"span",ml:1.5,children:[t.likes," likes"]})]}),t.comments.length>0&&Object(S.jsxs)(d.a,{display:"flex",className:"pointer",alignItems:"center",ml:3,children:[Object(S.jsx)(Ie.a,{sx:{fontSize:18}}),Object(S.jsxs)(d.a,{fontSize:{xs:12,md:14},component:"span",ml:1.5,children:[t.comments.length," Comments"]})]}),Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",className:"pointer",ml:3,children:[Object(S.jsx)(ze.a,{sx:{fontSize:18}}),Object(S.jsxs)(d.a,{fontSize:{xs:12,md:14},component:"span",ml:1.5,children:[t.shares," Shares"]})]})]})},Ce=n(1665),ke=n.n(Ce),Pe=n(52),De=n(756),_e=Object(y.a)("div")((function(e){var t=e.theme;return{borderTop:"solid 1px ".concat(t.palette.divider),display:"flex",paddingTop:16,"&:not(:last-of-type)":{marginBottom:20}}})),Te=Object(y.a)(d.a)((function(e){var t=e.theme;return{backgroundColor:Object(de.b)(t.palette.background.paper,.03),borderRadius:30,padding:"7px 20px",display:"flex",alignItems:"center",flex:1}})),Be=Object(y.a)(ee.a)((function(){return{"& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"},"& .MuiOutlinedInput-root":{"&.Mui-focused, &:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}}},"& .MuiInputBase-input":{padding:"6px 5px 7px"}}})),Le=function(e){var t=e.postId,n=e.wallData,a=Object(s.useDispatch)(),c=Object(i.useState)(""),r=Object(L.a)(c,2),o=r[0],l=r[1],x=Object(Z.a)({multiple:!1,onDrop:function(e){console.log("acceptedFiles",e);var i={author:{name:n.name,profilePic:n.profilePic,id:n.id},message:"",message_type:Pe.a.MEDIA,media:{id:Object(De.a)(),url:URL.createObjectURL(e[0]),mime_type:e[0].type}};a(Object(me.a)(t,i))}}),u=x.getRootProps,b=x.getInputProps,p=function(){var e={author:{name:n.name,profilePic:n.profilePic,id:n.id},message_type:Pe.a.TEXT,comment:o};a(Object(me.a)(t,e)),l("")};return Object(S.jsxs)(_e,{children:[Object(S.jsx)(j.a,{sx:{width:44,height:44,marginRight:4},src:n.profilePic}),Object(S.jsxs)(Te,{sx:{mb:{xs:3,md:0}},children:[Object(S.jsx)(Be,{placeholder:"Write a comment",fullWidth:!0,value:o,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){console.log(""),"Enter"===e.key&&p()}}),Object(S.jsx)(d.a,{display:"flex",alignItems:"center",children:""===o?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(se.a,{sx:{padding:2,fontSize:20,"& .MuiSvgIcon-root":{fontSize:20}},children:Object(S.jsx)(ie.a,{})}),Object(S.jsxs)("span",Object(G.a)(Object(G.a)({},u({className:"dropzone"})),{},{children:[Object(S.jsx)("input",Object(G.a)({},b())),Object(S.jsx)(se.a,{sx:{padding:2,fontSize:20,"& .MuiSvgIcon-root":{fontSize:20}},children:Object(S.jsx)(ke.a,{})})]}))]}):Object(S.jsx)(se.a,{sx:{padding:2,fontSize:20,"& .MuiSvgIcon-root":{fontSize:20}},onClick:p,children:Object(S.jsx)(le.a,{})})})]})]})},He=function(e){var t=e.item,n=t.author,a=t.message_type,c=t.media,r=t.comment,s=t.liked,o=Object(i.useState)(s),l=Object(L.a)(o,2),x=l[0],u=l[1];return Object(S.jsx)(d.a,{sx:{"&:not(:last-of-type)":{marginBottom:5}},children:Object(S.jsxs)(d.a,{display:"flex",children:[Object(S.jsx)(j.a,{sx:{width:44,height:44},src:n.profilePic}),Object(S.jsxs)(d.a,{ml:3.5,children:[a===Pe.a.TEXT?Object(S.jsx)(d.a,{sx:{padding:"10px 20px",border:function(e){return"solid 1px ".concat(e.palette.divider)},borderRadius:10,borderBottomLeftRadius:0},children:Object(S.jsx)(b.a,{children:r})}):Object(S.jsx)(d.a,{sx:{padding:"10px 20px",border:function(e){return"solid 1px ".concat(e.palette.divider)},borderRadius:10,borderBottomLeftRadius:0,"& img":{maxHeight:100}},children:Object(S.jsx)("img",{src:c.url,alt:"comment-img"})}),Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",mt:1,children:[Object(S.jsx)(d.a,{className:"pointer",color:x&&"primary.main",onClick:function(){u(!x)},children:"Like"}),Object(S.jsx)(d.a,{ml:4,className:"pointer",children:"Reply"})]})]})]})})},Ne=Object(y.a)("div")((function(e){var t=e.theme;return{borderTop:"solid 1px ".concat(t.palette.divider),paddingTop:20,marginLeft:-20,marginRight:-20,paddingLeft:20,paddingRight:20}})),We=function(e){var t=e.comments;return Object(S.jsxs)(Ne,{children:[Object(S.jsx)(d.a,{component:"p",mb:5,fontSize:16,fontWeight:w.a.MEDIUM,children:Object(S.jsx)(v.a,{id:"wall.comments"})}),Object(S.jsx)(P.a,{data:t,renderRow:function(e,t){return Object(S.jsx)(He,{item:e},t)}})]})},Ae=function(e){var t=e.post,n=e.wallData,a=t.owner,i=t.message,c=t.date,r=t.attachments,s=t.comments;return Object(S.jsxs)(l.a,{sxStyle:{"&:not(:last-of-type)":{marginBottom:8}},title:Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",children:[Object(S.jsx)(j.a,{sx:{width:44,height:44},src:a.profilePic}),Object(S.jsxs)(d.a,{ml:3.5,children:[Object(S.jsx)(d.a,{component:"h4",mb:.5,children:a.name}),Object(S.jsx)(d.a,{component:"p",color:"text.secondary",fontSize:14,children:Object(D.b)(c)})]})]}),action:Object(S.jsx)(se.a,{sx:{padding:1.5},"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",size:"large",children:Object(S.jsx)(Oe.a,{})}),children:[i?Object(S.jsx)(d.a,{component:"p",mb:2,fontSize:14,children:i}):null,Object(S.jsx)(ve,{attachments:r}),Object(S.jsx)(Re,{post:t}),Object(S.jsx)(Le,{postId:t.id,wallData:n}),s.length>0&&Object(S.jsx)(We,{comments:s})]})},Ee=function(){var e=Object(s.useDispatch)();Object(i.useEffect)((function(){e(Object(me.c)())}),[e]);var t=Object(s.useSelector)((function(e){return e.wall.postList})),n=Object(s.useSelector)((function(e){return e.wall.wallData}));return Object(S.jsx)(P.a,{data:t,renderRow:function(e,t){return Object(S.jsx)(Ae,{post:e,wallData:n},t)}})},Ve=n(1626),Fe=n(70),Ue=n(1644),qe=n.n(Ue),Je=n(438),Ke=n(361),Xe=n(615),Ye=n(411),$e=Object(y.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center","&:not(:last-of-type)":{marginBottom:16},"&:first-of-type":{alignItems:"flex-start"},"&:hover $editBtnRoot":{opacity:1,visibility:"visible"},"&:hover a, &:focus a":{color:t.palette.primary.main},"& a":{textDecoration:"none",wordBreak:"break-all",color:t.palette.text.primary},"& .material-icons":{display:"block"}}})),Ge=function(e){switch(e){case"person":default:return Object(S.jsx)(Je.g,{});case"phone":return Object(S.jsx)(Ke.h,{});case"email":return Object(S.jsx)(Je.d,{});case"error":return Object(S.jsx)(Ke.f,{});case"thumb":return Object(S.jsx)(Xe.e,{});case"public":return Object(S.jsx)(Ye.f,{})}},Qe=function(e){var t=e.item;return Object(S.jsxs)($e,{children:[Object(S.jsx)(d.a,{component:"span",sx:{mr:3.5,fontSize:20},children:Ge(t.icon)}),function(){switch(t.linkType){case"link":return Object(S.jsx)("a",{href:t.text,children:t.text});case"phone":return Object(S.jsx)("a",{href:"tel:".concat(t.text),children:t.text});case"email":return Object(S.jsx)("a",{href:"mailto:".concat(t.text),children:t.text});default:return Object(S.jsx)(d.a,{component:"p",children:t.text})}}(),Object(S.jsx)(d.a,{component:"span",ml:"auto",mr:-2,mt:-2,children:Object(S.jsx)(se.a,{sx:{color:"primary.main",padding:2,opacity:0,visibility:"hidden","& .MuiSvgIcon-root":{fontSize:20}},size:"large",children:Object(S.jsx)(qe.a,{})})})]})},Ze=function(e){var t=e.about,n=Object(T.a)().messages;return Object(S.jsx)(l.a,{sxStyle:{mb:8},title:n["wall.about"],action:n["wall.editPageInfo"],children:Object(S.jsx)(P.a,{animation:"transition.slideRightBigIn",data:t,renderRow:function(e,t){return Object(S.jsx)(Qe,{item:e},t)}})})},et=function(e){var t=e.data,n=t.icon,a=t.title,i=t.subTitle,c=t.mediaImg,r=Object(T.a)().messages;return Object(S.jsxs)(l.a,{sxStyle:{mb:8},contentStyle:{p:0,"&:last-of-type":{pb:0}},title:r["wall.suggestTeams"],action:r["common.viewAll"],footer:Object(S.jsx)(x.a,{sx:{width:"100%",height:46,borderRadius:0},color:"primary",startIcon:Object(S.jsx)(we.a,{}),children:Object(S.jsx)(v.a,{id:"wall.likeTeam"})}),footerStyle:{padding:0},children:[Object(S.jsxs)(d.a,{px:5,pt:3,pb:4,display:"flex",alignItems:"center",children:[Object(S.jsx)(j.a,{src:n,alt:"Face Book"}),Object(S.jsxs)(d.a,{ml:3.5,children:[Object(S.jsx)(b.a,{component:"h4",variant:"h4",children:a}),Object(S.jsx)(d.a,{component:"p",color:"text.secondary",children:i})]})]}),Object(S.jsx)(u.a,{sx:{height:180,width:"100%"},image:c,alt:"F man"})]})},tt=Object(y.a)("div")((function(e){return{position:"absolute",bottom:0,left:0,right:0,zIndex:1,padding:"30px 10px 16px",display:"flex",flexDirection:"column",alignItems:"center",color:e.theme.palette.common.white,"&:before":{content:'""',position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(180deg, rgba(120, 130, 146, 0) 7.29%, #788292 100%)",borderBottomLeftRadius:4,borderBottomRightRadius:4,opacity:.65},"& > *":{position:"relative",zIndex:3}}})),nt=function(e){var t=e.data,n=t.imgSrc,a=t.avatar,i=t.title;return Object(S.jsxs)(d.a,{sx:{position:"relative"},children:[Object(S.jsx)(u.a,{component:"img",sx:{width:"100%",minHeight:160,borderRadius:1},src:n,alt:"Stories 1"}),Object(S.jsxs)(tt,{children:[Object(S.jsx)(j.a,{sx:{width:40,height:40,border:"solid 2px primary.main",backgroundColor:"background.paper",padding:.5,marginBottom:1.25,"& .MuiAvatar-img":{borderRadius:"50%"}},src:a,alt:"Avatar"}),Object(S.jsx)(b.a,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%",textAlign:"center"},children:i})]})]})},at=function(e){var t=e.stories,n=Object(T.a)().messages;return Object(S.jsx)(l.a,{sxStyle:{mb:8},title:n["wall.stories"],action:n["common.viewAll"],children:Object(S.jsx)(d.a,{sx:{display:"flex",marginLeft:-1.25,marginRight:-1.25},children:t.map((function(e){return Object(S.jsx)(d.a,{sx:{width:"50%",paddingLeft:1.25,paddingRight:1.25},children:Object(S.jsx)(nt,{data:e})},e.id)}))})})},it=Object(y.a)("div")((function(){return{borderRadius:4,overflow:"hidden",width:56,"& img":{width:"100%",height:"100%",objectFit:"cover",display:"block"}}})),ct=Object(y.a)(d.a)((function(){return{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:w.a.MEDIUM,fontSize:12,mb:.5}})),rt=function(e){var t=e.data,n=t.imgSrc,a=t.subTitle,i=t.title;return Object(S.jsxs)(d.a,{className:"item-hover",sx:{position:"relative",display:"flex",px:5,py:2},children:[Object(S.jsx)(it,{children:Object(S.jsx)("img",{src:n,alt:"happen img"})}),Object(S.jsxs)(d.a,{sx:{paddingLeft:3.5,width:"calc(100% - 98px)"},children:[Object(S.jsx)(ct,{component:"p",color:"text.secondary",children:a}),Object(S.jsx)(b.a,{component:"h5",variant:"h5",sx:{fontWeight:w.a.SEMI_BOLD,marginBottom:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i}),Object(S.jsx)(ct,{color:"primary.main",component:"p",children:t.tag.map((function(e){return Object(S.jsxs)(d.a,{component:"span",mr:1,children:["#",e.name]},e.id)}))})]}),Object(S.jsx)(d.a,{sx:{marginLeft:2,width:34},children:Object(S.jsx)(se.a,{sx:{padding:1.25,marginTop:-2.5,marginRight:-3},size:"large",children:Object(S.jsx)(Oe.a,{})})})]})},st=function(e){var t=e.whatsHappen,n=Object(T.a)().messages;return Object(S.jsx)(l.a,{sxStyle:{mb:8},title:n["wall.whatsHappening"],action:n["common.viewAll"],contentStyle:{px:0,pt:2},children:Object(S.jsx)("div",{children:t.map((function(e){return Object(S.jsx)(rt,{data:e},e.id)}))})})},ot=Object(y.a)(r.a)((function(e){var t=e.theme;return Object(a.a)({"@media screen and (min-width: 600px) and (max-width: 1023px)":{flexBasis:"40%",maxWidth:"40%"},"@media screen and (min-width: 1200px) and (max-width: 1299px)":{flexBasis:"28%",maxWidth:"28%"}},t.breakpoints.down("sm"),{display:"none"})})),lt=Object(y.a)(r.a)((function(){return{"@media screen and (max-width: 1020px)":{display:"none"},"@media screen and (min-width: 1200px) and (max-width: 1299px)":{flexBasis:"28%",maxWidth:"28%"}}})),dt=Object(y.a)(r.a)((function(){return{height:"100%","@media screen and (min-width: 600px) and (max-width: 1023px)":{flexBasis:"60%",maxWidth:"60%"},"@media screen and (min-width: 1200px) and (max-width: 1299px)":{flexBasis:"44%",maxWidth:"44%"}}}));t.default=function(){var e=Object(s.useDispatch)();Object(i.useEffect)((function(){e(Object(o.Y)())}),[e]);var t=Object(s.useSelector)((function(e){return e.wall.wallData})),n=Object(T.a)().messages;return Object(S.jsx)(Ve.a,{title:n["sidebar.apps.wall"],cardStyle:{background:"none",boxShadow:"none",border:"0 none"},fullView:!0,children:t&&Object(S.jsxs)(c.a,{style:{height:"calc(100% + 32px)"},children:[Object(S.jsx)(ot,{item:!0,xs:12,sm:6,md:3,style:{height:"100%"},children:Object(S.jsxs)(Fe.a,{style:{height:"100%"},children:[Object(S.jsx)(k,{data:t.videoCall}),Object(S.jsx)(Ze,{about:t.about}),Object(S.jsx)(et,{data:t.suggestTeam}),Object(S.jsx)(E,{photos:t.photos}),Object(S.jsx)($,{suggestions:t.suggestions})]})}),Object(S.jsx)(dt,{item:!0,xs:12,sm:6,md:6,style:{height:"100%"},children:Object(S.jsxs)(Fe.a,{style:{height:"100%"},children:[Object(S.jsx)(pe,{}),Object(S.jsx)(Ee,{})]})}),Object(S.jsx)(lt,{item:!0,xs:12,sm:6,md:3,style:{height:"100%"},children:Object(S.jsxs)(Fe.a,{style:{height:"100%"},children:[Object(S.jsx)(at,{stories:t.stories}),Object(S.jsx)(st,{whatsHappen:t.whatsHappen}),Object(S.jsx)(K,{whoToFollow:t.whoToFollow}),Object(S.jsx)(B,{friendRequests:t.friendRequests}),Object(S.jsx)(F,{recentNews:t.recentNews})]})})]})})}}}]);
//# sourceMappingURL=24.217f0c5b.chunk.js.map