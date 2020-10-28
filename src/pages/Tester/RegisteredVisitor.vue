<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Zaregistrovaný návštevník</h1>
      </b-container>
    </div>
    <b-container class="my-4">
      <b-row>
        <b-col cols="4">
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
        <b-col cols="8">
          <b-row>
            <b-col cols="12">
              <label for="code">Kód registrácie</label>
              <b-input v-model="code" ref="code" id="code" />
            </b-col>
            <b-col cols="12" v-if="state === 'check'">
              <button
                @click="load"
                class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
              >
                Skontrolovať údaje
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
              </button> </b-col
            ><b-col cols="12" v-if="state === 'loading-data'">
              <div><B>Čítam dáta</B> <b-spinner /></div> </b-col
            ><b-col cols="12" v-if="state === 'visitor-loaded'">
              <div>Meno: {{ visitor.firstName }} {{ visitor.lastName }}</div>
              <div>Poisťovňa: {{ visitor.insurance }}</div>
            </b-col>
            <b-col cols="12">
              <label for="testingset">Skúmavka</label>
              <b-input v-model="testingset" ref="testingset" id="testingset" />
            </b-col>
            <b-col cols="12" v-if="state === 'visitor-loaded'">
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
    </b-container>
    <b-container>
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
      ></StreamBarcodeReader>
    </b-container>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

import { mapActions } from "vuex";

export default {
  components: {
    StreamBarcodeReader,
  },
  data() {
    return {
      state: "check",
      visitor: {},
      scanningData: "code",
      code: "",
      testingset: "",
      readerSize: {
        width: 120,
        height: 90,
      },
      detecteds: [],
    };
  },
  methods: {
    ...mapActions({
      ConnectVisitorToTest: "result/ConnectVisitorToTest",
      GetVisitor: "result/GetVisitor",
    }),
    load() {
      this.state = "loading-data";
      this.GetVisitor({
        visitorCode: this.code,
      }).then(r => {
        if (r) {
          this.visitor = r;
          this.state = "visitor-loaded";
        } else {
          this.state = "visitor-error";
        }
      });
    },
    save() {
      this.ConnectVisitorToTest({
        visitorCode: this.code,
        testCode: this.testingset,
      });
    },
    onDecode(result) {
      if (result) {
        if (this.scanningData == "code") {
          this.code = result;
        } else {
          this.testingset = result;
        }
      }
    },
  },
};
</script>
<style lang="scss">
</style>