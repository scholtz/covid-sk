export const state = () => ({
  country: "SK",
  list: [
    {
      value: "24",
      text: "Dôvera",
    },
    {
      value: "25",
      text: "VšZP",
    },
    {
      value: "27",
      text: "Union",
    },
    {
      value: "98",
      text: "EU",
    },
    {
      value: "99",
      text: "Other",
    },
  ],
});

export const mutations = {
  setCountryMutation(state, country) {
    if (country) {
      state.country = country;
      if (country === "CZ") {
        state.list = [
          { value: "111", text: "Všeobecná zdravotní pojišťovna" },
          { value: "205", text: "Česká průmyslová ZP" },
          { value: "201", text: "Vojenská zdravotní pojišťovna" },
          { value: "213", text: "Revírní bratrská pokladna" },
          {
            value: "207",
            text: "Oborová zdr.pojišťovna zaměstnanců bank a pojišťoven",
          },
          { value: "211", text: "Zdravotní pojišťovna Ministerstva vnitra" },
          { value: "209", text: "Zaměstnanecká pojišťovna ŠKODA" },
          { value: "2561", text: "Všeobecná ZP" },
          { value: "2700", text: "UNION ZP" },
          { value: "2400", text: "Dôvera ZP" },
          { value: "98", text: "EU" },
          { value: "99", text: "Other" },
        ];
        console.log("insurance state.country", state.country);
      } else {
        state.list = [
          { value: "24", text: "Dôvera" },
          { value: "25", text: "VšZP" },
          { value: "27", text: "Union" },
          { value: "98", text: "EU" },
          { value: "99", text: "Other" },
        ];
      }
    }
    console.log("insurance", state.list);
  },
};

export const actions = {
  setCountry({ commit }, { country }) {
    commit("setCountryMutation", country);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
