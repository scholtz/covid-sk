<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("chPassTitle") }}</h1>
      </b-container>
    </div>
    <ValidationObserver>
      <b-container class="py-3">
        <b-row>
          <b-col cols="12" md="12">
            <label for="pass1">{{ $t("chPassOldPassword") }}</label>
            <b-input v-model="pass1" ref="pass1" id="pass1" type="password" />
          </b-col>
          <b-col cols="12" md="6">
            <validation-provider
              name="password"
              rules="required"
              v-slot="validationContext"
            >
              <b-form-group
                id="pass2-group-1"
                :label="$t('chPassNewPassword')"
                label-for="pass2"
              >
                <b-form-input
                  id="pass2"
                  name="pass2"
                  v-model="pass2"
                  :state="getValidationState(validationContext)"
                  aria-describedby="pass2-feedback"
                  type="password"
                />

                <b-form-invalid-feedback id="pass2-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" md="6">
            <validation-provider
              name="confirm"
              rules="required|password:@password"
              v-slot="validationContext"
            >
              <b-form-group
                id="pass3-group-1"
                :label="$t('chPassNewPasswordValidation')"
                label-for="pass3"
              >
                <b-form-input
                  id="pass3"
                  name="pass3"
                  v-model="pass3"
                  :state="getValidationState(validationContext)"
                  aria-describedby="pass3-feedback"
                  type="password"
                />

                <b-form-invalid-feedback id="pass3-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <b-button @click="clickLogin" class="my-4" variant="primary">
              {{ $t("chPassTitle") }}
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
            </b-button>
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
import i18n from "@/i18n";

extend("password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: i18n.t("chPassValidationDoNotMatch"),
});

import { mapActions } from "vuex";
import { sha256 } from "js-sha256";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      pass1: "",
      pass2: "",
      pass3: "",
    };
  },
  methods: {
    ...mapActions({
      Preauthenticate: "user/Preauthenticate",
      ChangePassword: "user/ChangePassword",
    }),
    clickLogin() {
      if (this.pass2 != this.pass3) return;
      if (!this.pass2) return;
      this.Preauthenticate({
        email: this.$store.state.user.tokenData.nameid,
      }).then(r => {
        if (r) {
          if (typeof r === "object") {
            let oldHash = this.pass1;
            for (let i = 0; i < 99; i++) {
              oldHash = sha256(oldHash + r.coHash);
            }

            let newHash = this.pass2;
            for (let i = 0; i < 99; i++) {
              newHash = sha256(newHash + r.coData);
            }

            this.ChangePassword({ oldHash, newHash }).then(r2 => {
              if (r2) {
                this.$router.push("/user");
              }
            });
          } else {
            let oldHash = this.pass1;
            for (let i = 0; i < 99; i++) {
              oldHash = sha256(oldHash + r);
            }

            let newHash = this.pass2;
            for (let i = 0; i < 99; i++) {
              newHash = sha256(newHash + r);
            }

            this.ChangePassword({ oldHash, newHash }).then(r2 => {
              if (r2) {
                this.$router.push("/user");
              }
            });
          }
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