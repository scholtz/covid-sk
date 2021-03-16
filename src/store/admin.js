export const actions = {
  async FixAdvancedStats({ dispatch }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/FixAdvancedStats",
      },
      { root: true }
    );
  },
};
export default {
  namespaced: true,
  actions,
};
