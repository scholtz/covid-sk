<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("adminDashboardTitle") }}</h1>
      </b-container>
    </div>
    <b-container class="my-2">
      <b-row>
        <b-col col="6">
          <b-card :title="$t('adminDashboardVisitorManagement')">
            <input
              class="form-control"
              v-model="visitor"
              :placeholder="$t('adminDashboardVisitorDetails')"
            />
            <button class="btn btn-primary m-2" @click="loadVisitor">
              {{ $t("adminDashboardLoad") }}
            </button>
          </b-card>
        </b-col>
        <b-col col="6">
          <b-card :title="$t('adminDashboardEzdravieManagement')">
            <VueCtkDateTimePicker
              v-model="importTime"
              :label="$t('adminDashboardImportDate')"
              time-zone="Europe/Bratislava"
              format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
              formatted="llll"
              :locale="locale"
            />

            <button
              class="btn btn-primary m-2"
              @click="clickDownloadEHealthVisitors"
            >
              {{ $t("adminDashboardLoadDetails") }}
              <b-spinner
                small
                class="ml-1"
                v-if="processingDownloadEHealthVisitors"
              />
            </button>

            <label for="days">{{ $t("adminDashboardExportableDays") }}</label>
            <b-form-select
              v-model="selectedDay"
              :options="days"
            ></b-form-select>
            <button
              class="btn btn-primary m-2"
              @click="clickSendDayResultsToEHealth"
            >
              {{ $t("adminDashboardSentResults") }}
              <b-spinner
                small
                class="ml-1"
                v-if="processingSendDayResultsToEHealth"
              />
            </button>
          </b-card>
        </b-col>
        <b-col col="6">
          <b-card :title="$t('adminDashboardEmployeeUpload')">
            <input
              class="form-control btn btn-primary m-2 p-1"
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
            />
            <button
              class="btn btn-primary m-2"
              v-if="hasFile"
              @click="submitFile"
            >
              {{ $t("adminDashboardUpload") }}
            </button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  components: {
    VueCtkDateTimePicker,
  },
  data() {
    return {
      importTime: "",
      name: "",
      email: "",
      visitor: "",
      days: [],
      selectedDay: null,
      roles: ["Admin"],
      rolesList: ["Admin", "PasswordProtected"],
      hasFile: false,
      processingDownloadEHealthVisitors: false,
      processingSendDayResultsToEHealth: false,
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
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
      InviteUser: "user/InviteUser",
      DownloadEHealthVisitors: "user/DownloadEHealthVisitors",
      SendDayResultsToEHealth: "user/SendDayResultsToEHealth",
      ListExportableDays: "result/ListExportableDays",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
      openError: "snackbar/openError",
    }),

    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      console.log(">> formData >> ", formData);
      const that = this;
      // You should have a server side REST API
      axios
        .post(
          this.$store.state.config.VUE_CONFIG_APP_API +
            "Visitor/UploadEmployees",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (r) {
          console.log("r", r);
          that.openSuccess("Úspešne nahratých záznamov: " + r.data);
        })
        .catch(function (r) {
          console.log("r", r);
          that.openError("Chyba pri nahrávaní súboru");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(
        ">>>> 1st element in files array >>>> ",
        this.file,
        this.$refs.file.files.length
      );
      this.hasFile = true;
    },
    loadVisitor() {
      this.$router.push("/admin/visitor/" + this.visitor);
    },
    clickDownloadEHealthVisitors() {
      this.processingDownloadEHealthVisitors = true;
      const that = this;
      this.DownloadEHealthVisitors({ day: this.importTime }).then(r => {
        this.processingDownloadEHealthVisitors = false;
        console.log("DownloadEHealthVisitors", r);
        if (r) {
          that.openSuccess("Úspešne stiahnutých záznamov: " + r);
        } else {
          that.openError("Nestiahol sa žiadny záznam " + r);
        }
      });
    },
    clickSendDayResultsToEHealth() {
      this.processingSendDayResultsToEHealth = true;
      const that = this;
      this.SendDayResultsToEHealth({ date: this.selectedDay }).then(r => {
        this.processingSendDayResultsToEHealth = false;
        console.log("SendDayResultsToEHealth", r);
        if (r) {
          that.openSuccess("Úspešne odoslaných záznamov: " + r);
        } else {
          that.openError("Neodoslal sa žiadny záznam " + r);
        }
      });
    },
  },
};
</script>
<style lang="scss"></style>
