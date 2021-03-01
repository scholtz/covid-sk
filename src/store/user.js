export const state = () => ({
  auth: false,
  authJWT: "",
  tokenData: {},
  me: {},
});

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },
  setMe(state, me) {
    state.me = me;
  },
  setAuthJWT(state, authJWT) {
    localStorage.setItem("jwt", authJWT);
    if (!authJWT) {
      state.auth = false;
      state.authJWT = "";
      state.tokenData = {};
      return;
    }
    state.authJWT = authJWT;
    state.tokenData = parseJwt(authJWT);
    if (state.tokenData) {
      state.auth = true;
    } else {
      state.auth = false;
    }
  },
};
function parseJwt(token) {
  if (!token) return {};
  const base64Url = token.split(".")[1];
  if (!base64Url) return {};
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
export const actions = {
  OnLoad({ dispatch, commit }) {
    const token = localStorage.getItem("jwt");
    if (token) {
      commit("setAuthJWT", token);
      dispatch("RefreshToken");
    }
  },
  async LoadUsers({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/List",
      },
      { root: true }
    );
  },
  async GetPublicKey({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Visitor/GetPublicKey",
      },
      { root: true }
    );
  },
  async GetPrivateKey({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Visitor/GetPrivateKey",
      },
      { root: true }
    );
  },
  async RefreshToken({ commit, dispatch }) {
    if (!this.state.config.VUE_CONFIG_APP_API) return;
    const token = await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/RefreshToken",
      },
      { root: true }
    );
    if (token) {
      commit("setAuthJWT", token);
    }
  },
  async ReloadMe({ commit, dispatch }) {
    if (!this.state.config.VUE_CONFIG_APP_API) return;
    const data = await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/Me",
      },
      { root: true }
    );
    if (data) {
      commit("setMe", data);
    }
  },
  async ListUserInvites({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/ListUserInvites",
      },
      { root: true }
    );
  },

  async CompanyRegistrationsExport({ dispatch }) {
    let name = "company-registrations.csv";

    return await dispatch(
      "axios/download",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Result/CompanyRegistrationsExport",
        name: name,
        type: "get",
      },
      { root: true }
    );
  },
  async ListPPInvites({ dispatch }, { placeProviderId }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/ListPPInvites",
        params: { placeProviderId },
      },
      { root: true }
    );
  },
  async ProcessInvitation({ dispatch }, { invitationId, accepted }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/ProcessInvitation",
        params: { invitationId, accepted },
      },
      { root: true }
    );
  },
  async FindVisitor({ dispatch }, { query }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/FindVisitor",
        params: { query },
      },
      { root: true }
    );
  },
  async UpdateVisitor({ dispatch }, { visitor }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/UpdateVisitor",
        body: visitor,
      },
      { root: true }
    );
  },
  async DownloadEHealthVisitors({ dispatch }, { day }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Admin/DownloadEHealthVisitors",
        params: { day },
      },
      { root: true }
    );
  },
  async SendDayResultsToEHealth({ dispatch }, { date }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Admin/SendDayResultsToEHealth",
        params: { date },
      },
      { root: true }
    );
  },
  async SendResultToEHealth({ dispatch }, { visitorId }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/SendResultToEHealth",
        params: { visitorId },
      },
      { root: true }
    );
  },
  async Preauthenticate({ dispatch }, { email }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/Preauthenticate",
        params: { email },
      },
      { root: true }
    );
  },
  async SetLocation({ dispatch }, { placeId }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/SetLocation",
        params: { placeId },
      },
      { root: true }
    );
  },
  async InviteUser({ dispatch }, { name, email, roles }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/InviteUser",
        params: { email, name, roles },
      },
      { root: true }
    );
  },
  async RemoveUser({ dispatch }, { email }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/RemoveUser",
        params: { email },
      },
      { root: true }
    );
  },

  async ChangePassword({ dispatch, commit }, { oldHash, newHash }) {
    const token = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/ChangePassword",
        params: { oldHash, newHash },
      },
      { root: true }
    );
    if (token) {
      commit("setAuthJWT", token);
    }
    if (token) return true;
    return false;
  },
  async SetPlaceProvider({ dispatch, commit }, { placeProviderId }) {
    const token = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/SetPlaceProvider",
        params: { placeProviderId },
      },
      { root: true }
    );
    if (token) {
      commit("setAuthJWT", token);
    }
    if (token) return true;
    return false;
  },

  async Authenticate({ dispatch, commit }, { email, hash, data }) {
    const token = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/Authenticate",
        params: { email, hash, data },
      },
      { root: true }
    );

    commit("setAuthJWT", token);
    if (token) return true;
    return false;
  },
  async AuthenticateV2({ dispatch, commit }, { email, hash }) {
    const token = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "User/Authenticate",
        params: { email, hash },
      },
      { root: true }
    );

    commit("setAuthJWT", token);
    if (token) return true;
    return false;
  },
  async Logout({ commit }) {
    const token = "";

    commit("setAuthJWT", token);
    if (token) return true;
    return false;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
