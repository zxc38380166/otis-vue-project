<template>
   <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
         <table class="table align-middle">
            <thead>
               <th>品名</th>
               <th>數量</th>
               <th>單價</th>
            </thead>
            <tbody v-for="item in Order.products" :key="item.id">
               <tr>
                  <td>產品{{item.product.title}}</td>
                  <td>{{item.qty}}/ 個</td>
                  <td class="text-end">{{item.final_total}}</td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td colspan="2" class="text-end">總計</td>
                  <td class="text-end">{{Order.total}}</td>
               </tr>
            </tfoot>
         </table>

         <table class="table">
            <tbody>
               <tr>
                  <th width="100">Email</th>
                  <td>{{Order.user.email}}</td>
               </tr>
               <tr>
                  <th>姓名</th>
                  <td>{{Order.user.name}}</td>
               </tr>
               <tr>
                  <th>收件人電話</th>
                  <td>{{Order.user.tel}}</td>
               </tr>
               <tr>
                  <th>收件人地址</th>
                  <td>{{Order.user.address}}</td>
               </tr>
               <tr>
                  <th>付款狀態</th>
                  <td>
                     <span v-if="!Order.is_paid">尚未付款</span>
                     <span v-else class="text-success">付款完成</span>
                  </td>
               </tr>
            </tbody>
         </table>
         <div class="text-end">
            <button class="btn btn-danger" v-if="!Order.is_paid">確認付款去</button>
            <button class="btn btn-danger" v-if="Order.is_paid" @click.prevent="endOrder">返回商品頁面</button>
         </div>
      </form>
   </div>
   <Loading :active="isLoading"></Loading>
</template>
<script>
   export default {
      data() {
         return {
            Order: {
               user: {}
            },
            OrderId: '',
         }
      },
      methods: {
         getOrder() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.OrderId}`
            console.log(api);
            this.isLoading = true
            this.$http.get(api).then((res) => {
               console.log(res);
               if (res.data.success) {
                  this.isLoading = false
                  this.Order = res.data.order
                  console.log(this.Order);
               }
            })
         },
         payOrder() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.OrderId}`
            this.$http.post(api).then((res) => {
               console.log(res);
               this.getOrder();
            })
         },
         endOrder(){
            this.$router.push('/User/cart')
         }
      },
      created() {
         this.OrderId = this.$route.params.orderId
         console.log(this.OrderId);
         this.getOrder()
      },
   }
</script>