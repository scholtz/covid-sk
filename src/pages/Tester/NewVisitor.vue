<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("registrationFormNewVisitorRegistration") }}</h1>
      </b-container>
    </div>

    <ValidationObserver ref="form">
      <b-container class="my-4">
        <b-form @submit.prevent="registerForTest">
          <b-row v-if="!$store.state.config.INSURED_ONLY">
            <b-col cols="12" md="4">
              <b-form-group
                :label="$t('registrationFormNewVisitorIdentification')"
              >
                <b-form-radio
                  v-model="personType"
                  name="person-type"
                  value="idcard"
                  >{{
                    $t("registrationFormAdultWithIdentityCard")
                  }}</b-form-radio
                >
                <b-form-radio
                  v-model="personType"
                  name="person-type"
                  value="child"
                  >{{ $t("registrationFormChildRegistration") }}</b-form-radio
                >
                <b-form-radio
                  v-model="personType"
                  name="person-type"
                  value="foreign"
                  >{{ $t("registrationFormForeigner") }}</b-form-radio
                >
              </b-form-group>
            </b-col>
            <b-col cols="12" offset-md="4" md="4">
              <validation-provider
                name="Product"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="product-group-1"
                  :label="$t('registrationFormProduct')"
                  label-for="product"
                >
                  <b-form-select
                    id="product"
                    name="product"
                    :options="productOptions"
                    v-model="selectedProduct"
                    :state="getValidationState(validationContext)"
                    aria-describedby="product-feedback"
                    data-vv-as="Product"
                  />
                  <b-form-invalid-feedback id="product-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="4" lg="2">
              <validation-provider
                name="Meno"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="firstName-group-1"
                  :label="$t('registrationFormFirstname')"
                  label-for="firstName"
                >
                  <b-form-input
                    id="firstName"
                    ref="firstName"
                    name="firstName"
                    v-model="firstName"
                    :state="getValidationState(validationContext)"
                    aria-describedby="firstName-feedback"
                    data-vv-as="Name"
                    required
                    autofocus
                  />

                  <b-form-invalid-feedback id="firstName-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="4" lg="3">
              <validation-provider
                name="Priezvisko"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="lastName-group-1"
                  :label="$t('registrationFormLastname')"
                  label-for="lastName"
                >
                  <b-form-input
                    id="lastName"
                    name="lastName"
                    v-model="lastName"
                    :state="getValidationState(validationContext)"
                    aria-describedby="lastName-feedback"
                    data-vv-as="Priezvisko"
                    required
                  />

                  <b-form-invalid-feedback id="lastName-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col
              cols="12"
              md="4"
              lg="3"
              v-if="personType === 'idcard' || personType === 'child'"
            >
              <validation-provider
                name="Rodné číslo"
                :rules="{ required: true, rc: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="rc-group-1"
                  :label="
                    personType === 'idcard'
                      ? $store.state.config.RC_IS_INSURANCE
                        ? $t('registrationFormRcNumberIns')
                        : $t('registrationFormRcNumber')
                      : $store.state.config.RC_IS_INSURANCE
                      ? $t('registrationFormRcNumberChildIns')
                      : $t('registrationFormRcNumberChild')
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
                    required
                  />

                  <b-form-invalid-feedback id="rc-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" lg="3" sm="4" v-else>
              <validation-provider
                name="Číslo cestovného dokladu"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="passport-group-1"
                  :label="$t('registrationFormPassportNumber')"
                  label-for="passport"
                >
                  <b-form-input
                    id="passport"
                    name="passport"
                    v-model="passport"
                    :state="getValidationState(validationContext)"
                    aria-describedby="passport-feedback"
                    data-vv-as="Číslo cestovného dokladu"
                    required
                  />

                  <b-form-invalid-feedback id="passport-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider> </b-col
            ><b-col cols="12" lg="1" md="2">
              <validation-provider
                name="Deň narodenia"
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
                    data-vv-as="Deň narodenia"
                    required
                  />

                  <b-form-invalid-feedback id="lastName-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider> </b-col
            ><b-col cols="12" lg="1" md="2">
              <validation-provider
                name="Mesiac narodenia"
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
                    required
                  />

                  <b-form-invalid-feedback id="lastName-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <b-col cols="12" md="4" lg="2">
              <validation-provider
                name="Rok narodenia"
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
                    required
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
                name="Adresa - Ulica"
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
                    required
                  />

                  <b-form-invalid-feedback id="address-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="1">
              <validation-provider
                name="Číslo"
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
                    required
                  />

                  <b-form-invalid-feedback id="streetNo-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="2">
              <validation-provider
                name="PSČ"
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
                    required
                  />

                  <b-form-invalid-feedback id="zip-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="3">
              <validation-provider
                name="city"
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
                    required
                  />

                  <b-form-invalid-feedback id="city-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="4">
              <validation-provider
                name="Telefón"
                :rules="{ required: true, phone: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="phone-group-1"
                  :label="$t('registrationFormPhoneNumberFull')"
                  label-for="phone"
                >
                  <b-form-input
                    id="phone"
                    name="phone"
                    v-model="phone"
                    :state="getValidationState(validationContext)"
                    aria-describedby="phone-feedback"
                    required
                  />

                  <b-form-invalid-feedback id="phone-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="4">
              <validation-provider
                name="Email"
                rules="required|emailWithAtSign"
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
            <b-col
              v-if="selectedProduct && selectedProduct.collectInsurance"
              cols="12"
              md="4"
            >
              <label for="insurance">{{
                $t("registrationFormInsurance")
              }}</label>
              <b-form-select
                :options="$store.state.insurance.list"
                v-model="insurance"
                id="insurance"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col
              v-if="selectedProduct && selectedProduct.collectNationality"
              cols="12"
              md="4"
            >
              <validation-provider
                name="Nationality"
                rules="required"
                v-slot="validationContext"
              >
                <b-form-group
                  id="nationality-group-1"
                  :label="$t('registrationFormNationality')"
                  label-for="nationality"
                >
                  <b-form-select
                    id="nationality"
                    name="nationality"
                    :options="nationalityOptions"
                    v-model="nationality"
                    :state="getValidationState(validationContext)"
                    aria-describedby="nationality-feedback"
                  />
                  <b-form-invalid-feedback id="nationality-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col
              v-if="selectedProduct && selectedProduct.collectEmployeeNo"
              cols="12"
              md="4"
            >
              <validation-provider
                name="EmployeeNo"
                rules="required"
                v-slot="validationContext"
              >
                <b-form-group
                  id="employeeNo-group-1"
                  :label="$t('registrationFormEmployeeId')"
                  label-for="employeeNo"
                >
                  <b-form-input
                    id="employeeNo"
                    name="employeeNo"
                    v-model="employeeId"
                    :state="getValidationState(validationContext)"
                    aria-describedby="employeeNo-feedback"
                  />
                  <b-form-invalid-feedback id="employeeNo-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="my-2">
              <button class="btn btn-primary mr-2" type="submit">
                {{ $t("registrationFormRegisterOrEditClient") }}
              </button>
              <button
                v-if="privateKey && !loadQR"
                class="btn btn-primary"
                @click="loadQR = true"
              >
                {{ $t("registrationFormLoadQR") }}
              </button>
            </b-col>
          </b-row>
          <b-row v-if="privateKey && loadQR">
            <b-col>
              <qrcode-stream @decode="onDecodeQR" />
              <button class="btn btn-primary" @click="loadQR = false">
                {{ $t("registrationFormTurnOffCamera") }}
              </button>
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </ValidationObserver>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import eccrypto from "eccrypto";
import i18n from "@/i18n";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate/dist/vee-validate.full";
import sk from "vee-validate/dist/locale/sk.json";

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
  message: i18n.t("formInputInvalidMessage"),
});
extend("emailWithAtSign", {
  validate: value => {
    const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(value).toLowerCase()) || value === "@";
  },
  message: i18n.t("formInputInvalidMessage"),
});
extend("phone", {
  validate: value => {
    let valTrim = value.replace(/\s+|\s+/g, "");
    if (valTrim.substr(0, 1) !== "+") return false;
    valTrim = valTrim.substr(1);

    const ret = valTrim.match(/^\d{12}$/);
    return ret;
  },
  message: i18n.t("formInputInvalidMessage"),
});

import { mapMutations, mapActions } from "vuex";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    QrcodeStream,
  },
  data() {
    return {
      loadQR: false,
      privateKey: null,
      personType: "idcard",
      passport: "",
      rc: "",
      firstName: "",
      lastName: "",
      email: "@",
      phone: "+421",
      insurance: "25",
      address: {
        street: "",
        streetNo: "",
        zip: "",
        city: "",
      },
      birthday: { day: "", month: "", year: "" },
      gdpr: false,
      products: [],
      selectedProduct: null,
      employeeId: null,
      nationality: null,
      nationalityOptions: [
        {
          value: "CZE",
          text: "Česká republika",
        },
        {
          value: "SVK",
          text: "Slovensko",
        },
        {
          value: "UKR",
          text: "Ukrajina",
        },
        {
          value: "POL",
          text: "Polsko",
        },
        {
          value: "HRV",
          text: "Chorvatsko",
        },
        {
          value: "MDA",
          text: "Moldavsko",
        },
        {
          value: "OTHER",
          text: "Ostatní",
        },
        {
          value: "RUS",
          text: "Rusko",
        },
        {
          value: "KAZ",
          text: "Kazachstán",
        },
        {
          value: "BLR",
          text: "Bělorusko",
        },
        {
          value: "DNK",
          text: "Dánsko",
        },
        {
          value: "GBR",
          text: "Velká Británie",
        },
      ],
    };
  },
  computed: {
    productOptions() {
      return (
        this.products.map(p => ({
          value: p,
          text: p.name,
        })) || []
      );
    },
  },
  watch: {
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
    personType() {
      setTimeout(() => {
        this.$refs.firstName.focus();
      }, 0);
    },
  },
  async mounted() {
    this.GetPrivateKey().then(r => {
      if (r) {
        this.privateKey = Buffer.from(r, "base64");
      }
    });
    if (this.$store.state.result.lastVisitor) {
      this.personType = this.$store.state.result.lastVisitor.personType;
      this.passport = this.$store.state.result.lastVisitor.passport;
      this.rc = this.$store.state.result.lastVisitor.rc;
      this.firstName = this.$store.state.result.lastVisitor.firstName;
      this.lastName = this.$store.state.result.lastVisitor.lastName;
      this.address = this.$store.state.result.lastVisitor.address;
      this.email = this.$store.state.result.lastVisitor.email;
      this.phone = this.$store.state.result.lastVisitor.phone;
      this.insurance = this.$store.state.result.lastVisitor.insurance;
      this.address = {
        street: this.$store.state.result.lastVisitor.street,
        streetNo: this.$store.state.result.lastVisitor.streetNo,
        zip: this.$store.state.result.lastVisitor.zip,
        city: this.$store.state.result.lastVisitor.city,
      };
      this.birthday = {
        day: this.$store.state.result.lastVisitor.birthDayDay,
        month: this.$store.state.result.lastVisitor.birthDayMonth,
        year: this.$store.state.result.lastVisitor.birthDayYear,
      };
    }
    if (!this.personType) this.personType = "idcard";
    if (!this.insurance) this.insurance = "25";
    if (!this.phone) this.phone = "+421";
    if (!this.email) this.email = "@";

    if (this.$store.state.config.COUNTRY === "CZ") {
      if (this.phone === "+421") {
        this.phone = "+420";
      }
      if (this.insurance === "25") {
        this.insurance = "111";
      }
    }

    await this.ReloadMe();
    const products = await this.ListPlaceProduct();
    const products2 = products.filter(key => key.placeId == this.$store.state.user.me.placeObj.id);
    if(!this.$store.state.user.me || this.$store.state.user.me.placeObj || products2.length == 0){
      this.products = products.map(p => p.product);
    }else{
      this.products = products2.map(p => p.product);
    }
    // console.log("me", this.$store.state.user.me.placeObj,products, products.filter(key => key.placeId == this.$store.state.user.me.placeObj.id),this.products)
    
  },
  methods: {
    ...mapMutations({
      setRegistration: "slot/setRegistration",
    }),
    ...mapActions({
      RegisterByManager: "slot/RegisterByManager",
      GetPrivateKey: "user/GetPrivateKey",
      ListPlaceProduct: "placeProvider/ListPlaceProduct",
      ReloadMe: "user/ReloadMe",
    }),
    async validateForm() {
      const validated = await this.$refs.form.validate();
      if (!validated) {
        const confirmed = await this.$bvModal.msgBoxConfirm(
          this.$t("formInvalidDataConfirmationMessage")
        );
        if (!confirmed) return false;
      }
      return true;
    },
    async registerForTest() {
      const validated = await this.validateForm();
      if (!validated) return;

      const that = this;

      this.setRegistration({});
      if (this.personType == "foreign") {
        this.rc = "";
      } else {
        this.passport = "";
      }
      this.RegisterByManager({
        personType: this.personType,
        passport: this.passport,
        rc: this.rc,
        firstName: this.firstName,
        lastName: this.lastName,
        address:
          this.address.street +
          " " +
          this.address.streetNo +
          ", " +
          this.address.zip +
          " " +
          this.address.city,
        email: this.email,
        phone: this.phone,
        insurance: this.insurance,
        chosenSlot: this.$route.params.minuteId,
        chosenPlaceId: this.$route.params.placeId,
        birthDayDay: this.birthday.day,
        birthDayMonth: this.birthday.month,
        birthDayYear: this.birthday.year,
        street: this.address.street,
        streetNo: this.address.streetNo,
        zip: this.address.zip,
        city: this.address.city,
        product: this.selectedProduct.id,
        productName: this.selectedProduct.name,
        employeeId: this.employeeId,
        nationality: this.nationality,
      })
        // eslint-disable-next-line
        .then(r => {
          if (r) {
            // redirect only on successfull registration
            that.$router.push(
              `/tester/registeredVisitor/${this.$store.state.slot.registration.id}`
            );
          }
        });
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    decryptR01Standard(plaintext) {
      this.loadQR = false;
      this.personType = plaintext.personType;
      this.rc = plaintext.rc;
      this.passport = plaintext.passport;
      this.firstName = plaintext.firstName;
      this.lastName = plaintext.lastName;
      this.address.street = plaintext.street;
      this.address.streetNo = plaintext.streetNo;
      this.address.zip = plaintext.zip;
      this.address.city = plaintext.city;
      this.email = plaintext.email;
      this.phone = plaintext.phone;
      this.insurance = plaintext.insurance;
      this.birthday.day = plaintext.birthDayDay;
      this.birthday.month = plaintext.birthDayMonth;
      this.birthday.year = plaintext.birthDayYear;
    },

    decryptR01ECIESStandard(resultJson) {
      const encryptedContent = {
        iv: Buffer.from(resultJson.data.iv, "base64"),
        ciphertext: Buffer.from(resultJson.data.ct, "base64"),
        ephemPublicKey: Buffer.from(resultJson.data.epk, "base64"),
        mac: Buffer.from(resultJson.data.m, "base64"),
      };
      const that = this;
      eccrypto
        .decrypt(this.privateKey, encryptedContent)
        .then(function (plaintextstring) {
          const plaintext = JSON.parse(plaintextstring);
          if (plaintext.standard === "R01") {
            that.decryptR01Standard(plaintext);
          }
        });
    },
    onDecodeQR(result) {
      if (result) {
        const resultJson = JSON.parse(result);

        if (resultJson.standard === "R01ECIES") {
          this.decryptR01ECIESStandard(resultJson);
        } else if (resultJson.standard === "R01") {
          this.decryptR01Standard(resultJson);
        }
      }
    },
  },
};
</script>
<style lang="scss"></style>
