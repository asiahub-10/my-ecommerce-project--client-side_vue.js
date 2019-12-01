// const profile = {
//   'firstName': 'Joe',
//   'lastName': 'Montana',
//   'limit': 850.00
// }

// const products =
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

export default {
  getProfile (cb) {
    // setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    function rquest (callback) {
      var xmlHttp = new XMLHttpRequest()
      var serverPage = 'http://localhost/my-project/public/api/all-product'
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          callback(xmlHttp.response)
        }
      }
      xmlHttp.open('GET', serverPage)
      xmlHttp.send()
    }

    function myCallback (data) {
      var products = JSON.parse(data)
      setTimeout(() => cb(products), 1)
    }

    rquest(myCallback)
  },
  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  }
}
