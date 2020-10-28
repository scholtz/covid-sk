<template>
  <div class="idsk-header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand @click="window.location.reload()" href="./">
          <img
            src="../../../assets/images/logo.svg"
            class="idsk-header__logotype-crown"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="$store.state.user.auth">
            <b-navbar-nav>
              <b-nav-item-dropdown text="Administrátor">
                <b-dropdown-item to="/admin/placeManager"
                  >Management testovacích miest</b-dropdown-item
                >
                <b-dropdown-item to="/admin/invite"
                  >Nový užívateľ</b-dropdown-item
                >
                <b-dropdown-item to="/admin/users"
                  >Audit užívateľov</b-dropdown-item
                >
                <b-dropdown-item to="/admin/testingTime"
                  >Čas testovania</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item-dropdown text="Tester">
                <b-dropdown-item to="/tester/registeredVisitor"
                  >Zaregistrovaný návštevník</b-dropdown-item
                >
                <b-dropdown-item to="/tester/unannouncedVisitor"
                  >Neohlásený návštevník</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item-dropdown text="Lab">
                <b-dropdown-item to="/lab/testResult"
                  >Výsledok testu</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item-dropdown text="GRPR manager">
                <b-dropdown-item to="/gdpr/manage">Správa GDPR</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item to="/register">Registrácia k odberu vzorky</b-nav-item>
            <b-nav-item to="/results">Výsledky testu</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Jazyk / Language" right>
              <b-dropdown-item href="#">Anglicky / English</b-dropdown-item>
              <b-dropdown-item href="#">Slovensky / Slovak</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav> -->

          <b-navbar-nav class="ml-auto" v-if="$store.state.user.auth">
            <b-nav-item-dropdown :text="$store.state.user.tokenData.Name" right>
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav v-else right class="ml-auto">
            <b-nav-item to="/login">Prihlásenie</b-nav-item>
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
    return {};
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