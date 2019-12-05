<template>
  <div>
    <div>
      <div class="custom-control custom-radio text-left">
        <input @change="cashChacked" v-model="payment" value="Cash" type="radio" class="custom-control-input" id="paymentMethod1" />
        <label class="custom-control-label pl-2 pb-3 text-uppercase" for="paymentMethod1">cash on delivery</label>
      </div>
      <div class="custom-control custom-radio text-left">
        <input @change="cardChacked" v-model="payment" value="Card" type="radio" class="custom-control-input" id="paymentMethod2" />
        <label class="custom-control-label pl-2 pb-3 text-uppercase" for="paymentMethod2">cards</label>
      </div>
      <div hidden id="cardForm" class="mb-3">
        <div class="mx-auto card-body rgba-grey-slight p-4">
          <p class="font-weight-bold text-left text-warning">
            <i class="fab fa-cc-visa fa-2x bg-white"></i>
            <i class="fab fa-cc-mastercard fa-2x bg-white"></i>
            <i class="fab fa-cc-amex fa-2x bg-white"></i>
            <span class="pb-2"> & Other Cards</span>
          </p>
          <form>
            <div class="row">
              <div class="col-sm-6 mb-2">
                <input type="number" placeholder="Card Number" class="form-control" />
              </div>
              <div class="col-sm-6 mb-2">
                <input type="text" placeholder="Cardholder Name" class="form-control" />
              </div>
              <div class="col-sm-6 mb-2">
                <!--<input type="month" min="2017-06" max="2017-09" pattern="[0-9]{4}-[0-9]{2}" value="2019-10" class="form-control" />-->
                <input type="month" min="2019-10" class="form-control" />
              </div>
              <div class="col-sm-6 mb-2">
                <input type="number" placeholder="CVC/CVV" class="form-control" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="custom-control custom-radio text-left">
        <input @change="mobileChecked" v-model="payment" value="Mobile-banking" type="radio" class="custom-control-input" id="paymentMethod3" />
        <label class="custom-control-label pl-2 pb-3 text-uppercase" for="paymentMethod3">mobile banking</label>
      </div>
      <div hidden id="mobileBanking" class="mb-3">
        <div class="mx-auto card-body rgba-grey-slight">
          <form>
            <div class="row p-2">
              <div class="col-sm mb-2 ">
                <img src="../../../../static/images/bkash.jpg" class="logo" alt="Logo"/>
              </div>
              <div class="col-sm mb-2 ">
                <img src="../../../../static/images/rocket.jpg" class="logo" alt="Logo"/>
              </div>
              <div class="col-sm mb-2 ">
                <img src="../../../../static/images/mcash.jpg" class="logo" alt="Logo"/>
              </div>
              <div class="col-sm mb-2 ">
                <img src="../../../../static/images/ucash.jpg" class="logo" alt="Logo"/>
              </div>
              <div class="col-sm mb-2 ">
                <img src="../../../../static/images/mycash.jpg" class="logo" alt="Logo"/>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="custom-control custom-radio text-left">
        <input @change="netChecked" v-model="payment" value="Net-banking" type="radio" class="custom-control-input" id="paymentMethod4" />
        <label class="custom-control-label pl-2 pb-3 text-uppercase" for="paymentMethod4">net banking</label>
      </div>
      <div hidden id="netBanking" class="mb-3">
        <div class="mx-auto card-body rgba-grey-slight">
          <form>
            <div class="row">
              <img src="../../../../static/images/ab.png" height="60" width="60" class="mx-auto logo my-1" alt="Logo"/>
              <img src="../../../../static/images/islami_bank.png" height="60" width="60" class="mx-auto logo my-1" alt="Logo"/>
              <img src="../../../../static/images/bankasia.png" height="60" width="60" class="mx-auto logo my-1" alt="Logo"/>
              <img src="../../../../static/images/mtb.png" height="60" width="60" class="mx-auto logo my-1" alt="Logo"/>
              <img src="../../../../static/images/city.png" height="60" width="60" class="mx-auto logo my-1" alt="Logo"/>
            </div>
          </form>
        </div>
      </div>

      <div hidden>
        <input type="number" v-model="customerId"/>
        <input type="text" v-model="shipping.name"/>
        <input type="number" v-model="shipping.mobile"/>
        <input type="text" v-model="shipping.address"/>
        <div class="text-center" v-for="item in items" :item="item" :key="item.id">
          <input type="number" v-model="item.id" />
          <input type="text" v-model="item.product_name" />
          <input type="number" v-model="item.product_price" />
          <input type="number" v-model="item.quantity" />
        </div>
        <input type="number" v-model="total"/>
      </div>
    </div>
    <form>
      <button @click.prevent="submitOrderForm" type="submit" id="orderBtn" disabled class="btn btn-warning font-weight-bold mt-4 px-5">place order</button>
    </form>
    <div class="mt-3">
      <p id="orderProcess" class="font-weight-bold text-warning"></p>
      <p id="orderError" class="font-weight-bold text-danger"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { mapGetters } from 'vuex'

export default {
  name: 'OrderInfo',
  data () {
    return {
      customerId: this.$route.params.id,
      shipping: {
        name: this.$route.params.name,
        mobile: this.$route.params.mobile,
        address: this.$route.params.address
      },
      payment: '',
      msg: ''
    }
  },
  computed: mapGetters({
    items: 'cartProducts',
    total: 'total'
  }),
  methods: {
    cashChacked () {
      document.getElementById('orderBtn').disabled = false
      document.getElementById('cardForm').hidden = true
      document.getElementById('netBanking').hidden = true
    },
    cardChacked () {
      document.getElementById('orderBtn').disabled = true
      document.getElementById('cardForm').hidden = false
      document.getElementById('mobileBanking').hidden = true
      document.getElementById('netBanking').hidden = true
    },
    mobileChecked () {
      document.getElementById('mobileBanking').hidden = false
      document.getElementById('orderBtn').disabled = true
      document.getElementById('cardForm').hidden = true
      document.getElementById('netBanking').hidden = true
    },
    netChecked () {
      document.getElementById('netBanking').hidden = false
      document.getElementById('mobileBanking').hidden = true
      document.getElementById('orderBtn').disabled = true
      document.getElementById('cardForm').hidden = true
    },
    ...mapActions([
      'removeFromCart'
    ]),
    submitOrderForm () {
      document.getElementById('orderBtn').disabled = true
      document.getElementById('orderError').innerHTML = ' '
      document.getElementById('orderProcess').innerHTML = 'Please wait a moment. Your order is processing...'
      this.$api.post('confirm-order', { shipping: this.shipping, customerId: this.customerId, total: this.total, productItems: this.items, payment: this.payment })
        .then((res) => {
          // this.msg = res.data.message
          // console.log(this.msg)
          // window.location.reload()
          // window.location.replace('/order-confirmation')
          var msg = res.data.message
          var email = res.data.email
          this.items.forEach((item) => {
            this.removeFromCart(item)
          })
          this.$router.push({
            name: 'ConfirmOrder',
            params: {msg: msg, email: email}
          })
        })
        .catch((e) => {
          document.getElementById('orderProcess').innerHTML = ' '
          document.getElementById('orderError').innerHTML = 'SORRY SOMETHING IS WRONG. ORDER FAILED.'
          document.getElementById('orderBtn').disabled = false
        })
    }
  },
  created () {
    // console.log(this.items.length)
  }
}
</script>

<style scoped>
  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: #fb8c00;
    background-color: #fb8c00;
  }
  .custom-control-label:hover {
    color: #fb8c00;
  }
  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(251, 140, 0, .25);
  }
  .logo {
    border: 2px solid transparent;
  }
  .logo:hover {
    border: 2px solid rgba(251, 140, 0, .25);
  }
  .btn {
    color: black;
  }
  .btn:hover {
    color: white;
  }
</style>
