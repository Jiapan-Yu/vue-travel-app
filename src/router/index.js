import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    caseSensitive: true
  },
  {
    path: "/destination/:slug",
    name: "details",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue"
      ),
    caseSensitive: true,
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          ),
        props: true
      }
    ],
    beforeEnter: (to, from, next) => {
      let isExist;
      isExist = store.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if (isExist) {
        next();
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "/404",
    name: "notFound",
    alias: "*",
    component: () =>
      import(/* webpackChunkName: NotFound */ "@/views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkExactActiveClass: "exact-active-spot"
});

export default router;
