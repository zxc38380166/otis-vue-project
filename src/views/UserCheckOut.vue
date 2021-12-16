<template>
  <UserCart ref="UserCart"></UserCart>
  <div class="container ">
    <div class="card bg-dark border-bottom border-secondary text-light  box-shadow">
      <div class="card-header row">
        <div class="col-md-9 d-flex">
          <input class="form-control me-2 w-50" type="search" v-model="search" placeholder="輸入訂單編號" />
          <button class="btn btn-outline-success" type="button" @click="searchOrder()">查詢訂單</button>
        </div>
      </div>
      <div class="card-body row " v-if="orderData.id">
        <h5 class="card-title"><button type="button"
            class="btn btn-outline-secondary fw-bold  text-light">配送狀態:配送中</button></h5>
        <table class="row ">
          <tbody class="col-md-6 ">
            <tr class="row">
              <th>收件人資料</th>
              <td>訂單編號: {{ orderData.id }}</td>
              <td>姓名:{{ orderData.user.name }}</td>
              <td>Email:{{ orderData.user.email }}</td>
              <td>電話:{{ orderData.user.tel }}</td>
              <td>地址:{{ orderData.user.address }}</td>
              <td>備註:{{ orderData.message }}</td>
            </tr>
          </tbody>
          <tfoot class="col-md-6">
            <th>購買品項</th>
            <tr class="row" v-for="item in orderData.products" :key="item.id">
              <td class="col-4">{{ item.product.title }}</td>
              <td class="col-3">數量:{{ item.qty }}</td>
              <td class="col-5">${{ item.total }}</td>
            </tr>
            <th class="row">
              <hr>
            <td class="col-7">總計</td>
            <td class="col-5">${{ orderData.total }}</td>
            </th>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  <div class="container py-3 ">
    <div class="card bg-dark border-bottom border-secondary text-light  box-shadow">
      <div class="card-header bg-dark ">
        <button type="button" class="btn btn-outline-secondary fw-bold text-light">收件人資訊</button>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <div class="container">
            <div class="row gx-5 align-self-center">
              <div class="col">
                <form class="row g-3 needs-validation" novalidate>
                  <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">姓名 :</label>
                    <div class="input-group has-validation ">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="bi bi-person-circle"></i>
                      </span>
                      <input type="text" class="form-control bg-dark text-light" id="validationCustom01" required
                        placeholder="請輸入姓名" v-model="from.user.name" />
                      <div class="invalid-feedback"><i class="bi bi-x"></i>此欄位為必填寫</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">電話 :</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="bi bi-telephone-fill"></i>
                      </span>
                      <input type="text" class="form-control bg-dark text-light" id="validationCustom02" required
                        placeholder="請輸入電話" v-model="from.user.tel" />
                      <div class="invalid-feedback"><i class="bi bi-x"></i>此欄位為必填寫</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Email :</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="bi bi-envelope-fill"></i>
                      </span>
                      <input type="text" class="form-control bg-dark text-light" id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend" required placeholder="請輸入Email"
                        v-model="from.user.email" />
                      <div class="invalid-feedback"><i class="bi bi-x"></i>此欄位為必填寫</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationCustomUsername" class="form-label">地址 :</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="bi bi-house-fill"></i>
                      </span>
                      <input type="text" class="form-control bg-dark text-light" id="validationCustom02" required
                        placeholder="請輸入收件地址" v-model="from.user.address" />
                      <div class="invalid-feedback"><i class="bi bi-x"></i>此欄位為必填寫</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationCustomUsername" class="form-label">備註欄 :</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">
                        <i class="bi bi-chat-left-dots-fill"></i>
                      </span>
                      <input type="text" class="form-control bg-dark text-light" id="validationCustom04"
                        placeholder="ex. 須調整錶帶" v-model="from.message" />
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-center">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value id="invalidCheck" />
                      <label>訂閱官方Email優惠通知</label>
                    </div>
                  </div>
                  <div class="input-group input-group-sm" v-if="payOver">
                    <span class="input-group-text" id="inputGroup-sizing-sm">訂單編號 :{{orderId}} </span>
                    <input class="form-control" type="text" aria-label="Disabled input example" disabled readonly>
                  </div>
                  <div class="col-12 d-flex justify-content-center">
                    <button class="btn btn-outline-success" type="button">
                      <i class="bi bi-cart-fill"></i>
                      <router-link to="/UserBoard/UserProducts" style="text-decoration:none;" class="text-success">去逛逛
                      </router-link>
                    </button>
                    <button class="btn btn-outline-primary" type="submit" :disabled="payOver">
                      <div v-if="!orderId" @click="CreateOrder">
                        <i class="bi bi-check-circle"></i>
                        確認訂單
                        <div class="spinner-border spinner-border-sm" v-if="LoadStatus"></div>
                      </div>
                      <div v-else @click.prevent="GetPay">
                        <div v-if="!payStatus">
                          <i class="bi bi-currency-dollar"></i>
                          付款
                          <div class="spinner-border spinner-border-sm" v-if="LoadStatus"></div>
                        </div>
                        <div v-else>
                          <i class="bi bi-check-circle-fill"></i>
                          付款完成
                          <div class="spinner-border spinner-border-sm" v-if="LoadStatus"></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
  <UserFoot></UserFoot>
  <Toast :toastMsg="toastMsg"></Toast>
</template>
<script>
  import UserCart from '../components/UserCart.vue'
  import Toast from '../components/Toast.vue'
  import UserFoot from '../components/UserFoot.vue'
  export default {
    data() {
      return {
        payOver: false,
        payStatus: false,
        LoadStatus: false,
        search: "",
        orderId: "",
        toastMsg: {},
        from: {
          user: {},
          message: "",
        },
        orderData: {
          id: "",
          user: {
            name: "",
            email: "",
            tel: "",
            address: ""
          }
        },
      }
    },
    components: {UserCart,Toast,UserFoot},
    methods: {
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
        const data = {data: this.from};
        this.LoadStatus = true;
        this.$http.post(api, data).then((res) => {
          console.log(res);
          this.toastMsg = res.data
          this.$refs.UserCart.getCart()
          this.LoadStatus = false;
          this.orderId = res.data.orderId
        })
      },
      GetPay() {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
        this.LoadStatus = true;
        this.$http.post(api).then((res) => {
          this.toastMsg = res.data;
          this.payStatus = res.data.success
          this.LoadStatus = false;
          this.payOver = true
        })
      },
      searchOrder() {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.search}`
        this.$http.get(api).then((res) => {
          console.log(res);
          if (!res.data.order) {
            const toastMsg = {
              success: false,
              message: "查無訂單編號"
            }
            this.toastMsg = toastMsg;
          } else {
            const toastMsg = {
              success: true,
              message: "查尋成功"
            }
            this.toastMsg = toastMsg;
            this.orderData = res.data.order
          }
        }).catch(() => {
          const toastMsg = {
            success: false,
            message: "請輸入訂單編號"
          }
          this.toastMsg = toastMsg;
        })
      },
    },
  }
</script>
<style lang="scss">
  .box-shadow{
    box-shadow: 0px 0px 3px rgb(192, 188, 188);
  }
</style>