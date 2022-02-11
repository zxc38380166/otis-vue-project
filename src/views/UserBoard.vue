<template>
  <div class="bg-dark p-0 m-0">
    <UserNavnar></UserNavnar>
    <UserCarouse></UserCarouse>
    <router-view></router-view>
  </div>
</template>
<script>
import UserNavnar from "../components/UserNavbar.vue";
import UserCarouse from "../components/UserCarouse.vue";
export default {
  data() {
    return {};
  },
  methods: {
    UserHome(){
      this.$router.push("/UserBoard/UserHome")
    }
  },
  created() {
    this.UserHome()
  },
  components: { UserNavnar, UserCarouse },
};
</script>
