import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../pages/Dashboard.vue"),
    },
    {
      path: "/register",
      name: "Dashboard",
      component: () => import("../pages/SelectTent.vue"),
    },
    {
      path: "/place/:placeId",
      name: "PlaceDay",
      component: () => import("../pages/SelectDay.vue"),
    },
    {
      path: "/place/:placeId/:dayId",
      name: "PlaceHour",
      component: () => import("../pages/SelectHour.vue"),
    },
    {
      path: "/place/:placeId/:dayId/:hourId",
      name: "PlaceHour",
      component: () => import("../pages/SelectMinute.vue"),
    },
    {
      path: "/place/:placeId/:dayId/:hourId/:minuteId",
      name: "PlaceHour",
      component: () => import("../pages/Registration.vue"),
    },
    {
      path: "/place/:placeId/:dayId/:hourId/:minuteId/done",
      name: "RegistrationOk",
      component: () => import("../pages/RegistrationOk.vue"),
    },
    {
      path: "/results",
      name: "Results",
      component: () => import("../pages/Results.vue"),
    },
  ],
});

export default router;
