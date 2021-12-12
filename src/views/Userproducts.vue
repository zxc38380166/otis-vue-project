<template>
  <div class="bg-dark">
    <div class="cart text-end">
      <button class="btn btn-warning" type="submit" @click="CartModal">
        <i class="bi bi-cart-fill">Cart * {{ cartLength }}</i>
      </button>
    </div>
    <!-- products -->
    <div class="container">
      <div @click="Offcanvas" class="text-light">
        <i class="bi bi-search"></i> 快速篩選
      </div>
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
                height: `170px`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `contain`,
                zIndex: 1,
              }"
            ></div>
            <!-- <img :src="item.imageUrl" class="card-img-top h-25" /> -->
            <div class="card-body">
              <h6 class="card-title text-center">{{ item.title }}</h6>
              <p class="card-text"></p>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                  <span class="text-decoration-line-through fw-light"
                    >${{ $filters.currency(item.origin_price) }}</span
                  >
                  <span class="fw-bold fs-5 text-warning"
                    >${{ $filters.currency(item.price) }}</span
                  >
                </li>
                <li class="list-group-item">{{ item.category }}</li>
                <li class="list-group-item">{{ item.description }}</li>
                <li class="list-group-item">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    @click.prevent="getProduct(item.id)"
                  >
                    查看詳情
                  </button>
                </li>
              </ul>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-warning btn-sm"
                  @click="addToCart(item.id)"
                >
                  <i
                    class="bi bi-cart-check ps-2 h"
                    style="color: rgb(10, 10, 10)"
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
    <UserCartModal
      ref="UserProductsModal"
      @cartLength="getCartLength"
    ></UserCartModal>
    <Toast :toastMsg="toastMsg" ref="toast"></Toast>
    <Loading :active="isLoading"></Loading>
    <RefOffcanvas ref="RefOffcanvas"></RefOffcanvas>
  </div>
</template>
<script>
import UserFoot from "../components/UserFoot.vue";
import Toast from "../components/Toast.vue";
import UserCartModal from "../components/UserCartModal.vue";
import RefOffcanvas from "../components/Offcanvas.vue";
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
      cartLength: "0",
    };
  },
  components: {
    UserCartModal,
    Toast,
    UserFoot,
    RefOffcanvas,
  },
  methods: {
    Offcanvas() {
      this.$refs.RefOffcanvas.show();
    },
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
    getCartLength(length) {
      this.cartLength = length;
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
.cart {
  position: sticky;
  width: 100%;
  top: 50%;
  padding-right: 5px;
  z-index: 2;
}
</style>
