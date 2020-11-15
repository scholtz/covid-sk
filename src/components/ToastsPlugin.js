import Toasts from "./Toasts";
import EventBus from "./EventBus";

const ToastsPlugin = {
  install(Vue) {
    // attach these methods with Vue instance
    Vue.prototype.$toast = {
      /**
       * Send the event on channel (toast-message) with a given payload.
       *
       * @param {string} message
       * @param {string} type
       */
      send(message, type, options) {
        EventBus.$emit("toast-message", {
          message: message,
          type: type,
          options: options,
        });
      },

      /**
       * Send a success message event.
       *
       * @param {string} message
       */
      success(message, options = {}) {
        this.send(message, "success", options);
      },

      /**
       * Send a warning message event.
       *
       * @param {string} message
       */
      warning(message, options = {}) {
        this.send(message, "warning", options);
      },

      /**
       * Send an info message event.
       *
       * @param {string} message
       */
      info(message, options = {}) {
        this.send(message, "info", options);
      },

      /**
       * Send an error message event.
       *
       * @param {string} message
       */
      error(message, options = {}) {
        this.send(message, "danger", options);
      },
    };

    // register the component
    Vue.component("Toasts", Toasts);
  },
};

// auto install by default
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ToastsPlugin);
}

export default ToastsPlugin;
