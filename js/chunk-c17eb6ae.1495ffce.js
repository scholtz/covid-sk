(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c17eb6ae"],{2593:function(e){e.exports=JSON.parse('{"code":"en","messages":{"alpha":"The {_field_} field may only contain alphabetic characters","alpha_num":"The {_field_} field may only contain alpha-numeric characters","alpha_dash":"The {_field_} field may contain alpha-numeric characters as well as dashes and underscores","alpha_spaces":"The {_field_} field may only contain alphabetic characters as well as spaces","between":"The {_field_} field must be between {min} and {max}","confirmed":"The {_field_} field confirmation does not match","digits":"The {_field_} field must be numeric and exactly contain {length} digits","dimensions":"The {_field_} field must be {width} pixels by {height} pixels","email":"The {_field_} field must be a valid email","excluded":"The {_field_} field is not a valid value","ext":"The {_field_} field is not a valid file","image":"The {_field_} field must be an image","integer":"The {_field_} field must be an integer","length":"The {_field_} field must be {length} long","max_value":"The {_field_} field must be {max} or less","max":"The {_field_} field may not be greater than {length} characters","mimes":"The {_field_} field must have a valid file type","min_value":"The {_field_} field must be {min} or more","min":"The {_field_} field must be at least {length} characters","numeric":"The {_field_} field may only contain numeric characters","oneOf":"The {_field_} field is not a valid value","regex":"The {_field_} field format is invalid","required_if":"The {_field_} field is required","required":"The {_field_} field is required","size":"The {_field_} field size must be less than {size}KB","double":"The {_field_} field must be a valid decimal"}}')},"720d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReCaptchaInstance=t.getInstance=t.load=void 0;var a=r("fffb");Object.defineProperty(t,"load",{enumerable:!0,get:function(){return a.load}}),Object.defineProperty(t,"getInstance",{enumerable:!0,get:function(){return a.getInstance}});var s=r("b3e0");Object.defineProperty(t,"ReCaptchaInstance",{enumerable:!0,get:function(){return s.ReCaptchaInstance}})},a65e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("b-row",[r("b-col",[r("h1",[e._v(e._s(e.$t("registrationTitle")))]),r("p",[e._v(" "+e._s(e.$t("registrationHelp1"))+" ")])])],1)],1)],1),e.$store.state.place.currentPlace?r("div",{staticClass:"app-pane-blue py-4"},[r("b-container",[r("b-row",[r("b-col",[r("h2",[e._v(" "+e._s(e.$t("registrationYourSelection",{place:e.$store.state.place.currentPlace.name,day:e.$store.state.slot.slotDCurrent.description,time:e.$store.state.slot.slotMCurrent.description}))+" ")]),r("div",{staticClass:"m-0 btn btn-light",on:{click:e.SaveAndGoBack}},[e._v(" "+e._s(e.$t("change"))+" ")])]),e.$store.state.slot.product&&e.$store.state.slot.product.product?r("b-col",[r("b-card",{staticClass:"mb-3",attrs:{"text-variant":"dark",title:e.$store.state.slot.product.product.name}},[e._v(" "+e._s(e.$store.state.slot.product.product.description)+" "),r("div",[e.$store.state.slot.product.customPrice?r("div",[e.$store.state.slot.product.price>0?r("div",[e._v(" "+e._s(e.$t("selectDayPrice"))+": "+e._s(e.$store.state.slot.product.price)+" "+e._s(e.$store.state.slot.product.priceCurrency)+" ")]):r("div",[e._v(" "+e._s(e.$t("selectDayPrice"))+": "+e._s(e.$t("selectDayPaidByInsurance"))+" ")])]):r("div",[e.$store.state.slot.product.product.defaultPrice>0?r("div",[e._v(" "+e._s(e.$t("selectDayPrice"))+": "+e._s(e.$store.state.slot.product.product.defaultPrice)+" "+e._s(e.$store.state.slot.product.product.defaultPriceCurrency)+" ")]):r("div",[e._v(" "+e._s(e.$t("selectDayPrice"))+": "+e._s(e.$t("selectDayPaidByInsurance"))+" ")])]),e.$store.state.slot.product.insuranceOnly?r("div",[e._v(" "+e._s(e.$t("selectDayOnlyForInsured"))+" ")]):e._e()])])],1):e._e()],1)],1)],1):e._e(),e.showEmployerForm?r("b-container",{staticClass:"my-4"},[r("ValidationObserver",{ref:"formEmployer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("b-form",{on:{submit:function(t){return t.preventDefault(),a(e.registerForTestWithCompany)}}},[r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("validation-provider",{ref:"vpEmployeeNumber",attrs:{name:"Osobné číslo zamestnanca",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"employeeNumber-group-1",label:e.$t("registrationFormEmployeeID"),"label-for":"EmployeeNumber"}},[r("b-form-input",{ref:"employeeNumber",attrs:{id:"employeeNumber",name:"employeeNumber",state:e.getValidationState(t),"aria-describedby":"employeeNumber-feedback",required:"",autofocus:""},model:{value:e.employeeNumber,callback:function(t){e.employeeNumber=t},expression:"employeeNumber"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",md:"6"}},[r("validation-provider",{ref:"vpPass",attrs:{name:e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormEmployeePassIns"):e.$t("registrationFormEmployeePass"),rules:{required:!0,min:4}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"employeePass-group-1",label:e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormEmployeePassIns"):e.$t("registrationFormEmployeePass"),"label-for":"employeePass"}},[r("b-form-input",{attrs:{id:"employeePass",name:"employeePass",type:"password",state:e.getValidationState(t),"aria-describedby":"employeePass-feedback",required:""},model:{value:e.employeePass,callback:function(t){e.employeePass=t},expression:"employeePass"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12"}},[r("b-form-checkbox",{staticClass:"my-2",model:{value:e.gdpr,callback:function(t){e.gdpr=t},expression:"gdpr"}},[r("div",{domProps:{innerHTML:e._s(e.$t("registrationFormGDPRStatement",{company:e.$store.state.config.GDRP_SPROSTREDKOVATEL}))}})])],1),r("b-col",{attrs:{cols:"12"}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!e.gdpr}},[e._v(" "+e._s(e.$t("registrationFormRegisterOnDate"))+" "),e.processing?r("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1)])],1)],1)]}}],null,!1,733692870)})],1):r("b-container",{staticClass:"my-4"},[r("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("b-form",{on:{submit:function(t){return t.preventDefault(),a(e.registerForTest)}}},[e.$store.state.place.currentPlace&&e.limitReached?r("b-row",[r("b-col",[r("div",{staticClass:"alert alert-danger my-4"},[e._v(" "+e._s(e.$t("registrationLimitReached"))+" ")])])],1):e._e(),e.$store.state.config.INSURED_ONLY?e._e():r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-form-group",{attrs:{label:e.$t("registrationFormTypeLabel")}},[r("b-form-radio",{attrs:{name:"person-type",value:"idcard"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e.$store.state.config.RC_IS_INSURANCE?r("span",[e._v(" "+e._s(e.$t("registrationFormTypePersonalCardIns"))+" ")]):r("span",[e._v(" "+e._s(e.$t("registrationFormTypePersonalCard"))+" ")])]),r("b-form-radio",{attrs:{name:"person-type",value:"child"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v(e._s(e.$t("registrationFormTypePersonalChild")))]),r("b-form-radio",{attrs:{name:"person-type",value:"foreign"},model:{value:e.personType,callback:function(t){e.personType=t},expression:"personType"}},[e._v(e._s(e.$t("registrationFormTypePersonalForeigner")))])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("validation-provider",{ref:"vpFirstName",attrs:{name:e.$t("registrationFormFirstName"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"firstName-group-1",label:e.$t("registrationFormFirstName"),"label-for":"firstName"}},[r("b-form-input",{ref:"firstName",attrs:{id:"firstName",name:"firstName",state:e.getValidationState(t),"aria-describedby":"firstName-feedback","data-vv-as":"Name",required:"",autofocus:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("validation-provider",{ref:"vpLastName",attrs:{name:e.$t("registrationFormLastName"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"lastName-group-1",label:e.$t("registrationFormLastName"),"label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",name:"lastName",state:e.getValidationState(t),"aria-describedby":"lastName-feedback","data-vv-as":"Priezvisko",required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),"idcard"===e.personType||"child"===e.personType?r("b-col",{attrs:{cols:"12",lg:"2",md:"4"}},[r("validation-provider",{ref:"vpPersonalNumber",attrs:{name:"idcard"===e.personType?e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberIns"):e.$t("registrationFormPersonalNumber"):e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberChildIns"):e.$t("registrationFormPersonalNumberChild"),rules:{required:!0,rc:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"rc-group-1",label:"idcard"===e.personType?e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberIns"):e.$t("registrationFormPersonalNumber"):e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberChildIns"):e.$t("registrationFormPersonalNumberChild"),"label-for":"rc"}},[r("b-form-input",{attrs:{id:"rc",name:"rc",state:e.getValidationState(t),"aria-describedby":"rc-feedback","data-vv-as":"Rodné číslo",required:""},model:{value:e.rc,callback:function(t){e.rc=t},expression:"rc"}}),r("b-form-invalid-feedback",{attrs:{id:"rc-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1):r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{ref:"vpPassport",attrs:{name:e.$t("registrationFormPassport"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"passport-group-1",label:e.$t("registrationFormPassport"),"label-for":"passport"}},[r("b-form-input",{attrs:{id:"passport",name:"passport",state:e.getValidationState(t),"aria-describedby":"passport-feedback","data-vv-as":"Číslo cestovného dokladu",required:""},model:{value:e.passport,callback:function(t){e.passport=t},expression:"passport"}}),r("b-form-invalid-feedback",{attrs:{id:"passport-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{ref:"vpBirthDay",attrs:{name:e.$t("registrationFormDay"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayDay-group-1",label:e.$t("registrationFormBirthDayDay"),"label-for":"birthDayDay"}},[r("b-form-input",{attrs:{id:"birthDayDay",name:"birthDayDay",type:"number",min:"1",max:"31",state:e.getValidationState(t),"aria-describedby":"birthDayDay-feedback","data-vv-as":e.$t("registrationFormBirthDayDay"),required:""},model:{value:e.birthday.day,callback:function(t){e.$set(e.birthday,"day",t)},expression:"birthday.day"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{ref:"vpBirthMonth",attrs:{name:e.$t("registrationFormBirthDayMonth"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayMonth-group-1",label:e.$t("registrationFormBirthDayMonth"),"label-for":"birthDayMonth"}},[r("b-form-input",{attrs:{id:"birthDayMonth",name:"birthDayMonth",type:"number",min:"1",max:"12",state:e.getValidationState(t),"aria-describedby":"birthDayMonth-feedback",required:""},model:{value:e.birthday.month,callback:function(t){e.$set(e.birthday,"month",t)},expression:"birthday.month"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{ref:"vpBirthYear",attrs:{name:e.$t("registrationFormBirthDayYear"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayYear-group-1",label:e.$t("registrationFormBirthDayYear"),"label-for":"birthDayYearh"}},[r("b-form-input",{attrs:{id:"birthDayYear",name:"birthDayYear",type:"number",min:"1900",max:"2021",state:e.getValidationState(t),"aria-describedby":"birthDayYear-feedback",required:""},model:{value:e.birthday.year,callback:function(t){e.$set(e.birthday,"year",t)},expression:"birthday.year"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("validation-provider",{ref:"vpStreet",attrs:{name:e.$t("registrationFormAddressStreet"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"street-group-1",label:e.$t("registrationFormAddressStreet"),"label-for":"street"}},[r("b-form-input",{attrs:{id:"street",name:"street",state:e.getValidationState(t),"aria-describedby":"street-feedback",required:""},model:{value:e.address.street,callback:function(t){e.$set(e.address,"street",t)},expression:"address.street"}}),r("b-form-invalid-feedback",{attrs:{id:"address-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",md:"1"}},[r("validation-provider",{ref:"vpStreetNo",attrs:{name:e.$t("registrationFormAddressStreetNo"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"streetNo-group-1",label:e.$t("registrationFormAddressStreetNo"),"label-for":"streetNo"}},[r("b-form-input",{attrs:{id:"streetNo",name:"streetNo",state:e.getValidationState(t),"aria-describedby":"streetNo-feedback",required:""},model:{value:e.address.streetNo,callback:function(t){e.$set(e.address,"streetNo",t)},expression:"address.streetNo"}}),r("b-form-invalid-feedback",{attrs:{id:"streetNo-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",md:"2"}},[r("validation-provider",{ref:"vpZIP",attrs:{name:e.$t("registrationFormAddressZIP"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"zip-group-1",label:e.$t("registrationFormAddressZIP"),"label-for":"zip"}},[r("b-form-input",{attrs:{id:"zip",name:"zip",state:e.getValidationState(t),"aria-describedby":"zip-feedback",required:""},model:{value:e.address.zip,callback:function(t){e.$set(e.address,"zip",t)},expression:"address.zip"}}),r("b-form-invalid-feedback",{attrs:{id:"zip-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",md:"3"}},[r("validation-provider",{ref:"vpCity",attrs:{name:e.$t("registrationFormAddressCity"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"city-group-1",label:e.$t("registrationFormAddressCity"),"label-for":"city"}},[r("b-form-input",{attrs:{id:"city",name:"city",state:e.getValidationState(t),"aria-describedby":"city-feedback",required:""},model:{value:e.address.city,callback:function(t){e.$set(e.address,"city",t)},expression:"address.city"}}),r("b-form-invalid-feedback",{attrs:{id:"city-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:e.insuranceColumns}},[r("validation-provider",{ref:"vpMobile",attrs:{name:e.$t("registrationFormMobile"),rules:{required:!0,phone:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"phone-group-1",label:e.$t("registrationFormMobile"),"label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",name:"phone",state:e.getValidationState(t),"aria-describedby":"phone-feedback",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),r("b-form-invalid-feedback",{attrs:{id:"phone-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),r("b-col",{attrs:{cols:"12",md:e.insuranceColumns}},[r("validation-provider",{attrs:{name:"Email",rules:"emailWithAtSign"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"email-group-1",label:e.$t("registrationFormEmail"),"label-for":"email"}},[r("b-form-input",{attrs:{id:"email",name:"email",state:e.getValidationState(t),"aria-describedby":"email-feedback"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)})],1),e.showInsurance?r("b-col",{attrs:{cols:"12",md:e.insuranceColumns}},[r("label",{attrs:{for:"insurance"}},[e._v(e._s(e.$t("registrationFormInsurance")))]),r("b-form-select",{attrs:{options:e.$store.state.insurance.list,id:"insurance"},model:{value:e.insurance,callback:function(t){e.insurance=t},expression:"insurance"}})],1):e._e()],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("p",[e._v(" "+e._s(e.$t("registrationBottomHelp1"))+" ")]),r("p",[e._v(" "+e._s(e.$t("registrationBottomHelp2"))+" ")]),e.$store.state.slot.product&&e.$store.state.slot.product.product&&e.$store.state.slot.product.product.schoolOnly?r("p",[r("b-form-checkbox",{attrs:{id:"school"},model:{value:e.school,callback:function(t){e.school=t},expression:"school"}},[e._v(" "+e._s(e.$t("registrationSchoolRequiredText"))+" ")])],1):e._e(),e.$store.state.slot.product&&e.$store.state.slot.product.product&&e.$store.state.slot.product.product.employeesRegistration?r("p",[r("b-form-checkbox",{model:{value:e.employee,callback:function(t){e.employee=t},expression:"employee"}},[e._v(" "+e._s(e.$t("registrationFormIAmEmployee"))+" "+e._s(e.$store.state.config.COMPANY_NAME)+" ")]),e.employee?r("validation-provider",{ref:"vpEmployeeId",attrs:{name:"Osobné číslo zamestnanca",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"employeeId-group-1",label:e.$t("registrationFormEmployeeID"),"label-for":"employeeId"}},[r("b-form-input",{attrs:{id:"employeeId",name:"employeeId",state:e.getValidationState(t),"aria-describedby":"employeeId-feedback"},model:{value:e.employeeId,callback:function(t){e.employeeId=t},expression:"employeeId"}}),r("b-form-invalid-feedback",{attrs:{id:"employeeId-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!0)}):e._e()],1):e._e(),r("p",[r("b-form-checkbox",{attrs:{id:"gdpr"},model:{value:e.gdpr,callback:function(t){e.gdpr=t},expression:"gdpr"}},[r("div",{domProps:{innerHTML:e._s(e.$t("registrationFormGDPR"))}})])],1),e.$store.state.slot.product&&e.$store.state.slot.product.product?r("b-button",{attrs:{disabled:!e.gdpr||e.processing||e.$store.state.slot.product.product.schoolOnly&&!e.school||e.$store.state.slot.product.product.employeesRegistration&&(!e.employee||!e.employeeId),type:"submit",variant:"primary"}},[e._v(" "+e._s(e.$t("registrationFormButton"))+" "),e.processing?r("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1):e._e()],1)],1)],1)]}}])})],1)],1)},s=[],o=r("a34a"),i=r.n(o),n=r("720d"),l=r("9225"),d=r("039f"),c=r("70d1"),u=r("2593"),p=r("2f62"),m=r("c1df"),f=r.n(m);function h(e,t,r,a,s,o,i){try{var n=e[o](i),l=n.value}catch(d){return void r(d)}n.done?t(l):Promise.resolve(l).then(a,s)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var o=e.apply(t,r);function i(e){h(o,a,s,i,n,"next",e)}function n(e){h(o,a,s,i,n,"throw",e)}i(void 0)}))}}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){var t=0;try{if(0==e.length)return!1;if(e.length<9)throw 1;var r=parseInt(e.substr(0,2),10),a=parseInt(e.substr(2,2),10),s=parseInt(e.substr(4,2),10);if(9==e.length&&r<54)return!0;var o=0;10==e.length&&(o=parseInt(e.substr(9,1)));var i=parseInt(e.substr(0,9))%11;if(10==i&&(i=0),i!=o)throw 1;r+=r<54?2e3:1900,a>70&&r>2003?a-=70:a>50?a-=50:a>20&&r>2003&&(a-=20);var n=new Date;if(r+t>n.getFullYear())throw 1;if(0==a)throw 1;if(a>12)throw 1;if(0==s)throw 1;if(s>31)throw 1}catch(l){return!1}return!0}Object(d["localize"])("sk",c),Object(d["extend"])("rc",{validate:function(e){return _(e)},message:l["a"].t("formInputInvalidMessage")}),Object(d["extend"])("emailWithAtSign",{validate:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())||"@"===e},message:l["a"].t("formInputInvalidMessage")}),Object(d["extend"])("phone",{validate:function(e){var t=e.replace(/\s+|\s+/g,"");if(!t)return!1;if("+"!==t.substr(0,1))return!1;if(t=t.substr(1),421==t.substr(0,3)){var r=t.match(/^\d{12}$/);return r}if(420==t.substr(0,3)){var a=t.match(/^\d{12}$/);return a}if(43==t.substr(0,2)){var s=t.match(/^\d{11}$/);return s}var o=t.match(/^\d{11}$/);return o},message:l["a"].t("formInputInvalidMessage")});var $={components:{ValidationProvider:d["ValidationProvider"],ValidationObserver:d["ValidationObserver"]},data:function(){return{employee:!1,employeeId:"",processing:!1,school:!1,personType:"idcard",passport:"",rc:"",firstName:"",lastName:"",address:{street:"",streetNo:"",zip:"",city:""},birthday:{day:"",month:"",year:""},email:"@",phone:"+421",insurance:"25",gdpr:!1,employeeNumber:"",employeePass:""}},computed:{productId:function(){return this.$route.params.productId?this.$route.params.productId:this.$store.state.slot.product.product.id},showInsurance:function(){return!!this.$store.state.slot.product&&(!!this.$store.state.slot.product.product&&!0===this.$store.state.slot.product.product.collectInsurance)},showEmployerForm:function(){return!!this.$store.state.slot.product&&(!!this.$store.state.slot.product.product&&!0===this.$store.state.slot.product.product.employeesOnly)},insuranceColumns:function(){return this.showInsurance?4:6},locale:function(){return this.$i18n.locale},limitReached:function(){if(this.$store.state.slot.slotMCurrent.registrations>=this.$store.state.place.currentPlace.limitPer5MinSlot)return!0;if(!this.$store.state.slot.slotHCurrent)return!0;if(!this.$store.state.slot.slotHCurrent.description)return!0;if(this.$store.state.slot.slotHCurrent.registrations>=this.$store.state.place.currentPlace.limitPer1HourSlot)return!0;for(var e in this.$store.state.place.currentPlace.otherLimitations){var t=this.$store.state.place.currentPlace.otherLimitations[e],r=f()(this.$store.state.slot.slotHCurrent.time);if(f()(t.from).isSameOrBefore(r)&&f()(t.until).isAfter(r)&&t.hourLimit<=this.$store.state.slot.slotHCurrent.registrations)return!0}return!1}},watch:{locale:function(){this.setLanguage()},rc:function(){if(this.rc&&this.rc.length>=9){if(this.birthday.day||(this.birthday.day=parseInt(this.rc.substr(4,2))),!this.birthday.month){var e=parseInt(this.rc.substr(2,2));e>50&&(e-=50),this.birthday.month=e}if(!this.birthday.year){var t=parseInt(this.rc.substr(0,2));t+=t>21?1900:2e3,this.birthday.year=t}this.$forceUpdate()}},gdpr:function(){if(this.gdpr){var e=this.showEmployerForm?"formEmployer":"form";this.$refs[e].validate()}},personType:function(){var e=this,t=this.showEmployerForm?"employeeNumber":"firstName";setTimeout((function(){e.$refs[t].focus()}),200)}},mounted:function(){var e=this;this.$store.state.slot&&this.$store.state.slot.product&&this.$store.state.slot.product.product&&this.$store.state.slot.product.product.name||this.$route.params.productId&&this.ListPlaceProductByPlace({placeId:this.$route.params.placeId}).then((function(t){if(t){var r=t.find((function(t){return t.productId===e.$route.params.productId}));r?e.setProduct(r):e.$router.push("/place/"+e.$route.params.placeId)}else e.$router.push("/place/"+e.$route.params.placeId)})).catch((function(){e.$router.push("/place/"+e.$route.params.placeId)})),this.GetPlace({id:this.$route.params.placeId}).then((function(e){return e})).then((function(t){return t&&e.setCurrentPlace(t),t})).then((function(t){return e.GetSlotD({placeId:e.$route.params.placeId,daySlotId:e.$route.params.dayId}).then((function(t){t&&e.setSlotDCurrent(t)})),t})).then((function(t){return e.GetSlotH({placeId:e.$route.params.placeId,daySlotId:e.$route.params.dayId,hourSlotId:e.$route.params.hourId}).then((function(t){return e.setSlotHCurrent(t)}))})).then((function(t){return e.GetSlotM({placeId:e.$route.params.placeId,hourSlotId:e.$route.params.hourId,minuteSlotId:e.$route.params.minuteId}).then((function(t){return e.setSlotMCurrent(t)}))})),this.$store.state.slot.registrationAttempt&&(this.personType=this.$store.state.slot.registrationAttempt.personType,this.passport=this.$store.state.slot.registrationAttempt.passport,this.rc=this.$store.state.slot.registrationAttempt.rc,this.firstName=this.$store.state.slot.registrationAttempt.firstName,this.lastName=this.$store.state.slot.registrationAttempt.lastName,this.address.street=this.$store.state.slot.registrationAttempt.street,this.address.streetNo=this.$store.state.slot.registrationAttempt.streetNo,this.address.zip=this.$store.state.slot.registrationAttempt.zip,this.address.city=this.$store.state.slot.registrationAttempt.city,this.birthday={},this.birthday.day=this.$store.state.slot.registrationAttempt.birthDayDay,this.birthday.month=this.$store.state.slot.registrationAttempt.birthDayMonth,this.birthday.year=this.$store.state.slot.registrationAttempt.birthDayYear,this.email=this.$store.state.slot.registrationAttempt.email,this.phone=this.$store.state.slot.registrationAttempt.phone,this.insurance=this.$store.state.slot.registrationAttempt.insurance,this.employeeId=this.$store.state.slot.registrationAttempt.employeeId),this.personType||(this.personType="idcard"),this.insurance||(this.insurance="25"),this.phone||(this.phone="+421"),this.email||(this.email="@"),"CZ"===this.$store.state.config.COUNTRY&&("+421"===this.phone&&(this.phone="+420"),"25"===this.insurance&&(this.insurance="111")),this.setLanguage()},methods:g(g(g(g(g({},Object(p["c"])({setRegistrationAttempt:"slot/setRegistrationAttempt"})),Object(p["c"])({setCurrentPlace:"place/setCurrentPlace",setSlotDCurrent:"slot/setSlotDCurrent",setSlotHCurrent:"slot/setSlotHCurrent",setSlotMCurrent:"slot/setSlotMCurrent",setProduct:"slot/setProduct"})),Object(p["b"])({GetPlace:"place/GetPlace"})),Object(p["b"])({GetSlotD:"slot/GetSlotD",GetSlotH:"slot/GetSlotH",GetSlotM:"slot/GetSlotM",ReloadSlotsM:"slot/ReloadSlotsM",Register:"slot/Register",RegisterWithCompanyRegistration:"slot/RegisterWithCompanyRegistration",ListPlaceProductByPlace:"placeProvider/ListPlaceProductByPlace"})),{},{SaveAndGoBack:function(){this.saveData(),this.$router.push("/place/".concat(this.$route.params.placeId,"/"))},saveData:function(){var e={personType:this.personType,passport:this.passport,rc:this.rc,firstName:this.firstName,lastName:this.lastName,street:this.address.street,streetNo:this.address.streetNo,zip:this.address.zip,city:this.address.city,email:this.email,phone:this.phone,insurance:this.insurance,chosenSlot:this.$route.params.minuteId,chosenPlaceId:this.$route.params.placeId,product:this.productId,employeeId:this.employeeId,address:this.address.street+" "+this.address.streetNo+", "+this.address.zip+" "+this.address.city};this.birthday&&(e.birthDayDay=this.birthday.day,e.birthDayMonth=this.birthday.month,e.birthDayYear=this.birthday.year),this.setRegistrationAttempt(e)},registerForTest:function(){var e=this;return b(i.a.mark((function t(){var r,a;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.validateForm({employerForm:!1});case 2:if(r=t.sent,r){t.next=5;break}return t.abrupt("return");case 5:a=e,e.processing=!0,Object(n["load"])(e.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){if(t){"foreign"==e.personType?e.rc="":e.passport="";var r={personType:e.personType,passport:e.passport,rc:e.rc,firstName:e.firstName,lastName:e.lastName,street:e.address.street,streetNo:e.address.streetNo,zip:e.address.zip,city:e.address.city,email:e.email,phone:e.phone,insurance:e.insurance,chosenSlot:e.$route.params.minuteId,chosenPlaceId:e.$route.params.placeId,product:e.productId,employeeId:e.employeeId,birthDayDay:e.birthday.day,birthDayMonth:e.birthday.month,birthDayYear:e.birthday.year,address:e.address.street+" "+e.address.streetNo+", "+e.address.zip+" "+e.address.city,token:t};e.setRegistrationAttempt(r),e.Register(r).then((function(s){e.processing=!1,s&&(r={personType:e.personType,passport:"",rc:"",firstName:"",lastName:"",street:e.address.street,streetNo:e.address.streetNo,zip:e.address.zip,city:e.address.city,email:e.email,phone:e.phone,insurance:e.insurance,chosenSlot:e.$route.params.minuteId,chosenPlaceId:e.$route.params.placeId,product:e.productId,employeeId:e.employeeId,birthDayDay:"",birthDayMonth:"",birthDayYear:"",address:e.address.street+" "+e.address.streetNo+", "+e.address.zip+" "+e.address.city,token:t},e.setRegistrationAttempt(r),e.firstName="",e.lastName="",e.rc="",e.passport="",e.birthday.day="",e.birthday.month="",e.birthday.year="",a.$router.push("/place/".concat(e.$route.params.placeId,"/").concat(e.$route.params.dayId,"/").concat(e.$route.params.hourId,"/").concat(e.$route.params.minuteId,"/").concat(e.productId,"/done")))}))}else e.processing=!1}))}));case 8:case"end":return t.stop()}}),t)})))()},registerForTestWithCompany:function(){var e=this;return b(i.a.mark((function t(){var r,a;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.validateForm({employerForm:!0});case 2:if(r=t.sent,r){t.next=5;break}return t.abrupt("return");case 5:a=e,e.processing=!0,Object(n["load"])(e.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){if(t){var r={employeeNumber:a.employeeNumber,employeePass:a.employeePass,chosenSlot:e.$route.params.minuteId,chosenPlaceId:e.$route.params.placeId,product:e.productId,token:t};e.RegisterWithCompanyRegistration(r).then((function(t){e.processing=!1,t&&a.$router.push("/place/".concat(e.$route.params.placeId,"/").concat(e.$route.params.dayId,"/").concat(e.$route.params.hourId,"/").concat(e.$route.params.minuteId,"/").concat(e.productId,"/done"))}))}else e.processing=!1}))}));case 8:case"end":return t.stop()}}),t)})))()},getValidationState:function(e){var t=e.dirty,r=e.validated,a=e.valid,s=void 0===a?null:a;return t||r?s:null},setLanguage:function(){"en"==this.$i18n.locale||"en-US"==this.$i18n.locale?Object(d["localize"])("en",u):Object(d["localize"])("sk",c)},validateForm:function(e){var t=this;return b(i.a.mark((function r(){var a,s,o,n,l;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.employerForm,s=void 0!==a&&a,o=s?"formEmployer":"form",r.next=4,t.$refs[o].validate();case 4:if(n=r.sent,n){r.next=11;break}return r.next=8,t.$bvModal.msgBoxConfirm(t.$t("formInvalidDataConfirmationMessage"));case 8:if(l=r.sent,l){r.next=11;break}return r.abrupt("return",!1);case 11:return r.abrupt("return",!0);case 12:case"end":return r.stop()}}),r)})))()}})},I=$,S=r("2877"),N=Object(S["a"])(I,a,s,!1,null,null,null);t["default"]=N.exports},b3e0:function(e,t,r){"use strict";var a=this&&this.__awaiter||function(e,t,r,a){function s(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function n(e){try{l(a["throw"](e))}catch(t){o(t)}}function l(e){e.done?r(e.value):s(e.value).then(i,n)}l((a=a.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var r,a,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:n(0),throw:n(1),return:n(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function n(e){return function(t){return l([e,t])}}function l(o){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,a&&(s=2&o[0]?a["return"]:o[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,o[1])).done)return s;switch(a=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!(s=s.length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(n){o=[6,n],a=0}finally{r=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReCaptchaInstance=void 0;var o=function(){function e(e,t,r){this.siteKey=e,this.recaptchaID=t,this.recaptcha=r,this.styleContainer=null}return e.prototype.execute=function(e){return a(this,void 0,void 0,(function(){return s(this,(function(t){return[2,this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){null===this.styleContainer&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{display:none !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){null!==this.styleContainer&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();t.ReCaptchaInstance=o},fffb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInstance=t.load=void 0;var a,s=r("b3e0");(function(e){e[e["NOT_LOADED"]=0]="NOT_LOADED",e[e["LOADING"]=1]="LOADING",e[e["LOADED"]=2]="LOADED"})(a||(a={}));var o=function(){function e(){}return e.load=function(t,r){if(void 0===r&&(r={}),"undefined"===typeof document)return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===a.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===a.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise((function(t,r){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return r(e)}))}));e.instanceSiteKey=t,e.setLoadingState(a.LOADING);var o=new e;return new Promise((function(i,n){o.loadScript(t,r.useRecaptchaNet||!1,r.renderParameters?r.renderParameters:{},r.customUrl).then((function(){e.setLoadingState(a.LOADED);var n=o.doExplicitRender(grecaptcha,t,r.explicitRenderParameters?r.explicitRenderParameters:{}),l=new s.ReCaptchaInstance(t,n,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(l)})),e.successfulLoadingConsumers=[],r.autoHideBadge&&l.hideBadge(),e.instance=l,i(l)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],n(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return null===e.loadingState?a.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,r,s,o){var i=this;void 0===r&&(r=!1),void 0===s&&(s={}),void 0===o&&(o="");var n=document.createElement("script");n.setAttribute("recaptcha-v3-script","");var l="https://www.google.com/recaptcha/api.js";r&&(l="https://recaptcha.net/recaptcha/api.js"),o&&(l=o),s.render&&(s.render=void 0);var d=this.buildQueryString(s);return n.src=l+"?render=explicit"+d,new Promise((function(t,r){n.addEventListener("load",i.waitForScriptToLoad((function(){t(n)})),!1),n.onerror=function(t){e.setLoadingState(a.NOT_LOADED),r(t)},document.head.appendChild(n)}))},e.prototype.buildQueryString=function(e){var t=Object.keys(e);return t.length<1?"":"&"+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+"="+e[t]})).join("&")},e.prototype.waitForScriptToLoad=function(t){var r=this;return function(){void 0===window.grecaptcha?setTimeout((function(){r.waitForScriptToLoad(t)}),e.SCRIPT_LOAD_DELAY):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,r){var a={sitekey:t,badge:r.badge,size:r.size,tabindex:r.tabindex};return r.container?e.render(r.container,a):e.render(a)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();t.load=o.load,t.getInstance=o.getInstance}}]);