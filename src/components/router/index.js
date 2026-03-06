import { createMemoryHistory, createRouter } from "vue-router";

import about from "../about.vue";
import MainPage from "../MainPage.vue";
import TODO from "../TODO.vue";

const routes = [
  {
    path: "/",
    name: "Main page",
    component: MainPage,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/todo",
    name: "TODO",
    component: TODO,
  },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
