<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>
          {{ $t("mainTitle") }}
        </h1>
      </b-container>
    </div>

    <div class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6">
      <b-container>
        <h2>{{ $t("mainSubTitle") }}</h2>
      </b-container>
    </div>

    <div class="py-2">
      <b-container>
        <b-row>
          <b-col cols="12" md="6">
            <ol class="steps">
              <li>{{ $t("mainStep1") }}</li>
              <li>{{ $t("mainStep2") }}</li>
              <li>{{ $t("mainStep3") }}</li>
              <li>{{ $t("mainStep4") }}</li>
              <li>{{ $t("mainStep5") }}</li>
            </ol>

            <b-link
              to="/register"
              target="_self"
              role="button"
              draggable="false"
              class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
              data-module="govuk-button"
              >{{ $t("mainActionButton") }}
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
            <div>
              <div class="alert alert-danger">
                <b>{{ $t("mainTryText") }}</b>
              </div>
              <ul>
                <li>
                  {{ $t("mainTimeAtSampling") }} -
                  <b>{{ $t("mainTimeAtResult") }}</b>
                  {{ $t("mainTimeAtSeconds") }}
                </li>
                <li>{{ $t("mainNoQueues") }}</li>
                <li>{{ $t("mainGDPR") }}</li>
              </ul>
              <p>
                {{ $t("mainBrowserSupport") }}
              </p>
              <p>
                {{ $t("mainDemoAccounts") }}
                <b-table-simple>
                  <b-tr>
                    <b-th>{{ $t("mainLogin") }}</b-th>
                    <b-th>{{ $t("mainPassword") }}</b-th>
                  </b-tr>
                  <b-tr>
                    <b-td>RegistrationManager</b-td
                    ><b-td>!_b_59i?7E</b-td></b-tr
                  >
                  <b-tr> <b-td>MedicTester</b-td><b-td> 62f@Ok$XUV</b-td></b-tr>
                  <b-tr> <b-td>MedicLab</b-td><b-td>v@F?RvbR2O</b-td></b-tr>
                  <b-tr>
                    <b-td>DocumentManager</b-td><b-td>LwY@9bQx0M</b-td></b-tr
                  >
                </b-table-simple>
              </p>
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