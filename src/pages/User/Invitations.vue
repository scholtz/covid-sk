<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Správa pozvánok</h1>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <b-table
            :items="dataInvitations"
            :fields="fieldsInvitations"
            sortBy="invitationTime"
            :sortDesc="true"
          >
            <template #cell(invitationTime)="row">
              {{ row.item.invitationTime | formatDateTime }}
            </template>
            <template #cell(status)="row">
              <span v-if="row.item.status === 'invited'">
                Čaká sa na potvrdenie
              </span>
              <span v-else-if="row.item.status === 'declined'">
                Zamietli ste pozvánku
              </span>
              <span v-else-if="row.item.status === 'accepted'">
                Prijali ste pozvánku
              </span>
              <span v-else>
                {{ row.item.status }}
              </span>
            </template>
            <template #cell(actions)="row">
              <span v-if="row.item.status === 'invited'">
                <button
                  @click="acceptInvitationClick(row)"
                  class="btn btn-primary m-2"
                >
                  Prijať
                </button>
                <button
                  @click="cancelInvitationClick(row)"
                  class="btn btn-light m-2"
                >
                  Zamietnuť
                </button>
              </span>
            </template>
          </b-table>
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
      dataInvitations: [],
      fieldsInvitations: [
        {
          label: "Spoločnosť",
          key: "companyName",
          sortable: true,
        },
        {
          label: "Pozval ma",
          key: "inviterName",
          sortable: true,
        },
        {
          label: "Čas pozvánky",
          key: "invitationTime",
          sortable: true,
        },
        {
          label: "Stav pozvánky",
          key: "status",
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
    this.ListUserInvites({
      placeProviderId: this.pp,
    }).then(r => {
      if (r) {
        this.dataInvitations = r;
      }
    });
    this.tabIndex = 0;
  },
  methods: {
    ...mapActions({
      ListPrivate: "placeProvider/ListPrivate",
      InviteUser: "user/InviteUser",
      ListUserInvites: "user/ListUserInvites",
      InviteUserToPP: "placeProvider/InviteUserToPP",
      LoadUsers: "user/LoadUsers",
      ProcessInvitation: "user/ProcessInvitation",
      ListScheduledDays: "place/ListScheduledDays",
      ReloadPlaces: "place/ReloadPrivatePlaces",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    acceptInvitationClick(row) {
      console.log("todo");
      if (row.item?.invitationId) {
        this.ProcessInvitation({
          invitationId: row.item.invitationId,
          accepted: true,
        }).then(r1 => {
          if (r1) {
            this.ListUserInvites({
              placeProviderId: this.pp,
            }).then(r => {
              if (r) {
                this.dataInvitations = r;
              }
            });
          }
        });
      }
    },
    cancelInvitationClick(row) {
      console.log("todo");
      if (row.item?.invitationId) {
        if (confirm("Naozaj chcete zrušiť pozvánku?")) {
          this.ProcessInvitation({
            invitationId: row.item.invitationId,
            accepted: false,
          }).then(r1 => {
            if (r1) {
              this.ListUserInvites({
                placeProviderId: this.pp,
              }).then(r => {
                if (r) {
                  this.dataInvitations = r;
                }
              });
            }
          });
        }
      }
    },
  },
};
</script>
<style lang="scss">
</style>