const state = () => ({
  PROD: "covid.pezinok.sk",
  VUE_CONFIG_APP_API: "https://apps.scholtz.sk:4430/",
  ALLOWED_HOSTS: ["localhost", "covid.pezinok.sk"],
  LOGO: "./images/logo-rychlejsie-light.svg",
  DEDICATED_PLACE: false,
  MAP_LAT: 48.5,
  MAP_LNG: 19.5,
  MAP_ZOOM: 8,
  SITE_KEY: "6LdV2SwaAAAAAP1wUVwNil6Dg7bBY7Ll0omw-cnx",
  SHOW_DANGER:
    "Aktuálne sa netestuje. Čaká sa na dohodnutie ďalších odberných termínov",
  fetched: false,
});

const mutations = {
  setConfig(state, value) {
    state.VUE_CONFIG_APP_API = value.VUE_CONFIG_APP_API;
    state.DEDICATED_PLACE = value.DEDICATED_PLACE;
    if (value.ALLOWED_HOSTS) {
      state.ALLOWED_HOSTS = value.ALLOWED_HOSTS;
    }
    if (value.PROD) {
      state.PROD = value.PROD;
    }
    if (value.LOGO) {
      state.LOGO = value.LOGO;
    }
    if (value.SHOW_DANGER) {
      state.SHOW_DANGER = value.SHOW_DANGER;
    }
    if (value.MAP_LAT) {
      state.MAP_LAT = value.MAP_LAT;
    }
    if (value.MAP_LNG) {
      state.MAP_LNG = value.MAP_LNG;
    }
    if (value.MAP_ZOOM) {
      state.MAP_ZOOM = value.MAP_ZOOM;
    }
    if (value.SITE_KEY) {
      state.SITE_KEY = value.SITE_KEY;
    }
    state.fetched = true;
    let found = false;
    for (const index in state.ALLOWED_HOSTS) {
      const host = state.ALLOWED_HOSTS[index];
      if (document.location.host.indexOf(host) > -1) {
        found = true;
      }
    }

    if (!found) {
      const hostToRedirect = "https://" + state.PROD;
      window.location.href = hostToRedirect;
    }
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
