(function(t){function e(e){for(var a,r,c=e[0],i=e[1],u=e[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1881cf9e":"55b134b9","chunk-2d0a3165":"9e6800dc","chunk-2d0b16c0":"a9e4b8d4","chunk-2d0daa87":"3bf9c1b9","chunk-2d0de912":"5c9b935c","chunk-2d0e521f":"454ee5cb","chunk-2d0e68b4":"fbc19280","chunk-2d20732b":"5ce4dde7","chunk-2d208a7b":"c740159a","chunk-2d21eec9":"3443e8bb","chunk-2d21ef75":"14eb04b4","chunk-2d22fcd3":"ae8cdebc","chunk-2d230530":"98ae9d70","chunk-3cfc0f65":"4ff8b253","chunk-6131f534":"50244756","chunk-770b1901":"87280da7","chunk-ac27d602":"7f42842b","chunk-bd5c6202":"f704c01a","chunk-2d0aed08":"ddfdfa67","chunk-2d225dc8":"2e9524df"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-ac27d602":1,"chunk-bd5c6202":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1881cf9e":"31d6cfe0","chunk-2d0a3165":"31d6cfe0","chunk-2d0b16c0":"31d6cfe0","chunk-2d0daa87":"31d6cfe0","chunk-2d0de912":"31d6cfe0","chunk-2d0e521f":"31d6cfe0","chunk-2d0e68b4":"31d6cfe0","chunk-2d20732b":"31d6cfe0","chunk-2d208a7b":"31d6cfe0","chunk-2d21eec9":"31d6cfe0","chunk-2d21ef75":"31d6cfe0","chunk-2d22fcd3":"31d6cfe0","chunk-2d230530":"31d6cfe0","chunk-3cfc0f65":"31d6cfe0","chunk-6131f534":"31d6cfe0","chunk-770b1901":"31d6cfe0","chunk-ac27d602":"3de502ed","chunk-bd5c6202":"18920cad","chunk-2d0aed08":"31d6cfe0","chunk-2d225dc8":"31d6cfe0"}[t]+".css",s=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===s))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===a||d===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"15cb":function(t,e,n){"use strict";n("4ce4")},4238:function(t,e,n){t.exports=n.p+"img/pezinok.3033a826.svg"},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="4678"},"4ce4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a"),n("b636"),n("dc8d"),n("efe9"),n("d28b"),n("2a1b"),n("8edd"),n("80e0"),n("6b9e"),n("197b"),n("2351"),n("8172"),n("944a"),n("81b8"),n("99af"),n("a874"),n("a623"),n("cb29"),n("4de4"),n("7db0"),n("c740"),n("0481"),n("5db7"),n("4160"),n("a630"),n("caad"),n("c975"),n("e260"),n("a15b"),n("baa5"),n("d81d"),n("5ded"),n("13d5"),n("f4dd"),n("fb6a"),n("45fc"),n("f785"),n("a434"),n("4069"),n("73d9"),n("c19f"),n("82da"),n("ace4"),n("efec"),n("b56e"),n("b0c0"),n("6c57"),n("e9c4"),n("0c47"),n("4ec9"),n("5327"),n("79a8"),n("9ff9"),n("3ea3"),n("40d9"),n("ff9c"),n("0ac8"),n("f664"),n("4057"),n("bc01"),n("6b93"),n("ca21"),n("90d7"),n("2af1"),n("0261"),n("7898"),n("23dc"),n("b65f"),n("a9e3"),n("35b3"),n("f00c"),n("8ba4"),n("9129"),n("583b"),n("aff5"),n("e6e1"),n("c35a"),n("25eb"),n("b680"),n("cca6"),n("12a8"),n("e71b"),n("4fad"),n("dca8"),n("c1f9"),n("e439"),n("dbb4"),n("7039"),n("3410"),n("2b19"),n("c906"),n("e21d"),n("e43e"),n("b64b"),n("bf96"),n("5bf7"),n("cee8"),n("af93"),n("131a"),n("d3b7"),n("07ac"),n("e6cf"),n("820e"),n("a79d"),n("a6fd"),n("4ae1"),n("3f3a"),n("ac16"),n("5d41"),n("9e4a"),n("7f78"),n("c760"),n("db96"),n("1bf2"),n("d6dd"),n("7ed3"),n("8b9a"),n("4d63"),n("ac1f"),n("5377"),n("2c3e"),n("00b4"),n("25f0"),n("6062"),n("f5b2"),n("8a79"),n("f6d6"),n("2532"),n("3ca3"),n("466d"),n("a1f0"),n("843c"),n("4d90"),n("d80f"),n("38cf"),n("5319"),n("841c"),n("1276"),n("2ca0"),n("498a"),n("1e25"),n("eee7"),n("18a5"),n("1393"),n("04d3"),n("cc71"),n("c7cd"),n("9767"),n("1913"),n("c5d0"),n("9911"),n("c96a"),n("2315"),n("4c53"),n("664f"),n("cfc3"),n("4a9b"),n("fd87"),n("8b09"),n("143c"),n("5cc6"),n("8a59"),n("84c3"),n("fb2c"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("20bf"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ec97"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("10d1"),n("1fe2"),n("159b"),n("ddb0"),n("130f"),n("9f96"),n("2b3d"),n("bf19"),n("9861");var a=n("a026"),r=n("8c4f");a["default"].use(r["a"]);var s=new r["a"]({routes:[{path:"/",name:"Dashboard",component:function(){return n.e("chunk-2d230530").then(n.bind(null,"ec95"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-6131f534").then(n.bind(null,"013f"))}},{path:"/register",name:"SelectPlace",component:function(){return n.e("chunk-ac27d602").then(n.bind(null,"badb"))}},{path:"/place/:placeId",name:"PlaceDay",component:function(){return n.e("chunk-2d22fcd3").then(n.bind(null,"ea23"))}},{path:"/place/:placeId/:dayId",name:"SelectHour",component:function(){return n.e("chunk-2d0e68b4").then(n.bind(null,"98cb"))}},{path:"/place/:placeId/:dayId/:hourId",name:"SelectMinute",component:function(){return n.e("chunk-2d0daa87").then(n.bind(null,"6d14"))}},{path:"/place/:placeId/:dayId/:hourId/:minuteId",name:"Registration",component:function(){return n.e("chunk-2d208a7b").then(n.bind(null,"a65e"))}},{path:"/place/:placeId/:dayId/:hourId/:minuteId/done",name:"RegistrationOk",component:function(){return n.e("chunk-1881cf9e").then(n.bind(null,"58db"))}},{path:"/results",name:"Results",component:function(){return n.e("chunk-2d0e521f").then(n.bind(null,"92d4"))}},{path:"/user",name:"user",component:function(){return n.e("chunk-2d21eec9").then(n.bind(null,"d843"))}},{path:"/admin/placeManager",name:"AdminPlaceManager",component:function(){return n.e("chunk-2d0b16c0").then(n.bind(null,"207c"))}},{path:"/admin/users",name:"AdminUsers",component:function(){return n.e("chunk-770b1901").then(n.bind(null,"c243e"))}},{path:"/admin/invite",name:"AdminInvite",component:function(){return n.e("chunk-2d20732b").then(n.bind(null,"a006"))}},{path:"/admin/testingTime",name:"AdminTestingTime",component:function(){return n.e("chunk-2d21ef75").then(n.bind(null,"d88c"))}},{path:"/tester/unannouncedVisitor",name:"TesterNewVisitor",component:function(){return Promise.all([n.e("chunk-bd5c6202"),n.e("chunk-2d0aed08")]).then(n.bind(null,"0c54"))}},{path:"/tester/registeredVisitor",name:"TesterRegisteredVisitor",component:function(){return Promise.all([n.e("chunk-bd5c6202"),n.e("chunk-2d225dc8")]).then(n.bind(null,"e5ce"))}},{path:"/lab/testResult",name:"labTestResult",component:function(){return n.e("chunk-2d0a3165").then(n.bind(null,"014b"))}},{path:"/gdpr/manage",name:"gdpmanage",component:function(){return n.e("chunk-2d0de912").then(n.bind(null,"85cb"))}},{path:"/help",name:"help",component:function(){return n.e("chunk-3cfc0f65").then(n.bind(null,"9fc0"))}}]}),o=s,c=n("5f5b"),i=(n("f9e3"),n("2dd8"),n("b40d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)}),u=[],d="default",l={computed:{layout:function(){return(this.$route.meta.layout||d)+"-layout"}}},f=l,p=(n("5c0b"),n("2877")),h=Object(p["a"])(f,i,u,!1,null,null,null),b=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-row"},[n("div",{staticClass:"w-100"},[n("div",{staticClass:"main"},[n("Navbar"),n("main",[t._t("default")],2),n("Toasts",{attrs:{"show-progress":!0,rtl:!1,"max-messages":5,"time-out":5e3,closeable:!0}})],1),n("FooterComponent")],1)])},v=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"idsk-header"},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-container",[a("b-navbar-brand",{attrs:{href:"./"},on:{click:function(e){return t.window.location.reload()}}},[a("img",{staticClass:"idsk-header__logotype-crown",attrs:{src:n("e347")}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t.$store.state.user.auth?a("b-navbar-nav",[a("b-navbar-nav",[a("b-nav-item-dropdown",{attrs:{text:"Administrátor"}},[a("b-dropdown-item",{attrs:{to:"/admin/placeManager"}},[t._v("Management testovacích miest")]),a("b-dropdown-item",{attrs:{to:"/admin/invite"}},[t._v("Nový užívateľ")]),a("b-dropdown-item",{attrs:{to:"/admin/users"}},[t._v("Audit užívateľov")]),a("b-dropdown-item",{attrs:{to:"/admin/testingTime"}},[t._v("Čas testovania")])],1)],1),a("b-navbar-nav",[a("b-nav-item-dropdown",{attrs:{text:"Tester"}},[a("b-dropdown-item",{attrs:{to:"/tester/registeredVisitor"}},[t._v("Zaregistrovaný návštevník")]),a("b-dropdown-item",{attrs:{to:"/tester/unannouncedVisitor"}},[t._v("Neohlásený návštevník")])],1)],1),a("b-navbar-nav",[a("b-nav-item-dropdown",{attrs:{text:"Lab"}},[a("b-dropdown-item",{attrs:{to:"/lab/testResult"}},[t._v("Výsledok testu")])],1)],1),a("b-navbar-nav",[a("b-nav-item-dropdown",{attrs:{text:"GRPR manager"}},[a("b-dropdown-item",{attrs:{to:"/gdpr/manage"}},[t._v("Správa GDPR")])],1)],1)],1):a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/register"}},[t._v("Registrácia k odberu vzorky")]),a("b-nav-item",{attrs:{to:"/results"}},[t._v("Výsledky testu")]),a("b-nav-item",{attrs:{to:"/help"}},[t._v("Pomoc")])],1),t.$store.state.user.auth?a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:t.$store.state.user.tokenData.Name,right:""}},[a("b-dropdown-item",{on:{click:t.logout}},[t._v("Logout")])],1)],1):a("b-navbar-nav",{staticClass:"ml-auto",attrs:{right:""}},[a("b-nav-item",{attrs:{to:"/login"}},[t._v("Prihlásenie")])],1)],1)],1)],1)],1)},j=[],g=n("2f62");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x={components:{},data:function(){return{}},computed:{},methods:_(_({},Object(g["c"])({setAuthJWT:"user/setAuthJWT"})),{},{logout:function(){this.setAuthJWT(""),this.$router.push("/")}})},C=x,S=Object(p["a"])(C,k,j,!1,null,null,null),P=S.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"idsk-footer",attrs:{role:"contentinfo"}},[a("div",{staticClass:"govuk-width-container"},[a("div",{staticClass:"idsk-footer__meta"},[a("div",{staticClass:"idsk-footer__meta-item footer-logo-wrap"},[a("div",{staticClass:"footer-logo-inner"},[a("div",{staticClass:"textwidget"},[a("a",{staticClass:"idsk-footer__link",staticStyle:{display:"block"},attrs:{href:"https://www.mirri.gov.sk/index.html"}},[a("img",{attrs:{src:n("4238"),width:"80px"}})])])])]),a("div",{staticClass:"idsk-footer__meta-item idsk-footer__meta-item--grow"},[a("span",{staticClass:"idsk-footer__licence-description"},[a("div",{staticClass:"textwidget"},[t._v(" Prevádzkovateľom služby je mesto "),a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://www.pezinok.sk/",target:"_blank"}},[t._v("Pezinok")]),t._v(". Web vytvoril "),a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://ludovit.scholtz.sk"}},[t._v("Ľudovít Scholtz")]),t._v("."),a("br"),t._v(" Vytvorené v súlade s "),a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://idsk.gov.sk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jednotným dizajn manuálom elektronických služieb.")]),a("br"),a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://korona.gov.sk/vyhlasenie-o-pristupnosti/"}},[t._v("Vyhlásenie o prístupnosti")])])]),a("h2",{staticClass:"govuk-visually-hidden"},[t._v("Dôležité odkazy")]),a("div",{staticClass:"textwidget"},[a("ul",{staticClass:"idsk-footer__inline-list"},[a("li",{staticClass:"idsk-footer__inline-list-item"},[a("a",{staticClass:"idsk-footer__link",attrs:{title:"Koronavírus a Slovensko - Domov",href:"https://korona.gov.sk/"}},[t._v(" Hlavná stránka korona.gov.sk ")])]),a("li",{staticClass:"idsk-footer__inline-list-item"},[t._v(" Call centrum: "),a("a",{staticClass:"idsk-footer__link",attrs:{href:"tel:00421232353030"}},[t._v("02/3235 3030")])]),a("li",{staticClass:"idsk-footer__inline-list-item"},[a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://korona.gov.sk/co-je-covid-19/"}},[t._v(" Čo je COVID-19 ")]),a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://korona.gov.sk/faq/"}},[t._v(" FAQ ")])]),a("li",{staticClass:"idsk-footer__inline-list-item"},[a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://korona.gov.sk/ludia/"}},[t._v(" Ľudia ")])])])]),a("div",{staticClass:"textwidget"},[a("ul",{staticClass:"idsk-footer__inline-list"},[a("li",{staticClass:"idsk-footer__inline-list-item"},[t._v(" OpenSource zdrojové kódy: ")]),a("li",{staticClass:"idsk-footer__inline-list-item"},[a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://github.com/scholtz/covid-sk"}},[t._v(" FE: vue.js ")])]),a("li",{staticClass:"idsk-footer__inline-list-item"},[a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://github.com/scholtz/covid-sk-api"}},[t._v(" BE: .NET Core API ")])]),a("li",{staticClass:"idsk-footer__inline-list-item"},[a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://hub.docker.com/r/scholtz2/mass-covid-testing-api"}},[t._v(" BE: Docker image ")])]),a("li",{staticClass:"idsk-footer__inline-list-item"},[a("a",{staticClass:"idsk-footer__link",attrs:{href:"https://github.com/scholtz/covid-sk-android"}},[t._v(" Android OCR: - Xamarin, Tesseract ")])])])])])])])])}],O={name:"Footer",components:{}},D=O,E=Object(p["a"])(D,I,z,!1,null,null,null),T=E.exports,A={name:"app",components:{Navbar:P,FooterComponent:T},computed:{},beforeCreate:function(){a["default"].$toast=this.$toast},created:function(){},methods:{}},R=A,M=(n("15cb"),Object(p["a"])(R,m,v,!1,null,null,null)),H=M.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container app-theme-white"},[t._t("default")],2)},V=[],J={name:"app",components:{},data:function(){return{}},methods:{}},W=J,$=Object(p["a"])(W,N,V,!1,null,null,null),L=$.exports,B=n("a34a"),G=n.n(B),U=n("bc3a"),F=n.n(U);function Y(t,e,n,a,r,s,o){try{var c=t[s](o),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(a,r)}function q(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){Y(s,a,r,o,c,"next",t)}function c(t){Y(s,a,r,o,c,"throw",t)}o(void 0)}))}}var K={get:function(t,e){var n=this;return q(G.a.mark((function a(){var r,s,o,c,i;return G.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.dispatch,s=e.url,o=e.params,c=null,a.prev=3,i=!1,n.state.user.authJWT?F.a.defaults.headers.common.Authorization="Bearer "+n.state.user.authJWT:localStorage.getItem("jwt")&&(F.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("jwt")),a.next=8,F.a.get(s,{params:o}).catch((function(t){if(console.log("error",t),t.response&&t.response.data&&t.response.data.errors)for(var e in t.response.data.errors)for(var n in t.response.data.errors[e]){var a=t.response.data.errors[e][n];a&&(i=!0,r("snackbar/openError",a,{root:!0}))}else t.response&&t.response.data&&t.response.data.detail&&(i=!0,r("snackbar/openError",t.response.data.detail,{root:!0}));i||(i=!0,r("snackbar/openError","Error occured, please try again later",{root:!0}))}));case 8:if(c=a.sent,!c||200!==c.status){a.next=11;break}return a.abrupt("return",c.data);case 11:i||r("snackbar/openError","Error occured, please try again later",{root:!0}),a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](3),r("snackbar/openError",a.t0.message,{root:!0});case 17:case"end":return a.stop()}}),a,null,[[3,14]])})))()},post:function(t,e){var n=this;return q(G.a.mark((function a(){var r,s,o,c,i,u,d,l;return G.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(d in r=t.dispatch,s=e.url,o=e.params,c=e.body,i=null,a.prev=3,u=new FormData,o)u.append(d,o[d]);return c&&(u=c),n.state.user.authJWT?F.a.defaults.headers.common.Authorization="Bearer "+n.state.user.authJWT:localStorage.getItem("jwt")&&(F.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("jwt")),l=!1,a.next=11,F.a.post(s,u).catch((function(t){if(t.response&&t.response.data&&t.response.data.errors)for(var e in t.response.data.errors)for(var n in t.response.data.errors[e]){var a=t.response.data.errors[e][n];a&&(l=!0,r("snackbar/openError",a,{root:!0}))}else t.response&&t.response.data&&t.response.data.detail?(l=!0,r("snackbar/openError",t.response.data.detail,{root:!0})):t.response&&401===t.response.status&&(l=!0,r("snackbar/openError","401 Unauthorized, authentication is needed",{root:!0}));l||(l=!0,r("snackbar/openError","Error occured, please try again later",{root:!0}))}));case 11:if(i=a.sent,!i||200!==i.status||!i.data){a.next=14;break}return a.abrupt("return",i.data);case 14:l||r("snackbar/openError","Error occured, please try again later",{root:!0}),a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](3),r("snackbar/openError",a.t0.message,{root:!0});case 20:case"end":return a.stop()}}),a,null,[[3,17]])})))()}},Q={namespaced:!0,actions:K};function X(t,e,n,a,r,s,o){try{var c=t[s](o),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(a,r)}function Z(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){X(s,a,r,o,c,"next",t)}function c(t){X(s,a,r,o,c,"throw",t)}o(void 0)}))}}var tt=function(){return{places:{},currentPlace:{}}},et={setPlaces:function(t,e){t.places=e},setCurrentPlace:function(t,e){t.currentPlace=e}},nt={ReloadPlaces:function(t){return Z(G.a.mark((function e(){var n,a,r;return G.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,e.next=3,n("axios/get",{url:"https://apps.scholtz.sk:4430/Place/List"},{root:!0});case 3:if(r=e.sent,!r){e.next=7;break}return a("setPlaces",r),e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})))()},CheckSlots:function(t,e){return Z(G.a.mark((function n(){var a,r,s,o;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=e.day,s=e.from,o=e.until,n.next=4,a("axios/post",{url:"https://apps.scholtz.sk:4430/Admin/CheckSlots",params:{testingDay:r,from:s,until:o}},{root:!0});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},InsertOrUpdate:function(t,e){return Z(G.a.mark((function n(){var a,r,s,o,c,i,u,d,l;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=e.name,s=e.description,o=e.address,c=e.lat,i=e.lng,u=e.isDriveIn,d=e.isWalkIn,l={name:r,description:s,address:o,lat:c,lng:i,isDriveIn:u,isWalkIn:d},n.next=5,a("axios/post",{url:"https://apps.scholtz.sk:4430/Place/InsertOrUpdate",body:l},{root:!0});case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},Delete:function(t,e){return Z(G.a.mark((function n(){var a,r,s;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=e.id,s={id:r},n.next=5,a("axios/post",{url:"https://apps.scholtz.sk:4430/Place/Delete",body:s},{root:!0});case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},GetPlace:function(t,e){var n=this;return Z(G.a.mark((function a(){var r,s;return G.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.dispatch,s=e.id,0!==Object.keys(n.state.place.places).length){a.next=5;break}return a.next=5,r("ReloadPlaces");case 5:return a.abrupt("return",n.state.place.places[s]);case 6:case"end":return a.stop()}}),a)})))()},GetPlaces:function(t){var e=this;return Z(G.a.mark((function n(){var a;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.dispatch,0!==Object.keys(e.state.place.places).length){n.next=4;break}return n.next=4,a("ReloadPlaces");case 4:return n.abrupt("return",e.state.place.places);case 5:case"end":return n.stop()}}),n)})))()}},at={namespaced:!0,state:tt,mutations:et,actions:nt};function rt(t,e,n,a,r,s,o){try{var c=t[s](o),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(a,r)}function st(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){rt(s,a,r,o,c,"next",t)}function c(t){rt(s,a,r,o,c,"throw",t)}o(void 0)}))}}var ot=function(){return{slotsD:{},slotDCurrent:{},slotsH:{},slotHCurrent:{},slotsM:{},slotMCurrent:{},registration:{}}},ct={setSlotsD:function(t,e){t.slotsD=e},setSlotDCurrent:function(t,e){t.slotDCurrent=Object.assign({},t.slotDCurrent,e)},setSlotsH:function(t,e){t.slotsH=e},setSlotHCurrent:function(t,e){t.slotHCurrent=Object.assign({},t.slotHCurrent,e)},setSlotsM:function(t,e){t.slotsM=e},setSlotMCurrent:function(t,e){t.slotMCurrent=Object.assign({},t.slotMCurrent,e)},setRegistration:function(t,e){t.registration=Object.assign({},t.registration,e)}},it={Register:function(t,e){return st(G.a.mark((function n(){var a,r,s,o,c,i,u,d,l,f,p,h,b;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=t.commit,s=e.rc,o=e.firstName,c=e.lastName,i=e.address,u=e.email,d=e.phone,l=e.insurance,f=e.chosenSlot,p=e.chosenPlaceId,h={rc:s,firstName:o,lastName:c,address:i,email:u,phone:d,insurance:l,chosenSlot:f,chosenPlaceId:p},n.next=5,a("axios/post",{url:"https://apps.scholtz.sk:4430/Visitor/Register",body:h},{root:!0});case 5:if(b=n.sent,!b){n.next=9;break}return r("setRegistration",b),n.abrupt("return",!0);case 9:return n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n)})))()},ReloadSlotsD:function(t,e){return st(G.a.mark((function n(){var a,r,s,o;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=t.commit,s=e.placeId,n.next=4,a("axios/get",{url:"https://apps.scholtz.sk:4430/Slot/ListDaySlotsByPlace",params:{placeId:s}},{root:!0});case 4:if(o=n.sent,!o){n.next=9;break}return console.log(s),r("setSlotsD",o),n.abrupt("return",!0);case 9:return n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n)})))()},ReloadSlotsH:function(t,e){return st(G.a.mark((function n(){var a,r,s,o,c;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=t.commit,s=e.placeId,o=e.daySlotId,n.next=4,a("axios/get",{url:"https://apps.scholtz.sk:4430/Slot/ListHourSlotsByPlaceAndDaySlotId",params:{placeId:s,daySlotId:o}},{root:!0});case 4:if(c=n.sent,!c){n.next=8;break}return r("setSlotsH",c),n.abrupt("return",!0);case 8:return n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n)})))()},ReloadSlotsM:function(t,e){return st(G.a.mark((function n(){var a,r,s,o,c;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=t.commit,s=e.placeId,o=e.hourSlotId,n.next=4,a("axios/get",{url:"https://apps.scholtz.sk:4430/Slot/ListMinuteSlotsByPlaceAndHourSlotId",params:{placeId:s,hourSlotId:o}},{root:!0});case 4:if(c=n.sent,!c){n.next=8;break}return r("setSlotsM",c),n.abrupt("return",!0);case 8:return n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n)})))()},GetSlotD:function(t,e){var n=this;return st(G.a.mark((function a(){var r,s,o;return G.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.dispatch,s=e.placeId,o=e.daySlotId,0!==Object.keys(n.state.slot.slotsD).length){a.next=5;break}return a.next=5,r("ReloadSlotsD",{placeId:s});case 5:return a.abrupt("return",n.state.slot.slotsD[o]);case 6:case"end":return a.stop()}}),a)})))()},GetSlotH:function(t,e){var n=this;return st(G.a.mark((function a(){var r,s,o,c;return G.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.dispatch,s=e.placeId,o=e.daySlotId,c=e.hourSlotId,0!==Object.keys(n.state.slot.slotsH).length){a.next=5;break}return a.next=5,r("ReloadSlotsH",{placeId:s,daySlotId:o});case 5:return a.abrupt("return",n.state.slot.slotsH[c]);case 6:case"end":return a.stop()}}),a)})))()},GetSlotM:function(t,e){var n=this;return st(G.a.mark((function a(){var r,s,o,c;return G.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.dispatch,s=e.placeId,o=e.hourSlotId,c=e.minuteSlotId,0!==Object.keys(n.state.slot.slotsM).length){a.next=5;break}return a.next=5,r("ReloadSlotsM",{placeId:s,hourSlotId:o});case 5:return a.abrupt("return",n.state.slot.slotsM[c]);case 6:case"end":return a.stop()}}),a)})))()}},ut={namespaced:!0,state:ot,mutations:ct,actions:it},dt={openError:function(t,e){t.dispatch;a["default"].$toast.error(e)},openWarning:function(t,e){t.dispatch;a["default"].$toast.warning(e)},openSuccess:function(t,e){t.dispatch;a["default"].$toast.success(e)}},lt={namespaced:!0,actions:dt};function ft(t,e,n,a,r,s,o){try{var c=t[s](o),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(a,r)}function pt(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){ft(s,a,r,o,c,"next",t)}function c(t){ft(s,a,r,o,c,"throw",t)}o(void 0)}))}}var ht={GetResults:function(t,e){return pt(G.a.mark((function n(){var a,r,s;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=e.code,s=e.pass,n.next=4,a("axios/post",{url:"https://apps.scholtz.sk:4430/Result/Get",params:{code:r,pass:s}},{root:!0});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},GetVisitor:function(t,e){return pt(G.a.mark((function n(){var a,r;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=e.visitorCode,n.next=4,a("axios/post",{url:"https://apps.scholtz.sk:4430/Result/GetVisitor",params:{visitorCode:r}},{root:!0});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},ConnectVisitorToTest:function(t,e){return pt(G.a.mark((function n(){var a,r,s,o;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=e.visitorCode,s=e.testCode,n.next=4,a("axios/post",{url:"https://apps.scholtz.sk:4430/Result/ConnectVisitorToTest",params:{visitorCode:r,testCode:s}},{root:!0});case 4:o=n.sent,o&&a("snackbar/openSuccess","Uložené",{root:!0});case 6:case"end":return n.stop()}}),n)})))()}},bt={namespaced:!0,actions:ht};function mt(t,e,n,a,r,s,o){try{var c=t[s](o),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(a,r)}function vt(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){mt(s,a,r,o,c,"next",t)}function c(t){mt(s,a,r,o,c,"throw",t)}o(void 0)}))}}var kt=function(){return{auth:!1,authJWT:"",tokenData:{}}},jt={setAuth:function(t,e){t.auth=e},setAuthJWT:function(t,e){if(localStorage.setItem("jwt",e),!e)return t.auth=!1,t.authJWT="",void(t.tokenData={});t.authJWT=e,t.tokenData=gt(e),t.tokenData?t.auth=!0:t.auth=!1}};function gt(t){if(!t)return{};var e=t.split(".")[1],n=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(n).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(a)}var wt={Preauthenticate:function(t,e){return vt(G.a.mark((function n(){var a,r;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=e.email,n.next=4,a("axios/post",{url:"https://apps.scholtz.sk:4430/User/Preauthenticate",params:{email:r}},{root:!0});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},Authenticate:function(t,e){return vt(G.a.mark((function n(){var a,r,s,o,c,i;return G.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.dispatch,r=t.commit,s=e.email,o=e.hash,c=e.data,n.next=4,a("axios/post",{url:"https://apps.scholtz.sk:4430/User/Authenticate",params:{email:s,hash:o,data:c}},{root:!0});case 4:if(i=n.sent,r("setAuthJWT",i),!i){n.next=8;break}return n.abrupt("return",!0);case 8:return n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n)})))()}},_t={namespaced:!0,state:kt,mutations:jt,actions:wt};a["default"].use(g["a"]);var yt=!1,xt=new g["a"].Store({modules:{axios:Q,place:at,snackbar:lt,slot:ut,result:bt,user:_t},strict:yt}),Ct=n("ecee"),St=n("c074"),Pt=n("f2d1"),It=n("ad3d");a["default"].component("font-awesome-icon",It["a"]),a["default"].component("font-awesome-layers",It["b"]),Ct["c"].add(St["a"],St["g"],St["h"],St["c"],St["b"],St["d"],St["e"],St["f"],St["i"],St["j"],St["k"],St["l"],St["m"],St["n"],St["o"],St["p"],St["t"],St["u"],St["v"],St["w"],St["x"],St["y"],St["z"],St["B"],St["C"],St["D"],St["A"],St["E"],Pt["a"],St["F"],St["G"],St["H"],St["I"],St["K"],St["J"],St["q"],St["r"],St["s"],St["L"],St["M"],St["N"],St["O"],St["P"],St["Q"],St["R"],St["S"],St["T"],St["U"],St["V"],St["W"],St["X"],St["Y"],St["Z"],St["ab"],St["bb"],St["cb"],St["db"],St["eb"],Pt["b"],St["fb"],St["gb"],St["hb"],St["ib"],St["jb"],St["kb"],Pt["c"]);var zt=n("c1df"),Ot=n.n(zt),Dt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.separator,a=e.showSeconds;if(!t)return"";var r=Ot()(t);if(!r.isValid())return t;var s=n?"".concat(n," "):"";return r.format("DD.MM.YYYY ".concat(s,"HH:mm").concat(a?":ss":""))},Et=function(t){if(!t)return"";var e=Ot()(t);return e.isValid()?e.format("DD.MM.YYYY"):t};a["default"].filter("formatDateTime",Dt),a["default"].filter("formatDate",Et);var Tt=n("ef76");a["default"].config.productionTip=!1,a["default"].use(c["a"]),a["default"].use(Tt["a"]),a["default"].component("default-layout",H),a["default"].component("userpages-layout",L),new a["default"]({el:"#app",store:xt,router:o,components:{App:b},template:"<App/>"})},"5c0b":function(t,e,n){"use strict";n("c58b")},c58b:function(t,e,n){},e347:function(t,e,n){t.exports=n.p+"img/logo.dc8fb560.svg"}});