<template>
    <div class="bg-dark text-dark h-100">
        <div class="container py-3">
            <div class="card">
                <div class="card-header row">
                    <div class="col-12 col-md-3">
                        <button type="button" class="btn btn-outline-secondary fw-bold text-dark">
                            我的訂單
                            <span class="badge bg-secondary">9</span>
                            <span class="visually-hidden">unread messages</span>
                        </button>
                    </div>
                    <div class="col-12 col-md-9 d-flex flex-wrap">
                        <input
                            class="form-control me-2 w-75"
                            type="search"
                            v-model="search"
                            placeholder="輸入訂單編號"
                        />
                        <button
                            class="btn btn-outline-success"
                            type="button"
                            @click="searchOrder()"
                        >查詢訂單</button>
                    </div>
                </div>

                <div class="card-body">
                    <h5 class="card-title">Special title treatment {{ }}</h5>
                    <table>
                        <thead>
                            <tr>
                                <th>訂單編號</th>
                                <th>姓名</th>
                                <th>Email</th>
                                <th>電話</th>
                                <th>住址</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{{ orderData.id }}</th>
                                <th>{{ orderData.user.name }}</th>
                                <th>{{ orderData.user.email }}</th>
                                <th>{{ orderData.user.tel }}</th>
                                <th>{{ orderData.user.address }}</th>
                            </tr>
                        </tbody>
                    </table>
                    <!-- <p class="card-text">{{ orderData.id }}</p> -->
                </div>
            </div>
        </div>
        <div class="container py-3">
            <div class="card">
                <div class="card-header">
                    <button type="button" class="btn btn-outline-secondary fw-bold text-dark">收件人資訊</button>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <div class="container">
                            <div class="row gx-5 align-self-center">
                                <div class="col">
                                    <form class="row g-3 needs-validation" novalidate>
                                        <div class="col-md-4">
                                            <label
                                                for="validationCustomUsername"
                                                class="form-label"
                                            >姓名 :</label>
                                            <div class="input-group has-validation">
                                                <span
                                                    class="input-group-text"
                                                    id="inputGroupPrepend"
                                                >
                                                    <i class="bi bi-person-circle"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="validationCustom01"
                                                    required
                                                    placeholder="請輸入姓名"
                                                    v-model="from.user.name"
                                                />
                                                <div
                                                    class="invalid-feedback"
                                                >Please choose a username.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label
                                                for="validationCustomUsername"
                                                class="form-label"
                                            >手機 :</label>
                                            <div class="input-group has-validation">
                                                <span
                                                    class="input-group-text"
                                                    id="inputGroupPrepend"
                                                >
                                                    <i class="bi bi-telephone-fill"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="validationCustom02"
                                                    required
                                                    placeholder="請輸入手機"
                                                    v-model="from.user.tel"
                                                />
                                                <div
                                                    class="invalid-feedback"
                                                >Please choose a username.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label
                                                for="validationCustomUsername"
                                                class="form-label"
                                            >Email :</label>
                                            <div class="input-group has-validation">
                                                <span
                                                    class="input-group-text"
                                                    id="inputGroupPrepend"
                                                >
                                                    <i class="bi bi-envelope-fill"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="validationCustomUsername"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                    placeholder="請輸入Email"
                                                    v-model="from.user.email"
                                                />
                                                <div
                                                    class="invalid-feedback"
                                                >Please choose a username.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label
                                                for="validationCustomUsername"
                                                class="form-label"
                                            >地址 :</label>
                                            <div class="input-group has-validation">
                                                <span
                                                    class="input-group-text"
                                                    id="inputGroupPrepend"
                                                >
                                                    <i class="bi bi-house-fill"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="validationCustom02"
                                                    required
                                                    placeholder="請輸入地址"
                                                    v-model="from.user.address"
                                                />
                                                <div
                                                    class="invalid-feedback"
                                                >Please choose a username.</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label
                                                for="validationCustomUsername"
                                                class="form-label"
                                            >備註欄 :</label>
                                            <div class="input-group has-validation">
                                                <span
                                                    class="input-group-text"
                                                    id="inputGroupPrepend"
                                                >
                                                    <i class="bi bi-chat-left-dots-fill"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="validationCustom04"
                                                    placeholder="ex. 須調整錶帶"
                                                    v-model="from.message"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value
                                                    id="invalidCheck"
                                                />
                                                <label>訂閱官方Email優惠通知</label>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <button
                                                class="btn btn-outline-success"
                                                type="button"
                                                @click.prevent="CartModal"
                                            >
                                                <i class="bi bi-cart-fill"></i>
                                                購物車
                                            </button>
                                            <button class="btn btn-outline-primary" type="button">
                                                <div
                                                    v-if="!toastMsg.success"
                                                    @click.prevent="CreateOrder"
                                                >
                                                    <i class="bi bi-check-circle"></i>
                                                    確認訂單
                                                    <div
                                                        class="spinner-grow spinner-grow-sm"
                                                        v-if="LoadStatus"
                                                    ></div>
                                                </div>
                                                <div v-else @click.prevent="GetPay">
                                                    <div v-if="!payStatus">
                                                        <i class="bi bi-currency-dollar"></i>
                                                        付款
                                                        <div
                                                            class="spinner-grow spinner-grow-sm"
                                                            v-if="LoadStatus"
                                                        ></div>
                                                    </div>
                                                    <div v-else>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        付款完成
                                                        <div
                                                            class="spinner-grow spinner-grow-sm"
                                                            v-if="LoadStatus"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <footer class="blockquote-footer">
                            Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <UserFoot></UserFoot>
    </div>
    <UserCartModal ref="CartModal"></UserCartModal>
    <Toast ref="toast" :toastMsg="toastMsg"></Toast>
</template>
<script>
import UserCartModal from '../components/UserCartModal.vue'
import Toast from '../components/Toast.vue'
import UserFoot from '../components/UserFoot.vue'
export default {
    data() {
        return {
            from: {
                user: {},
                message: "",
            },
            toastMsg: {},
            LoadStatus: false,
            orderId: "",
            payStatus: false,
            search: "",
            orderData: {
                id: "",
                user: {
                    name: "",
                    email: "",
                    tel: "",
                    address: ""
                }
            }
        }
    },
    components: {
        UserCartModal, Toast, UserFoot
    },
    methods: {
        CartModal() {
            this.$refs.CartModal.show()
        },
        FromVerify() {
            (function () {
                'use strict'
                var forms = document.querySelectorAll('.needs-validation')
                Array.prototype.slice.call(forms)
                    .forEach(function (form) {
                        form.addEventListener('submit', function (event) {
                            if (!form.checkValidity()) {
                                event.preventDefault()
                                event.stopPropagation()
                            }
                            form.classList.add('was-validated')
                        }, false)
                    })
            })()
        },
        CreateOrder() {
            this.FromVerify()
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
            const data = { data: this.from };
            this.LoadStatus = true;
            this.$http.post(api, data).then((res) => {
                this.toastMsg = res.data
                this.$refs.toast.toast()
                this.$refs.CartModal.getCart()
                this.LoadStatus = false;
                this.orderId = res.data.orderId
            })
        },
        GetPay() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
            this.LoadStatus = true;
            this.$http.post(api).then((res) => {
                this.toastMsg = res.data;
                this.$refs.toast.toast()
                this.payStatus = res.data.success
                this.LoadStatus = false;
            })
        },
        searchOrder() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.search}`
            this.$http.get(api).then((res) => {
                console.log(res);
                if (!res.data.order) {
                    const toastMsg = { success: false, message: "查無訂單編號" }
                    this.toastMsg = toastMsg;
                    this.$refs.toast.toast()
                } else {
                    const toastMsg = { success: true, message: "查尋成功" }
                    this.toastMsg = toastMsg;
                    this.$refs.toast.toast()
                    this.orderData = res.data.order
                }
            }).catch(() => {
                const toastMsg = { success: false, message: "請輸入訂單編號" }
                this.toastMsg = toastMsg;
                this.$refs.toast.toast()
            })
        }
    },
}
</script>