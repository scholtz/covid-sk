<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Prihlásenie</h1>
        <p>
          Prihlásenie slúži pre obsluhu testovacieho miesta. Po prihlásení môže
          obsluha scanovať čiarové kódy z obrazovky mobilu alebo vytlačené na
          papieri. Po úspešnom prihlásení sa zmení horné menu na rozbaľovací
          zoznam rolí a funkcií ktoré môžu robiť.
        </p>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row>
        <b-col cols="12" md="6">
          <label for="login">Email</label>
          <b-input v-model="login" ref="login" id="login" />
        </b-col>
        <b-col cols="12" md="6">
          <label for="pass">Heslo</label>
          <b-input v-model="pass" ref="pass" id="pass" type="password" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <button
            @click="clickLogin"
            class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
          >
            Prihlás
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
    }),
    clickLogin() {
      this.Preauthenticate({ email: this.login }).then(r => {
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
      });
    },
  },
};
</script>
<style lang="scss">
</style>