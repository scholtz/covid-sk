<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Výsledky testovania</h1>
      </b-container>
    </div>

    <div class="py-5">
      <b-container
        ><b-row>
          <b-col cols="12" md="6">
            <label for="code">9-miestny kód registácie</label>
            <b-input v-model="code" ref="code" />
          </b-col>
          <b-col cols="12" md="6">
            <label for="pass"
              >Posledné 4 čísla s rodného čísla alebo cestovného dokladu</label
            >
            <b-input v-model="pass" ref="pass" id="pass" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <button
              class="govuk-button my-3"
              data-module="govuk-button"
              @click="check"
            >
              Skontrolovať výsledok testu
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
        <b-row>
          <b-col>
            <h2>Výsledok testovania:</h2>
            <p v-if="results.state === 'not-submitted'">
              Odošlite prosím formulár
            </p>
            <p v-if="results.state === 'submitting'">Kontrolujem stav testu</p>
            <p v-if="results.state === 'error'">
              Pri spracovaní požiadavku vznikla chyba
            </p>
            <p v-if="results.state === 'positive'">
              <b>Bol</b> vám detekovaný COVID. Ostaňte prosím v karanténe.
            </p>
            <p v-if="results.state === 'negative'">
              Nie ste infikovaný/á. Test nepreukázal, že by ste boli
              infikovaný/á vírusom COVID-19.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      code: "",
      pass: "",
      results: {
        state: "not-submitted",
      },
    };
  },
  methods: {
    ...mapActions({
      GetResults: "result/GetResults",
    }),
    check() {
      this.results = { state: "submitting" };
      this.GetResults({ code: this.code, pass: this.pass }).then(r => {
        if (r) {
          this.results = r;
        } else {
          this.results = { state: "error" };
        }
      });
    },
  },
};
</script>
<style lang="scss">
</style>