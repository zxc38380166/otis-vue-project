<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators size-none">
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
        <span style="position: absolute; top: 40%; left: 45%" class="size-none">
          <span class="text-warning fs-5">品牌傳承 : 源自布拉蘇絲</span><br />
          <span class="w-75 text-secondary size-sm"
            >傳統基礎上精益求精，特殊擒縱系統提高效率及可靠度。</span
          >
          <div class="w-75 text-secondary size-lg">
            在安寧恬靜的瑞士汝拉山谷，居民的生活隨著打造複雜功能機械裝置的節奏而律動。時計的開發離不開大自然的啓迪，
            機械腕錶透過巧妙的機制，呈現天體運行、時間流逝的軌跡。
            開始譜寫高潮迭起的製錶史詩。
          </div>
          <button
            type="button"
            class="btn btn-outline-light btn-sm border border-secondary"
          >
            -探索系列
          </button>
        </span>
      </div>
      <div class="carousel-item">
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg"
          class="d-block w-100 h-auto"
        />
        <span style="position: absolute; top: 40%; left: 15%" class="size-none">
          <span class="text-warning fs-5">駕馭精湛製錶技藝</span><br />
          <span class="w-50 text-secondary size-sm"
            >傳統基礎上精益求精，特殊擒縱系統提高效率及可靠度。</span
          >
          <div class="w-50 text-secondary size-lg">
            汝拉山谷擁有森林、溪水、冰雪、鐵礦石等天然資源，有利於製錶業的發展及興盛。
            汝拉山谷未經人工修飾的自然景觀和滿天星斗的夜空，啓發了一代代製錶師的創作靈感。
          </div>
          <button
            type="button"
            class="btn btn-outline-light btn-sm border border-secondary"
          >
            -探索系列
          </button>
        </span>
      </div>
      <div class="carousel-item">
        <img
          src="https://jedchang.github.io/ClocksStore/img/banner_04.27833224.jpg"
          class="d-block w-100 h-auto"
        />
        <span style="position: absolute; top: 40%; left: 45%" class="size-none">
          <span class="text-warning fs-5">2022年佳節的祝福</span><br />
          <span class="w-75 text-secondary size-sm"
            >獻上洋溢的祝福，結帳輸入優惠碼立即享8折</span
          >
          <div class="w-75 text-secondary size-lg">
            獻上洋溢的祝福，2022/12/30前結帳輸入優惠碼立即享8折
            與爸爸的回憶不能少，身為爸爸的你也不能少了這份回憶原來我與幸福回憶之間就差了一塊手錶啊，
            趁雙2022年大優惠，趕緊訂了一塊。
          </div>
          <button
            type="button"
            class="btn btn-outline-light btn-sm"
            style="border-style: dashed; border-color: rgb(247, 230, 3)"
          >
            2022OFF
          </button>
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
      backImgage1: {
        height: `500px`,
        backgroundImage: `url(https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg)`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      },
      backImgage1: {},
      backImgage1: {},
    };
  },
};
</script>
<style lang="scss">
@media (max-width: 5000px) {
  .size-sm {
    display: none;
  }
  .size-lg {
    font-size: 22px;
  }
}
@media (max-width: 1050px) {
  .size-lg {
    display: none;
  }
  .size-sm {
    display: block;
    font-size: 17px;
  }
}
@media (max-width: 550px) {
  .size-sm {
    display: none;
  }
}
@media (max-width: 360px) {
  .size-none {
    display: none;
  }
}
</style>
