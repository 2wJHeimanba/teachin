import {createRouter,RouteRecordRaw,createWebHistory } from "vue-router"

const Home=()=>import('../view/Home.vue');
const PCHome=()=>import('../view/PCHome.vue');
const PCAbout=()=>import('../view/PCAbout.vue');
const MBHome=()=>import('../view/MBHome.vue');
const MBAbout=()=>import('../view/MBAbout.vue');

const routes:Array<RouteRecordRaw>=[
    {path:'/',name:'home',component:Home},
    {path:'/PCHome',name:'pc-home',component:PCHome},
    {path:'/PCAbout',name:'pc-about',component:PCAbout},
    {path:'/MBHome',name:'mb-home',component:MBHome},
    {path:'/MBAbout',name:'mb-about',component:MBAbout}
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router