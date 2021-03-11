<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <b-row>
          <b-col md="7">
            <h1>
              {{ $t("adminLimitsHourlyLimits") }}
              <span v-if="placePrivider">{{ placePrivider.companyName }}</span>
            </h1>
          </b-col>
          <b-col md="5" v-if="tabIndex === 0">
            <b-form-select
              v-model="place"
              :options="places"
              text-field="name"
              value-field="id"
              class="mt-2"
              :class="this.place === '' ? 'border-danger' : ''"
            >
              <b-form-select-option disabled value="">{{
                $t("adminLimitsSelectPlaceToManage")
              }}</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container class="my-4" fluid>
      <b-row>
        <b-col>
          <FullCalendar
            ref="calendar"
            id="calendar"
            :options="{ ...calendarOptions, locale: calendarLocale }"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      :title="$t('adminLimitsPlaceAlocation')"
      v-if="eventinfo && eventinfo.event && eventinfo.event.start"
      v-model="modalEditShow"
      :ok-title="$t('adminLimitsRemoveLimit')"
      :cancel-title="$t('adminLimitsCancel')"
      @ok="unassignClick(eventinfo.event)"
    >
      <div>
        {{ $t("adminLimitsDatetimeLimit") }}:
        {{ eventinfo.event.start | formatDateTime }} -
        {{ eventinfo.event.end | formatDateTime }}
      </div>
    </b-modal>
    <b-modal
      :title="$t('adminLimitsPlaceAlocation')"
      v-model="modalSetupShow"
      :ok-title="$t('adminLimitsAssign')"
      :cancel-title="$t('adminLimitsCancel')"
      @ok="assignClick"
    >
      <div class="alert alert-danger" v-if="this.place === ''">
        {{ $t("adminLimitsSelectPlace") }}
      </div>
      <div v-else>
        <h4>{{ $t("adminLimitsPlace") }}</h4>
        <p>{{ this.placeObj.name }}</p>
      </div>

      <h4>{{ $t("adminLimitsAlocationTime") }}</h4>
      <div v-if="fullDayMode">
        {{ $t("adminLimitsFullDayLimit") }}
        <div>
          {{ $t("adminLimitsDates") }}
          {{ $t("adminLimitsFrom") }} {{ fromDate | formatDate }}
          {{ $t("adminLimitsUntil") }}
          {{ untilDateMinusOneDay | formatDate }} {{ $t("adminLimitsEvening") }}
        </div>
      </div>
      <div v-else>
        {{ $t("adminLimitsDaily") }} {{ $t("adminLimitsFrom") }}
        {{ displayHoursFrom() }}:00 {{ $t("adminLimitsUntil") }}
        {{ displayHoursUntil() }}:00
        <div>
          {{ $t("adminLimitsDates") }}
          {{ $t("adminLimitsFrom") }} {{ fromDate | formatDate }}
          {{ $t("adminLimitsUntil") }}
          {{ untilDate | formatDate }}
        </div>
      </div>

      <div>
        <label for="limit"
          ><h4>{{ $t("adminLimitsHourlyLimit") }}</h4></label
        >
        <b-input id="limit" type="number" min="0" max="1000" v-model="limit" />
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import skLocale from "@fullcalendar/core/locales/sk";
import csLocale from "@fullcalendar/core/locales/cs";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      limit: 0,
      modalEditShow: false,
      modalSetupShow: false,
      eventinfo: {},
      selectedUsers: {},
      sendingInvitation: false,
      dataInvitations: [],
      allocations: [],
      fromDate: new Date().toISOString(),
      untilDate: new Date().toISOString(),
      roles: {
        DocumentManager: false,
        MedicLab: false,
        DataExporter: false,
        Helper: false,
        MedicTester: false,
      },
      revision: false,
      place: "",
      data: [],
      tabIndex: -1,
      person: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      fields: [
        {
          label: "Meno",
          key: "name",
          sortable: true,
        },
        {
          label: "Email",
          key: "email",
          sortable: true,
        },
        {
          label: "Akcie",
          key: "actions",
          sortable: false,
        },
      ],
      fieldsInvitations: [
        {
          label: "Meno",
          key: "name",
          sortable: true,
        },
        {
          label: "Email",
          key: "email",
          sortable: true,
        },
        {
          label: "Pozvaný osobou",
          key: "inviterName",
          sortable: true,
        },
        {
          label: "Čas pozvánky",
          key: "invitationTime",
          sortable: true,
        },
        {
          label: "Stav pozvánky",
          key: "status",
          sortable: true,
        },
        {
          label: "Akcie",
          key: "actions",
          sortable: false,
        },
      ],
      calendarOptions: {
        locale: skLocale,
        headerToolbar: {
          start: "dayGridWeek,dayGridMonth timeGridWeek,timeGridDay",
          center: "title",
          end: "today prev,next",
        },
        initialView: "timeGridWeek",
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        selectable: true,
        eventClick: this.eventClick,
        select: this.select,
        selectAllow: this.selectAllow,
        contentHeight: 500,
        slotDuration: "01:00:00",
        displayEventTime: false,
        firstDay: 1, // from monday
        eventDisplay: "block",
        /*
        businessHours: [
          // specify an array instead
          {
            daysOfWeek: [1, 2, 3], // Monday, Tuesday, Wednesday
            startTime: "08:00", // 8am
            endTime: "18:00", // 6pm
          },
          {
            daysOfWeek: [4, 5], // Thursday, Friday
            startTime: "10:00", // 10am
            endTime: "16:00", // 4pm
          },
        ],*/

        //hiddenDays: [2, 3],
        events: [],
      },
      events: [],
      selection: {
        title: "Title",
        allDay: true,
      },
    };
  },
  computed: {
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
    placeObj() {
      if (!this.$store.state.place.places) return {};
      return this.$store.state.place.places[this.place];
    },
    canAssign() {
      var hasRole =
        this.roles.MedicTester ||
        this.roles.DocumentManager ||
        this.roles.MedicLab ||
        this.roles.DataExporter ||
        this.roles.Helper;
      if (!hasRole) return false;
      for (let index in this.selectedUsers) {
        if (this.selectedUsers[index]) return true;
      }
      return false;
    },
    fullDayMode() {
      return this.displayHoursFrom() == this.displayHoursUntil();
    },
    untilDateMinusOneDay() {
      const day = new Date(this.untilDate);
      return day.setDate(day.getDate() - 1);
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
    pp() {
      this.ListPPInvites({
        placeProviderId: this.pp,
      });
    },
    placePrivider() {
      console.log("placePrivider", this.placePrivider);
    },
    tabIndex() {
      if (this.$refs.calendar) {
        this.$nextTick(() => {
          const calendarApi = this.$refs.calendar.getApi();
          calendarApi.next();
          calendarApi.prev();
        });
      }
    },
    place() {
      console.log("place", this.place);
      this.ListPlaceLimits().then(r2 => {
        this.allocations = r2;
        console.log("this.allocations2", this.allocations);
        this.redrawEvents();
      });
      this.ListScheduledDays({
        placeId: this.place,
      }).then(r => {
        if (r) {
          this.processScheduledDays();
        }
      });
    },
    allPlaces() {
      this.ListScheduledDays({
        placeId: this.place,
      }).then(r => {
        if (r) {
          this.processScheduledDays();
        }
      });
    },
    fromDate() {},
    untilDate() {},
  },
  mounted() {
    this.ListPrivate().then(r => {
      if (r) {
        this.ListPlaceLimits().then(r2 => {
          this.allocations = r2;
          this.redrawEvents();
          console.log("this.allocations1", this.allocations);
        });
      }
    });
    this.ReloadPlaces();
    this.ListPPInvites({
      placeProviderId: this.pp,
    }).then(r => {
      if (r) {
        this.dataInvitations = r;
      }
    });
    this.tabIndex = 0;
  },
  methods: {
    ...mapActions({
      ListPrivate: "placeProvider/ListPrivate",
      InviteUser: "user/InviteUser",
      ListPPInvites: "user/ListPPInvites",
      InviteUserToPP: "placeProvider/InviteUserToPP",
      LoadUsers: "user/LoadUsers",
      RemoveUser: "user/RemoveUser",
      ListScheduledDays: "place/ListScheduledDays",
      ReloadPlaces: "place/ReloadPrivatePlaces",
      SetPlaceLimitation: "place/SetPlaceLimitation",
      DeletePlaceLimitation: "place/DeletePlaceLimitation",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
      openError: "snackbar/openError",
    }),
    SetLimitToPlace(limits) {
      if (!this.place) {
        this.openError("Zadajte miesto");
        return;
      }
      if (!limits) {
        this.openError("Limity neboli zadané");
        return;
      }
      console.log("limits", limits, this.limit);

      for (const index in limits) {
        const event1 = limits[index];
        for (const index2 in event1) {
          const event2 = event1[index2];
          console.log("event1", event1, event2);
          this.SetPlaceLimitation({
            placeId: this.place,
            from: event2.start,
            until: event2.end,
            limit: this.limit,
          });
        }
      }
      this.ListPlaceLimits().then(r2 => {
        this.allocations = r2;
        console.log("this.allocations1", this.allocations);
        this.ReloadPlaces().then(r3 => {
          console.log("this.ReloadPlaces", this.allocations, r3);
          this.redrawEvents();
          this.events = [];
        });
      });
    },
    async ListPlaceLimits() {
      this.ReloadPlaces().then(r => {
        if (!this.placeObj) return;
        return this.placeObj.otherLimitations;
      });
    },
    RemovePlaceLimit(placeId, limitId) {},
    redrawEvents() {
      if (!this.placeObj) return;
      const allocations = this.placeObj.otherLimitations;
      this.calendarOptions.events = [];
      for (let index in allocations) {
        allocations[index].title = allocations[index].hourLimit;
        allocations[index].backgroundColor = "blue";
        allocations[index].allDay = false;
        allocations[index].start = allocations[index].from;
        allocations[index].end = allocations[index].until;

        this.calendarOptions.events.push(allocations[index]);
      }
    },
    processScheduledDays() {
      this.events = [];
      this.actions = {};
    },
    eventClick: function (info) {
      this.eventinfo = info;
      this.modalEditShow = true;
    },
    select: function (info) {
      this.fromDate = info.startStr;
      this.untilDate = info.endStr;
      this.modalSetupShow = true;
    },
    displayHoursFrom() {
      return new Date(this.fromDate).getHours();
    },
    displayHoursUntil() {
      return new Date(this.untilDate).getHours();
    },
    selectAllow: function (info) {
      console.log("info", info, new Date() < info.start);
      const currDate = new Date();
      const date = currDate.setDate(currDate.getDate() - 1);

      if (date > info.start) return false;
      return true;

      // return true;
    },
    formatRoles(data) {
      return data.item.roles.join(", ");
    },
    deleteUserClick(row) {
      if (confirm("Naozaj chcete vymazať užívateľa?")) {
        this.RemoveUser({ email: row.item.email }).then(r => {
          if (r) {
            this.LoadUsers().then(r => {
              if (r) {
                this.data = Object.values(r);
              }
            });
          }
        });
      }
    },
    deleteInvitationClick(row) {
      if (confirm("Naozaj chcete zrušiť pozvánku?")) {
        console.log("todo");
      }
    },
    eventRender: function (event, element) {
      console.log("eventRender", event);
      element
        .find("span.fc-event-title")
        .html(element.find("span.fc-event-title").text());
    },
    unassignClick(event) {
      if (confirm("Naozaj chcete odobrať tento limit?")) {
        this.DeletePlaceLimitation({
          limitId: event.id,
          placeId: this.place,
        }).then(r => {
          if (r) {
            this.ReloadPlaces().then(r3 => {
              this.ListPlaceLimits().then(r2 => {
                this.allocations = r2;
                this.redrawEvents();
              });
            });
          }
        });
      }
    },
    assignClick() {
      const from = new Date(this.fromDate);
      const until = new Date(this.untilDate);
      from.setHours(12, 0, 0, 0);
      until.setHours(12, 0, 0, 0);
      if (this.fullDayMode) {
        until.setDate(until.getDate() - 1);
      }
      for (
        var d = new Date(from);
        d <= new Date(until);
        d.setDate(d.getDate() + 1)
      ) {
        const dateObj = new Date(d);
        if (this.fullDayMode) {
          dateObj.setHours(0, 0, 0, 0);
        } else {
          dateObj.setHours(new Date(this.fromDate).getHours(), 0, 0, 0);
        }
        const date = dateObj.toISOString();
        if (this.fullDayMode) {
          dateObj.setHours(24, 0, 0, 0);
        } else {
          dateObj.setHours(new Date(this.untilDate).getHours(), 0, 0, 0);
        }
        const date2 = dateObj.toISOString();
        const color = "red";
        this.events.push({
          title: this.limit,
          start: date,
          end: date2,
          backgroundColor: color,
        });
      }

      this.SetLimitToPlace({
        limits: this.events,
      });
      console.log("this.events", this.events);
    },
    roleStyle(role) {
      const color = this.roleColor(role);
      return `background: ${color}; color: white; border-radius: 3px; margin-bottom: 5px; padding: 2px 5px; font-weight:bold; `;
    },
    getBackground(role) {
      return this.roleColor(role);
    },
    roleColor(role) {
      if (!role) return "black";
      switch (role) {
        case "Helper":
          return "#666";
        case "MedicTester":
          return "green";
        case "MedicLab":
          return "blue";
        case "DocumentManager":
          return "darkorange";
        case "DataExporter":
          return "purple";
      }
      return "red";
    },
    role2Text(role) {
      console.log("role2Text.role", role);
      if (!role) return "?";
      switch (role) {
        case "Helper":
          return "Pomocník";
        case "MedicTester":
          return "Doktor pri odbere";
        case "MedicLab":
          return "Doktor v laboratóriu";
        case "DocumentManager":
          return "Správca certifikátov";
        case "DataExporter":
          return "Exporter údajov pre hygienu";
      }
      return "red";
    },
    name2shortcut(name) {
      if (!name) {
        return "???";
      }
      const split = name.trim().split(" ");

      if (split.length == 1) {
        if (name.length <= 3) {
          return name.toUpperCase();
        } else {
          return name.substring(0, 3).toUpperCase();
        }
      } else {
        if (split[0].length >= 1 && split[split.length - 1].length >= 2) {
          return (
            split[0].substring(0, 1) + split[split.length - 1].substring(0, 2)
          ).toUpperCase();
        } else {
          return (
            (
              split[0].substring(0, 1) + split[split.length - 1].substring(0, 1)
            ).toUpperCase() + "?"
          );
        }
      }
    },
    getUser(email) {
      return this.placePrivider.users.find(u => u.email == email);
    },
    userNotSelected() {
      for (let user in this.selectedUsers) {
        if (!this.selectedUsers[user]) continue;
        return false;
      }
      return true;
    },
    roleNotSelected() {
      for (let role in this.roles) {
        if (!this.roles[role]) continue;
        return false;
      }
      return true;
    },
  },
};
</script>
<style lang="scss"></style>
