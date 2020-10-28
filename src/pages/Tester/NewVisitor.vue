<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Nezaregistrovaný návštevník</h1>
        <div>
          <b>{{ code }}</b>
        </div>
        <div>
          <b>{{ last }}</b>
        </div>
      </b-container>
    </div>
    <b-container>
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
      ></StreamBarcodeReader>
    </b-container>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  data() {
    return {
      code: "Not found",
      last: "Not found",
    };
  },
  methods: {
    onDecode(result) {
      this.code = result;
    },
    onLoaded(result) {
      this.last = result;
    },
  },
};
</script>
<style lang="scss">
</style>