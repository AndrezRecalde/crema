(this.webpackJsonphister=this.webpackJsonphister||[]).push([[122],{1624:function(e,t,a){"use strict";var c=a(6),n=a(13),o=a(3),i=a(2),r=(a(8),a(153)),s=a(145),l=a(726),d=a(86),j=a(1),x=Object(d.a)(Object(j.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(d.a)(Object(j.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=Object(d.a)(Object(j.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(18),O=a(25),h=a(17),u=a(101),f=a(98);function v(e){return Object(u.a)("MuiCheckbox",e)}var w=Object(f.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=Object(h.a)(l.a,{shouldForwardProp:function(e){return Object(h.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(p.a)(a.color))]]}})((function(e){var t,a=e.theme,n=e.ownerState;return Object(o.a)({color:a.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===n.color?a.palette.action.active:a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},Object(c.a)(t,"&.".concat(w.checked,", &.").concat(w.indeterminate),{color:a.palette[n.color].main}),Object(c.a)(t,"&.".concat(w.disabled),{color:a.palette.action.disabled}),t))})),k=Object(j.jsx)(m,{}),z=Object(j.jsx)(x,{}),S=Object(j.jsx)(b,{}),C=i.forwardRef((function(e,t){var a,c,s=Object(O.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?k:l,x=s.color,m=void 0===x?"primary":x,b=s.icon,h=void 0===b?z:b,u=s.indeterminate,f=void 0!==u&&u,w=s.indeterminateIcon,C=void 0===w?S:w,I=s.inputProps,P=s.size,M=void 0===P?"medium":P,q=Object(n.a)(s,g),B=f?C:h,H=f?C:d,R=Object(o.a)({},s,{color:m,indeterminate:f,size:M}),V=function(e){var t=e.classes,a=e.indeterminate,c=e.color,n={root:["root",a&&"indeterminate","color".concat(Object(p.a)(c))]},i=Object(r.a)(n,v,t);return Object(o.a)({},t,i)}(R);return Object(j.jsx)(y,Object(o.a)({type:"checkbox",inputProps:Object(o.a)({"data-indeterminate":f},I),icon:i.cloneElement(B,{fontSize:null!=(a=B.props.fontSize)?a:M}),checkedIcon:i.cloneElement(H,{fontSize:null!=(c=H.props.fontSize)?c:M}),ownerState:R,ref:t},q,{classes:V}))}));t.a=C},2242:function(e,t,a){"use strict";a.r(t);a(2);var c=a(1460),n=a(719),o=a(1624),i=a(134),r=a(116),s=a(34),l=a(206),d=a(15),j=a(536),x=a(279),m=a(115),b=a(1),p=r.a({name:r.c().required(Object(b.jsx)(s.a,{id:"validation.nameRequired"})),email:r.c().email(Object(b.jsx)(s.a,{id:"validation.emailFormat"})).required(Object(b.jsx)(s.a,{id:"validation.emailRequired"})),password:r.c().required(Object(b.jsx)(s.a,{id:"validation.passwordRequired"})),confirmPassword:r.c().required(Object(b.jsx)(s.a,{id:"validation.reTypePassword"}))});t.default=function(){return Object(b.jsx)(x.a,{animation:"transition.slideUpIn",delay:200,children:Object(b.jsx)(l.a,{sx:{pb:6,py:{xl:8},display:"flex",flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(b.jsxs)(c.a,{sx:{maxWidth:576,width:"100%",textAlign:"center",padding:{xs:8,lg:12,xl:"48px 64px"},overflow:"hidden",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},children:[Object(b.jsxs)(l.a,{sx:{mb:{xs:3,xl:4},display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(b.jsx)(l.a,{sx:{mr:2,".logo":{height:24}},children:Object(b.jsx)("img",{className:"logo",src:"/assets/images/logo-icon-large.png",alt:"crema",title:"crema"})}),Object(b.jsx)(l.a,{sx:{mb:1.5,fontWeight:d.a.BOLD,fontSize:20},children:Object(b.jsx)(s.a,{id:"common.signup"})})]}),Object(b.jsx)(i.c,{validateOnChange:!0,initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:p,onSubmit:function(e,t){var a=t.setErrors,c=t.resetForm;e.password!==e.confirmPassword?a({confirmPassword:Object(b.jsx)(s.a,{id:"validation.passwordMisMatch"})}):c()},children:function(e){var t=e.isSubmitting;return Object(b.jsxs)(i.b,{sx:{textAlign:"left"},noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(l.a,{sx:{mb:{xs:3,xl:4}},children:Object(b.jsx)(m.a,{label:Object(b.jsx)(s.a,{id:"common.name"}),name:"name",variant:"outlined",sx:{width:"100%"}})}),Object(b.jsx)(l.a,{sx:{mb:{xs:3,xl:4}},children:Object(b.jsx)(m.a,{label:Object(b.jsx)(s.a,{id:"common.email"}),name:"email",variant:"outlined",sx:{width:"100%"}})}),Object(b.jsx)(l.a,{sx:{mb:{xs:3,xl:4}},children:Object(b.jsx)(m.a,{label:Object(b.jsx)(s.a,{id:"common.password"}),name:"password",type:"password",variant:"outlined",sx:{width:"100%"}})}),Object(b.jsx)(l.a,{sx:{mb:{xs:3,xl:4}},children:Object(b.jsx)(m.a,{label:Object(b.jsx)(s.a,{id:"common.retypePassword"}),name:"confirmPassword",type:"password",variant:"outlined",sx:{width:"100%"}})}),Object(b.jsxs)(l.a,{sx:{mb:{xs:5,xl:6},display:"flex",flexWrap:"wrap",alignItems:"center"},children:[Object(b.jsx)(l.a,{sx:{ml:-3},children:Object(b.jsx)(o.a,{})}),Object(b.jsx)(l.a,{component:"span",sx:{mr:2,fontSize:14},children:Object(b.jsx)(s.a,{id:"common.iAgreeTo"})}),Object(b.jsx)(l.a,{component:"span",sx:{color:"primary.main",fontWeight:d.a.BOLD,fontSize:14,cursor:"pointer"},children:Object(b.jsx)(s.a,{id:"common.termConditions"})})]}),Object(b.jsx)(n.a,{variant:"contained",color:"primary",disabled:t,sx:{width:"100%",height:44},type:"submit",children:Object(b.jsx)(s.a,{id:"common.signup"})})]})}}),Object(b.jsxs)(l.a,{sx:{mt:{xs:3,xl:4},textAlign:"center",color:j.a[700],fontSize:14,fontWeight:d.a.BOLD},children:[Object(b.jsx)(l.a,{component:"span",sx:{mr:1},children:Object(b.jsx)(s.a,{id:"common.alreadyHaveAccount"})}),Object(b.jsx)(l.a,{component:"span",sx:{color:"primary.main",fontWeight:d.a.MEDIUM,cursor:"pointer"},children:Object(b.jsx)(s.a,{id:"common.signInHere"})})]})]})})})}}}]);
//# sourceMappingURL=122.3d619275.chunk.js.map