export const state = () => ({
  auth: false,
  authJWT: "",
  tokenData: {},
});

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
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
  OnLoad({ commit }) {
    const token = localStorage.getItem("jwt");
    if (token) {
      commit("setAuthJWT", token);
    }
  },
  async LoadUsers({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: process.env.VUE_APP_API + "User/List",
      },
      { root: true }
    );
  },
  async Preauthenticate({ dispatch }, { email }) {
    return await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "User/Preauthenticate",
        params: { email },
      },
      { root: true }
    );
  },
  async InviteUser({ dispatch }, { name, email, roles }) {
    return await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "Admin/InviteUser",
        params: { email, name, roles },
      },
      { root: true }
    );
  },
  async Authenticate({ dispatch, commit }, { email, hash, data }) {
    const token = await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "User/Authenticate",
        params: { email, hash, data },
      },
      { root: true }
    );

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