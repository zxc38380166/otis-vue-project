<template>
  <div class="bg-dark">
    <!-- search and cart -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center pt-1">
          <button
            type="button"
            class="btn btn-dark"
            style="border-color: rgb(175, 174, 174); color: rgb(175, 174, 174)"
          >
            CS-Amax
          </button>
          <button
            type="button"
            class="btn btn-dark"
            style="border-color: rgb(175, 174, 174); color: rgb(175, 174, 174)"
          >
            CS-Yasu
          </button>
          <button
            type="button"
            class="btn btn-dark"
            style="border-color: rgb(175, 174, 174); color: rgb(175, 174, 174)"
          >
            CS-Frady
          </button>
        </div>
        <div class="col-md-6 d-flex justify-content-center pt-1">
          <input
            class="form-control w-50"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success ms-1"
            type="submit"
            @click="CartModal"
          >
            <i class="bi bi-cart-fill" style="font-size: 1.2rem"></i> 購物車
          </button>
        </div>
      </div>
    </div>

    <!-- products -->
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-xl-4 py-1"
          v-for="item in products"
          :key="item.id"
        >
          <div class="card">
            <div
              class="card-img-top"
              :style="{
                backgroundImage: `url(${item.imageUrl})`,
                height: `300px`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `contain`,
              }"
            ></div>
            <!-- <img :src="item.imageUrl" class="card-img-top h-25" /> -->
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.title }}</h5>
              <p class="card-text"></p>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                  <span class="text-decoration-line-through fw-light"
                    >${{ $filters.currency(item.origin_price) }}</span
                  >
                  <span class="fw-bold fs-3 text-warning"
                    >${{ $filters.currency(item.price) }}</span
                  >
                </li>
                <li class="list-group-item">{{ item.category }}</li>
                <li class="list-group-item">{{ item.description }}</li>
                <li class="list-group-item">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click.prevent="getProduct(item.id)"
                  >
                    查看詳情
                  </button>
                </li>
              </ul>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-warning"
                  @click="addToCart(item.id)"
                >
                  <i
                    class="bi bi-cart-check ps-2 h"
                    style="font-size: 1.3rem; color: rgb(10, 10, 10)"
                  ></i>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UserFoot></UserFoot>
    <UserCartModal ref="UserProductsModal"></UserCartModal>
    <Toast :toastMsg="toastMsg" ref="toast"></Toast>
    <Loading :active="isLoading"></Loading>
  </div>
</template>
<script>
import UserFoot from "../components/UserFoot.vue";
import Toast from "../components/Toast.vue";
import UserCartModal from "../components/UserCartModal.vue";
export default {
  data() {
    return {
      products: [],
      toastMsg: {},
      isLoading: false,
      status: {
        load: "",
      },
      itemImage: {},
    };
  },
  components: {
    UserCartModal,
    Toast,
    UserFoot,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
      });
    },
    getProduct(id) {
      console.log(id);
    },
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = { product_id: id, qty: 1 };
      this.isLoading = true;
      this.$http.post(api, { data: cart }).then((res) => {
        this.isLoading = false;
        this.toastMsg = res.data;
        this.$refs.UserProductsModal.getCart();
      });
    },
    CartModal() {
      const ProductsModal = this.$refs.UserProductsModal;
      ProductsModal.show();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss"></style>
