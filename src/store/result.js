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
};
export default {
  namespaced: true,
  actions,
};
