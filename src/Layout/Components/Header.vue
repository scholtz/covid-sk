<template>
  <header class="app-main__inner">
    <slot>
      <b-container fluid>
        <b-row>
          <b-col
            cols="12"
            class="d-flex justify-content-between bg-blue-interface2 rounded-bottom"
          >
            <b-col cols="4" class="d-flex align-items-center">
              <h1
                class="h6 mb-0 px-2 font-weight-bolder text-primary text-uppercase letter-spacing-1"
              >
                {{ level1 }}
              </h1>
            </b-col>
            <b-col
              cols="8"
              class="d-flex justify-content-between flex-row px-0"
            >
              <b-nav tabs align="left" class="d-flex flex-row mb-0">
                <b-nav-item
                  v-for="menuItem in leftTopMenu"
                  :key="menuItem.id"
                  :active="menuItem.isActive"
                >
                  <router-link :to="menuItem.route">{{
                    menuItem.text
                  }}</router-link>
                </b-nav-item>
              </b-nav>

            </b-col>
          </b-col>
        </b-row>
      </b-container>
    </slot>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {
    IncomingCalls,
  },
  props: {
    headerbg: String,
    light: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  data() {
    return {
      acceptCalls: true,
      isOpen: false,
      isOpenMobileMenu: false,
    }
  },
};
</script>
