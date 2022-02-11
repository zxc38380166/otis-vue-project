<template>
  <!-- 導覽列 -->
  <div class="navber d-flex justify-content-center">
    <nav class="navbar navbar-expand-lg navbar-dark w-75">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/ServerBoard/ServerProducts"
          >登入</router-link
        >
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
            <router-link class="nav-link" to="/UserBoard/UserHome"
              >品牌故事</router-link
            >
            <router-link class="nav-link" to="/UserBoard/UserProducts"
              >型錄</router-link
            >
            <router-link class="nav-link" to="/UserBoard/UserCheckOut"
              >訂單</router-link
            >
            <router-link
              class="nav-link"
              to="/UserBoard/UserCheckOut"
            ></router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
