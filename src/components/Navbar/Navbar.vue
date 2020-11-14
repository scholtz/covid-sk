<template>
  <div class="idsk-header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand @click="window.location.reload()" href="./">
          <img
            src="../../assets/images/logo.svg"
            class="idsk-header__logotype-crown"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="$store.state.user.auth">
            <b-navbar-nav>
              <b-nav-item-dropdown :text="$t('navBarAdmin')">
                <b-dropdown-item to="/admin/placeManager">{{
                  $t("navBarAdminManagePlace")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/invite">{{
                  $t("navBarAdminNewUser")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/users">{{
                  $t("navBarAdminAuditUsers")
                }}</b-dropdown-item>
                <b-dropdown-item to="/admin/testingTime">{{
                  $t("navBarAdminTestingTimes")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav>
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
            <b-navbar-nav>
              <b-nav-item-dropdown :text="$t('navBarLab')">
                <b-dropdown-item to="/lab/testResult">{{
                  $t("navBarLabResult")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item-dropdown :text="$t('navBarDoc')">
                <b-dropdown-item to="/documenter/certificate">{{
                  $t("navBarDocCertificate")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item to="/register">{{
              $t("navBarPublicRegister")
            }}</b-nav-item>
            <b-nav-item to="/results">{{
              $t("navBarPublicResults")
            }}</b-nav-item>
            <b-nav-item to="/help">{{ $t("navBarPublicHelp") }}</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-if="$store.state.user.auth">
            <b-nav-form right class="mx-3">
              <b-select class="bg-dark text-light" v-model="$i18n.locale">
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
              <b-select class="bg-dark text-light" v-model="$i18n.locale">
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
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      langs: ["sk", "en"],
    };
  },
  computed: {},
  methods: {
    ...mapMutations({
      setAuthJWT: "user/setAuthJWT",
    }),
    logout() {
      this.setAuthJWT("");
      this.$router.push("/");
    },
  },
};
</script>