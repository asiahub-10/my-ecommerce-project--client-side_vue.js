const state = {
  all: []
}

const mutations = {
  RECEIVE_PRODUCTS (state, products) {
    state.all = products
  },

  ADD_TO_CART (state, productId) {
    state.all
      .find(product => product.id === productId)
      .product_quantity--
  },

  INCREASE_QUANTITY (state, productId) {
    state.all
      .find(product => product.id === productId)
      .product_quantity--
  },

  DECREASE_QUANTITY (state, productId) {
    state.all
      .find(product => product.id === productId)
      .product_quantity++
  },

  REMOVE_FROM_CART (state, removedProduct) {
    state.all
      .find(product => product.id === removedProduct.id)
      .product_quantity += removedProduct.quantity
  }
}

export default {
  state,
  mutations
}
