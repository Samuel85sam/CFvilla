/*@license For license information please refer to shared-ui-pricing-price-details.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8807],{74562:function(e,n,t){t.d(n,{X_:function(){return wn},yX:function(){return kn}});var r=t(67294),a=t(69430),i=t(20515),o=t(93351),l=t(77075),d=t(54102),m=t(96046),c=t(24948),s=t(79043),u=t(23984),g=t(46605),f=t(91410),p=t(35957),v=t(23236),E=t(91233),P=t(30300),y=t(98250),I=t(10333),h=t(34778),S=t(95032),L=t(19719),A=t(95253),F=t(5419),b=t(27764),z=t(73030),_=t(78917),k=t(22335),D=t(41913),x=t(13943),T=t(75766),M=t(27749),N=t(30451),R=t(78987);function G(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(d){l=!0,a=d}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return G(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function C(){var e=H(["\n  fragment EGDSIconFragment on Icon {\n    description\n    id\n    size\n    theme\n    title\n    withBackground\n  }\n"]);return C=function(){return e},e}function U(){var e=H(["\n  fragment EGDSIllustrationFragment on Illustration {\n    id\n    description\n    link: url\n  }\n"]);return U=function(){return e},e}function V(){var e=H(["\n  fragment EGDSMarkFragment on Mark {\n    description\n    id\n    markSize: size\n    url {\n      value\n    }\n  }\n"]);return V=function(){return e},e}function j(){var e=H(["\n  fragment UIGraphicFragment on UIGraphic {\n    ...EGDSIconFragment\n    ...EGDSMarkFragment\n    ...EGDSIllustrationFragment\n  }\n\n  ","\n  ","\n  ","\n"]);return j=function(){return e},e}function Z(){var e=H(["\n  fragment AdditionalInformationPopoverGridLineItemMessageFragment on PricePresentationLineItemMessage {\n    ... on PriceLineText {\n      __typename\n      primary\n    }\n    ... on PriceLineHeading {\n      __typename\n      tag\n      size\n      primary\n    }\n  }\n"]);return Z=function(){return e},e}function X(){var e=H(["\n  fragment AdditionalInformationPopoverGridLineItemEntryFragment on PricePresentationLineItemEntry {\n    primaryMessage {\n      ...AdditionalInformationPopoverGridLineItemMessageFragment\n    }\n    secondaryMessages {\n      ...AdditionalInformationPopoverGridLineItemMessageFragment\n    }\n  }\n  ","\n"]);return X=function(){return e},e}function W(){var e=H(["\n  fragment AdditionalInformationPopoverGridSectionFragment on AdditionalInformationPopoverGridSection {\n    __typename\n    subSections {\n      header {\n        name {\n          primaryMessage {\n            ...AdditionalInformationPopoverGridLineItemMessageFragment\n          }\n        }\n      }\n      items {\n        name {\n          ...AdditionalInformationPopoverGridLineItemEntryFragment\n        }\n        enrichedValue {\n          ...AdditionalInformationPopoverGridLineItemEntryFragment\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return W=function(){return e},e}function Y(){var e=H(["\n  fragment AdditionalInformationPopoverListSectionFragment on AdditionalInformationPopoverListSection {\n    __typename\n    content {\n      __typename\n      items {\n        text\n      }\n    }\n  }\n"]);return Y=function(){return e},e}function $(){var e=H(["\n  fragment IconFragments on Icon {\n    description\n    id\n    size\n    theme\n    title\n    withBackground\n  }\n"]);return $=function(){return e},e}function K(){var e=H(["\n  fragment ActionFragment on UILinkAction {\n    accessibility\n    analytics {\n      linkName\n      referrerId\n    }\n    resource {\n      value\n    }\n    target\n  }\n"]);return K=function(){return e},e}function Q(){var e=H(["\n  fragment EGDSStandardLinkFragment on EGDSStandardLink {\n    action {\n      ...ActionFragment\n    }\n    standardLinkIcon: icon {\n      ...IconFragments\n    }\n    iconPosition\n    size\n    text\n  }\n\n  ","\n  ","\n"]);return Q=function(){return e},e}function q(){var e=H(["\n  fragment AdditionalInformationPopoverTextSectionFragment on AdditionalInformationPopoverTextSection {\n    __typename\n    text {\n      ...EGDSStandardLinkFragment\n      text\n    }\n  }\n  ","\n"]);return q=function(){return e},e}function J(){var e=H(["\n  fragment AdditionalInformationPopoverSectionFragment on AdditionalInformationPopoverSection {\n    __typename\n    ... on AdditionalInformationPopoverTextSection {\n      ...AdditionalInformationPopoverTextSectionFragment\n    }\n    ... on AdditionalInformationPopoverListSection {\n      ...AdditionalInformationPopoverListSectionFragment\n    }\n    ... on AdditionalInformationPopoverGridSection {\n      ...AdditionalInformationPopoverGridSectionFragment\n    }\n  }\n  ","\n  ","\n  ","\n"]);return J=function(){return e},e}function ee(){var e=H(["\n  fragment AdditionalInformationPopoverFragment on AdditionalInformationPopover {\n    icon {\n      id\n      description\n      size\n    }\n    enrichedSecondaries {\n      ...AdditionalInformationPopoverSectionFragment\n    }\n    analytics {\n      linkName\n      referrerId\n    }\n  }\n  ","\n"]);return ee=function(){return e},e}function ne(){var e=H(["\n  fragment PricePresentationAdditionalInformationDialogFooterButtonsFragment on EGDSButton {\n    accessibility\n    disabled\n    primary\n  }\n"]);return ne=function(){return e},e}function te(){var e=H(["\n  fragment PricePresentationAdditionalInformationDialogFooterFragment on EGDSDialogFooter {\n    ... on EGDSInlineDialogFooter {\n      buttons {\n        ...PricePresentationAdditionalInformationDialogFooterButtonsFragment\n      }\n    }\n    ... on EGDSStackedDialogFooter {\n      buttons {\n        ...PricePresentationAdditionalInformationDialogFooterButtonsFragment\n      }\n    }\n  }\n\n  ","\n"]);return te=function(){return e},e}function re(){var e=H(["\n  fragment PricePresentationAdditionalInformationDialogFragment on PricePresentationAdditionalInformationDialog {\n    closeAnalytics {\n      linkName\n      referrerId\n    }\n    enrichedSecondaries {\n      ...AdditionalInformationPopoverSectionFragment\n    }\n    footer {\n      ...PricePresentationAdditionalInformationDialogFooterFragment\n    }\n    icon {\n      id\n      description\n      size\n    }\n    openAnalytics {\n      linkName\n      referrerId\n    }\n  }\n\n  ","\n  ","\n"]);return re=function(){return e},e}function ae(){var e=H(["\n  fragment PricePresentationAdditionalInformationPopoverFragment on PricePresentationAdditionalInformationPopover {\n    analytics {\n      linkName\n      referrerId\n    }\n    enrichedSecondaries {\n      ...AdditionalInformationPopoverSectionFragment\n    }\n    icon {\n      id\n      description\n      size\n    }\n  }\n\n  ","\n"]);return ae=function(){return e},e}function ie(){var e=H(["\n  fragment PricePresentationAdditionalInformationFragment on PricePresentationAdditionalInformation {\n    ...PricePresentationAdditionalInformationDialogFragment\n    ...PricePresentationAdditionalInformationPopoverFragment\n  }\n\n  ","\n  ","\n"]);return ie=function(){return e},e}function oe(){var e=H(["\n  fragment PriceLineTextFragment on PriceLineText {\n    __typename\n    additionalInfo {\n      ...AdditionalInformationPopoverFragment\n    }\n    additionalInformation {\n      ...PricePresentationAdditionalInformationFragment\n    }\n    graphic {\n      ...UIGraphicFragment\n    }\n    icon {\n      id\n      description\n      size\n    }\n    primary\n    theme\n    weight\n  }\n\n  ","\n  ","\n"]);return oe=function(){return e},e}function le(){var e=H(["\n  fragment InlinePriceLineTextFragment on InlinePriceLineText {\n    __typename\n    inlineItems {\n      ...PriceLineTextFragment\n    }\n  }\n  ","\n"]);return le=function(){return e},e}function de(){var e=H(["\n  fragment EGDSStandardBadgeFragment on EGDSStandardBadge {\n    accessibility\n    graphic {\n      ...UIGraphicFragment\n    }\n    text\n    theme\n  }\n\n  ","\n"]);return de=function(){return e},e}function me(){var e=H(["\n  fragment PriceLineBadgeFragment on PriceLineBadge {\n    badge {\n      ...EGDSStandardBadgeFragment\n    }\n  }\n\n  ","\n"]);return me=function(){return e},e}function ce(){var e=H(["\n  fragment PriceLineHeadingFragment on PriceLineHeading {\n    __typename\n    additionalInfo {\n      ...AdditionalInformationPopoverFragment\n    }\n    additionalInformation {\n      ...PricePresentationAdditionalInformationFragment\n    }\n    icon {\n      description\n      id\n      size\n    }\n    primary\n    size\n    tag\n  }\n  ","\n  ","\n"]);return ce=function(){return e},e}function se(){var e=H(["\n  fragment PriceLineElementFragment on PricePresentationLineItemMessage {\n    __typename\n    ...PriceLineTextFragment\n    ...PriceLineHeadingFragment\n    ...InlinePriceLineTextFragment\n    ...PriceLineBadgeFragment\n  }\n\n  ","\n  ","\n  ","\n  ","\n"]);return se=function(){return e},e}function ue(){var e=H(["\n  fragment PricePresentationLineItemEntryFragment on PricePresentationLineItemEntry {\n    primaryMessage {\n      ...PriceLineElementFragment\n    }\n    secondaryMessages {\n      ...PriceLineElementFragment\n    }\n  }\n\n  ","\n"]);return ue=function(){return e},e}function ge(){var e=H(["\n  fragment PricePresentationLineItemFragment on PricePresentationLineItem {\n    enrichedValue {\n      ...PricePresentationLineItemEntryFragment\n    }\n    name {\n      ...PricePresentationLineItemEntryFragment\n    }\n  }\n\n  ","\n"]);return ge=function(){return e},e}function fe(){var e=H(["\n  fragment PricePresentationSubSectionFragment on PricePresentationSubSection {\n    header {\n      name {\n        primaryMessage {\n          ... on PriceLineText {\n            primary\n          }\n          ... on PriceLineHeading {\n            primary\n          }\n        }\n      }\n      enrichedValue {\n        ...PricePresentationLineItemEntryFragment\n      }\n    }\n    items {\n      ...PricePresentationLineItemFragment\n    }\n  }\n\n  ","\n"]);return fe=function(){return e},e}function pe(){var e=H(["\n  fragment PricePresentationSectionFragment on PricePresentationSection {\n    header {\n      name {\n        ...PricePresentationLineItemEntryFragment\n      }\n      enrichedValue {\n        ...PricePresentationLineItemEntryFragment\n      }\n    }\n    subSections {\n      ...PricePresentationSubSectionFragment\n    }\n  }\n\n  ","\n"]);return pe=function(){return e},e}function ve(){var e=H(["\n  fragment PricePresentationFragment on PricePresentation {\n    title {\n      primary\n    }\n    sections {\n      ...PricePresentationSectionFragment\n    }\n    footer {\n      header\n      messages {\n        ...PriceLineElementFragment\n      }\n    }\n  }\n\n  ","\n  ","\n"]);return ve=function(){return e},e}var Ee=(0,a.Ps)(C()),Pe=function(e){var n=e.data,t=e.defaultIconSize,a=e.defaultIconTheme,i=n.description,o=n.id,l=n.size,d=n.title,m=n.theme,c=n.withBackground;return r.createElement(g.fR,{description:i,id:o,name:o,size:l?g.eZ[l]:t,title:null!=d?d:void 0,theme:null!=m?m:a,shadow:Boolean(c)})};Pe.displayName="EGDSIcon",Pe.fragment=Ee;var ye=(0,a.Ps)(U()),Ie=function(e){var n=e.data;return r.createElement(f.a,{alt:n.description,url:n.link})};Ie.displayName="EGDSIllustration",Ie.fragment=ye;var he=(0,a.Ps)(V()),Se=function(e){var n,t=e.data,a=e.size;return t.url||t.id?r.createElement(p.F,{description:t.description,id:t.id,name:t.id,size:t.markSize?v.j[t.markSize]:a,url:null===(n=t.url)||void 0===n?void 0:n.value}):null};Se.displayName="EGDSMark",Se.fragment=he;var Le=(0,a.Ps)(j(),Pe.fragment,Se.fragment,Ie.fragment),Ae=function(e){var n=e.data,t=e.markProps,a=e.iconProps;switch(n.__typename){case"Icon":return r.createElement(Pe,B({data:n},a));case"Mark":return r.createElement(Se,B({data:n},t));case"Illustration":return r.createElement(Ie,{data:n});default:return null}};Ae.displayName="UIGraphic",Ae.fragment=Le;var Fe=(0,a.Ps)(Z()),be=function(e){var n=e.data,t=e.size;if(!n)return null;switch(n.__typename){case"PriceLineText":return r.createElement(P.b,{size:t},n.primary);case"PriceLineHeading":return r.createElement(F.y,{size:Number(n.size),tag:n.tag},n.primary);default:return null}};be.displayName="AdditionalInformationPopoverGridLineItemMessage",be.fragment=Fe;var ze=(0,a.Ps)(X(),be.fragment),_e=function(e){var n=e.data;if(!n)return null;var t=n.primaryMessage,a=n.secondaryMessages;return r.createElement(r.Fragment,null,r.createElement(be,{data:t}),a.map((function(e,n){return r.createElement(be,{key:n,size:200,data:e})})))};_e.displayName="AdditionalInformationPopoverGridLineItemEntry",_e.fragment=ze;var ke=(0,a.Ps)(W(),_e.fragment,be.fragment),De=function(e){var n=e.data.subSections;return n.length?r.createElement(l.ey,null,r.createElement(d.S,null,n.map((function(e,n){var t,a=e.header,i=e.items,l=null===(t=a)||void 0===t?void 0:t.name.primaryMessage;return r.createElement(r.Fragment,{key:n},l&&r.createElement(m.W,null,r.createElement(c.a,{colSpan:2,padding:s.nB.zero},r.createElement(o.l,{padding:n?{blockstart:"six",blockend:"three"}:{blockend:"three"}},r.createElement("div",null,r.createElement(be,{data:l}))))),i.map((function(e,t){var a=e.name,i=e.enrichedValue,d=t||n&&!l?{blockstart:"three"}:void 0;return r.createElement(m.W,{key:t},r.createElement(c.a,{colSpan:i?1:2,padding:s.nB.zero},r.createElement(o.l,{padding:d},r.createElement("div",null,r.createElement(_e,{data:a})))),r.createElement(r.Fragment,null,i&&r.createElement(c.a,{align:{horizontal:"trailing"},padding:s.nB.zero},r.createElement(o.l,{padding:d},r.createElement("div",null,r.createElement(_e,{data:i}))))))})))})))):null};De.displayName="AdditionalInformationPopoverGridSection",De.fragment=ke;var xe=(0,a.Ps)(Y()),Te=function(e){var n,t=e.data,a=e.listProps,i=t.content.items.map((function(e){return e.text})),o="EGDSOrderedList"===t.content.__typename?"ordered":"unordered";return r.createElement(b.Y,{data:i,size:null===(n=a)||void 0===n?void 0:n.size,type:o})};Te.displayName="AdditionalInformationPopoverListSection",(Te.fragment=xe).__typename="AdditionalInformationPopoverListSection";var Me,Ne,Re=(0,a.Ps)($()),Ge=function(e){var n,t=e.className,a=e.data,i=e.spotlight;return r.createElement(g.fR,{className:t,description:a.description,id:a.id,name:a.id,size:a.size?g.eZ[a.size]:void 0,title:null!==(Me=a.title)&&void 0!==Me?Me:void 0,theme:null!==(Ne=null===(n=a)||void 0===n?void 0:n.theme)&&void 0!==Ne?Ne:void 0,shadow:Boolean(a.withBackground),spotlight:null!=i?i:void 0})};Ge.displayName="UitkIcon",Ge.fragment=Re;var we,Be,Oe=(0,a.Ps)(K()),He=(w(we={},"SMALL","small"),w(we,"MEDIUM","medium"),w(we,"LARGE","medium"),we),Ce=(w(Be={},"EXTERNAL","_blank"),w(Be,"INTERNAL","_self"),Be),Ue=(0,a.Ps)(Q(),Oe,Ge.fragment),Ve=function(e){var n=e.icon,t=e.iconPosition,a=e.iconPositionToMatch;return n&&t===a?r.createElement(Ge,{data:n}):null},je=function(e){var n=e.className,t=e.inline,a=e.align,i=e.data,o=i.action,l=o.analytics,d=o.resource,m=o.target,c=i.iconPosition,s=i.standardLinkIcon,u=i.size,g=i.text,f=(0,y.useClickTracker)(),p=r.useCallback((function(){f(l.referrerId,l.linkName)}),[f,l]);return r.createElement(I.M,{className:n,size:He[u],onClickCapture:p,inline:t,align:a},r.createElement("a",{target:Ce[m],href:d.value},r.createElement(Ve,{icon:s,iconPosition:c,iconPositionToMatch:"LEADING"}),g,r.createElement(Ve,{icon:s,iconPosition:c,iconPositionToMatch:"TRAILING"})))};je.fragment=Ue,je.displayName="EGDSStandardLink";var Ze=(0,a.Ps)(q(),je.fragment),Xe=function(e){var n,t,a,i=e.data,o=e.textProps;return"EGDSStandardLink"===i.text.__typename?r.createElement(je,{data:i.text}):r.createElement(P.b,{size:(null===(n=o)||void 0===n?void 0:n.size)||300,theme:null===(t=o)||void 0===t?void 0:t.theme,weight:null===(a=o)||void 0===a?void 0:a.weight,inline:!0},i.text.text)};Xe.displayName="AdditionalInformationPopoverTextSection",(Xe.fragment=Ze).__typename="AdditionalInformationPopoverTextSection";var We,Ye=(0,a.Ps)(J(),Xe.fragment,Te.fragment,De.fragment),$e=function(e){var n=e.enrichedSecondary;switch(n.__typename){case"AdditionalInformationPopoverListSection":return r.createElement(Te,{data:n});case"AdditionalInformationPopoverTextSection":return r.createElement(Xe,{data:n});case"AdditionalInformationPopoverGridSection":return r.createElement(De,{data:n});default:return null}},Ke=function(e){var n=e.data;return r.createElement(r.Fragment,null,n.map((function(e,t){var a=t===n.length-1;return r.createElement(o.l,{key:"additional-info-section-".concat(t),margin:a?void 0:{blockend:"two"}},r.createElement("div",null,r.createElement($e,{enrichedSecondary:e})))})))};Ke.fragment=Ye,Ke.displayName="AdditionalInformationPopoverSections";var Qe,qe=(w(We={},"EMPHASIS","emphasis"),w(We,"INVERSE","inverse"),w(We,"LOYALTY","loyalty"),w(We,"NEGATIVE","negative"),w(We,"POSITIVE","positive"),w(We,"PRIMARY","emphasis"),w(We,"SECONDARY","default"),We),Je=(w(Qe={},"BOLD","bold"),w(Qe,"MEDIUM","medium"),w(Qe,"REGULAR","regular"),Qe),en=function(e){var n,t=e.primaryMessage,a=e.textProps;switch(null===(n=t)||void 0===n?void 0:n.__typename){case"PriceLineText":var i,o,l,d;return r.createElement(P.b,{"data-stid":"price-presentation-additional-information-text",size:null===(i=a)||void 0===i?void 0:i.size,theme:(null===(o=t)||void 0===o?void 0:o.theme)?qe[t.theme]:void 0,weight:(null===(l=t)||void 0===l?void 0:l.weight)?Je[t.weight]:void 0,inline:!0},null===(d=t)||void 0===d?void 0:d.primary);case"PriceLineHeading":var m;return r.createElement(F.y,{"data-stid":"price-presentation-additional-information-heading",size:Number(t.size),tag:t.tag},null===(m=t)||void 0===m?void 0:m.primary);default:return null}},nn=(0,a.Ps)(ee(),Ke.fragment),tn=function(e){var n,t,a,i,l=e.data,d=e.primaryMessage,m=e.textProps,c=l.icon,s=l.analytics,f=l.enrichedSecondaries,p=O(r.useState(!1),2),v=p[0],E=p[1],P=null===(n=d)||void 0===n?void 0:n.icon,F=(null===(t=d)||void 0===t?void 0:t.primary)&&f.length>0&&!c,b=(0,y.useClickTracker)();if(!c&&!F)return null;var z;return r.createElement(h.p,{isOpen:v,onTriggerClick:function(){!v&&s&&b(s.referrerId,s.linkName,!1),E((function(e){return!e}))}},r.createElement(S.H,null,r.createElement("div",null,c&&r.createElement(A.O,null,r.createElement("button",{"data-stid":"additional-menu-btn",type:"button"},r.createElement(u.v,{alignItems:"center"},P&&r.createElement(o.l,{margin:{inlineend:"one"}},r.createElement("span",{"data-stid":"additional-menu-btn-discount-icon"},r.createElement(g.fR,{name:P.id,id:P.id,size:null!==(z=P.size&&g.eZ[P.size])&&void 0!==z?z:g.eZ.EXTRA_SMALL,theme:"secondary",title:P.description}))),r.createElement(en,{primaryMessage:d,textProps:m}),r.createElement(o.l,{margin:{inlinestart:"one"}},r.createElement("span",{"data-stid":"additional-menu-btn-info-icon"},r.createElement(g.fR,{name:c.id,id:c.id,size:g.eZ.EXTRA_SMALL,theme:"secondary",title:c.description})))))),F&&r.createElement(I.M,{inline:!0,"data-stid":"additional-menu-link"},r.createElement("button",{type:"button"},null===(a=d)||void 0===a?void 0:a.primary)))),(null===(i=f)||void 0===i?void 0:i.length)&&r.createElement(L.a,{autoPosition:!0,position:L.d.LEFT},r.createElement(o.l,{padding:{inline:"three"}},r.createElement("div",null,r.createElement(Ke,{data:f})))))};(tn.fragment=nn).__typename="AdditionalInformationPopover",tn.displayName="AdditionalInformationPopover";var rn=(0,a.Ps)(ne()),an=(0,a.Ps)(te(),rn),on=function(e){var n,t,a,i=e.data,o=e.closeDialog,l=i.buttons.map((function(e){return function(e,n){var t,r;return"UITertiaryButton"===e.__typename?{disabled:e.disabled,onClick:n,text:null!==(t=e.primary)&&void 0!==t?t:"",type:"tertiary"}:{disabled:e.disabled,onClick:n,text:null!==(r=e.primary)&&void 0!==r?r:"",type:"primary"}}(e,o)})),d={buttonOne:null!==(n=l[0])&&void 0!==n?n:void 0,buttonTwo:null!==(t=l[1])&&void 0!==t?t:void 0,buttonThree:null!==(a=l[2])&&void 0!==a?a:void 0};return"EGDSStackedDialogFooter"===i.__typename?r.createElement(x.Q,B({stacked:!0},d)):r.createElement(x.Q,B({},d))};on.displayName="PricePresentationAdditionalInformationDialogFooter",on.fragment=an;var ln=(0,a.Ps)(re(),on.fragment,Ke.fragment),dn=function(e){var n,t,a=e.data,i=e.isRenderedInDialog,l=e.primaryMessage,d=e.textProps,m=a.closeAnalytics,c=a.enrichedSecondaries,s=a.footer,f=a.icon,p=a.openAnalytics,v=(0,y.useClickTracker)(),E=O((0,z.useDialog)("price-additional-information-".concat(null===(n=l)||void 0===n?void 0:n.primary),i?"pwaDialogNested":void 0),3),P=E[0],I=E[1],h=E[2],S=function(){P?I.closeDialog():I.openDialog()};return(0,r.useEffect)((function(){!P&&p?v(p.referrerId,p.linkName,!1):P&&m&&v(m.referrerId,m.linkName,!1)}),[m,p,P,v]),(null===(t=c)||void 0===t?void 0:t.length)?r.createElement("div",null,r.createElement(u.v,{alignItems:"center"},r.createElement(A.O,null,r.createElement("button",{onClick:S,type:"button"},r.createElement(u.v,{alignItems:"center"},r.createElement(en,{primaryMessage:l,textProps:d}),f&&r.createElement(o.l,{margin:{inlinestart:"one"}},r.createElement(g.fR,{name:f.id,id:f.id,size:g.eZ.EXTRA_SMALL,theme:"secondary",title:f.description})))))),r.createElement(D.U,{isVisible:P},r.createElement(h,null,r.createElement(_.A,{dialogShow:P},r.createElement(k.D,null,r.createElement(Ke,{data:c}),s&&r.createElement(on,{closeDialog:S,data:s})))))):null};dn.fragment=ln,dn.displayName="PricePresentationAdditionalInformationDialog";var mn=(0,a.Ps)(ae(),Ke.fragment),cn=function(e){var n,t,a,i,l=e.data,d=e.primaryMessage,m=e.textProps,c=l.icon,s=l.analytics,f=l.enrichedSecondaries,p=O(r.useState(!1),2),v=p[0],E=p[1],P=null===(n=d)||void 0===n?void 0:n.icon,F=(null===(t=d)||void 0===t?void 0:t.primary)&&f&&f.length>0&&!c,b=(0,y.useClickTracker)();if(!c&&!F)return null;var z;return r.createElement(h.p,{isOpen:v,onTriggerClick:function(){!v&&s&&b(s.referrerId,s.linkName,!1),E((function(e){return!e}))}},r.createElement(S.H,null,r.createElement("div",null,c&&r.createElement(A.O,null,r.createElement("button",{"data-stid":"additional-menu-btn",type:"button"},r.createElement(u.v,{alignItems:"center"},P&&r.createElement(o.l,{margin:{inlineend:"one"}},r.createElement("span",{"data-stid":"additional-menu-btn-discount-icon"},r.createElement(g.fR,{name:P.id,id:P.id,size:null!==(z=P.size&&g.eZ[P.size])&&void 0!==z?z:g.eZ.EXTRA_SMALL,theme:"secondary",title:P.description}))),r.createElement(en,{primaryMessage:d,textProps:m}),r.createElement(o.l,{margin:{inlinestart:"one"}},r.createElement("span",{"data-stid":"additional-menu-btn-info-icon"},r.createElement(g.fR,{name:c.id,id:c.id,size:g.eZ.EXTRA_SMALL,theme:"secondary",title:c.description})))))),F&&r.createElement(I.M,{inline:!0,"data-stid":"additional-menu-link"},r.createElement("button",{type:"button"},null===(a=d)||void 0===a?void 0:a.primary)))),(null===(i=f)||void 0===i?void 0:i.length)&&r.createElement(L.a,{autoPosition:!0,position:L.d.LEFT,width:300},r.createElement(o.l,{padding:{inline:"three"}},r.createElement("div",null,r.createElement(Ke,{data:f})))))};cn.fragment=mn,cn.displayName="PricePresentationAdditionalInformationPopover";var sn=(0,a.Ps)(ie(),dn.fragment,cn.fragment),un=function(e){var n=e.data,t=e.isRenderedInDialog,a=e.primaryMessage,i=e.textProps;switch(n.__typename){case"PricePresentationAdditionalInformationDialog":return r.createElement(dn,{data:n,isRenderedInDialog:t,primaryMessage:a,textProps:i});case"PricePresentationAdditionalInformationPopover":return r.createElement(cn,{data:n,primaryMessage:a,textProps:i});default:return null}};un.fragment=sn,un.displayName="PricePresentationAdditionalInformation";var gn=(0,a.Ps)(oe(),un.fragment,Ae.fragment),fn=function(e){var n,t=e.data,a=e.isRenderedInDialog,i=e.size;if(!(null===(n=t)||void 0===n?void 0:n.primary))return null;var o,l=t.additionalInfo,d=t.additionalInformation,m=t.primary,c=t.theme,s=t.weight,f=t.icon,p=t.graphic,v=t.__typename,y={size:i||300};return r.createElement(r.Fragment,null,l&&r.createElement(tn,{primaryMessage:t,data:l}),!l&&d&&r.createElement(un,{data:d,isRenderedInDialog:a,primaryMessage:{primary:m,theme:c,weight:s,icon:f,graphic:p,__typename:v},textProps:y}),!l&&!d&&r.createElement(P.b,{size:y.size,theme:c?qe[c]:void 0,weight:s?Je[s]:void 0},r.createElement(u.v,{space:"two"},r.createElement(E.t,null,p?r.createElement(Ae,{data:p}):f&&r.createElement(g.fR,{name:f.id,id:f.id,size:null!==(o=f.size&&g.eZ[f.size])&&void 0!==o?o:g.eZ.EXTRA_SMALL,theme:"secondary",title:f.description})),r.createElement(E.t,{grow:1},r.createElement(u.v,{direction:"column"},m)))))};(fn.fragment=gn).__typename="PriceLineText",fn.displayName="PriceLineText";var pn=(0,a.Ps)(le(),fn.fragment),vn=function(e){var n=e.size,t=e.data.inlineItems;return t.length?r.createElement(u.v,{space:"one",wrap:"wrap"},t.map((function(e,t){return r.createElement(fn,{size:n,data:e,key:t})}))):null};(vn.fragment=pn).__typename="InlinePriceLineText",vn.displayName="InlinePriceLineText";var En={standard:"standard",emphasis:"emphasis",info:"info",featured:"featured",brand:"brand",warning:"warning",positive:"positive"},Pn=(0,a.Ps)(de(),Ae.fragment),yn=function(e){var n=e.size,t=e.data;if(!t.text)return null;var a=t.text,i=t.graphic,o=t.theme,l=t.accessibility,d=o?En[o]:void 0;return r.createElement(T.F,{size:n,text:a,theme:d,a11yText:null!=l?l:void 0},i&&r.createElement(Ae,{data:i}))};yn.fragment=Pn,yn.displayName="EGDSStandardBadge";var In=(0,a.Ps)(me(),yn.fragment),hn=function(e){var n=e.data;return n.badge?r.createElement(M.O,{type:"relative",position:{top:"minus-two"},cloneElement:!0},r.createElement("div",null,r.createElement(yn,{data:n.badge}))):null};hn.fragment=In,hn.displayName="PriceLineBadge";var Sn=(0,a.Ps)(ce(),tn.fragment,un.fragment),Ln=function(e){var n,t=e.data,a=e.isRenderedInDialog;if(!(null===(n=t)||void 0===n?void 0:n.primary))return null;var i=t.additionalInfo,o=t.additionalInformation,l=t.primary,d=t.size,m=t.tag;return r.createElement(r.Fragment,null,i&&r.createElement(tn,{primaryMessage:t,data:i}),!i&&o&&r.createElement(un,{data:o,isRenderedInDialog:a,primaryMessage:t}),!i&&!o&&r.createElement(F.y,{size:Number(d),tag:m},l))};(Ln.fragment=Sn).__typename="PriceLineHeading",Ln.displayName="PriceLineHeading";var An=(0,a.Ps)(se(),fn.fragment,Ln.fragment,vn.fragment,hn.fragment),Fn=function(e){var n=e.data,t=e.isRenderedInDialog,a=e.size;switch(n.__typename){case"PriceLineText":return r.createElement(fn,{size:a,data:n,isRenderedInDialog:t});case"PriceLineHeading":return r.createElement(Ln,{data:n,isRenderedInDialog:t});case"InlinePriceLineText":return r.createElement(vn,{size:a,data:n});case"PriceLineBadge":return r.createElement(hn,{data:n});default:return null}};Fn.fragment=An,Fn.displayName="PriceLineElement";var bn=(0,a.Ps)(ue(),Fn.fragment),zn=function(e){var n=e.data,t=e.isRenderedInDialog,a=e.padding,i=e.lineElementTextSize;if(!n)return null;var l=n.primaryMessage,d=n.secondaryMessages,m=d.map((function(e,n){return r.createElement(Fn,{key:n,size:200,data:e})}));return r.createElement(r.Fragment,null,r.createElement(Fn,{size:i||300,data:l,isRenderedInDialog:t}),a&&d.length>0?r.createElement(o.l,{padding:a},r.createElement("div",null,m)):m)};(zn.fragment=bn).__typename="PricePresentationLineItemEntry",zn.displayName="PricePresentationLineItemEntry";var _n=(0,a.Ps)(ge(),zn.fragment),kn=function(e){var n=e.isRenderedInDialog,t=e.padding,a=e.data,i=e.lineElementTextSize;if(!a)return null;var l=a.name,d=a.enrichedValue;return r.createElement(m.W,null,r.createElement(c.a,{colSpan:d?1:2,padding:s.nB.zero,align:{vertical:"top"}},r.createElement(o.l,{padding:t},r.createElement("div",null,r.createElement(zn,{data:l,isRenderedInDialog:n,padding:{inlinestart:"two"},lineElementTextSize:i})))),r.createElement(r.Fragment,null,d&&r.createElement(c.a,{align:{horizontal:"trailing",vertical:"top"},padding:s.nB.zero},r.createElement(o.l,{padding:t},r.createElement("div",null,r.createElement(zn,{data:d,isRenderedInDialog:n,lineElementTextSize:i}))))))};kn.fragment=_n,kn.fragment.__typename="PricePresentationLineItem",kn.displayName="PricePresentationLineItem";var Dn=(0,a.Ps)(fe(),kn.fragment),xn=function(e){var n,t,a,i,l,d=e.idx,u=e.isRenderedInDialog,g=e.padding,f=e.data,p=e.lineElementTextSize;if(!f)return null;var v=f.header,E=f.items,P=null===(n=v)||void 0===n?void 0:n.name.primaryMessage,y=("PriceLineHeading"===(null===(t=P)||void 0===t?void 0:t.__typename)||"PriceLineText"===(null===(a=P)||void 0===a?void 0:a.__typename))&&(null===(i=P)||void 0===i?void 0:i.primary),I=null===(l=v)||void 0===l?void 0:l.enrichedValue;return r.createElement(r.Fragment,null,y&&r.createElement(m.W,null,r.createElement(c.a,{colSpan:I?1:2,padding:s.nB.zero,align:{vertical:"top"}},r.createElement(o.l,{padding:g},r.createElement("div",null,r.createElement(F.y,{tag:"h3",size:7},y)))),r.createElement(r.Fragment,null,I&&r.createElement(c.a,{align:{horizontal:"trailing",vertical:"top"},padding:s.nB.zero},r.createElement(o.l,{padding:g},r.createElement("div",null,r.createElement(zn,{data:I,isRenderedInDialog:u})))))),E.map((function(e,n){return r.createElement(kn,{key:n,data:e,isRenderedInDialog:u,padding:n||d?{blockstart:"three"}:void 0,lineElementTextSize:p})})))};(xn.fragment=Dn).__typename="PricePresentationSubSection",xn.displayName="PricePresentationSubSection";var Tn=(0,a.Ps)(pe(),xn.fragment),Mn=function(e){var n,t,a,u,g,f,p,v,E,P,y=e.data,I=e.isRenderedInDialog,h=e.lineElementTextSize,S=y.header,L=y.subSections,A=null===(t=S)||void 0===t||null===(n=t.name)||void 0===n?void 0:n.primaryMessage,F=null===(u=S)||void 0===u||null===(a=u.name)||void 0===a?void 0:a.secondaryMessages,b=null===(f=S)||void 0===f||null===(g=f.enrichedValue)||void 0===g?void 0:g.primaryMessage,z=null===(v=S)||void 0===v||null===(p=v.enrichedValue)||void 0===p?void 0:p.secondaryMessages;return y&&(A||b||L.length)?r.createElement(i.U,{padded:!1},r.createElement(l.ey,{overflow:!1},r.createElement(d.S,null,r.createElement(r.Fragment,null,A&&r.createElement(m.W,null,r.createElement(c.a,{colSpan:b?1:2,padding:s.nB.zero,align:{vertical:"top"}},r.createElement(o.l,{padding:L.length?{blockend:"three"}:void 0},r.createElement("div",null,r.createElement(Fn,{size:400,data:A,isRenderedInDialog:I}),null===(E=F)||void 0===E?void 0:E.map((function(e,n){return r.createElement(Fn,{key:n,size:200,data:e,isRenderedInDialog:I})}))))),r.createElement(r.Fragment,null,b&&r.createElement(c.a,{align:{horizontal:"trailing",vertical:"top"},padding:s.nB.zero},r.createElement(o.l,{padding:L.length?{blockend:"three"}:void 0},r.createElement("div",null,r.createElement(Fn,{size:400,data:b,isRenderedInDialog:I}),null===(P=z)||void 0===P?void 0:P.map((function(e,n){return r.createElement(Fn,{key:n,size:200,data:e,isRenderedInDialog:I})})))))))),r.createElement(r.Fragment,null,L.map((function(e,n){return r.createElement(xn,{key:n,idx:n,isRenderedInDialog:I,padding:n?{blockstart:"three"}:{blockend:"three"},data:e,lineElementTextSize:h})})))))):null};(Mn.fragment=Tn).__typename="PricePresentationSection",Mn.displayName="PricePresentationSection";var Nn=function(){return r.createElement(r.Fragment,null,r.createElement(o.l,{margin:{blockstart:"three",blockend:"two"}},r.createElement("div",null,r.createElement(R.H,{animation:!0,type:"primary"}))),r.createElement(o.l,{margin:{blockend:"six"}},r.createElement("div",null,r.createElement(R.H,{animation:!0,type:"secondary"}))),r.createElement(o.l,{margin:{blockend:"six"}},r.createElement("div",null,r.createElement(R.H,{animation:!0,type:"primary"}))),r.createElement(o.l,null,r.createElement("div",null,r.createElement(R.H,{animation:!0,type:"primary"}))))},Rn=function(e){var n=e.header;return r.createElement(r.Fragment,null,n&&r.createElement(F.y,{tag:"h2",size:5},n),r.createElement(Nn,null))},Gn=(0,a.Ps)(ve(),Mn.fragment,Fn.fragment),wn=function(e){var n,t,a,i,l,d,m=e.data,c=e.isRenderedInDialog,s=e.lineElementTextSize,u=e.loading,g=m.title,f=m.sections,p=m.footer,v=(0,N.$)(1).headingLevel,E=(0,N.$)(2).headingLevel;if(!m||0===(null===(n=f)||void 0===n?void 0:n.length)||0===(null===(i=f)||void 0===i||null===(a=i[0])||void 0===a||null===(t=a.subSections)||void 0===t?void 0:t.length))return null;if(u)return r.createElement(Rn,{header:null===(d=g)||void 0===d?void 0:d.primary});var P=null===(l=g)||void 0===l?void 0:l.primary;return r.createElement("div",{"data-stid":"price-summary-card"},P&&r.createElement(o.l,{padding:{blockend:"three"}},r.createElement(F.y,{tag:null!=v?v:"h2",size:5},P)),f.map((function(e,n){return r.createElement(r.Fragment,{key:n},n>0&&r.createElement(o.l,{margin:{blockend:"six",blockstart:"six"},border:["blockend"]},r.createElement("div",null)),r.createElement(Mn,{data:e,isRenderedInDialog:c,lineElementTextSize:s}))})),p&&r.createElement(r.Fragment,null,r.createElement(F.y,{tag:null!=E?E:"h3",size:7},p.header),p.messages.map((function(e,n){return r.createElement(o.l,{key:"price-detail-footer-message-".concat(n),padding:{blockstart:"six"}},r.createElement("div",null,r.createElement(Fn,{size:200,data:e,isRenderedInDialog:c})))}))))};wn.fragment=Gn,wn.fragment.__typename="PricePresentation",wn.displayName="sharedui-PricePresentation"}}]);
//# sourceMappingURL=shared-ui-pricing-price-details.775d02b566a6575d16d2.js.map