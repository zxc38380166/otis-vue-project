<template>
  <div class="bg-dark">
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
  components: {
    UserNavnar,
    UserCarouse,
  },
};
</script>
<style></style>
