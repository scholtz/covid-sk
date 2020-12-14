export const actions = {
  async Register({ dispatch }, { pp }) {
    return await dispatch(
      "axios/post",
      {
        url: config.VUE_CONFIG_APP_API + "PlaceProvider/Register",
        body: pp,
      },
      { root: true }
    );
  },
  async ListPrivate({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: config.VUE_CONFIG_APP_API + "PlaceProvider/ListPrivate",
      },
      { root: true }
    );
  },
};
export default {
  namespaced: true,
  actions,
};
