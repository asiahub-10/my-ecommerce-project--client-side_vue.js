<template>
  <div>
    <div class="mt-5 mb-5 pt-4" v-if="itemQuantity <= 0">
      <h4 class="text-uppercase text-muted">Please purchase some product first <i class="fas fa-shopping-basket"></i></h4>
    </div>
    <div v-else>
      <h3 class="mt-5 mb-4 title text-muted">Shipping Information</h3>
      <div class="container mb-5">
        <div class="row">
          <div class="col-lg-6 col-md-9 col-sm-10 mx-auto">
            <table id="shippingInfoTable" class="table" style="border-bottom: 1px solid #dee2e6;">
              <tbody>
              <tr>
                <td><h6 class="text-left orange-text pl-1 mb-0">Name:</h6></td>
                <td class="text-left">
                  <input :value="customer.first_name +' '+ customer.last_name"  type="text" class="border-0 text-muted font-weight-bold" style="font-size: medium"/>
                </td>
              </tr>
              <tr>
                <td><h6 class="text-left orange-text pl-1 mb-0">Mobile Number:</h6></td>
                <td class="text-left">
                  <input :value="customer.mobile" type="text" class="border-0 text-muted font-weight-bold" style="font-size: medium"/>
                </td>
              </tr>
              <tr>
                <td><h6 class="text-left orange-text pl-1 mb-0">Address:</h6></td>
                <td class="text-left">
                  <input :value="customer.address" type="text" class="border-0 text-muted font-weight-bold" style="font-size: medium"/>
                </td>
              </tr>
              </tbody>
            </table>
            <form id="shippingForm">
              <p class="orange-text mt-1 mb-2" style="font-size: larger;">You can edit shipping information (if necessary) before pressing the save button.</p>
              <div class="row">
                <div class="col-sm-6">
                  <input @click.prevent="editShippingForm" type="button" class="btn btn-outline-warning font-weight-bold submit-btn" value="edit" style="font-size: 20px;"/>
                </div>
                <div class="col-sm-6">
                  <input @click.prevent="submitShippingInfo" type="submit" class="btn btn-outline-warning font-weight-bold submit-btn" value="Save" style="font-size: 20px;"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="shippingInfoForm" hidden>
          <shipping-info-edit></shipping-info-edit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditShippingInfo from './EditedShippingInfo'
import { mapGetters } from 'vuex'
export default {
  name: 'ShippingInfo',
  data () {
    return {
      customerId: this.$route.params.id,
      customer: {},
      shippingId: {}
    }
  },
  components: {
    'shipping-info-edit': EditShippingInfo
  },
  computed: mapGetters({
    itemQuantity: 'itemsQuantity'
  }),
  methods: {
    submitShippingInfo () {
      this.$router.push({
        name: 'PaymentInfo',
        params: {id: this.customerId, name: this.customer.first_name + ' ' + this.customer.last_name, mobile: this.customer.mobile, address: this.customer.address}
      })
      // this.$api.post('shipping-info', this.customer)
      //   .then((res) => {
      //     this.shippingId = res.data.shippingId
      //
      //   })
    },
    editShippingForm () {
      document.getElementById('shippingInfoTable').hidden = true
      document.getElementById('shippingForm').hidden = true
      document.getElementById('shippingInfoForm').hidden = false
    }
  },
  created () {
    this.$api.get('customer-by-id/' + this.customerId)
      .then((res) => {
        this.customer = res.data.customerDetail
      })
  }
}
</script>

<style scoped>
  .title {
    font-family: 'Glegoo', serif;
  }
</style>
