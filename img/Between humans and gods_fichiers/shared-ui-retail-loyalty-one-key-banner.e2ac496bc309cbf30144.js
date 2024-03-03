/*@license For license information please refer to shared-ui-retail-loyalty-one-key-banner.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[689],{42966:function(e,n,t){t.d(n,{Ko:function(){return Pe},Qd:function(){return we},nF:function(){return Ce},yR:function(){return _e}});var r=t(67294),a=t(69430),i=t(71641),l=t(95878),c=t(46605),o=t(91410),u=t(35957),s=t(23236),d=t(98250),m=t(13413),f=t(84139),E=t(30082),v=t(20515),g=t(23984),S=t(91233),y=t(93351),p=t(30300),h=t(5419),k=t(89313),I=t(23933),L=t(16550),A=t(10333),T=t(511),N=t(22809),b=t(86922);function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){O(e,n,t[n])}))}return e}function G(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(o){c=!0,a=o}finally{try{l||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function _(){var e=P(["\n  fragment EGDSIconFragment on Icon {\n    description\n    id\n    size\n    theme\n    title\n    withBackground\n  }\n"]);return _=function(){return e},e}function w(){var e=P(["\n  fragment EGDSIllustrationFragment on Illustration {\n    description\n    id\n    link: url\n  }\n"]);return w=function(){return e},e}function F(){var e=P(["\n  fragment EGDSMarkFragment on Mark {\n    description\n    id\n    markSize: size\n    url {\n      ... on HttpURI {\n        __typename\n        relativePath\n        value\n      }\n    }\n  }\n"]);return F=function(){return e},e}function U(){var e=P(["\n  fragment EGDSGraphicFragment on UIGraphic {\n    ... on Icon {\n      ...EGDSIconFragment\n    }\n\n    ... on Mark {\n      ...EGDSMarkFragment\n    }\n\n    ... on Illustration {\n      ...EGDSIllustrationFragment\n    }\n  }\n\n  ","\n  ","\n  ","\n"]);return U=function(){return e},e}function B(){var e=P(["\n  fragment ClientSideAnalyticsFragment on ClientSideAnalytics {\n    eventType\n    linkName\n    referrerId\n    uisPrimeMessages {\n      messageContent\n      schemaName\n    }\n  }\n"]);return B=function(){return e},e}function M(){var e=P(["\n  fragment EGDSButtonFragment on EGDSButton {\n    primary\n    accessibility\n    disabled\n    analytics {\n      linkName\n      referrerId\n    }\n    icon {\n      description\n      id\n      title\n      token\n    }\n    action {\n      ...ButtonLinkActionFragment\n    }\n  }\n\n  fragment ButtonLinkActionFragment on UILinkAction {\n    resource {\n      ...HttpURIFragment\n    }\n    target\n    useRelativePath\n  }\n\n  fragment HttpURIFragment on HttpURI {\n    relativePath\n    value\n  }\n"]);return M=function(){return e},e}function x(){var e=P(["\n  fragment EGDSPlainTextFragment on EGDSPlainText {\n    text\n  }\n"]);return x=function(){return e},e}function z(){var e=P(["\n  fragment EGDSStandardLinkFragment on EGDSStandardLink {\n    action {\n      accessibility\n      analytics {\n        linkName\n        referrerId\n      }\n      resource {\n        value\n        ... on HttpURI {\n          relativePath\n        }\n      }\n      target\n      useRelativePath\n    }\n    disabled\n    standardLinkIcon: icon {\n      ...EGDSIconFragment\n    }\n    iconPosition\n    size\n    text\n  }\n\n  ","\n"]);return z=function(){return e},e}function H(){var e=P(["\n  fragment EGDSStylizedTextFragment on EGDSStylizedText {\n    __typename\n    text\n    theme\n    weight\n    textSize: size\n  }\n"]);return H=function(){return e},e}function j(){var e=P(["\n  fragment EGDSTextFragment on EGDSText {\n    __typename\n    ...EGDSPlainTextFragment\n    ...EGDSStandardLinkFragment\n  }\n  ","\n  ","\n"]);return j=function(){return e},e}function K(){var e=P(["\n  fragment EGDSUILinkActionFragment on UILinkAction {\n    accessibility\n    analytics {\n      referrerId\n      linkName\n      uisPrimeMessages {\n        schemaName\n        messageContent\n      }\n    }\n    resource {\n      value\n    }\n    target\n  }\n"]);return K=function(){return e},e}function Y(){var e=P(["\n  fragment EGDSStandardMessagingCardFragment on EGDSStandardMessagingCard {\n    message\n    heading\n    background\n    rightIcon {\n      ...EGDSIconFragment\n    }\n    graphic {\n      ...EGDSGraphicFragment\n    }\n    links {\n      ...EGDSStandardLinkFragment\n    }\n    buttons {\n      ...EGDSButtonFragment\n    }\n    impressionTracking {\n      ...ClientSideAnalyticsFragment\n    }\n  }\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return Y=function(){return e},e}function $(){var e=P(["\n  fragment EGDSSwitchFragment on EGDSStandardSwitch {\n    enabled\n    checked\n    checkedLabel\n    uncheckedLabel\n    checkedDescription\n    uncheckedDescription\n    checkedAccessibilityLabel\n    uncheckedAccessibilityLabel\n    checkedAnalytics {\n      linkName\n      referrerId\n    }\n    uncheckedAnalytics {\n      linkName\n      referrerId\n    }\n  }\n"]);return $=function(){return e},e}function V(){var e=P(["\n  query OneKeyLoyaltyBannerQuery(\n    $context: ContextInput!\n    $useLoyaltyCurrency: Boolean\n    $pageLocation: PageLocation!\n    $lineOfBusiness: LineOfBusinessDomain!\n    $packageType: PackageType\n    $packageLOB: LineOfBusinessDomain\n    $marketing: MarketingInfoInput\n  ) {\n    oneKeyLoyaltyBanner(\n      context: $context\n      useLoyaltyCurrency: $useLoyaltyCurrency\n      pageLocation: $pageLocation\n      lineOfBusiness: $lineOfBusiness\n      packageType: $packageType\n      packageLOB: $packageLOB\n      marketing: $marketing\n    ) {\n      element {\n        ... on OneKeyBurnSwitch {\n          burnSwitchGraphic: graphic {\n            ...EGDSGraphicFragment\n          }\n          switch {\n            ...EGDSSwitchFragment\n          }\n          impressionTracking {\n            ...ClientSideAnalyticsFragment\n          }\n        }\n        ... on EGDSStandardMessagingCard {\n          ...EGDSStandardMessagingCardFragment\n        }\n      }\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return V=function(){return e},e}var Q=(0,a.Ps)(_()),W=function(e){var n,t,a,i,l,o,u,s=e.className,d=e.theme,m=e.data,f=(null===(n=m)||void 0===n?void 0:n.withBackground)?"info":void 0;return r.createElement(c.fR,{className:s,description:null===(t=m)||void 0===t?void 0:t.description,id:null===(a=m)||void 0===a?void 0:a.id,name:null!==m?m.id:"",size:(null===(i=m)||void 0===i?void 0:i.size)?c.eZ[m.size]:void 0,title:null!==(u=null===(l=m)||void 0===l?void 0:l.title)&&void 0!==u?u:void 0,theme:d||(null===(o=m)||void 0===o?void 0:o.theme)||void 0,spotlight:f})};W.displayName="EGDSIcon",W.fragment=Q;var q=(0,a.Ps)(w()),X=function(e){var n=e.data;return r.createElement(o.a,{alt:n.description,url:n.link})};X.displayName="Illustration",X.fragment=q;var Z=(0,a.Ps)(F()),J=function(e){var n,t=e.className,a=e.markSize,i=e.data;return r.createElement(u.F,{className:t,description:i.description,id:i.id,name:i.id,size:a||i.markSize&&s.j[i.markSize],url:null===(n=i.url)||void 0===n?void 0:n.value})};J.displayName="EGDSMark",J.fragment=Z;var ee=(0,a.Ps)(U(),W.fragment,J.fragment,X.fragment),ne=function(e){var n=e.className,t=e.markSize,a=e.data;switch(a.__typename){case"Icon":return r.createElement(W,{className:n,data:a});case"Mark":return r.createElement(J,{className:n,data:a,markSize:t});case"Illustration":return r.createElement(X,{data:a});default:return null}};ne.displayName="EGDSGraphic",ne.fragment=ee;var te,re=(0,a.Ps)(B()),ae=(O(te={},"EXTERNAL","_blank"),O(te,"INTERNAL","_self"),te),ie=function(e){return ae[e.target]},le=(0,a.Ps)(M()),ce=function(e){var n,t,a=e.className,i=e.dataStid,c=e.domRef,o=e.href,u=e.isFullWidth,s=e.onClickHandler,m=e.size,f=e.inverse,E=e.isDisabled,v=e.isNoTextAllowed,g=e.data,S=g.__typename,y=g.accessibility,p=g.primary,h=g.disabled,A=g.analytics,T=g.action,N=g.icon,b=(0,d.useClickTracker)(),D=function(e){var n;if("UILinkAction"!==(null===(n=e)||void 0===n?void 0:n.__typename))return{};var t=function(e){return"HttpURI"!==e.resource.__typename?null:e.useRelativePath?e.resource.relativePath:e.resource.value}(e);return t?{href:t,target:ie(e),tag:"a"}:{}}(T),O=function(e){var n,t=e.indexOf("uurl")>-1,a=(0,L.useLocation)(),i=function(){return{pathname:"".concat(a.pathname),search:"".concat(a.search),hash:"".concat(a.hash)}},c=(0,l.v)().context,o=C((0,r.useState)(i),2),u=o[0],s=o[1],d=null===(n=c)||void 0===n?void 0:n.siteId;(0,r.useEffect)((function(){var e=function(){return s(i())};return window.addEventListener("popstate",e),function(){return window.removeEventListener("popstate",e)}}),[i]);var m,f,E,v,g,S,y="";return t||(y=e+(-1!==e.indexOf("?")?"":"?")+(f=d,E=(m=u||{}).pathname,v=m.search,g=m.hash,S=E.concat(v,g),30031===f?"&redirectUrl=targeturl=".concat(encodeURIComponent(S),"&referrerId=wl_prod"):"&uurl=".concat(encodeURIComponent("e3id=redr&rurl=".concat(S))))),y}(null!==(t=D.href)&&void 0!==t?t:""),P=r.useCallback((function(){var e;null===(e=s)||void 0===e||e(),A&&b(A.referrerId,A.linkName)}),[s,b,A]);if(!p&&!v)return null;(null===(n=D)||void 0===n?void 0:n.href)&&O&&(D.href=O);var _=R({"aria-label":null!=y?y:void 0,className:a,disabled:E||h,href:o,isFullWidth:u,onClick:P,size:m,domRef:c},D);switch(S){case"UIPrimaryButton":return r.createElement(k.EA,G(R({},_),{"data-stid":i,inverse:f}),p);case"UISecondaryButton":return r.createElement(k.VK,G(R({},_),{"data-stid":i,inverse:f}),p);case"UITertiaryButton":return r.createElement(k.qN,G(R({},_),{"data-stid":i,inverse:f}),p);case"EGDSOverlayButton":var w;return r.createElement(k.fF,G(R({},_),{"data-stid":i}),N&&r.createElement(I.nn,{description:N.description,id:N.id,name:N.token,title:null!==(w=N.title)&&void 0!==w?w:void 0}),p);default:return null}};ce.fragment=le,ce.displayName="EGDSButton";var oe,ue=(0,a.Ps)(x()),se=function(e){var n=e.className,t=e.inline,a=e.size,i=e.theme,l=e.data.text;return r.createElement(p.b,{className:n,inline:t,size:a,theme:i},l)};se.fragment=ue,se.displayName="EGDSPlainText";var de,me=(O(oe={},"SMALL","small"),O(oe,"MEDIUM","medium"),O(oe,"LARGE","large"),oe),fe=(O(de={},"EXTERNAL","_blank"),O(de,"INTERNAL","_self"),de),Ee=(0,a.Ps)(z(),W.fragment),ve=function(e){var n=e.icon,t=e.iconPosition,a=e.iconPositionToMatch;return n&&t===a?r.createElement(W,{data:n}):null},ge=function(e){var n=e.className,t=e.dataStid,a=e.inline,i=e.theme,l=e.align,c=e.data,o=c.action,u=o.analytics,s=(o.resource,o.target),m=o.accessibility,f=(o.useRelativePath,c.disabled),E=c.iconPosition,v=c.standardLinkIcon,g=c.size,S=c.text,y=(0,d.useClickTracker)(),h=r.useCallback((function(){y(u.referrerId,u.linkName)}),[y,u]),k=r.useCallback((function(){return"HttpURI"===(e=c.action).resource.__typename&&e.useRelativePath?e.resource.relativePath:e.resource.value;var e}),[c.action]);return r.createElement(A.M,{className:n,"data-stid":t,size:me[g],onClickCapture:h,inline:a,disabled:f,theme:i||"default",align:l},r.createElement("a",{target:fe[s],href:k()},r.createElement(ve,{icon:v,iconPosition:E,iconPositionToMatch:"LEADING"}),S,r.createElement(ve,{icon:v,iconPosition:E,iconPositionToMatch:"TRAILING"}),m&&r.createElement(p.b,{className:"is-visually-hidden"},m)))};ge.fragment=Ee,ge.displayName="EGDSStandardLink";var Se,ye=(0,a.Ps)(H()),pe=function(e){return e.INVERSE="inverse",e.LOYALTY="loyalty",e.NEGATIVE="negative",e.POSITIVE="positive",e.PENDING="default",e}(pe||{}),he={100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900},ke=(O(Se={},"BOLD","bold"),O(Se,"MEDIUM","medium"),O(Se,"REGULAR","regular"),Se),Ie=function(e){var n=e.data,t=e.darkModeTheme,a=e.whiteSpace,i=n.text,l=n.theme,c=n.weight,o=n.textSize,u=t||l;return r.createElement(p.b,{theme:u?pe[u]:void 0,whiteSpace:a,weight:c?ke[c]:void 0,size:o?he[o]:void 0},i)};Ie.fragment=ye,Ie.displayName="EGDSStylizedText";var Le=(0,a.Ps)(j(),se.fragment,ge.fragment),Ae=function(e){var n=e.data,t=e.standardLinkProps,a=e.plainTextProps;switch(n.__typename){case"EGDSStandardLink":return r.createElement(ge,R({data:n},t));case"EGDSPlainText":return r.createElement(se,R({data:n},a));default:return null}};Ae.fragment=Le,Ae.displayName="EGDSText";var Te=(0,a.Ps)(K()),Ne=function(e){var n=e.data,t=e.clickstreamAnalyticsData,a=n.resource,i=n.target,l=n.analytics,c=n.accessibility,o=a.value,u="INTERNAL"===i?"_self":"_blank",s=(0,d.useEgClickstream)(),m=(0,d.useClickTracker)(),f=r.useCallback((function(){var e,n,r,a,i,c;(l&&m(l.referrerId,l.linkName),(null===(e=t)||void 0===e?void 0:e.serverPayload)&&(null===(n=t)||void 0===n?void 0:n.eventName)&&(null===(r=t)||void 0===r?void 0:r.eventVersion))&&s({clientPayload:{event:{event_name:null===(a=t)||void 0===a?void 0:a.eventName,event_version:null===(i=t)||void 0===i?void 0:i.eventVersion}},serverPayload:null===(c=t)||void 0===c?void 0:c.serverPayload})}),[l,m,s,t]);return r.createElement(T.o,null,r.createElement("a",{href:o,target:u,rel:"noopener noreferrer",onClickCapture:f,"aria-label":c||""},c))};Ne.fragment=Te,Ne.displayName="EGDSUICardLinkAction";var be=(0,a.Ps)(Y(),W.fragment,ne.fragment,ge.fragment,ce.fragment,re),De=function(e){var n=e.data,t=e.markSize,a=e.className,i=e.dataStid,l=e.actionProps,c=e.showBorder,o=void 0===c||c,u=e.clickstreamAnalyticsData,s=n.message,k=n.background,I=void 0===k?f.iQ.PRIMARY:k,L=n.links,A=n.graphic,T=n.heading,N=n.rightIcon,b=n.buttons,D=n.impressionTracking,O=I===f.iQ.GLOBAL_LOYALTY_STANDARD?{inline:"three",block:"three"}:{inline:"one",block:"one"},R=null!==I&&I!==f.iQ.PRIMARY&&I!==f.iQ.SECONDARY,G=(0,r.useMemo)((function(){var e;return r.createElement(y.l,null,r.createElement(g.v,null,null===(e=L)||void 0===e?void 0:e.map((function(e,n){return r.createElement(y.l,{margin:{inlinestart:0===n?"unset":"two"},key:n},r.createElement(S.t,null,r.createElement("div",null,r.createElement(ge,{data:e,dataStid:i?"".concat(i,"-").concat(e.__typename):void 0,theme:R?"inverse":"default"}))))}))))}),[L,R,i]),C=(0,r.useMemo)((function(){var e;return r.createElement(y.l,null,r.createElement(g.v,null,null===(e=b)||void 0===e?void 0:e.map((function(e,n){return r.createElement(y.l,{margin:{inlinestart:0===n?"unset":"two"},key:n},r.createElement(S.t,null,r.createElement(ce,{data:e,dataStid:i?"".concat(i,"-").concat(e.__typename):void 0,size:m.xY.SMALL,inverse:R&&"UITertiaryButton"===e.__typename})))}))))}),[L,R,i]),P=(0,r.useMemo)((function(){return s?T?r.createElement(S.t,null,r.createElement(y.l,{margin:{blockstart:"".concat(T?"half":"unset")}},r.createElement(p.b,{theme:R?"inverse":"default"},s))):r.createElement(S.t,null,r.createElement(h.y,{className:R?"uitk-text-inverse-theme":""},s)):null}),[s,T,R]),_=r.createElement(E.t,{className:a,border:o,padded:!0,backgroundTheme:I},r.createElement(v.U,{"data-stid":i},r.createElement(y.l,{padding:O},r.createElement(g.v,{alignItems:"center"},A&&r.createElement(S.t,{alignSelf:"start"},r.createElement("div",null,r.createElement(y.l,{margin:{small:{inlineend:"three"},medium:{inlineend:R?"six":"three"}}},r.createElement("div",null,r.createElement(ne,{data:A,markSize:t}))))),r.createElement(S.t,{grow:1},r.createElement(v.U,{padded:!1},r.createElement(g.v,{direction:"row",alignItems:"center",justifyContent:"space-between",space:"two",wrap:N?"nowrap":"wrap"},r.createElement(S.t,{grow:1,minWidth:"88x"},r.createElement(g.v,{direction:"column"},r.createElement(y.l,{padding:{inlineend:"two"}},r.createElement("div",null,T&&r.createElement(S.t,null,r.createElement(h.y,{className:R?"uitk-text-inverse-theme":""},T)),P)))),r.createElement(S.t,null,r.createElement(g.v,{alignItems:"center",space:"four",justifyContent:"end"},b&&b.length>0&&r.createElement(S.t,null,C),L&&L.length>0&&r.createElement(S.t,null,G))),N&&r.createElement(S.t,null,r.createElement("div",null,r.createElement(W,{data:N})))))))),l&&r.createElement(Ne,{data:l,clickstreamAnalyticsData:u})));if(D){var w=D.referrerId,F=D.linkName;return r.createElement(d.IntersectionTracker,{referrerId:w,linkName:F,intersectionOptions:{threshold:.5}},_)}return r.createElement(r.Fragment,null,_)};De.displayName="EGDSStandardMessagingCard",De.fragment=be;var Oe=(0,a.Ps)($()),Re=function(e){var n=e.switchHandler,t=e.id,a=e.switchPosition,i=e.weight,l=e.data,c=l.enabled,o=l.checked,u=l.checkedLabel,s=l.uncheckedLabel,m=l.checkedAnalytics,f=l.uncheckedAnalytics,E=l.checkedDescription,v=l.uncheckedDescription,g=l.checkedAccessibilityLabel,S=l.uncheckedAccessibilityLabel,y=C(r.useState(o),2),h=y[0],k=y[1];(0,r.useEffect)((function(){return k(o)}),[o]);var I,L=(0,d.useClickTracker)(),A=h?u:s,T=h?g:S,b=h?E:v;return r.createElement(N.n,{id:t,checked:h,onChange:function(){k(!h),n(!h),m&&!h?L(m.referrerId,m.linkName):f&&h&&L(f.referrerId,f.linkName)},switchPosition:a||"trailing",disabled:!c,a11yLabel:null!==(I=null!=T?T:A)&&void 0!==I?I:void 0,description:null!=b?b:void 0},r.createElement(p.b,{weight:i||"medium",size:400},null!=A?A:""))};Re.fragment=Oe,Re.displayName="EGDSSwitch";var Ge=(0,a.Ps)(V(),re,ne.fragment,Re.fragment,De.fragment),Ce=function(e){var n,t,a=e.inputs,c=e.skipSsr,o=e.switchHandler,u=e.markSize,s=void 0===u?11:u,d=e.className,m=e.showBorder,f=(0,l.v)().context,E=G(R({},a),{context:f}),v=(0,i.a)(Ge,{variables:E,ssr:!c}),g=v.data,S=v.error,y=v.loading,p=v.previousData,h=y?p:g;if(S||!h)return null;switch(null===(t=h.oneKeyLoyaltyBanner)||void 0===t||null===(n=t.element)||void 0===n?void 0:n.__typename){case"OneKeyBurnSwitch":return r.createElement(b.L,{className:d,data:h.oneKeyLoyaltyBanner.element,handler:o,markSize:s,showBorder:m});case"EGDSStandardMessagingCard":return r.createElement(De,{className:d,dataStid:"one-key-message-card",data:h.oneKeyLoyaltyBanner.element,markSize:s,showBorder:m});default:return null}};Ce.displayName="sharedui-OneKeyBanner";var Pe=function(e){return e.ACTIVITIES="ACTIVITIES",e.CAR="CAR",e.CRUISES="CRUISES",e.FLIGHT="FLIGHT",e.GROUNDTRANSFERS="GROUNDTRANSFERS",e.LODGING="LODGING",e.PACKAGES="PACKAGES",e.RAILS="RAILS",e.UNCLASSIFIED="UNCLASSIFIED",e}(Pe||{}),_e=function(e){return e.FLIGHT_CAR="FLIGHT_CAR",e.FLIGHT_HOTEL="FLIGHT_HOTEL",e.FLIGHT_HOTEL_CAR="FLIGHT_HOTEL_CAR",e.HOTEL_ACTIVITY="HOTEL_ACTIVITY",e.HOTEL_CAR="HOTEL_CAR",e}(_e||{}),we=function(e){return e.CFAR_DETAILS="CFAR_DETAILS",e.CHECKOUT="CHECKOUT",e.CHECKOUT_ERROR="CHECKOUT_ERROR",e.CONFIRMATION="CONFIRMATION",e.DETAILS="DETAILS",e.ENTRY="ENTRY",e.FEATURES="FEATURES",e.INSURANCE_DETAILS="INSURANCE_DETAILS",e.ITINERARY="ITINERARY",e.PAYMENT_ERROR="PAYMENT_ERROR",e.POST_BOOKING="POST_BOOKING",e.SEARCH_RESULTS="SEARCH_RESULTS",e.SYSTEM="SYSTEM",e.USER="USER",e}(we||{})}}]);
//# sourceMappingURL=shared-ui-retail-loyalty-one-key-banner.e2ac496bc309cbf30144.js.map