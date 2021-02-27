<template>
  <footer class="idsk-footer" role="contentinfo">
    <div
      class="alert alert-danger m-0"
      v-if="SHOW_DANGER && $store.state.user.auth"
    >
      <h2 class="text-center">
        <b v-if="SHOW_DANGER[$i18n.locale]">{{ SHOW_DANGER[$i18n.locale] }}</b>
        <b v-else>{{ SHOW_DANGER }}</b>
      </h2>
    </div>
    <b-container :fluid="fluid">
      <b-row>
        <b-col md="12" style="text-align: center">
          <div v-html="$t('footerText')" />
          <div v-html="$t('footerSocial')" />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Footer",
  props: {
    fluid: Boolean,
  },
  computed: {
    ...mapState("config", ["SHOW_DANGER"]),
  },
};
</script>
