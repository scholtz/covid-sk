<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>
const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>

<style lang="scss">
@import "assets/base.scss";

.context-table--simple {
  th {
    background-color: rgba(255, 255, 255, 0.4);
  }

  td {
    background-color: rgba(255, 255, 255, 0.7);
  }
}

.tippy-tooltip.no-theme {
  background-color: unset;
  padding: 0;

  .tippy-content {
    border: 1px solid blue;
    border-radius: 5px;
  }
}
</style>
