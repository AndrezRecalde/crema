(this.webpackJsonphister=this.webpackJsonphister||[]).push([[125],{2285:function(e,t,s){"use strict";s.r(t);var r=s(2),a=s(51),n=s(61),c=s(725),i=s(1458),o=s(60),l=s(206),j=s(223),d=s(154),x=s(1),h=function(e){var t=e.state,s=t.bgColor,r=t.icon,a=t.type,n=t.value;return Object(x.jsx)(d.a,{sxStyle:{backgroundColor:s,height:1},className:"card-hover",children:Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(l.a,{sx:{mr:4,alignSelf:"flex-start","& img":{display:"block",width:{xs:"auto",lg:50,xl:"auto"}}},children:Object(x.jsx)("img",{src:r,alt:"icon"})}),Object(x.jsxs)(l.a,{sx:{flex:1,color:"white"},children:[Object(x.jsx)(j.a,{component:"h3",variant:"inherit",sx:{color:"inherit"},children:n}),Object(x.jsx)(l.a,{sx:{mt:.5},component:"p",children:a})]})]})})},b=s(698),m=s(729),O=s(85),p=s(738),u=s(1538),f=s(1544),g=s(1543),y=s(240),C=s(277),v=s(548),D=[{month:"Jan",order:14e3,return:2400},{month:"Feb",order:28e3,return:4398},{month:"Mar",order:9800,return:2e3},{month:"Apr",order:11e3,return:1e4},{month:"May",order:7e3,return:4e3},{month:"Jun",order:12780,return:2300},{month:"Jul",order:8e3,return:4300},{month:"Aug",order:14e3,return:2400},{month:"Sep",order:13e3,return:1398},{month:"Oct",order:17e3,return:9800},{month:"Nov",order:12780,return:3908},{month:"Dec",order:18900,return:4800}],S=function(){return Object(x.jsx)(u.a,{width:"100%",height:280,children:Object(x.jsxs)(f.a,{data:D,margin:{top:15,right:0,left:0,bottom:0},children:[Object(x.jsx)(g.a,{strokeDasharray:"3 1",horizontal:!0,vertical:!1}),Object(x.jsx)(y.a,{dataKey:"month"}),Object(x.jsx)(C.a,{labelStyle:{color:"black"}}),Object(x.jsx)(v.a,{dataKey:"return",fill:"#F44D50",barSize:8}),Object(x.jsx)(v.a,{dataKey:"order",fill:"#0A8FDC",barSize:8})]})})},w=function(){var e=Object(b.a)().messages;return Object(x.jsx)(d.a,{title:e["eCommerce.saleStatics"],action:Object(x.jsx)(m.a,{menus:[e["dashboard.thisWeek"],e["dashboard.lastWeeks"],e["dashboard.lastMonth"]],defaultValue:e["dashboard.thisWeek"],onChange:function(e){console.log("data: ",e)}}),children:Object(x.jsxs)(O.e,{children:[Object(x.jsx)(i.a,{item:!0,xs:12,md:9,children:Object(x.jsx)(S,{})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:3,children:Object(x.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",height:1},children:[Object(x.jsx)(l.a,{sx:{mb:9,pl:{xl:8}},children:Object(x.jsx)(p.a,{activeColor:"#0A8FDC",pathColor:"#F44D50",hidePercentage:!0,value:70,centerNode:Object(x.jsx)("img",{alt:"icon",src:"/assets/images/dashboard/application_icon.svg"}),thickness:2})}),Object(x.jsxs)(l.a,{sx:{display:"flex",justifyContent:"center"},children:[Object(x.jsxs)(l.a,{sx:{mr:6,display:"flex",alignItems:"center"},children:[Object(x.jsx)(l.a,{sx:{backgroundColor:"#0A8FDC",height:10,width:10,mr:2,borderRadius:"50%"}}),Object(x.jsx)(j.a,{sx:{fontSize:14},children:"Android"})]}),Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(l.a,{sx:{backgroundColor:"#F44D50",height:10,width:10,mr:2,borderRadius:"50%"}}),Object(x.jsx)(j.a,{sx:{fontSize:14},children:"IOS"})]})]})]})})]})})},k=function(){var e=Object(b.a)().messages;return Object(x.jsx)(d.a,{title:e["eCommerce.application"],sxStyle:{height:1},children:Object(x.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(x.jsx)(l.a,{sx:{mb:9},children:Object(x.jsx)(p.a,{activeColor:"#49BD65",hidePercentage:!0,value:70,centerNode:Object(x.jsx)("img",{alt:"icon",src:"/assets/images/dashboard/application_icon.svg"}),thickness:2})}),Object(x.jsxs)(l.a,{sx:{display:"flex",justifyContent:"center"},children:[Object(x.jsxs)(l.a,{sx:{mr:6,display:"flex",alignItems:"center"},children:[Object(x.jsx)(l.a,{sx:{backgroundColor:"#49BD65",height:10,width:10,mr:2,borderRadius:"50%"}}),Object(x.jsx)(j.a,{children:"Android"})]}),Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(l.a,{sx:{backgroundColor:"#d6d6d6",height:10,width:10,mr:2,borderRadius:"50%"}}),Object(x.jsx)(j.a,{children:"IOS"})]})]})]})})},M=s(1539),z=s(547),I=function(e){var t=e.id,s=e.graphData,r=e.strokeColor;return Object(x.jsx)(u.a,{width:"100%",height:50,children:Object(x.jsxs)(M.a,{data:s,margin:{top:5,right:0,left:0,bottom:0},children:[Object(x.jsx)("defs",{children:Object(x.jsxs)("linearGradient",{id:"colorPv"+t,x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(x.jsx)("stop",{offset:"5%",stopColor:r,stopOpacity:.15}),Object(x.jsx)("stop",{offset:"95%",stopColor:r,stopOpacity:.01})]})}),Object(x.jsx)(z.a,{type:"monotone",dataKey:"number",stroke:r,strokeWidth:3,fillOpacity:1,fill:"url(#".concat("colorPv"+t,")")})]})})},W=I;I.defaultProps={graphData:[]};var E=s(1716),N=s.n(E),P=s(1788),F=s.n(P),A=s(15),R=function(e){var t=e.data;return Object(x.jsx)(d.a,{className:"card-hover",children:Object(x.jsxs)(l.a,{sx:{display:"flex"},children:[Object(x.jsxs)(l.a,{sx:{flex:1,pr:3},children:[Object(x.jsx)(l.a,{component:"h3",sx:{mb:.5,fontSize:20},children:t.value}),Object(x.jsx)(l.a,{component:"p",sx:{color:"#737989"},children:t.type})]}),Object(x.jsxs)(l.a,{sx:{minWidth:160},children:[Object(x.jsx)(W,{id:t.id,graphData:t.graphData,growth:t.growth,strokeColor:t.strokeColor}),Object(x.jsxs)(l.a,{display:"flex",alignItems:"center",justifyContent:"center",fontWeight:A.a.BOLD,color:t.strokeColor,children:[t.growth>0?Object(x.jsx)(N.a,{style:{color:t.strokeColor}}):Object(x.jsx)(F.a,{style:{color:t.strokeColor}}),t.growth]})]})]})})},U=s(1650),B=s(1651),G=s(1652),L=s(1566),_=s(1649),K=function(){return Object(x.jsxs)(_.a,{sx:{"& th":{fontSize:13,padding:2,fontWeight:A.a.BOLD,"&:first-of-type":{pl:5},"&:last-of-type":{pr:5}}},children:[Object(x.jsx)(L.a,{children:"Order ID"}),Object(x.jsx)(L.a,{children:"Product"}),Object(x.jsx)(L.a,{children:"Customer"}),Object(x.jsx)(L.a,{children:"Delivery Date"}),Object(x.jsx)(L.a,{children:"Price"}),Object(x.jsx)(L.a,{children:"Status"}),Object(x.jsx)(L.a,{children:"Actions"})]})},V=s(718),J=s(110),$=s.n(J),H=function(e){var t=e.data,s=function(){switch(t.status){case"Pending":return"#F84E4E";case"Delivered":return"#43C888";default:return"#E2A72E"}};return Object(x.jsxs)(_.a,{sx:{"& .tableCell":{fontSize:13,padding:2,"&:first-of-type":{pl:5},"&:last-of-type":{pr:5}}},className:"item-hover",children:[Object(x.jsx)(L.a,{component:"th",scope:"row",className:"tableCell",children:Object(x.jsx)(l.a,{sx:{color:function(e){return e.palette.primary.main},borderBottom:function(e){return"1px solid ".concat(e.palette.primary.main)},display:"inline-block"},children:t.id})}),Object(x.jsx)(L.a,{align:"left",className:"tableCell",children:t.product}),Object(x.jsx)(L.a,{align:"left",className:"tableCell",children:t.customer}),Object(x.jsx)(L.a,{align:"left",className:"tableCell",children:t.date}),Object(x.jsx)(L.a,{align:"left",className:"tableCell",children:t.price}),Object(x.jsx)(L.a,{align:"left",className:"tableCell",children:Object(x.jsx)(l.a,{sx:{color:s(),backgroundColor:s()+"44",padding:"3px 10px",borderRadius:1,display:"inline-block"},children:t.status})}),Object(x.jsx)(L.a,{align:"right",className:"tableCell",children:Object(x.jsx)(V.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:null,children:Object(x.jsx)($.a,{})})})]},t.name)},T=s(1469),X=function(e){var t=e.orderData;return Object(x.jsx)(T.a,{children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(B.a,{children:Object(x.jsx)(K,{})}),Object(x.jsx)(G.a,{children:t.map((function(e){return Object(x.jsx)(H,{data:e},e.id)}))})]})})},Z=X;X.defaultProps={orderData:[]};var q=function(e){var t=e.recentOrders,s=Object(b.a)().messages;return Object(x.jsx)(d.a,{contentStyle:{px:0},title:s["eCommerce.recentOrders"],action:Object(x.jsx)(m.a,{menus:[s["dashboard.thisWeek"],s["dashboard.lastWeeks"],s["dashboard.lastMonth"]],defaultValue:s["dashboard.thisWeek"],onChange:function(e){console.log("data: ",e)}}),children:Object(x.jsx)(Z,{orderData:t})})},Q=function(){var e=Object(b.a)().messages;return Object(x.jsxs)(d.a,{title:e["eCommerce.revenue"],children:[Object(x.jsx)(l.a,{sx:{mb:6,py:3},children:Object(x.jsx)(p.a,{activeColor:"#0A8FDC",value:70,hidePercentage:!0,centerNode:Object(x.jsxs)(l.a,{children:[Object(x.jsxs)(l.a,{sx:{display:"flex",flexDirection:"row"},children:[Object(x.jsx)(l.a,{component:"span",sx:{fontSize:14,fontWeight:A.a.MEDIUM},children:"$"}),Object(x.jsx)(l.a,{component:"h3",sx:{color:"text.primary",fontSize:18,fontWeight:A.a.MEDIUM},children:"600"})]}),Object(x.jsx)(l.a,{component:"p",sx:{ml:2,fontSize:14,color:"text.secondary"},children:"Sales"})]}),thickness:2})}),Object(x.jsxs)(l.a,{sx:{display:"flex",justifyContent:"space-around"},children:[Object(x.jsxs)(l.a,{children:[Object(x.jsx)(l.a,{sx:{fontSize:18,mb:.5,fontWeight:A.a.BOLD},children:"$ 2,000"}),Object(x.jsx)(l.a,{sx:{color:"text.secondary"},children:"Target"})]}),Object(x.jsxs)(l.a,{children:[Object(x.jsx)(l.a,{sx:{fontSize:18,mb:.5,fontWeight:A.a.BOLD},children:"$ 1,500"}),Object(x.jsx)(l.a,{sx:{color:"text.secondary"},children:"Current"})]})]})]})},Y=function(){return Object(x.jsxs)(_.a,{sx:{"& th":{fontSize:13,padding:2,fontWeight:A.a.BOLD,"&:first-of-type":{pl:5},"&:last-of-type":{pr:5}}},children:[Object(x.jsx)(L.a,{children:"Name"}),Object(x.jsx)(L.a,{children:"Spend"}),Object(x.jsx)(L.a,{children:"Graph"})]})},ee=s(988),te=function(e){return Object(x.jsxs)(_.a,{sx:{"& td":{borderBottomColor:"#E5E4EA",fontSize:13,padding:2,"&:first-of-type":{pl:5},"&:last-of-type":{pr:5}}},className:"item-hover",children:[Object(x.jsx)(L.a,{children:Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(ee.a,{sx:{mr:3.5},src:e.data.icon}),Object(x.jsxs)(l.a,{sx:{fontSize:14,flex:1},children:[Object(x.jsx)(l.a,{sx:{mb:.5,fontWeight:A.a.MEDIUM},children:e.data.name}),Object(x.jsx)(l.a,{component:"p",sx:{color:"text.secondary"},children:e.data.description})]})]})}),Object(x.jsx)(L.a,{children:e.data.spent}),Object(x.jsxs)(L.a,{children:[e.data.growth?Object(x.jsx)("img",{src:"/assets/images/dashboard/growth_icon.svg",alt:"growth_icon"}):Object(x.jsx)("img",{src:"/assets/images/dashboard/decries_icon.svg",alt:"decries_icon"}),Object(x.jsx)(l.a,{component:"span",sx:{mx:2,color:e.data.growth?"#0A8FDC":"#F44D50"},children:e.data.graph}),Object(x.jsx)(l.a,{component:"span",sx:{color:"text.secondary"},children:e.data.growth?"Up":"Down"})]})]},e.data.name)},se=function(e){var t=e.marketingCampaign;return Object(x.jsx)(T.a,{sx:{maxHeight:500},children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(B.a,{children:Object(x.jsx)(Y,{})}),Object(x.jsx)(G.a,{children:t.map((function(e){return Object(x.jsx)(te,{data:e},e.id)}))})]})})},re=se;se.defaultProps={marketingCampaign:[]};var ae=function(e){var t=e.marketingCampaign,s=Object(b.a)().messages;return Object(x.jsx)(d.a,{title:s["eCommerce.marketingCampaign"],contentStyle:{px:0},children:Object(x.jsx)(re,{marketingCampaign:t})})},ne=s(70),ce=s(991),ie=s(990),oe=s(1562),le=function(e){var t=e.item;return Object(x.jsxs)(ie.a,{disableGutters:!0,className:"item-hover",sx:{paddingLeft:5,paddingRight:5},children:[Object(x.jsx)(ce.a,{sx:{minWidth:"auto",mr:4},children:Object(x.jsx)(ee.a,{sx:{width:48,height:48},src:t.image})}),Object(x.jsx)(oe.a,{primary:Object(x.jsx)(l.a,{component:"span",sx:{color:"text.primary",mb:.5,fontWeight:A.a.MEDIUM,fontSize:14},children:t.type}),secondary:Object(x.jsxs)(l.a,{component:"span",sx:{display:"flex",alignItems:"center",flexWrap:"wrap",fontSize:14,color:"primary.main"},children:[Object(x.jsx)(l.a,{component:"span",sx:{display:"block",mr:2},children:t.name}),Object(x.jsx)(l.a,{component:"span",sx:{display:"block",color:"text.secondary"},children:t.message})]})})]})},je=s(722),de=function(e){var t=Object(b.a)().messages;return Object(x.jsx)(d.a,{contentStyle:{px:0},title:t["eCommerce.notifications"],action:Object(x.jsx)(V.a,{sx:{height:30,width:30},"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:null,children:Object(x.jsx)($.a,{})}),children:Object(x.jsx)(ne.a,{sx:{maxHeight:386},children:Object(x.jsx)(je.a,{data:e.notifications,renderRow:function(e){return Object(x.jsx)(le,{item:e},e.id)}})})})},xe=function(e){var t=e.item,s=function(){return 0===t.orders?"#F84E4E":t.orders>0?"#43C888":void 0};return Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:{xs:"flex-start",sm:"center"},padding:"8px 20px","&:not(:last-of-type)":{borderBottom:"1px solid #ECEDF1"}},className:"item-hover",children:[Object(x.jsx)(ee.a,{sx:{mr:4,width:48,height:48},src:t.image}),Object(x.jsxs)(l.a,{sx:{flex:1,display:"flex",alignItems:{sm:"center"},flexDirection:{xs:"column",sm:"row"}},children:[Object(x.jsxs)(l.a,{sx:{fontSize:14,flex:1,mr:2},children:[Object(x.jsx)(l.a,{sx:{mb:.5,fontWeight:A.a.MEDIUM},children:t.name}),Object(x.jsx)(l.a,{sx:{fontSize:14,color:"text.secondary"},children:t.message})]}),Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(x.jsxs)(l.a,{sx:{color:s(),backgroundColor:s()+"44",padding:"3px 10px",borderRadius:"15px",display:"inline-block",whiteSpace:"nowrap"},children:[t.orders," orders"]}),Object(x.jsx)(V.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:null,children:Object(x.jsx)($.a,{})})]})]})]})},he=function(e){var t=Object(b.a)().messages;return Object(x.jsx)(d.a,{title:t["eCommerce.newCustomers"],contentStyle:{px:0},children:Object(x.jsx)(ne.a,{sx:{maxHeight:280},children:Object(x.jsx)(je.a,{data:e.newCustomers,renderRow:function(e){return Object(x.jsx)(xe,{listStyle:"paddingX",item:e},e.id)}})})})},be=function(e){var t=e.data;return Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center",py:2,px:5},className:"item-hover",children:[Object(x.jsx)(ee.a,{sx:{mr:4,height:70,width:70},variant:"rounded",alt:"",src:t.icon}),Object(x.jsxs)(l.a,{sx:{flex:1},children:[Object(x.jsx)(l.a,{component:"h3",sx:{color:"primary.main",fontWeight:A.a.MEDIUM,mb:.5,fontSize:14},children:t.name}),Object(x.jsx)(l.a,{component:"p",sx:{fontSize:14,color:"text.secondary",mb:1},children:t.description}),Object(x.jsxs)(l.a,{component:"p",sx:{fontSize:14,fontWeight:A.a.MEDIUM},children:["$",t.price,Object(x.jsxs)(l.a,{component:"span",sx:{textDecoration:"line-through",mb:1,fontSize:14,ml:3,color:"text.secondary"},children:["$",t.mrp]})]})]})]},t.id)},me=s(345),Oe=function(e){var t=e.popularProducts,s=Object(b.a)().messages;return Object(x.jsx)(d.a,{title:s["eCommerce.popularProducts"],contentStyle:{px:0},children:Object(x.jsx)(ne.a,{sx:{maxHeight:280},children:Object(x.jsx)(me.a,{data:t,responsive:{xs:1,sm:2,md:2,lg:2,xl:2},itemPadding:8,renderRow:function(e,t){return Object(x.jsx)(be,{data:e},"product-"+t)}})})})},pe=function(e){var t=e.item;return Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center",py:2,px:5},className:"item-hover",children:[Object(x.jsx)(l.a,{sx:{mr:3.5},children:Object(x.jsx)("img",{alt:"",style:{maxWidth:40,display:"block"},src:t.icon})}),Object(x.jsxs)(l.a,{sx:{flex:1},children:[Object(x.jsx)(l.a,{component:"h3",sx:{fontWeight:A.a.MEDIUM,mb:.5,fontSize:14},children:t.name}),Object(x.jsx)(l.a,{component:"p",sx:{color:"text.secondary",fontSize:14},children:t.value})]})]})},ue=function(e){var t=e.browserData,s=Object(b.a)().messages;return Object(x.jsx)(d.a,{title:s["eCommerce.browser"],contentStyle:{px:0},children:Object(x.jsx)(je.a,{data:t,renderRow:function(e,t){return Object(x.jsx)(pe,{item:e},t)}})})},fe=s(14),ge=s(1789),ye=function(e){var t=e.setTooltipContent;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(ge.ComposableMap,{"data-tip":"",projectionConfig:{scale:200},children:Object(x.jsx)(ge.ZoomableGroup,{children:Object(x.jsx)(ge.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(e){return e.geographies.map((function(e){return Object(x.jsx)(ge.Geography,{geography:e,onMouseEnter:function(){var s,r=e.properties,a=r.NAME,n=r.POP_EST;t("".concat(a," \u2014 ").concat((s=n)>1e9?Math.round(s/1e8)/10+"Bn":s>1e6?Math.round(s/1e5)/10+"M":Math.round(s/100)/10+"K"))},onMouseLeave:function(){t("")},style:{default:{fill:"#D6D6DA",outline:"none"},hover:{fill:"#0A8FDC",outline:"none"},pressed:{fill:"#0A8FDC",outline:"none"}}},e.rsmKey)}))}})})})})},Ce=Object(r.memo)(ye),ve=s(1955),De=function(){var e=Object(r.useState)(""),t=Object(fe.a)(e,2),s=t[0],a=t[1];return Object(x.jsxs)(l.a,{sx:{position:"relative",height:200},children:[Object(x.jsx)(Ce,{setTooltipContent:a}),Object(x.jsx)(ve.a,{children:s})]})},Se=function(e){var t=e.data;return Object(x.jsxs)(l.a,{sx:{display:"flex",alignItems:"center",py:2,px:5},className:"item-hover",children:[Object(x.jsx)(l.a,{sx:{mr:3,"& .img":{height:30,width:30,borderRadius:"50%",backgroundColor:"#fff",display:"block"}},children:Object(x.jsx)("img",{src:t.icon,alt:"icon"})}),Object(x.jsx)(l.a,{component:"h6",sx:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.country}),Object(x.jsx)(l.a,{sx:{backgroundColor:function(e){return e.palette.primary.main},borderRadius:"15px",color:"#fff",padding:"4px 12px"},children:t.value})]})},we=function(e){var t=e.siteVisitorsData,s=Object(b.a)().messages;return Object(x.jsx)(d.a,{sxStyle:{height:1},title:s["eCommerce.siteVisitorsStatistics"],contentStyle:{px:0},children:Object(x.jsxs)(O.e,{children:[Object(x.jsxs)(i.a,{item:!0,xs:12,md:3,children:[Object(x.jsx)(l.a,{component:"p",sx:{color:"text.secondary",pl:4,fontSize:14,fontWeight:A.a.MEDIUM},children:s["eCommerce.countries"]}),Object(x.jsx)(je.a,{data:t,renderRow:function(e){return Object(x.jsx)(Se,{data:e},e.id)}})]}),Object(x.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(De,{})}),Object(x.jsxs)(i.a,{item:!0,xs:12,md:3,children:[Object(x.jsx)(l.a,{component:"p",sx:{color:"text.secondary",pl:4,fontSize:14,fontWeight:A.a.MEDIUM},children:s["eCommerce.countries"]}),Object(x.jsx)(je.a,{data:t,renderRow:function(e){return Object(x.jsx)(Se,{data:e},"sec-c-"+e.id)}})]})]})})},ke=s(279);t.default=function(){var e=Object(a.useDispatch)();Object(r.useEffect)((function(){e(Object(n.G)())}),[e]);var t=Object(a.useSelector)((function(e){return e.dashboard.ecommerceData}));return Object(x.jsxs)(x.Fragment,{children:[t?Object(x.jsx)(ke.a,{animation:"transition.slideUpIn",delay:200,children:Object(x.jsxs)(o.a,{children:[t.salesState.map((function(e,t){return Object(x.jsx)(i.a,{item:!0,xs:12,sm:6,md:3,children:Object(x.jsx)(h,{state:e})},t)})),Object(x.jsx)(i.a,{item:!0,xs:12,md:9,children:Object(x.jsx)(w,{})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:3,children:Object(x.jsx)(k,{})}),t.reportCards.map((function(e,t){return Object(x.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(x.jsx)(R,{data:e})},t)})),Object(x.jsx)(i.a,{item:!0,xs:12,md:9,children:Object(x.jsx)(q,{recentOrders:t.recentOrders})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:3,children:Object(x.jsx)(Q,{})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(ae,{marketingCampaign:t.marketingCampaign})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(de,{notifications:t.notifications})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(he,{newCustomers:t.newCustomers})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(x.jsx)(Oe,{popularProducts:t.popularProducts})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:9,children:Object(x.jsx)(we,{siteVisitorsData:t.siteVisitors})}),Object(x.jsx)(i.a,{item:!0,xs:12,md:3,children:Object(x.jsx)(ue,{browserData:t.browser})})]})}):null,Object(x.jsx)(c.a,{})]})}}}]);
//# sourceMappingURL=125.b47900fb.chunk.js.map