<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Cenová kalkulačka</h1>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row
        ><b-col md="12">
          <p>
            Cena sa skladá z 2 hlavných zložiek: Náklady na
            <b>infraštruktúru</b> (HW nie je zadarmo) a náklady na
            <b>komunikáciu</b> (SMSky nie sú zadarmo)
          </p>
        </b-col>
        <b-col md="6">
          <b-card title="Infraštruktúra">
            <p>
              Cena infraštruktúry závisí od toho, koľko užívateľov naraz môže
              komunikovať so systémom. Ak máte malé odberové miesto je to niečo
              iné ako odberové miesto v Prahe, alebo správa odberových miest pre
              celoplošné testovanie obyvateľov.
            </p>
            <b-card class="my-1">
              <b-form-radio
                v-model="infra"
                name="infra"
                value="shared"
                id="shared"
              >
                <b>Zdieľaná infraštruktúra</b>: Bez garancie dostupnosti, ale
                <b>zadarmo</b>
              </b-form-radio>
            </b-card>
            <b-card class="my-1">
              <b-form-radio
                v-model="infra"
                name="infra"
                id="bronze"
                value="bronze"
              >
                <b>SLA - Bronze</b>: Garantujeme Vám 600 requestov na server za
                minútu:<br />
                Dostupnosť: min 95%
                <b>5 EUR / deň</b>
              </b-form-radio>
            </b-card>
            <b-card class="my-1">
              <b-form-radio
                v-model="infra"
                name="infra"
                id="silver"
                value="silver"
              >
                <b>SLA - Silver</b>: Garantujeme Vám 100 000 requestov na server
                za minútu:<br />
                Dostupnosť: min 98%
                <b>100 EUR / deň</b>
              </b-form-radio>
            </b-card>
            <b-card class="my-1">
              <b-form-radio v-model="infra" name="infra" id="gold" value="gold">
                <b>SLA - Gold</b>: Garantujeme Vám 5 000 000 requestov na server
                za minútu:<br />
                Dostupnosť: min 99%
                <b>10 000 EUR / deň</b>
              </b-form-radio>
            </b-card>
            <b-card class="my-1">
              Počet dní - vrátane víkendov kedy je možné urobiť predregistráciu:
              <b-input
                v-model="days"
                type="number"
                step="1"
                min="1"
                value="1"
              />
            </b-card>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card title="Komunikácia">
            <p>
              Cena komunikácie je závislá od počtu odoslaných SMS správ,
              komunikácie cez viber a zároveň emailami. Zjednodušili sme Vám to,
              a jednoduchý model pri ktorom nebudeme stratový je cena za
              registráciu. Výberom balíka nižšie si kúpite určítý počet
              registrácií. Neskôr si môžete dokúpiť ďalší počet.
            </p>
            <b-card class="my-1">
              <b-form-radio v-model="comm" name="comm" value="K0" id="K0">
                <b>K0</b>: Bez SMS komunikácie - Zadarmo
              </b-form-radio>
            </b-card>
            <b-card class="my-1">
              <b-form-radio v-model="comm" name="comm" value="K1" id="K1">
                <b>K1</b>: 1 000 registrácií: <b>500 EUR</b>
              </b-form-radio>
            </b-card>
            <b-card class="my-1">
              <b-form-radio v-model="comm" name="comm" id="K15" value="K15">
                <b>K15</b>: 15 000 registrácií: <b>3 500 EUR</b>
              </b-form-radio>
            </b-card>
            <b-card class="my-1">
              <b-form-radio v-model="comm" name="comm" id="K100" value="K100">
                <b>K100</b>: 100 000 registrácií: <b>20 000 EUR</b>
              </b-form-radio>
            </b-card>
          </b-card>
          <b-card class="my-1" title="Výsledná cena">
            <p>
              <abbr title="Service Level Agreement">SLA</abbr> za každý deň
              používania s cenou komunikácie tvorí výslednú cenu služby.
              <b-card class="my-1">
                <h2>{{ price }}</h2>
              </b-card>
            </p>

            <button
              v-if="$store.state.user.auth"
              @click="clickLogin"
              class="govuk-button govuk-!-margin-right-3 govuk-button--start my-1"
            >
              Objednať službu
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
            <button
              v-if="!$store.state.user.auth"
              @click="$router.push('/registerPlaceProvider')"
              class="govuk-button govuk-!-margin-right-3 govuk-button--start my-1"
            >
              Registrácia správcu odberných miest
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
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: 7,
      infra: "bronze",
      comm: "K1",
      price: "",
    };
  },
  watch: {
    days() {
      this.recalculate();
    },
    infra() {
      this.recalculate();
    },
    comm() {
      this.recalculate();
    },
  },
  mounted() {
    this.recalculate();
  },
  methods: {
    recalculate() {
      let ret = "";
      let price = 0;
      if (this.infra === "shared") {
        ret += "0 + ";
      }
      if (this.infra === "bronze") {
        ret += `5 * ${this.days} + `;
        price = 5 * this.days;
      }
      if (this.infra === "silver") {
        ret += `100 * ${this.days} + `;
        price = 100 * this.days;
      }
      if (this.infra === "gold") {
        ret += `10000 * ${this.days} + `;
        price = 10000 * this.days;
      }

      if (this.comm === "K0") {
        ret += ` 0 = `;
        price += 0;
      }

      if (this.comm === "K1") {
        ret += ` 500 = `;
        price += 500;
      }

      if (this.comm === "K15") {
        ret += ` 3500 = `;
        price += 3500;
      }

      if (this.comm === "K100") {
        ret += ` 20000 = `;
        price += 20000;
      }
      ret += price + " EUR";
      this.price = ret;
    },
  },
};
</script>