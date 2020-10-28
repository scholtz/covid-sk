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
    {
      path: "/admin/placeManager",
      name: "AdminPlaceManager",
      component: () => import("../pages/Admin/PlaceManager.vue"),
    },
    {
      path: "/admin/users",
      name: "AdminUsers",
      component: () => import("../pages/Admin/Users.vue"),
    },
    {
      path: "/admin/invite",
      name: "AdminInvite",
      component: () => import("../pages/Admin/Invite.vue"),
    },
    {
      path: "/admin/testingTime",
      name: "AdminTestingTime",
      component: () => import("../pages/Admin/TestingTime.vue"),
    },
    {
      path: "/tester/unannouncedVisitor",
      name: "TesterNewVisitor",
      component: () => import("../pages/Tester/NewVisitor.vue"),
    },
    {
      path: "/tester/registeredVisitor",
      name: "TesterRegisteredVisitor",
      component: () => import("../pages/Tester/RegisteredVisitor.vue"),
    },
    {
      path: "/lab/testResult",
      name: "labTestResult",
      component: () => import("../pages/Lab/TestResult.vue"),
    },
    {
      path: "/gdpr/manage",
      name: "gdpmanage",
      component: () => import("../pages/GDPR/Manage.vue"),
    },
  ],
});

export default router;
