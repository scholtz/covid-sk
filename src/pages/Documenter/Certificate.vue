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
    <b-container class="mt-4">
      <b-form @submit.prevent="downloadPDF">
        <b-form-group :label="$t('documentsIdentificationBy')" class="mb-4">
          <b-form-radio v-model="identificationBy" value="testingSet">{{
            $t("documentsTestingSet")
          }}</b-form-radio>
          <b-form-radio v-model="identificationBy" value="registrationCode">
            {{ $t("documentsRegistrationCode") }}
          </b-form-radio>
          <b-form-radio v-model="identificationBy" value="personalNumber">
            {{
              $store.state.config.RC_IS_INSURANCE
                ? $t("documentsPersonalNumberIns")
                : $t("documentsPersonalNumber")
            }}
          </b-form-radio>
          <b-form-radio v-model="identificationBy" value="employeeId">{{
            $t("documentsEmployeeId")
          }}</b-form-radio>
        </b-form-group>
        <b-row>
          <b-col v-if="identificationBy === 'testingSet'" cols="12" md="6">
            <label for="testingSet"
              ><div v-html="$t('documentsTestingSetLegend')"
            /></label>

            <b-input v-model="code" required ref="testingSet" />
          </b-col>
          <b-col
            v-else-if="identificationBy === 'registrationCode'"
            cols="12"
            md="6"
          >
            <label for="registrationCode"
              ><div v-html="$t('documentsRegNumberLegend')"
            /></label>

            <b-input v-model="code" required ref="registrationCode" />
          </b-col>
          <b-col
            v-else-if="identificationBy === 'personalNumber'"
            cols="12"
            md="6"
          >
            <label for="personalNumber"
              ><div
                v-if="$store.state.config.RC_IS_INSURANCE"
                v-html="$t('documentsPersonalNumberLegendIns')" />
              <div v-else v-html="$t('documentsPersonalNumberLegend')"
            /></label>
            <b-input v-model="code" ref="personalNumber" id="personalNumber" />
          </b-col>
          <b-col v-else-if="identificationBy === 'employeeId'" cols="12" md="6">
            <label for="employeeId">
              <div v-html="$t('documentsEmployeeIdLegend')"
            /></label>
            <b-input v-model="code" required ref="employeeId" id="employeeId" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <button type="submit" class="btn btn-primary my-4">
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
      </b-form>
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
      identificationBy: "",
      code: "",
      visitor: {},
      processingDownload: false,
    };
  },
  created() {
    this.identificationBy =
      localStorage.getItem("documentsIdentificationBy") || "testingSet";
  },
  watch: {
    identificationBy(value) {
      localStorage.setItem("documentsIdentificationBy", value);
      setTimeout(() => {
        this.$refs[value].focus();
      }, 0);
    },
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
        [this.identificationBy]: this.code,
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
<style lang="scss"></style>
