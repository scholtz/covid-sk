(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b34d7"],{2894:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"app-pane-lgray py-2"},[a("b-container",[a("h1",[t._v(t._s(t.$t("gdprTitle")))])])],1),a("b-container",{staticClass:"py-3"},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-checkbox",{attrs:{name:"check-button",switch:""},model:{value:t.full,callback:function(s){t.full=s},expression:"full"}},[t._v(" "+t._s(t.$t("gdprShowLawyerVersion"))+" ")]),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[t.$store.state.config.GDRP_PDF?a("div",[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprDetailsForEmployees")))])]),a("div",{staticClass:"short my-3 py-1"},[a("a",{attrs:{href:"./files/"+t.$store.state.config.GDRP_PDF}},[t._v(t._s(t.$store.state.config.GDRP_PDF))])])],1):t._e(),a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ1")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA1Short"))+" ")]),t.full?a("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA1Long"))+" ")]):t._e()],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[t._v(" "+t._s(t.$t("gdprA1PrinceplesInfo"))+": "),a("ol",t._l(5,(function(s){return a("li",{key:s},[t._v(t._s(t.$t("gdprA1Princeple"+s)))])})),0)]),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ2")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(t._s(t.$t("gdprA2Short")))]),t.full?a("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA2Long"))+" ")]):t._e()],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ3")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA3ShortA"))+" "+t._s(t.$store.state.config.GDRP_PREVADZKOVATEL)+" ")]),t.$store.state.config.GDRP_SPROSTREDKOVATEL?a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA3ShortB"))+" "+t._s(t.$store.state.config.GDRP_SPROSTREDKOVATEL)+" ")]):t._e(),t.full?a("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA3LongA"))+" "+t._s(t.$store.state.config.GDRP_PREVADZKOVATEL)+". "),t.$store.state.config.GDRP_SPROSTREDKOVATEL?a("span",[t._v(t._s(t.$t("gdprA3LongB"))+" "+t._s(t.$store.state.config.GDRP_SPROSTREDKOVATEL)+".")]):t._e()]):t._e()],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ4")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA4Short"))+" "+t._s(t.$store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA)+" ")]),t.full?a("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA4Long"))+" "+t._s(t.$store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA)+". ")]):t._e()],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ5")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA5Short"))+" ")]),t.full?a("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA5Long"))+" ")]):t._e()],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ6")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(t._s(t.$t("gdprA6Short")))]),t.full?a("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA6Long"))+" ")]):t._e()],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ7")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA7Short"))+" ")]),t.full?a("div",{staticClass:"long bg-light col-11 offset-1 my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA7Long"))+" ")]):t._e()],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[t._v(" "+t._s(t.$t("gdprA7Info"))+" ")]),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprQ8")))])]),t.$store.state.config.RC_IS_INSURANCE?a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA8ShortIns"))+" ")]):a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprA8Short"))+" ")])],1),a("b-card",{staticClass:"p-2 my-1",attrs:{"no-body":""}},[a("b-card-title",[a("h2",[t._v(t._s(t.$t("gdprAdditionalDetailsTitle")))])]),a("div",{staticClass:"short my-3 py-1"},[t._v(" "+t._s(t.$t("gdprAdditionalDetails"))+" ")])],1)],1)],1)],1)],1)},o=[],l={data:function(){return{full:!0}}},i=l,_=a("2877"),d=Object(_["a"])(i,r,o,!1,null,null,null);s["default"]=d.exports}}]);