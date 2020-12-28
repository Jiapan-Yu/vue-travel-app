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
    path: "/details/:slug",
    name: "details",
    component: () =>
      import(
        /* webpackChunkName: "jamaica" */ "../views/DestinationDetails.vue"
      ),
    caseSensitive: true,
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkExactActiveClass: "exact-active-spot"
});

export default router;
