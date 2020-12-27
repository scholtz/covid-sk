<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("resultsTitle") }}</h1>
      </b-container>
    </div>

    <div class="py-5">
      <b-container
        ><b-row>
          <b-col cols="12" md="6">
            <label for="code">{{ $t("resultsCode") }}</label>
            <b-input v-model="code" ref="code" />
          </b-col>
          <b-col cols="12" md="6">
            <label for="pass">{{ $t("resultsPass") }}</label>
            <b-input v-model="pass" ref="pass" id="pass" />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="my-3" @click="check" variant="primary">
              {{ $t("resultsCheckResults") }}
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
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>{{ $t("resultsResult") }}:</h2>
            <p v-if="results.state === 'not-submitted'">
              {{ $t("resultsSendForm") }}
            </p>
            <p v-if="results.state === 'submitting'">
              {{ $t("resultsCheckingTest") }}
            </p>
            <p v-if="results.state === 'error'">
              {{ $t("resultsError") }}
            </p>

            <p v-if="results.state === 'test-not-taken'">
              {{ $t("resultsTestNotTaken") }}
            </p>
            <p v-if="results.state === 'removed'">
              {{ $t("resultsTestRemoved") }}
            </p>
            <p v-if="results.state === 'test-to-be-repeated'">
              {{ $t("resultsTestToRepeat") }}
            </p>
            <p v-if="results.state === 'test-not-processed'">
              {{ $t("resultsTestNotProcessed") }}
            </p>
            <p v-if="results.state === 'positive-certiciate-taken'">
              <span v-html="$t('resultsTestPositiveCertTaken')" />
            </p>
            <p v-if="results.state === 'positive'">
              <span v-html="$t('resultsTestPositiveCertNotTaken')" />
            </p>
            <p v-if="results.state === 'negative'">
              <span v-html="$t('resultsTestNegativeCertNotTaken')" />
            </p>
            <p v-if="results.state === 'negative-certiciate-taken'">
              <span v-html="$t('resultsTestNegativeCertTaken')" />

              <br />
              <b-button
                class="my-3"
                @click="removePersonalData"
                variant="primary"
              >
                {{ $t("resultsRemovePersonalData") }}
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
              </b-button>
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
      RemoveTest: "result/RemoveTest",
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
    removePersonalData() {
      this.RemoveTest({ code: this.code, pass: this.pass }).then(r => {
        if (r) {
          this.results = "removed";
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