<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("testerRegistredClient") }}</h1>
        <p>{{ $t("testerHelperAdvice") }}</p>
      </b-container>
    </div>
    <b-container class="my-4" v-if="action === 'select'">
      <b-row v-if="needPlaceConfirmation">
        <b-col>
          <div class="alert alert-danger">
            {{ this.$store.state.user.me.name }},
            {{ $t("testerAtFirstChoosePlace") }}:
            <span v-if="this.$store.state.user.me.placeObj">
              {{ this.$store.state.user.me.placeObj.name }}
              <button
                class="btn btn-primary m-2"
                @click="$router.push('/tester/place')"
              >
                {{ $t("testerChange") }}
              </button>
            </span>
            <span v-else>
              <button
                class="btn btn-primary m-2"
                @click="$router.push('/tester/place')"
              >
                {{ $t("testerChoosePlace") }}
              </button>
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>{{ $t("testerChooseClientReading") }}:</p>
          <button @click="action = 'rc'" class="btn btn-primary my-4 mr-4">
            <span v-if="$store.state.config.RC_IS_INSURANCE">{{
              $t("testerPersonalIdentificationNumberIns")
            }}</span>
            <span v-else>{{ $t("testerPersonalIdentificationNumber") }}</span>
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
          <!--<button @click="action = 'regCode'" class="btn btn-primary my-4 mr-4">
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
          </button>-->
          <button
            @click="action = 'regCodeQR'"
            class="btn btn-primary my-4 mr-4"
          >
            {{ $t("testerRegistrationCodeOrQRCode") }}
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
            @click="action = 'regCodeEmployee'"
            class="btn btn-primary my-4 mr-4"
          >
            {{ $t("testerEmployeeCode") }}
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
          <button @click="newVisitor()" class="btn btn-secondary my-4 mr-4">
            {{ $t("testerPersonWithNoRegistration") }}
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
            {{ $t("testerCancel") }}
          </button>
          <label v-if="$store.state.config.RC_IS_INSURANCE" for="codeRc">{{
            $t("testerPersonalIdentificationNumberIns")
          }}</label>
          <label v-else for="codeRc">{{
            $t("testerPersonalIdentificationNumber")
          }}</label>
          <b-input v-model="code" id="codeRc" />

          <button @click="loadByRC" class="btn btn-primary my-4">
            {{ $t("testerCheckRegistration") }}
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

    <b-container class="my-4" v-if="action === 'regCodeEmployee'">
      <b-row>
        <b-col cols="12">
          <button
            class="btn btn-light btn-sm float-right bg-light my-2"
            @click="reset"
          >
            {{ $t("testerCancel") }}
          </button>
          <label for="employeeNo">{{ $t("testerEmployeeCode") }}</label>
          <b-input v-model="employeeNo" id="employeeNo" />

          <button @click="loadByEmployee" class="btn btn-primary my-4">
            {{ $t("testerLoadRegistration") }}
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
            {{ $t("testerCancel") }}
          </button>
          <label for="code1">{{ $t("testerRegistrationCode") }}</label>
          <b-input v-model="code" id="code1" />
          <div class="m-4">&nbsp;</div>
          <button @click="confirmCode" class="btn btn-primary my-4">
            {{ $t("testerLoadRegistrationCode") }}
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
            {{ $t("testerCancel") }}
          </button>
          <label for="codeQR">{{ $t("testerRegistrationCode") }}</label>
          <b-input v-model="code" id="codeQR" />
          <div class="m-4">&nbsp;</div>
          <button @click="confirmCode" class="btn btn-primary my-4">
            {{ $t("testerLoadRegistrationCode") }}
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
            {{ $t("testerCancel") }}
          </button>
          <h2>{{ $t("testerVerifyPerson") }}:</h2>
          <table class="table">
            <tr>
              <td>{{ $t("testerRegistrationCode") }}:</td>
              <td>
                <span v-if="visitor.id">{{ visitor.id }}</span>

                <span v-else class="badge badge-danger ml-5">{{
                  $t("testerRegistrationCodeInvalid")
                }}</span>
              </td>
            </tr>
            <tr>
              <td>{{ $t("testerName") }}:</td>
              <td>{{ visitor.firstName }} {{ visitor.lastName }}</td>
            </tr>
            <tr v-if="visitor.insurance">
              <td>{{ $t("testerInsurance") }}:</td>
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
              <td v-if="$store.state.config.RC_IS_INSURANCE">
                {{ $t("testerPersonalIdentificationNumberOrPassportIns") }}:
              </td>
              <td v-else>
                {{ $t("testerPersonalIdentificationNumberOrPassport") }}:
              </td>
              <td>
                {{ visitor.rc }}
                <b-badge variant="danger" v-if="validatePersonalNumber">{{
                  $t("testerInvalidPesonalNumberNotification")
                }}</b-badge>

                <b-badge variant="danger" v-if="invalidID">{{
                  $t("testerInvalidIDNotification")
                }}</b-badge>
              </td>
            </tr>
            <tr v-if="visitor.personType === 'foreign'">
              <td>{{ $t("testerPassport") }}:</td>
              <td>
                {{ visitor.passport }}
                <b-badge variant="danger" v-if="invalidID">{{
                  $t("testerInvalidIDNotification")
                }}</b-badge>
              </td>
            </tr>
            <tr>
              <td>{{ $t("testerAddress") }}:</td>
              <td>
                {{ visitor.address }}
                <b-badge variant="danger" v-if="!visitor.address">{{
                  $t("testerInvalidAddressNotification")
                }}</b-badge>
              </td>
            </tr>
            <tr>
              <td>{{ $t("testerEmail") }}:</td>
              <td>{{ visitor.email }}</td>
            </tr>
            <tr>
              <td>{{ $t("testerPhoneNumber") }}:</td>
              <td>{{ visitor.phone }}</td>
            </tr>
            <tr>
              <td>{{ $t("testerBirthDate") }}:</td>
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
                  >{{ $t("testerInvalidBirthDateNotification") }}</b-badge
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
                  >{{ $t("testerInvalidBirthDateNotification") }}</b-badge
                >
              </td>
            </tr>
            <tr
              v-if="
                visitor.result === 'test-not-taken' ||
                visitor.result === 'test-not-processed' ||
                visitor.result === 'positive-certiciate-taken' ||
                visitor.result === 'positive-certifiacte-taken' ||
                visitor.result === 'positive'
              "
            >
              <td>{{ $t("testerState") }}:</td>
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
                  v-else-if="
                    visitor.result === 'positive-certifiacte-taken' ||
                    visitor.result === 'positive-certiciate-taken'
                  "
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
                  {{ $t("testerSetCodeQR") }}
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
                  {{ $t("testerSetCode") }}

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
                  {{ $t("testerEditPersonalData") }}
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
            {{ $t("testerCancel") }}
          </button>
          <label for="testingset1">{{ $t("testerScanTestCode") }}:</label>
          <b-input v-model="testingset" id="testingset1" />
          <button @click="save" class="btn btn-primary my-4">
            {{ $t("testerSave") }}
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
            {{ $t("testerCancel") }}
          </button>
          <label for="testingset1" v-html="$t('testerScanTestCodeAndSet')" />
          <b-input v-model="testingset" id="testingset1" />
          <button @click="save" class="btn btn-primary my-4">
            {{ $t("testerSet") }}
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
          <b-form-group :label="$t('testerScanningData')">
            <b-form-radio
              v-model="scanningData"
              name="person-type"
              value="code"
              >{{ $t("testerRegistationCode") }}</b-form-radio
            >
            <b-form-radio
              v-model="scanningData"
              name="person-type"
              value="testingset"
              >{{ $t("testerTestTube") }}</b-form-radio
            >
          </b-form-group>
        </b-col>
        <b-col cols="8">
          <b-row>
            <b-col cols="12">
              <label for="code">{{ $t("testerRegistationCode") }}</label>
              <b-input v-model="code" ref="code" id="code" />
            </b-col>
            <b-col
              cols="12"
              v-if="state === 'check' || state === 'visitor-error'"
            >
              <button @click="load" class="btn btn-primary my-4 mr-4">
                {{ $t("testerCheckData") }}
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
              <div>
                <B>{{ $t("testerLoadingData") }}</B> <b-spinner />
              </div> </b-col
            ><b-col cols="12" v-if="state === 'visitor-loaded'">
              <div>
                {{ $t("testerName") }}: {{ visitor.firstName }}
                {{ visitor.lastName }}
              </div>
              <div>{{ $t("testerInsurance") }}: {{ visitor.insurance }}</div>
            </b-col>
            <b-col cols="12">
              <label for="testingset">{{ $t("testerTestTube") }}</label>
              <b-input v-model="testingset" ref="testingset" id="testingset" />
            </b-col>
            <b-col cols="12" v-if="state === 'visitor-loaded'">
              <button @click="save" class="btn btn-primary my-4">
                {{ $t("testerSave") }}
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
      employeeNo: "",
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
      LoadVisitorByEmployeeNumber: "result/LoadVisitorByEmployeeNumber",
      ReloadMe: "user/ReloadMe",
      SetLocation: "user/SetLocation",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
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
    loadByEmployee() {
      this.visitor = {};
      this.setLastVisitor({});
      this.state = "loading-data";
      this.LoadVisitorByEmployeeNumber({
        employeeNumber: this.employeeNo,
      }).then(r => {
        if (r) {
          this.employeeNo = "";
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
      let rcyear = parseInt(x.substr(0, 2), 10);
      let rcmonth = parseInt(x.substr(2, 2), 10);
      const rcday = parseInt(x.substr(4, 2), 10);
      year -= 1900;
      if (rcyear >= 100) rcyear -= 100;
      if (year >= 100) year -= 100;
      if (rcmonth > 50) rcmonth -= 50;
      return rcyear !== year || rcmonth !== month || rcday !== day;
    },
    confirmPlace() {
      this.SetLocation({ placeId: this.$store.state.user.me.place }).then(r => {
        if (r) {
          this.ReloadMe().then(r2 => {
            if (r2) {
              this.openSuccess(this.$t("testerSuccessfulConfirmation"));
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="scss"></style>
