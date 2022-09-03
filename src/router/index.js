import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import MainHeader from "@/layout/MainHeader.vue";
import MainFooter from "@/layout/MainFooter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      components: {
        default: MainView,
        header: MainHeader,
        footer: MainFooter,
      },
    },
  ],
})

export default router
