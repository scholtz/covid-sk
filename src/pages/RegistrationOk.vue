<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("regDoneTitle") }}</h1>
      </b-container>
    </div>
    <div class="py-3">
      <b-container>
        <b-row>
          <h2>{{ $t("regDoneHelp1") }}</h2>
          <p>
            {{ $t("regDoneHelp2") }}
          </p>
          <p>
            {{ $t("regDoneHelp3") }}
          </p>
        </b-row>
        <b-row>
          <b-col sm="4">
            <vue-qrcode :value="barcodeValue" errorCorrectionLevel="H" />
            <h1>{{ barcodeValue }}</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-table-simple>
              <b-tr>
                <b-th>{{ $t("regDoneDataType") }}</b-th>
                <b-th>{{ $t("regDoneValue") }}</b-th>
              </b-tr>
              <b-tr>
                <b-th>{{ $t("regDoneName") }}</b-th
                ><b-td
                  >{{ $store.state.slot.registration.firstName }}
                  {{ $store.state.slot.registration.lastName }}</b-td
                >
              </b-tr>
              <b-tr>
                <b-th>{{ $t("regDoneEmail") }}</b-th
                ><b-td>{{ $store.state.slot.registration.email }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>{{ $t("regDoneMobile") }}</b-th
                ><b-td>{{ $store.state.slot.registration.phone }}</b-td>
              </b-tr>
              <b-tr v-if="$store.state.slot.registration.rc">
                <b-th>{{ $t("regDonePersonalNumber") }}</b-th
                ><b-td>{{ $store.state.slot.registration.rc }}</b-td>
              </b-tr>
              <b-tr v-if="$store.state.slot.registration.passport">
                <b-th>{{ $t("regDonePassport") }}</b-th
                ><b-td>{{ $store.state.slot.registration.passport }}</b-td>
              </b-tr>
              <b-tr v-if="$store.state.slot.registration.rc">
                <b-th>{{ $t("regDoneAddress") }}</b-th
                ><b-td>{{ $store.state.slot.registration.address }}</b-td>
              </b-tr>
              <b-tr v-if="$store.state.slot.registration.employeeId">
                <b-th>Osobné číslo zamestnanca</b-th
                ><b-td>{{ $store.state.slot.registration.employeeId }}</b-td>
              </b-tr>
            </b-table-simple>
          </b-col>
        </b-row>
        <b-row>
          {{
            $t("regDoneYourSelection", {
              place: $store.state.place.currentPlace.name,
              day: $store.state.slot.slotDCurrent.description,
              time: $store.state.slot.slotMCurrent.description,
            })
          }}
        </b-row>
        <b-row class="py-3">
          <b-link
            :to="`/place/${$route.params.placeId}/${$route.params.dayId}/${$route.params.hourId}/${$route.params.minuteId}/${$route.params.productId}`"
            class="m-0 btn btn-primary"
          >
            {{ $t("regDoneNextPerson") }}
          </b-link>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import VueQrcode from "vue-qrcode";

export default {
  components: {
    VueQrcode,
  },
  data() {
    return {
      barcodeValue: "0",
      barcodeWidth: "2",
    };
  },
  computed: {
    barcode() {
      return this.$store.state.slot.registration.id;
    },
  },
  watch: {
    barcode() {
      this.barcodeValue = this.$store.state.slot.registration.id.subtring(0, 3);
    },
  },
  mounted() {
    this.GetPlace({ id: this.$route.params.placeId })
      .then(r => {
        return r;
      })
      .then(r => {
        this.setCurrentPlace(r);
        return r;
      })
      // eslint-disable-next-line
      .then(r => {
        return this.GetSlotD({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
        });
      })
      .then(r => {
        this.setSlotDCurrent(r);
      })
      // eslint-disable-next-line
      .then(r => {
        return this.GetSlotH({
          placeId: this.$route.params.placeId,
          daySlotId: this.$route.params.dayId,
          hourSlotId: this.$route.params.hourId,
        });
      })
      .then(r => {
        return this.setSlotHCurrent(r);
      })
      // eslint-disable-next-line
      .then(r => {
        return this.GetSlotM({
          placeId: this.$route.params.placeId,
          hourSlotId: this.$route.params.hourId,
          minuteSlotId: this.$route.params.minuteId,
        });
      })
      .then(r => {
        return this.setSlotMCurrent(r);
      });
    this.formatCode();
  },
  methods: {
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
      setSlotDCurrent: "slot/setSlotDCurrent",
      setSlotHCurrent: "slot/setSlotHCurrent",
      setSlotMCurrent: "slot/setSlotMCurrent",
    }),
    ...mapActions({
      GetPlace: "place/GetPlace",
    }),
    ...mapActions({
      GetSlotD: "slot/GetSlotD",
      GetSlotH: "slot/GetSlotH",
      GetSlotM: "slot/GetSlotM",
      ReloadSlotsM: "slot/ReloadSlotsM",
    }),
    formatCode() {
      this.barcodeValue = this.commafy(this.$store.state.slot.registration.id);
    },
    commafy(num) {
      var str = num.toString().split(".");
      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1-");
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }
      return str.join(".");
    },
  },
};
</script>
<style lang="scss">
.barcode svg {
  border: 1px dashed indianred;

  width: 100%;
}
</style>