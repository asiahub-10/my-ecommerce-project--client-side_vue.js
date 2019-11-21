// const profile = {
//   'firstName': 'Joe',
//   'lastName': 'Montana',
//   'limit': 850.00
// }

// import Product from '../components/product/ShopProduct'
import Vue from 'vue'
// import vueResource from 'vue-resource'
// Vue.use(vueResource)

// var products = JSON.parse(localStorage.getItem('allProduct'))
// var products = localStorage.getItem('allProduct')
var newProducts = localStorage.getItem('newProduct')
// var products = []

// var products = [localStorage.getItem('allProduct')]
// const products = [{"id":4,"category_id":1,"brand_id":2,"product_name":"New Product-20","product_price":1213521,"product_quantity":14,"product_short_description":"fdgd","product_long_description":"<p>dgdsgs</p>","product_image":"product-images/New Product-20_5ce4c6bb66ff3.jpg","publication_status":1,"created_at":"2019-05-20 05:44:00","updated_at":"2019-06-16 14:20:05"},{"id":6,"category_id":1,"brand_id":1,"product_name":"Heels","product_price":541451,"product_quantity":5,"product_short_description":"hfghf","product_long_description":"<p>gfh</p>","product_image":"product-images/Heels.png","publication_status":1,"created_at":"2019-05-20 06:07:14","updated_at":"2019-06-13 05:50:03"},{"id":7,"category_id":2,"brand_id":2,"product_name":"New Product-2","product_price":45654,"product_quantity":1,"product_short_description":"dsfdfsg fghdghfgh","product_long_description":"<p>xcvbcxbxcvbnxcv</p>","product_image":"product-images/New Product-2_5ce4c61bd5627.png","publication_status":1,"created_at":"2019-05-21 03:37:09","updated_at":"2019-06-16 14:21:43"},{"id":9,"category_id":3,"brand_id":2,"product_name":"New Product-2","product_price":515,"product_quantity":4,"product_short_description":"fghg","product_long_description":"<p>dfhgn fjh ghk</p>","product_image":"product-images/New Product-2_5ce373b0bfb04.jpg","publication_status":1,"created_at":"2019-05-21 03:42:41","updated_at":"2019-06-16 14:12:16"},{"id":10,"category_id":3,"brand_id":3,"product_name":"New Product-2","product_price":74,"product_quantity":85,"product_short_description":"JKLLH  GHD","product_long_description":"<p>FGH FGD FH</p>","product_image":"product-images/New Product-2_5ce394b4ad178.jpg","publication_status":1,"created_at":"2019-05-21 06:03:33","updated_at":"2019-06-13 05:49:33"}]
// JSON.stringify(products)
// [
//   { 'id': 1, 'product_name': 'iPad 4 Mini', 'product_price': 500.01, 'product_quantity': 2, 'shipping': 15.00 },
//   { 'id': 2, 'product_name': 'H&M T-Shirt White', 'product_price': 10.99, 'product_quantity': 10, 'shipping': 5.00 },
//   { 'id': 3, 'product_name': 'Nirvana - LP', 'product_price': 19.99, 'product_quantity': 3, 'shipping': 22.50 },
//   { 'id': 4, 'product_name': 'Licensed Steel Gloves', 'product_price': 30.99, 'product_quantity': 5, 'shipping': 9.00 },
//   { 'id': 5, 'product_name': 'Rustic Granite Car', 'product_price': 487.00, 'product_quantity': 1, 'shipping': 35.00 },
//   { 'id': 6, 'product_name': 'Fantastic Cotton Pants', 'product_price': 59.59, 'product_quantity': 6, 'shipping': 11.00 },
//   { 'id': 7, 'product_name': 'Tasty Wooden Pizza', 'product_price': 29.00, 'product_quantity': 2, 'shipping': 18.00 },
//   { 'id': 8, 'product_name': 'Delicious Concrete Fish', 'product_price': 12.99, 'product_quantity': 4, 'shipping': 6.00 },
//   { 'id': 9, 'product_name': 'Granite Computer', 'product_price': 109.10, 'product_quantity': 10, 'shipping': 22.70 },
//   { 'id': 10, 'product_name': 'Handcrafted Soft Salad', 'product_price': 13.99, 'product_quantity': 3, 'shipping': 3.50 },
//   { 'id': 11, 'product_name': 'Incredible Steel Bacon', 'product_price': 30.99, 'product_quantity': 5, 'shipping': 7.90 },
//   { 'id': 12, 'product_name': 'Tasty Plastic Bike', 'product_price': 75.00, 'product_quantity': 5, 'shipping': 25.00 }
// ]

// const products =
// [
//   { 'id': 1, 'product_name': 'iPad 4 Mini', 'product_price': 500.01, 'product_quantity': 20 },
//   { 'id': 2, 'product_name': 'H&M T-Shirt White', 'product_price': 10.99, 'product_quantity': 10 },
//   { 'id': 3, 'product_name': 'Nirvana - LP', 'product_price': 19.99, 'product_quantity': 30 },
//   { 'id': 4, 'product_name': 'Licensed Steel Gloves', 'product_price': 30.99, 'product_quantity': 5 },
//   { 'id': 5, 'product_name': 'Rustic Granite Car', 'product_price': 487.00, 'product_quantity': 10 },
//   { 'id': 6, 'product_name': 'Fantastic Cotton Pants', 'product_price': 59.59, 'product_quantity': 60 },
//   { 'id': 7, 'product_name': 'Tasty Wooden Pizza', 'product_price': 29.00, 'product_quantity': 20 },
//   { 'id': 8, 'product_name': 'Delicious Concrete Fish', 'product_price': 12.99, 'product_quantity': 4 },
//   { 'id': 9, 'product_name': 'Granite Computer', 'product_price': 109.10, 'product_quantity': 100 },
//   { 'id': 10, 'product_name': 'Handcrafted Soft Salad', 'product_price': 13.99, 'product_quantity': 3 },
//   { 'id': 11, 'product_name': 'Incredible Steel Bacon', 'product_price': 30.99, 'product_quantity': 5 },
//   { 'id': 12, 'product_name': 'Tasty Plastic Bike', 'product_price': 75.00, 'product_quantity': 50 }
// ]

const promotions = [
  { 'id': 1, 'product_name': '30% OFF' }
  // { 'id': 2, 'product_name': '$100.00 Discount' }
  // { 'id': 3, 'product_name': 'Free Shipping' },
  // { 'id': 4, 'product_name': '+ $100.00 on limit' }
]

// Simulate requests
Vue.use({
  props: {
    products: {
      type: Array
      // default: () => []
    }
    // products: []
  }
})
export default {
  // props: {
  //   products: {
  //     type: Array
  //     // default: () => []
  //   }
  //   // products: []
  // },
  getProfile (cb) {
    // setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    // setTimeout(() => cb(products), 200)
    // const products = {products: []}
    // this.$api.get('all-product')
    //   .then(res => {
    //     this.products = res.data
    //     // setTimeout(() => cb(res.data), 200)
    //   })
    setTimeout(() => cb(this.products), 200)
  },
  getNewProducts (cb) {
    setTimeout(() => cb(newProducts), 200)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  },
  mounted () {
    // this.$api.get('all-product')
    //   .then(res => {
    //     products = res.data
    //     // setTimeout(() => cb(res.data), 200)
    //   })
    console.log(this.products)
  }
}
