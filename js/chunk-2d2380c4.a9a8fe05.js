(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2380c4"],{fe5d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"app-pane-lgray py-2"},[a("b-container",[a("h1",[t._v(t._s(t.$t("formEditProviderDetailsTitle")))])])],1),t.loading?a("b-container",{staticClass:"py-3"},[a("b-row",[a("b-col",[a("b-spinner",{attrs:{label:"Loading..."}})],1)],1)],1):t._e(),t.loading?t._e():a("b-container",{staticClass:"py-3"},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.clickUpdateEnc(e)}}},[a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"eZdravieUser"}},[t._v("EZdravie užívateľ")])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"eZdravieUser",attrs:{id:"eZdravieUser",autofocus:""},model:{value:t.data.eZdravieUser,callback:function(e){t.$set(t.data,"eZdravieUser",e)},expression:"data.eZdravieUser"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"eZdraviePass"}},[t._v("EZdravie heslo")])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"eZdraviePass",attrs:{type:"password",id:"eZdraviePass"},model:{value:t.data.eZdraviePass,callback:function(e){t.$set(t.data,"eZdraviePass",e)},expression:"data.eZdraviePass"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{"offset-md":"4"}},[a("button",{staticClass:"btn btn-primary my-4",attrs:{type:"submit"}},[t._v(" Upraviť údaje pre moje ezdravie "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[a("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])],1)],1),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.clickUpdate(e)}}},[a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"MainContact"}},[t._v(t._s(t.$t("ppMainContact")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"MainContact",attrs:{id:"MainContact"},model:{value:t.pp.mainContact,callback:function(e){t.$set(t.pp,"mainContact",e)},expression:"pp.mainContact"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"Country"}},[t._v(t._s(t.$t("ppCountry")))])]),a("b-col",{attrs:{md:"8"}},[a("b-form-select",{ref:"Country",staticClass:"mb-3",attrs:{options:t.CountryOptions,"value-field":"item","text-field":"name",id:"Country"},model:{value:t.pp.country,callback:function(e){t.$set(t.pp,"country",e)},expression:"pp.country"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"CompanyId"}},[t._v(t._s(t.$t("ppCompanyId")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"CompanyId",attrs:{id:"CompanyId"},model:{value:t.pp.companyId,callback:function(e){t.$set(t.pp,"companyId",e)},expression:"pp.companyId"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"CompanyName"}},[t._v(t._s(t.$t("ppCompanyName")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"CompanyName",attrs:{id:"CompanyName"},model:{value:t.pp.companyName,callback:function(e){t.$set(t.pp,"companyName",e)},expression:"pp.companyName"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"VAT"}},[t._v(t._s(t.$t("ppVAT")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"VAT",attrs:{id:"VAT"},model:{value:t.pp.vat,callback:function(e){t.$set(t.pp,"vat",e)},expression:"pp.vat"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"MainEmail"}},[t._v(t._s(t.$t("ppMainE-mail")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"MainEmail",attrs:{id:"MainEmail"},model:{value:t.pp.mainEmail,callback:function(e){t.$set(t.pp,"mainEmail",e)},expression:"pp.mainEmail"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"PrivatePhone"}},[t._v(t._s(t.$t("ppPrivatePhone")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"PrivatePhone",attrs:{id:"PrivatePhone"},model:{value:t.pp.privatePhone,callback:function(e){t.$set(t.pp,"privatePhone",e)},expression:"pp.privatePhone"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"PublicEmail"}},[t._v(t._s(t.$t("ppPublicE-mail")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"PublicEmail",attrs:{id:"PublicEmail"},model:{value:t.pp.publicEmail,callback:function(e){t.$set(t.pp,"publicEmail",e)},expression:"pp.publicEmail"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"PublicPhone"}},[t._v(t._s(t.$t("ppPublicPhone")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"PublicPhone",attrs:{id:"PublicPhone"},model:{value:t.pp.publicPhone,callback:function(e){t.$set(t.pp,"publicPhone",e)},expression:"pp.publicPhone"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"supportName"}},[t._v(t._s(t.$t("ppSupportName")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"supportName",attrs:{id:"supportName"},model:{value:t.pp.supportName,callback:function(e){t.$set(t.pp,"supportName",e)},expression:"pp.supportName"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"supportEmail"}},[t._v(t._s(t.$t("ppSupportEmail")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"supportEmail",attrs:{id:"supportEmail"},model:{value:t.pp.supportEmail,callback:function(e){t.$set(t.pp,"supportEmail",e)},expression:"pp.supportEmail"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{md:"4"}},[a("label",{attrs:{for:"supportPhone"}},[t._v(t._s(t.$t("ppSupportPhone")))])]),a("b-col",{attrs:{md:"8"}},[a("b-input",{ref:"supportPhone",attrs:{id:"supportPhone"},model:{value:t.pp.supportPhone,callback:function(e){t.$set(t.pp,"supportPhone",e)},expression:"pp.supportPhone"}})],1)],1),a("b-row",{staticClass:"py-1"},[a("b-col",{attrs:{"offset-md":"4"}},[a("button",{staticClass:"btn btn-primary my-4",attrs:{type:"submit"}},[t._v(" Upraviť správcu odberných miest "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[a("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])],1)],1)],1)],1)},s=[],o=a("a34a"),i=a.n(o),p=a("2f62");function n(t,e,a,r,s,o,i){try{var p=t[o](i),n=p.value}catch(l){return void a(l)}p.done?e(n):Promise.resolve(n).then(r,s)}function l(t){return function(){var e=this,a=arguments;return new Promise((function(r,s){var o=t.apply(e,a);function i(t){n(o,r,s,i,p,"next",t)}function p(t){n(o,r,s,i,p,"throw",t)}i(void 0)}))}}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b={data:function(){return{loading:!0,agreement:!1,pp:{CompanyName:"",CompanyId:"",VAT:"",Country:"SK",MainEmail:"",PrivatePhone:"",PublicEmail:"",PublicPhone:"",Web:""},data:{placeProviderId:"",eZdraviePass:"",eZdravieUser:""},CountryOptions:[{item:"SK",name:"Slovensko"},{item:"CZ",name:"Česko"},{item:"AT",name:"Rakúsko"},{item:"DE",name:"Nemecko"}]}},computed:{ppStore:function(){return this.$store.state?this.$store.state.user.tokenData.pp:""},placePrivider:function(){var t=this;return this.$store.state.placeProvider.places?this.$store.state.placeProvider.places.find((function(e){return e.placeProviderId===t.ppStore})):{}}},watch:{placePrivider:function(){this.pp=this.placePrivider,console.log("pp",this.pp),this.loading=!1}},mounted:function(){var t=this;this.ListPrivate(),this.GetSensitiveData().then((function(e){e&&(e.eZdraviePass&&(e.eZdraviePass=""),t.data=e)}))},methods:u(u(u({},Object(p["b"])({UpdatePP:"placeProvider/UpdatePP",UpdateSensitiveData:"placeProvider/UpdateSensitiveData",GetSensitiveData:"placeProvider/GetSensitiveData",ListPrivate:"placeProvider/ListPrivate"})),Object(p["b"])({openSuccess:"snackbar/openSuccess"})),{},{clickUpdate:function(){var t=this;return l(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.UpdatePP({pp:t.pp}).then((function(e){e&&t.ListPrivate().then((function(e){e&&(t.pp=t.placePrivider,t.openSuccess("Informácie o prevádzkovateľovi boli upravené"))}))}));case 2:t.$refs.MainContact.focus();case 3:case"end":return e.stop()}}),e)})))()},clickUpdateEnc:function(){var t=this;return l(i.a.mark((function e(){var a;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.placeProviderId=t.placePrivider.placeProviderId,e.next=3,t.UpdateSensitiveData({data:t.data});case 3:a=e.sent,a&&t.openSuccess("Informácie o prevádzkovateľovi boli upravené"),t.$refs.eZdravieUser.focus();case 6:case"end":return e.stop()}}),e)})))()}})},m=b,v=a("2877"),f=Object(v["a"])(m,r,s,!1,null,null,null);e["default"]=f.exports}}]);