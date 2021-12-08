<template>
   <UserNavnar></UserNavnar>
   <UserCarouse></UserCarouse>
   <router-view></router-view>
</template>

<script>
import UserNavnar from '../components/UserNavbar.vue'
import UserCarouse from  '../components/UserCarouse.vue'
export default {
   data() {
      return {
      }
   },
   components:{
      UserNavnar,
      UserCarouse,
   }
}
</script>
<style>
</style>