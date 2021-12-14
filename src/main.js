import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Loading from "vue3-loading-overlay"; // 引入讀取套件
import "vue3-loading-overlay/dist/vue3-loading-overlay.css"; // 引入讀取套件規則
import { currency, date } from "./methods/filters"; // 引入千分號及時間換算方法
const app = createApp(App);
app.config.globalProperties.$filters = {
  // 註冊全域函式
  date,
  currency,
};
app.use(VueAxios, axios);
app.use(router);
app.component("Loading", Loading); // 全域註冊讀取套件
app.mount("#app");
