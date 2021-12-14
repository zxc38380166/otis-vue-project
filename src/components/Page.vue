<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" v-for="pages in pages.total_pages" :key="pages">
        <!-- 將頁碼渲染到頁面上 -->
        <a class="page-link" href="#" @click.prevent="updatePage(pages)">
          <!-- 利用emit請求父元件呼叫方法 -->
          {{ pages }}
          <!-- 渲染頁碼 -->
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: [
    "pages", // 利用 props 取得遠端儲存的頁碼
  ],
  methods: {
    updatePage(pages) {
      // 利用emit請求父元件呼叫方法
      this.$emit("emit-pages", pages);
    },
  },
};
</script>
