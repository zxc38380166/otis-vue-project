import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/ServerLogin.vue"),
  },
  {
    path: "/ServerLogin",
    component: () => import("../views/ServerLogin.vue"),
  },
  {
    path: "/ServerBoard",
    component: () => import("../views/ServerBoard.vue"),
    children: [
      {
        path: "ServerProducts",
        component: () => import("../views/ServerProducts.vue"),
      },
      {
        path: "ServerOrders",
        component: () => import("../views/ServerOrders.vue"),
      },
      {
        path: "ServerCoupons",
        component: () => import("../views/ServerCoupons.vue"),
      },
    ],
  },
  {
    path: "/UserBoard",
    component: () => import("../views/UserBoard.vue"),
    children: [
      {
        path: "UserHome",
        component: () => import("../views/UserHome.vue"),
      },
      {
        path: "UserProducts",
        component: () => import("../views/UserProducts.vue"),
      },
      {
        path: "UserCheckOut",
        component: () => import("../views/UserCheckOut.vue"),
      },
      {
        path: "UserProductDetails/:Id",   //路徑中加入 : 為動態路由
        component: () => import("../views/UserProductDetails.vue") 
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
