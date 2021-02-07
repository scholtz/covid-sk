(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c17eb6ae"],{2593:function(t){t.exports=JSON.parse('{"code":"en","messages":{"alpha":"The {_field_} field may only contain alphabetic characters","alpha_num":"The {_field_} field may only contain alpha-numeric characters","alpha_dash":"The {_field_} field may contain alpha-numeric characters as well as dashes and underscores","alpha_spaces":"The {_field_} field may only contain alphabetic characters as well as spaces","between":"The {_field_} field must be between {min} and {max}","confirmed":"The {_field_} field confirmation does not match","digits":"The {_field_} field must be numeric and exactly contain {length} digits","dimensions":"The {_field_} field must be {width} pixels by {height} pixels","email":"The {_field_} field must be a valid email","excluded":"The {_field_} field is not a valid value","ext":"The {_field_} field is not a valid file","image":"The {_field_} field must be an image","integer":"The {_field_} field must be an integer","length":"The {_field_} field must be {length} long","max_value":"The {_field_} field must be {max} or less","max":"The {_field_} field may not be greater than {length} characters","mimes":"The {_field_} field must have a valid file type","min_value":"The {_field_} field must be {min} or more","min":"The {_field_} field must be at least {length} characters","numeric":"The {_field_} field may only contain numeric characters","oneOf":"The {_field_} field is not a valid value","regex":"The {_field_} field format is invalid","required_if":"The {_field_} field is required","required":"The {_field_} field is required","size":"The {_field_} field size must be less than {size}KB","double":"The {_field_} field must be a valid decimal"}}')},"720d":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("fffb");e.load=a.load,e.getInstance=a.getInstance;var s=r("b3e0");e.ReCaptchaInstance=s.ReCaptchaInstance},a65e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("b-row",[r("b-col",[r("h1",[t._v(t._s(t.$t("registrationTitle")))]),r("p",[t._v(" "+t._s(t.$t("registrationHelp1"))+" ")])])],1)],1)],1),t.$store.state.place.currentPlace?r("div",{staticClass:"app-pane-blue py-4"},[r("b-container",[r("b-row",[r("b-col",[r("h2",[t._v(" "+t._s(t.$t("registrationYourSelection",{place:t.$store.state.place.currentPlace.name,day:t.$store.state.slot.slotDCurrent.description,time:t.$store.state.slot.slotMCurrent.description}))+" ")]),r("div",{staticClass:"m-0 btn btn-light",on:{click:t.SaveAndGoBack}},[t._v(" "+t._s(t.$t("change"))+" ")])]),t.$store.state.slot.product&&t.$store.state.slot.product.product?r("b-col",[r("b-card",{staticClass:"mb-3",attrs:{"text-variant":"dark",title:t.$store.state.slot.product.product.name}},[t._v(" "+t._s(t.$store.state.slot.product.product.description)+" "),r("div",[t.$store.state.slot.product.customPrice?r("div",[t.$store.state.slot.product.price>0?r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(t.$store.state.slot.product.price)+" "+t._s(t.$store.state.slot.product.priceCurrency)+" ")]):r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(t.$t("selectDayPaidByInsurance"))+" ")])]):r("div",[t.$store.state.slot.product.product.defaultPrice>0?r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(t.$store.state.slot.product.product.defaultPrice)+" "+t._s(t.$store.state.slot.product.product.defaultPriceCurrency)+" ")]):r("div",[t._v(" "+t._s(t.$t("selectDayPrice"))+": "+t._s(t.$t("selectDayPaidByInsurance"))+" ")])]),t.$store.state.slot.product.insuranceOnly?r("div",[t._v(" "+t._s(t.$t("selectDayOnlyForInsured"))+" ")]):t._e()])])],1):t._e()],1)],1)],1):t._e(),r("ValidationObserver",[r("b-container",{staticClass:"my-4"},[t.$store.state.place.currentPlace&&t.limitReached?r("b-row",[r("b-col",[r("div",{staticClass:"alert alert-danger my-4"},[t._v(" "+t._s(t.$t("registrationLimitReached"))+" ")])])],1):t._e(),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-form-group",{attrs:{label:t.$t("registrationFormTypeLabel")}},[r("b-form-radio",{attrs:{name:"person-type",value:"idcard"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormTypePersonalCard")))]),r("b-form-radio",{attrs:{name:"person-type",value:"child"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormTypePersonalChild")))]),r("b-form-radio",{attrs:{name:"person-type",value:"foreign"},model:{value:t.personType,callback:function(e){t.personType=e},expression:"personType"}},[t._v(t._s(t.$t("registrationFormTypePersonalForeigner")))])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("validation-provider",{ref:"vpFirstName",attrs:{name:t.$t("registrationFormFirstName"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"firstName-group-1",label:t.$t("registrationFormFirstName"),"label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstName",name:"firstName",state:t.getValidationState(e),"aria-describedby":"firstName-feedback","data-vv-as":"Name"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("validation-provider",{ref:"vpLastName",attrs:{name:t.$t("registrationFormLastName"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"lastName-group-1",label:t.$t("registrationFormLastName"),"label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",name:"lastName",state:t.getValidationState(e),"aria-describedby":"lastName-feedback","data-vv-as":"Priezvisko"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),"idcard"===t.personType||"child"===t.personType?r("b-col",{attrs:{cols:"12",lg:"2",md:"4"}},[r("validation-provider",{ref:"vpPersonalNumber",attrs:{name:"idcard"===t.personType?t.$t("registrationFormPersonalNumber"):t.$t("registrationFormPersonalNumberChild"),rules:{required:!0,rc:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"rc-group-1",label:"idcard"===t.personType?t.$t("registrationFormPersonalNumber"):t.$t("registrationFormPersonalNumberChild"),"label-for":"rc"}},[r("b-form-input",{attrs:{id:"rc",name:"rc",state:t.getValidationState(e),"aria-describedby":"rc-feedback","data-vv-as":"Rodné číslo"},model:{value:t.rc,callback:function(e){t.rc=e},expression:"rc"}}),r("b-form-invalid-feedback",{attrs:{id:"rc-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,3497701477)})],1):r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{ref:"vpPassport",attrs:{name:t.$t("registrationFormPassport"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"passport-group-1",label:t.$t("registrationFormPassport"),"label-for":"passport"}},[r("b-form-input",{attrs:{id:"passport",name:"passport",state:t.getValidationState(e),"aria-describedby":"passport-feedback","data-vv-as":"Číslo cestovného dokladu"},model:{value:t.passport,callback:function(e){t.passport=e},expression:"passport"}}),r("b-form-invalid-feedback",{attrs:{id:"passport-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{ref:"vpBirthDay",attrs:{name:t.$t("registrationFormDay"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"birthDayDay-group-1",label:t.$t("registrationFormBirthDayDay"),"label-for":"birthDayDay"}},[r("b-form-input",{attrs:{id:"birthDayDay",name:"birthDayDay",type:"number",min:"1",max:"31",state:t.getValidationState(e),"aria-describedby":"birthDayDay-feedback","data-vv-as":t.$t("registrationFormBirthDayDay")},model:{value:t.birthday.day,callback:function(e){t.$set(t.birthday,"day",e)},expression:"birthday.day"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{ref:"vpBirthMonth",attrs:{name:t.$t("registrationFormBirthDayMonth"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"birthDayMonth-group-1",label:t.$t("registrationFormBirthDayMonth"),"label-for":"birthDayMonth"}},[r("b-form-input",{attrs:{id:"birthDayMonth",name:"birthDayMonth",type:"number",min:"1",max:"12",state:t.getValidationState(e),"aria-describedby":"birthDayMonth-feedback"},model:{value:t.birthday.month,callback:function(e){t.$set(t.birthday,"month",e)},expression:"birthday.month"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{ref:"vpBirthYear",attrs:{name:t.$t("registrationFormBirthDayYear"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"birthDayYear-group-1",label:t.$t("registrationFormBirthDayYear"),"label-for":"birthDayYearh"}},[r("b-form-input",{attrs:{id:"birthDayYear",name:"birthDayYear",type:"number",min:"1900",max:"2021",state:t.getValidationState(e),"aria-describedby":"birthDayYear-feedback"},model:{value:t.birthday.year,callback:function(e){t.$set(t.birthday,"year",e)},expression:"birthday.year"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("validation-provider",{ref:"vpStreet",attrs:{name:t.$t("registrationFormAddressStreet"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"street-group-1",label:t.$t("registrationFormAddressStreet"),"label-for":"street"}},[r("b-form-input",{attrs:{id:"street",name:"street",state:t.getValidationState(e),"aria-describedby":"street-feedback"},model:{value:t.address.street,callback:function(e){t.$set(t.address,"street",e)},expression:"address.street"}}),r("b-form-invalid-feedback",{attrs:{id:"address-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"1"}},[r("validation-provider",{ref:"vpStreetNo",attrs:{name:t.$t("registrationFormAddressStreetNo"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"streetNo-group-1",label:t.$t("registrationFormAddressStreetNo"),"label-for":"streetNo"}},[r("b-form-input",{attrs:{id:"streetNo",name:"streetNo",state:t.getValidationState(e),"aria-describedby":"streetNo-feedback"},model:{value:t.address.streetNo,callback:function(e){t.$set(t.address,"streetNo",e)},expression:"address.streetNo"}}),r("b-form-invalid-feedback",{attrs:{id:"streetNo-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"2"}},[r("validation-provider",{ref:"vpZIP",attrs:{name:t.$t("registrationFormAddressZIP"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"zip-group-1",label:t.$t("registrationFormAddressZIP"),"label-for":"zip"}},[r("b-form-input",{attrs:{id:"zip",name:"zip",state:t.getValidationState(e),"aria-describedby":"zip-feedback"},model:{value:t.address.zip,callback:function(e){t.$set(t.address,"zip",e)},expression:"address.zip"}}),r("b-form-invalid-feedback",{attrs:{id:"zip-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"3"}},[r("validation-provider",{ref:"vpCity",attrs:{name:t.$t("registrationFormAddressCity"),rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"city-group-1",label:t.$t("registrationFormAddressCity"),"label-for":"city"}},[r("b-form-input",{attrs:{id:"city",name:"city",state:t.getValidationState(e),"aria-describedby":"city-feedback"},model:{value:t.address.city,callback:function(e){t.$set(t.address,"city",e)},expression:"address.city"}}),r("b-form-invalid-feedback",{attrs:{id:"city-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{ref:"vpMobile",attrs:{name:t.$t("registrationFormMobile"),rules:{required:!0,phone:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"phone-group-1",label:t.$t("registrationFormMobile"),"label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",name:"phone",state:t.getValidationState(e),"aria-describedby":"phone-feedback"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),r("b-form-invalid-feedback",{attrs:{id:"phone-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),r("b-col",{attrs:{cols:"12",md:"4"}},[r("validation-provider",{ref:"vpEmail",attrs:{name:t.$t("registrationFormEmail"),rules:"email"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-form-group",{attrs:{id:"email-group-1",label:t.$t("registrationFormEmail"),"label-for":"email"}},[r("b-form-input",{attrs:{id:"email",name:"email",state:t.getValidationState(e),"aria-describedby":"email-feedback"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t.$store.state.slot.product&&t.$store.state.slot.product.product&&t.$store.state.slot.product.product.collectInsurance?r("b-col",{attrs:{cols:"12",md:"4"}},[r("label",{attrs:{for:"insurance"}},[t._v(t._s(t.$t("registrationFormInsurance")))]),r("b-form-select",{attrs:{options:t.insuranceOptions,id:"insurance"},model:{value:t.insurance,callback:function(e){t.insurance=e},expression:"insurance"}})],1):t._e()],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("p",[t._v(" "+t._s(t.$t("registrationBottomHelp1"))+" ")]),r("p",[t._v(" "+t._s(t.$t("registrationBottomHelp2"))+" ")]),t.$store.state.slot.product&&t.$store.state.slot.product.product&&t.$store.state.slot.product.product.schoolOnly?r("p",[r("b-form-checkbox",{attrs:{id:"school"},model:{value:t.school,callback:function(e){t.school=e},expression:"school"}},[t._v(" Som zákonným zástupcom žiaka, ktorý sa zúčastňuje prezenčnej výuky v škole ")])],1):t._e(),r("p",[r("b-form-checkbox",{attrs:{id:"gdpr"},model:{value:t.gdpr,callback:function(e){t.gdpr=e},expression:"gdpr"}},[t._v(" "+t._s(t.$t("registrationFormGDPR"))+" ")])],1),t.$store.state.slot.product&&t.$store.state.slot.product.product?r("b-button",{attrs:{disabled:!t.gdpr||t.processing||t.$store.state.slot.product.product.schoolOnly&&!t.school,variant:"primary"},on:{click:t.registerForTest}},[t._v(" "+t._s(t.$t("registrationFormButton"))+" "),t.processing?r("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):t._e()],1):t._e()],1)],1)],1)],1)],1)},s=[],i=r("720d"),o=r("039f"),n=r("70d1"),l=r("2593"),d=r("2f62"),c=r("c1df"),u=r.n(c);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t){var e=0;try{if(0==t.length)return!1;if(t.length<9)throw 1;var r=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),s=parseInt(t.substr(4,2),10);if(9==t.length&&r<54)return!0;var i=0;10==t.length&&(i=parseInt(t.substr(9,1)));var o=parseInt(t.substr(0,9))%11;if(10==o&&(o=0),o!=i)throw 1;r+=r<54?2e3:1900,a>70&&r>2003?a-=70:a>50?a-=50:a>20&&r>2003&&(a-=20);var n=new Date;if(r+e>n.getFullYear())throw 1;if(0==a)throw 1;if(a>12)throw 1;if(0==s)throw 1;if(s>31)throw 1}catch(l){return!1}return!0}Object(o["localize"])("sk",n),Object(o["extend"])("rc",{validate:function(t){return m(t)}}),Object(o["extend"])("phone",{validate:function(t){var e=t.replace(/\s+|\s+/g,"");if(!e)return!1;if("+"!==e.substr(0,1))return!1;if(e=e.substr(1),421==e.substr(0,3)){var r=e.match(/^\d{12}$/);return r}if(420==e.substr(0,3)){var a=e.match(/^\d{12}$/);return a}if(43==e.substr(0,2)){var s=e.match(/^\d{11}$/);return s}var i=e.match(/^\d{11}$/);return i}});var b={components:{ValidationProvider:o["ValidationProvider"],ValidationObserver:o["ValidationObserver"]},computed:{locale:function(){return this.$i18n.locale},limitReached:function(){if(this.$store.state.slot.slotMCurrent.registrations>=this.$store.state.place.currentPlace.limitPer5MinSlot)return!0;if(!this.$store.state.slot.slotHCurrent)return!0;if(!this.$store.state.slot.slotHCurrent.description)return!0;if(this.$store.state.slot.slotHCurrent.registrations>=this.$store.state.place.currentPlace.limitPer1HourSlot)return!0;for(var t in this.$store.state.place.currentPlace.otherLimitations){var e=this.$store.state.place.currentPlace.otherLimitations[t],r=new Date(this.$store.state.slot.slotDCurrent.time),a=this.$store.state.slot.slotHCurrent.description.substr(0,2);if(r.setUTCHours(a-1),u()(e.from).isSameOrBefore(r)&&u()(e.until).isAfter(r)&&e.hourLimit<=this.$store.state.slot.slotHCurrent.registrations)return!0}return!1}},watch:{locale:function(){this.setLanguage()},rc:function(){if(this.rc&&this.rc.length>=9){if(this.birthday.day||(this.birthday.day=parseInt(this.rc.substr(4,2))),!this.birthday.month){var t=parseInt(this.rc.substr(2,2));t>50&&(t-=50),this.birthday.month=t}if(!this.birthday.year){var e=parseInt(this.rc.substr(0,2));e+=e>21?1900:2e3,this.birthday.year=e}this.$forceUpdate()}},gdpr:function(){this.gdpr&&this.validateForm()}},data:function(){return{processing:!1,school:!1,personType:"idcard",passport:"",rc:"",firstName:"",lastName:"",address:{street:"",streetNo:"",zip:"",city:""},birthday:{day:"",month:"",year:""},email:"@",phone:"+421",insurance:"25",gdpr:!1,insuranceOptions:[{value:"24",text:"Dôvera"},{value:"25",text:"VšZP"},{value:"27",text:"Union"},{value:"98",text:this.$t("registrationFormInsuranceEU")},{value:"99",text:this.$t("registrationFormInsuranceForeigner")}]}},mounted:function(){var t=this;this.$store.state.slot&&this.$store.state.slot.product&&this.$store.state.slot.product.product&&this.$store.state.slot.product.product.name||this.$route.params.productId&&this.ListPlaceProductByPlace({placeId:this.$route.params.placeId}).then((function(e){if(e){var r=e.find((function(e){return e.productId===t.$route.params.productId}));r?t.setProduct(r):t.$router.push("/place/"+t.$route.params.placeId)}else t.$router.push("/place/"+t.$route.params.placeId)})).catch((function(e){t.$router.push("/place/"+t.$route.params.placeId)})),this.GetPlace({id:this.$route.params.placeId}).then((function(t){return t})).then((function(e){return e&&t.setCurrentPlace(e),e})).then((function(e){return t.GetSlotD({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId}).then((function(e){e&&t.setSlotDCurrent(e)})),e})).then((function(e){return t.GetSlotH({placeId:t.$route.params.placeId,daySlotId:t.$route.params.dayId,hourSlotId:t.$route.params.hourId}).then((function(e){return t.setSlotHCurrent(e)}))})).then((function(e){return t.GetSlotM({placeId:t.$route.params.placeId,hourSlotId:t.$route.params.hourId,minuteSlotId:t.$route.params.minuteId}).then((function(e){return t.setSlotMCurrent(e)}))})),this.$store.state.slot.registrationAttempt&&(this.personType=this.$store.state.slot.registrationAttempt.personType,this.passport=this.$store.state.slot.registrationAttempt.passport,this.rc=this.$store.state.slot.registrationAttempt.rc,this.firstName=this.$store.state.slot.registrationAttempt.firstName,this.lastName=this.$store.state.slot.registrationAttempt.lastName,this.address.street=this.$store.state.slot.registrationAttempt.street,this.address.streetNo=this.$store.state.slot.registrationAttempt.streetNo,this.address.zip=this.$store.state.slot.registrationAttempt.zip,this.address.city=this.$store.state.slot.registrationAttempt.city,this.birthday={},this.birthday.day=this.$store.state.slot.registrationAttempt.birthDayDay,this.birthday.month=this.$store.state.slot.registrationAttempt.birthDayMonth,this.birthday.year=this.$store.state.slot.registrationAttempt.birthDayYear,this.email=this.$store.state.slot.registrationAttempt.email,this.phone=this.$store.state.slot.registrationAttempt.phone,this.insurance=this.$store.state.slot.registrationAttempt.insurance),this.personType||(this.personType="idcard"),this.insurance||(this.insurance="25"),this.phone||(this.phone="+421"),this.email||(this.email="@"),this.setLanguage()},methods:f(f(f(f(f({},Object(d["c"])({setRegistrationAttempt:"slot/setRegistrationAttempt"})),Object(d["c"])({setCurrentPlace:"place/setCurrentPlace",setSlotDCurrent:"slot/setSlotDCurrent",setSlotHCurrent:"slot/setSlotHCurrent",setSlotMCurrent:"slot/setSlotMCurrent",setProduct:"slot/setProduct"})),Object(d["b"])({GetPlace:"place/GetPlace"})),Object(d["b"])({GetSlotD:"slot/GetSlotD",GetSlotH:"slot/GetSlotH",GetSlotM:"slot/GetSlotM",ReloadSlotsM:"slot/ReloadSlotsM",Register:"slot/Register",ListPlaceProductByPlace:"placeProvider/ListPlaceProductByPlace"})),{},{SaveAndGoBack:function(){this.saveData(),this.$router.push("/place/".concat(this.$route.params.placeId,"/"))},saveData:function(){var t={personType:this.personType,passport:this.passport,rc:this.rc,firstName:this.firstName,lastName:this.lastName,street:this.address.street,streetNo:this.address.streetNo,zip:this.address.zip,city:this.address.city,email:this.email,phone:this.phone,insurance:this.insurance,chosenSlot:this.$route.params.minuteId,chosenPlaceId:this.$route.params.placeId,product:this.$store.state.slot.product.id,address:this.address.street+" "+this.address.streetNo+", "+this.address.zip+" "+this.address.city};this.birthday&&(t.birthDayDay=this.birthday.day,t.birthDayMonth=this.birthday.month,t.birthDayYear=this.birthday.year),this.setRegistrationAttempt(t)},registerForTest:function(){var t=this,e=this;this.processing=!0,Object(i["load"])(this.$store.state.config.SITE_KEY).then((function(r){r.execute("submit").then((function(r){if(r){"foreign"==t.personType?t.rc="":t.passport="";var a={personType:t.personType,passport:t.passport,rc:t.rc,firstName:t.firstName,lastName:t.lastName,street:t.address.street,streetNo:t.address.streetNo,zip:t.address.zip,city:t.address.city,email:t.email,phone:t.phone,insurance:t.insurance,chosenSlot:t.$route.params.minuteId,chosenPlaceId:t.$route.params.placeId,birthDayDay:t.birthday.day,birthDayMonth:t.birthday.month,birthDayYear:t.birthday.year,product:t.$store.state.slot.product.id,address:t.address.street+" "+t.address.streetNo+", "+t.address.zip+" "+t.address.city,token:r};t.setRegistrationAttempt(a),t.Register(a).then((function(r){t.processing=!1,r&&(t.setRegistrationAttempt({}),e.$router.push("/place/".concat(t.$route.params.placeId,"/").concat(t.$route.params.dayId,"/").concat(t.$route.params.hourId,"/").concat(t.$route.params.minuteId,"/done")))}))}else t.processing=!1}))}))},getValidationState:function(t){var e=t.dirty,r=t.validated,a=t.valid,s=void 0===a?null:a;return e||r?s:null},setLanguage:function(){"en"==this.$i18n.locale||"en-US"==this.$i18n.locale?Object(o["localize"])("en",l):Object(o["localize"])("sk",n)},validateForm:function(){var t=this;this.$refs["vpLastName"].validate().then((function(e){return t.$refs["vpFirstName"].validate()})).then((function(e){return t.$refs["vpBirthDay"].validate()})).then((function(e){return t.$refs["vpBirthMonth"].validate()})).then((function(e){return t.$refs["vpBirthYear"].validate()})).then((function(e){return t.$refs["vpStreet"].validate()})).then((function(e){return t.$refs["vpStreetNo"].validate()})).then((function(e){return t.$refs["vpZIP"].validate()})).then((function(e){return t.$refs["vpCity"].validate()})).then((function(e){return t.$refs["vpMobile"].validate()})).then((function(e){return t.$refs["vpEmail"].validate()})).then((function(e){return"foreign"===t.personType?t.$refs["vpPassport"].validate():t.$refs["vpPersonalNumber"].validate()}))}})},y=b,v=r("2877"),g=Object(v["a"])(y,a,s,!1,null,null,null);e["default"]=g.exports},b3e0:function(t,e,r){"use strict";var a=this&&this.__awaiter||function(t,e,r,a){function s(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{l(a.next(t))}catch(e){i(e)}}function n(t){try{l(a["throw"](t))}catch(e){i(e)}}function l(t){t.done?r(t.value):s(t.value).then(o,n)}l((a=a.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,a,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function n(t){return function(e){return l([t,e])}}function l(i){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,a&&(s=2&i[0]?a["return"]:i[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;switch(a=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(n){i=[6,n],a=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,r){this.siteKey=t,this.recaptchaID=e,this.recaptcha=r,this.styleContainer=null}return t.prototype.execute=function(t){return a(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.recaptcha.execute(this.recaptchaID,{action:t})]}))}))},t.prototype.getSiteKey=function(){return this.siteKey},t.prototype.hideBadge=function(){null===this.styleContainer&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{display:none !important;}",document.head.appendChild(this.styleContainer))},t.prototype.showBadge=function(){null!==this.styleContainer&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},t}();e.ReCaptchaInstance=i},fffb:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=r("b3e0");(function(t){t[t["NOT_LOADED"]=0]="NOT_LOADED",t[t["LOADING"]=1]="LOADING",t[t["LOADED"]=2]="LOADED"})(a||(a={}));var i=function(){function t(){}return t.load=function(e,r){if(void 0===r&&(r={}),"undefined"===typeof document)return Promise.reject(new Error("This is a library for the browser!"));if(t.getLoadingState()===a.LOADED)return t.instance.getSiteKey()===e?Promise.resolve(t.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(t.getLoadingState()===a.LOADING)return e!==t.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise((function(e,r){t.successfulLoadingConsumers.push((function(t){return e(t)})),t.errorLoadingRunnable.push((function(t){return r(t)}))}));t.instanceSiteKey=e,t.setLoadingState(a.LOADING);var i=new t;return new Promise((function(o,n){i.loadScript(e,r.useRecaptchaNet||!1,r.renderParameters?r.renderParameters:{},r.customUrl).then((function(){t.setLoadingState(a.LOADED);var n=i.doExplicitRender(grecaptcha,e,r.explicitRenderParameters?r.explicitRenderParameters:{}),l=new s.ReCaptchaInstance(e,n,grecaptcha);t.successfulLoadingConsumers.forEach((function(t){return t(l)})),t.successfulLoadingConsumers=[],r.autoHideBadge&&l.hideBadge(),t.instance=l,o(l)})).catch((function(e){t.errorLoadingRunnable.forEach((function(t){return t(e)})),t.errorLoadingRunnable=[],n(e)}))}))},t.getInstance=function(){return t.instance},t.setLoadingState=function(e){t.loadingState=e},t.getLoadingState=function(){return null===t.loadingState?a.NOT_LOADED:t.loadingState},t.prototype.loadScript=function(e,r,s,i){var o=this;void 0===r&&(r=!1),void 0===s&&(s={}),void 0===i&&(i="");var n=document.createElement("script");n.setAttribute("recaptcha-v3-script","");var l="https://www.google.com/recaptcha/api.js";r&&(l="https://recaptcha.net/recaptcha/api.js"),i&&(l=i),s.render&&(s.render=void 0);var d=this.buildQueryString(s);return n.src=l+"?render=explicit"+d,new Promise((function(e,r){n.addEventListener("load",o.waitForScriptToLoad((function(){e(n)})),!1),n.onerror=function(e){t.setLoadingState(a.NOT_LOADED),r(e)},document.head.appendChild(n)}))},t.prototype.buildQueryString=function(t){var e=Object.keys(t);return e.length<1?"":"&"+Object.keys(t).filter((function(e){return!!t[e]})).map((function(e){return e+"="+t[e]})).join("&")},t.prototype.waitForScriptToLoad=function(e){var r=this;return function(){void 0===window.grecaptcha?setTimeout((function(){r.waitForScriptToLoad(e)}),t.SCRIPT_LOAD_DELAY):window.grecaptcha.ready((function(){e()}))}},t.prototype.doExplicitRender=function(t,e,r){var a={sitekey:e,badge:r.badge,size:r.size,tabindex:r.tabindex};return r.container?t.render(r.container,a):t.render(a)},t.loadingState=null,t.instance=null,t.instanceSiteKey=null,t.successfulLoadingConsumers=[],t.errorLoadingRunnable=[],t.SCRIPT_LOAD_DELAY=25,t}();e.load=i.load,e.getInstance=i.getInstance}}]);