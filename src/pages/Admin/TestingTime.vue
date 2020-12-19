<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <h1>Nastavenie otváracích hodín</h1>
      </b-container>
    </div>
    <div class="py-3" v-if="revision">
      <b-container fluid>
        <b-row>
          <b-col>
            <h2>Revízia zmnien</h2>
            <ol id="example-2">
              <li v-for="(item, index) in sortedActions()" :key="index">
                <span v-if="item.type === 'delete'">
                  Dňa
                  <b>{{ new Date(item.date).toLocaleDateString("sk") }}</b> bude
                  odberné miesto <b>zavreté</b>
                </span>
                <span v-if="item.type === 'set'">
                  Dňa
                  <b>{{ new Date(item.date).toLocaleDateString("sk") }}</b> bude
                  odberné miesto
                  <span v-if="placeObj"
                    ><b>{{ placeObj.name }}</b></span
                  >
                  otvorené so šablónou
                  <b>č. {{ item.openingHoursTemplateId }}</b>
                  <span v-if="!placeObj"
                    >ktorá je nastavená v každom odbernom mieste zvlášť</span
                  > </span
                ><span v-if="placeObj">
                  - <b>{{ template1 }}</b></span
                >
              </li>
            </ol></b-col
          >
        </b-row>
        <b-row>
          <b-col offset-md="0">
            <div class="alert alert-danger" v-if="allPlaces">
              Pozor! Chystáte sa zmeniť otváracie miesta na všetkých Vašich
              odberných miestach
            </div>
            <button
              @click="revisionClick"
              class="govuk-button govuk-!-margin-right-3 govuk-button--start m-2"
            >
              Uložiť
              <svg
                class="govuk-button__start-icon"
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
            <button
              @click="revisionBackClick"
              class="govuk-button govuk-!-margin-right-3 govuk-button--start m-2"
            >
              Späť
            </button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="py-3" v-if="!revision">
      <b-container fluid>
        <b-row>
          <b-col cols="2">
            <h2>Rozsah</h2>
          </b-col>
          <b-col cols="2">
            <b-form-checkbox
              id="allPlaces"
              v-model="allPlaces"
              name="allPlaces"
            >
              Všetky miesta
            </b-form-checkbox>
          </b-col>
          <b-col cols="8">
            <b-form-select
              :disabled="allPlaces"
              v-model="place"
              :options="Object.values($store.state.place.places)"
              text-field="name"
              value-field="id"
            >
              <b-form-select-option disabled value=""
                >Vyberte si miesto pre nastavenie harmonogramu otváracích
                hodín</b-form-select-option
              >
            </b-form-select>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container fluid v-if="!revision">
      <b-row>
        <b-col md="3">
          <h2>Otváracie hodiny</h2>
          <b-row>
            <b-col>
              Od
              <VueCtkDateTimePicker
                v-model="fromDate"
                :only-date="true"
                formatted="DD.MM.YYYY"
                label="Od dátumu"
              />
            </b-col>
            <b-col>
              Do
              <VueCtkDateTimePicker
                v-model="untilDate"
                :only-date="true"
                formatted="DD.MM.YYYY"
                label="Do dátumu"
              />
            </b-col>
          </b-row>

          <button
            @click="createEvent(1)"
            class="my-2 w-100 govuk-button"
            style="background: darkgreen; color: white"
          >
            {{ template1 }}
          </button>
          <button
            @click="createEvent(2)"
            class="my-2 w-100 govuk-button"
            style="background: navy; color: white"
          >
            Šablóna otváracích hodín 2 (víkendy)
          </button>
          <button
            @click="createEvent(3)"
            class="my-2 w-100 govuk-button"
            style="background: purple; color: white"
          >
            Šablóna otváracích hodín 3 (sviatky)
          </button>
          <button
            @click="createEvent(4)"
            class="my-2 w-100 govuk-button"
            style="background: darkred; color: white"
          >
            Zatvorené
          </button>
        </b-col>
        <b-col md="9">
          <FullCalendar :options="calendarOptions" />
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col offset-md="3">
          <button
            @click="revisionClick"
            class="govuk-button govuk-!-margin-right-3 govuk-button--start my-2"
          >
            Prehľad zmien
            <svg
              class="govuk-button__start-icon"
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { mapActions } from "vuex";
import { moment } from "moment";

import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    VueCtkDateTimePicker,
  },
  data() {
    return {
      place: "",
      allPlaces: true,
      revision: false,
      actions: {},
      day: "2020-10-31T00:00:00+00:00",
      from: 9,
      until: 12,
      fromDate: new Date().toISOString(),
      untilDate: new Date().toISOString(),

      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        selectable: true,
        dateClick: this.dateClick,
        select: this.select,
        selectAllow: this.selectAllow,
        showNonCurrentDates: true,
        fixedWeekCount: false,
        contentHeight: 400,
        events: [],
      },
    };
  },
  computed: {
    placeObj() {
      if (!this.$store.state.place.places) return {};
      if (!this.$store.state.place.places[this.place]) return {};
      return this.$store.state.place.places[this.place];
    },
    template1() {
      const obj = this.placeObj;
      if (!obj || !obj["openingHoursWorkDay"])
        return "Šablóna otváracích hodín 1";
      return obj["openingHoursWorkDay"];
    },
    template2() {
      const obj = this.placeObj;
      if (!obj || !obj["openingHoursOther1"])
        return "Šablóna otváracích hodín 2";
      return obj["openingHoursOther1"];
    },
    template3() {
      const obj = this.placeObj;
      if (!obj || !obj["openingHoursOther2"])
        return "Šablóna otváracích hodín 3";
      return obj["openingHoursOther2"];
    },
  },
  watch: {
    place() {
      this.ListScheduledDays({
        placeId: this.allPlaces ? "__ALL__" : this.place,
      }).then(r => {
        if (r) {
          this.processScheduledDays(r);
        }
      });
    },
    allPlaces() {
      this.ListScheduledDays({
        placeId: this.allPlaces ? "__ALL__" : this.place,
      }).then(r => {
        if (r) {
          this.processScheduledDays(r);
        }
      });
    },
  },
  mounted() {
    this.ReloadPlaces();
    this.ListScheduledDays({
      placeId: this.allPlaces ? "__ALL__" : this.place,
    }).then(r => {
      if (r) {
        this.processScheduledDays(r);
      }
    });
  },
  methods: {
    processScheduledDays(r) {
      this.calendarOptions.events = [];
      this.actions = {};
      for (const index in r) {
        const day = r[index];
        let title = "Rôžne šablóny otv. hodín";
        let bck = this.getBackground(0);
        if (day.openingHoursTemplates.length == 1) {
          title = "Šablóna otv. hodín miesta " + day.openingHoursTemplates[0];
          bck = this.getBackground(day.openingHoursTemplates[0]);
        }
        if (day.openingHours.length == 1) {
          title = day.openingHours[0];
        }
        title += ` [${day.count}]`;

        this.calendarOptions.events.push({
          title: title,
          start: day.day,
          allDay: true,
          backgroundColor: bck,
        });
      }
    },
    getBackground(i) {
      if (i == 1) return "darkgreen";
      if (i == 2) return "navy";
      if (i == 3) return "purple";
      if (i == 0) return "#999";
    },
    sortedActions() {
      const ret = Object.values(this.actions).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      console.log("ret", ret);
      return ret;
    },
    dateClick: function (info) {
      // alert("clicked " + info.dateStr);
    },
    select: function (info) {
      console.log("typeof info.startStr", typeof info.start);
      info.start.setHours(12, 0, 0, 0);
      info.end.setHours(0, 0, 0, 0);
      this.fromDate = info.start.toISOString();
      this.untilDate = info.end.toISOString();
    },
    selectAllow: function (info) {
      console.log("info", info, new Date() < info.start);
      const currDate = new Date();
      const date = currDate.setDate(currDate.getDate() - 1);

      if (date > info.start) return false;
      return true;

      // return true;
    },
    ...mapActions({
      CheckSlots: "place/CheckSlots",
      ReloadPlaces: "place/ReloadPrivatePlaces",
      ListScheduledDays: "place/ListScheduledDays",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    revisionClick() {
      this.revision = true;
    },
    revisionBackClick() {
      this.revision = false;
    },
    checkClick() {
      this.CheckSlots({
        day: this.day,
        from: this.from,
        until: this.until,
      }).then(r => {
        if (r) {
          this.openSuccess("Uložené " + r);
        }
      });
    },
    createEvent(i) {
      let color = "#999";
      if (i == 1) color = "darkgreen";
      if (i == 2) color = "navy";
      if (i == 3) color = "purple";
      for (
        var d = new Date(this.fromDate);
        d < new Date(this.untilDate);
        d.setDate(d.getDate() + 1)
      ) {
        const dateObj = new Date(d);
        dateObj.setHours(12, 0, 0, 0);
        const date = dateObj.toISOString();
        this.calendarOptions.events = this.calendarOptions.events.filter(
          x => x.start !== date
        );
        if (i <= 3) {
          let text = "Šablóna otv. hodín miesta " + i;
          if (i === 1) text = this.template1;
          if (i === 2) text = this.template2;
          if (i === 3) text = this.template3;
          this.calendarOptions.events.push({
            title: text,
            start: date,
            allDay: true,
            backgroundColor: color,
          });
          this.actions[date] = {
            date,
            type: "set",
            openingHoursTemplateId: i,
            placeId: this.allPlaces ? "__ALL__" : this.place,
          };
        } else {
          this.actions[date] = {
            date,
            type: "delete",
            openingHoursTemplateId: i,
            placeId: this.allPlaces ? "__ALL__" : this.place,
          };
        }
      } /**/

      console.log("this.calendarOptions.events", this.calendarOptions.events);
    },
  },
};
</script>
<style lang="scss">
</style>
