<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <b-row>
          <b-col>
            <h1>{{ $t("selectDayTitle") }}</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="py-4" v-if="$store.state.place.currentPlace">
      <b-container :fluid="$store.state.place.currentPlace.placeProviderId">
        <b-row>
          <b-col>
            <b-card class="m-3">
              <h2>
                {{
                  $t("selectDayYourSelection", {
                    place: $store.state.place.currentPlace.name,
                  })
                }}
              </h2>
              <p>
                {{ $t("selectDayAddress") }}:
                {{ $store.state.place.currentPlace.address }}
              </p>
              <p v-if="gpsLink">
                {{ $t("selectDayGPS") }}:
                <a :href="gpsLink" target="_blank">
                  {{ $t("selectDayLat") }}:
                  {{ $store.state.place.currentPlace.lat | formatGps }}
                  {{ $t("selectDayLng") }}:
                  {{ $store.state.place.currentPlace.lng | formatGps }}
                </a>
              </p>
              <p>
                {{ $t("selectDayDriveThrough") }}:
                <b v-if="$store.state.place.currentPlace.isDriveIn">{{
                  $t("yes")
                }}</b>
                <b v-else>{{ $t("no") }}</b>
                <br />
                {{ $t("selectDayWalkIn") }}:
                <b v-if="$store.state.place.currentPlace.isWalkIn">{{
                  $t("yes")
                }}</b>
                <b v-else>{{ $t("no") }}</b>
              </p>
              <p>
                {{ $t("selectDayLimits") }}:
                <b>{{ $store.state.place.currentPlace.limitPer5MinSlot }}</b> /
                {{ $t("selectDay5Min") }},
                <b>{{ $store.state.place.currentPlace.limitPer1HourSlot }}</b> /
                {{ $t("selectDay1Hour") }}
              </p>
              <p>
                {{ $t("hasReservationSystem") }}:

                <b
                  v-if="
                    $store.state.place.currentPlace.hasReservationSystem ||
                    $store.state.place.currentPlace.externalReservationSystem
                  "
                  >{{ $t("yes") }}</b
                >
                <b v-else>{{ $t("no") }}</b>
                <a
                  class="btn btn-primary m-2"
                  v-if="
                    $store.state.place.currentPlace.externalReservationSystem
                  "
                  :href="
                    $store.state.place.currentPlace.externalReservationSystem
                  "
                >
                  {{
                    $store.state.place.currentPlace.externalReservationSystem
                  }}
                </a>
                <br />
                {{ $t("registrationIsRequired") }}:

                <b
                  v-if="$store.state.place.currentPlace.requiresRegistration"
                  >{{ $t("yes") }}</b
                >
                <b v-else>{{ $t("no") }}</b>
              </p>
              <p v-if="$store.state.place.currentPlace.description">
                {{ $t("selectDayDescription") }}:
                {{ $store.state.place.currentPlace.description }}
              </p>
              <b-link :to="`/register`" class="btn btn-light my-3"
                >{{ $t("change") }}
              </b-link>
              <p v-if="$store.state.place.currentPlace.picture1">
                <img
                  :src="$store.state.place.currentPlace.picture1"
                  class="w-100"
                  alt="First picture"
                />
              </p>
              <p v-if="$store.state.place.currentPlace.picture2">
                <img
                  :src="$store.state.place.currentPlace.picture2"
                  class="w-100"
                  alt="Second picture"
                />
              </p>
              <p v-if="$store.state.place.currentPlace.picture3">
                <img
                  :src="$store.state.place.currentPlace.picture3"
                  class="w-100"
                  alt="Third picture"
                />
              </p>
            </b-card>
          </b-col>
          <b-col v-if="this.products">
            <div v-for="product in this.products" :key="product.id">
              <b-card
                header-bg-variant="dark"
                header-text-variant="light"
                text-variant="dark"
                :title="product.product.name"
                class="m-3"
              >
                <b-form-radio
                  name="selectedProduct"
                  v-model="selectedProduct"
                  :value="product.product.id"
                >
                  {{ product.product.description }}

                  <div>
                    <div v-if="product.customPrice">
                      <div v-if="product.price > 0">
                        {{ $t("selectDayPrice") }}: {{ product.price }}
                        {{ product.priceCurrency }}
                      </div>
                      <div v-else>
                        {{ $t("selectDayPrice") }}:
                        {{ $t("selectDayPaidByInsurance") }}
                      </div>
                    </div>
                    <div v-else>
                      <div v-if="product.product.defaultPrice > 0">
                        {{ $t("selectDayPrice") }}:
                        {{ product.product.defaultPrice }}
                        {{ product.product.defaultPriceCurrency }}
                      </div>
                      <div v-else>
                        {{ $t("selectDayPrice") }}:
                        {{ $t("selectDayPaidByInsurance") }}
                      </div>
                    </div>
                    <div v-if="product.insuranceOnly">
                      {{ $t("selectDayOnlyForInsured") }}
                    </div>
                  </div>
                  <span
                    @click="selectedProduct = product.product.id"
                    class="btn btn-primary"
                    v-if="
                      $store.state.place.currentPlace.placeProviderId &&
                      !selectedProduct
                    "
                  >
                    {{ $t("selectDaySelectService") }}
                  </span>
                </b-form-radio>
              </b-card>
            </div>
          </b-col>
          <b-col v-if="!products">
            <b-container
              class="my-4"
              v-if="!$store.state.place.currentPlace.placeProviderId"
            >
              <h2>Skúste to prosím neskôr</h2>
              <p>
                Zvolené odberové miesto nemá v tejto chvíli naplánované žiadne
                termíny na testovanie.<br />
                Skúste to prosím neskôr.
              </p>
              <b-link :to="`https://www.rychlejsie.sk`" class="btn btn-primary"
                >Viac o službe Rýchlejšie.sk
              </b-link>
            </b-container>
          </b-col>

          <b-col
            md="7"
            v-if="
              $store.state.place.currentPlace.placeProviderId && selectedProduct
            "
          >
            <b-card
              :bg-variant="dayVariant"
              :text-variant="dayVariantText"
              class="m-3"
              v-if="Object.keys($store.state.slot.slotsD).length > 0"
            >
              <h2>{{ $t("selectDayQuestion") }}</h2>
              <p v-if="!hoursLoaded">
                {{ $t("selectDayHelp") }}
              </p>
              <b-container v-if="loading">
                <b-spinner /> {{ $t("loadingData") }}
              </b-container>
              <span
                v-for="slotD in $store.state.slot.slotsD"
                :key="slotD.slotId"
              >
                <span
                  @click="dayClicked(slotD)"
                  class="btn m-1"
                  :class="
                    day && day === slotD.slotId ? 'btn-primary' : 'btn-light'
                  "
                  :title="
                    $t('selectDayButtonText', {
                      description: slotD.description,
                      registrations: slotD.registrations,
                    })
                  "
                  >{{ slotD.description }}
                  <div style="font-size: smaller">
                    ({{ slotD.registrations }})
                  </div>
                </span>
              </span>
            </b-card>
            <b-card bg-variant="light" text-variant="dark" class="m-3" v-else>
              Zvolené odberové miesto nemá v tejto chvíli naplánované žiadne
              termíny na testovanie.<br />
              Skúste to prosím neskôr.
            </b-card>
            <b-card
              v-if="hoursLoaded"
              class="m-3"
              :bg-variant="hourVariant"
              :text-variant="hourVariantText"
            >
              <h2>{{ $t("selectHourQuestion") }}</h2>
              <p v-if="!minutesLoaded">
                {{ $t("selectHourHelp") }}
              </p>
              <b-container v-if="loadingHours">
                <b-spinner /> {{ $t("loadingData") }}
              </b-container>
              <span v-for="hour in $store.state.slot.slotsH" :key="hour.from">
                <span
                  :disabled="hourDisabled(hour)"
                  @click="hourClicked(hour)"
                  class="btn m-1"
                  :class="hourButtonStyle(hour)"
                  :title="
                    $t('selectHourButtonText', {
                      description: hour.description,
                      registrations: hour.registrations,
                    })
                  "
                >
                  {{ hour.description }}
                  <div style="font-size: smaller">
                    ({{ hour.registrations }} / {{ hourLimit(hour) }})
                  </div>
                </span>
              </span>
            </b-card>

            <b-card
              v-if="minutesLoaded"
              class="m-3"
              :bg-variant="minutesVariant"
              :text-variant="minutesVariantText"
            >
              <h2>{{ $t("selectMinuteQuestion") }}</h2>
              <p>
                {{ $t("selectMinuteHelp") }}
              </p>
              <span
                v-for="minute in $store.state.slot.slotsM"
                :key="minute.slotId"
              >
                <b-link
                  :disabled="
                    minute.registrations >=
                    $store.state.place.currentPlace.limitPer5MinSlot
                  "
                  :to="`/place/${$route.params.placeId}/${day}/${hour}/${minute.slotId}/${selectedProduct}`"
                  class="btn btn-light m-1"
                  v-bind:class="{
                    'bg-danger':
                      minute.registrations >=
                      $store.state.place.currentPlace.limitPer5MinSlot,
                  }"
                  :title="
                    $t('selectMinuteButtonText', {
                      description: minute.description,
                      registrations: minute.registrations,
                    })
                  "
                >
                  {{ minute.description }}
                  <div style="font-size: smaller">
                    ({{ minute.registrations }} /
                    {{ $store.state.place.currentPlace.limitPer5MinSlot }})
                  </div>
                </b-link>
              </span>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      loading: true,
      loadingHours: false,
      hoursLoaded: false,
      loadingMinutes: false,
      minutesLoaded: false,
      products: [],
      day: null,
      hour: null,
      selectedProduct: null,
      currentSlotD: {},
      dayVariant: "primary",
      dayVariantText: "white",
      hourVariant: "primary",
      hourVariantText: "white",
      minutesVariant: "primary",
      minutesVariantText: "white",
    };
  },
  watch: {
    selectedProduct() {
      if (this.selectedProduct) {
        this.setProduct(
          this.products.find(p => p.product.id === this.selectedProduct)
        );
      }
    },
  },
  computed: {
    gpsLink() {
      if (
        !this.$store ||
        !this.$store.state ||
        !this.$store.state.place ||
        !this.$store.state.place.currentPlace ||
        !this.$store.state.place.currentPlace.lat
      ) {
        return "";
      }
      const ret = `http://www.google.com/maps/place/${this.$store.state.place.currentPlace.lat},${this.$store.state.place.currentPlace.lng}`;
      return ret;
    },
  },
  mounted() {
    this.setSlotsH([]);
    this.GetPlace({ id: this.$route.params.placeId })
      .then(r => {
        if (r) {
          this.setCurrentPlace(r);
          return r;
        }
      })
      .then(r => {
        if (r) {
          if (!this.$store.state.place.currentPlace.placeProviderId)
            return false;
          return this.ReloadSlotsD({ placeId: this.$route.params.placeId });
        }
      })
      .then(r => {
        if (r) {
          return this.ListPlaceProductByPlace({
            placeId: this.$route.params.placeId,
          });
        }
      })
      .then(r => {
        this.products = r;

        if (this.products.length == 1) {
          for (const index in this.products) {
            this.selectedProduct = this.products[index].product.id;
          }
        }

        this.loading = false;
      });
  },
  methods: {
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
      setSlotDCurrent: "slot/setSlotDCurrent",
      setSlotsH: "slot/setSlotsH",
      setSlotsM: "slot/setSlotsM",
      setProduct: "slot/setProduct",
    }),
    ...mapActions({
      GetPlace: "place/GetPlace",
      ListPlaceProductByPlace: "placeProvider/ListPlaceProductByPlace",
      GetSlotD: "slot/GetSlotD",
      ReloadSlotsD: "slot/ReloadSlotsD",
      ReloadSlotsH: "slot/ReloadSlotsH",
      ReloadSlotsM: "slot/ReloadSlotsM",
    }),
    dayClicked(slotD) {
      this.loadingHours = true;
      this.hoursLoaded = false;
      this.minutesLoaded = false;
      this.hour = false;
      this.currentSlotD = slotD;
      this.setSlotsH([]);
      this.ReloadSlotsH({
        placeId: this.$route.params.placeId,
        daySlotId: slotD.slotId,
      }).then(r2 => {
        if (r2) {
          this.day = slotD.slotId;

          this.loadingHours = false;
          this.hoursLoaded = true;
          this.dayVariant = "white";
          this.dayVariantText = "dark";
          this.hourVariant = "primary";
          this.hourVariantText = "white";
        }
      });
    },
    hourClicked(hour) {
      if (this.hourDisabled(hour)) return;
      this.loadingMinutes = true;
      this.minutesLoaded = false;
      this.setSlotsM([]);
      this.ReloadSlotsM({
        placeId: this.$route.params.placeId,
        daySlotId: hour.daySlotId,
        hourSlotId: hour.slotId,
      }).then(r2 => {
        if (r2) {
          this.hour = hour.slotId;
          this.loadingMinutes = false;
          this.minutesLoaded = true;
          this.dayVariant = "white";
          this.dayVariantText = "dark";
          this.hourVariant = "white";
          this.hourVariantText = "dark";
          this.minuteVariant = "primary";
          this.minuteVariantText = "white";
        }
      });
    },
    hourButtonStyle(hour) {
      if (this.hourDisabled(hour)) return "bg-danger";
      if (this.hour && this.hour === hour.slotId) return "btn-primary";
      return "btn-light";
    },
    hourDisabled(slotsH) {
      if (
        slotsH.registrations >=
        this.$store.state.place.currentPlace.limitPer1HourSlot
      ) {
        return true;
      }
      for (const index in this.$store.state.place.currentPlace
        .otherLimitations) {
        const limitation = this.$store.state.place.currentPlace
          .otherLimitations[index];
        const now = new Date(this.currentSlotD.time);
        const hour = slotsH.description.substr(0, 2);
        now.setUTCHours(hour - 1);
        if (
          moment(limitation.from).isSameOrBefore(now) &&
          moment(limitation.until).isAfter(now)
        ) {
          if (limitation.hourLimit <= slotsH.registrations) return true;
        }
      }

      return false;
    },

    hourLimit(slotsH) {
      let limit = this.$store.state.place.currentPlace.limitPer1HourSlot;

      for (const index in this.$store.state.place.currentPlace
        .otherLimitations) {
        const limitation = this.$store.state.place.currentPlace
          .otherLimitations[index];
        const now = new Date(this.currentSlotD.time);
        const hour = slotsH.description.substr(0, 2);
        now.setUTCHours(hour - 1);
        if (
          moment(limitation.from).isSameOrBefore(now) &&
          moment(limitation.until).isAfter(now)
        ) {
          if (limitation.hourLimit <= limit) limit = limitation.hourLimit;
        }
      }

      return limit;
    },
  },
};
</script>
<style lang="scss">
</style>