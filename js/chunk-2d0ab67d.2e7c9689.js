(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab67d"],{"14ae":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray p-5"},[r("b-container",[r("b-row",[r("b-col",[r("h1",[t._v("Overenie testu")])])],1)],1)],1),t.loading?r("b-container",[r("b-row",[r("b-col",[r("b-spinner",{attrs:{label:"Čítam údaje..."}})],1)],1)],1):t._e(),t.loading?t._e():r("b-container",[r("b-row",[r("b-col",[t.result.id?r("table",[r("tr",[r("th",[t._v("Kód výsledku:")]),r("td",[t._v(t._s(t.result.id))])]),r("tr",[r("th",[t._v("Meno testovanej osoby:")]),r("td",[t._v(t._s(t.result.name))])]),r("tr",[r("th",[t._v("Výsledok:")]),r("td",[t._v(t._s(t.result.result))])]),r("tr",[r("th",[t._v("Čas odberu vzorky:")]),r("td",[t._v(t._s(t.result.time))])]),r("tr",[r("th",[t._v("Test vykonal:")]),r("td",[t._v(t._s(t.result.testingEntity))])]),r("tr",[r("th",[t._v("Adresa výkonu testu:")]),r("td",[t._v(t._s(t.result.testingAddress))])]),r("tr",[r("th",[t._v("Typ:")]),r("td",[t._v(t._s(t.result.product))])])]):r("div",{staticClass:"alert alert-danger my-4"},[t._v(" Tento test je neplatný alebo bol vykonaný skôr ako týždeň dozadu ")])])],1)],1)],1)},s=[],o=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={data:function(){return{result:{},loading:!0}},mounted:function(){var t=this;this.VerifyResult({id:this.$route.params.id}).then((function(e){console.log("this.result",t.result,e),t.result=e||{},t.loading=!1}))},methods:a({},Object(o["b"])({VerifyResult:"result/VerifyResult"}))},c=u,d=r("2877"),b=Object(d["a"])(c,n,s,!1,null,null,null);e["default"]=b.exports}}]);