<template>
  <div>
    <div class="app-pane-lgray p-5">
      <b-container
        ><b-row
          ><b-col
            ><h1>{{ $t("checkTitle") }}</h1></b-col
          ></b-row
        ></b-container
      >
    </div>
    <b-container v-if="loading">
      <b-row>
        <b-col> <b-spinner :label="$t('checkLoadingData')" /> </b-col>
      </b-row>
    </b-container>
    <b-container v-if="!loading">
      <b-row>
        <b-col>
          <table v-if="result.id">
            <tr>
              <th>{{ $t("checkResultCode") }}:</th>
              <td>{{ result.id }}</td>
            </tr>
            <tr>
              <th>{{ $t("checkTestedPersonName") }}:</th>
              <td>{{ result.name }}</td>
            </tr>
            <tr v-if="result.result">
              <th>{{ $t("checkResultCode") }}:</th>
              <td>
                {{ result.result }}
                <b-badge
                  variant="success"
                  v-if="result.result === 'negative'"
                  >{{ $t("checkNegativeMessage") }}</b-badge
                >
                <b-badge variant="danger" v-if="result.result === 'positive'">{{
                  $t("checkPositiveMessage")
                }}</b-badge>
              </td>
            </tr>
            <tr>
              <th>{{ $t("checkTestTime") }}:</th>
              <td>{{ result.time | formatDateTime }}</td>
            </tr>
            <tr>
              <th>{{ $t("checkTestedBy") }}:</th>
              <td>{{ result.testingEntity }}</td>
            </tr>
            <tr>
              <th>{{ $t("checkTestingAddress") }}:</th>
              <td>{{ result.testingAddress }}</td>
            </tr>
          </table>
          <div v-else class="alert alert-danger my-4">
            {{ $t("checkTestInvalidMessage") }}
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      result: {},
      loading: true,
    };
  },
  mounted() {
    this.VerifyResult({ id: this.$route.params.id }).then(r => {
      console.log("this.result", this.result, r);
      if (r) {
        this.result = r;
      } else {
        this.result = {};
      }
      this.loading = false;
    });
  },

  methods: {
    ...mapActions({
      VerifyResult: "result/VerifyResult",
    }),
  },
};
</script>
