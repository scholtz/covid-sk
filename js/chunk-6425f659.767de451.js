(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6425f659"],{2264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={code:"cs",week:{dow:1,doy:4},buttonText:{prev:"Dříve",next:"Později",today:"Nyní",month:"Měsíc",week:"Týden",day:"Den",list:"Agenda"},weekText:"Týd",allDayText:"Celý den",moreLinkText:function(e){return"+další: "+e},noEventsText:"Žádné akce k zobrazení"};t.default=s},c243:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"app-pane-lgray py-2"},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{md:"7"}},[n("h1",[e._v(" "+e._s(e.$t("formAdminHRTitle"))+": "),e.placePrivider?n("span",[e._v(e._s(e.placePrivider.companyName))]):e._e()])]),0===e.tabIndex?n("b-col",{attrs:{md:"5"}},[n("b-form-select",{staticClass:"mt-2",class:""===this.place?"border-danger":"",attrs:{options:e.places,"text-field":"name","value-field":"id"},model:{value:e.place,callback:function(t){e.place=t},expression:"place"}},[n("b-form-select-option",{attrs:{disabled:"",value:""}},[e._v(e._s(e.$t("formAdminHRSelectAlocationPlace")))])],1)],1):e._e()],1)],1)],1),n("b-container",{staticClass:"my-4",attrs:{fluid:""}},[n("b-tabs",{attrs:{card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[n("b-tab",{attrs:{title:e.$t("formAdminHRUserManagement")}},[n("b-row",[n("b-col",{attrs:{md:"2"}},[n("h2",[e._v(e._s(e.$t("TimeAndPeopleSectionRights"))+":")]),n("div",{style:e.roleStyle("MedicTester")},[n("b-form-checkbox",{attrs:{id:"MedicTester"},model:{value:e.roles.MedicTester,callback:function(t){e.$set(e.roles,"MedicTester",t)},expression:"roles.MedicTester"}},[e._v(" "+e._s(e.role2Text("MedicTester"))+" ")])],1),n("div",{style:e.roleStyle("MedicLab")},[n("b-form-checkbox",{attrs:{id:"MedicLab"},model:{value:e.roles.MedicLab,callback:function(t){e.$set(e.roles,"MedicLab",t)},expression:"roles.MedicLab"}},[e._v(" "+e._s(e.role2Text("MedicLab"))+" ")])],1),n("div",{style:e.roleStyle("DocumentManager")},[n("b-form-checkbox",{attrs:{id:"DocumentManager"},model:{value:e.roles.DocumentManager,callback:function(t){e.$set(e.roles,"DocumentManager",t)},expression:"roles.DocumentManager"}},[e._v(" "+e._s(e.role2Text("DocumentManager"))+" ")])],1),n("div",{style:e.roleStyle("DataExporter")},[n("b-form-checkbox",{attrs:{id:"DataExporter"},model:{value:e.roles.DataExporter,callback:function(t){e.$set(e.roles,"DataExporter",t)},expression:"roles.DataExporter"}},[e._v(" "+e._s(e.role2Text("DataExporter"))+" ")])],1),n("div",{style:e.roleStyle("Helper")},[n("b-form-checkbox",{attrs:{id:"Helper"},model:{value:e.roles.Helper,callback:function(t){e.$set(e.roles,"Helper",t)},expression:"roles.Helper"}},[e._v(" "+e._s(e.role2Text("Helper"))+" ")])],1),n("h2",[e._v(e._s(e.$t("TimeAndPeopleSectionPeople"))+":")]),e.placePrivider?n("div",e._l(e.placePrivider.users,(function(t){return n("div",{key:t.invitationId},[n("b-form-checkbox",{model:{value:e.selectedUsers[t.email],callback:function(n){e.$set(e.selectedUsers,t.email,n)},expression:"selectedUsers[user.email]"}},[e._v(" "+e._s(t.name)+" ["),n("b",[e._v(e._s(e.name2shortcut(t.name)))]),e._v("] ")])],1)})),0):e._e()]),n("b-col",{attrs:{md:"10"}},[n("FullCalendar",{ref:"calendar",attrs:{id:"calendar",options:Object.assign({},e.calendarOptions,{locale:e.calendarLocale})}})],1)],1)],1),n("b-tab",{attrs:{title:e.$t("formAdminHRUserOverview")}},[n("b-table",{attrs:{items:e.data,fields:e.fields},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[n("button",{staticClass:"btn btn-primary m-2",on:{click:function(n){return e.editPlaceClick(t)}}},[e._v(" "+e._s(e.$t("formAdminHREdit"))+" ")]),n("button",{staticClass:"btn btn-primary m-2",on:{click:function(n){return e.deletePlaceClick(t)}}},[e._v(" "+e._s(e.$t("formAdminHRDelete"))+" ")])]}},{key:"cell(role)",fn:function(t){return[e._v(" "+e._s(e.formatRoles(t))+" ")]}},{key:"cell(actions)",fn:function(t){return[n("button",{staticClass:"btn btn-primary m-2",on:{click:function(n){return e.deleteUserClick(t)}}},[e._v(" "+e._s(e.$t("formAdminHRDelete"))+" ")])]}}])})],1),n("b-tab",{attrs:{title:e.$t("formAdminHRUserInvite")}},[n("b-row",{staticClass:"my-2"},[n("b-col",{attrs:{md:"10","offset-md":"2"}},[n("h2",[e._v(e._s(e.$t("formAdminHRSendInvitation")))])])],1),n("b-row",{staticClass:"my-2"},[n("b-col",{attrs:{md:"2"}},[n("label",{attrs:{for:"name"}},[e._v(e._s(e.$t("formAdminHRName")))])]),n("b-col",{attrs:{md:"10"}},[n("b-input",{ref:"name",attrs:{id:"name"},model:{value:e.person.name,callback:function(t){e.$set(e.person,"name",t)},expression:"person.name"}})],1)],1),n("b-row",{staticClass:"my-2"},[n("b-col",{attrs:{md:"2"}},[n("label",{attrs:{for:"email"}},[e._v(e._s(e.$t("formAdminHREmail")))])]),n("b-col",{attrs:{md:"10"}},[n("b-input",{ref:"email",attrs:{id:"email",type:"email"},model:{value:e.person.email,callback:function(t){e.$set(e.person,"email",t)},expression:"person.email"}})],1)],1),n("b-row",{staticClass:"my-2"},[n("b-col",{attrs:{md:"2"}},[n("label",{attrs:{for:"phone"}},[e._v(e._s(e.$t("formAdminHRPhone")))])]),n("b-col",{attrs:{md:"10"}},[n("b-input",{ref:"phone",attrs:{id:"phone"},model:{value:e.person.phone,callback:function(t){e.$set(e.person,"phone",t)},expression:"person.phone"}})],1)],1),n("b-row",{staticClass:"my-2"},[n("b-col",{attrs:{md:"2"}},[n("label",{attrs:{for:"message"}},[e._v(e._s(e.$t("formAdminHRInvitationText")))])]),n("b-col",{attrs:{md:"10"}},[n("b-input",{ref:"message",attrs:{id:"message"},model:{value:e.person.message,callback:function(t){e.$set(e.person,"message",t)},expression:"person.message"}})],1)],1),n("b-row",{staticClass:"mb-2"},[n("b-col",{attrs:{"offset-md":"2"}},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:e.sendingInvitation},on:{click:e.inviteUserClick}},[e._v(" "+e._s(e.$t("formAdminHRInvite"))+" ")])])],1),n("h2",[e._v(e._s(e.$t("formAdminHRInvitationSent")))]),n("b-table",{attrs:{items:e.dataInvitations,fields:e.fieldsInvitations,sortBy:"invitationTime",sortDesc:!0},scopedSlots:e._u([{key:"cell(invitationTime)",fn:function(t){return[e._v(" "+e._s(e._f("formatDateTime")(t.item.invitationTime))+" ")]}},{key:"cell(status)",fn:function(t){return["invited"===t.item.status?n("span",[e._v(" "+e._s(e.$t("formAdminHRInvitationWaiting"))+" ")]):"declined"===t.item.status?n("span",[e._v(" "+e._s(e.$t("formAdminHRInvitationDeclined"))+" ")]):"accepted"===t.item.status?n("span",[e._v(" "+e._s(e.$t("formAdminHRInvitationAccepted"))+" ")]):n("span",[e._v(" "+e._s(t.item.status)+" ")])]}},{key:"cell(actions)",fn:function(t){return[n("button",{staticClass:"btn btn-primary m-2",on:{click:function(n){return e.deleteInvitationClick(t)}}},[e._v(" "+e._s(e.$t("formAdminHRDeleteInvitation"))+" ")])]}}])})],1)],1)],1),e.eventinfo&&e.eventinfo.event&&e.eventinfo.event.start?n("b-modal",{attrs:{title:e.$t("formAdminHRUserOverviewTitle"),"ok-title":e.$t("formAdminHRUnassign"),"cancel-title":e.$t("formAdminHRCancel")},on:{ok:function(t){return e.unassignClick(e.eventinfo.event)}},model:{value:e.modalEditShow,callback:function(t){e.modalEditShow=t},expression:"modalEditShow"}},[n("h4",[e._v(e._s(e.getUser(e.eventinfo.event.extendedProps.user).name))]),n("div",{style:e.roleStyle(e.eventinfo.event.extendedProps.role)},[e._v(" "+e._s(e.role2Text(e.eventinfo.event.extendedProps.role))+" ")]),n("div",[e._v(" "+e._s(e.$t("formAdminHREmail"))+": "+e._s(e.getUser(e.eventinfo.event.extendedProps.user).email)+" ")]),n("div",[e._v(" "+e._s(e.$t("formAdminHRShortcut"))+": "+e._s(e.name2shortcut(e.getUser(e.eventinfo.event.extendedProps.user).name))+" ")]),n("div",[e._v(" "+e._s(e.$t("formAdminHRAlocatedTime"))+": "+e._s(e._f("formatDateTime")(e.eventinfo.event.start))+" - "+e._s(e._f("formatDateTime")(e.eventinfo.event.end))+" ")])]):e._e(),n("b-modal",{attrs:{title:e.$t("formAdminHRAddUserTitle"),"ok-title":e.$t("formAdminHRAssign"),"cancel-title":e.$t("formAdminHRCancel")},on:{ok:e.assignClick},model:{value:e.modalSetupShow,callback:function(t){e.modalSetupShow=t},expression:"modalSetupShow"}},[""===this.place?n("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.$t("formAdminHRSelectPlace"))+" ")]):n("div",[n("h4",[e._v(e._s(e.$t("formAdminHRPlace")))]),n("p",[e._v(e._s(this.placeObj.name))])]),e.roleNotSelected()?n("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.$t("formAdminHRSelectRole"))+" ")]):e._e(),e._l(this.roles,(function(t,s){return n("div",{key:s},[t?n("div",[n("div",{style:e.roleStyle(s)},[e._v(" "+e._s(e.role2Text(s))+" ")])]):e._e()])})),e.userNotSelected()?n("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.$t("formAdminHRSelectUser"))+" ")]):e._e(),e._l(this.selectedUsers,(function(t,s){return n("div",{key:s},[t?n("div",[n("h4",[e._v(e._s(e.getUser(s).name))]),n("div",[e._v(e._s(e.$t("formAdminHREmail"))+": "+e._s(s))]),n("div",[e._v(" "+e._s(e.$t("formAdminHRShortcut"))+": "+e._s(e.name2shortcut(e.getUser(s).name))+" ")])]):e._e()])})),n("h4",[e._v(e._s(e.$t("adminLimitsAlocationTime")))]),e.fullDayMode?n("div",[e._v(" "+e._s(e.$t("formAdminHRFullDayAlocation"))+" "),n("div",[e._v(" "+e._s(e.$t("adminLimitsDates"))+" "+e._s(e.$t("adminLimitsFrom"))+" "+e._s(e._f("formatDate")(e.fromDate))+" "+e._s(e.$t("adminLimitsUntil"))+" "+e._s(e._f("formatDate")(e.untilDateMinusOneDay))+" "+e._s(e.$t("adminLimitsEvening"))+" ")])]):n("div",[e._v(" "+e._s(e.$t("adminLimitsDaily"))+" "+e._s(e.$t("adminLimitsFrom"))+" "+e._s(e.displayHoursFrom())+":00 "+e._s(e.$t("adminLimitsUntil"))+" "+e._s(e.displayHoursUntil())+":00 "),n("div",[e._v(" "+e._s(e.$t("adminLimitsDates"))+" "+e._s(e.$t("adminLimitsFrom"))+" "+e._s(e._f("formatDate")(e.fromDate))+" "+e._s(e.$t("adminLimitsUntil"))+" "+e._s(e._f("formatDate")(e.untilDate))+" ")])])],2)],1)},i=[],a=n("2f62"),r=n("f5ff"),o=n("3cdd"),l=n("3e32"),c=n("a20c"),d=n("327e"),m=n.n(d),u=n("2264"),f=n.n(u);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={components:{FullCalendar:r["a"]},data:function(){return{modalEditShow:!1,modalSetupShow:!1,eventinfo:{},selectedUsers:{},sendingInvitation:!1,dataInvitations:[],allocations:[],fromDate:(new Date).toISOString(),untilDate:(new Date).toISOString(),roles:{DocumentManager:!1,MedicLab:!1,DataExporter:!1,Helper:!1,MedicTester:!1},revision:!1,place:"",data:[],tabIndex:-1,person:{name:"",email:"",phone:"",message:""},fields:[{label:this.$t("formAdminHRName"),key:"name",sortable:!0},{label:this.$t("formAdminHREmail"),key:"email",sortable:!0},{label:this.$t("formAdminHRRole"),key:"role",sortable:!0},{label:this.$t("formAdminHRActions"),key:"actions",sortable:!1}],fieldsInvitations:[{label:this.$t("formAdminHRName"),key:"name",sortable:!0},{label:this.$t("formAdminHREmail"),key:"email",sortable:!0},{label:this.$t("formAdminHRInviterName"),key:"inviterName",sortable:!0},{label:this.$t("formAdminHRInvitationTime"),key:"invitationTime",sortable:!0},{label:this.$t("formAdminHRStatus"),key:"status",sortable:!0},{label:this.$t("formAdminHRActions"),key:"actions",sortable:!1}],calendarOptions:{locale:m.a,headerToolbar:{start:"dayGridWeek,dayGridMonth timeGridWeek,timeGridDay",center:"title",end:"today prev,next"},initialView:"timeGridWeek",plugins:[o["b"],l["a"],c["a"]],selectable:!0,eventClick:this.eventClick,select:this.select,selectAllow:this.selectAllow,eventRender:this.eventRender,contentHeight:500,slotDuration:"01:00:00",displayEventTime:!1,firstDay:1,eventDisplay:"block",events:[]},events:[],selection:{title:"Title",allDay:!0}}},computed:{placePrivider:function(){var e=this;return this.$store.state.placeProvider.places?this.$store.state.placeProvider.places.find((function(t){return t.placeProviderId===e.pp})):{}},pp:function(){return this.$store.state?this.$store.state.user.tokenData.pp:""},placeObj:function(){return this.$store.state.place.places?this.$store.state.place.places[this.place]:{}},canAssign:function(){var e=this.roles.MedicTester||this.roles.DocumentManager||this.roles.MedicLab||this.roles.DataExporter||this.roles.Helper;if(!e)return!1;for(var t in this.selectedUsers)if(this.selectedUsers[t])return!0;return!1},fullDayMode:function(){return this.displayHoursFrom()==this.displayHoursUntil()},untilDateMinusOneDay:function(){var e=new Date(this.untilDate);return e.setDate(e.getDate()-1)},places:function(){function e(e,t){return e.name<t.name?-1:e.name>t.name?1:0}return Object.values(this.$store.state.place.places).sort(e)},calendarLocale:function(){switch(this.$i18n.locale){case"sk":return m.a;case"cs":return f.a;default:return null}}},watch:{pp:function(){this.ListPPInvites({placeProviderId:this.pp})},placePrivider:function(){console.log("placePrivider",this.placePrivider)},tabIndex:function(){var e=this;this.$refs.calendar&&this.$nextTick((function(){var t=e.$refs.calendar.getApi();t.next(),t.prev()}))},place:function(){var e=this;console.log("place",this.place),this.ListPlaceAllocations({placeId:this.place}).then((function(t){e.allocations=t,console.log("this.allocations2",e.allocations),e.redrawEvents(t)})),this.ListScheduledDays({placeId:this.place}).then((function(t){t&&e.processScheduledDays()}))},allPlaces:function(){var e=this;this.ListScheduledDays({placeId:this.place}).then((function(t){t&&e.processScheduledDays()}))},fromDate:function(){},untilDate:function(){}},mounted:function(){var e=this;this.LoadUsers().then((function(t){t&&(e.data=Object.values(t))})),this.ListPrivate().then((function(t){t&&e.ListPlaceAllocations({placeId:e.place}).then((function(t){e.allocations=t,e.redrawEvents(t),console.log("this.allocations1",e.allocations)}))})),this.ReloadPlaces(),this.ListPPInvites({placeProviderId:this.pp}).then((function(t){t&&(e.dataInvitations=t)})),this.tabIndex=0},methods:p(p(p({},Object(a["b"])({ListPrivate:"placeProvider/ListPrivate",InviteUser:"user/InviteUser",ListPPInvites:"user/ListPPInvites",InviteUserToPP:"placeProvider/InviteUserToPP",ListPlaceAllocations:"placeProvider/ListPlaceAllocations",RemoveAllocationAtPlace:"placeProvider/RemoveAllocationAtPlace",AllocatePersonsToPlace:"placeProvider/AllocatePersonsToPlace",LoadUsers:"user/LoadUsers",RemoveUser:"user/RemoveUser",ListScheduledDays:"place/ListScheduledDays",ReloadPlaces:"place/ReloadPrivatePlaces"})),Object(a["b"])({openSuccess:"snackbar/openSuccess"})),{},{redrawEvents:function(e){for(var t in this.calendarOptions.events=[],e){var n=this.getUser(e[t].user);console.log("allocations[index]",e[t],n);var s=e[t].user;n&&n.name&&(s=n.name);var i=this.name2shortcut(s);e[t].title=i;var a=this.roleColor(e[t].role);e[t].backgroundColor=a,this.calendarOptions.events.push(e[t])}},processScheduledDays:function(){this.events=[],this.actions={}},eventClick:function(e){this.eventinfo=e,this.modalEditShow=!0},select:function(e){this.fromDate=e.startStr,this.untilDate=e.endStr,this.modalSetupShow=!0},displayHoursFrom:function(){return new Date(this.fromDate).getHours()},displayHoursUntil:function(){return new Date(this.untilDate).getHours()},selectAllow:function(e){console.log("info",e,new Date<e.start);var t=new Date,n=t.setDate(t.getDate()-1);return!(n>e.start)},formatRoles:function(e){return e.item.roles.join(", ")},deleteUserClick:function(e){var t=this;confirm(this.$t("formAdminHRDeleteUserMessage"))&&this.RemoveUser({email:e.item.email}).then((function(e){e&&t.LoadUsers().then((function(e){e&&(t.data=Object.values(e))}))}))},deleteInvitationClick:function(e){confirm(this.$t("formAdminHRDeleteInvitationMessage"))&&console.log("todo")},inviteUserClick:function(){var e=this;this.sendingInvitation=!0,this.InviteUserToPP(this.person).then((function(t){e.sendingInvitation=!1,t&&(e.openSuccess(e.$t("formAdminHRUserinvited")),e.email="",e.name="",e.phone="",e.ListPPInvites({placeProviderId:e.pp}).then((function(t){t&&(e.dataInvitations=t)})))}))},eventRender:function(e,t){console.log("eventRender",e),t.find("span.fc-event-title").html(t.find("span.fc-event-title").text())},unassignClick:function(e){var t=this;confirm("Naozaj chcete odobrať tieto oprávnenia?")&&(console.log("event",e),this.RemoveAllocationAtPlace({allocationId:e.id,placeId:this.place}).then((function(e){e&&t.ListPlaceAllocations({placeId:t.place}).then((function(e){console.log("this.allocations4",t.allocations),t.allocations=e,t.redrawEvents(e)}))})))},assignClick:function(){var e=this;for(var t in console.log("this.selectedUsers",this.selectedUsers),this.roles)if(this.roles[t])for(var n in this.selectedUsers)if(this.selectedUsers[n]){console.log("selectedUsers",t,n);var s=new Date(this.fromDate),i=new Date(this.untilDate);s.setHours(12,0,0,0),i.setHours(12,0,0,0),this.fullDayMode&&i.setDate(i.getDate()-1);for(var a=new Date(s);a<=new Date(i);a.setDate(a.getDate()+1)){var r=new Date(a);this.fullDayMode?r.setHours(0,0,0,0):r.setHours(new Date(this.fromDate).getHours(),0,0,0);var o=r.toISOString();this.fullDayMode?r.setHours(24,0,0,0):r.setHours(new Date(this.untilDate).getHours(),0,0,0);var l=r.toISOString(),c=this.roleColor(t),d=this.getUser(n),m=d.name;m||(m=n);var u=this.name2shortcut(m);this.events.push({title:u,start:o,end:l,backgroundColor:c,user:n,role:t})}}this.place&&this.events.length>0&&this.AllocatePersonsToPlace({allocations:this.events,placeId:this.place}).then((function(t){t&&e.ListPlaceAllocations({placeId:e.place}).then((function(t){console.log("this.allocations1",e.allocations),e.allocations=t,e.redrawEvents(t),e.events=[]}))}))},roleStyle:function(e){var t=this.roleColor(e);return"background: ".concat(t,"; color: white; border-radius: 3px; margin-bottom: 5px; padding: 2px 5px; font-weight:bold; ")},getBackground:function(e){return this.roleColor(e)},roleColor:function(e){if(!e)return"black";switch(e){case"Helper":return"#666";case"MedicTester":return"green";case"MedicLab":return"blue";case"DocumentManager":return"darkorange";case"DataExporter":return"purple"}return"red"},role2Text:function(e){if(console.log("role2Text.role",e),!e)return"?";switch(e){case"Helper":return this.$t("formAdminHRHelper");case"MedicTester":return this.$t("formAdminHRMedicTester");case"MedicLab":return this.$t("formAdminHRMedicLab");case"DocumentManager":return this.$t("formAdminHRDocumentManager");case"DataExporter":return this.$t("formAdminHRDataExporter")}return"red"},name2shortcut:function(e){if(!e)return"???";var t=e.trim().split(" ");return 1==t.length?e.length<=3?e.toUpperCase():e.substring(0,3).toUpperCase():t[0].length>=1&&t[t.length-1].length>=2?(t[0].substring(0,1)+t[t.length-1].substring(0,2)).toUpperCase():(t[0].substring(0,1)+t[t.length-1].substring(0,1)).toUpperCase()+"?"},getUser:function(e){return this.placePrivider.users.find((function(t){return t.email==e}))},userNotSelected:function(){for(var e in this.selectedUsers)if(this.selectedUsers[e])return!1;return!0},roleNotSelected:function(){for(var e in this.roles)if(this.roles[e])return!1;return!0}})},_=b,g=n("2877"),D=Object(g["a"])(_,s,i,!1,null,null,null);t["default"]=D.exports}}]);