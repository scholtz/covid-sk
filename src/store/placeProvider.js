export const actions = {
  async Register({ dispatch }, { pp }) {
    return await dispatch(
      "axios/post",
      {
        url: config.VUE_CONFIG_APP_API + "PlaceProvider/Register",
        params: { testingPlaceProvider: pp },
      },
      { root: true }
    );
  },
};
export default {
  namespaced: true,
  actions,
};
