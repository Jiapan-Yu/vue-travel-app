import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import store from "./store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    caseSensitive: true,
  },
  {
    path: "/destination/:slug",
    name: "details",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails.vue"
      ),
    caseSensitive: true,
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "./views/ExperienceDetails.vue"
          ),
        props: true,
      },
    ],
    beforeEnter: (to, from, next) => {
      let isExist;
      isExist = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (isExist) {
        next();
      } else {
        next({ name: "notFound" });
      }
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "User" */ "@/views/User.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () =>
      import(/* webpackChunkName: "Invoices" */ "@/views/Invoices.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Login.vue"),
  },
  {
    path: "/404",
    name: "notFound",
    alias: "*",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkExactActiveClass: "exact-active-spot",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        console.log("to.hash: ", to.hash);
        position.selector = to.hash;

        if (to.hash === "#experience") {
          console.log("scrollBehavior's to: ", to);
          position.offset = { y: 140 };
        }

        if (document.querySelector(to.hash)) {
          console.log("position: ", position);
          return position;
        }

        console.log("return false");

        // retain the current scroll position
        return false;
      }
    }
  },
});

router.beforeEach((to, from, next) => {
  // if (to.meta.requiresAuth) {
  console.log("beforeEach's to: ", to);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // need to login
    if (!store.user) {
      next({
        // https://router.vuejs.org/zh/guide/essentials/navigation.html
        // name 和 query 可以共用
        name: "login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
