<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide w-100"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_02.8b09666c.jpg"
          class="d-block w-100"
        />
        <span style="position: absolute; top: 35%; left: 50%">
          <span class="text-warning fs-5">品牌傳承 : 源自布拉蘇絲</span>\
          <div class="w-100">
            <p class="text-muted imgText w-75">
              在安寧恬靜的瑞士汝拉山谷，居民的生活隨著打造複雜功能機械裝置的節奏而律動。開始譜寫高潮迭起的製錶史詩。汝拉山谷擁有森林、溪水、冰雪、鐵礦石等天然資源，有利於製錶業的發展及興盛。汝拉山谷未經人工修飾的自然景觀和滿天星斗的夜空，啓發了一代代製錶師的創作靈感。
            </p>
            <button type="button" class="btn btn-outline-secondary btn-sm">
              -探索系列
            </button>
          </div>
        </span>
      </div>
      <div class="carousel-item">
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg"
          class="d-block w-100 h-auto"
        />
        <span style="position: absolute; top: 35%; left: 10%">
          <span class="text-warning fs-5">品牌傳承 : 源自布拉蘇絲</span>\
          <div class="w-75">
            <p class="text-muted imgText w-50">
              在安寧恬靜的瑞士汝拉山谷，居民的生活隨著打造複雜功能機械裝置的節奏而律動。開始譜寫高潮迭起的製錶史詩。汝拉山谷擁有森林、溪水、冰雪、鐵礦石等天然資源，有利於製錶業的發展及興盛。汝拉山谷未經人工修飾的自然景觀和滿天星斗的夜空，啓發了一代代製錶師的創作靈感。
            </p>
            <button type="button" class="btn btn-outline-secondary btn-sm">
              -探索系列
            </button>
          </div>
        </span>
      </div>
      <div class="carousel-item">
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_04.27833224.jpg"
          class="d-block w-100 h-auto"
        />
        <span style="position: absolute; top: 35%; left: 50%">
          <span class="text-warning fs-6 fs-md-5">品牌傳承 : 源自布拉蘇絲</span>\
          <div class="w-100">
            <p class="text-muted imgText w-75">
              在安寧恬靜的瑞士汝拉山谷，居民的生活隨著打造複雜功能機械裝置的節奏而律動。開始譜寫高潮迭起的製錶史詩。汝拉山谷擁有森林、溪水、冰雪、鐵礦石等天然資源，有利於製錶業的發展及興盛。汝拉山谷未經人工修飾的自然景觀和滿天星斗的夜空，啓發了一代代製錶師的創作靈感。
            </p>
            <button type="button" class="btn btn-outline-secondary btn-sm">
              -探索系列
            </button>
          </div>
        </span>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden"></span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // backImgage1: {
      //   height:`500px`,
      //   backgroundImage:`url(https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg)`,
      //   backgroundSize:`cover`,
      //   backgroundRepeat:`no-repeat`,
      //   backgroundPosition:`center`,
      // },
      // backImgage1: {},
      // backImgage1: {},
    };
  },
};
</script>
<style lang="scss">
@media (max-width: 950px) {
  .imgText {
    display: none;
  }
}
</style>
