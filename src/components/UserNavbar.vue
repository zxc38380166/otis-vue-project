<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo" @click="pushAbout"> </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link"
                ><router-link class="nav-link text-white" to="/"
                  >關於我們</router-link
                >
              </a>
              <a class="nav-link"
                ><router-link
                  class="nav-link text-white"
                  to="/UserBoard/UserHome"
                  >品牌故事</router-link
                >
              </a>
              <a class="nav-link"
                ><router-link
                  class="nav-link text-white"
                  to="/UserBoard/UserProducts"
                  >型錄</router-link
                >
              </a>
              <a class="nav-link">
                <router-link
                  class="nav-link text-white"
                  to="/UserBoard/UserCheckOut"
                  >訂單</router-link
                >
              </a>
              <a class="nav-link"
                ><router-link
                  class="nav-link text-white"
                  to="/UserBoard/UserFAQ"
                  >FAQ</router-link
                >
              </a>
              <a class="nav-link"
                ><router-link
                  class="nav-link text-white"
                  to="/ServerBoard/ServerProducts"
                  >會員登入</router-link
                >
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pushAbout() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.logo {
  background-repeat: no-repeat;
  background-image: url(https://dm2306files.storage.live.com/y4mCN06iKsiWPZR2T4ZKhXk7oM0dXZ1adjib88CZiCcUWovKpO4V4nkrOCTBo8troaMVw5lUisb2hK50bENHGlk3TmPbJ8Szey3cRAFlvHVFf4EWMcH1CMrkrBrdyK90pGemhKHgHcxrf7zlVeLj3cpIhH8WLNth20qYy1QRRMIAsOKWKTUkU1JEmm8LwhzZ8Mh?width=500&height=500&cropmode=none);
  background-size: cover;
  background-position: center;
  height: 80px;
  width: 120px;
  margin-left: 3%;
  cursor: pointer;
}
</style>
