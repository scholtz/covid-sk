(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208a7b"],{a65e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("b-row",[r("b-col",[r("h1",[t._v(t._s(t.$t("registrationTitle")))]),r("p",[t._v(" "+t._s(t.$t("registrationHelp1"))+" ")])])],1)],1)],1),t.$store.state.place.currentPlace?r("div",{staticClass:"app-pane-blue py-4"},[r("b-container",[r("b-row",[r("b-col",[r("h2",[t._v(" "+t._s(t.$t("registrationYourSelection",{place:t.$store.state.place.currentPlace.name,day:t.$store.state.slot.slotDCurrent.description,time:t.$store.state.slot.slotMCurrent.description}))+" ")]),r("b-link",{staticClass:"m-0 btn btn-light",attrs:{to:"/place/"+t.$route.params.placeId+"/"+t.$route.params.dayId+"/"+t.$route.params.hourId}},[t._v(" "+t._s(t.$t("change"))+" ")])],1),t.$store.state.slot.product?r("b-col",[r("b-card",{staticClass:"mb-3",attrs:{"text-variant":"dark",title:t.$store.state.slot.product.product.name}},[t._v(" "+t._s(t.$store.state.slot.product.product.description)+" "),r("div",[t.$store.state.slot.product.customPrice?r("div",[t.$store.state.slot.product.price>0?r("div",[t._v(" Cena: "+t._s(t.$store.state.slot.product.price)+" "+t._s(t.$store.state.slot.product.priceCurrency)+" ")]):r("div",[t._v("Cena: Plne hradené poisťovňou")])]):r("div",[t.$store.state.slot.product.product.defaultPrice>0?r("div",[t._v(" Cena: "+t._s(t.$store.state.slot.product.product.defaultPrice)+" "+t._s(t.$store.state.slot.product.product.defaultPriceCurrency)+" ")]):r("div",[t._v("Cena: Plne hradené poisťovňou")])]),t.$store.state.slot.product.insuranceOnly?r("div",[t._v(" Túto službu môžeme poskytnúť iba poistencom ")]):t._e()])])],1):t._e()],1)],1)],1):t._e(),r("ValidationObserver",[r("b-container",{staticClass:"my-4"},[r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-form-group",{attrs:{label:t.$t("registrationFormTypeLabel")}},[r("b-form-radio",{attrs:{name:"person-type",value:"idcard"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormTypePersonalCard")))]),r("b-form-radio",{attrs:{name:"person-type",value:"child"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormTypePersonalChild")))]),r("b-form-radio",{attrs:{name:"person-type",value:"foreign"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormTypePersonalForeigner")))])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Meno",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"firstName-group-1",label:t.$t("registrationFormFirstName"),"label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstName",name:"firstName",state:t.getValidationState(e),"aria-describedby":"firstName-feedback","data-vv-as":"Name"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Priezvisko",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"lastName-group-1",label:t.$t("registrationFormLastName"),"label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",name:"lastName",state:t.getValidationState(e),"aria-describedby":"lastName-feedback","data-vv-as":"Priezvisko"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),"idcard"===t.personType||"child"===t.personType?r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Rodné číslo",rules:{required:!0,rc:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"rc-group-1",label:"idcard"===t.personType?t.$t("registrationFormPersonalNumber"):t.$t("registrationFormPersonalNumberChild"),"label-for":"rc"}},[r("b-form-input",{attrs:{id:"rc",name:"rc",state:t.getValidationState(e),"aria-describedby":"rc-feedback","data-vv-as":"Rodné číslo"},model:{value:t.rc,callback:function(e){t.rc=e},expression:"rc"}}),r("b-form-invalid-feedback",{attrs:{id:"rc-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,3497701477)})],1):r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Číslo cestovného dokladu",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"passport-group-1",label:t.$t("registrationFormPassport"),"label-for":"passport"}},[r("b-form-input",{attrs:{id:"passport",name:"passport",state:t.getValidationState(e),"aria-describedby":"passport-feedback","data-vv-as":"Číslo cestovného dokladu"},model:{value:t.passport,callback:function(e){t.passport=e},expression:"passport"}}),r("b-form-invalid-feedback",{attrs:{id:"passport-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"12"}},[r("validation-provider",{attrs:{name:"Adresa",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"address-group-1",label:t.$t("registrationFormAddress"),"label-for":"address"}},[r("b-form-input",{attrs:{id:"address",name:"address",state:t.getValidationState(e),"aria-describedby":"address-feedback"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),r("b-form-invalid-feedback",{attrs:{id:"address-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Telefón",rules:{required:!0,phone:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"phone-group-1",label:t.$t("registrationFormMobile"),"label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",name:"phone",state:t.getValidationState(e),"aria-describedby":"phone-feedback"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),r("b-form-invalid-feedback",{attrs:{id:"phone-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"email-group-1",label:t.$t("registrationFormEmail"),"label-for":"email"}},[r("b-form-input",{attrs:{id:"email",name:"email",state:t.getValidationState(e),"aria-describedby":"email-feedback"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("label",{attrs:{for:"insurance"}},[t._v(t._s(t.$t("registrationFormInsurance")))]),r("b-form-select",{attrs:{options:t.insuranceOptions,id:"insurance"},model:{value:t.insurance,callback:function(e){t.insurance=e},expression:"insurance"}})],1)],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("p",[t._v(" "+t._s(t.$t("registrationBottomHelp1"))+" ")]),r("p",[t._v(" "+t._s(t.$t("registrationBottomHelp2"))+" ")]),r("p",[r("b-form-checkbox",{attrs:{id:"gdpr"},model:{value:t.gdpr,callback:function(e){t.gdpr=e},expression:"gdpr"}},[t._v(" "+t._s(t.$t("registrationFormGDPR"))+" ")])],1),r("b-button",{attrs:{disabled:!t.gdpr,variant:"primary"},on:{click:t.registerForTest}},[t._v(" "+t._s(t.$t("registrationFormButton"))+" ")])],1)],1)],1)],1)],1)},s=[],o=r("039f"),n=r("70d1"),i=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t){var e=0;try{if(0==t.length)return!1;if(t.length<9)throw 1;var r=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),s=parseInt(t.substr(4,2),10);if(9==t.length&&r<54)return!0;var o=0;10==t.length&&(o=parseInt(t.substr(9,1)));var n=parseInt(t.substr(0,9))%11;if(10==n&&(n=0),n!=o)throw 1;r+=r<54?2e3:1900,a>70&&r>2003?a-=70:a>50?a-=50:a>20&&r>2003&&(a-=20);var i=new Date;if(r+e>i.getFullYear())throw 1;if(0==a)throw 1;if(a>12)throw 1;if(0==s)throw 1;if(s>31)throw 1}catch(l){return!1}return!0}Object(o["localize"])("sk",n),Object(o["extend"])("rc",{validate:function(t){return u(t)}}),Object(o["extend"])("phone",{validate:function(t){var e=t.replace(/\s+|\s+/g,"");if("+"!==e.substr(0,1))return!1;if(e=e.substr(1),421==e.substr(0,3)){var r=e.match(/^\d{12}$/);return r}if(420==e.substr(0,3)){var a=e.match(/^\d{12}$/);return a}if(43==e.substr(0,2)){var s=e.match(/^\d{11}$/);return s}var o=e.match(/^\d{11}$/);return o}});var p={components:{ValidationProvider:o["ValidationProvider"],ValidationObserver:o["ValidationObserver"]},data:function(){return{personType:"idcard",passport:"",rc:"",firstName:"",lastName:"",address:"",email:"@",phone:"+421",insurance:"25",gdpr:!1,insuranceOptions:[{value:"24",text:"Dôvera"},{value:"25",text:"VšZP"},{value:"27",text:"Union"},{value:"98",text:this.$t("registrationFormInsuranceEU")},{value:"99",text:this.$t("registrationFormInsuranceForeigner")}]}},mounted:function(){var t=this;if(!this.$store.state.slot||!this.$store.state.slot.product||!this.$store.state.slot.product.product||!this.$store.state.slot.product.product.name)return console.log("this.$store.state.slot",this.$store.state.slot),void this.$router.push("/place/"+this.$route.params.placeId);this.GetPlace({id:this.$route.params.placeId}).then((function(t){return t})).then((function(e){return t.setCurrentPlace(e),e})).then((function(e){return t.GetSlotD({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId}).then((function(e){t.setSlotDCurrent(e)})),e})).then((function(e){return t.GetSlotH({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId,hourSlotId:t.$route.params.hourId}).then((function(e){return t.setSlotHCurrent(e)}))})).then((function(e){return t.GetSlotM({placeId:t.$route.params.placeId,hourSlotId:t.$route.params.hourId,minuteSlotId:t.$route.params.minuteId}).then((function(e){return console.log("r2",e,{placeId:t.$route.params.placeId,hourSlotId:t.$route.params.hourId,minuteSlotId:t.$route.params.minuteId}),t.setSlotMCurrent(e)}))}))},methods:d(d(d(d({},Object(i["c"])({setCurrentPlace:"place/setCurrentPlace",setSlotDCurrent:"slot/setSlotDCurrent",setSlotHCurrent:"slot/setSlotHCurrent",setSlotMCurrent:"slot/setSlotMCurrent"})),Object(i["b"])({GetPlace:"place/GetPlace"})),Object(i["b"])({GetSlotD:"slot/GetSlotD",GetSlotH:"slot/GetSlotH",GetSlotM:"slot/GetSlotM",ReloadSlotsM:"slot/ReloadSlotsM",Register:"slot/Register"})),{},{registerForTest:function(){var t=this,e=this;this.Register({personType:this.personType,passport:this.passport,rc:this.rc,firstName:this.firstName,lastName:this.lastName,address:this.address,email:this.email,phone:this.phone,insurance:this.insurance,chosenSlot:this.$route.params.minuteId,chosenPlaceId:this.$route.params.placeId,product:this.$store.state.slot.product.id}).then((function(r){r&&e.$router.push("/place/".concat(t.$route.params.placeId,"/").concat(t.$route.params.dayId,"/").concat(t.$route.params.hourId,"/").concat(t.$route.params.minuteId,"/done"))}))},getValidationState:function(t){var e=t.dirty,r=t.validated,a=t.valid,s=void 0===a?null:a;return e||r?s:null}})},m=p,b=r("2877"),f=Object(b["a"])(m,a,s,!1,null,null,null);e["default"]=f.exports}}]);