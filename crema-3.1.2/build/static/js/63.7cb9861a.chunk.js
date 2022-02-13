(this.webpackJsonphister=this.webpackJsonphister||[]).push([[63],{1649:function(e,t,n){"use strict";var o=n(6),c=n(3),a=n(13),i=n(2),r=(n(8),n(12)),s=n(153),l=n(145),d=n(724),j=n(25),x=n(17),b=n(101),h=n(98);function m(e){return Object(b.a)("MuiTableRow",e)}var p=Object(h.a)("MuiTableRow",["root","selected","hover","head","footer"]),O=n(1),u=["className","component","hover","selected"],f=Object(x.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.head&&t.head,n.footer&&t.footer]}})((function(e){var t,n=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(o.a)(t,"&.".concat(p.hover,":hover"),{backgroundColor:n.palette.action.hover}),Object(o.a)(t,"&.".concat(p.selected),{backgroundColor:Object(l.a)(n.palette.primary.main,n.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(l.a)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity)}}),t})),g=i.forwardRef((function(e,t){var n=Object(j.a)({props:e,name:"MuiTableRow"}),o=n.className,l=n.component,x=void 0===l?"tr":l,b=n.hover,h=void 0!==b&&b,p=n.selected,g=void 0!==p&&p,v=Object(a.a)(n,u),y=i.useContext(d.a),M=Object(c.a)({},n,{component:x,hover:h,selected:g,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),w=function(e){var t=e.classes,n={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(n,m,t)}(M);return Object(O.jsx)(f,Object(c.a)({as:x,ref:t,className:Object(r.default)(w.root,o),role:"tr"===x?null:"row",ownerState:M},v))}));t.a=g},1650:function(e,t,n){"use strict";var o=n(13),c=n(3),a=n(2),i=(n(8),n(12)),r=n(153),s=n(733),l=n(25),d=n(17),j=n(101),x=n(98);function b(e){return Object(j.a)("MuiTable",e)}Object(x.a)("MuiTable",["root","stickyHeader"]);var h=n(1),m=["className","component","padding","size","stickyHeader"],p=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,n=e.ownerState;return Object(c.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(c.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"})})),O="table",u=a.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiTable"}),d=n.className,j=n.component,x=void 0===j?O:j,u=n.padding,f=void 0===u?"normal":u,g=n.size,v=void 0===g?"medium":g,y=n.stickyHeader,M=void 0!==y&&y,w=Object(o.a)(n,m),D=Object(c.a)({},n,{component:x,padding:f,size:v,stickyHeader:M}),S=function(e){var t=e.classes,n={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(r.a)(n,b,t)}(D),A=a.useMemo((function(){return{padding:f,size:v,stickyHeader:M}}),[f,v,M]);return Object(h.jsx)(s.a.Provider,{value:A,children:Object(h.jsx)(p,Object(c.a)({as:x,role:x===O?null:"table",ref:t,className:Object(i.default)(S.root,d),ownerState:D},w))})}));t.a=u},1651:function(e,t,n){"use strict";var o=n(3),c=n(13),a=n(2),i=(n(8),n(12)),r=n(153),s=n(724),l=n(25),d=n(17),j=n(101),x=n(98);function b(e){return Object(j.a)("MuiTableHead",e)}Object(x.a)("MuiTableHead",["root"]);var h=n(1),m=["className","component"],p=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),O={variant:"head"},u="thead",f=a.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiTableHead"}),a=n.className,d=n.component,j=void 0===d?u:d,x=Object(c.a)(n,m),f=Object(o.a)({},n,{component:j}),g=function(e){var t=e.classes;return Object(r.a)({root:["root"]},b,t)}(f);return Object(h.jsx)(s.a.Provider,{value:O,children:Object(h.jsx)(p,Object(o.a)({as:j,className:Object(i.default)(g.root,a),ref:t,role:j===u?null:"rowgroup",ownerState:f},x))})}));t.a=f},1652:function(e,t,n){"use strict";var o=n(3),c=n(13),a=n(2),i=(n(8),n(12)),r=n(153),s=n(724),l=n(25),d=n(17),j=n(101),x=n(98);function b(e){return Object(j.a)("MuiTableBody",e)}Object(x.a)("MuiTableBody",["root"]);var h=n(1),m=["className","component"],p=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),O={variant:"body"},u="tbody",f=a.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiTableBody"}),a=n.className,d=n.component,j=void 0===d?u:d,x=Object(c.a)(n,m),f=Object(o.a)({},n,{component:j}),g=function(e){var t=e.classes;return Object(r.a)({root:["root"]},b,t)}(f);return Object(h.jsx)(s.a.Provider,{value:O,children:Object(h.jsx)(p,Object(o.a)({className:Object(i.default)(g.root,a),as:j,ref:t,role:j===u?null:"rowgroup",ownerState:f},x))})}));t.a=f},1681:function(e,t,n){"use strict";t.a={company:{name:"Crema Admin",address1:"A-22, Garvit Complex",address2:"Pune(MH), India",phone:"(+91)-1234567890"},client:{name:"Mr. John Doe",phone:"(+91)-1234567890",email:"john123doe@xyz.com"},invoice:{id:"$323892938",date:"05/10/2019",dueDate:"05/10/2020"},products:[{id:1,item:"Logo Design",desc:"Lorem Ipsum is simply dummy text of the printing",type:"FIXED PRICE",quantity:"02",price:300},{id:2,item:"Stationary Design",desc:"Lorem Ipsum is simply dummy text of the printing",type:"$20/HOUR",quantity:"5 Hours",price:100},{id:3,item:"Logo Design",desc:"Lorem Ipsum is simply dummy text of the printing",type:"FIXED PRICE",quantity:"02",price:300}],subTotal:1e3,rebate:200,total:800}},2357:function(e,t,n){"use strict";n.r(t);n(2);var o=n(1460),c=n(206),a=n(34),i=n(1681),r=n(223),s=n(15),l=n(514),d=n(53),j=n(1),x=function(){var e=Object(d.c)().theme;return Object(j.jsxs)(c.a,{sx:{pt:2,pb:{xs:6,sm:8,xl:10},mb:{xl:8},display:"flex",flexDirection:{xs:"column",lg:"row"},alignItems:{lg:"center"}},children:[Object(j.jsx)(c.a,{sx:{mr:{lg:10},mb:{xs:8,lg:0},alignSelf:{xs:"center",lg:"flex-start"},display:"inline-block","& svg":{height:80,width:{xs:60,sm:100}}},children:Object(j.jsx)(l.a,{fill:e.palette.primary.main})}),Object(j.jsxs)(c.a,{sx:{mx:-3,color:"text.secondary",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",flex:1},children:[Object(j.jsxs)(c.a,{sx:{px:3,mb:{xs:3,sm:0},textAlign:{xs:"center",sm:"left"},minWidth:200},children:[Object(j.jsx)(c.a,{component:"h3",sx:{color:"text.secondary",mb:1,fontWeight:s.a.BOLD,fontSize:16},children:i.a.company.name}),Object(j.jsx)(r.a,{component:"p",sx:{mb:1},children:i.a.company.address1}),Object(j.jsx)(r.a,{component:"p",sx:{mb:1},children:i.a.company.address2}),Object(j.jsxs)(r.a,{component:"p",sx:{mb:1},children:["Phone: ",i.a.company.phone]})]}),Object(j.jsxs)(c.a,{sx:{px:3,mb:{xs:3,sm:0},textAlign:{xs:"center",lg:"left"},minWidth:200},children:[Object(j.jsx)(c.a,{sx:{fontSize:16,color:"text.secondary",mb:1,fontWeight:s.a.BOLD},component:"h3",children:Object(j.jsx)(a.a,{id:"invoice.client"})}),Object(j.jsx)(r.a,{component:"p",sx:{mb:1},children:i.a.client.name}),Object(j.jsx)(r.a,{component:"p",sx:{mb:1},children:i.a.client.phone}),Object(j.jsx)(r.a,{component:"p",sx:{mb:1},children:i.a.client.email})]}),Object(j.jsxs)(c.a,{sx:{px:3,mb:{xs:3,sm:0},textAlign:{xs:"center",sm:"right",lg:"left"},minWidth:200},children:[Object(j.jsx)(c.a,{component:"h3",sx:{mb:1,color:"text.secondary",fontWeight:s.a.BOLD,fontSize:16},children:Object(j.jsx)(a.a,{id:"invoice.invoice"})}),Object(j.jsxs)(r.a,{component:"p",sx:{mb:1,fontWeight:s.a.MEDIUM},children:[Object(j.jsx)(a.a,{id:"invoice.id"}),": ",i.a.invoice.id]}),Object(j.jsxs)(r.a,{component:"p",sx:{mb:1},children:[Object(j.jsx)(a.a,{id:"invoice.issued"}),": ",i.a.invoice.date]}),Object(j.jsxs)(r.a,{component:"p",sx:{mb:1,fontWeight:s.a.MEDIUM},children:[Object(j.jsx)(a.a,{id:"invoice.dueOn"}),": ",i.a.invoice.dueDate]})]})]})]})},b=n(17),h=n(1651),m=n(1652),p=n(1650),O=n(1566),u=n(1649),f=function(){return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(O.a,{children:Object(j.jsx)(c.a,{sx:{color:"text.secondary",fontSize:13,fontWeight:s.a.BOLD},children:Object(j.jsx)(a.a,{id:"invoice.itemDesc"})})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(c.a,{sx:{color:"text.secondary",textAlign:"right",fontSize:13,fontWeight:s.a.BOLD},children:Object(j.jsx)(a.a,{id:"invoice.assignment"})})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(c.a,{sx:{color:"text.secondary",textAlign:"right",fontSize:13,fontWeight:s.a.BOLD},children:Object(j.jsx)(a.a,{id:"invoice.quantity"})})}),Object(j.jsx)(O.a,{children:Object(j.jsx)(c.a,{sx:{color:"text.secondary",textAlign:"right",fontSize:13,fontWeight:s.a.BOLD},children:Object(j.jsx)(a.a,{id:"ecommerce.exclusivePrice"})})})]})},g=function(e){var t=e.product;return Object(j.jsxs)(u.a,{children:[Object(j.jsxs)(O.a,{component:"th",scope:"row",children:[Object(j.jsx)(c.a,{sx:{mb:2,fontSize:13,fontWeight:s.a.MEDIUM},children:t.item}),Object(j.jsx)(c.a,{component:"p",sx:{color:"text.secondary",mb:0},children:t.desc})]}),Object(j.jsx)(O.a,{sx:{verticalAlign:"top"},children:Object(j.jsx)(c.a,{sx:{mb:2,textAlign:"right",fontSize:13,fontWeight:s.a.MEDIUM},children:t.type})}),Object(j.jsx)(O.a,{sx:{verticalAlign:"top"},children:Object(j.jsx)(c.a,{sx:{mb:2,textAlign:"right",fontSize:13,fontWeight:s.a.MEDIUM},children:t.quantity})}),Object(j.jsx)(O.a,{sx:{verticalAlign:"top"},children:Object(j.jsxs)(c.a,{sx:{mb:2,textAlign:"right",fontSize:13,fontWeight:s.a.MEDIUM},children:["$",t.price]})})]})},v=Object(b.a)(p.a)((function(){return{"& > thead > tr > th, & > tbody > tr > th, & > tfoot > tr > th, & > thead > tr > td, & > tbody > tr > td, & > tfoot > tr > td":{padding:8}}})),y=function(){return Object(j.jsxs)(v,{children:[Object(j.jsx)(h.a,{children:Object(j.jsx)(f,{})}),Object(j.jsx)(m.a,{children:i.a.products.map((function(e){return Object(j.jsx)(g,{product:e},e.id)}))})]})},M=n(731),w=n(279);t.default=function(){return Object(j.jsx)(w.a,{animation:"transition.slideUpIn",delay:200,children:Object(j.jsx)(c.a,{sx:{flex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(j.jsx)(c.a,{sx:{flex:1,maxWidth:900,width:"100%"},children:Object(j.jsxs)(o.a,{sx:{p:{xs:6,xl:8},minHeight:1e3,display:"flex",flexDirection:"column"},children:[Object(j.jsx)(x,{}),Object(j.jsx)(c.a,{sx:{mb:5},children:Object(j.jsx)(M.a,{children:Object(j.jsx)(y,{})})}),Object(j.jsxs)(c.a,{sx:{mt:"auto",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:{sm:"space-between"},borderTop:function(e){return"solid 1px ".concat(e.palette.divider)},pt:4},children:[Object(j.jsx)(c.a,{children:Object(j.jsx)(c.a,{component:"h4",sx:{mb:{xs:3,lg:4},color:"text.secondary",textAlign:"center",fontSize:16,fontWeight:s.a.REGULAR},children:Object(j.jsx)(a.a,{id:"invoice.thankYou"})})}),Object(j.jsx)(c.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(j.jsx)(M.a,{sxStyle:{width:{xs:"auto",sm:"100%"}},children:Object(j.jsx)(p.a,{children:Object(j.jsxs)(m.a,{children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(O.a,{colSpan:"3",component:"th",scope:"row",sx:{border:"0 none",p:1.5},children:Object(j.jsx)(c.a,{sx:{textAlign:"right",mr:10,color:"text.secondary",fontSize:13,fontWeight:s.a.MEDIUM},children:Object(j.jsx)(a.a,{id:"invoice.subTotal"})})}),Object(j.jsx)(O.a,{sx:{border:"0 none",p:1.5},children:Object(j.jsxs)(c.a,{sx:{color:"text.primary",textAlign:"right",fontSize:13,fontWeight:s.a.MEDIUM},children:["$",i.a.subTotal]})})]}),Object(j.jsxs)(u.a,{children:[Object(j.jsx)(O.a,{colSpan:"3",component:"th",scope:"row",sx:{border:"0 none",p:1.5},children:Object(j.jsx)(c.a,{sx:{color:"text.secondary",textAlign:"right",mr:10,fontSize:13,fontWeight:s.a.MEDIUM},children:Object(j.jsx)(a.a,{id:"invoice.rebate"})})}),Object(j.jsx)(O.a,{sx:{border:"0 none",p:1.5},children:Object(j.jsxs)(c.a,{sx:{color:"text.primary",textAlign:"right",fontSize:13,fontWeight:s.a.MEDIUM},children:["$",i.a.rebate]})})]}),Object(j.jsxs)(u.a,{children:[Object(j.jsx)(O.a,{colSpan:"3",component:"th",scope:"row",sx:{border:"0 none",p:1.5},children:Object(j.jsx)(c.a,{sx:{color:"text.secondary",textAlign:"right",mr:10,fontSize:13,fontWeight:s.a.MEDIUM},children:Object(j.jsx)(a.a,{id:"invoice.grandTotal"})})}),Object(j.jsx)(O.a,{sx:{border:"0 none",p:1.5},children:Object(j.jsxs)(c.a,{sx:{color:"text.primary",textAlign:"right",fontSize:13,fontWeight:s.a.MEDIUM},children:["$",i.a.total]})})]})]})})})})]})]})})})})}}}]);
//# sourceMappingURL=63.7cb9861a.chunk.js.map