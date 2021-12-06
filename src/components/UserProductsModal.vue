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
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div
                        class="alert alert-secondary row"
                        role="alert"
                        v-for="cart in cart.carts"
                        :key="cart.id"
                    >
                        <span class="col-6 col-sm-5 text-dark">{{ cart.product.title }}</span>
                        <span class="col-6 col-sm-3">{{ cart.product.category }}</span>
                        <span
                            class="col-6 col-sm-3 text-primary"
                        >$ {{ $filters.currency(cart.total) }}</span>
                        <span class="col-6 col-sm-1">
                            <i
                                class="bi bi-x-square"
                                style="font-size: 1.3rem;"
                                @click="delCart(cart.id)"
                            ></i>
                        </span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" @click="delCartS">清空購物車</button>
                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                        @click="toasthide"
                    >關閉</button>
                    <button type="button" class="btn btn-outline-primary">結帳</button>
                </div>
            </div>
        </div>
    </div>
    <Toast :toastMsg="toastMsg" ref="toast"></Toast>
</template>
<script>
import Toast from '../components/Toast.vue'
import modalMixin from '../mixins/modalMixin'
export default {
    data() {
        return {
            cart: {},
            toastMsg: "",
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
            })
        },
        delCart(id) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
            this.$http.delete(api).then((res) => {
                this.toastMsg = res.data
            })
            this.$refs.toast.toast()
        },
        delCartS(){
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
            this.$http.delete(api).then( (res)=>{
                this.toastMsg = res.data
                this.getCart()
            })
            this.$refs.toast.toast()
        }
    },
    watch: {
        cart() {
            this.getCart()
        }
    },
    created() {
        this.getCart()
    },

}
</script>