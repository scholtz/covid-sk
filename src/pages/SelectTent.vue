<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <b-link
          v-if="showing === 'map'"
          class="pull-right govuk-button govuk-!-margin-right-3"
          @click="showing = 'table'"
          >Zobraziť tabuľku</b-link
        >
        <b-link
          v-if="showing === 'table'"
          class="pull-right govuk-button govuk-!-margin-right-3"
          @click="showing = 'map'"
          >Zobraziť mapu</b-link
        >
        <h1>Výber odberného miesta</h1>
        <p v-if="showing === 'map'">
          Vyberte si na mape odberné miesto, zobrazte podrobnosti a pokračujte
          kliknutím na tlačítko Vybrať.
        </p>
        <p v-if="showing === 'table'">
          Vyberte si z tabuľky odberné miesto a pokračujte kliknutím na tlačítko
          Vybrať.
        </p>
      </b-container>
    </div>

    <div v-if="showing === 'map'" style="min-height: 500px; width: 100%">
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
        <LTileLayer :url="url" :attribution="attribution" :options="options" />
        <LLayerGroup>
          <l-marker
            v-for="(place, placeId) in places"
            :key="placeId"
            :lat-lng="getLatLng(place)"
          >
            <l-popup :options="{ autoClose: true, closeOnClick: false }">
              <h4 class="md-auto" style="text-align: center">
                {{ place.name }}
              </h4>
              <p>Adresa: {{ place.address }}</p>
              <p>Registrácií: {{ place.registrations }}</p>
              <p>Má drive in: {{ place.isDriveIn }}</p>
              <p>Má walk in: {{ place.isWalkIn }}</p>
              <b-link :to="`/place/${place.id}`" class="govuk-button">
                Vybrať
              </b-link>
            </l-popup>
          </l-marker>
        </LLayerGroup>

        <l-marker
          v-if="lastClickLatLng.lat"
          :lat-lng="lastClickLatLng"
          @add="openPopup"
        >
          <l-popup :options="{ autoClose: false, closeOnClick: false }">
            <h4 class="md-auto" style="text-align: center">Map click</h4>
            <p>{{ lastClickLatLng.lat }}</p>
            <p>{{ lastClickLatLng.lng }}</p>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
    <b-table v-if="showing === 'table'" :items="places" :fields="fields">
      <template #cell(id)="row">
        <b-link :to="`/place/${row.value}`" class="govuk-button">
          Vybrať
        </b-link>
      </template>
    </b-table>
  </div>
</template>

<script>
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
      showing: "map",
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
          label: "Adresa",
          key: "address",
          sortable: true,
        },
        {
          key: "isDriveIn",
          label: "Možnosť prísť autom",
          sortable: true,
        },
        {
          key: "isWalkIn",
          label: "Možnosť prísť pešo",
          sortable: true,
        },
        {
          label: "GPS Lat",
          key: "lat",
          sortable: true,
        },
        {
          label: "GPS Lng",
          key: "lng",
          sortable: true,
        },
      ],
      places: [
        {
          id: "1",
          name: "Škola AA",
          address: "Bratislavská 1, Pezinok",
          lat: 48.28524902921143,
          lng: 17.256517410278324,
          isDriveIn: false,
          isWalkIn: true,
          registrations: 1500,
        },
        {
          id: "2",
          name: "Odberné miesto 2",
          address: "Pražská 11, Pezinok",
          lat: 48.29467191641477,
          lng: 17.26587295532227,
          isDriveIn: false,
          isWalkIn: true,
          registrations: 1233,
        },
        {
          id: "3",
          name: "Odberné miesto 3",
          address: "Pražská 10, Pezinok",
          lat: 48.289218275462225,
          lng: 17.272996902465824,
          isDriveIn: false,
          isWalkIn: true,
          registrations: 3233,
        },
      ],
      lastClickLatLng: [],
      zoom: 15,
      minZoom: 3,
      maxZoom: 18,
      center: [48.28986, 17.26664],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      options: {
        useCache: true,
        crossOrigin: true,
      },
    };
  },
  methods: {
    onMapClick(event) {
      this.lastClickLatLng = event.latlng;

      if (event === undefined) return;
      this.popupTarget.openPopup();
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