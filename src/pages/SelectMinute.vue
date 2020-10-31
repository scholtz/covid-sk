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
          {{ $store.state.slot.slotDCurrent.description }} medzi
          {{ $store.state.slot.slotHCurrent.description }}
        </h2>

        <b-link
          :to="`/place/${$route.params.placeId}/${$route.params.dayId}`"
          class="govuk-button m-0"
        >
          Zmeniť
        </b-link>
      </b-container>
    </div>

    <b-container v-if="loading"> <b-spinner /> Čítam údaje </b-container>
    <b-container class="my-4">
      <b-row>
        <b-col>
          <h2>Vyberte si ideálny čas odberu</h2>
          <p>
            V prípade ak môžete prísť v ľubovoľný čas, uprednostnite termín s
            nižším počtom registrácií
          </p>
          <p v-for="minute in $store.state.slot.slotsM" :key="minute.slotId">
            <b-link
              :disabled="
                minute.registrations >=
                $store.state.place.currentPlace.limitPer5MinSlot
              "
              :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${$route.params.hourId}/${minute.slotId}`"
              class="govuk-button m-0"
              v-bind:class="{
                'bg-danger':
                  minute.registrations >=
                  $store.state.place.currentPlace.limitPer5MinSlot,
              }"
            >
              Medzi
              <b>{{ minute.description }}</b>
              je aktuálne registrovaných {{ minute.registrations }} osôb
            </b-link>
          </p>
        </b-col>
      </b-row>
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
        return r;
      })
      .then(r => {
        this.setCurrentPlace(r);
        return r;
      })
      // eslint-disable-next-line
      .then(r => {
        return this.GetSlotD({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
        });
      })
      // eslint-disable-next-line
      .then(r => {
        this.setSlotDCurrent(r);
      })
      // eslint-disable-next-line
      .then(r => {
        return this.GetSlotH({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
          hourSlotId: this.$route.params.hourId,
        });
      })
      .then(r => {
        return this.setSlotHCurrent(r);
      })
      // eslint-disable-next-line
      .then(r => {
        return (
          this.ReloadSlotsM({
            placeId: this.$route.params.placeId,
            hourSlotId: this.$route.params.hourId,
          })
            // eslint-disable-next-line
            .then(r2 => {
              this.loading = false;
            })
        );
      });
  },
  methods: {
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
      setSlotDCurrent: "slot/setSlotDCurrent",
      setSlotHCurrent: "slot/setSlotHCurrent",
    }),
    ...mapActions({
      GetPlace: "place/GetPlace",
    }),
    ...mapActions({
      GetSlotD: "slot/GetSlotD",
      GetSlotH: "slot/GetSlotH",
      GetSlotM: "slot/GetSlotM",
      ReloadSlotsM: "slot/ReloadSlotsM",
    }),
  },
};
</script>
<style lang="scss">
</style>