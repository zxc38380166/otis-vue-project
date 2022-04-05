<template>
  <UserCarouse></UserCarouse>
  <UserCart ref="UserCart"></UserCart>
  <!-- 優惠圖 -->
  <div class="container py-4 coupon">
    <div class="row ">
      <div class="col">
        <div class="card box-shadow">
          <div class="row g-0 bg-dark">
            <div class="col-md-5 coupon-Image"></div>
            <div class="col-1"></div>
            <div class="col-md-6">
              <div class="card-body h-100 text-light">
                <h5 class="card-title">Black Friday</h5>
                <ul class="card-text ">歡慶黑色星期五12/17~12/18結帳時輸入優惠碼享以下優惠
                  <li>全館5折優惠</li>
                  <li>免運費</li>
                  <li>贈送金額的免費禮品卡</li>
                  <li>忠誠會員特別折扣</li>
                  <li>節日特別禮物</li>
                  <li>購物雙倍積分</li>
                </ul>
                <p class="card-text px-3">
                  <button class="btn btn-outline-warning coupon-Button" @click="CopyCoupnCode"
                    data-clipboard-text="OtisVueWork">OtisVueWork
                    <!-- data-clipboard-text 為要複製的值 -->
                    <i class="bi bi-subtract"></i></button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 查詢訂單 -->
  <div class="container">
    <div class=" text-light box-shadow">
      <div class="container">
        <div class="row">
          <div class="col-md-9 d-flex pt-3">
            <input class="form-control mx-1 w-50" type="search" v-model="search" placeholder="輸入訂單編號" />
            <button class="btn btn-outline-success" type="button" @click="searchOrder()">查詢訂單</button>
          </div>
        </div>
        <div class="row" v-if="orderData.id">
          <h5><button type="button" class="btn btn-outline-secondary fw-bold text-light">配送狀態:配送中</button></h5>
          <table class="row ">
            <tbody class="col-md-4 ">
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
            <tfoot class="col-md-8">
              <th>購買品項</th>
              <tr class="row" v-for="item in orderData.products" :key="item.id">
                <td class="col-5">{{ item.product.title }}</td>
                <td class="col-2">數量:{{ item.qty }}</td>
                <td class="col-5">${{ item.total }}</td>
              </tr>
              <th class="row">
                <hr>
              <td class=" col-7">總計</td>
              <td class=" col-5">${{ orderData.total }}</td>
              </th>
            </tfoot>
          </table>
        </div>
      </div>
      <!-- 表單 -->
      <div class="home p-3 ">
        <Form v-slot="{ errors, validate }">
          <!-- {{ errors }} {{ values }} -->
          <div class="mb-3">
            <i class="bi bi-person-circle" style="margin:5px"></i>
            <label for="name" class="form-label">姓名</label>
            <Field id="姓名" name="X 姓名" :class="{ 'is-invalid': errors['X 姓名'] }" class="form-control"
              v-model="from.user.name" placeholder="請輸入 姓名" rules="required"></Field>
            <error-message name="X 姓名" class="invalid-feedback px-1"></error-message>
          </div>

          <div class="mb-3">
            <i class="bi bi-envelope-fill" style="margin:5px"></i>
            <label for="email" class="form-label">Email</label>
            <Field id="email" name="X email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['X email'] }" placeholder="請輸入 Email" rules="email|required"
              v-model="from.user.email"></Field>
            <error-message name="X email" class="invalid-feedback px-1"></error-message>
          </div>

          <div class="mb-3">
            <i class="bi bi-house-fill" style="margin:5px"></i>
            <label for="address" class="form-label">地址</label>
            <Field id="地址" name="X 地址" :class="{ 'is-invalid': errors['X 地址'] }" class="form-control"
              v-model="from.user.address" placeholder="請輸入 地址" rules="required"></Field>
            <error-message name="X 地址" class="invalid-feedback px-1"></error-message>
          </div>

          <div class="mb-3">
            <i class="bi bi-telephone-fill" style="margin:5px"></i>
            <label for="addres" class="form-label">連絡電話</label>
            <Field id="連絡電話" name="X 連絡電話" :class="{ 'is-invalid': errors['X 連絡電話'] }" class="form-control"
              v-model="from.user.tel" placeholder="請輸入 連絡電話" rules="required"></Field>
            <error-message name="X 連絡電話" class="invalid-feedback px-1"></error-message>
          </div>

          <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic mixed styles example">
            <div>
              <button class="btn btn-outline-success " type="button" @click="GotoShop"><i class="bi bi-cart-fill"
                  style="margin:5px"></i>去逛逛</button>
            </div>
            <div>
              <button class="btn  btn-outline-primary " v-if="!orderId" type="button" @click="validate();CreateOrder()">
                <i class="bi bi-check-circle" style="margin:5px"></i>確認訂單
              </button>
              <button v-else-if="!payOver" @click.prevent="GetPay" class="btn  btn-outline-primary"><i
                  class="bi bi-currency-dollar" style="margin:5px"></i>付款
              </button>
              <button v-else :disabled="payOver" class="btn  btn-outline-primary"><i class="bi bi-check-circle-fill"
                  style="margin:5px"></i>付款完成
              </button>
            </div>
          </div>

          <!-- <button class="btn btn-primary" type="submit" @click="CreateOrder">Submit</button> -->
        </Form>
        <div class="col-12 pt-3" v-if="payOver">
          <span class="input-group-text text-wrap">訂單編號 : {{orderId}} </span>
        </div>
        
      </div>
    </div>
  </div>
  <UserFoot></UserFoot>
  <Toast :toastMsg="toastMsg"></Toast>
</template>
<script>
  import Clipboard from "clipboard"
  import UserCart from '../components/UserCart.vue'
  import Toast from '../components/Toast.vue'
  import UserFoot from '../components/UserFoot.vue'
  import UserCarouse from '../components/UserCarouse.vue'
  export default {
    data() {
      return {
        search: "",
        orderId: "",
        payOver: false,
        payStatus: false,
        LoadStatus: false,
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
    components: {
      UserCart,
      Toast,
      UserFoot,
      UserCarouse
    },
    methods: {
      CreateOrder() {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
        const data = {
          data: this.from
        };
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
      CopyCoupnCode() {
        const clipboard = new Clipboard('.coupon-Button');
        clipboard.on('success', () => {
          alert('優惠碼複製成功,趕快選一隻喜歡的手錶吧')
          clipboard.destroy() // destroy() 為釋放暫存
        })
        clipboard.on('error', () => {
          alert('此瀏覽器不支援複製,請手動複製')
          clipboard.destroy()
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
      GotoShop() {
        this.$router.push("/UserBoard/UserProducts")
      },
    },
    mounted() {
      window.scrollTo(0, 500)
    },
  }
</script>
<style lang="scss">
  .box-shadow {
    box-shadow: 0px 0px 5px rgb(192, 188, 188);
    border-color: black;
  }

  .coupon {
    font-style: italic;

    .coupon-Image {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
      height: 320px;
    }

    .coupon-Button {
      font-style: italic;
      border-style: dashed;
      animation-duration: 2s;
      animation-name: opacity;
      animation-iteration-count: infinite;
    }
  }
</style>