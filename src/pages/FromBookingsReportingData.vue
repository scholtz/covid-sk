<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <b-row>
          <b-col>
            <h1>Vygenerovanie QR kódov pre Bookings Reporting Data</h1>
            <p>
              Pre vygenerovanie QR kódov zadajte text oddelený tabulátormi do
              poľa nižšie
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container fluid>
      <b-row>
        <b-col>
          <table class="table">
            <tr v-for="item in parsed" :key="item.id">
              <td>
                <table>
                  <tr>
                    <td>Čas:</td>
                    <td>{{ item.datetime }}</td>
                  </tr>
                  <tr>
                    <td>Meno:</td>
                    <td>{{ item.firstName }}</td>
                  </tr>
                  <tr>
                    <td>Priezvisko:</td>
                    <td>{{ item.lastName }}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{{ item.email }}</td>
                  </tr>
                  <tr>
                    <td>Telefón:</td>
                    <td>{{ item.mobile }}</td>
                  </tr>
                  <tr>
                    <td>Adresa:</td>
                    <td>{{ item.street }}</td>
                  </tr>
                </table>
              </td>
              <td>
                <vue-qrcode :value="item.qr" errorCorrectionLevel="H" />
              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-textarea rows="5" v-model="text"></b-textarea>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { load } from "recaptcha-v3";
import VueQrcode from "vue-qrcode";
import eccrypto from "eccrypto";

import { mapMutations, mapActions } from "vuex";
import moment from "moment";

export default {
  components: {
    VueQrcode,
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  watch: {
    text() {
      this.parse();
    },
  },
  data() {
    return {
      text:
        "Date Time	Customer Name	Customer Email	Customer Phone	Customer Address	Staff	Service	Location	Duration (mins.)	Type\n",
      parsed: [],
      publicKey: {},
    };
  },
  mounted() {
    this.GetPublicKey().then(r => {
      if (r) {
        this.publicKey = Buffer.from(r, "base64");
        this.parse();
      }
    });
  },
  methods: {
    ...mapMutations({
      setRegistrationAttempt: "slot/setRegistrationAttempt",
    }),
    ...mapMutations({
      setCurrentPlace: "place/setCurrentPlace",
      setSlotDCurrent: "slot/setSlotDCurrent",
      setSlotHCurrent: "slot/setSlotHCurrent",
      setSlotMCurrent: "slot/setSlotMCurrent",
      setProduct: "slot/setProduct",
    }),
    ...mapActions({
      GetPlace: "place/GetPlace",
    }),
    ...mapActions({
      GetPublicKey: "user/GetPublicKey",
      GetSlotD: "slot/GetSlotD",
      GetSlotH: "slot/GetSlotH",
      GetSlotM: "slot/GetSlotM",
      ReloadSlotsM: "slot/ReloadSlotsM",
      Register: "slot/Register",
      ListPlaceProductByPlace: "placeProvider/ListPlaceProductByPlace",
    }),
    parse() {
      var splitToLines = this.text.split("\n");
      let lineNo = 0;
      let n2k = {};
      for (let lineIndex in splitToLines) {
        lineNo++;
        const line = splitToLines[lineIndex];
        var splitToCols = line.split("\t");

        if (lineNo === 1) {
          for (const colIndex in splitToCols) {
            n2k[this.pretifyColumn(splitToCols[colIndex])] = colIndex;
          }
          if (n2k["date-time"] !== "0") {
            return;
          }
          continue;
        }

        if (splitToCols.length < 5) continue;

        const name = splitToCols[n2k["customer-name"]]
          .replace("Mgr.", "")
          .replace("Ing.", "")
          .split(" ");
        const firstName = name[0];
        const lastName = name[1];
        const email = splitToCols[n2k["customer-email"]];
        let mobile = splitToCols[n2k["customer-phone"]];
        if (mobile.length === 10 && mobile.substring(0, 1) === "0") {
          mobile = "+421" + mobile.substring(1);
        }
        if (mobile.substring(0, 3) === "421") {
          mobile = "+" + mobile;
        }

        const street = splitToCols[n2k["customer-address"]];

        this.addItem({
          id: lineNo,
          datetime: splitToCols[n2k["date-time"]],
          firstName,
          lastName,
          email,
          mobile,
          street,
        });
      }
    },
    pretifyColumn(value) {
      return value
        .toLowerCase()
        .replace(/[^a-z0-9 _-]+/gi, "-")
        .replace(" ", "-")
        .replace("--", "-")
        .replace("--", "-")
        .replace("duration-mins-", "duration-mins")
        .trim("-");
    },
    addItem(toSend) {
      if (this.personType == "foreign") {
        this.rc = "";
      } else {
        this.passport = "";
      }
      toSend.standard = "R01";

      let toSend2 = {};
      for (let index in toSend) {
        if (toSend[index]) {
          if (index === "email" && toSend[index] === "@") continue;
          if (index === "phone" && toSend[index] === "+421") continue;
          toSend2[index] = toSend[index];
        }
      }
      const ret = JSON.stringify(toSend2);

      const that = this;
      return eccrypto
        .encrypt(this.publicKey, Buffer.from(ret))
        .then(function (encrypted) {
          const encryptedB64 = {
            iv: encrypted.iv.toString("base64"),
            ct: encrypted.ciphertext.toString("base64"),
            epk: encrypted.ephemPublicKey.toString("base64"),
            m: encrypted.mac.toString("base64"),
          };

          const ret = JSON.stringify({
            standard: "R01ECIES",
            data: encryptedB64,
          });
          toSend.qr = ret;
          that.parsed.push(toSend);
        });
      // return ret;
    },
  },
};
</script>
<style lang="scss">
</style>