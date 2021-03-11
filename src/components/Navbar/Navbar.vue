<template>
  <div class="idsk-header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container :fluid="fluid">
        <b-navbar-brand
          @click="window.location.reload()"
          href="./"
          class="m-0 p-0"
        >
          <img :src="$store.state.config.LOGO" height="45px" class="m-0 p-0" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="$store.state.user.auth">
            <b-navbar-nav v-if="isAdmin()">
              <b-nav-item-dropdown :text="$t('navBarAdmin')">
                <b-dropdown-item to="/admin/dashboard">{{
                  $t("navBarAdminDashboard")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/placeManager">{{
                  $t("navBarAdminManagePlace")
                }}</b-dropdown-item>
                <b-dropdown-item to="/placeprovider/limits">{{
                  $t("navBarAdminLimits")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/testingTime">{{
                  $t("navBarAdminTestingTimes")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/invite">
                  {{ $t("navBarAdminInviteAdmin") }}
                </b-dropdown-item>
                <b-dropdown-item to="/admin/users">{{
                  $t("navBarAdminAuditUsers")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/managepp">{{
                  $t("navBarAdminManagePP")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/manageProducts">{{
                  $t("navBarAdminManageServices")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav v-if="isPPAdmin()">
              <b-dropdown-item to="/admin/dashboard">{{
                $t("navBarAdminDashboard")
              }}</b-dropdown-item>
              <b-nav-item-dropdown :text="$t('navBarAdmin')">
                <b-dropdown-item to="/admin/placeManager">{{
                  $t("navBarAdminManagePlace")
                }}</b-dropdown-item>
                <b-dropdown-item to="/placeprovider/limits">{{
                  $t("navBarAdminLimits")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/testingTime">{{
                  $t("navBarAdminTestingTimes")
                }}</b-dropdown-item>
                <b-dropdown-item to="/placeprovider/users">{{
                  $t("navBarAdminAuditUsers")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/managepp">{{
                  $t("navBarAdminManagePP")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/manageProducts">{{
                  $t("navBarAdminManageServices")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav v-if="isTester()">
              <b-nav-item-dropdown :text="$t('navBarTester')">
                <b-dropdown-item to="/tester/registeredVisitor">{{
                  $t("navBarRegVisitor")
                }}</b-dropdown-item>
                <b-dropdown-item to="/tester/unannouncedVisitor">{{
                  $t("navBarNewVisitor")
                }}</b-dropdown-item>
                <b-dropdown-item to="/tester/place">{{
                  $t("navBarSetPlace")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav v-if="isMedicLab()">
              <b-nav-item-dropdown :text="$t('navBarLab')">
                <b-dropdown-item to="/lab/testResult">{{
                  $t("navBarLabResult")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav v-if="isDocumentManager()">
              <b-nav-item-dropdown :text="$t('navBarDoc')">
                <b-dropdown-item to="/documenter/certificate">{{
                  $t("navBarDocCertificate")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav v-if="isDataExporter()">
              <b-nav-item-dropdown :text="$t('navBarDataExporter')">
                <b-dropdown-item to="/dataExporter/export">{{
                  $t("navBarDataExporterExport")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-nav-item to="/help">{{ $t("navBarPublicHelp") }}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item to="/register">{{
              $t("navBarPublicRegister")
            }}</b-nav-item>
            <b-nav-item to="/enqueued" v-if="!$store.state.config.HIDE_QUEUE">{{
              $t("navBarPublicEnqueued")
            }}</b-nav-item>
            <b-nav-item to="/results"
              ><b>{{ $t("navBarPublicResults") }}</b></b-nav-item
            >
            <b-nav-item to="/help">{{ $t("navBarPublicHelp") }}</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-if="$store.state.user.auth">
            <b-nav-form right class="mx-3">
              <b-select
                class="bg-dark text-light"
                v-model="$i18n.locale"
                @change="languageUpdated"
              >
                <option
                  v-for="(lang, i) in langs"
                  :key="`Lang${i}`"
                  :value="lang"
                >
                  {{ lang }}
                </option>
              </b-select>
            </b-nav-form>
            <b-nav-item-dropdown :text="$store.state.user.tokenData.Name" right>
              <b-dropdown-item to="/change-pp">{{
                $t("navBarUserChangePP")
              }}</b-dropdown-item>
              <b-dropdown-item to="/invitations">{{
                $t("navBarUserInvitations")
              }}</b-dropdown-item>
              <b-dropdown-item to="/change-password">{{
                $t("navBarUserChangePassword")
              }}</b-dropdown-item>
              <b-dropdown-item @click="logout">{{
                $t("navBarUserLogout")
              }}</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav v-else right class="ml-auto"
            ><b-nav-form right class="mx-3">
              <b-select
                class="bg-dark text-light"
                v-model="$i18n.locale"
                @change="languageUpdated"
              >
                <option
                  v-for="(lang, i) in langs"
                  :key="`Lang${i}`"
                  :value="lang"
                >
                  {{ lang }}
                </option>
              </b-select>
            </b-nav-form>
            <b-nav-item to="/login">{{ $t("navBarUserLogin") }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <div class="alert alert-danger m-0" v-if="isNotProdHost">
      <a :href="`https://${$store.state.config.PROD}`"
        ><h2 class="text-center">
          {{ $t("navBarGoTo") }} {{ $store.state.config.PROD }}
        </h2>
      </a>
    </div>
    <div
      class="alert alert-danger m-0"
      v-if="SHOW_DANGER && !$store.state.user.auth"
    >
      <h2 class="text-center">
        <b v-if="SHOW_DANGER[$i18n.locale]">{{ SHOW_DANGER[$i18n.locale] }}</b>
        <b v-else>{{ SHOW_DANGER }}</b>
      </h2>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  components: {},
  props: {
    fluid: Boolean,
  },
  data() {
    return {
      langs: ["sk", "en", "cs"],
    };
  },
  computed: {
    ...mapState("config", ["SHOW_DANGER"]),
    isNotProdHost() {
      return !(
        document.location.host.indexOf(this.$store.state.config.PROD) > -1
      );
    },
  },
  methods: {
    ...mapMutations({
      setAuthJWT: "user/setAuthJWT",
    }),
    isAdmin() {
      for (const index in this.$store.state.user.tokenData.Role) {
        if (this.$store.state.user.tokenData.Role[index] === "Admin")
          return true;
      }
      return false;
    },
    isPPAdmin() {
      for (const index in this.$store.state.user.tokenData.Role) {
        if (this.$store.state.user.tokenData.Role[index] === "Admin")
          return false;
        if (this.$store.state.user.tokenData.Role[index] === "PPAdmin")
          return true;
      }
      return false;
    },
    isTester() {
      for (const index in this.$store.state.user.tokenData.Role) {
        if (this.$store.state.user.tokenData.Role[index] === "MedicTester")
          return true;
        if (
          this.$store.state.user.tokenData.Role[index] === "RegistrationManager"
        )
          return true;
        if (this.$store.state.user.tokenData.Role[index] === "Admin")
          return true;
      }
      return false;
    },
    isMedicLab() {
      for (const index in this.$store.state.user.tokenData.Role) {
        if (this.$store.state.user.tokenData.Role[index] === "MedicLab")
          return true;
        if (this.$store.state.user.tokenData.Role[index] === "Admin")
          return true;
      }
      return false;
    },
    isDocumentManager() {
      for (const index in this.$store.state.user.tokenData.Role) {
        if (this.$store.state.user.tokenData.Role[index] === "DocumentManager")
          return true;
        if (this.$store.state.user.tokenData.Role[index] === "Admin")
          return true;
      }
      return false;
    },
    isDataExporter() {
      for (const index in this.$store.state.user.tokenData.Role) {
        if (this.$store.state.user.tokenData.Role[index] === "DataExporter")
          return true;
      }
      return false;
    },
    logout() {
      this.setAuthJWT("");
      this.$router.push("/");
    },
    languageUpdated() {
      localStorage.setItem("lang", this.$i18n.locale);
    },
  },
};
</script>
