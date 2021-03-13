<template>
  <div>
    <div v-if="$store.state.config.INTRO_TEXT" class="">
      <b-container fluid class="p-3">
        <b-row>
          <b-col>
            <div v-html="$store.state.config.INTRO_TEXT" />
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="app-pane-lgray py-2">
      <b-container fluid class="p-3">
        <b-link
          v-if="showing === 'map'"
          class="pull-right mr-2 btn btn-primary"
          @click="showing = 'table'"
          >{{ $t("selectPlaceShowTable") }}</b-link
        >
        <b-link
          v-if="showing === 'table'"
          class="pull-right mr-2 btn btn-primary"
          @click="showing = 'map'"
          >{{ $t("selectPlaceShowMap") }}</b-link
        >
        <!-- 
        <b-form-select class="pull-right mr-2 w-25" v-model="availability">
          <b-form-select-option value="all"
            >Dostupné aj nedostupné</b-form-select-option
          >
          <b-form-select-option value="today"
            >Dostupné dnes</b-form-select-option
          >
          <b-form-select-option value="tomorrow"
            >Dostupné zajtra</b-form-select-option
          >
          <b-form-select-option value="week"
            >Dostupné tento týždeň</b-form-select-option
          >
          <b-form-select-option value="month"
            >Dostupné do mesiaca</b-form-select-option
          >
        </b-form-select>
        <b-form-select class="pull-right mr-2 w-25" v-model="category">
          <b-form-select-option value="all">Všetky služby</b-form-select-option>
          <b-form-select-option value="pcr-doctor"
            >PCR na predpis</b-form-select-option
          >
          <b-form-select-option value="pcr-self"
            >PCR test - samoplatca</b-form-select-option
          >
          <b-form-select-option value="ant-doctor"
            >Antigénový test na predpis</b-form-select-option
          >
          <b-form-select-option value="ant-self"
            >Antigénový test - samoplatca</b-form-select-option
          >
          <b-form-select-option value="vac-doctor"
            >Vakcína na predpis</b-form-select-option
          >
          <b-form-select-option value="vac-self"
            >Vakcína - samoplatca</b-form-select-option
          >
        </b-form-select>
        -->
        <h1>{{ $t("selectPlaceTitle") }}</h1>

        <div v-if="showing === 'map' && $store.state.config.PROD === 'ruzinov.bratislava.sk' "
         v-html="$t('mapLegend')" />
        <div v-if="showing === 'map' && $store.state.config.PROD != 'ruzinov.bratislava.sk' "
         v-html="$t('mapLegendShort')" />
        

        <p v-if="showing === 'table'">
          {{ $t("selectPlaceHelpTable") }}
        </p>
      </b-container>
    </div>

    <b-container v-if="loading">
      <b-spinner /> {{ $t("selectPlaceLoadingData") }}
    </b-container>
    <div v-else>
      <div
        v-if="showing === 'map'"
        style="min-height: 500px; width: 100%; padding: 10px"
      >
        <b-container fluid>
          <b-row>
            <b-col class="m-2">
              <l-map
                id="map"
                ref="map"
                v-resize="onResize"
                :zoom="zoom"
                :min-zoom="minZoom"
                :max-zoom="maxZoom"
                :center="center"
                @click="onMapClick"
                style="min-height: 800px; width: 100%"
              >
                <LTileLayer
                  :url="url"
                  :attribution="attribution"
                  :options="options"
                />
                <LLayerGroup v-if="this.$store.state.place.places">
                  <l-marker
                    v-for="(place, placeId) in $store.state.place.places"
                    :key="placeId"
                    :lat-lng="getLatLng(place)"
                  >
                    <l-icon :icon-url="getIcon(place)" />
                    <l-popup
                      :options="{ autoClose: true, closeOnClick: false }"
                    >
                      <h4
                        class="md-auto"
                        style="text-align: center; min-width: 150px"
                      >
                        {{ place.name }}
                      </h4>
                      <div style="font-size: smaller; color: #999">
                        Lat: {{ place.lat | formatGps }} Lng:
                        {{ place.lng | formatGps }}
                      </div>
                      <p>{{ $t("selectPlaceAddress") }}: {{ place.address }}</p>
                      <p>
                        {{ $t("selectPlaceRegistrations") }}:
                        {{ place.registrations }}
                      </p>
                      <p>
                        {{ $t("selectPlaceDriveIn") }}:
                        {{ place.isDriveIn === true ? $t("yes") : $t("no") }}
                      </p>
                      <p>
                        {{ $t("selectPlaceWalkIn") }}:
                        {{ place.isWalkIn === true ? $t("yes") : $t("no") }}
                      </p>
                      <p>
                        {{ $t("registrationIsRequired") }}:
                        {{
                          place.requiresRegistration === true
                            ? $t("yes")
                            : $t("no")
                        }}

                        <a
                          class="btn btn-light m-2"
                          v-if="place.externalReservationSystem"
                          :href="place.externalReservationSystem"
                        >
                          {{ trimLink(place.externalReservationSystem) }}
                        </a>
                      </p>
                      <p v-if="place.description">
                        {{ place.description }}
                      </p>
                      <b-link
                        :to="`/place/${place.id}`"
                        class="btn btn-primary"
                        style="color: #fff !important"
                      >
                        {{ $t("selectPlaceSelect") }}
                      </b-link>
                    </l-popup>
                  </l-marker>
                </LLayerGroup>
              </l-map>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div v-if="$store.state.place.places">
        <div class="table-responsive my-4">
          <b-table
            v-if="showing === 'table'"
            :items="Object.values($store.state.place.places)"
            :fields="fields"
          >
            <template #cell(id)="row">
              <b-link
                :to="`/place/${row.value}`"
                class="btn btn-primary btn-sm"
              >
                {{ $t("selectPlaceSelect") }}
              </b-link>
            </template>

            <template #cell(isDriveIn)="row">
              <b-form-checkbox disabled v-model="row.item.isDriveIn">
                <span v-if="row.item.isDriveIn">{{ $t("yes") }}</span>
                <span v-if="!row.item.isDriveIn">{{ $t("no") }}</span>
              </b-form-checkbox>
            </template>
            <template #cell(hasReservationSystem)="row">
              <b-form-checkbox disabled v-model="row.item.hasReservationSystem">
                <span v-if="row.item.hasReservationSystem">{{
                  $t("yes")
                }}</span>
                <span v-if="!row.item.hasReservationSystem">{{
                  $t("no")
                }}</span>
              </b-form-checkbox>
            </template>
            <template #cell(requiresRegistration)="row">
              <b-form-checkbox disabled v-model="row.item.requiresRegistration">
                <span v-if="row.item.requiresRegistration">{{
                  $t("yes")
                }}</span>
                <span v-if="!row.item.requiresRegistration">{{
                  $t("no")
                }}</span>
              </b-form-checkbox>
            </template>
            <template #cell(lat)="row">
              {{ row.item.lat | formatGps }}
            </template>
            <template #cell(lng)="row">
              {{ row.item.lng | formatGps }}
            </template>
            <template #cell(queue)="row">
              <span
                v-if="
                  row.item.queue &&
                  moment(row.item.queue, 'HH:mm:ss') >
                    moment('08:00:00', 'HH:mm:ss')
                "
                >Zatvorené</span
              >
              <span
                v-else-if="
                  !row.item.queue ||
                  (row.item.queue &&
                    moment(row.item.queue, 'HH:mm:ss') ===
                      moment('00:00:00', 'HH:mm:ss'))
                "
              ></span>
              <span v-else>
                {{ row.item.queue | formatDateTime }}
              </span>

              <span
                v-if="
                  !row.item.queue ||
                  (row.item.queue &&
                    moment(row.item.queue, 'HH:mm:ss') ===
                      moment('00:00:00', 'HH:mm:ss'))
                "
              >
              </span>
              <span
                v-else-if="
                  moment(row.item.queue, 'HH:mm:ss') <=
                  moment('00:05:00', 'HH:mm:ss')
                "
              >
                <img src="../../public/images/lights-green.png" alt="Green" />
              </span>
              <span
                v-else-if="
                  moment(row.item.queue, 'HH:mm:ss') <=
                  moment('00:30:00', 'HH:mm:ss')
                "
              >
                <img src="../../public/images/lights-yellow.png" alt="Yellow" />
              </span>
              <span v-else>
                <img src="../../public/images/lights-red.png" alt="Red" />
              </span>
            </template>
            <template #cell(queueLastUpdate)="row">
              {{ row.item.queueLastUpdate | formatDateTime }}
            </template>
            <template #cell(isWalkIn)="row">
              <b-form-checkbox disabled v-model="row.item.isWalkIn">
                <span v-if="row.item.isWalkIn">{{ $t("yes") }}</span>
                <span v-if="!row.item.isWalkIn">{{ $t("no") }}</span>
              </b-form-checkbox>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
import {
  LMap,
  LTileLayer,
  LPopup,
  LMarker,
  LLayerGroup,
  LIcon,
} from "vue2-leaflet";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LMarker,
    LLayerGroup,
    LIcon,
  },
  data() {
    return {
      availability: "all",
      category: "all",

      showing: "table",
      loading: true,
      fields: [],
      lastClickLatLng: [],
      zoom: this.$store.state.config.MAP_ZOOM,
      minZoom: 3,
      maxZoom: 18,
      center: [
        this.$store.state.config.MAP_LAT,
        this.$store.state.config.MAP_LNG,
      ],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      options: {
        useCache: true,
        crossOrigin: true,
      },
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  watch: {
    locale() {
      console.log("this.$i18n.locale", this.$i18n.locale);
      this.setFields();
    },
    availability() {
      this.loading = true;
      this.ReloadPlaces({
        availability: this.availability,
        category: this.category,
      }).then(r => {
        if (r) {
          this.loading = false;
        }
      });
    },
    category() {
      this.loading = true;
      this.ReloadPlaces({
        availability: this.availability,
        category: this.category,
      }).then(r => {
        if (r) {
          this.loading = false;
        }
      });
    },
  },
  mounted() {
    // eslint-disable-next-line
    this.loading = true;
    this.showing = this.$store.state.config.DEFAULT_VIEW;
    this.setFields();
    this.ReloadPlaces({
      availability: this.availability,
      category: this.category,
    }).then(r => {
      if (r) {
        this.loading = false;
      }
    });
  },
  methods: {
    ...mapActions({
      ReloadPlaces: "place/ReloadPlacesWithFilter",
    }),
    setFields() {
      if (this.$store.state.config.DEFAULT_HIDE_HEALTH_STATUS) {
        this.fields = [
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
            label: this.$t("selectPlaceAddress"),
            key: "address",
            sortable: true,
          },
          {
            key: "hasReservationSystem",
            label: this.$t("hasReservationSystem"),
            sortable: true,
          },
          {
            key: "requiresRegistration",
            label: this.$t("registrationIsRequired"),
            sortable: true,
          },
          {
            key: "isDriveIn",
            label: this.$t("selectPlaceDriveIn"),
            sortable: true,
          },
          {
            key: "isWalkIn",
            label: this.$t("selectPlaceWalkIn"),
            sortable: true,
          },
          {
            label: this.$t("selectPlaceLat"),
            key: "lat",
            sortable: true,
          },
          {
            label: this.$t("selectPlaceLng"),
            key: "lng",
            sortable: true,
          },
          {
            key: "limitPer5MinSlot",
            label: this.$t("selectPlace5MinLimit"),
            sortable: true,
          },
          {
            key: "limitPer1HourSlot",
            label: this.$t("selectPlace1HourLimit"),
            sortable: true,
          },
          {
            label: this.$t("selectPlaceRegistrations"),
            key: "registrations",
            sortable: true,
          },
        ];
      } else {
        this.fields = [
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
            label: this.$t("selectPlaceAddress"),
            key: "address",
            sortable: true,
          },
          {
            key: "hasReservationSystem",
            label: this.$t("hasReservationSystem"),
            sortable: true,
          },
          {
            key: "requiresRegistration",
            label: this.$t("registrationIsRequired"),
            sortable: true,
          },
          {
            key: "isDriveIn",
            label: this.$t("selectPlaceDriveIn"),
            sortable: true,
          },
          {
            key: "isWalkIn",
            label: this.$t("selectPlaceWalkIn"),
            sortable: true,
          },
          {
            label: this.$t("selectPlaceLat"),
            key: "lat",
            sortable: true,
          },
          {
            label: this.$t("selectPlaceLng"),
            key: "lng",
            sortable: true,
          },
          {
            key: "limitPer5MinSlot",
            label: this.$t("selectPlace5MinLimit"),
            sortable: true,
          },
          {
            key: "limitPer1HourSlot",
            label: this.$t("selectPlace1HourLimit"),
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
        ];
      }
    },
    onMapClick(event) {
      this.lastClickLatLng = event.latlng;

      if (event === undefined) return;
      // this.popupTarget.openPopup();
    },
    openPopup(event) {
      if (event === undefined) return;
      const self = this;
      this.popupTarget = event.target;
      this.$nextTick(function () {
        self.popupTarget.openPopup();
      });
    },
    onResize() {
      if (this.$refs.map !== undefined && this.$refs.map !== null) {
        if (
          this.$refs.map.mapObject !== undefined &&
          this.$refs.map.mapObject !== null
        ) {
          this.$refs.map.mapObject.invalidateSize();
        }
      }
    },
    getLatLng(branch) {
      if (!branch) return { lat: 0, lng: 0 };
      return { lat: branch.lat, lng: branch.lng };
    },
    getIcon(place) {
      const curTime = new Date();
      if (curTime.getHours() >= 18 || curTime.getHours() < 8) {
        if (place.hasReservationSystem) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_orange.png";
        } else if (place.externalReservationSystem) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_gray_01.png";
        } else {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_blue.png";
        }
      }
      if (place.hasReservationSystem) {
        if (!place.queue) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_orange.png";
        } else if (
          moment(place.queue, "HH:mm:ss") <= moment("00:05:00", "HH:mm:ss")
        ) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_orange.png";
        } else if (
          moment(place.queue, "HH:mm:ss") <= moment("00:30:00", "HH:mm:ss")
        ) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_orange.png";
        } else {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_orange.png";
        }
      }
      if (place.externalReservationSystem) {
        if (!place.queue) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_gray_01.png";
        } else if (
          moment(place.queue, "HH:mm:ss") <= moment("00:05:00", "HH:mm:ss")
        ) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_gray_max_5min.png";
        } else if (
          moment(place.queue, "HH:mm:ss") <= moment("00:30:00", "HH:mm:ss")
        ) {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_gray_max_30min.png";
        } else {
          return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_gray_over_30min.png";
        }
      }
      if (!place.queue) {
        return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_blue.png";
      } else if (
        moment(place.queue, "HH:mm:ss") <= moment("00:05:00", "HH:mm:ss")
      ) {
        return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_blue_max_5min.png";
      } else if (
        moment(place.queue, "HH:mm:ss") <= moment("00:30:00", "HH:mm:ss")
      ) {
        return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_blue_max_30min.png";
      } else {
        return "https://cdnsitestoragecovid.blob.core.windows.net/web/images/icons/map_icon_blue_over_30min.png";
      }
    },
    trimLink(place) {
      if (!place) return place;
      console.log(place);
      if (place.length <= 35) {
        return place;
      } else {
        return place.substring(0, 35) + "..";
      }
    },
    moment(time, format) {
      return moment(time, format);
    },
  },
};
</script>
<style lang="scss">
</style>