import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainHeader from "@/layout/MainHeader.vue";
import MainFooter from "@/layout/MainFooter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        header: MainHeader,
        footer: MainFooter,
      },
    },
  ],
})

export default router
