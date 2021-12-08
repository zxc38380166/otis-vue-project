<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/ServerBoard/ServerProducts">切換至後台端</router-link>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <router-view />
  </div>
</template>
