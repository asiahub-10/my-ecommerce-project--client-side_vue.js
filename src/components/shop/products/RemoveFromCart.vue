<template>
  <button title="Remove from list"
    type="button"
    class="close btn btn-outline-danger rounded-circle" style="opacity: 1; padding: 5px 7px;"
    aria-label="Remove"
    @click="removeFromCart(product)"
  >
    <span aria-hidden="true" class="text-danger">x</span>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RemoveFromCart',
  props: {
    product: Object
  },
  methods: mapActions([
    'removeFromCart'
  ])
}
</script>
