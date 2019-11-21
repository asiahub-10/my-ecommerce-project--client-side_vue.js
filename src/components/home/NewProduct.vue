<template>
  <div>
    <div class="new-products orange lighten-4 pt-5 pb-3">
      <div class="container">
        <h3 class="mb-5 pt-3 text-muted font-weight-bold">New Products</h3>
        <!--<div class="row my-4">-->
          <div class="row" v-for="(row, index) in productRows" :key="index">
            <div class="col-sm-6 col-lg-3 mb-4" v-for="product in row" :key="product.id">
              <div class="" v-for="newProductsId in newProductsIds" :key="newProductsId.id">
                <Product v-if="newProductsId.id === product.id" :product="product" track-by="id" />
                <!--<Product :product="product" track-by="id" />-->
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../shop/products/Product'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'
// var products = JSON.parse(localStorage.getItem('newProducts'))
export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 4)
  }),
  methods: {
    ...mapActions(['getProducts']),
    myMethod () {
      // if (localStorage.getItem('allProduct')) {
      //   var allProduct = JSON.parse(localStorage.getItem('allProduct'))
      //   // console.log(allProduct)
      //   allProduct.splice(allProduct)
      //   // // console.log(allProduct)
      //   var newProduct = localStorage.getItem('newProducts')
      //   allProduct.push(JSON.parse(JSON.stringify(newProduct)))
      //   console.log(allProduct)
      // }
    }
  },
  // getProducts (cb) {
  //   setTimeout(() => cb(products), 200)
  // },
  components: { Product },
  data () {
    return {
      newProductsIds: []
    }
  },
  mounted () {
    localStorage.removeItem('allProduct')
    this.myMethod()
    this.getProducts()
    this.$api.get('all-published-product-id')
      .then(res => {
        this.newProductsIds = JSON.parse(JSON.stringify(res.data))
        // var newProducts = JSON.stringify(res.data)
        // // console.log(newProducts)
        // localStorage.setItem('newProducts', newProducts)
        // console.log(localStorage.getItem('allProduct'))
        // // console.log(JSON.stringify(res.data))
        // var allProduct = localStorage.get('allProduct')
        // allProduct.spli
        // localStorage.removeItem('allProduct')
        // let newProduct = JSON.stringify(res.data)
        // localStorage.setItem('allProduct', newProduct)
      })
  }
}
</script>

<style scoped>
  .new-products {
    background-color: #B2E2B2;
  }
</style>
