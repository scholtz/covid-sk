const state = () => ({
  VUE_CONFIG_APP_API: "https://apps.scholtz.sk:4430/",
  DEDICATED_PLACE: false,
  MAP_LAT: 48.5,
  MAP_LNG: 19.5,
  MAP_ZOOM: 8,
  fetched: false,
});

const mutations = {
  setConfig(state, value) {
    state.VUE_CONFIG_APP_API = value.VUE_CONFIG_APP_API;
    state.DEDICATED_PLACE = value.DEDICATED_PLACE;
    if (value.MAP_LAT) {
      state.MAP_LAT = value.MAP_LAT;
    }
    if (value.MAP_LNG) {
      state.MAP_LNG = value.MAP_LNG;
    }
    if (value.MAP_ZOOM) {
      state.MAP_ZOOM = value.MAP_ZOOM;
    }
    state.fetched = true;
  },
};
const actions = {
  async getConfig({ dispatch, commit }) {
    try {
      const data = await dispatch(
        "axios/get",
        {
          url: "./config.json",
        },
        { root: true }
      );
      if (data) {
        commit("setConfig", data);
        return data;
      }
    } catch (error) {
      dispatch("snackbar/openError", error.response, {
        root: true,
      });
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
