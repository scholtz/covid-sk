<template>
  <b-collapse class="ml-3 py-0" :id="menuItem.id">
    <b-navbar-nav
      class="flex-column py-2 px-0 list-unstyled bg-darkblue rounded"
    >
      <template
        v-for="subMenuItem in menuItem.subMenuItems"
        :active="subMenuItem.isActive"
      >
        <li class="align-items-start" :key="subMenuItem.id">
          <router-link
            class="d-flex p-2 w-100 align-items-center"
            :to="subMenuItem.route"
            v-slot="{ href, navigate, isActive }"
          >
            <a
              class="text-decoration-none"
              :href="href"
              @click="navigate, $emit('showmenu', false)"
            >
              <font-awesome-icon
                class="text-white mx-3"
                :icon="subMenuItem.icon"
              />
              <span
                class="nav-text ml-0"
                :class="[isActive ? subMenuItem.textActive : 'text-white']"
                >{{ subMenuItem.text }}</span
              >
            </a>
          </router-link>
        </li>
      </template>
    </b-navbar-nav>
  </b-collapse>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

