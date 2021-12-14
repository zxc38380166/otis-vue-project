<template>
  <UserCart></UserCart>
  <div class="container pt-4">
    <div class="row">
      <div class="col-12 text-center w-100">
        <div class="card mb-3 bg-dark border border-secondary text-light">
          <div class="row g-0">
            <div class="col-md-4 img-left"></div>
            <!-- 圖片元素 -->
            <div class="col-md-8 align-self-center">
              <div class="card-body">
                <h3 class="card-title">源自布拉蘇絲</h3>
                <p class="card-text">
                  當代藝術創作項目｢Audemars Piguet
                  Contemporary｣以兩種方式扶持及委託藝術創作。
                  工作室透過品牌策展團隊與藝術家的對話，讓藝術家能夠利用多種媒材創作尺寸不一的作品，
                  探索未曾涉足的領域，完成需動用龐大資源的創作專案。藝術創作委託計劃透過兩年一度的競賽，
                  遴選出一位尚未躍上國際舞台的新銳藝術家，在一位客座策展人協助下，創作一件規模宏偉的藝術作品。
                  多年以來，製錶師及能工巧匠不斷跨越技術與理論的雙重藩籬，打造日趨精密繁複的機械裝置及令人耳目一新的設計。
                </p>
                <p class="card-text">
                  <small class="text-muted"
                    >僅做為面試作品使用,圖片取自pexels.com</small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 text-center w-100">
        <div class="card mb-3 bg-dark border border-secondary text-light">
          <div class="row g-0">
            <div class="col-md-8 align-self-center">
              <div class="card-body">
                <h3 class="card-title">複雜功能製錶重鎮 : 汝拉山谷</h3>
                <p class="card-text">
                  家鄉汝拉山谷（Vallée de Joux）
                  是瑞士高端製錶重鎮之一，座落於日內瓦以北的侏羅山脈中，
                  道路崎嶇，山勢險峻。汝拉山谷擁有森林、溪水、冰雪、鐵礦石等天然資源，有利於製錶業的發展及興盛。
                  汝拉山谷未經人工修飾的自然景觀和滿天星斗的夜空，啓發了一代代製錶師的創作靈感。
                  時計的開發離不開大自然的啓迪，機械腕錶透過巧妙的機制，呈現天體運行、時間流逝的軌跡。
                </p>
                <p class="card-text">
                  <small class="text-muted"
                    >僅做為面試作品使用,圖片取自pexels.com</small
                  >
                </p>
              </div>
            </div>
            <div class="col-md-4 img-right"></div>
            <!-- 圖片元素 -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <UserFoot></UserFoot>
</template>
<script>
import UserCart from "../components/UserCart.vue";
import UserFoot from "../components/UserFoot.vue";
export default {
  components: { UserFoot, UserCart },
};
</script>
<style lang="scss">
.img-left {
  background-image: url("https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
}
.img-right {
  background-image: url("https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
}
</style>
