<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("adminInviteAnotherAdmins") }}</h1>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
          <label for="name">{{ $t("adminInviteName") }}</label>
          <b-input v-model="name" ref="name" id="name" />
        </b-col>
        <b-col cols="12" md="6">
          <label for="email">{{ $t("adminInviteEmail") }}</label>
          <b-input v-model="email" ref="email" id="email" type="email" />
        </b-col>
        <!--
        <b-col cols="12" md="12">
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
          <button @click="inviteUserClick" class="btn btn-primary my-4">
            {{ $t("adminInvite") }}
          </button>

          <b-link to="/admin/users" class="btn btn-light m-4">
            {{ $t("adminInviteRoleManagement") }}
          </b-link>
        </b-col>
      </b-row>
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
    },
  },
};
</script>
<style lang="scss"></style>
