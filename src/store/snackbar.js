import Vue from "vue";
export const actions = {
  // eslint-disable-next-line no-empty-pattern
  openError: ({}, text) => {
    Vue.$toast.error(text);
  },
  // eslint-disable-next-line no-empty-pattern
  openWarning: ({}, text) => {
    Vue.$toast.warning(text);
  },
  // eslint-disable-next-line no-empty-pattern
  openSuccess: ({}, text) => {
    Vue.$toast.success(text);
  },
};
export default {
  namespaced: true,
  actions,
};
