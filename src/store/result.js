export const actions = {
  async GetResults({ dispatch }, { code, pass }) {
    return await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "Result/Get",
        params: { code, pass },
      },
      { root: true }
    );
  },
  async SetResults({ dispatch }, { testCode, result }) {
    return await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "Result/SetResult",
        params: { testCode, result },
      },
      { root: true }
    );
  },
  async GetVisitor({ dispatch }, { visitorCode }) {
    return await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "Result/GetVisitor",
        params: { visitorCode },
      },
      { root: true }
    );
  },
  async ConnectVisitorToTest({ dispatch }, { visitorCode, testCode }) {
    const data = await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "Result/ConnectVisitorToTest",
        params: { visitorCode, testCode },
      },
      { root: true }
    );
    if (data) {
      dispatch("snackbar/openSuccess", "Uložené", {
        root: true,
      });
    }
  },
};
export default {
  namespaced: true,
  actions,
};