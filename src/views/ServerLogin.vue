<template>
  <div class="container mt-5">
    <form class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            v-model="user.username"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            v-model="user.password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <span class="text-danger" v-if="toastMsg.success == false">{{
          toastMsg.error.message
        }}</span>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" @click.prevent="signin">
            <div
              class="spinner-border spinner-border-sm"
              v-if="isLoad"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
  <ToastMsg :toastMsg="toastMsg" ></ToastMsg>
</template>
<script>
import ToastMsg from "../components/Toast.vue";
export default {
  data() {
    return {
      toastMsg: {},
      user: {
        username: "",
        password: "",
      },
      isLoad: false,
    };
  },
  components: {
    ToastMsg,
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API}admin/signin`; // 設置api路徑
      this.isLoad = true;
      this.$http.post(api, this.user).then((res) => {
        this.isLoad = false;
        // 利用axios將this.user以post方式送到後端
        if (res.data.success) {
          // 判斷res中的success為true則執行
          const { token, expired } = res.data; // 取得連線後的資料
          document.cookie = `hexToken=${token} ; expired=${new Date(expired)}`; // 將token加入cookie
          this.$router.push("/ServerBoard/ServerProducts");
        } else {
          this.toastMsg = res.data;
        }
      });
    },
  },
};
</script>
