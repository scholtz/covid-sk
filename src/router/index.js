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
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login.vue"),
    },
    {
      path: "/register",
      name: "SelectPlace",
      component: () => import("../pages/SelectTent.vue"),
    },
    {
      path: "/place/:placeId",
      name: "PlaceDay",
      component: () => import("../pages/SelectDay.vue"),
    },
    {
      path: "/place/:placeId/:dayId",
      name: "SelectHour",
      component: () => import("../pages/SelectHour.vue"),
    },
    {
      path: "/place/:placeId/:dayId/:hourId",
      name: "SelectMinute",
      component: () => import("../pages/SelectMinute.vue"),
    },
    {
      path: "/place/:placeId/:dayId/:hourId/:minuteId",
      name: "Registration",
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
    {
      path: "/user",
      name: "user",
      component: () => import("../pages/User.vue"),
    },
  ],
});

export default router;
