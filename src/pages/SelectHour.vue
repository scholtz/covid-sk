<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Vyberte si termín testovania</h1>
      </b-container>
    </div>
    <div class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6">
      <b-container>
        <h2>
          Vybrali ste si
          {{ $store.state.place.currentPlace.name }}, dňa
          {{ $store.state.slot.slotDCurrent.description }}
        </h2>
        <b-link
          :to="`/place/${$route.params.placeId}`"
          class="govuk-button m-0"
        >
          Zmeniť
        </b-link>
      </b-container>
    </div>

    <b-container class="my-4">
      <h2>V ktorú hodinu Vám to vyhovuje viac?</h2>
      <p>
        V prípade ak môžete prísť v ľubovoľný čas, uprednostnite termín s nižším
        počtom registrácií
      </p>
      <p v-for="hour in $store.state.slot.slotsH" :key="hour.from">
        <b-link
          :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${hour.slotId}`"
          class="govuk-button m-0"
        >
          Medzi <b>{{ hour.description }}</b> je aktuálne registrovaných
          {{ hour.registrations }} osôb
        </b-link>
      </p>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  mounted() {
    this.GetPlace({ id: this.$route.params.placeId })
      .then(r => {
        return r;
      })
      .then(r => {
        this.setCurrentPlace(r);
        return r;
      })
      // eslint-disable-next-line
      .then(r => {
        this.GetSlotD({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
        }).then(r2 => {
          console.log("r2", r2);
          this.setSlotDCurrent(r2);
        });
        return r;
      })
      .then(r => {
        this.ReloadSlotsH({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
        });
        return r;
      });
  },
  methods: {
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
      setSlotDCurrent: "slot/setSlotDCurrent",
    }),
    ...mapActions({
      GetPlace: "place/GetPlace",
    }),
    ...mapActions({
      ReloadSlotsH: "slot/ReloadSlotsH",
      GetSlotD: "slot/GetSlotD",
    }),
  },
};
</script>
<style lang="scss">
</style>