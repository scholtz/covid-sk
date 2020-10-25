import VueLadda from './vue-ladda.vue';

const installer = {
  install(Vue, options) {
    Vue.component('vue-ladda', VueLadda);
  }
};

const inBrowser = typeof window !== 'undefined';
if (inBrowser && window.Vue) {
  window.Vue.use(installer);
}

export default VueLadda;
