<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Dashboard administrátora</h1>
      </b-container>
    </div>
    <b-container class="my-2">
      <b-row>
        <b-col col="6">
          <b-card title="Správa návštevníka">
            <input
              class="form-control"
              v-model="visitor"
              placeholder="R.č., číslo registrácie, covid-pass.."
            />
            <button class="btn btn-primary m-2" @click="loadVisitor">
              Načítať
            </button>
          </b-card>
        </b-col>
        <b-col col="6">
          <b-card title="Správa eZdravie">
            <VueCtkDateTimePicker
              v-model="importTime"
              label="Dátum importu"
              time-zone="Europe/Bratislava"
              format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
              formatted="llll"
              :locale="locale"
            />

            <button
              class="btn btn-primary m-2"
              @click="clickDownloadEHealthVisitors"
            >
              Načítať údaje pre vybratý deň
              <b-spinner
                small
                class="ml-1"
                v-if="processingDownloadEHealthVisitors"
              />
            </button>
            <button
              class="btn btn-primary m-2"
              @click="clickSendDayResultsToEHealth"
            >
              Odoslať výsledky občanom
              <b-spinner
                small
                class="ml-1"
                v-if="processingSendDayResultsToEHealth"
              />
            </button>
          </b-card>
        </b-col>
        <b-col col="6">
          <b-card title="Nahratie zamestnancov">
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
              Nahrať
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
  methods: {
    ...mapActions({
      InviteUser: "user/InviteUser",
      DownloadEHealthVisitors: "user/DownloadEHealthVisitors",
      SendDayResultsToEHealth: "user/SendDayResultsToEHealth",
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
      this.SendDayResultsToEHealth({ date: this.importTime }).then(r => {
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
<style lang="scss">
</style>