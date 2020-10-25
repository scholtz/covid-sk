<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Vyberte si temín testovania</h1>
      </b-container>
    </div>
    <div class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6">
      <b-container>
        <h2>
          Vybrali ste si {{ $route.params.placeId }}, dňa
          {{ $route.params.dayId }}
        </h2>
      </b-container>
    </div>

    <b-container class="my-4">
      <h2>V ktorú hodinu Vám to vyhovuje viac?</h2>
      <p>
        V prípade ak môžete prísť v ľubovoľný čas, uprednostnite termín s nižším
        počtom registrácií
      </p>
      <p v-for="hour in hours" :key="hour.from">
        <b-link
          :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${hour.from}`"
          class="govuk-button m-0"
        >
          Medzi <b>{{ hour.from }} a {{ hour.to }}</b> je aktuálne
          registrovaných {{ hour.registrations }} osôb
        </b-link>
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: [],
    };
  },
  mounted() {
    for (let i = 10; i < 18; i++) {
      this.hours.push({ from: i, to: i + 1, registrations: i });
    }
  },
};
</script>
<style lang="scss">
</style>