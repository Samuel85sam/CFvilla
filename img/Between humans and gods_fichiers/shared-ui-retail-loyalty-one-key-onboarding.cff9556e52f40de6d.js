/*@license For license information please refer to shared-ui-retail-loyalty-one-key-onboarding.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[714],{77220:function(e,n,t){t.d(n,{L:function(){return yn}});var a=t(67294),r=t(64418),i=t(69430),o=t(71641),l=t(95878),c=t(73030),s=t(85395),u=t(41913),d=t(98250),m=t(70094),g=t(53274),E=t(8315),O=t(16550),f=t(46605),v=t(91410),b=t(35957),p=t(23236),_=t(51330),I=t(8470),N=t(10333),R=t(30300),y=t(19633),h=t(13413),S=t(49349),D=t(93351),T=t(41849),k=t(50319),A=t(30082),C=t(20515),G=t(23984),x=t(91233),M=t(34353),B=t(5419),w=t(10273),F=t(22247),L=t(27749),U=t(52818),K=t(85213),P=t(29097);function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){Y(e,n,t[n])}))}return e}function H(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function V(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);o=!0);}catch(c){l=!0,r=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw r}}return i}}(e,n)||Q(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function $(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){if(e){if("string"==typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,n):void 0}}function X(){var e=W(["\n  fragment EGDSButtonFragment on EGDSButton {\n    primary\n    accessibility\n    disabled\n    analytics {\n      linkName\n      referrerId\n    }\n    action {\n      ...ButtonLinkActionFragment\n    }\n  }\n\n  fragment ButtonLinkActionFragment on UILinkAction {\n    resource {\n      ...HttpURIFragment\n    }\n    target\n    useRelativePath\n  }\n\n  fragment HttpURIFragment on HttpURI {\n    relativePath\n    value\n  }\n"]);return X=function(){return e},e}function J(){var e=W(["\n  fragment EGDSIconFragment on Icon {\n    description\n    id\n    size\n    theme\n    title\n    withBackground\n  }\n"]);return J=function(){return e},e}function q(){var e=W(["\n  fragment EGDSIllustrationFragment on Illustration {\n    description\n    id\n    link: url\n  }\n"]);return q=function(){return e},e}function Z(){var e=W(["\n  fragment EGDSMarkFragment on Mark {\n    description\n    id\n    markSize: size\n    url {\n      ... on HttpURI {\n        __typename\n        relativePath\n        value\n      }\n    }\n  }\n"]);return Z=function(){return e},e}function ee(){var e=W(["\n  fragment EGDSGraphicFragment on UIGraphic {\n    ... on Icon {\n      ...EGDSIconFragment\n    }\n\n    ... on Mark {\n      ...EGDSMarkFragment\n    }\n\n    ... on Illustration {\n      ...EGDSIllustrationFragment\n    }\n  }\n\n  ","\n  ","\n  ","\n"]);return ee=function(){return e},e}function ne(){var e=W(["\n  fragment EGDSImageFragment on Image {\n    description\n    url\n    aspectRatio\n  }\n"]);return ne=function(){return e},e}function te(){var e=W(["\n  fragment EGDSStandardLinkFragment on EGDSStandardLink {\n    action {\n      accessibility\n      analytics {\n        linkName\n        referrerId\n      }\n      resource {\n        value\n        ... on HttpURI {\n          relativePath\n        }\n      }\n      target\n      useRelativePath\n    }\n    disabled\n    standardLinkIcon: icon {\n      ...EGDSIconFragment\n    }\n    iconPosition\n    size\n    text\n  }\n\n  ","\n"]);return te=function(){return e},e}function ae(){var e=W(["\n  fragment OnboardingButtonActionFragment on OneKeyOnboardingButtonAction {\n    ...OnboardingButtonDismissActionFragment\n    ...OnboardingButtonUILinkActionFragment\n    ...OnboardingButtonOperationActionFragment\n  }\n\n  fragment OnboardingButtonDismissActionFragment on EGDSDismissAction {\n    accessibility\n    analytics {\n      linkName\n      referrerId\n    }\n    label\n  }\n\n  fragment OnboardingButtonUILinkActionFragment on UILinkAction {\n    accessibility\n    analytics {\n      linkName\n      referrerId\n    }\n    resource {\n      value\n      ...ButtonHttpURIFragment\n    }\n    target\n    useRelativePath\n  }\n\n  fragment ButtonHttpURIFragment on HttpURI {\n    relativePath\n  }\n\n  fragment OnboardingButtonOperationActionFragment on OnboardingOperationAction {\n    actionType\n  }\n"]);return ae=function(){return e},e}function re(){var e=W(["\n  fragment EGDSMarkCardFragment on EGDSMarkCard {\n    description\n    id\n    mark {\n      ...EGDSMarkFragment\n    }\n    subTitle\n    title\n  }\n  ","\n"]);return re=function(){return e},e}function ie(){var e=W(["\n  fragment EGDSCardFragment on EGDSCard {\n    ... on EGDSMarkCard {\n      ...EGDSMarkCardFragment\n    }\n  }\n  ","\n"]);return ie=function(){return e},e}function oe(){var e=W(["\n  fragment ContextualOnboardingFragment on OneKeyContextualOnboarding {\n    brandLogos {\n      ...EGDSGraphicFragment\n    }\n    headerBrandLogo {\n      ...EGDSGraphicFragment\n    }\n    link {\n      icon {\n        ...EGDSIconFragment\n      }\n      ...EGDSStandardLinkFragment\n    }\n    oneKeyCard {\n      ...EGDSCardFragment\n    }\n    primaryButton {\n      button {\n        ...EGDSButtonFragment\n      }\n      action {\n        ...OnboardingButtonActionFragment\n      }\n    }\n    subText\n    title\n    titleImage {\n      ...EGDSGraphicFragment\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return oe=function(){return e},e}function le(){var e=W(["\n  fragment InterstitialLoadingFragment on OneKeyOnboardingInterstitialLoading {\n    headerBrandLogo {\n      ...EGDSGraphicFragment\n    }\n    titleMessage\n    waitingMessage\n    welcomeMessage\n    timeoutMessage\n    brandLogos {\n      ...EGDSGraphicFragment\n    }\n    headerBrandLogo {\n      ...EGDSGraphicFragment\n    }\n    titleImage {\n      ...EGDSGraphicFragment\n    }\n    onLoadOperation {\n      actionType\n    }\n    primaryButton {\n      button {\n        ...EGDSButtonFragment\n      }\n      action {\n        ...OnboardingButtonActionFragment\n      }\n    }\n  }\n\n  ","\n  ","\n  ","\n"]);return le=function(){return e},e}function ce(){var e=W(["\n  mutation OnboardingOperation(\n    $context: ContextInput!\n    $onboardingOperation: String!\n    $additionalContext: AdditionalOnboardingOperationContextInput\n  ) {\n    oneKeyOnboardingOperation(context: $context, onboardingOperation: $onboardingOperation, additionalContext: $additionalContext) {\n      operationStatus\n      operationResult {\n        ...OnboardingButtonUILinkActionFragment\n        ...OnboardingButtonDismissActionFragment\n        ...ContextualOnboardingFragment\n        ...InterstitialLoadingFragment\n      }\n    }\n  }\n\n  fragment OnboardingButtonDismissActionFragment on EGDSDismissAction {\n    accessibility\n    analytics {\n      linkName\n      referrerId\n    }\n    label\n  }\n\n  ","\n  ","\n"]);return ce=function(){return e},e}function se(){var e=W(["\n  fragment GettingStartedFragment on OneKeyOnboardingGettingStarted {\n    headerImage {\n      ...EGDSImageFragment\n    }\n    title\n    subTitles\n    images {\n      ...EGDSGraphicFragment\n    }\n    gettingStartedlink: link {\n      icon {\n        ...EGDSIconFragment\n      }\n      ...EGDSStandardLinkFragment\n    }\n    consentText\n    primaryButton {\n      ...GettingStartedPrimaryButtonFragment\n    }\n  }\n\n  fragment GettingStartedPrimaryButtonFragment on OneKeyOnboardingButton {\n    button {\n      ...EGDSButtonFragment\n    }\n    action {\n      ...OnboardingButtonActionFragment\n    }\n  }\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return se=function(){return e},e}function ue(){var e=W(["\n  fragment TermsAndConditionsFragment on OneKeyOnboardingTermsAndConditions {\n    headerBrandLogo {\n      ...EGDSGraphicFragment\n    }\n    additionalText\n    dismissButton {\n      ...EGDSButtonFragment\n    }\n    images {\n      ...EGDSGraphicFragment\n    }\n    links {\n      ...EGDSStandardLinkFragment\n    }\n    primaryButton {\n      ...TermsPrimaryButtonFragment\n    }\n    secondaryButton {\n      ...EGDSButtonFragment\n    }\n    onDismissOperation {\n      actionType\n    }\n    subText\n    title\n  }\n\n  fragment TermsPrimaryButtonFragment on OneKeyOnboardingButton {\n    button {\n      ...EGDSButtonFragment\n    }\n    action {\n      ...OnboardingButtonActionFragment\n    }\n  }\n\n  ","\n  ","\n  ","\n  ","\n"]);return ue=function(){return e},e}function de(){var e=W(["\n  fragment AccountMergeFragment on OneKeyOnboardingAccountMerge {\n    headerBrandLogo {\n      ...EGDSGraphicFragment\n    }\n    images {\n      ...EGDSGraphicFragment\n    }\n    accountMergelink: link {\n      ...EGDSStandardLinkFragment\n    }\n    primaryButton {\n      button {\n        ...EGDSButtonFragment\n      }\n      action {\n        ...OnboardingButtonActionFragment\n      }\n    }\n    subTitles\n    title\n  }\n\n  ","\n  ","\n  ","\n  ","\n"]);return de=function(){return e},e}function me(){var e=W(["\n  query OneKeyOnboardingQuery($context: ContextInput!, $additionalContext: AdditionalOnboardingContextInput) {\n    oneKeyOnboarding(context: $context, additionalContext: $additionalContext) {\n      ...OneKeyOnboardingSheetFragment\n    }\n  }\n\n  fragment OneKeyOnboardingSheetFragment on OneKeyOnboardingSheet {\n    element {\n      ...OneKeyOnboardingResultFragment\n    }\n  }\n\n  fragment OneKeyOnboardingResultFragment on OneKeyOnboardingResult {\n    ...GettingStartedFragment\n    ...TermsAndConditionsFragment\n    ...InterstitialLoadingFragment\n    ...AccountMergeFragment\n    ...ContextualOnboardingFragment\n  }\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return me=function(){return e},e}var ge,Ee={ONE_KEY_ONBOARDING_QUERY_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_QUERY_ERROR"),ONE_KEY_ONBOARDING_GENERIC_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_GENERIC_MUTATION_ERROR"),ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_ACCEPT_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_ACCEPT_MUTATION_ERROR"),ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_DECLINE_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_DECLINE_MUTATION_ERROR"),ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_DISMISS_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_DISMISS_MUTATION_ERROR"),ONE_KEY_ONBOARDING_ACCOUNT_MERGE_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_ACCOUNT_MERGE_MUTATION_ERROR"),ONE_KEY_ONBOARDING_INTERSTITIAL_LOADING_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_INTERSTITIAL_LOADING_MUTATION_ERROR"),ONE_KEY_ONBOARDING_INTERSTITIAL_LOADING_TIMEOUT_ACTION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_INTERSTITIAL_LOADING_TIMEOUT_ACTION_ERROR"),ONE_KEY_ONBOARDING_CONTEXTUAL_ONBOARDING_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_CONTEXTUAL_ONBOARDING_MUTATION_ERROR"),ONE_KEY_ONBOARDING_HEADER_DISMISS_MUTATION_ERROR:new s.nS(s.nl.ERROR,"ONE_KEY_ONBOARDING_HEADER_DISMISS_MUTATION_ERROR")},Oe=function(e){return JSON.stringify(e)},fe=function(e){var n;return"OnboardingOperationAction"===(null===(n=e)||void 0===n?void 0:n.__typename)?e.actionType:""},ve=function(){window.location.href="/onboarding/error?origin=".concat(encodeURIComponent(window.location.href))},be=function(e){var n,t,a;window.location.href="".concat((t=(n=e).resource,a=n.useRelativePath,"HttpURI"===t.__typename&&a?t.relativePath:t.value))},pe=function(e){var n=V(e.split("?"),2),t=n[0],a=n[1],r=encodeURIComponent(t),i="";return a&&(i=a.split("&").map((function(e){var n=V(e.split("="),2),t=n[0],a=n[1];return"".concat(t,"=").concat(encodeURIComponent(a))})).join("&")),(i?"".concat(r,"?").concat(i):r).replace(/%2F/g,"/")},_e=function(e){try{return function(e){var n=e.pathname+e.search;return pe(n)}(new URL(e))}catch(n){return/^\/[^/].*/.test(e)?pe(e):"/"}},Ie=(Y(ge={},"EXTERNAL","_blank"),Y(ge,"INTERNAL","_self"),ge),Ne=function(e){return Ie[e.target]},Re=(0,i.Ps)(X()),ye=function(e){var n,t,r=e.className,i=e.dataStid,o=e.domRef,c=e.href,s=e.isFullWidth,u=e.onClickHandler,f=e.size,v=e.inverse,b=e.isDisabled,p=e.data,_=p.__typename,I=p.accessibility,N=p.primary,R=p.disabled,y=p.analytics,h=p.action,S=(0,d.useClickTracker)(),D=function(e){var n;if("UILinkAction"!==(null===(n=e)||void 0===n?void 0:n.__typename))return{};var t=function(e){return"HttpURI"!==e.resource.__typename?null:e.useRelativePath?e.resource.relativePath:e.resource.value}(e);return t?{href:t,target:Ne(e),tag:"a"}:{}}(h),T=function(e){var n,t=e.indexOf("uurl")>-1,r=(0,O.useLocation)(),i=function(){return{pathname:"".concat(r.pathname),search:"".concat(r.search),hash:"".concat(r.hash)}},o=(0,l.v)().context,c=V((0,a.useState)(i),2),s=c[0],u=c[1],d=null===(n=o)||void 0===n?void 0:n.siteId;(0,a.useEffect)((function(){var e=function(){return u(i())};return window.addEventListener("popstate",e),function(){return window.removeEventListener("popstate",e)}}),[i]);var m,g,E,f,v,b,p="";return t||(p=e+(-1!==e.indexOf("?")?"":"?")+(g=d,E=(m=s||{}).pathname,f=m.search,v=m.hash,b=E.concat(f,v),30031===g?"&redirectUrl=targeturl=".concat(encodeURIComponent(b),"&referrerId=wl_prod"):"&uurl=".concat(encodeURIComponent("e3id=redr&rurl=".concat(b))))),p}(null!==(t=D.href)&&void 0!==t?t:""),k=a.useCallback((function(){var e;null===(e=u)||void 0===e||e(),y&&S(y.referrerId,y.linkName)}),[u,S,y]);if(!N)return null;(null===(n=D)||void 0===n?void 0:n.href)&&T&&(D.href=T);var A=j({"aria-label":null!=I?I:void 0,className:r,disabled:b||R,href:c,isFullWidth:s,onClick:k,size:f,domRef:o},D);switch(_){case"UIPrimaryButton":return a.createElement(m.Y,H(j({},A),{"data-stid":i,inverse:v}),N);case"UISecondaryButton":return a.createElement(g.p,H(j({},A),{"data-stid":i,inverse:v}),N);case"UITertiaryButton":return a.createElement(E.m,H(j({},A),{"data-stid":i,inverse:v}),N);default:return null}};ye.fragment=Re,ye.displayName="EGDSButton";var he=(0,i.Ps)(J()),Se=function(e){var n,t,r,i,o,l,c,s=e.className,u=e.theme,d=e.data,m=(null===(n=d)||void 0===n?void 0:n.withBackground)?"info":void 0;return a.createElement(f.fR,{className:s,description:null===(t=d)||void 0===t?void 0:t.description,id:null===(r=d)||void 0===r?void 0:r.id,name:null!==d?d.id:"",size:(null===(i=d)||void 0===i?void 0:i.size)?f.eZ[d.size]:void 0,title:null!==(c=null===(o=d)||void 0===o?void 0:o.title)&&void 0!==c?c:void 0,theme:u||(null===(l=d)||void 0===l?void 0:l.theme)||void 0,spotlight:m})};Se.displayName="EGDSIcon",Se.fragment=he;var De=(0,i.Ps)(q()),Te=function(e){var n=e.data;return a.createElement(v.a,{alt:n.description,url:n.link})};Te.displayName="Illustration",Te.fragment=De;var ke=(0,i.Ps)(Z()),Ae=function(e){var n,t=e.className,r=e.markSize,i=e.data;return a.createElement(b.F,{className:t,description:i.description,id:i.id,name:i.id,size:r||i.markSize&&p.j[i.markSize],url:null===(n=i.url)||void 0===n?void 0:n.value})};Ae.displayName="EGDSMark",Ae.fragment=ke;var Ce,Ge=(0,i.Ps)(ee(),Se.fragment,Ae.fragment,Te.fragment),xe=function(e){var n=e.className,t=e.markSize,r=e.data;switch(r.__typename){case"Icon":return a.createElement(Se,{className:n,data:r});case"Mark":return a.createElement(Ae,{className:n,data:r,markSize:t});case"Illustration":return a.createElement(Te,{data:r});default:return null}};xe.displayName="EGDSGraphic",xe.fragment=Ge;var Me,Be=(Y(Ce={},"ONE_ONE",_.s.R1_1),Y(Ce,"FOUR_THREE",_.s.R4_3),Y(Ce,"SIXTEEN_NINE",_.s.R16_9),Y(Ce,"THREE_TWO",_.s.R3_2),Y(Ce,"THREE_FOUR",_.s.R3_4),Y(Ce,"TWENTY_ONE_NINE",_.s.R21_9),Y(Ce,"FOUR_ONE",_.s.R4_1),Ce),we=(0,i.Ps)(ne()),Fe=function(e){var n=e.data,t=n.description,r=n.url,i=n.aspectRatio,o=e.className,l=e.lazyLoading,c=e.placeholderImage,s=e.roundcorner,u=e.ratio||(i?Be[i]:_.s.R1_1);return a.createElement(_.N,{className:o,ratio:u,roundcorner:s},a.createElement(I.p,{alt:t,src:r,lazyLoading:l,placeholderImage:c}))};Fe.fragment=we,Fe.displayName="EGDSImage";var Le,Ue=(Y(Me={},"SMALL","small"),Y(Me,"MEDIUM","medium"),Y(Me,"LARGE","large"),Me),Ke=(Y(Le={},"EXTERNAL","_blank"),Y(Le,"INTERNAL","_self"),Le),Pe=(0,i.Ps)(te(),Se.fragment),ze=function(e){var n=e.icon,t=e.iconPosition,r=e.iconPositionToMatch;return n&&t===r?a.createElement(Se,{data:n}):null},Ye=function(e){var n=e.className,t=e.dataStid,r=e.inline,i=e.theme,o=e.align,l=e.onClickHandler,c=e.data,s=c.action,u=s.analytics,m=s.resource,g=s.target,E=s.accessibility,O=s.useRelativePath,f=c.disabled,v=c.iconPosition,b=c.standardLinkIcon,p=c.size,_=c.text,I=(0,d.useClickTracker)(),y=a.useCallback((function(){I(u.referrerId,u.linkName),l&&l()}),[I,u,l]),h=a.useCallback((function(){return"HttpURI"===m.__typename&&O?m.relativePath:m.value}),[m,O]);return a.createElement(N.M,{className:n,"data-stid":t,size:Ue[p],onClickCapture:y,inline:r,disabled:f,theme:i||"default",align:o},a.createElement("a",{target:Ke[g],href:h()},a.createElement(ze,{icon:b,iconPosition:v,iconPositionToMatch:"LEADING"}),_,a.createElement(ze,{icon:b,iconPosition:v,iconPositionToMatch:"TRAILING"}),E&&a.createElement(R.b,{className:"is-visually-hidden"},E)))};Ye.fragment=Pe,Ye.displayName="EGDSStandardLink";var je=function(e){var n=(0,d.useClickstreamAnalytics)();(0,a.useEffect)((function(){e&&function(e,n){var t=e.track,a=[{schemaName:"referrer",messageContent:{eventType:"impression",linkName:n.linkName,referrerId:n.referrerId}}];t(d.ITrackType.EVENT,{data:a})}(n,e)}),[])},He=(0,i.Ps)(ae()),Ve=(0,a.createContext)({currentSheet:null,navigateToNextSheet:function(){},addSheet:function(){},setSheets:function(){}}),We=function(e){var n=e.mockedContext,t=e.children,r=V((0,a.useState)({sheets:[],currentSheet:null,currentSheetIndex:0}),2),i=r[0],o=r[1],l=(0,a.useCallback)((function(){o((function(e){var n=e.currentSheetIndex+1;return e.sheets[n]?H(j({},e),{currentSheet:e.sheets[n].element,currentSheetIndex:n}):e}))}),[]),c=(0,a.useCallback)((function(e){o((function(n){return H(j({},n),{sheets:$(n.sheets).concat([e])})}))}),[]),s=(0,a.useCallback)((function(e){o((function(n){var t;return H(j({},n),{sheets:e,currentSheet:(null===(t=e[0])||void 0===t?void 0:t.element)||null,currentSheetIndex:0})}))}),[]),u=(0,a.useMemo)((function(){return{currentSheet:i.currentSheet,navigateToNextSheet:l,addSheet:c,setSheets:s}}),[i,l,c,s]);return a.createElement(Ve.Provider,{value:n||u},t)},$e=function(){return(0,a.useContext)(Ve)},Qe=function(){var e=$e(),n=e.navigateToNextSheet,t=e.addSheet,r=(0,s.Iw)(Ee);return{handleOperationResponse:(0,a.useCallback)((function(e,a){var i,o,l=(null===(i=(e||{}).data)||void 0===i?void 0:i.oneKeyOnboardingOperation)||{},c=l.operationStatus,s=l.operationResult;if(null!==s||"SUCCEEDED"!==c){if("FAILED"===c)return r.ONE_KEY_ONBOARDING_GENERIC_MUTATION_ERROR.log(Oe({message:"OnboardingOperation mutation error. operationStatus: FAILED"})),void ve();switch(null===(o=s)||void 0===o?void 0:o.__typename){case"OneKeyContextualOnboarding":case"OneKeyOnboardingInterstitialLoading":return t({__typename:"OneKeyOnboardingSheet",element:j({},s)}),void n();case"UILinkAction":var u=s.accessibility;return(0,T.liveAnnounce)(u||void 0),void be(s);case"EGDSDismissAction":var d=s.accessibility;return(0,T.liveAnnounce)(d||void 0),void a();default:r.ONE_KEY_ONBOARDING_GENERIC_MUTATION_ERROR.log(Oe({message:"OnboardingOperation mutation error. Invalid operationResult or typename: ".concat(JSON.stringify(s))})),ve()}}else n()}),[n,t,r])}},Xe=(0,i.Ps)(re(),Ae.fragment),Je=function(e){var n=e.data,t=e.externalMargin,r=e.markSize,i=void 0===r?18:r,o=n.mark,l=n.subTitle,c=n.title,s=t;return a.createElement(D.l,{margin:s},a.createElement(A.t,{border:!0},a.createElement(C.U,{padded:[]},a.createElement(D.l,{padding:{inline:"six",block:"sixteen"}},a.createElement(G.v,{wrap:"wrap",alignItems:"center",justifyContent:"center",direction:"column"},a.createElement(x.t,{alignSelf:"center"},a.createElement(D.l,{margin:{blockend:"six",inline:"sixteen"}},o&&a.createElement(Ae,{data:o,markSize:i}))),a.createElement(x.t,null,a.createElement(D.l,{margin:{blockend:"two",blockstart:"four"}},a.createElement(R.b,{size:400,weight:"medium",align:"center"},c))),a.createElement(x.t,null,a.createElement(R.b,{size:600,weight:"bold",align:"center"},l)))))))};Je.displayName="EGDSMarkCard",Je.fragment=Xe;var qe=(0,i.Ps)(ie(),Je.fragment),Ze=function(e){var n=e.className,t=e.data,r=e.externalMargin;return"EGDSMarkCard"===t.__typename?a.createElement(Je,{className:n,data:t,externalMargin:r}):null};Ze.displayName="EGDSCard",Ze.fragment=qe;var en=(0,a.createContext)({isMutationInProgress:!1,onMutationCalled:function(){}}),nn=function(e){var n=e.isMutationInProgress,t=e.onMutationCalled,r=e.children,i=(0,a.useMemo)((function(){return{isMutationInProgress:n,onMutationCalled:t}}),[n,t]);return a.createElement(en.Provider,{value:i},r)},tn=function(){return(0,a.useContext)(en)},an=function(e){var n=e.closeDialog,t=e.dismissButton,r=e.headerBrandLogo,i=e.onDismissOperation,o=e.additionalContext,l=tn(),c=l.isMutationInProgress,u=l.onMutationCalled,m=(0,d.useClickTracker)(),g=(0,s.Iw)(Ee),O=Qe().handleOperationResponse,v=V(dn(i,o),2),b=v[0],_=v[1].called;(0,a.useEffect)((function(){_&&u()}),[u,_]);var I=(0,a.useCallback)((function(){var e;if(null===(e=t)||void 0===e?void 0:e.analytics){var a=t.analytics,r=a.referrerId,o=a.linkName;m(r,o)}b().then((function(e){O(e,n)})).catch((function(e){g.ONE_KEY_ONBOARDING_HEADER_DISMISS_MUTATION_ERROR.log(Oe({message:"Onboarding Header ".concat(fe(i)," mutation error"),error:e})),ve()}))}),[t,m,b,O,n,g,i]);return r?a.createElement(L.O,{type:"relative"},a.createElement(w.n,null,a.createElement(F.s,null,a.createElement(G.v,{justifyContent:"center"},a.createElement(x.t,null,a.createElement(y.Viewport,null,a.createElement(y.ViewSmall,null,a.createElement(xe,{data:r,markSize:p.j.MEDIUM})),a.createElement(y.ViewMedium,null,a.createElement(xe,{data:r,markSize:7}))))),t&&a.createElement(L.O,{type:"absolute",position:{top:"center",left:"two"},cloneElement:!0},a.createElement(E.m,{disabled:c,onClick:I},a.createElement(f.fR,{name:"close",description:t.accessibility||""})))))):null},rn=function(e){var n=e.logos,t=e.className;return a.createElement(G.v,{className:t,justifyContent:"center",alignItems:"center",space:"three"},n.map((function(e){return a.createElement(x.t,{key:e.description},a.createElement(xe,{data:e,markSize:p.j.SMALL}))})))},on=(0,i.Ps)(oe(),xe.fragment,Se.fragment,Ye.fragment,Ze.fragment,ye.fragment,He),ln=function(e){var n=e.data,t=e.isDialogOpen,r=e.closeDialog,i=e.additionalContext,o=n.titleImage,l=n.brandLogos,c=n.oneKeyCard,u=n.title,d=n.subText,m=n.link,g=n.primaryButton,E=n.headerBrandLogo;je({linkName:"Contextual Onboarding Page in the One Key Onboarding flow has been viewed",referrerId:"OneKey.Onboarding.ContextualOnboarding"});var O=(0,s.Iw)(Ee),f=Qe().handleOperationResponse,v=V(dn(g.action,i),2),b=v[0],p=v[1].called,_=(0,a.useCallback)((function(){b().then((function(e){var n,t;"EGDSDismissAction"===(null===(t=e.data)||void 0===t||null===(n=t.oneKeyOnboardingOperation.operationResult)||void 0===n?void 0:n.__typename)?window.location.reload():f(e,r)})).catch((function(e){O.ONE_KEY_ONBOARDING_CONTEXTUAL_ONBOARDING_MUTATION_ERROR.log(Oe({message:"Contextual Onboarding ".concat(fe(g.action)," mutation error"),error:e})),ve()}))}),[b,f,r,O,g.action]),I=E&&a.createElement(y.Viewport,null,a.createElement(y.ViewMedium,null,a.createElement(an,{closeDialog:r,headerBrandLogo:E,onDismissOperation:null,additionalContext:i}))),N=a.createElement(G.v,{justifyContent:"center"},a.createElement(x.t,null,a.createElement(Ze,{data:c,externalMargin:{inlineend:"six",inlinestart:"six"}})));return a.createElement(M.K,{isVisible:t,triggerRef:null,type:"full"},I,a.createElement(S.z,null,a.createElement(G.v,{direction:"column",alignItems:"center",tag:"main"},a.createElement(x.t,{alignSelf:"center",maxWidth:"one_hundred_twelve"},a.createElement(D.l,{padding:{inline:"six"}},a.createElement("div",null,a.createElement(G.v,{justifyContent:"center"},a.createElement(x.t,null,a.createElement(Ae,{data:o,markSize:11}))),a.createElement(D.l,{margin:{blockstart:"four",blockend:"six"},padding:{blockend:"two"}},a.createElement(rn,{logos:l})),N,a.createElement(D.l,{margin:{blockend:"four",blockstart:"six"},padding:{blockstart:"two"}},a.createElement(B.y,{size:4,align:"center"},u)),a.createElement(R.b,{align:"center",size:400},d),a.createElement(D.l,{margin:{blockstart:"six"},padding:{block:"three"}},a.createElement(Ye,{data:m,align:"center"})),a.createElement(D.l,{margin:{blockstart:"six"}},a.createElement(ye,{isFullWidth:!0,isDisabled:p,data:g.button,onClickHandler:_,size:h.xY.LARGE}))))))))};ln.fragment=on,ln.displayName="ContextualOnboarding";var cn=(0,i.Ps)(le(),xe.fragment,ye.fragment,He),sn=function(e){var n=e.data,t=e.isDialogOpen,r=e.closeDialog,i=e.additionalContext,o=n.titleMessage,l=n.titleImage,c=n.brandLogos,u=n.welcomeMessage,d=n.waitingMessage,m=n.timeoutMessage,g=n.onLoadOperation,E=n.primaryButton,O=n.headerBrandLogo,f=V((0,a.useState)(!0),2),v=f[0],b=f[1],p=V((0,a.useState)(!1),2),_=p[0],I=p[1],N=Qe().handleOperationResponse,y=V(dn(g,i),1)[0];je({linkName:"Interstitial Loading Page in the One Key Onboarding flow has been viewed",referrerId:"OneKey.Onboarding.InterstitialLoading"});var h=(0,s.Iw)(Ee);(0,a.useEffect)((function(){var e=setTimeout((function(){b(!1),I(!0)}),11e3);y().then((function(n){var t;clearTimeout(e),"TIMED_OUT"===(null===(t=n.data)||void 0===t?void 0:t.oneKeyOnboardingOperation.operationStatus)?(b(!1),I(!0)):N(n,r)})).catch((function(e){h.ONE_KEY_ONBOARDING_INTERSTITIAL_LOADING_MUTATION_ERROR.log(Oe({message:"Interstitial Loading ".concat(fe(g)," mutation error"),error:e})),ve()}))}),[]);var k=a.createElement(a.Fragment,null,a.createElement(R.b,{size:500,weight:"medium",align:"center"},o),a.createElement(D.l,{margin:{blockstart:"six"}},a.createElement(G.v,{justifyContent:"center"},a.createElement(x.t,null,a.createElement(Ae,{data:l,markSize:11}))))),A=v&&a.createElement(D.l,{margin:{blockstart:"four"},padding:{blockstart:"four"}},a.createElement(G.v,{direction:"column",alignItems:"center"},a.createElement(x.t,null,a.createElement(R.b,{size:500,weight:"medium",align:"center"},d)),a.createElement(D.l,{margin:{blockstart:"four"}},a.createElement(x.t,null,a.createElement(U.y,null))))),C=_&&a.createElement(a.Fragment,null,a.createElement(D.l,{margin:{blockstart:"sixteen"},padding:{block:"four"}},a.createElement(R.b,{size:500,weight:"medium",align:"center"},m)),a.createElement(D.l,{margin:{blockstart:"four"}},a.createElement(ye,{data:E.button,isFullWidth:!0,onClickHandler:function(){return function(e,n){var t;switch(null===(t=e)||void 0===t?void 0:t.__typename){case"UILinkAction":var a=e.accessibility;return(0,T.liveAnnounce)(a||void 0),void be(e);case"EGDSDismissAction":var r=e.accessibility;return(0,T.liveAnnounce)(r||void 0),void n();default:return ve()}}(E.action,r)}})));return a.createElement(M.K,{isVisible:t,triggerRef:null,type:"full"},a.createElement(an,{closeDialog:r,headerBrandLogo:O,onDismissOperation:null,additionalContext:i}),a.createElement(S.z,null,a.createElement(G.v,{direction:"column",alignItems:"center",tag:"main"},a.createElement(x.t,{alignSelf:"center",maxWidth:"one_hundred_twelve"},a.createElement(D.l,{padding:{inline:"six"}},a.createElement("div",null,k,a.createElement(D.l,{margin:{blockstart:"four"}},a.createElement(rn,{logos:c})),a.createElement(D.l,{margin:{blockstart:"four"},padding:{blockstart:"four",inline:"six"}},a.createElement(R.b,{size:500,weight:"medium",align:"center"},u)),A,C))))))};sn.fragment=cn,sn.displayName="InterstitialLoading";var un=(0,i.Ps)(ce(),ln.fragment,sn.fragment),dn=function(e,n){var t,a,r,i,o=(0,l.v)().context,c=fe(e),s=n&&((null===(t=n)||void 0===t?void 0:t.cmsToken)||(null===(a=n)||void 0===a?void 0:a.originUrl))?{cmsToken:null===(r=n)||void 0===r?void 0:r.cmsToken,originUrl:null===(i=n)||void 0===i?void 0:i.originUrl}:null;return(0,k.D)(un,{variables:{context:o,onboardingOperation:c,additionalContext:s}})},mn=function(e){var n=e.button,t=e.className,r=e.closeDialog,i=e.additionalContext,o=(0,s.Iw)(Ee),l=tn(),c=l.isMutationInProgress,u=l.onMutationCalled,d=V(dn(n.action,i),2),m=d[0],g=d[1].called,E=Qe().handleOperationResponse;(0,a.useEffect)((function(){g&&u()}),[u,g]);var O=(0,a.useCallback)((function(){m().then((function(e){E(e,r)})).catch((function(e){o.ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_ACCEPT_MUTATION_ERROR.log(Oe({message:"Terms and Conditions ".concat(fe(n.action)," mutation error"),error:e})),ve()}))}),[m,E,r,o,n.action]);return a.createElement(ye,{data:n.button,className:t,isFullWidth:!0,isDisabled:c,onClickHandler:O,size:h.xY.LARGE})};mn.displayName="TermsAndConditionsConsentButton";var gn=function(e){var n=e.title,t=e.subTitles;return a.createElement(a.Fragment,null,a.createElement(D.l,{padding:{blockstart:"two"},margin:{blockstart:"six"}},a.createElement(B.y,{size:4,align:"center"},n)),a.createElement(D.l,{margin:{blockstart:"four"}},t.map((function(e){return a.createElement(R.b,{key:e},a.createElement(R.b,{size:500,align:"center"},e))}))))},En=function(e){var n=e.children,t=e.isDialogOpen,r=e.hasModal,i=void 0!==r&&r,o=e.hasHeaderLogo,l=void 0!==o&&o;return a.createElement(y.Viewport,null,a.createElement(y.ViewSmall,null,a.createElement(M.K,{isVisible:t,triggerRef:null,type:"full"},n)),a.createElement(y.ViewMedium,null,a.createElement(M.K,{isVisible:t,triggerRef:null,type:l?"full":"centered",hasModal:i},n)))},On=(0,i.Ps)(se(),ye.fragment,Ye.fragment,Se.fragment,Fe.fragment,xe.fragment,He),fn=function(e){var n,t=e.data,r=e.isDialogOpen,i=e.closeDialog,o=e.additionalContext,l=t.headerImage,c=t.title,s=t.subTitles,u=t.images,d=t.gettingStartedlink,m=t.consentText,g=t.primaryButton,E=Boolean(m),O=$e().navigateToNextSheet,f=V((0,a.useState)(!1),2),v=f[0],b=f[1],p=(0,a.useCallback)((function(){b(!0)}),[]);je({linkName:"Generic Onboarding Page in the One Key Onboarding flow has been viewed",referrerId:"OneKey.Onboarding.GenericOnboarding"});var I=l&&a.createElement(y.Viewport,null,a.createElement(y.ViewSmall,null,a.createElement(Fe,{data:l,roundcorner:!0,ratio:_.s.R1_1,placeholderImage:!0,lazyLoading:"lazy"})),a.createElement(y.ViewMedium,null,a.createElement(Fe,{data:l,roundcorner:!0,ratio:_.s.R21_9,placeholderImage:!0,lazyLoading:"lazy"})));return a.createElement(nn,{isMutationInProgress:v,onMutationCalled:p},a.createElement(En,{isDialogOpen:r,hasModal:!0},a.createElement(S.z,{padded:!0},I,a.createElement(gn,{title:c,subTitles:s}),a.createElement(D.l,{margin:{block:"six"}},a.createElement(rn,{logos:u})),a.createElement(D.l,{margin:{blockstart:E?"six":"twelve"}},a.createElement(Ye,{data:d,align:"center"})),m&&a.createElement(D.l,{margin:{blockstart:"six"}},a.createElement(R.b,{align:"center"},m)),a.createElement(D.l,{margin:{blockstart:"six"}},"OnboardingOperationAction"===(null===(n=g.action)||void 0===n?void 0:n.__typename)&&"consented"===g.action.actionType?a.createElement(mn,{button:g,closeDialog:i,additionalContext:o}):a.createElement(ye,{isFullWidth:!0,data:g.button,onClickHandler:O,size:h.xY.LARGE})))))};fn.fragment=On,fn.displayName="GettingStarted";var vn=(0,i.Ps)(ue(),ye.fragment,xe.fragment,Ye.fragment,He),bn=function(e){var n=e.data,t=e.isDialogOpen,r=e.closeDialog,i=e.additionalContext,o=n.title,l=n.subText,c=n.additionalText,u=n.links,m=n.images,g=n.primaryButton,O=n.secondaryButton,v=n.dismissButton,b=n.headerBrandLogo,p=n.onDismissOperation,_=O?"OneKey.Onboarding.BetaT&C":"OneKey.Onboarding.T&C",I={linkName:"".concat(O?"Beta Terms & Conditions":"Terms & Conditions"," Page in the One Key Onboarding flow has been viewed"),referrerId:_};je(I);var N=(0,s.Iw)(Ee),y=Qe().handleOperationResponse,T=V((0,a.useState)(!1),2),k=T[0],A=T[1],C=V(dn(p,i),2),M=C[0],w=C[1].called||k,F=(0,d.useClickTracker)(),U=(0,a.useCallback)((function(){M().then((function(e){y(e,r)})).catch((function(e){N.ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_DECLINE_MUTATION_ERROR.log(Oe({message:"Terms and Conditions ".concat(fe(p)," mutation error"),error:e})),ve()}))}),[M,y,r,N,p]),K=(0,a.useCallback)((function(){var e;if(null===(e=v)||void 0===e?void 0:e.analytics){var n=v.analytics,t=n.referrerId,a=n.linkName;F(t,a)}M().then((function(e){y(e,r)})).catch((function(e){N.ONE_KEY_ONBOARDING_TERMS_AND_CONDITIONS_DISMISS_MUTATION_ERROR.log(Oe({message:"Terms and Conditions ".concat(fe(p)," mutation error"),error:e})),ve()}))}),[v,F,M,y,r,N,p]),P=(0,a.useCallback)((function(){A(!0)}),[]),z=a.createElement(D.l,{margin:{blockend:"sixteen"}},a.createElement(G.v,{alignItems:"center",justifyContent:"center",direction:"column"},u.map((function(e){var n;return a.createElement(x.t,{key:null===(n=e)||void 0===n?void 0:n.text},a.createElement(D.l,{margin:{blockstart:"six"}},a.createElement(Ye,{align:"center",data:e})))})))),Y=b&&a.createElement(an,{dismissButton:v,closeDialog:r,headerBrandLogo:b,onDismissOperation:p,additionalContext:i}),j=!b&&a.createElement(L.O,{type:"relative"},a.createElement(L.O,{type:"absolute",position:{top:"center",right:"minus-four"},cloneElement:!0},v&&p&&a.createElement(E.m,{disabled:w,onClick:K},a.createElement(f.fR,{name:"close",description:v.accessibility||"Close"}))));return a.createElement(nn,{isMutationInProgress:w,onMutationCalled:P},a.createElement(En,{isDialogOpen:t,hasHeaderLogo:null!==b},Y,a.createElement(S.z,{padded:!0},j,a.createElement(G.v,{direction:"column",alignItems:"center",tag:"main"},a.createElement(x.t,{alignSelf:b?"center":"stretch",maxWidth:b?"one_hundred_twelve":void 0},a.createElement(D.l,{padding:b?{inline:"six"}:void 0},a.createElement("div",null,a.createElement(D.l,{margin:{blockend:"four",blockstart:b?void 0:"six"}},a.createElement(B.y,{size:4,align:"center"},o)),a.createElement(D.l,{margin:{block:"six"}},a.createElement(rn,{logos:m})),a.createElement(R.b,{align:"center",size:400},l),z,a.createElement(D.l,{padding:{block:"six"}},a.createElement(R.b,{align:"center"},c)),a.createElement(mn,{button:g,closeDialog:r,additionalContext:i}),O&&a.createElement(D.l,{margin:{blockstart:"four"}},a.createElement(ye,{data:O,isFullWidth:!0,isDisabled:w,onClickHandler:U,size:h.xY.LARGE})))))))))};bn.fragment=vn,bn.displayName="TermsAndConditions";var pn=(0,i.Ps)(de(),ye.fragment,xe.fragment,Ye.fragment,He),_n=function(e){var n=e.data,t=e.isDialogOpen,r=e.closeDialog,i=e.additionalContext,o=n.title,l=n.subTitles,c=n.images,u=n.accountMergelink,d=n.primaryButton,m=n.headerBrandLogo,g=null!==m,E=Qe().handleOperationResponse,O=V(dn(d.action,i),2),f=O[0],v=O[1].called;je({linkName:"Account Merge Page in the One Key Onboarding flow has been viewed",referrerId:"OneKey.Onboarding.AccountMerge"});var b=(0,s.Iw)(Ee),p=(0,a.useCallback)((function(){f().then((function(e){E(e,r)})).catch((function(e){b.ONE_KEY_ONBOARDING_ACCOUNT_MERGE_MUTATION_ERROR.log(Oe({message:"Account Merge ".concat(fe(d.action)," mutation error"),error:e})),ve()}))}),[f,E,r,b,d.action]),_=a.createElement(G.v,{justifyContent:"center"},a.createElement(x.t,null,a.createElement(A.t,{backgroundTheme:"secondary"},a.createElement(C.U,null,a.createElement(D.l,{margin:{block:"sixteen"}},a.createElement(K.a,{columns:1},c.map((function(e){return a.createElement(D.l,{padding:{inline:"six"},margin:{block:"one"},key:e.description},a.createElement(P.P,null,a.createElement(xe,{data:e,markSize:10})))}))))))));return a.createElement(En,{isDialogOpen:t,hasHeaderLogo:g},m&&a.createElement(an,{closeDialog:r,headerBrandLogo:m,onDismissOperation:null,additionalContext:i}),a.createElement(S.z,{padded:!0},a.createElement(G.v,{direction:"column",alignItems:"center",tag:"main"},a.createElement(x.t,{alignSelf:g?"center":"stretch",maxWidth:g?"one_hundred_twelve":void 0},a.createElement(D.l,{padding:g?{inline:"six"}:void 0},a.createElement("div",null,_,a.createElement(gn,{title:o,subTitles:l}),u&&a.createElement(D.l,{margin:{blockstart:"six"},padding:{blockstart:"two"}},a.createElement(Ye,{data:u,align:"center"})),a.createElement(D.l,{margin:{blockstart:"six"}},a.createElement(ye,{isFullWidth:!0,isDisabled:v,data:d.button,onClickHandler:p,size:h.xY.LARGE}))))))))};_n.fragment=pn,_n.displayName="AccountMerge";var In=function(e){var n,t=e.isDialogOpen,r=e.openDialog,i=e.closeDialog,o=e.additionalContext,l=$e().currentSheet,c={isDialogOpen:t,openDialog:r,closeDialog:i,additionalContext:o};switch(null===(n=l)||void 0===n?void 0:n.__typename){case"OneKeyOnboardingGettingStarted":return a.createElement(fn,j({data:l},c));case"OneKeyOnboardingTermsAndConditions":return a.createElement(bn,j({data:l},c));case"OneKeyOnboardingInterstitialLoading":return a.createElement(sn,j({data:l},c));case"OneKeyOnboardingAccountMerge":return a.createElement(_n,j({data:l},c));case"OneKeyContextualOnboarding":return a.createElement(ln,j({data:l},c));default:return null}},Nn=(0,i.Ps)(me(),fn.fragment,bn.fragment,sn.fragment,_n.fragment,ln.fragment),Rn=function(e){var n,t=e.additionalContext,r=e.shouldNavigateOnQueryError,i=V((0,c.useDialog)("one-key-onboarding-dialog",void 0,!1),3),d=i[0],m=i[1],g=i[2],E=V((0,a.useState)(!1),2),O=E[0],f=E[1],v=(0,l.v)().context,b=(0,s.Iw)(Ee),p=$e().setSheets,_=(0,a.useCallback)((function(){m.openDialog()}),[m]),I={context:v,additionalContext:t||null},N=(0,o.a)(Nn,{variables:I,ssr:!1}),R=N.data,y=N.error,h=N.loading;return(0,a.useEffect)((function(){R&&p(R.oneKeyOnboarding)}),[R]),(0,a.useEffect)((function(){var e,n;R&&0!==(null===(n=R)||void 0===n||null===(e=n.oneKeyOnboarding)||void 0===e?void 0:e.length)&&!O&&(_(),f(!0))}),[R,_,O,f]),y&&r&&(b.ONE_KEY_ONBOARDING_QUERY_ERROR.log(Oe({message:"OneKeyOnboardingQuery error",error:y})),ve()),h||y||!R?null:0===R.oneKeyOnboarding.length?((null===(n=t)||void 0===n?void 0:n.originUrl)&&window.location.assign(_e(t.originUrl)),null):a.createElement(u.U,{isVisible:d},a.createElement(g,null,a.createElement(In,{isDialogOpen:d,openDialog:_,closeDialog:function(){m.closeDialog()},additionalContext:t})))};Rn.displayName="sharedui-OneKeyOnboarding";var yn=function(e){var n=e.additionalContext,t=e.shouldNavigateOnQueryError,i=void 0!==t&&t;return 0===(0,r.useExperiment)("one_key_onboarding_ui_enabled").exposure.bucket?null:a.createElement(We,null,a.createElement(Rn,{inputs:{additionalContext:null},additionalContext:n,shouldNavigateOnQueryError:i}))}}}]);
//# sourceMappingURL=shared-ui-retail-loyalty-one-key-onboarding.cff9556e52f40de6d488.js.map