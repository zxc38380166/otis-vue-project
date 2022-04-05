<template>
  <div class="bg-dark">
    <UserNavbar></UserNavbar>
    <UserCarouse></UserCarouse>
    <UserCart></UserCart>
    <div class="container">
      <div class="row">
        
        <div class="col-12 col-sm-5 image"></div>
        <div class="col-12 col-sm-7 text-light align-self-center">
          <div>
            <div class="col-12 text-center text-light fs-3 py-3">關於我們</div>
            台灣自創品牌「Otis 」
            意味著在創新與獨特間找尋設計的平衡美感。台灣設計師運用獨特的思維與設計手法，創造出簡約、時尚及具有內涵的錶款
            ，讓手錶不再是只有看時間的功能，而更是成為一種生活態度。
            Otis希望能從小地方開始改變人們的生活態度
            ，因此我們主打著「平價時尚；高品質享受」，讓好看且品質好的手錶不再只有用昂貴的價錢才能買的到，而是人人都能擁有。
            Otis Watches的每支錶都是由經驗豐富的師傅以最純熟技術製作完成
            ，在經過72小時嚴格的品質測試才會送到您的手中。
            現在就與我們從「錶」情開始改變生活吧！
          </div>
          <div class="col-12 text-center text-light fs-3 ">經營理念</div>
          <ul class="pt-3">
            <li>優先選用日本機芯及日本原裝電池。</li>
            <li>
              手錶錶盤或指針上附有夜光塗料，可幫助您在昏暗的環境中讀取時間
              ，並且完全符合歐盟R從研發、設計、製造、組裝皆由製錶師獨力完成，提供oHS認證標準。
            </li>
            <li>
              擁有30年製錶的設計美學，最高品質及客戶服務是購買Otis最基本的保證，
              在製錶工藝上Otis注重每個環節的精緻並致力於獨特風格和設計的精美錶款。
            </li>
            <li>
              錶款以獨特夾層錶盤結構，突破傳統單層作法，採用99%純銅材質蝕刻，精細度達0.02毫米，
              銅片蝕刻工序雖簡單，但錶盤加工精密度更考驗工匠手藝，PICONO秉持工匠精神做到百分之百精準。
            </li>
          </ul>
          <div class="text-center">
            <router-link to="/UserBoard/UserProducts">
              <button class="btn btn-success btn-sm">
                <i class="bi bi-cart-fill"></i>去逛逛
              </button>
            </router-link>
            <router-link to="/UserBoard/UserCheckOut">
              <button class="btn btn-warning btn-sm">
                <i class="bi bi-bag-check-fill"></i>領取優惠碼
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <UserFoot></UserFoot>
  </div>
</template>
<script>
import UserNavbar from "../components/UserNavbar.vue";
import UserFoot from "../components/UserFoot.vue";
import UserCarouse from "../components/UserCarouse.vue";
import UserCartVue from "../components/UserCart.vue";
import UserCart from "../components/UserCart.vue";
export default {
  data() {
    return {};
  },
  components: {
    UserNavbar,
    UserFoot,
    UserCarouse,
    UserCart,
  },
};
</script>
<style lang="scss">
.image {
  background-image: url(https://images.unsplash.com/photo-1634141628215-732e10d16bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  animation: blink;
  animation-duration: 0.5s;
}
@keyframes blink{
  0%{
    opacity: 0;
    height: 300px;
  }
}
</style>
