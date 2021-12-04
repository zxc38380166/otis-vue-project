<template>
   <div class="bg-dark">
      <div class="navber d-flex justify-content-center ">
         <!-- 導覽列 -->
         <nav class="navbar navbar-expand-lg navbar-dark bg-light w-75 justify-content bg-dark ">
            <div class="container-fluid ">
               <router-link class="navbar-brand" to="/dashboard/Products">切換至後台端</router-link>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                     <a class="nav-link active " aria-current="page" href="#">品牌故事</a>
                     <a class="nav-link text-light" href="#">FAQ</a>
                     <a class="nav-link text-light" href="#">合作邀約</a>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                           型錄
                        </a>
                        <ul class="dropdown-menu border border-1 bg-dark" aria-labelledby="navbarDropdownMenuLink">
                           <li><a class="dropdown-item text-light" href="#">機械錶</a></li>
                           <li><a class="dropdown-item text-light" href="#">男錶</a></li>
                           <li><a class="dropdown-item text-light" href="#">女錶</a></li>
                        </ul>
                     </li>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   </div>
   <router-view></router-view>
</template>
<script>
   export default {
      data() {
         return {}
      },
      created() {

      }

   }
</script>
<style>
</style>