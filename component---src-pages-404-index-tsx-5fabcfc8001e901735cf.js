"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[911],{3159:function(e,n,t){t.d(n,{A:function(){return h}});var r=t(7294),l=t(1082),a=t(7906);function c(e){var n=e.toggleMenu,t=e.open;return r.createElement("div",{className:"menu__button "+(t?"open":""),id:"hamburger",onClick:n},r.createElement("span",null),r.createElement("span",null),r.createElement("span",null))}var u=[{name:"home",url:"/"},{name:"projects",url:"/projects"},{name:"resume",url:"/resume"}];function o(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return r.createElement("nav",{className:n?"open":""},r.createElement(c,{toggleMenu:function(){t(!n)},open:n}),r.createElement("ul",null,u.map((function(e){return r.createElement("li",{key:e.url},r.createElement(l.rU,{to:e.url,activeClassName:"active"},e.name))}))))}var i=function(e){var n=e.hideLogo;return r.createElement("header",null,n?r.createElement(a.x,{type:"h1",className:"intro__wrapper"},"Hoi,",r.createElement("br",null)," ik ben ",r.createElement("span",{className:"highlight"},"Amelia")):r.createElement(l.rU,{to:"/",className:"header__info"},r.createElement("span",null,r.createElement("h1",null,"Amelia"),r.createElement("p",null,"Australian with working rights in the Netherlands"),r.createElement("p",null,r.createElement("em",null,"Ik ben Nederlands aan het leren")))),r.createElement(o,null))},s=function(){return r.createElement("footer",null)},m=t(5924),h=function(e){var n=e.children,t=e.className,l=void 0===t?"":t,a=e.hideLogo,c=void 0!==a&&a;return r.createElement(m.W,null,r.createElement("div",{className:l+" body auto-dark-mode "},r.createElement("div",{className:"layout__wrapper"},r.createElement(i,{hideLogo:c}),r.createElement("main",{className:null!=l?l:""},n),r.createElement(s,null))))}},7906:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}t.d(n,{x:function(){return o}});var l=t(7294),a=["children"],c=function(e){var n=e.children,t=r(e,a),c=n;return[{condition:null==t?void 0:t.bold,wrapper:function(e){return l.createElement("strong",null,e)}},{condition:null==t?void 0:t.italic,wrapper:function(e){return l.createElement("em",null,e)}},{condition:null==t?void 0:t.underlined,wrapper:function(e){return l.createElement("u",null,e)}}].forEach((function(e,n){var t=e.condition,r=e.wrapper;return t?c=r(c):c})),c},u=["children","type","className"],o=function(e){var n=e.children,t=e.type,a=e.className,o=r(e,u);return l.createElement(i,{type:t,className:a},l.createElement(c,Object.assign({children:n},o)))},i=function(e){var n=e.type,t=e.children,r=e.className,a=void 0===r?"":r;switch(n){case"h1":return l.createElement("h1",{className:a},t);case"h2":return l.createElement("h2",{className:a},t);case"h3":return l.createElement("h3",{className:a},t);case"h4":return l.createElement("h4",{className:a},t);case"h5":return l.createElement("h5",{className:a},t);case"h6":return l.createElement("h6",{className:a},t);default:return l.createElement("p",{className:a},t)}}},5924:function(e,n,t){t.d(n,{W:function(){return a},_:function(){return l}});var r=t(7294),l=(0,r.createContext)(null),a=function(e){var n=e.children,t=(0,r.useState)(null),a=t[0],c=t[1];return(0,r.useEffect)((function(){var e=window.location.search,n=new URLSearchParams(e).getAll("skill").map((function(e){return e.toLowerCase()})),t=window.localStorage.getItem("skills"),r=t?JSON.parse(t):null;n.length>0&&!r||n.length>0&&r&&n.join()!==r.join()?(window.localStorage.setItem("skills",JSON.stringify(n)),c(n)):n.length<=0&&c(r)}),[]),r.createElement(l.Provider,{value:a},n)}},6625:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c}});var r=t(7294),l=t(1082),a=t(3159);n.default=function(){return r.createElement(a.A,{className:"error-page"},"Whoops, not sure what happene there.",r.createElement(l.rU,{to:"/"},"Click here to go home"))};var c=function(){return r.createElement("title",null,"Not found")}}}]);
//# sourceMappingURL=component---src-pages-404-index-tsx-5fabcfc8001e901735cf.js.map