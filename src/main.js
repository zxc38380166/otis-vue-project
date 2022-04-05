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
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
const app = createApp(App);
app.config.globalProperties.$filters = {
  // 註冊全域函式
  date,
  currency,
};
// 定義驗證規則
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale("zh_TW");
app.use(VueAxios, axios);
app.use(router);
app.component("Loading", Loading); // 全域註冊讀取套件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount("#app");
