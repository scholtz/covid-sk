<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("selectDayTitle") }}</h1>
      </b-container>
    </div>

    <div class="app-pane-blue py-4" v-if="$store.state.place.currentPlace">
      <b-container>
        <h2>
          {{
            $t("selectDayYourSelection", {
              place: $store.state.place.currentPlace.name,
            })
          }}
        </h2>
        <p>Adresa: {{ $store.state.place.currentPlace.address }}</p>
        <p>
          GPS: Lat: {{ $store.state.place.currentPlace.lat | formatGps }} Lng:
          {{ $store.state.place.currentPlace.lng | formatGps }}
        </p>
        <p>
          Má drive in:
          <span v-if="$store.state.place.currentPlace.isDriveIn">Áno</span>
          <span v-else>Nie</span>
        </p>
        <p>
          Možnosť prísť pešo:
          <span v-if="$store.state.place.currentPlace.isWalkIn">Áno</span>
          <span v-else>Nie</span>
        </p>
        <p>
          5 minútový limit:
          {{ $store.state.place.currentPlace.limitPer5MinSlot }}
        </p>
        <p>
          Hodinový limit:
          {{ $store.state.place.currentPlace.limitPer1HourSlot }}
        </p>
        <p v-if="$store.state.place.currentPlace.description">
          Popis: {{ $store.state.place.currentPlace.description }}
        </p>
        <b-link :to="`/register`" class="btn btn-light m-0"
          >{{ $t("change") }}
        </b-link>
      </b-container>
    </div>
    <b-container
      class="my-4"
      v-if="!$store.state.place.currentPlace.placeProviderId"
    >
      <h2>Čakáme, kým si odberné miesto vyberie naše super služby</h2>
      <p>
        Odberné miesto zatiaľ nie je registrované v našom registračnom systéme.
        Ak poznáte správcu tohto odberného miesta, prosím dajte mu vedieť o
        našich službách.
      </p>
      <b-link :to="`/registerPlaceProvider`" class="btn btn-primary"
        >16 dôvodov prečo použiť náš rezervačný systém
      </b-link>
    </b-container>
    <b-container
      class="my-4"
      v-if="$store.state.place.currentPlace.placeProviderId"
    >
      <h2>{{ $t("selectDayQuestion") }}</h2>
      <p>
        {{ $t("selectDayHelp") }}
      </p>
      <b-container v-if="loading">
        <b-spinner /> {{ $t("loadingData") }}
      </b-container>
      <div v-for="slotD in $store.state.slot.slotsD" :key="slotD.slotId">
        <b-link
          :to="`/place/${$route.params.placeId}/${slotD.slotId}`"
          class="btn btn-primary my-1"
          >{{
            $t("selectDayButtonText", {
              description: slotD.description,
              registrations: slotD.registrations,
            })
          }}
        </b-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.GetPlace({ id: this.$route.params.placeId })
      .then(r => {
        this.setCurrentPlace(r);
        return r;
      })
      // eslint-disable-next-line
      .then(r => {
        return this.ReloadSlotsD({ placeId: this.$route.params.placeId });
      })
      // eslint-disable-next-line
      .then(r => {
        this.loading = false;
      });
  },
  methods: {
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
    }),
    ...mapActions({
      GetPlace: "place/GetPlace",
    }),
    ...mapActions({
      ReloadSlotsD: "slot/ReloadSlotsD",
      GetSlotD: "slot/GetSlotD",
    }),
  },
};
</script>
<style lang="scss">
</style>