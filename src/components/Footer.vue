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
          <div class="m-2 text-dark">
            <span v-if="$store.state.config.SUPPORT_NAME">
              <span v-if="$store.state.config.SUPPORT_NAME[$i18n.locale]">{{
                $store.state.config.SUPPORT_NAME[$i18n.locale]
              }}</span>
              <span v-else>{{ $store.state.config.SUPPORT_NAME }}</span
              >:</span
            >
            <span v-if="$store.state.config.SUPPORT_PHONE">
              <a
                :href="'callto:' + $store.state.config.SUPPORT_PHONE"
                class="text-dark"
              >
                {{ $store.state.config.SUPPORT_PHONE }}
              </a>
            </span>

            <span v-if="$store.state.config.SUPPORT_EMAIL">
              <a
                :href="'mailto:' + $store.state.config.SUPPORT_EMAIL"
                class="text-dark"
              >
                {{ $store.state.config.SUPPORT_EMAIL }}</a
              ></span
            >
          </div>
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
