(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ef75"],{d88c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"app-pane-lgray py-2"},[n("b-container",[n("h1",[t._v("Nastavenie času testovania")])])],1),n("b-container",[n("h2",[t._v("Vytvoriť sloty pre konrkétny čas")]),n("b-row",[n("b-col",{attrs:{cols:"12",md:"12"}},[n("label",{attrs:{for:"day"}},[t._v("Deň")]),n("b-input",{ref:"day",attrs:{id:"day"},model:{value:t.day,callback:function(e){t.day=e},expression:"day"}})],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("label",{attrs:{for:"from"}},[t._v("Od hodiny")]),n("b-input",{ref:"from",attrs:{id:"from"},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("label",{attrs:{for:"until"}},[t._v("Do hodiny")]),n("b-input",{ref:"until",attrs:{id:"until"},model:{value:t.until,callback:function(e){t.until=e},expression:"until"}})],1)],1),n("button",{staticClass:"govuk-button m-2",on:{click:t.checkClick}},[t._v("Check")])],1)],1)},o=[],c=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{day:"2020-10-31T00:00:00+00:00",from:9,until:12}},mounted:function(){},methods:i(i(i({},Object(c["b"])({CheckSlots:"place/CheckSlots"})),Object(c["b"])({openSuccess:"snackbar/openSuccess"})),{},{checkClick:function(){var t=this;this.CheckSlots({day:this.day,from:this.from,until:this.until}).then((function(e){e&&t.openSuccess("Uložené "+e)}))}})},u=s,b=n("2877"),f=Object(b["a"])(u,r,o,!1,null,null,null);e["default"]=f.exports}}]);