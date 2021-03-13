<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Prehľad návštevníka</h1>
      </b-container>
    </div>
    <b-container class="py-3" v-if="loading">
      <b-row>
        <b-col>
          <b-spinner label="Loading..." />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="py-3" v-if="!loading">
      <b-row>
        <b-col>
          <ValidationObserver>
            <b-container class="my-4">
              <b-row v-if="!$store.state.config.INSURED_ONLY">
                <b-col cols="12" md="4">
                  <b-form-group :label="$t('registrationFormTypeLabel')">
                    <b-form-radio
                      v-model="visitor.personType"
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
                      v-model="visitor.personType"
                      name="person-type"
                      value="child"
                      >{{
                        $t("registrationFormTypePersonalChild")
                      }}</b-form-radio
                    >
                    <b-form-radio
                      v-model="visitor.personType"
                      name="person-type"
                      value="foreign"
                      >{{
                        $t("registrationFormTypePersonalForeigner")
                      }}</b-form-radio
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
                        v-model="visitor.firstName"
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
                        v-model="visitor.lastName"
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
                  v-if="
                    visitor.personType === 'idcard' ||
                    visitor.personType === 'child'
                  "
                >
                  <validation-provider
                    ref="vpPersonalNumber"
                    :name="
                      visitor.personType === 'idcard'
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
                        visitor.personType === 'idcard'
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
                        v-model="visitor.rc"
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
                        v-model="visitor.passport"
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
                        v-model="visitor.birthDayDay"
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
                        v-model="visitor.birthDayMonth"
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
                        v-model="visitor.birthDayYear"
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
                        v-model="visitor.street"
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
                        v-model="visitor.streetNo"
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
                        v-model="visitor.zip"
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
                        v-model="visitor.city"
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
                        v-model="visitor.phone"
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
                        v-model="visitor.email"
                        :state="getValidationState(validationContext)"
                        aria-describedby="email-feedback"
                      />

                      <b-form-invalid-feedback id="email-feedback">{{
                        validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <b-col cols="12" :md="insuranceColumns">
                  <label for="insurance">{{
                    $t("registrationFormInsurance")
                  }}</label>
                  <b-form-select
                    :options="insuranceOptions"
                    v-model="visitor.insurance"
                    id="insurance"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="chosenPlaceId-group-1"
                    label="chosenPlaceId"
                    label-for="chosenPlaceId"
                  >
                    <b-form-input
                      id="chosenPlaceId"
                      name="chosenPlaceId"
                      v-model="visitor.chosenPlaceId"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="chosenSlot-group-1"
                    label="chosenSlot"
                    label-for="chosenSlot"
                  >
                    <b-form-input
                      id="chosenSlot"
                      name="chosenSlot"
                      v-model="visitor.chosenSlot"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="testingSet-group-1"
                    label="testingSet"
                    label-for="testingSet"
                  >
                    <b-form-input
                      id="testingSet"
                      name="testingSet"
                      v-model="visitor.testingSet"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="language-group-1"
                    label="language"
                    label-for="language"
                  >
                    <b-form-input
                      id="language"
                      name="language"
                      v-model="visitor.language"
                    />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-form-group
                    id="verificationId-group-1"
                    label="verificationId"
                    label-for="verificationId"
                  >
                    <b-form-input
                      id="verificationId"
                      name="verificationId"
                      v-model="visitor.verificationId"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="verifiedBy-group-1"
                    label="verifiedBy"
                    label-for="verifiedBy"
                  >
                    <b-form-input
                      id="verifiedBy"
                      name="verifiedBy"
                      v-model="visitor.verifiedBy"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="verifiedFromIP-group-1"
                    label="verifiedFromIP"
                    label-for="verifiedFromIP"
                  >
                    <b-form-input
                      id="verifiedFromIP"
                      name="verifiedFromIP"
                      v-model="visitor.verifiedFromIP"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="chosenSlotTime-group-1"
                    label="chosenSlotTime"
                    label-for="chosenSlotTime"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.chosenSlotTime"
                      label="chosenSlotTime"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="lastStatusCheck-group-1"
                    label="lastStatusCheck"
                    label-for="lastStatusCheck"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.lastStatusCheck"
                      label="lastStatusCheck"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="lastUpdate-group-1"
                    label="lastUpdate"
                    label-for="lastUpdate"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.lastUpdate"
                      label="lastUpdate"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="registrationTime-group-1"
                    label="registrationTime"
                    label-for="registrationTime"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.registrationTime"
                      label="registrationTime"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="resultNotifiedAt-group-1"
                    label="resultNotifiedAt"
                    label-for="resultNotifiedAt"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.resultNotifiedAt"
                      label="resultNotifiedAt"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="testResultTime-group-1"
                    label="testResultTime"
                    label-for="testResultTime"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.testResultTime"
                      label="testResultTime"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="testingTime-group-1"
                    label="testingTime"
                    label-for="testingTime"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.testingTime"
                      label="testingTime"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="eHealthNotifiedAt-group-1"
                    label="eHealthNotifiedAt"
                    label-for="eHealthNotifiedAt"
                  >
                    <VueCtkDateTimePicker
                      v-model="visitor.eHealthNotifiedAt"
                      label="eHealthNotifiedAt"
                      time-zone="Europe/Bratislava"
                      format="YYYY-MM-DDTHH:mm:ss.SSSSZ"
                      formatted="llll"
                      :locale="locale"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label for="result"> Výsledok testu </label>
                  <b-form-select
                    :options="resultOptions"
                    v-model="visitor.result"
                    id="result"
                  />
                </b-col>

                <b-col>
                  <b-form-group
                    id="personTrackingNumber-group-1"
                    label="Covid Pass"
                    label-for="personTrackingNumber"
                  >
                    <b-form-input
                      id="personTrackingNumber"
                      name="personTrackingNumber"
                      v-model="visitor.personTrackingNumber"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="my-2">
                  <p>
                    <validation-provider
                      ref="vpEmployeeId"
                      name="Osobné číslo zamestnanca"
                      v-slot="validationContext"
                    >
                      <b-form-group
                        id="employeeId-group-1"
                        label="Osobné číslo zamestnanca"
                        label-for="employeeId"
                      >
                        <b-form-input
                          id="employeeId"
                          name="employeeId"
                          v-model="visitor.employeeId"
                          :state="getValidationState(validationContext)"
                          aria-describedby="employeeId-feedback"
                        />

                        <b-form-invalid-feedback id="employeeId-feedback">{{
                          validationContext.errors[0]
                        }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </p>

                  <b-button variant="primary" @click="clickUpdateVisitor">
                    Upraviť záznam
                    <b-spinner small class="ml-1" v-if="processing" />
                  </b-button>
                  <b-button
                    variant="primary"
                    class="ml-3"
                    @click="clickSendToEHealth"
                  >
                    Odoslať do Moje eZdravie
                    <b-spinner small class="ml-1" v-if="processingE" />
                  </b-button>
                </b-col>
              </b-row>
            </b-container>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate/dist/vee-validate.full";
import sk from "vee-validate/dist/locale/sk.json";
import en from "vee-validate/dist/locale/en.json";
import { mapActions } from "vuex";
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

export default {
  data() {
    return {
      loading: true,
      processing: false,
      processingE: false,
      insuranceColumns: 4,
      visitor: {},
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
      resultOptions: [
        {
          value: "test-not-taken",
          text: "test-not-taken",
        },
        {
          value: "test-not-processed",
          text: "test-not-processed",
        },
        {
          value: "test-to-be-repeated",
          text: "test-to-be-repeated",
        },
        {
          value: "positive",
          text: "positive",
        },
        {
          value: "positive-certiciate-taken",
          text: "positive-certiciate-taken",
        },
        {
          value: "negative",
          text: "negative",
        },
        {
          value: "negative-certiciate-taken",
          text: "negative-certiciate-taken",
        },
      ],
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    VueCtkDateTimePicker,
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    ppStore() {
      if (!this.$store.state) return "";
      return this.$store.state.user.tokenData.pp;
    },
    placePrivider() {
      if (!this.$store.state.placeProvider.places) return {};
      return this.$store.state.placeProvider.places.find(
        p => p.placeProviderId === this.ppStore
      );
    },
  },
  watch: {
    locale() {
      this.setLanguage();
    },
    placePrivider() {
      this.pp = this.placePrivider;
      console.log("pp", this.pp);
      this.loading = false;
    },
  },
  created() {
    this.resetVisitor();
  },
  mounted() {
    this.loading = true;

    this.FindVisitor({ query: this.$route.params.visitorId }).then(r => {
      this.loading = false;
      if (r) {
        this.visitor = r;
      } else {
        this.resetVisitor();
      }
    });
    this.setLanguage();
  },
  methods: {
    ...mapActions({
      FindVisitor: "user/FindVisitor",
      UpdateVisitor: "user/UpdateVisitor",
      SendResultToEHealth: "user/SendResultToEHealth",
      UpdatePP: "placeProvider/UpdatePP",
      UpdateSensitiveData: "placeProvider/UpdateSensitiveData",
      GetSensitiveData: "placeProvider/GetSensitiveData",
      ListPrivate: "placeProvider/ListPrivate",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    resetVisitor() {
      this.visitor = {
        personType: "idcard",
        passport: "",
        rc: "",
        firstName: "",
        lastName: "",
        address: "",
        street: "",
        streetNo: "",
        zip: "",
        city: "",
        email: "@",
        phone: "+421",
        insurance: "25",
        chosenSlot: "",
        chosenPlaceId: "",
        birthDayDay: "",
        birthDayMonth: "",
        birthDayYear: "",
        product: "",
        employeeId: "",
      };
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
    clickUpdateVisitor() {
      this.processing = true;
      this.UpdateVisitor({ visitor: this.visitor }).then(r => {
        this.processing = false;
        if (r) {
          this.visitor = r;
          this.openSuccess("Návšteva bola upravená");
        }
      });
    },
    clickSendToEHealth() {
      if (confirm("Potvrďte prosím odoslanie do NCZI")) {
        this.processingE = true;
        this.SendResultToEHealth({ visitorId: this.visitor.id }).then(r => {
          if (r) {
            this.FindVisitor({ query: this.$route.params.visitorId }).then(
              r2 => {
                this.processingE = false;
                if (r2) {
                  this.visitor = r2;
                  this.openSuccess("Návšteva bola odoslaná do NCZI");
                } else {
                  this.resetVisitor();
                }
              }
            );
          }
        });
      }
    },
    clickUpdateEnc() {
      this.data.placeProviderId = this.placePrivider.placeProviderId;
      this.UpdateSensitiveData({ data: this.data }).then(r => {
        if (r) {
          this.openSuccess("Informácie o prevádzkovateľovi boli upravené");
        }
      });
    },
  },
};
</script>
<style lang="scss">
</style>