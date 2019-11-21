<template>
  <div>
    <div class="mt-5 mb-5 pt-4" v-if="itemQuantity <= 0">
      <h4 class="text-uppercase text-muted">Please purchase some product first <i class="fas fa-shopping-basket"></i></h4>
    </div>
    <div v-else class="container my-5">
      <div id="contactInfo" >
        <h3 class="pt-3 pb-4 title text-muted">Contact Information</h3>
        <div class="card-deck">
          <div class="card card-shadow p-4 rgba-stylish-slight">
            <h5 class="mt-2">Returning Customer</h5>
            <p class="mb-3 orange-text font-weight-bold">Already have an account?</p>
            <div class="px-4">
              <input type="email" id="customerEmail" class="form-control mb-3" placeholder="Email Address"/>
              <input type="password" id="customerPassword" class="form-control mb-3" placeholder="Password"/>
              <button @click="getCustomerId" class="btn bg-warning text-white font-weight-bold submit-btn">Submit</button>
              <p class="text-danger">{{msg.message}}</p>
            </div>
          </div>
          <div class="card card-shadow p-4 rgba-grey-slight">
            <h5 class="mt-2">New Customer</h5>
            <p class="mb-3 orange-text font-weight-bold">If you don't have an account please enter an unique and valid email address to create a new one. Otherwise you can not continue with your purchase.</p>
            <div class="px-4">
              <input @input="writeEmail" v-model.trim="$v.email.$model" type="email" id="emailAddress" class="form-control mb-0" placeholder="Email Address"/>
              <div id="mes" class="text-danger font-smaller font-weight-light text-left">{{ mes }}</div>
              <div id="vEmail" hidden class="text-danger font-smaller font-weight-light text-left">
                <div v-if="!$v.email.required">Field is required.</div>
                <div v-if="!$v.email.email">This email address is not valid.</div>
              </div>
              <button @click="emailCheck" class="btn bg-warning text-white font-weight-bold submit-btn mt-4">continue</button>
            </div>
          </div>
        </div>
      </div>
      <div id="customerInfo" hidden >
        <customer-info :email="emailAddress"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerInfo from './CustomerInfo'
import { required, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  name: 'ContactInfo',
  components: {
    'customer-info': CustomerInfo
  },
  data () {
    return {
      email: '',
      msg: {},
      mes: '',
      emailAddress: '',
      customerId: {}
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  computed: mapGetters({
    itemQuantity: 'itemsQuantity'
  }),
  methods: {
    emailCheck () {
      document.getElementById('vEmail').hidden = false
      var email = document.getElementById('emailAddress').value
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        document.getElementById('customerInfo').hidden = true
      } else {
        this.submitStatus = 'PENDING'
        this.$api.get('email-check/' + email)
          .then(response => {
            this.mes = response.data.toString()
          })
          .catch(e => {
            document.getElementById('customerInfo').hidden = false
            document.getElementById('mes').hidden = true
            document.getElementById('contactInfo').classList.add('disabled-div')
          })
      }
    },
    getCustomerId () {
      var email = document.getElementById('customerEmail').value
      var password = document.getElementById('customerPassword').value
      this.$api.post('get-returning-customer-id/' + email + '/' + password)
        .then((res) => {
          this.customerId = res.data.customer
          this.$router.push({
            name: 'ShippingInfo',
            params: {id: this.customerId.id}
          })
        })
        .catch((e) => {
          this.msg = e.response.data
        })
    },
    writeEmail (event) {
      this.emailAddress = event.target.value
    }
  }
}
</script>

<style scoped>
  .title {
    font-family: 'Glegoo', serif;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #eea236;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(238, 162, 54, .5);
  }
  .submit-btn {
    font-size: larger;
    border-radius: 20px;
  }
  .card-shadow {
    -webkit-box-shadow: 0 2px 5px 0 rgba(238, 162, 54, .35), 0 2px 10px 0 rgba(238, 162, 54, .2);
    box-shadow: 0 2px 5px 0 rgba(238, 162, 54, .35), 0 2px 10px 0 rgba(238, 162, 54, .2);
  }
  .disabled-div {
    pointer-events: none;
    opacity: .6;
  }
</style>
