import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import  Loading  from  'vue3-loading-overlay' ;     // 引入讀取套件
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css' ; // 引入讀取套件規則
import 'bootstrap-icons/font/bootstrap-icons.css'
import {currency,date} from './methods/filters'     // 引入千分號及時間換算方法
import {Form,Field,ErrorMessage,defineRule,configure}from 'vee-validate';  //defineRule為定義規則名稱 configure為設定全域規則
import {email,required,min}from '@vee-validate/rules';
import {localize,setLocale}from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
defineRule('email',email)                       //加入郵件規則
defineRule('required',required)                 //加入必填規則
defineRule('min',min)                           //加入最小規則
configure({                                     //加入多國語言系
    generateMessage: localize({'zh_TW':zhTW}),  //載入繁體中文
    validateOnInput: true,                      //輸入字元立即進行驗證            
    });
setLocale('zh_TW')                              //設定預設語言
const app =createApp(App)

app.component('Form',Form);                     //vee-validate (三個標籤)
app.component('Field',Field);
app.component('ErrorMessage',ErrorMessage);

app.config.globalProperties.$filters = {
    date,
    currency,
  };

app.use(VueAxios,axios)
app.use(router)
app.component('Loading',Loading)    // 全域註冊讀取套件
app.mount('#app')
