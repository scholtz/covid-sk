<template>
  <div class="d-flex py-2">
    <b-avatar
      variant="default"
      src="https://placekitten.com/300/300"
      class="mt-1 mr-2"
    />

    <div class="d-flex flex-column">
      <span class="text-primary note-text">
        {{ note.name }}
      </span>
      <span class="text-primary note-text">
        {{ note.date | formatDateTime({ separator: "|" }) }}
      </span>
      <span class="note-text">
        {{ note.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.b-avatar {
  min-width: 2.5em;
}
.note-text {
  font-size: 13px;
}
</style>
