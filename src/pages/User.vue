<template>
  <div>
    <div v-if="$store.state.user.auth">
      <div class="app-pane-lgray py-2">
        <b-container>
          <h1>
            {{ $store.state.user.tokenData.Name }} vitajte v systéme pre
            testovanie covidu
          </h1>
        </b-container>
      </div>
    </div>
    <div v-else>
      <b-container>
        <h1>Nemáte oprávnenie k zobrazeniu tejto stránky</h1>
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