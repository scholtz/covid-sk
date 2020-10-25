<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Vyberte si temín testovania</h1>
      </b-container>
    </div>
    <b-container class="my-4">
      <h2>Ktorý deň Vám to vyhovuje viac?</h2>
      <p>
        V prípade ak môžete prísť v oba termíny, uprednostnite prosím prvý
        termín
      </p>
      <p>
        <b-link :to="`/place/${$route.params.placeId}/1`" class="govuk-button">
          V piatok, 31.10. je aktuálne registrovaných 233 osôb
        </b-link>
      </p>
      <p>
        <b-link :to="`/place/${$route.params.placeId}/2`" class="govuk-button">
          V sobotu, 1.11. je aktuálne registrovaných 120 osôb
        </b-link>
      </p>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
</style>