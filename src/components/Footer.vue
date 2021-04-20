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
          <div v-if="Object.keys(contacts).length" class="mt-2">
            {{ $t("footerProviderContacts") }}
            <span v-if="supportName">
              <span v-if="supportName[$i18n.locale]" class="p-2">
                {{ supportName[$i18n.locale] }}
              </span>
              <span v-else class="p-2">{{ supportName }}</span>
              |
            </span>
            <span v-if="supportPhone">
              <a class="idsk-footer__link p-2" :href="'callto:' + supportPhone">
                {{ supportPhone }}
              </a>
              |
            </span>
            <span v-if="supportEmail">
              <a class="idsk-footer__link p-2" :href="'mailto:' + supportEmail">
                {{ supportEmail }}</a
              >
            </span>
          </div>
          <div v-html="$t('footerText')" />
          <div>
            <span
              v-html="
                $t('footerSocial', {
                  facebookLink: FACEBOOK_LINK,
                  instagramLink: INSTAGRAM_LINK,
                })
              "
            />
            <span
              v-if="!TWITTER_LINK_HIDDEN"
              v-html="$t('footerTwitter', { twitterLink: TWITTER_LINK })"
              class="ml-1"
            />
          </div>
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
    ...mapState("config", [
      "SUPPORT_NAME",
      "SUPPORT_PHONE",
      "SUPPORT_EMAIL",
      "SHOW_DANGER",
      "VUE_CONFIG_APP_API",
    ]),
    ...mapState("config", {
      FACEBOOK_LINK: state =>
        state.FACEBOOK_LINK || "https://www.facebook.com/rychlejsie.sk",
      INSTAGRAM_LINK: state =>
        state.INSTAGRAM_LINK || "http://instagram.com/rychlejsie.sk",
      TWITTER_LINK: state =>
        state.TWITTER_LINK || "https://twitter.com/rychlejsie",
      TWITTER_LINK_HIDDEN: state => state.TWITTER_LINK_HIDDEN || false,
    }),
    ...mapState("user", ["authJWT"]),
    ...mapState("placeProvider", ["contacts", "contactsFetched"]),
    supportName() {
      return this.SUPPORT_NAME || this.contacts.supportName;
    },
    supportPhone() {
      return this.SUPPORT_PHONE || this.contacts.supportPhone;
    },
    supportEmail() {
      return this.SUPPORT_EMAIL || this.contacts.supportEmail;
    },
  },
  watch: {
    authJWT(value) {
      if (!this.VUE_CONFIG_APP_API) return;
      this.resetContacts();

      if (value) this.loadPpPrivate();
      else this.loadPpPublic();
    },
    VUE_CONFIG_APP_API() {
      if (!this.authJWT) this.loadPpPublic();
    },
  },
  methods: {
    ...mapMutations({
      setContacts: "placeProvider/setContacts",
      resetContacts: "placeProvider/resetContacts",
    }),
    ...mapActions({
      ListPrivate: "placeProvider/ListPrivate",
      ListPublic: "placeProvider/ListPublic",
    }),
    async loadPpPublic() {
      await this.ListPublic();
      const placeProvider = this.$store.state.placeProvider.publicPlaces.find(
        p => p.placeProviderId === this.$store.state.user.tokenData.pp
      );
      this.setProviderContacts(placeProvider);
    },
    async loadPpPrivate() {
      await this.ListPrivate();
      const placeProvider = this.$store.state.placeProvider.places.find(
        p => p.placeProviderId === this.$store.state.user.tokenData.pp
      );
      this.setProviderContacts(placeProvider);
    },
    setProviderContacts(placeProvider = {}) {
      const contacts = {};
      if (placeProvider.supportName) {
        contacts.supportName = placeProvider.supportName;
      }
      if (placeProvider.supportPhone) {
        contacts.supportPhone = placeProvider.supportPhone;
      } else if (placeProvider.publicPhone) {
        contacts.supportPhone = placeProvider.publicPhone;
      }
      if (placeProvider.supportEmail) {
        contacts.supportEmail = placeProvider.supportEmail;
      } else if (placeProvider.publicEmail) {
        contacts.supportEmail = placeProvider.publicEmail;
      }

      this.setContacts(contacts);
    },
  },
};
</script>
