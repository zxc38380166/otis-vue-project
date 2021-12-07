<template>
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
                  <span class="text-primary px-2">{{ cart.carts.length }}</span>項
               </span>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <div
                  class="row alert alert-secondary align-items-center"
                  role="alert"
                  v-for="cart in cart.carts"
                  :key="cart.id"
               >
                  <div class="col-12 col-sm-5 fw-bold">
                     {{ cart.product.title }}
                     <br />
                     <span v-if="cart.final_total !== cart.total">以套用優惠卷</span>
                  </div>

                  <div class="col-6 col-sm-3">
                     <input type="number" min="1" max="99" class="w-50 h-25" v-model="cart.qty" />
                     <br />
                     <span v-if="cart.final_total !== cart.total">折扣後價格:</span>
                  </div>

                  <div class="col-6 col-sm-3 text-primary">
                     <span :class="textDecoration">$ {{ $filters.currency(cart.total) }}</span>
                     <br />
                     <span
                        v-if="cart.final_total !== cart.total"
                        class="col-6 col-sm-3 text-danger"
                     >$ {{ $filters.currency(cart.final_total) }}</span>
                  </div>

                  <div class="col-12 col-sm-1">
                     <button class="btn-danger btn-sm" @click="delCart(cart.id)">
                        <i class="bi bi-x"></i>
                     </button>
                  </div>
                  
               </div>
            </div>
            <div class="text-center">
               <strong>總計:</strong>
               <span class="text-primary mx-2">${{ $filters.currency(cart.final_total) }}</span>
               <div>
                  <strong>優惠碼:</strong>
                  <input class="mx-2" type="text" v-model="couponCode" />
                  <button type="button" class="btn btn-dark" @click="addCouponCode">套用</button>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-outline-danger" @click="delCartS">清空</button>
               <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">關閉</button>
               <button type="button" class="btn btn-outline-primary">結帳</button>
            </div>
         </div>
      </div>
   </div>
   <Toast :toastMsg="toastMsg" ref="toast"></Toast>
   <Loading :active="isLoading"></Loading>
</template>
<script>
import Toast from '../components/Toast.vue'
import modalMixin from '../mixins/modalMixin'
export default {
   data() {
      return {
         cart: {
            carts: []
         },
         toastMsg: "",
         couponCode: "",
         isLoading: false,
         textDecoration: ""
      }
   },
   components: {
      Toast
   },
   mixins: [modalMixin],
   methods: {
      getCart() {
         const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
         this.$http.get(api).then((res) => {
            this.cart = res.data.data
            console.log(this.cart);
         })
      },
      delCart(id) {
         const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
         this.$http.delete(api).then((res) => {
            this.toastMsg = res.data
            this.$refs.toast.toast()
            this.getCart();
         })
      },
      delCartS() {
         const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
         this.$http.delete(api).then((res) => {
            this.toastMsg = res.data
            this.$refs.toast.toast()
            this.getCart()
         })
      },
      addCouponCode() {
         const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
         const code = {
            code: this.couponCode
         }
         this.$http.post(api, { data: code }).then((res) => {
            console.log(res);
            this.toastMsg = res.data
            this.$refs.toast.toast()
            this.getCart()

         })
      }
   },
   created() {
      this.getCart()
   }
}
</script>