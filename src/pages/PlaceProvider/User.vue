<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container fluid>
        <b-row>
          <b-col md="7">
            <h1>
              {{ $t("formAdminHRTitle") }}:
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
              <b-form-select-option disabled value=""
                >Vyberte si miesto pre alokovanie osôb na odberové
                miesta</b-form-select-option
              >
            </b-form-select>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container class="my-4" fluid>
      <b-tabs card v-model="tabIndex">
        <b-tab title="Správa užívateľov na odberných miestach">
          <b-row>
            <b-col md="2">
              <h2>{{ $t("TimeAndPeopleSectionRights") }}:</h2>
              <div :style="roleStyle('MedicTester')">
                <b-form-checkbox v-model="roles.MedicTester" id="MedicTester">
                  {{ role2Text("MedicTester") }}
                </b-form-checkbox>
              </div>
              <div :style="roleStyle('MedicLab')">
                <b-form-checkbox v-model="roles.MedicLab" id="MedicLab">
                  {{ role2Text("MedicLab") }}
                </b-form-checkbox>
              </div>
              <div :style="roleStyle('DocumentManager')">
                <b-form-checkbox
                  v-model="roles.DocumentManager"
                  id="DocumentManager"
                >
                  {{ role2Text("DocumentManager") }}
                </b-form-checkbox>
              </div>
              <div :style="roleStyle('DataExporter')">
                <b-form-checkbox v-model="roles.DataExporter" id="DataExporter">
                  {{ role2Text("DataExporter") }}
                </b-form-checkbox>
              </div>
              <div :style="roleStyle('Helper')">
                <b-form-checkbox v-model="roles.Helper" id="Helper">
                  {{ role2Text("Helper") }}
                </b-form-checkbox>
              </div>

              <h2>{{ $t("TimeAndPeopleSectionPeople") }}:</h2>

              <div v-if="placePrivider">
                <div
                  v-for="user in placePrivider.users"
                  :key="user.invitationId"
                >
                  <b-form-checkbox v-model="selectedUsers[user.email]">
                    {{ user.name }} [<b>{{ name2shortcut(user.name) }}</b
                    >]
                  </b-form-checkbox>
                </div>
              </div>
            </b-col>
            <b-col md="10">
              <FullCalendar
                ref="calendar"
                id="calendar"
                :options="calendarOptions"
              />
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="Pozvať užívateľa">
          <b-row class="my-2">
            <b-col md="10" offset-md="2">
              <h2>Odoslať pozvánku</h2>
            </b-col>
          </b-row>
          <b-row class="my-2">
            <b-col md="2">
              <label for="name">Meno</label>
            </b-col>
            <b-col md="10">
              <b-input v-model="person.name" ref="name" id="name" />
            </b-col>
          </b-row>
          <b-row class="my-2">
            <b-col md="2">
              <label for="email">Email</label>
            </b-col>
            <b-col md="10">
              <b-input
                v-model="person.email"
                ref="email"
                id="email"
                type="email"
              />
            </b-col>
          </b-row>
          <b-row class="my-2">
            <b-col md="2">
              <label for="phone">Mobil</label>
            </b-col>
            <b-col md="10">
              <b-input v-model="person.phone" ref="phone" id="phone" />
            </b-col>
          </b-row>
          <b-row class="my-2">
            <b-col md="2">
              <label for="message">Text pozvánky</label>
            </b-col>
            <b-col md="10">
              <b-input v-model="person.message" ref="message" id="message" />
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col offset-md="2">
              <button
                :disabled="sendingInvitation"
                @click="inviteUserClick"
                class="btn btn-primary"
              >
                Pozvať
              </button>
            </b-col>
          </b-row>

          <h2>Odoslané pozvánky</h2>
          <b-table
            :items="dataInvitations"
            :fields="fieldsInvitations"
            sortBy="invitationTime"
            :sortDesc="true"
          >
            <template #cell(invitationTime)="row">
              {{ row.item.invitationTime | formatDateTime }}
            </template>
            <template #cell(status)="row">
              <span v-if="row.item.status === 'invited'">
                Čaká sa na potvrdenie
              </span>
              <span v-else-if="row.item.status === 'declined'">
                Pozvánka bola zamietnutá
              </span>
              <span v-else-if="row.item.status === 'accepted'">
                Pozvánka bola prijatá
              </span>
              <span v-else>
                {{ row.item.status }}
              </span>
            </template>
            <template #cell(actions)="row">
              <button
                @click="deleteInvitationClick(row)"
                class="btn btn-primary m-2"
              >
                Zrušiť
              </button>
            </template>
          </b-table>
        </b-tab>
      </b-tabs>
    </b-container>
    <b-modal
      title="Prehľad osoby na odbernom mieste"
      v-if="eventinfo && eventinfo.event && eventinfo.event.start"
      v-model="modalEditShow"
      ok-title="Odobrať oprávnenia"
      cancel-title="Zrušiť"
      @ok="unassignClick(eventinfo.event)"
    >
      <h4>{{ getUser(eventinfo.event.extendedProps.user).name }}</h4>
      <div :style="roleStyle(eventinfo.event.extendedProps.role)">
        {{ role2Text(eventinfo.event.extendedProps.role) }}
      </div>
      <div>Email: {{ getUser(eventinfo.event.extendedProps.user).email }}</div>
      <div>
        Skratka:
        {{ name2shortcut(getUser(eventinfo.event.extendedProps.user).name) }}
      </div>
      <div>
        Alokovaný pre čas: {{ eventinfo.event.start | formatDateTime }} -
        {{ eventinfo.event.end | formatDateTime }}
      </div>
    </b-modal>
    <b-modal
      title="Pridať osobu na odberové miesto"
      v-model="modalSetupShow"
      ok-title="Priradiť"
      cancel-title="Zrušiť"
      @ok="assignClick"
    >
      <div class="alert alert-danger" v-if="this.place === ''">
        Vyberte si odberové miesto
      </div>
      <div v-else>
        <h4>Odberové miesto</h4>
        <p>{{ this.placeObj.name }}</p>
      </div>
      <div class="alert alert-danger" v-if="roleNotSelected()">
        Vyberte si rolu/oprávnenia
      </div>
      <div v-for="(tr, role) in this.roles" :key="role">
        <div v-if="tr">
          <div :style="roleStyle(role)">
            {{ role2Text(role) }}
          </div>
        </div>
      </div>
      <div class="alert alert-danger" v-if="userNotSelected()">
        Vyberte si užívateľa
      </div>

      <div v-for="(tr, email) in this.selectedUsers" :key="email">
        <div v-if="tr">
          <h4>{{ getUser(email).name }}</h4>
          <div>Email: {{ email }}</div>
          <div>
            Skratka:
            {{ name2shortcut(getUser(email).name) }}
          </div>
        </div>
      </div>

      <h4>Časová alokácia</h4>
      <div v-if="fullDayMode">
        Alokácia na celý pracovný deň
        <div>
          Pre dátumy Od {{ fromDate | formatDate }} Do
          {{ untilDateMinusOneDay | formatDate }} večer
        </div>
      </div>
      <div v-else>
        Denne Od {{ displayHoursFrom() }}:00 Do {{ displayHoursUntil() }}:00
        <div>
          Pre dátumy Od {{ fromDate | formatDate }} Do
          {{ untilDate | formatDate }}
        </div>
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

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
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
        eventRender: this.eventRender,
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
      this.ListPlaceAllocations({ placeId: this.place }).then(r2 => {
        this.allocations = r2;
        console.log("this.allocations2", this.allocations);
        this.redrawEvents(r2);
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
        this.ListPlaceAllocations({ placeId: this.place }).then(r2 => {
          this.allocations = r2;
          this.redrawEvents(r2);
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
      ListPlaceAllocations: "placeProvider/ListPlaceAllocations",
      RemoveAllocationAtPlace: "placeProvider/RemoveAllocationAtPlace",
      AllocatePersonsToPlace: "placeProvider/AllocatePersonsToPlace",
      LoadUsers: "user/LoadUsers",
      RemoveUser: "user/RemoveUser",
      ListScheduledDays: "place/ListScheduledDays",
      ReloadPlaces: "place/ReloadPrivatePlaces",
    }),
    ...mapActions({
      openSuccess: "snackbar/openSuccess",
    }),
    redrawEvents(allocations) {
      this.calendarOptions.events = [];
      for (let index in allocations) {
        const usr = this.getUser(allocations[index].user);
        console.log("allocations[index]", allocations[index], usr);
        let name = allocations[index].user;
        if (usr && usr.name) name = usr.name;
        const title = this.name2shortcut(name);
        allocations[index].title = title;
        let color = this.roleColor(allocations[index].role);
        allocations[index].backgroundColor = color;
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
    inviteUserClick() {
      this.sendingInvitation = true;
      this.InviteUserToPP(this.person).then(r => {
        this.sendingInvitation = false;
        if (r) {
          this.openSuccess("Užívateľ pozvaný");
          this.email = "";
          this.name = "";
          this.phone = "";

          this.ListPPInvites({
            placeProviderId: this.pp,
          }).then(r => {
            if (r) {
              this.dataInvitations = r;
            }
          });
        }
      });
    },
    eventRender: function (event, element) {
      console.log("eventRender", event);
      element
        .find("span.fc-event-title")
        .html(element.find("span.fc-event-title").text());
    },
    unassignClick(event) {
      if (confirm("Naozaj chcete odobrať tieto oprávnenia?")) {
        console.log("event", event);
        this.RemoveAllocationAtPlace({
          allocationId: event.id,
          placeId: this.place,
        }).then(r => {
          if (r) {
            this.ListPlaceAllocations({ placeId: this.place }).then(r2 => {
              console.log("this.allocations4", this.allocations);
              this.allocations = r2;
              this.redrawEvents(r2);
            });
          }
        });
      }
    },
    assignClick() {
      console.log("this.selectedUsers", this.selectedUsers);

      for (let role in this.roles) {
        if (!this.roles[role]) continue;
        for (let user in this.selectedUsers) {
          if (!this.selectedUsers[user]) continue;
          console.log("selectedUsers", role, user);
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
            let color = this.roleColor(role);
            const usr = this.getUser(user);
            let name = usr.name;
            if (!name) name = user;
            const title = this.name2shortcut(name);
            this.events.push({
              title: title,
              start: date,
              end: date2,
              backgroundColor: color,
              user: user,
              role: role,
            });
          }
        }
      }
      if (this.place && this.events.length > 0) {
        this.AllocatePersonsToPlace({
          allocations: this.events,
          placeId: this.place,
        }).then(r => {
          if (r) {
            this.ListPlaceAllocations({ placeId: this.place }).then(r2 => {
              console.log("this.allocations1", this.allocations);
              this.allocations = r2;
              this.redrawEvents(r2);
              this.events = [];
            });
          }
        });
      }
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
<style lang="scss">
</style>