const state = () => ({
  places: [],
  currentPlace: {},
});

const mutations = {
  setPlaces(state, places) {
    state.places = places;
  },
  setCurrentPlace(state, id) {
    state.currentPlace = state.places.find(p => p.placeProviderId === id);
  },
};

export const actions = {
  async InviteUserToPP({ dispatch }, { email, name, phone }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API + "PlaceProvider/InviteUserToPP",
        params: { email, name, phone },
      },
      { root: true }
    );
  },

  async UpdatePP({ dispatch }, { pp }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "PlaceProvider/UpdatePP",
        body: pp,
      },
      { root: true }
    );
  },
  async Register({ dispatch }, { pp }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "PlaceProvider/Register",
        body: pp,
      },
      { root: true }
    );
  },
  async ListPrivate({ dispatch, commit }) {
    const data = await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "PlaceProvider/ListPrivate",
      },
      { root: true }
    );
    if (data) {
      commit("setPlaces", data);
    }
    return data;
  },
  async AllocatePersonsToPlace({ dispatch }, { allocations, placeId }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "PlaceProvider/AllocatePersonsToPlace?placeId=" +
          placeId,
        body: allocations,
      },
      { root: true }
    );
  },
  async RemoveAllocationAtPlace({ dispatch }, { allocationId, placeId }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "PlaceProvider/RemoveAllocationAtPlace",
        params: { allocationId, placeId },
      },
      { root: true }
    );
  },
  async ListPlaceAllocations({ dispatch }, { placeId }) {
    console.log("ListPlaceAllocations", placeId);
    if (!placeId) {
      return [];
    }
    const data = await dispatch(
      "axios/get",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "PlaceProvider/ListPlaceAllocations",
        params: { placeId },
      },
      { root: true }
    );
    return data;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
