<template>
  <div>
    <h3 class="mt-5 title text-muted">Customer Details</h3>
    <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
      <form id="registrationForm">
        <div class="row">
          <div class="col-sm-6">
            <div class="md-form mb-0">
              <input @keyup="setFirstName" v-model.trim="$v.register.first_name.$model" type="text" id="firstName" class="form-control text-muted">
              <label for="firstName" class="orange-text">First Name <span :class="$v.register.first_name.$invalid ? 'text-danger' : 'text-success'">*</span></label>
            </div>
            <div id="vFirstName" hidden class="text-danger font-smaller font-weight-light text-left">
              <div v-if="!$v.register.first_name.required">Field is required.</div>
              <div v-if="!$v.register.first_name.alpha">Field accepts only alphabet characters, space, dot(.) and hyphen(-).</div>
              <div v-if="!$v.register.first_name.minLength">Field must have at least {{ $v.register.first_name.$params.minLength.min }} characters.</div>
              <div v-if="!$v.register.first_name.maxLength">Field must not have more than {{ $v.register.first_name.$params.maxLength.max }} characters.</div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="md-form mb-0">
              <input @keyup="setLastName" v-model.trim="$v.register.last_name.$model" type="text" id="lastName" class="form-control text-muted">
              <label for="lastName" class="orange-text">Last Name <span :class="$v.register.last_name.$invalid ? 'text-danger' : 'text-success'">*</span></label>
            </div>
            <div id="vLastName" hidden class="text-danger font-smaller font-weight-light text-left">
              <div v-if="!$v.register.last_name.required">Field is required.</div>
              <div v-if="!$v.register.last_name.alpha">Field accepts only alphabet characters, space, dot(.) and hyphen(-).</div>
              <div v-if="!$v.register.last_name.minLength">Field must have at least {{ $v.register.last_name.$params.minLength.min }} characters.</div>
              <div v-if="!$v.register.last_name.maxLength">Field must not have more than {{ $v.register.last_name.$params.maxLength.max }} characters.</div>
            </div>
          </div>
        </div>
        <input hidden v-model="register.email" @input="onInput" type="email" id="email" class="form-control text-muted">
        <div class="md-form mb-0">
          <textarea @keyup="setAddress" v-model.trim="$v.register.address.$model" id="address" class="form-control text-muted md-textarea" rows="2"></textarea>
          <label for="address" class="orange-text">Address <span :class="$v.register.address.$invalid ? 'text-danger' : 'text-success'">*</span></label>
        </div>
        <div id="vAddress" hidden class="text-danger font-smaller font-weight-light text-left">
          <div v-if="!$v.register.address.required">Field is required.</div>
          <div v-if="!$v.register.address.address">Field accepts only alphabet characters, numbers, space, dot(.), comma(,), slash(/) and hyphen(-).</div>
          <div v-if="!$v.register.address.minLength">Field must have at least {{ $v.register.address.$params.minLength.min }} characters.</div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="md-form mb-0">
              <input @keyup="setMobile" v-model.trim="$v.register.mobile.$model" type="number" id="mobile" class="form-control text-muted">
              <label for="mobile" class="orange-text">Mobile Number <span :class="$v.register.mobile.$invalid ? 'text-danger' : 'text-success'">*</span></label>
            </div>
            <div id="vMobile" hidden class="text-danger font-smaller font-weight-light text-left">
              <div v-if="!$v.register.mobile.required">Field is required.</div>
              <div v-if="!$v.register.mobile.mobile">This number is not valid for Bangladesh.</div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="md-form mb-0">
              <input @keyup="setPassword" v-model.trim="$v.register.password.$model" type="password" id="password" class="form-control text-muted">
              <label for="password" class="orange-text">Password <span :class="$v.register.password.$invalid ? 'text-danger' : 'text-success'">*</span></label>
            </div>
            <div id="vPassword" hidden class="text-danger font-smaller font-weight-light text-left">
              <div v-if="!$v.register.password.required">Field is required.</div>
              <div v-if="!$v.register.password.password">Please use minimum 6 characters with at least 1 letter and at least 1 special character.</div>
              <!--<div v-if="!$v.register.password.minLength">Field must have at least {{ $v.register.password.$params.minLength.min }} characters.</div>-->
              <div v-if="!$v.register.password.maxLength">Field must have at least {{ $v.register.password.$params.maxLength.max }} characters.</div>
            </div>
          </div>
        </div>
        <input @click.prevent="submitForm" :disabled=" mes!==''" type="submit" id="regBtn" class="btn mt-5 mb-4 btn-block btn-outline-warning font-weight-bold submit-btn" value="Register" style="font-size: 20px;"/>
        <p class="text-danger font-weight-bold" v-if="submitStatus === 'ERROR'">Please fill all fields correctly.</p>
        <p class="text-warning font-weight-bold" v-if="submitStatus === 'PENDING'">Data Saving...</p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Z .-]*$/)
const address = helpers.regex('address', /^[a-zA-Z0-9 ,.-/]*$/)
const mobile = helpers.regex('mobile', /\+?(88)?0?1[3456789][0-9]{8}\b/)
const password = helpers.regex('password', /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d.@$!%*#?&]{6,20}$/)
export default {
  name: 'CustomerInfo',
  props: ['email'],
  data () {
    return {
      register: {
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        address: '',
        password: ''
      },
      mes: '',
      customerId: {},
      submitStatus: null
    }
  },
  validations: {
    register: {
      first_name: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(10)
      },
      last_name: {
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
      },
      password: {
        required,
        password,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  watch: {
    email (newVal) {
      this.register.email = newVal
    }
  },
  methods: {
    onInput (newInputValue) {
      this.$emit('register.email', newInputValue)
    },
    setFirstName () {
      document.getElementById('vFirstName').hidden = false
    },
    setLastName () {
      document.getElementById('vLastName').hidden = false
    },
    setMobile () {
      document.getElementById('vMobile').hidden = false
    },
    setAddress () {
      document.getElementById('vAddress').hidden = false
    },
    setPassword () {
      document.getElementById('vPassword').hidden = false
    },
    submitForm () {
      document.getElementById('vFirstName').hidden = false
      document.getElementById('vLastName').hidden = false
      document.getElementById('vMobile').hidden = false
      document.getElementById('vAddress').hidden = false
      document.getElementById('vPassword').hidden = false

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        this.$api.post('get-customer-id', this.register)
          .then((res) => {
            this.customerId = res.data.customer
            this.$router.push({
              name: 'ShippingInfo',
              params: {id: this.customerId.id}
            })
          })
      }
    }
  }
}
</script>

<style scoped>
  .title {
    font-family: 'Glegoo', serif;
  }
  input:focus {
    border-bottom: 1px solid #f6d365 !important;
    -webkit-box-shadow: 0 1px 0 0 #f6d365 !important;
    box-shadow: 0 1px 0 0 #f6d365 !important;
  }
  textarea:focus {
    border-bottom: 1px solid #f6d365 !important;
    -webkit-box-shadow: 0 1px 0 0 #f6d365 !important;
    box-shadow: 0 1px 0 0 #f6d365 !important;
  }
  .disabled-form {
    pointer-events: none;
    opacity: .6;
  }
</style>
