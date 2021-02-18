const state = () => ({
  slotsD: {},
  slotDCurrent: {},
  slotsH: {},
  slotHCurrent: {},
  slotsM: {},
  slotMCurrent: {},
  registration: {},
  registrationAttempt: {},
  product: {},
});

const mutations = {
  setProduct(state, product) {
    state.product = product;
  },
  setSlotsD(state, slotsD) {
    state.slotsD = slotsD;
  },
  setSlotDCurrent(state, slotDCurrent) {
    state.slotDCurrent = Object.assign({}, state.slotDCurrent, slotDCurrent);
  },
  setSlotsH(state, slotsH) {
    state.slotsH = slotsH;
  },
  setSlotHCurrent(state, slotHCurrent) {
    state.slotHCurrent = Object.assign({}, state.slotHCurrent, slotHCurrent);
  },
  setSlotsM(state, slotsM) {
    state.slotsM = slotsM;
  },
  setSlotMCurrent(state, slotMCurrent) {
    state.slotMCurrent = Object.assign({}, state.slotMCurrent, slotMCurrent);
  },
  setRegistration(state, registration) {
    state.registration = Object.assign({}, state.registration, registration);
  },
  setRegistrationAttempt(state, registrationAttempt) {
    state.registrationAttempt = Object.assign(
      {},
      state.registrationAttempt,
      registrationAttempt
    );
  },
};
export const actions = {
  async RegisterByManager(
    { dispatch, commit },
    {
      personType,
      passport,
      rc,
      firstName,
      lastName,
      address,
      street,
      streetNo,
      zip,
      city,
      email,
      phone,
      insurance,
      chosenSlot,
      chosenPlaceId,
      birthDayDay,
      birthDayMonth,
      birthDayYear,
      product,
      token,
    }
  ) {
    const visitor = {
      personType,
      passport,
      rc,
      firstName,
      lastName,
      address,
      street,
      streetNo,
      zip,
      city,
      email,
      phone,
      insurance,
      chosenSlot,
      chosenPlaceId,
      birthDayDay,
      birthDayMonth,
      birthDayYear,
      product,
      token,
    };
    const data = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Visitor/RegisterByManager",
        body: visitor,
      },
      { root: true }
    );
    if (data) {
      commit("setRegistration", data);
      return true;
    }
    return false;
  },
  async RegisterWithCompanyRegistration(
    { dispatch, commit },
    { employeeNumber, employeePass, chosenSlot, chosenPlaceId, product, token }
  ) {
    const send = {
      employeeNumber,
      pass: employeePass,
      chosenSlot,
      chosenPlaceId,
      product,
      token,
    };
    const data = await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Visitor/RegisterWithCompanyRegistration",
        params: send,
      },
      { root: true }
    );
    if (data) {
      commit("setRegistration", data);
      return true;
    }
    return false;
  },
  async Register(
    { dispatch, commit },
    {
      personType,
      passport,
      rc,
      firstName,
      lastName,
      address,
      street,
      streetNo,
      zip,
      city,
      email,
      phone,
      insurance,
      chosenSlot,
      chosenPlaceId,
      birthDayDay,
      birthDayMonth,
      birthDayYear,
      product,
      employeeId,
      token,
    }
  ) {
    const visitor = {
      personType,
      passport,
      rc,
      firstName,
      lastName,
      address,
      street,
      streetNo,
      zip,
      city,
      email,
      phone,
      insurance,
      chosenSlot,
      chosenPlaceId,
      birthDayDay,
      birthDayMonth,
      birthDayYear,
      product,
      employeeId,
      token,
    };
    const data = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Visitor/Register",
        body: visitor,
      },
      { root: true }
    );
    if (data) {
      commit("setRegistration", data);
      return true;
    }
    return false;
  },

  async ReloadSlotsD({ dispatch, commit }, { placeId }) {
    const data = await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Slot/ListDaySlotsByPlace",
        params: { placeId },
      },
      { root: true }
    );
    if (data) {
      console.log(placeId);
      commit("setSlotsD", data);
      return true;
    }
    return false;
  },

  async ReloadSlotsH({ dispatch, commit }, { placeId, daySlotId }) {
    const data = await dispatch(
      "axios/get",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Slot/ListHourSlotsByPlaceAndDaySlotId",
        params: { placeId, daySlotId },
      },
      { root: true }
    );
    if (data) {
      commit("setSlotsH", data);
      return true;
    }
    return false;
  },

  async ReloadSlotsM({ dispatch, commit }, { placeId, hourSlotId }) {
    const data = await dispatch(
      "axios/get",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Slot/ListMinuteSlotsByPlaceAndHourSlotId",
        params: { placeId, hourSlotId },
      },
      { root: true }
    );
    if (data) {
      commit("setSlotsM", data);
      return true;
    }
    return false;
  },

  async GetSlotD({ dispatch }, { placeId, daySlotId }) {
    if (Object.keys(this.state.slot.slotsD).length === 0) {
      await dispatch("ReloadSlotsD", { placeId });
    }
    return this.state.slot.slotsD[daySlotId];
  },
  async GetSlotH({ dispatch }, { placeId, daySlotId, hourSlotId }) {
    if (Object.keys(this.state.slot.slotsH).length === 0) {
      await dispatch("ReloadSlotsH", { placeId, daySlotId });
    }
    return this.state.slot.slotsH[hourSlotId];
  },
  async GetSlotM({ dispatch }, { placeId, hourSlotId, minuteSlotId }) {
    if (Object.keys(this.state.slot.slotsM).length === 0) {
      await dispatch("ReloadSlotsM", { placeId, hourSlotId });
    }
    return this.state.slot.slotsM[minuteSlotId];
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
