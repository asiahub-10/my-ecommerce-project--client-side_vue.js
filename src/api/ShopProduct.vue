<template>
  <div>
    <fixtures :products="products"/>
  </div>
</template>

<script>
import Fixtures from './fixtures'

export default {
  name: 'ShopProduct',
  components: {
    'fixtures': Fixtures
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    getData () {
      this.$api.get('all-product')
        .then(res => {
          // let allProduct = res.data
          // localStorage.setItem('allProduct', allProduct)
          localStorage.clear()
          this.products = JSON.stringify(res.data)
          // this.products.push(allProduct)
          // this.products = res.data
          // console.log(this.products)
          // JSON.parse(undefined)
        })
    }
  },
  mounted () {
    // localStorage.clear()
    // this.$api.get('all-product')
    //   .then(res => {
    //     // let allProduct = JSON.stringify(res.data)
    //     // localStorage.setItem('allProduct', allProduct)
    //     localStorage.clear()
    //     this.products = JSON.stringify(res.data)
    //     // this.products = res.data
    //     // console.log(this.products)
    //     // JSON.parse(undefined)
    //   })
    this.getData()
  },
  getProducts (cb) {
    var products = JSON.parse(this.products)
    setTimeout(() => cb(products), 200)
  }
}
</script>

<style scoped>

</style>
