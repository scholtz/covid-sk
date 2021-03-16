<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Global Admin Buttons</h1>
      </b-container>
    </div>
    <b-container class="my-2">
      <b-row>
        <button @click="FixAdvancedStatsClick">Fis Advanced Stats</button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  mounted() {},
  methods: {
    ...mapActions({
      InviteUser: "user/InviteUser",
      DownloadEHealthVisitors: "user/DownloadEHealthVisitors",
      SendDayResultsToEHealth: "user/SendDayResultsToEHealth",
      ListExportableDays: "result/ListExportableDays",
      DashboardStats: "user/DashboardStats",
      FixAdvancedStats: "admin/FixAdvancedStats",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
      openError: "snackbar/openError",
    }),
    FixAdvancedStatsClick() {
      if (!confirm("Táto metóda môže vymazať údaje zo systému!! Pokračovať?"))
        return;

      this.FixAdvancedStats().then(r => {
        if (r) {
          this.openSuccess("OK");
        }
      });
    },
  },
};
</script>
<style lang="scss"></style>
