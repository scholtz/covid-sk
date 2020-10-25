<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>
          Na tejto stránke sa môžete zaregistrovať k odberu vzorky pre hromadné
          testovanie populácie proti chorobe covid-19
        </h1>
      </b-container>
    </div>

    <div class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6">
      <b-container>
        <h2>
          <img
            src="../assets/images/pezinok.svg"
            width="80px"
            class="float-right"
          />
          Táto aplikácia bola vytvorená pre mesto Pezinok a všetky odberné
          miesta ktoré sú mestom spravované
        </h2>
      </b-container>
    </div>

    <div class="py-2">
      <b-container>
        <b-row>
          <b-col cols="12" md="6">
            <ol class="steps">
              <li>Výber odberného miesta</li>
              <li>Registrácia ku konkrétnemu času</li>
              <li>Reálny odber vzorky</li>
              <li>Výsledky testu</li>
            </ol>

            <b-link
              to="/register"
              target="_self"
              role="button"
              draggable="false"
              class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
              data-module="govuk-button"
              >Začnite výberom odberného miesta
              <svg
                class="govuk-button__start-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="17.5"
                height="19"
                viewBox="0 0 33 40"
                role="presentation"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M0 0h13l20 20-20 20H0l20-20z"
                /></svg
            ></b-link>
          </b-col>
          <b-col cols="12" md="6">
            <div class="alert alert-danger">
              <p><b>POZOR!!! Táto webstránke je vo vývoji.</b></p>
              <p>Zoznam plánovaných vylepšení:</p>
              <ul>
                <li>FE: Multijazyčnosť</li>
                <li>FE: Výsledky testovania</li>
                <li>FE: Validácia prvkov v registračnom formulári</li>
                <li>BE: Napojenie na emailový server</li>
                <li>BE: Autorizácia</li>
                <li>BE: Napojenie na sms bránu</li>
                <li>BE: Api pre scannery</li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
</style>