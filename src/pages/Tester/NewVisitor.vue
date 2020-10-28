<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Nezaregistrovaný návštevník</h1>
        <div>
          <b>Code: {{ code }}</b>
        </div>
      </b-container>
    </div>
    <b-container>
      <StreamBarcodeReader @decode="onDecode" />
    </b-container>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
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
  },
};
</script>
<style lang="scss">
</style>