(this.webpackJsonphister=this.webpackJsonphister||[]).push([[88],{1615:function(r,e,n){"use strict";var t=n(6),a=n(13),o=n(3),i=n(2),s=(n(8),n(151)),c=n(175),l=n(1441),u=n(465),m=n(17),d=n(25),p=n(1),f=["component","direction","spacing","divider","children"];function x(r,e){var n=i.Children.toArray(r).filter(Boolean);return n.reduce((function(r,t,a){return r.push(t),a<n.length-1&&r.push(i.cloneElement(e,{key:"separator-".concat(a)})),r}),[])}var b=Object(m.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(r,e){return[e.root]}})((function(r){var e=r.ownerState,n=r.theme,a=Object(o.a)({display:"flex"},Object(s.b)({theme:n},Object(s.d)({values:e.direction,breakpoints:n.breakpoints.values}),(function(r){return{flexDirection:r}})));if(e.spacing){var i=Object(c.a)(n),l=Object.keys(n.breakpoints.values).reduce((function(r,n){return null==e.spacing[n]&&null==e.direction[n]||(r[n]=!0),r}),{}),m=Object(s.d)({values:e.direction,base:l}),d=Object(s.d)({values:e.spacing,base:l});a=Object(u.a)(a,Object(s.b)({theme:n},d,(function(r,n){return{"& > :not(style) + :not(style)":Object(t.a)({margin:0},"margin".concat((a=n?m[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),Object(c.d)(i,r))};var a})))}return a})),g=i.forwardRef((function(r,e){var n=Object(d.a)({props:r,name:"MuiStack"}),t=Object(l.a)(n),i=t.component,s=void 0===i?"div":i,c=t.direction,u=void 0===c?"column":c,m=t.spacing,g=void 0===m?0:m,h=t.divider,j=t.children,v=Object(a.a)(t,f),O={direction:u,spacing:g};return Object(p.jsx)(b,Object(o.a)({as:s,ownerState:O,ref:e},v,{children:h?x(j,h):j}))}));e.a=g},1664:function(r,e,n){"use strict";var t=n(66);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(n(94)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");e.default=i},1783:function(r,e,n){"use strict";var t=n(6),a=n(13),o=n(3),i=n(2),s=(n(8),n(12)),c=n(153),l=n(1456),u=n(18),m=n(25),d=n(101),p=n(98);function f(r){return Object(d.a)("MuiFab",r)}var x=Object(p.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge"]),b=n(17),g=n(1),h=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],j=Object(b.a)(l.a,{name:"MuiFab",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState;return[e.root,e[n.variant],e["size".concat(Object(u.a)(n.size))],"inherit"===n.color&&e.colorInherit,"primary"===n.color&&e.primary,"secondary"===n.color&&e.secondary]}})((function(r){var e,n=r.theme,a=r.ownerState;return Object(o.a)({},n.typography.button,(e={minHeight:36,transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:n.shadows[6],"&:active":{boxShadow:n.shadows[12]},color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],"&:hover":{backgroundColor:n.palette.grey.A100,"@media (hover: none)":{backgroundColor:n.palette.grey[300]},textDecoration:"none"}},Object(t.a)(e,"&.".concat(x.focusVisible),{boxShadow:n.shadows[6]}),Object(t.a)(e,"&.".concat(x.disabled),{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground}),e),"small"===a.size&&{width:40,height:40},"medium"===a.size&&{width:48,height:48},"extended"===a.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===a.variant&&"small"===a.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===a.variant&&"medium"===a.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===a.color&&{color:"inherit"})}),(function(r){var e=r.theme,n=r.ownerState;return Object(o.a)({},"primary"===n.color&&{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},"secondary"===n.color&&{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}})})),v=i.forwardRef((function(r,e){var n=Object(m.a)({props:r,name:"MuiFab"}),t=n.children,i=n.className,l=n.color,d=void 0===l?"default":l,p=n.component,x=void 0===p?"button":p,b=n.disabled,v=void 0!==b&&b,O=n.disableFocusRipple,y=void 0!==O&&O,P=n.focusVisibleClassName,C=n.size,B=void 0===C?"large":C,S=n.variant,k=void 0===S?"circular":S,R=Object(a.a)(n,h),L=Object(o.a)({},n,{color:d,component:x,disabled:v,disableFocusRipple:y,size:B,variant:k}),w=function(r){var e=r.color,n=r.variant,t=r.classes,a=r.size,o={root:["root",n,"size".concat(Object(u.a)(a)),"inherit"===e&&"colorInherit","primary"===e&&"primary","secondary"===e&&"secondary"]};return Object(c.a)(o,f,t)}(L);return Object(g.jsx)(j,Object(o.a)({className:Object(s.default)(w.root,i),component:x,disabled:v,focusRipple:!y,focusVisibleClassName:Object(s.default)(w.focusVisible,P),ownerState:L,ref:e},R,{children:t}))}));e.a=v},2284:function(r,e,n){"use strict";n.r(e);var t=n(2),a=n(72),o=n(60),i=n(1458),s=n(38),c=n(978),l=n(206),u=n(1);function m(){return Object(u.jsx)(l.a,{sx:{display:"flex"},children:Object(u.jsx)(c.a,{})})}var d=n(1615);function p(){return Object(u.jsxs)(d.a,{sx:{color:"grey.500"},spacing:2,direction:"row",children:[Object(u.jsx)(c.a,{color:"secondary"}),Object(u.jsx)(c.a,{color:"success"}),Object(u.jsx)(c.a,{color:"inherit"})]})}var f=n(14);function x(){var r=t.useState(0),e=Object(f.a)(r,2),n=e[0],a=e[1];return t.useEffect((function(){var r=setInterval((function(){a((function(r){return r>=100?0:r+10}))}),800);return function(){clearInterval(r)}}),[]),Object(u.jsxs)(d.a,{spacing:2,direction:"row",children:[Object(u.jsx)(c.a,{variant:"determinate",value:25}),Object(u.jsx)(c.a,{variant:"determinate",value:50}),Object(u.jsx)(c.a,{variant:"determinate",value:75}),Object(u.jsx)(c.a,{variant:"determinate",value:100}),Object(u.jsx)(c.a,{variant:"determinate",value:n})]})}var b=n(5),g=n(333),h=n(719),j=n(1783),v=n(344),O=n.n(v),y=n(1664),P=n.n(y);function C(){var r=t.useState(!1),e=Object(f.a)(r,2),n=e[0],a=e[1],o=t.useState(!1),i=Object(f.a)(o,2),s=i[0],m=i[1],d=t.useRef(),p=Object(b.a)({},s&&{bgcolor:g.a[500],"&:hover":{bgcolor:g.a[700]}});t.useEffect((function(){return function(){clearTimeout(d.current)}}),[]);var x=function(){n||(m(!1),a(!0),d.current=window.setTimeout((function(){m(!0),a(!1)}),2e3))};return Object(u.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsxs)(l.a,{sx:{m:1,position:"relative"},children:[Object(u.jsx)(j.a,{"aria-label":"save",color:"primary",sx:p,onClick:x,children:s?Object(u.jsx)(O.a,{}):Object(u.jsx)(P.a,{})}),n&&Object(u.jsx)(c.a,{size:68,sx:{color:g.a[500],position:"absolute",top:-6,left:-6,zIndex:1}})]}),Object(u.jsxs)(l.a,{sx:{m:1,position:"relative"},children:[Object(u.jsx)(h.a,{variant:"contained",sx:p,disabled:n,onClick:x,children:"Accept terms"}),n&&Object(u.jsx)(c.a,{size:24,sx:{color:g.a[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]})}var B=n(223);function S(r){return Object(u.jsxs)(l.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(u.jsx)(c.a,Object(b.a)({variant:"determinate"},r)),Object(u.jsx)(l.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsx)(B.a,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(r.value),"%")})})]})}function k(){var r=t.useState(10),e=Object(f.a)(r,2),n=e[0],a=e[1];return t.useEffect((function(){var r=setInterval((function(){a((function(r){return r>=100?0:r+10}))}),800);return function(){clearInterval(r)}}),[]),Object(u.jsx)(S,{value:n})}var R=n(1450);function L(){return Object(u.jsx)(l.a,{sx:{width:"100%"},children:Object(u.jsx)(R.a,{})})}function w(){return Object(u.jsxs)(d.a,{sx:{width:"100%",color:"grey.500"},spacing:2,children:[Object(u.jsx)(R.a,{color:"secondary"}),Object(u.jsx)(R.a,{color:"success"}),Object(u.jsx)(R.a,{color:"inherit"})]})}function I(){var r=t.useState(0),e=Object(f.a)(r,2),n=e[0],a=e[1];return t.useEffect((function(){var r=setInterval((function(){a((function(r){if(100===r)return 0;var e=10*Math.random();return Math.min(r+e,100)}))}),500);return function(){clearInterval(r)}}),[]),Object(u.jsx)(l.a,{sx:{width:"100%"},children:Object(u.jsx)(R.a,{variant:"determinate",value:n})})}function T(){var r=t.useState(0),e=Object(f.a)(r,2),n=e[0],a=e[1],o=t.useState(10),i=Object(f.a)(o,2),s=i[0],c=i[1],m=t.useRef((function(){}));return t.useEffect((function(){m.current=function(){if(n>100)a(0),c(10);else{var r=10*Math.random(),e=10*Math.random();a(n+r),c(n+r+e)}}})),t.useEffect((function(){var r=setInterval((function(){m.current()}),500);return function(){clearInterval(r)}}),[]),Object(u.jsx)(l.a,{sx:{width:"100%"},children:Object(u.jsx)(R.a,{variant:"buffer",value:n,valueBuffer:s})})}function z(r){return Object(u.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsx)(l.a,{sx:{width:"100%",mr:1},children:Object(u.jsx)(R.a,Object(b.a)({variant:"determinate"},r))}),Object(u.jsx)(l.a,{sx:{minWidth:35},children:Object(u.jsx)(B.a,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(r.value),"%")})})]})}function E(){var r=t.useState(10),e=Object(f.a)(r,2),n=e[0],a=e[1];return t.useEffect((function(){var r=setInterval((function(){a((function(r){return r>=100?10:r+10}))}),800);return function(){clearInterval(r)}}),[]),Object(u.jsx)(l.a,{sx:{width:"100%"},children:Object(u.jsx)(z,{value:n})})}var F=n(6),M=n(17),D=n(700),W=n(599),V=Object(M.a)(R.a)((function(r){var e,n=r.theme;return e={height:10,borderRadius:5},Object(F.a)(e,"&.".concat(W.a.colorPrimary),{backgroundColor:n.palette.grey["light"===n.palette.mode?200:800]}),Object(F.a)(e,"& .".concat(W.a.bar),{borderRadius:5,backgroundColor:"light"===n.palette.mode?"#1a90ff":"#308fe8"}),e}));function q(r){return Object(u.jsxs)(l.a,{sx:{position:"relative"},children:[Object(u.jsx)(c.a,Object(b.a)(Object(b.a)({variant:"determinate",sx:{color:function(r){return r.palette.grey["light"===r.palette.mode?200:800]}},size:40,thickness:4},r),{},{value:100})),Object(u.jsx)(c.a,Object(b.a)({variant:"indeterminate",disableShrink:!0,sx:Object(F.a)({color:function(r){return"light"===r.palette.mode?"#1a90ff":"#308fe8"},animationDuration:"550ms",position:"absolute",left:0},"& .".concat(D.a.circle),{strokeLinecap:"round"}),size:40,thickness:4},r))]})}function A(){return Object(u.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(u.jsx)(q,{}),Object(u.jsx)("br",{}),Object(u.jsx)(V,{variant:"determinate",value:50})]})}var N=n(980);function Q(){var r=t.useState(!1),e=Object(f.a)(r,2),n=e[0],a=e[1],o=t.useState("idle"),i=Object(f.a)(o,2),s=i[0],m=i[1],d=t.useRef();t.useEffect((function(){return function(){clearTimeout(d.current)}}),[]);return Object(u.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(u.jsx)(l.a,{sx:{height:40},children:Object(u.jsx)(N.a,{in:n,style:{transitionDelay:n?"800ms":"0ms"},unmountOnExit:!0,children:Object(u.jsx)(c.a,{})})}),Object(u.jsx)(h.a,{onClick:function(){a((function(r){return!r}))},sx:{m:2},children:n?"Stop loading":"Loading"}),Object(u.jsx)(l.a,{sx:{height:40},children:"success"===s?Object(u.jsx)(B.a,{children:"Success!"}):Object(u.jsx)(N.a,{in:"progress"===s,style:{transitionDelay:"progress"===s?"800ms":"0ms"},unmountOnExit:!0,children:Object(u.jsx)(c.a,{})})}),Object(u.jsx)(h.a,{onClick:function(){d.current&&clearTimeout(d.current),"idle"===s?(m("progress"),d.current=window.setTimeout((function(){m("success")}),2e3)):m("idle")},sx:{m:2},children:"idle"!==s?"Reset":"Simulate a load"})]})}function H(){return Object(u.jsx)(c.a,{disableShrink:!0})}e.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.a,{title:"Progress",description:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process",refUrl:"https://mui.com/components/progress/"}),Object(u.jsxs)(o.a,{children:[Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Circular indeterminate",component:m,source:"import * as React from 'react';\r\nimport CircularProgress from '@mui/material/CircularProgress';\r\nimport Box from '@mui/material/Box';\r\n\r\nexport default function CircularIndeterminate() {\r\n  return (\r\n    <Box sx={{display: 'flex'}}>\r\n      <CircularProgress />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Circular Color",component:p,source:"import * as React from 'react';\r\nimport Stack from '@mui/material/Stack';\r\nimport CircularProgress from '@mui/material/CircularProgress';\r\n\r\nexport default function CircularColor() {\r\n  return (\r\n    <Stack sx={{color: 'grey.500'}} spacing={2} direction='row'>\r\n      <CircularProgress color='secondary' />\r\n      <CircularProgress color='success' />\r\n      <CircularProgress color='inherit' />\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Circular Determinate",component:x,source:"import * as React from 'react';\r\nimport Stack from '@mui/material/Stack';\r\nimport CircularProgress from '@mui/material/CircularProgress';\r\n\r\nexport default function CircularDeterminate() {\r\n  const [progress, setProgress] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress((prevProgress) =>\r\n        prevProgress >= 100 ? 0 : prevProgress + 10,\r\n      );\r\n    }, 800);\r\n\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Stack spacing={2} direction='row'>\r\n      <CircularProgress variant='determinate' value={25} />\r\n      <CircularProgress variant='determinate' value={50} />\r\n      <CircularProgress variant='determinate' value={75} />\r\n      <CircularProgress variant='determinate' value={100} />\r\n      <CircularProgress variant='determinate' value={progress} />\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Circular Static",component:k,source:"import * as React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport CircularProgress from '@mui/material/CircularProgress';\r\nimport Typography from '@mui/material/Typography';\r\nimport Box from '@mui/material/Box';\r\n\r\nfunction CircularProgressWithLabel(props) {\r\n  return (\r\n    <Box sx={{position: 'relative', display: 'inline-flex'}}>\r\n      <CircularProgress variant='determinate' {...props} />\r\n      <Box\r\n        sx={{\r\n          top: 0,\r\n          left: 0,\r\n          bottom: 0,\r\n          right: 0,\r\n          position: 'absolute',\r\n          display: 'flex',\r\n          alignItems: 'center',\r\n          justifyContent: 'center',\r\n        }}\r\n      >\r\n        <Typography variant='caption' component='div' color='text.secondary'>\r\n          {`${Math.round(props.value)}%`}\r\n        </Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n\r\nCircularProgressWithLabel.propTypes = {\r\n  /**\r\n   * The value of the progress indicator for the determinate variant.\r\n   * Value between 0 and 100.\r\n   * @default 0\r\n   */\r\n  value: PropTypes.number.isRequired,\r\n};\r\n\r\nexport default function CircularStatic() {\r\n  const [progress, setProgress] = React.useState(10);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress((prevProgress) =>\r\n        prevProgress >= 100 ? 0 : prevProgress + 10,\r\n      );\r\n    }, 800);\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return <CircularProgressWithLabel value={progress} />;\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Linear Indeterminate",component:L,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport LinearProgress from '@mui/material/LinearProgress';\r\n\r\nexport default function LinearIndeterminate() {\r\n  return (\r\n    <Box sx={{width: '100%'}}>\r\n      <LinearProgress />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Linear Determinate",component:I,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport LinearProgress from '@mui/material/LinearProgress';\r\n\r\nexport default function LinearDeterminate() {\r\n  const [progress, setProgress] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress((oldProgress) => {\r\n        if (oldProgress === 100) {\r\n          return 0;\r\n        }\r\n        const diff = Math.random() * 10;\r\n        return Math.min(oldProgress + diff, 100);\r\n      });\r\n    }, 500);\r\n\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Box sx={{width: '100%'}}>\r\n      <LinearProgress variant='determinate' value={progress} />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Linear Buffer",component:T,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport LinearProgress from '@mui/material/LinearProgress';\r\n\r\nexport default function LinearBuffer() {\r\n  const [progress, setProgress] = React.useState(0);\r\n  const [buffer, setBuffer] = React.useState(10);\r\n\r\n  const progressRef = React.useRef(() => {});\r\n  React.useEffect(() => {\r\n    progressRef.current = () => {\r\n      if (progress > 100) {\r\n        setProgress(0);\r\n        setBuffer(10);\r\n      } else {\r\n        const diff = Math.random() * 10;\r\n        const diff2 = Math.random() * 10;\r\n        setProgress(progress + diff);\r\n        setBuffer(progress + diff + diff2);\r\n      }\r\n    };\r\n  });\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      progressRef.current();\r\n    }, 500);\r\n\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Box sx={{width: '100%'}}>\r\n      <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Linear With Value Label",component:E,source:"import * as React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport LinearProgress from '@mui/material/LinearProgress';\r\nimport Typography from '@mui/material/Typography';\r\nimport Box from '@mui/material/Box';\r\n\r\nfunction LinearProgressWithLabel(props) {\r\n  return (\r\n    <Box sx={{display: 'flex', alignItems: 'center'}}>\r\n      <Box sx={{width: '100%', mr: 1}}>\r\n        <LinearProgress variant='determinate' {...props} />\r\n      </Box>\r\n      <Box sx={{minWidth: 35}}>\r\n        <Typography variant='body2' color='text.secondary'>{`${Math.round(\r\n          props.value,\r\n        )}%`}</Typography>\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n\r\nLinearProgressWithLabel.propTypes = {\r\n  /**\r\n   * The value of the progress indicator for the determinate and buffer variants.\r\n   * Value between 0 and 100.\r\n   */\r\n  value: PropTypes.number.isRequired,\r\n};\r\n\r\nexport default function LinearWithValueLabel() {\r\n  const [progress, setProgress] = React.useState(10);\r\n\r\n  React.useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      setProgress((prevProgress) =>\r\n        prevProgress >= 100 ? 10 : prevProgress + 10,\r\n      );\r\n    }, 800);\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <Box sx={{width: '100%'}}>\r\n      <LinearProgressWithLabel value={progress} />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Linear Color",component:w,source:"import * as React from 'react';\r\nimport Stack from '@mui/material/Stack';\r\nimport LinearProgress from '@mui/material/LinearProgress';\r\n\r\nexport default function LinearColor() {\r\n  return (\r\n    <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>\r\n      <LinearProgress color='secondary' />\r\n      <LinearProgress color='success' />\r\n      <LinearProgress color='inherit' />\r\n    </Stack>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Circular Under Load",component:H,source:"import * as React from 'react';\r\nimport CircularProgress from '@mui/material/CircularProgress';\r\n\r\nexport default function CircularUnderLoad() {\r\n  return <CircularProgress disableShrink />;\r\n}\r\n",noScrollbar:!0,description:"When its not possible, you can leverage the disableShrink prop to mitigate the issue. See this issue. "})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"CustomizedProgressBars",component:A,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport Box from '@mui/material/Box';\r\nimport CircularProgress, {\r\n  circularProgressClasses,\r\n} from '@mui/material/CircularProgress';\r\nimport LinearProgress, {\r\n  linearProgressClasses,\r\n} from '@mui/material/LinearProgress';\r\n\r\nconst BorderLinearProgress = styled(LinearProgress)(({theme}) => ({\r\n  height: 10,\r\n  borderRadius: 5,\r\n  [`&.${linearProgressClasses.colorPrimary}`]: {\r\n    backgroundColor:\r\n      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],\r\n  },\r\n  [`& .${linearProgressClasses.bar}`]: {\r\n    borderRadius: 5,\r\n    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',\r\n  },\r\n}));\r\n\r\n// Inspired by the former Facebook spinners.\r\nfunction FacebookCircularProgress(props) {\r\n  return (\r\n    <Box sx={{position: 'relative'}}>\r\n      <CircularProgress\r\n        variant='determinate'\r\n        sx={{\r\n          color: (theme) =>\r\n            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],\r\n        }}\r\n        size={40}\r\n        thickness={4}\r\n        {...props}\r\n        value={100}\r\n      />\r\n      <CircularProgress\r\n        variant='indeterminate'\r\n        disableShrink\r\n        sx={{\r\n          color: (theme) =>\r\n            theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',\r\n          animationDuration: '550ms',\r\n          position: 'absolute',\r\n          left: 0,\r\n          [`& .${circularProgressClasses.circle}`]: {\r\n            strokeLinecap: 'round',\r\n          },\r\n        }}\r\n        size={40}\r\n        thickness={4}\r\n        {...props}\r\n      />\r\n    </Box>\r\n  );\r\n}\r\n\r\nexport default function CustomizedProgressBars() {\r\n  return (\r\n    <Box sx={{flexGrow: 1}}>\r\n      <FacebookCircularProgress />\r\n      <br />\r\n      <BorderLinearProgress variant='determinate' value={50} />\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Here are some examples of customizing the component. You can learn more about this in the overrides documentation page."})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"Circular Integration",component:C,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport CircularProgress from '@mui/material/CircularProgress';\r\nimport {green} from '@mui/material/colors';\r\nimport Button from '@mui/material/Button';\r\nimport Fab from '@mui/material/Fab';\r\nimport CheckIcon from '@mui/icons-material/Check';\r\nimport SaveIcon from '@mui/icons-material/Save';\r\n\r\nexport default function CircularIntegration() {\r\n  const [loading, setLoading] = React.useState(false);\r\n  const [success, setSuccess] = React.useState(false);\r\n  const timer = React.useRef();\r\n\r\n  const buttonSx = {\r\n    ...(success && {\r\n      bgcolor: green[500],\r\n      '&:hover': {\r\n        bgcolor: green[700],\r\n      },\r\n    }),\r\n  };\r\n\r\n  React.useEffect(() => {\r\n    return () => {\r\n      clearTimeout(timer.current);\r\n    };\r\n  }, []);\r\n\r\n  const handleButtonClick = () => {\r\n    if (!loading) {\r\n      setSuccess(false);\r\n      setLoading(true);\r\n      timer.current = window.setTimeout(() => {\r\n        setSuccess(true);\r\n        setLoading(false);\r\n      }, 2000);\r\n    }\r\n  };\r\n\r\n  return (\r\n    <Box sx={{display: 'flex', alignItems: 'center'}}>\r\n      <Box sx={{m: 1, position: 'relative'}}>\r\n        <Fab\r\n          aria-label='save'\r\n          color='primary'\r\n          sx={buttonSx}\r\n          onClick={handleButtonClick}\r\n        >\r\n          {success ? <CheckIcon /> : <SaveIcon />}\r\n        </Fab>\r\n        {loading && (\r\n          <CircularProgress\r\n            size={68}\r\n            sx={{\r\n              color: green[500],\r\n              position: 'absolute',\r\n              top: -6,\r\n              left: -6,\r\n              zIndex: 1,\r\n            }}\r\n          />\r\n        )}\r\n      </Box>\r\n      <Box sx={{m: 1, position: 'relative'}}>\r\n        <Button\r\n          variant='contained'\r\n          sx={buttonSx}\r\n          disabled={loading}\r\n          onClick={handleButtonClick}\r\n        >\r\n          Accept terms\r\n        </Button>\r\n        {loading && (\r\n          <CircularProgress\r\n            size={24}\r\n            sx={{\r\n              color: green[500],\r\n              position: 'absolute',\r\n              top: '50%',\r\n              left: '50%',\r\n              marginTop: '-12px',\r\n              marginLeft: '-12px',\r\n            }}\r\n          />\r\n        )}\r\n      </Box>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(s.a,{title:"DelayingAppearance",component:Q,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Fade from '@mui/material/Fade';\r\nimport Button from '@mui/material/Button';\r\nimport CircularProgress from '@mui/material/CircularProgress';\r\nimport Typography from '@mui/material/Typography';\r\n\r\nexport default function DelayingAppearance() {\r\n  const [loading, setLoading] = React.useState(false);\r\n  const [query, setQuery] = React.useState('idle');\r\n  const timerRef = React.useRef();\r\n\r\n  React.useEffect(\r\n    () => () => {\r\n      clearTimeout(timerRef.current);\r\n    },\r\n    [],\r\n  );\r\n\r\n  const handleClickLoading = () => {\r\n    setLoading((prevLoading) => !prevLoading);\r\n  };\r\n\r\n  const handleClickQuery = () => {\r\n    if (timerRef.current) {\r\n      clearTimeout(timerRef.current);\r\n    }\r\n\r\n    if (query !== 'idle') {\r\n      setQuery('idle');\r\n      return;\r\n    }\r\n\r\n    setQuery('progress');\r\n    timerRef.current = window.setTimeout(() => {\r\n      setQuery('success');\r\n    }, 2000);\r\n  };\r\n\r\n  return (\r\n    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>\r\n      <Box sx={{height: 40}}>\r\n        <Fade\r\n          in={loading}\r\n          style={{\r\n            transitionDelay: loading ? '800ms' : '0ms',\r\n          }}\r\n          unmountOnExit\r\n        >\r\n          <CircularProgress />\r\n        </Fade>\r\n      </Box>\r\n      <Button onClick={handleClickLoading} sx={{m: 2}}>\r\n        {loading ? 'Stop loading' : 'Loading'}\r\n      </Button>\r\n      <Box sx={{height: 40}}>\r\n        {query === 'success' ? (\r\n          <Typography>Success!</Typography>\r\n        ) : (\r\n          <Fade\r\n            in={query === 'progress'}\r\n            style={{\r\n              transitionDelay: query === 'progress' ? '800ms' : '0ms',\r\n            }}\r\n            unmountOnExit\r\n          >\r\n            <CircularProgress />\r\n          </Fade>\r\n        )}\r\n      </Box>\r\n      <Button onClick={handleClickQuery} sx={{m: 2}}>\r\n        {query !== 'idle' ? 'Reset' : 'Simulate a load'}\r\n      </Button>\r\n    </Box>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"There are 3 important limits to know around response time. The ripple effect of the ButtonBase component ensures that the user feels that the system is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep users flow of thought uninterrupted."})})]})]})}}}]);
//# sourceMappingURL=88.ccb3a29b.chunk.js.map