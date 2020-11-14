<template>
  <div
    class="d-flex justify-content-between p-0 align-items-center"
    @click="switchArrow"
  >
    <b-button
      class="btn--icon py-0 px-2 bg-lightblue"
      variant="link"
      v-b-toggle="menuItem.id"
    >
      <font-awesome-icon
        v-if="showList"
        icon="chevron-up"
        class="text-darkblue"
      />
      <font-awesome-icon v-else icon="chevron-down" class="text-darkblue" />
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showList: false,
    };
  },
  methods: {
    switchArrow() {
      this.showList = !this.showList;
    },
  },
};
</script>
<style lang="scss">
.btn--icon {
  font-size: 12px;
  height: 28px;
  width: 28px;
}
</style>

