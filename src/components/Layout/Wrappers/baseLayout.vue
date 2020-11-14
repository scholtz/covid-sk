<template>
  <div class="d-flex flex-row">
    <div class="w-100">
      <div class="main">
        <Navbar />
        <main>
          <slot />
        </main>
        <Toasts
          :show-progress="true"
          :rtl="false"
          :max-messages="5"
          :time-out="5000"
          :closeable="true"
        />
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "../../Navbar/Navbar";
import FooterComponent from "../../Footer";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Navbar,
    FooterComponent,
  },
  computed: {},
  beforeCreate() {
    Vue.$toast = this.$toast;
  },
  created() {},
  mounted() {
    this.OnLoad();
  },
  methods: {
    ...mapActions({
      OnLoad: "user/OnLoad",
    }),
  },
};
</script>
<style lang="scss">
.main {
  min-height: 730px;
}
.toast-body {
  background: white;
}
.mr-350 {
  margin-right: 350px;
}
</style>