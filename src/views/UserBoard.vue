<template>
  <div class="bg-dark p-0 m-0">
    <UserNavnar></UserNavnar>
    <router-view></router-view>
   
  </div>
</template>
<script>
import UserNavnar from "../components/UserNavbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    UserNavnar,
    
  },
};
</script>
