const state = () => ({
  VUE_CONFIG_APP_API: "https://apps.scholtz.sk:4430/",
  DEDICATED_PLACE: false,
  fetched: false,
});

const mutations = {
  setConfig(state, value) {
    state.VUE_CONFIG_APP_API = value.VUE_CONFIG_APP_API;
    state.DEDICATED_PLACE = value.DEDICATED_PLACE;
    state.fetched = true;
  },
};
const actions = {
  async getConfig({ dispatch, commit }) {
    try {
      const data = await dispatch(
        "axios/get",
        {
          url: "/config.json",
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
