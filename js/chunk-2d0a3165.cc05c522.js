(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3165"],{"014b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"app-pane-lgray py-2"},[n("b-container",[n("h1",[t._v("Oznámenie výsledku testu")]),n("b-form-checkbox",{attrs:{name:"useQR",switch:""},model:{value:t.useQR,callback:function(e){t.useQR=e},expression:"useQR"}},[t._v(" Používať QR kódy pre testovacie sady ")])],1)],1),"select"===t.action?n("b-container",[n("h2",[t._v("Vyberte čo idete nascanovať")]),n("b-row",[n("b-col",[n("button",{staticClass:"my-2 btn btn-primary bg-danger",on:{click:function(e){t.action="sick"}}},[t._v(" Idem nascanovať pozitívne výsledky testov - Chorí na Covid-19 ")])])],1),n("b-row",[n("b-col",[n("button",{staticClass:"my-2 btn btn-primary bg-warning text-dark",on:{click:function(e){t.action="repeat"}}},[t._v(" Idem nascanovať chybné výsledky testov - Na pretestovanie ")])])],1),n("b-row",[n("b-col",[n("button",{staticClass:"my-2 btn btn-primary bg-success",on:{click:function(e){t.action="healthy"}}},[t._v(" Idem nascanovať negatívne výsledky testov - Zdraví ")])])],1)],1):t._e(),"sick"===t.action?n("b-container",[n("button",{staticClass:"float-right bg-light my-2",on:{click:t.reset}},[t._v("Zrušiť")]),n("h2",[t._v("Vyberáte pozitívne nálezy - Chorí")])]):t._e(),"repeat"===t.action?n("b-container",[n("button",{staticClass:"float-right bg-light my-2",on:{click:t.reset}},[t._v("Zrušiť")]),n("h2",[t._v("Vyberáte chybné nálezy - Zopakovať test")])]):t._e(),"healthy"===t.action?n("b-container",[n("button",{staticClass:"float-right bg-light my-2",on:{click:t.reset}},[t._v("Zrušiť")]),n("h2",[t._v("Vyberáte negatívne nálezy - Zdraví")])]):t._e(),"select"!==t.action?n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("label",{attrs:{for:"next"}},[t._v("Ďalší kód")]),n("b-input",{ref:"next",attrs:{id:"next"},model:{value:t.next,callback:function(e){t.next=e},expression:"next"}}),n("button",{staticClass:"btn btn-primary my-2",on:{click:function(e){return t.data.push({code:t.next,state:"Na odoslanie"})}}},[t._v(" Pridaj ")])],1)],1),n("b-table",{attrs:{items:t.data,fields:t.fields},scopedSlots:t._u([{key:"cell(id)",fn:function(e){return[n("button",{staticClass:"btn btn-primary m-2 bg-light",on:{click:function(n){return t.data.splice(e.index,1)}}},[t._v(" Zrušiť ")])]}}],null,!1,1860245721)}),"sick"===t.action?n("b-container",[n("button",{staticClass:"btn btn-danger my-2",attrs:{disabled:t.processing},on:{click:t.send}},[t._v(" Oznámiť pozitívne prípady "),t.processing?n("b-spinner",{attrs:{small:""}}):t._e()],1)]):t._e(),"repeat"===t.action?n("b-container",[n("button",{staticClass:"btn btn-info my-2",attrs:{disabled:t.processing},on:{click:t.send}},[t._v(" Oznámiť chybné prípady "),t.processing?n("b-spinner",{attrs:{small:""}}):t._e()],1)]):t._e(),"healthy"===t.action?n("b-container",[n("button",{staticClass:"btn btn-success my-2",attrs:{disabled:t.processing},on:{click:t.send}},[t._v(" Oznámiť negatívne prípady "),t.processing?n("b-spinner",{attrs:{small:""}}):t._e()],1)]):t._e()],1):t._e(),"select"!==t.action?n("b-container",[t.useQR?n("qrcode-stream",{on:{decode:t.onDecode}}):n("StreamBarcodeReader",{on:{decode:t.onDecode}})],1):t._e()],1)},s=[],o=n("2f62"),r=n("bb6f"),c=n("f337");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={components:{StreamBarcodeReader:c["a"],QrcodeStream:r["QrcodeStream"]},data:function(){return{useQR:!0,processing:!1,processingCount:0,fields:[{label:"Akcia",key:"id"},{label:"Kód testovacej sady",key:"code",sortable:!0},{label:"Stav",key:"state",sortable:!0}],data:[],next:"",action:"select"}},methods:l(l({},Object(o["b"])({SetResults:"result/SetResults"})),{},{onDecode:function(t){this.next=t},reset:function(){this.action="select",this.data=[]},send:function(){var t=this,e="error";"sick"===this.action&&(e="positive"),"healthy"===this.action&&(e="negative"),"repeat"===this.action&&(e="test-to-be-repeated"),console.log("result",e),this.processing=!0,this.processingCount=this.data.length;var n=0,a=function(a){var s=t.data[a].code;console.log("result",e,s),t.SetResults({testCode:s,result:e}).then((function(e){n++,e&&(t.data[a].state="Odoslané"),n==t.processingCount&&(t.processing=!1)}))};for(var s in this.data)a(s)}})},d=u,p=n("2877"),v=Object(p["a"])(d,a,s,!1,null,null,null);e["default"]=v.exports}}]);