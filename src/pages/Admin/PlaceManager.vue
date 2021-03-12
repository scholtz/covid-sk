<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <h1>
          {{ $t("navBarAdminManagePlace") }}:
          <span v-if="placePrivider">{{ placePrivider.companyName }}</span>
        </h1>
      </b-container>
    </div>
    <b-container fluid v-if="loading">
      <b-row>
        <b-col>
          <b-spinner label="Loading..." />
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid v-if="!loading">
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab :title="$t('adminPlaceManagement')">
            <div v-if="$store.state.place.places">
              <b-table
                :items="Object.values($store.state.place.places)"
                :fields="fields"
              >
                <template #cell(id)="row">
                  <b-button
                    variant="light"
                    @click="editPlaceClick(row)"
                    class="mr-1"
                    :title="$t('adminPlaceManagementEdit')"
                    size="sm"
                  >
                    <font-awesome-icon class="m-1" icon="edit" />
                  </b-button>
                  <b-button
                    variant="light"
                    @click="deletePlaceClick(row)"
                    class="mr-1"
                    :title="$t('adminPlaceManagementDelete')"
                    size="sm"
                  >
                    <font-awesome-icon class="m-1" icon="trash" />
                  </b-button>
                </template>
              </b-table>
            </div>
          </b-tab>
          <b-tab :title="$t('adminPlaceManagementForm')" active>
            <h2 v-if="place.id">{{ $t("adminPlaceManagementEditPlace") }}</h2>
            <h2 v-else>{{ $t("adminPlaceManagementNewPlace") }}</h2>
            <b-row>
              <b-col cols="12" md="6">
                <label for="name">{{ $t("adminPlaceManagementName") }}</label>
                <b-input v-model="place.name" ref="name" id="name" />
              </b-col>
              <b-col cols="12" md="6">
                <label for="address">{{
                  $t("adminPlaceManagementAddress")
                }}</label>
                <b-input v-model="place.address" ref="address" id="address" />
              </b-col>
              <b-col cols="12" md="12">
                <label for="description">{{
                  $t("adminPlaceManagementDescription")
                }}</label>
                <b-input
                  v-model="place.description"
                  ref="description"
                  id="description"
                />
              </b-col>
              <b-col cols="12" md="12">
                <label for="oversight">{{
                  $t("adminPlaceManagementGarant")
                }}</label>
                <b-input v-model="oversight" ref="oversight" id="oversight" />
              </b-col>
              <b-col cols="12" md="2">
                <label for="queue">{{ $t("adminPlaceManagementQueue") }}</label>
                <b-input
                  type="time"
                  v-model="place.queue"
                  ref="queue"
                  id="queue"
                  step="2"
                />
              </b-col>
              <b-col cols="12" md="2">
                <label for="queueLastUpdate">{{
                  $t("adminPlaceManagementQueueLastUpdate")
                }}</label>
                <VueCtkDateTimePicker
                  v-model="place.queueLastUpdate"
                  ref="queueLastUpdate"
                  id="queueLastUpdate"
                />
              </b-col>
              <b-col cols="12" md="2">
                <label for="lat">{{ $t("adminPlaceManagementLat") }}</label>
                <b-input v-model="place.lat" ref="lat" id="lat" />
              </b-col>
              <b-col cols="12" md="2">
                <label for="lng">{{ $t("adminPlaceManagementLng") }}</label>
                <b-input v-model="place.lng" ref="lng" id="lng" />
              </b-col>
              <b-col cols="12" md="2">
                <label for="limitPer5MinSlot">{{
                  $t("adminPlaceManagementLimitPer5MinSlot")
                }}</label>
                <b-input
                  v-model="place.limitPer5MinSlot"
                  ref="limitPer5MinSlot"
                  id="limitPer5MinSlot"
                />
              </b-col>
              <b-col cols="12" md="2">
                <label for="limitPer1HourSlot">{{
                  $t("adminPlaceManagementLimitPer1HourSlot")
                }}</label>
                <b-input
                  v-model="place.limitPer1HourSlot"
                  ref="limitPer1HourSlot"
                  id="limitPer1HourSlot"
                />
              </b-col>
            </b-row>
            <b-row class="py-2">
              <b-col>
                <b-form-checkbox
                  id="isVisible"
                  v-model="place.isVisible"
                  name="isVisible"
                >
                  {{ $t("adminPlaceManagementIsVisible") }}
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="isVisibleOnlyForAuthorized"
                  v-model="place.isVisibleOnlyForAuthorized"
                  name="isVisibleOnlyForAuthorized"
                >
                  {{ $t("adminPlaceManagementIsVisibleOnlyForAuthorized") }}
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="isDriveIn"
                  v-model="place.isDriveIn"
                  name="isDriveIn"
                >
                  {{ $t("adminPlaceManagementIsDriveIn") }}
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="isWalkIn"
                  v-model="place.isWalkIn"
                  name="isWalkIn"
                >
                  {{ $t("adminPlaceManagementIsWalkIn") }}
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="hasReservationSystem"
                  v-model="place.hasReservationSystem"
                  name="hasReservationSystem"
                >
                  {{ $t("adminPlaceManagementHasReservationSystem") }}
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="requiresRegistration"
                  v-model="place.requiresRegistration"
                  name="requiresRegistration"
                >
                  {{ $t("adminPlaceManagementRequiresRegistration") }}
                </b-form-checkbox>
              </b-col>
            </b-row>
            <b-row class="py-2" v-if="!place.hasReservationSystem">
              <b-col>
                <label for="externalReservationSystem">{{
                  $t("adminPlaceManagementOpeningHoursTitle")
                }}</label>
                <b-input
                  v-model="place.externalReservationSystem"
                  ref="externalReservationSystem"
                  id="externalReservationSystem"
                />
              </b-col>
            </b-row>
            <b-row>
              <b-col class="py-2">
                <h4>
                  {{ $t("adminPlaceManagementOpeningHoursTitle") }}
                </h4>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label for="openingHoursWorkDay">{{
                  $t("adminPlaceManagementOpeningHoursWorkDay")
                }}</label>
                <b-input
                  v-model="place.openingHoursWorkDay"
                  ref="openingHoursWorkDay"
                  id="openingHoursWorkDay"
                  placeholder="08:00-16:00"
                />
              </b-col>
              <b-col>
                <label for="openingHoursOther1">{{
                  $t("adminPlaceManagementOpeningHoursOther1")
                }}</label>
                <b-input
                  v-model="place.openingHoursOther1"
                  ref="openingHoursOther1"
                  id="openingHoursOther1"
                />
              </b-col>
              <b-col>
                <label for="openingHoursOther2">{{
                  $t("adminPlaceManagementOpeningHoursOther2")
                }}</label>
                <b-input
                  v-model="place.openingHoursOther2"
                  ref="openingHoursOther2"
                  id="openingHoursOther2"
                />
              </b-col> </b-row
            ><b-row>
              <b-col>
                {{ $t("adminPlaceManagementOpeningHoursNote") }}
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <label for="picture1">{{
                  $t("adminPlaceManagementPicture1")
                }}</label>
                <b-input
                  v-model="place.picture1"
                  ref="picture1"
                  id="picture1"
                />
              </b-col>
              <b-col>
                <label for="picture2">{{
                  $t("adminPlaceManagementPicture2")
                }}</label>
                <b-input
                  v-model="place.picture2"
                  ref="picture2"
                  id="picture2"
                />
              </b-col>
              <b-col>
                <label for="picture3">{{
                  $t("adminPlaceManagementPicture3")
                }}</label>
                <b-input
                  v-model="place.picture3"
                  ref="picture3"
                  id="picture3"
                />
              </b-col>
            </b-row>
            <b-row
              ><button
                v-if="place.id"
                @click="clickCreate"
                class="btn btn-primary my-4"
              >
                {{ $t("adminPlaceManagementEdit") }}
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
              <b-button
                v-if="place.id"
                @click="clickCancel"
                class="btn btn-light p-2 m-4"
              >
                {{ $t("adminPlaceManagementCancelEditting") }}
              </b-button>
              <button v-else @click="clickCreate" class="btn btn-primary my-4">
                {{ $t("adminPlaceManagementCreate") }}
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
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
export default {
  components: {
    VueCtkDateTimePicker,
  },
  data() {
    return {
      loading: true,
      oversight: "",
      place: {
        id: "",
        name: "",
        description: "",
        address: "",
        queue: "00:00",
        queueLastUpdate: "",
        lat: 48.289218275462225,
        lng: 17.272996902465824,
        isDriveIn: false,
        isWalkIn: false,
        limitPer5MinSlot: 5,
        limitPer1HourSlot: 40,
        openingHoursWorkDay: "08:00-12:00, 13:00-18:00",
        openingHoursOther1: "",
        openingHoursOther2: "",
        hasPCRTestFree: false,
        hasPCRTestSelf: false,
        hasPCRTestSelfPrice: 50,
        hasPCRTestSelfPriceCurrency: "EUR",
        hasAntTestFree: true,
        hasAntTestSelf: false,
        hasAntTestSelfPrice: 5,
        hasAntTestSelfPriceCurrency: "EUR",
        hasVaccineFree: false,
        picture1: "",
        picture2: "",
        picture3: "",
        hasReservationSystem: true,
        requiresRegistration: false,
      },
      currencies: ["EUR", "CZK", "USD"],
      tabIndex: 0,
      fields: [
        {
          label: this.$t("selectPlaceAction"),
          key: "id",
        },
        {
          label: this.$t("selectPlacePlaceName"),
          key: "name",
          sortable: true,
        },
        {
          label: this.$t("selectPlaceRegistrations"),
          key: "registrations",
          sortable: true,
        },
        {
          label: this.$t("selectPlaceStatsHealthy"),
          key: "healthy",
          sortable: true,
        },
        {
          label: this.$t("selectPlaceStatsSick"),
          key: "sick",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    placePrivider() {
      if (!this.$store.state.placeProvider.places) return {};
      return this.$store.state.placeProvider.places.find(
        p => p.placeProviderId === this.pp
      );
    },
    pp() {
      if (!this.$store.state) return "";
      return this.$store.state.user.tokenData.pp;
    },
    places() {
      return this.$store.state.place.places;
    },
  },
  watch: {
    places() {
      console.log(
        "places",
        this.$store.state.place.places,
        Object.values(this.$store.state.place.places).length,
        this.$store.state.place.places &&
          Object.values(this.$store.state.place.places).length > 0
      );
      if (
        this.$store.state.place.places &&
        Object.values(this.$store.state.place.places).length > 0
      ) {
        this.tabIndex = 0;
      } else {
        this.tabIndex = 1;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.ListPrivate();
    this.ReloadPlaces().then(r => {
      if (
        r &&
        this.$store.state.place.places &&
        Object.values(this.$store.state.place.places).length > 0
      ) {
        this.tabIndex = 0;
      } else {
        this.tabIndex = 1;
      }
      this.loading = false;
    });
  },
  methods: {
    ...mapActions({
      ReloadPlaces: "place/ReloadPrivatePlaces",
      InsertOrUpdate: "place/InsertOrUpdate",
      Delete: "place/Delete",
      ListPrivate: "placeProvider/ListPrivate",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    deletePlaceClick(row) {
      if (confirm("Naozaj chcete vymazať miesto?")) {
        if (row.item?.id) {
          // eslint-disable-next-line
          this.Delete({ id: row.item?.id }).then(r => {
            this.ReloadPlaces().then(r2 => {
              console.log("r", r, r2);
              this.tabIndex = 0;
            });
          });
        }
      }
    },
    clickCreate() {
      console.log("this.place", this.place);

      this.place.medicalOversight = [{ id: "1", name: this.oversight }];

      this.InsertOrUpdate({
        place: this.place,
      }).then(r => {
        if (r) {
          this.openSuccess("Uložené");
          this.tabIndex = 0;
        }

        this.ReloadPlaces().then(r => {
          console.log("r", r);
        });
      });
    },
    editPlaceClick(row) {
      this.place = JSON.parse(JSON.stringify(row.item));
      if (
        this.place &&
        this.place.medicalOversight &&
        this.place.medicalOversight.length > 0
      ) {
        this.oversight = this.place.medicalOversight[0].name;
      } else {
        this.oversight = "";
      }
      console.log("place", this.place);
      this.tabIndex = 1;
    },
    clickCancel() {
      this.place.id = "";
      this.tabIndex = 0;
    },
  },
};
</script>
<style lang="scss"></style>
