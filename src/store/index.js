import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios";
import config from "./config";
import place from "./place";
import slot from "./slot";
import snackbar from "./snackbar";
import result from "./result";
import user from "./user";
import placeProvider from "./placeProvider";

Vue.use(Vuex);

const debugStrict = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    axios,
    config,
    place,
    snackbar,
    slot,
    result,
    user,
    placeProvider,
  },
  strict: debugStrict,
});
