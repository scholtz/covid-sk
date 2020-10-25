<template>
  <span
    class="navbar-icon d-inline-flex align-items-center justify-content-center p-2 text-darkblue rounded"
    :class="menuItemIconActive"
  >
    <font-awesome-icon class="navbar-icon__svg" :icon="menuItemIcon" />
  </span>
</template>

<script>
export default {
  props: {
    menuItemIcon: {
      type: String,
      required: true,
    },
    menuItemIconActive: {
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.navbar-icon {
  height: 42px;
  width: 42px;
  font-size: 15px;
  border: 4px solid transparent;

  &__svg {
    width: 18px !important;
  }
}
</style>

