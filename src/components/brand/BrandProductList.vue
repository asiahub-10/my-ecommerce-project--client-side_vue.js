<template>
  <div>
    <div class="container">
      <div class="" style="overflow: hidden;">
        <h3 v-if="brand.brand_name !== null" class="brand-title mb-3 mt-5 text-center font-italic text-uppercase">{{ brand.brand_name }}</h3>
      </div>
    </div>
    <div class="container" style="overflow: hidden;">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="brandProductId in brandProductIds" :key="brandProductId.id">
          <div class="row mx-0" v-for="(row, index) in productRows" :key="index">
            <div id="column" v-if="brandProductId.id === product.id" class="col-sm-12" v-for="product in row" :key="product.id">
              <Product  :product="product" track-by="id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../brand/BrandProduct'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'

export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 12)
  }),
  methods: {
    ...mapActions(['getProducts']),
    mymethod () {
      // var allProduct = localStorage.getItem('allProduct')
      // console.log(allProduct)
    }
  },
  components: { Product },
  data () {
    return {
      brandId: this.$route.params.id,
      brandProductIds: [],
      brand: {}
    }
  },
  created () {
    this.mymethod()
    this.getProducts()
    this.$http.get('http://localhost/my-project/public/api/brand-product-by-id/' + this.brandId)
      .then(function (res) {
        // this.brandProductIds = JSON.stringify(res.body)
        this.brandProductIds = res.body
        // console.log(this.brandProductIds)
        // this.brandProductIds = res.body
        // for (let i in this.brandProductIds) {
        //   // console.log(brandProductIds[i])
        //   this.brandProductId = this.brandProductIds[i]
        //   for (let j in this.brandProductId) {
        //     // console.log(brandProductIds[i][j])
        //     this.brandId = this.brandProductId[i][j]
        //     // localStorage.setItem('brandIds', brandIds)
        //   }
        // }
      })
    this.$http.get('http://localhost/my-project/public/api/brand-by-id/' + this.brandId)
      .then(function (res) {
        this.brand = res.body
      })
  }
}
</script>

<style scoped>
  .brand-title {
    color: #ff9f49;
    display: inline-block;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
  .brand-title::before,
  .brand-title::after {
    content: '';
    position: absolute;
    top: 11px;
    height: 10px;
    width: 300px;
    border-top: #ff9f49 2px groove;
    border-bottom: #ff9f49 2px groove;
    overflow: hidden;
  }
  .brand-title::before {
    right: 100%;
    margin-right: 15px;
  }
  .brand-title::after {
    left: 100%;
    margin-left: 15px;
  }
</style>
