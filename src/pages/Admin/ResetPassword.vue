<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("loginFormResetTitle") }}</h1>
      </b-container>
    </div>
    <b-container>
      <b-form @submit.prevent="clickReset">
        <b-row class="mt-4">
          <b-col cols="12" md="6">
            <label for="emailToReset">{{ $t("loginFormLogin") }}</label>
            <b-input
              v-model="email"
              ref="emailToReset"
              id="emailToReset"
              type="email"
              required
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="12">
            <b-button type="submit" variant="primary" class="mr-2 my-4">
              {{ $t("loginFormButtonResetConfirm") }}
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    ...mapActions({
      ResetPassword: "user/ResetPassword",
    }),
    async clickReset() {
      const confirmed = await this.$bvModal.msgBoxConfirm(
        this.$t("loginFormPassResetedConfirmationMessage")
      );
      if (!confirmed) return;
      await this.ResetPassword({
        email: this.email,
      });
      this.resetForm();
    },
    resetForm() {
      this.email = "";
    },
  },
};
</script>
<style lang="scss"></style>
