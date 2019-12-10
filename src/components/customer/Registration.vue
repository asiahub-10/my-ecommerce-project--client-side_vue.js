<template>
  <div>
    <div class="container my-5">
      <h1 class="text-center mb-4 orange-text form-title">Registration</h1>
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div class="card">
            <div class="card-body">
              <form>
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
                <div class="md-form mb-0">
                  <input @keyup="emailCheck" v-model.trim="$v.register.email.$model"  type="email" id="email" class="form-control text-muted">
                  <label for="email" class="orange-text">Email Address <span :class="$v.register.email.$invalid || mes!=='' ? 'text-danger' : 'text-success'">*</span></label>
                </div>
                <div id="checkEmail" class="text-muted font-smaller font-weight-light text-left">Please use an unique email address.</div>
                <div class="text-danger font-smaller font-weight-light text-left">{{ mes }}</div>
                <div id="vEmail" hidden class="text-danger font-smaller font-weight-light text-left">
                  <div v-if="!$v.register.email.required">Field is required.</div>
                  <div v-if="!$v.register.email.email">This email address is not valid.</div>
                </div>
                <div class="md-form">
                  <input @keyup="setMobile" v-model.trim="$v.register.mobile.$model" type="number" id="mobile" class="form-control text-muted">
                  <label for="mobile" class="orange-text">Mobile Number <span :class="$v.register.mobile.$invalid ? 'text-danger' : 'text-success'">*</span></label>
                </div>
                <div id="vMobile" hidden class="text-danger font-smaller font-weight-light text-left">
                  <div v-if="!$v.register.mobile.required">Field is required.</div>
                  <div v-if="!$v.register.mobile.mobile">This number is not valid for Bangladesh.</div>
                </div>
                <div class="md-form">
                  <textarea @keyup="setAddress" v-model.trim="$v.register.address.$model" id="address" class="form-control text-muted md-textarea" rows="2"></textarea>
                  <label for="address" class="orange-text">Address <span :class="$v.register.address.$invalid ? 'text-danger' : 'text-success'">*</span></label>
                </div>
                <div id="vAddress" hidden class="text-danger font-smaller font-weight-light text-left">
                  <div v-if="!$v.register.address.required">Field is required.</div>
                  <div v-if="!$v.register.address.address">Field accepts only alphabet characters, numbers, space, dot(.), comma(,), slash(/) and hyphen(-).</div>
                  <div v-if="!$v.register.address.minLength">Field must have at least {{ $v.register.address.$params.minLength.min }} characters.</div>
                </div>
                <div class="md-form">
                  <input @keyup="setPassword" v-model.trim="$v.register.password.$model" type="password" id="password" class="form-control text-muted">
                  <label for="password" class="orange-text">Password <span :class="$v.register.password.$invalid ? 'text-danger' : 'text-success'">*</span></label>
                </div>
                <div id="vPassword" hidden class="text-danger font-smaller font-weight-light text-left">
                  <div v-if="!$v.register.password.required">Field is required.</div>
                  <div v-if="!$v.register.password.password">Please use minimum 6 characters with at least 1 letter and at least 1 special character.</div>
                  <div v-if="!$v.register.password.minLength">Field must have at least {{ $v.register.password.$params.minLength.min }} characters.</div>
                  <div v-if="!$v.register.password.maxLength">Field must have at least {{ $v.register.password.$params.maxLength.max }} characters.</div>
                </div>
                <input @click.prevent="submitRegisterForm" type="submit" id="regBtn" class="btn mt-5 mb-4 btn-block peach-gradient text-white font-weight-bold submit-btn" value="Register"/>
                  <p class="text-danger font-weight-bold" v-if="submitStatus === 'ERROR'">Please fill all fields correctly.</p>
                  <p id="loading" class="text-warning font-weight-bold" v-if="submitStatus === 'PENDING'">Loading...</p>
                <p class="text-danger" id="error"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h5 class="text-muted mx-auto mt-5">If you have already registered, please <router-link to="/login" class="orange-text font-weight-bold" title="Click here to login">LOGIN</router-link> here.</h5>
      </div>
    </div>
</div>
</template>

<script>
import { required, minLength, maxLength, email, helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Z .-]*$/)
const address = helpers.regex('address', /^[a-zA-Z0-9 ,.-/]*$/)
const mobile = helpers.regex('mobile', /\+?(88)?0?1[3456789][0-9]{8}\b/)
const password = helpers.regex('password', /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d.@$!%*#?&]{6,20}$/)
export default {
  name: 'Registration',
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
      email: {
        required,
        email
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
  methods: {
    setFirstName () {
      document.getElementById('vFirstName').hidden = false
    },
    setLastName () {
      document.getElementById('vLastName').hidden = false
    },
    emailCheck () {
      document.getElementById('vEmail').hidden = false
      document.getElementById('checkEmail').hidden = true
      var email = document.getElementById('email').value
      this.$api.get('email-check/' + email)
        .then(response => {
          // this.mes = response.data
          this.mes = response.data.toString()
          // document.getElementById('regBtn').disabled = true
        })
        .catch(error => {
          // this.mes = error.data
          this.mes = error.response.data.toString()
          document.getElementById('regBtn').disabled = false
        })
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
    submitRegisterForm () {
      document.getElementById('vFirstName').hidden = false
      document.getElementById('vLastName').hidden = false
      document.getElementById('vEmail').hidden = false
      document.getElementById('vMobile').hidden = false
      document.getElementById('vAddress').hidden = false
      document.getElementById('vPassword').hidden = false
      // document.getElementById('error').hidden = true

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        // document.getElementById('regBtn').disabled = true
        this.$api.post('registration', this.register)
          .then((res) => {
            // window.location.replace('/login')
            document.getElementById('error').innerHTML = ' '
            document.getElementById('regBtn').disabled = true
            this.$router.push({
              name: 'Login',
              params: {msg: res.data.message}
            })
          })
          .catch((e) => {
            document.getElementById('error').innerHTML = e.response.data.message
            document.getElementById('regBtn').disabled = false
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
textarea:focus {
  border-bottom: 1px solid #fd9267 !important;
  -webkit-box-shadow: 0 1px 0 0 #fd9267 !important;
  box-shadow: 0 1px 0 0 #fd9267 !important;
}
</style>
