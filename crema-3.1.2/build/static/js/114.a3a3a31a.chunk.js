(this.webpackJsonphister=this.webpackJsonphister||[]).push([[114],{1615:function(e,t,n){"use strict";var r=n(6),a=n(13),o=n(3),i=n(2),s=(n(8),n(151)),c=n(175),m=n(1441),l=n(465),p=n(17),d=n(25),h=n(1),u=["component","direction","spacing","divider","children"];function b(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var g=Object(p.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a=Object(o.a)({display:"flex"},Object(s.b)({theme:n},Object(s.d)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=Object(c.a)(n),m=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),p=Object(s.d)({values:t.direction,base:m}),d=Object(s.d)({values:t.spacing,base:m});a=Object(l.a)(a,Object(s.b)({theme:n},d,(function(e,n){return{"& > :not(style) + :not(style)":Object(r.a)({margin:0},"margin".concat((a=n?p[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),Object(c.d)(i,e))};var a})))}return a})),f=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiStack"}),r=Object(m.a)(n),i=r.component,s=void 0===i?"div":i,c=r.direction,l=void 0===c?"column":c,p=r.spacing,f=void 0===p?0:p,x=r.divider,y=r.children,j=Object(a.a)(r,u),O={direction:l,spacing:f};return Object(h.jsx)(g,Object(o.a)({as:s,ownerState:O,ref:t},j,{children:x?b(y,x):y}))}));t.a=f},2319:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(72),o=n(60),i=n(1458),s=n(38),c=n(5),m=n(206),l=n(17),p=n(604),d=n(28),h=n(14),u=n(13),b=n(3),g=n(153),f=n(25),x=n(151),y=n(175),j=n(465),O=n(466),v=n(12),M=(n(8),n(101)),w=n(98);function k(e){return Object(M.a)("MuiMasonry",e)}Object(w.a)("MuiMasonry",["root"]);var B=n(1),S=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],C=function(e){return Number(e.replace("px",""))},R=Object(l.a)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},a={};if(t.isSSR){for(var o={},i=Number(n.spacing(t.defaultSpacing).replace("px","")),s=1;s<=t.defaultColumns;s+=1)o["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return a.height=t.defaultHeight,a.margin=-i/2,a["& > *"]=Object(b.a)({},r["& > *"],o,{margin:i/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(i,"px)")}),Object(b.a)({},r,a)}var c=Object(x.d)({values:t.spacing,breakpoints:n.breakpoints.values}),m=Object(y.a)(n);r=Object(j.a)(r,Object(x.b)({theme:n},c,(function(e){var n=Number(e),r=Number(Object(y.d)(m,n).replace("px",""));return Object(b.a)({margin:-r/2,"& > *":{margin:r/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+r)})})));var l=Object(x.d)({values:t.columns,breakpoints:n.breakpoints.values});return r=Object(j.a)(r,Object(x.b)({theme:n},l,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),r="object"!==typeof c?Object(y.d)(m,Number(c)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(r,")")}}}))),"object"===typeof c&&(r=Object(j.a)(r,Object(x.b)({theme:n},c,(function(e,t){if(t){var n=Number(e),r=Object.keys(l).pop(),a=Object(y.d)(m,n),o="object"===typeof l?l[t]||l[r]:l,i="".concat((100/o).toFixed(2),"%");return{"& > *":{width:"calc(".concat(i," - ").concat(a,")")}}}return null})))),r})),I=r.forwardRef((function(e,t){var n=Object(f.a)({props:e,name:"MuiMasonry"}),a=n.children,o=n.className,i=n.component,s=void 0===i?"div":i,c=n.columns,m=void 0===c?4:c,l=n.spacing,p=void 0===l?1:l,x=n.defaultColumns,y=n.defaultHeight,j=n.defaultSpacing,M=Object(u.a)(n,S),w=r.useRef(),I=r.useState(),H=Object(h.a)(I,2),P=H[0],N=H[1],T=!P&&y&&void 0!==x&&void 0!==j,F=r.useState(T?x-1:0),L=Object(h.a)(F,2),E=L[0],z=L[1],A=Object(b.a)({},n,{spacing:p,columns:m,maxColumnHeight:P,defaultColumns:x,defaultHeight:y,defaultSpacing:j,isSSR:T}),D=function(e){var t=e.classes;return Object(g.a)({root:["root"]},k,t)}(A),J=r.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(e){var t,n,r,a,o,i,s,c,m,l;if(e[0].target.className.includes(D.root))t=e[0].target,r=e[0].contentRect.width,a=(null==(i=n=(null==(o=e[1])?void 0:o.target)||t.firstChild)||null==(s=i.contentRect)?void 0:s.width)||(null==(c=n)?void 0:c.clientWidth)||0;else n=e[0].target,a=e[0].contentRect.width,r=(null==(l=(t=(null==(m=e[1])?void 0:m.target)||n.parentElement).contentRect)?void 0:l.width)||t.clientWidth;if(0!==r&&0!==a&&t&&n){var p=window.getComputedStyle(n),h=C(p.marginLeft),u=C(p.marginRight),b=Math.round(r/(a+h+u)),g=new Array(b).fill(0),f=!1;if(t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!f){var t=window.getComputedStyle(e),n=C(t.marginTop),r=C(t.marginBottom),a=C(t.height)?Math.ceil(C(t.height))+n+r:0;if(0!==a){for(var o=0;o<e.childNodes.length;o+=1){var i=e.childNodes[o];if("IMG"===i.tagName&&0===i.clientHeight){f=!0;break}}if(!f){var s=g.indexOf(Math.min.apply(Math,Object(d.a)(g)));g[s]+=a;var c=s+1;e.style.order=c}}else f=!0}})),!f)N(Math.max.apply(Math,Object(d.a)(g))),z(b>0?b-1:0)}}})));r.useEffect((function(){var e=J.current;if(void 0!==e){var t=w.current;return t&&e&&(e.observe(t),t.firstChild&&e.observe(t.firstChild)),function(){return e?e.disconnect():{}}}}),[m,p,a]);var W=Object(O.a)(t,w),$={flexBasis:"100%",width:0,margin:0,padding:0},G=new Array(E).fill("").map((function(e,t){return Object(B.jsx)("span",{"data-class":"line-break",style:Object(b.a)({},$,{order:t+1})},t)}));return Object(B.jsxs)(R,Object(b.a)({as:s,className:Object(v.default)(D.root,o),ref:W,ownerState:A},M,{children:[a,G]}))})),H=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],P=Object(l.a)(p.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"})}));function N(){return Object(B.jsx)(m.a,{sx:{width:500,minHeight:393},children:Object(B.jsx)(I,{columns:4,spacing:1,children:H.map((function(e,t){return Object(B.jsx)(P,{sx:{height:e},children:t+1},t)}))})})}var T=n(1615),F=Object(l.a)(p.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",borderBottomLeftRadius:0,borderBottomRightRadius:0,display:"flex",alignItems:"center",justifyContent:"center"})}));function L(){return Object(B.jsx)(m.a,{sx:{width:500,minHeight:829},children:Object(B.jsx)(I,{columns:3,spacing:1,children:E.map((function(e,t){return Object(B.jsxs)(T.a,{children:[Object(B.jsx)(F,{children:t+1}),Object(B.jsx)("img",{src:"".concat(e.img,"?w=162&auto=format"),srcSet:"".concat(e.img,"?w=162&auto=format&dpr=2 2x"),alt:e.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4}})]},t)}))})})}var E=[{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",title:"Snacks"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383",title:"Tower"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",title:"Tree"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",title:"Camping Car"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",title:"Mountain"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}],z=[150,30,90,70,90,100,150,30,50,80],A=Object(l.a)(p.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"})}));function D(){return Object(B.jsx)(m.a,{sx:{width:500,minHeight:253},children:Object(B.jsx)(I,{columns:4,spacing:1,children:z.map((function(e,t){return Object(B.jsx)(A,{sx:{height:e},children:t+1},t)}))})})}var J=[150,30,90,70,90,100,150,30,50,80],W=Object(l.a)(p.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"})}));function $(){return Object(B.jsx)(m.a,{sx:{width:500,minHeight:253},children:Object(B.jsx)(I,{columns:{xs:3,sm:4},spacing:1,children:J.map((function(e,t){return Object(B.jsx)(W,{sx:{height:e},children:t+1},t)}))})})}var G=[150,30,90,70,90,100,150,30,50,80],U=Object(l.a)(p.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"})}));function _(){return Object(B.jsx)(m.a,{sx:{width:500,minHeight:377},children:Object(B.jsx)(I,{columns:3,spacing:3,children:G.map((function(e,t){return Object(B.jsx)(U,{sx:{height:e},children:t+1},t)}))})})}var q=[150,30,90,70,90,100,150,30,50,80],K=Object(l.a)(p.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"})}));function Q(){return Object(B.jsx)(m.a,{sx:{width:500,minHeight:377},children:Object(B.jsx)(I,{columns:3,spacing:{xs:1,sm:2,md:3},children:q.map((function(e,t){return Object(B.jsx)(K,{sx:{height:e},children:t+1},t)}))})})}var V=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],X=Object(l.a)(p.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"})}));function Y(){return Object(B.jsx)(m.a,{sx:{width:500,minHeight:393},children:Object(B.jsx)(I,{columns:4,spacing:1,defaultHeight:450,defaultColumns:4,defaultSpacing:1,children:V.map((function(e,t){return Object(B.jsx)(X,{sx:{height:e},children:t+1},t)}))})})}t.default=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(a.a,{title:"Masonry",description:"Masonry lays out contents of different sizes as blocks of the same width and variable height with configurable gaps.",refUrl:"https://mui.com/components/masonry/"}),Object(B.jsxs)(o.a,{children:[Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(s.a,{title:"FixedColumns",component:D,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport {styled} from '@mui/material/styles';\r\nimport Paper from '@mui/material/Paper';\r\nimport Masonry from '@mui/lab/Masonry';\r\n\r\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  color: theme.palette.text.secondary,\r\n  border: '1px solid black',\r\n  display: 'flex',\r\n  alignItems: 'center',\r\n  justifyContent: 'center',\r\n}));\r\n\r\nexport default function FixedColumns() {\r\n  return (\r\n    <Box sx={{width: 500, minHeight: 253}}>\r\n      <Masonry columns={4} spacing={1}>\r\n        {heights.map((height, index) => (\r\n          <Item key={index} sx={{height}}>\r\n            {index + 1}\r\n          </Item>\r\n        ))}\r\n      </Masonry>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"This example demonstrates the use of the columns to configure the number of columns of a Masonry."})}),Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(s.a,{title:"ResponsiveColumns",component:$,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport {styled} from '@mui/material/styles';\r\nimport Paper from '@mui/material/Paper';\r\nimport Masonry from '@mui/lab/Masonry';\r\n\r\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  color: theme.palette.text.secondary,\r\n  border: '1px solid black',\r\n  display: 'flex',\r\n  alignItems: 'center',\r\n  justifyContent: 'center',\r\n}));\r\n\r\nexport default function ResponsiveColumns() {\r\n  return (\r\n    <Box sx={{width: 500, minHeight: 253}}>\r\n      <Masonry columns={{xs: 3, sm: 4}} spacing={1}>\r\n        {heights.map((height, index) => (\r\n          <Item key={index} sx={{height}}>\r\n            {index + 1}\r\n          </Item>\r\n        ))}\r\n      </Masonry>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"columns accepts responsive values:"})}),Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(s.a,{title:"FixedSpacing",component:_,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport {styled} from '@mui/material/styles';\r\nimport Paper from '@mui/material/Paper';\r\nimport Masonry from '@mui/lab/Masonry';\r\n\r\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  color: theme.palette.text.secondary,\r\n  border: '1px solid black',\r\n  display: 'flex',\r\n  alignItems: 'center',\r\n  justifyContent: 'center',\r\n}));\r\n\r\nexport default function FixedSpacing() {\r\n  return (\r\n    <Box sx={{width: 500, minHeight: 377}}>\r\n      <Masonry columns={3} spacing={3}>\r\n        {heights.map((height, index) => (\r\n          <Item key={index} sx={{height}}>\r\n            {index + 1}\r\n          </Item>\r\n        ))}\r\n      </Masonry>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"This example demonstrates the use of the spacing to configure the spacing between items. It is important to note that the value provided to the spacing prop is multiplied by the themes spacing field."})}),Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(s.a,{title:"ResponsiveSpacing",component:Q,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport {styled} from '@mui/material/styles';\r\nimport Paper from '@mui/material/Paper';\r\nimport Masonry from '@mui/lab/Masonry';\r\n\r\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  color: theme.palette.text.secondary,\r\n  border: '1px solid black',\r\n  display: 'flex',\r\n  alignItems: 'center',\r\n  justifyContent: 'center',\r\n}));\r\n\r\nexport default function ResponsiveSpacing() {\r\n  return (\r\n    <Box sx={{width: 500, minHeight: 377}}>\r\n      <Masonry columns={3} spacing={{xs: 1, sm: 2, md: 3}}>\r\n        {heights.map((height, index) => (\r\n          <Item key={index} sx={{height}}>\r\n            {index + 1}\r\n          </Item>\r\n        ))}\r\n      </Masonry>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"spacing accepts responsive values:"})}),Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(s.a,{title:"BasicMasonry",component:N,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport {styled} from '@mui/material/styles';\r\nimport Paper from '@mui/material/Paper';\r\nimport Masonry from '@mui/lab/Masonry';\r\n\r\nconst heights = [\r\n  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,\r\n];\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  color: theme.palette.text.secondary,\r\n  border: '1px solid black',\r\n  display: 'flex',\r\n  alignItems: 'center',\r\n  justifyContent: 'center',\r\n}));\r\n\r\nexport default function BasicMasonry() {\r\n  return (\r\n    <Box sx={{width: 500, minHeight: 393}}>\r\n      <Masonry columns={4} spacing={1}>\r\n        {heights.map((height, index) => (\r\n          <Item key={index} sx={{height}}>\r\n            {index + 1}\r\n          </Item>\r\n        ))}\r\n      </Masonry>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"A simple example of a Masonry. Masonry is a container for one or more items. It can receive any element including <div /> and <img />."})}),Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(s.a,{title:"SSRMasonry",component:Y,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport {styled} from '@mui/material/styles';\r\nimport Paper from '@mui/material/Paper';\r\nimport Masonry from '@mui/lab/Masonry';\r\n\r\nconst heights = [\r\n  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,\r\n];\r\n\r\nconst Item = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  color: theme.palette.text.secondary,\r\n  border: '1px solid black',\r\n  display: 'flex',\r\n  alignItems: 'center',\r\n  justifyContent: 'center',\r\n}));\r\n\r\nexport default function SSRMasonry() {\r\n  return (\r\n    <Box sx={{width: 500, minHeight: 393}}>\r\n      <Masonry\r\n        columns={4}\r\n        spacing={1}\r\n        defaultHeight={450}\r\n        defaultColumns={4}\r\n        defaultSpacing={1}\r\n      >\r\n        {heights.map((height, index) => (\r\n          <Item key={index} sx={{height}}>\r\n            {index + 1}\r\n          </Item>\r\n        ))}\r\n      </Masonry>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"This example demonstrates the use of the defaultHeight, defaultColumns and defaultSpacing, which are used to support server-side rendering."})}),Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsx)(s.a,{title:"ImageMasonry",component:L,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Stack from '@mui/material/Stack';\r\nimport Paper from '@mui/material/Paper';\r\nimport Masonry from '@mui/lab/Masonry';\r\nimport {styled} from '@mui/material/styles';\r\n\r\nconst Label = styled(Paper)(({theme}) => ({\r\n  ...theme.typography.body2,\r\n  color: theme.palette.text.secondary,\r\n  border: '1px solid black',\r\n  borderBottomLeftRadius: 0,\r\n  borderBottomRightRadius: 0,\r\n  display: 'flex',\r\n  alignItems: 'center',\r\n  justifyContent: 'center',\r\n}));\r\n\r\nexport default function ImageMasonry() {\r\n  return (\r\n    <Box sx={{width: 500, minHeight: 829}}>\r\n      <Masonry columns={3} spacing={1}>\r\n        {itemData.map((item, index) => (\r\n          <Stack key={index}>\r\n            <Label>{index + 1}</Label>\r\n            <img\r\n              src={`${item.img}?w=162&auto=format`}\r\n              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}\r\n              alt={item.title}\r\n              loading='lazy'\r\n              style={{borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}\r\n            />\r\n          </Stack>\r\n        ))}\r\n      </Masonry>\r\n    </Box>\r\n  );\r\n}\r\n\r\nconst itemData = [\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',\r\n    title: 'Fern',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',\r\n    title: 'Snacks',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',\r\n    title: 'Mushrooms',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',\r\n    title: 'Tower',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',\r\n    title: 'Sea star',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',\r\n    title: 'Honey',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',\r\n    title: 'Basketball',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',\r\n    title: 'Breakfast',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',\r\n    title: 'Tree',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',\r\n    title: 'Burger',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',\r\n    title: 'Camera',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',\r\n    title: 'Coffee',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',\r\n    title: 'Camping Car',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',\r\n    title: 'Hats',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',\r\n    title: 'Tomato basil',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',\r\n    title: 'Mountain',\r\n  },\r\n  {\r\n    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',\r\n    title: 'Bike',\r\n  },\r\n];\r\n",noScrollbar:!0,description:"This example demonstrates the use of Masonry for images. Masonry orders its children by row. If youd like to order images by column, check out ImageList."})})]})]})}}}]);
//# sourceMappingURL=114.a3a3a31a.chunk.js.map