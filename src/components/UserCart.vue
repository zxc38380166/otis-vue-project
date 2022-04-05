<template>
  <!-- CartDOM -->
  <div class="cart text-end">
    <button class="btn btn-warning" type="button" @click="this.show()">
      <i class="bi bi-cart-fill">Cart * {{ cart.carts.length }}</i>
    </button>
  </div>
  <!-- Modal -->
  <div
    ref="modal"
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">購物車</h5>
          <span class="px-4">
            總計
            <span class="text-primary px-2">{{ cart.carts.length }}</span
            >項
          </span>
          <div
            v-if="LoadStatus"
            class="spinner-border spinner-border-sm ms-4"
            role="status"
          ></div>
          <button
            @click="getCart"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="w-100" v-for="cart in cart.carts" :key="cart.id">
            <tbody>
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div
                    class="col-4"
                    :style="{
                      backgroundImage: `url(${cart.product.imageUrl})`,
                      backgroundSize: `contain`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center`,
                    }"
                  ></div>
                  <div class="col-8">
                    <div class="card-body">
                      <h6 class="card-title">{{ cart.product.title }}</h6>
                      <p class="card-text">
                        <input
                          type="number"
                          min="1"
                          max="10"
                          class="w-50"
                          v-model="cart.qty"
                          @change="upDataCart(cart)"
                          :disabled="disabled"
                        />
                        <button
                          class="btn-danger btn-sm"
                          @click="delCart(cart.id)"
                        >
                          <i class="bi bi-x"></i>
                        </button>
                      </p>
                      <p class="card-text">
                        {{ cart.product.category }}<br />{{
                          cart.product.description
                        }}
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          <span
                            v-if="cart.final_total !== cart.total"
                            class="text-decoration-line-through"
                          >
                            $ {{ $filters.currency(cart.total) }}</span
                          >
                          <span v-else
                            >$ {{ $filters.currency(cart.total) }}</span
                          >
                          <div class="col-12 col-sm-5 fw-bold">
                            <span v-if="cart.final_total !== cart.total"
                              >以套用優惠卷</span
                            >
                          </div>
                          <div class="col-12 col-sm-12 text-primary">
                            <span
                              v-if="cart.final_total !== cart.total"
                              class="text-danger"
                            >
                              折扣後價格: $
                              {{ $filters.currency(cart.final_total) }}
                            </span>
                          </div>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </tbody>
          </table>
        </div>
        <div class="text-center">
          <strong>總計:</strong>
          <span class="text-primary mx-2"
            >${{ $filters.currency(cart.final_total) }}</span
          >
          <div>
            <strong>優惠碼:</strong>
            <input class="mx-2" type="text" v-model="couponCode" />
            <button type="button" class="btn btn-dark" @click="addCouponCode">
              套用
            </button>
          </div>
        </div>

        <div class="modal-footer">
          <span v-if="cartHint">目前購物車空空的,趕快去逛逛吧</span>
          <button class="btn btn-outline-success" type="button" @click="goShop">
            <i class="bi bi-cart-fill"></i>
            去逛逛
          </button>
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="delCartS"
          >
            清空
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="checkOut"
          >
            結帳
          </button>
        </div>
      </div>
    </div>
  </div>
  <Toast :toastMsg="toastMsg" ref="toast"></Toast>
</template>
<script>
import Toast from "../components/Toast.vue";
import modalMixin from "../mixins/modalMixin";

export default {
  data() {
    return {
      cart: {
        carts: [],
      },
      cartHint: false,
      toastMsg: "",
      couponCode: "",
      disabled: false,
      LoadStatus: false,
    };
  },
  components: { Toast },
  mixins: [modalMixin],
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.cartHint = false;
        this.cart = res.data.data;
      });
    },
    upDataCart(cart) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`;
      if (cart.qty > 10) {
        cart.qty = 10;
      }
      const data = {
        product_id: cart.id,
        qty: cart.qty,
      };
      this.LoadStatus = true;
      this.disabled = true;
      this.$http.put(api, { data: data }).then((res) => {
        this.LoadStatus = false;
        this.toastMsg = res.data;
        this.getCart();
        this.disabled = false;
      });
    },
    delCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.LoadStatus = true;
      this.$http.delete(api).then((res) => {
        console.log(res.data);
        this.LoadStatus = false;
        this.toastMsg = res.data;
        this.getCart();
      });
    },
    delCartS() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.LoadStatus = true;
      this.$http.delete(api).then((res) => {
        this.LoadStatus = false;
        this.toastMsg = res.data;
        this.getCart();
      });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const code = { code: this.couponCode };
      this.textDecoration = "";
      this.LoadStatus = true;
      this.$http.post(api, { data: code }).then((res) => {
        this.LoadStatus = false;
        this.toastMsg = res.data;
        this.getCart();
      });
    },
    checkOut() {
      if (this.cart.carts[0]) {
        console.log(this.cart.carts);
        this.$router.push("/UserBoard/UserCheckOut");
        this.hide();
      } else {
        this.cartHint = true;
      }
    },
    goShop() {
      this.$router.push("/UserBoard/UserProducts");
      this.hide();
    },
  },
  created() {
    this.getCart();
  },
};
</script>
<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
.cart {
  top: 50%;
  z-index: 9;
  width: 100%;
  position: sticky;
  padding-right: 5px;
  @media (max-width: 1350px) {
    z-index: 10;
  }
}
</style>
