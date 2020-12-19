import Vue from "vue";

import "core-js/stable";
import "regenerator-runtime/runtime";

import router from "./router";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

import App from "./App";
import i18n from "./i18n";

import Default from "./components/Layout/Wrappers/baseLayout.vue";
import Wide from "./components/Layout/Wrappers/baseLayoutWide.vue";
import store from "./store";

import "./icons";
import "./filters";
import ToastsPlugin from "./components/ToastsPlugin";

Vue.config.productionTip = false;

Vue.use(ToastsPlugin);
Vue.use(BootstrapVue);
Vue.component("default-layout", Default);
Vue.component("wide-layout", Wide);

new Vue({
  el: "#app",
  store,
  router,
  i18n,
  components: { App },
  template: "<App/>",
});
