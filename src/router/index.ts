import {createRouter, createWebHistory} from "vue-router";

// 创建路由
const router = createRouter({
    history: createWebHistory(),

    routes: [
        {path: "/login", component: () => import("@/Login/Login.vue")},
        {
            path: "/",
            name: "Index",
            component: () => import("../Layout/index.vue"),

            children: [{path: 'video', component: () => import('../Layout/Video.vue')}]
        },
        {path: '/user', component: () => import('../Layout/User.vue')}

    ],
});

export default router;
