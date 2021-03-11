<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <h1>
          {{ $t("workingTimeScheduleTitle") }}:
          <span v-if="placePrivider">{{ placePrivider.companyName }}</span>
        </h1>
      </b-container>
    </div>
    <div class="py-3" v-if="revision">
      <b-container fluid>
        <b-row>
          <b-col>
            <h2>{{ $t("workingTimeRevision") }}</h2>
            <ol id="example-2">
              <li v-for="(item, index) in sortedActions()" :key="index">
                <span v-if="item.type === 'delete'">
                  {{ $t("workingTimeOnDay") }}
                  <b>{{
                    new Date(item.date).toLocaleDateString($i18n.locale || "sk")
                  }}</b>
                  {{ $t("workingTimePlaceWillBe") }}
                  <b>{{ $t("workingTimeClosed") }}</b>
                </span>
                <span v-if="item.type === 'set'">
                  {{ $t("workingTimeOnDay") }}
                  <b>{{
                    new Date(item.date).toLocaleDateString($i18n.locale || "sk")
                  }}</b>
                  {{ $t("workingTimePlaceWillBe") }}
                  <span v-if="placeObj"
                    ><b>{{ placeObj.name }}</b></span
                  >
                  {{ $t("workingTimeClosed") }}
                  <b
                    >{{ $t("workingTimeNumber") }}
                    {{ item.openingHoursTemplateId }}</b
                  >
                  <span v-if="!placeObj">{{
                    $t("workingTimeThatIsSpecific")
                  }}</span> </span
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
              {{ $t("workingTimeWarningAlert") }}
            </div>
            <b-button @click="saveClick" class="m-2" variant="primary">
              {{ $t("workingTimeSave") }}
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
            </b-button>
            <b-button @click="revisionBackClick" class="m-2" variant="light">
              {{ $t("workingTimeBack") }}
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="py-3" v-if="!revision" style="margin-bottom: 10px">
      <b-container fluid>
        <b-row>
          <b-col md="3">
            <p></p>
          </b-col>
          <b-col md="2">
            <b>{{ $t("workingTimeSetTimeFor") }}:</b>
            <b-form-checkbox
              id="allPlaces"
              v-model="allPlaces"
              name="allPlaces"
              class="text-right"
            >
              {{ $t("workingTimeAllPlaces") }}
            </b-form-checkbox>
          </b-col>
          <b-col cols="7">
            <b-form-select
              :disabled="allPlaces"
              v-model="place"
              :options="places"
              text-field="name"
              value-field="id"
            >
              <b-form-select-option disabled value="">{{
                $t("workingTimeSelectPlace")
              }}</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container fluid v-if="!revision">
      <b-row>
        <b-col md="3">
          <h2>{{ $t("workingTimeOpeningHours") }}</h2>
          <b-row>
            <b-col>
              {{ $t("workingTimeFrom") }}
              <VueCtkDateTimePicker
                v-model="fromDate"
                :only-date="true"
                formatted="DD.MM.YYYY"
                :label="$t('workingTimeFromDate')"
                :locale="locale"
              />
            </b-col>
            <b-col>
              {{ $t("workingTimeUntil") }}
              <VueCtkDateTimePicker
                v-model="untilDate"
                :only-date="true"
                formatted="DD.MM.YYYY"
                :label="$t('workingTimeUntilDate')"
                :locale="locale"
              />
            </b-col>
          </b-row>

          <button
            @click="createEvent(1)"
            class="my-2 w-100 btn btn-primary"
            style="background: darkgreen; color: white"
          >
            {{ template1 }}
          </button>
          <button
            @click="createEvent(2)"
            class="my-2 w-100 btn btn-primary"
            style="background: navy; color: white"
          >
            {{ $t("workingTimeOpeningHoursOther1") }}
          </button>
          <button
            @click="createEvent(3)"
            class="my-2 w-100 btn btn-primary"
            style="background: purple; color: white"
          >
            {{ $t("workingTimeOpeningHoursOther2") }}
          </button>
          <button
            @click="createEvent(4)"
            class="my-2 w-100 btn btn-primary"
            style="background: darkred; color: white"
          >
            {{ $t("workingTimeClosedOption") }}
          </button>
        </b-col>
        <b-col md="9">
          <FullCalendar
            :options="{ ...calendarOptions, locale: calendarLocale }"
          />
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col offset-md="3">
          <button @click="revisionClick" class="btn btn-primary my-2">
            {{ $t("workingTimeRevisionOverview") }}
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
import skLocale from "@fullcalendar/core/locales/sk";
import csLocale from "@fullcalendar/core/locales/cs";

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
        locale: skLocale,
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        selectable: true,
        select: this.select,
        selectAllow: this.selectAllow,
        showNonCurrentDates: true,
        fixedWeekCount: false,
        contentHeight: 400,
        firstDay: 1,
        events: [],
      },
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    placeObj() {
      if (!this.$store.state.place.places) return {};
      if (!this.$store.state.place.places[this.place]) return {};
      return this.$store.state.place.places[this.place];
    },
    template1() {
      const obj = this.placeObj;
      if (!obj || !obj["openingHoursWorkDay"])
        return this.$t("workingTimeOpeningHoursWorkDay");
      return obj["openingHoursWorkDay"];
    },
    template2() {
      const obj = this.placeObj;
      if (!obj || !obj["openingHoursOther1"])
        return this.$t("workingTimeOpeningHoursOther1");
      return obj["openingHoursOther1"];
    },
    template3() {
      const obj = this.placeObj;
      if (!obj || !obj["openingHoursOther2"])
        return this.$t("workingTimeOpeningHoursOther2");
      return obj["openingHoursOther2"];
    },
    placePrivider() {
      if (!this.$store.state.placeProvider.places) return {};
      return this.$store.state.placeProvider.places.find(
        p => p.placeProviderId === this.pp
      );
    },
    pp() {
      if (!this.$store.state) return "";
      return this.$store.state.user.tokenData.pp;
    },
    places() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return Object.values(this.$store.state.place.places).sort(compare);
    },
    calendarLocale() {
      switch (this.$i18n.locale) {
        case "sk":
          return skLocale;
        case "cs":
          return csLocale;
        default:
          return null;
      }
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
    this.ListPrivate();
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
    ...mapActions({
      ReloadPlaces: "place/ReloadPrivatePlaces",
      ListPrivate: "placeProvider/ListPrivate",
      ListScheduledDays: "place/ListScheduledDays",
      ScheduleOpenningHours: "place/ScheduleOpenningHours",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    processScheduledDays(r) {
      this.calendarOptions.events = [];
      this.actions = {};
      for (const index in r) {
        const day = r[index];
        let title = this.$t("workingTimeOpeningHoursTemplatesOthers");
        let bck = this.getBackground(0);
        if (day.openingHoursTemplates.length == 1) {
          title =
            this.$t("workingTimeOpeningHoursTemplate") +
            " " +
            day.openingHoursTemplates[0];
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
      console.log("this.calendarOptions.events", this.calendarOptions.events);
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
    select: function (info) {
      console.log("typeof info.startStr", typeof info.start);
      info.start.setHours(12, 0, 0, 0);
      info.end.setHours(0, 0, 0, 0);
      this.fromDate = info.start.toISOString();
      this.untilDate = info.end.toISOString();
    },
    selectAllow: function (info) {
      const currDate = new Date();
      const date = currDate.setDate(currDate.getDate() - 1);

      if (date > info.start) return false;
      return true;

      // return true;
    },
    revisionClick() {
      this.revision = true;
    },
    revisionBackClick() {
      this.revision = false;
    },
    saveClick() {
      this.ScheduleOpenningHours({ actions: Object.values(this.actions) }).then(
        r => {
          if (r) {
            this.ListScheduledDays({
              placeId: this.allPlaces ? "__ALL__" : this.place,
            }).then(r2 => {
              if (r2) {
                this.processScheduledDays(r2);
                this.revision = false;
                this.openSuccess(this.$t("workingTimeSetSuccessMessage"));
              }
            });
          }
        }
      );
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
          let text = this.$t("workingTimeOpeningHoursTemplate") + " " + i;
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
<style lang="scss"></style>
