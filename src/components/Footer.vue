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
          <div v-if="contacts.length" class="mt-2">
            {{ $t("footerProviderContacts") }}{{ contacts.join(", ") }}.
          </div>
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
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Footer",
  props: {
    fluid: Boolean,
  },
  computed: {
    ...mapState("config", ["SHOW_DANGER", "VUE_CONFIG_APP_API"]),
    ...mapState("user", ["authJWT"]),
    ...mapState("placeProvider", { contacts: state => state.contacts || [] }),
  },
  watch: {
    authJWT() {
      if (!this.VUE_CONFIG_APP_API || this.contacts.length > 0) return;
      this.loadPp();
    },
  },
  methods: {
    ...mapMutations({
      setContacts: "placeProvider/setContacts",
    }),
    ...mapActions({
      ListPrivate: "placeProvider/ListPrivate",
    }),
    async loadPp() {
      await this.ListPrivate();
      const {
        publicEmail,
        publicPhone,
      } = this.$store.state.placeProvider.places.find(
        p => p.placeProviderId === this.$store.state.user.tokenData.pp
      );
      const contacts = [];
      if (publicEmail) contacts.push(publicEmail);
      if (publicPhone) contacts.push(publicPhone);
      this.setContacts(contacts);
    },
  },
};
</script>
