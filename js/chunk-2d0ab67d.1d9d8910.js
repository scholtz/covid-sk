(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab67d"],{"14ae":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"app-pane-lgray p-5"},[r("b-container",[r("b-row",[r("b-col",[r("h1",[e._v(e._s(e.$t("checkTitle")))])])],1)],1)],1),e.loading?r("b-container",[r("b-row",[r("b-col",[r("b-spinner",{attrs:{label:e.$t("checkLoadingData")}})],1)],1)],1):e._e(),e.loading?e._e():r("b-container",[r("b-row",[r("b-col",[e.result.id?r("table",[r("tr",[r("th",[e._v(e._s(e.$t("checkResultCode"))+":")]),r("td",[e._v(e._s(e.result.id))])]),r("tr",[r("th",[e._v(e._s(e.$t("checkTestedPersonName"))+":")]),r("td",[e._v(e._s(e.result.name))])]),e.result.result?r("tr",[r("th",[e._v(e._s(e.$t("checkResultCode"))+":")]),r("td",[e._v(" "+e._s(e.result.result)+" "),"negative"===e.result.result?r("b-badge",{attrs:{variant:"success"}},[e._v(e._s(e.$t("checkNegativeMessage")))]):e._e(),"positive"===e.result.result?r("b-badge",{attrs:{variant:"danger"}},[e._v(e._s(e.$t("checkPositiveMessage")))]):e._e()],1)]):e._e(),r("tr",[r("th",[e._v(e._s(e.$t("checkTestTime"))+":")]),r("td",[e._v(e._s(e._f("formatDateTime")(e.result.time)))])]),r("tr",[r("th",[e._v(e._s(e.$t("checkTestedBy"))+":")]),r("td",[e._v(e._s(e.result.testingEntity))])]),r("tr",[r("th",[e._v(e._s(e.$t("checkTestingAddress"))+":")]),r("td",[e._v(e._s(e.result.testingAddress))])])]):r("div",{staticClass:"alert alert-danger my-4"},[e._v(" "+e._s(e.$t("checkTestInvalidMessage"))+" ")])])],1)],1)],1)},n=[],c=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o={data:function(){return{result:{},loading:!0}},mounted:function(){var e=this;this.VerifyResult({id:this.$route.params.id}).then((function(t){console.log("this.result",e.result,t),e.result=t||{},e.loading=!1}))},methods:a({},Object(c["b"])({VerifyResult:"result/VerifyResult"}))},u=o,d=r("2877"),b=Object(d["a"])(u,s,n,!1,null,null,null);t["default"]=b.exports}}]);