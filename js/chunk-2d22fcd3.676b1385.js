(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fcd3"],{ea23:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[e._v(e._s(e.$t("selectDayTitle")))])])],1),e.$store.state.place.currentPlace?r("div",{staticClass:"app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6"},[r("b-container",[r("h2",[e._v(" "+e._s(e.$t("selectDayYourSelection",{place:e.$store.state.place.currentPlace.name}))+" ")]),r("p",[e._v("Adresa: "+e._s(e.$store.state.place.currentPlace.address))]),r("p",[e._v(" GPS: "+e._s(e.$store.state.place.currentPlace.lat)+" "+e._s(e.$store.state.place.currentPlace.lng)+" ")]),r("p",[e._v(" Má drive in: "),e.$store.state.place.currentPlace.isDriveIn?r("span",[e._v("Áno")]):r("span",[e._v("Nie")])]),r("p",[e._v(" Možnosť prísť pešo: "),e.$store.state.place.currentPlace.isWalkIn?r("span",[e._v("Áno")]):r("span",[e._v("Nie")])]),r("p",[e._v(" 5 minútový limit: "+e._s(e.$store.state.place.currentPlace.limitPer5MinSlot)+" ")]),r("p",[e._v(" Hodinový limit: "+e._s(e.$store.state.place.currentPlace.limitPer1HourSlot)+" ")]),e.$store.state.place.currentPlace.description?r("p",[e._v(" Popis: "+e._s(e.$store.state.place.currentPlace.description)+" ")]):e._e(),r("b-link",{staticClass:"govuk-button m-0",attrs:{to:"/register"}},[e._v(e._s(e.$t("change"))+" ")])],1)],1):e._e(),e.$store.state.place.currentPlace.placeProviderId?e._e():r("b-container",{staticClass:"my-4"},[r("h2",[e._v("Čakáme, kým si odberné miesto vyberie naše super služby")]),r("p",[e._v(" Odberné miesto zatiaľ nie je registrované v našom registračnom systéme. Ak poznáte správcu tohto odberného miesta, prosím dajte mu vedieť o našich službách. ")]),r("b-link",{staticClass:"govuk-button",attrs:{to:"/registerPlaceProvider"}},[e._v("16 dôvodov prečo použiť náš rezervačný systém ")])],1),e.$store.state.place.currentPlace.placeProviderId?r("b-container",{staticClass:"my-4"},[r("h2",[e._v(e._s(e.$t("selectDayQuestion")))]),r("p",[e._v(" "+e._s(e.$t("selectDayHelp"))+" ")]),e.loading?r("b-container",[r("b-spinner"),e._v(" "+e._s(e.$t("loadingData"))+" ")],1):e._e(),e._l(e.$store.state.slot.slotsD,(function(t){return r("div",{key:t.slotId},[r("b-link",{staticClass:"govuk-button",attrs:{to:"/place/"+e.$route.params.placeId+"/"+t.slotId}},[e._v(e._s(e.$t("selectDayButtonText",{description:t.description,registrations:t.registrations}))+" ")])],1)}))],2):e._e()],1)},s=[],n=r("2f62");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={data:function(){return{loading:!0}},mounted:function(){var e=this;this.GetPlace({id:this.$route.params.placeId}).then((function(t){return e.setCurrentPlace(t),t})).then((function(t){return e.ReloadSlotsD({placeId:e.$route.params.placeId})})).then((function(t){e.loading=!1}))},methods:c(c(c({},Object(n["c"])({setCurrentPlace:"place/setCurrentPlace"})),Object(n["b"])({GetPlace:"place/GetPlace"})),Object(n["b"])({ReloadSlotsD:"slot/ReloadSlotsD",GetSlotD:"slot/GetSlotD"}))},p=i,u=r("2877"),d=Object(u["a"])(p,a,s,!1,null,null,null);t["default"]=d.exports}}]);