(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be2cf37c"],{"2ebf":function(e,t,o){},"6a09":function(e,t,o){"use strict";o("2ebf")},b61a:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"app-pane-lgray py-2"},[o("b-container",[o("h1",[e._v(e._s(e.$t("selfCertsExport")))]),o("p",[e._v(" "+e._s(e.$t("selfCertsExportInfo"))+" ")])])],1),o("b-container",{staticClass:"py-4"},[o("b-form",{on:{submit:function(t){return t.preventDefault(),e.clickRegDownload(t)}}},[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:e.$t("selfCertsEmployeeId"),"label-for":"employeeId","label-cols-sm":"4","label-cols-lg":"2"}},[o("b-input",{ref:"employeeId",attrs:{required:"",autofocus:""},model:{value:e.employeeId,callback:function(t){e.employeeId=t},expression:"employeeId"}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{"offset-lg":"2","offset-sm":"4"}},[o("button",{staticClass:"btn btn-primary my-4",attrs:{type:"submit",disabled:e.processingRegDownload}},[e._v(" "+e._s(e.$t("selfCertsLoad"))+" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[o("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.processingRegDownload?o("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1)])],1)],1),e.employeeLoaded?o("b-form",{on:{submit:function(t){return t.preventDefault(),e.clickRegisterTest(t)}}},[o("b-row",{staticClass:"py-1"},[o("b-col",[o("b-form-group",{attrs:{label:e.$t("selfCertsName"),"label-for":"name","label-cols-sm":"4","label-cols-lg":"2"}},[o("b-input",{ref:"name",attrs:{id:"name",disabled:""},model:{value:e.toSend.name,callback:function(t){e.$set(e.toSend,"name",t)},expression:"toSend.name"}})],1)],1)],1),o("b-row",{staticClass:"py-1"},[o("b-col",[o("b-form-group",{attrs:{label:e.$t("selfCertsEmail"),"label-for":"email","label-cols-sm":"4","label-cols-lg":"2"}},[o("b-input",{ref:"email",attrs:{id:"email"},model:{value:e.toSend.email,callback:function(t){e.$set(e.toSend,"email",t)},expression:"toSend.email"}})],1)],1)],1),o("b-row",{staticClass:"py-1"},[o("b-col",[o("b-form-group",{attrs:{label:e.$t("selfCertsPhone"),"label-for":"phone","label-cols-sm":"4","label-cols-lg":"2"}},[o("b-input",{ref:"phone",attrs:{id:"phone"},model:{value:e.toSend.phone,callback:function(t){e.$set(e.toSend,"phone",t)},expression:"toSend.phone"}})],1)],1)],1),o("b-row",{staticClass:"py-1"},[o("b-col",[o("b-form-group",{attrs:{label:e.$t("selfCertsProduct"),"label-for":"product","label-cols-sm":"4","label-cols-lg":"2"}},[o("b-form-select",{attrs:{id:"product",name:"product",required:"",options:e.products,"value-field":"id","text-field":"name"},model:{value:e.toSend.productId,callback:function(t){e.$set(e.toSend,"productId",t)},expression:"toSend.productId"}})],1)],1)],1),o("b-row",{staticClass:"py-1"},[o("b-col",[o("b-form-group",{attrs:{label:e.$t("selfCertsTime"),"label-for":"time","label-cols-sm":"4","label-cols-lg":"2"}},[o("VueCtkDateTimePicker",{ref:"time",attrs:{label:e.$t("selfCertsTime"),required:"",id:"time","time-zone":"Europe/Bratislava",format:"YYYY-MM-DDTHH:mm:ss.SSSSZ",formatted:"llll",locale:e.locale},model:{value:e.toSend.time,callback:function(t){e.$set(e.toSend,"time",t)},expression:"toSend.time"}})],1)],1)],1),o("b-row",{staticClass:"py-1"},[o("b-col",[o("b-form-group",{attrs:{label:e.$t("selfCertsResult"),"label-for":"result","label-cols-sm":"4","label-cols-lg":"2"}},[o("b-form-select",{attrs:{id:"result",name:"result"},model:{value:e.toSend.result,callback:function(t){e.$set(e.toSend,"result",t)},expression:"toSend.result"}},e._l(e.results,(function(t){return o("b-select-option",{key:t.item,attrs:{value:t.item}},[e._v(" "+e._s(e.$t(t.name))+" ")])})),1)],1)],1)],1),o("b-row",[o("b-col",{attrs:{"offset-lg":"2","offset-sm":"4"}},[o("button",{staticClass:"btn btn-primary my-4",attrs:{type:"submit",disabled:e.processingRegInsert}},[e._v(" Zaregistruj test "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[o("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.processingRegInsert?o("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1)])],1)],1):e._e()],1)],1)},l=[],r=o("e30a"),n=o.n(r),a=(o("b40d"),o("2f62"));function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){m(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var u={components:{VueCtkDateTimePicker:n.a},data:function(){return{employeeId:"",personalNumber:"",code:"",employee:{},employeeLoaded:!1,processingDownload:!1,processingRegDownload:!1,processingRegInsert:!1,loading:!0,products:[],toSend:{result:"negative"},results:[{item:"negative",name:"selfCertsNegative"},{item:"positive",name:"selfCertsPositive"}]}},computed:{locale:function(){return this.$i18n.locale}},mounted:function(){var e=this;this.ListExternalProducts().then((function(t){t&&(e.products=t,e.loading=!1)}))},watch:{employeeLoaded:function(e){var t=this;e?setTimeout((function(){t.$refs.email.focus()}),0):setTimeout((function(){t.$refs.employeeId.focus()}),0)}},methods:c(c(c({},Object(a["b"])({GetNextTest:"result/GetNextTest",RemoveFromDocQueue:"result/RemoveFromDocQueue",PrintCertificateByDocumentManager:"result/PrintCertificateByDocumentManager",ListExternalProducts:"placeProvider/ListExternalProducts",LoadEmployeeByEmployeeNumber:"user/LoadEmployeeByEmployeeNumber",RegisterEmployeeByDocumenter:"user/RegisterEmployeeByDocumenter"})),Object(a["b"])({openSuccess:"snackbar/openSuccess"})),{},{clickRegDownload:function(){var e=this;this.employeeLoaded=!1,this.processingRegDownload=!0,this.LoadEmployeeByEmployeeNumber({employeeNumber:this.employeeId}).then((function(t){t&&t.lastName&&(e.employee=t,e.toSend.name=e.employee.firstName+" "+e.employee.lastName,e.toSend.email=e.employee.email,e.employee.customEmail&&(e.toSend.email=e.employee.customEmail),e.toSend.employeeId=e.employeeId,e.toSend.phone=e.employee.phone,e.employee.customPhone&&(e.toSend.phone=e.employee.customPhone),e.employeeLoaded=!0),e.processingRegDownload=!1}))},clickRegisterTest:function(){var e=this;this.processingRegInsert=!0,this.RegisterEmployeeByDocumenter(this.toSend).then((function(t){t&&(e.openSuccess(e.$t("selfCertsTestInsertedMessage")),e.toSend={result:"negative"},e.employeeLoaded=!1),e.processingRegInsert=!1}))},parseRC:function(){return this.visitor&&this.visitor.rc?this.visitor.rc.substring(0,6):""}})},p=u,b=(o("6a09"),o("2877")),d=Object(b["a"])(p,s,l,!1,null,null,null);t["default"]=d.exports}}]);