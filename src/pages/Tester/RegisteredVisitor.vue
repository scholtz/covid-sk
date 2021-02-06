<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Zaregistrovaný návštevník</h1>
      </b-container>
    </div>
    <b-container class="my-4" v-if="action === 'select'">
      <b-row v-if="needPlaceConfirmation">
        <b-col>
          <div class="alert alert-danger">
            {{ this.$store.state.user.me.name }}, skontrolujte prosím nastavenie
            Vášho aktuálneho miesta:
            {{ this.$store.state.user.me.placeObj.name }}

            <button class="btn btn-danger m-2" @click="confirmPlace">
              Potvrdiť
            </button>
            <button
              class="btn btn-primary m-2"
              @click="$router.push('/tester/place')"
            >
              Zmeniť
            </button>
          </div>
        </b-col>
      </b-row>
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
            Načítať kód registrácie čiarovým kódom
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
            @click="action = 'regCodeQR'"
            class="btn btn-primary my-4 mr-4"
          >
            Načítať kód registrácie QR kódom
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
          <button @click="newVisitor()" class="btn btn-primary my-4 mr-4">
            Osoba bez registrácie
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
          <label for="codeRc">Rodné číslo</label>
          <b-input v-model="code" id="codeRc" />

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

    <b-container class="my-4" v-if="action === 'regCodeQR'">
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
          <div class="m-4">&nbsp;</div>
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
          <qrcode-stream @decode="onDecodeQR" />
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
          <label for="codeQR">Kód registrácie</label>
          <b-input v-model="code" id="codeQR" />
          <div class="m-4">&nbsp;</div>
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
          <table class="table">
            <tr>
              <td>Kod:</td>
              <td>
                <span v-if="visitor.id">{{ visitor.id }}</span>

                <span v-else class="badge badge-danger ml-5"
                  >Chybný kód registrácie</span
                >
              </td>
            </tr>
            <tr>
              <td>Meno:</td>
              <td>{{ visitor.firstName }} {{ visitor.lastName }}</td>
            </tr>
            <tr>
              <td>Poisťovňa:</td>
              <td>
                {{ visitor.insurance }}
                <span v-if="visitor.insurance === '24'">- Dôvera</span>
                <span v-if="visitor.insurance === '25'">- VšZP</span>
                <span v-if="visitor.insurance === '27'">- Union</span>
                <span v-if="visitor.insurance === '98'">- EÚ poistenec</span>
                <span v-if="visitor.insurance === '99'">- Cudzinec</span>
              </td>
            </tr>

            <tr
              v-if="
                visitor.personType === 'idcard' ||
                visitor.personType === 'child'
              "
            >
              <td>RČ:</td>
              <td>
                {{ visitor.rc }}
                <b-badge variant="danger" v-if="validatePersonalNumber"
                  >Pozor, RČ vyzerá byť nesprávne</b-badge
                >

                <b-badge variant="danger" v-if="invalidID"
                  >Pozor, doklad nie je vyplnený</b-badge
                >
              </td>
            </tr>
            <tr v-if="visitor.personType === 'foreign'">
              <td>Pas:</td>
              <td>
                {{ visitor.passport }}
                <b-badge variant="danger" v-if="invalidID"
                  >Pozor, doklad nie je vyplnený</b-badge
                >
              </td>
            </tr>
            <tr>
              <td>Adresa:</td>
              <td>
                {{ visitor.address }}
                <b-badge variant="danger" v-if="!visitor.address"
                  >Pozor, adresa je nesprávne zadaná</b-badge
                >
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{{ visitor.email }}</td>
            </tr>
            <tr>
              <td>Tel:</td>
              <td>{{ visitor.phone }}</td>
            </tr>
            <tr>
              <td>Dátum narodenia:</td>
              <td>
                {{ visitor.birthDayDay }}.{{ visitor.birthDayMonth }}.{{
                  visitor.birthDayYear
                }}

                <b-badge
                  variant="danger"
                  v-if="
                    !visitor.birthDayDay ||
                    !visitor.birthDayMonth ||
                    !visitor.birthDayYear
                  "
                  >Pozor, dátum narodenia vyzerá byť nesprávny</b-badge
                ><b-badge
                  variant="danger"
                  v-if="
                    validateRCWithDate(
                      visitor.birthDayDay,
                      visitor.birthDayMonth,
                      visitor.birthDayYear,
                      visitor.rc,
                      visitor.personType
                    )
                  "
                  >Pozor, dátum narodenia vyzerá byť nesprávny</b-badge
                >
              </td>
            </tr>
            <tr
              v-if="
                visitor.result === 'test-not-taken' ||
                visitor.result === 'test-not-processed' ||
                visitor.result === 'positive-certifiacte-taken' ||
                visitor.result === 'positive'
              "
            >
              <td>Stav:</td>
              <td>
                <span v-if="visitor.result === 'test-not-taken'">
                  {{ $t("resultsTestNotTaken") }}
                </span>
                <span v-else-if="visitor.result === 'test-to-be-repeated'">
                  <b-badge variant="info">{{
                    $t("resultsTestToRepeat")
                  }}</b-badge>
                </span>
                <span v-else-if="visitor.result === 'test-not-processed'">
                  <b-badge variant="info">{{
                    $t("resultsTestNotProcessed")
                  }}</b-badge>
                </span>
                <span
                  v-else-if="visitor.result === 'positive-certifiacte-taken'"
                >
                  <b-badge variant="danger"
                    ><span v-html="$t('resultsTestPositiveCertNotTaken')"
                  /></b-badge>
                </span>
                <span v-else-if="visitor.result === 'positive'">
                  <b-badge variant="danger"
                    ><span v-html="$t('resultsTestPositiveCertNotTaken')"
                  /></b-badge>
                </span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  @click="action = 'testSetCodeQR'"
                  class="btn btn-primary my-4 mr-4"
                  :disabled="invalidID"
                  v-if="visitor.id"
                >
                  Osoba je overená, nascanovať QR kód
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.5"
                    height="19"
                    viewBox="0 0 33 40"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M0 0h13l20 20-20 20H0l20-20z"
                    />
                  </svg></button
                ><button
                  @click="action = 'testSetCode'"
                  class="btn btn-primary my-4 mr-4 collapse"
                  v-if="visitor.id"
                >
                  Osoba je overená, nascanovať čiarový kód
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.5"
                    height="19"
                    viewBox="0 0 33 40"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M0 0h13l20 20-20 20H0l20-20z"
                    />
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
                    <path
                      fill="currentColor"
                      d="M0 0h13l20 20-20 20H0l20-20z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </table>
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

    <b-container class="my-4" v-if="action === 'testSetCodeQR'">
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
          <qrcode-stream @decode="onDecodeQR" />
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
import { QrcodeStream } from "vue-qrcode-reader";

import { StreamBarcodeReader } from "vue-barcode-reader";

import { mapActions, mapMutations } from "vuex";
import moment from "moment";

export default {
  components: {
    StreamBarcodeReader,
    QrcodeStream,
  },
  data() {
    return {
      action: "select",
      state: "check",
      visitor: {},
      scanningData: "code",
      code: "",
      lastCode: "",
      testingset: "",
      readerSize: {
        width: 120,
        height: 90,
      },
      detecteds: [],
    };
  },
  computed: {
    invalidID() {
      if (this.visitor.personType === "foreign") {
        if (!this.visitor.passport) return true;
        return false;
      } else {
        if (!this.visitor.rc) return true;
        return false;
      }
    },
    validatePersonalNumber() {
      try {
        const age = 0;

        let x = this.visitor.rc;
        x = x.replace("/", "");
        x = x.replace(" ", "");
        if (x.length == 0) return false;
        if (x.length < 9) return true;
        let year = parseInt(x.substr(0, 2), 10);
        let month = parseInt(x.substr(2, 2), 10);
        const day = parseInt(x.substr(4, 2), 10);
        if (x.length == 9 && year < 54) return false;
        let c = 0;
        if (x.length == 10) c = parseInt(x.substr(9, 1));
        let m = parseInt(x.substr(0, 9)) % 11;
        if (m == 10) m = 0;
        if (m != c) return true;
        year += year < 54 ? 2000 : 1900;
        if (month > 70 && year > 2003) month -= 70;
        else if (month > 50) month -= 50;
        else if (month > 20 && year > 2003) month -= 20;
        const d = new Date();
        if (year + age > d.getFullYear()) return true;
        if (month == 0) return true;
        if (month > 12) return true;
        if (day == 0) return true;
        if (day > 31) return true;
      } catch {
        return true;
      }
      return false;
    },
    needPlaceConfirmation() {
      if (!this.$store.state.user || !this.$store.state.user.me) return false;
      if (!this.$store.state.user.me.place) return true;
      return moment(this.$store.state.user.me.placeLastCheck).isBefore(
        moment().add(-20, "hours")
      );
    },
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
    if (
      !this.$store.state.user.me ||
      !this.$store.state.user.me.placeLastCheck
    ) {
      this.ReloadMe();
    }
  },
  methods: {
    ...mapActions({
      ConnectVisitorToTest: "result/ConnectVisitorToTest",
      GetVisitor: "result/GetVisitor",
      GetVisitorByRC: "result/GetVisitorByRC",
      ReloadMe: "user/ReloadMe",
      SetLocation: "user/SetLocation",
    }),
    ...mapMutations({
      setLastVisitor: "result/setLastVisitor",
    }),
    load() {
      this.visitor = {};
      this.setLastVisitor({});
      this.state = "loading-data";
      this.lastCode = this.code;
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
      this.visitor = {};
      this.setLastVisitor({});
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
          this.setLastVisitor({});
        }
      });
    },
    onDecode(result) {
      if (result) {
        if (this.action == "regCode") {
          this.code = result;
          if (this.lastCode !== this.code) {
            this.load().then(r => {
              if (r) {
                this.action = "verifyPerson";
              }
            });
          }
        } else {
          this.testingset = result;
        }
      }
    },
    onDecodeQR(result) {
      if (result) {
        if (this.action == "regCodeQR") {
          this.code = result;
          if (this.lastCode !== this.code) {
            this.load().then(r => {
              if (r) {
                this.action = "verifyPerson";
              }
            });
          }
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
    newVisitor() {
      this.visitor = {};
      this.setLastVisitor({});
      this.$router.push("/tester/unannouncedVisitor");
    },
    validateRCWithDate(day, month, year, rc, type) {
      // returns true if validation fails
      console.log("day, month, year, rc, type", day, month, year, rc, type);
      if (!day || !month || !year) return true;
      if (!type) {
        if (!rc) type = "foreign";
      }

      if (type === "foreign") return false;
      if (rc === undefined) return false; // this is not rc validation
      let x = rc;
      x = x.replace("/", "");
      x = x.replace(" ", "");
      if (x.length == 0) return false;
      if (x.length < 9) return true;
      const rcyear = parseInt(x.substr(0, 2), 10);
      let rcmonth = parseInt(x.substr(2, 2), 10);
      const rcday = parseInt(x.substr(4, 2), 10);
      year -= 1900;
      if (year > 100) year -= 100;
      if (rcmonth > 50) rcmonth -= 50;
      console.log("day, month, year, rc, type", rcyear, rcmonth, rcday);
      return rcyear !== year || rcmonth !== month || rcday !== day;
    },
    confirmPlace() {
      this.SetLocation({ placeId: this.$store.state.user.me.place }).then(r => {
        if (r) {
          this.ReloadMe().then(r2 => {
            if (r2) {
              this.openSuccess("Úspešne ste potvrdili svoje miesto");
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="scss">
</style>