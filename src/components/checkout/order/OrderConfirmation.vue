<template>
    <div>
      <div class="my-5 pt-3">
        <img src="../../../../static/images/confirm_order.png" height="100" width="90" class="my-2" alt="Order Confirmation Icon"/>
        <h3 class="title orange-text">Thank you for your order.</h3>
        <p class="font-weight-bold text">Your order has been successfully placed.</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OrderConfirmation'
}
</script>

<style scoped>
  .title {
    font-family: 'Glegoo', serif;
  }
  .text {
    font-size: medium;
  }
</style>
