/*@license For license information please refer to shared-ui-retail-product-answering-traveller-questions.licenses.txt*/
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5679],{71768:function(e,n,t){t.d(n,{E:function(){return Wn}});var a=t(67294),r=t(69430),l=t(71641),i=t(95878),c=t(98250),o=t(64418),u=t(73030),s=t(30082),m=t(20515),d=t(29097),v=t(85213),f=t(93351),g=t(5419),E=t(95128),p=t(19633),h=t(23984),S=t(91233),b=t(41913),y=t(34353),k=t(49349),T=t(79221),F=t(46605),D=t(41419),x=t(30300),C=t(73359),I=t(94737),A=t(52818),P=t(60756),N=t(55242),w=t(50319),G=t(10333),z=t(77844),O=t(70094),_=t(53274),L=t(13413),R=t(68369),V=t(51330),j=t(78987),M=t(11754);function B(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){U(e,n,t[n])}))}return e}function H(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function Q(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,l=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(l.push(a.value),!n||l.length!==n);i=!0);}catch(o){c=!0,r=o}finally{try{i||null==t.return||t.return()}finally{if(c)throw r}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return B(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function K(){var e=Y(["\n  fragment TravellerClickActionFragment on TravellerClickAction {\n    clickEvent {\n      eventName\n      eventType\n      eventVersion\n      actionLocation\n    }\n    clickAnalytics {\n      referrerId\n      eventType\n      linkName\n    }\n  }\n"]);return K=function(){return e},e}function W(){var e=Y(["\n  fragment DialogToolbarFragment on EGDSDialogToolbar {\n    closeText\n    title\n  }\n"]);return W=function(){return e},e}function X(){var e=Y(["\n  fragment EGDSIconFragment on Icon {\n    description\n    id\n    size\n    spotLight\n    title\n    theme\n    token\n    withBackground\n  }\n"]);return X=function(){return e},e}function Z(){var e=Y(["\n  fragment ErrorMessageFragment on EGDSErrorSummary {\n    heading\n    body {\n      ... on EGDSGraphicText {\n        text\n        graphic {\n          ...EGDSIconFragment\n        }\n      }\n    }\n  }\n  ","\n"]);return Z=function(){return e},e}function J(){var e=Y(["\n  fragment EGDSGraphicTextFragment on EGDSGraphicText {\n    text\n    graphic {\n      ...EGDSIconFragment\n    }\n  }\n\n  ","\n"]);return J=function(){return e},e}function ee(){var e=Y(["\n  fragment EGDSStylizedTextFragment on EGDSStylizedText {\n    accessibility\n    decorative\n    size\n    text\n    theme\n    weight\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Y(["\n  fragment EGDSPlainTextFragment on EGDSPlainText {\n    text\n    accessibility\n  }\n"]);return ne=function(){return e},e}function te(){var e=Y(["\n  fragment EGDSSpannableTextContentFragment on EGDSText {\n    ...EGDSStylizedTextFragment\n    ...EGDSPlainTextFragment\n    ...EGDSGraphicTextFragment\n  }\n\n  ","\n  ","\n  ","\n"]);return te=function(){return e},e}function ae(){var e=Y(["\n  fragment EGDSSpannableTextFragment on EGDSSpannableText {\n    text\n    inlineContent {\n      ...EGDSSpannableTextContentFragment\n    }\n  }\n\n  ","\n"]);return ae=function(){return e},e}function re(){var e=Y(["\n  fragment FooterFragment on ReviewFooter {\n    primary {\n      ...EGDSStylizedTextFragment\n    }\n    text\n  }\n  ","\n"]);return re=function(){return e},e}function le(){var e=Y(["\n  fragment ReviewSummaryFragment on ReviewSummary {\n    footer {\n      ...FooterFragment\n    }\n    highlightedText {\n      ...EGDSSpannableTextFragment\n    }\n  }\n  ","\n  ","\n"]);return le=function(){return e},e}function ie(){var e=Y(["\n  fragment EGDSInlineLinkFragment on EGDSInlineLink {\n    action {\n      accessibility\n      analytics {\n        linkName\n        referrerId\n      }\n      resource {\n        value\n      }\n      target\n    }\n    disabled\n    linkSize: size\n    text\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Y(["\n  fragment DirectFeedbackCallToActionElementFragment on DirectFeedbackCallToActionElement {\n    ...EGDSInlineLinkFragment\n  }\n  ","\n"]);return ce=function(){return e},e}function oe(){var e=Y(["\n  fragment DirectFeedbackPostSubmitElementFragment on DirectFeedbackPostSubmitElement {\n    ...EGDSSpannableTextFragment\n  }\n  ","\n"]);return oe=function(){return e},e}function ue(){var e=Y(["\n  fragment DirectFeedbackCallToActionFragment on DirectFeedbackCallToAction {\n    callToAction {\n      ...DirectFeedbackCallToActionElementFragment\n    }\n    contextValues {\n      key\n      value\n    }\n    postSubmitDisplay {\n      ...DirectFeedbackPostSubmitElementFragment\n    }\n    promptId\n  }\n  ","\n  ","\n"]);return ue=function(){return e},e}function se(){var e=Y(["\n  fragment TravellerSearchFeedbackActionsFragment on TravellerSearchFeedbackAction {\n    clickEvent {\n      actionLocation\n      clickstreamTraceId\n      eventCategory\n      eventName\n      eventType\n      eventVersion\n    }\n    directFeedbackCallToAction {\n      ...DirectFeedbackCallToActionFragment\n    }\n  }\n  ","\n"]);return se=function(){return e},e}function me(){var e=Y(["\n  fragment TravellerSearchFeedbackFragment on TravellerSearchFeedback {\n    title\n    travellerSearchFeedbackActions {\n      ...TravellerSearchFeedbackActionsFragment\n    }\n  }\n  ","\n"]);return me=function(){return e},e}function de(){var e=Y(["\n  mutation ContentDirectFeedbackSubmitMutation($context: ContextInput!, $id: ID!, $feedback: DirectFeedbackValuesInput!) {\n    directFeedbackSubmit(context: $context, id: $id, feedback: $feedback) {\n      errors {\n        fieldId\n        error\n      }\n    }\n  }\n"]);return de=function(){return e},e}function ve(){var e=Y(["\n  fragment TravellerSearchSummaryFragment on TravellerSearchSummary {\n    heading\n    subHeading\n    highlightedText {\n      ...EGDSSpannableTextFragment\n    }\n    travellerSearchFeedback {\n      ...TravellerSearchFeedbackFragment\n    }\n    items {\n      ...ReviewSummaryFragment\n    }\n  }\n  ","\n  ","\n  ","\n"]);return ve=function(){return e},e}function fe(){var e=Y(["\n  fragment TravellerSearchResultsResponseFragment on TravellerSearchResultsResponse {\n    noResultsMessage\n    accessibility\n    content {\n      ...TravellerSearchSummaryFragment\n    }\n    review {\n      ...TravellerSearchSummaryFragment\n    }\n    disclaimerText\n  }\n  ","\n"]);return fe=function(){return e},e}function ge(){var e=Y(["\n  query TravellerSearchQuery($context: ContextInput!, $productIdentifier: ProductIdentifierInput!, $searchTerm: String) {\n    travellerSearch(context: $context, searchTerm: $searchTerm, productIdentifier: $productIdentifier) {\n      ...TravellerSearchResultsResponseFragment\n    }\n  }\n\n  ","\n"]);return ge=function(){return e},e}function Ee(){var e=Y(["\n  fragment EGDSButtonFragment on EGDSButton {\n    accessibility\n    disabled\n    icon {\n      ...EGDSIconFragment\n    }\n    primary\n  }\n\n  ","\n"]);return Ee=function(){return e},e}function pe(){var e=Y(["\n  fragment SearchButtonFragment on TravellerSearchButton {\n    button {\n      ...EGDSButtonFragment\n    }\n    searchAction {\n      ...TravellerClickActionFragment\n    }\n  }\n  ","\n  ","\n"]);return pe=function(){return e},e}function he(){var e=Y(["\n  fragment EGDSInputFieldFragment on EGDSInputField {\n    instructions\n    label\n    placeholder\n    readOnly\n    required\n    value\n  }\n"]);return he=function(){return e},e}function Se(){var e=Y(["\n  fragment EGDSTextInputFieldFragment on EGDSTextInputField {\n    disabled\n    egdsElementId\n    ...EGDSInputFieldFragment\n  }\n\n  ","\n"]);return Se=function(){return e},e}function be(){var e=Y(["\n  fragment SearchInputFieldFragment on TravellerSearchInputField {\n    textInput {\n      ...EGDSTextInputFieldFragment\n    }\n    inputAction {\n      ...TravellerClickActionFragment\n    }\n  }\n  ","\n  ","\n"]);return be=function(){return e},e}function ye(){var e=Y(["\n  fragment TravellerSearchInputFragment on TravellerSearchInput {\n    searchButton {\n      ...SearchButtonFragment\n    }\n    searchInputField {\n      ...SearchInputFieldFragment\n    }\n  }\n  ","\n  ","\n"]);return ye=function(){return e},e}function ke(){var e=Y(["\n  fragment TravellerSearchContentDialogFragment on TravellerSearchDialog {\n    dialogToolbar {\n      ...DialogToolbarFragment\n    }\n    travellerSearchInput {\n      ...TravellerSearchInputFragment\n    }\n    closeAction {\n      ...TravellerClickActionFragment\n    }\n    errorMessage {\n      ...ErrorMessageFragment\n    }\n    loadingStateAccessibility\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return ke=function(){return e},e}function Te(){var e=Y(["\n  fragment TravellerSearchContentFragment on TravellerSearch {\n    heading\n    paragraph\n    travellerSearchInput {\n      ...TravellerSearchInputFragment\n    }\n    travellerSearchDialog {\n      ...TravellerSearchContentDialogFragment\n    }\n    impressionAnalytics {\n      ...TravellerClickActionFragment\n    }\n  }\n  ","\n  ","\n  ","\n"]);return Te=function(){return e},e}function Fe(){var e=Y(["\n  query AnsweringTravellerQuestionsContentSearchQuery($context: ContextInput!) {\n    answeringTravellerQuestions(context: $context) {\n      ...TravellerSearchContentFragment\n    }\n  }\n\n  ","\n"]);return Fe=function(){return e},e}var De,xe=function(e){return{event:{event_name:e.eventName,event_type:e.eventType,event_version:e.eventVersion,action_location:e.actionLocation}}},Ce=a.createContext({}),Ie=(0,r.Ps)(K()),Ae=(0,r.Ps)(W()),Pe=function(e){var n=e.data,t=e.closeDialog,r=n.title,l=n.closeText;return a.createElement(T.b,{navigationContent:{onClick:function(e){t(e)},navIconLabel:null!=l?l:"",navButtonId:"traveller-search-dialog-close"},toolbarTitle:r,toolbarTitleTag:"h2"})};Pe.fragment=Ae,Pe.displayName="DialogToolbar";var Ne=(U(De={},"INFO","info"),U(De,"POSITIVE","positive"),U(De,"WARNING","warning"),U(De,"STANDARD","standard"),De),we=(0,r.Ps)(X()),Ge=function(e){var n=e.className,t=e.defaultIconSize,r=e.data,l=e.spotlight,i=r.id,c=r.token;if(!i||!c)return null;var o=r.description,u=r.withBackground,s=r.size,m=r.spotLight,d=r.title,v=r.theme;return a.createElement(F.fR,{className:n,description:o,id:i,name:c,shadow:null!=u?u:void 0,size:s?F.eZ[s]:t,spotlight:m?Ne[m]:l,title:null!=d?d:void 0,theme:null!=v?v:void 0})};Ge.fragment=we,Ge.displayName="UitkIcon";var ze=(0,r.Ps)(Z(),Ge.fragment),Oe=function(e){var n,t,r,l,i=e.data.body;return"EGDSGraphicText"!==(null===(n=i)||void 0===n?void 0:n.__typename)||"Icon"!==(null===(r=i)||void 0===r||null===(t=r.graphic)||void 0===t?void 0:t.__typename)?null:a.createElement(S.t,null,a.createElement(Ge,{data:null===(l=i)||void 0===l?void 0:l.graphic,spotlight:{theme:"standard",background:!1}}))},_e=function(e){var n,t,r,l=e.data.body;return"EGDSGraphicText"===(null===(n=l)||void 0===n?void 0:n.__typename)&&(null===(t=l)||void 0===t?void 0:t.text)?a.createElement(x.b,null,null===(r=l)||void 0===r?void 0:r.text):null},Le=function(e){var n,t,r=e.data;if(!(null===(n=r)||void 0===n?void 0:n.heading)&&!(null===(t=r)||void 0===t?void 0:t.body))return null;var l=r.heading;return a.createElement(D.j,{theme:"error"},a.createElement(h.v,{alignItems:"center",space:"two"},a.createElement(Oe,{data:r}),a.createElement(S.t,null,a.createElement("div",{"aria-live":"polite"},a.createElement(g.y,{size:7,tag:"h3"},l),a.createElement(_e,{data:r})))))};Le.fragment=ze,Le.displayName="ErrorMessage";var Re=function(e){var n=e.accessibility;return a.createElement(h.v,{blockSize:"full_size",direction:"column"},a.createElement(S.t,{alignSelf:"center"},a.createElement(f.l,{margin:{blockstart:"twelve",blockend:"six"}},a.createElement("div",{"aria-live":"polite"},a.createElement(A.y,null),n&&a.createElement("span",{className:"is-visually-hidden","aria-live":"polite"},n)))))};Re.displayName="LoadingPlaceholder";var Ve,je=(0,r.Ps)(J(),Ge.fragment),Me=function(e){var n,t=e.data,r=e.textProps,l=e.size,i=void 0===l?200:l;if(!(null===(n=t)||void 0===n?void 0:n.text))return null;var c=t.text,o=t.graphic;return a.createElement(x.b,$({size:i},r),function(){if("Icon"===o.__typename)return a.createElement(Ge,{data:o})}(),c)};Me.fragment=je,Me.displayName="EGDSGraphicText";var Be,Ue=Object.freeze((U(Ve={},"NEGATIVE","negative"),U(Ve,"POSITIVE","positive"),U(Ve,"PRIMARY","emphasis"),U(Ve,"SECONDARY","default"),U(Ve,"LOYALTY","loyalty"),U(Ve,"INVERSE","inverse"),U(Ve,"default","default"),Ve)),$e=Object.freeze((U(Be={},"BOLD","bold"),U(Be,"MEDIUM","medium"),U(Be,"REGULAR","regular"),Be)),He=Object.freeze({100:100,200:200,300:300,400:400,500:500,600:600,700:700,800:800,900:900}),Qe=Object.freeze({HIGHLIGHT:"mark",LINE_THROUGH:"s",SUBSCRIPT:"sub",SUPERSCRIPT:"sup",UNDERLINE:"u"}),qe=(0,r.Ps)(ee()),Ye=function(e){var n,t,r,l,i=e.data,c=e.theme,o=void 0===c?"default":c,u=e.weight,s=void 0===u?"regular":u,m=e.size,d=void 0===m?300:m,v=Q(e,["data","theme","weight","size"]);if(!(null===(n=i)||void 0===n?void 0:n.text))return null;var f=i.text,g=i.decorative,E=i.accessibility,p=$({theme:(null===(t=i)||void 0===t?void 0:t.theme)?Ue[i.theme]:o,weight:(null===(r=i)||void 0===r?void 0:r.weight)?$e[i.weight]:s,size:(null===(l=i)||void 0===l?void 0:l.size)?He[i.size]:d},v),h=g&&Qe[g],S=h?a.createElement(h,null,f):f;return a.createElement(x.b,$({},p),S,E&&a.createElement("span",{className:"is-visually-hidden"},E))};Ye.fragment=qe,Ye.displayName="EGDSStylizedText";var Ke=(0,r.Ps)(ne()),We=function(e){var n,t=e.className,r=e.inline,l=e.size,i=e.align,c=e.data;if(!(null===(n=c)||void 0===n?void 0:n.text))return null;var o=c.text,u=c.accessibility;return a.createElement(x.b,{className:t,inline:r,size:l,align:i},o,u&&a.createElement("span",{className:"is-visually-hidden"},u))};We.fragment=Ke,We.displayName="EGDSPlainText";var Xe=(0,r.Ps)(te(),Ye.fragment,We.fragment,Me.fragment),Ze=function(e){var n=e.className,t=e.size,r=e.data,l=e.inline;switch(r.__typename){case"EGDSStylizedText":return a.createElement(Ye,{className:n,data:r,size:t,inline:l});case"EGDSPlainText":return a.createElement(We,{className:n,data:r,size:t,inline:l});case"EGDSGraphicText":return a.createElement(Me,{data:r,size:t});default:return null}};Ze.fragment=Xe,Ze.displayName="EGDSSpannableTextContent";var Je=(0,r.Ps)(ae(),Ze.fragment),en=function(e){var n,t,r,l=e.align,i=e.data,c=Q(e,["align","data"]);return(null===(t=i)||void 0===t||null===(n=t.inlineContent)||void 0===n?void 0:n.length)?a.createElement(a.Fragment,null,i.inlineContent.map((function(e,n){return a.createElement(Ze,H($({data:e},c),{key:"spannable-item-".concat(n)}))}))):(null===(r=i)||void 0===r?void 0:r.text)?a.createElement(x.b,H($({},c),{inline:!0,align:l}),i.text):null};en.fragment=Je,en.displayName="EGDSSpannableText";var nn=(0,r.Ps)(re(),Ye.fragment),tn=function(e){var n=e.data,t=n.primary,r=n.text;if(!t&&!r)return null;return a.createElement(f.l,{padding:{blockstart:"two"}},a.createElement(x.b,null,t&&a.createElement(Ye,{data:t,inline:!0,size:200,weight:"medium"}),r&&a.createElement(f.l,{padding:t?{inlinestart:"two"}:void 0},a.createElement(x.b,{inline:!0,size:200,weight:"regular"},r))))};tn.fragment=nn,tn.displayName="Footer";var an=(0,r.Ps)(le(),tn.fragment,en.fragment),rn=function(e){var n,t,r=e.data,l=(0,a.useCallback)((function(e){var n,t,r;return e?(null===(t=e)||void 0===t||null===(n=t.inlineContent)||void 0===n?void 0:n.length)?a.createElement(N.t,{size:400,inlineContentList:e.inlineContent}):null===(r=e)||void 0===r?void 0:r.text:null}),[]),i=(0,a.useMemo)((function(){var e;return l(null===(e=r)||void 0===e?void 0:e.highlightedText)}),[r,l]);if(!(null===(n=r)||void 0===n?void 0:n.footer)&&!(null===(t=r)||void 0===t?void 0:t.highlightedText))return null;var c=r.footer,o=r.highlightedText;return a.createElement(f.l,{margin:{blockstart:"six"}},a.createElement("div",null,o&&a.createElement(E.a,{size:1},i),c&&a.createElement(tn,{data:c})))};rn.fragment=an,rn.displayName="ReviewSummary";var ln,cn,on="feedback_property_summary",un="feedback_review_summary",sn=(U(ln={},"SMALL","small"),U(ln,"MEDIUM","medium"),U(ln,"LARGE","large"),ln),mn=(U(cn={},"EXTERNAL","_blank"),U(cn,"INTERNAL","_self"),cn),dn=(0,r.Ps)(ie()),vn=function(e){var n,t,r,l,i,c,o,u=e.className,s=e.data,m=e.size,d=void 0===m?"medium":m,v=e.inline,f=void 0===v||v,g=e.onLinkClick;if(!(null===(n=s)||void 0===n?void 0:n.text))return null;var E=s.action,p=s.disabled,h=s.linkSize,S=s.text;return a.createElement(G.M,{className:u,size:h?sn[h]:d,onClickCapture:g,disabled:p,inline:f},a.createElement("a",{href:null===(r=E)||void 0===r||null===(t=r.resource)||void 0===t?void 0:t.value,target:(null===(l=E)||void 0===l?void 0:l.target)?mn[null===(i=E)||void 0===i?void 0:i.target]:void 0},S,(null===(c=E)||void 0===c?void 0:c.accessibility)&&a.createElement("span",{className:"is-visually-hidden"},null===(o=E)||void 0===o?void 0:o.accessibility)))};vn.fragment=dn,vn.displayName="EGDSInlineLink";var fn=(0,r.Ps)(ce(),vn.fragment),gn=function(e){var n,t=e.data,r=e.handleClick;return"EGDSInlineLink"===(null===(n=t)||void 0===n?void 0:n.__typename)?a.createElement(vn,{data:t,size:"medium",inline:!1,onLinkClick:r}):null};gn.fragment=fn,gn.displayName="DirectFeedbackCallToActionElement";var En=(0,r.Ps)(oe(),en.fragment),pn=function(e){var n,t=e.data;return"EGDSSpannableText"===(null===(n=t)||void 0===n?void 0:n.__typename)?a.createElement(en,{data:t,inline:!0}):null};pn.fragment=En,pn.displayName="DirectFeedbackPostSubmitElement";var hn=(0,r.Ps)(ue(),gn.fragment,pn.fragment),Sn=function(e){var n=e.directFeedbackCallToActionElement,t=void 0===n?null:n,r=e.postSubmitDisplayElement,l=void 0===r?null:r;return a.createElement(a.Fragment,null,t,l)};Sn.fragment=hn,Sn.displayName="DirectFeedbackCallToAction";var bn=(0,r.Ps)(se(),Sn.fragment),yn=function(e){var n,t,r,l,i,c=e.data,o=e.selectedFeedbackValue,u=e.handleCallToActionElementClick,s=q((0,a.useState)(!1),2),m=s[0],d=s[1],v=c.directFeedbackCallToAction,f=(0,a.useCallback)((function(e){var n,t,a;(null===(n=e)||void 0===n||n.preventDefault(),u)&&u(null===(t=v)||void 0===t?void 0:t.contextValues,null===(a=v)||void 0===a?void 0:a.promptId)}),[v,u]);if((0,a.useEffect)((function(){var e,n,t,a;o&&(null===(n=v)||void 0===n||null===(e=n.contextValues)||void 0===e?void 0:e.length)&&((null===(a=null===(t=v.contextValues)||void 0===t?void 0:t.find((function(e){return e.key===on||e.key===un})))||void 0===a?void 0:a.value)===o&&d(!0))}),[o,v]),!(null===(n=c)||void 0===n?void 0:n.directFeedbackCallToAction))return null;var g=(null===(t=v)||void 0===t?void 0:t.callToAction)&&!o?a.createElement(S.t,{shrink:1,grow:0},a.createElement("div",null,a.createElement(gn,{data:null===(r=v)||void 0===r?void 0:r.callToAction,handleClick:f}))):null,E=(null===(l=v)||void 0===l?void 0:l.postSubmitDisplay)&&m?a.createElement(S.t,{shrink:1,grow:0},a.createElement(pn,{data:null===(i=v)||void 0===i?void 0:i.postSubmitDisplay})):null;return a.createElement(a.Fragment,null,v&&a.createElement(Sn,{data:v,directFeedbackCallToActionElement:g,postSubmitDisplayElement:E}))};yn.fragment=bn,yn.displayName="TravellerSearchFeedbackActions";var kn=(0,r.Ps)(me(),yn.fragment),Tn=(0,r.Ps)(de()),Fn=function(e){var n,t=e.data,r=t.title,l=t.travellerSearchFeedbackActions,c=q((0,a.useState)(),2),o=c[0],u=c[1],s=q((0,w.D)(Tn),1)[0],m=(0,i.v)().context,d=(0,a.useCallback)((function(e,n){var t,a=e.find((function(e){return e.key===on||e.key===un}));a&&u(null===(t=a)||void 0===t?void 0:t.value);var r,l={context:null===(r=e)||void 0===r?void 0:r.map((function(e){var n,t=$({},e);return null===(n=t)||void 0===n||delete n.__typename,t})),formValues:[]};s({variables:{context:m,feedback:l,id:n}})}),[m,s]);return a.createElement(a.Fragment,null,r&&a.createElement(f.l,{padding:{blockstart:"six"}},a.createElement(h.v,{space:"three"},a.createElement(S.t,{shrink:0},r&&!o&&a.createElement(x.b,{weight:"regular"},r)),(null===(n=l)||void 0===n?void 0:n.length)&&l.map((function(e,n){return a.createElement(yn,{key:"traveller-search-feedback-action-".concat(n),data:e,handleCallToActionElementClick:d,selectedFeedbackValue:o})})))))};Fn.fragment=kn,Fn.displayName="TravellerSearchFeedback";var Dn=(0,r.Ps)(ve(),en.fragment,Fn.fragment,rn.fragment),xn=function(e){var n,t,r=e.data,l=e.isInlineStartSpacingRequired,i=r.highlightedText,c=r.travellerSearchFeedback,o=r.items,u=r.heading,s=r.subHeading,m=(0,a.useCallback)((function(e){var n,t,r;return e?(null===(t=e)||void 0===t||null===(n=t.inlineContent)||void 0===n?void 0:n.length)?a.createElement(N.t,{size:400,inlineContentList:e.inlineContent}):null===(r=e)||void 0===r?void 0:r.text:null}),[]),d=(0,a.useMemo)((function(){return m(i)}),[i,m]);return a.createElement(a.Fragment,null,u&&a.createElement(g.y,{tag:"h3",size:5},u),i&&a.createElement(f.l,{padding:{blockstart:"three"}},a.createElement(E.a,{size:1},d)),s&&a.createElement(f.l,{margin:{blockstart:"eight"}},a.createElement(g.y,{tag:"h4",size:6},s)),((null===(n=o)||void 0===n?void 0:n.length)||c)&&a.createElement(f.l,{margin:l?{inlinestart:"four",inlineend:"four"}:void 0},a.createElement("div",null,(null===(t=o)||void 0===t?void 0:t.length)?o.map((function(e,n){return a.createElement(rn,{data:e,key:"review-".concat(n)})})):null,c&&a.createElement(Fn,{data:c}))))};xn.fragment=Dn,xn.displayName="TravellerSearchSummary";var Cn=(0,r.Ps)(fe(),xn.fragment),In=function(e){var n=e.data,t=n.content,r=n.review,l=n.noResultsMessage,i=n.disclaimerText,c=n.accessibility,o=(0,p.useMediaQueries)({viewSizes:p.defaultViewSizes})<=p.defaultViewSizes[p.ViewSizes.SMALL];return a.createElement(f.l,{margin:{blockstart:"four",blockend:"six"}},a.createElement("div",null,c&&a.createElement("span",{className:"is-visually-hidden","aria-live":"polite",role:"status"},c),t&&a.createElement(xn,{data:t}),r&&t&&a.createElement("div",null,a.createElement(P.B,{blockMargin:"six"})),r&&a.createElement(xn,{data:r,isInlineStartSpacingRequired:!o}),l&&a.createElement(E.a,{size:1},l),i&&a.createElement(f.l,{margin:{blockstart:"eight"}},a.createElement(x.b,{size:100,weight:"regular",theme:"default"},i))))};In.fragment=Cn,In.displayName="TravellerSearchResultsResponse";var An=(0,r.Ps)(ge(),In.fragment),Pn=function(e){var n,t=e.searchTerm,r=e.inputs,l=e.onSearchError,c=e.loadingStateAccessibility,o=(0,i.v)().context,u=(0,a.useCallback)((function(e){var n;e&&null===(null===(n=e)||void 0===n?void 0:n.travellerSearch)&&l()}),[l]),s=q((0,C.t)(An,{ssr:!0,fetchPolicy:"no-cache",onCompleted:u}),2),m=s[0],d=s[1],v=d.loading,f=d.error,g=d.data,E=(0,a.useCallback)((function(){var e;if(null===(e=t)||void 0===e?void 0:e.trim().length){var n=H($({context:o},r),{searchTerm:t});m({variables:n})}}),[o,t,r,m]),p=(0,a.useCallback)((function(){var e,n,t,a;(null===(n=g)||void 0===n||null===(e=n.travellerSearch)||void 0===e?void 0:e.accessibility)&&(0,I.Pg)(null===(a=g)||void 0===a||null===(t=a.travellerSearch)||void 0===t?void 0:t.accessibility,I.aC.POLITE)}),[g]),h=(0,a.useCallback)((function(){c&&(0,I.Pg)(c,I.aC.POLITE)}),[c]);if((0,a.useEffect)(E,[t,E]),(0,a.useEffect)(p,[g,p]),v)return h(),a.createElement(Re,{accessibility:c});if(f)return l(),null;if(!(null===(n=g)||void 0===n?void 0:n.travellerSearch))return null;var S=g.travellerSearch;return a.createElement(In,{data:S})};Pn.displayName="TravellerSearch";var Nn=(0,r.Ps)(Ee(),Ge.fragment),wn=a.forwardRef((function(e,n){var t=e.data,r=e.disabled,l=e.onClickHandler,i=e.isFullWidth,c=e.size,o=e.className,u=e.type,s=t.__typename,m=t.accessibility,d=t.icon,v=t.primary,f={disabled:r,onClick:l,"aria-label":null!=m?m:void 0,isFullWidth:i,size:c,className:o,type:null!=u?u:"button",domRef:null!=n?n:null};switch(s){case"UIPrimaryButton":return a.createElement(O.Y,$({},f),d&&a.createElement(Ge,{data:d}),v||null);case"UISecondaryButton":return a.createElement(_.p,$({},f),d&&a.createElement(Ge,{data:d}),v||null);default:return null}}));wn.fragment=Nn,wn.displayName="EGDSButton";var Gn=(0,r.Ps)(pe(),wn.fragment,Ie),zn=a.forwardRef((function(e,n){var t=e.data.button,r=e.isSubmitDisabled;return a.createElement(a.Fragment,null,t&&a.createElement(wn,{data:t,type:"submit",size:L.xY.LARGE,ref:null!=n?n:null,disabled:r}))}));zn.fragment=Gn,zn.displayName="SearchButton";var On=(0,r.Ps)(he()),_n=(0,r.Ps)(Se(),On),Ln=function(e){var n=e.data,t=Q(e,["data"]),r=n.disabled,l=n.egdsElementId,i=n.instructions,c=n.label,o=n.placeholder,u=n.readOnly,s=n.required;return a.createElement(R.w,$({disabled:null!=r&&r,id:null!=l?l:void 0,instruction:null!=i?i:void 0,label:c,name:null!=l?l:void 0,placeholder:null!=o?o:void 0,readOnly:u,required:null!=s&&s},t))};Ln.fragment=_n,Ln.displayName="EGDSTextInputField";var Rn=(0,r.Ps)(be(),Ln.fragment,Ie),Vn=function(e){var n=e.data,t=e.handleChange,r=e.handleClear,l=e.inputValue,i=n.textInput,o=n.inputAction,u=(0,c.useEgClickstream)(),s=(0,c.useClickTracker)(),m=(0,a.useCallback)((function(e){var n=e.clickEvent,t=n.eventName,a=n.eventType,r=n.eventVersion,l=n.actionLocation,i=xe({eventName:t,eventVersion:r,eventType:a,actionLocation:l||""});u(i)}),[u]),d=(0,a.useCallback)((function(e){s(e.referrerId,e.linkName,!1)}),[s]),v=(0,a.useCallback)((function(e){var n,t;(null===(n=o)||void 0===n?void 0:n.clickAnalytics)?d(o.clickAnalytics):(null===(t=o)||void 0===t?void 0:t.clickEvent)&&m(o)}),[o,m,d]);return a.createElement(a.Fragment,null,i&&a.createElement(Ln,{data:i,size:100,hasClearButton:!0,value:l,onChange:t,onFocus:v,handleClear:r,type:"search"}))};Vn.fragment=Rn,Vn.displayName="SearchInputField";var jn=(0,r.Ps)(ye(),zn.fragment,Vn.fragment),Mn=a.forwardRef((function(e,n){var t=e.data,r=e.handleSubmit,l=e.searchTermValue,i=e.showSubmitButton,o=void 0===i||i,u=e.handleSearchTermClear,s=t.searchButton,m=t.searchInputField,d=q((0,a.useState)(),2),v=d[0],f=d[1],g=q((0,a.useState)(!0),2),E=g[0],p=g[1],b=(0,c.useEgClickstream)(),y=(0,c.useClickTracker)(),k=(0,a.useCallback)((function(e){var n=e.clickEvent,t=n.eventName,a=n.eventType,r=n.eventVersion,l=n.actionLocation,i=xe({eventName:t,eventVersion:r,eventType:a,actionLocation:l||""});b(i)}),[b]),T=(0,a.useCallback)((function(e){y(e.referrerId,e.linkName,!1)}),[y]),F=(0,a.useCallback)((function(e){var n,t,a,l;e.preventDefault(),(null===(t=s)||void 0===t||null===(n=t.searchAction)||void 0===n?void 0:n.clickAnalytics)?T(s.searchAction.clickAnalytics):(null===(l=s)||void 0===l||null===(a=l.searchAction)||void 0===a?void 0:a.clickEvent)&&k(s.searchAction),r(e,v)}),[r,v,s,k,T]),D=(0,a.useCallback)((function(e){var n=e.target.value;f(n)}),[f]);return(0,a.useEffect)((function(){var e;(null===(e=l)||void 0===e?void 0:e.trim().length)&&f(l)}),[l]),(0,a.useEffect)((function(){var e;(null===(e=v)||void 0===e?void 0:e.trim().length)?p(!1):p(!0)}),[v]),a.createElement(z.$,{onSubmit:F},a.createElement(h.v,{space:"three"},m&&a.createElement(S.t,null,a.createElement(Vn,{data:m,inputValue:v,handleChange:D,handleClear:u})),s&&o&&a.createElement(S.t,null,a.createElement(zn,{data:s,ref:null!=n?n:null,isSubmitDisabled:E}))))}));Mn.fragment=jn,Mn.displayName="TravellerSearchInput";var Bn=(0,r.Ps)(ke(),Pe.fragment,Mn.fragment,Ie,Le.fragment),Un=function(e){var n=e.data,t=e.triggerRef,r=void 0===t?null:t,l=e.isDialogOpen,i=e.closeDialog,o=e.searchTermValue,s=q((0,a.useState)(""),2),m=s[0],d=s[1],v=q((0,a.useState)(!1),2),f=v[0],g=v[1],E=q((0,u.useDialog)("traveller-search-content-dialog","pwaDialog"),3)[2],T=(0,p.useMediaQueries)({viewSizes:p.defaultViewSizes}),F=a.useContext(Ce),D=(0,c.useEgClickstream)(),x=(0,c.useClickTracker)(),C=T<=p.defaultViewSizes[p.ViewSizes.SMALL],I=n.dialogToolbar,A=n.travellerSearchInput,P=n.errorMessage,N=n.loadingStateAccessibility,w=n.closeAction,G=(0,a.useCallback)((function(){var e,n;if(null===(e=w)||void 0===e?void 0:e.clickAnalytics)x(w.clickAnalytics.referrerId,w.clickAnalytics.linkName,!0);else if(null===(n=w)||void 0===n?void 0:n.clickEvent){var t=w.clickEvent,a=t.eventName,r=t.eventType,l=t.eventVersion,c=t.actionLocation,o=xe({eventName:a,eventVersion:l,eventType:r,actionLocation:c||""});D(o)}i()}),[i,w,D,x]),z=(0,a.useCallback)((function(e,n){e.preventDefault(),d(n)}),[d]),O=(0,a.useCallback)((function(){g(!0)}),[g]),_=(0,a.useCallback)((function(){m&&d("")}),[m,d]);(0,a.useEffect)((function(){o&&d(o)}),[o]);var L=(0,a.useMemo)((function(){return a.createElement(Pn,{inputs:F,searchTerm:m,onSearchError:O,loadingStateAccessibility:N})}),[m,O,F,N]);return a.createElement(b.U,{isVisible:l},a.createElement(E,null,a.createElement(y.K,{returnFocusOnClose:!0,triggerRef:r,isVisible:l,type:C?"full":"centered",height:C?void 0:594},I&&a.createElement(Pe,{data:I,closeDialog:G}),a.createElement(k.z,null,a.createElement(h.v,{blockSize:"full_size",wrap:"nowrap",direction:"column"},f?a.createElement(S.t,null,P&&a.createElement(Le,{data:P})):a.createElement(a.Fragment,null,A&&a.createElement(S.t,null,a.createElement(Mn,{data:A,handleSubmit:z,searchTermValue:m,ref:null,handleSearchTermClear:_})),a.createElement(S.t,{alignSelf:"stretch"},a.createElement("div",{"aria-live":"polite"},L))))))))};Un.fragment=Bn,Un.displayName="TravellerSearchContentDialog";var $n=(0,r.Ps)(Te(),Mn.fragment,Un.fragment,Ie),Hn=function(e){var n=e.data,t=q((0,a.useState)(""),2),r=t[0],l=t[1],i=q((0,u.useDialog)("traveller-search-content-dialog","pwaDialog"),2),c=i[0],o=i[1],p=(0,a.useRef)(null),h=n.heading,S=n.paragraph,b=n.travellerSearchInput,y=n.travellerSearchDialog,k=(0,a.useCallback)((function(e,n){e.preventDefault(),l(n),o.openDialog()}),[l,o]),T=(0,a.useCallback)((function(){o.closeDialog()}),[o]),F=(0,a.useCallback)((function(){r&&l("")}),[r,l]),D=(0,a.useMemo)((function(){return a.createElement(a.Fragment,null,b&&a.createElement(d.P,{colSpan:1},a.createElement(Mn,{data:b,handleSubmit:k,ref:p,handleSearchTermClear:F})))}),[b,k,p,F]);return a.createElement(f.l,{margin:{blockstart:"six",blockend:"six"},padding:{block:"six",large:{inline:"six"},extra_large:{inline:"six"}}},a.createElement(s.t,null,a.createElement(m.U,null,y&&c?a.createElement(Un,{data:y,triggerRef:null,closeDialog:T,isDialogOpen:c,searchTermValue:r}):null,a.createElement(v.a,{space:"six",columns:{medium:1,large:3},"data-testId":"traveller-qa-section"},h&&a.createElement(d.P,{colSpan:1},a.createElement(g.y,{tag:"h2",size:4},h)),S&&a.createElement(d.P,{colSpan:1},a.createElement("div",null,a.createElement(E.a,{size:1},S))),D))))};Hn.fragment=$n,Hn.displayName="TravellerSearchContent";var Qn=function(e){var n=e.colSpan,t=e.colStart;return a.createElement(d.P,{colSpan:n,colStart:t},a.createElement(h.v,{space:"four",direction:"column"},a.createElement(S.t,null,a.createElement(j.H,{animation:!0})),a.createElement(S.t,null,a.createElement(j.H,{animation:!0,type:"secondary"}))))},qn=function(e){var n=e.colSpan,t=e.colStart;return a.createElement(d.P,{colSpan:n,colStart:t},a.createElement(V.N,{ratio:V.s.R4_1},a.createElement(M.Y,{type:"rounded"})))},Yn=function(){return a.createElement(f.l,{padding:{block:"six",large:{inline:"six"}}},a.createElement(s.t,{overflow:!1},a.createElement(m.U,null,a.createElement(v.a,{space:"six",columns:{small:1,medium:1,large:3}},a.createElement(Qn,null),a.createElement(p.Viewport,null,a.createElement(p.ViewSmall,null,a.createElement(qn,{colSpan:1,colStart:1})),a.createElement(p.ViewLarge,null,a.createElement(qn,{colSpan:1,colStart:3})))))))};Yn.displayName="AnsweringTravellerQuestionsLoadingPlaceholder";var Kn=(0,r.Ps)(Fe(),Hn.fragment),Wn=function(e){var n,t,r=e.skipSsr,u=e.inputs,s=(0,i.v)().context,m=2===(0,o.useExperiment)("Prebooking_traveller_QnA_using_Reviews_and_Property_Content_Gen_AI").exposure.bucket,d={context:s},v=(0,l.a)(Kn,{variables:d,ssr:!r,fetchPolicy:"cache-first"}),f=v.data,g=v.error,E=v.loading,p=(0,a.useCallback)((function(e){var n;if(!(null===(n=e)||void 0===n?void 0:n.clickEvent))return{};var t=e.clickEvent,a=t.eventName,r=t.eventType,l=t.eventVersion,i=t.actionLocation;return xe({eventName:a,eventVersion:l,eventType:r,actionLocation:i||""})}),[]);if(E)return a.createElement(Yn,null);if(g||!f||!f.answeringTravellerQuestions||m)return null;var h,S=f.answeringTravellerQuestions,b=a.createElement(Ce.Provider,{value:u},a.createElement(Hn,{data:S}));return(null===(t=S)||void 0===t||null===(n=t.impressionAnalytics)||void 0===n?void 0:n.clickEvent)?a.createElement(c.EgClickstreamImpressionTracker,{eventData:p(null===(h=S)||void 0===h?void 0:h.impressionAnalytics)},b):b};Wn.displayName="sharedui-AnsweringTravellerQuestionsContentSearch"}}]);
//# sourceMappingURL=shared-ui-retail-product-answering-traveller-questions.c80536a11524d98626b2.js.map