(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b4083fa"],{"720d":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("fffb");t.load=n.load,t.getInstance=n.getInstance;var r=s("b3e0");t.ReCaptchaInstance=r.ReCaptchaInstance},"92d4":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"app-pane-lgray py-2"},[s("b-container",[s("h1",[e._v(e._s(e.$t("resultsTitle")))])])],1),s("div",{staticClass:"py-5"},[s("b-container",[s("b-row",[s("b-col",{attrs:{cols:"12",md:"6"}},[s("b-input",{ref:"code",model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),s("label",{attrs:{for:"code"}},[s("div",{domProps:{innerHTML:e._s(e.$t("resultsCode"))}})])],1),s("b-col",{attrs:{cols:"12",md:"6"}},[s("b-input",{ref:"pass",attrs:{id:"pass"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),s("label",{attrs:{for:"pass"}},[e.$store.state.config.RC_IS_INSURANCE?s("div",{domProps:{innerHTML:e._s(e.$t("resultsPassIns"))}}):s("div",{domProps:{innerHTML:e._s(e.$t("resultsPass"))}})])],1)],1),s("b-row",[s("b-col",[s("b-button",{staticClass:"my-3",attrs:{variant:"primary"},on:{click:e.check}},[e._v(" "+e._s(e.$t("resultsCheckResults"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.processingRequest?s("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1),s("h2",[e._v(e._s(e.$t("resultsResult"))+":")]),"not-submitted"===e.results.state?s("p",[e._v(" "+e._s(e.$t("resultsSendForm"))+" ")]):e._e(),"submitting"===e.results.state?s("p",[e._v(" "+e._s(e.$t("resultsCheckingTest"))+" ")]):e._e(),"error"===e.results.state?s("p",[e._v(" "+e._s(e.$t("resultsError"))+" ")]):e._e(),"test-not-taken"===e.results.state?s("p",[e._v(" "+e._s(e.$t("resultsTestNotTaken"))+" ")]):e._e(),"removed"===e.results.state?s("p",[e._v(" "+e._s(e.$t("resultsTestRemoved"))+" ")]):e._e(),"test-to-be-repeated"===e.results.state?s("p",[e._v(" "+e._s(e.$t("resultsTestToRepeat"))+" ")]):e._e(),"test-not-processed"===e.results.state?s("p",[e._v(" "+e._s(e.$t("resultsTestNotProcessed"))+" ")]):e._e(),"positive-certifiacte-sent"===e.results.state?s("p",[s("span",{domProps:{innerHTML:e._s(e.$t("resultsTestPositiveCertTaken"))}})]):e._e(),"positive-certifiacte-taken"===e.results.state?s("p",[s("span",{domProps:{innerHTML:e._s(e.$t("resultsTestPositiveCertNotTaken"))}})]):e._e(),"positive-certiciate-taken"===e.results.state?s("p",[s("span",{domProps:{innerHTML:e._s(e.$t("resultsTestPositiveCertNotTaken"))}})]):e._e(),"positive"===e.results.state?s("p",[s("span",{domProps:{innerHTML:e._s(e.$t("resultsTestPositiveCertNotTaken"))}})]):e._e(),"negative"===e.results.state?s("p",[s("span",{domProps:{innerHTML:e._s(e.$t("resultsTestNegativeCertNotTaken"))}})]):e._e(),"negative-certiciate-taken"===e.results.state?s("p",[s("span",{domProps:{innerHTML:e._s(e.$t("resultsTestNegativeCertTaken"))}})]):e._e()],1),s("b-col",[s("b-button",{staticClass:"my-3",attrs:{variant:"primary"},on:{click:e.downloadPDF}},[e._v(" "+e._s(e.$t("resultsDownloadPDF"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.processingDownload?s("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1),s("br"),e.$store.state.config.RC_IS_INSURANCE?s("div",{domProps:{innerHTML:e._s(e.$t("resultsPdfNoteIns"))}}):s("div",{domProps:{innerHTML:e._s(e.$t("resultsPdfNote"))}}),s("div",[s("b-button",{staticClass:"my-3",attrs:{variant:"light"},on:{click:e.clickResendResult}},[e._v(" "+e._s(e.$t("resultsResend"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.resending?s("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1),s("br"),e._v(e._s(e.$t("resultsLimitWarning"))+" ")],1),s("div",[s("b-button",{staticClass:"my-3",attrs:{variant:"danger"},on:{click:e.removePersonalData}},[e._v(" "+e._s(e.$t("resultsRemoveRegistration"))+" "),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"19",viewBox:"0 0 33 40",role:"presentation",focusable:"false"}},[s("path",{attrs:{fill:"currentColor",d:"M0 0h13l20 20-20 20H0l20-20z"}})]),e.processingRemoval?s("b-spinner",{staticClass:"ml-1",attrs:{small:""}}):e._e()],1)],1)],1)],1)],1)],1)])},r=[],o=s("720d"),a=s("2f62");function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){l(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var u={data:function(){return{processingRequest:!1,processingDownload:!1,processingRemoval:!1,resending:!1,code:"",pass:"",results:{state:"not-submitted"}}},methods:c(c(c({},Object(a["b"])({GetResults:"result/GetResults",RemoveTest:"result/RemoveTest",DownloadPDF:"result/DownloadPDF",ResendResult:"result/ResendResult"})),Object(a["b"])({openSuccess:"snackbar/openSuccess"})),{},{check:function(){var e=this;this.processingRequest=!0,this.results={state:"submitting"},Object(o["load"])(this.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){t?e.GetResults({code:e.code,pass:e.pass,captcha:t}).then((function(t){e.results=t||{state:"error"},e.processingRequest=!1})):(e.results={state:"error"},e.processingRequest=!1)}))}))},downloadPDF:function(){var e=this;this.processingDownload=!0,this.results={state:"submitting"},Object(o["load"])(this.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){t?e.DownloadPDF({code:e.code,pass:e.pass,captcha:t}).then((function(t){e.results=t||{state:"error"},e.processingDownload=!1})):(e.results={state:"error"},e.processingDownload=!1)}))}))},removePersonalData:function(){var e=this;this.processingRemoval=!0,Object(o["load"])(this.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){t&&e.RemoveTest({code:e.code,pass:e.pass,captcha:t}).then((function(t){t?(e.results="removed",e.openSuccess(e.$t("resultsRegistrationRemoved"))):e.results={state:"error"},e.processingRemoval=!1}))}))}))},clickResendResult:function(){var e=this;this.resending=!0,Object(o["load"])(this.$store.state.config.SITE_KEY).then((function(t){t.execute("submit").then((function(t){t&&e.ResendResult({code:e.code,pass:e.pass,captcha:t}).then((function(t){e.resending=!1,t?e.openSuccess(e.$t("resultsSent")):e.results={state:"error"}}))}))}))}})},d=u,p=s("2877"),f=Object(p["a"])(d,n,r,!1,null,null,null);t["default"]=f.exports},b3e0:function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){function r(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function i(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?s(e.value):r(e.value).then(a,i)}c((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var s,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(e){return function(t){return c([e,t])}}function c(o){if(s)throw new TypeError("Generator is already executing.");while(a)try{if(s=1,n&&(r=2&o[0]?n["return"]:o[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(i){o=[6,i],n=0}finally{s=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,s){this.siteKey=e,this.recaptchaID=t,this.recaptcha=s,this.styleContainer=null}return e.prototype.execute=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){null===this.styleContainer&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{display:none !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){null!==this.styleContainer&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();t.ReCaptchaInstance=o},fffb:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=s("b3e0");(function(e){e[e["NOT_LOADED"]=0]="NOT_LOADED",e[e["LOADING"]=1]="LOADING",e[e["LOADED"]=2]="LOADED"})(n||(n={}));var o=function(){function e(){}return e.load=function(t,s){if(void 0===s&&(s={}),"undefined"===typeof document)return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===n.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===n.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise((function(t,s){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return s(e)}))}));e.instanceSiteKey=t,e.setLoadingState(n.LOADING);var o=new e;return new Promise((function(a,i){o.loadScript(t,s.useRecaptchaNet||!1,s.renderParameters?s.renderParameters:{},s.customUrl).then((function(){e.setLoadingState(n.LOADED);var i=o.doExplicitRender(grecaptcha,t,s.explicitRenderParameters?s.explicitRenderParameters:{}),c=new r.ReCaptchaInstance(t,i,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(c)})),e.successfulLoadingConsumers=[],s.autoHideBadge&&c.hideBadge(),e.instance=c,a(c)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],i(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return null===e.loadingState?n.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,s,r,o){var a=this;void 0===s&&(s=!1),void 0===r&&(r={}),void 0===o&&(o="");var i=document.createElement("script");i.setAttribute("recaptcha-v3-script","");var c="https://www.google.com/recaptcha/api.js";s&&(c="https://recaptcha.net/recaptcha/api.js"),o&&(c=o),r.render&&(r.render=void 0);var l=this.buildQueryString(r);return i.src=c+"?render=explicit"+l,new Promise((function(t,s){i.addEventListener("load",a.waitForScriptToLoad((function(){t(i)})),!1),i.onerror=function(t){e.setLoadingState(n.NOT_LOADED),s(t)},document.head.appendChild(i)}))},e.prototype.buildQueryString=function(e){var t=Object.keys(e);return t.length<1?"":"&"+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+"="+e[t]})).join("&")},e.prototype.waitForScriptToLoad=function(t){var s=this;return function(){void 0===window.grecaptcha?setTimeout((function(){s.waitForScriptToLoad(t)}),e.SCRIPT_LOAD_DELAY):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,s){var n={sitekey:t,badge:s.badge,size:s.size,tabindex:s.tabindex};return s.container?e.render(s.container,n):e.render(n)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();t.load=o.load,t.getInstance=o.getInstance}}]);