<template>
  <div>
    <div class="new-products bg-white pt-5 pb-3">
      <div  id="newArrivals" class="container">
        <h3 class="mb-4 pb-1 pt-3 orange-text font-weight-bold">New Arrivals</h3>
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

export default {
  name: 'NewProductSection',
  computed: mapState({
    productRows: state => chunk(state.products.all, 4)
  }),
  methods: {
    ...mapActions(['getProducts']),
    myMethod () {
      // console.log()
    }
  },
  components: { Product },
  data () {
    return {
      newProductsIds: []
    }
  },
  mounted () {
    // this.myMethod()
    this.getProducts()
    this.$api.get('all-published-product-id')
      .then(res => {
        // this.newProductsIds = JSON.parse(JSON.stringify(res.data))
        this.newProductsIds = res.data
      })
  }
}
</script>

<style scoped>
  .new-products {
    background-color: #B2E2B2;
  }
</style>
