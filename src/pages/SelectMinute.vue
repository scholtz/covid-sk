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
          {{ $route.params.dayId }}, medzi {{ $route.params.hourId }}:00 a
          {{ `${parseInt($route.params.hourId) + 1}` }}:00
        </h2>
      </b-container>
    </div>

    <b-container class="my-4">
      <h2>V ktorú hodinu Vám to vyhovuje viac?</h2>
      <p>
        V prípade ak môžete prísť v ľubovoľný čas, uprednostnite termín s nižším
        počtom registrácií
      </p>
      <p v-for="minute in minutes" :key="minute.from">
        <b-link
          :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${$route.params.hourId}/${minute.from}`"
          class="govuk-button m-0"
        >
          Medzi
          <b
            >{{ $route.params.hourId }}:{{ minute.from }} a
            {{ $route.params.hourId }}:{{ minute.to }}</b
          >
          je aktuálne registrovaných {{ minute.registrations }} osôb
        </b-link>
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minutes: [],
    };
  },
  mounted() {
    for (let i = 0; i < 60; i = i + 5) {
      this.minutes.push({ from: i, to: i + 5, registrations: i });
    }
  },
};
</script>
<style lang="scss">
</style>