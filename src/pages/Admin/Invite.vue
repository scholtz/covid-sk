<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("adminInviteAnotherAdmins") }}</h1>
      </b-container>
    </div>
    <b-container>
      <b-form @submit.prevent="inviteUserClick">
        <b-row class="mt-4">
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
      name: "",
      email: "",
      roles: ["Admin"],
      rolesList: ["Admin", "PasswordProtected"],
    };
  },
  methods: {
    ...mapActions({
      InviteUser: "user/InviteUser",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
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
  },
};
</script>
<style lang="scss"></style>
