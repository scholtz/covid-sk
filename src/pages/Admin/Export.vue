<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("adminReportsTitle") }}</h1>
        <p>{{ $t("adminReportsDescription") }}</p>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <label for="days">{{ $t("reportsChooseDay") }}</label>
          <b-form-select v-model="selectedDay" :options="days"></b-form-select>
        </b-col>

        <b-col>
          <button
            @click="clickListAnonymizedVisitors"
            class="btn btn-primary my-4 form-control"
          >
            {{ $t("adminReportsButton") }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            ></svg>
            <b-spinner small v-if="loading6" />
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickExportResultSubmissions"
            class="btn btn-primary my-4 form-control"
          >
            ExportResultSubmissions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            ></svg>
            <b-spinner small v-if="loading7" />
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      days: [],
      selectedDay: null,
      loading0: false,
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      loading7: false,
    };
  },
  mounted() {
    this.ListExportableDays().then(r => {
      if (r) {
        this.days = r;
      }
    });
  },
  methods: {
    ...mapActions({
      FinalDataExport: "result/FinalDataExport",
      ListVisitorsInProcess: "result/ListVisitorsInProcess",
      ProofOfWorkExport: "result/ProofOfWorkExport",
      ListAllVisitorsWhoDidNotCome: "result/ListAllVisitorsWhoDidNotCome",
      ListAllVisitors: "result/ListAllVisitors",
      ListExportableDays: "result/ListExportableDays",
      ListTestedVisitors: "result/ListTestedVisitors",
      ListAnonymizedVisitors: "result/ListAnonymizedVisitors",
      ExportResultSubmissions: "result/ExportResultSubmissions",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    clickExportSick() {
      this.loading0 = true;
      this.FinalDataExport({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading0 = false;
      });
    },
    clickExport() {
      this.loading1 = true;
      this.ListTestedVisitors({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading1 = false;
      });
    },
    clickExportInProcess() {
      this.loading2 = true;

      this.ListVisitorsInProcess({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading2 = false;
      });
    },
    clickProofOfWorkExport() {
      this.loading3 = true;
      this.ProofOfWorkExport({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading3 = false;
      });
    },
    clickListAllVisitorsWhoDidNotCome() {
      this.loading4 = true;
      this.ListAllVisitorsWhoDidNotCome({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading4 = false;
      });
    },
    clickListAllVisitors() {
      this.loading5 = true;
      this.ListAllVisitors({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading5 = false;
      });
    },
    clickListAnonymizedVisitors() {
      this.loading6 = true;
      this.ListAnonymizedVisitors({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading6 = false;
      });
    },
    clickExportResultSubmissions() {
      this.loading7 = true;
      this.ExportResultSubmissions({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading7 = false;
      });
    },
  },
};
</script>
<style lang="scss">
</style>