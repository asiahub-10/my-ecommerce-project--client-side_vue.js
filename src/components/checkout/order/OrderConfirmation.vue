<template>
    <div>
      <div v-if="$route.params.msg" class="my-5 pt-3">
        <img src="../../../../static/images/confirm_order.png" height="100" width="90" class="my-2" alt="Order Confirmation Icon"/>
        <h3 class="title orange-text">Thank you for your order.</h3>
        <p class="font-weight-bold text">Your order has been successfully placed.</p>
        <p class="text-dark">A confirmation mail with order details has been send to: <span class="email-text font-weight-bold">{{ email }}</span></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OrderConfirmation',
  data () {
    return {
      email: this.$route.params.email
    }
  }
}
</script>

<style scoped>
  .title {
    font-family: 'Glegoo', serif;
  }
  .text {
    font-size: medium;
  }
  .email-text {
    color: #fb8c00;
  }
</style>
