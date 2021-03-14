<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <b-row>
          <b-col>
            <h1>{{ $t("registrationTitle") }}</h1>
            <p>
              {{ $t("registrationHelp1") }}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="app-pane-blue py-4" v-if="$store.state.place.currentPlace">
      <b-container>
        <b-row>
          <b-col>
            <h2>
              {{
                $t("registrationYourSelection", {
                  place: $store.state.place.currentPlace.name,
                  day: $store.state.slot.slotDCurrent.description,
                  time: $store.state.slot.slotMCurrent.description,
                })
              }}
            </h2>

            <div class="m-0 btn btn-light" @click="SaveAndGoBack">
              {{ $t("change") }}
            </div>
          </b-col>

          <b-col
            v-if="
              $store.state.slot.product && $store.state.slot.product.product
            "
          >
            <b-card
              text-variant="dark"
              :title="$store.state.slot.product.product.name"
              class="mb-3"
            >
              {{ $store.state.slot.product.product.description }}

              <div>
                <div v-if="$store.state.slot.product.customPrice">
                  <div v-if="$store.state.slot.product.price > 0">
                    {{ $t("selectDayPrice") }}:
                    {{ $store.state.slot.product.price }}
                    {{ $store.state.slot.product.priceCurrency }}
                  </div>
                  <div v-else>
                    {{ $t("selectDayPrice") }}:
                    {{ $t("selectDayPaidByInsurance") }}
                  </div>
                </div>
                <div v-else>
                  <div
                    v-if="$store.state.slot.product.product.defaultPrice > 0"
                  >
                    {{ $t("selectDayPrice") }}:
                    {{ $store.state.slot.product.product.defaultPrice }}
                    {{ $store.state.slot.product.product.defaultPriceCurrency }}
                  </div>
                  <div v-else>
                    {{ $t("selectDayPrice") }}:
                    {{ $t("selectDayPaidByInsurance") }}
                  </div>
                </div>
                <div v-if="$store.state.slot.product.insuranceOnly">
                  {{ $t("selectDayOnlyForInsured") }}
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <ValidationObserver>
      <b-container class="my-4" v-if="showEmployerForm">
        <b-row>
          <b-col cols="12" md="6">
            <validation-provider
              ref="vpEmployeeNumber"
              name="Osobné číslo zamestnanca"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="employeeNumber-group-1"
                :label="$t('registrationFormEmployeeID')"
                label-for="EmployeeNumber"
              >
                <b-form-input
                  id="employeeNumber"
                  name="employeeNumber"
                  v-model="employeeNumber"
                  :state="getValidationState(validationContext)"
                  aria-describedby="employeeNumber-feedback"
                />

                <b-form-invalid-feedback id="firstName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider> </b-col
          ><b-col cols="12" md="6">
            <validation-provider
              ref="vpPass"
              :name="
                $store.state.config.RC_IS_INSURANCE
                  ? $t('registrationFormEmployeePassIns')
                  : $t('registrationFormEmployeePass')
              "
              :rules="{ required: true, min: 4 }"
              v-slot="validationContext"
            >
              <b-form-group
                id="employeePass-group-1"
                :label="
                  $store.state.config.RC_IS_INSURANCE
                    ? $t('registrationFormEmployeePassIns')
                    : $t('registrationFormEmployeePass')
                "
                label-for="employeePass"
              >
                <b-form-input
                  id="employeePass"
                  name="employeePass"
                  v-model="employeePass"
                  type="password"
                  :state="getValidationState(validationContext)"
                  aria-describedby="employeePass-feedback"
                />

                <b-form-invalid-feedback id="firstName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>

          <b-col cols="12">
            <b-form-checkbox v-model="gdpr" class="my-2">
              <div
                v-html="
                  $t('registrationFormGDPRStatement', {
                    company: $store.state.config.GDRP_SPROSTREDKOVATEL,
                  })
                "
              />
            </b-form-checkbox>
          </b-col>
          <b-col cols="12">
            <button
              class="btn btn-primary"
              @click="registerForTestWithCompany"
              :disabled="!gdpr"
            >
              {{ $t("registrationFormRegisterOnDate") }}
              <b-spinner small class="ml-1" v-if="processing" />
            </button>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="my-4" v-else
        ><b-row v-if="$store.state.place.currentPlace && limitReached">
          <b-col>
            <div class="alert alert-danger my-4">
              {{ $t("registrationLimitReached") }}
            </div>
          </b-col>
        </b-row>
        <b-row v-if="!$store.state.config.INSURED_ONLY">
          <b-col cols="12" md="4">
            <b-form-group :label="$t('registrationFormTypeLabel')">
              <b-form-radio
                v-model="personType"
                name="person-type"
                value="idcard"
                ><span v-if="$store.state.config.RC_IS_INSURANCE">
                  {{ $t("registrationFormTypePersonalCardIns") }}
                </span>
                <span v-else>
                  {{ $t("registrationFormTypePersonalCard") }}
                </span></b-form-radio
              >
              <b-form-radio
                v-model="personType"
                name="person-type"
                value="child"
                >{{ $t("registrationFormTypePersonalChild") }}</b-form-radio
              >
              <b-form-radio
                v-model="personType"
                name="person-type"
                value="foreign"
                >{{ $t("registrationFormTypePersonalForeigner") }}</b-form-radio
              >
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6" lg="3">
            <validation-provider
              ref="vpFirstName"
              :name="$t('registrationFormFirstName')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="firstName-group-1"
                :label="$t('registrationFormFirstName')"
                label-for="firstName"
              >
                <b-form-input
                  id="firstName"
                  name="firstName"
                  v-model="firstName"
                  :state="getValidationState(validationContext)"
                  aria-describedby="firstName-feedback"
                  data-vv-as="Name"
                />

                <b-form-invalid-feedback id="firstName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="6" lg="3">
            <validation-provider
              ref="vpLastName"
              :name="$t('registrationFormLastName')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="lastName-group-1"
                :label="$t('registrationFormLastName')"
                label-for="lastName"
              >
                <b-form-input
                  id="lastName"
                  name="lastName"
                  v-model="lastName"
                  :state="getValidationState(validationContext)"
                  aria-describedby="lastName-feedback"
                  data-vv-as="Priezvisko"
                />

                <b-form-invalid-feedback id="lastName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            cols="12"
            lg="2"
            md="4"
            v-if="personType === 'idcard' || personType === 'child'"
          >
            <validation-provider
              ref="vpPersonalNumber"
              :name="
                personType === 'idcard'
                  ? $store.state.config.RC_IS_INSURANCE
                    ? $t('registrationFormPersonalNumberIns')
                    : $t('registrationFormPersonalNumber')
                  : $store.state.config.RC_IS_INSURANCE
                  ? $t('registrationFormPersonalNumberChildIns')
                  : $t('registrationFormPersonalNumberChild')
              "
              :rules="{ required: true, rc: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="rc-group-1"
                :label="
                  personType === 'idcard'
                    ? $store.state.config.RC_IS_INSURANCE
                      ? $t('registrationFormPersonalNumberIns')
                      : $t('registrationFormPersonalNumber')
                    : $store.state.config.RC_IS_INSURANCE
                    ? $t('registrationFormPersonalNumberChildIns')
                    : $t('registrationFormPersonalNumberChild')
                "
                label-for="rc"
              >
                <b-form-input
                  id="rc"
                  name="rc"
                  v-model="rc"
                  :state="getValidationState(validationContext)"
                  aria-describedby="rc-feedback"
                  data-vv-as="Rodné číslo"
                />

                <b-form-invalid-feedback id="rc-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="4" lg="2" v-else>
            <validation-provider
              ref="vpPassport"
              :name="$t('registrationFormPassport')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="passport-group-1"
                :label="$t('registrationFormPassport')"
                label-for="passport"
              >
                <b-form-input
                  id="passport"
                  name="passport"
                  v-model="passport"
                  :state="getValidationState(validationContext)"
                  aria-describedby="passport-feedback"
                  data-vv-as="Číslo cestovného dokladu"
                />

                <b-form-invalid-feedback id="passport-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" lg="1" md="2">
            <validation-provider
              ref="vpBirthDay"
              :name="$t('registrationFormDay')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="birthDayDay-group-1"
                :label="$t('registrationFormBirthDayDay')"
                label-for="birthDayDay"
              >
                <b-form-input
                  id="birthDayDay"
                  name="birthDayDay"
                  v-model="birthday.day"
                  type="number"
                  min="1"
                  max="31"
                  :state="getValidationState(validationContext)"
                  aria-describedby="birthDayDay-feedback"
                  :data-vv-as="$t('registrationFormBirthDayDay')"
                />

                <b-form-invalid-feedback id="lastName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider> </b-col
          ><b-col cols="12" lg="1" md="2">
            <validation-provider
              ref="vpBirthMonth"
              :name="$t('registrationFormBirthDayMonth')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="birthDayMonth-group-1"
                :label="$t('registrationFormBirthDayMonth')"
                label-for="birthDayMonth"
              >
                <b-form-input
                  id="birthDayMonth"
                  name="birthDayMonth"
                  v-model="birthday.month"
                  type="number"
                  min="1"
                  max="12"
                  :state="getValidationState(validationContext)"
                  aria-describedby="birthDayMonth-feedback"
                />

                <b-form-invalid-feedback id="lastName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>

          <b-col cols="12" md="4" lg="2">
            <validation-provider
              ref="vpBirthYear"
              :name="$t('registrationFormBirthDayYear')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="birthDayYear-group-1"
                :label="$t('registrationFormBirthDayYear')"
                label-for="birthDayYearh"
              >
                <b-form-input
                  id="birthDayYear"
                  name="birthDayYear"
                  v-model="birthday.year"
                  type="number"
                  min="1900"
                  max="2021"
                  :state="getValidationState(validationContext)"
                  aria-describedby="birthDayYear-feedback"
                />

                <b-form-invalid-feedback id="lastName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <validation-provider
              ref="vpStreet"
              :name="$t('registrationFormAddressStreet')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="street-group-1"
                :label="$t('registrationFormAddressStreet')"
                label-for="street"
              >
                <b-form-input
                  id="street"
                  name="street"
                  v-model="address.street"
                  :state="getValidationState(validationContext)"
                  aria-describedby="street-feedback"
                />

                <b-form-invalid-feedback id="address-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="1">
            <validation-provider
              ref="vpStreetNo"
              :name="$t('registrationFormAddressStreetNo')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="streetNo-group-1"
                :label="$t('registrationFormAddressStreetNo')"
                label-for="streetNo"
              >
                <b-form-input
                  id="streetNo"
                  name="streetNo"
                  v-model="address.streetNo"
                  :state="getValidationState(validationContext)"
                  aria-describedby="streetNo-feedback"
                />

                <b-form-invalid-feedback id="streetNo-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="2">
            <validation-provider
              ref="vpZIP"
              :name="$t('registrationFormAddressZIP')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="zip-group-1"
                :label="$t('registrationFormAddressZIP')"
                label-for="zip"
              >
                <b-form-input
                  id="zip"
                  name="zip"
                  v-model="address.zip"
                  :state="getValidationState(validationContext)"
                  aria-describedby="zip-feedback"
                />

                <b-form-invalid-feedback id="zip-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="3">
            <validation-provider
              ref="vpCity"
              :name="$t('registrationFormAddressCity')"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="city-group-1"
                :label="$t('registrationFormAddressCity')"
                label-for="city"
              >
                <b-form-input
                  id="city"
                  name="city"
                  v-model="address.city"
                  :state="getValidationState(validationContext)"
                  aria-describedby="city-feedback"
                />

                <b-form-invalid-feedback id="city-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" :md="insuranceColumns">
            <validation-provider
              ref="vpMobile"
              :name="$t('registrationFormMobile')"
              :rules="{ required: true, phone: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="phone-group-1"
                :label="$t('registrationFormMobile')"
                label-for="phone"
              >
                <b-form-input
                  id="phone"
                  name="phone"
                  v-model="phone"
                  :state="getValidationState(validationContext)"
                  aria-describedby="phone-feedback"
                />

                <b-form-invalid-feedback id="phone-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" :md="insuranceColumns">
            <validation-provider
              ref="vpEmail"
              :name="$t('registrationFormEmail')"
              rules="email"
              v-slot="validationContext"
            >
              <b-form-group
                id="email-group-1"
                :label="$t('registrationFormEmail')"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  name="email"
                  v-model="email"
                  :state="getValidationState(validationContext)"
                  aria-describedby="email-feedback"
                />

                <b-form-invalid-feedback id="email-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" :md="insuranceColumns" v-if="showInsurance">
            <label for="insurance">{{ $t("registrationFormInsurance") }}</label>
            <b-form-select
              :options="insuranceOptions"
              v-model="insurance"
              id="insurance"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="my-2">
            <p>
              {{ $t("registrationBottomHelp1") }}
            </p>
            <p>
              {{ $t("registrationBottomHelp2") }}
            </p>
            <p
              v-if="
                $store.state.slot.product &&
                $store.state.slot.product.product &&
                $store.state.slot.product.product.schoolOnly
              "
            >
              <b-form-checkbox v-model="school" id="school">
                {{ $t("registrationSchoolRequiredText") }}
              </b-form-checkbox>
            </p>
            <p
              v-if="
                $store.state.slot.product &&
                $store.state.slot.product.product &&
                $store.state.slot.product.product.employeesRegistration
              "
            >
              <b-form-checkbox v-model="employee">
                {{ $t("registrationFormIAmEmployee") }}
                {{ $store.state.config.COMPANY_NAME }}
              </b-form-checkbox>
              <validation-provider
                v-if="employee"
                ref="vpEmployeeId"
                name="Osobné číslo zamestnanca"
                rules="required"
                v-slot="validationContext"
              >
                <b-form-group
                  id="employeeId-group-1"
                  :label="$t('registrationFormEmployeeID')"
                  label-for="employeeId"
                >
                  <b-form-input
                    id="employeeId"
                    name="employeeId"
                    v-model="employeeId"
                    :state="getValidationState(validationContext)"
                    aria-describedby="employeeId-feedback"
                  />

                  <b-form-invalid-feedback id="employeeId-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </p>
            <p>
              <b-form-checkbox v-model="gdpr" id="gdpr">
                <div v-html="$t('registrationFormGDPR')" />
              </b-form-checkbox>
            </p>

            <b-button
              v-if="
                $store.state.slot.product && $store.state.slot.product.product
              "
              :disabled="
                !gdpr ||
                processing ||
                ($store.state.slot.product.product.schoolOnly && !school) ||
                ($store.state.slot.product.product.employeesRegistration &&
                  (!employee || !employeeId))
              "
              @click="registerForTest"
              variant="primary"
            >
              {{ $t("registrationFormButton") }}
              <b-spinner small class="ml-1" v-if="processing" />
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </ValidationObserver>
  </div>
</template>

<script>
import { load } from "recaptcha-v3";

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate/dist/vee-validate.full";
import sk from "vee-validate/dist/locale/sk.json";
import en from "vee-validate/dist/locale/en.json";

localize("sk", sk);

function testRC(x) {
  //https://www.zizka.ch/pages/programming/ruzne/rodne-cislo-identifikacni-cislo-rc-ico-kontrola-validace.html
  const age = 0;
  try {
    if (x.length == 0) return false;
    if (x.length < 9) throw 1;
    let year = parseInt(x.substr(0, 2), 10);
    let month = parseInt(x.substr(2, 2), 10);
    const day = parseInt(x.substr(4, 2), 10);
    if (x.length == 9 && year < 54) return true;
    let c = 0;
    if (x.length == 10) c = parseInt(x.substr(9, 1));
    let m = parseInt(x.substr(0, 9)) % 11;
    if (m == 10) m = 0;
    if (m != c) throw 1;
    year += year < 54 ? 2000 : 1900;
    if (month > 70 && year > 2003) month -= 70;
    else if (month > 50) month -= 50;
    else if (month > 20 && year > 2003) month -= 20;
    const d = new Date();
    if (year + age > d.getFullYear()) throw 1;
    if (month == 0) throw 1;
    if (month > 12) throw 1;
    if (day == 0) throw 1;
    if (day > 31) throw 1;
  } catch {
    return false;
  }
  return true;
}
extend("rc", {
  validate: value => {
    return testRC(value);
  },
});
extend("phone", {
  validate: value => {
    let valTrim = value.replace(/\s+|\s+/g, "");
    if (!valTrim) return false;
    if (valTrim.substr(0, 1) !== "+") return false;
    valTrim = valTrim.substr(1);

    if (valTrim.substr(0, 3) == 421) {
      // slovakia
      const ret = valTrim.match(/^\d{12}$/);
      return ret;
    }
    if (valTrim.substr(0, 3) == 420) {
      // czech
      const ret = valTrim.match(/^\d{12}$/);
      return ret;
    }
    if (valTrim.substr(0, 2) == 43) {
      // austria
      const ret = valTrim.match(/^\d{11}$/);
      return ret;
    }
    const ret = valTrim.match(/^\d{11}$/);
    return ret;
  },
});

import { mapMutations, mapActions } from "vuex";
import moment from "moment";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    productId() {
      if (this.$route.params.productId) {
        return this.$route.params.productId;
      }
      return this.$store.state.slot.product.product.id;
    },
    showInsurance() {
      if (!this.$store.state.slot.product) return false;
      if (!this.$store.state.slot.product.product) return false;
      return this.$store.state.slot.product.product.collectInsurance === true;
    },
    showEmployerForm() {
      if (!this.$store.state.slot.product) return false;
      if (!this.$store.state.slot.product.product) return false;
      return this.$store.state.slot.product.product.employeesOnly === true;
    },
    insuranceColumns() {
      if (this.showInsurance) {
        return 4;
      }
      return 6;
    },
    locale() {
      return this.$i18n.locale;
    },
    limitReached() {
      if (
        this.$store.state.slot.slotMCurrent.registrations >=
        this.$store.state.place.currentPlace.limitPer5MinSlot
      ) {
        return true;
      }
      if (!this.$store.state.slot.slotHCurrent) return true;
      if (!this.$store.state.slot.slotHCurrent.description) return true;
      if (
        this.$store.state.slot.slotHCurrent.registrations >=
        this.$store.state.place.currentPlace.limitPer1HourSlot
      ) {
        return true;
      }
      for (const index in this.$store.state.place.currentPlace
        .otherLimitations) {
        const limitation = this.$store.state.place.currentPlace
          .otherLimitations[index];
        const now = new Date(this.$store.state.slot.slotDCurrent.time);
        const hour = this.$store.state.slot.slotHCurrent.description.substr(
          0,
          2
        );
        now.setUTCHours(hour - 1);
        if (
          moment(limitation.from).isSameOrBefore(now) &&
          moment(limitation.until).isAfter(now)
        ) {
          if (
            limitation.hourLimit <=
            this.$store.state.slot.slotHCurrent.registrations
          )
            return true;
        }
      }

      return false;
    },
  },
  watch: {
    locale() {
      this.setLanguage();
    },
    rc() {
      if (this.rc && this.rc.length >= 9) {
        if (!this.birthday.day) {
          this.birthday.day = parseInt(this.rc.substr(4, 2));
        }
        if (!this.birthday.month) {
          let month = parseInt(this.rc.substr(2, 2));
          if (month > 50) month -= 50;
          this.birthday.month = month;
        }
        if (!this.birthday.year) {
          let year = parseInt(this.rc.substr(0, 2));
          if (year > 21) {
            year += 1900;
          } else [(year += 2000)];
          this.birthday.year = year;
        }
        this.$forceUpdate();
      }
    },
    gdpr() {
      if (this.gdpr) {
        this.validateForm();
      }
    },
  },
  data() {
    return {
      employee: false,
      employeeId: "",
      processing: false,
      school: false,
      personType: "idcard",
      passport: "",
      rc: "",
      firstName: "",
      lastName: "",
      address: {
        street: "",
        streetNo: "",
        zip: "",
        city: "",
      },
      birthday: { day: "", month: "", year: "" },

      email: "@",
      phone: "+421",
      insurance: "25",
      gdpr: false,
      insuranceOptions: [
        {
          value: "24",
          text: "Dôvera",
        },
        {
          value: "25",
          text: "VšZP",
        },
        {
          value: "27",
          text: "Union",
        },
        {
          value: "98",
          text: this.$t("registrationFormInsuranceEU"),
        },
        {
          value: "99",
          text: this.$t("registrationFormInsuranceForeigner"),
        },
      ],
      employeeNumber: "",
      employeePass: "",
    };
  },
  mounted() {
    if (
      !this.$store.state.slot ||
      !this.$store.state.slot.product ||
      !this.$store.state.slot.product.product ||
      !this.$store.state.slot.product.product.name
    ) {
      if (this.$route.params.productId) {
        this.ListPlaceProductByPlace({
          placeId: this.$route.params.placeId,
        })
          .then(r => {
            if (r) {
              const selected = r.find(
                p => p.productId === this.$route.params.productId
              );
              if (selected) {
                this.setProduct(selected);
              } else {
                this.$router.push("/place/" + this.$route.params.placeId);
              }
            } else {
              this.$router.push("/place/" + this.$route.params.placeId);
            }
          })
          .catch(r => {
            this.$router.push("/place/" + this.$route.params.placeId);
          });
      }
    }

    this.GetPlace({ id: this.$route.params.placeId })
      .then(r => {
        return r;
      })
      .then(r => {
        if (r) {
          this.setCurrentPlace(r);
        }
        return r;
      })
      // eslint-disable-next-line
      .then(r => {
        this.GetSlotD({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
        }).then(r2 => {
          if (r2) {
            this.setSlotDCurrent(r2);
          }
        });
        return r;
      })

      // eslint-disable-next-line
      .then(r => {
        return this.GetSlotH({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
          hourSlotId: this.$route.params.hourId,
        }).then(r2 => {
          return this.setSlotHCurrent(r2);
        });
      })
      // eslint-disable-next-line
      .then(r => {
        return this.GetSlotM({
          placeId: this.$route.params.placeId,
          hourSlotId: this.$route.params.hourId,
          minuteSlotId: this.$route.params.minuteId,
        }).then(r2 => {
          return this.setSlotMCurrent(r2);
        });
      });

    if (this.$store.state.slot.registrationAttempt) {
      this.personType = this.$store.state.slot.registrationAttempt.personType;
      this.passport = this.$store.state.slot.registrationAttempt.passport;
      this.rc = this.$store.state.slot.registrationAttempt.rc;
      this.firstName = this.$store.state.slot.registrationAttempt.firstName;
      this.lastName = this.$store.state.slot.registrationAttempt.lastName;
      this.address.street = this.$store.state.slot.registrationAttempt.street;
      this.address.streetNo = this.$store.state.slot.registrationAttempt.streetNo;
      this.address.zip = this.$store.state.slot.registrationAttempt.zip;
      this.address.city = this.$store.state.slot.registrationAttempt.city;
      this.birthday = {};
      this.birthday.day = this.$store.state.slot.registrationAttempt.birthDayDay;
      this.birthday.month = this.$store.state.slot.registrationAttempt.birthDayMonth;
      this.birthday.year = this.$store.state.slot.registrationAttempt.birthDayYear;
      this.email = this.$store.state.slot.registrationAttempt.email;
      this.phone = this.$store.state.slot.registrationAttempt.phone;
      this.insurance = this.$store.state.slot.registrationAttempt.insurance;
      this.employeeId = this.$store.state.slot.registrationAttempt.employeeId;
    }

    if (!this.personType) this.personType = "idcard";
    if (!this.insurance) this.insurance = "25";
    if (!this.phone) this.phone = "+421";
    if (!this.email) this.email = "@";

    this.setLanguage();
  },
  methods: {
    ...mapMutations({
      setRegistrationAttempt: "slot/setRegistrationAttempt",
    }),
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
      setSlotDCurrent: "slot/setSlotDCurrent",
      setSlotHCurrent: "slot/setSlotHCurrent",
      setSlotMCurrent: "slot/setSlotMCurrent",
      setProduct: "slot/setProduct",
    }),
    ...mapActions({
      GetPlace: "place/GetPlace",
    }),
    ...mapActions({
      GetSlotD: "slot/GetSlotD",
      GetSlotH: "slot/GetSlotH",
      GetSlotM: "slot/GetSlotM",
      ReloadSlotsM: "slot/ReloadSlotsM",
      Register: "slot/Register",
      RegisterWithCompanyRegistration: "slot/RegisterWithCompanyRegistration",
      ListPlaceProductByPlace: "placeProvider/ListPlaceProductByPlace",
    }),
    SaveAndGoBack() {
      this.saveData();
      this.$router.push(`/place/${this.$route.params.placeId}/`);
      //      `${$route.params.dayId}/${$route.params.hourId}`
    },
    saveData() {
      const toSend = {
        personType: this.personType,
        passport: this.passport,
        rc: this.rc,
        firstName: this.firstName,
        lastName: this.lastName,
        street: this.address.street,
        streetNo: this.address.streetNo,
        zip: this.address.zip,
        city: this.address.city,
        email: this.email,
        phone: this.phone,
        insurance: this.insurance,
        chosenSlot: this.$route.params.minuteId,
        chosenPlaceId: this.$route.params.placeId,
        product: this.productId,
        employeeId: this.employeeId,
        address:
          this.address.street +
          " " +
          this.address.streetNo +
          ", " +
          this.address.zip +
          " " +
          this.address.city,
      };
      if (this.birthday) {
        toSend.birthDayDay = this.birthday.day;
        toSend.birthDayMonth = this.birthday.month;
        toSend.birthDayYear = this.birthday.year;
      }
      this.setRegistrationAttempt(toSend);
    },
    registerForTest() {
      const that = this;
      this.processing = true;

      load(this.$store.state.config.SITE_KEY).then(recaptcha => {
        recaptcha.execute("submit").then(token => {
          if (token) {
            if (this.personType == "foreign") {
              this.rc = "";
            } else {
              this.passport = "";
            }
            let toSend = {
              personType: this.personType,
              passport: this.passport,
              rc: this.rc,
              firstName: this.firstName,
              lastName: this.lastName,
              street: this.address.street,
              streetNo: this.address.streetNo,
              zip: this.address.zip,
              city: this.address.city,
              email: this.email,
              phone: this.phone,
              insurance: this.insurance,
              chosenSlot: this.$route.params.minuteId,
              chosenPlaceId: this.$route.params.placeId,
              product: this.productId,
              employeeId: this.employeeId,
              birthDayDay: this.birthday.day,
              birthDayMonth: this.birthday.month,
              birthDayYear: this.birthday.year,
              address:
                this.address.street +
                " " +
                this.address.streetNo +
                ", " +
                this.address.zip +
                " " +
                this.address.city,
              token,
            };
            this.setRegistrationAttempt(toSend);

            this.Register(toSend)
              // eslint-disable-next-line
              .then(r => {
                this.processing = false;
                if (r) {
                  toSend = {
                    personType: this.personType,
                    passport: "",
                    rc: "",
                    firstName: "",
                    lastName: "",
                    street: this.address.street,
                    streetNo: this.address.streetNo,
                    zip: this.address.zip,
                    city: this.address.city,
                    email: this.email,
                    phone: this.phone,
                    insurance: this.insurance,
                    chosenSlot: this.$route.params.minuteId,
                    chosenPlaceId: this.$route.params.placeId,
                    product: this.productId,
                    employeeId: this.employeeId,
                    birthDayDay: "",
                    birthDayMonth: "",
                    birthDayYear: "",
                    address:
                      this.address.street +
                      " " +
                      this.address.streetNo +
                      ", " +
                      this.address.zip +
                      " " +
                      this.address.city,
                    token,
                  };

                  this.setRegistrationAttempt(toSend);

                  // redirect only on successfull registration

                  this.firstName = "";
                  this.lastName = "";
                  this.rc = "";
                  this.passport = "";
                  this.birthday.day = "";
                  this.birthday.month = "";
                  this.birthday.year = "";

                  that.$router.push(
                    `/place/${this.$route.params.placeId}/${this.$route.params.dayId}/${this.$route.params.hourId}/${this.$route.params.minuteId}/${this.productId}/done`
                  );
                }
              });
          } else {
            this.processing = false;
          }
        });
      });
    },
    registerForTestWithCompany() {
      const that = this;
      this.processing = true;

      load(this.$store.state.config.SITE_KEY).then(recaptcha => {
        recaptcha.execute("submit").then(token => {
          if (token) {
            let toSend = {
              employeeNumber: that.employeeNumber,
              employeePass: that.employeePass,
              chosenSlot: this.$route.params.minuteId,
              chosenPlaceId: this.$route.params.placeId,
              product: this.productId,
              token,
            };

            this.RegisterWithCompanyRegistration(toSend)
              // eslint-disable-next-line
              .then(r => {
                this.processing = false;
                if (r) {
                  that.$router.push(
                    `/place/${this.$route.params.placeId}/${this.$route.params.dayId}/${this.$route.params.hourId}/${this.$route.params.minuteId}/${this.productId}/done`
                  );
                }
              });
          } else {
            this.processing = false;
          }
        });
      });
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    setLanguage() {
      if (this.$i18n.locale == "en" || this.$i18n.locale == "en-US") {
        localize("en", en);
      } else {
        localize("sk", sk);
      }
    },
    validateForm() {
      this.$refs["vpLastName"]
        .validate()
        .then(r => {
          return this.$refs["vpFirstName"].validate();
        })
        .then(r => {
          return this.$refs["vpBirthDay"].validate();
        })
        .then(r => {
          return this.$refs["vpBirthMonth"].validate();
        })
        .then(r => {
          return this.$refs["vpBirthYear"].validate();
        })
        .then(r => {
          return this.$refs["vpStreet"].validate();
        })
        .then(r => {
          return this.$refs["vpStreetNo"].validate();
        })
        .then(r => {
          return this.$refs["vpZIP"].validate();
        })
        .then(r => {
          return this.$refs["vpCity"].validate();
        })
        .then(r => {
          return this.$refs["vpMobile"].validate();
        })
        .then(r => {
          return this.$refs["vpEmail"].validate();
        })
        .then(r => {
          if (this.personType === "foreign") {
            return this.$refs["vpPassport"].validate();
          } else {
            return this.$refs["vpPersonalNumber"].validate();
          }
        });
    },
  },
};
</script>
<style lang="scss"></style>
