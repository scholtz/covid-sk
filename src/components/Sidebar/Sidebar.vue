<template>
  <div class="sidebar p-3 bg-beau-blue">
    <slot />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapState("sidebar", ["componentExist"]),
  },
  created() {
    this.setVisibleSidebar(true);
  },
  destroyed() {
    this.setVisibleSidebar(false);
  },
  methods: {
    ...mapActions("sidebar", ["setVisibleSidebar"]),
  },
};
</script>
<style lang="scss">
.sidebar {
  position: fixed;
  overflow-y: auto;
  right: 0px;
  top: 0px;
  height: 100vh;
  width: 350px;
  z-index: 10;
  transition: 0.2s all;

  .card {
    position: relative;

    &--disabled:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      z-index: 10;
      opacity: 0.6;
      background: #fff;
      cursor: not-allowed;
    }
    &--disabled:after {
      content: "Waiting for call ...";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 20px;
      z-index: 10;
      opacity: 0.6;
      text-align: center;
      cursor: not-allowed;
    }
  }
}
</style>