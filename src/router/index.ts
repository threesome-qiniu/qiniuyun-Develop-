import {createRouter, createWebHistory} from "vue-router";

// 创建路由
const router = createRouter({
    history: createWebHistory(),

    routes: [
        {path: "/", component: () => import("@/Login/Login.vue")},
        {
            path: "/layout",
            name: "Index",
            component: () => import("@/Layout/Index.vue"),

            // children: [{path: '1', component: () => import('@/Layout/1.vue')}]
        },
        {path: '/user', component: () => import('@/Layout/User.vue')},
        {path: '/test', component: () => import('@/Layout/Test.vue')},

    ],
});

export default router;
