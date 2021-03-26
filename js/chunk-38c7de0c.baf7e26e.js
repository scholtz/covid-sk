(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38c7de0c"],{2593:function(e){e.exports=JSON.parse('{"code":"en","messages":{"alpha":"The {_field_} field may only contain alphabetic characters","alpha_num":"The {_field_} field may only contain alpha-numeric characters","alpha_dash":"The {_field_} field may contain alpha-numeric characters as well as dashes and underscores","alpha_spaces":"The {_field_} field may only contain alphabetic characters as well as spaces","between":"The {_field_} field must be between {min} and {max}","confirmed":"The {_field_} field confirmation does not match","digits":"The {_field_} field must be numeric and exactly contain {length} digits","dimensions":"The {_field_} field must be {width} pixels by {height} pixels","email":"The {_field_} field must be a valid email","excluded":"The {_field_} field is not a valid value","ext":"The {_field_} field is not a valid file","image":"The {_field_} field must be an image","integer":"The {_field_} field must be an integer","length":"The {_field_} field must be {length} long","max_value":"The {_field_} field must be {max} or less","max":"The {_field_} field may not be greater than {length} characters","mimes":"The {_field_} field must have a valid file type","min_value":"The {_field_} field must be {min} or more","min":"The {_field_} field must be at least {length} characters","numeric":"The {_field_} field may only contain numeric characters","oneOf":"The {_field_} field is not a valid value","regex":"The {_field_} field format is invalid","required_if":"The {_field_} field is required","required":"The {_field_} field is required","size":"The {_field_} field size must be less than {size}KB","double":"The {_field_} field must be a valid decimal"}}')},d79f:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"app-pane-lgray py-2"},[r("b-container",[r("h1",[e._v("Prehľad návštevníka s kódom registrácie: "+e._s(e.visitor.id))])])],1),e.loading?r("b-container",{staticClass:"py-3"},[r("b-row",[r("b-col",[r("b-spinner",{attrs:{label:"Loading..."}})],1)],1)],1):e._e(),e.loading?e._e():r("b-container",{staticClass:"py-3"},[r("b-row",[r("b-col",[r("ValidationObserver",[r("b-container",{staticClass:"my-4"},[e.$store.state.config.INSURED_ONLY?e._e():r("b-row",[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-form-group",{attrs:{label:e.$t("registrationFormTypeLabel")}},[r("b-form-radio",{attrs:{name:"person-type",value:"idcard"},model:{value:e.visitor.personType,callback:function(t){e.$set(e.visitor,"personType",t)},expression:"visitor.personType"}},[e.$store.state.config.RC_IS_INSURANCE?r("span",[e._v(" "+e._s(e.$t("registrationFormTypePersonalCardIns"))+" ")]):r("span",[e._v(" "+e._s(e.$t("registrationFormTypePersonalCard"))+" ")])]),r("b-form-radio",{attrs:{name:"person-type",value:"child"},model:{value:e.visitor.personType,callback:function(t){e.$set(e.visitor,"personType",t)},expression:"visitor.personType"}},[e._v(e._s(e.$t("registrationFormTypePersonalChild")))]),r("b-form-radio",{attrs:{name:"person-type",value:"foreign"},model:{value:e.visitor.personType,callback:function(t){e.$set(e.visitor,"personType",t)},expression:"visitor.personType"}},[e._v(e._s(e.$t("registrationFormTypePersonalForeigner")))])],1)],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("validation-provider",{ref:"vpFirstName",attrs:{name:e.$t("registrationFormFirstName"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"firstName-group-1",label:e.$t("registrationFormFirstName"),"label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstName",name:"firstName",state:e.getValidationState(t),"aria-describedby":"firstName-feedback","data-vv-as":"Name"},model:{value:e.visitor.firstName,callback:function(t){e.$set(e.visitor,"firstName",t)},expression:"visitor.firstName"}}),r("b-form-invalid-feedback",{attrs:{id:"firstName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,3236012571)})],1),r("b-col",{attrs:{cols:"12",md:"6",lg:"3"}},[r("validation-provider",{ref:"vpLastName",attrs:{name:e.$t("registrationFormLastName"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"lastName-group-1",label:e.$t("registrationFormLastName"),"label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",name:"lastName",state:e.getValidationState(t),"aria-describedby":"lastName-feedback","data-vv-as":"Priezvisko"},model:{value:e.visitor.lastName,callback:function(t){e.$set(e.visitor,"lastName",t)},expression:"visitor.lastName"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,89326752)})],1),"idcard"===e.visitor.personType||"child"===e.visitor.personType?r("b-col",{attrs:{cols:"12",lg:"2",md:"4"}},[r("validation-provider",{ref:"vpPersonalNumber",attrs:{name:"idcard"===e.visitor.personType?e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberIns"):e.$t("registrationFormPersonalNumber"):e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberChildIns"):e.$t("registrationFormPersonalNumberChild"),rules:{required:!0,rc:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"rc-group-1",label:"idcard"===e.visitor.personType?e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberIns"):e.$t("registrationFormPersonalNumber"):e.$store.state.config.RC_IS_INSURANCE?e.$t("registrationFormPersonalNumberChildIns"):e.$t("registrationFormPersonalNumberChild"),"label-for":"rc"}},[r("b-form-input",{attrs:{id:"rc",name:"rc",state:e.getValidationState(t),"aria-describedby":"rc-feedback","data-vv-as":"Rodné číslo"},model:{value:e.visitor.rc,callback:function(t){e.$set(e.visitor,"rc",t)},expression:"visitor.rc"}}),r("b-form-invalid-feedback",{attrs:{id:"rc-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,427479515)})],1):r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{ref:"vpPassport",attrs:{name:e.$t("registrationFormPassport"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"passport-group-1",label:e.$t("registrationFormPassport"),"label-for":"passport"}},[r("b-form-input",{attrs:{id:"passport",name:"passport",state:e.getValidationState(t),"aria-describedby":"passport-feedback","data-vv-as":"Číslo cestovného dokladu"},model:{value:e.visitor.passport,callback:function(t){e.$set(e.visitor,"passport",t)},expression:"visitor.passport"}}),r("b-form-invalid-feedback",{attrs:{id:"passport-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,1361148105)})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{ref:"vpBirthDay",attrs:{name:e.$t("registrationFormDay"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayDay-group-1",label:e.$t("registrationFormBirthDayDay"),"label-for":"birthDayDay"}},[r("b-form-input",{attrs:{id:"birthDayDay",name:"birthDayDay",type:"number",min:"1",max:"31",state:e.getValidationState(t),"aria-describedby":"birthDayDay-feedback","data-vv-as":e.$t("registrationFormBirthDayDay")},model:{value:e.visitor.birthDayDay,callback:function(t){e.$set(e.visitor,"birthDayDay",t)},expression:"visitor.birthDayDay"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,2365503047)})],1),r("b-col",{attrs:{cols:"12",lg:"1",md:"2"}},[r("validation-provider",{ref:"vpBirthMonth",attrs:{name:e.$t("registrationFormBirthDayMonth"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayMonth-group-1",label:e.$t("registrationFormBirthDayMonth"),"label-for":"birthDayMonth"}},[r("b-form-input",{attrs:{id:"birthDayMonth",name:"birthDayMonth",type:"number",min:"1",max:"12",state:e.getValidationState(t),"aria-describedby":"birthDayMonth-feedback"},model:{value:e.visitor.birthDayMonth,callback:function(t){e.$set(e.visitor,"birthDayMonth",t)},expression:"visitor.birthDayMonth"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,3211664941)})],1),r("b-col",{attrs:{cols:"12",md:"4",lg:"2"}},[r("validation-provider",{ref:"vpBirthYear",attrs:{name:e.$t("registrationFormBirthDayYear"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"birthDayYear-group-1",label:e.$t("registrationFormBirthDayYear"),"label-for":"birthDayYearh"}},[r("b-form-input",{attrs:{id:"birthDayYear",name:"birthDayYear",type:"number",min:"1900",max:"2021",state:e.getValidationState(t),"aria-describedby":"birthDayYear-feedback"},model:{value:e.visitor.birthDayYear,callback:function(t){e.$set(e.visitor,"birthDayYear",t)},expression:"visitor.birthDayYear"}}),r("b-form-invalid-feedback",{attrs:{id:"lastName-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,3430521217)})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:"6"}},[r("validation-provider",{ref:"vpStreet",attrs:{name:e.$t("registrationFormAddressStreet"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"street-group-1",label:e.$t("registrationFormAddressStreet"),"label-for":"street"}},[r("b-form-input",{attrs:{id:"street",name:"street",state:e.getValidationState(t),"aria-describedby":"street-feedback"},model:{value:e.visitor.street,callback:function(t){e.$set(e.visitor,"street",t)},expression:"visitor.street"}}),r("b-form-invalid-feedback",{attrs:{id:"address-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,299464617)})],1),r("b-col",{attrs:{cols:"12",md:"1"}},[r("validation-provider",{ref:"vpStreetNo",attrs:{name:e.$t("registrationFormAddressStreetNo"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"streetNo-group-1",label:e.$t("registrationFormAddressStreetNo"),"label-for":"streetNo"}},[r("b-form-input",{attrs:{id:"streetNo",name:"streetNo",state:e.getValidationState(t),"aria-describedby":"streetNo-feedback"},model:{value:e.visitor.streetNo,callback:function(t){e.$set(e.visitor,"streetNo",t)},expression:"visitor.streetNo"}}),r("b-form-invalid-feedback",{attrs:{id:"streetNo-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,4126623678)})],1),r("b-col",{attrs:{cols:"12",md:"2"}},[r("validation-provider",{ref:"vpZIP",attrs:{name:e.$t("registrationFormAddressZIP"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"zip-group-1",label:e.$t("registrationFormAddressZIP"),"label-for":"zip"}},[r("b-form-input",{attrs:{id:"zip",name:"zip",state:e.getValidationState(t),"aria-describedby":"zip-feedback"},model:{value:e.visitor.zip,callback:function(t){e.$set(e.visitor,"zip",t)},expression:"visitor.zip"}}),r("b-form-invalid-feedback",{attrs:{id:"zip-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,1049125694)})],1),r("b-col",{attrs:{cols:"12",md:"3"}},[r("validation-provider",{ref:"vpCity",attrs:{name:e.$t("registrationFormAddressCity"),rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"city-group-1",label:e.$t("registrationFormAddressCity"),"label-for":"city"}},[r("b-form-input",{attrs:{id:"city",name:"city",state:e.getValidationState(t),"aria-describedby":"city-feedback"},model:{value:e.visitor.city,callback:function(t){e.$set(e.visitor,"city",t)},expression:"visitor.city"}}),r("b-form-invalid-feedback",{attrs:{id:"city-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,832626494)})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12",md:e.insuranceColumns}},[r("validation-provider",{ref:"vpMobile",attrs:{name:e.$t("registrationFormMobile"),rules:{required:!0,phone:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"phone-group-1",label:e.$t("registrationFormMobile"),"label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",name:"phone",state:e.getValidationState(t),"aria-describedby":"phone-feedback"},model:{value:e.visitor.phone,callback:function(t){e.$set(e.visitor,"phone",t)},expression:"visitor.phone"}}),r("b-form-invalid-feedback",{attrs:{id:"phone-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,1094927284)})],1),r("b-col",{attrs:{cols:"12",md:e.insuranceColumns}},[r("validation-provider",{ref:"vpEmail",attrs:{name:e.$t("registrationFormEmail"),rules:"email"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"email-group-1",label:e.$t("registrationFormEmail"),"label-for":"email"}},[r("b-form-input",{attrs:{id:"email",name:"email",state:e.getValidationState(t),"aria-describedby":"email-feedback"},model:{value:e.visitor.email,callback:function(t){e.$set(e.visitor,"email",t)},expression:"visitor.email"}}),r("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,1830549544)})],1),r("b-col",{attrs:{cols:"12",md:e.insuranceColumns}},[r("label",{attrs:{for:"insurance"}},[e._v(e._s(e.$t("registrationFormInsurance")))]),r("b-form-select",{attrs:{options:e.$store.state.insurance.list,id:"insurance"},model:{value:e.visitor.insurance,callback:function(t){e.$set(e.visitor,"insurance",t)},expression:"visitor.insurance"}})],1)],1),r("b-row",[r("b-col",[r("b-form-group",{attrs:{id:"chosenPlaceId-group-1",label:"chosenPlaceId","label-for":"chosenPlaceId"}},[r("b-form-input",{attrs:{id:"chosenPlaceId",name:"chosenPlaceId"},model:{value:e.visitor.chosenPlaceId,callback:function(t){e.$set(e.visitor,"chosenPlaceId",t)},expression:"visitor.chosenPlaceId"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"chosenSlot-group-1",label:"chosenSlot","label-for":"chosenSlot"}},[r("b-form-input",{attrs:{id:"chosenSlot",name:"chosenSlot"},model:{value:e.visitor.chosenSlot,callback:function(t){e.$set(e.visitor,"chosenSlot",t)},expression:"visitor.chosenSlot"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"testingSet-group-1",label:"testingSet","label-for":"testingSet"}},[r("b-form-input",{attrs:{id:"testingSet",name:"testingSet"},model:{value:e.visitor.testingSet,callback:function(t){e.$set(e.visitor,"testingSet",t)},expression:"visitor.testingSet"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"language-group-1",label:"language","label-for":"language"}},[r("b-form-input",{attrs:{id:"language",name:"language"},model:{value:e.visitor.language,callback:function(t){e.$set(e.visitor,"language",t)},expression:"visitor.language"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"placeProviderId-group-1",label:"placeProviderId","label-for":"placeProviderId"}},[r("b-form-input",{attrs:{disabled:"",id:"placeProviderId",name:"placeProviderId"},model:{value:e.visitor.placeProviderId,callback:function(t){e.$set(e.visitor,"placeProviderId",t)},expression:"visitor.placeProviderId"}})],1)],1)],1),r("b-row",[r("b-col",[r("b-form-group",{attrs:{id:"verificationId-group-1",label:"verificationId","label-for":"verificationId"}},[r("b-form-input",{attrs:{id:"verificationId",name:"verificationId"},model:{value:e.visitor.verificationId,callback:function(t){e.$set(e.visitor,"verificationId",t)},expression:"visitor.verificationId"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"verifiedBy-group-1",label:"verifiedBy","label-for":"verifiedBy"}},[r("b-form-input",{attrs:{id:"verifiedBy",name:"verifiedBy"},model:{value:e.visitor.verifiedBy,callback:function(t){e.$set(e.visitor,"verifiedBy",t)},expression:"visitor.verifiedBy"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"verifiedFromIP-group-1",label:"verifiedFromIP","label-for":"verifiedFromIP"}},[r("b-form-input",{attrs:{id:"verifiedFromIP",name:"verifiedFromIP"},model:{value:e.visitor.verifiedFromIP,callback:function(t){e.$set(e.visitor,"verifiedFromIP",t)},expression:"visitor.verifiedFromIP"}})],1)],1)],1),r("b-row",[r("b-col",[r("b-form-group",{attrs:{id:"registrationTime-group-1",label:"registrationTime","label-for":"registrationTime"}},[r("VueCtkDateTimePicker",{attrs:{label:"registrationTime","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.registrationTime,callback:function(t){e.$set(e.visitor,"registrationTime",t)},expression:"visitor.registrationTime"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"chosenSlotTime-group-1",label:"chosenSlotTime","label-for":"chosenSlotTime"}},[r("VueCtkDateTimePicker",{attrs:{label:"chosenSlotTime","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.chosenSlotTime,callback:function(t){e.$set(e.visitor,"chosenSlotTime",t)},expression:"visitor.chosenSlotTime"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"testingTime-group-1",label:"testingTime","label-for":"testingTime"}},[r("VueCtkDateTimePicker",{attrs:{label:"testingTime","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.testingTime,callback:function(t){e.$set(e.visitor,"testingTime",t)},expression:"visitor.testingTime"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"testResultTime-group-1",label:"testResultTime","label-for":"testResultTime"}},[r("VueCtkDateTimePicker",{attrs:{label:"testResultTime","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.testResultTime,callback:function(t){e.$set(e.visitor,"testResultTime",t)},expression:"visitor.testResultTime"}})],1)],1)],1),r("b-row",[r("b-col",[r("b-form-group",{attrs:{id:"resultNotifiedAt-group-1",label:"resultNotifiedAt","label-for":"resultNotifiedAt"}},[r("VueCtkDateTimePicker",{attrs:{label:"resultNotifiedAt","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.resultNotifiedAt,callback:function(t){e.$set(e.visitor,"resultNotifiedAt",t)},expression:"visitor.resultNotifiedAt"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"eHealthNotifiedAt-group-1",label:"eHealthNotifiedAt","label-for":"eHealthNotifiedAt"}},[r("VueCtkDateTimePicker",{attrs:{label:"eHealthNotifiedAt","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.eHealthNotifiedAt,callback:function(t){e.$set(e.visitor,"eHealthNotifiedAt",t)},expression:"visitor.eHealthNotifiedAt"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"lastStatusCheck-group-1",label:"lastStatusCheck","label-for":"lastStatusCheck"}},[r("VueCtkDateTimePicker",{attrs:{label:"lastStatusCheck","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.lastStatusCheck,callback:function(t){e.$set(e.visitor,"lastStatusCheck",t)},expression:"visitor.lastStatusCheck"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{id:"lastUpdate-group-1",label:"lastUpdate","label-for":"lastUpdate"}},[r("VueCtkDateTimePicker",{attrs:{label:"lastUpdate","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.visitor.lastUpdate,callback:function(t){e.$set(e.visitor,"lastUpdate",t)},expression:"visitor.lastUpdate"}})],1)],1)],1),r("b-row",[r("b-col",[r("label",{attrs:{for:"result"}},[e._v(" Výsledok testu ")]),r("b-form-select",{attrs:{options:e.resultOptions,id:"result"},model:{value:e.visitor.result,callback:function(t){e.$set(e.visitor,"result",t)},expression:"visitor.result"}})],1),r("b-col",[r("b-form-group",{attrs:{id:"personTrackingNumber-group-1",label:"Covid Pass","label-for":"personTrackingNumber"}},[r("b-form-input",{attrs:{id:"personTrackingNumber",name:"personTrackingNumber"},model:{value:e.visitor.personTrackingNumber,callback:function(t){e.$set(e.visitor,"personTrackingNumber",t)},expression:"visitor.personTrackingNumber"}})],1)],1)],1),r("b-row",[r("b-col",{staticClass:"my-2",attrs:{cols:"12"}},[r("p",[r("validation-provider",{ref:"vpEmployeeId",attrs:{name:"Osobné číslo zamestnanca"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{id:"employeeId-group-1",label:"Osobné číslo zamestnanca","label-for":"employeeId"}},[r("b-form-input",{attrs:{id:"employeeId",name:"employeeId",state:e.getValidationState(t),"aria-describedby":"employeeId-feedback"},model:{value:e.visitor.employeeId,callback:function(t){e.$set(e.visitor,"employeeId",t)},expression:"visitor.employeeId"}}),r("b-form-invalid-feedback",{attrs:{id:"employeeId-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}],null,!1,4277800512)})],1),r("b-button",{attrs:{variant:"primary"},on:{click:e.clickUpdateVisitor}},[e._v(" Upraviť záznam "),e.processing?r("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1),r("b-button",{staticClass:"ml-3",attrs:{variant:"primary"},on:{click:e.clickSendToEHealth}},[e._v(" Odoslať do Moje eZdravie "),e.processingE?r("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)},a=[],o=r("e30a"),s=r.n(o),l=(r("b40d"),r("039f")),n=r("70d1"),d=r("2593"),c=r("2f62");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=0;try{if(0==e.length)return!1;if(e.length<9)throw 1;var r=parseInt(e.substr(0,2),10),i=parseInt(e.substr(2,2),10),a=parseInt(e.substr(4,2),10);if(9==e.length&&r<54)return!0;var o=0;10==e.length&&(o=parseInt(e.substr(9,1)));var s=parseInt(e.substr(0,9))%11;if(10==s&&(s=0),s!=o)throw 1;r+=r<54?2e3:1900,i>70&&r>2003?i-=70:i>50?i-=50:i>20&&r>2003&&(i-=20);var l=new Date;if(r+t>l.getFullYear())throw 1;if(0==i)throw 1;if(i>12)throw 1;if(0==a)throw 1;if(a>31)throw 1}catch(n){return!1}return!0}Object(l["localize"])("sk",n),Object(l["extend"])("rc",{validate:function(e){return f(e)}}),Object(l["extend"])("phone",{validate:function(e){var t=e.replace(/\s+|\s+/g,"");if(!t)return!1;if("+"!==t.substr(0,1))return!1;if(t=t.substr(1),421==t.substr(0,3)){var r=t.match(/^\d{12}$/);return r}if(420==t.substr(0,3)){var i=t.match(/^\d{12}$/);return i}if(43==t.substr(0,2)){var a=t.match(/^\d{11}$/);return a}var o=t.match(/^\d{11}$/);return o}});var p={data:function(){return{loading:!0,processing:!1,processingE:!1,insuranceColumns:4,visitor:{},resultOptions:[{value:"test-not-taken",text:"test-not-taken"},{value:"test-not-processed",text:"test-not-processed"},{value:"test-to-be-repeated",text:"test-to-be-repeated"},{value:"positive",text:"positive"},{value:"positive-certiciate-taken",text:"positive-certiciate-taken"},{value:"negative",text:"negative"},{value:"negative-certiciate-taken",text:"negative-certiciate-taken"}]}},components:{ValidationProvider:l["ValidationProvider"],ValidationObserver:l["ValidationObserver"],VueCtkDateTimePicker:s.a},computed:{locale:function(){return this.$i18n.locale},ppStore:function(){return this.$store.state?this.$store.state.user.tokenData.pp:""},placePrivider:function(){var e=this;return this.$store.state.placeProvider.places?this.$store.state.placeProvider.places.find((function(t){return t.placeProviderId===e.ppStore})):{}}},watch:{locale:function(){this.setLanguage()},placePrivider:function(){this.pp=this.placePrivider,console.log("pp",this.pp),this.loading=!1}},created:function(){this.resetVisitor()},mounted:function(){var e=this;this.loading=!0,this.FindVisitor({query:this.$route.params.visitorId}).then((function(t){e.loading=!1,t?e.visitor=t:e.resetVisitor()})),this.setLanguage()},methods:m(m(m({},Object(c["b"])({FindVisitor:"user/FindVisitor",UpdateVisitor:"user/UpdateVisitor",SendResultToEHealth:"user/SendResultToEHealth",UpdatePP:"placeProvider/UpdatePP",UpdateSensitiveData:"placeProvider/UpdateSensitiveData",GetSensitiveData:"placeProvider/GetSensitiveData",ListPrivate:"placeProvider/ListPrivate"})),Object(c["b"])({openSuccess:"snackbar/openSuccess"})),{},{resetVisitor:function(){this.visitor={personType:"idcard",passport:"",rc:"",firstName:"",lastName:"",address:"",street:"",streetNo:"",zip:"",city:"",email:"@",phone:"+421",insurance:"25",chosenSlot:"",chosenPlaceId:"",birthDayDay:"",birthDayMonth:"",birthDayYear:"",product:"",employeeId:""}},getValidationState:function(e){var t=e.dirty,r=e.validated,i=e.valid,a=void 0===i?null:i;return t||r?a:null},setLanguage:function(){"en"==this.$i18n.locale||"en-US"==this.$i18n.locale?Object(l["localize"])("en",d):Object(l["localize"])("sk",n)},clickUpdateVisitor:function(){var e=this;this.processing=!0,this.UpdateVisitor({visitor:this.visitor}).then((function(t){e.processing=!1,t&&(e.visitor=t,e.openSuccess("Návšteva bola upravená"))}))},clickSendToEHealth:function(){var e=this;confirm("Potvrďte prosím odoslanie do NCZI")&&(this.processingE=!0,this.SendResultToEHealth({visitorId:this.visitor.id}).then((function(t){t&&e.FindVisitor({query:e.$route.params.visitorId}).then((function(t){e.processingE=!1,t?(e.visitor=t,e.openSuccess("Návšteva bola odoslaná do NCZI")):e.resetVisitor()}))})))},clickUpdateEnc:function(){var e=this;this.data.placeProviderId=this.placePrivider.placeProviderId,this.UpdateSensitiveData({data:this.data}).then((function(t){t&&e.openSuccess("Informácie o prevádzkovateľovi boli upravené")}))}})},v=p,g=r("2877"),h=Object(g["a"])(v,i,a,!1,null,null,null);t["default"]=h.exports}}]);