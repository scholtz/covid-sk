<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("ppTitle") }}</h1>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <b-form-checkbox v-model="agreement" id="agreement">
                {{ $t("ppAgreement") }}
              </b-form-checkbox>
              <p>
                <a
                  href="#/terms-and-conditions"
                  target="_blank"
                  class="btn bg-light text-dark p-1 m-1"
                  >Obchodné podmienky</a
                >
                <a
                  href="#/pricing"
                  target="_blank"
                  class="btn bg-light text-dark p-1 m-1"
                  >Cenník</a
                >
              </p>
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="Country">{{ $t("ppCountry") }}</label>
            </b-col>
            <b-col md="8">
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
            <b-col md="4">
              <label for="CompanyId">{{ $t("ppCompanyId") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.CompanyId"
                ref="CompanyId"
                id="CompanyId"
                :disabled="!agreement"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="CompanyName">{{ $t("ppCompanyName") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.CompanyName"
                ref="CompanyName"
                id="CompanyName"
                :disabled="!agreement"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="VAT">{{ $t("ppVAT") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.VAT"
                ref="VAT"
                id="VAT"
                :disabled="!agreement"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="MainEmail">{{ $t("ppMainEmail") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.MainEmail"
                ref="MainEmail"
                id="MainEmail"
                :disabled="!agreement"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="PrivatePhone">{{ $t("ppPrivatePhone") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.PrivatePhone"
                ref="PrivatePhone"
                id="PrivatePhone"
                :disabled="!agreement"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="PublicEmail">{{ $t("ppPublicEmail") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.PublicEmail"
                ref="PublicEmail"
                id="PublicEmail"
                :disabled="!agreement"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col md="4">
              <label for="PublicPhone">{{ $t("ppPublicPhone") }}</label>
            </b-col>
            <b-col md="8">
              <b-input
                v-model="pp.PublicPhone"
                ref="PublicPhone"
                id="PublicPhone"
                :disabled="!agreement"
              />
            </b-col>
          </b-row>
          <b-row class="py-1">
            <b-col offset-md="4">
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
        </b-col>
        <b-col>
          <h2>Prečo si zvoliť rýchlejšie.sk?</h2>

          <ol>
            <li>
              Sme <b>jediný</b> poskytovaľ služby objednávkového systému na
              Slovensku pre odoberanie vzoriek choroby COVID-19 s rozsahom od
              predregistrácie cez testovanie až po reporting hygiene
            </li>
            <li>Robíme to preto, že <b>chceme pomôcť</b>, nie kôli peniazom</li>
            <li>
              Možnosť zriadiť rezervačný a testovací systém <b>úplne zadarmo</b>
            </li>
            <li>
              Jediná aplikácia ktorá je <b>škálovateľná</b> v rozsahu že zvládne
              otestovať aj celé Slovensko za 2 dni. Bola spustená ešte pred
              prvým hromadným testovaním.
            </li>
            <li>
              Podpora IT znamená pre odberné miesto
              <b>5 - 20 násobne rýchlejší</b>
              vykon testu ako pri papierovej podobe.
            </li>
            <li>
              Jeden doktor pri odbere zvládne pretestovať minimálne 3 ľudí za
              minútu.
            </li>
            <li>
              Dvaja doktori pri odbere zvládne pretestovať minimálne 6 ľudí za
              minútu.
            </li>
            <li><b>Bez čakania</b> a radov</li>
            <li>
              Riziko <b>prenosu</b> vírusu od návštevníka <b>k doktorovi</b> je
              <b>minimalizované</b>.
            </li>
            <li>
              Riziko prenosu vírusu od návštevníka k ďalšiemu návštevníkovi je
              minimalizované.
            </li>
            <li>Podpora DriveIn testovania. Podpora WalkIn testovania.</li>
            <li>Technická možnosť zriadiť offline testovacie miesto.</li>
            <li>
              Efektívne pre <b>životné prostredie</b> - bez papierovačiek.
            </li>
            <li>
              Jasná definícia GDPR. Riziko zneužitia osobných údajov je
              minimalizované na minimum.
            </li>
            <li>
              Osobné údaje sú zašifrované najsilnejšími šifrovacími spôsobmi.
              Neexistuje časový bod v ktorom by sa dali extrahovať údaje pretože
              dáta sa po teste a notifikácii užívateľovi zmažú.
            </li>
          </ol>
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