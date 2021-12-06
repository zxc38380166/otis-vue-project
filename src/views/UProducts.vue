<template>
   <div class="d-flex flex-wrap justify-content-center bg-dark">
      <!-- 輪播 -->
      <div class="w-100">
         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
               <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
               ></button>
               <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
               ></button>
               <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
               ></button>
            </div>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <img
                     src="https://jedchang.github.io/ClocksStore/img/banner_02.8b09666c.jpg"
                     class="d-block w-100"
                     alt="..."
                     style="height: auto"
                  />
               </div>
               <div class="carousel-item">
                  <img
                     src="https://jedchang.github.io/ClocksStore/img/banner_01.c28d7de8.jpg"
                     class="d-block w-100"
                     alt="..."
                     style="height: auto"
                  />
               </div>
               <div class="carousel-item">
                  <img
                     src="https://jedchang.github.io/ClocksStore/img/banner_04.27833224.jpg"
                     class="d-block w-100"
                     alt="..."
                     style="height: auto"
                  />
               </div>
            </div>
            <button
               class="carousel-control-prev"
               type="button"
               data-bs-target="#carouselExampleIndicators"
               data-bs-slide="prev"
            >
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
            </button>
            <button
               class="carousel-control-next"
               type="button"
               data-bs-target="#carouselExampleIndicators"
               data-bs-slide="next"
            >
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
            </button>
         </div>
      </div>
      <!-- search and cart -->
      <div class="container">
         <div class="row pt-4">
            <div class="col-12 col-xl-8 text-center">
               <div class="btn-group mx-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn btn-outline-light">超霸系列</button>
               </div>
               <div class="btn-group mx-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-outline-light">海馬系列</button>
               </div>
               <div class="btn-group mx-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-outline-light">星座系列</button>
               </div>
               <p class="text-warning pt-2">
                  點擊領取2021秋冬超殺優惠碼：
                  <button type="button" class="btn btn-outline-warning">WATCH</button>
               </p>
            </div>
            <div class="col-12 col-xl-4 d-flex h-25 justify-content-center">
               <input
                  class="form-control w-50 rounded-pill"
                  type="search"
                  placeholder="Search"
                  aria-label="Search "
               />
               <i
                  class="bi bi-cart4 ps-3"
                  style="font-size: 2rem; color: cornflowerblue"
                  @click="ProductsModal"
               ></i>
            </div>
         </div>
      </div>
      <!-- products -->
      <div class="container h-50">
         <div class="row">
            <div class="col-12 col-md-6 col-xl-4 py-1" v-for="item in products" :key="item.id">
               <div class="card">
                  <img :src="item.imageUrl" class="card-img-top h-50" alt="..." />
                  <div class="card-body">
                     <h5 class="card-title text-center">{{ item.title }}</h5>
                     <p class="card-text"></p>
                     <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">
                           <span
                              class="text-decoration-line-through fw-light"
                           >${{ $filters.currency(item.origin_price) }}</span>
                           <span
                              class="fw-bold fs-3 text-warning"
                           >${{ $filters.currency(item.price) }}</span>
                        </li>
                        <li class="list-group-item">{{ item.category }}</li>
                        <li class="list-group-item">{{ item.description }}</li>
                        <li class="list-group-item">
                           <button
                              type="button"
                              class="btn btn-secondary"
                              @click.prevent="getProduct(item.id)"
                           >查看詳情</button>
                        </li>
                     </ul>
                     <p class="text-center">
                        <button
                           type="button"
                           class="btn btn-outline-warning"
                           @click="addToCart(item.id)"
                        >
                           <i
                              class="bi bi-cart-check ps-2 h"
                              style="font-size: 1.3rem; color: rgb(10, 10, 10)"
                           ></i>
                           add to cart
                        </button>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- foot -->
      <div class="container py-3">
         <div class="row">
            <div class="col-12">
               <div class="card text-center">
                  <div class="card-header">
                     <i class="bi bi-truck" style="font-size: 2rem; color: cornflowerblue"></i>
                     購買任一系列,憑保固卡線上登錄即享免費到府維修收送
                  </div>
                  <div class="card-body">
                     <div class="container">
                        <div class="row">
                           <div class="col-12 col-sm-6 py-1">
                              <div class="card">
                                 <div class="card-body">
                                    <h5 class="card-title">聯絡資訊</h5>
                                    <p class="text-muted">
                                       <i
                                          class="bi bi-shop"
                                          style="font-size: 1.5rem; color: cornflowerblue"
                                       ></i>
                                       嘉義縣中埔鄉富收村富和路51號
                                    </p>
                                    <p class="text-muted">
                                       <i
                                          class="bi bi-telephone"
                                          style="font-size: 1.5rem; color: cornflowerblue"
                                       ></i>
                                       0986074168
                                    </p>
                                    <p class="text-muted">
                                       <i
                                          class="bi bi-envelope"
                                          style="font-size: 1.5rem; color: cornflowerblue"
                                       ></i>
                                       zxc38380166@yahoo.com.tw
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-sm-6 py-1">
                              <div class="card">
                                 <div class="card-body">
                                    <h5 class="card-title">社群</h5>
                                    <p class="card-text">
                                       <i
                                          class="bi bi-facebook"
                                          style="font-size: 1.5rem; color: cornflowerblue"
                                       ></i>
                                       xxxxx
                                    </p>
                                    <p class="card-text">
                                       <i
                                          class="bi bi-instagram"
                                          style="font-size: 1.5rem; color: cornflowerblue"
                                       ></i>
                                       xxxxx
                                    </p>
                                    <p class="card-text">
                                       <i
                                          class="bi bi-github"
                                          style="font-size: 1.5rem; color: cornflowerblue"
                                       ></i>
                                       xxxxx
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="card-footer text-muted">
                     <i class="bi bi-watch"></i>
                     此網頁僅供面試使用,無商業用途,圖片取自於網路
                  </div>
               </div>
            </div>
         </div>
      </div>
      <UserProductsModal ref="UserProductsModal"></UserProductsModal>
      <Toast :toastMsg="toastMsg" ref="toast"></Toast>
   </div>
</template>
<script>
import Toast from "../components/Toast.vue";
import UserProductsModal from "../components/UserProductsModal.vue";
export default {
   data() {
      return {
         products: [],
         toastMsg: {},
      };
   },
   components: {
      UserProductsModal, Toast
   },
   methods: {
      getProducts() {
         const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
         this.$http.get(api).then((res) => {
            this.products = res.data.products;
            this.products.indexOf('超霸')
            console.log(res);
         });
      },
      getProduct(id) {
         console.log(id);
      },
      addToCart(id) {
         const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
         console.log(api, id);
         const cart = {
            product_id: id,
            qty: 1,
         };
         this.$http.post(api, { data: cart } ).then((res) => {
            this.toastMsg = res.data
         });
         this.$refs.toast.toast()
      },
      ProductsModal() {
         const ProductsModal = this.$refs.UserProductsModal;
         ProductsModal.show();
      },
   },
   created() {
      this.getProducts();
   },
};
</script>
<style lang="scss"></style>
