<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("reportsTitle") }}</h1>
        <p>{{ $t("reportsDescription") }}</p>
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
            @click="clickExportSick"
            class="btn btn-primary my-4 form-control"
          >
            {{ $t("reportButtonPositive") }}
            <b-spinner small v-if="loading0" />
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickExport"
            class="btn btn-primary my-4 form-control"
          >
            {{ $t("reportButtonTested") }}
            <b-spinner small v-if="loading1" />
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickExportInProcess"
            class="btn btn-primary my-4 form-control"
          >
            {{ $t("reportButtonNotProcessed") }}
            <b-spinner small v-if="loading2" />
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button
            @click="clickProofOfWorkExport"
            class="btn btn-primary my-4 form-control"
          >
            {{ $t("reportButtonNczi") }}
            <b-spinner small v-if="loading3" />
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickListAllVisitorsWhoDidNotCome"
            class="btn btn-primary my-4 form-control"
          >
            {{ $t("reportButtonMissing") }}
            <b-spinner small v-if="loading4" />
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickListAllVisitors"
            class="btn btn-primary my-4 form-control"
          >
            {{ $t("reportButtonAll") }}
            <b-spinner small v-if="loading5" />
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button
            @click="clickCompanyRegistrationsExport"
            class="btn btn-primary my-4 form-control"
          >
            Importovaní zamestnanci
            <b-spinner small v-if="loading7" />
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickExportResultSubmissions"
            class="btn btn-primary my-4 form-control"
          >
            Vyhodnotené testy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            ></svg>
            <b-spinner small v-if="loading8" />
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickListAnonymizedVisitors"
            class="btn btn-primary my-4 form-control"
          >
            Všetci anonymizovaní
            <b-spinner small v-if="loading6" />
          </button>
        </b-col>
      </b-row>
    </b-container>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Stavy testu</h1>
        <ul>
          <li>
            Osoba sa zaregistrovala na test.<br />
            NotTaken = "test-not-taken"
          </li>
          <li>
            Pracovník identifikoval občana a priradil mu test. <br />
            TestIsBeingProcessing = "test-not-processed"
          </li>
          <li>
            Test bol vyhodnocovaný, nebol ani negatívny ani pozitívny - zlyhal.
            Je potrebné aby sa občan prišiel pretestovať znovu.<br />
            TestMustBeRepeated = "test-to-be-repeated"
          </li>
          <li>
            Test bol vyhodnotený ako pozitívny.<br />
            PositiveWaitingForCertificate = "positive"
          </li>
          <li>
            Občan s pozitívnym testom si stiahol elektronický certifikát zo
            stránky registrácie:<br />
            PositiveCertificateTaken = "positive-certiciate-taken"
          </li>
          <li>
            Test bol vyhodnotený ako pozitívny.<br />
            NegativeWaitingForCertificate = "negative"
          </li>
          <li>
            Občan s pozitívnym testom si stiahol elektronický certifikát zo
            stránky registrácie:<br />
            NegativeCertificateTaken = "negative-certiciate-taken"
          </li>
        </ul>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      days: [],
      selectedDay: null,
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      loading7: false,
      loading8: false,
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
      CompanyRegistrationsExport: "user/CompanyRegistrationsExport",
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
    clickCompanyRegistrationsExport() {
      this.loading7 = true;
      this.CompanyRegistrationsExport().then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading7 = false;
      });
    },
    clickExportResultSubmissions() {
      this.loading8 = true;
      this.ExportResultSubmissions({ day: this.selectedDay }).then(r => {
        if (r) {
          this.openSuccess("Úspešne ste stiahli súbor");
        }
        this.loading8 = false;
      });
    },
  },
};
</script>
<style lang="scss">
</style>