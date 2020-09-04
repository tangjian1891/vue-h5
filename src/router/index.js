import Vue from "vue";
import VueRouter from "vue-router";

/* eslint-disable */
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index.vue"),
    meta: {
      name: "首页",
      tx: 1,
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test-page/test-page.vue"),
    meta: {
      name: "测试页面",
      tx: 2,
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
  strict: process.env.NODE_ENV !== "production",
});
// 路由守卫
router.beforeEach((to, from, next) => {
  next();
});
export default router;
