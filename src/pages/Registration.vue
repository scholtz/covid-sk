<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Posledný krok registrácie - Osobné údaje</h1>
        <p>
          Údaje o Vašom testovaní, vrátane osobných údajov môžete vymazať zo
          stránky výsledky testu ak sa preukáže, že ochorenie covid19 nemáte. V
          prípade pozitívne nálezu budú postúpené hygiene. Po dobu testovania
          budú Vaše osobné údaje chránené šifrovaním AES256. Všetky osobné údaje
          budú z tejto databáze odstránené najneskôr do 2 pracovných dní od
          posledného dňa testovania.
        </p>
      </b-container>
    </div>
    <div
      class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6"
      v-if="$store.state.place.currentPlace"
    >
      <b-container>
        <h2>
          Vybrali ste si
          {{ $store.state.place.currentPlace.name }}, dňa
          {{ $store.state.slot.slotDCurrent.description }} medzi
          {{ $store.state.slot.slotMCurrent.description }}
        </h2>
        <b-link
          :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${$route.params.hourId}`"
          class="govuk-button m-0"
        >
          Zmeniť
        </b-link>
      </b-container>
    </div>
    <ValidationObserver>
      <b-container class="my-4">
        <b-row>
          <b-col cols="12" md="4">
            <b-form-group label="Identifikácia registrovanej osoby">
              <b-form-radio
                v-model="personType"
                name="person-type"
                value="idcard"
                >Mám občiansky preukaz</b-form-radio
              >
              <b-form-radio
                v-model="personType"
                name="person-type"
                value="child"
                >Registrácia dieťaťa zákonným zástupcom</b-form-radio
              >
              <b-form-radio
                v-model="personType"
                name="person-type"
                value="foreign"
                >Som cudzinec</b-form-radio
              >
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4">
            <validation-provider
              name="Meno"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="firstName-group-1"
                label="Meno"
                label-for="firstName"
              >
                <b-form-input
                  id="firstName"
                  name="firstName"
                  v-model="firstName"
                  :state="getValidationState(validationContext)"
                  aria-describedby="firstName-feedback"
                  data-vv-as="Name"
                ></b-form-input>

                <b-form-invalid-feedback id="firstName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="4">
            <validation-provider
              name="Priezvisko"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="lastName-group-1"
                label="Priezvisko"
                label-for="lastName"
              >
                <b-form-input
                  id="lastName"
                  name="lastName"
                  v-model="lastName"
                  :state="getValidationState(validationContext)"
                  aria-describedby="lastName-feedback"
                  data-vv-as="Priezvisko"
                ></b-form-input>

                <b-form-invalid-feedback id="lastName-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col
            cols="12"
            md="4"
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
                    ? 'Rodné číslo bez lomítka'
                    : 'Rodné číslo dieťaťa bez lomítka'
                "
                label-for="rc"
              >
                <b-form-input
                  id="rc"
                  name="rc"
                  v-model="firstName"
                  :state="getValidationState(validationContext)"
                  aria-describedby="rc-feedback"
                  data-vv-as="Rodné číslo"
                ></b-form-input>

                <b-form-invalid-feedback id="rc-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="4" v-else>
            <validation-provider
              name="Číslo cestovného dokladu"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="passport-group-1"
                label="Číslo cestovného dokladu"
                label-for="passport"
              >
                <b-form-input
                  id="passport"
                  name="passport"
                  v-model="passport"
                  :state="getValidationState(validationContext)"
                  aria-describedby="passport-feedback"
                  data-vv-as="Číslo cestovného dokladu"
                ></b-form-input>

                <b-form-invalid-feedback id="passport-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="12">
            <validation-provider
              name="Adresa"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group
                id="address-group-1"
                label="Adresa miesta pobytu"
                label-for="address"
              >
                <b-form-input
                  id="address"
                  name="address"
                  v-model="address"
                  :state="getValidationState(validationContext)"
                  aria-describedby="address-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="address-feedback">{{
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
                label="Telefón bez medzier s predvoľbou štátu"
                label-for="phone"
              >
                <b-form-input
                  id="phone"
                  name="phone"
                  v-model="phone"
                  :state="getValidationState(validationContext)"
                  aria-describedby="phone-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="phone-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="4">
            <validation-provider
              name="Email"
              rules="required|email"
              v-slot="validationContext"
            >
              <b-form-group id="email-group-1" label="Email" label-for="email">
                <b-form-input
                  id="email"
                  name="email"
                  v-model="email"
                  :state="getValidationState(validationContext)"
                  aria-describedby="email-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="email-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="4">
            <label for="insurance">Poisťovňa</label>
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
              Cieľom registrácie pred návštevou odberného miesta je
              minimalizovať čas potrebný pre výkon testu. V ideálnom prípade
              doktor nascanuje čiarový kód Vašej registrácie, čiarový kód na
              testovacej súprave, a vykoná odobratie vzorky. Stlačením tlačítka
              nižšie vytvoríte svoj jedinečný kód registrácie, ktorý s
              kombináciou posledných 4 čísel rodného čísla (cestovného dokladu
              pre cudzincov) použijete aj na zistenie výsledku testu na tejto
              stránke.
            </p>
            <p>
              Ďalšiu osobu (partnera/ku, deti) budete môcť pridať po Vašej
              registrácii k vybranému termínu. Každá osoba má svoj unikátny kód
              registrácie.
            </p>
            <p>
              <b-form-checkbox v-model="gdpr" id="gdpr">
                Súhlasím so spracovaním osobných údajov
              </b-form-checkbox>
            </p>
            <button
              :disabled="!gdpr"
              class="govuk-button"
              @click="registerForTest"
            >
              Zaregistrovať
            </button>
          </b-col>
        </b-row>
      </b-container>
    </ValidationObserver>
  </div>
</template>

<script>
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
});
extend("phone", {
  validate: value => {
    let valTrim = value.replace(/\s+|\s+/g, "");
    if (valTrim.substr(0, 1) !== "+") return false;
    valTrim = valTrim.substr(1);

    const ret = valTrim.match(/^\d{12}$/);
    console.log("valTrim", valTrim, ret);
    return ret;
  },
});

import { mapMutations, mapActions } from "vuex";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      personType: "idcard",
      passport: "",
      rc: "",
      firstName: "",
      lastName: "",
      address: "",
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
          text: "EÚ poistenec",
        },
        {
          value: "99",
          text: "Cudzinec",
        },
      ],
    };
  },
  mounted() {
    this.GetPlace({ id: this.$route.params.placeId })
      .then(r => {
        return r;
      })
      .then(r => {
        this.setCurrentPlace(r);
        return r;
      })
      // eslint-disable-next-line
      .then(r => {
        this.GetSlotD({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
        }).then(r2 => {
          this.setSlotDCurrent(r2);
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
          console.log("r2", r2, {
            placeId: this.$route.params.placeId,
            hourSlotId: this.$route.params.hourId,
            minuteSlotId: this.$route.params.minuteId,
          });
          return this.setSlotMCurrent(r2);
        });
      });
  },
  methods: {
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
      setSlotDCurrent: "slot/setSlotDCurrent",
      setSlotHCurrent: "slot/setSlotHCurrent",
      setSlotMCurrent: "slot/setSlotMCurrent",
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
    }),
    registerForTest() {
      const that = this;
      this.Register({
        personType: this.personType,
        passport: this.passport,
        rc: this.rc,
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        email: this.email,
        phone: this.phone,
        insurance: this.insurance,
        chosenSlot: this.$route.params.minuteId,
        chosenPlaceId: this.$route.params.placeId,
      })
        // eslint-disable-next-line
        .then(r => {
          if (r) {
            // redirect only on successfull registration
            that.$router.push(
              `/place/${this.$route.params.placeId}/${this.$route.params.dayId}/${this.$route.params.hourId}/${this.$route.params.minuteId}/done`
            );
          }
        });
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
};
</script>
<style lang="scss">
</style>