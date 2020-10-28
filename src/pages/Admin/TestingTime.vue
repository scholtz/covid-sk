<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Nastavenie času testovania</h1>
      </b-container>
    </div>
    <b-container>
      <h2>Vytvoriť sloty pre konrkétny čas</h2>
      <b-row>
        <b-col cols="12" md="12">
          <label for="day">Deň</label>
          <b-input v-model="day" ref="day" id="day" />
        </b-col>
        <b-col cols="12" md="6">
          <label for="from">Od hodiny</label>
          <b-input v-model="from" ref="from" id="from" />
        </b-col>
        <b-col cols="12" md="6">
          <label for="until">Do hodiny</label>
          <b-input v-model="until" ref="until" id="until" />
        </b-col>
      </b-row>
      <button @click="checkClick" class="govuk-button m-2">Check</button>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      day: "2020-10-31T00:00:00+00:00",
      from: 9,
      until: 12,
    };
  },
  mounted() {},
  methods: {
    ...mapActions({
      CheckSlots: "place/CheckSlots",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    checkClick() {
      this.CheckSlots({
        day: this.day,
        from: this.from,
        until: this.until,
      }).then(r => {
        if (r) {
          this.openSuccess("Uložené " + r);
        }
      });
    },
  },
};
</script>
<style lang="scss">
</style>