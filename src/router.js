import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home/Home.vue";

import Detail from "./pages/datail/Detail.vue";
import Search from "./pages/search/Search.vue";
import Cart from "./pages/cart/Cart.vue";
import Login from "./pages/login/Login.vue";
import Overview from "./pages/overview/Overview.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview
    }

  ]
});
