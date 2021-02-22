<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("formEditProviderDetailsTitle") }}</h1>
      </b-container>
    </div>
    <b-container class="py-3" v-if="loading">
      <b-row>
        <b-col>
          <b-spinner label="Loading..." />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="py-3" v-if="!loading">
      <b-row>
        <b-col>
          <b-row class="py-1">
            <b-col md="4">
              <label for="eZdravieUser">EZdravie užívateľ</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="data.eZdravieUser"
                ref="eZdravieUser"
                id="eZdravieUser"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="eZdraviePass">EZdravie heslo</label>
            </b-col>
            <b-col md="8">
              <b-input
                type="password"
                v-model="data.eZdraviePass"
                ref="eZdraviePass"
                id="eZdraviePass"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col offset-md="4">
              <button @click="clickUpdateEnc" class="btn btn-primary my-4">
                Upraviť údaje pre moje ezdravie
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
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-row class="py-1">
            <b-col md="4">
              <label for="MainContact">{{ $t("ppMainContact") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.mainContact"
                ref="MainContact"
                id="MainContact"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="Country">{{ $t("ppCountry") }}</label>
            </b-col>
            <b-col md="8">
              <b-form-select
                v-model="pp.country"
                :options="CountryOptions"
                class="mb-3"
                value-field="item"
                text-field="name"
                ref="Country"
                id="Country"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="CompanyId">{{ $t("ppCompanyId") }}</label>
            </b-col>
            <b-col md="8">
              <b-input v-model="pp.companyId" ref="CompanyId" id="CompanyId" />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="CompanyName">{{ $t("ppCompanyName") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.companyName"
                ref="CompanyName"
                id="CompanyName"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="VAT">{{ $t("ppVAT") }}</label>
            </b-col>
            <b-col md="8">
              <b-input v-model="pp.vat" ref="VAT" id="VAT" />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="MainEmail">{{ $t("ppMainE-mail") }}</label>
            </b-col>
            <b-col md="8">
              <b-input v-model="pp.mainEmail" ref="MainEmail" id="MainEmail" />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="PrivatePhone">{{ $t("ppPrivatePhone") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.privatePhone"
                ref="PrivatePhone"
                id="PrivatePhone"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="PublicEmail">{{ $t("ppPublicE-mail") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.publicEmail"
                ref="PublicEmail"
                id="PublicEmail"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="PublicPhone">{{ $t("ppPublicPhone") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.publicPhone"
                ref="PublicPhone"
                id="PublicPhone"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col offset-md="4">
              <button @click="clickUpdate" class="btn btn-primary my-4">
                Upraviť správcu odberných miest
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
            </b-col>
          </b-row>
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
      loading: true,
      agreement: false,
      pp: {
        CompanyName: "",
        CompanyId: "",
        VAT: "",
        Country: "SK",
        MainEmail: "",
        PrivatePhone: "",
        PublicEmail: "",
        PublicPhone: "",
        Web: "",
      },
      data: {
        placeProviderId: "",
        eZdraviePass: "",
        eZdravieUser: "",
      },
      CountryOptions: [
        { item: "SK", name: "Slovensko" },
        { item: "CZ", name: "Česko" },
        { item: "AT", name: "Rakúsko" },
        { item: "DE", name: "Nemecko" },
      ],
    };
  },
  computed: {
    ppStore() {
      if (!this.$store.state) return "";
      return this.$store.state.user.tokenData.pp;
    },
    placePrivider() {
      if (!this.$store.state.placeProvider.places) return {};
      return this.$store.state.placeProvider.places.find(
        p => p.placeProviderId === this.ppStore
      );
    },
  },
  watch: {
    placePrivider() {
      this.pp = this.placePrivider;
      console.log("pp", this.pp);
      this.loading = false;
    },
  },
  mounted() {
    this.ListPrivate();
    this.GetSensitiveData().then(r => {
      if (r) {
        if (r.eZdraviePass) r.eZdraviePass = "";
        this.data = r;
      }
    });
  },
  methods: {
    ...mapActions({
      UpdatePP: "placeProvider/UpdatePP",
      UpdateSensitiveData: "placeProvider/UpdateSensitiveData",
      GetSensitiveData: "placeProvider/GetSensitiveData",
      ListPrivate: "placeProvider/ListPrivate",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    clickUpdate() {
      this.UpdatePP({ pp: this.pp }).then(r => {
        if (r) {
          this.ListPrivate().then(r2 => {
            if (r2) {
              this.pp = this.placePrivider;
              this.openSuccess("Informácie o prevádzkovateľovi boli upravené");
            }
          });
        }
      });
    },
    clickUpdateEnc() {
      this.data.placeProviderId = this.placePrivider.placeProviderId;
      this.UpdateSensitiveData({ data: this.data }).then(r => {
        if (r) {
          this.openSuccess("Informácie o prevádzkovateľovi boli upravené");
        }
      });
    },
  },
};
</script>
<style lang="scss">
</style>