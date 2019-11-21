<template>
  <button type="button" class="btn btn-primary"
    :disabled="!product.product_quantity"
    @click="addToCart(product)">
    Add to cart
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddToCart',
  props: {
    product: Object
  },
  // props: ['products'],
  methods: mapActions([
    'addToCart'
  ])
}
</script>
