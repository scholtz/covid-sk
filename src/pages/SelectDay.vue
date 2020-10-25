<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Vyberte si termín testovania</h1>
      </b-container>
    </div>

    <div
      class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6"
      v-if="$store.state.place.currentPlace"
    >
      <b-container>
        <h2>
          Vybrali ste si
          {{ $store.state.place.currentPlace.name }}
        </h2>

        <b-link :to="`/register`" class="govuk-button m-0"> Zmeniť </b-link>
      </b-container>
    </div>
    <b-container class="my-4">
      <h2>V ktorý deň Vám návšteva odberného miesta vyhovuje viac?</h2>
      <p>
        V prípade ak môžete prísť v oba termíny, uprednostnite prosím prvý
        termín
      </p>
      <div v-for="slotD in $store.state.slot.slotsD" :key="slotD.slotId">
        <b-link
          :to="`/place/${$route.params.placeId}/${slotD.slotId}`"
          class="govuk-button"
        >
          Dňa {{ slotD.description }} je aktuálne registrovaných
          {{ slotD.registrations }} osôb
        </b-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  mounted() {
    this.GetPlace({ id: this.$route.params.placeId })
      .then(r => {
        this.setCurrentPlace(r);
        return r;
      })
      // eslint-disable-next-line
      .then(r => {
        return this.ReloadSlotsD({ placeId: this.$route.params.placeId });
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