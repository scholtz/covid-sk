(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225dc8"],{e5ce:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"app-pane-lgray py-2"},[s("b-container",[s("h1",[t._v(t._s(t.$t("testerRegistredClient")))]),s("p",[t._v(t._s(t.$t("testerHelperAdvice")))])])],1),"select"===t.action?s("b-container",{staticClass:"my-4"},[t.needPlaceConfirmation?s("b-row",[s("b-col",[s("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(this.$store.state.user.me.name)+", "+t._s(t.$t("testerAtFirstChoosePlace"))+": "),this.$store.state.user.me.placeObj?s("span",[t._v(" "+t._s(this.$store.state.user.me.placeObj.name)+" "),s("button",{staticClass:"btn btn-primary m-2",on:{click:function(e){return t.$router.push("/tester/place")}}},[t._v(" "+t._s(t.$t("testerChange"))+" ")])]):s("span",[s("button",{staticClass:"btn btn-primary m-2",on:{click:function(e){return t.$router.push("/tester/place")}}},[t._v(" "+t._s(t.$t("testerChoosePlace"))+" ")])])])])],1):t._e(),s("b-row",[s("b-col",[s("p",[t._v(t._s(t.$t("testerChooseClientReading"))+":")]),s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="rc"}}},[t.$store.state.config.RC_IS_INSURANCE?s("span",[t._v(t._s(t.$t("testerPersonalIdentificationNumberIns")))]):s("span",[t._v(t._s(t.$t("testerPersonalIdentificationNumber")))]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]),s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="regCodeQR"}}},[t._v(" "+t._s(t.$t("testerRegistrationCodeOrQRCode"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]),s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:function(e){t.action="regCodeEmployee"}}},[t._v(" "+t._s(t.$t("testerEmployeeCode"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]),s("button",{staticClass:"btn btn-secondary my-4 mr-4",on:{click:function(e){return t.newVisitor()}}},[t._v(" "+t._s(t.$t("testerPersonWithNoRegistration"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])],1)],1):t._e(),"rc"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" "+t._s(t.$t("testerCancel"))+" ")]),t.$store.state.config.RC_IS_INSURANCE?s("label",{attrs:{for:"codeRc"}},[t._v(t._s(t.$t("testerPersonalIdentificationNumberIns")))]):s("label",{attrs:{for:"codeRc"}},[t._v(t._s(t.$t("testerPersonalIdentificationNumber")))]),s("b-input",{attrs:{id:"codeRc"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.loadByRC}},[t._v(" "+t._s(t.$t("testerCheckRegistration"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1)],1)],1):t._e(),"regCodeEmployee"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" "+t._s(t.$t("testerCancel"))+" ")]),s("label",{attrs:{for:"employeeNo"}},[t._v(t._s(t.$t("testerEmployeeCode")))]),s("b-input",{attrs:{id:"employeeNo"},model:{value:t.employeeNo,callback:function(e){t.employeeNo=e},expression:"employeeNo"}}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.loadByEmployee}},[t._v(" "+t._s(t.$t("testerLoadRegistration"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1)],1)],1):t._e(),"regCodeQR"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" "+t._s(t.$t("testerCancel"))+" ")]),s("label",{attrs:{for:"code1"}},[t._v(t._s(t.$t("testerRegistrationCode")))]),s("b-input",{attrs:{id:"code1"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("div",{staticClass:"m-4"}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.confirmCode}},[t._v(" "+t._s(t.$t("testerLoadRegistrationCode"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("qrcode-stream",{on:{decode:t.onDecodeQR}})],1)],1)],1):t._e(),"regCode"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" "+t._s(t.$t("testerCancel"))+" ")]),s("label",{attrs:{for:"codeQR"}},[t._v(t._s(t.$t("testerRegistrationCode")))]),s("b-input",{attrs:{id:"codeQR"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("div",{staticClass:"m-4"}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.confirmCode}},[t._v(" "+t._s(t.$t("testerLoadRegistrationCode"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("StreamBarcodeReader",{on:{decode:t.onDecode}})],1)],1)],1):t._e(),"verifyPerson"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" "+t._s(t.$t("testerCancel"))+" ")]),s("h2",[t._v(t._s(t.$t("testerVerifyPerson"))+":")]),s("table",{staticClass:"table"},[s("tr",[s("td",[t._v(t._s(t.$t("testerRegistrationCode"))+":")]),s("td",[t.visitor.id?s("span",[t._v(t._s(t.visitor.id))]):s("span",{staticClass:"badge badge-danger ml-5"},[t._v(t._s(t.$t("testerRegistrationCodeInvalid")))])])]),s("tr",[s("td",[t._v(t._s(t.$t("testerName"))+":")]),s("td",[t._v(t._s(t.visitor.firstName)+" "+t._s(t.visitor.lastName))])]),t.visitor.insurance?s("tr",[s("td",[t._v(t._s(t.$t("testerInsurance"))+":")]),s("td",[t._v(" "+t._s(t.getInsurance())+" "),"24"===t.visitor.insurance?s("span",[t._v("- Dôvera")]):t._e(),"25"===t.visitor.insurance?s("span",[t._v("- VšZP")]):t._e(),"27"===t.visitor.insurance?s("span",[t._v("- Union")]):t._e(),"98"===t.visitor.insurance?s("span",[t._v("- EÚ poistenec")]):t._e(),"99"===t.visitor.insurance?s("span",[t._v("- Cudzinec")]):t._e()])]):t._e(),"idcard"===t.visitor.personType||"child"===t.visitor.personType?s("tr",[t.$store.state.config.RC_IS_INSURANCE?s("td",[t._v(" "+t._s(t.$t("testerPersonalIdentificationNumberOrPassportIns"))+": ")]):s("td",[t._v(" "+t._s(t.$t("testerPersonalIdentificationNumberOrPassport"))+": ")]),s("td",[t._v(" "+t._s(t.visitor.rc)+" "),t.validatePersonalNumber?s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.$t("testerInvalidPesonalNumberNotification")))]):t._e(),t.invalidID?s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.$t("testerInvalidIDNotification")))]):t._e()],1)]):t._e(),"foreign"===t.visitor.personType?s("tr",[s("td",[t._v(t._s(t.$t("testerPassport"))+":")]),s("td",[t._v(" "+t._s(t.visitor.passport)+" "),t.invalidID?s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.$t("testerInvalidIDNotification")))]):t._e()],1)]):t._e(),s("tr",[s("td",[t._v(t._s(t.$t("testerAddress"))+":")]),s("td",[t._v(" "+t._s(t.visitor.address)+" "),t.visitor.address?t._e():s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.$t("testerInvalidAddressNotification")))])],1)]),s("tr",[s("td",[t._v(t._s(t.$t("testerEmail"))+":")]),s("td",[t._v(t._s(t.visitor.email))])]),s("tr",[s("td",[t._v(t._s(t.$t("testerPhoneNumber"))+":")]),s("td",[t._v(t._s(t.visitor.phone))])]),s("tr",[s("td",[t._v(t._s(t.$t("testerBirthDate"))+":")]),s("td",[t._v(" "+t._s(t.visitor.birthDayDay)+"."+t._s(t.visitor.birthDayMonth)+"."+t._s(t.visitor.birthDayYear)+" "),t.visitor.birthDayDay&&t.visitor.birthDayMonth&&t.visitor.birthDayYear?t._e():s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.$t("testerInvalidBirthDateNotification")))]),t.validateRCWithDate(t.visitor.birthDayDay,t.visitor.birthDayMonth,t.visitor.birthDayYear,t.visitor.rc,t.visitor.personType)?s("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.$t("testerInvalidBirthDateNotification")))]):t._e()],1)]),"test-not-taken"===t.visitor.result||"test-not-processed"===t.visitor.result||"positive-certiciate-taken"===t.visitor.result||"positive-certifiacte-taken"===t.visitor.result||"positive"===t.visitor.result?s("tr",[s("td",[t._v(t._s(t.$t("testerState"))+":")]),s("td",["test-not-taken"===t.visitor.result?s("span",[t._v(" "+t._s(t.$t("resultsTestNotTaken"))+" ")]):"test-to-be-repeated"===t.visitor.result?s("span",[s("b-badge",{attrs:{variant:"info"}},[t._v(t._s(t.$t("resultsTestToRepeat")))])],1):"test-not-processed"===t.visitor.result?s("span",[s("b-badge",{attrs:{variant:"info"}},[t._v(t._s(t.$t("resultsTestNotProcessed")))])],1):"positive-certifiacte-taken"===t.visitor.result||"positive-certiciate-taken"===t.visitor.result||"positive"===t.visitor.result?s("span",[s("b-badge",{attrs:{variant:"danger"}},[s("span",{domProps:{innerHTML:t._s(t.$t("resultsTestPositiveCertNotTaken"))}})])],1):t._e()])]):t._e(),s("tr",[s("td"),s("td",[t.visitor.id?s("button",{staticClass:"btn btn-primary my-4 mr-4",attrs:{disabled:t.invalidID},on:{click:function(e){t.action="testSetCodeQR"}}},[t._v(" "+t._s(t.$t("testerSetCodeQR"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]):t._e(),t.visitor.id?s("button",{staticClass:"btn btn-primary my-4 mr-4 collapse",on:{click:function(e){t.action="testSetCode"}}},[t._v(" "+t._s(t.$t("testerSetCode"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])]):t._e(),s("button",{staticClass:"btn btn-primary my-4",on:{click:function(e){return t.$router.push("/tester/unannouncedVisitor")}}},[t._v(" "+t._s(t.$t("testerEditPersonalData"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])])])])])],1)],1):t._e(),"testSetCode"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" "+t._s(t.$t("testerCancel"))+" ")]),s("label",{attrs:{for:"testingset1"}},[t._v(t._s(t.$t("testerScanTestCode"))+":")]),s("b-input",{attrs:{id:"testingset1"},model:{value:t.testingset,callback:function(e){t.testingset=e},expression:"testingset"}}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.save}},[t._v(" "+t._s(t.$t("testerSave"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("StreamBarcodeReader",{on:{decode:t.onDecode}})],1)],1)],1):t._e(),"testSetCodeQR"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-light btn-sm float-right bg-light my-2",on:{click:t.reset}},[t._v(" "+t._s(t.$t("testerCancel"))+" ")]),s("label",{attrs:{for:"testingset1"},domProps:{innerHTML:t._s(t.$t("testerScanTestCodeAndSet"))}}),s("b-input",{attrs:{id:"testingset1"},model:{value:t.testingset,callback:function(e){t.testingset=e},expression:"testingset"}}),s("button",{staticClass:"btn btn-primary my-4",on:{click:t.save}},[t._v(" "+t._s(t.$t("testerSet"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1),s("b-col",[s("qrcode-stream",{on:{decode:t.onDecodeQR}})],1)],1)],1):t._e(),"old"===t.action?s("b-container",{staticClass:"my-4"},[s("b-row",[s("b-col",{attrs:{cols:"4"}},[s("b-form-group",{attrs:{label:t.$t("testerScanningData")}},[s("b-form-radio",{attrs:{name:"person-type",value:"code"},model:{value:t.scanningData,callback:function(e){t.scanningData=e},expression:"scanningData"}},[t._v(t._s(t.$t("testerRegistationCode")))]),s("b-form-radio",{attrs:{name:"person-type",value:"testingset"},model:{value:t.scanningData,callback:function(e){t.scanningData=e},expression:"scanningData"}},[t._v(t._s(t.$t("testerTestTube")))])],1)],1),s("b-col",{attrs:{cols:"8"}},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("label",{attrs:{for:"code"}},[t._v(t._s(t.$t("testerRegistationCode")))]),s("b-input",{ref:"code",attrs:{id:"code"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),"check"===t.state||"visitor-error"===t.state?s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-primary my-4 mr-4",on:{click:t.load}},[t._v(" "+t._s(t.$t("testerCheckData"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])]):t._e(),"loading-data"===t.state?s("b-col",{attrs:{cols:"12"}},[s("div",[s("B",[t._v(t._s(t.$t("testerLoadingData")))]),t._v(" "),s("b-spinner")],1)]):t._e(),"visitor-loaded"===t.state?s("b-col",{attrs:{cols:"12"}},[s("div",[t._v(" "+t._s(t.$t("testerName"))+": "+t._s(t.visitor.firstName)+" "+t._s(t.visitor.lastName)+" ")]),s("div",[t._v(t._s(t.$t("testerInsurance"))+": "+t._s(t.visitor.insurance))])]):t._e(),s("b-col",{attrs:{cols:"12"}},[s("label",{attrs:{for:"testingset"}},[t._v(t._s(t.$t("testerTestTube")))]),s("b-input",{ref:"testingset",attrs:{id:"testingset"},model:{value:t.testingset,callback:function(e){t.testingset=e},expression:"testingset"}})],1),"visitor-loaded"===t.state?s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-primary my-4",on:{click:t.save}},[t._v(" "+t._s(t.$t("testerSave"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])]):t._e()],1)],1)],1),s("StreamBarcodeReader",{on:{decode:t.onDecode,loaded:t.onLoaded}})],1):t._e()],1)},i=[],o=s("bb6f"),a=s("f337"),n=s("2f62"),c=s("c1df"),l=s.n(c);function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function v(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){u(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var b={components:{StreamBarcodeReader:a["a"],QrcodeStream:o["QrcodeStream"]},data:function(){return{action:"select",state:"check",visitor:{},scanningData:"code",employeeNo:"",code:"",lastCode:"",testingset:"",readerSize:{width:120,height:90},detecteds:[]}},computed:{invalidID:function(){return"foreign"===this.visitor.personType?!this.visitor.passport:!this.visitor.rc},validatePersonalNumber:function(){try{var t=0,e=this.visitor.rc;if(e=e.replace("/",""),e=e.replace(" ",""),0==e.length)return!1;if(e.length<9)return!0;var s=parseInt(e.substr(0,2),10),r=parseInt(e.substr(2,2),10),i=parseInt(e.substr(4,2),10);if(9==e.length&&s<54)return!1;var o=0;10==e.length&&(o=parseInt(e.substr(9,1)));var a=parseInt(e.substr(0,9))%11;if(10==a&&(a=0),a!=o)return!0;s+=s<54?2e3:1900,r>70&&s>2003?r-=70:r>50?r-=50:r>20&&s>2003&&(r-=20);var n=new Date;if(s+t>n.getFullYear())return!0;if(0==r)return!0;if(r>12)return!0;if(0==i)return!0;if(i>31)return!0}catch(c){return!0}return!1},needPlaceConfirmation:function(){return!(!this.$store.state.user||!this.$store.state.user.me)&&(!this.$store.state.user.me.place||l()(this.$store.state.user.me.placeLastCheck).isBefore(l()().add(-20,"hours")))}},mounted:function(){var t=this;this.$route.params.id&&(this.code=this.$route.params.id,this.GetVisitor({visitorCode:this.code}).then((function(e){e?(t.visitor=e,t.action="verifyPerson"):t.state="visitor-error"}))),this.$store.state.user.me&&this.$store.state.user.me.placeLastCheck||this.ReloadMe()},methods:v(v(v(v({},Object(n["b"])({ConnectVisitorToTest:"result/ConnectVisitorToTest",GetVisitor:"result/GetVisitor",GetVisitorByRC:"result/GetVisitorByRC",LoadVisitorByEmployeeNumber:"result/LoadVisitorByEmployeeNumber",ReloadMe:"user/ReloadMe",SetLocation:"user/SetLocation"})),Object(n["b"])({openSuccess:"snackbar/openSuccess"})),Object(n["c"])({setLastVisitor:"result/setLastVisitor"})),{},{load:function(){var t=this;this.visitor={},this.setLastVisitor({}),this.state="loading-data",this.lastCode=this.code,this.GetVisitor({visitorCode:this.code}).then((function(e){e?(t.visitor=e,t.action="verifyPerson"):t.state="visitor-error"}))},loadByRC:function(){var t=this;this.visitor={},this.setLastVisitor({}),this.state="loading-data",this.GetVisitorByRC({rc:this.code}).then((function(e){e?(t.code=e.id,t.visitor=e,t.action="verifyPerson"):t.state="visitor-error"}))},loadByEmployee:function(){var t=this;this.visitor={},this.setLastVisitor({}),this.state="loading-data",this.LoadVisitorByEmployeeNumber({employeeNumber:this.employeeNo}).then((function(e){e?(t.employeeNo="",t.code=e.id,t.visitor=e,t.action="verifyPerson"):t.state="visitor-error"}))},save:function(){var t=this;this.ConnectVisitorToTest({visitorCode:this.code,testCode:this.testingset}).then((function(e){e&&(t.action="select",t.code="",t.testingset="",t.setLastVisitor({}))}))},onDecode:function(t){var e=this;t&&("regCode"==this.action?(this.code=t,this.lastCode!==this.code&&this.load().then((function(t){t&&(e.action="verifyPerson")}))):this.testingset=t)},onDecodeQR:function(t){var e=this;t&&("regCodeQR"==this.action?(this.code=t,this.lastCode!==this.code&&this.load().then((function(t){t&&(e.action="verifyPerson")}))):this.testingset=t)},confirmCode:function(){this.action="verifyPerson",this.load()},reset:function(){this.action="select",this.code="",this.testingset=""},newVisitor:function(){this.visitor={},this.setLastVisitor({}),this.$router.push("/tester/unannouncedVisitor")},validateRCWithDate:function(t,e,s,r,i){if(!t||!e||!s)return!0;if(i||r||(i="foreign"),"foreign"===i)return!1;if(void 0===r)return!1;var o=r;if(o=o.replace("/",""),o=o.replace(" ",""),0==o.length)return!1;if(o.length<9)return!0;var a=parseInt(o.substr(0,2),10),n=parseInt(o.substr(2,2),10),c=parseInt(o.substr(4,2),10);return s-=1900,a>=100&&(a-=100),s>=100&&(s-=100),n>50&&(n-=50),a!==s||n!==e||c!==t},confirmPlace:function(){var t=this;this.SetLocation({placeId:this.$store.state.user.me.place}).then((function(e){e&&t.ReloadMe().then((function(e){e&&t.openSuccess(t.$t("testerSuccessfulConfirmation"))}))}))},getInsurance:function(){var t=this,e=this.$store.state.insurance.list.filter((function(e){return e.value===t.visitor.insurance}));return e.length>0?this.visitor.insurance+" - "+e[0].text:this.visitor.insurance}})},h=b,p=s("2877"),_=Object(p["a"])(h,r,i,!1,null,null,null);e["default"]=_.exports}}]);