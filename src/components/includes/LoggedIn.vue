<template>
  <div>
    <!--<div class="orange-text my-4" v-if="customer.id !== null">-->
    <div class="orange-text my-4" v-if="customer.id === null">
      <div class="user-login" @click="logoutToggle">
        <span><i class="fas fa-user"></i></span>
        {{ customer.first_name }} {{ customer.last_name }}
        <i class="fas fa-caret-down"></i>
      </div>
      <button @click="userLogout" id="logout" class="btn btn-white text-muted logout text-uppercase mt-1">
        logout
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoggedIn',
  data () {
    return {
      customer: {}
    }
  },
  methods: {
    logoutToggle () {
      var logoutBtn = document.getElementById('logout')
      if (logoutBtn.style.display === 'none') {
        logoutBtn.style.display = 'inline-block'
      } else {
        logoutBtn.style.display = 'none'
      }
    },
    userLogout () {
      let customerId = localStorage.getItem('customerId')
      this.$api.get('logout' + customerId)
        .then(res => {
          // localStorage.removeItem('customerId')
          this.$router.push('/logout')
        })
    }
  },
  mounted () {
    // let customerId = localStorage.getItem('customerId')
    // // console.log(customerId)
    // this.$api.get('customer-info/' + customerId)
    //   .then(res => {
    //     // console.log(res)
    //     this.customer = res.data
    //   })
  }
}
</script>

<style scoped>
  .user-login {
    font-size: 18px;
    cursor: pointer;
  }
  .logout {
    display: none;
    padding: 5px 30px;
    font-size: 14px;
    font-weight: bold;
    /*cursor: pointer;*/
  }
</style>
