import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/HomePage.vue";
import Login from "./components/LoginPage.vue";
import Register from "./components/RegisterPage.vue";
// lazy-loaded
const Profile = () => import("./components/ProfilePage.vue");
const BoardAdmin = () => import("./components/BoardAdmin.vue");
const BoardSpv = () => import("./components/BoardSpv.vue");
const BoardIt = () => import("./components/BoardIt.vue");
const BoardTeller = () => import("./components/BoardTeller.vue");
const BoardCs = () => import("./components/BoardCs.vue");
const BoardUser = () => import("./components/BoardUser.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/spv",
    name: "spv",
    // lazy-loaded
    component: BoardSpv,
  },
  {
    path: "/it",
    name: "it",
    // lazy-loaded
    component: BoardIt,
  },
  {
    path: "/teller",
    name: "teller",
    // lazy-loaded
    component: BoardTeller,
  },
  {
    path: "/cs",
    name: "cs",
    // lazy-loaded
    component: BoardCs,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
export default router;
