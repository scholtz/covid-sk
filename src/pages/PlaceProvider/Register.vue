<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("ppTitle") }}</h1>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row>
        <b-col offset-md="2">
          <b-form-checkbox v-model="agreement" id="agreement">
            {{ $t("ppAgreement") }}
          </b-form-checkbox>
          <p>
            <a
              href="#/terms-and-conditions"
              target="_blank"
              class="btn bg-light text-dark p-1"
              >Obchodné podmienky</a
            ><br />
            <a
              href="#/pricing"
              target="_blank"
              class="btn bg-light text-dark p-1"
              >Cenník</a
            >
          </p>
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="Country">{{ $t("ppCountry") }}</label>
        </b-col>
        <b-col md="10">
          <b-form-select
            v-model="pp.Country"
            :options="CountryOptions"
            class="mb-3"
            value-field="item"
            text-field="name"
            ref="Country"
            id="Country"
            :disabled="!agreement"
          />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="CompanyId">{{ $t("ppCompanyId") }}</label>
        </b-col>
        <b-col md="10">
          <b-input
            v-model="pp.CompanyId"
            ref="CompanyId"
            id="CompanyId"
            :disabled="!agreement"
          />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="CompanyName">{{ $t("ppCompanyName") }}</label>
        </b-col>
        <b-col md="10">
          <b-input
            v-model="pp.CompanyName"
            ref="CompanyName"
            id="CompanyName"
            :disabled="!agreement"
          />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="VAT">{{ $t("ppVAT") }}</label>
        </b-col>
        <b-col md="10">
          <b-input v-model="pp.VAT" ref="VAT" id="VAT" :disabled="!agreement" />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="MainEmail">{{ $t("ppMainEmail") }}</label>
        </b-col>
        <b-col md="10">
          <b-input
            v-model="pp.MainEmail"
            ref="MainEmail"
            id="MainEmail"
            :disabled="!agreement"
          />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="PrivatePhone">{{ $t("ppPrivatePhone") }}</label>
        </b-col>
        <b-col md="10">
          <b-input
            v-model="pp.PrivatePhone"
            ref="PrivatePhone"
            id="PrivatePhone"
            :disabled="!agreement"
          />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="PublicEmail">{{ $t("ppPublicEmail") }}</label>
        </b-col>
        <b-col md="10">
          <b-input
            v-model="pp.PublicEmail"
            ref="PublicEmail"
            id="PublicEmail"
            :disabled="!agreement"
          />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col md="2">
          <label for="PublicPhone">{{ $t("ppPublicPhone") }}</label>
        </b-col>
        <b-col md="10">
          <b-input
            v-model="pp.PublicPhone"
            ref="PublicPhone"
            id="PublicPhone"
            :disabled="!agreement"
          />
        </b-col>
      </b-row>
      <b-row class="py-1">
        <b-col offset-md="2">
          <button
            @click="clickRegister"
            class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
          >
            {{ $t("ppRegister") }}
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
      CountryOptions: [
        { item: "SK", name: "Slovensko" },
        { item: "CZ", name: "Česko" },
        { item: "AT", name: "Rakúsko" },
        { item: "DE", name: "Nemecko" },
      ],
    };
  },
  methods: {
    ...mapActions({
      Register: "placeProvider/Register",
    }),
    clickRegister() {
      this.Register({ pp: this.pp }).then(r => {
        if (r) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
<style lang="scss">
</style>