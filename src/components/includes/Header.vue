<template>
  <div>
    <!-- header -->
      <header class="rgba-orange-slight" style="height: 240px;">
        <div class="row py-3">
          <div class="col-md-3"></div>
          <div class="col-md-6 logo-w3layouts text-center">
            <h1 class="logo-w3layouts mb-0">
              <router-link class="navbar-brand text-muted" to="/">
                <span class="text-warning">Asis</span>Fashion </router-link>
            </h1>
            <!--<router-view name="login"/>-->
            <div class=" orange-text text-center pt-3 pb-4 mb-2" v-if="customer!==null">
              <div class="user-login bg-white d-inline py-2 px-4 rounded" data-toggle="collapse" data-target="#logout">
                <span><i class="fas fa-user mr-1"></i></span>
                {{ customer.first_name }} {{ customer.last_name }}
                <i class="fas fa-caret-down"></i>
              </div>
              <button @click="userLogout" id="logout" class="collapse btn btn-white text-warning logout text-uppercase mx-auto">
                logout
                <i class="fas fa-sign-out-alt"></i>
              </button>
            </div>

            <!--<router-link v-if="user === null" to="/login" title="Login">-->
            <router-link v-else to="/login" title="Login">
              <i class="fas fa-user-circle user my-2 fa-2x"></i>
            </router-link>
          </div>
          <div class="col-md-3"></div>
          <!--<div class="col-md-3 top-info-cart text-right mt-lg-4">-->
            <!--<ul class="cart-inner-info">-->
              <!--<li class="button-log">-->
                <!--<a class="btn-open" href="#">-->
                  <!--<span class="fa fa-user" aria-hidden="true"></span>-->
                <!--</a>-->
              <!--</li>-->
              <!--<li class="galssescart galssescart2 cart cart box_1">-->
                <!--<form action="#" method="post" class="last">-->
                  <!--<input type="hidden" name="cmd" value="_cart">-->
                  <!--<input type="hidden" name="display" value="1">-->
                  <!--<button class="top_googles_cart" type="submit" name="submit" value="">-->
                    <!--My Cart-->
                    <!--<i class="fas fa-cart-arrow-down"></i>-->
                  <!--</button>-->
                <!--</form>-->
              <!--</li>-->
            <!--</ul>-->
              <!--</div>-->
            <!--</div>-->
        <!--<div class="search">-->
          <!--<div class="mobile-nav-button">-->
            <!--<button id="trigger-overlay" type="button">-->
              <!--<i class="fas fa-search"></i>-->
            <!--</button>-->
          <!--</div>-->
          <!--&lt;!&ndash; open/close &ndash;&gt;-->
          <!--<div class="overlay overlay-door">-->
            <!--<button type="button" class="overlay-close">-->
              <!--<i class="fa fa-times" aria-hidden="true"></i>-->
            <!--</button>-->
            <!--<form action="#" method="post" class="d-flex">-->
              <!--<input class="form-control" type="search" placeholder="Search here..." required="">-->
              <!--<button type="submit" class="btn btn-primary submit">-->
                <!--<i class="fas fa-search"></i>-->
              <!--</button>-->
            <!--</form>-->

          <!--</div>-->
          <!-- open/close -->
        </div>
        <!--<label class="top-log mx-auto"></label>-->
        <my-menu></my-menu>
      </header>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Header',
  components: {
    'my-menu': MenuBar
  },
  data () {
    return {
      customer: JSON.parse(localStorage.getItem('customerId'))
    }
  },
  methods: {
    userLogout () {
      this.$api.post('logout/' + this.customer.id)
        .then(res => {
          localStorage.removeItem('customerId')
          window.location.reload(true)
          // this.forceUpdate()
        })
    }
  },
  created () {
    // localStorage.clear()
  }
}
</script>

<style scoped>
  .user {
    font-size: 40px;
    padding: 3px;
    color: #ff9f49;
    border: 3px solid #ff9f49;
    border-radius: 50%;
  }
  .user-login {
    font-size: 18px;
    cursor: pointer;
    border: 2px solid;
  }
  .logout {
    padding: 10px 30px;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 15;
  }
  .user:hover {
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
</style>
