<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <h1>{{ $t("testerPlaceSelection") }}</h1>
      </b-container>
    </div>
    <div>
      <b-row v-if="needPlaceConfirmation && this.$store.state.user.me">
        <b-col>
          <div class="alert alert-info m-2">
            {{ this.$store.state.user.me.name }},
            {{ $t("testerPlaceCheckCurrentPlace") }}:
            <span v-if="this.$store.state.user.me.placeObj">
              {{ this.$store.state.user.me.placeObj.name }}
            </span>
            <span v-else>
              <div class="alert alert-danger m-2">
                <b>{{ $t("testerPlaceNoPlaceSelected") }}</b>
              </div>
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row v-if="!needPlaceConfirmation && this.$store.state.user.me">
        <b-col>
          <div class="alert alert-info m-2">
            {{ $t("testerPlaceCurrentlyWorkingAt") }}:
            <span v-if="this.$store.state.user.me.placeObj">
              <b>{{ this.$store.state.user.me.placeObj.name }}</b>
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row v-if="isAdmin && $store.state.user.me.placeObj">
        <b-col>
          <div class="alert alert-info m-2">
            {{ this.$store.state.user.me.name }},
            {{ $t("testerPlaceAdminCanCancelPlace") }}
            <button class="btn btn-light m-2" @click="clearPlace">
              {{ $t("testerPlaceCancelPlace") }}
            </button>
          </div>
        </b-col>
      </b-row>

      <b-table :items="places" :fields="fields">
        <template #cell(id)="row">
          <button @click="selectPlace(row)" class="btn btn-primary">
            {{ $t("testerPlaceSelect") }}
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
          </button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      id: "",
      name: "",
      description: "",
      address: "",
      lat: 48.289218275462225,
      lng: 17.272996902465824,
      isDriveIn: false,
      isWalkIn: true,
      limitPer5MinSlot: 5,
      limitPer1HourSlot: 40,
      fields: [
        {
          label: this.$t("testerPlaceAction"),
          key: "id",
        },
        {
          label: this.$t("testerPlaceName"),
          key: "name",
          sortable: true,
        },
        {
          label: this.$t("testerPlaceAddress"),
          key: "address",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    places() {
      return Object.values(this.$store.state.place.places).filter(
        x =>
          x.placeProviderId === this.$store.state.user.tokenData.pp &&
          ((x.isVisible && x.hasReservationSystem) ||
            x.isVisibleOnlyForAuthorized)
      );
    },
    needPlaceConfirmation() {
      if (!this.$store.state.user || !this.$store.state.user.me) return false;
      if (!this.$store.state.user.me.place) return true;
      return moment(this.$store.state.user.me.placeLastCheck).isBefore(
        moment().add(-5, "minutes")
      );
    },
  },
  mounted() {
    this.ReloadPlaces().then(r => {
      console.log("r", r);
    });

    this.ReloadMe();
  },
  methods: {
    ...mapActions({
      ReloadPlaces: "place/ReloadPlaces",
      InsertOrUpdate: "place/InsertOrUpdate",
      ReloadMe: "user/ReloadMe",
      Delete: "place/Delete",
    }),
    ...mapActions({
      SetLocation: "user/SetLocation",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    selectPlace(row) {
      if (row.item.id) {
        this.SetLocation({ placeId: row.item.id }).then(r => {
          if (r) {
            this.ReloadMe().then(r2 => {
              if (r2) {
                this.openSuccess("Úspešne ste si nastavili miesto");
              }
            });
          }
        });
      }
    },
    confirmPlace() {
      this.SetLocation({ placeId: this.$store.state.user.me.place }).then(r => {
        if (r) {
          this.ReloadMe().then(r2 => {
            if (r2) {
              this.openSuccess("Úspešne ste potvrdili svoje miesto");
            }
          });
        }
      });
    },
    clearPlace() {
      this.SetLocation({ placeId: "" }).then(r => {
        if (r) {
          this.ReloadMe().then(r2 => {
            if (r2) {
              this.openSuccess("Úspešne ste zrušili svoje miesto");
            }
          });
        }
      });
    },
    isAdmin() {
      for (const index in this.$store.state.user.tokenData.Role) {
        if (this.$store.state.user.tokenData.Role[index] === "Admin")
          return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss"></style>
