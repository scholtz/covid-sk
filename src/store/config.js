const state = () => ({
  PROD: "",
  VUE_CONFIG_APP_API: "",
  ALLOWED_HOSTS: [],
  LOGO: "./images/Rychlejsie_sk_logo_biele.png",
  DEDICATED_PLACE: true,
  MAP_LAT: 48.5,
  MAP_LNG: 19.5,
  MAP_ZOOM: 8,
  CSS: "",
  SITE_KEY: "6LdV2SwaAAAAAP1wUVwNil6Dg7bBY7Ll0omw-cnx",
  SHOW_DANGER: "",
  fetched: false,
  DEFAULT_HIDE_HEALTH_STATUS: false,
  DEFAULT_VIEW: "table",
  HIDE_QUEUE: false,
  INTRO_TEXT: "",
  IS_PROD: true,
  GDRP_PREVADZKOVATEL:
    "Scholtz & Company, j.s.a. so sídlom Švabinského 21, 851 01 Bratislava. IČO spoločnosti: 51 882 272, IČ DPH: SK2120828105",
  GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA:
    "Ľudovít Scholtz, kontakt: scholtzandcojsa@gmail.com, Telefón +420 776 082 012",
  GDRP_SPROSTREDKOVATEL: "",
  GDRP_PDF: "",
  COMPANY_NAME: "",
  RC_IS_INSURANCE: false,
  INSURED_ONLY: false,
  COUNTRY: "SK",
  SUPPORT_NAME: "",
  SUPPORT_EMAIL: "",
  SUPPORT_PHONE: "",
  FACEBOOK_LINK: "https://www.facebook.com/rychlejsie.sk",
  INSTAGRAM_LINK: "http://instagram.com/rychlejsie.sk",
  TWITTER_LINK: "https://twitter.com/rychlejsie",
  TWITTER_LINK_HIDDEN: false,
  CUSTOM_GDPR: false,
  CUSTOM_FAQ: false,
  DGC: false,
});

const mutations = {
  setConfig(state, value) {
    state.VUE_CONFIG_APP_API = value.VUE_CONFIG_APP_API;
    state.DEDICATED_PLACE = value.DEDICATED_PLACE;
    if (value.ALLOWED_HOSTS) {
      state.ALLOWED_HOSTS = value.ALLOWED_HOSTS;
    }
    if (value.DGC) {
      state.DGC = value.DGC;
    }
    if (value.SUPPORT_NAME) {
      state.SUPPORT_NAME = value.SUPPORT_NAME;
    }
    if (value.SUPPORT_EMAIL) {
      state.SUPPORT_EMAIL = value.SUPPORT_EMAIL;
    }
    if (value.SUPPORT_PHONE) {
      state.SUPPORT_PHONE = value.SUPPORT_PHONE;
    }
    if (value.INTRO_TEXT) {
      state.INTRO_TEXT = value.INTRO_TEXT;
    }
    if (value.COUNTRY) {
      state.COUNTRY = value.COUNTRY;
    }
    if (value.COMPANY_NAME) {
      state.COMPANY_NAME = value.COMPANY_NAME;
    }
    if (value.RC_IS_INSURANCE) {
      state.RC_IS_INSURANCE = value.RC_IS_INSURANCE;
    }
    if (value.INSURED_ONLY) {
      state.INSURED_ONLY = value.INSURED_ONLY;
    }
    if (value.GDRP_PREVADZKOVATEL) {
      state.GDRP_PREVADZKOVATEL = value.GDRP_PREVADZKOVATEL;
    }
    if (value.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA) {
      state.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA =
        value.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA;
    }
    if (value.HIDE_QUEUE) {
      state.HIDE_QUEUE = value.HIDE_QUEUE;
    }
    if (value.GDRP_PDF) {
      state.GDRP_PDF = value.GDRP_PDF;
    }
    if (value.GDRP_SPROSTREDKOVATEL) {
      state.GDRP_SPROSTREDKOVATEL = value.GDRP_SPROSTREDKOVATEL;
    }
    if (value.IS_PROD !== undefined) {
      state.IS_PROD = value.IS_PROD;
    }
    if (value.DEFAULT_VIEW) {
      state.DEFAULT_VIEW = value.DEFAULT_VIEW;
    }
    if (value.DEFAULT_HIDE_HEALTH_STATUS) {
      state.DEFAULT_HIDE_HEALTH_STATUS = value.DEFAULT_HIDE_HEALTH_STATUS;
    }
    if (value.PROD) {
      state.PROD = value.PROD;
    }
    if (value.LOGO) {
      state.LOGO = value.LOGO;
    }
    if (value.CSS) {
      state.CSS = value.CSS;
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
    if (value.FACEBOOK_LINK) {
      state.FACEBOOK_LINK = value.FACEBOOK_LINK;
    }
    if (value.INSTAGRAM_LINK) {
      state.INSTAGRAM_LINK = value.INSTAGRAM_LINK;
    }
    if (value.TWITTER_LINK) {
      state.TWITTER_LINK = value.TWITTER_LINK;
    }
    if (value.TWITTER_LINK_HIDDEN) {
      state.TWITTER_LINK_HIDDEN = value.TWITTER_LINK_HIDDEN;
    }
    if (value.CUSTOM_GDPR) {
      state.CUSTOM_GDPR = value.CUSTOM_GDPR;
    }
    if (value.CUSTOM_FAQ) {
      state.CUSTOM_FAQ = value.CUSTOM_FAQ;
    }
    state.fetched = true;
    let found = false;
    for (const index in state.ALLOWED_HOSTS) {
      const host = state.ALLOWED_HOSTS[index];
      if (document.location.host.indexOf(host) > -1) {
        found = true;
      }
    }
    if (state.CSS) {
      let style = document.createElement("link");
      style.type = "text/css";
      style.rel = "stylesheet";
      style.href = state.CSS;
      document.head.appendChild(style);
    }
    if (!found && state.PROD) {
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
        await commit("setConfig", data);
        await dispatch(
          "insurance/setCountry",
          { country: data.COUNTRY },
          {
            root: true,
          }
        );
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
