<template>
  <div>
    <!--<p class="orange-text m-0" style="font-size: larger;">(Please fill up the following fields)</p>-->
    <div class="row">
      <div class="col-lg-6 col-md-9 col-sm-10 mx-auto">
        <form>
          <div class="md-form mb-0">
            <input @keyup="setName" v-model.trim="$v.shipping.name.$model" type="text" id="name" class="form-control text-muted">
            <label for="name" class="orange-text">Name <span :class="$v.shipping.name.$invalid ? 'text-danger' : 'text-success'">*</span></label>
          </div>
          <div id="vName" hidden class="text-danger font-smaller font-weight-light text-left">
            <div v-if="!$v.shipping.name.required">Field is required.</div>
            <div v-if="!$v.shipping.name.alpha">Field accepts only alphabet characters, space, dot(.) and hyphen(-).</div>
            <div v-if="!$v.shipping.name.minLength">Field must have at least {{ $v.shipping.name.$params.minLength.min }} characters.</div>
            <div v-if="!$v.shipping.name.maxLength">Field must not have more than {{ $v.shipping.name.$params.maxLength.max }} characters.</div>
          </div>
          <div class="md-form mb-0">
            <input @keyup="setMobile" v-model.trim="$v.shipping.mobile.$model" type="number" id="mobile" class="form-control text-muted">
            <label for="mobile" class="orange-text">Mobile Number <span :class="$v.shipping.mobile.$invalid ? 'text-danger' : 'text-success'">*</span></label>
          </div>
          <div id="vMobile" hidden class="text-danger font-smaller font-weight-light text-left">
            <div v-if="!$v.shipping.mobile.required">Field is required.</div>
            <div v-if="!$v.shipping.mobile.mobile">This number is not valid for Bangladesh.</div>
          </div>
          <div class="md-form mb-0">
            <textarea @keyup="setAddress" v-model.trim="$v.shipping.address.$model" id="address" class="form-control text-muted md-textarea" rows="2"></textarea>
            <label for="address" class="orange-text">Address <span :class="$v.shipping.address.$invalid ? 'text-danger' : 'text-success'">*</span></label>
          </div>
          <div id="vAddress" hidden class="text-danger font-smaller font-weight-light text-left">
            <div v-if="!$v.shipping.address.required">Field is required.</div>
            <div v-if="!$v.shipping.address.address">Field accepts only alphabet characters, numbers, space, dot(.), comma(,), slash(/) and hyphen(-).</div>
            <div v-if="!$v.shipping.address.minLength">Field must have at least {{ $v.shipping.address.$params.minLength.min }} characters.</div>
          </div>
          <input @click.prevent="submitShippingForm" type="submit" id="regBtn" class="btn mt-3 btn-outline-warning font-weight-bold submit-btn" value="Save" style="font-size: 20px;"/>
          <p class="text-danger font-weight-bold" v-if="submitStatus === 'ERROR'">Please fill all fields correctly.</p>
          <p class="text-warning font-weight-bold" v-if="submitStatus === 'PENDING'">Data Saving...</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Z .-]*$/)
const address = helpers.regex('address', /^[a-zA-Z0-9 ,.-/]*$/)
const mobile = helpers.regex('mobile', /\+?(88)?0?1[3456789][0-9]{8}\b/)
export default {
  name: 'ShippingInfo',
  data () {
    return {
      shippingId: {},
      shipping: {
        name: '',
        mobile: '',
        address: ''
      },
      submitStatus: null
    }
  },
  validations: {
    shipping: {
      name: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(10)
      },
      mobile: {
        required,
        mobile
      },
      address: {
        required,
        minLength: minLength(7),
        address
      }
    }
  },
  methods: {
    setName () {
      document.getElementById('vName').hidden = false
    },
    setMobile () {
      document.getElementById('vMobile').hidden = false
    },
    setAddress () {
      document.getElementById('vAddress').hidden = false
    },
    submitShippingForm () {
      document.getElementById('vName').hidden = false
      document.getElementById('vMobile').hidden = false
      document.getElementById('vAddress').hidden = false

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        this.$router.push({
          name: 'PaymentInfo',
          params: {id: this.$route.params.id, name: this.shipping.name, mobile: this.shipping.mobile, address: this.shipping.address}
        })
        // this.$api.post('edited-shipping-info', this.shipping)
        //   .then((res) => {
        //     this.shippingId = res.data.shippingId
        //     // console.log(this.shippingId)
        //     this.$router.push({
        //       name: 'PaymentInfo',
        //       query: {id: this.$route.params.id, name: this.shipping.name, mobile: this.shipping.mobile, address: this.shipping.address}
        //     })
        //   })
      }
    }
  }
}
</script>

<style scoped>
  input:focus {
    border-bottom: 1px solid #eea236 !important;
    -webkit-box-shadow: 0 1px 0 0 #eea236 !important;
    box-shadow: 0 1px 0 0 #eea236 !important;
  }
  textarea:focus {
    border-bottom: 1px solid #eea236 !important;
    -webkit-box-shadow: 0 1px 0 0 #eea236 !important;
    box-shadow: 0 1px 0 0 #eea236 !important;
  }
</style>
