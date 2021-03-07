<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("selectCompanyTitle") }}</h1>
        <p>
          {{ $t("selectCompanyWarning") }}
        </p>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-table :items="items" :fields="fields">
        <template #cell(id)="row">
          <b-link
            @click="selectPPClick(row)"
            class="btn btn-primary m-2"
            v-if="$store.state.user.tokenData.pp !== row.item.placeProviderId"
          >
            {{ $t("selectCompanySelect") }}
          </b-link>
          <div v-else>
            {{ $t("selectCompanyCurrentlySelected") }}
          </div>
        </template>
      </b-table></b-container
    >
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      items: [],
      fields: [
        {
          label: this.$t("selectCompanyAction"),
          key: "id",
        },
        {
          label: this.$t("selectCompanyCompany"),
          key: "companyName",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.ListPrivate().then(r => {
      if (r) {
        this.items = r;
      }
    });
  },
  methods: {
    ...mapActions({
      ListPrivate: "placeProvider/ListPrivate",
      SetPlaceProvider: "user/SetPlaceProvider",
    }),
    selectPPClick(row) {
      this.SetPlaceProvider({ placeProviderId: row.item.placeProviderId });
    },
  },
};
</script>
