<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("loginTitle") }}</h1>
        <p>
          {{ $t("loginHelp") }}
        </p>
        <p>
          <b-link to="/registerPlaceProvider" class="opacity-8 btn btn-light">{{
            $t("loginFormRegisterPlaceProvider")
          }}</b-link>
        </p>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row>
        <b-col cols="12" md="6">
          <label for="login">{{ $t("loginFormLogin") }}</label>
          <b-input v-model="login" ref="login" id="login" />
        </b-col>
        <b-col cols="12" md="6">
          <label for="pass">{{ $t("loginFormPassword") }}</label>
          <b-input v-model="pass" ref="pass" id="pass" type="password" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6" class="mt-4">
          <b-button @click="clickLogin">
            {{ $t("loginFormButton") }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="18"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            >
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
            </svg>
          </b-button>
          <b-button @click="clickReset" variant="link" class="ml-1">
            {{ $t("loginFormButtonReset") }}
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { sha256 } from "js-sha256";

export default {
  data() {
    return {
      login: "@",
      pass: "",
    };
  },
  methods: {
    ...mapActions({
      Preauthenticate: "user/Preauthenticate",
      Authenticate: "user/Authenticate",
      AuthenticateV2: "user/AuthenticateV2",
      ResetPassword: "user/ResetPassword",
      openError: "snackbar/openError",
    }),
    clickLogin() {
      this.Preauthenticate({ email: this.login }).then(r => {
        if (typeof r === "object" && r !== null) {
          console.log("AuthV2");
          // v2 auth
          let hash = this.pass.trim();
          for (let i = 0; i < 99; i++) {
            hash = sha256(hash + r.coHash);
          }
          hash = sha256(hash + r.coData);
          // eslint-disable-next-line
          this.AuthenticateV2({ email: this.login, hash }).then(r2 => {
            this.$router.push("/user");
          });
        } else {
          console.log("AuthV1");
          //v1 auth
          let hash = this.pass;
          for (let i = 0; i < 99; i++) {
            hash = sha256(hash + r);
          }
          const data = Math.random().toString(36).substring(8);
          hash = sha256(hash + data);
          // eslint-disable-next-line
          this.Authenticate({ email: this.login, hash, data }).then(r2 => {
            this.$router.push("/user");
          });
        }
      });
    },
    async clickReset() {
      if (!this.login || this.login.length < 2)
        return this.openError(this.$t("loginFormPassResetedEmailEmpty"));
      const confirmed = await this.$bvModal.msgBoxConfirm(
        this.$t("loginFormPassResetedConfirmationMessage")
      );
      if (!confirmed) return;
      this.ResetPassword({
        email: this.login,
      });
    },
  },
};
</script>
<style lang="scss"></style>
