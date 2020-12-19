const state = () => ({
  places: {},
  currentPlace: {},
});

const mutations = {
  setPlaces(state, places) {
    state.places = places;
  },
  setCurrentPlace(state, currentPlace) {
    state.currentPlace = currentPlace;
  },
};
export const actions = {
  async ListScheduledDays({ dispatch }, { placeId }) {
    return await dispatch(
      "axios/get",
      {
        url: config.VUE_CONFIG_APP_API + "Place/ListScheduledDays",
        params: { placeId },
      },
      { root: true }
    );
  },
  async ReloadPlaces({ dispatch, commit }) {
    const data = await dispatch(
      "axios/get",
      {
        url: config.VUE_CONFIG_APP_API + "Place/List",
      },
      { root: true }
    );
    if (data) {
      commit("setPlaces", data);
      return true;
    }
    return false;
  },
  async ReloadPrivatePlaces({ dispatch, commit }) {
    const data = await dispatch(
      "axios/get",
      {
        url: config.VUE_CONFIG_APP_API + "Place/PrivateList",
      },
      { root: true }
    );
    if (data) {
      commit("setPlaces", data);

      return true;
    }
    return false;
  },
  async CheckSlots({ dispatch }, { day, from, until }) {
    return await dispatch(
      "axios/post",
      {
        url: config.VUE_CONFIG_APP_API + "Admin/CheckSlots",
        params: { testingDay: day, from, until },
      },
      { root: true }
    );
  },
  async InsertOrUpdate({ dispatch }, { place }) {
    console.log("place", place);
    return await dispatch(
      "axios/post",
      {
        url: config.VUE_CONFIG_APP_API + "Place/InsertOrUpdate",
        body: place,
      },
      { root: true }
    );
  },
  async Delete({ dispatch }, { id }) {
    var place = {
      id,
    };
    return await dispatch(
      "axios/post",
      {
        url: config.VUE_CONFIG_APP_API + "Place/Delete",
        body: place,
      },
      { root: true }
    );
  },
  async GetPlace({ dispatch }, { id }) {
    if (Object.keys(this.state.place.places).length === 0) {
      await dispatch("ReloadPlaces");
    }
    return this.state.place.places[id];
  },
  async GetPlaces({ dispatch }) {
    if (Object.keys(this.state.place.places).length === 0) {
      await dispatch("ReloadPlaces");
    }
    return this.state.place.places;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
