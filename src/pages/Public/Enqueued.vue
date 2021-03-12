<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("enqueuedTitle") }}</h1>
        <p>
          {{ $t("enqueuedInfo") }}
        </p>
      </b-container>
    </div>

    <div class="py-5">
      <b-container>
        <b-col v-if="success"> {{ $t("") }} </b-col>
        <b-row v-if="!success">
          <b-col cols="12" md="6">
            <b-input v-model="code" ref="code" />
            <label for="code" v-html="$t('resultsCode')" />
          </b-col>
          <b-col cols="12" md="6">
            <b-input v-model="pass" ref="pass" id="pass" />
            <label
              v-if="$store.state.config.RC_IS_INSURANCE"
              for="pass"
              v-html="$t('resultsPassIns')"
            />
            <label v-else for="pass" v-html="$t('resultsPass')" />
          </b-col>
        </b-row>
        <b-row v-if="!success">
          <b-col> </b-col>
          <b-col>
            <b-button class="my-3" @click="enqueuee" variant="primary">
              {{ $t("enqueuedTitle") }}
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
      success: false,
      processingRequest: false,
      processingDownload: false,

      code: "",
      pass: "",
      results: {
        state: "not-submitted",
      },
    };
  },
  methods: {
    ...mapActions({
      Enqueued: "result/Enqueued",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    enqueuee() {
      this.processingRequest = true;
      this.results = { state: "submitting" };

      load(this.$store.state.config.SITE_KEY).then(recaptcha => {
        recaptcha.execute("submit").then(token => {
          if (token) {
            this.Enqueued({
              code: this.code,
              pass: this.pass,
              captcha: token,
            }).then(r => {
              if (r) {
                this.openSuccess("Ďakujeme");
                this.success = true;
              }
              this.processingRequest = false;
            });
          } else {
            this.processingRequest = false;
          }
        });
      });
    },
  },
};
</script>
<style lang="scss"></style>
