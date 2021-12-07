<template>
   <div class="container">
      <div class="row mt-4">
         <div class="col-md-7">
            <table class="table align-middle">
               <thead>
                  <tr>
                     <th>圖片</th>
                     <th>商品名稱</th>
                     <th>價格</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="item in products" :key="item.id">
                     <td style="width: 200px">
                        <div style="height: 100px; background-size: cover; background-position: center"
                           :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
                     </td>
                     <td><a href="#" class="text-dark">{{ item.title }}</a></td>
                     <td>
                        <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                        <del class="h6" v-if="item.price">原價{{ item.origin_price }} 元</del>
                        <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                     </td>
                     <td>
                        <div class="btn-group btn-group-sm">
                           <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">
                              查看更多
                           </button>

                           <button :disabled="this.status.load===item.id" type="button" class="btn btn-outline-danger"
                              @click="addCart(item.id)">

                              <div v-if="this.status.load===item.id" class="spinner-border spinner-border-sm"
                                 role="status">
                                 <span class="visually-hidden">Loading...</span>
                              </div>
                              加到購物車

                           </button>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <!-- 購物車列表 -->
         <div class="col-md-5">
            <div class="sticky-top">
               <table class="table align-middle">
                  <thead>
                     <tr>
                        <th>
                           <i class="bi bi-cart-fill"></i>
                        </th>
                        <th>品名</th>
                        <th style="width: 110px">數量</th>
                        <th>單價</th>
                     </tr>
                  </thead>
                  <tbody>
                     <template v-if="cart.carts">
                        <!-- 當cart.carts存在時才出現 -->
                        <tr v-for="item in cart.carts" :key="item.id">
                           <!-- 將資料渲染出來 -->
                           <td>
                              <button type="button" class="btn btn-outline-danger btn-sm"
                                 @click="removeCartItem(item.id)" :disabled="status.load===item.id">
                                 <i class="bi bi-x"></i>
                              </button>
                           </td>
                           <td>
                              {{item.product.title}}
                              <div class="text-success" v-if="item.final_total!==item.total">
                                 已套用優惠券
                              </div>
                           </td>
                           <td>
                              <div class="input-group input-group-sm">
                                 <input type="number" class="form-control" min="1" :disabled="item.id===status.load"
                                    v-model.number="item.qty" @change="updataCart(item)">
                                 <div class="input-group-text">{{ item.product.unit }}</div>
                              </div>
                           </td>
                           <td class="text-end">
                              <small class="text-success" v-if="item.final_total!==item.total">折扣價：</small>
                              {{ item.final_total }}
                           </td>
                        </tr>
                     </template>
                  </tbody>
                  <tfoot>
                     <tr>
                        <td colspan="3" class="text-end">總計</td>
                        <td class="text-end">{{ $filters.currency(cart.total) }}</td>
                     </tr>
                     <tr>
                        <td colspan="3" class="text-end text-success">折扣價</td>
                        <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
                     </tr>
                  </tfoot>
               </table>
               <div class="input-group mb-3 input-group-sm">
                  <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
                  <div class="input-group-append">
                     <button class="btn btn-outline-secondary" type="button" @click="addCouponCode()">
                        套用優惠碼
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- <div class="my-5 row justify-content-center">
      <Form class="col-md-6" @submit="createOrder">

         <div class="mb-3">
            <label for="email" class="form-label">Email：</label>
            <Field id="Email" name="Email" type="email" placeholder="請輸入 Email" rules="email|required"
               v-model="form.user.email" class="form-control"></Field>
            <error-message name="Email"></error-message> <br>
         </div>

         <div class="mb-3">
            <label for="name" class="form-label">收件人姓名：</label>
            <Field id="name" name="姓名" type="text" rules="required" placeholder="請輸入姓名" v-model="form.user.name"
               class="form-control"></Field>
            <error-message name="姓名"></error-message> <br>
         </div>

         <div class="mb-3">
            <label for="tel" class="form-label">收件人電話：</label>
            <Field id="tel" name="電話" type="tel" placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"
               class="form-control"></Field>
            <error-message name="電話"></error-message><br>
         </div>

         <div class="mb-3">
            <label for="address" class="form-label">收件人地址：</label>
            <Field id="address" name="地址" type="text" placeholder="請輸入地址" rules="required" v-model="form.user.address"
               class="form-control">
            </Field>
            <error-message name="地址"></error-message><br>
         </div>

         <div class="mb-3">
            <label for="message" class="form-label">留言板：</label>
            <textarea name="" id="message" cols="30" rows="10" class="form-control" v-model="form.message"></textarea>
         </div>

         <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
         </div>
      </Form>
   </div> -->
   <Loading :active="isLoading"></Loading>
</template>
<script>
   export default {
      data() {
         return {
            products: [], // 存放產品列表的陣列
            status: {
               load: '',
            },
            cart: {}, // 存放購物車資料,
            coupon_code: '',
            form: {
               user: {
                  name: '',
                  email: '',
                  tel: '',
                  address: ''
               },
               message: '',
            },
         }
      },
      methods: {
         isPhone(value) {     //自訂規則
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需要正確的電話號碼'
         },
         createOrder() {      // 加到訂單
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
            const order = this.form
            this.$http.post(api, {
               data: order    // 將後端需要資料傳送過去
            }).then((res) => {
               console.log(res);
               this.getCart()
               if(res.data.success){
                  const orderId = res.data.orderId
                  this.$router.push(`checkout/${orderId}`)
               }
            })
         },
         getProducts() {
            this.isLoading = true
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
            this.$http.get(api).then((res) => {
               this.isLoading = false;
               this.products = res.data.products // 將後端的res.data.products 賦予進 this.products 
            })
         },
         getProduct(id) {
            this.$router.push(`/user/product/${id}`) // 利用參數傳入 id 並帶入路由導向
         },
         addCart(id) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
            const cart = { // 後端設定需傳入的資料 , 必須傳送指定資料才會回傳正確訊息
               product_id: id,
               qty: 1
            }
            this.status.load = id // 打開 disabled 
            this.$http.post(api, {
               data: cart // 傳送給後端的資料
            }).then( (res) => {
               this.status.load = '' // 關閉 disabled
               this.getCart()
            })

         },
         getCart() {
            this.isLoading = true;
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
            this.$http.get(api).then((res) => {
               this.cart = res.data.data // 取得後端資料賦予進 this.cart 
               this.isLoading = false
            })
         },
         updataCart(item) { // 更新購物車
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
            const cart = { // 回傳給後端的資料
               product_id: item.product_id,
               qty: item.qty
            }
            this.status.load = item.id // 打開 disabled 
            this.$http.put(api, {
               data: cart
            }).then((res) => {
               this.status.load = '' // 關閉 disabled
               this.getCart() // 重新渲染購物車畫面
            })
         },
         removeCartItem(id) { // 刪除購物車單一品項
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
            this.status.load = id
            this.$http.delete(api).then((res) => {
               this.status.load = ''
               this.getCart()
            })
         },
         addCouponCode() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
            const coupon = { // 重送後端需接收的資料
               code: this.coupon_code
            }
            this.$http.post(api, {
               data: coupon
            }).then((res) => {
               this.getCart()
            })
         }

      },
      created() {
         this.getProducts()
         this.getCart()
      },
   }
</script>