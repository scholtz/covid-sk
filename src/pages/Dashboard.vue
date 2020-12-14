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
            <div class="card">
              <div class="card-header text-dark bg-light">
                Chcem sa testovať
              </div>
              <div class="card-body">
                <ol class="steps">
                  <li>{{ $t("mainStep1") }}</li>
                  <li>{{ $t("mainStep2") }}</li>
                  <li>{{ $t("mainStep3") }}</li>
                  <li>{{ $t("mainStep4") }}</li>
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

                <div v-html="$t('mainHelpPerson')" />
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="card">
              <div class="card-header text-white bg-primary">
                {{ $t("mainDoctor") }}
              </div>
              <div class="card-body">
                <ol class="steps">
                  <li>{{ $t("mainDoctorStep1") }}</li>
                  <li>{{ $t("mainDoctorStep2") }}</li>
                  <li>{{ $t("mainDoctorStep3") }}</li>
                  <li>{{ $t("mainDoctorStep4") }}</li>
                </ol>

                <b-link
                  to="/registerPlaceProvider"
                  target="_self"
                  role="button"
                  draggable="false"
                  class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
                  data-module="govuk-button"
                  >{{ $t("mainActionMedicButton") }}
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
                <div v-html="$t('mainDoctorHelp')" />
              </div>
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