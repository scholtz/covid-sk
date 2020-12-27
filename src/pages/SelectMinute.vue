<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("selectMinuteTitle") }}</h1>
      </b-container>
    </div>
    <div class="app-pane-blue py-4">
      <b-container>
        <h2>
          {{
            $t("selectMinuteYourSelection", {
              place: $store.state.place.currentPlace.name,
              day: $store.state.slot.slotDCurrent.description,
              hour: $store.state.slot.slotHCurrent.description,
            })
          }}
        </h2>

        <b-link
          :to="`/place/${$route.params.placeId}/${$route.params.dayId}`"
          class="btn btn-light m-0"
        >
          {{ $t("change") }}
        </b-link>
      </b-container>
    </div>

    <b-container v-if="loading">
      <b-spinner /> {{ $t("loadingData") }}
    </b-container>
    <b-container class="my-4">
      <b-row>
        <b-col>
          <h2>{{ $t("selectMinuteQuestion") }}</h2>
          <p>
            {{ $t("selectMinuteHelp") }}
          </p>
          <p v-for="minute in $store.state.slot.slotsM" :key="minute.slotId">
            <b-link
              :disabled="
                minute.registrations >=
                $store.state.place.currentPlace.limitPer5MinSlot
              "
              :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${$route.params.hourId}/${minute.slotId}`"
              class="btn btn-primary m-0"
              v-bind:class="{
                'bg-danger':
                  minute.registrations >=
                  $store.state.place.currentPlace.limitPer5MinSlot,
              }"
            >
              {{
                $t("selectMinuteButtonText", {
                  description: minute.description,
                  registrations: minute.registrations,
                })
              }}
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