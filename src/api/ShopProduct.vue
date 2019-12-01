<template>
  <div>
    <!--<fixtures :products="products"/>-->
  </div>
</template>

<script>
// import Fixtures from './fixtures'

export default {
  name: 'ShopProduct',
  // components: {
  //   'fixtures': Fixtures
  // },
  data () {
    return {
      // products: []
    }
  },
  methods: {
    // allProduct () {
    //   this.$api.get('all-product')
    //     .then(res => {
    //       // let allProduct = res.data
    //       // localStorage.setItem('allProduct', allProduct)
    //       // localStorage.clear()
    //       // global.pro = JSON.stringify(res.data)
    //       // this.products.push(global.pro)
    //       this.products = JSON.stringify(res.data)
    //       // console.log(this.products)
    //       // JSON.parse(undefined)
    //       // console.log('vue' + this.products)
    //       // console.log(res.data)
    //     })
    //     // .then(cb(this.products))
    //     // .then(cb => {
    //     //   console.log('vue Page' + this.products)
    //     // })
    // }
  },
  created () {
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
    // this.allProduct()
    // this.$api.get('all-product')
    //   .then(res => {
    //     this.products = JSON.stringify(res.data)
    //   })
    //   .then(setTimeout(() => cb(this.products), 200))
  },
  getProducts (cb) {
    // function rquest (callback) {
    //   this.$api.get('all-product')
    //     .then(res => {
    //       callback(res.data)
    //     })
    // }
    //
    // function myCallback (data) {
    //   var pro = data
    //   setTimeout(() => cb(pro), 200)
    // }
    //
    // rquest(myCallback)
    //
    // console.log('vue Page' + this.products)
    // var products = JSON.parse(this.products)
    // this.$api.get('all-product')
    //   .then(res => {
    //     var products = res.data
    //     console.log(products)
    //     setTimeout(() => cb(products), 200)
    //   })
    // setTimeout(() => cb(products), 200)
  }
}
</script>

<style scoped>

</style>
