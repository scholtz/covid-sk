<template>
  <div>
    <b-container class="app-pane-lgray py-2" fluid>
      <b-row>
        <b-col>
          <h1>{{ $t("navBarAdminServicesManagement") }}</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid v-if="loading">
      <b-row>
        <b-col>
          <div><B>Čítam dáta</B> <b-spinner /></div
        ></b-col>
      </b-row>
    </b-container>

    <b-container fluid v-if="!loading">
      <b-card no-body>
        <b-tabs card v-model="tabIndex">
          <b-tab title="Zoznam služieb">
            <div v-if="addProductForm">
              <ValidationObserver>
                <validation-provider
                  name="Názov služby"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="name-group-1"
                    label="Názov služby"
                    label-for="name"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-input
                      id="name"
                      name="name"
                      v-model="product.name"
                      :state="getValidationState(validationContext)"
                      aria-describedby="name-feedback"
                    />

                    <b-form-invalid-feedback id="name-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="Kategória"
                  :rules="{}"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="category-group-1"
                    label="Kategória"
                    label-for="category"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-select
                      id="category"
                      name="category"
                      :options="categories"
                      v-model="product.category"
                      :state="getValidationState(validationContext)"
                      aria-describedby="category-feedback"
                    >
                      <b-form-select-option disabled value=""
                        >Vyberte si kategóriu</b-form-select-option
                      >
                    </b-form-select>
                    <b-form-invalid-feedback id="category-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Predvolené na všetkých miestach">
                  <b-form-group
                    id="all-group-1"
                    label="Predvolené na všetkých miestach"
                    label-for="all"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="all"
                      name="all"
                      v-model="product.all"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Iba pre poistencov">
                  <b-form-group
                    id="insuranceOnly-group-1"
                    label="Iba pre poistencov"
                    label-for="insuranceOnly"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="insuranceOnly"
                      name="insuranceOnly"
                      v-model="product.insuranceOnly"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Zisťovať poisťovňu">
                  <b-form-group
                    id="collectInsurance-group-1"
                    label="Zisťovať poisťovňu"
                    label-for="collectInsurance"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="collectInsurance"
                      name="collectInsurance"
                      v-model="product.collectInsurance"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Iba pre školy">
                  <b-form-group
                    id="schoolOnly-group-1"
                    label="Iba pre školy"
                    label-for="schoolOnly"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="schoolOnly"
                      name="schoolOnly"
                      v-model="product.schoolOnly"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Iba pre našich zamestnancov">
                  <b-form-group
                    id="employeesOnly-group-1"
                    label="Iba pre našich zamestnancov - predvyplnené"
                    label-for="employeesOnly"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="employeesOnly"
                      name="employeesOnly"
                      v-model="product.employeesOnly"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="Iba pre našich zamestnancov - registrácia zamestnancom"
                >
                  <b-form-group
                    id="employeesRegistration-group-1"
                    label="Iba pre našich zamestnancov  - registrácia zamestnancom"
                    label-for="employeesRegistration"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="employeesRegistration"
                      name="employeesRegistration"
                      v-model="product.employeesRegistration"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="Popis produktu"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="description-group-1"
                    label="Popis produktu"
                    label-for="description"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-textarea
                      id="description"
                      name="description"
                      v-model="product.description"
                      :state="getValidationState(validationContext)"
                      aria-describedby="description-feedback"
                    />

                    <b-form-invalid-feedback id="description-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="Predvolená cena"
                  :rules="{ required: true, regex: /^(?=.*[0-9])\d+(\.\d+)?$/ }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="price-group-1"
                    label="Predvolená cena (Bez DPH a servisných poplatkov)"
                    label-for="price"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      v-model="product.defaultPrice"
                      :state="getValidationState(validationContext)"
                      aria-describedby="price-feedback"
                    />

                    <b-form-invalid-feedback id="price-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="Mena"
                  :rules="{}"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="currency-group-1"
                    label="Mena"
                    label-for="currency"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-select
                      id="currency"
                      name="currency"
                      :options="currencies"
                      v-model="product.defaultPriceCurrency"
                      :state="getValidationState(validationContext)"
                      aria-describedby="currency-feedback"
                    />

                    <b-form-invalid-feedback id="currency-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <b-button
                  v-if="!edit"
                  :disabled="!formOk"
                  @click="newProductClick"
                  class="mr-1"
                >
                  Pridaj
                </b-button>
                <b-button
                  v-if="edit"
                  :disabled="!formOk"
                  @click="updateProductClick"
                  class="mr-1"
                >
                  Uprav
                </b-button>
                <b-button @click="cancelProductClick" variant="light">
                  Zruš
                </b-button>
              </ValidationObserver>
            </div>
            <div v-if="!addProductForm">
              <b-button
                variant="light"
                @click="addProductClick()"
                class="m-1 float-right"
                title="Pridať"
                size="sm"
              >
                <font-awesome-icon class="m-1" icon="plus" />
              </b-button>
              <b-table
                :items="products"
                :fields="fieldsProducts"
                sortBy="lastUpdate"
                :sortDesc="true"
              >
                <template #cell(lastUpdate)="row">
                  {{ row.item.lastUpdate | formatDateTime }}
                </template>
                <template #cell(createdOn)="row">
                  {{ row.item.createdOn | formatDateTime }}
                </template>
                <template #cell(category)="row">
                  {{ translateCategory(row.item.category) }}
                </template>
                <template #cell(all)="row">
                  <div v-if="row.item.all">Aplikované na všetky miesta</div>
                  <div v-else>Aplikovateľné na konkrétne miesto</div>
                </template>
                <template #cell(insuranceOnly)="row">
                  <div v-if="row.item.insuranceOnly">Ibe pre poistencov</div>
                  <div v-else>Pre všetkých</div>
                </template>
                <template #cell(actions)="row">
                  <b-button
                    variant="light"
                    @click="editProductClick(row)"
                    class="mr-1"
                    title="Upraviť"
                    size="sm"
                  >
                    <font-awesome-icon class="m-1" icon="edit" />
                  </b-button>
                  <b-button
                    variant="light"
                    @click="deleteProductClick(row)"
                    class="mr-1"
                    title="Zrušiť"
                    size="sm"
                  >
                    <font-awesome-icon class="m-1" icon="trash" />
                  </b-button>
                </template>
              </b-table>
            </div>
          </b-tab>

          <b-tab title="Služby poskytované na miestach">
            <div v-if="addPPRForm">
              <ValidationObserver>
                <validation-provider
                  name="Miesto"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="place-group-1"
                    label="Miesto"
                    label-for="place"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-select
                      id="place"
                      name="place"
                      :options="places"
                      value-field="id"
                      text-field="name"
                      v-model="ppr.placeId"
                      :state="getValidationState(validationContext)"
                      aria-describedby="place-feedback"
                    >
                      <b-form-select-option disabled value=""
                        >Vyberte si miesto</b-form-select-option
                      >
                    </b-form-select>
                    <b-form-invalid-feedback id="place-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>

                <validation-provider
                  name="Produkt"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="product-group-1"
                    label="Produkt"
                    label-for="product"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-select
                      id="product"
                      name="product"
                      :options="products"
                      value-field="id"
                      text-field="name"
                      v-model="ppr.productId"
                      :state="getValidationState(validationContext)"
                      aria-describedby="category-feedback"
                    >
                      <b-form-select-option disabled value=""
                        >Vyberte si produkt</b-form-select-option
                      >
                    </b-form-select>
                    <b-form-invalid-feedback id="category-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>

                <validation-provider name="Platnosť od">
                  <b-form-group
                    id="frombool-group-1"
                    label="Platnosť od"
                    label-for="frombool"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="frombool"
                      name="frombool"
                      v-model="fromBool"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Platnosť od" v-if="fromBool">
                  <b-form-group
                    id="from-group-1"
                    label=""
                    label-for="from"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-datepicker
                      id="from-datepicker"
                      v-model="ppr.from"
                      class="mb-2"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Platnosť do">
                  <b-form-group
                    id="untilbool-group-1"
                    label="Platnosť do"
                    label-for="untilbool"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="untilbool"
                      name="untilbool"
                      v-model="untilBool"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Platnosť do" v-if="untilBool">
                  <b-form-group
                    id="until-group-1"
                    label=""
                    label-for="until"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-datepicker
                      id="until-datepicker"
                      v-model="ppr.until"
                      class="mb-2"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Upravená cena">
                  <b-form-group
                    id="customPrice-group-1"
                    label="Upravená cena (Bez DPH a servisných poplatkov)"
                    label-for="customPrice"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-checkbox
                      id="customPrice"
                      name="customPrice"
                      v-model="ppr.customPrice"
                    />
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  v-if="ppr.customPrice"
                  name="Predvolená cena"
                  :rules="{ required: true, regex: /^(?=.*[0-9])\d+(\.\d+)?$/ }"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="price-group-1"
                    label="Predvolená cena (Bez DPH a servisných poplatkov)"
                    label-for="price"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      v-model="ppr.price"
                      :state="getValidationState(validationContext)"
                      aria-describedby="price-feedback"
                    />

                    <b-form-invalid-feedback id="price-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  v-if="ppr.customPrice"
                  name="Mena"
                  :rules="{}"
                  v-slot="validationContext"
                >
                  <b-form-group
                    id="currency-group-1"
                    label="Mena"
                    label-for="currency"
                    label-cols-sm="4"
                    label-cols-lg="2"
                  >
                    <b-form-select
                      id="currency"
                      name="currency"
                      :options="currencies"
                      v-model="ppr.priceCurrency"
                      :state="getValidationState(validationContext)"
                      aria-describedby="currency-feedback"
                    />

                    <b-form-invalid-feedback id="currency-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <b-button
                  v-if="!ppr.id"
                  :disabled="!formPPROk"
                  @click="newPPRClick"
                  class="mr-1"
                >
                  Poskytovať aj na tomto mieste
                </b-button>
                <b-button
                  v-if="ppr.id"
                  :disabled="!formPPROk"
                  @click="updatePPRClick"
                  class="mr-1"
                >
                  Uprav produkt na mieste
                </b-button>
                <b-button @click="cancelPPRClick" variant="light">
                  Zruš
                </b-button>
              </ValidationObserver>
            </div>
            <div v-if="!addPPRForm">
              <b-button
                variant="light"
                @click="addPPRClick()"
                class="m-1 float-right"
                title="Pridať"
                size="sm"
              >
                <font-awesome-icon class="m-1" icon="plus" />
              </b-button>
              <b-table :items="pprs" :fields="fieldsPPR">
                <template #cell(placeId)="row">
                  {{ translatePlace(row.item.placeId) }}
                </template>
                <template #cell(productId)="row">
                  {{ translateProduct(row.item.productId) }}
                </template>
                <template #cell(from)="row">
                  <div v-if="row.item.from">
                    {{ row.item.from | formatDateTime }}
                  </div>
                  <div v-else>Bez obmedzenia</div>
                </template>
                <template #cell(until)="row">
                  <div v-if="row.item.until">
                    {{ row.item.until | formatDateTime }}
                  </div>
                  <div v-else>Bez obmedzenia</div>
                </template>
                <template #cell(customPrice)="row">
                  <div v-if="row.item.customPrice">Upravená cena</div>
                  <div v-else>Predvolená cena</div>
                </template>
                <template #cell(category)="row">
                  {{ translateCategory(row.item.category) }}
                </template>
                <template #cell(all)="row">
                  <div v-if="row.item.all">Aplikované na všetky miesta</div>
                  <div v-else>Aplikovateľné na konkrétne miesto</div>
                </template>
                <template #cell(insuranceOnly)="row">
                  <div v-if="row.item.insuranceOnly">Ibe pre poistencov</div>
                  <div v-else>Pre všetkých</div>
                </template>
                <template #cell(actions)="row">
                  <div v-if="row.item.id">
                    <b-button
                      variant="light"
                      @click="editPPRClick(row)"
                      class="mr-1"
                      title="Upraviť"
                      size="sm"
                    >
                      <font-awesome-icon class="m-1" icon="edit" />
                    </b-button>
                    <b-button
                      variant="light"
                      @click="deletePPRClick(row)"
                      class="mr-1"
                      title="Zrušiť"
                      size="sm"
                    >
                      <font-awesome-icon class="m-1" icon="trash" />
                    </b-button>
                  </div>
                  <div v-else>Upravte produkt</div>
                </template>
              </b-table>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import {
  ValidationObserver,
  ValidationProvider,
  localize,
} from "vee-validate/dist/vee-validate.full";
import sk from "vee-validate/dist/locale/sk.json";
localize("sk", sk);

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      tabIndex: 1,
      loading: true,
      addProductForm: false,
      addPPRForm: true,
      edit: false,
      editPPR: false,
      fromBool: false,
      untilBool: false,
      product: {
        name: "",
        description: "",
        defaultPrice: 0,
        all: true,
        defaultPriceCurrency: "EUR",
        category: "",
        insuranceOnly: false,
        employeesOnly: false,
        employeesRegistration: false,
        schoolOnly: false,
        collectInsurance: true,
      },
      ppr: {
        placeId: "",
        productId: "",
        from: null,
        until: null,
      },
      products: [],
      pprs: [],
      currencies: ["EUR", "USD", "CZK"],
      categories: [
        { text: "PCR Test", value: "pcr" },
        { text: "Antigénový Test", value: "ant" },
        { text: "Vakcína", value: "vac" },
      ],
      fieldsProducts: [
        {
          label: "Názov",
          key: "name",
          sortable: true,
        },
        {
          label: "Kategória",
          key: "category",
          sortable: true,
        },
        {
          label: "Iba poistenci",
          key: "insuranceOnly",
          sortable: true,
        },
        {
          label: "Všetky miesta",
          key: "all",
          sortable: true,
        },
        {
          label: "Predvolená cena (Bez DPH a servisných poplatkov)",
          key: "defaultPrice",
          sortable: true,
        },
        {
          label: "Mena",
          key: "defaultPriceCurrency",
          sortable: true,
        },
        {
          label: "Vytvorené",
          key: "createdOn",
          sortable: true,
        },
        {
          label: "Upravené",
          key: "lastUpdate",
          sortable: true,
        },
        {
          label: "Akcie",
          key: "actions",
          sortable: false,
        },
      ],
      fieldsPPR: [
        {
          label: "Miesto",
          key: "placeId",
          sortable: true,
        },
        {
          label: "Produkt",
          key: "productId",
          sortable: true,
        },
        {
          label: "Od",
          key: "from",
          sortable: true,
        },
        {
          label: "Do",
          key: "until",
          sortable: true,
        },
        {
          label: "CustomPrice",
          key: "customPrice",
          sortable: true,
        },
        {
          label: "Price",
          key: "price",
          sortable: true,
        },
        {
          label: "Currency",
          key: "priceCurrency",
          sortable: true,
        },
        {
          label: "Akcie",
          key: "actions",
          sortable: false,
        },
      ],
    };
  },
  computed: {
    formOk() {
      return (
        this.product.name != "" &&
        this.product.defaultPrice >= 0 &&
        this.product.category
      );
    },
    formPPROk() {
      return this.ppr.placeId && this.ppr.productId;
    },
    places() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return Object.values(this.$store.state.place.places).sort(compare);
    },
  },
  watch: {
    fromBool() {
      if (!this.fromBool) this.ppr.from = null;
    },
    untilBool() {
      if (!this.untilBool) this.ppr.until = null;
    },
  },
  mounted() {
    this.ListProducts().then(r => {
      if (r) {
        this.products = r;
        if (this.products) {
          this.addPPRForm = false;
        }
        this.loading = false;
      }
    });

    this.ReloadPlaces().then(r => {
      if (r) {
        this.ListPlaceProduct().then(r2 => {
          if (r2) {
            this.pprs = r2;
          }
        });
      }
    });
  },
  methods: {
    ...mapActions({
      ListProducts: "placeProvider/ListProducts",
      CreateProduct: "placeProvider/CreateProduct",
      UpdateProduct: "placeProvider/UpdateProduct",
      DeleteProduct: "placeProvider/DeleteProduct",
      ListPlaceProduct: "placeProvider/ListPlaceProduct",
      ListPrivate: "placeProvider/ListPrivate",
      ReloadPlaces: "place/ReloadPrivatePlaces",
      DeletePlaceProduct: "place/DeletePlaceProduct",
      InsertOrUpdatePlaceProduct: "place/InsertOrUpdatePlaceProduct",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    addPPRClick() {
      this.ppr = {};
      this.addPPRForm = true;
      this.editPPR = false;
    },
    addProductClick() {
      this.product = {
        name: "",
        description: "",
        defaultPrice: 0,
        all: true,
        defaultPriceCurrency: "EUR",
        category: "",
        insuranceOnly: false,
        employeesOnly: false,
        employeesRegistration: false,
        schoolOnly: false,
        collectInsurance: true,
      };
      this.addProductForm = true;
      this.edit = false;
    },
    cancelPPRClick() {
      this.addPPRForm = false;
    },
    cancelProductClick() {
      this.addProductForm = false;
    },
    editProductClick(row) {
      this.product = row.item;
      this.addProductForm = true;
      this.edit = true;
    },
    editPPRClick(row) {
      this.ppr = row.item;
      this.addPPRForm = true;
      this.editPPR = true;
    },
    deleteProductClick(row) {
      if (confirm("Naozaj chcete vymazať produkt?")) {
        this.DeleteProduct({ product: row.item }).then(r => {
          if (r) {
            this.loading = true;
            this.addProdaddPPRFormuctForm = false;
            this.ListProducts().then(r2 => {
              if (r2) {
                this.products = r2;
                this.loading = false;
                this.updatePPR();
              }
            });
          }
        });
      }
    },
    deletePPRClick(row) {
      if (confirm("Naozaj chcete vymazať produkt z miesta?")) {
        this.DeletePlaceProduct({ placeProductid: row.item.id }).then(r => {
          if (r) {
            this.updatePPR();
          }
        });
      }
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    updatePPR() {
      this.ListPlaceProduct().then(r2 => {
        if (r2) {
          this.pprs = r2;
        }
      });
    },
    newProductClick() {
      this.CreateProduct({ product: this.product }).then(r => {
        if (r) {
          this.loading = true;
          this.addProductForm = false;
          this.ListProducts().then(r2 => {
            if (r2) {
              this.products = r2;
              this.loading = false;
              this.updatePPR();
            }
          });
        }
      });
    },
    newPPRClick() {
      this.InsertOrUpdatePlaceProduct({ placeProduct: this.ppr }).then(r => {
        if (r) {
          this.updatePPR();
          this.addPPRForm = false;
        }
      });
    },
    updatePPRClick() {
      this.InsertOrUpdatePlaceProduct({ placeProduct: this.ppr }).then(r => {
        if (r) {
          this.updatePPR();
          this.addPPRForm = false;
        }
      });
    },
    updateProductClick() {
      this.UpdateProduct({ product: this.product }).then(r => {
        if (r) {
          this.loading = true;
          this.addProductForm = false;
          this.ListProducts().then(r2 => {
            if (r2) {
              this.products = r2;
              this.loading = false;
              this.updatePPR();
            }
          });
        }
      });
    },
    translateCategory(cat) {
      for (let index in this.categories) {
        if (this.categories[index].value == cat)
          return this.categories[index].text;
      }
      return cat;
    },
    translatePlace(placeId) {
      console.log("placeid", placeId, this.$store.state.place.places);
      if (!this.$store.state.place.places) return "?";
      if (!this.$store.state.place.places[placeId]) return "?";
      return this.$store.state.place.places[placeId].name;
    },
    translateProduct(productId) {
      const product = this.products.find(p => p.id == productId);
      if (!product) return "?";
      return product.name;
    },
  },
};
</script>