(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daa87"],{"6d14":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[t._v("Vyberte si termín testovania")])])],1),r("div",{staticClass:"app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6"},[r("b-container",[r("h2",[t._v(" Vybrali ste si "+t._s(t.$store.state.place.currentPlace.name)+", dňa "+t._s(t.$store.state.slot.slotDCurrent.description)+" medzi "+t._s(t.$store.state.slot.slotHCurrent.description)+" ")]),r("b-link",{staticClass:"govuk-button m-0",attrs:{to:"/place/"+t.$route.params.placeId+"/"+t.$route.params.dayId}},[t._v(" Zmeniť ")])],1)],1),r("b-container",{staticClass:"my-4"},[r("b-row",[r("b-col",[r("h2",[t._v("Vyberte si ideálny čas odberu")]),r("p",[t._v(" V prípade ak môžete prísť v ľubovoľný čas, uprednostnite termín s nižším počtom registrácií ")]),t._l(t.$store.state.slot.slotsM,(function(e){return r("p",{key:e.slotId},[r("b-link",{staticClass:"govuk-button m-0",attrs:{to:"/place/"+t.$route.params.placeId+"/"+t.$route.params.dayId+"/"+t.$route.params.hourId+"/"+e.slotId}},[t._v(" Medzi "),r("b",[t._v(t._s(e.description))]),t._v(" je aktuálne registrovaných "+t._s(e.registrations)+" osôb ")])],1)}))],2)],1)],1)],1)},n=[],a=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={mounted:function(){var t=this;this.GetPlace({id:this.$route.params.placeId}).then((function(t){return t})).then((function(e){return t.setCurrentPlace(e),e})).then((function(e){return t.GetSlotD({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId})})).then((function(e){t.setSlotDCurrent(e)})).then((function(e){return t.GetSlotH({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId,hourSlotId:t.$route.params.hourId})})).then((function(e){return t.setSlotHCurrent(e)})).then((function(e){return t.ReloadSlotsM({placeId:t.$route.params.placeId,hourSlotId:t.$route.params.hourId})}))},methods:l(l(l({},Object(a["c"])({setCurrentPlace:"place/setCurrentPlace",setSlotDCurrent:"slot/setSlotDCurrent",setSlotHCurrent:"slot/setSlotHCurrent"})),Object(a["b"])({GetPlace:"place/GetPlace"})),Object(a["b"])({GetSlotD:"slot/GetSlotD",GetSlotH:"slot/GetSlotH",GetSlotM:"slot/GetSlotM",ReloadSlotsM:"slot/ReloadSlotsM"}))},i=c,p=r("2877"),d=Object(p["a"])(i,o,n,!1,null,null,null);e["default"]=d.exports}}]);