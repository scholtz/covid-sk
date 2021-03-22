<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("labTestResultsAnnouncement") }}</h1>
        <!--
        <b-form-checkbox v-model="useQR" name="useQR" switch>
          Používať QR kódy pre testovacie sady
        </b-form-checkbox>
        -->
      </b-container>
    </div>
    <b-container v-if="action === 'select'">
      <h2>{{ $t("labSelectItemToScan") }}</h2>
      <b-row>
        <b-col>
          <button
            class="my-2 btn btn-primary bg-danger"
            @click="action = 'sick'"
          >
            {{ $t("labTestResultsSick") }}
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button
            class="my-2 btn btn-primary bg-warning text-dark"
            @click="action = 'repeat'"
          >
            {{ $t("labTestResultsRepeat") }}
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button
            class="my-2 btn btn-primary bg-success"
            @click="action = 'healthy'"
          >
            {{ $t("labTestResultsHealthy") }}
          </button>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="action === 'sick'">
      <button class="float-right bg-light my-2 btn btn-light" @click="reset">
        {{ $t("labBackToSelection") }}
      </button>
      <button
        class="float-right bg-light m-2 btn btn-light"
        @click="resetTable"
      >
        Reset
      </button>
      <h2>{{ $t("labSelectTestResultsSick") }}</h2>
    </b-container>
    <b-container v-if="action === 'repeat'">
      <button class="float-right bg-light my-2 btn btn-light" @click="reset">
        {{ $t("labBackToSelection") }}
      </button>
      <button
        class="float-right bg-light m-2 btn btn-light"
        @click="resetTable"
      >
        Reset
      </button>
      <h2>{{ $t("labSelectTestResultsRepeat") }}</h2>
    </b-container>
    <b-container v-if="action === 'healthy'">
      <button class="float-right bg-light my-2 btn btn-light" @click="reset">
        {{ $t("labBackToSelection") }}
      </button>
      <button
        class="float-right bg-light m-2 btn btn-light"
        @click="resetTable"
      >
        Reset
      </button>
      <h2>{{ $t("labSelectTestResultsHealthy") }}</h2>
    </b-container>
    <b-container v-if="action !== 'select'">
      <b-row>
        <b-col>
          <label for="next">{{ $t("labNextCode") }}</label>
          <b-input v-model="next" ref="next" id="next" />
          <button
            :disabled="!next"
            class="btn btn-primary my-2"
            @click="
              data.push({
                code: next,
                state: 'labStateReadyToSend',
                variant: 'alert alert-info',
              })
            "
          >
            {{ $t("labAdd") }}
          </button>
        </b-col>
        <b-col v-if="scanbox === 'right'">
          <qrcode-stream v-if="useQR" @decode="onDecode" />
          <StreamBarcodeReader v-else @decode="onDecode" />
        </b-col>
      </b-row>

      <b-container v-if="scanbox === 'aboveTable'">
        <qrcode-stream v-if="useQR" @decode="onDecode" />
        <StreamBarcodeReader v-else @decode="onDecode" />
      </b-container>
      <b-table :items="data" :fields="fields">
        <template #cell(id)="row">
          <button
            @click="data.splice(row.index, 1)"
            class="btn btn-primary m-2 bg-light"
          >
            {{ $t("labCancel") }}
          </button>
        </template>
        <template #cell(state)="row">
          <div :class="row.item.variant">
            {{ $t(row.item.state) }}
          </div>
        </template>
      </b-table>

      <b-container v-if="action === 'sick'">
        <button
          :disabled="processing"
          class="btn btn-danger my-2"
          @click="send"
        >
          {{ $t("labSendSickAnnouncement") }}
          <b-spinner small v-if="processing" />
        </button>
      </b-container>
      <b-container v-if="action === 'repeat'">
        <button :disabled="processing" class="btn btn-info my-2" @click="send">
          {{ $t("labSendRepeatAnnouncement") }}
          <b-spinner small v-if="processing" />
        </button>
      </b-container>
      <b-container v-if="action === 'healthy'">
        <button
          :disabled="processing"
          class="btn btn-success my-2"
          @click="send"
        >
          {{ $t("labSendHealthyAnnouncement") }}
          <b-spinner small v-if="processing" />
        </button>
      </b-container>

      <b-container v-if="scanbox === 'belowTable'">
        <qrcode-stream v-if="useQR" @decode="onDecode" />
        <StreamBarcodeReader v-else @decode="onDecode" />
      </b-container>
      <b-container>
        <b-row>
          <b-col>
            <p>
              Funkcionalita tlačítka Reset: Ak je aspoň jeden odoslaný výsledok,
              vymaže výsledky úspešne odoslaných zo zoznamu. Ak nie je odoslaný
              žiadny výsledok, ak je v zozname na odoslanie aspoň jeden výsledok
              na odoslanie po stlačení sa vymažú z tabuľky záznamy na odoslanie
              a zostanú iba záznamy chybne odoslané. Ak sa stlačí tlačítko reset
              bez záznamov na odoslanie a bez úspešne odoslaných záznamov, z
              tabuľky sa vymažú aj nespárované záznamy alebo záznamy s inou
              chybou.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="scanbox">Pozícia scanboxu</label>
            <b-form-select
              :options="scanboxPositions"
              v-model="scanbox"
              id="scanbox"
            />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { QrcodeStream } from "vue-qrcode-reader";

import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
    QrcodeStream,
  },
  data() {
    return {
      useQR: true,
      processing: false,
      processingCount: 0,
      scanbox: "right",
      scanboxPositions: [
        {
          text: "Vpravo od vstupu",
          value: "right",
        },
        {
          text: "Nad tabuľkou na celú šírku",
          value: "aboveTable",
        },
        {
          text: "Pod tabuľkou na celú šírku",
          value: "belowTable",
        },
      ],
      fields: [
        {
          label: this.$t("labAction"),
          key: "id",
        },
        {
          label: this.$t("labTestCode"),
          key: "code",
          sortable: true,
        },
        {
          label: this.$t("labState"),
          key: "state",
          sortable: true,
        },
      ],
      data: [],
      next: "",
      action: "select",
    };
  },
  watch: {
    scanbox() {
      localStorage.setItem("scanbox", this.scanbox);
    },
  },
  mounted() {
    const scanPos = localStorage.getItem("scanbox");
    if (scanPos) {
      this.scanbox = scanPos;
    }
  },
  methods: {
    ...mapActions({
      SetResults: "result/SetResults",
    }),
    onDecode(result) {
      this.next = result;
    },
    reset() {
      this.action = "select";
      this.data = [];
      this.next = "";
    },
    resetTable() {
      this.next = "";
      const countReady = this.data.filter(
        x => x.state === "labStateReadyToSend"
      ).length;

      const countSent = this.data.filter(x => x.state === "labStateSent")
        .length;

      if (this.data.length > countReady && countReady > 0) {
        this.data = this.data.filter(x => x.state != "labStateReadyToSend");
      } else if (this.data.length > countSent && countSent > 0) {
        this.data = this.data.filter(x => x.state != "labStateSent");
      } else {
        this.data = [];
      }
    },
    send() {
      let result = "error";
      if (this.next) {
        let found = false;
        for (let index in this.data) {
          if (this.data[index].code == this.next) found = true;
        }
        if (!found) {
          this.data.push({
            code: this.next,
            state: "labStateReadyToSend",
            variant: "alert alert-info",
          });
          this.next = "";
        }
      }

      if (this.action === "sick") result = "positive";
      if (this.action === "healthy") result = "negative";
      if (this.action === "repeat") result = "test-to-be-repeated";
      console.log("result", result, this.data);
      this.processing = true;
      this.processingCount = this.data.length;
      let processed = 0;

      for (let index in this.data) {
        const code = this.data[index].code;
        console.log("result", result, code);
        this.SetResults({ testCode: code, result }).then(r => {
          processed++;
          if (r) {
            console.log("sent", r);
            this.data[index].state = "labStateSent";
            this.data[index].variant = "alert alert-success";
            if (!r.timeIsValid) {
              this.data[index].variant = "alert alert-danger";
              this.data[index].state = "labStateTooSoon";
            }
            if (!r.matched) {
              this.data[index].state = "labStateNotMatched";
              this.data[index].variant = "alert alert-danger";
            }
          }
          if (processed == this.processingCount) {
            this.processing = false;
          }
        });
      }
    },
  },
};
</script>
<style lang="scss"></style>
