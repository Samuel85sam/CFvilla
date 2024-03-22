/*@license For license information please refer to shared-ui-retail-lodging-property-activities-cross-sell.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1570],{89770:function(e,t,n){n.d(t,{JX:function(){return Ae},U7:function(){return ke},t6:function(){return Oe}});var r=n(67294),i=n(69430),a=n(71641),l=n(41496),c=n(62679),o=n(61348),u=n(84829),s=n(95878),f=n(98250),d=n(70272),m=n(57758),v=n(23933),p=n(51544),g=n(8409),y=n(19633),E=n(46596),h=n(11719),b=n(73030),S=n(46045);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n,r,i,a,l){try{var c=e[a](l),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,i)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){A(e,t,n[t])}))}return e}function P(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function O(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(o){c=!0,i=o}finally{try{l||null==n.return||n.return()}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function x(e,t){var n,r,i,a,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(i=l.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function w(){var e=D(["\n  fragment LodgingEGDSGraphicTextFragment on EGDSGraphicText {\n    text\n    graphic {\n      ... on Icon {\n        id\n        size\n      }\n      ... on Mark {\n        url {\n          ... on HttpURI {\n            value\n          }\n        }\n      }\n    }\n  }\n"]);return w=function(){return e},e}function N(){var e=D(["\n  fragment EGDSInlineLinkFragment on EGDSInlineLink {\n    action {\n      accessibility\n      analytics {\n        linkName\n        referrerId\n      }\n      resource {\n        value\n      }\n      target\n    }\n    disabled\n    sizeEGDSLink: size\n    text\n  }\n"]);return N=function(){return e},e}function R(){var e=D(["\n  fragment EGDSPlainTextFragment on EGDSPlainText {\n    text\n  }\n"]);return R=function(){return e},e}function L(){var e=D(["\n  fragment EGDSStylizedTextFragment on EGDSStylizedText {\n    __typename\n    text\n    theme\n    weight\n    size\n    decorative\n    accessibility\n  }\n"]);return L=function(){return e},e}function H(){var e=D(["\n  fragment EGDSSpannableTextContentFragment on EGDSText {\n    ...EGDSStylizedTextFragment\n    ...EGDSPlainTextFragment\n    ...LodgingEGDSGraphicTextFragment\n    ...EGDSInlineLinkFragment\n  }\n\n  ","\n  ","\n  ","\n  ","\n"]);return H=function(){return e},e}function G(){var e=D(["\n  fragment EGDSSpannableTextFragment on EGDSSpannableText {\n    text\n    contents {\n      ...EGDSSpannableTextContentFragment\n    }\n    inlineContent {\n      ...EGDSSpannableTextContentFragment\n    }\n  }\n\n  ","\n"]);return G=function(){return e},e}function _(){var e=D(["\n  fragment PropertyActivitiesCrossSellActionFragment on PropertyActivitiesCrossSellLinkButton {\n    action {\n      actionType\n      activityId\n      analytics {\n        eventType\n        linkName\n        referrerId\n      }\n    }\n    button {\n      accessibility\n      iconPosition\n      text\n      icon {\n        id\n      }\n    }\n  }\n"]);return _=function(){return e},e}function z(){var e=D(["\n  fragment PropertyActivitiesCrossSellDescriptionFragment on EGDSPlainText {\n    text\n  }\n"]);return z=function(){return e},e}function F(){var e=D(["\n  fragment PropertyActivitiesCrossSellHeadingFragment on LodgingHeader {\n    accessibilityLabel\n    icon {\n      id\n      token\n    }\n    text\n  }\n"]);return F=function(){return e},e}function j(){var e=D(["\n  fragment PropertyActivitiesCrossSellPriceFragment on DisplayPrice {\n    price {\n      accessibilityLabel\n      formatted\n    }\n  }\n"]);return j=function(){return e},e}function M(){var e=D(["\n  query PropertyActivitiesCrossSellQuery(\n    $context: ContextInput!\n    $propertyId: String!\n    $searchCriteria: PropertySearchCriteriaInput!\n    $shoppingContext: ShoppingContextInput\n    $activityNaturalKey: ActivityNaturalKeyInput\n  ) {\n    propertyActivitiesCrossSell(\n      context: $context\n      propertyId: $propertyId\n      searchCriteria: $searchCriteria\n      shoppingContext: $shoppingContext\n      activityNaturalKey: $activityNaturalKey\n    ) {\n      actions {\n        ...PropertyActivitiesCrossSellActionFragment\n      }\n      activityId\n      description {\n        ...PropertyActivitiesCrossSellDescriptionFragment\n      }\n      heading {\n        ...PropertyActivitiesCrossSellHeadingFragment\n      }\n      liveAnnounceMessage\n      offerActivityDescription {\n        ...EGDSSpannableTextFragment\n      }\n      price {\n        ...PropertyActivitiesCrossSellPriceFragment\n      }\n      showTracking {\n        referrerId\n        linkName\n        eventType\n      }\n      sideSheet {\n        dismissButtonAccessibilityText\n        heading\n        subtitle\n      }\n    }\n  }\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return M=function(){return e},e}var K,U=(0,i.Ps)(w()),V=function(e){var t,n,i,a,c,o,s=e.data,f=e.textProps,m=e.customTextSize,g=e.flexLayout,y=s.text,E=s.graphic;return r.createElement("div",null,"Icon"===(null===(t=E)||void 0===t?void 0:t.__typename)&&E.id&&!g&&r.createElement(u.H3,{padding:{inlineend:"two"}},r.createElement(v.nn,{name:E.id,size:E.size?v.n0[E.size]:v.n0.EXTRA_SMALL})),"Mark"===(null===(n=E)||void 0===n?void 0:n.__typename)&&(null===(i=E.url)||void 0===i?void 0:i.value)&&!g&&r.createElement(u.H3,{padding:{inlineend:"two"}},r.createElement(p.I$,{url:E.url.value,size:p.jN.SMALL})),g?r.createElement(l.lu,{alignItems:"center",space:"two"},"Icon"===(null===(a=E)||void 0===a?void 0:a.__typename)&&r.createElement(v.nn,{name:E.id}),"Mark"===(null===(c=E)||void 0===c?void 0:c.__typename)&&(null===(o=E.url)||void 0===o?void 0:o.value)&&r.createElement(p.I$,{url:E.url.value,size:p.jN.SMALL}),r.createElement(d.sc,I({size:m||200},f),y)):r.createElement(d.sc,P(I({size:m||200},f),{inline:!!E}),y))};V.fragment=U,V.displayName="LodgingEGDSGraphicText";var X,$=(A(K={},"SMALL","small"),A(K,"MEDIUM","medium"),A(K,"LARGE","medium"),K),B=(A(X={},"EXTERNAL","_blank"),A(X,"INTERNAL","_self"),X),Y=(0,i.Ps)(N()),q=function(e){var t=e.className,n=e.data,i=n.action,a=n.disabled,l=n.sizeEGDSLink,c=n.text,o=(0,f.useClickTracker)(),u=r.useCallback((function(){i.analytics&&o(i.analytics.referrerId,i.analytics.linkName)}),[o,i]);return i&&r.createElement(m.n3,{className:t,size:$[l],onClickCapture:u,disabled:a,inline:!0},r.createElement("a",{href:i.resource.value,target:B[i.target]},c,i.accessibility&&r.createElement("span",{className:"is-visually-hidden"},i.accessibility)))};q.fragment=Y,q.displayName="EGDSInlineLink";var J,Q=(0,i.Ps)(R()),W=function(e){var t=e.className,n=e.inline,i=e.size,a=e.align,l=e.data.text;return r.createElement(d.sc,{className:t,inline:n,size:i,align:a},l)};W.fragment=Q,W.displayName="EGDSPlainText";var Z,ee=(A(J={},"EMPHASIS","emphasis"),A(J,"LOYALTY","loyalty"),A(J,"NEGATIVE","negative"),A(J,"POSITIVE","positive"),A(J,"PRIMARY","emphasis"),A(J,"SECONDARY","default"),A(J,"INVERSE","inverse"),J),te=(A(Z={},"BOLD","bold"),A(Z,"MEDIUM","medium"),A(Z,"REGULAR","regular"),Z),ne=(0,i.Ps)(L()),re={100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900},ie={HIGHLIGHT:"mark",LINE_THROUGH:"s",SUBSCRIPT:"sub",SUPERSCRIPT:"sup",UNDERLINE:"u"},ae=function(e){var t=e.data,n=e.theme,i=e.weight,a=e.size,l=O(e,["data","theme","weight","size"]),c=t.decorative,o=t.accessibility,u=I({theme:t.theme?ee[t.theme]:n,weight:t.weight?te[t.weight]:i,size:t.size?re[t.size]:a},l),s=c&&ie[c],f=s?r.createElement(s,null,t.text):t.text;return r.createElement(r.Fragment,null,r.createElement(d.sc,P(I({},u),{"aria-hidden":Boolean(o)}),f),o&&r.createElement("span",{className:"is-visually-hidden"},o))};ae.fragment=ne,ae.displayName="EGDSStylizedText";var le=(0,i.Ps)(H(),ae.fragment,W.fragment,q.fragment,V.fragment),ce=function(e){var t,n=e.className,i=e.size,a=e.data,l=e.handleInlineLinkClick,c=e.triggerRef,o=(0,f.useClickTracker)(),u="EGDSInlineLink"===a.__typename?null===(t=a.action)||void 0===t?void 0:t.analytics:null,s=r.useCallback((function(){var e,t,n;(null===(e=u)||void 0===e?void 0:e.referrerId)&&(null===(t=u)||void 0===t?void 0:t.linkName)&&o(u.referrerId,u.linkName),null===(n=l)||void 0===n||n()}),[l]);switch(a.__typename){case"EGDSStylizedText":return r.createElement(ae,{className:n,data:a,size:i,inline:!0});case"EGDSPlainText":return r.createElement(W,{className:n,data:a,size:i,inline:!0});case"EGDSGraphicText":return r.createElement(V,{data:a});case"EGDSInlineLink":return l?r.createElement(m.n3,{inline:!0,onClick:function(){return s()},domRef:c},r.createElement("button",{type:"button","data-stid":"reviews-link"},a.text)):r.createElement(q,{data:a});default:return null}};ce.fragment=le,ce.displayName="EGDSSpannableTextContent";var oe=(0,i.Ps)(G(),ce.fragment),ue=function(e){var t,n,i,a,l,c,o=e.align,u=e.data,s=O(e,["align","data"]);return 0!==(null===(n=u)||void 0===n||null===(t=n.contents)||void 0===t?void 0:t.length)||(null===(a=u)||void 0===a||null===(i=a.inlineContent)||void 0===i?void 0:i.length)?(null===(c=u)||void 0===c||null===(l=c.inlineContent)||void 0===l?void 0:l.length)?r.createElement(r.Fragment,null,u.inlineContent.map((function(e,t){return r.createElement(ce,P(I({data:e},s),{key:"spannable-item-".concat(t)}))}))):r.createElement(r.Fragment,null,u.contents.map((function(e,t){return r.createElement(r.Fragment,{key:"spannable-item-".concat(t)},r.createElement(ce,I({data:e},s)))}))):r.createElement(d.sc,P(I({},s),{inline:!0,align:o}),u.text)};ue.fragment=oe,ue.displayName="EGDSSpannableText";var se=(0,i.Ps)(_()),fe=function(e){var t=e.data,n=e.onActionClick,i=t.action,a=t.button;return r.createElement(r.Fragment,null,i.map((function(e,t){var i,l,o;return r.createElement(c.UX,{key:"property-activities-cross-sell-action-".concat(t)},r.createElement(m.n3,{onClick:function(){return n(e.actionType,e.analytics)}},r.createElement("button",{type:"button","aria-expanded":"false"},a.text,(null===(i=a)||void 0===i?void 0:i.icon)&&r.createElement(v.nn,{name:null===(o=a)||void 0===o||null===(l=o.icon)||void 0===l?void 0:l.id}))))})))};fe.displayName="PropertyActivitiesCrossSellAction",fe.fragment=se;var de=(0,i.Ps)(z()),me=function(e){var t=e.data.text;return r.createElement(u.H3,{margin:{blockstart:"one"}},r.createElement(d.sc,null,t))};me.displayName="PropertyActivitiesCrossSellDescription",me.fragment=de;var ve=(0,i.Ps)(F()),pe=function(e){var t=e.data,n=t.icon,i=t.text;return r.createElement(l.lu,null,n&&r.createElement(l.Vt,null,r.createElement(u.H3,{padding:{inlineend:"two"}},r.createElement(v.nn,{name:n.id}))),r.createElement(l.Vt,null,r.createElement(d.If,{size:6},i)))};pe.displayName="PropertyActivitiesCrossSellHeading",pe.fragment=ve;var ge=(0,i.Ps)(j()),ye=function(e){var t=e.data.price,n=t.accessibilityLabel,i=t.formatted;return r.createElement(d.sc,{weight:"bold","aria-label":n},i)};ye.displayName="PropertyActivitiesCrossSellHeading",ye.fragment=ge;var Ee=function(){return r.useMemo((function(){return Math.random().toString(36).slice(2,7)}),[])},he=function(e){var t=e.heading,n=e.subHeading;return r.createElement(r.Fragment,null,t&&r.createElement(u.H3,{margin:{blockstart:"four",inline:"three"}},r.createElement(d.If,{tag:"h3"},t)),n&&r.createElement(u.H3,{margin:{block:"one",inline:"three"}},r.createElement(d.sc,{whiteSpace:"pre-line"},n)),(t||n)&&r.createElement(u.Tm,null))},be=function(e){var t=e.selectedOffers,n=e.activityId,i=e.dateRange,a=e.visible,l=e.offerSheetHeading,c=e.offerSheetSubHeading,u=e.dismissButtonAccessibility,s=e.onTripClickHandler,f=e.onDismiss,d=C((0,b.useDialog)("activity-offer-dialog-".concat(Ee),"nestedOfferDialog"),3),m=d[0],v=d[1],p=d[2];if(r.useEffect((function(){a&&v.openDialog()}),[a]),!n)return null;return r.createElement(o.Xw,{isVisible:m},r.createElement(p,null,r.createElement(o.A5,{type:"full",isVisible:m,returnFocusOnClose:!0,triggerRef:null},r.createElement(h.tv,{navigationContent:{onClick:function(){f&&(v.closeDialog(),f())},navType:"close",navIconLabel:u}}),r.createElement(E.pN,null,r.createElement(he,{heading:l,subHeading:c}),r.createElement(S.GU,{inputs:{selectedOffers:t,activityId:n,dateRange:i,shoppingPath:S.q2.PACKAGE,packageType:S.yR.HOTEL_ACTIVITY},onTripClickHandler:s})))))},Se=function(e){var t=e.visible,n=e.selectedOffers,i=e.activityId,a=e.dateRange,l=e.offerSheetHeading,c=e.offerSheetSubHeading,u=e.dismissButtonAccessibility,s=e.onTripClickHandler,f=e.onDismiss;if(!i)return null;return r.createElement(o.Xw,{isVisible:t},r.createElement(o.A5,{isVisible:t,triggerRef:null,type:"side",sideSheetLayout:{position:"trailing",columns:4}},r.createElement(h.tv,{navigationContent:{onClick:function(){f&&f()},navIconLabel:u}}),r.createElement(o.XM,{padded:!1},r.createElement(he,{heading:l,subHeading:c}),r.createElement(S.GU,{inputs:{selectedOffers:n,activityId:i,dateRange:a,shoppingPath:S.q2.PACKAGE,packageType:S.yR.HOTEL_ACTIVITY},onTripClickHandler:s}))))},Te=r.createContext({dateRange:"",setDateRange:function(){},triggerRefetch:!1,setTriggerRefetch:function(){},activityNaturalKey:{offerToken:"",productToken:""},setActivityNaturalKey:function(){},hasAvailableListings:!1,setHasAvailableListings:function(){},propertyOffersMountRef:{current:!1}}),ke=function(e){var t=e.children,n=r.useRef(!1),i=r.useRef(!1),a=C(r.useState(""),2),l=a[0],c=a[1],o=C(r.useState(!1),2),u=o[0],s=o[1],f=C(r.useState({offerToken:"",productToken:""}),2),d=f[0],m=f[1],v=C(r.useState(!1),2),p=v[0],g=v[1];r.useEffect((function(){n.current&&s(!0)}),[d.offerToken]),r.useEffect((function(){n.current=!0}),[]);var y={dateRange:l,setDateRange:c,triggerRefetch:u,setTriggerRefetch:s,activityNaturalKey:d,setActivityNaturalKey:m,hasAvailableListings:p,setHasAvailableListings:g,propertyOffersMountRef:i},E=r.useMemo((function(){return I({},y)}),[y]);return r.createElement(Te.Provider,{value:E},t)},Ae=function(){return r.useContext(Te)},Ie=(0,i.Ps)(M(),me.fragment,pe.fragment,fe.fragment,ye.fragment,ue.fragment),Pe=function(e){var t=e.wrapElement,n=e.children;return t?r.createElement(y.Viewport,null,r.createElement(y.ViewLarge,null,n)):n},Oe=function(e){var t,n,i,d,m,v=e.inputs,p=e.skipSsr,E=e.sectionRef,h=v.searchCriteria,b=(0,s.v)().context,S=(0,g.xK)().getTargets,T=(0,f.useClickTracker)(),A=C(r.useState(!1),2),O=A[0],D=A[1],w=C(r.useState({}),2),N=w[0],R=w[1],L=Ae(),H=L.hasAvailableListings,G=L.triggerRefetch,_=L.setTriggerRefetch,z=L.activityNaturalKey,F=L.setActivityNaturalKey,j=C(r.useState(!1),2),M=j[0],K=j[1],U=r.useRef(!0),V=r.useRef(!0),X=r.useRef(null),$=E||"Offers",B=S([$])[$],Y=(null===(t=B)||void 0===t?void 0:t.current)&&B.current.clientHeight>window.innerHeight?.6*window.innerHeight/B.current.clientHeight:.3,q=[{id:$,ref:B||{current:null}}],J=r.useCallback((d=function(e){var t,n,r;return x(this,(function(i){switch(e.__typename){case"ActivityAddOfferToTripAction":n=e.offerNaturalKey,D(!1),"function"==typeof F&&(F({offerToken:n.offerProductNaturalKey,productToken:""}),T("HOT.HIS.HotelActivity.Sidesheet.AddToTrip","AddToTrip"));break;case"ActivityUpdateOfferInTripAction":r=e.newOfferNaturalKey,D(!1),"function"==typeof F&&(F({offerToken:r.offerProductNaturalKey,productToken:""}),T("HOT.HIS.HotelActivity.Sidesheet.UpdateTrip","UpdateTrip"));break;case"ActivityRemoveOffersFromTripAction":D(!1),"function"==typeof F&&(F({offerToken:"",productToken:""}),T("HOT.HIS.HotelActivity.Sidesheet.RemoveFromTrip","RemoveFromTrip"))}return K(!0),null===(t=X.current)||void 0===t||t.focus(),[2]}))},m=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=d.apply(e,t);function a(e){k(i,n,r,a,l,"next",e)}function l(e){k(i,n,r,a,l,"throw",e)}a(void 0)}))},function(e){return m.apply(this,arguments)}),[v,O]),Q=r.useCallback((function(e){var t=!1;Object.keys(e).forEach((function(n){t=n===$&&e[n]===g.zg.PARTIAL_TOP||e[n]===g.zg.PARTIAL_BOTTOM||e[n]===g.zg.ENTER_COMPLETE})),U.current&&K(t)}),[$]);(0,g.iJ)(q,Q,{thresholds:[Y]});var W=P(I({},v),{context:b}),Z=(0,a.a)(Ie,{variables:W,ssr:!p,fetchPolicy:"no-cache",nextFetchPolicy:"no-cache"}),ee=Z.data,te=Z.error,ne=Z.loading,re=Z.refetch;if(r.useEffect((function(){var e;G&&_&&re(P(I({},W),{activityNaturalKey:(null===(e=z)||void 0===e?void 0:e.offerToken)?I({},z):null})).then((function(){_(!1)}))}),[G]),ne||te||!(null===(n=ee)||void 0===n?void 0:n.propertyActivitiesCrossSell)||!H)return null;var ie=ee.propertyActivitiesCrossSell,ae=ie.actions,le=ie.description,ce=ie.heading,oe=ie.liveAnnounceMessage,se=ie.offerActivityDescription,de=ie.price,ve=ie.showTracking,ge=ie.sideSheet,Ee=ie.activityId;if(M&&V.current&&ve){var he=ve.referrerId,Te=ve.linkName;V.current=!1,T("".concat(he),"".concat(Te))}var ke=function(){var e;D(!1),K(!0),null===(e=X.current)||void 0===e||e.focus()},Oe=function(e,t){var n,r,i,a,l,c;if(t){var o=t.referrerId,u=t.linkName;T("".concat(o),"".concat(u))}var s={startDate:{day:null===(n=h.primary.dateRange)||void 0===n?void 0:n.checkInDate.day,month:null===(r=h.primary.dateRange)||void 0===r?void 0:r.checkInDate.month,year:null===(i=h.primary.dateRange)||void 0===i?void 0:i.checkInDate.year},endDate:{day:null===(a=h.primary.dateRange)||void 0===a?void 0:a.checkOutDate.day,month:null===(l=h.primary.dateRange)||void 0===l?void 0:l.checkOutDate.month,year:null===(c=h.primary.dateRange)||void 0===c?void 0:c.checkOutDate.year}};switch(e){case"OPEN":case"EDIT":var f,d,m,v;R({selectedOffers:(null===(f=z)||void 0===f?void 0:f.offerToken)?[{offerProductNaturalKey:z.offerToken}]:[],activityId:Ee,dateRange:s,dismissButtonAccessibility:null===(d=ge)||void 0===d?void 0:d.dismissButtonAccessibilityText,offerSheetHeading:null===(m=ge)||void 0===m?void 0:m.heading,offerSheetSubHeading:null===(v=ge)||void 0===v?void 0:v.subtitle,onDismiss:ke}),X.current=document.activeElement,O||(D(!0),K(!1));break;case"DISMISS":U.current=!1,K(!1);break;case"REMOVE":"function"==typeof F&&F({offerToken:"",productToken:""})}};return r.createElement(r.Fragment,null,r.createElement(o.Xw,{isVisible:M&&!O},r.createElement(o.A5,{isVisible:M&&!O,type:"bottom",triggerRef:null,liveAnnounceString:oe},r.createElement(o.XM,null,r.createElement(Pe,{wrapElement:!!(null===(i=z)||void 0===i?void 0:i.offerToken)},r.createElement(r.Fragment,null,r.createElement(pe,{data:ce}),r.createElement(me,{data:le}))),se&&de&&r.createElement(u.H3,{margin:{blockstart:"one"}},r.createElement(c.PX,{columns:["auto","max-content"]},r.createElement(u.H3,{margin:{small:{inlineend:"three"},medium:{inlineend:"unset"}}},r.createElement(c.UX,null,r.createElement(l.lu,{alignItems:"center"},r.createElement(l.Vt,null,r.createElement(l.lu,{alignItems:"center"},r.createElement(l.Vt,null,r.createElement(ue,{data:se}))))))),r.createElement(c.UX,null,r.createElement(ye,{data:de})))),r.createElement(u.H3,{margin:{blockstart:"three"}},r.createElement(c.PX,{columns:["max-content","auto"],space:{column:"twelve"}},ae.map((function(e,t){return r.createElement(c.UX,{key:"property-activities-cross-sell-action-".concat(t)},r.createElement(fe,{data:e,onActionClick:Oe}))}))))))),O&&r.createElement("div",{"data-stid":"activity-offer-side-sheet"},r.createElement(y.Viewport,null,r.createElement(y.ViewSmall,null,r.createElement(be,P(I({},N),{visible:O,onTripClickHandler:J}))),r.createElement(y.ViewLarge,null,r.createElement(Se,P(I({},N),{visible:O,onTripClickHandler:J}))))))};Oe.displayName="sharedui-PropertyActivitiesCrossSell"}}]);
//# sourceMappingURL=shared-ui-retail-lodging-property-activities-cross-sell.46b382df3a53dd41228f.js.map