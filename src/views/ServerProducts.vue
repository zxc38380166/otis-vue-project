<template>
   <div class="text-start">
      <!-- 打開Modal時傳入true以區分新增或是編輯(false則為編輯) -->
      <button class="btn btn-primary" type="button" @click="openModal(true)">增加一個產品</button>
   </div>
   <table class="table mt-4">
      <thead>
         <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="200">編輯</th>
         </tr>
      </thead>
      <tbody>
         <!-- 將products中的資料渲染出來 -->
         <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
               {{ $filters.currency(item.origin_price) }}
            </td>
            <td class="text-right">
               {{ $filters.currency(item.price) }}
            </td>
            <td>
               <span class="text-success" v-if="item.is_enabled">啟用</span> <!-- 判斷為item.is_enabled才顯示 -->
               <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
               <div class="btn-group">
                  <!-- 打開Modal時傳入false以區分新增或是編輯(true則為新增)) -->
                  <button class="btn btn-outline-primary btn-sm" @click="openModal(false , item)">編輯</button>
                  <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
               </div>
            </td>
         </tr>
      </tbody>
   </table>
   <Page :pages="pagination" @emit-pages="getproducts"></Page>
   <ProductsModal ref="ProductsModal" :products="tempProducts" @update-Products="updateProducts"></ProductsModal>
   <!-- 賦予ref為ProductsModal -->
   <OpenDelModal ref="OpenDelModal" :item="tempProducts" @del-item="delProducts"></OpenDelModal>
   <Loading :active="isLoading"></Loading> <!-- 讀取元件 :active="isLoading"為狀態false為關閉讀取 true為打開讀取 -->
   <Toast :toastMsg="toastMsg" ref="toast"></Toast>
</template>

<script>
   import Toast from '../components/Toast.vue'
   import ProductsModal from '../components/ServerProductsModal.vue'
   import OpenDelModal from '../components/delModal.vue'
   import Page from '../components/Page.vue'       // 引入頁碼
   //import {currency} from '../methods/filters'     // 引入千分號 (全域已註冊)
   export default {
      data() {
         return {
            products: [],     // 儲存後端商品
            pagination: {},   // 儲存後端商品方法
            tempProducts: {},
            isNaw: false,
            isLoading: false, // 預設為不讀取
            toastMsg:{}
         }
      },
      components: {
         ProductsModal,
         OpenDelModal,
         Page,
         Toast
      },
      methods: {
         getproducts( page=1 ) {    // 若沒有使用emit從子元件重入頁碼 , 則預設頁碼為1
            this.isLoading = true; // 取得資料前打開讀取狀態
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`; 
            this.$http.get(api).then((res) => {
               this.isLoading = false // 取得資料後關閉讀取狀態
               if (res.data.success) {
                  this.products = res.data.products; // 取得遠端資料中的 products 並帶入 this.products
                  this.pagination = res.data.pagination; // 取得遠端資料中的 pagination 並帶入 this.pagination
               }
            })
         },
         openModal(isNaw, item) { // 傳入兩個參數一個為判斷新增或編輯的布林值,一個為要編輯的商品資料 
            this.isNaw = isNaw; // 將data中的isNaw換成傳入的布林值以便判斷
            if (isNaw) { // 當傳入的是true則為新增 , 將放置商品的tempProducts清空
               this.tempProducts = {};
            } else { // 當傳入的是false則為編輯 , 將商品資料以語法糖展開的形式帶入放置商品的tempProducts
               this.tempProducts = {
                  ...item
               };
            }
            const ProductsModal = this.$refs.ProductsModal
            ProductsModal.show()
         },
         updateProducts(item) { //拆分( 新增,編輯 )
            this.tempProducts = item; // 將透過emit傳進來的 item 賦予進  this.tempProducts
            // 以下為預設是觸發時是新增的api
            let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/`
            let httpMethod = 'post'
            // 判斷若是編輯則更改api路徑
            if (!this.isNaw) {
               api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
               httpMethod = 'put'
            }
            // axios 連接方式以中括號帶入,概念是 object[httpMethod] 而 httpMethod 可以使用變數的方式傳入
            this.$http[httpMethod](api, {
               data: this.tempProducts
            }).then((res) => { // 將 {data:this.tempProducts} 發送給後端
               this.toastMsg = res.data
               this.$refs.toast.toast()               
               this.$refs.ProductsModal.hide(); 
               this.getproducts()
            })
         },
         openDelModal(item) { 
            this.tempProducts = {
               ...item
            };
            this.$refs.OpenDelModal.show();
         },
         delProducts() { // 連接後端要刪除商品的個別api
            const api =
               `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProducts.id}`
            this.$http.delete(api).then((res) => {
               this.toastMsg = res.data
               this.$refs.toast.toast()
               this.$refs.OpenDelModal.hide();
               this.getproducts();
            })
         },
      },
      created() {
         this.getproducts() // 渲染存在後端api的資料
      },
   }
</script>