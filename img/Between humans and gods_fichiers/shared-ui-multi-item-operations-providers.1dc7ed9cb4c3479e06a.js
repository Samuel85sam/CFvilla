/*@license For license information please refer to shared-ui-multi-item-operations-providers.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9059],{56604:function(e,n,t){t.d(n,{Hb:function(){return We},Z_:function(){return He},ok:function(){return Re}});var r=t(67294),a=t(98250),o=t(73030),i=t(69430),c=t(70094),u=t(8315),l=t(13943),s=t(5419),m=t(95128),p=t(30300),d=t(46605),g=t(10333),f=t(93351),S=t(78917),h=t(22335),I=t(41913),y=t(23984),P=t(50319);function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function x(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function D(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,n)||$(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function O(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||$(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}function A(){var e=b(["\n  fragment EGDSActionDialogFooterFragment on EGDSDialogFooter {\n    ... on EGDSStackedDialogFooter {\n      buttons {\n        ...PackageUIActionDialogFooterButton\n      }\n    }\n    ... on EGDSInlineDialogFooter {\n      buttons {\n        ...PackageUIActionDialogFooterButton\n      }\n    }\n  }\n\n  fragment PackageUIActionDialogFooterButton on EGDSButton {\n    primary\n    ... on PackageUIActionDialogFooterButton {\n      style\n      dialogAction {\n        ... on PackageUIActionDialogFooterButtonCloseAction {\n          analytics {\n            referrerId\n            linkName\n          }\n        }\n        ... on PackageUIActionDialogSearchLinkAction {\n          newTabAccessibilityText\n          analytics {\n            referrerId\n            linkName\n          }\n          resource {\n            ... on HttpURI {\n              relativePath\n            }\n          }\n          target\n        }\n      }\n    }\n  }\n"]);return A=function(){return e},e}function N(){var e=b(["\n  fragment EGDSHeadingFragment on EGDSHeading {\n    text\n  }\n"]);return N=function(){return e},e}function R(){var e=b(["\n  fragment EGDSParagraphFragment on EGDSParagraph {\n    text\n    size\n  }\n"]);return R=function(){return e},e}function F(){var e=b(["\n  fragment EGDSPlainTextFragment on EGDSPlainText {\n    text\n  }\n"]);return F=function(){return e},e}function T(){var e=b(["\n  fragment EGDSStylizedTextFragment on EGDSStylizedText {\n    text\n    theme\n    weight\n    decorative\n  }\n"]);return T=function(){return e},e}function _(){var e=b(["\n  fragment EGDSStandardLinkFragment on EGDSStandardLink {\n    text\n    action {\n      accessibility\n      target\n      resource {\n        value\n      }\n      analytics {\n        linkName\n        referrerId\n      }\n    }\n    icon {\n      id\n    }\n    iconPosition\n  }\n"]);return _=function(){return e},e}function G(){var e=b(["\n  fragment EGDSSpannableTextItemFragment on EGDSSpannableTextItem {\n    ...EGDSStylizedTextFragment\n    ...EGDSPlainTextFragment\n  }\n\n  ","\n  ","\n"]);return G=function(){return e},e}function M(){var e=b(["\n  fragment EGDSSpannableTextFragment on EGDSSpannableText {\n    text\n    inlineContent {\n      ...EGDSSpannableTextItemFragment\n    }\n  }\n\n  ","\n"]);return M=function(){return e},e}function U(){var e=b(["\n  fragment EGDSTextFragment on EGDSText {\n    ...EGDSHeadingFragment\n    ...EGDSParagraphFragment\n    ...EGDSPlainTextFragment\n    ...EGDSStandardLinkFragment\n    ...EGDSStylizedTextFragment\n    ...EGDSSpannableTextFragment\n  }\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return U=function(){return e},e}function w(){var e=b(["\n  fragment EGDSIconFragment on Icon {\n    description\n    id\n    size\n    theme\n    title\n    withBackground\n  }\n"]);return w=function(){return e},e}function j(){var e=b(["\n  fragment PackageUIEmptyStateErrorFragment on PackageUIEmptyStateError {\n    icon {\n      ...EGDSIconFragment\n    }\n    primary {\n      ...EGDSHeadingFragment\n    }\n    secondaries {\n      ...EGDSTextFragment\n    }\n  }\n\n  ","\n  ","\n  ","\n"]);return j=function(){return e},e}function L(){var e=b(["\n  fragment MishopUIOperationFailureDialogFragment on MishopUIOperationFailureDialog {\n    content {\n      text\n    }\n    dialog {\n      closeAnalytics {\n        linkName\n        referrerId\n      }\n      footer {\n        ...EGDSActionDialogFooterFragment\n      }\n    }\n  }\n\n  ","\n"]);return L=function(){return e},e}function z(){var e=b(["\n  fragment MultiItemSearchContextErrorResponseFragment on MultiItemSearchContextErrorResponse {\n    message\n    failureDialog {\n      ...MishopUIOperationFailureDialogFragment\n    }\n    errorContent {\n      ...PackageUIEmptyStateErrorFragment\n    }\n  }\n\n  ","\n  ","\n"]);return z=function(){return e},e}function B(){var e=b(["\n  mutation MishopSharedUIAddProductMutation(\n    $context: ContextInput!\n    $multiItemSessionId: String!\n    $activities: [ActivityNaturalKeyInput!]\n    $groundTransfers: [GroundTransfersNaturalKeyInput!]\n  ) {\n    multiItemShopping(context: $context) {\n      addProducts(sessionId: $multiItemSessionId, activities: $activities, groundTransfers: $groundTransfers) {\n        __typename\n        ... on MultiItemSearchContextCreatedResponse {\n          redirectUrl\n          action {\n            __typename\n            shoppingContext {\n              multiItem {\n                id\n              }\n            }\n            ... on FlightSearchMultiItemShoppingAction {\n              journeyContinuationId\n            }\n          }\n        }\n        ... on MultiItemSearchContextErrorResponse {\n          ...MultiItemSearchContextErrorResponseFragment\n        }\n      }\n    }\n  }\n\n  ","\n"]);return B=function(){return e},e}function K(){var e=b(["\n  mutation MishopSharedUIRemoveProductMutation(\n    $context: ContextInput!\n    $multiItemSessionId: String!\n    $activities: [ActivityNaturalKeyInput!]\n    $groundTransfers: [GroundTransfersNaturalKeyInput!]\n  ) {\n    multiItemShopping(context: $context) {\n      removeProducts(sessionId: $multiItemSessionId, activities: $activities, groundTransfers: $groundTransfers) {\n        __typename\n        ... on MultiItemSearchContextCreatedResponse {\n          redirectUrl\n          action {\n            __typename\n            shoppingContext {\n              multiItem {\n                id\n              }\n            }\n            ... on FlightSearchMultiItemShoppingAction {\n              journeyContinuationId\n            }\n          }\n        }\n        ... on MultiItemSearchContextErrorResponse {\n          ...MultiItemSearchContextErrorResponseFragment\n        }\n      }\n    }\n  }\n\n  ","\n"]);return K=function(){return e},e}function H(){var e=b(["\n  mutation MishopSharedUIReplaceProductMutation(\n    $context: ContextInput!\n    $multiItemSessionId: String!\n    $priceToken: String\n    $cars: [CarNaturalKeyInput!]\n    $flights: [FlightNaturalKeyInput!]\n    $properties: [PropertyNaturalKeyInput!]\n  ) {\n    multiItemShopping(context: $context) {\n      selectProducts(sessionId: $multiItemSessionId, priceToken: $priceToken, cars: $cars, flights: $flights, properties: $properties) {\n        __typename\n        ... on MultiItemSearchContextCreatedResponse {\n          redirectUrl\n          action {\n            __typename\n            shoppingContext {\n              multiItem {\n                id\n              }\n            }\n            ... on FlightSearchMultiItemShoppingAction {\n              journeyContinuationId\n            }\n          }\n        }\n        ... on MultiItemSearchContextErrorResponse {\n          ...MultiItemSearchContextErrorResponseFragment\n        }\n      }\n    }\n  }\n\n  ","\n"]);return H=function(){return e},e}function V(){var e=b(["\n  mutation MishopSharedUIUpdateProductMutation(\n    $context: ContextInput!\n    $multiItemSessionId: String!\n    $priceToken: String\n    $flights: [FlightNaturalKeyInput!]\n    $activity: ActivityUpdateInput\n  ) {\n    multiItemShopping(context: $context) {\n      updateProduct(sessionId: $multiItemSessionId, priceToken: $priceToken, flights: $flights, activity: $activity) {\n        __typename\n        ... on MultiItemSearchContextCreatedResponse {\n          redirectUrl\n          action {\n            __typename\n            shoppingContext {\n              multiItem {\n                id\n              }\n            }\n            ... on FlightSearchMultiItemShoppingAction {\n              journeyContinuationId\n            }\n          }\n        }\n        ... on MultiItemSearchContextErrorResponse {\n          ...MultiItemSearchContextErrorResponseFragment\n        }\n      }\n    }\n  }\n\n  ","\n"]);return V=function(){return e},e}function Y(){var e=b(["\n  mutation MishopSharedUIPrepareCheckout(\n    $context: ContextInput!\n    $activities: [ActivityNaturalKeyInput!]\n    $groundTransfers: [GroundTransfersNaturalKeyInput!]\n    $cars: [CarNaturalKeyInput!]\n    $properties: [PropertyNaturalKeyInput!]\n    $flights: [FlightNaturalKeyInput!]\n    $packages: [PackageNaturalKeyInput!]\n    $responseOptions: [PrepareCheckoutResponseOption!]\n    $totalPrice: MoneyInput\n    $cookies: String\n    $checkoutOptions: [CheckoutOptionInput!]\n  ) {\n    prepareCheckout(\n      context: $context\n      activities: $activities\n      groundTransfers: $groundTransfers\n      cars: $cars\n      properties: $properties\n      flights: $flights\n      packages: $packages\n      responseOptions: $responseOptions\n      totalPrice: $totalPrice\n      cookies: $cookies\n      checkoutOptions: $checkoutOptions\n    ) {\n      tripId\n      checkoutUrl\n      failureReason {\n        __typename\n        description\n        message\n        ... on MaxRoomsFailure {\n          groupLinkMessage\n        }\n      }\n    }\n  }\n"]);return Y=function(){return e},e}function Q(){var e=b(["\n  mutation MishopSharedUIPrepareCheckoutBySessionId(\n    $context: ContextInput!\n    $multiItemSessionId: String!\n    $cookies: String\n    $checkoutOptions: [CheckoutOptionInput!]\n  ) {\n    prepareCheckoutBySessionId(context: $context, multiItemSessionId: $multiItemSessionId, cookies: $cookies, checkoutOptions: $checkoutOptions) {\n      tripId\n      checkoutUrl\n      failureReason {\n        __typename\n        description\n        message\n        ... on MaxRoomsFailure {\n          groupLinkMessage\n        }\n      }\n    }\n  }\n"]);return Q=function(){return e},e}function X(){var e=b(["\n  mutation MishopSharedUIChangePackageMutation($context: ContextInput!, $multiItemSessionId: String!, $searchCriteria: PackageSearchCriteriaInput!) {\n    multiItemShopping(context: $context) {\n      changePackage(sessionId: $multiItemSessionId, searchCriteria: $searchCriteria) {\n        __typename\n        ... on MultiItemSearchContextCreatedResponse {\n          redirectUrl\n          action {\n            __typename\n            shoppingContext {\n              multiItem {\n                id\n              }\n            }\n          }\n        }\n        ... on MultiItemSearchContextErrorResponse {\n          ...MultiItemSearchContextErrorResponseFragment\n        }\n      }\n    }\n  }\n\n  ","\n"]);return X=function(){return e},e}function Z(){var e=b(["\n  mutation MishopSharedUISelectPackageMutation($context: ContextInput!, $multiItemSessionId: String!, $packageOfferId: String!) {\n    multiItemShopping(context: $context) {\n      selectPackage(sessionId: $multiItemSessionId, packageOfferId: $packageOfferId) {\n        __typename\n        ... on MultiItemSearchContextCreatedResponse {\n          redirectUrl\n          action {\n            __typename\n            shoppingContext {\n              multiItem {\n                id\n              }\n            }\n          }\n          target\n        }\n        ... on MultiItemSearchContextErrorResponse {\n          ...MultiItemSearchContextErrorResponseFragment\n        }\n      }\n    }\n  }\n\n  ","\n"]);return Z=function(){return e},e}function W(e){return e.reduce((function(e,n){return Object.assign(e,v({},n,{status:"UNKNOWN"}))}),{})}var q,J=(0,i.Ps)(A()),ee=(v(q={},"PRIMARY",c.Y),v(q,"TERTIARY",u.m),q),ne=function(e){return"PackageUIActionDialogFooterButton"===e.__typename&&ee[e.style]},te=function(e){var n=e.data,t=function(e,n,t){return e.buttons.filter(ne).map((function(e,a){if("PackageUIActionDialogFooterButton"!==e.__typename)return null;var o=ee[e.style],i={key:"dialog-footer-button-".concat(a),analytics:{id:e.dialogAction.analytics.referrerId,description:e.dialogAction.analytics.linkName,callback:function(e,n){return t(e,n)}}};switch(e.dialogAction.__typename){case"PackageUIActionDialogFooterButtonCloseAction":return r.createElement(o,x(k({},i),{onClick:n}),e.primary);case"PackageUIActionDialogSearchLinkAction":var c={href:"HttpURI"===e.dialogAction.resource.__typename?e.dialogAction.resource.relativePath:void 0,target:"EXTERNAL"===e.dialogAction.target?"_blank":"_self",rel:"noopener noreferrer",onClick:n};return c.href?r.createElement(o,k({},i,c),r.createElement(r.Fragment,null,e.primary,e.dialogAction.newTabAccessibilityText&&r.createElement("span",{className:"is-visually-hidden"},e.dialogAction.newTabAccessibilityText))):null;default:return null}})).filter(Boolean)}(n,e.onDialogClose,(0,a.useClickTracker)());switch(n.__typename){case"EGDSInlineDialogFooter":return r.createElement(l.Q,{stacked:!1},t);case"EGDSStackedDialogFooter":return r.createElement(l.Q,{stacked:!0},t);default:return null}};te.fragment=J,te.displayName="EGDSActionDialogFooter";var re=(0,i.Ps)(N()),ae=function(e){var n=e.headingProps,t=e.data;return r.createElement(s.y,k({},n),t.text)};ae.fragment=re,ae.displayName="EGDSHeading";var oe,ie=(0,i.Ps)(R()),ce={1:1,2:2,3:3},ue=function(e){var n=e.data,t=n.size,a=n.text;return r.createElement(m.a,{size:null!==(oe=ce[t])&&void 0!==oe?oe:void 0},a)};ue.fragment=ie,ue.displayName="EGDSParagraph";var le=(0,i.Ps)(F()),se=function(e){var n=e.textProps,t=e.data;return r.createElement(p.b,k({},n),t.text)};se.fragment=le,se.displayName="EGDSPlainText";var me,pe,de=(0,i.Ps)(T()),ge=(v(me={},"LOYALTY","loyalty"),v(me,"NEGATIVE","negative"),v(me,"POSITIVE","positive"),v(me,"EMPHASIS","emphasis"),v(me,"PRIMARY","emphasis"),v(me,"SECONDARY","default"),v(me,"INVERSE","inverse"),me),fe=(v(pe={},"BOLD","bold"),v(pe,"MEDIUM","medium"),v(pe,"REGULAR","regular"),pe),Se=function(e){var n,t,a,o,i,c,u,l,s=e.data,m=e.textProps,d=s.text,g=s.theme,f=s.weight,S=s.decorative,h=g?ge[g]:void 0,I=f?fe[f]:void 0;return"LINE_THROUGH"===S?r.createElement("s",null,r.createElement(p.b,{size:null===(n=m)||void 0===n?void 0:n.size,theme:null!==(o=null===(t=m)||void 0===t?void 0:t.theme)&&void 0!==o?o:h,weight:I,inline:null===(a=m)||void 0===a?void 0:a.inline},d)):r.createElement(p.b,{size:null===(i=m)||void 0===i?void 0:i.size,theme:null!==(l=null===(c=m)||void 0===c?void 0:c.theme)&&void 0!==l?l:h,weight:I,inline:null===(u=m)||void 0===u?void 0:u.inline},d)};Se.fragment=de,Se.displayName="EGDSStylizedText";var he,Ie=(0,i.Ps)(_()),ye=(v(he={},"EXTERNAL","_blank"),v(he,"INTERNAL","_self"),he),Pe=function(e){var n=e.data,t=e.inline,o=e.iconSize,i=n.action,c=n.text,u=n.icon,l=n.iconPosition,s=i.analytics,m=i.resource,f=i.target,S=i.accessibility,h=(0,a.useClickTracker)(),I=r.useCallback((function(){h(s.referrerId,s.linkName)}),[h,s]);return r.createElement(g.M,{onClickCapture:I,inline:null==t||t},r.createElement("a",{target:ye[f],href:m.value},u&&"TRAILING"!==l&&r.createElement(d.fR,{name:u.id,size:o}),c,u&&"TRAILING"===l&&r.createElement(d.fR,{name:u.id,size:o}),S&&r.createElement(p.b,{className:"is-visually-hidden"},S)))};Pe.displayName="EGDSStandardLink",Pe.fragment=Ie;var Ee=(0,i.Ps)(G(),Se.fragment,se.fragment),ve=function(e){var n=e.data,t=e.textProps;switch(n.__typename){case"EGDSStylizedText":return r.createElement(Se,{data:n,textProps:t});case"EGDSPlainText":return r.createElement(se,{data:n,textProps:t});default:return null}};ve.fragment=Ee,ve.displayName="EGDSSpannableTextItem";var ke=(0,i.Ps)(M(),ve.fragment),xe={margin:{inlineend:"one"}},De=function(e){var n=e.data,t=D(e,["data"]);return 0===n.inlineContent.length?r.createElement(p.b,k({},t),n.text):r.createElement(r.Fragment,null,n.inlineContent.map((function(e,n){return r.createElement(f.l,x(k({},xe),{key:"spannable-text-item-".concat(n)}),r.createElement(ve,k({data:e},t)))})))};De.fragment=ke,De.displayName="EGDSSpannableText";var Ce=(0,i.Ps)(U(),ae.fragment,ue.fragment,se.fragment,Pe.fragment,Se.fragment,De.fragment),be=function(e){var n=e.data,t=e.headingProps,a=e.textProps;switch(n.__typename){case"EGDSHeading":return r.createElement(ae,{data:n,headingProps:t});case"EGDSParagraph":return r.createElement(ue,{data:n});case"EGDSPlainText":return r.createElement(se,{data:n,textProps:a});case"EGDSStandardLink":return r.createElement(Pe,{data:n});case"EGDSStylizedText":return r.createElement(Se,{data:n,textProps:a});case"EGDSSpannableText":return r.createElement(De,{data:n,textProps:a});default:return null}};be.fragment=Ce,be.displayName="EGDSText";var Oe=function(e){var n,t,i=e.useRegisterOperations,c=(0,a.useClickTracker)(),u=C((0,o.useDialog)("operation-failure-dialog"),3),l=u[0],s=u[1],m=u[2],p=C(r.useState(),2),d=p[0],g=p[1],f=r.useCallback((function(){var e;(null===(e=d)||void 0===e?void 0:e.dialog.closeAnalytics)&&c(d.dialog.closeAnalytics.referrerId,d.dialog.closeAnalytics.linkName),s.closeDialog()}),[c,s,null===(t=d)||void 0===t||null===(n=t.dialog)||void 0===n?void 0:n.closeAnalytics]);return i(s.openDialog,g),d?r.createElement(I.U,{isVisible:l},r.createElement(m,null,r.createElement(S.A,{dialogShow:l,returnFocusOnClose:!0},r.createElement(h.D,null,r.createElement(ue,{data:x(k({},d.content),{size:2})})),r.createElement(te,{data:d.dialog.footer,onDialogClose:f})))):null};function $e(e){return function(){return Promise.resolve({success:!1,failureReason:"no SessionOperationsProvider in tree found while calling ".concat(e),failure:{type:"NO_PROVIDER"}})}}var Ae={addProduct:$e("addProduct"),updateProduct:$e("updateProduct"),removeProduct:$e("removeProduct"),replaceProduct:$e("replaceProduct")},Ne=r.createContext(x(k({},Ae),{state:W(Object.keys(Ae))}));function Re(){var e=r.useContext(Ne),n=e.addProduct,t=e.updateProduct,a=e.removeProduct,o=e.replaceProduct,i=D(e,["addProduct","updateProduct","removeProduct","replaceProduct"]);return k({addProduct:r.useCallback(n,[]),updateProduct:r.useCallback(t,[]),removeProduct:r.useCallback(a,[]),replaceProduct:r.useCallback(o,[])},i)}function Fe(e){return function(n,t,r,a){return t((function(n){return x(k({},n),v({},e.operationName,{status:"IN_PROGRESS",event:a}))})),n({variables:r}).then((function(n){if(n.errors){var r={failureReason:"".concat(e.operationName," failed with graphql error(s)"),failure:{type:"GRAPHQL",errors:n.errors}};return t((function(n){return x(k({},n),v({},e.operationName,{status:"FAILURE",event:a,error:r}))})),k({success:!1},r)}return n.data?(t((function(t){return x(k({},t),v({},e.operationName,{status:"SUCCESS",event:a,result:n}))})),k({success:!0},n)):Promise.reject(new Error("".concat(e.operationName," returned null data")))})).catch((function(n){var r,o,i="unexpected error encountered while calling ".concat(e.operationName),c="".concat(i,": ").concat((r=n,(null!=(o=Error)&&"undefined"!=typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](r):r instanceof o)?n.message:n)),u={failureReason:i,failure:{type:"UNKNOWN",error:new Error(c)}};return t((function(n){return x(k({},n),v({},e.operationName,{status:"FAILURE",event:a,error:u}))})),k({success:!1},u)}))}}Fe({operationName:"addProduct"});var Te=(0,i.Ps)(w()),_e=function(e){var n=e.data,t=e.defaultIconSize,a=e.defaultIconTheme,o=n.description,i=n.id,c=n.size,u=n.title,l=n.theme,s=n.withBackground;return r.createElement(d.fR,{description:o,id:i,name:i,size:c?d.eZ[c]:t,title:null!=u?u:void 0,theme:null!=l?l:a,shadow:Boolean(s)})};_e.displayName="EGDSIcon",_e.fragment=Te;var Ge=(0,i.Ps)(j(),_e.fragment,be.fragment,ae.fragment),Me=function(e){var n=e.data,t=n.icon,a=n.primary,o=n.secondaries;return r.createElement(y.v,{direction:"column",alignItems:"center"},r.createElement(_e,{data:t,defaultIconSize:d.eZ.XLARGE}),r.createElement(f.l,{padding:{blockstart:"six"}},r.createElement("div",null,r.createElement(ae,{data:a,headingProps:{size:5}}))),o.length>0&&r.createElement(f.l,{margin:{blockstart:"one"}},r.createElement("div",null,o.map((function(e,n){return r.createElement(be,{data:e,textProps:{size:300},key:n})})))))};Me.fragment=Ge,Me.displayName="PackageUIEmptyStateErrorFragment";var Ue=(0,i.Ps)(L(),te.fragment),we=(0,i.Ps)(z(),Ue,Me.fragment);(0,i.Ps)(B(),we),Fe({operationName:"removeProduct"}),(0,i.Ps)(K(),we),Fe({operationName:"replaceProduct"}),(0,i.Ps)(H(),we),Fe({operationName:"updateProduct"}),(0,i.Ps)(V(),we);function je(e){return function(){return Promise.resolve({success:!1,failureReason:"no PrepareCheckoutOperationsProvider in tree found while calling ".concat(e),failure:{type:"NO_PROVIDER"}})}}var Le={prepareCheckoutBySessionId:je("prepareCheckoutBySessionId"),prepareCheckout:je("prepareCheckout")};r.createContext(x(k({},Le),{state:W(Object.keys(Le))})),(0,i.Ps)(Y()),Fe({operationName:"prepareCheckout"}),(0,i.Ps)(Q()),Fe({operationName:"prepareCheckoutBySessionId"});function ze(e){return function(){return Promise.resolve({success:!1,failureReason:"no PackageOperationsProvider in tree found while calling ".concat(e),failure:{type:"NO_PROVIDER"}})}}var Be={selectPackage:ze("selectPackage"),changePackage:ze("changePackage")},Ke=r.createContext(x(k({},Be),{state:W(Object.keys(Be))}));function He(){var e=r.useContext(Ke),n=e.changePackage,t=e.selectPackage,a=D(e,["changePackage","selectPackage"]);return k({changePackage:r.useCallback(n,[]),selectPackage:r.useCallback(t,[])},a)}function Ve(e,n){var t=He().state;r.useEffect((function(){if("SUCCESS"===t.selectPackage.status){var r=t.selectPackage.result.data.multiItemShopping.selectPackage;"MultiItemSearchContextErrorResponse"===r.__typename&&r.failureDialog&&(n(r.failureDialog),e())}}),[t.selectPackage]),r.useEffect((function(){if("SUCCESS"===t.changePackage.status){var r=t.changePackage.result.data.multiItemShopping.changePackage;"MultiItemSearchContextErrorResponse"===r.__typename&&r.failureDialog&&(n(r.failureDialog),e())}}),[t.changePackage])}var Ye=Fe({operationName:"changePackage"}),Qe=(0,i.Ps)(X(),we),Xe=Fe({operationName:"selectPackage"}),Ze=(0,i.Ps)(Z(),we),We=function(e){var n=e.children,t=e.autoRenderFailureDialog,a=void 0!==t&&t,o=C((0,P.D)(Ze),1)[0],i=C((0,P.D)(Qe),1)[0],c=C(r.useState(W(Object.keys(Be))),2),u=c[0],l=c[1];return r.createElement(Ke.Provider,{value:{selectPackage:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Xe.apply(void 0,[o,l].concat(O(n)))},changePackage:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Ye.apply(void 0,[i,l].concat(O(n)))},state:u}},a&&r.createElement(Oe,{useRegisterOperations:Ve}),n)}}}]);
//# sourceMappingURL=shared-ui-multi-item-operations-providers.1dc7ed9cb4c3479e06ab.js.map