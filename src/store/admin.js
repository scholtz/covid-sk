export const actions = {
  async FixAdvancedStats({ dispatch }, { from }) {
    const params = from ? { from } : {};
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/FixAdvancedStats",
        params,
      },
      { root: true }
    );
  },
  async FixConnectVisitorsWithEmployeeId({ dispatch }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Admin/FixConnectVisitorsWithEmployeeId",
      },
      { root: true }
    );
  },
  async DeleteAllRegistrations({ dispatch }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API + "Admin/DeleteAllRegistrations",
      },
      { root: true }
    );
  },
  async RequeeUnprocessedVisitors({ dispatch }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Admin/RequeeUnprocessedVisitors",
      },
      { root: true }
    );
  },
};
export default {
  namespaced: true,
  actions,
};
