<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <h1>Výber miesta</h1>
      </b-container>
    </div>
    <div v-if="$store.state.place.places">
      <b-table
        :items="Object.values($store.state.place.places)"
        :fields="fields"
      >
        <template #cell(id)="row">
          <button @click="selectPlace(row)" class="btn btn-primary">
            Vybrať
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="19"
              viewBox="0 0 33 40"
              role="presentation"
              focusable="false"
            >
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
            </svg>
          </button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      id: "",
      name: "",
      description: "",
      address: "",
      lat: 48.289218275462225,
      lng: 17.272996902465824,
      isDriveIn: false,
      isWalkIn: true,
      limitPer5MinSlot: 5,
      limitPer1HourSlot: 40,
      fields: [
        {
          label: "Akcia",
          key: "id",
        },
        {
          label: "Názov miesta",
          key: "name",
          sortable: true,
        },
        {
          label: "Adresa",
          key: "address",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.ReloadPlaces().then(r => {
      console.log("r", r);
    });
  },
  methods: {
    ...mapActions({
      ReloadPlaces: "place/ReloadPlaces",
      InsertOrUpdate: "place/InsertOrUpdate",
      Delete: "place/Delete",
    }),
    ...mapActions({
      SetLocation: "user/SetLocation",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    selectPlace(row) {
      if (row.item.id) {
        this.SetLocation({ placeId: row.item.id }).then(r => {
          if (r) {
            this.openSuccess("Úspešne ste si nastavili miesto");
          }
        });
      }
    },
  },
};
</script>
<style lang="scss">
</style>