<template>
  <div>
    <div class="container">
      <h3>Products</h3>
      <div class="row" v-for="(row, index) in productRows" :key="index">
        <div class="col-sm-6 col-lg-3 mb-4" v-for="product in row" :key="product.id">
          <div class="" v-for="newProductsId in newProductsIds" :key="newProductsId.id">
            <Product v-if="newProductsId.id === product.id" :product="product" track-by="id" />
          </div>
        </div>
      </div>

      <!--<div class="row" v-for="(row, index) in productRows" :key="index">-->
        <!--<div class="col-sm-6 col-lg-3 mb-4" v-for="product in row" :key="product.id">-->
          <!--<div class="" v-for="newProductsId in newProductsIds" :key="newProductsId.id">-->
            <!--<div class="" v-for="item in items" :key="item.id">-->
              <!--<div v-if="product.id === item.id">-->
                <!--<Product v-if="newProductsId.id === product.id " :item="item" :product="product" track-by="id" />-->
              <!--</div>-->
              <!--<div v-else>-->
                <!--<Product v-if="newProductsId.id === product.id" :product="product" track-by="id" />-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import Product from '../shop/products/Product'
import { mapActions, mapState, mapGetters } from 'vuex'
import chunk from 'chunk'

export default {
  name: 'ProductList',
  // computed: mapState({
  //   productRows: state => chunk(state.products.all, 4)
  // }),
  computed: {
    ...mapGetters({items: 'cartProducts'}),
    ...mapState({productRows: state => chunk(state.products.all, 4)})
  },
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  data () {
    return {
      // newProducts: [],
      newProductsIds: []
    }
  },
  created () {
    this.getProducts()
    // this.$api.get('all-published-product')
    //   .then(res => {
    //     this.newProducts = res.data
    //     // console.log(this.newProducts)
    //     // let newProduct = JSON.parse(JSON.stringify(res.body))
    //     // localStorage.setItem('newProduct', newProduct)
    //   })
    this.$api.get('all-published-product-id')
      .then(res => {
        this.newProductsIds = res.data
        // console.log(this.newProductsIds)
        // let newProduct = JSON.parse(JSON.stringify(res.body))
        // localStorage.setItem('newProduct', newProduct)
      })
  }
  // methods: {
  //   allProducts: function () {
  //     this.$http.get('http://localhost/my-project/public/api/all-published-product')
  //       .then(function (res) {
  //         this.newProducts = res.body
  //         // let newProduct = JSON.parse(JSON.stringify(res.body))
  //         // localStorage.setItem('newProduct', newProduct)
  //       })
  //   }
  // },
  // created () {
  //   this.allProducts()
  // },
}
</script>
