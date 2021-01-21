<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("helpTitle") }}</h1>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row>
        <b-col md="12">
          <div v-html="$t('pricingSubtitle')" />
        </b-col>
        <br/><br/>
        <b-col md="6">
          <b-card>
            <h3><div v-html="$t('pricingVariant1Title')" /></h3><br/><br/>
            <div v-html="$t('pricingVariant1Text')" />
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card>
            <h3><div v-html="$t('pricingVariant2Title')" /></h3><br/><br/>
            <div v-html="$t('pricingVariant2Text')" />
          </b-card>
        </b-col>
      </b-row>
    <b-row>
    <b-col md="12">
      <b-card class="my-1" style="text-align:center;">
        <h4><div v-html="$t('pricingRequestToRegister')" /></h4>
      <button v-if="$store.state.user.auth" class="btn btn-primary my-1">
        Objednať službu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.5"
          height="19"
          viewBox="0 0 33 40"
          role="presentation"
          focusable="false"
        >
          <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
        </svg>
      </button>
      <button
        v-if="!$store.state.user.auth"
        @click="$router.push('/registerPlaceProvider')"
        class="btn btn-primary my-1"
      >
        Zaregistrovať prevádzkovateľa
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.5"
          height="19"
          viewBox="0 0 33 40"
          role="presentation"
          focusable="false"
        >
          <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
        </svg>
      </button>
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
      customHW: false,
      days: 7,
      infra: "bronze",
      comm: "K1",
      price: "",
    };
  },
  watch: {
    days() {
      this.recalculate();
    },
    infra() {
      this.recalculate();
    },
    comm() {
      this.recalculate();
    },
  },
  mounted() {
    this.recalculate();
  },
  methods: {
    recalculate() {
      let ret = "";
      let price = 0;
      if (this.infra === "shared") {
        ret += "0 + ";
      }
      if (this.infra === "bronze") {
        ret += `5 * ${this.days} + `;
        price = 5 * this.days;
      }
      if (this.infra === "silver") {
        ret += `100 * ${this.days} + `;
        price = 100 * this.days;
      }
      if (this.infra === "gold") {
        ret += `10000 * ${this.days} + `;
        price = 10000 * this.days;
      }

      if (this.comm === "K0") {
        ret += ` 0 = `;
        price += 0;
      }

      if (this.comm === "K1") {
        ret += ` 500 = `;
        price += 500;
      }

      if (this.comm === "K15") {
        ret += ` 3500 = `;
        price += 3500;
      }

      if (this.comm === "K100") {
        ret += ` 20000 = `;
        price += 20000;
      }
      ret += price + " EUR";
      this.price = ret;
    },
  },
};
</script>