<template>
  <UserCart ref="UserCart"></UserCart>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="mb-3 bg-dark text-light">
          <div class="row g-0">
            <div
              class="col-md-6"
              :style="{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: `contain`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
                height: `270px`,
              }"
            ></div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>

                <p class="card-text">
                  特惠價 $ :
                  <span class="text-decoration-line-through fw-lighter px-1"
                    >{{ $filters.currency(product.origin_price) }}
                  </span>
                  <span class="card-text fs-5 fw-bold text-warning px-1">
                    {{ $filters.currency(product.price) }}</span
                  >
                </p>
                <p class="card-text">系列名 : {{ product.category }}</p>
                <p class="card-text">規格 : {{ product.description }}</p>
                <p class="card-text">
                  SHAR THIS :
                  <i
                    class="bi bi-facebook px-2"
                    style="font-size: 1.5rem; color: cornflowerblue"
                  ></i>
                  <i
                    class="bi bi-instagram px-2"
                    style="font-size: 1.5rem; color: cornflowerblue"
                  ></i>
                  <i
                    class="bi bi-github px-2"
                    style="font-size: 1.5rem; color: cornflowerblue"
                  ></i>
                </p>
                <button class="btn btn-outline-success mx-1" type="button">
                  <i class="bi bi-currency-dollar"></i>
                  <router-link
                    to="/UserBoard/UserProducts"
                    style="text-decoration: none"
                    class="text-success"
                    >Shop
                  </router-link>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning btn-sm mx-1"
                  @click.prevent="addToCart(product.id)"
                >
                  <i
                    class="bi bi-cart-check"
                    style="color: yellow; font-size: 1.2rem"
                  ></i>
                  add to cart
                  <div
                    class="spinner-border spinner-border-sm"
                    role="status"
                    v-if="LoadStatus"
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="bg-dark">
          <div class="header text-light fs-5">詳細說明 :</div>
          <div class="body text-light">
            <blockquote class="blockquote mb-0">
              <p>{{ product.content }}</p>
              <footer class="blockquote-footer">
                <cite title="Source Title">Elon-VueWork-Watch</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UserFoot></UserFoot>
  <Toast :toastMsg="toastMsg"></Toast>
  <Loading :active="isLoading"></Loading>
</template>
<script>
import Toast from "../components/Toast.vue";
import UserCart from "../components/UserCart.vue";
import UserFoot from "../components/UserFoot.vue";
export default {
  data() {
    return {
      Id: "",
      product: {},
      toastMsg: {},
      isLoading: false,
      LoadStatus: false,
    };
  },
  components: { Toast, UserCart, UserFoot },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.Id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.product = res.data.product;
        console.log(this.product);
      });
    },
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.LoadStatus = true;
      this.$http
        .post(api, {
          data: cart,
        })
        .then((res) => {
          this.LoadStatus = false;
          this.toastMsg = res.data;
          this.$refs.UserCart.getCart();
        });
    },
  },
  created() {
    this.Id = this.$route.params.Id; //取得存放在動態路由的Id
    this.getProduct();
  },
};
</script>
<style>
.aaa {
  background-size: contain;
}
</style>
