(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770b1901"],{c243e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"app-pane-lgray py-2"},[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{md:"7"}},[a("h1",[e._v(" "+e._s(e.$t("formAdminHRTitle"))+": "),e.placePrivider?a("span",[e._v(e._s(e.placePrivider.companyName))]):e._e()])]),0===e.tabIndex?a("b-col",{attrs:{md:"5"}},[a("b-form-select",{staticClass:"mt-2",class:""===this.place?"border-danger":"",attrs:{options:Object.values(e.$store.state.place.places),"text-field":"name","value-field":"id"},model:{value:e.place,callback:function(t){e.place=t},expression:"place"}},[a("b-form-select-option",{attrs:{disabled:"",value:""}},[e._v("Vyberte si miesto pre alokovanie osôb na odberné miesta")])],1)],1):e._e()],1)],1)],1),a("b-container",{staticClass:"my-4",attrs:{fluid:""}},[a("b-tabs",{attrs:{card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[a("b-tab",{attrs:{title:"Správa užívateľov na odberných miestach"}},[a("b-row",[a("b-col",{attrs:{md:"2"}},[a("h2",[e._v(e._s(e.$t("TimeAndPeopleSectionRights"))+": ")]),a("div",{style:e.roleStyle("MedicTester")},[a("b-form-checkbox",{attrs:{id:"MedicTester"},model:{value:e.roles.MedicTester,callback:function(t){e.$set(e.roles,"MedicTester",t)},expression:"roles.MedicTester"}},[e._v(" "+e._s(e.role2Text("MedicTester"))+" ")])],1),a("div",{style:e.roleStyle("MedicLab")},[a("b-form-checkbox",{attrs:{id:"MedicLab"},model:{value:e.roles.MedicLab,callback:function(t){e.$set(e.roles,"MedicLab",t)},expression:"roles.MedicLab"}},[e._v(" "+e._s(e.role2Text("MedicLab"))+" ")])],1),a("div",{style:e.roleStyle("DocumentManager")},[a("b-form-checkbox",{attrs:{id:"DocumentManager"},model:{value:e.roles.DocumentManager,callback:function(t){e.$set(e.roles,"DocumentManager",t)},expression:"roles.DocumentManager"}},[e._v(" "+e._s(e.role2Text("DocumentManager"))+" ")])],1),a("div",{style:e.roleStyle("DataExporter")},[a("b-form-checkbox",{attrs:{id:"DataExporter"},model:{value:e.roles.DataExporter,callback:function(t){e.$set(e.roles,"DataExporter",t)},expression:"roles.DataExporter"}},[e._v(" "+e._s(e.role2Text("DataExporter"))+" ")])],1),a("div",{style:e.roleStyle("Helper")},[a("b-form-checkbox",{attrs:{id:"Helper"},model:{value:e.roles.Helper,callback:function(t){e.$set(e.roles,"Helper",t)},expression:"roles.Helper"}},[e._v(" "+e._s(e.role2Text("Helper"))+" ")])],1),a("h2",[e._v(e._s(e.$t("TimeAndPeopleSectionPeople"))+":")]),e.placePrivider?a("div",e._l(e.placePrivider.users,(function(t){return a("div",{key:t.invitationId},[a("b-form-checkbox",{model:{value:e.selectedUsers[t.email],callback:function(a){e.$set(e.selectedUsers,t.email,a)},expression:"selectedUsers[user.email]"}},[e._v(" "+e._s(t.name)+" ["),a("b",[e._v(e._s(e.name2shortcut(t.name)))]),e._v("] ")])],1)})),0):e._e()]),a("b-col",{attrs:{md:"10"}},[a("FullCalendar",{ref:"calendar",attrs:{id:"calendar",options:e.calendarOptions}})],1)],1)],1),a("b-tab",{attrs:{title:"Prehľad užívateľov"}},[a("b-table",{attrs:{items:e.data,fields:e.fields},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[a("button",{staticClass:"btn btn-primary m-2",on:{click:function(a){return e.editPlaceClick(t)}}},[e._v(" Edit ")]),a("button",{staticClass:"btn btn-primary m-2",on:{click:function(a){return e.deletePlaceClick(t)}}},[e._v(" Delete ")])]}},{key:"cell(role)",fn:function(t){return[e._v(" "+e._s(e.formatRoles(t))+" ")]}},{key:"cell(actions)",fn:function(t){return[a("button",{staticClass:"btn btn-primary m-2",on:{click:function(a){return e.deleteUserClick(t)}}},[e._v(" Vymazať ")])]}}])})],1),a("b-tab",{attrs:{title:"Pozvať užívateľa"}},[a("b-row",{staticClass:"my-2"},[a("b-col",{attrs:{md:"10","offset-md":"2"}},[a("h2",[e._v("Odoslať pozvánku")])])],1),a("b-row",{staticClass:"my-2"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"name"}},[e._v("Meno")])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"name",attrs:{id:"name"},model:{value:e.person.name,callback:function(t){e.$set(e.person,"name",t)},expression:"person.name"}})],1)],1),a("b-row",{staticClass:"my-2"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"email"}},[e._v("Email")])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"email",attrs:{id:"email",type:"email"},model:{value:e.person.email,callback:function(t){e.$set(e.person,"email",t)},expression:"person.email"}})],1)],1),a("b-row",{staticClass:"my-2"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"phone"}},[e._v("Mobil")])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"phone",attrs:{id:"phone"},model:{value:e.person.phone,callback:function(t){e.$set(e.person,"phone",t)},expression:"person.phone"}})],1)],1),a("b-row",{staticClass:"my-2"},[a("b-col",{attrs:{md:"2"}},[a("label",{attrs:{for:"message"}},[e._v("Text pozvánky")])]),a("b-col",{attrs:{md:"10"}},[a("b-input",{ref:"message",attrs:{id:"message"},model:{value:e.person.message,callback:function(t){e.$set(e.person,"message",t)},expression:"person.message"}})],1)],1),a("b-row",{staticClass:"mb-2"},[a("b-col",{attrs:{"offset-md":"2"}},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:e.sendingInvitation},on:{click:e.inviteUserClick}},[e._v(" Pozvať ")])])],1),a("h2",[e._v("Odoslané pozvánky")]),a("b-table",{attrs:{items:e.dataInvitations,fields:e.fieldsInvitations,sortBy:"invitationTime",sortDesc:!0},scopedSlots:e._u([{key:"cell(invitationTime)",fn:function(t){return[e._v(" "+e._s(e._f("formatDateTime")(t.item.invitationTime))+" ")]}},{key:"cell(status)",fn:function(t){return["invited"===t.item.status?a("span",[e._v(" Čaká sa na potvrdenie ")]):"declined"===t.item.status?a("span",[e._v(" Zamietli ste pozvánku ")]):"accepted"===t.item.status?a("span",[e._v(" Prijali ste pozvánku ")]):a("span",[e._v(" "+e._s(t.item.status)+" ")])]}},{key:"cell(actions)",fn:function(t){return[a("button",{staticClass:"btn btn-primary m-2",on:{click:function(a){return e.deleteInvitationClick(t)}}},[e._v(" Zrušiť ")])]}}])})],1)],1)],1),e.eventinfo&&e.eventinfo.event&&e.eventinfo.event.start?a("b-modal",{attrs:{title:"Prehľad osoby na odbernom mieste","ok-title":"Odobrať oprávnenia","cancel-title":"Zrušiť"},on:{ok:function(t){return e.unassignClick(e.eventinfo.event)}},model:{value:e.modalEditShow,callback:function(t){e.modalEditShow=t},expression:"modalEditShow"}},[a("h4",[e._v(e._s(e.getUser(e.eventinfo.event.extendedProps.user).name))]),a("div",{style:e.roleStyle(e.eventinfo.event.extendedProps.role)},[e._v(" "+e._s(e.role2Text(e.eventinfo.event.extendedProps.role))+" ")]),a("div",[e._v("Email: "+e._s(e.getUser(e.eventinfo.event.extendedProps.user).email))]),a("div",[e._v(" Skratka: "+e._s(e.name2shortcut(e.getUser(e.eventinfo.event.extendedProps.user).name))+" ")]),a("div",[e._v(" Alokovaný pre čas: "+e._s(e._f("formatDateTime")(e.eventinfo.event.start))+" - "+e._s(e._f("formatDateTime")(e.eventinfo.event.end))+" ")])]):e._e(),a("b-modal",{attrs:{title:"Pridať osobu na odberné miesto","ok-title":"Priradiť","cancel-title":"Zrušiť"},on:{ok:e.assignClick},model:{value:e.modalSetupShow,callback:function(t){e.modalSetupShow=t},expression:"modalSetupShow"}},[""===this.place?a("div",{staticClass:"alert alert-danger"},[e._v(" Vyberte si odberné miesto ")]):a("div",[a("h4",[e._v("Odberné miesto")]),a("p",[e._v(e._s(this.placeObj.name))])]),e.roleNotSelected()?a("div",{staticClass:"alert alert-danger"},[e._v(" Vyberte si rolu/oprávnenia ")]):e._e(),e._l(this.roles,(function(t,s){return a("div",{key:s},[t?a("div",[a("div",{style:e.roleStyle(s)},[e._v(" "+e._s(e.role2Text(s))+" ")])]):e._e()])})),e.userNotSelected()?a("div",{staticClass:"alert alert-danger"},[e._v(" Vyberte si užívateľa ")]):e._e(),e._l(this.selectedUsers,(function(t,s){return a("div",{key:s},[t?a("div",[a("h4",[e._v(e._s(e.getUser(s).name))]),a("div",[e._v("Email: "+e._s(s))]),a("div",[e._v(" Skratka: "+e._s(e.name2shortcut(e.getUser(s).name))+" ")])]):e._e()])})),a("h4",[e._v("Časová alokácia")]),e.fullDayMode?a("div",[e._v(" Alokácia na celý pracovný deň "),a("div",[e._v(" Pre dátumy Od "+e._s(e._f("formatDate")(e.fromDate))+" Do "+e._s(e._f("formatDate")(e.untilDateMinusOneDay))+" večer ")])]):a("div",[e._v(" Denne Od "+e._s(e.displayHoursFrom())+":00 Do "+e._s(e.displayHoursUntil())+":00 "),a("div",[e._v(" Pre dátumy Od "+e._s(e._f("formatDate")(e.fromDate))+" Do "+e._s(e._f("formatDate")(e.untilDate))+" ")])])],2)],1)},n=[],o=a("2f62"),r=a("f5ff"),i=a("3cdd"),l=a("3e32"),c=a("a20c"),d=a("327e"),u=a.n(d);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m={components:{FullCalendar:r["a"]},data:function(){return{modalEditShow:!1,modalSetupShow:!1,eventinfo:{},selectedUsers:{},sendingInvitation:!1,dataInvitations:[],allocations:[],fromDate:(new Date).toISOString(),untilDate:(new Date).toISOString(),roles:{DocumentManager:!1,MedicLab:!1,DataExporter:!1,Helper:!1,MedicTester:!1},revision:!1,place:"",data:[],tabIndex:-1,person:{name:"",email:"",phone:"",message:""},fields:[{label:"Meno",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Akcie",key:"actions",sortable:!1}],fieldsInvitations:[{label:"Meno",key:"name",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Pozvaný osobou",key:"inviterName",sortable:!0},{label:"Čas pozvánky",key:"invitationTime",sortable:!0},{label:"Stav pozvánky",key:"status",sortable:!0},{label:"Akcie",key:"actions",sortable:!1}],calendarOptions:{locale:u.a,headerToolbar:{start:"dayGridWeek,dayGridMonth timeGridWeek,timeGridDay",center:"title",end:"today prev,next"},initialView:"timeGridWeek",plugins:[i["b"],l["a"],c["a"]],selectable:!0,eventClick:this.eventClick,select:this.select,selectAllow:this.selectAllow,eventRender:this.eventRender,contentHeight:500,slotDuration:"01:00:00",displayEventTime:!1,firstDay:1,eventDisplay:"block",events:[]},events:[],selection:{title:"Title",allDay:!0}}},computed:{placePrivider:function(){var e=this;return this.$store.state.placeProvider.places?this.$store.state.placeProvider.places.find((function(t){return t.placeProviderId===e.pp})):{}},pp:function(){return this.$store.state?this.$store.state.user.tokenData.pp:""},placeObj:function(){return this.$store.state.place.places?this.$store.state.place.places[this.place]:{}},canAssign:function(){var e=this.roles.MedicTester||this.roles.DocumentManager||this.roles.MedicLab||this.roles.DataExporter||this.roles.Helper;if(!e)return!1;for(var t in this.selectedUsers)if(this.selectedUsers[t])return!0;return!1},fullDayMode:function(){return this.displayHoursFrom()==this.displayHoursUntil()},untilDateMinusOneDay:function(){var e=new Date(this.untilDate);return e.setDate(e.getDate()-1)}},watch:{pp:function(){this.ListPPInvites({placeProviderId:this.pp})},placePrivider:function(){console.log("placePrivider",this.placePrivider)},tabIndex:function(){var e=this;this.$refs.calendar&&this.$nextTick((function(){var t=e.$refs.calendar.getApi();t.next(),t.prev()}))},place:function(){var e=this;console.log("place",this.place),this.ListPlaceAllocations({placeId:this.place}).then((function(t){e.allocations=t,console.log("this.allocations2",e.allocations),e.redrawEvents(t)})),this.ListScheduledDays({placeId:this.place}).then((function(t){t&&e.processScheduledDays()}))},allPlaces:function(){var e=this;this.ListScheduledDays({placeId:this.place}).then((function(t){t&&e.processScheduledDays()}))},fromDate:function(){},untilDate:function(){}},mounted:function(){var e=this;this.LoadUsers().then((function(t){t&&(e.data=Object.values(t))})),this.ListPrivate().then((function(t){t&&e.ListPlaceAllocations({placeId:e.place}).then((function(t){e.allocations=t,e.redrawEvents(t),console.log("this.allocations1",e.allocations)}))})),this.ReloadPlaces(),this.ListPPInvites({placeProviderId:this.pp}).then((function(t){t&&(e.dataInvitations=t)})),this.tabIndex=0},methods:p(p(p({},Object(o["b"])({ListPrivate:"placeProvider/ListPrivate",InviteUser:"user/InviteUser",ListPPInvites:"user/ListPPInvites",InviteUserToPP:"placeProvider/InviteUserToPP",ListPlaceAllocations:"placeProvider/ListPlaceAllocations",RemoveAllocationAtPlace:"placeProvider/RemoveAllocationAtPlace",AllocatePersonsToPlace:"placeProvider/AllocatePersonsToPlace",LoadUsers:"user/LoadUsers",RemoveUser:"user/RemoveUser",ListScheduledDays:"place/ListScheduledDays",ReloadPlaces:"place/ReloadPrivatePlaces"})),Object(o["b"])({openSuccess:"snackbar/openSuccess"})),{},{redrawEvents:function(e){for(var t in this.calendarOptions.events=[],e){var a=this.getUser(e[t].user);console.log("allocations[index]",e[t],a);var s=e[t].user;a&&a.name&&(s=a.name);var n=this.name2shortcut(s);e[t].title=n;var o=this.roleColor(e[t].role);e[t].backgroundColor=o,this.calendarOptions.events.push(e[t])}},processScheduledDays:function(){this.events=[],this.actions={}},eventClick:function(e){this.eventinfo=e,this.modalEditShow=!0},select:function(e){this.fromDate=e.startStr,this.untilDate=e.endStr,this.modalSetupShow=!0},displayHoursFrom:function(){return new Date(this.fromDate).getHours()},displayHoursUntil:function(){return new Date(this.untilDate).getHours()},selectAllow:function(e){console.log("info",e,new Date<e.start);var t=new Date,a=t.setDate(t.getDate()-1);return!(a>e.start)},formatRoles:function(e){return e.item.roles.join(", ")},deleteUserClick:function(e){var t=this;confirm("Naozaj chcete vymazať užívateľa?")&&this.RemoveUser({email:e.item.email}).then((function(e){e&&t.LoadUsers().then((function(e){e&&(t.data=Object.values(e))}))}))},deleteInvitationClick:function(e){confirm("Naozaj chcete zrušiť pozvánku?")&&console.log("todo")},inviteUserClick:function(){var e=this;this.sendingInvitation=!0,this.InviteUserToPP(this.person).then((function(t){e.sendingInvitation=!1,t&&(e.openSuccess("Užívateľ pozvaný"),e.email="",e.name="",e.phone="",e.ListPPInvites({placeProviderId:e.pp}).then((function(t){t&&(e.dataInvitations=t)})))}))},eventRender:function(e,t){console.log("eventRender",e),t.find("span.fc-event-title").html(t.find("span.fc-event-title").text())},unassignClick:function(e){var t=this;confirm("Naozaj chcete odobrať tieto oprávnenia?")&&(console.log("event",e),this.RemoveAllocationAtPlace({allocationId:e.id,placeId:this.place}).then((function(e){e&&t.ListPlaceAllocations({placeId:t.place}).then((function(e){console.log("this.allocations4",t.allocations),t.allocations=e,t.redrawEvents(e)}))})))},assignClick:function(){var e=this;for(var t in console.log("this.selectedUsers",this.selectedUsers),this.roles)if(this.roles[t])for(var a in this.selectedUsers)if(this.selectedUsers[a]){console.log("selectedUsers",t,a);var s=new Date(this.fromDate),n=new Date(this.untilDate);s.setHours(12,0,0,0),n.setHours(12,0,0,0),this.fullDayMode&&n.setDate(n.getDate()-1);for(var o=new Date(s);o<=new Date(n);o.setDate(o.getDate()+1)){var r=new Date(o);this.fullDayMode?r.setHours(0,0,0,0):r.setHours(new Date(this.fromDate).getHours(),0,0,0);var i=r.toISOString();this.fullDayMode?r.setHours(24,0,0,0):r.setHours(new Date(this.untilDate).getHours(),0,0,0);var l=r.toISOString(),c=this.roleColor(t),d=this.getUser(a),u=d.name;u||(u=a);var v=this.name2shortcut(u);this.events.push({title:v,start:i,end:l,backgroundColor:c,user:a,role:t})}}this.place&&this.events.length>0&&this.AllocatePersonsToPlace({allocations:this.events,placeId:this.place}).then((function(t){t&&e.ListPlaceAllocations({placeId:e.place}).then((function(t){console.log("this.allocations1",e.allocations),e.allocations=t,e.redrawEvents(t),e.events=[]}))}))},roleStyle:function(e){var t=this.roleColor(e);return"background: ".concat(t,"; color: white; border-radius: 3px; margin-bottom: 5px; padding: 2px 5px; font-weight:bold; ")},getBackground:function(e){return this.roleColor(e)},roleColor:function(e){if(!e)return"black";switch(e){case"Helper":return"#666";case"MedicTester":return"green";case"MedicLab":return"blue";case"DocumentManager":return"darkorange";case"DataExporter":return"purple"}return"red"},role2Text:function(e){if(console.log("role2Text.role",e),!e)return"?";switch(e){case"Helper":return"Pomocník";case"MedicTester":return"Doktor pri odbere";case"MedicLab":return"Doktor v laboratóriu";case"DocumentManager":return"Správca certifikátov";case"DataExporter":return"Exporter údajov pre hygienu"}return"red"},name2shortcut:function(e){if(!e)return"???";var t=e.trim().split(" ");return 1==t.length?e.length<=3?e.toUpperCase():e.substring(0,3).toUpperCase():t[0].length>=1&&t[t.length-1].length>=2?(t[0].substring(0,1)+t[t.length-1].substring(0,2)).toUpperCase():(t[0].substring(0,1)+t[t.length-1].substring(0,1)).toUpperCase()+"?"},getUser:function(e){return this.placePrivider.users.find((function(t){return t.email==e}))},userNotSelected:function(){for(var e in this.selectedUsers)if(this.selectedUsers[e])return!1;return!0},roleNotSelected:function(){for(var e in this.roles)if(this.roles[e])return!1;return!0}})},h=m,b=a("2877"),y=Object(b["a"])(h,s,n,!1,null,null,null);t["default"]=y.exports}}]);