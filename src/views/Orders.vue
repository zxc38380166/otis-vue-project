<template>
   <table class="table mt-4">
      <thead>
         <tr>
            <th>購買時間</th>
            <!-- <th>Email</th> -->
            <th>購買款項</th>
            <th>應付金額</th>
            <th>是否付款</th>
            <th>編輯</th>
         </tr>
      </thead>
      <tbody>
         <template v-for="(item,key) in orders" :key="key">
            <tr>
               <td>
                  <ul class="list-unstyled">
                     <li>{{ $filters.date(item.create_at) }}</li>
                  </ul>
               </td>
               <!-- <td>{{ item.user.email }}</td> -->
               <td>
                  <ul class="list-unstyled">
                     <li v-for="(product,i) in item.products" :key="i">
                        {{ product.product.title }}  <br> 數量：{{ product.qty }}
                        {{ product.product.unit }} <hr>
                     </li>
                  </ul>
               </td>
               <td class="text-right">
                  {{ item.total }}
               </td>
               <td>
                  <span class="text-success" v-if="item.is_paid">已付款</span>
                  <span class="text-text-muted" v-else>未付款</span>
               </td>
               <td>
                  <div class="btn-group">
                     <button class="btn btn-outline-primary btn-sm" @click="openOrderModal(item)">編輯</button>
                     <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
                  </div>
               </td>
            </tr>
         </template>
      </tbody>
   </table>
   <OrderModal ref="orderModal" :Order="tempOrders" @updataOrder="updataOrder"></OrderModal>
   <Page :pages="pagination" @emit-pages="getOrders"></Page>
   <Loading :active="isLoading"></Loading>
   <DelModal ref="delModal" :item="tempOrders" @del-item="delOrder"></DelModal>
</template>
<script>
   import DelModal from '../components/delModal.vue'
   import OrderModal from '../components/OrdersModal.vue'
   import Page from '../components/Page.vue'
   export default {
      data() {
         return {
            orders: {},
            tempOrders: {},
            pagination: '',
         }
      },
      components: {
         OrderModal,
         Page,
         DelModal
      },
      methods: {
         getOrders(page = 1) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
            console.log(api);
            this.isLoading = true
            this.$http.get(api).then((res) => {
               this.isLoading = false
               this.orders = res.data.orders
               this.pagination = res.data.pagination
               console.log(this.orders);
               console.log(this.pagination);
            })
         },
         openOrderModal(item) {
            const delComponent = this.$refs.orderModal;
            delComponent.show();
            this.tempOrders = {
               ...item
            }
         },
         updataOrder(item) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
            console.log(api);
            const is_paid = {
               is_paid: item.is_paid
            }
            this.$http.put(api, {
               data: is_paid
            }).then((res) => {
               console.log(res);
               this.getOrders(item.current_page)
               this.$refs.orderModal.hide()
            })
         },
         openDelModal(item) {
            this.$refs.delModal.show()
            this.tempOrders = {
               ...item
            }
            console.log(item);
            console.log(this.tempOrders);
         },
         delOrder() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrders.id}`
            console.log(api);
            this.$http.delete(api).then((res) => {
               this.getOrders(this.pagination.current_page)
               this.$refs.delModal.hide()
            })
         }
      },
      created() {
         this.getOrders()
      },

   }
</script>