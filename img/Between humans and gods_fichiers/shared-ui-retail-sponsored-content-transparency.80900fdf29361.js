/*@license For license information please refer to shared-ui-retail-sponsored-content-transparency.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4882],{83441:function(e,n,t){t.d(n,{X:function(){return V},i:function(){return se}});var r=t(67294),a=t(69430),l=t(22407),i=t(73030),c=t(46605),o=t(95253),s=t(73359),u=t(95878),d=t(19633),m=t(34353),p=t(41913),y=t(79221),f=t(98250),g=t(54874),v=t(23984),E=t(91233),b=t(10333),k=t(27764),O=t(58153),T=t(93351),A=t(30300),h=t(5419),I=t(52818),S=t(49349),C=t(70094);function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){L(e,n,t[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function N(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);i=!0);}catch(o){c=!0,a=o}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function F(){var e=P(["\n  fragment AdTransparencyButtonFragment on AdTransparencyButton {\n    primary\n    icon {\n      id\n    }\n  }\n"]);return F=function(){return e},e}function _(){var e=P(["\n  fragment EGDSExpandoPeekFragment on EGDSExpandoPeek {\n    expandedLabel\n    collapsedLabel\n    expanded\n    collapseAnalytics {\n      eventType\n      linkName\n      referrerId\n      uisPrimeMessages {\n        messageContent\n        schemaName\n      }\n    }\n    expandAnalytics {\n      eventType\n      linkName\n      referrerId\n      uisPrimeMessages {\n        messageContent\n        schemaName\n      }\n    }\n  }\n"]);return _=function(){return e},e}function j(){var e=P(["\n  fragment EGDSInlineLinkFragment on EGDSInlineLink {\n    text\n    action {\n      ...UILinkActionFragment\n    }\n  }\n"]);return j=function(){return e},e}function M(){var e=P(["\n  fragment UILinkActionFragment on UILinkAction {\n    accessibility\n    analytics {\n      referrerId\n      linkName\n      urls\n    }\n    resource {\n      ... on HttpURI {\n        value\n      }\n    }\n    target\n  }\n"]);return M=function(){return e},e}function z(){var e=P(["\n  fragment TransparencyContentFragment on TransparencyOverlay {\n    entities {\n      ...EntityFragment\n    }\n    targetingCategories {\n      ...TargetingCategoriesFragment\n    }\n    callToAction {\n      size\n      ...EGDSInlineLinkFragment\n    }\n  }\n\n  fragment EntityFragment on TransparencyEntity {\n    label\n    expando {\n      ...EGDSExpandoPeekFragment\n    }\n    names\n  }\n  fragment TargetingCategoriesFragment on TargetingCategories {\n    heading {\n      text\n    }\n    items {\n      listItems {\n        text\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"]);return z=function(){return e},e}function U(){var e=P(["\n  query TransparencyQuery($context: ContextInput!, $adTransparencyId: String!) {\n    sponsoredContent {\n      transparencyOverlay(context: $context, adTransparencyId: $adTransparencyId) {\n        ...TransparencyContentFragment\n      }\n    }\n  }\n\n  ","\n"]);return U=function(){return e},e}function R(){var e=P(["\n  fragment TransparencyFragment on AdTransparencyTrigger {\n    adTransparencyId\n    adTransparencyButton {\n      ...AdTransparencyButtonFragment\n    }\n    adTransparencyOverlaySkeleton {\n      ...TransparencyOverlaySkeletonFragment\n    }\n  }\n\n  fragment TransparencyOverlaySkeletonFragment on TransparencyOverlaySkeleton {\n    title\n    error {\n      ...TransparencyOverlayErrorFragment\n    }\n  }\n\n  fragment TransparencyOverlayErrorFragment on TransparencyOverlayError {\n    icon {\n      id\n      size\n    }\n    description\n    button {\n      primary\n    }\n    allowedRetryAttempts\n    exceededAttemptsMessage\n  }\n\n  ","\n"]);return R=function(){return e},e}var B=(0,a.Ps)(F()),V=function(e){return e.DISPLAY_AD="display_ad",e.NATIVE_AD="native_ad",e}(V||{}),G=function(e){var n=e.transparencyId,t=e.type,a=void 0===t?"native_ad":t,s=e.className,u=e.data,d=N((0,i.useDialog)("transparency-dialog-".concat(n)),2)[1],m=function(){d.openDialog()};switch(a){case"native_ad":var p;return r.createElement(l.J,{onClick:m,className:s},r.createElement(r.Fragment,null,u.primary,r.createElement(c.fR,{name:(null===(p=u.icon)||void 0===p?void 0:p.id)||"info"})));case"display_ad":return r.createElement(o.O,{onClick:m},r.createElement("button",{type:"button"},u.primary,r.createElement(c.fR,{name:"info_outline"})))}};G.displayName="sharedui-transparencyButton",G.fragment=B;var $=(0,a.Ps)(_()),H=function(e){var n,t,a,l,i,c,o,s,u=e.lines,d=e.items,m=e.data,p=e.children,y=m.expandAnalytics,v=m.collapseAnalytics,E=m.expanded,b=m.expandedLabel,k=m.collapsedLabel,O=N(r.useState(E),2),T=O[0],A=O[1],h=r.useCallback((function(){A(!T)}),[T,A]),I=(0,f.useClickTracker)(),S={id:null!==(i=null===(n=y)||void 0===n?void 0:n.referrerId)&&void 0!==i?i:"",description:null!==(c=null===(t=y)||void 0===t?void 0:t.linkName)&&void 0!==c?c:"",callback:r.useCallback((function(e,n){I(e,n)}),[I])},C={id:null!==(o=null===(a=v)||void 0===a?void 0:a.referrerId)&&void 0!==o?o:"",description:null!==(s=null===(l=v)||void 0===l?void 0:l.linkName)&&void 0!==s?s:"",callback:r.useCallback((function(e,n){I(e,n)}),[I])};return r.createElement(g.O,{expandLabel:k,collapseLabel:b,lines:u,items:d,isVisible:T,handleClick:h,expandA11yLabel:k,collapseA11yLabel:b,analytics:T?C:S,hideScrim:!0},p)};H.fragment=$,H.displayName="EGDSExpandoPeek";var K,Y=(0,a.Ps)(j()),q=(0,a.Ps)(M()),X=(L(K={},"EXTERNAL","_blank"),L(K,"INTERNAL","_self"),K),Z=function(e){var n=e.className,t=e.data,a=e.children,l=t.accessibility,i=t.resource,c=t.target,o=t.analytics,s=(0,f.useClickTracker)(),u=r.useCallback((function(){var e,n,t,r;null===(n=o)||void 0===n||null===(e=n.urls)||void 0===e||e.forEach((function(e){var n;null===(n=navigator)||void 0===n||n.sendBeacon(e)})),(null===(t=o)||void 0===t?void 0:t.referrerId)&&(null===(r=o)||void 0===r?void 0:r.linkName)&&s(o.referrerId,o.linkName)}),[s]);return"HttpURI"!==i.__typename?null:r.createElement("a",{className:n,target:X[c],href:i.value,rel:"noopener noreferrer",onClickCapture:u},l&&r.createElement("span",{className:"is-visually-hidden"},l),a)};Z.fragment=q,Z.displayName="UILinkAction";var J,Q=(0,a.Ps)(z(),H.fragment,Y,Z.fragment),W="six",ee={padding:{blockstart:"two"}},ne=(L(J={},"SMALL","small"),L(J,"LARGE","large"),L(J,"MEDIUM","medium"),J),te=function(e){var n,t,a,l=e.data;return r.createElement(v.v,{space:"two",direction:"column"},r.createElement(E.t,null,r.createElement(T.l,{margin:W},r.createElement("div",null,(a=l.entities,r.createElement(r.Fragment,null,a.map((function(e,n){return function(e,n){return r.createElement(T.l,{key:"entity-".concat(n),stid:"transparency-entity-".concat(n),padding:ee.padding},r.createElement("div",null,r.createElement(A.b,{size:100},e.label),e.expando&&r.createElement(H,{lines:3,data:e.expando},r.createElement(A.b,{size:200,weight:"medium"},e.names))))}(e,n)})))),(t=l.targetingCategories,r.createElement(T.l,{padding:ee.padding},r.createElement("div",null,r.createElement(h.y,{size:7},t.heading.text),r.createElement(T.l,null,r.createElement(k.Y,null,t.items.listItems.map((function(e,n){return r.createElement(O.m,{key:"targeting-category-list-".concat(n)},e.text)}))))))),(n=l.callToAction,r.createElement(T.l,{padding:ee.padding},r.createElement("div",null,r.createElement(b.M,{inline:!0,size:ne[n.size]},r.createElement(Z,{data:n.action},n.text)))))))))};te.fragment=Q,te.displayName="TransparencyContent";var re=function(){return r.createElement(S.z,null,r.createElement(v.v,{direction:"column",alignItems:"center"},r.createElement(E.t,null,r.createElement(I.y,null))))},ae={padding:{blockstart:"two"}},le=function(e){var n,t,a,l,i=e.errorData,o=e.clickCallback,s=e.showErrorContent,u=e.loading,d=N(r.useState(0),2),m=d[0],p=d[1];if(!i||!s||u)return null;var y=function(){var e;return m>=((null===(e=i)||void 0===e?void 0:e.allowedRetryAttempts)||0)};return r.createElement(S.z,null,r.createElement(v.v,{direction:"column",alignItems:"center"},r.createElement(r.Fragment,null,r.createElement(E.t,null,r.createElement(T.l,{padding:ae.padding},r.createElement(c.fR,{id:(null===(n=i.icon)||void 0===n?void 0:n.id)||"info",name:(null===(t=i.icon)||void 0===t?void 0:t.id)||"info",title:(null===(a=i.icon)||void 0===a?void 0:a.id)||"info",size:c.eZ[(null===(l=i.icon)||void 0===l?void 0:l.size)||c.eZ.MEDIUM]}))),r.createElement(E.t,null,r.createElement(T.l,{padding:ae.padding},r.createElement(h.y,{align:"center"},y()?i.exceededAttemptsMessage:i.description))),i.button&&!y()&&r.createElement(E.t,null,r.createElement(T.l,{padding:ae.padding},r.createElement("div",null,r.createElement(C.Y,{onClick:function(){return o(),void p(m+1)},name:"retry-transparency"},i.button.primary)))))))},ie=(0,a.Ps)(U(),te.fragment),ce=function(e){var n=e.skeletonData,t=e.inputs,a=N((0,i.useDialog)("transparency-dialog-".concat(t.adTransparencyId)),3),l=a[0],c=a[1],o=a[2],f=(0,u.v)().context,g=w(x({},t),{context:f});(0,r.useEffect)((function(){l&&E({variables:g})}),[l]);var v=N((0,s.t)(ie,{context:{useApq:!0},ssr:!1,notifyOnNetworkStatusChange:!0,fetchPolicy:"no-cache"}),2),E=v[0],b=v[1],k=b.data,O=b.error,T=b.loading,A=b.refetch,h=function(){c.closeDialog()},I=function(e){var t,a,i,c;return r.createElement(m.K,{liveAnnounceString:"Transparency Sheet has opened",type:"centered",centeredSheetSize:e.toLowerCase(),height:{SMALL:450,MEDIUM:700}[e],triggerRef:null,isVisible:l},r.createElement(y.b,{navigationContent:{onClick:h,navIconLabel:"Close Toolbar"},toolbarTitle:(null===(t=n)||void 0===t?void 0:t.title)||""}),T&&r.createElement(re,null),r.createElement(r.Fragment,null,r.createElement(le,{errorData:null===(a=n)||void 0===a?void 0:a.error,clickCallback:A,showErrorContent:!!O,loading:T}),!T&&!O&&(null===(c=k)||void 0===c||null===(i=c.sponsoredContent)||void 0===i?void 0:i.transparencyOverlay)&&r.createElement(te,{data:k.sponsoredContent.transparencyOverlay})))};return r.createElement(p.U,{isVisible:l},r.createElement(o,null,r.createElement(d.Viewport,null,r.createElement(d.ViewMedium,null,I(d.ViewSizes.MEDIUM)),r.createElement(d.ViewSmall,null,I(d.ViewSizes.SMALL)))))};ce.displayName="sharedui-TransparencyOverlay";var oe=(0,a.Ps)(R(),G.fragment),se=function(e){var n=e.type,t=e.data,a=e.className,l=t.adTransparencyId,i=t.adTransparencyButton,c=t.adTransparencyOverlaySkeleton;if(!i)return null;var o={adTransparencyId:l},s={transparencyId:l,type:n,className:a};return r.createElement(r.Fragment,null,r.createElement(G,x({data:i},s)),r.createElement(ce,{inputs:o,skeletonData:c}))};se.fragment=oe,se.displayName="sharedui-transparency"}}]);
//# sourceMappingURL=shared-ui-retail-sponsored-content-transparency.80900fdf29361fd77ada.js.map