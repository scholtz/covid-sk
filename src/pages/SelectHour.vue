<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("selectHourTitle") }}</h1>
      </b-container>
    </div>
    <div class="app-pane-blue py-4">
      <b-container>
        <h2>
          {{
            $t("selectHourYourSelection", {
              place: $store.state.place.currentPlace.name,
              day: $store.state.slot.slotDCurrent.description,
            })
          }}
        </h2>
        <b-link
          :to="`/place/${$route.params.placeId}`"
          class="btn btn-light m-0"
        >
          {{ $t("change") }}
        </b-link>
      </b-container>
    </div>

    <b-container class="my-4">
      <h2>{{ $t("selectHourQuestion") }}</h2>
      <p>
        {{ $t("selectHourHelp") }}
      </p>
      <b-container v-if="loading">
        <b-spinner /> {{ $t("loadingData") }}
      </b-container>
      <p v-for="hour in $store.state.slot.slotsH" :key="hour.from">
        <b-link
          :disabled="
            hour.registrations >=
            $store.state.place.currentPlace.limitPer1HourSlot
          "
          :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${hour.slotId}`"
          class="btn btn-primary m-0"
          v-bind:class="{
            'bg-danger':
              hour.registrations >=
              $store.state.place.currentPlace.limitPer1HourSlot,
          }"
        >
          {{
            $t("selectHourButtonText", {
              description: hour.description,
              registrations: hour.registrations,
            })
          }}
        </b-link>
      </p>
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
        })
          // eslint-disable-next-line
          .then(r2 => {
            this.loading = false;
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