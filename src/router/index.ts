import { createRouter, createWebHistory } from "vue-router";

// 创建路由
const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", component: () => import("../Login/Login.vue") },
    {
      path: "/layout",
      component: () => import("../Layout/index.vue"),
      
  
      children:[{path:'user',component:()=>import('../Layout/User.vue')}]
    },
    
   
  ],
});

export default router;
