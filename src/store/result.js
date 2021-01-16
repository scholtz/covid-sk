export const state = () => ({
  lastVisitor: {},
});

export const mutations = {
  setLastVisitor(state, lastVisitor) {
    state.lastVisitor = lastVisitor;
  },
};

export const actions = {
  async GetResults({ dispatch }, { code, pass }) {
    const ret = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/Get",
        params: { code, pass },
      },
      { root: true }
    );
    return ret;
  },
  async GetNextTest({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/GetNextTest",
      },
      { root: true }
    );
  },
  async FinalDataExport({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/FinalDataExport",
      },
      { root: true }
    );
  },
  async RemoveFromDocQueue({ dispatch }, { testId }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/RemoveFromDocQueue",
        params: { testId },
      },
      { root: true }
    );
  },
  async RemoveTest({ dispatch }, { code, pass }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/RemoveTest",
        params: { code, pass },
      },
      { root: true }
    );
  },
  async SetResults({ dispatch }, { testCode, result }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/SetResult",
        params: { testCode, result },
      },
      { root: true }
    );
  },
  async GetVisitor({ dispatch, commit }, { visitorCode }) {
    const ret = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/GetVisitor",
        params: { visitorCode },
      },
      { root: true }
    );
    commit("setLastVisitor", ret);
    return ret;
  },
  async VerifyResult({ dispatch }, { id }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/VerifyResult",
        params: { id },
      },
      { root: true }
    );
  },
  async GetVisitorByRC({ dispatch, commit }, { rc }) {
    const ret = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/GetVisitorByRC",
        params: { rc },
      },
      { root: true }
    );

    commit("setLastVisitor", ret);
    return ret;
  },
  async ConnectVisitorToTest({ dispatch }, { visitorCode, testCode }) {
    const data = await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API + "Result/ConnectVisitorToTest",
        params: { visitorCode, testCode },
      },
      { root: true }
    );
    if (data) {
      dispatch("snackbar/openSuccess", "Uložené", {
        root: true,
      });
      return true;
    }
    return false;
  },
};
export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
