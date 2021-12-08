<template>
    <div class="bg-dark text-light vh-100">
        <div class="d-flex justify-content-evenly">
            <div class>
                <div>123132
                </div>
                <div>12 <span>123</span></div>
            </div>

        </div>
        <div class="container ">
            <div class="row gx-5 align-self-center">
                <div class="col">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-4">
                            <label for="validationCustomUsername" class="form-label">姓名 :</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">
                                    <i class="bi bi-person-circle"></i>
                                </span>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom01"
                                    required
                                    placeholder="請輸入姓名"
                                />
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustomUsername" class="form-label">手機 :</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">
                                    <i class="bi bi-telephone-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                    placeholder="請輸入手機"
                                />
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validationCustomUsername" class="form-label">Email :</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">
                                    <i class="bi bi-envelope-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    placeholder="請輸入Email"
                                />
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustomUsername" class="form-label">地址 :</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">
                                    <i class="bi bi-house-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    required
                                    placeholder="請輸入地址"
                                />
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustomUsername" class="form-label">備註欄 :</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">
                                    <i class="bi bi-chat-left-dots-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom04"
                                    placeholder="ex. 須調整錶帶"
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
                                <i class="bi bi-cart-fill" style="font-size: 1.2rem;"></i> 購物車
                            </button>
                            <button class="btn btn-outline-primary" type="submit" @click="getfrom">
                                <i class="bi bi-currency-dollar" style="font-size: 1.2rem;"></i>付款
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <UserCartModal ref="CartModal"></UserCartModal>
</template>
<script>
import UserCartModal from '../components/UserCartModal.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        UserCartModal
    },
    methods: {
        CartModal() {
            this.$refs.CartModal.show()
        },
        getfrom() {
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
        }
    },
}
</script>