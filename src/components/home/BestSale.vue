<template>
  <div>
    <div class="new-products bg-white pt-4 pb-3">
      <div  id="newArrivals" class="container">
        <h3 class="mb-4 pt-3 orange-text font-weight-bold">Best Sales</h3>
        <div class="row">
          <!--<vueper-slides-->
            <!--class="no-shadow"-->
            <!--:visible-slides="3"-->
            <!--slide-multiple-->
            <!--:gap="3"-->
            <!--:slide-ratio="1 / 4"-->
            <!--:dragging-distance="200"-->
            <!--:breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">-->
            <!--<vueper-slide class="col-sm-6 col-lg-3 mb-4" v-for="bestSaleProductsId in bestSaleProductsIds" :key="bestSaleProductsId.id">-->
            <!--<template v-slot:content>-->
              <!--<div class="" v-for="(row, index) in productRows" :key="index">-->
                <!--<div class="" v-for="product in row" :key="product.id">-->
                  <!--<Product v-if="bestSaleProductsId.id === product.id" :product="product" track-by="id" />-->
                <!--</div>-->
              <!--</div>-->
            <!--</template>-->
            <!--</vueper-slide>-->
          <!--</vueper-slides>-->
          <!--<vueper-slides-->
            <!--:visible-slides="3"-->
            <!--slide-multiple-->
            <!--:gap="3"-->
            <!--:slide-ratio="1 / 4"-->
            <!--:dragging-distance="200"-->
            <!--:breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">-->
            <!--<vueper-slide v-for="i in 10" :key="i" />-->
            <!--<template v-slot:content class="bg-warning">-->
              <!--<v-layout align-center justify-center>-->
                <!--<div>-->
                  <!--<div>5</div>-->
                  <!--<div>fh</div>-->
                <!--</div>-->
              <!--</v-layout>-->
            <!--</template>-->
          <!--</vueper-slides>-->
          <div class="w-100" style="overflow: hidden;">
            <vueper-slides
              autoplay
              class="no-shadow"
              :visible-slides="3"
              slide-multiple
              :gap="3"
              :slide-ratio="1 / 4"
              style="height: auto !important;">
              <vueper-slide class="col-sm-6 col-lg-4 mb-4 h-100" v-for="bestSaleProductsId in bestSaleProductsIds" :key="bestSaleProductsId.id">
                <template v-slot:content style="height: auto;">
                <v-layout align-center justify-center>
                  <div class="" v-for="(row, index) in productRows" :key="index">
                  <div class="" v-for="product in row" :key="product.id">
                  <Product v-if="bestSaleProductsId.id === product.id" :product="product" track-by="id" />
                  </div>
                  </div>
                </v-layout>
                </template>
              </vueper-slide>
            </vueper-slides>
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
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 4)
  }),
  methods: {
    ...mapActions(['getProducts']),
    myMethod () {
      // console.log()
    }
  },
  components: { Product, VueperSlides, VueperSlide },
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
        console.log(this.bestSaleProductsIds)
      })
  }
}
</script>

<style scoped>
  .new-products {
    background-color: #B2E2B2;
  }
</style>
