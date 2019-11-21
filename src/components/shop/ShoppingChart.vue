<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-12">
          <ShoppingCart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCart from './shopping-cart/ShoppingCart'
export default {
  name: 'ShoppingChart',
  components: {
    ShoppingCart
  }
}
</script>

<style scoped>

</style>
