(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{510:function(e,n,t){Promise.resolve().then(t.t.bind(t,6975,23)),Promise.resolve().then(t.t.bind(t,9265,23)),Promise.resolve().then(t.bind(t,4763)),Promise.resolve().then(t.bind(t,2685)),Promise.resolve().then(t.t.bind(t,7951,23))},7088:function(e,n){"use strict";let t;Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function i(e){let{type:n,props:t}=e,i=document.createElement(n);for(let e in t){if(!t.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===t[e])continue;let o=r[e]||e.toLowerCase();"script"===n&&("async"===o||"defer"===o||"noModule"===o)?i[o]=!!t[e]:i.setAttribute(o,t[e])}let{children:o,dangerouslySetInnerHTML:a}=t;return a?i.innerHTML=a.__html||"":o&&(i.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),i}function o(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){let t=n.getAttribute("nonce");if(t&&!e.getAttribute("nonce")){let r=n.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=t,t===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(n)}function a(){return{mountedInstances:new Set,updateHead:e=>{let n={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'.concat(e.props["data-href"],'"]')))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let t=n[e.type]||[];t.push(e),n[e.type]=t});let r=n.title?n.title[0]:null,i="";if(r){let{children:e}=r.props;i="string"==typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{t(e,n[e]||[])})}}}t=(e,n)=>{let t=document.getElementsByTagName("head")[0],r=t.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let n=0,t=r.previousElementSibling;n<a;n++,t=(null==t?void 0:t.previousElementSibling)||null){var c;(null==t?void 0:null==(c=t.tagName)?void 0:c.toLowerCase())===e&&l.push(t)}let d=n.map(i).filter(e=>{for(let n=0,t=l.length;n<t;n++){let t=l[n];if(o(t,e))return l.splice(n,1),!1}return!0});l.forEach(e=>{var n;return null==(n=e.parentNode)?void 0:n.removeChild(e)}),d.forEach(e=>t.insertBefore(e,r)),r.content=(a-l.length+d.length).toString()},("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},7951:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return b},default:function(){return y}});let r=t(7155),i=t(6927),o=t(5909),a=t(6496),l=i._(t(8431)),c=o._(t(6006)),d=t(508),s=t(7088),u=t(408),f=new Map,p=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],g=e=>{let{src:n,id:t,onLoad:r=()=>{},onReady:i=null,dangerouslySetInnerHTML:o,children:a="",strategy:l="afterInteractive",onError:c}=e,d=t||n;if(d&&p.has(d))return;if(f.has(n)){p.add(d),f.get(n).then(r,c);return}let u=()=>{i&&i(),p.add(d)},g=document.createElement("script"),m=new Promise((e,n)=>{g.addEventListener("load",function(n){e(),r&&r.call(this,n),u()}),g.addEventListener("error",function(e){n(e)})}).catch(function(e){c&&c(e)});for(let[t,r]of(o?(g.innerHTML=o.__html||"",u()):a?(g.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",u()):n&&(g.src=n,f.set(n,m)),Object.entries(e))){if(void 0===r||h.includes(t))continue;let e=s.DOMAttributeNames[t]||t.toLowerCase();g.setAttribute(e,r)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),document.body.appendChild(g)};function m(e){let{strategy:n="afterInteractive"}=e;"lazyOnload"===n?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>g(e))}):g(e)}function b(e){e.forEach(m),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let n=e.id||e.getAttribute("src");p.add(n)})}()}function x(e){let{id:n,src:t="",onLoad:i=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:f}=e,h=a._(e,["id","src","onLoad","onReady","strategy","onError"]),{updateScripts:m,scripts:b,getIsSsr:x,appDir:y,nonce:_}=(0,c.useContext)(d.HeadManagerContext),A=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=n||t;A.current||(o&&e&&p.has(e)&&o(),A.current=!0)},[o,n,t]);let v=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{!v.current&&("afterInteractive"===s?g(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>g(e))})),v.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(m?(b[s]=(b[s]||[]).concat([r._({id:n,src:t,onLoad:i,onReady:o,onError:f},h)]),m(b)):x&&x()?p.add(n||t):x&&!x()&&g(e)),y){if("beforeInteractive"===s)return t?(l.default.preload(t,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),c.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([t]),")")}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),c.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([0,r._({},h)]),")")}}));"afterInteractive"===s&&t&&l.default.preload(t,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(x,"__nextScript",{value:!0});let y=x;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},2685:function(e,n,t){"use strict";t.r(n),t.d(n,{Footer:function(){return c}});var r=t(2805),i=t(9268);t(6006);var o=t(5732);function a(){let e=(0,r._)(["\n    color: #ffffff;\n    background-color: #1b813e;\n    margin-top: 60px;\n"]);return a=function(){return e},e}function l(){let e=(0,r._)(["\n    text-align: center;\n    padding: 10px;\n    font-size: 14px;\n    font-weight: bold;\n"]);return l=function(){return e},e}let c=()=>(0,i.jsx)(d,{children:(0,i.jsx)(s,{children:(0,i.jsx)("small",{children:"\xa9善福寺 All Rights Reserved."})})}),d=o.ZP.footer.withConfig({componentId:"sc-fc30b847-0"})(a()),s=o.ZP.p.withConfig({componentId:"sc-fc30b847-1"})(l())},4763:function(e,n,t){"use strict";t.r(n),t.d(n,{Header:function(){return S},navList:function(){return L},scrollToTop:function(){return M}});var r=t(2805),i=t(9268),o=t(8969),a=t.n(o),l=t(6006),c=t(5846),d=t.n(c),s=t(5732),u={src:"/_next/static/media/logo.054a7861.png",height:151,width:151,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAo0lEQVR42jWPTQrCMBCF5yjd1EKry17BIiRiDa5LMNilf71HsvQUukgO6DeLBj7ee8NkMhE9Kds2FbvARyEvsZhW9FBoKUzoBTzeoy4VM0EnhBnTwxiLtSmbI7Uzvkdv2nDl1gP9RZ0C5C/6BK8Nb2goDjHbA5MG2JMb9ngJYQZdcgM72DKpRrv1CQ0BRhodNx3+BAFfrz+pIER2Yck7BKhERP4HHnE2vnv/jgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};function f(){let e=(0,r._)(["\n    ul {\n        display: flex;\n        @media screen and (max-width: 767px) {\n            display: block;\n            text-align: center;\n        }\n    }\n    li {\n        margin-left: 20px;\n        margin-right: 20px;\n        margin-top: auto;\n        margin-bottom: auto;\n        @media screen and (max-width: 767px) {\n            margin-top: 20px;\n        }\n    }\n"]);return f=function(){return e},e}let p=e=>{let{navList:n,callback:t}=e;return(0,i.jsx)(h,{children:(0,i.jsx)("ul",{children:n.map((e,n)=>(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:e.link,onClick:t,children:e.body})},n))})})},h=s.ZP.nav.withConfig({componentId:"sc-54aee048-0"})(f());var g={src:"/_next/static/media/icon-twitter-square.86863123.png",height:400,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42jWPPWpCURCFB9KkCYE0CZgfQlIlKZM02UAqd+AqXIHgCvxBvc8fEAtLK3EBWtpYvMJCwUYEYa5PFH+e9zjz1IHLufCdM4ehmGH/1bP4KFv3LnpbYtyU2D3L/1EYKaQig3Ic6W/V4kfenWG8KKMsu1R7iUp3hStJTzlEsD4g2QpAeXZqQLqzhM48CCPdhQ7/9fNm7bqW5Gi2x2X64y0ow/gqi+nesPuWzt5wg70kB5Mt/moCJPTmWUcPhvEpzkRzgXhjAanU1QoRM6cKX01UYCdAz42SCp886x8BsPW6BT6/240AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};function m(){let e=(0,r._)(["\n    display: block;\n    width: 32px;\n    height: 32px;\n"]);return m=function(){return e},e}let b=()=>(0,i.jsx)(x,{target:"_blank",href:"https://twitter.com/jodo_zempukuji",rel:"noopener noreferrer",children:(0,i.jsx)("img",{src:g.src,alt:"Twitter Icon",width:32,height:32})}),x=s.ZP.a.withConfig({componentId:"sc-30a8e49-0"})(m());function y(){let e=(0,r._)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: #ffffff;\n    height: 70px;\n    z-index: 10;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n    @media screen and (max-width: 767px) {\n    }\n"]);return y=function(){return e},e}function _(){let e=(0,r._)(["\n    max-width: 1200px;\n    height: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 40px;\n    padding-right: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    @media screen and (max-width: 767px) {\n        padding-left: 0px;\n        padding-right: 0px;\n        position: relative;\n    }\n"]);return _=function(){return e},e}function A(){let e=(0,r._)(["\n    display: flex;\n    align-items: center;\n    @media screen and (max-width: 767px) {\n    }\n"]);return A=function(){return e},e}function v(){let e=(0,r._)(["\n    display: block;\n    width: 50px;\n    height: 50px;\n    margin: 10px;\n    @media screen and (max-width: 767px) {\n    }\n"]);return v=function(){return e},e}function w(){let e=(0,r._)(["\n    font-size: 20px;\n    letter-spacing: 0.05em;\n    color: #2c2c2c;\n"]);return w=function(){return e},e}function C(){let e=(0,r._)(["\n    font-size: 40px;\n    letter-spacing: 0.3em;\n    color: #2c2c2c;\n    margin-left: 10px;\n"]);return C=function(){return e},e}function j(){let e=(0,r._)(["\n    display: none;\n    @media screen and (max-width: 767px) {\n        display: block;\n        width: 44px;\n        height: 34px;\n        background-image: url(",");\n        background-size: 50%;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-color: transparent;\n        border: none;\n        border-radius: 0;\n        outline: none;\n    }\n"]);return j=function(){return e},e}function E(){let e=(0,r._)(["\n    @media screen and (max-width: 767px) {\n        display: none;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        right: 0;\n        color: #ffffff;\n        background-color: #1b813e;\n        padding-top: 30px;\n        padding-bottom: 50px;\n    }\n"]);return E=function(){return e},e}function I(){let e=(0,r._)(["\n    @media screen and (max-width: 767px) {\n        display: block;\n    }\n"]);return I=function(){return e},e}function k(){let e=(0,r._)(["\n    display: block;\n    @media screen and (max-width: 767px) {\n        display: none;\n    }\n"]);return k=function(){return e},e}function P(){let e=(0,r._)(["\n    width: 32px;\n    height: 32px;\n    margin-top: 30px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return P=function(){return e},e}let M=()=>{window.scrollTo({top:0,behavior:"auto"})},L=[{link:"/",isImage:!1,body:"ホーム"},{link:"/information",isImage:!1,body:"お知らせ"},{link:"/about",isImage:!1,body:"当山について"},{link:"/contact",isImage:!1,body:"お問い合わせ"}],S=()=>{let[e,n]=(0,l.useState)(!1),t=()=>{M()},r=()=>{n(!e),M()};return(0,i.jsx)(N,{children:(0,i.jsxs)(R,{children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(H,{children:(0,i.jsx)(d(),{href:"/",onClick:t,children:(0,i.jsx)("img",{src:u.src,alt:"logo",width:50,height:50})})}),(0,i.jsx)(Z,{className:a().className,children:"浄土宗"}),(0,i.jsx)(T,{className:a().className,children:"善福寺"})]}),(0,i.jsx)(z,{onClick:r}),e?(0,i.jsxs)(q,{children:[(0,i.jsx)(p,{navList:L,callback:r}),(0,i.jsx)(K,{children:(0,i.jsx)(b,{})})]}):(0,i.jsx)(B,{children:(0,i.jsx)(p,{navList:L,callback:()=>{}})}),(0,i.jsx)(U,{children:(0,i.jsx)(b,{})})]})})},N=s.ZP.header.withConfig({componentId:"sc-9abeea23-0"})(y()),R=s.ZP.div.withConfig({componentId:"sc-9abeea23-1"})(_()),O=s.ZP.div.withConfig({componentId:"sc-9abeea23-2"})(A()),H=s.ZP.p.withConfig({componentId:"sc-9abeea23-3"})(v()),Z=s.ZP.p.withConfig({componentId:"sc-9abeea23-4"})(w()),T=s.ZP.p.withConfig({componentId:"sc-9abeea23-5"})(C()),z=s.ZP.button.withConfig({componentId:"sc-9abeea23-6"})(j(),"/_next/static/media/icon-menu.20a2ef07.png"),B=s.ZP.div.withConfig({componentId:"sc-9abeea23-7"})(E()),q=(0,s.ZP)(B).withConfig({componentId:"sc-9abeea23-8"})(I()),U=s.ZP.div.withConfig({componentId:"sc-9abeea23-9"})(k()),K=s.ZP.div.withConfig({componentId:"sc-9abeea23-10"})(P())},9265:function(){},6975:function(e){e.exports={style:{fontFamily:"'__Zen_Old_Mincho_6b9155', '__Zen_Old_Mincho_Fallback_6b9155'",fontStyle:"normal"},className:"__className_6b9155"}}},function(e){e.O(0,[685,12,9,667,139,744],function(){return e(e.s=510)}),_N_E=e.O()}]);