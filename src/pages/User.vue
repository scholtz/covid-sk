<template>
  <div>
    <div v-if="$store.state.user.auth">
      <div class="app-pane-lgray py-2">
        <b-container>
          <h3>
            {{ $t("userWelcome", { name: $store.state.user.tokenData.Name }) }}
          </h3>
          <p>
            {{ $t("userHelp") }}
          </p>
        </b-container>
      </div>
    </div>
    <div v-else>
      <b-container>
        <h1>{{ $t("accessDenied") }}</h1>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      detecteds: [],
    };
  },
  methods: {
    logIt(data) {
      console.log("detected", data);
    },
  },
};
</script>
<style lang="scss">
</style>