(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b4083fa"],{"720d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("fffb");t.load=s.load,t.getInstance=s.getInstance;var r=n("b3e0");t.ReCaptchaInstance=r.ReCaptchaInstance},"92d4":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"app-pane-lgray py-2"},[n("b-container",[n("h1",[e._v(e._s(e.$t("resultsTitle")))])])],1),n("div",{staticClass:"py-5"},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12",md:"6"}},[n("b-input",{ref:"code",model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),n("label",{attrs:{for:"code"}},[e._v(e._s(e.$t("resultsCode")))])],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("b-input",{ref:"pass",attrs:{id:"pass"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),n("label",{attrs:{for:"pass"}},[e._v(e._s(e.$t("resultsPass")))])],1)],1),n("b-row",[n("b-col",[n("b-button",{staticClass:"my-3",attrs:{variant:"primary"},on:{click:e.check}},[e._v(" "+e._s(e.$t("resultsCheckResults"))+" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[n("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.processingRequest?n("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1)],1),n("b-col",[n("b-button",{staticClass:"my-3",attrs:{variant:"primary"},on:{click:e.downloadPDF}},[e._v(" Stiahnuť Certifikát ako PDF súbor zabezpečený heslom* "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[n("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.processingDownload?n("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1),n("br"),e._v(" "+e._s(e.$t("resultsPdfNote"))+" "),n("div",[n("b-button",{staticClass:"my-3",attrs:{variant:"light"},on:{click:e.clickResendResult}},[e._v(" Poslať certifikát ešte raz "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[n("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.resending?n("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1)],1),n("div",[n("b-button",{staticClass:"my-3",attrs:{variant:"danger"},on:{click:e.removePersonalData}},[e._v(" Zrušiť registráciu "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[n("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})])])],1)],1)],1),n("b-row",[n("b-col",[n("h2",[e._v(e._s(e.$t("resultsResult"))+":")]),"not-submitted"===e.results.state?n("p",[e._v(" "+e._s(e.$t("resultsSendForm"))+" ")]):e._e(),"submitting"===e.results.state?n("p",[e._v(" "+e._s(e.$t("resultsCheckingTest"))+" ")]):e._e(),"error"===e.results.state?n("p",[e._v(" "+e._s(e.$t("resultsError"))+" ")]):e._e(),"test-not-taken"===e.results.state?n("p",[e._v(" "+e._s(e.$t("resultsTestNotTaken"))+" ")]):e._e(),"removed"===e.results.state?n("p",[e._v(" "+e._s(e.$t("resultsTestRemoved"))+" ")]):e._e(),"test-to-be-repeated"===e.results.state?n("p",[e._v(" "+e._s(e.$t("resultsTestToRepeat"))+" ")]):e._e(),"test-not-processed"===e.results.state?n("p",[e._v(" "+e._s(e.$t("resultsTestNotProcessed"))+" ")]):e._e(),"positive-certifiacte-sent"===e.results.state?n("p",[n("span",{domProps:{innerHTML:e._s(e.$t("resultsTestPositiveCertTaken"))}})]):e._e(),"positive-certifiacte-taken"===e.results.state?n("p",[n("span",{domProps:{innerHTML:e._s(e.$t("resultsTestPositiveCertNotTaken"))}})]):e._e(),"positive"===e.results.state?n("p",[n("span",{domProps:{innerHTML:e._s(e.$t("resultsTestPositiveCertNotTaken"))}})]):e._e(),"negative"===e.results.state?n("p",[n("span",{domProps:{innerHTML:e._s(e.$t("resultsTestNegativeCertNotTaken"))}})]):e._e(),"negative-certiciate-taken"===e.results.state?n("p",[n("span",{domProps:{innerHTML:e._s(e.$t("resultsTestNegativeCertTaken"))}})]):e._e()])],1)],1)],1)])},r=[],o=n("720d"),a=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{processingRequest:!1,processingDownload:!1,resending:!1,code:"",pass:"",results:{state:"not-submitted"}}},methods:c(c(c({},Object(a["b"])({GetResults:"result/GetResults",RemoveTest:"result/RemoveTest",DownloadPDF:"result/DownloadPDF",ResendResult:"result/ResendResult"})),Object(a["b"])({openSuccess:"snackbar/openSuccess"})),{},{check:function(){var e=this;this.processingRequest=!0,this.results={state:"submitting"},Object(o["load"])(this.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){t?e.GetResults({code:e.code,pass:e.pass,captcha:t}).then((function(t){e.results=t||{state:"error"},e.processingRequest=!1})):(e.results={state:"error"},e.processingRequest=!1)}))}))},downloadPDF:function(){var e=this;this.processingDownload=!0,this.results={state:"submitting"},Object(o["load"])(this.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){t?e.DownloadPDF({code:e.code,pass:e.pass,captcha:t}).then((function(t){e.results=t||{state:"error"},e.processingDownload=!1})):(e.results={state:"error"},e.processingDownload=!1)}))}))},removePersonalData:function(){var e=this;this.RemoveTest({code:this.code,pass:this.pass}).then((function(t){t?(e.results="removed",e.openSuccess("Registrácia bola vymazaná")):e.results={state:"error"}}))},clickResendResult:function(){var e=this;this.resending=!0,Object(o["load"])(this.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){t&&e.ResendResult({code:e.code,pass:e.pass,captcha:e.captcha}).then((function(t){e.resending=!1,t?e.openSuccess("Výsledok bol odoslaný"):e.results={state:"error"}}))}))}))}})},d=u,p=n("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);t["default"]=f.exports},b3e0:function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(s.next(e))}catch(t){o(t)}}function i(e){try{c(s["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):r(e.value).then(a,i)}c((s=s.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,s,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,s&&(r=2&o[0]?s["return"]:o[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;switch(s=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,s=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(i){o=[6,i],s=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,n){this.siteKey=e,this.recaptchaID=t,this.recaptcha=n,this.styleContainer=null}return e.prototype.execute=function(e){return s(this,void 0,void 0,(function(){return r(this,(function(t){return[2,this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){null===this.styleContainer&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{display:none !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){null!==this.styleContainer&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();t.ReCaptchaInstance=o},fffb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,r=n("b3e0");(function(e){e[e["NOT_LOADED"]=0]="NOT_LOADED",e[e["LOADING"]=1]="LOADING",e[e["LOADED"]=2]="LOADED"})(s||(s={}));var o=function(){function e(){}return e.load=function(t,n){if(void 0===n&&(n={}),"undefined"===typeof document)return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===s.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===s.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise((function(t,n){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return n(e)}))}));e.instanceSiteKey=t,e.setLoadingState(s.LOADING);var o=new e;return new Promise((function(a,i){o.loadScript(t,n.useRecaptchaNet||!1,n.renderParameters?n.renderParameters:{},n.customUrl).then((function(){e.setLoadingState(s.LOADED);var i=o.doExplicitRender(grecaptcha,t,n.explicitRenderParameters?n.explicitRenderParameters:{}),c=new r.ReCaptchaInstance(t,i,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(c)})),e.successfulLoadingConsumers=[],n.autoHideBadge&&c.hideBadge(),e.instance=c,a(c)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],i(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return null===e.loadingState?s.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,n,r,o){var a=this;void 0===n&&(n=!1),void 0===r&&(r={}),void 0===o&&(o="");var i=document.createElement("script");i.setAttribute("recaptcha-v3-script","");var c="https://www.google.com/recaptcha/api.js";n&&(c="https://recaptcha.net/recaptcha/api.js"),o&&(c=o),r.render&&(r.render=void 0);var l=this.buildQueryString(r);return i.src=c+"?render=explicit"+l,new Promise((function(t,n){i.addEventListener("load",a.waitForScriptToLoad((function(){t(i)})),!1),i.onerror=function(t){e.setLoadingState(s.NOT_LOADED),n(t)},document.head.appendChild(i)}))},e.prototype.buildQueryString=function(e){var t=Object.keys(e);return t.length<1?"":"&"+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+"="+e[t]})).join("&")},e.prototype.waitForScriptToLoad=function(t){var n=this;return function(){void 0===window.grecaptcha?setTimeout((function(){n.waitForScriptToLoad(t)}),e.SCRIPT_LOAD_DELAY):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,n){var s={sitekey:t,badge:n.badge,size:n.size,tabindex:n.tabindex};return n.container?e.render(n.container,s):e.render(s)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();t.load=o.load,t.getInstance=o.getInstance}}]);