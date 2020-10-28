<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Oznámenie výsledku testu</h1>
      </b-container>
    </div>
    <b-container v-if="action === 'select'">
      <h2>Vyberte čo idete nascanovať</h2>
      <b-row>
        <b-col>
          <button class="my-2 govuk-button bg-danger" @click="action = 'sick'">
            Idem nascanovať pozitívne výsledky testov - Chorí na Covid-19
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button
            class="my-2 govuk-button bg-warning text-dark"
            @click="action = 'repeat'"
          >
            Idem nascanovať chybné výsledky testov - Na pretestovanie
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button
            class="my-2 govuk-button bg-success"
            @click="action = 'healthy'"
          >
            Idem nascanovať negatívne výsledky testov - Zdraví
          </button>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="action === 'sick'">
      <button class="float-right bg-light my-2" @click="action = 'select'">
        Zrušiť
      </button>
      <h2>Vyberáte pozitívne nálezy - Chorí</h2>
    </b-container>
    <b-container v-if="action === 'repeat'">
      <button class="float-right bg-light my-2" @click="action = 'select'">
        Zrušiť
      </button>
      <h2>Vyberáte chybné nálezy - Zopakovať test</h2>
    </b-container>
    <b-container v-if="action === 'healthy'">
      <button class="float-right bg-light my-2" @click="action = 'select'">
        Zrušiť
      </button>
      <h2>Vyberáte negatívne nálezy - Zdraví</h2>
    </b-container>
    <b-container v-if="action !== 'select'">
      <b-row>
        <b-col cols="12">
          <label for="next">Ďalší kód</label>
          <b-input v-model="next" ref="next" id="next" />
          <button
            class="govuk-button my-2"
            @click="data.push({ code: next, state: 'Na odoslanie' })"
          >
            Pridaj
          </button>
        </b-col>
      </b-row>

      <b-table :items="data" :fields="fields">
        <template #cell(id)="row">
          <button
            @click="data.splice(row.index, 1)"
            class="govuk-button m-2 bg-light"
          >
            Zrušiť
          </button>
        </template>
      </b-table>

      <b-container v-if="action === 'sick'">
        <button class="govuk-button my-2" @click="send">
          Oznámiť pozitívne prípady
        </button>
      </b-container>
      <b-container v-if="action === 'repeat'">
        <button class="govuk-button my-2" @click="send">
          Oznámiť chybné prípady
        </button>
      </b-container>
      <b-container v-if="action === 'healthy'">
        <button class="govuk-button my-2" @click="send">
          Oznámiť negatívne prípady
        </button>
      </b-container>
    </b-container>
    <b-container>
      <StreamBarcodeReader @decode="onDecode" />
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
  data() {
    return {
      fields: [
        {
          label: "Akcia",
          key: "id",
        },
        {
          label: "Kód testovacej sady",
          key: "code",
          sortable: true,
        },
        {
          label: "Stav",
          key: "state",
          sortable: true,
        },
      ],
      data: [],
      next: "",
      action: "select",
    };
  },
  methods: {
    ...mapActions({
      SetResults: "result/SetResults",
    }),
    onDecode(result) {
      this.next = result;
    },
    send() {
      let result = "error";
      if (this.action === "sick") result = "positive";
      if (this.action === "healthy") result = "negative";
      if (this.action === "repeat") result = "test-to-be-repeated";
      console.log("result", result);
      for (let index in this.data) {
        const code = this.data[index].code;
        console.log("result", result, code);
        this.SetResults({ testCode: code, result }).then(r => {
          if (r) {
            this.data[index].state = "Odoslané";
          }
        });
      }
    },
  },
};
</script>
<style lang="scss">
</style>