<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("selfCertsExport") }}</h1>
        <p>
          {{ $t("selfCertsExportInfo") }}
        </p>
      </b-container>
    </div>
    <b-container class="py-4">
      <b-form @submit.prevent="clickRegDownload">
        <b-row>
          <b-col>
            <b-form-group
              :label="$t('selfCertsEmployeeId')"
              label-for="employeeId"
              label-cols-sm="4"
              label-cols-lg="2"
            >
              <b-input
                v-model="employeeId"
                ref="employeeId"
                required
                autofocus
              />
            </b-form-group>
          </b-col> </b-row
        ><b-row>
          <b-col offset-lg="2" offset-sm="4">
            <button
              type="submit"
              class="btn btn-primary my-4"
              :disabled="processingRegDownload"
            >
              {{ $t("selfCertsLoad") }}
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
              <b-spinner small v-if="processingRegDownload" class="ml-1" />
            </button>
          </b-col>
        </b-row>
      </b-form>
      <b-form v-if="employeeLoaded" @submit.prevent="clickRegisterTest">
        <b-row class="py-1">
          <b-col>
            <b-form-group
              :label="$t('selfCertsName')"
              label-for="name"
              label-cols-sm="4"
              label-cols-lg="2"
            >
              <b-input v-model="toSend.name" ref="name" id="name" disabled />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="py-1">
          <b-col>
            <b-form-group
              :label="$t('selfCertsEmail')"
              label-for="email"
              label-cols-sm="4"
              label-cols-lg="2"
            >
              <b-input v-model="toSend.email" ref="email" id="email" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="py-1">
          <b-col>
            <b-form-group
              :label="$t('selfCertsPhone')"
              label-for="phone"
              label-cols-sm="4"
              label-cols-lg="2"
            >
              <b-input v-model="toSend.phone" ref="phone" id="phone" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="py-1">
          <b-col>
            <b-form-group
              :label="$t('selfCertsProduct')"
              label-for="product"
              label-cols-sm="4"
              label-cols-lg="2"
            >
              <b-form-select
                id="product"
                name="product"
                required
                :options="products"
                value-field="id"
                text-field="name"
                v-model="toSend.productId"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="py-1">
          <b-col>
            <b-form-group
              :label="
                product && product.category != 'vac'
                  ? $t('selfCertsTime')
                  : $t('selfVacTime')
              "
              label-for="time"
              label-cols-sm="4"
              label-cols-lg="2"
            >
              <VueCtkDateTimePicker
                :label="
                  product && product.category != 'vac'
                    ? $t('selfCertsTime')
                    : $t('selfVacTime')
                "
                v-model="toSend.time"
                required
                ref="time"
                id="time"
                time-zone="Europe/Bratislava"
                format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                formatted="llll"
                :locale="locale"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="py-1" v-if="product && product.category != 'vac'">
          <b-col>
            <b-form-group
              :label="$t('selfCertsResult')"
              label-for="result"
              label-cols-sm="4"
              label-cols-lg="2"
            >
              <b-form-select id="result" name="result" v-model="toSend.result">
                <b-select-option
                  v-for="result in results"
                  :key="result.item"
                  :value="result.item"
                >
                  {{ $t(result.name) }}
                </b-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col offset-lg="2" offset-sm="4">
            <button
              type="submit"
              class="btn btn-primary my-4"
              :disabled="processingRegInsert"
            >
              Zaregistruj test
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
              <b-spinner small v-if="processingRegInsert" class="ml-1" />
            </button>
          </b-col>
        </b-row>
      </b-form>
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
      employeeId: "",
      personalNumber: "",
      code: "",
      employee: {},
      employeeLoaded: false,
      processingDownload: false,
      processingRegDownload: false,
      processingRegInsert: false,
      loading: true,
      products: [],
      toSend: {
        result: "negative",
      },
      results: [
        { item: "negative", name: "selfCertsNegative" },
        { item: "positive", name: "selfCertsPositive" },
      ],
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    product() {
      if (!this.products) return {};
      if (!this.toSend.productId) return {};
      return this.products.find(r => r.id == this.toSend.productId);
    },
  },
  watch: {
    employeeLoaded(value) {
      if (value) {
        setTimeout(() => {
          this.$refs.email.focus();
        }, 0);
      } else {
        setTimeout(() => {
          this.$refs.employeeId.focus();
        }, 0);
      }
    },
  },
  mounted() {
    this.ListExternalProducts().then(r => {
      if (r) {
        this.products = r;
        this.loading = false;
      }
    });
  },
  methods: {
    ...mapActions({
      GetNextTest: "result/GetNextTest",
      RemoveFromDocQueue: "result/RemoveFromDocQueue",
      PrintCertificateByDocumentManager:
        "result/PrintCertificateByDocumentManager",
      ListExternalProducts: "placeProvider/ListExternalProducts",
      LoadEmployeeByEmployeeNumber: "user/LoadEmployeeByEmployeeNumber",
      RegisterEmployeeByDocumenter: "user/RegisterEmployeeByDocumenter",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    clickRegDownload() {
      this.employeeLoaded = false;
      this.processingRegDownload = true;
      this.LoadEmployeeByEmployeeNumber({
        employeeNumber: this.employeeId,
      }).then(r => {
        if (r && r.lastName) {
          this.employee = r;
          this.toSend.name =
            this.employee.firstName + " " + this.employee.lastName;
          this.toSend.email = this.employee.email;
          if (this.employee.customEmail) {
            this.toSend.email = this.employee.customEmail;
          }
          this.toSend.employeeId = this.employeeId;
          this.toSend.phone = this.employee.phone;
          if (this.employee.customPhone) {
            this.toSend.phone = this.employee.customPhone;
          }
          this.employeeLoaded = true;
        }
        this.processingRegDownload = false;
      });
    },
    clickRegisterTest() {
      this.processingRegInsert = true;
      if (this.product && this.product.category == "vac") {
        this.toSend.result = "negative";
      }
      this.RegisterEmployeeByDocumenter(this.toSend).then(r => {
        if (r) {
          this.openSuccess(this.$t("selfCertsTestInsertedMessage"));
          this.toSend = {
            result: "negative",
          };
          this.employeeLoaded = false;
        }
        this.processingRegInsert = false;
      });
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
.form-group {
  margin-bottom: 0;
}
</style>
