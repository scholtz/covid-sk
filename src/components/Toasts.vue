<template>
  <div aria-live="polite" aria-atomic="true" class="toast-container">
    <TransitionGroup name="toast" tag="div" appear>
      <div
        v-for="item in messages"
        :key="item.id"
        class="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        @mouseover="pauseProgress(item)"
        @mouseout="resumeProgress(item)"
      >
        <div
          v-if="item.timeOut > 0 && item.showProgress"
          class="progress rounded-0"
          style="height: 6px"
        >
          <div
            :class="'bg-' + item.type"
            :style="{ width: getCurrentProgress(item) + '%' }"
          />
        </div>

        <div
          class="toast-header"
          :class="'bg-' + item.type"
          style="height: 35px"
        >
          <strong class="ml-auto">
            <i class="toast-icon" :class="getIconClass(item)" />
          </strong>
          <button
            v-if="item.closeable"
            type="button"
            class="mr-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
            @click="remove(item)"
          >
            <span class aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">{{ item.message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  props: {
    showProgress: {
      type: Boolean,
      default: true,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    maxMessages: {
      type: Number,
      default: 5,
    },
    timeOut: {
      type: Number,
      default: 3000,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      messages: [],
      count: 0,
    };
  },
  created() {
    // start listening for "toast-message" channel's events
    EventBus.$on("toast-message", this.handleMessageEvent);
  },
  methods: {
    /**
     * Handle a message event.
     *
     * @param {object} payload
     */
    handleMessageEvent(payload) {
      console.log("Toasts.handleMessageEvent", payload);
      if (payload.message) {
        this.addMessage(payload.message, payload.type, payload.options);
      }
    },
    /**
     * Add a message to the list.
     *
     * @param {string} message
     * @param {string} type
     */
    addMessage(message, type, options = {}) {
      // message object data
      var messageData = {
        id: this.count++,
        message: message,
        type: type,
        showProgress: this.showProgress,
        timeOut: this.timeOut,
        closeable: this.closeable,
        rtl: this.rtl,
        progress: 0,
        paused: false,
        animationFrame: null,
      };
      // merge custom options
      messageData = Object.assign({}, messageData, options);
      // prepend new message to front of messages's array
      this.messages.unshift(messageData);
      // check if maximum messages to store has been reached
      if (this.messages.length > this.maxMessages) {
        // remove from the end
        this.messages.splice(this.maxMessages);
      }
      if (messageData.timeOut > 0) {
        // start message timeout
        this.startTimeout(messageData);
      }
    },
    /**
     * Start progress bar.
     * @param startTime {number}
     * @default 0
     */
    startTimeout(messageData, startFrom = 0) {
      const self = this;
      // performance.now() will give more precision to be used for a smooth prograss bar
      const startTime = performance.now();
      const start = () => {
        // start animation calculating
        messageData.animationFrame = requestAnimationFrame(timestamp => {
          const timeElapsed = timestamp + startFrom - startTime;
          // check if is message object already was removed
          // or prograss a toast message was hovered on
          if (!self.exists(messageData) || messageData.paused) {
            // cancel the animation
            cancelAnimationFrame(messageData.animationFrame);
            return;
            // check if timout value has not been reached
          } else if (timeElapsed < messageData.timeOut) {
            // calcalute the prograss
            const progress = timeElapsed / messageData.timeOut;
            // set a new progress
            messageData.progress = progress;
            // continue calculating the progress
            start();
          } else {
            // timout has been reached
            messageData.progress = 1;
            // cancel the animation
            cancelAnimationFrame(messageData.animationFrame);
            // remove message from array
            self.remove(messageData);
            return;
          }
        });
      };
      start();
    },
    /**
     * Pause prograss bar when hovering on a toast.
     *
     * @param {object} messageData
     */
    pauseProgress(messageData) {
      if (messageData.timeOut <= 0) return;
      messageData.paused = true;
    },
    /**
     * Resume prograss bar when going a way from 'mouseover' status.
     *
     * @param {object} messageData
     */
    resumeProgress(messageData) {
      if (messageData.timeOut <= 0) return;
      messageData.paused = false;
      // re-start animation calculating with a given start point
      this.startTimeout(
        messageData,
        messageData.timeOut * messageData.progress
      );
    },
    /**
     * Get current message prograss.
     *
     * @param {object} messageData
     */
    getCurrentProgress(messageData) {
      // set prograss to "100" when progress value is close to 100.
      // why? sometimes when a prograss is someting like (99.899)
      // it will show a little empty space at the end of prograss
      // bar which doesnt get filled.
      if (Math.round(messageData.progress * 100) === 100) {
        return 100;
      }
      return messageData.progress * 100;
    },
    /**
     * Get icon class based on type and layout.
     *
     * @param {object} messageData
     */
    getIconClass(messageData) {
      var iconClass = "toast-icon-" + messageData.type;
      if (messageData.rtl) {
        return "icon-right " + iconClass;
      }
      return "icon-left " + iconClass;
    },
    /**
     * Remove a message from the list.
     *
     * @param {number} id
     */
    remove(messageData) {
      const index = this.messages.findIndex(
        message => message.id === messageData.id
      );
      this.messages.splice(index, 1);
    },
    /**
     * Remove a message from the list.
     *
     * @param {number} id
     */
    exists(messageData) {
      const index = this.messages.findIndex(
        message => message.id === messageData.id
      );
      if (index === -1) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 350px;
  z-index: 1090;
}
.toast-icon {
  position: absolute;
  width: 22px;
  height: 22px;
  transform: translateY(-50%);
}
.icon-right {
  right: 10px;
}
.icon-left {
  left: 10px;
}
.toast-icon-success {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"%3E%3Cg fill="%234c4c4c"%3E%3Cpath d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/%3E%3Cpath d="M38.252 15.336l-15.369 17.29-9.259-7.407a1 1 0 0 0-1.249 1.562l10 8a.999.999 0 0 0 1.373-.117l16-18a1 1 0 1 0-1.496-1.328z"/%3E%3C/g%3E%3C/svg%3E');
}
.toast-icon-danger {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.2 475.2"%3E%3Cg fill="%234c4c4c"%3E%3Cpath d="M405.6 69.6C360.7 24.7 301.1 0 237.6 0s-123.1 24.7-168 69.6S0 174.1 0 237.6s24.7 123.1 69.6 168 104.5 69.6 168 69.6 123.1-24.7 168-69.6 69.6-104.5 69.6-168-24.7-123.1-69.6-168zm-19.1 316.9c-39.8 39.8-92.7 61.7-148.9 61.7s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7 0-297.8C128.5 48.9 181.4 27 237.6 27s109.1 21.9 148.9 61.7c82.1 82.1 82.1 215.7 0 297.8z"/%3E%3Cpath d="M342.3 132.9c-5.3-5.3-13.8-5.3-19.1 0l-85.6 85.6-85.6-85.6c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l85.6 85.6-85.6 85.6c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.6-85.6 85.6 85.6c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.4-85.6 85.6-85.6c5.3-5.3 5.3-13.8 0-19.1z"/%3E%3C/g%3E%3C/svg%3E');
}
.toast-icon-warning {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.561 78.561"%3E%3Cg fill="%234c4c4c"%3E%3Ccircle cx="39.28" cy="57.772" r="3.632"/%3E%3Cpath d="M38.792 48.347a2 2 0 0 0 2-2v-19a2 2 0 0 0-4 0v19a2 2 0 0 0 2 2z"/%3E%3Cpath d="M46.57 11.542l-.091-.141c-1.852-2.854-3.766-5.806-7.199-5.806-3.578 0-5.45 2.994-7.26 5.891l-.074.119L.278 65.266c-.182.308-.278.469-.278.826 0 3.896 3.135 6.874 6.988 6.874h64.585c3.854 0 6.988-2.979 6.988-6.874 0-.357-.096-.614-.277-.921L46.57 11.542zm25.003 57.424H6.988c-1.461 0-2.717-.951-2.95-2.394l31.374-53.061c1.554-2.487 2.572-3.963 3.868-3.963 1.261 0 2.457 1.87 3.843 4.006l31.399 53.007c-.232 1.442-1.488 2.405-2.949 2.405z"/%3E%3C/g%3E%3C/svg%3E');
}
.toast-icon-info {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"%3E%3Cg fill="%234c4c4c"%3E%3Cpath d="M32.5 0C14.58 0 0 14.579 0 32.5S14.58 65 32.5 65 65 50.421 65 32.5 50.42 0 32.5 0zm0 61C16.785 61 4 48.215 4 32.5S16.785 4 32.5 4 61 16.785 61 32.5 48.215 61 32.5 61z"/%3E%3Ccircle cx="33.018" cy="19.541" r="3.345"/%3E%3Cpath d="M32.137 28.342a2 2 0 0 0-2 2v17a2 2 0 0 0 4 0v-17a2 2 0 0 0-2-2z"/%3E%3C/g%3E%3C/svg%3E');
}
.toast-enter {
  opacity: 0.5 !important;
}
.toast-enter-active {
  transition: opacity 0.5s ease-in;
}
.toast-enter-to {
  opacity: 1;
}
.toast-leave {
  opacity: 0.5;
}
.toast-leave-active {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.toast-leave-to {
  opacity: 0;
}
</style>