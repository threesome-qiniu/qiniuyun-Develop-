import { createRouter, createWebHistory } from "vue-router";

// 创建路由
const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/login", component: () => import("@/Login/Login.vue") },
    {
      path: "/",
      name: "Index",
      component: () => import("@/Layout/Index.vue"),

      children: [
        { path: "", component: () => import("@/Layout/Video.vue") },
        { path: "user", component: () => import("@/Layout/User.vue") },
        {
          path: "/",
          name: "Index",
          component: () => import("@/Layout/Index.vue"),

          children: [
            { path: "", component: () => import("@/Layout/Video.vue") },
            { path: "user", component: () => import("@/Layout/User.vue") },
            {
              path: "/publish",
              component: () => import("@/Layout/Publish.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
