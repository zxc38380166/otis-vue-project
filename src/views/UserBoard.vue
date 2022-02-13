<template>
  <div class="bg-dark p-0 m-0">
    <UserNavnar></UserNavnar>
    <UserCarouse></UserCarouse>
    <router-view></router-view>
    <Home></Home>
  </div>
</template>
<script>
import UserNavnar from "../components/UserNavbar.vue";
import UserCarouse from "../components/UserCarouse.vue";
import Home from "../views/UserHome.vue"
export default {
  data() {
    return {};
  },
  components: { UserNavnar, UserCarouse,Home },
};
</script>
