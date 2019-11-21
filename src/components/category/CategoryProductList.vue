<template>
  <div>
    <div class="container">
      <div class="" style="overflow: hidden;">
        <h3 v-if="category.category_name !== null" class="category-title mb-3 mt-5 text-center font-italic text-uppercase">{{ category.category_name }}</h3>
      </div>
    </div>
    <div class="container" style="overflow: hidden;">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="categoryProductId in categoryProductIds" :key="categoryProductId.id">
          <div class="row mx-0" v-for="(row, index) in productRows" :key="index">
            <div id="column" v-if="categoryProductId.id === product.id" class="col-sm-12" v-for="product in row" :key="product.id">
              <Product  :product="product" track-by="id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../category/CategoryProduct'
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
      categoryId: this.$route.params.id,
      categoryProductIds: [],
      category: {}
    }
  },
  created () {
    this.mymethod()
    this.getProducts()
    this.$http.get('http://localhost/my-project/public/api/category-product-by-id/' + this.categoryId)
      .then(function (res) {
        // this.categoryProductIds = JSON.stringify(res.body)
        this.categoryProductIds = res.body
        // console.log(this.categoryProductIds)
        // this.categoryProductIds = res.body
        // for (let i in this.categoryProductIds) {
        //   // console.log(categoryProductIds[i])
        //   this.categoryProductId = this.categoryProductIds[i]
        //   for (let j in this.categoryProductId) {
        //     // console.log(categoryProductIds[i][j])
        //     this.categoryId = this.categoryProductId[i][j]
        //     // localStorage.setItem('categoryIds', categoryIds)
        //   }
        // }
      })
    this.$http.get('http://localhost/my-project/public/api/category-by-id/' + this.categoryId)
      .then(function (res) {
        this.category = res.body
      })
  }
}
</script>

<style scoped>
  .category-title {
    color: #ff9f49;
    display: inline-block;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
  .category-title::before,
  .category-title::after {
    content: '';
    position: absolute;
    top: 11px;
    height: 10px;
    width: 300px;
    border-top: #ff9f49 2px groove;
    border-bottom: #ff9f49 2px groove;
    overflow: hidden;
  }
  .category-title::before {
    right: 100%;
    margin-right: 15px;
  }
  .category-title::after {
    left: 100%;
    margin-left: 15px;
  }
</style>
