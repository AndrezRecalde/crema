(this.webpackJsonphister=this.webpackJsonphister||[]).push([[142],{2290:function(e,r,n){"use strict";n.r(r);var t=n(2),a=n(72),o=n(60),i=n(1458),l=n(38),c=n(5),s=n(14),u=n(1466),d=n(1455),m=n(984),p=n(1558),b=n(1);function f(){var e=t.useState(null),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsx)(p.a,{label:"Basic example",value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}})})}var h=n(1871);function j(){var e=t.useState(new Date),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsx)(h.a,{displayStaticWrapperAs:"desktop",openTo:"year",value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}})})}var D=n(1449),x=n(1448),v=n(1615);function k(){var e=t.useState(new Date),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsxs)(v.a,{spacing:3,children:[Object(b.jsx)(D.a,{label:"For mobile",value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}}),Object(b.jsx)(x.a,{label:"For desktop",value:n,minDate:new Date("2017-01-01"),onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}}),Object(b.jsx)(p.a,{disableFuture:!0,label:"Responsive",openTo:"year",views:["year","month","day"],value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}})]})})}function g(){var e=t.useState(null),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsxs)(v.a,{spacing:3,children:[Object(b.jsx)(p.a,{label:"disabled",disabled:!0,value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}}),Object(b.jsx)(p.a,{label:"read-only",readOnly:!0,value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}})]})})}var P=n(1929),O=n(1928),y=n(2191),w=n(365),F=n(1592),T=n(1575),S={en:w.a,fr:P.a,ru:O.a,de:y.a},L={fr:"__/__/____",en:"__/__/____",ru:"__.__.____",de:"__.__.____"};function C(){var e=t.useState("ru"),r=Object(s.a)(e,2),n=r[0],a=r[1],o=t.useState(new Date),i=Object(s.a)(o,2),l=i[0],f=i[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,locale:S[n],children:Object(b.jsxs)("div",{children:[Object(b.jsx)(T.a,{value:n,exclusive:!0,sx:{mb:2,display:"block"},children:Object.keys(S).map((function(e){return Object(b.jsx)(F.a,{value:e,onClick:function(){a(e)},children:e},e)}))}),Object(b.jsx)(p.a,{mask:L[n],value:l,onChange:function(e){return f(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}})]})})}function A(){var e=t.useState(new Date),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsxs)(v.a,{spacing:3,children:[Object(b.jsx)(p.a,{views:["year"],label:"Year only",value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)(Object(c.a)({},e),{},{helperText:null}))}}),Object(b.jsx)(p.a,{views:["year","month"],label:"Year and Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)(Object(c.a)({},e),{},{helperText:null}))}}),Object(b.jsx)(p.a,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)(Object(c.a)({},e),{},{helperText:null}))}}),Object(b.jsx)(p.a,{views:["day","month","year"],label:"Invert the order of views",value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)(Object(c.a)({},e),{},{helperText:null}))}}),Object(b.jsx)(p.a,{views:["day"],label:"Just date",value:n,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)(Object(c.a)({},e),{},{helperText:null}))}})]})})}var I=n(2086);function V(){var e=t.useState(new Date),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsx)(h.a,{orientation:"landscape",openTo:"day",value:n,shouldDisableDate:I.a,onChange:function(e){a(e)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))}})})}var _=n(1517),R=n(973),z=n(969),M=new Date("2020-01-01T00:00:00.000"),B=new Date("2034-01-01T00:00:00.000");function W(){var e=t.useState(new Date),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsxs)(i.a,{container:!0,spacing:3,children:[Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(_.a,{date:n,onChange:function(e){return a(e)}})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(R.a,{date:n,minDate:M,maxDate:B,onChange:function(e){return a(e)}})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(z.a,{date:n,isDateDisabled:function(){return!1},minDate:M,maxDate:B,onChange:function(e){return a(e)}})})]})})}var H=n(206);function G(){var e=t.useState(new Date),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsx)(p.a,{label:"Custom input",value:n,onChange:function(e){a(e)},renderInput:function(e){var r=e.inputRef,n=e.inputProps,t=e.InputProps;return Object(b.jsxs)(H.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsx)("input",Object(c.a)({ref:r},n)),null===t||void 0===t?void 0:t.endAdornment]})}})})}var Y=n(17),q=n(894),E=n(584),J=n(902),U=n(903),N=n(583),Q=Object(Y.a)(q.b,{shouldForwardProp:function(e){return"dayIsBetween"!==e&&"isFirstDay"!==e&&"isLastDay"!==e}})((function(e){var r=e.theme,n=e.dayIsBetween,t=e.isFirstDay,a=e.isLastDay;return Object(c.a)(Object(c.a)(Object(c.a)({},n&&{borderRadius:0,backgroundColor:r.palette.primary.main,color:r.palette.common.white,"&:hover, &:focus":{backgroundColor:r.palette.primary.dark}}),t&&{borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"}),a&&{borderTopRightRadius:"50%",borderBottomRightRadius:"50%"})}));function K(){var e=t.useState(new Date),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsx)(h.a,{displayStaticWrapperAs:"desktop",label:"Week picker",value:n,onChange:function(e){a(e)},renderDay:function(e,r,t){if(!n)return Object(b.jsx)(q.b,Object(c.a)({},t));var a=Object(N.a)(n),o=Object(E.a)(n),i=Object(U.a)(e,{start:a,end:o}),l=Object(J.a)(e,a),s=Object(J.a)(e,o);return Object(b.jsx)(Q,Object(c.a)(Object(c.a)({},t),{},{disableMargin:!0,dayIsBetween:i,isFirstDay:l,isLastDay:s}))},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))},inputFormat:"'Week of' MMM d"})})}var X=n(1563),Z=n(2253),$=n(527);function ee(e,r){var n=r.signal;return new Promise((function(r,t){var a=setTimeout((function(){var n=Object($.a)(e),t=[1,2,3].map((function(){return e=1,r=n,Math.round(Math.random()*(r-e)+e);var e,r}));r({daysToHighlight:t})}),500);n.onabort=function(){clearTimeout(a),t(new DOMException("aborted","AbortError"))}}))}var re=new Date;function ne(){var e=t.useRef(null),r=t.useState(!1),n=Object(s.a)(r,2),a=n[0],o=n[1],i=t.useState([1,2,15]),l=Object(s.a)(i,2),f=l[0],h=l[1],j=t.useState(re),D=Object(s.a)(j,2),x=D[0],v=D[1],k=function(r){var n=new AbortController;ee(r,{signal:n.signal}).then((function(e){var r=e.daysToHighlight;h(r),o(!1)})).catch((function(e){if("AbortError"!==e.name)throw e})),e.current=n};t.useEffect((function(){return k(re),function(){var r;return null===(r=e.current)||void 0===r?void 0:r.abort()}}),[]);return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsx)(p.a,{value:x,loading:a,onChange:function(e){v(e)},onMonthChange:function(r){e.current&&e.current.abort(),o(!0),h([]),k(r)},renderInput:function(e){return Object(b.jsx)(u.a,Object(c.a)({},e))},renderLoading:function(){return Object(b.jsx)(Z.a,{})},renderDay:function(e,r,n){var t=!n.outsideCurrentMonth&&f.indexOf(e.getDate())>0;return Object(b.jsx)(X.a,{overlap:"circular",badgeContent:t?"\ud83c\udf1a":void 0,children:Object(b.jsx)(q.b,Object(c.a)({},n))},e.toString())}})})}function te(){var e=t.useState(null),r=Object(s.a)(e,2),n=r[0],a=r[1];return Object(b.jsx)(m.b,{dateAdapter:d.a,children:Object(b.jsx)(p.a,{label:"Helper text example",value:n,onChange:function(e){a(e)},renderInput:function(e){var r;return Object(b.jsx)(u.a,Object(c.a)(Object(c.a)({},e),{},{helperText:null===e||void 0===e||null===(r=e.inputProps)||void 0===r?void 0:r.placeholder}))}})})}r.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(a.a,{title:"DatePicker",description:"Date pickers let the user select a date.",refUrl:"https://material.io/components/date-pickers"}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"BasicDatePicker",component:f,source:"import * as React from 'react';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport DatePicker from '@mui/lab/DatePicker';\r\n\r\nexport default function BasicDatePicker() {\r\n  const [value, setValue] = React.useState(null);\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <DatePicker\r\n        label='Basic example'\r\n        value={value}\r\n        onChange={(newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        renderInput={(params) => <TextField {...params} />}\r\n      />\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"ServerRequestDatePicker",component:ne,source:"import * as React from 'react';\r\nimport Badge from '@mui/material/Badge';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport PickersDay from '@mui/lab/PickersDay';\r\nimport DatePicker from '@mui/lab/DatePicker';\r\nimport CalendarPickerSkeleton from '@mui/lab/CalendarPickerSkeleton';\r\nimport getDaysInMonth from 'date-fns/getDaysInMonth';\r\n\r\nfunction getRandomNumber(min, max) {\r\n  return Math.round(Math.random() * (max - min) + min);\r\n}\r\n\r\n/**\r\n * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort\r\n * \u26a0\ufe0f No IE11 support\r\n */\r\nfunction fakeFetch(date, {signal}) {\r\n  return new Promise((resolve, reject) => {\r\n    const timeout = setTimeout(() => {\r\n      const daysInMonth = getDaysInMonth(date);\r\n      const daysToHighlight = [1, 2, 3].map(() =>\r\n        getRandomNumber(1, daysInMonth),\r\n      );\r\n\r\n      resolve({daysToHighlight});\r\n    }, 500);\r\n\r\n    signal.onabort = () => {\r\n      clearTimeout(timeout);\r\n      reject(new DOMException('aborted', 'AbortError'));\r\n    };\r\n  });\r\n}\r\n\r\nconst initialValue = new Date();\r\n\r\nexport default function ServerRequestDatePicker() {\r\n  const requestAbortController = React.useRef(null);\r\n  const [isLoading, setIsLoading] = React.useState(false);\r\n  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);\r\n  const [value, setValue] = React.useState(initialValue);\r\n\r\n  const fetchHighlightedDays = (date) => {\r\n    const controller = new AbortController();\r\n    fakeFetch(date, {\r\n      signal: controller.signal,\r\n    })\r\n      .then(({daysToHighlight}) => {\r\n        setHighlightedDays(daysToHighlight);\r\n        setIsLoading(false);\r\n      })\r\n      .catch((error) => {\r\n        // ignore the error if it's caused by `controller.abort`\r\n        if (error.name !== 'AbortError') {\r\n          throw error;\r\n        }\r\n      });\r\n\r\n    requestAbortController.current = controller;\r\n  };\r\n\r\n  React.useEffect(() => {\r\n    fetchHighlightedDays(initialValue);\r\n    // abort request on unmount\r\n    return () => requestAbortController.current?.abort();\r\n  }, []);\r\n\r\n  const handleMonthChange = (date) => {\r\n    if (requestAbortController.current) {\r\n      // make sure that you are aborting useless requests\r\n      // because it is possible to switch between months pretty quickly\r\n      requestAbortController.current.abort();\r\n    }\r\n\r\n    setIsLoading(true);\r\n    setHighlightedDays([]);\r\n    fetchHighlightedDays(date);\r\n  };\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <DatePicker\r\n        value={value}\r\n        loading={isLoading}\r\n        onChange={(newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        onMonthChange={handleMonthChange}\r\n        renderInput={(params) => <TextField {...params} />}\r\n        renderLoading={() => <CalendarPickerSkeleton />}\r\n        renderDay={(day, _value, DayComponentProps) => {\r\n          const isSelected =\r\n            !DayComponentProps.outsideCurrentMonth &&\r\n            highlightedDays.indexOf(day.getDate()) > 0;\r\n\r\n          return (\r\n            <Badge\r\n              key={day.toString()}\r\n              overlap='circular'\r\n              badgeContent={isSelected ? '\ud83c\udf1a' : undefined}\r\n            >\r\n              <PickersDay {...DayComponentProps} />\r\n            </Badge>\r\n          );\r\n        }}\r\n      />\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Sometimes it may be necessary to display additional info right in the calendar. Heres an example of prefetching and displaying server-side data using the onMonthChange, loading, and renderDay props. "})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"HelperText",component:te,source:"import * as React from 'react';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport DatePicker from '@mui/lab/DatePicker';\r\n\r\nexport default function HelperText() {\r\n  const [value, setValue] = React.useState(null);\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <DatePicker\r\n        label='Helper text example'\r\n        value={value}\r\n        onChange={(newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        renderInput={(params) => (\r\n          <TextField {...params} helperText={params?.inputProps?.placeholder} />\r\n        )}\r\n      />\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"You can show a helper text with the date format accepted."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"CustomInput",component:G,source:"import * as React from 'react';\r\nimport Box from '@mui/material/Box';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport DesktopDatePicker from '@mui/lab/DatePicker';\r\n\r\nexport default function CustomInput() {\r\n  const [value, setValue] = React.useState(new Date());\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <DesktopDatePicker\r\n        label='Custom input'\r\n        value={value}\r\n        onChange={(newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        renderInput={({inputRef, inputProps, InputProps}) => (\r\n          <Box sx={{display: 'flex', alignItems: 'center'}}>\r\n            <input ref={inputRef} {...inputProps} />\r\n            {InputProps?.endAdornment}\r\n          </Box>\r\n        )}\r\n      />\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"You can customize the rendering of the input with the renderInput prop. Make sure to spread ref and inputProps correctly to the custom input component."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"FormPropsDatePickers",component:g,source:"import * as React from 'react';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport DatePicker from '@mui/lab/DatePicker';\r\nimport Stack from '@mui/material/Stack';\r\n\r\nexport default function FormPropsDatePickers() {\r\n  const [value, setValue] = React.useState(null);\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <Stack spacing={3}>\r\n        <DatePicker\r\n          label='disabled'\r\n          disabled\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} />}\r\n        />\r\n        <DatePicker\r\n          label='read-only'\r\n          readOnly\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} />}\r\n        />\r\n      </Stack>\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The date picker component can be disabled or read-only."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"LocalizedDatePicker",component:C,source:"import * as React from 'react';\r\nimport frLocale from 'date-fns/locale/fr';\r\nimport ruLocale from 'date-fns/locale/ru';\r\nimport deLocale from 'date-fns/locale/de';\r\nimport enLocale from 'date-fns/locale/en-US';\r\nimport ToggleButton from '@mui/material/ToggleButton';\r\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport DatePicker from '@mui/lab/DatePicker';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\n\r\nconst localeMap = {\r\n  en: enLocale,\r\n  fr: frLocale,\r\n  ru: ruLocale,\r\n  de: deLocale,\r\n};\r\n\r\nconst maskMap = {\r\n  fr: '__/__/____',\r\n  en: '__/__/____',\r\n  ru: '__.__.____',\r\n  de: '__.__.____',\r\n};\r\n\r\nexport default function LocalizedDatePicker() {\r\n  const [locale, setLocale] = React.useState('ru');\r\n  const [value, setValue] = React.useState(new Date());\r\n\r\n  const selectLocale = (newLocale) => {\r\n    setLocale(newLocale);\r\n  };\r\n\r\n  return (\r\n    <LocalizationProvider\r\n      dateAdapter={AdapterDateFns}\r\n      locale={localeMap[locale]}\r\n    >\r\n      <div>\r\n        <ToggleButtonGroup\r\n          value={locale}\r\n          exclusive\r\n          sx={{mb: 2, display: 'block'}}\r\n        >\r\n          {Object.keys(localeMap).map((localeItem) => (\r\n            <ToggleButton\r\n              key={localeItem}\r\n              value={localeItem}\r\n              onClick={() => selectLocale(localeItem)}\r\n            >\r\n              {localeItem}\r\n            </ToggleButton>\r\n          ))}\r\n        </ToggleButtonGroup>\r\n        <DatePicker\r\n          mask={maskMap[locale]}\r\n          value={value}\r\n          onChange={(newValue) => setValue(newValue)}\r\n          renderInput={(params) => <TextField {...params} />}\r\n        />\r\n      </div>\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Use LocalizationProvider to change the date-engine locale that is used to render the date picker. Here is an example of changing the locale for the date-fns adapter:"})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"ResponsiveDatePickers",component:k,source:"import * as React from 'react';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport DatePicker from '@mui/lab/DatePicker';\r\nimport MobileDatePicker from '@mui/lab/MobileDatePicker';\r\nimport DesktopDatePicker from '@mui/lab/DesktopDatePicker';\r\nimport Stack from '@mui/material/Stack';\r\n\r\nexport default function ResponsiveDatePickers() {\r\n  const [value, setValue] = React.useState(new Date());\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <Stack spacing={3}>\r\n        <MobileDatePicker\r\n          label='For mobile'\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} />}\r\n        />\r\n        <DesktopDatePicker\r\n          label='For desktop'\r\n          value={value}\r\n          minDate={new Date('2017-01-01')}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} />}\r\n        />\r\n        <DatePicker\r\n          disableFuture\r\n          label='Responsive'\r\n          openTo='year'\r\n          views={['year', 'month', 'day']}\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} />}\r\n        />\r\n      </Stack>\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"By default, the DatePicker component renders the desktop version if the media query @media (pointer: fine) matches. This can be customized with the desktopModeMediaQuery prop."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"ViewsDatePicker",component:A,source:"import * as React from 'react';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport DatePicker from '@mui/lab/DatePicker';\r\nimport Stack from '@mui/material/Stack';\r\n\r\nexport default function ViewsDatePicker() {\r\n  const [value, setValue] = React.useState(new Date());\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <Stack spacing={3}>\r\n        <DatePicker\r\n          views={['year']}\r\n          label='Year only'\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} helperText={null} />}\r\n        />\r\n        <DatePicker\r\n          views={['year', 'month']}\r\n          label='Year and Month'\r\n          minDate={new Date('2012-03-01')}\r\n          maxDate={new Date('2023-06-01')}\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} helperText={null} />}\r\n        />\r\n        <DatePicker\r\n          openTo='year'\r\n          views={['year', 'month', 'day']}\r\n          label='Year, month and date'\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} helperText={null} />}\r\n        />\r\n        <DatePicker\r\n          views={['day', 'month', 'year']}\r\n          label='Invert the order of views'\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} helperText={null} />}\r\n        />\r\n        <DatePicker\r\n          views={['day']}\r\n          label='Just date'\r\n          value={value}\r\n          onChange={(newValue) => {\r\n            setValue(newValue);\r\n          }}\r\n          renderInput={(params) => <TextField {...params} helperText={null} />}\r\n        />\r\n      </Stack>\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Its possible to combine year, month, and date selection views. Views will appear in the order theyre included in the views array. "})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"StaticDatePickerDemo",component:j,source:"import * as React from 'react';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport StaticDatePicker from '@mui/lab/StaticDatePicker';\r\n\r\nexport default function StaticDatePickerDemo() {\r\n  const [value, setValue] = React.useState(new Date());\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <StaticDatePicker\r\n        displayStaticWrapperAs='desktop'\r\n        openTo='year'\r\n        value={value}\r\n        onChange={(newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        renderInput={(params) => <TextField {...params} />}\r\n      />\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Its possible to render any date picker without the modal/popover and text field. This can be helpful when building custom popover/modal containers."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"CustomDay",component:K,source:"import * as React from 'react';\r\nimport {styled} from '@mui/material/styles';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport StaticDatePicker from '@mui/lab/StaticDatePicker';\r\nimport PickersDay from '@mui/lab/PickersDay';\r\nimport endOfWeek from 'date-fns/endOfWeek';\r\nimport isSameDay from 'date-fns/isSameDay';\r\nimport isWithinInterval from 'date-fns/isWithinInterval';\r\nimport startOfWeek from 'date-fns/startOfWeek';\r\n\r\nconst CustomPickersDay = styled(PickersDay, {\r\n  shouldForwardProp: (prop) =>\r\n    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',\r\n})(({theme, dayIsBetween, isFirstDay, isLastDay}) => ({\r\n  ...(dayIsBetween && {\r\n    borderRadius: 0,\r\n    backgroundColor: theme.palette.primary.main,\r\n    color: theme.palette.common.white,\r\n    '&:hover, &:focus': {\r\n      backgroundColor: theme.palette.primary.dark,\r\n    },\r\n  }),\r\n  ...(isFirstDay && {\r\n    borderTopLeftRadius: '50%',\r\n    borderBottomLeftRadius: '50%',\r\n  }),\r\n  ...(isLastDay && {\r\n    borderTopRightRadius: '50%',\r\n    borderBottomRightRadius: '50%',\r\n  }),\r\n}));\r\n\r\nexport default function CustomDay() {\r\n  const [value, setValue] = React.useState(new Date());\r\n\r\n  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {\r\n    if (!value) {\r\n      return <PickersDay {...pickersDayProps} />;\r\n    }\r\n\r\n    const start = startOfWeek(value);\r\n    const end = endOfWeek(value);\r\n\r\n    const dayIsBetween = isWithinInterval(date, {start, end});\r\n    const isFirstDay = isSameDay(date, start);\r\n    const isLastDay = isSameDay(date, end);\r\n\r\n    return (\r\n      <CustomPickersDay\r\n        {...pickersDayProps}\r\n        disableMargin\r\n        dayIsBetween={dayIsBetween}\r\n        isFirstDay={isFirstDay}\r\n        isLastDay={isLastDay}\r\n      />\r\n    );\r\n  };\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <StaticDatePicker\r\n        displayStaticWrapperAs='desktop'\r\n        label='Week picker'\r\n        value={value}\r\n        onChange={(newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        renderDay={renderWeekPickerDay}\r\n        renderInput={(params) => <TextField {...params} />}\r\n        inputFormat=\"'Week of' MMM d\"\r\n      />\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"The displayed days are customizable with the renderDay function prop. You can take advantage of the PickersDay component."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"StaticDatePickerLandscape",component:V,source:"import * as React from 'react';\r\nimport isWeekend from 'date-fns/isWeekend';\r\nimport TextField from '@mui/material/TextField';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport StaticDatePicker from '@mui/lab/StaticDatePicker';\r\n\r\nexport default function StaticDatePickerLandscape() {\r\n  const [value, setValue] = React.useState(new Date());\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <StaticDatePicker\r\n        orientation='landscape'\r\n        openTo='day'\r\n        value={value}\r\n        shouldDisableDate={isWeekend}\r\n        onChange={(newValue) => {\r\n          setValue(newValue);\r\n        }}\r\n        renderInput={(params) => <TextField {...params} />}\r\n      />\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"For ease of use, the date picker will automatically change the layout between portrait and landscape by subscription to the window.orientation change. You can force a specific layout using the orientation prop."})}),Object(b.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(l.a,{title:"SubComponentsPickers",component:W,source:"import * as React from 'react';\r\nimport AdapterDateFns from '@mui/lab/AdapterDateFns';\r\nimport LocalizationProvider from '@mui/lab/LocalizationProvider';\r\nimport CalendarPicker from '@mui/lab/CalendarPicker';\r\nimport MonthPicker from '@mui/lab/MonthPicker';\r\nimport YearPicker from '@mui/lab/YearPicker';\r\nimport Grid from '@mui/material/Grid';\r\n\r\nconst minDate = new Date('2020-01-01T00:00:00.000');\r\nconst maxDate = new Date('2034-01-01T00:00:00.000');\r\n\r\nexport default function SubComponentsPickers() {\r\n  const [date, setDate] = React.useState(new Date());\r\n\r\n  return (\r\n    <LocalizationProvider dateAdapter={AdapterDateFns}>\r\n      <Grid container spacing={3}>\r\n        <Grid item xs={12} md={6}>\r\n          <CalendarPicker\r\n            date={date}\r\n            onChange={(newDate) => setDate(newDate)}\r\n          />\r\n        </Grid>\r\n        <Grid item xs={12} md={6}>\r\n          <MonthPicker\r\n            date={date}\r\n            minDate={minDate}\r\n            maxDate={maxDate}\r\n            onChange={(newDate) => setDate(newDate)}\r\n          />\r\n        </Grid>\r\n        <Grid item xs={12} md={6}>\r\n          <YearPicker\r\n            date={date}\r\n            isDateDisabled={() => false}\r\n            minDate={minDate}\r\n            maxDate={maxDate}\r\n            onChange={(newDate) => setDate(newDate)}\r\n          />\r\n        </Grid>\r\n      </Grid>\r\n    </LocalizationProvider>\r\n  );\r\n}\r\n",noScrollbar:!0,description:"Some lower-level sub-components (CalendarPicker, MonthPicker, and YearPicker) are also exported. These are rendered without a wrapper or outer logic (masked input, date values parsing and validation, etc.)."})})]})]})}}}]);
//# sourceMappingURL=142.c87d1244.chunk.js.map