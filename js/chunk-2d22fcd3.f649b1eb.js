(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fcd3"],{ea23:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",[r("h1",[t._v(t._s(t.$t("selectDayTitle")))])])],1)],1)],1),t.$store.state.place.currentPlace?r("div",{staticClass:"py-4"},[r("b-container",{attrs:{fluid:t.$store.state.place.currentPlace.placeProviderId}},[r("b-row",[r("b-col",[r("b-card",{staticClass:"m-3"},[r("h2",[t._v(" "+t._s(t.$t("selectDayYourSelection",{place:t.$store.state.place.currentPlace.name}))+" ")]),r("p",[t._v(" "+t._s(t.$t("selectDayAddress"))+": "+t._s(t.$store.state.place.currentPlace.address)+" ")]),t.gpsLink?r("p",[t._v(" "+t._s(t.$t("selectDayGPS"))+": "),r("a",{attrs:{href:t.gpsLink,target:"_blank"}},[t._v(" "+t._s(t.$t("selectDayLat"))+": "+t._s(t._f("formatGps")(t.$store.state.place.currentPlace.lat))+" "+t._s(t.$t("selectDayLng"))+": "+t._s(t._f("formatGps")(t.$store.state.place.currentPlace.lng))+" ")])]):t._e(),r("p",[t._v(" "+t._s(t.$t("selectDayDriveThrough"))+": "),t.$store.state.place.currentPlace.isDriveIn?r("b",[t._v(t._s(t.$t("yes")))]):r("b",[t._v(t._s(t.$t("no")))]),r("br"),t._v(" "+t._s(t.$t("selectDayWalkIn"))+": "),t.$store.state.place.currentPlace.isWalkIn?r("b",[t._v(t._s(t.$t("yes")))]):r("b",[t._v(t._s(t.$t("no")))])]),r("p",[t._v(" "+t._s(t.$t("selectDayLimits"))+": "),r("b",[t._v(t._s(t.$store.state.place.currentPlace.limitPer5MinSlot))]),t._v(" / "+t._s(t.$t("selectDay5Min"))+", "),r("b",[t._v(t._s(t.$store.state.place.currentPlace.limitPer1HourSlot))]),t._v(" / "+t._s(t.$t("selectDay1Hour"))+" ")]),r("p",[t._v(" "+t._s(t.$t("hasReservationSystem"))+": "),t.$store.state.place.currentPlace.hasReservationSystem||t.$store.state.place.currentPlace.externalReservationSystem?r("b",[t._v(t._s(t.$t("yes")))]):r("b",[t._v(t._s(t.$t("no")))]),t.$store.state.place.currentPlace.externalReservationSystem?r("a",{staticClass:"btn btn-primary m-2",attrs:{href:t.$store.state.place.currentPlace.externalReservationSystem}},[t._v(" "+t._s(t.$store.state.place.currentPlace.externalReservationSystem)+" ")]):t._e(),r("br"),t._v(" "+t._s(t.$t("registrationIsRequired"))+": "),t.$store.state.place.currentPlace.hasReservationSystem?r("b",[t._v(t._s(t.$t("yes")))]):r("b",[t._v(t._s(t.$t("no")))])]),t.$store.state.place.currentPlace.description?r("p",[t._v(" "+t._s(t.$t("selectDayDescription"))+": "+t._s(t.$store.state.place.currentPlace.description)+" ")]):t._e(),r("b-link",{staticClass:"btn btn-light my-3",attrs:{to:"/register"}},[t._v(t._s(t.$t("change"))+" ")]),t.$store.state.place.currentPlace.picture1?r("p",[r("img",{staticClass:"w-100",attrs:{src:t.$store.state.place.currentPlace.picture1,alt:"First picture"}})]):t._e(),t.$store.state.place.currentPlace.picture2?r("p",[r("img",{staticClass:"w-100",attrs:{src:t.$store.state.place.currentPlace.picture2,alt:"Second picture"}})]):t._e(),t.$store.state.place.currentPlace.picture3?r("p",[r("img",{staticClass:"w-100",attrs:{src:t.$store.state.place.currentPlace.picture3,alt:"Third picture"}})]):t._e()],1)],1),this.products?r("b-col",t._l(this.products,(function(e){return r("div",{key:e.id},[r("b-card",{staticClass:"m-3",attrs:{"header-bg-variant":"dark","header-text-variant":"light","text-variant":"dark",title:e.product.name}},[r("b-form-radio",{attrs:{name:"selectedProduct",value:e.product.id},model:{value:t.selectedProduct,callback:function(e){t.selectedProduct=e},expression:"selectedProduct"}},[t._v(" "+t._s(e.product.description)+" "),r("div",[e.customPrice?r("div",[e.price>0?r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(e.price)+" "+t._s(e.priceCurrency)+" ")]):r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(t.$t("selectDayPaidByInsurance"))+" ")])]):r("div",[e.product.defaultPrice>0?r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(e.product.defaultPrice)+" "+t._s(e.product.defaultPriceCurrency)+" ")]):r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(t.$t("selectDayPaidByInsurance"))+" ")])]),e.insuranceOnly?r("div",[t._v(" "+t._s(t.$t("selectDayOnlyForInsured"))+" ")]):t._e()]),t.$store.state.place.currentPlace.placeProviderId&&!t.selectedProduct?r("span",{staticClass:"btn btn-primary",on:{click:function(r){t.selectedProduct=e.product.id}}},[t._v(" "+t._s(t.$t("selectDaySelectService"))+" ")]):t._e()])],1)],1)})),0):t._e(),t.products?t._e():r("b-col",[t.$store.state.place.currentPlace.placeProviderId?t._e():r("b-container",{staticClass:"my-4"},[r("h2",[t._v("Čakáme, kým si odberové miesto vyberie naše služby")]),r("p",[t._v(" Odberové miesto zatiaľ nie je registrované v našom registračnom systéme. Ak poznáte správcu tohto odberového miesta, prosím dajte mu vedieť o našich službách. ")]),r("b-link",{staticClass:"btn btn-primary",attrs:{to:"/registerPlaceProvider"}},[t._v("16 dôvodov prečo použiť náš rezervačný systém ")])],1)],1),t.$store.state.place.currentPlace.placeProviderId&&t.selectedProduct?r("b-col",{attrs:{md:"7"}},[r("b-card",{staticClass:"m-3",attrs:{"bg-variant":t.dayVariant,"text-variant":t.dayVariantText}},[r("h2",[t._v(t._s(t.$t("selectDayQuestion")))]),t.hoursLoaded?t._e():r("p",[t._v(" "+t._s(t.$t("selectDayHelp"))+" ")]),t.loading?r("b-container",[r("b-spinner"),t._v(" "+t._s(t.$t("loadingData"))+" ")],1):t._e(),t._l(t.$store.state.slot.slotsD,(function(e){return r("span",{key:e.slotId},[r("span",{staticClass:"btn m-1",class:t.day&&t.day===e.slotId?"btn-primary":"btn-light",attrs:{title:t.$t("selectDayButtonText",{description:e.description,registrations:e.registrations})},on:{click:function(r){return t.dayClicked(e)}}},[t._v(t._s(e.description)+" "),r("div",{staticStyle:{"font-size":"smaller"}},[t._v(" ("+t._s(e.registrations)+") ")])])])}))],2),t.hoursLoaded?r("b-card",{staticClass:"m-3",attrs:{"bg-variant":t.hourVariant,"text-variant":t.hourVariantText}},[r("h2",[t._v(t._s(t.$t("selectHourQuestion")))]),t.minutesLoaded?t._e():r("p",[t._v(" "+t._s(t.$t("selectHourHelp"))+" ")]),t.loadingHours?r("b-container",[r("b-spinner"),t._v(" "+t._s(t.$t("loadingData"))+" ")],1):t._e(),t._l(t.$store.state.slot.slotsH,(function(e){return r("span",{key:e.from},[r("span",{staticClass:"btn m-1",class:t.hourButtonStyle(e),attrs:{disabled:t.hourDisabled(e),title:t.$t("selectHourButtonText",{description:e.description,registrations:e.registrations})},on:{click:function(r){return t.hourClicked(e)}}},[t._v(" "+t._s(e.description)+" "),r("div",{staticStyle:{"font-size":"smaller"}},[t._v(" ("+t._s(e.registrations)+") ")])])])}))],2):t._e(),t.minutesLoaded?r("b-card",{staticClass:"m-3",attrs:{"bg-variant":t.minutesVariant,"text-variant":t.minutesVariantText}},[r("h2",[t._v(t._s(t.$t("selectMinuteQuestion")))]),r("p",[t._v(" "+t._s(t.$t("selectMinuteHelp"))+" ")]),t._l(t.$store.state.slot.slotsM,(function(e){return r("span",{key:e.slotId},[r("b-link",{staticClass:"btn btn-light m-1",class:{"bg-danger":e.registrations>=t.$store.state.place.currentPlace.limitPer5MinSlot},attrs:{disabled:e.registrations>=t.$store.state.place.currentPlace.limitPer5MinSlot,to:"/place/"+t.$route.params.placeId+"/"+t.day+"/"+t.hour+"/"+e.slotId,title:t.$t("selectMinuteButtonText",{description:e.description,registrations:e.registrations})}},[t._v(" "+t._s(e.description)+" "),r("div",{staticStyle:{"font-size":"smaller"}},[t._v(" ("+t._s(e.registrations)+") ")])])],1)}))],2):t._e()],1):t._e()],1)],1)],1):t._e()])},a=[],i=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={data:function(){return{loading:!0,loadingHours:!1,hoursLoaded:!1,loadingMinutes:!1,minutesLoaded:!1,products:[],day:null,hour:null,selectedProduct:null,dayVariant:"primary",dayVariantText:"white",hourVariant:"primary",hourVariantText:"white",minutesVariant:"primary",minutesVariantText:"white"}},watch:{selectedProduct:function(){var t=this;this.selectedProduct&&this.setProduct(this.products.find((function(e){return e.product.id===t.selectedProduct})))}},computed:{gpsLink:function(){if(!this.$store||!this.$store.state||!this.$store.state.place||!this.$store.state.place.currentPlace||!this.$store.state.place.currentPlace.lat)return"";var t="http://www.google.com/maps/place/".concat(this.$store.state.place.currentPlace.lat,",").concat(this.$store.state.place.currentPlace.lng);return t}},mounted:function(){var t=this;this.setSlotsH([]),this.GetPlace({id:this.$route.params.placeId}).then((function(e){if(e)return t.setCurrentPlace(e),e})).then((function(e){if(e)return!!t.$store.state.place.currentPlace.placeProviderId&&t.ReloadSlotsD({placeId:t.$route.params.placeId})})).then((function(e){if(e)return t.ListPlaceProductByPlace({placeId:t.$route.params.placeId})})).then((function(e){if(t.products=e,1==t.products.length)for(var r in t.products)t.selectedProduct=t.products[r].product.id;t.loading=!1}))},methods:o(o(o({},Object(i["c"])({setCurrentPlace:"place/setCurrentPlace",setSlotDCurrent:"slot/setSlotDCurrent",setSlotsH:"slot/setSlotsH",setSlotsM:"slot/setSlotsM",setProduct:"slot/setProduct"})),Object(i["b"])({GetPlace:"place/GetPlace",ListPlaceProductByPlace:"placeProvider/ListPlaceProductByPlace",GetSlotD:"slot/GetSlotD",ReloadSlotsD:"slot/ReloadSlotsD",ReloadSlotsH:"slot/ReloadSlotsH",ReloadSlotsM:"slot/ReloadSlotsM"})),{},{dayClicked:function(t){var e=this;this.loadingHours=!0,this.hoursLoaded=!1,this.minutesLoaded=!1,this.setSlotsH([]),this.ReloadSlotsH({placeId:this.$route.params.placeId,daySlotId:t.slotId}).then((function(r){r&&(e.day=t.slotId,e.loadingHours=!1,e.hoursLoaded=!0,e.dayVariant="white",e.dayVariantText="dark",e.hourVariant="primary",e.hourVariantText="white")}))},hourClicked:function(t){var e=this;this.hourDisabled(t)||(this.loadingMinutes=!0,this.minutesLoaded=!1,this.setSlotsM([]),this.ReloadSlotsM({placeId:this.$route.params.placeId,daySlotId:t.daySlotId,hourSlotId:t.slotId}).then((function(r){r&&(e.hour=t.slotId,e.loadingMinutes=!1,e.minutesLoaded=!0,e.dayVariant="white",e.dayVariantText="dark",e.hourVariant="white",e.hourVariantText="dark",e.minuteVariant="primary",e.minuteVariantText="white")})))},hourButtonStyle:function(t){return t?t&&t.registrations>=this.$store.state.place.currentPlace.limitPer1HourSlot?"bg-danger":this.hour&&this.hour===t.slotId?"btn-primary":"btn-light":"bg-danger"},hourDisabled:function(t){return!t||t.registrations>=this.$store.state.place.currentPlace.limitPer1HourSlot}})},u=l,d=r("2877"),p=Object(d["a"])(u,s,a,!1,null,null,null);e["default"]=p.exports}}]);