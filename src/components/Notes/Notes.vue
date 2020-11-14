<template>
  <div class="notes">
    <b-card
      no-body
      class="p-0 card--container border border-gray-light bg-ghost-blue"
    >
      <b-card-body class="p-3 d-flex flex-column">
        <h2
          class="fsize-1 font-weight-bolder text-uppercase text-primary letter-spacing-1 ml-1 mt-2"
        >
          Poznámky
        </h2>
        <b-card
          bg-variant="default"
          class="card--inner card--notes mb-3 flex-grow-1"
          body-class="d-flex flex-column p-2"
        >
          <template v-for="item in notes">
            <NotesItem :note="item" :key="item.id" />
          </template>
        </b-card>
      </b-card-body>
      <b-card-footer class="bg-alice-blue">
        <b-input-group class="d-flex">
          <FormInput
            class="border-right-0 flex-grow-1"
            v-model="newNoteText"
            @keyup.enter="addNote"
            label="Rychlá poznámka"
          />
          <template v-slot:append>
            <b-input-group-text
              class="bg-white pointer input-wrapper"
              @click="addNote"
            >
              <font-awesome-layers class="fa-lg text-primary">
                <font-awesome-icon icon="plus-circle" />
              </font-awesome-layers>
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import NotesItem from "./NotesItem.vue";
import FormInput from "@/components/Layout/Components/BaseComponents/Input";

export default {
  components: {
    NotesItem,
    FormInput,
  },
  props: {
    notes: Array,
  },
  data() {
    return {
      newNoteText: "",
    };
  },
  methods: {
    addNote() {
      // TODO add notes on backend API
    },
  },
};
</script>

<style lang="scss" scoped>
.card--inner {
  flex-basis: 200px;
  max-height: unset;
  background-color: inherit;
  border: none;
}

.input-wrapper {
  border: none;
  margin: 1px;
}
</style>