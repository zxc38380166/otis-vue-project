<template>
  <UserCart ref="UserCart"></UserCart>
  <!-- search -->
  <div class="container">
    <a class="text-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
      style="text-decoration:none;" aria-controls="collapseExample">
      <i class="bi bi-search"></i> 快速篩選
    </a>
    <div class="collapse" id="collapseExample">
      <div class="card card-body bg-dark text-light">
        <div class="row">
          <div class="col-md-8">
            <div class="input-group input-group-sm mb-3" @click="searchCategory=false">
              <span class="input-group-text" id="inputGroup-sizing-sm">輸入型號 : </span>
              <input placeholder="輸入時請區分大小寫" :disabled="searchCategory" type="text" class="form-control"
                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="searchText ">
            </div>
          </div>
        </div>
        <div>
          <ul class="row">
            <div class="col-md-6">系列名 :
              <li style="list-style-type:none;"><input type="checkbox" :true-value="'CS-Amax'"
                  v-model="searchCategory">CS-Amax</li>
              <li style="list-style-type:none;"><input type="checkbox" :true-value="'CS-Yasu'"
                  v-model="searchCategory">CS-Yasu</li>
              <li style="list-style-type:none;"><input type="checkbox" :true-value="'CS-Frady'"
                  v-model="searchCategory">CS-Frady</li>
            </div>
            <div class="col-md-6">規格 :
              <li style="list-style-type:none;"><input type="checkbox" :true-value="'天文台腕錶'"
                  v-model="searchCategory">天文台腕錶</li>
              <li style="list-style-type:none;"><input type="checkbox" :true-value="'石英腕錶'"
                  v-model="searchCategory">石英腕錶</li>
              <li style="list-style-type:none;"><input type="checkbox" :true-value="'同軸擒縱'"
                  v-model="searchCategory">同軸擒縱</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- products -->
    <div class="row ">
      <div class="col-md-6 col-xl-4 py-1 " v-for="item in products" :key="item.id">
        <div class="card bg-dark border border-secondary text-light">
          <div class="card-img-top" :style="{
                backgroundImage: `url(${item.imageUrl})`,
                height: `170px`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `contain`,
                zIndex: 1,
              }"></div>
          <div class="card-body ">
            <h6 class="card-title text-center">{{ item.title }}</h6>
            <p class="card-text">
              <ul class="list-group list-group-flush text-center ">
                <li class="list-group-item bg-dark border-bottom border-secondary text-light">
                  <span class="text-decoration-line-through fw-light">${{ $filters.currency(item.origin_price) }}</span>
                  <span class="fw-bold fs-5 text-warning">${{  $filters.currency(item.price) }}</span>
                </li>
                <li class="list-group-item bg-dark border-bottom border-secondary text-light">{{ item.category }}</li>
                <li class="list-group-item bg-dark border-bottom border-secondary text-light">{{ item.description }}
                </li>
                <li class="list-group-item bg-dark">
                  <button type="button" class="btn btn-secondary btn-sm my-1" @click.prevent="getProduct(item.id)">
                    查看詳情
                  </button><br>
                  <button type="button" class="btn btn-outline-warning btn-sm" @click="addToCart(item.id)">

                    <i class="bi bi-cart-check" style="color: yellow; font-size:1.2rem "></i>
                    add to cart
                    <div class="spinner-border spinner-border-sm" role="status" v-if="LoadStatus">
                    </div>
                  </button>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UserFoot></UserFoot>
  <Toast :toastMsg="toastMsg" ref="toast"></Toast>
  <Loading :active="isLoading"></Loading>
</template>
<script>
  import UserFoot from "../components/UserFoot.vue";
  import Toast from "../components/Toast.vue";
  import UserCart from "../components/UserCart.vue";
  export default {
    data() {
      return {
        toastMsg: {},
        products: [],
        productsCopy: [],
        isLoading: false,
        LoadStatus: false,
        searchText: "",
        searchCategory: "",
        searchDescription: "",
      };
    },
    components: {
      UserCart,
      Toast,
      UserFoot,
    },
    methods: {
      getProducts() {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        this.isLoading = true;
        this.$http.get(api).then((res) => {
          this.isLoading = false;
          this.products = res.data.products;
          this.productsCopy = res.data.products;
        });
      },
      addToCart(id) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        const cart = {
          product_id: id,
          qty: 1
        };
        this.LoadStatus = true;
        this.$http.post(api, {
          data: cart
        }).then((res) => {
          this.LoadStatus = false;
          this.toastMsg = res.data;
          this.$refs.UserCart.getCart();
        });
      },
    },
    created() {
      this.getProducts();
    },
    computed: {
      products() {
        if (this.searchCategory == '天文台腕錶') {
          return this.products.filter(item => {
            return item.description.match(this.searchCategory)
          })
        }
        if (this.searchCategory == '石英腕錶') {
          return this.products.filter(item => {
            return item.description.match(this.searchCategory)
          })
        }
        if (this.searchCategory == '同軸擒縱') {
          return this.products.filter(item => {
            return item.description.match(this.searchCategory)
          })
        }
        if (this.searchCategory == 'CS-Frady') {
          return this.products.filter(item => {
            return item.category.match(this.searchCategory)
          })
        }
        if (this.searchCategory == 'CS-Yasu') {
          return this.products.filter(item => {
            return item.category.match(this.searchCategory)
          })
        }
        if (this.searchCategory == 'CS-Amax') {
          return this.products.filter(item => {
            return item.category.match(this.searchCategory)
          })
        } else {
          return this.products.filter(item => {
            return item.title.match(this.searchText)
          })
        }
      }
    },
  };
</script>