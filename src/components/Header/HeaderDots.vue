<template>
  <div class="header-dots">
    <b-dropdown toggle-class="p-0 mr-2" variant="link" no-caret right>
      <span slot="button-content">
        <div class="icon-wrapper icon-wrapper-alt rounded-circle">
          <div class="icon-wrapper-bg bg-focus" />
          <div class="language-icon">
            <country-flag country="cz" />
          </div>
        </div>
      </span>
      <div class="dropdown-menu-header">
        <div class="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
          <div class="menu-header-image opacity-05 dd-header-bg-4" />
          <div class="menu-header-content text-center text-white">
            <h6 class="menu-header-subtitle mt-0">Choose Language</h6>
          </div>
        </div>
      </div>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="US" class="mr-3 opacity-8" />
        <span>English</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="de" class="mr-3 opacity-8" />
        <span>German</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="hu" class="mr-3 opacity-8" />
        <span>Hungarian</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="pl" class="mr-3 opacity-8" />
        <span>Polish</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="sk" class="mr-3 opacity-8" />
        <span>Slovak</span>
      </button>
    </b-dropdown>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  components: {
    CountryFlag,
  },
  data: () => ({}),
  methods: {},
};
</script>

