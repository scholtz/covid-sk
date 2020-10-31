<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Správca dokumentov</h1>
        <p>Správca dokumentov vypisuje certifikáty.</p>
      </b-container>
    </div>
    <b-container>
      <b-table-simple v-if="visitor && visitor.id">
        <b-tr> <b-th>Typ</b-th><b-th>Hodnota</b-th> </b-tr>
        <b-tr>
          <b-th>Meno</b-th
          ><b-td>{{ visitor.firstName }} {{ visitor.lastName }}</b-td>
        </b-tr>
        <b-tr>
          <b-th>Dátum narodenia / Doklad cudzinca</b-th
          ><b-td>{{ parseRC() }} {{ visitor.passport }}</b-td>
        </b-tr>
        <b-tr>
          <b-th>Výsledok testu</b-th>
          <b-td v-if="visitor.result === 'positive'">
            <div class="badge badge-danger">Pozitívny</div>
          </b-td>
          <b-td v-if="visitor.result === 'negative'">
            <div class="badge badge-danger">Negatívny</div>
          </b-td>
        </b-tr>
      </b-table-simple>
      <button
        @click="nextTestClick"
        class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
      >
        Načítať údaje ďalšieho testu
        <svg
          class="govuk-button__start-icon"
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
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return { visitor: {} };
  },

  methods: {
    ...mapActions({
      GetNextTest: "result/GetNextTest",
      RemoveFromDocQueue: "result/RemoveFromDocQueue",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    nextTestClick() {
      console.log("click");
      if (this.visitor.testingSet) {
        this.RemoveFromDocQueue({ testId: this.visitor.testingSet }).then(
          r1 => {
            if (r1) {
              this.openSuccess("Test bol odobraný z fronty");
            }
            this.GetNextTest().then(r => {
              if (r) {
                this.visitor = r;
              } else {
                this.visitor = {};
                this.openSuccess(
                  "Zatiaľ nie je dostupný žiadny ďalší test. Skúste znovu neskôr."
                );
              }
            });
          }
        );
      } else {
        this.GetNextTest().then(r => {
          if (r) {
            this.visitor = r;
          } else {
            this.visitor = {};
            this.openSuccess("Zatiaľ nie je dostupný žiadny ďalší test");
          }
        });
      }
    },
    parseRC() {
      if (!this.visitor) return "";
      if (!this.visitor.rc) return "";
      return this.visitor.rc.substring(0, 6);
    },
  },
};
</script>
<style lang="scss">
</style>