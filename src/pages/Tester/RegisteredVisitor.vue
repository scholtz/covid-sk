<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Zaregistrovaný návštevník</h1>
      </b-container>
    </div>
    <b-container class="my-4" v-if="action === 'select'">
      <b-row>
        <b-col>
          <button @click="action = 'rc'" class="btn btn-primary my-4 mr-4">
            Načítať rodné číslo
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
          <button @click="action = 'regCode'" class="btn btn-primary my-4 mr-4">
            Načítať kód registrácie
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
    </b-container>

    <b-container class="my-4" v-if="action === 'rc'">
      <b-row>
        <b-col cols="12">
          <button
            class="btn btn-light btn-sm float-right bg-light my-2"
            @click="reset"
          >
            Zrušiť
          </button>
          <label for="code1">Rodné číslo</label>
          <b-input v-model="code" id="code1" />

          <button @click="loadByRC" class="btn btn-primary my-4">
            Overiť registráciu
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
    </b-container>

    <b-container class="my-4" v-if="action === 'regCode'">
      <b-row>
        <b-col cols="12">
          <button
            class="btn btn-light btn-sm float-right bg-light my-2"
            @click="reset"
          >
            Zrušiť
          </button>
          <label for="code1">Kód registrácie</label>
          <b-input v-model="code" id="code1" />

          <button @click="confirmCode" class="btn btn-primary my-4">
            Načítať kód registrácie
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

        <b-col>
          <StreamBarcodeReader @decode="onDecode" />
        </b-col>
      </b-row>
    </b-container>

    <b-container class="my-4" v-if="action === 'verifyPerson'">
      <b-row>
        <b-col cols="12">
          <button
            class="btn btn-light btn-sm float-right bg-light my-2"
            @click="reset"
          >
            Zrušiť
          </button>
          <h2>Overenie užívateľa</h2>
          <div>
            Kod: <span v-if="visitor.id">{{ visitor.id }}</span
            ><span v-else class="badge badge-danger ml-5"
              >Chybný kód registrácie</span
            >
          </div>
          <div>Meno: {{ visitor.firstName }} {{ visitor.lastName }}</div>
          <div>Poisťovňa: {{ visitor.insurance }}</div>
          <div>RČ: {{ visitor.rc }} {{ visitor.passport }}</div>
          <div>Adresa: {{ visitor.address }}</div>
          <div>Email: {{ visitor.email }}</div>
          <div>Tel: {{ visitor.phone }}</div>
          <button
            @click="action = 'testSetCode'"
            class="btn btn-primary my-4 mr-4"
            v-if="visitor.id"
          >
            Osoba je overená
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
          <button
            @click="$router.push('/tester/unannouncedVisitor')"
            class="btn btn-primary my-4"
          >
            Chybné údaje
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
    </b-container>

    <b-container class="my-4" v-if="action === 'testSetCode'">
      <b-row>
        <b-col cols="12">
          <button
            class="btn btn-light btn-sm float-right bg-light my-2"
            @click="reset"
          >
            Zrušiť
          </button>
          <label for="testingset1">Kód testovacej sady</label>
          <b-input v-model="testingset" id="testingset1" />
          <button @click="save" class="btn btn-primary my-4">
            Vykonať test
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
        <b-col>
          <StreamBarcodeReader @decode="onDecode" />
        </b-col>
      </b-row>
    </b-container>

    <b-container class="my-4" v-if="action === 'old'">
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
            <b-col
              cols="12"
              v-if="state === 'check' || state === 'visitor-error'"
            >
              <button @click="load" class="btn btn-primary my-4 mr-4">
                Skontrolovať údaje
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
              <button @click="save" class="btn btn-primary my-4">
                Uložiť
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
      <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded" />
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
      action: "select",
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
  mounted() {
    console.log("this.$route.params.id", this.$route.params.id);
    if (this.$route.params.id) {
      this.code = this.$route.params.id;
      // newly registered by reg manager
      this.GetVisitor({
        visitorCode: this.code,
      }).then(r => {
        if (r) {
          this.visitor = r;
          this.action = "verifyPerson";
        } else {
          this.state = "visitor-error";
        }
      });
    }
  },
  methods: {
    ...mapActions({
      ConnectVisitorToTest: "result/ConnectVisitorToTest",
      GetVisitor: "result/GetVisitor",
      GetVisitorByRC: "result/GetVisitorByRC",
    }),
    load() {
      this.state = "loading-data";
      this.GetVisitor({
        visitorCode: this.code,
      }).then(r => {
        if (r) {
          this.visitor = r;
          this.action = "verifyPerson";
        } else {
          this.state = "visitor-error";
        }
      });
    },
    loadByRC() {
      this.state = "loading-data";
      this.GetVisitorByRC({
        rc: this.code,
      }).then(r => {
        if (r) {
          this.code = r.id;
          this.visitor = r;
          this.action = "verifyPerson";
        } else {
          this.state = "visitor-error";
        }
      });
    },
    save() {
      this.ConnectVisitorToTest({
        visitorCode: this.code,
        testCode: this.testingset,
      }).then(r => {
        if (r) {
          this.action = "select";
          this.code = "";
          this.testingset = "";
        }
      });
    },
    onDecode(result) {
      if (result) {
        if (this.action == "regCode") {
          this.code = result;
          this.load().then(r => {
            if (r) {
              this.action = "verifyPerson";
            }
          });
        } else {
          this.testingset = result;
        }
      }
    },
    confirmCode() {
      this.action = "verifyPerson";
      this.load();
    },
    reset() {
      this.action = "select";
      this.code = "";
      this.testingset = "";
    },
  },
};
</script>
<style lang="scss">
</style>