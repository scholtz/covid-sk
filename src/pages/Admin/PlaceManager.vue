<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <h1>Management testovacích miest</h1>
      </b-container>
    </div>
    <b-container fluid>
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
            <h2 v-if="place.id">Úprava miesta</h2>
            <h2 v-else>Nové miesto</h2>
            <b-row>
              <b-col cols="12" md="6">
                <label for="name">Názov miesta</label>
                <b-input v-model="place.name" ref="name" id="name" />
              </b-col>
              <b-col cols="12" md="6">
                <label for="address">Adresa</label>
                <b-input v-model="place.address" ref="address" id="address" />
              </b-col>
              <b-col cols="12" md="12">
                <label for="description">Popis</label>
                <b-input
                  v-model="place.description"
                  ref="description"
                  id="description"
                />
              </b-col>
              <b-col cols="12" md="3">
                <label for="lat">GPS Lat</label>
                <b-input v-model="place.lat" ref="lat" id="lat" />
              </b-col>
              <b-col cols="12" md="3">
                <label for="lng">GPS Lng</label>
                <b-input v-model="place.lng" ref="lng" id="lng" />
              </b-col>
              <b-col cols="12" md="3">
                <label for="limitPer5MinSlot">Limit / 5min</label>
                <b-input
                  v-model="place.limitPer5MinSlot"
                  ref="limitPer5MinSlot"
                  id="limitPer5MinSlot"
                />
              </b-col>
              <b-col cols="12" md="3">
                <label for="limitPer1HourSlot">Limit / hour</label>
                <b-input
                  v-model="place.limitPer1HourSlot"
                  ref="limitPer1HourSlot"
                  id="limitPer1HourSlot"
                />
              </b-col>
            </b-row>
            <b-row class="py-2">
              <b-col cols="12" md="6">
                <b-form-checkbox
                  id="isDriveIn"
                  v-model="place.isDriveIn"
                  name="isDriveIn"
                >
                  Možnosť prísť autom (Drive In)
                </b-form-checkbox>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-checkbox
                  id="isWalkIn"
                  v-model="place.isWalkIn"
                  name="isWalkIn"
                >
                  Možnosť prísť pešo (Walk in)
                </b-form-checkbox>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="py-2">
                <h4>
                  Otváracie hodiny vo formáte
                  05:55-11:35,11:45-18:00,18:05-20:00
                </h4>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label for="openingHoursWorkDay"
                  >Šablóna otváracích hodín 1 (štandardné)</label
                >
                <b-input
                  v-model="place.openingHoursWorkDay"
                  ref="openingHoursWorkDay"
                  id="openingHoursWorkDay"
                  placeholder="08:00-16:00"
                />
              </b-col>
              <b-col>
                <label for="openingHoursOther1"
                  >Šablóna otváracích hodín 2 (víkendy)</label
                >
                <b-input
                  v-model="place.openingHoursOther1"
                  ref="openingHoursOther1"
                  id="openingHoursOther1"
                  placeholder="8:00-12:00, 13:00-17:00"
                />
              </b-col>
              <b-col>
                <label for="openingHoursOther2"
                  >Šablóna otváracích hodín 3 (sviatky)</label
                >
                <b-input
                  v-model="place.openingHoursOther2"
                  ref="openingHoursOther2"
                  id="openingHoursOther2"
                  placeholder="13:00-17:00"
                />
              </b-col> </b-row
            ><b-row>
              <b-col>
                Správa otváracích dní sa robí na samostatnej stránke
              </b-col>
            </b-row>
            <b-row>
              <b-col class="py-2">
                <h4>Možnosti testovania</h4>
              </b-col>
            </b-row>
            <b-row class="py-2">
              <b-col>
                <b-form-checkbox
                  id="hasPCRTestFree"
                  v-model="place.hasPCRTestFree"
                  name="hasPCRTestFree"
                >
                  PCR Test - na predpis
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="hasPCRTestSelf"
                  v-model="place.hasPCRTestSelf"
                  name="hasPCRTestSelf"
                >
                  PCR Test - samoplatca
                </b-form-checkbox>
                <b-row v-if="place.hasPCRTestSelf">
                  <b-col md="8">
                    <b-input
                      v-model="place.hasPCRTestSelfPrice"
                      ref="hasPCRTestSelfPrice"
                      id="hasPCRTestSelfPrice"
                      type="number"
                      step="0.25"
                      min="0"
                    />
                  </b-col>
                  <b-col md="4">
                    <b-form-select
                      :options="currencies"
                      v-model="place.hasPCRTestSelfPriceCurrency"
                      ref="hasPCRTestSelfPriceCurrency"
                      id="hasPCRTestSelfPriceCurrency"
                    />
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="hasAntTestFree"
                  v-model="place.hasAntTestFree"
                  name="hasAntTestFree"
                >
                  Antigen Test - zadarmo
                </b-form-checkbox>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="hasAntTestSelf"
                  v-model="place.hasAntTestSelf"
                  name="hasAntTestSelf"
                >
                  Antigen Test - samoplatca
                </b-form-checkbox>
                <b-row v-if="place.hasAntTestSelf">
                  <b-col md="8">
                    <b-input
                      v-model="place.hasAntTestSelfPrice"
                      ref="hasAntTestSelfPrice"
                      id="hasAntTestSelfPrice"
                      type="number"
                      step="0.25"
                      min="0"
                    />
                  </b-col>
                  <b-col md="4">
                    <b-form-select
                      :options="currencies"
                      v-model="place.hasAntTestSelfPriceCurrency"
                      ref="hasAntTestSelfPriceCurrency"
                      id="hasAntTestSelfPriceCurrency"
                    />
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-form-checkbox
                  id="hasVaccineFree"
                  v-model="place.hasVaccineFree"
                  name="hasVaccineFree"
                >
                  Vakcína - zadarmo
                </b-form-checkbox>
              </b-col>
            </b-row>

            <b-row
              ><button
                v-if="place.id"
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
              <a v-if="place.id" @click="clickCancel" class="btn btn-light">
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
      place: {
        id: "",
        name: "",
        description: "",
        address: "",
        lat: 48.289218275462225,
        lng: 17.272996902465824,
        isDriveIn: false,
        isWalkIn: false,
        limitPer5MinSlot: 5,
        limitPer1HourSlot: 40,
        openingHoursWorkDay: "",
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
      },
      currencies: ["EUR", "CZK", "USD"],
      tabIndex: 0,
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
      ReloadPlaces: "place/ReloadPrivatePlaces",
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
      console.log("this.place", this.place);
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
      this.place = row.item;
      this.tabIndex = 1;
    },
    clickCancel() {
      this.place.id = "";
      this.tabIndex = 0;
    },
  },
};
</script>
<style lang="scss">
</style>