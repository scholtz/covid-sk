<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("selectDayTitle") }}</h1>
      </b-container>
    </div>

    <div
      class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6"
      v-if="$store.state.place.currentPlace"
    >
      <b-container>
        <h2>
          {{
            $t("selectDayYourSelection", {
              place: $store.state.place.currentPlace.name,
            })
          }}
        </h2>

        <b-link :to="`/register`" class="govuk-button m-0"
          >{{ $t("change") }}
        </b-link>
      </b-container>
    </div>
    <b-container class="my-4">
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
          class="govuk-button"
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