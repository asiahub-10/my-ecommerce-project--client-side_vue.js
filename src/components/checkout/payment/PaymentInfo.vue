<template>
  <div>
    <div class="my-5">
      <h3 class="pt-2 pb-1 title text-muted">Payment & Billing Information</h3>
      <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
        <p class="font-weight-bold rgba-grey-slight card card-body" style="font-size: medium;">
          Payment Due Total: {{total | formatMoney}} (for {{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }})</p>
        <div v-if="total | formatMoney >= 0">
          <p class="orange-text font-weight-bold text-capitalize" style="font-size: large;"><u>Select your payment method</u></p>
          <div class="container">
            <order/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Order from '../order/OrderInfo'

export default {
  name: 'PaymentInfo',
  data () {
    return {
      formatMoney: ''
    }
  },
  components: {
    'order': Order
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'total'
    ])
  }
}
</script>

<style scoped>
  .title {
    font-family: 'Glegoo', serif;
  }
</style>
