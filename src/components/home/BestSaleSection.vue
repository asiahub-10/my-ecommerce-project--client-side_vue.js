<template>
  <div>
    <div class="bg-white pt-4 pb-3">
      <div id="bestSale" class="container">
        <h3 class="mb-4 pb-1 pt-3 orange-text font-weight-bold">Best Sales</h3>
        <div class="row">
          <div class="col-sm-6 col-lg-3 mb-4" v-for="bestSaleProductsId in bestSaleProductsIds" :key="bestSaleProductsId.id">
            <div class="" v-for="(row, index) in productRows" :key="index">
              <div class="" v-for="product in row" :key="product.id">
                <Product v-if="bestSaleProductsId.id === product.id" :product="product" track-by="id" />
              </div>
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
  name: 'BestSaleSection',
  computed: mapState({
    productRows: state => chunk(state.products.all, 4)
  }),
  methods: {
    ...mapActions(['getProducts']),
    myMethod () {
      // console.log()
    }
  },
  components: {
    Product
  },
  data () {
    return {
      bestSaleProductsIds: []
    }
  },
  mounted () {
    // this.myMethod()
    this.getProducts()
    this.$api.get('best-sale')
      .then(res => {
        // this.newProductsIds = JSON.parse(JSON.stringify(res.data))
        this.bestSaleProductsIds = res.data
        // console.log(this.bestSaleProductsIds)
      })
  }
}
</script>

<style scoped>
  .new-products {
    background-color: #B2E2B2;
  }
  .vueperslides--fixed-height { height: 440px; }
</style>
