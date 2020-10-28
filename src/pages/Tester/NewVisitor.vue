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
  </div>
</template>

<script>
import Vue from "vue";
import VueBarcodeScanner from "vue-barcode-scanner";
Vue.use(VueBarcodeScanner);

export default {
  data() {
    return {
      code: "Not found",
      last: "Not found",
    };
  },
  created() {
    // Add barcode scan listener and pass the callback function
    this.$barcodeScanner.init(this.onBarcodeScanned);
  },
  destroyed() {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy();
  },
  methods: {
    // Create callback function to receive barcode when the scanner is already done
    onBarcodeScanned(barcode) {
      console.log(barcode);
      this.code = barcode;
      // do something...
    },
    // Reset to the last barcode before hitting enter (whatever anything in the input box)
    resetBarcode() {
      let barcode = this.$barcodeScanner.getPreviousCode();
      this.last = barcode;
      // do something...
    },
  },
};
</script>
<style lang="scss">
</style>