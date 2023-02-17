import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewOperationView from "../views/NewOperationView.vue";
import SignInView from "../views/SignInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignInView,
    },
    {
      path: "/new-operation",
      name: "new-operation",
      component: NewOperationView,
    },

  ],
});

export default router;
