<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Výber spoločnosti</h1>
        <p>
          V prípade ak zastupujete viacero spoločností, musíte si vybrať jednu v
          rámci ktorej ste prihlásený
        </p>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-table :items="items" :fields="fields">
        <template #cell(id)="row">
          <b-link
            @click="selectPPClick(row)"
            class="govuk-button m-2"
            v-if="$store.state.user.tokenData.pp !== row.item.placeProviderId"
          >
            Vybrať
          </b-link>
          <div v-else>Aktuálne vybratá spoločnosť</div>
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
          label: "Akcia",
          key: "id",
        },
        {
          label: "Spoločnosť",
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