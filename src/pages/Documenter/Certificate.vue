<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("documentsTitle") }}</h1>
        <p v-if="$store.state.config.RC_IS_INSURANCE">
          {{ $t("documentsDescriptionIns") }}
        </p>
        <p v-else>{{ $t("documentsDescription") }}</p>
      </b-container>
    </div>
    <b-container
      ><b-row>
        <b-col cols="12" md="6">
          <label for="code"
            ><div v-html="$t('documentsRegNumberLegend')"
          /></label>

          <b-input v-model="code" ref="code" />
        </b-col>
        <b-col cols="12" md="6">
          <label for="personalNumber"
            ><div
              v-if="$store.state.config.RC_IS_INSURANCE"
              v-html="$t('documentsPersonalNumberLegendIns')" />
            <div v-else v-html="$t('documentsPersonalNumberLegend')"
          /></label>
          <b-input
            v-model="personalNumber"
            ref="personalNumber"
            id="personalNumber"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button @click="downloadPDF" class="btn btn-primary my-4">
            {{ $t("downloadFileButton") }}
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
            <b-spinner small v-if="processingDownload" class="ml-1" />
          </button>
        </b-col>
      </b-row>
    </b-container>
    <!--
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
      <button @click="nextTestClick" class="btn btn-primary my-4">
        Načítať údaje ďalšieho testu
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
    </b-container>
    -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      personalNumber: "",
      code: "",
      visitor: {},
      processingDownload: false,
    };
  },

  methods: {
    ...mapActions({
      GetNextTest: "result/GetNextTest",
      RemoveFromDocQueue: "result/RemoveFromDocQueue",
      PrintCertificateByDocumentManager:
        "result/PrintCertificateByDocumentManager",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    downloadPDF() {
      this.processingDownload = true;
      this.PrintCertificateByDocumentManager({
        registrationCode: this.code,
        personalNumber: this.personalNumber,
      }).then(r => {
        if (r) {
          this.results = r;
        } else {
          this.results = { state: "error" };
        }
        this.processingDownload = false;
      });
    },
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