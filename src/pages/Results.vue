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
            <b-input v-model="code" ref="code" />
            <label for="code"><div v-html="$t('resultsCode')" /></label>
          </b-col>
          <b-col cols="12" md="6">
            <b-input v-model="pass" ref="pass" id="pass" />
            <label for="pass">
              <div
                v-if="$store.state.config.RC_IS_INSURANCE"
                v-html="$t('resultsPassIns')"
              />
              <div v-else v-html="$t('resultsPass')" />
            </label>
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
              <b-spinner small v-if="processingRequest" class="ml-1" />
            </b-button>

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
            <p v-if="results.state === 'positive-certifiacte-sent'">
              <span v-html="$t('resultsTestPositiveCertTaken')" />
            </p>
            <p v-if="results.state === 'positive-certifiacte-taken'">
              <span v-html="$t('resultsTestPositiveCertNotTaken')" />
            </p>
            <p v-if="results.state === 'positive-certiciate-taken'">
              <span v-html="$t('resultsTestPositiveCertNotTaken')" />
            </p>
            <p v-if="results.state === 'positive'">
              <span v-html="$t('resultsTestPositiveCertNotTaken')" />
            </p>
            <p v-if="results.state === 'negative'">
              <span v-html="$t('resultsTestNegativeCertNotTaken')" />
            </p>
            <p v-if="results.state === 'negative-certiciate-taken'">
              <span v-html="$t('resultsTestNegativeCertTaken')" />
            </p>
          </b-col>
          <b-col>
            <b-button class="my-3" @click="downloadPDF" variant="primary">
              {{ $t("resultsDownloadPDF") }}
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
              <b-spinner
                small
                v-if="processingDownload"
                class="ml-1"
              /> </b-button
            ><br />
            <div
              v-if="$store.state.config.RC_IS_INSURANCE"
              v-html="$t('resultsPdfNoteIns')"
            />
            <div v-else v-html="$t('resultsPdfNote')" />
            <div>
              <b-button class="my-3" @click="clickResendResult" variant="light">
                {{ $t("resultsResend") }}
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
                <b-spinner small v-if="resending" class="ml-1" />
              </b-button>
              <br />{{ $t("resultsLimitWarning") }}
            </div>
            <div>
              <b-button
                class="my-3"
                @click="removePersonalData"
                variant="danger"
              >
                {{ $t("resultsRemoveRegistration") }}
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
                <b-spinner small v-if="processingRemoval" class="ml-1" />
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { load } from "recaptcha-v3";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      processingRequest: false,
      processingDownload: false,
      processingRemoval: false,
      resending: false,
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
      DownloadPDF: "result/DownloadPDF",
      ResendResult: "result/ResendResult",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    check() {
      this.processingRequest = true;
      this.results = { state: "submitting" };

      load(this.$store.state.config.SITE_KEY).then(recaptcha => {
        recaptcha.execute("submit").then(token => {
          if (token) {
            this.GetResults({
              code: this.code,
              pass: this.pass,
              captcha: token,
            }).then(r => {
              if (r) {
                this.results = r;
              } else {
                this.results = { state: "error" };
              }
              this.processingRequest = false;
            });
          } else {
            this.results = { state: "error" };
            this.processingRequest = false;
          }
        });
      });
    },
    downloadPDF() {
      this.processingDownload = true;
      this.results = { state: "submitting" };
      load(this.$store.state.config.SITE_KEY).then(recaptcha => {
        recaptcha.execute("submit").then(token => {
          if (token) {
            this.DownloadPDF({
              code: this.code,
              pass: this.pass,
              captcha: token,
            }).then(r => {
              if (r) {
                this.results = r;
              } else {
                this.results = { state: "error" };
              }
              this.processingDownload = false;
            });
          } else {
            this.results = { state: "error" };
            this.processingDownload = false;
          }
        });
      });
    },
    removePersonalData() {
      this.processingRemoval = true;
      load(this.$store.state.config.SITE_KEY).then(recaptcha => {
        recaptcha.execute("submit").then(token => {
          if (token) {
            this.RemoveTest({
              code: this.code,
              pass: this.pass,
              captcha: token,
            }).then(r => {
              if (r) {
                this.results = "removed";
                this.openSuccess(this.$t("resultsRegistrationRemoved"));
              } else {
                this.results = { state: "error" };
              }
              this.processingRemoval = false;
            });
          }
        });
      });
    },
    clickResendResult() {
      this.resending = true;
      load(this.$store.state.config.SITE_KEY).then(recaptcha => {
        recaptcha.execute("submit").then(token => {
          if (token) {
            this.ResendResult({
              code: this.code,
              pass: this.pass,
              captcha: token,
            }).then(r => {
              this.resending = false;
              if (r) {
                this.openSuccess(this.$t("resultsSent"));
              } else {
                this.results = { state: "error" };
              }
            });
          }
        });
      });
    },
  },
};
</script>
<style lang="scss">
</style>