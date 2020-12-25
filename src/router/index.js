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
    path: "/brazil",
    name: "brazil", // easy to link to with router-link
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue")
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/Panama.vue")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue")
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
