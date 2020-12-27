<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Finálny export údajov</h1>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <button @click="clickExport" class="btn btn-primary my-4">
            Stiahnuť
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            >
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
            </svg>
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      FinalDataExport: "result/FinalDataExport",
    }),
    clickExport() {
      this.FinalDataExport();
    },
  },
};
</script>
<style lang="scss">
</style>