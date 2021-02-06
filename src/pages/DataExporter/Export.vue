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
          <label for="days">Výber dňa exportu</label>
          <b-form-select v-model="selectedDay" :options="days"></b-form-select>
        </b-col>
        <b-col>
          <button
            @click="clickExport"
            class="btn btn-primary my-4 form-control"
          >
            Stiahnuť testovaných
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            ></svg>
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickExportInProcess"
            class="btn btn-primary my-4 form-control"
          >
            Stiahnuť nespracovaných
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            ></svg>
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickProofOfWorkExport"
            class="btn btn-primary my-4 form-control"
          >
            NCZI veta (Krajský úrad)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            ></svg>
          </button>
        </b-col>
        <b-col>
          <button
            @click="clickListAllVisitorsWhoDidNotCome"
            class="btn btn-primary my-4 form-control"
          >
            Export všetkých
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            ></svg>
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
      ListExportableDays: "result/ListExportableDays",
    }),
    clickExport() {
      this.FinalDataExport({ day: this.selectedDay });
    },
    clickExportInProcess() {
      this.ListVisitorsInProcess({ day: this.selectedDay });
    },
    clickProofOfWorkExport() {
      this.ProofOfWorkExport({ day: this.selectedDay });
    },
    clickListAllVisitorsWhoDidNotCome() {
      this.ListAllVisitorsWhoDidNotCome({ day: this.selectedDay });
    },
  },
};
</script>
<style lang="scss">
</style>