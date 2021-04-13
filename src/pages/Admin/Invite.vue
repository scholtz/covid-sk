<template>
  <div>
    <div v-if="!isResetPassword">
      <div class="app-pane-lgray py-2">
        <b-container>
          <h1>{{ $t("adminInviteAnotherAdmins") }}</h1>
        </b-container>
      </div>
      <b-container>
        <b-form @submit.prevent="inviteUserClick">
          <b-row>
            <b-col cols="12" md="6">
              <label for="name">{{ $t("adminInviteName") }}</label>
              <b-input v-model="name" ref="name" id="name" autofocus />
            </b-col>
            <b-col cols="12" md="6">
              <label for="email">{{ $t("adminInviteEmail") }}</label>
              <b-input
                v-model="email"
                ref="email"
                id="email"
                type="email"
                required
              />
            </b-col>
            <!--<b-col cols="12" md="12">
              <b-select
                multiple="true"
                v-model="roles"
                :options="rolesList"
                style="min-height: 200px"
                class="my-2"
              />
            </b-col>-->
          </b-row>
          <b-row>
            <b-col cols="12" md="12">
              <p>{{ $t("adminInviteAnotherAdminsTitle") }}</p>
              <b-button type="submit" variant="primary" class="mr-2 my-4">
                {{ $t("adminInvite") }}
              </b-button>

              <b-link to="/admin/users" class="btn btn-light mr-2 my-4">
                {{ $t("adminInviteRoleManagement") }}
              </b-link>
              <b-button
                @click="isResetPassword = true"
                variant="light"
                class="mr-2 my-4"
              >
                {{ $t("loginFormButtonReset") }}
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </div>
    <div v-else>
      <div class="app-pane-lgray py-2">
        <b-container>
          <h1>{{ $t("loginFormResetTitle") }}</h1>
        </b-container>
      </div>
      <b-container>
        <b-form @submit.prevent="clickReset">
          <b-row>
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
              <b-button
                @click="isResetPassword = false"
                variant="light"
                class="mr-2 my-4"
              >
                {{ $t("loginFormCancel") }}
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isResetPassword: false,
      name: "",
      email: "",
      roles: ["Admin"],
      rolesList: ["Admin", "PasswordProtected"],
    };
  },
  watch: {
    isResetPassword(value) {
      if (value) {
        setTimeout(() => {
          this.$refs.emailToReset.focus();
        }, 0);
      } else {
        setTimeout(() => {
          this.$refs.name.focus();
        }, 0);
      }
    },
  },
  methods: {
    ...mapActions({
      InviteUser: "user/InviteUser",
    }),
    ...mapActions({
      ResetPassword: "user/ResetPassword",
      openSuccess: "snackbar/openSuccess",
      openError: "snackbar/openError",
    }),
    inviteUserClick() {
      this.InviteUser({
        name: this.name,
        email: this.email,
        roles: this.roles,
      }).then(r => {
        if (r) {
          this.openSuccess("Užívateľ pozvaný");
        }
        this.email = "";
        this.name = "";
      });
      this.$refs.name.focus();
    },
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
      this.name = "";
      this.isResetPassword = false;
    },
  },
};
</script>
<style lang="scss"></style>
