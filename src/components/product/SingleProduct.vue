<template>
  <div>
    <!-- banner -->
    <div class="container-fluid">
      <div class="row">
        <div class="card">
          <img src="/static/images/product_banner.jpg" alt="Product Banner" class="card-img-top rounded-0" />
          <!-- breadcrumbs -->
          <div class="centered">
            <router-link to="/" class="text font-weight-bold text-uppercase"><i class="fas fa-home"></i>Home</router-link> <i class="text-light divider">||</i>
            <span class="font-italic">Product Detail</span>
          </div>
          <!-- //breadcrumbs -->
        </div>
      </div>
    </div>
    <!--//banner -->
    <div>
      <div v-for="(row, index) in productRows" :key="index">
        <div class="container-fluid p-0" v-for="product in row" :key="product.id">
          <ProductDetail v-if="singleProductId.id === product.id" :product="product" track-by="id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetail from '../product/ProductDetails'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'

export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 4)
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { ProductDetail },
  data () {
    return {
      productId: this.$route.params.id,
      singleProductId: {}
    }
  },
  created () {
    this.getProducts()
    this.$http.get('http://localhost/my-project/public/api/product-by-id/' + this.productId)
      .then(function (res) {
        this.singleProductId = res.body
      })
  }
}
</script>

<style scoped>
  .centered {
    font-weight: bold;
    background-color: rgba(128, 128, 128, .5);
    color: rgba(198, 206, 209, 1);
    width: 100%;
    padding: 10px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text {
    color: rgba(198, 206, 209, 1);
    font-size: medium;
  }
  .text:hover {
    color: #ff9f49;
  }
</style>
