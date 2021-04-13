(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72919a4a"],{"0c54":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[t._v(t._s(t.$t("registrationFormNewVisitorRegistration")))])])],1),r("ValidationObserver",[r("b-container",{staticClass:"my-4"},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.registerForTest(e)}}},[t.$store.state.config.INSURED_ONLY?t._e():r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-form-group",{attrs:{label:t.$t("registrationFormNewVisitorIdentification")}},[r("b-form-radio",{attrs:{name:"person-type",value:"idcard"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormAdultWithIdentityCard")))]),r("b-form-radio",{attrs:{name:"person-type",value:"child"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormChildRegistration")))]),r("b-form-radio",{attrs:{name:"person-type",value:"foreign"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormForeigner")))])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{attrs:{name:"Meno",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"firstName-group-1",label:t.$t("registrationFormFirstname"),"label-for":"firstName"}},[r("b-form-input",{ref:"firstName",attrs:{id:"firstName",name:"firstName",state:t.getValidationState(e),"aria-describedby":"firstName-feedback","data-vv-as":"Name",required:"",autofocus:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4",lg:"3"}},[r("validation-provider",{attrs:{name:"Priezvisko",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"lastName-group-1",label:t.$t("registrationFormLastname"),"label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",name:"lastName",state:t.getValidationState(e),"aria-describedby":"lastName-feedback","data-vv-as":"Priezvisko",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),"idcard"===t.personType||"child"===t.personType?r("b-col",{attrs:{cols:"12",md:"4",lg:"3"}},[r("validation-provider",{attrs:{name:"Rodné číslo",rules:{required:!0,rc:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"rc-group-1",label:"idcard"===t.personType?t.$store.state.config.RC_IS_INSURANCE?t.$t("registrationFormRcNumberIns"):t.$t("registrationFormRcNumber"):t.$store.state.config.RC_IS_INSURANCE?t.$t("registrationFormRcNumberChildIns"):t.$t("registrationFormRcNumberChild"),"label-for":"rc"}},[r("b-form-input",{attrs:{id:"rc",name:"rc",state:t.getValidationState(e),"aria-describedby":"rc-feedback","data-vv-as":"Rodné číslo",required:""},model:{value:t.rc,callback:function(e){t.rc=e},expression:"rc"}}),r("b-form-invalid-feedback",{attrs:{id:"rc-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2868555632)})],1):r("b-col",{attrs:{cols:"12",lg:"3",sm:"4"}},[r("validation-provider",{attrs:{name:"Číslo cestovného dokladu",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"passport-group-1",label:t.$t("registrationFormPassportNumber"),"label-for":"passport"}},[r("b-form-input",{attrs:{id:"passport",name:"passport",state:t.getValidationState(e),"aria-describedby":"passport-feedback","data-vv-as":"Číslo cestovného dokladu",required:""},model:{value:t.passport,callback:function(e){t.passport=e},expression:"passport"}}),r("b-form-invalid-feedback",{attrs:{id:"passport-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{attrs:{name:"Deň narodenia",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"birthDayDay-group-1",label:t.$t("registrationFormBirthDayDay"),"label-for":"birthDayDay"}},[r("b-form-input",{attrs:{id:"birthDayDay",name:"birthDayDay",type:"number",min:"1",max:"31",state:t.getValidationState(e),"aria-describedby":"birthDayDay-feedback","data-vv-as":"Priezvisko",required:""},model:{value:t.birthday.day,callback:function(e){t.$set(t.birthday,"day",e)},expression:"birthday.day"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{attrs:{name:"Mesiac narodenia",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"birthDayMonth-group-1",label:t.$t("registrationFormBirthDayMonth"),"label-for":"birthDayMonth"}},[r("b-form-input",{attrs:{id:"birthDayMonth",name:"birthDayMonth",type:"number",min:"1",max:"12",state:t.getValidationState(e),"aria-describedby":"birthDayMonth-feedback",required:""},model:{value:t.birthday.month,callback:function(e){t.$set(t.birthday,"month",e)},expression:"birthday.month"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{attrs:{name:"Rok narodenia",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"birthDayYear-group-1",label:t.$t("registrationFormBirthDayYear"),"label-for":"birthDayYearh"}},[r("b-form-input",{attrs:{id:"birthDayYear",name:"birthDayYear",type:"number",min:"1900",max:"2021",state:t.getValidationState(e),"aria-describedby":"birthDayYear-feedback",required:""},model:{value:t.birthday.year,callback:function(e){t.$set(t.birthday,"year",e)},expression:"birthday.year"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("validation-provider",{attrs:{name:"Adresa - Ulica",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"street-group-1",label:t.$t("registrationFormAddressStreet"),"label-for":"street"}},[r("b-form-input",{attrs:{id:"street",name:"street",state:t.getValidationState(e),"aria-describedby":"street-feedback",required:""},model:{value:t.address.street,callback:function(e){t.$set(t.address,"street",e)},expression:"address.street"}}),r("b-form-invalid-feedback",{attrs:{id:"address-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"1"}},[r("validation-provider",{attrs:{name:"Číslo",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"streetNo-group-1",label:t.$t("registrationFormAddressStreetNo"),"label-for":"streetNo"}},[r("b-form-input",{attrs:{id:"streetNo",name:"streetNo",state:t.getValidationState(e),"aria-describedby":"streetNo-feedback",required:""},model:{value:t.address.streetNo,callback:function(e){t.$set(t.address,"streetNo",e)},expression:"address.streetNo"}}),r("b-form-invalid-feedback",{attrs:{id:"streetNo-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"2"}},[r("validation-provider",{attrs:{name:"PSČ",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"zip-group-1",label:t.$t("registrationFormAddressZIP"),"label-for":"zip"}},[r("b-form-input",{attrs:{id:"zip",name:"zip",state:t.getValidationState(e),"aria-describedby":"zip-feedback",required:""},model:{value:t.address.zip,callback:function(e){t.$set(t.address,"zip",e)},expression:"address.zip"}}),r("b-form-invalid-feedback",{attrs:{id:"zip-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"3"}},[r("validation-provider",{attrs:{name:"city",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"city-group-1",label:t.$t("registrationFormAddressCity"),"label-for":"city"}},[r("b-form-input",{attrs:{id:"city",name:"city",state:t.getValidationState(e),"aria-describedby":"city-feedback",required:""},model:{value:t.address.city,callback:function(e){t.$set(t.address,"city",e)},expression:"address.city"}}),r("b-form-invalid-feedback",{attrs:{id:"city-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Telefón",rules:{required:!0,phone:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"phone-group-1",label:t.$t("registrationFormPhoneNumberFull"),"label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",name:"phone",state:t.getValidationState(e),"aria-describedby":"phone-feedback",required:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),r("b-form-invalid-feedback",{attrs:{id:"phone-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"email-group-1",label:t.$t("registrationFormEmail"),"label-for":"email"}},[r("b-form-input",{attrs:{id:"email",name:"email",type:"email",state:t.getValidationState(e),"aria-describedby":"email-feedback",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("label",{attrs:{for:"insurance"}},[t._v(t._s(t.$t("registrationFormInsurance")))]),r("b-form-select",{attrs:{options:t.$store.state.insurance.list,id:"insurance"},model:{value:t.insurance,callback:function(e){t.insurance=e},expression:"insurance"}})],1)],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"submit"}},[t._v(" "+t._s(t.$t("registrationFormRegisterOrEditClient"))+" ")]),t.privateKey&&!t.loadQR?r("button",{staticClass:"btn btn-primary",on:{click:function(e){t.loadQR=!0}}},[t._v(" "+t._s(t.$t("registrationFormLoadQR"))+" ")]):t._e()])],1),t.privateKey&&t.loadQR?r("b-row",[r("b-col",[r("qrcode-stream",{on:{decode:t.onDecodeQR}}),r("button",{staticClass:"btn btn-primary",on:{click:function(e){t.loadQR=!1}}},[t._v(" "+t._s(t.$t("registrationFormTurnOffCamera"))+" ")])],1)],1):t._e()],1)],1)],1)],1)},s=[],i=r("4a59"),o=i["a"],n=r("2877"),d=Object(n["a"])(o,a,s,!1,null,null,null);e["default"]=d.exports},"4a59":function(t,e,r){"use strict";(function(t){var a=r("bb6f"),s=r("4273"),i=r.n(s),o=r("039f"),n=r("70d1"),d=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){var e=0;try{if(0==t.length)return!1;if(t.length<9)throw 1;var r=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),s=parseInt(t.substr(4,2),10);if(9==t.length&&r<54)return!0;var i=0;10==t.length&&(i=parseInt(t.substr(9,1)));var o=parseInt(t.substr(0,9))%11;if(10==o&&(o=0),o!=i)throw 1;r+=r<54?2e3:1900,a>70&&r>2003?a-=70:a>50?a-=50:a>20&&r>2003&&(a-=20);var n=new Date;if(r+e>n.getFullYear())throw 1;if(0==a)throw 1;if(a>12)throw 1;if(0==s)throw 1;if(s>31)throw 1}catch(d){return!1}return!0}Object(o["localize"])("sk",n),Object(o["extend"])("rc",{validate:function(t){return b(t)}}),Object(o["extend"])("phone",{validate:function(t){var e=t.replace(/\s+|\s+/g,"");if("+"!==e.substr(0,1))return!1;e=e.substr(1);var r=e.match(/^\d{12}$/);return r}}),e["a"]={components:{ValidationProvider:o["ValidationProvider"],ValidationObserver:o["ValidationObserver"],QrcodeStream:a["QrcodeStream"]},data:function(){return{loadQR:!1,privateKey:null,personType:"idcard",passport:"",rc:"",firstName:"",lastName:"",email:"@",phone:"+421",insurance:"25",address:{street:"",streetNo:"",zip:"",city:""},birthday:{day:"",month:"",year:""},gdpr:!1}},watch:{rc:function(){if(this.rc&&this.rc.length>=9){if(this.birthday.day||(this.birthday.day=parseInt(this.rc.substr(4,2))),!this.birthday.month){var t=parseInt(this.rc.substr(2,2));t>50&&(t-=50),this.birthday.month=t}if(!this.birthday.year){var e=parseInt(this.rc.substr(0,2));e+=e>21?1900:2e3,this.birthday.year=e}this.$forceUpdate()}},personType:function(){var t=this;setTimeout((function(){t.$refs.firstName.focus()}),0)}},mounted:function(){var e=this;this.GetPrivateKey().then((function(r){r&&(e.privateKey=t.from(r,"base64"))})),this.$store.state.result.lastVisitor&&(this.personType=this.$store.state.result.lastVisitor.personType,this.passport=this.$store.state.result.lastVisitor.passport,this.rc=this.$store.state.result.lastVisitor.rc,this.firstName=this.$store.state.result.lastVisitor.firstName,this.lastName=this.$store.state.result.lastVisitor.lastName,this.address=this.$store.state.result.lastVisitor.address,this.email=this.$store.state.result.lastVisitor.email,this.phone=this.$store.state.result.lastVisitor.phone,this.insurance=this.$store.state.result.lastVisitor.insurance,this.address={street:this.$store.state.result.lastVisitor.street,streetNo:this.$store.state.result.lastVisitor.streetNo,zip:this.$store.state.result.lastVisitor.zip,city:this.$store.state.result.lastVisitor.city},this.birthday={day:this.$store.state.result.lastVisitor.birthDayDay,month:this.$store.state.result.lastVisitor.birthDayMonth,year:this.$store.state.result.lastVisitor.birthDayYear}),this.personType||(this.personType="idcard"),this.insurance||(this.insurance="25"),this.phone||(this.phone="+421"),this.email||(this.email="@"),"CZ"===this.$store.state.config.COUNTRY&&("+421"===this.phone&&(this.phone="+420"),"25"===this.insurance&&(this.insurance="111"))},methods:c(c(c({},Object(d["c"])({setRegistration:"slot/setRegistration"})),Object(d["b"])({RegisterByManager:"slot/RegisterByManager",GetPrivateKey:"user/GetPrivateKey"})),{},{registerForTest:function(){var t=this,e=this;this.setRegistration({}),"foreign"==this.personType?this.rc="":this.passport="",this.RegisterByManager({personType:this.personType,passport:this.passport,rc:this.rc,firstName:this.firstName,lastName:this.lastName,address:this.address.street+" "+this.address.streetNo+", "+this.address.zip+" "+this.address.city,email:this.email,phone:this.phone,insurance:this.insurance,chosenSlot:this.$route.params.minuteId,chosenPlaceId:this.$route.params.placeId,birthDayDay:this.birthday.day,birthDayMonth:this.birthday.month,birthDayYear:this.birthday.year,street:this.address.street,streetNo:this.address.streetNo,zip:this.address.zip,city:this.address.city}).then((function(r){r&&e.$router.push("/tester/registeredVisitor/".concat(t.$store.state.slot.registration.id))}))},getValidationState:function(t){var e=t.dirty,r=t.validated,a=t.valid,s=void 0===a?null:a;return e||r?s:null},decryptR01Standard:function(t){this.loadQR=!1,this.personType=t.personType,this.rc=t.rc,this.passport=t.passport,this.firstName=t.firstName,this.lastName=t.lastName,this.address.street=t.street,this.address.streetNo=t.streetNo,this.address.zip=t.zip,this.address.city=t.city,this.email=t.email,this.phone=t.phone,this.insurance=t.insurance,this.birthday.day=t.birthDayDay,this.birthday.month=t.birthDayMonth,this.birthday.year=t.birthDayYear},decryptR01ECIESStandard:function(e){var r={iv:t.from(e.data.iv,"base64"),ciphertext:t.from(e.data.ct,"base64"),ephemPublicKey:t.from(e.data.epk,"base64"),mac:t.from(e.data.m,"base64")},a=this;i.a.decrypt(this.privateKey,r).then((function(t){var e=JSON.parse(t);"R01"===e.standard&&a.decryptR01Standard(e)}))},onDecodeQR:function(t){if(t){var e=JSON.parse(t);"R01ECIES"===e.standard?this.decryptR01ECIESStandard(e):"R01"===e.standard&&this.decryptR01Standard(e)}}})}}).call(this,r("1c35").Buffer)}}]);