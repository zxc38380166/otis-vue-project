<template>
  <div class="d-flex flex-wrap justify-content-center bg-dark">
    <!-- search and cart -->
    <div class="w-75 row py-2">
      <div class="d-flex col-12 col-md-6 justify-content-center">
        <button type="button" class="btn btn-dark">風暴系列</button>
        <button type="button" class="btn btn-dark">風暴系列</button>
        <button type="button" class="btn btn-dark">風暴系列</button>
      </div>
      <div class="d-flex col-12 col-md-6 justify-content-center">
        <input class="form-control w-50" type="search" placeholder="搜尋" aria-label="Search" />
        <button class="btn btn-outline-success ms-1" type="submit" @click="CartModal">
          <i class="bi bi-cart-fill" style="font-size: 1.2rem;"></i> 購物車
        </button>
      </div>
    </div>
    <!-- products -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4 py-1" v-for="item in products" :key="item.id">
          <div class="card">
            <img :src="item.imageUrl" class="card-img-top h-50" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.title }}</h5>
              <p class="card-text"></p>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                  <span
                    class="text-decoration-line-through fw-light"
                  >${{ $filters.currency(item.origin_price) }}</span>
                  <span class="fw-bold fs-3 text-warning">${{ $filters.currency(item.price) }}</span>
                </li>
                <li class="list-group-item">{{ item.category }}</li>
                <li class="list-group-item">{{ item.description }}</li>
                <li class="list-group-item">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click.prevent="getProduct(item.id)"
                  >查看詳情</button>
                </li>
              </ul>
              <p class="text-center">
                <button type="button" class="btn btn-outline-warning" @click="addToCart(item.id)">
                  <i
                    class="bi bi-cart-check ps-2 h"
                    style="font-size: 1.3rem; color: rgb(10, 10, 10)"
                  ></i>
                  add to cart
                </button>
              </p>
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
import UserFoot from '../components/UserFoot.vue'
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
    };
  },
  components: {
    UserCartModal, Toast, UserFoot
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
      const cart = { product_id: id, qty: 1, };
      this.isLoading = true;
      this.$http.post(api, { data: cart }).then((res) => {
        this.isLoading = false;
        this.toastMsg = res.data
        this.$refs.toast.toast()
        this.$refs.UserProductsModal.getCart()
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
<style lang="scss">
</style>
