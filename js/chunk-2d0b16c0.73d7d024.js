(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b16c0"],{"207c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"app-pane-lgray py-2"},[a("b-container",{attrs:{fluid:""}},[a("h1",[e._v(" "+e._s(e.$t("navBarAdminManagePlace"))+": "),e.placePrivider?a("span",[e._v(e._s(e.placePrivider.companyName))]):e._e()])])],1),e.loading?a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-spinner",{attrs:{label:"Loading..."}})],1)],1)],1):e._e(),e.loading?e._e():a("b-container",{attrs:{fluid:""}},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[a("b-tab",{attrs:{title:e.$t("adminPlaceManagement")}},[e.$store.state.place.places?a("div",[a("b-table",{attrs:{items:Object.values(e.$store.state.place.places),fields:e.fields},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[a("b-button",{staticClass:"mr-1",attrs:{variant:"light",title:e.$t("adminPlaceManagementEdit"),size:"sm"},on:{click:function(a){return e.editPlaceClick(t)}}},[a("font-awesome-icon",{staticClass:"m-1",attrs:{icon:"edit"}})],1),a("b-button",{staticClass:"mr-1",attrs:{variant:"light",title:e.$t("adminPlaceManagementDelete"),size:"sm"},on:{click:function(a){return e.deletePlaceClick(t)}}},[a("font-awesome-icon",{staticClass:"m-1",attrs:{icon:"trash"}})],1)]}}],null,!1,701637045)})],1):e._e()]),a("b-tab",{attrs:{title:e.$t("adminPlaceManagementForm"),active:""}},[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.clickCreate(t)}}},[e.place.id?a("h2",[e._v(e._s(e.$t("adminPlaceManagementEditPlace")))]):a("h2",[e._v(e._s(e.$t("adminPlaceManagementNewPlace")))]),a("b-row",[a("b-col",{attrs:{cols:"12",md:"6"}},[a("label",{attrs:{for:"name"}},[e._v(e._s(e.$t("adminPlaceManagementName")))]),a("b-input",{ref:"name",attrs:{id:"name"},model:{value:e.place.name,callback:function(t){e.$set(e.place,"name",t)},expression:"place.name"}})],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("label",{attrs:{for:"address"}},[e._v(e._s(e.$t("adminPlaceManagementAddress")))]),a("b-input",{ref:"address",attrs:{id:"address"},model:{value:e.place.address,callback:function(t){e.$set(e.place,"address",t)},expression:"place.address"}})],1),a("b-col",{attrs:{cols:"12",md:"12"}},[a("label",{attrs:{for:"description"}},[e._v(e._s(e.$t("adminPlaceManagementDescription")))]),a("b-input",{ref:"description",attrs:{id:"description"},model:{value:e.place.description,callback:function(t){e.$set(e.place,"description",t)},expression:"place.description"}})],1),a("b-col",{attrs:{cols:"12",md:"12"}},[a("label",{attrs:{for:"oversight"}},[e._v(e._s(e.$t("adminPlaceManagementGarant")))]),a("b-input",{ref:"oversight",attrs:{id:"oversight"},model:{value:e.oversight,callback:function(t){e.oversight=t},expression:"oversight"}})],1),a("b-col",{attrs:{cols:"12",md:"2"}},[a("label",{attrs:{for:"queue"}},[e._v(e._s(e.$t("adminPlaceManagementQueue")))]),a("b-input",{ref:"queue",attrs:{type:"time",id:"queue",step:"2"},model:{value:e.place.queue,callback:function(t){e.$set(e.place,"queue",t)},expression:"place.queue"}})],1),a("b-col",{attrs:{cols:"12",md:"2"}},[a("label",{attrs:{for:"queueLastUpdate"}},[e._v(e._s(e.$t("adminPlaceManagementQueueLastUpdate")))]),a("VueCtkDateTimePicker",{ref:"queueLastUpdate",attrs:{id:"queueLastUpdate"},model:{value:e.place.queueLastUpdate,callback:function(t){e.$set(e.place,"queueLastUpdate",t)},expression:"place.queueLastUpdate"}})],1),a("b-col",{attrs:{cols:"12",md:"2"}},[a("label",{attrs:{for:"lat"}},[e._v(e._s(e.$t("adminPlaceManagementLat")))]),a("b-input",{ref:"lat",attrs:{id:"lat"},model:{value:e.place.lat,callback:function(t){e.$set(e.place,"lat",t)},expression:"place.lat"}})],1),a("b-col",{attrs:{cols:"12",md:"2"}},[a("label",{attrs:{for:"lng"}},[e._v(e._s(e.$t("adminPlaceManagementLng")))]),a("b-input",{ref:"lng",attrs:{id:"lng"},model:{value:e.place.lng,callback:function(t){e.$set(e.place,"lng",t)},expression:"place.lng"}})],1),a("b-col",{attrs:{cols:"12",md:"2"}},[a("label",{attrs:{for:"limitPer5MinSlot"}},[e._v(e._s(e.$t("adminPlaceManagementLimitPer5MinSlot")))]),a("b-input",{ref:"limitPer5MinSlot",attrs:{id:"limitPer5MinSlot"},model:{value:e.place.limitPer5MinSlot,callback:function(t){e.$set(e.place,"limitPer5MinSlot",t)},expression:"place.limitPer5MinSlot"}})],1),a("b-col",{attrs:{cols:"12",md:"2"}},[a("label",{attrs:{for:"limitPer1HourSlot"}},[e._v(e._s(e.$t("adminPlaceManagementLimitPer1HourSlot")))]),a("b-input",{ref:"limitPer1HourSlot",attrs:{id:"limitPer1HourSlot"},model:{value:e.place.limitPer1HourSlot,callback:function(t){e.$set(e.place,"limitPer1HourSlot",t)},expression:"place.limitPer1HourSlot"}})],1)],1),a("b-row",{staticClass:"py-2"},[a("b-col",[a("b-form-checkbox",{attrs:{id:"isVisible",name:"isVisible"},model:{value:e.place.isVisible,callback:function(t){e.$set(e.place,"isVisible",t)},expression:"place.isVisible"}},[e._v(" "+e._s(e.$t("adminPlaceManagementIsVisible"))+" ")])],1),a("b-col",[a("b-form-checkbox",{attrs:{id:"isVisibleOnlyForAuthorized",name:"isVisibleOnlyForAuthorized"},model:{value:e.place.isVisibleOnlyForAuthorized,callback:function(t){e.$set(e.place,"isVisibleOnlyForAuthorized",t)},expression:"place.isVisibleOnlyForAuthorized"}},[e._v(" "+e._s(e.$t("adminPlaceManagementIsVisibleOnlyForAuthorized"))+" ")])],1),a("b-col",[a("b-form-checkbox",{attrs:{id:"isDriveIn",name:"isDriveIn"},model:{value:e.place.isDriveIn,callback:function(t){e.$set(e.place,"isDriveIn",t)},expression:"place.isDriveIn"}},[e._v(" "+e._s(e.$t("adminPlaceManagementIsDriveIn"))+" ")])],1),a("b-col",[a("b-form-checkbox",{attrs:{id:"isWalkIn",name:"isWalkIn"},model:{value:e.place.isWalkIn,callback:function(t){e.$set(e.place,"isWalkIn",t)},expression:"place.isWalkIn"}},[e._v(" "+e._s(e.$t("adminPlaceManagementIsWalkIn"))+" ")])],1),a("b-col",[a("b-form-checkbox",{attrs:{id:"hasReservationSystem",name:"hasReservationSystem"},model:{value:e.place.hasReservationSystem,callback:function(t){e.$set(e.place,"hasReservationSystem",t)},expression:"place.hasReservationSystem"}},[e._v(" "+e._s(e.$t("adminPlaceManagementHasReservationSystem"))+" ")])],1),a("b-col",[a("b-form-checkbox",{attrs:{id:"requiresRegistration",name:"requiresRegistration"},model:{value:e.place.requiresRegistration,callback:function(t){e.$set(e.place,"requiresRegistration",t)},expression:"place.requiresRegistration"}},[e._v(" "+e._s(e.$t("adminPlaceManagementRequiresRegistration"))+" ")])],1)],1),e.place.hasReservationSystem?e._e():a("b-row",{staticClass:"py-2"},[a("b-col",[a("label",{attrs:{for:"externalReservationSystem"}},[e._v(e._s(e.$t("adminPlaceManagementOpeningHoursTitle")))]),a("b-input",{ref:"externalReservationSystem",attrs:{id:"externalReservationSystem"},model:{value:e.place.externalReservationSystem,callback:function(t){e.$set(e.place,"externalReservationSystem",t)},expression:"place.externalReservationSystem"}})],1)],1),a("b-row",[a("b-col",{staticClass:"py-2"},[a("h4",[e._v(" "+e._s(e.$t("adminPlaceManagementOpeningHoursTitle"))+" ")])])],1),a("b-row",[a("b-col",[a("label",{attrs:{for:"openingHoursWorkDay"}},[e._v(e._s(e.$t("adminPlaceManagementOpeningHoursWorkDay")))]),a("b-input",{ref:"openingHoursWorkDay",attrs:{id:"openingHoursWorkDay",placeholder:"08:00-16:00"},model:{value:e.place.openingHoursWorkDay,callback:function(t){e.$set(e.place,"openingHoursWorkDay",t)},expression:"place.openingHoursWorkDay"}})],1),a("b-col",[a("label",{attrs:{for:"openingHoursOther1"}},[e._v(e._s(e.$t("adminPlaceManagementOpeningHoursOther1")))]),a("b-input",{ref:"openingHoursOther1",attrs:{id:"openingHoursOther1"},model:{value:e.place.openingHoursOther1,callback:function(t){e.$set(e.place,"openingHoursOther1",t)},expression:"place.openingHoursOther1"}})],1),a("b-col",[a("label",{attrs:{for:"openingHoursOther2"}},[e._v(e._s(e.$t("adminPlaceManagementOpeningHoursOther2")))]),a("b-input",{ref:"openingHoursOther2",attrs:{id:"openingHoursOther2"},model:{value:e.place.openingHoursOther2,callback:function(t){e.$set(e.place,"openingHoursOther2",t)},expression:"place.openingHoursOther2"}})],1)],1),a("b-row",[a("b-col",[e._v(" "+e._s(e.$t("adminPlaceManagementOpeningHoursNote"))+" ")])],1),a("b-row",[a("b-col",[a("label",{attrs:{for:"picture1"}},[e._v(e._s(e.$t("adminPlaceManagementPicture1")))]),a("b-input",{ref:"picture1",attrs:{id:"picture1"},model:{value:e.place.picture1,callback:function(t){e.$set(e.place,"picture1",t)},expression:"place.picture1"}})],1),a("b-col",[a("label",{attrs:{for:"picture2"}},[e._v(e._s(e.$t("adminPlaceManagementPicture2")))]),a("b-input",{ref:"picture2",attrs:{id:"picture2"},model:{value:e.place.picture2,callback:function(t){e.$set(e.place,"picture2",t)},expression:"place.picture2"}})],1),a("b-col",[a("label",{attrs:{for:"picture3"}},[e._v(e._s(e.$t("adminPlaceManagementPicture3")))]),a("b-input",{ref:"picture3",attrs:{id:"picture3"},model:{value:e.place.picture3,callback:function(t){e.$set(e.place,"picture3",t)},expression:"place.picture3"}})],1)],1),a("b-row",[a("b-col",[a("label",{attrs:{for:"supportName"}},[e._v(e._s(e.$t("ppSupportName")))]),a("b-input",{ref:"supportName",attrs:{id:"supportName"},model:{value:e.place.supportName,callback:function(t){e.$set(e.place,"supportName",t)},expression:"place.supportName"}})],1),a("b-col",[a("label",{attrs:{for:"supportEmail"}},[e._v(e._s(e.$t("ppSupportEmail")))]),a("b-input",{ref:"supportEmail",attrs:{id:"supportEmail"},model:{value:e.place.supportEmail,callback:function(t){e.$set(e.place,"supportEmail",t)},expression:"place.supportEmail"}})],1),a("b-col",[a("label",{attrs:{for:"supportPhone"}},[e._v(e._s(e.$t("ppSupportPhone")))]),a("b-input",{ref:"supportPhone",attrs:{id:"supportPhone"},model:{value:e.place.supportPhone,callback:function(t){e.$set(e.place,"supportPhone",t)},expression:"place.supportPhone"}})],1)],1),a("b-row",[e.place.id?a("button",{staticClass:"btn btn-primary my-4",attrs:{type:"submit"}},[e._v(" "+e._s(e.$t("adminPlaceManagementEdit"))+" "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[a("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]):e._e(),e.place.id?a("b-button",{staticClass:"btn btn-light p-2 m-4",on:{click:e.clickCancel}},[e._v(" "+e._s(e.$t("adminPlaceManagementCancelEditting"))+" ")]):a("button",{staticClass:"btn btn-primary my-4",attrs:{type:"submit"}},[e._v(" "+e._s(e.$t("adminPlaceManagementCreate"))+" "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[a("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1)],1)],1)],1)],1)],1)],1)},l=[],i=a("2f62"),n=a("e30a"),r=a.n(n);a("b40d");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={components:{VueCtkDateTimePicker:r.a},data:function(){return{loading:!0,oversight:"",place:{id:"",name:"",description:"",address:"",queue:"00:00",queueLastUpdate:"",lat:48.289218275462225,lng:17.272996902465824,isDriveIn:!1,isWalkIn:!1,limitPer5MinSlot:5,limitPer1HourSlot:40,openingHoursWorkDay:"08:00-12:00, 13:00-18:00",openingHoursOther1:"",openingHoursOther2:"",hasPCRTestFree:!1,hasPCRTestSelf:!1,hasPCRTestSelfPrice:50,hasPCRTestSelfPriceCurrency:"EUR",hasAntTestFree:!0,hasAntTestSelf:!1,hasAntTestSelfPrice:5,hasAntTestSelfPriceCurrency:"EUR",hasVaccineFree:!1,picture1:"",picture2:"",picture3:"",hasReservationSystem:!0,requiresRegistration:!1},currencies:["EUR","CZK","USD"],tabIndex:0,fields:[{label:this.$t("selectPlaceAction"),key:"id"},{label:this.$t("selectPlacePlaceName"),key:"name",sortable:!0},{label:this.$t("selectPlaceRegistrations"),key:"registrations",sortable:!0},{label:this.$t("selectPlaceStatsHealthy"),key:"healthy",sortable:!0},{label:this.$t("selectPlaceStatsSick"),key:"sick",sortable:!0}]}},computed:{placePrivider:function(){var e=this;return this.$store.state.placeProvider.places?this.$store.state.placeProvider.places.find((function(t){return t.placeProviderId===e.pp})):{}},pp:function(){return this.$store.state?this.$store.state.user.tokenData.pp:""},places:function(){return this.$store.state.place.places}},watch:{places:function(){console.log("places",this.$store.state.place.places,Object.values(this.$store.state.place.places).length,this.$store.state.place.places&&Object.values(this.$store.state.place.places).length>0),this.$store.state.place.places&&Object.values(this.$store.state.place.places).length>0?this.tabIndex=0:this.tabIndex=1,this.loading=!1},tabIndex:function(e){var t=this;1===e&&setTimeout((function(){t.$refs.name.focus()}),0)}},mounted:function(){var e=this;this.ListPrivate(),this.ReloadPlaces().then((function(t){t&&e.$store.state.place.places&&Object.values(e.$store.state.place.places).length>0?e.tabIndex=0:e.tabIndex=1,e.loading=!1}))},methods:o(o(o({},Object(i["b"])({ReloadPlaces:"place/ReloadPrivatePlaces",InsertOrUpdate:"place/InsertOrUpdate",Delete:"place/Delete",ListPrivate:"placeProvider/ListPrivate"})),Object(i["b"])({openSuccess:"snackbar/openSuccess"})),{},{deletePlaceClick:function(e){var t,a,s=this;confirm("Naozaj chcete vymazať miesto?")&&(null!==(t=e.item)&&void 0!==t&&t.id&&this.Delete({id:null===(a=e.item)||void 0===a?void 0:a.id}).then((function(e){s.ReloadPlaces().then((function(t){console.log("r",e,t),s.tabIndex=0}))})))},clickCreate:function(){var e=this;console.log("this.place",this.place),this.place.medicalOversight=[{id:"1",name:this.oversight}],this.InsertOrUpdate({place:this.place}).then((function(t){t&&(e.openSuccess("Uložené"),e.tabIndex=0),e.ReloadPlaces().then((function(e){console.log("r",e)}))}))},editPlaceClick:function(e){this.place=JSON.parse(JSON.stringify(e.item)),this.place&&this.place.medicalOversight&&this.place.medicalOversight.length>0?this.oversight=this.place.medicalOversight[0].name:this.oversight="",console.log("place",this.place),this.tabIndex=1},clickCancel:function(){this.place.id="",this.tabIndex=0}})},d=u,m=a("2877"),b=Object(m["a"])(d,s,l,!1,null,null,null);t["default"]=b.exports}}]);