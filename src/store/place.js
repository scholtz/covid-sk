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
  async ReloadPlaces({ dispatch, commit }) {
    const data = await dispatch(
      "axios/get",
      {
        url: process.env.VUE_APP_API + "Place/List",
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
        url: process.env.VUE_APP_API + "Admin/CheckSlots",
        params: { testingDay: day, from, until },
      },
      { root: true }
    );
  },
  async InsertOrUpdate(
    { dispatch },
    { name, description, address, lat, lng, isDriveIn, isWalkIn }
  ) {
    var place = {
      name,
      description,
      address,
      lat,
      lng,
      isDriveIn,
      isWalkIn,
    };
    return await dispatch(
      "axios/post",
      {
        url: process.env.VUE_APP_API + "Place/InsertOrUpdate",
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
        url: process.env.VUE_APP_API + "Place/Delete",
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
