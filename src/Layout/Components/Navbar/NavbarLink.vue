<template>
  <span
    class="nav-text d-inline-flex my-0 ml-3 mr-1 py-2 px-0 align-items-center text-decoration-none"
    :class="menuItemTextActive"
  >
    {{ menuItemText }}
  </span>
</template>

<script>
export default {
  props: {
    menuItemText: {
      type: String,
      required: true
    },
    menuItemTextActive: {
      required: false
    }
  }
};
</script>

<style lang="scss">
.nav-text {
  font-size: 14px;
  text-transform: uppercase;
}
</style>