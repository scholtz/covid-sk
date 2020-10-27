import Vue from "vue";
export const actions = {
  // eslint-disable-next-line
  openError: ({ dispatch }, text) => {
    Vue.$toast.error(text);
  },
  // eslint-disable-next-line
  openWarning: ({ dispatch }, text) => {
    Vue.$toast.warning(text);
  },
  // eslint-disable-next-line
  openSuccess: ({ dispatch }, text) => {
    Vue.$toast.success(text);
  },
};
export default {
  namespaced: true,
  actions,
};
