import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{r as t,t as n}from"./react-vendor-cUqUQLF4.js";import{t as r}from"./MobileNav-Bw2w0UcI.js";import{t as i}from"./react-CrkkX5k5.js";import{t as a}from"./useDocumentTitle-CsxfvF0p.js";var o=e(t(),1);function s(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e){if(Array.isArray(e))return e}function l(e){if(Array.isArray(e))return s(e)}function u(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,te(r.key),r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=re(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function m(e,t,n){return(t=te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function g(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function _(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?y(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e,t){return c(e)||g(e,t)||re(e,t)||_()}function S(e){return l(e)||h(e)||re(e)||v()}function ee(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function te(e){var t=ee(e,`string`);return typeof t==`symbol`?t:t+``}function ne(e){"@babel/helpers - typeof";return ne=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ne(e)}function re(e,t){if(e){if(typeof e==`string`)return s(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}var ie=function(){},ae={},oe={},C=null,se={mark:ie,measure:ie};try{typeof window<`u`&&(ae=window),typeof document<`u`&&(oe=document),typeof MutationObserver<`u`&&(C=MutationObserver),typeof performance<`u`&&(se=performance)}catch{}var ce=(ae.navigator||{}).userAgent,le=ce===void 0?``:ce,w=ae,T=oe,ue=C,de=se;w.document;var E=!!T.documentElement&&!!T.head&&typeof T.addEventListener==`function`&&typeof T.createElement==`function`,fe=~le.indexOf(`MSIE`)||~le.indexOf(`Trident/`),pe,me=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,he=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,ge={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},_e={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ve=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],D=`classic`,O=`duotone`,ye=`sharp`,be=`sharp-duotone`,xe=`chisel`,Se=`etch`,Ce=`graphite`,we=`jelly`,Te=`jelly-duo`,Ee=`jelly-fill`,De=`notdog`,Oe=`notdog-duo`,ke=`slab`,Ae=`slab-press`,je=`thumbprint`,Me=`utility`,Ne=`utility-duo`,Pe=`utility-fill`,Fe=`whiteboard`,Ie=`Classic`,Le=`Duotone`,Re=`Sharp`,ze=`Sharp Duotone`,Be=`Chisel`,Ve=`Etch`,He=`Graphite`,Ue=`Jelly`,We=`Jelly Duo`,Ge=`Jelly Fill`,Ke=`Notdog`,qe=`Notdog Duo`,Je=`Slab`,Ye=`Slab Press`,Xe=`Thumbprint`,Ze=`Utility`,Qe=`Utility Duo`,$e=`Utility Fill`,et=`Whiteboard`,tt=[D,O,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe];pe={},m(m(m(m(m(m(m(m(m(m(pe,D,Ie),O,Le),ye,Re),be,ze),xe,Be),Se,Ve),Ce,He),we,Ue),Te,We),Ee,Ge),m(m(m(m(m(m(m(m(m(pe,De,Ke),Oe,qe),ke,Je),Ae,Ye),je,Xe),Me,Ze),Ne,Qe),Pe,$e),Fe,et);var nt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},rt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},it=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),at={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},ot=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],st={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},ct=[`kit`];m(m({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var lt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ut={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},dt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ft={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},pt,mt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ht=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];pt={},m(m(m(m(m(m(m(m(m(m(pt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),m(m(m(m(m(m(m(m(m(pt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),m(m({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var gt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},_t={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},vt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},yt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ht,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),bt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],xt=[1,2,3,4,5,6,7,8,9,10],St=xt.concat([11,12,13,14,15,16,17,18,19,20]),Ct=[].concat(S(Object.keys(_t)),bt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,mt.GROUP,mt.SWAP_OPACITY,mt.PRIMARY,mt.SECONDARY],xt.map(function(e){return`${e}x`}),St.map(function(e){return`w-${e}`})),wt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},k=`___FONT_AWESOME___`,Tt=16,Et=`fa`,Dt=`svg-inline--fa`,A=`data-fa-i2svg`,Ot=`data-fa-pseudo-element`,kt=`data-fa-pseudo-element-pending`,At=`data-prefix`,jt=`data-icon`,Mt=`fontawesome-i2svg`,Nt=`async`,Pt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ft=[`::before`,`::after`,`:before`,`:after`],It=function(){try{return!0}catch{return!1}}();function j(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[D]}})}var Lt=b({},ge);Lt[D]=b(b(b(b({},{"fa-duotone":`duotone`}),ge[D]),st.kit),st[`kit-duotone`]);var Rt=j(Lt),zt=b({},at);zt[D]=b(b(b(b({},{duotone:`fad`}),zt[D]),ft.kit),ft[`kit-duotone`]);var Bt=j(zt),Vt=b({},vt);Vt[D]=b(b({},Vt[D]),dt.kit);var Ht=j(Vt),Ut=b({},gt);Ut[D]=b(b({},Ut[D]),lt.kit),j(Ut);var Wt=me,Gt=`fa-layers-text`,Kt=he;j(b({},nt));var qt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Jt=_e,Yt=[].concat(S(ct),S(Ct)),Xt=w.FontAwesomeConfig||{};function Zt(e){var t=T.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Qt(e){return e===``?!0:e===`false`?!1:e===`true`||e}T&&typeof T.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=x(e,2),n=t[0],r=t[1],i=Qt(Zt(n));i!=null&&(Xt[r]=i)});var $t={styleDefault:`solid`,familyDefault:D,cssPrefix:Et,replacementClass:Dt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);var M=b(b({},$t),Xt);M.autoReplaceSvg||(M.observeMutations=!1);var N={};Object.keys($t).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(t){M[e]=t,en.forEach(function(e){return e(N)})},get:function(){return M[e]}})}),Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){M.cssPrefix=e,en.forEach(function(e){return e(N)})},get:function(){return M.cssPrefix}}),w.FontAwesomeConfig=N;var en=[];function tn(e){return en.push(e),function(){en.splice(en.indexOf(e),1)}}var P=Tt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nn(e){if(!(!e||!E)){var t=T.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=T.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return T.head.insertBefore(t,r),e}}var rn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function an(){for(var e=12,t=``;e-->0;)t+=rn[Math.random()*62|0];return t}function I(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function on(e){return e.classList?I(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function sn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function cn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${sn(e[n])}" `},``).trim()}function ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function un(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function dn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function fn(e){var t=e.transform,n=e.width,r=n===void 0?Tt:n,i=e.height,a=i===void 0?Tt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return s&&fe?c+=`translate(${t.x/P-r/2}em, ${t.y/P-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/P}em), calc(-50% + ${t.y/P}em)) `:c+=`translate(${t.x/P}em, ${t.y/P}em) `,c+=`scale(${t.size/P*(t.flipX?-1:1)}, ${t.size/P*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var pn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function mn(){var e=Et,t=Dt,n=N.cssPrefix,r=N.replacementClass,i=pn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var hn=!1;function gn(){N.autoAddCss&&!hn&&(nn(mn()),hn=!0)}var _n={mixout:function(){return{dom:{css:mn,insertCss:gn}}},hooks:function(){return{beforeDOMElementCreation:function(){gn()},beforeI2svg:function(){gn()}}}},L=w||{};L[k]||(L[k]={}),L[k].styles||(L[k].styles={}),L[k].hooks||(L[k].hooks={}),L[k].shims||(L[k].shims=[]);var R=L[k],vn=[],yn=function(){T.removeEventListener(`DOMContentLoaded`,yn),bn=1,vn.map(function(e){return e()})},bn=!1;E&&(bn=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),bn||T.addEventListener(`DOMContentLoaded`,yn));function xn(e){E&&(bn?setTimeout(e,0):vn.push(e))}function z(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?sn(e):`<${t} ${cn(r)}>${a.map(z).join(``)}</${t}>`}function Sn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Cn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},wn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Cn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Tn(e){return S(e).length===1?e.codePointAt(0).toString(16):null}function En(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=En(t);typeof R.hooks.addPack==`function`&&!r?R.hooks.addPack(e,En(t)):R.styles[e]=b(b({},R.styles[e]||{}),i),e===`fas`&&Dn(`fa`,t)}var B=R.styles,On=R.shims,kn=Object.keys(Ht),An=kn.reduce(function(e,t){return e[t]=Object.keys(Ht[t]),e},{}),jn=null,Mn={},Nn={},Pn={},Fn={},In={};function Ln(e){return~Yt.indexOf(e)}function Rn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Ln(i)?i:null}var zn=function(){var e=function(e){return wn(B,function(t,n,r){return t[r]=wn(n,e,{}),t},{})};Mn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Nn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),In=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in B||N.autoFetchSvg,n=wn(On,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Pn=n.names,Fn=n.unicodes,jn=Kn(N.styleDefault,{family:N.familyDefault})};tn(function(e){jn=Kn(e.styleDefault,{family:N.familyDefault})}),zn();function Bn(e,t){return(Mn[e]||{})[t]}function Vn(e,t){return(Nn[e]||{})[t]}function V(e,t){return(In[e]||{})[t]}function Hn(e){return Pn[e]||{prefix:null,iconName:null}}function Un(e){var t=Fn[e],n=Bn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function H(){return jn}var Wn=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=D,n=kn.reduce(function(e,t){return e[t]=`${N.cssPrefix}-${t}`,e},{});return tt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return An[r].includes(e)}))&&(t=r)}),t}function Kn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?D:t,r=Rt[n][e];if(n===O&&!e)return`fad`;var i=Bt[n][e]||Bt[n][r],a=e in R.styles?e:null;return i||a||null}function qn(e){var t=[],n=null;return e.forEach(function(e){var r=Rn(N.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Jn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Yn=yt.concat(ot);function Xn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Jn(e.filter(function(e){return Yn.includes(e)})),a=Jn(e.filter(function(e){return!Yn.includes(e)})),o=x(i.filter(function(e){return r=e,!ve.includes(e)}),1)[0],s=o===void 0?null:o,c=Gn(i),l=b(b({},qn(a)),{},{prefix:Kn(s,{family:c})});return b(b(b({},l),er({values:e,family:c,styles:B,config:N,canonical:l,givenPrefix:r})),Zn(n,r,l))}function Zn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Hn(i):{},o=V(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!B.far&&B.fas&&!N.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Qn=tt.filter(function(e){return e!==D||e!==O}),$n=Object.keys(vt).filter(function(e){return e!==D}).map(function(e){return Object.keys(vt[e])}).flat();function er(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===O,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Qn.includes(n)&&(Object.keys(s).find(function(e){return $n.includes(e)})||l.autoFetchSvg)&&(r.prefix=it.get(n).defaultShortPrefixId,r.iconName=V(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=H()||`fas`),r}var tr=function(){function e(){u(this,e),this.definitions={}}return f(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=b(b({},e.definitions[n]||{}),t[n]),Dn(n,t[n]);var r=Ht[D][n];r&&Dn(r,t[n]),zn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),nr=[],U={},W={},rr=Object.keys(W);function ir(e,t){var n=t.mixoutsTo;return nr=e,U={},Object.keys(W).forEach(function(e){rr.indexOf(e)===-1&&delete W[e]}),nr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ne(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){U[e]||(U[e]=[]),U[e].push(r[e])})}e.provides&&e.provides(W)}),n}function ar(e,t){var n=[...arguments].slice(2);return(U[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function G(e){var t=[...arguments].slice(1);(U[e]||[]).forEach(function(e){e.apply(null,t)})}function K(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return W[e]?W[e].apply(null,t):void 0}function or(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||H();if(t)return t=V(n,t)||t,Sn(sr.definitions,n,t)||Sn(R.styles,n,t)}var sr=new tr,q={noAuto:function(){N.autoReplaceSvg=!1,N.observeMutations=!1,G(`noAuto`)},config:N,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(G(`beforeI2svg`,e),K(`pseudoElements2svg`,e),K(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,xn(function(){cr({autoReplaceSvgRoot:t}),G(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ne(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:V(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Kn(e[0]);return{prefix:n,iconName:V(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${N.cssPrefix}-`)>-1||e.match(Wt))){var r=Xn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=H();return{prefix:i,iconName:V(i,e)||e}}}},library:sr,findIconDefinition:or,toHtml:z},cr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?T:e;(Object.keys(R.styles).length>0||N.autoFetchSvg)&&E&&N.autoReplaceSvg&&q.dom.i2svg({node:t})};function lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return z(e)})}}),Object.defineProperty(e,"node",{get:function(){if(E){var t=T.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function ur(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(un(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=ln(b(b({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function dr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${N.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:b(b({},i),{},{id:o}),children:r}]}]}function fr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function pr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[N.replacementClass,a?`${N.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:b(b({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!fr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[A]=``);var _=b(b({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:b({},l.styles)}),v=r.found&&n.found?K(`generateAbstractMask`,_)||{children:[],attributes:{}}:K(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,x=v.attributes;return _.children=y,_.attributes=x,s?dr(_):ur(_)}function mr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=b(b({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[A]=``);var l=b({},a.styles);un(i)&&(l.transform=fn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=ln(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function hr(e){var t=e.content,n=e.extra,r=b(b({},n.attributes),{},{class:n.classes.join(` `)}),i=ln(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var gr=R.styles;function _r(e){var t=e[0],n=e[1],r=x(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${N.cssPrefix}-${Jt.GROUP}`},children:[{tag:`path`,attributes:{class:`${N.cssPrefix}-${Jt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${N.cssPrefix}-${Jt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var vr={found:!1,width:512,height:512};function yr(e,t){!It&&!N.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function br(e,t){var n=t;return t===`fa`&&N.styleDefault!==null&&(t=H()),new Promise(function(r,i){if(n===`fa`){var a=Hn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&gr[t]&&gr[t][e]){var o=gr[t][e];return r(_r(o))}yr(e,t),r(b(b({},vr),{},{icon:N.showMissingIcons&&e&&K(`missingIconAbstract`)||{}}))})}var xr=function(){},Sr=N.measurePerformance&&de&&de.mark&&de.measure?de:{mark:xr,measure:xr},Cr=`FA "7.2.0"`,wr=function(e){return Sr.mark(`${Cr} ${e} begins`),function(){return Tr(e)}},Tr=function(e){Sr.mark(`${Cr} ${e} ends`),Sr.measure(`${Cr} ${e}`,`${Cr} ${e} begins`,`${Cr} ${e} ends`)},Er={begin:wr,end:Tr},Dr=function(){};function Or(e){return typeof(e.getAttribute?e.getAttribute(A):null)==`string`}function kr(e){var t=e.getAttribute?e.getAttribute(At):null,n=e.getAttribute?e.getAttribute(jt):null;return t&&n}function Ar(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function jr(){return N.autoReplaceSvg===!0?Ir.replace:Ir[N.autoReplaceSvg]||Ir.replace}function Mr(e){return T.createElementNS(`http://www.w3.org/2000/svg`,e)}function Nr(e){return T.createElement(e)}function Pr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Mr:Nr:t;if(typeof e==`string`)return T.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Pr(e,{ceFn:n}))}),r}function Fr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Ir={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Pr(e),t)}),t.getAttribute(A)===null&&N.keepOriginalSource){var n=T.createComment(Fr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~on(t).indexOf(N.replacementClass))return Ir.replace(e);var r=RegExp(`${N.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===N.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return z(e)}).join(`
`);t.setAttribute(A,``),t.innerHTML=a}};function Lr(e){e()}function Rr(e,t){var n=typeof t==`function`?t:Dr;if(e.length===0)n();else{var r=Lr;N.mutateApproach===Nt&&(r=w.requestAnimationFrame||Lr),r(function(){var t=jr(),r=Er.begin(`mutate`);e.map(t),r(),n()})}}var zr=!1;function Br(){zr=!0}function Vr(){zr=!1}var Hr=null;function Ur(e){if(ue&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Dr:t,r=e.nodeCallback,i=r===void 0?Dr:r,a=e.pseudoElementsCallback,o=a===void 0?Dr:a,s=e.observeMutationsRoot,c=s===void 0?T:s;Hr=new ue(function(e){if(!zr){var t=H();I(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Or(e.addedNodes[0])&&(N.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&N.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Or(e.target)&&~qt.indexOf(e.attributeName))if(e.attributeName===`class`&&kr(e.target)){var r=Xn(on(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(At,a||t),s&&e.target.setAttribute(jt,s)}else Ar(e.target)&&i(e.target)})}}),E&&Hr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wr(){Hr&&Hr.disconnect()}function Gr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Kr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Xn(on(e));return i.prefix||(i.prefix=H()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Vn(i.prefix,e.innerText)||Bn(i.prefix,Tn(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function qr(e){return I(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Jr(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Kr(e),r=n.iconName,i=n.prefix,a=n.rest,o=qr(e),s=ar(`parseNodeAttributes`,{},e);return b({iconName:r,prefix:i,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Gr(e):[],attributes:o}},s)}var Xr=R.styles;function Zr(e){var t=N.autoReplaceSvg===`nest`?Yr(e,{styleParser:!1}):Yr(e);return~t.extra.classes.indexOf(Gt)?K(`generateLayersText`,e,t):K(`generateSvgReplacementMutation`,e,t)}function Qr(){return[].concat(S(ot),S(yt))}function $r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var n=T.documentElement.classList,r=function(e){return n.add(`${Mt}-${e}`)},i=function(e){return n.remove(`${Mt}-${e}`)},a=N.autoFetchSvg?Qr():ve.concat(Object.keys(Xr));a.includes(`fa`)||a.push(`fa`);var o=[`.${Gt}:not([${A}])`].concat(a.map(function(e){return`.${e}:not([${A}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=I(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Er.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Zr(t);n&&e.push(n)}catch(e){It||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Rr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zr(e).then(function(e){e&&Rr([e],t)})}function ti(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:or(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:or(i||{})),e(r,b(b({},n),{},{mask:i}))}}var ni=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return lr(b({type:`icon`},e),function(){return G(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),pr({icons:{main:_r(v),mask:s?_r(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:b(b({},F),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ri={mixout:function(){return{icon:ti(ni)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=$r,e.nodeCallback=ei,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?T:t,r=e.callback;return $r(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([br(n,r),o.iconName?br(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=x(o,2),u=l[0],d=l[1];t([e,pr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=ln(a);o.length>0&&(n.style=o);var s;return un(i)&&(s=K(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ii={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return lr({type:`layer`},function(){G(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${N.cssPrefix}-layers`].concat(S(r)).join(` `)},children:n}]})}}}},ai={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return lr({type:`counter`,content:e},function(){return G(`beforeDOMElementCreation`,{content:e,params:t}),hr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${N.cssPrefix}-layers-counter`].concat(S(a))}})})}}}},oi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return lr({type:`text`,content:e},function(){return G(`beforeDOMElementCreation`,{content:e,params:t}),mr({content:e,transform:b(b({},F),r),extra:{attributes:s,styles:l,classes:[`${N.cssPrefix}-layers-text`].concat(S(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(fe){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,mr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},si=RegExp(`"`,`ug`),ci=[1105920,1112319],li=b(b(b(b({},{FontAwesome:{normal:`fas`,400:`fas`}}),rt),wt),ut),ui=Object.keys(li).reduce(function(e,t){return e[t.toLowerCase()]=li[t],e},{}),di=Object.keys(ui).reduce(function(e,t){var n=ui[t];return e[t]=n[900]||S(Object.entries(n))[0][1],e},{});function fi(e){return Tn(S(e.replace(si,``))[0]||``)}function pi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(si,``),r=n.codePointAt(0),i=r>=ci[0]&&r<=ci[1],a=n.length===2&&n[0]===n[1];return i||a||t}function mi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(ui[n]||{})[i]||di[n]}function hi(e,t){var n=`${kt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=I(e.children).filter(function(e){return e.getAttribute(Ot)===t})[0],o=w.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Kt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=mi(s,l),p=fi(d),m=c[0].startsWith(`FontAwesome`),h=pi(o),g=Bn(f,p),_=g;if(m){var v=Un(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(At)!==f||a.getAttribute(jt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Jr(),x=y.extra;x.attributes[Ot]=t,br(g,f).then(function(i){var a=pr(b(b({},y),{},{icons:{main:i,mask:Wn()},prefix:f,iconName:_,extra:x,watchable:!0})),o=T.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return z(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function gi(e){return Promise.all([hi(e,`::before`),hi(e,`::after`)])}function _i(e){return e.parentNode!==document.head&&!~Pt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ot)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var vi=function(e){return!!e&&Ft.some(function(t){return e.includes(t)})},yi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=p(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(vi(a)){var o=Ft.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function bi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(E){var n;if(t)n=e;else if(N.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=p(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=p(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=p(yi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){N.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=I(n).filter(_i).map(gi),i=Er.begin(`searchPseudoElements`);Br(),Promise.all(r).then(function(){i(),Vr(),e()}).catch(function(){i(),Vr(),t()})})}}var xi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=bi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?T:t;N.searchPseudoElements&&bi(n)}}},Si=!1,Ci={mixout:function(){return{dom:{unwatch:function(){Br(),Si=!0}}}},hooks:function(){return{bootstrap:function(){Ur(ar(`mutationObserverCallbacks`,{}))},noAuto:function(){Wr()},watch:function(e){var t=e.observeMutationsRoot;Si?Vr():Ur(ar(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},wi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ti={mixout:function(){return{parse:{transform:function(e){return wi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=wi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:b({},a.outer),children:[{tag:`g`,attributes:b({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:b(b({},t.icon.attributes),a.path)}]}]}}}},Ei={x:0,y:0,width:`100%`,height:`100%`};function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Oi(e){return e.tag===`g`?e.children:[e]}ir([_n,ri,ii,ai,oi,xi,Ci,Ti,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Xn(n.split(` `).map(function(e){return e.trim()})):Wn();return r.prefix||(r.prefix=H()),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=dn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:b(b({},Ei),{},{fill:`white`})},p=c.children?{children:c.children.map(Di)}:{},m={tag:`g`,attributes:b({},d.inner),children:[Di(b({tag:c.tag,attributes:b(b({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:b({},d.outer),children:[m]},g=`mask-${a||an()}`,_=`clip-${a||an()}`,v={tag:`mask`,attributes:b(b({},Ei),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Oi(u)},v]};return t.push(y,{tag:`rect`,attributes:b({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ei)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;w.matchMedia&&(t=w.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:b(b({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=b(b({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:b(b({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:b(b({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:b(b({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:b(b({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:b(b({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:b(b({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:b(b({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:q}),q.noAuto;var J=q.config;q.library,q.dom;var ki=q.parse;q.findIconDefinition,q.toHtml;var Ai=q.icon;q.layer,q.text,q.counter;var Y=n();function ji(e){return e-=0,e===e}function Mi(e){return ji(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Ni=(e,t)=>o.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Pi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,Fi=1e3;function Ii(e){if(X.has(e))return X.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Mi(n);t[e.startsWith(`webkit`)?Pi(e):e]=r}}}n=a+1}if(X.size===Fi){let e=X.keys().next().value;e&&X.delete(e)}return X.set(e,t),t}function Li(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Li(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Ii(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Mi(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Ni)))}return e(t.tag,{...a,...u},...r)}var Ri=Li.bind(null,o.createElement),zi=(e,t)=>{let n=(0,o.useId)();return e||(t?n:void 0)},Bi=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Vi=`searchPseudoElementsFullScan`in J&&typeof J.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Hi=Number.parseInt(Vi)>=7,Ui=()=>Hi,Wi=`fa`,Z={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},Gi={left:`fa-pull-left`,right:`fa-pull-right`},Ki={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},qi={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Q={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Ji={default:`fa-layers`};function Yi(e){let t=J.cssPrefix||J.familyPrefix||Wi;return t===Wi?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Wi}-`,`g`),`${t}-`)}function Xi(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,flip360:b,buzz:x,float:S,jello:ee,spinSnap:te,spinSnap4:ne,spinSnap8:re,swing:ie,wag:ae,className:oe}=e,C=[];return oe&&C.push(...oe.split(` `)),t&&C.push(Z.beat),n&&C.push(Z.fade),r&&C.push(Z.beatFade),i&&C.push(Z.bounce),a&&C.push(Z.shake),o&&C.push(Z.spin),c&&C.push(Z.spinReverse),s&&C.push(Z.spinPulse),l&&C.push(Z.pulse),u&&C.push(Q.fixedWidth),d&&C.push(Q.inverse),f&&C.push(Q.border),p===!0&&C.push(Q.flip),(p===`horizontal`||p===`both`)&&C.push(Q.flipHorizontal),(p===`vertical`||p===`both`)&&C.push(Q.flipVertical),m!=null&&C.push(qi[m]),h!=null&&h!==0&&C.push(Ki[h]),g!=null&&C.push(Gi[g]),_&&C.push(Q.swapOpacity),Ui()?(v&&C.push(Q.rotateBy),y&&C.push(Q.widthAuto),b&&C.push(Z.flip360),x&&C.push(Z.buzz),S&&C.push(Z.float),ee&&C.push(Z.jello),te&&C.push(Z.spinSnap),ne&&C.push(Z.spinSnap4),re&&C.push(Z.spinSnap8),ie&&C.push(Z.swing),ae&&C.push(Z.wag),(J.cssPrefix||J.familyPrefix||Wi)===Wi?C:C.map(Yi)):C}var Zi=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function Qi(e){if(e)return Zi(e)?e:ki.icon(e)}function $i(e){return Object.keys(e)}var ea=new Bi(`FontAwesomeIcon`),ta={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},na=new Set(Object.keys(ta)),$=o.forwardRef((e,t)=>{let n={...ta,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=zi(c,!!i),d=zi(s,!!o),f=Qi(r);if(!f)return ea.error(`Icon lookup is undefined`,r),null;let p=Xi(n),m=typeof l==`string`?ki.transform(l):l,h=Qi(i),g=Ai(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return ea.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of $i(n))na.has(e)||(v[e]=n[e]);return Ri(_[0],v)});$.displayName=`FontAwesomeIcon`,`${Ji.default}${Q.fixedWidth}`;var ra={prefix:`fas`,iconName:`rocket`,icon:[512,512,[],`f135`,`M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z`]},ia={prefix:`fas`,iconName:`users`,icon:[640,512,[],`f0c0`,`M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z`]},aa={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},oa={prefix:`fas`,iconName:`chart-line`,icon:[512,512,[`line-chart`],`f201`,`M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z`]},sa={prefix:`fas`,iconName:`brain`,icon:[512,512,[129504],`f5dc`,`M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z`]},ca={prefix:`fas`,iconName:`shield-halved`,icon:[512,512,[`shield-alt`],`f3ed`,`M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z`]},la={online:{color:`bg-green-500`,label:`Online`},offline:{color:`bg-gray-400`,label:`Offline`},busy:{color:`bg-yellow-500`,label:`Busy`}},ua=({status:e,agentName:t,showLabel:n=!0})=>{let r=la[e];return(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)(`div`,{className:`w-2 h-2 rounded-full ${r.color}`}),n&&(0,Y.jsx)(`span`,{className:`text-sm text-gray-600`,children:t?`${t}: ${r.label}`:r.label})]})},da={active:`bg-blue-500`,completed:`bg-green-500`,error:`bg-red-500`},fa=({progress:e,taskName:t,status:n=`active`,showLabel:r=!0})=>{let i=Math.min(100,Math.max(0,e)),a=da[n];return(0,Y.jsxs)(`div`,{className:`w-full space-y-1`,children:[r&&t&&(0,Y.jsxs)(`div`,{className:`flex justify-between text-sm text-gray-600`,children:[(0,Y.jsx)(`span`,{children:t}),(0,Y.jsxs)(`span`,{children:[i,`%`]})]}),(0,Y.jsx)(`div`,{className:`w-full h-2 bg-gray-200 rounded-full overflow-hidden`,children:(0,Y.jsx)(`div`,{className:`h-full ${a} transition-all duration-300`,style:{width:`${i}%`}})})]})},pa=({agents:e,selectedAgentId:t,onSelect:n,loading:r=!1})=>(0,Y.jsxs)(`div`,{className:`relative`,children:[(0,Y.jsxs)(`select`,{className:`block w-48 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`,value:t,onChange:e=>n(e.target.value),disabled:r,children:[(0,Y.jsx)(`option`,{value:``,disabled:!0,children:`Switch agent...`}),e.map(e=>(0,Y.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),r&&(0,Y.jsx)(`div`,{className:`absolute right-2 top-1/2 -translate-y-1/2`,children:(0,Y.jsx)(`div`,{className:`animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent`})})]});function ma(){let e=(0,o.useRef)(null);a(`SolidAI Platform`),(0,o.useEffect)(()=>{let e=document.createElement(`style`);return e.textContent=`
      .gradient-text {
        background: linear-gradient(90deg, #165dff 0%, #7b61ff 25%, #a855f7 50%, #ec4899 75%, #ef4444 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 200% auto;
        animation: gradient 5s ease infinite;
      }
      @keyframes gradient {
        0% { background-position: 0% center; }
        50% { background-position: 100% center; }
        100% { background-position: 0% center; }
      }
      .glass-card {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      .glass-card:hover {
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(22, 93, 255, 0.5);
        transform: translateY(-4px);
      }
      .glow {
        box-shadow: 0 0 40px rgba(22, 93, 255, 0.15);
      }
    `,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]);let t=[{icon:sa,title:`Sector-Specific Agents`,desc:`Agents scoped to real African SME workflows — agriculture, health, education, finance, and more — not general-purpose chat.`},{icon:ra,title:`Built for Local Conditions`,desc:`Designed to stay useful on patchy connectivity and modest hardware, starting lightweight and adding capability as it’s validated.`},{icon:ca,title:`Privacy-Conscious by Design`,desc:`Data handling built around minimal collection and local control. Formal compliance certifications are on the roadmap, not yet in place.`},{icon:aa,title:`Developer First`,desc:`Clear APIs and documentation planned alongside the platform, so integrations stay simple as agents mature.`},{icon:oa,title:`Grows With Demand`,desc:`Infrastructure choices made to scale sensibly as usage grows, rather than over-provisioning for numbers we don’t have yet.`},{icon:ia,title:`Team Collaboration`,desc:`Shared workspaces and role-based access planned for teams once the core agents are live.`}],n=[{id:`agriculture`,name:`Agriculture Agent`},{id:`health`,name:`Health Agent`},{id:`education`,name:`Education Agent`},{id:`finance`,name:`Finance Agent`}],[s,c]=(0,o.useState)(`agriculture`),[l,u]=(0,o.useState)(65);return(0,o.useEffect)(()=>{let e=setInterval(()=>{u(e=>e>=100?0:e+1)},1e3);return()=>clearInterval(e)},[]),(0,Y.jsxs)(`div`,{className:`min-h-screen bg-[#0a0a0f] text-white`,children:[(0,Y.jsx)(`nav`,{className:`fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10`,children:(0,Y.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)(`div`,{className:`w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center`,children:(0,Y.jsx)($,{icon:sa,className:`text-white text-sm`})}),(0,Y.jsx)(`span`,{className:`text-xl font-bold gradient-text`,children:`SolidAI`})]}),(0,Y.jsxs)(`div`,{className:`hidden md:flex items-center gap-8`,children:[(0,Y.jsx)(`a`,{href:`#features`,className:`text-sm text-gray-300 hover:text-white transition`,children:`Features`}),(0,Y.jsx)(`a`,{href:`#agents`,className:`text-sm text-gray-300 hover:text-white transition`,children:`Agents`}),(0,Y.jsx)(`a`,{href:`/solidai/docs`,className:`text-sm text-gray-300 hover:text-white transition`,children:`Docs`}),(0,Y.jsx)(`a`,{href:`/solid-llm/about`,className:`text-sm text-gray-300 hover:text-white transition`,children:`About`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,Y.jsx)(`a`,{href:`/beta`,className:`hidden md:block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition`,children:`Get Started`}),(0,Y.jsx)(r,{dark:!0,links:[{label:`Features`,href:`#features`},{label:`Agents`,href:`#agents`},{label:`Docs`,href:`/solidai/docs`},{label:`About`,href:`/solid-llm/about`}],cta:{label:`Get Started`,href:`/beta`}})]})]})}),(0,Y.jsx)(`section`,{ref:e,className:`pt-32 pb-20 px-6`,children:(0,Y.jsx)(`div`,{className:`max-w-7xl mx-auto text-center`,children:(0,Y.jsxs)(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[(0,Y.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 mb-8`,children:[(0,Y.jsx)(`span`,{className:`w-2 h-2 bg-yellow-400 rounded-full animate-pulse`}),`In Active Development`]}),(0,Y.jsxs)(`h1`,{className:`text-5xl md:text-7xl font-bold mb-6 leading-tight`,children:[`The Future of AI in`,(0,Y.jsx)(`br`,{}),(0,Y.jsx)(`span`,{className:`gradient-text`,children:`Africa & Beyond`})]}),(0,Y.jsx)(`p`,{className:`text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed`,children:`We're building sector-specific AI agents for African SMEs — practical tools for agriculture, health, education, finance, and beyond.`}),(0,Y.jsxs)(`div`,{className:`flex items-center justify-center gap-4 flex-wrap`,children:[(0,Y.jsx)(`a`,{href:`/beta`,className:`px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition glow`,children:`Request Early Access`}),(0,Y.jsx)(`a`,{href:`/solidai/docs`,className:`px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-lg font-semibold transition`,children:`View Documentation`})]}),(0,Y.jsxs)(`div`,{className:`mt-16 flex items-center justify-center gap-8 text-sm text-gray-500`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)($,{icon:ca}),(0,Y.jsx)(`span`,{children:`Privacy-Conscious Design`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)($,{icon:ra}),(0,Y.jsx)(`span`,{children:`Edge-First Architecture`})]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)($,{icon:ia}),(0,Y.jsx)(`span`,{children:`8 Sectors Targeted`})]})]})]})})}),(0,Y.jsx)(`section`,{id:`features`,className:`py-20 px-6`,children:(0,Y.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,Y.jsxs)(i.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:`text-center mb-16`,children:[(0,Y.jsxs)(`h2`,{className:`text-4xl font-bold mb-4`,children:[`Built for `,(0,Y.jsx)(`span`,{className:`gradient-text`,children:`Modern AI`})]}),(0,Y.jsx)(`p`,{className:`text-gray-400 max-w-2xl mx-auto`,children:`Everything you need to integrate cutting-edge AI into your applications`})]}),(0,Y.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:t.map((e,t)=>(0,Y.jsxs)(i.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t*.1},className:`glass-card rounded-2xl p-6`,children:[(0,Y.jsx)(`div`,{className:`w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4`,children:(0,Y.jsx)($,{icon:e.icon,className:`text-blue-400 text-xl`})}),(0,Y.jsx)(`h3`,{className:`text-xl font-semibold mb-2`,children:e.title}),(0,Y.jsx)(`p`,{className:`text-gray-400 text-sm leading-relaxed`,children:e.desc})]},t))})]})}),(0,Y.jsx)(`section`,{id:`agents`,className:`py-20 px-6 scroll-mt-24`,children:(0,Y.jsxs)(`div`,{className:`max-w-7xl mx-auto`,children:[(0,Y.jsxs)(i.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:`text-center mb-16`,children:[(0,Y.jsxs)(`h2`,{className:`text-4xl font-bold mb-4`,children:[`Preview: `,(0,Y.jsx)(`span`,{className:`gradient-text`,children:`SolidAI Agents`})]}),(0,Y.jsx)(`p`,{className:`text-gray-400 max-w-2xl mx-auto`,children:`A working preview of the interface — sector agents are still in development.`})]}),(0,Y.jsxs)(`div`,{className:`glass-card rounded-2xl p-8 space-y-8`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h3`,{className:`text-xl font-semibold mb-4`,children:`Agent Status`}),(0,Y.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,Y.jsx)(ua,{status:`online`,agentName:`Agriculture Agent`}),(0,Y.jsx)(ua,{status:`busy`,agentName:`Health Agent`}),(0,Y.jsx)(ua,{status:`online`,agentName:`Education Agent`}),(0,Y.jsx)(ua,{status:`offline`,agentName:`Finance Agent`})]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h3`,{className:`text-xl font-semibold mb-4`,children:`Task Progress`}),(0,Y.jsxs)(`div`,{className:`space-y-4 max-w-2xl`,children:[(0,Y.jsx)(fa,{taskName:`Processing farm data`,progress:l,status:`active`}),(0,Y.jsx)(fa,{taskName:`Generating health report`,progress:100,status:`completed`}),(0,Y.jsx)(fa,{taskName:`Analyzing education patterns`,progress:45,status:`active`})]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h3`,{className:`text-xl font-semibold mb-4`,children:`Switch Agent`}),(0,Y.jsx)(pa,{agents:n,selectedAgentId:s,onSelect:c}),(0,Y.jsxs)(`p`,{className:`text-sm text-gray-400 mt-2`,children:[`Currently selected: `,n.find(e=>e.id===s)?.name]})]})]})]})}),(0,Y.jsx)(`section`,{className:`py-20 px-6`,children:(0,Y.jsx)(`div`,{className:`max-w-4xl mx-auto text-center`,children:(0,Y.jsxs)(i.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:`glass-card rounded-3xl p-12 glow`,children:[(0,Y.jsxs)(`h2`,{className:`text-4xl font-bold mb-4`,children:[`Ready to build the `,(0,Y.jsx)(`span`,{className:`gradient-text`,children:`future`}),`?`]}),(0,Y.jsx)(`p`,{className:`text-gray-400 mb-8 max-w-xl mx-auto`,children:`Join our early access list and help shape which SolidAI agents we build and ship first.`}),(0,Y.jsx)(`a`,{href:`/beta`,className:`inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition glow`,children:`Request Early Access`})]})})}),(0,Y.jsx)(`footer`,{className:`border-t border-white/10 py-12 px-6`,children:(0,Y.jsx)(`div`,{className:`max-w-7xl mx-auto`,children:(0,Y.jsxs)(`div`,{className:`flex flex-col md:flex-row items-center justify-between gap-4`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Y.jsx)(`div`,{className:`w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center`,children:(0,Y.jsx)($,{icon:sa,className:`text-white text-xs`})}),(0,Y.jsx)(`span`,{className:`font-bold gradient-text`,children:`SolidAI`})]}),(0,Y.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[`© `,new Date().getFullYear(),` Solid Solutions. All rights reserved.`]}),(0,Y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,Y.jsx)(`a`,{href:`/`,className:`text-sm text-gray-400 hover:text-white transition`,children:`Home`}),(0,Y.jsx)(`a`,{href:`/solidai/docs`,className:`text-sm text-gray-400 hover:text-white transition`,children:`Docs`}),(0,Y.jsx)(`a`,{href:`/#contact`,className:`text-sm text-gray-400 hover:text-white transition`,children:`Contact`})]})]})})})]})}export{ma as default};