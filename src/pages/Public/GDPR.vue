<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("gdprTitle") }}</h1>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row>
        <b-col md="12">
          <b-form-checkbox v-model="full" name="check-button" switch>
            {{ $t("gdprShowLawyerVersion") }}
          </b-form-checkbox>
          <b-card no-body class="p-2 my-1">
            <div v-if="$store.state.config.GDRP_PDF">
              <b-card-title>
                <h2>{{ $t("gdprDetailsForEmployees") }}</h2>
              </b-card-title>
              <div class="short my-3 py-1">
                <a :href="'./files/' + $store.state.config.GDRP_PDF">{{
                  $store.state.config.GDRP_PDF
                }}</a>
              </div>
            </div>
            <b-card-title>
              <h2>{{ $t("gdprQ1") }}</h2>
            </b-card-title>
            <div class="short my-3 py-1">
              {{ $t("gdprA1Short") }}
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              {{ $t("gdprA1Long") }}
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            {{ $t("gdprA1PrinceplesInfo") }}:
            <ol>
              <li v-for="n in 5" :key="n">{{ $t(`gdprA1Princeple${n}`) }}</li>
            </ol>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprQ2") }}</h2>
            </b-card-title>

            <div class="short my-3 py-1">{{ $t("gdprA2Short") }}</div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              {{ $t("gdprA2Long") }}
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprQ3") }}</h2>
            </b-card-title>
            <div class="short my-3 py-1">
              {{ $t("gdprA3ShortA") }}
              {{ $store.state.config.GDRP_PREVADZKOVATEL }}
            </div>
            <div
              class="short my-3 py-1"
              v-if="$store.state.config.GDRP_SPROSTREDKOVATEL"
            >
              {{ $t("gdprA3ShortB") }}
              {{ $store.state.config.GDRP_SPROSTREDKOVATEL }}
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              {{ $t("gdprA3LongA") }}
              {{ $store.state.config.GDRP_PREVADZKOVATEL }}.
              <span v-if="$store.state.config.GDRP_SPROSTREDKOVATEL"
                >{{ $t("gdprA3LongB") }}
                {{ $store.state.config.GDRP_SPROSTREDKOVATEL }}.</span
              >
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprQ4") }}</h2>
            </b-card-title>

            <div class="short my-3 py-1">
              {{ $t("gdprA4Short") }}
              {{ $store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA }}
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              {{ $t("gdprA4Long") }}
              {{ $store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA }}.
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprQ5") }}</h2>
            </b-card-title>
            <div class="short my-3 py-1">
              {{ $t("gdprA5Short") }}
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              {{ $t("gdprA5Long") }}
            </div>
          </b-card>

          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprQ6") }}</h2>
            </b-card-title>
            <div class="short my-3 py-1">{{ $t("gdprA6Short") }}</div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              {{ $t("gdprA6Long") }}
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprQ7") }}</h2>
            </b-card-title>

            <div class="short my-3 py-1">
              {{ $t("gdprA7Short") }}
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              {{ $t("gdprA7Long") }}
            </div>
          </b-card>

          <b-card no-body class="p-2 my-1">
            {{ $t("gdprA7Info") }}
          </b-card>

          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprQ8") }}</h2>
            </b-card-title>

            <div
              v-if="$store.state.config.RC_IS_INSURANCE"
              class="short my-3 py-1"
            >
              {{ $t("gdprA8ShortIns") }}
            </div>
            <div v-else class="short my-3 py-1">
              {{ $t("gdprA8Short") }}
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>{{ $t("gdprAdditionalDetailsTitle") }}</h2>
            </b-card-title>

            <div class="short my-3 py-1">
              {{ $t("gdprAdditionalDetails") }}
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full: true,
    };
  },
};
</script>
