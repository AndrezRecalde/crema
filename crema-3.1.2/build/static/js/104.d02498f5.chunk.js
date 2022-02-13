(this.webpackJsonphister=this.webpackJsonphister||[]).push([[104],{1765:function(n,r,t){"use strict";var e=t(616),o=Object(e.a)();r.a=o},1881:function(n,r,t){"use strict";var e=t(1013),o=Object(e.a)();r.a=o},2342:function(n,r,t){"use strict";t.r(r);var e=t(2),o=t(72),a=t(60),i=t(1458),l=t(38),d=t(14),s=t(206),c=t(719),p=t(223),m=t(981),u=t(1),b={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function h(){var n=e.useState(!1),r=Object(d.a)(n,2),t=r[0],o=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(c.a,{onClick:function(){return o(!0)},children:"Open modal"}),Object(u.jsx)(m.a,{open:t,onClose:function(){return o(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(u.jsxs)(s.a,{sx:b,children:[Object(u.jsx)(p.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),Object(u.jsx)(p.a,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})}var x,j,O=t(147),f=t(1765),y=t(1881),g=t(1470),B=Object(f.a)(g.a)(x||(x=Object(O.a)(["\n  position: fixed;\n  z-index: 1300;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),C=Object(f.a)("div")(j||(j=Object(O.a)(["\n  z-index: -1;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n"]))),k={width:400,bgcolor:"background.paper",border:"2px solid #000",p:2,px:4,pb:3};function M(){var n=e.useState(!1),r=Object(d.a)(n,2),t=r[0],o=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"button",onClick:function(){return o(!0)},children:"Open modal"}),Object(u.jsx)(B,{"aria-labelledby":"unstyled-modal-title","aria-describedby":"unstyled-modal-description",open:t,onClose:function(){return o(!1)},BackdropComponent:C,children:Object(u.jsxs)(y.a,{sx:k,children:[Object(u.jsx)("h2",{id:"unstyled-modal-title",children:"Text in a modal"}),Object(u.jsx)("p",{id:"unstyled-modal-description",children:"Aliquid amet deserunt earum!"})]})})]})}var v=t(5),w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3};function T(){var n=e.useState(!1),r=Object(d.a)(n,2),t=r[0],o=r[1],a=function(){o(!1)};return Object(u.jsxs)(e.Fragment,{children:[Object(u.jsx)(c.a,{onClick:function(){o(!0)},children:"Open Child Modal"}),Object(u.jsx)(m.a,{hideBackdrop:!0,open:t,onClose:a,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:Object(u.jsxs)(s.a,{sx:Object(v.a)(Object(v.a)({},w),{},{width:200}),children:[Object(u.jsx)("h2",{id:"child-modal-title",children:"Text in a child modal"}),Object(u.jsx)("p",{id:"child-modal-description",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}),Object(u.jsx)(c.a,{onClick:a,children:"Close Child Modal"})]})})]})}function S(){var n=e.useState(!1),r=Object(d.a)(n,2),t=r[0],o=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(c.a,{onClick:function(){o(!0)},children:"Open modal"}),Object(u.jsx)(m.a,{open:t,onClose:function(){o(!1)},"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:Object(u.jsxs)(s.a,{sx:Object(v.a)(Object(v.a)({},w),{},{width:400}),children:[Object(u.jsx)("h2",{id:"parent-modal-title",children:"Text in a modal"}),Object(u.jsx)("p",{id:"parent-modal-description",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),Object(u.jsx)(T,{})]})})]})}var R=t(985),D=t(980),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function z(){var n=e.useState(!1),r=Object(d.a)(n,2),t=r[0],o=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(c.a,{onClick:function(){return o(!0)},children:"Open modal"}),Object(u.jsx)(m.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:function(){return o(!1)},closeAfterTransition:!0,BackdropComponent:R.a,BackdropProps:{timeout:500},children:Object(u.jsx)(D.a,{in:t,children:Object(u.jsxs)(s.a,{sx:F,children:[Object(u.jsx)(p.a,{id:"transition-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),Object(u.jsx)(p.a,{id:"transition-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})})]})}r.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{title:"Modal",description:"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.",refUrl:"https://mui.com/components/modal/"}),Object(u.jsxs)(a.a,{children:[Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(l.a,{title:"Basic Modal",component:h,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Button from '@mui/material/Button';\r\nimport Typography from '@mui/material/Typography';\r\nimport Modal from '@mui/material/Modal';\r\n\r\nconst style = {\r\n  position: 'absolute',\r\n  top: '50%',\r\n  left: '50%',\r\n  transform: 'translate(-50%, -50%)',\r\n  width: 400,\r\n  bgcolor: 'background.paper',\r\n  border: '2px solid #000',\r\n  boxShadow: 24,\r\n  p: 4,\r\n};\r\n\r\nexport default function BasicModal() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const handleOpen = () => setOpen(true);\r\n  const handleClose = () => setOpen(false);\r\n\r\n  return (\r\n    <div>\r\n      <Button onClick={handleOpen}>Open modal</Button>\r\n      <Modal\r\n        open={open}\r\n        onClose={handleClose}\r\n        aria-labelledby='modal-modal-title'\r\n        aria-describedby='modal-modal-description'\r\n      >\r\n        <Box sx={style}>\r\n          <Typography id='modal-modal-title' variant='h6' component='h2'>\r\n            Text in a modal\r\n          </Typography>\r\n          <Typography id='modal-modal-description' sx={{mt: 2}}>\r\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\r\n          </Typography>\r\n        </Box>\r\n      </Modal>\r\n    </div>\r\n  );\r\n}\r\n",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(l.a,{title:"ModalUnstyledDemo",component:M,source:"import * as React from 'react';\r\nimport {styled, Box} from '@mui/system';\r\nimport ModalUnstyled from '@mui/base/ModalUnstyled';\r\n\r\nconst StyledModal = styled(ModalUnstyled)`\r\n  position: fixed;\r\n  z-index: 1300;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n`;\r\n\r\nconst Backdrop = styled('div')`\r\n  z-index: -1;\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  -webkit-tap-highlight-color: transparent;\r\n`;\r\n\r\nconst style = {\r\n  width: 400,\r\n  bgcolor: 'background.paper',\r\n  border: '2px solid #000',\r\n  p: 2,\r\n  px: 4,\r\n  pb: 3,\r\n};\r\n\r\nexport default function ModalUnstyledDemo() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const handleOpen = () => setOpen(true);\r\n  const handleClose = () => setOpen(false);\r\n\r\n  return (\r\n    <div>\r\n      <button type='button' onClick={handleOpen}>\r\n        Open modal\r\n      </button>\r\n      <StyledModal\r\n        aria-labelledby='unstyled-modal-title'\r\n        aria-describedby='unstyled-modal-description'\r\n        open={open}\r\n        onClose={handleClose}\r\n        BackdropComponent={Backdrop}\r\n      >\r\n        <Box sx={style}>\r\n          <h2 id='unstyled-modal-title'>Text in a modal</h2>\r\n          <p id='unstyled-modal-description'>Aliquid amet deserunt earum!</p>\r\n        </Box>\r\n      </StyledModal>\r\n    </div>\r\n  );\r\n}\r\n",description:"The modal also comes with an unstyled version. Its ideal for doing heavy customizations and minimizing bundle size.",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(l.a,{title:"Nested Modal",component:S,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport Modal from '@mui/material/Modal';\r\nimport Button from '@mui/material/Button';\r\n\r\nconst style = {\r\n  position: 'absolute',\r\n  top: '50%',\r\n  left: '50%',\r\n  transform: 'translate(-50%, -50%)',\r\n  width: 400,\r\n  bgcolor: 'background.paper',\r\n  border: '2px solid #000',\r\n  boxShadow: 24,\r\n  pt: 2,\r\n  px: 4,\r\n  pb: 3,\r\n};\r\n\r\nfunction ChildModal() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const handleOpen = () => {\r\n    setOpen(true);\r\n  };\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <React.Fragment>\r\n      <Button onClick={handleOpen}>Open Child Modal</Button>\r\n      <Modal\r\n        hideBackdrop\r\n        open={open}\r\n        onClose={handleClose}\r\n        aria-labelledby='child-modal-title'\r\n        aria-describedby='child-modal-description'\r\n      >\r\n        <Box sx={{...style, width: 200}}>\r\n          <h2 id='child-modal-title'>Text in a child modal</h2>\r\n          <p id='child-modal-description'>\r\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit.\r\n          </p>\r\n          <Button onClick={handleClose}>Close Child Modal</Button>\r\n        </Box>\r\n      </Modal>\r\n    </React.Fragment>\r\n  );\r\n}\r\n\r\nexport default function NestedModal() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const handleOpen = () => {\r\n    setOpen(true);\r\n  };\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <Button onClick={handleOpen}>Open modal</Button>\r\n      <Modal\r\n        open={open}\r\n        onClose={handleClose}\r\n        aria-labelledby='parent-modal-title'\r\n        aria-describedby='parent-modal-description'\r\n      >\r\n        <Box sx={{...style, width: 400}}>\r\n          <h2 id='parent-modal-title'>Text in a modal</h2>\r\n          <p id='parent-modal-description'>\r\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\r\n          </p>\r\n          <ChildModal />\r\n        </Box>\r\n      </Modal>\r\n    </div>\r\n  );\r\n}\r\n",description:"Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged. ",noScrollbar:!0})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(l.a,{title:"Transitions Modal",component:z,source:"import * as React from 'react';\r\nimport Backdrop from '@mui/material/Backdrop';\r\nimport Box from '@mui/material/Box';\r\nimport Modal from '@mui/material/Modal';\r\nimport Fade from '@mui/material/Fade';\r\nimport Button from '@mui/material/Button';\r\nimport Typography from '@mui/material/Typography';\r\n\r\nconst style = {\r\n  position: 'absolute',\r\n  top: '50%',\r\n  left: '50%',\r\n  transform: 'translate(-50%, -50%)',\r\n  width: 400,\r\n  bgcolor: 'background.paper',\r\n  border: '2px solid #000',\r\n  boxShadow: 24,\r\n  p: 4,\r\n};\r\n\r\nexport default function TransitionsModal() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const handleOpen = () => setOpen(true);\r\n  const handleClose = () => setOpen(false);\r\n\r\n  return (\r\n    <div>\r\n      <Button onClick={handleOpen}>Open modal</Button>\r\n      <Modal\r\n        aria-labelledby='transition-modal-title'\r\n        aria-describedby='transition-modal-description'\r\n        open={open}\r\n        onClose={handleClose}\r\n        closeAfterTransition\r\n        BackdropComponent={Backdrop}\r\n        BackdropProps={{\r\n          timeout: 500,\r\n        }}\r\n      >\r\n        <Fade in={open}>\r\n          <Box sx={style}>\r\n            <Typography id='transition-modal-title' variant='h6' component='h2'>\r\n              Text in a modal\r\n            </Typography>\r\n            <Typography id='transition-modal-description' sx={{mt: 2}}>\r\n              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\r\n            </Typography>\r\n          </Box>\r\n        </Fade>\r\n      </Modal>\r\n    </div>\r\n  );\r\n}\r\n",description:"The open/close state of the modal can be animated with a transition component. This component should respect the following conditions:",noScrollbar:!0})})]})]})}}}]);
//# sourceMappingURL=104.d02498f5.chunk.js.map