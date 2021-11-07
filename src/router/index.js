import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Surah from "../views/Surah.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/surah/:surahNumber",
    name: "Surah",
    component: Surah,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
