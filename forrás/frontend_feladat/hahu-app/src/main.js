import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory,
  routes: [
    { path: "/", component: OpenPage },
    { path: "/offers", component: IngatlanKinalat },
  ],
});
app.use(router);
app.mount("#app");
