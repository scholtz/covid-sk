<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
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
        <p v-if="showing === 'map'">
          {{ $t("selectPlaceHelpMap") }}
        </p>
        <p v-if="showing === 'table'">
          {{ $t("selectPlaceHelpTable") }}
        </p>
      </b-container>
    </div>

    <b-container v-if="loading">
      <b-spinner /> {{ $t("selectPlaceLoadingData") }}
    </b-container>
    <div v-else>
      <div v-if="showing === 'map'" style="min-height: 500px; width: 100%">
        <b-container fluid>
          <b-row>
            <b-col>
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
                    <l-popup
                      :options="{ autoClose: true, closeOnClick: false }"
                    >
                      <h4 class="md-auto" style="text-align: center">
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
            <template #cell(lat)="row">
              {{ row.item.lat | formatGps }}
            </template>
            <template #cell(lng)="row">
              {{ row.item.lng | formatGps }}
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
import { mapActions } from "vuex";
import { LMap, LTileLayer, LPopup, LMarker, LLayerGroup } from "vue2-leaflet";

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
  },
  data() {
    return {
      availability: "all",
      category: "all",

      showing: "table",
      loading: true,
      fields: [
        {
          label: this.$i18n.t("selectPlaceAction"),
          key: "id",
        },
        {
          label: this.$i18n.t("selectPlacePlaceName"),
          key: "name",
          sortable: true,
        },
        {
          label: this.$t("selectPlaceAddress"),
          key: "address",
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
      ],
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
  },
};
</script>
<style lang="scss">
</style>