(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0dbb"],{4427:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"app-pane-lgray py-2"},[n("b-container",[n("h1",[t._v(t._s(t.$t("invitationsManagement")))])])],1),n("b-container",[n("b-row",[n("b-col",[n("b-table",{attrs:{items:t.dataInvitations,fields:t.fieldsInvitations,sortBy:"invitationTime",sortDesc:!0},scopedSlots:t._u([{key:"cell(invitationTime)",fn:function(i){return[t._v(" "+t._s(t._f("formatDateTime")(i.item.invitationTime))+" ")]}},{key:"cell(status)",fn:function(i){return["invited"===i.item.status?n("span",[t._v(" "+t._s(t.$t("invitationsWaitingForConfirmation"))+" ")]):"declined"===i.item.status?n("span",[t._v(" "+t._s(t.$t("invitationsInvitationDeclined"))+" ")]):"accepted"===i.item.status?n("span",[t._v(" "+t._s(t.$t("invitationsInvitationAccepted"))+" ")]):n("span",[t._v(" "+t._s(i.item.status)+" ")])]}},{key:"cell(actions)",fn:function(i){return["invited"===i.item.status?n("span",[n("button",{staticClass:"btn btn-primary m-2",on:{click:function(n){return t.acceptInvitationClick(i)}}},[t._v(" "+t._s(t.$t("invitationsAccept"))+" ")]),n("button",{staticClass:"btn btn-light m-2",on:{click:function(n){return t.cancelInvitationClick(i)}}},[t._v(" "+t._s(t.$t("invitationsDecline"))+" ")])]):t._e()]}}])})],1)],1)],1)],1)},s=[],a=n("2f62");function o(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.push.apply(n,e)}return n}function r(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){c(t,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))}))}return t}function c(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}var l={data:function(){return{dataInvitations:[],fieldsInvitations:[{label:this.$t("invitationsCompany"),key:"companyName",sortable:!0},{label:this.$t("invitationsInviter"),key:"inviterName",sortable:!0},{label:this.$t("invitationsInvitationTime"),key:"invitationTime",sortable:!0},{label:this.$t("invitationsStatus"),key:"status",sortable:!0},{label:this.$t("invitationsActions"),key:"actions",sortable:!1}]}},mounted:function(){var t=this;this.ListUserInvites({placeProviderId:this.pp}).then((function(i){i&&(t.dataInvitations=i)})),this.tabIndex=0},methods:r(r(r({},Object(a["b"])({ListPrivate:"placeProvider/ListPrivate",InviteUser:"user/InviteUser",ListUserInvites:"user/ListUserInvites",InviteUserToPP:"placeProvider/InviteUserToPP",LoadUsers:"user/LoadUsers",ProcessInvitation:"user/ProcessInvitation",ListScheduledDays:"place/ListScheduledDays",ReloadPlaces:"place/ReloadPrivatePlaces"})),Object(a["b"])({openSuccess:"snackbar/openSuccess"})),{},{acceptInvitationClick:function(t){var i,n=this;console.log("todo"),null!==(i=t.item)&&void 0!==i&&i.invitationId&&this.ProcessInvitation({invitationId:t.item.invitationId,accepted:!0}).then((function(t){t&&n.ListUserInvites({placeProviderId:n.pp}).then((function(t){t&&(n.dataInvitations=t)}))}))},cancelInvitationClick:function(t){var i,n=this;console.log("todo"),null!==(i=t.item)&&void 0!==i&&i.invitationId&&confirm("Naozaj chcete zrušiť pozvánku?")&&this.ProcessInvitation({invitationId:t.item.invitationId,accepted:!1}).then((function(t){t&&n.ListUserInvites({placeProviderId:n.pp}).then((function(t){t&&(n.dataInvitations=t)}))}))}})},v=l,u=n("2877"),d=Object(u["a"])(v,e,s,!1,null,null,null);i["default"]=d.exports}}]);