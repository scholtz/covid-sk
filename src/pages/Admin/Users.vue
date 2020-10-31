<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Audit užívateľov a ich práv</h1>
      </b-container>
    </div>
    <b-container class="my-4">
      <b-table :items="data" :fields="fields">
        <template #cell(id)="row">
          <button @click="editPlaceClick(row)" class="govuk-button m-2">
            Edit
          </button>
          <button @click="deletePlaceClick(row)" class="govuk-button m-2">
            Delete
          </button>
        </template>
        <template #cell(role)="row">
          {{ formatRoles(row) }}
        </template>
        <template #cell(actions)="row">
          <button @click="deleteUserClick(row)" class="govuk-button m-2">
            Vymazať
          </button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      data: [],
      person: {
        name: "",
        email: "",
        roles: [],
      },
      fields: [
        {
          label: "Meno",
          key: "name",
          sortable: true,
        },
        {
          label: "Email",
          key: "email",
          sortable: true,
        },
        {
          label: "Role",
          key: "role",
          sortable: true,
        },
        {
          label: "Akcie",
          key: "actions",
          sortable: false,
        },
      ],
    };
  },
  mounted() {
    this.LoadUsers().then(r => {
      if (r) {
        this.data = Object.values(r);
      }
    });
  },
  methods: {
    ...mapActions({
      LoadUsers: "user/LoadUsers",
      RemoveUser: "user/RemoveUser",
    }),
    formatRoles(data) {
      return data.item.roles.join(", ");
    },
    deleteUserClick(row) {
      if (confirm("Naozaj chcete vymazať užívateľa?")) {
        this.RemoveUser({ email: row.item.email }).then(r => {
          if (r) {
            this.LoadUsers().then(r => {
              if (r) {
                this.data = Object.values(r);
              }
            });
          }
        });
      }
    },
  },
};
</script>
<style lang="scss">
</style>