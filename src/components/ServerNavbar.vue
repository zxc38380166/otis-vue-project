<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
         <a class="navbar-brand" href="#">
            <router-link class="navbar-brand" href="#" to="/Base/BaseCart">切換至用戶端</router-link>
         </a>
         <a class="navbar-brand" href="#">
            <router-link class="navbar-brand" href="#" to="/UserBord/UserProducts">切換至用戶端(work)</router-link>
         </a>
         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <a class="nav-link" href="#">
                     <router-link to="/ServerBoard/ServerProducts" class="nav-link">產品</router-link>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">
                     <router-link to="/ServerBoard/ServerOrders" class="nav-link">訂單</router-link>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link">
                     <router-link to="/ServerBoard/ServerCoupons" class="nav-link">優惠券</router-link>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" @click.prevent="logout">
                     <router-link to="/ServerBoard/ServerLogin" class="nav-link">登出</router-link>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>
<script>
export default {
   methods: {
      logout() { // 登出的方法
         const api = `${process.env.VUE_APP_API}logout` // 取得登出的api
         this.$http.post(api,).then((res) => {
            if (res.data.success) { // 當res.data.success為true時執行
               this.$router.push('/ServerLogin') // 此時取得後端資料為以登出,轉址回去登入頁面
            }
         })
      },
   },
}
</script>