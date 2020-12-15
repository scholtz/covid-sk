<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Management testovacích miest</h1>
      </b-container>
    </div>
    <b-container>
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab title="Prehľad miest">
            <div v-if="$store.state.place.places">
              <b-table
                :items="Object.values($store.state.place.places)"
                :fields="fields"
              >
                <template #cell(id)="row">
                  <button @click="editPlaceClick(row)" class="govuk-button m-1">
                    Upraviť
                  </button>
                  <button
                    @click="deletePlaceClick(row)"
                    class="govuk-button m-1"
                  >
                    Zrušiť
                  </button>
                </template>
              </b-table>
            </div>
          </b-tab>
          <b-tab title="Formulár pre správu miesta" active>
            <h2 v-if="id">Úprava miesta</h2>
            <h2 v-else>Nové miesto</h2>
            <b-row>
              <b-col cols="12" md="6">
                <label for="name">Názov miesta</label>
                <b-input v-model="name" ref="name" id="name" />
              </b-col>
              <b-col cols="12" md="6">
                <label for="address">Adresa</label>
                <b-input v-model="address" ref="address" id="address" />
              </b-col>
              <b-col cols="12" md="12">
                <label for="description">Popis</label>
                <b-input
                  v-model="description"
                  ref="description"
                  id="description"
                />
              </b-col>
              <b-col cols="12" md="3">
                <label for="lat">GPS Lat</label>
                <b-input v-model="lat" ref="lat" id="lat" />
              </b-col>
              <b-col cols="12" md="3">
                <label for="lng">GPS Lng</label>
                <b-input v-model="lng" ref="lng" id="lng" />
              </b-col>
              <b-col cols="12" md="3">
                <label for="limitPer5MinSlot">Limit / 5min</label>
                <b-input
                  v-model="limitPer5MinSlot"
                  ref="limitPer5MinSlot"
                  id="limitPer5MinSlot"
                />
              </b-col>
              <b-col cols="12" md="3">
                <label for="limitPer1HourSlot">Limit / hour</label>
                <b-input
                  v-model="limitPer1HourSlot"
                  ref="limitPer1HourSlot"
                  id="limitPer1HourSlot"
                />
              </b-col>
              <b-col cols="12" md="6">
                <b-form-checkbox
                  id="isDriveIn"
                  v-model="isDriveIn"
                  name="isDriveIn"
                >
                  Drive in
                </b-form-checkbox>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-checkbox
                  id="isWalkIn"
                  v-model="isWalkIn"
                  name="isWalkIn"
                >
                  Walk in
                </b-form-checkbox>
              </b-col>
            </b-row>
            <b-row
              ><button
                v-if="id"
                @click="clickCreate"
                class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
              >
                Upraviť
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
              <a v-if="id" @click="clickCancel" class="btn btn-light">
                Zrušiť úpravu
              </a>
              <button
                v-else
                @click="clickCreate"
                class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
              >
                Vytvoriť
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
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      tabIndex: 0,
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
          label: "Akcia",
          key: "id",
        },
        {
          label: "Názov miesta",
          key: "name",
          sortable: true,
        },
        {
          label: "Registrácií",
          key: "registrations",
          sortable: true,
        },
        {
          label: "Počet zdravých",
          key: "healthy",
          sortable: true,
        },
        {
          label: "Počet nakazených",
          key: "sick",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.tabIndex = 0;
    this.ReloadPlaces().then(r => {
      console.log("r", r);
      this.tabIndex = 0;
    });
  },
  methods: {
    ...mapActions({
      ReloadPlaces: "place/ReloadPlaces",
      InsertOrUpdate: "place/InsertOrUpdate",
      Delete: "place/Delete",
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
      this.InsertOrUpdate({
        id: this.id,
        name: this.name,
        description: this.description,
        address: this.address,
        lat: this.lat,
        lng: this.lng,
        isDriveIn: this.isDriveIn,
        isWalkIn: this.isWalkIn,
        limitPer5MinSlot: this.limitPer5MinSlot,
        limitPer1HourSlot: this.limitPer1HourSlot,
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
      this.id = row.item.id;
      this.name = row.item.name;
      this.description = row.item.description;
      this.address = row.item.address;
      this.lat = row.item.lat;
      this.lng = row.item.lng;
      this.isDriveIn = row.item.isDriveIn;
      this.isWalkIn = row.item.isWalkIn;
      this.limitPer5MinSlot = row.item.limitPer5MinSlot;
      this.limitPer1HourSlot = row.item.limitPer1HourSlot;
      this.tabIndex = 1;
    },
    clickCancel() {
      this.id = "";
      this.tabIndex = 0;
    },
  },
};
</script>
<style lang="scss">
</style>