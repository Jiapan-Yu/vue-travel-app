import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "details",
    component: () =>
      import(
        /* webpackChunkName: "jamaica" */ "../views/DestinationDetails.vue"
      )
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "exact-active-spot"
});

export default router;
