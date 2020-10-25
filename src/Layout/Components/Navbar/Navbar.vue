<template>
  <div class="idsk-header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/">
          <img
            src="../../../assets/images/logo.svg"
            class="idsk-header__logotype-crown"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/register">Registrácia k odberu vzorky</b-nav-item>
            <b-nav-item href="https://korona.gov.sk/spolocna-zodpovednost/"
              >Chcem pomôcť</b-nav-item
            >
            <b-nav-item to="/results">Výsledky testu</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Jazyk / Language" right>
              <b-dropdown-item href="#">Anlicky / English</b-dropdown-item>
              <b-dropdown-item href="#">Slovensky / Slovak</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>