<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Base/BaseCart">購物車</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page"></li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2> {{ products.title}} </h2>
        <div> {{ products.content }} </div>
        <div> {{ products.description }} </div>
        <img :src="products.imageUrl" alt="" class="img-fluid mb-3">
      </article>
      <div class="col-4">
        <div class="h5" v-if="!products.price"> {{ products.origin_price }} 元</div>
        <del class="h6" v-if="products.price">原價 {{ products.origin_price }} 元</del>
        <div class="h5" v-if="products.price">現在只要 {{ products.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-outline-danger" @click="addtoCart(products.id)">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        products: {},
        id: '',
      }
    },
    methods: {
      getProducts() {
        this.isLoading = true;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
        console.log(api);
        this.$http.get(api).then((res) => {
          this.isLoading = false
          console.log(res);
          this.products = res.data.product // 取得後端 res.data.product 並賦予進 this.products
        })
      },
      addtoCart(id) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
        console.log(id);
        const cart = {
          product_id: id,
          qty: 1,
        }
        this.$http.post(api, {
          data: cart
        }).then((res) => {
          console.log(res);
        })
        this.$router.push('/Base/BaseCart');

      }
    },
    created() {
      this.id = this.$route.params.BaseProductsId // 路由中的 $route.params.productI 賦予進 this.id
      this.getProducts()
      console.log(this.id);
    },
  }
</script>
<style>
  #container {
    background-color: black;
  }
</style>