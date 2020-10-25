<template>
  <div class="app-page-title">
    <div class="page-title-wrapper">
      <div class="page-title-heading">
        <div>
          {{ heading }}
          <div class="page-title-subheading">
            {{ subheading }}
          </div>
        </div>
      </div>
      <div class="page-title-actions">
        <button type="button" class="btn-shadow mr-3 btn btn-dark">
          <font-awesome-icon icon="star" />
        </button>
        <button
          type="button"
          class="btn-shadow d-inline-flex align-items-center btn btn-success"
        >
          <font-awesome-icon class="mr-2" icon="plus" />
          Create New
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    heading: String,
    subheading: String,
  },
};
</script>
