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
                <router-link
                  to="/UserBoard/UserProducts"
                  style="text-decoration: none"
                  class="text-success"
                  ><button class="btn btn-outline-success mx-1" type="button">
                    <i class="bi bi-currency-dollar"></i>去購物
                  </button>
                </router-link>
                <button
                  type="button"
                  class="btn btn-outline-warning btn-sm mx-1"
                  @click.prevent="addToCart(product.id)"
                >
                  <i
                    class="bi bi-cart-check"
                    style="color: yellow; font-size: 1.2rem"
                  ></i>
                  加到購物車
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
        <div class="fs-5 text-light">產品規格:</div>
        <table class="table table-dark table-hover" style="border-style: solid">
          <thead>
            <tr class="text-center">
              <th>顏色</th>
              <th>尺寸</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <th>經典灰</th>
              <th>M.L.XL</th>
            </tr>
            <tr class="text-center">
              <th>寶石藍</th>
              <th>L.XL</th>
            </tr>
            <tr class="text-center">
              <th>玫瑰金</th>
              <th>M.L</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12 py-3">
        <div class="bg-dark">
          <div class="header text-light fs-5">詳細說明 :</div>
          <div class="body text-light">
            <blockquote class="blockquote mb-0">
              <p>{{ product.content }}</p>
              <footer class="blockquote-footer">
                <cite title="Source Title">Otis-VueWork-Watch</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="col-12 text-light fs-5">
        產品實戴:
        <div
          class="image"
          :style="{
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundImage:`url(${product.unit})`,
            height:`500px`
          }"
        ></div>
      </div>
    </div>
  </div>

  <UserFoot></UserFoot>
  <Toast :toastMsg="toastMsg"></Toast>
  <Loading :active="isLoading"></Loading>
</template>
<script>
import { randomBytes } from "crypto";
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
      item: [],
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
        // console.log(this.product)
      });
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        console.log(res);
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
    this.getProducts();
  },
};
</script>

