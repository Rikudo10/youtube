import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import about from "@/views/about.vue";
import help from "@/views/help.vue";
import info from "@/views/info.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/dashboard/Dashboard.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/help",
    name: "help",
    component: help,
  },
  {
    path: "/info/:id",
    name: "info",
    component: info,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import('@/views/account/settings.vue'),
    children:[
      {
        path: "login",
        name:"login",
        component: () => import ('@/views/account/updatefile/login.vue')
      },
      {
        path:"registration",
        name: "registration",
        component: ()=> import ('@/views/account/updatefile/registration.vue')
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;