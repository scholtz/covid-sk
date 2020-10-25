<template>
  <div class="app-page-title">
    <div class="page-title-wrapper">
      <div class="page-title-heading">
        <div class="page-title-icon">
          <i :class="icon" />
        </div>
        <div>
          {{heading}}
          <div class="page-title-subheading">{{subheading}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    icon: String,
    heading: String,
    subheading: String
  }
};
</script>
