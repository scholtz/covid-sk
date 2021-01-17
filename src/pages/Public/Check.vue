<template>
  <div>
    <div class="app-pane-lgray p-5">
      <b-container
        ><b-row
          ><b-col><h1>Overenie testu</h1></b-col></b-row
        ></b-container
      >
    </div>
    <b-container v-if="loading">
      <b-row>
        <b-col> <b-spinner label="Čítam údaje..." /> </b-col>
      </b-row>
    </b-container>
    <b-container v-if="!loading">
      <b-row>
        <b-col>
          <table v-if="result.id">
            <tr>
              <th>Kód výsledku:</th>
              <td>{{ result.id }}</td>
            </tr>
            <tr>
              <th>Meno testovanej osoby:</th>
              <td>{{ result.name }}</td>
            </tr>
            <tr>
              <th>Výsledok:</th>
              <td>
                {{ result.result }}
                <b-badge variant="success" v-if="result.result === 'negative'"
                  >Testovaná osoba je pravdepodobne zdravá</b-badge
                >
                <b-badge variant="danger" v-if="result.result === 'positive'"
                  >Testom bol preukázaný COVID</b-badge
                >
              </td>
            </tr>
            <tr>
              <th>Čas odberu vzorky:</th>
              <td>{{ result.time | formatDateTime }}</td>
            </tr>
            <tr>
              <th>Test vykonal:</th>
              <td>{{ result.testingEntity }}</td>
            </tr>
            <tr>
              <th>Adresa výkonu testu:</th>
              <td>{{ result.testingAddress }}</td>
            </tr>
          </table>
          <div v-else class="alert alert-danger my-4">
            Tento test je neplatný alebo bol vykonaný skôr ako týždeň dozadu
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