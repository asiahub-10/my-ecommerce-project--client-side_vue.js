<template>
  <div>
    <div class="container my-5">
      <h1 class="text-center mb-3 orange-text form-title">Login</h1>
      <div v-if="$route.params.msg" class="mb-4">
        <img src="../../../static/images/register_success.png" alt="Register success" />
        <h4 class="text-muted mt-3">{{ $route.params.msg }}</h4>
      </div>
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="md-form mb-0">
                  <input type="email" @blur="emailCheck" v-model.trim="$v.login.email.$model" id="email" class="form-control text-muted">
                  <label for="email" class="orange-text">Email Address</label>
                </div>
                <div class="text-danger font-smaller font-weight-light text-left">{{ mesEmail }}</div>
                <div id="vEmail" hidden class="text-danger font-smaller font-weight-light text-left">
                  <div v-if="!$v.login.email.required">Field is required.</div>
                </div>
                <div class="md-form mb-0">
                  <input type="password" v-model.trim="$v.login.password.$model" id="password" class="form-control text-muted">
                  <label for="password" class="orange-text">Password</label>
                </div>
                <div class="text-danger font-smaller font-weight-light text-left" v-if="msg.status === 'Password error'">{{ msg.message }}</div>
                <div id="vPassword" hidden class="text-danger font-smaller font-weight-light text-left">
                  <div v-if="!$v.login.password.required">Field is required.</div>
                </div>
                <input @click.prevent="submitLogin" type="submit" id="loginBtn" class="btn mt-5 mb-4 btn-block peach-gradient text-white font-weight-bold submit-btn" value="Login"/>
                <div class="text-danger font-weight-bold" v-if="msg.status === 'error'">{{ msg.message }}</div>
                <p class="text-danger font-weight-bold" v-if="submitStatus === 'ERROR'">Please fill all fields correctly.</p>
                <p class="text-warning font-weight-bold" v-if="submitStatus === 'PENDING'"></p>
                <div>
                  <!--{{ customer.first_name }}-->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h5 class="text-muted mx-auto mt-5">If you did not register, please <span class="orange-text">register</span> to the link bellow first.</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      mesEmail: '',
      submitStatus: null,
      msg: {},
      customer: []
    }
  },
  validations: {
    login: {
      email: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    emailCheck () {
      var email = document.getElementById('email').value
      this.$api.post('visitor-email-check/' + email)
        .then(res => {
          this.mesEmail = res.data.toString()
        })
        .catch(error => {
          this.mesEmail = error.data.toString()
        })
    },
    submitLogin () {
      document.getElementById('vEmail').hidden = false
      document.getElementById('vPassword').hidden = false
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        // document.getElementById('regBtn').disabled = true
        this.$api.post('login', this.login)
          .then(res => {
            let customerId = res.data.customer
            // console.log(customerId)
            localStorage.setItem('customerId', customerId)
            // this.forceUpdate()
            // this.$router.push({path: '/', params: {customerId}})

            window.location.reload(true)
            // this.$router.push('/')
            // or
            // window.location.replace('/')
          })
          .catch(error => {
            this.msg = error.response.data
          })
      }
    }
  }
}
</script>

<style scoped>
  .form-title {
    font-family: 'Glegoo', serif;
  }
  .submit-btn {
    font-size: 18px;
    border-radius: 30px;
  }
  input:focus {
    border-bottom: 1px solid #fd9267 !important;
    -webkit-box-shadow: 0 1px 0 0 #fd9267 !important;
    box-shadow: 0 1px 0 0 #fd9267 !important;
  }
</style>
