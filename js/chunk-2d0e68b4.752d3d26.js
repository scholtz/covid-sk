(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e68b4"],{"98cb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[t._v(t._s(t.$t("selectHourTitle")))])])],1),r("div",{staticClass:"app-pane-blue py-4"},[r("b-container",[r("h2",[t._v(" "+t._s(t.$t("selectHourYourSelection",{place:t.$store.state.place.currentPlace.name,day:t.$store.state.slot.slotDCurrent.description}))+" ")]),r("b-link",{staticClass:"btn btn-light m-0",attrs:{to:"/place/"+t.$route.params.placeId}},[t._v(" "+t._s(t.$t("change"))+" ")])],1)],1),r("b-container",{staticClass:"my-4"},[r("h2",[t._v(t._s(t.$t("selectHourQuestion")))]),r("p",[t._v(" "+t._s(t.$t("selectHourHelp"))+" ")]),t.loading?r("b-container",[r("b-spinner"),t._v(" "+t._s(t.$t("loadingData"))+" ")],1):t._e(),t._l(t.$store.state.slot.slotsH,(function(e){return r("p",{key:e.from},[r("b-link",{staticClass:"btn btn-primary m-0",class:{"bg-danger":e.registrations>=t.$store.state.place.currentPlace.limitPer1HourSlot},attrs:{disabled:e.registrations>=t.$store.state.place.currentPlace.limitPer1HourSlot,to:"/place/"+t.$route.params.placeId+"/"+t.$route.params.dayId+"/"+e.slotId}},[t._v(" "+t._s(t.$t("selectHourButtonText",{description:e.description,registrations:e.registrations}))+" ")])],1)}))],2)],1)},a=[],o=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={data:function(){return{loading:!0}},mounted:function(){var t=this;this.GetPlace({id:this.$route.params.placeId}).then((function(t){return t})).then((function(e){return t.setCurrentPlace(e),e})).then((function(e){return t.GetSlotD({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId}).then((function(e){console.log("r2",e),t.setSlotDCurrent(e)})),e})).then((function(e){return t.ReloadSlotsH({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId}).then((function(e){t.loading=!1})),e}))},methods:l(l(l({},Object(o["c"])({setCurrentPlace:"place/setCurrentPlace",setSlotDCurrent:"slot/setSlotDCurrent"})),Object(o["b"])({GetPlace:"place/GetPlace"})),Object(o["b"])({ReloadSlotsH:"slot/ReloadSlotsH",GetSlotD:"slot/GetSlotD"}))},u=i,p=r("2877"),d=Object(p["a"])(u,n,a,!1,null,null,null);e["default"]=d.exports}}]);