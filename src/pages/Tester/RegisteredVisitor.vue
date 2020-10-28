<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Zaregistrovaný návštevník</h1>
      </b-container>
    </div>
    <b-container class="my-4">
      <b-row>
        <b-col>
          <b-form-group label="Scanuje sa typ údaju">
            <b-form-radio v-model="scanningData" name="person-type" value="code"
              >Kód registrácie</b-form-radio
            >
            <b-form-radio
              v-model="scanningData"
              name="person-type"
              value="testingset"
              >Skúmavka</b-form-radio
            >
          </b-form-group>
        </b-col>
        <b-col>
          <b-row>
            <b-col cols="12">
              <label for="code">Kód registrácie</label>
              <b-input v-model="code" ref="code" id="code" />
            </b-col>
            <b-col cols="12">
              <label for="testingset">Skúmavka</label>
              <b-input v-model="testingset" ref="testingset" id="testingset" />
            </b-col>
            <b-col cols="12">
              <button
                @click="save"
                class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
              >
                Uložiť
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
      </b-row>

      <b-row>
        <b-col>
          <v-quagga
            :onDetected="logIt"
            :readerSize="readerSize"
            :readerTypes="['ean_reader']"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueQuagga from "vue-quaggajs";
Vue.use(VueQuagga);
import { mapActions } from "vuex";

export default {
  data() {
    return {
      scanningData: "code",
      code: "",
      testingset: "",
      readerSize: {
        width: 480,
        height: 360,
      },
      detecteds: [],
    };
  },
  methods: {
    ...mapActions({
      ConnectVisitorToTest: "result/ConnectVisitorToTest",
    }),
    logIt(data) {
      if (this.scanningData == "code") {
        this.code = data;
      } else {
        this.testingset = data;
      }
    },
    save() {
      this.ConnectVisitorToTest({
        visitorCode: this.code,
        testCode: this.testingset,
      });
    },
  },
};
</script>
<style lang="scss">
</style>