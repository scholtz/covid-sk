(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770b1901"],{c243e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"app-pane-lgray py-2"},[n("b-container",[n("h1",[e._v("Audit užívateľov a ich práv")])])],1),n("b-container",{staticClass:"my-4"},[n("b-table",{attrs:{items:e.data,fields:e.fields},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[n("button",{staticClass:"govuk-button m-2",on:{click:function(n){return e.editPlaceClick(t)}}},[e._v(" Edit ")]),n("button",{staticClass:"govuk-button m-2",on:{click:function(n){return e.deletePlaceClick(t)}}},[e._v(" Delete ")])]}},{key:"cell(role)",fn:function(t){return[e._v(" "+e._s(e.formatRoles(t))+" ")]}}])})],1)],1)},o=[],a=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{data:[],person:{name:"",email:"",roles:[]},fields:[{label:"Meno",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Role",key:"role",sortable:!0}]}},mounted:function(){var e=this;this.LoadUsers().then((function(t){t&&(e.data=Object.values(t))}))},methods:l(l({},Object(a["b"])({LoadUsers:"user/LoadUsers"})),{},{formatRoles:function(e){return e.item.roles.join(", ")}})},u=s,b=n("2877"),f=Object(b["a"])(u,r,o,!1,null,null,null);t["default"]=f.exports}}]);