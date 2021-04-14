<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Global Admin Buttons</h1>
      </b-container>
    </div>
    <b-container class="my-2">
      <b-row class="my-2">
        <b-col cols="auto" class="d-flex align-items-end">
          <button @click="FixAdvancedStatsClick" class="btn btn-light">
            Fix Advanced Stats
            <b-spinner small v-if="FixAdvancedStatsProcessing" />
          </button>
        </b-col>
        <b-col cols="auto">
          <VueCtkDateTimePicker
            v-model="from"
            label="Od data"
            time-zone="Europe/Bratislava"
            format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
            formatted="llll"
            :locale="locale"
          />
        </b-col>
      </b-row>
      <b-row class="my-2">
        <b-col cols="auto">
          <button
            @click="FixConnectVisitorsWithEmployeeIdClick"
            class="btn btn-light"
          >
            FixConnectVisitorsWithEmployeeId
            <b-spinner
              small
              v-if="FixConnectVisitorsWithEmployeeIdProcessing"
            />
          </button>
        </b-col>
      </b-row>
      <b-row class="my-2">
        <b-col cols="auto">
          <button @click="DeleteAllRegistrationsClick" class="btn btn-light">
            DeleteAllRegistrations
            <b-spinner small v-if="DeleteAllRegistrationsProcessing" />
          </button>
        </b-col>
      </b-row>
      <b-row class="my-2">
        <b-col cols="auto">
          <button @click="RequeeUnprocessedVisitorsClick" class="btn btn-light">
            DeleteAllRegistrations
            <b-spinner small v-if="RequeeUnprocessedVisitorsProcessing" />
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import { mapActions } from "vuex";

export default {
  components: {
    VueCtkDateTimePicker,
  },
  data() {
    return {
      FixAdvancedStatsProcessing: false,
      FixConnectVisitorsWithEmployeeIdProcessing: false,
      RequeeUnprocessedVisitorsProcessing: false,
      DeleteAllRegistrationsProcessing: false,
      from: "",
    };
  },
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
      FixConnectVisitorsWithEmployeeId:
        "admin/FixConnectVisitorsWithEmployeeId",
      DeleteAllRegistrations: "admin/DeleteAllRegistrations",
      RequeeUnprocessedVisitors: "admin/RequeeUnprocessedVisitors",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
      openError: "snackbar/openError",
    }),
    FixAdvancedStatsClick() {
      if (!confirm("Táto metóda môže vymazať údaje zo systému!! Pokračovať?"))
        return;
      this.FixAdvancedStatsProcessing = true;
      const from = this.from || null;
      this.FixAdvancedStats({ from }).then(r => {
        if (r) {
          this.openSuccess("OK " + r);
        }
        this.FixAdvancedStatsProcessing = false;
      });
    },
    FixConnectVisitorsWithEmployeeIdClick() {
      this.FixConnectVisitorsWithEmployeeIdProcessing = true;
      this.FixConnectVisitorsWithEmployeeId().then(r => {
        if (r) {
          this.openSuccess("OK " + r);
        }
        this.FixConnectVisitorsWithEmployeeIdProcessing = false;
      });
    },
    DeleteAllRegistrationsClick() {
      this.DeleteAllRegistrationsProcessing = true;
      this.DeleteAllRegistrations().then(r => {
        if (r) {
          this.openSuccess("OK " + r);
        }
        this.DeleteAllRegistrationsProcessing = false;
      });
    },
    RequeeUnprocessedVisitorsClick() {
      this.RequeeUnprocessedVisitorsProcessing = true;
      this.RequeeUnprocessedVisitors().then(r => {
        if (r) {
          this.openSuccess("OK " + r);
        }
        this.RequeeUnprocessedVisitorsProcessing = false;
      });
    },
  },
};
</script>
<style lang="scss"></style>
