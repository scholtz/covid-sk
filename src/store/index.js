import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios";

Vue.use(Vuex);

const debugStrict = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    axios,
  },
  strict: debugStrict,
});
