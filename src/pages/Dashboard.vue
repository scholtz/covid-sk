<template>
  <div>
    <div class="app-pane-lgray p-5">
      <b-container fluid>
        <h1>
          {{ $t("mainTitle") }}
        </h1></b-container
      >
    </div>

    <div class="app-pane-blue p-5">
      <b-container fluid>
        <h5>{{ $t("mainSubTitle") }}</h5>
      </b-container>
    </div>

    <div class="py-2">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="6" class="py-5 pr-3 pl-5">
            <b-carousel id="carousel-1" :interval="4000" controls indicators>
              <b-carousel-slide
                img-src="https://cdnsitestoragecovid.blob.core.windows.net/web/images/carousel/map.png"
              >
                <b-link
                  to="/registerPlaceProvider"
                  class="opacity-8 btn btn-light"
                  >{{ $t("mainC1") }}</b-link
                >
              </b-carousel-slide>
              <b-carousel-slide
                img-src="https://cdnsitestoragecovid.blob.core.windows.net/web/images/carousel/place-management.png"
              >
                <b-link to="/login" class="opacity-8 btn btn-light">{{
                  $t("mainC2")
                }}</b-link>
              </b-carousel-slide>
              <b-carousel-slide
                img-src="https://cdnsitestoragecovid.blob.core.windows.net/web/images/carousel/opening-hours.png"
              >
                <b-link to="/login" class="opacity-9 btn btn-light">{{
                  $t("mainC3")
                }}</b-link>
              </b-carousel-slide>
              <b-carousel-slide
                img-src="https://cdnsitestoragecovid.blob.core.windows.net/web/images/carousel/human-resources-management.png"
              >
                <b-link to="/login" class="opacity-9 btn btn-light"
                  >{{ $t("mainC4") }}v</b-link
                >
              </b-carousel-slide>
            </b-carousel>
          </b-col>
          <b-col cols="12" md="3" class="py-5 pr-3 pl-3">
            <div class="card">
              <div class="card-header text-dark bg-light">
                <h5>{{ $t("mainStepTitle") }}</h5>
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
                  class="my-4 btn btn-light"
                  >{{ $t("mainActionButton") }}
                  <svg
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
          <b-col cols="12" md="3" class="py-5 pr-5 pl-3">
            <div class="card">
              <div class="card-header text-white bg-primary">
                <h5>{{ $t("mainDoctor") }}</h5>
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
                  class="my-4 btn btn-primary"
                  >{{ $t("mainActionMedicButton") }}
                  <svg
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
export default {
  mounted() {
    if (this.$store.state.config.DEDICATED_PLACE) {
      this.$router.push("/register");
    }
  },
};
</script>
<style lang="scss">
</style>