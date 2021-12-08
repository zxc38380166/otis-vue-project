<template>
   <Navbar></Navbar>
   <div class="container-fluid mt-3 position-relative">
      <router-view />
   </div>

</template>

<script>
   import Navbar from '../components/ServerNavbar.vue';
   export default {
      components: {
         Navbar, // 元件拆分 (導覽列)
      },

      created() {
         // document.cookie.replace 此段語法為取的cookie中名為hexToken的 cookie 
         const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
         // this.$http.defaults.headers.common.Authorization 為將token加入http request header
         this.$http.defaults.headers.common.Authorization = token;
         // 取得驗證登入的api路徑  
         const api = `${process.env.VUE_APP_API}api/user/check`;
         this.$http.post(api, ).then((res) => { // 利用axios的post方法連接api
            if (!res.data.success) { // 判斷當res中的success為false
               this.$router.push('/ServerLogin')
            }
         })
      },
   }
</script>
<style>

</style>