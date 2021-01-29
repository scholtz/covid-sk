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
        url: this.state.config.VUE_CONFIG_APP_API + "Place/ListScheduledDays",
        params: { placeId },
      },
      { root: true }
    );
  },
  async ReloadPlaces({ dispatch, commit }) {
    const data = await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Place/List",
      },
      { root: true }
    );
    if (data) {
      commit("setPlaces", data);
      return true;
    }
    return false;
  },
  async ReloadPlacesWithFilter(
    { dispatch, commit },
    { availability, category }
  ) {
    const data = await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Place/ListFiltered",
        params: { availability, category },
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
        url: this.state.config.VUE_CONFIG_APP_API + "Place/PrivateList",
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
        url: this.state.config.VUE_CONFIG_APP_API + "Admin/CheckSlots",
        params: { testingDay: day, from, until },
      },
      { root: true }
    );
  },
  async SetPlaceLimitation({ dispatch }, { placeId, from, until, limit }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "place/SetPlaceLimitation",
        params: { placeId, from, until, limit },
      },
      { root: true }
    );
  },
  async DeletePlaceLimitation({ dispatch }, { placeId, limitId }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API + "place/DeletePlaceLimitation",
        params: { placeId, limitId },
      },
      { root: true }
    );
  },
  async ScheduleOpenningHours({ dispatch }, { actions }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API + "Place/ScheduleOpenningHours",
        body: actions,
      },
      { root: true }
    );
  },
  async InsertOrUpdate({ dispatch }, { place }) {
    console.log("place", place);
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Place/InsertOrUpdate",
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
        url: this.state.config.VUE_CONFIG_APP_API + "Place/Delete",
        body: place,
      },
      { root: true }
    );
  },

  async InsertOrUpdatePlaceProduct({ dispatch }, { placeProduct }) {
    return await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Place/InsertOrUpdatePlaceProduct",
        body: placeProduct,
      },
      { root: true }
    );
  },

  async DeletePlaceProduct({ dispatch }, { placeProductid }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Place/DeletePlaceProduct",
        params: { placeProductid },
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
