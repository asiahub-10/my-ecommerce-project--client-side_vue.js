<template>
  <div id="app">
    <div class="shopping-bag-position text-right">
      <div class="bag" >
        <router-link to="/shopping-chart" title="Shopping Chart" class="shopping-bag">
          <i class="fas fa-shopping-bag shopping-bag-icon my-2"></i>
          <div :hidden="itemsQuantity <= 0" class="itemNo">
            <p class="mb-0 text-white font-weight-bold">{{itemsQuantity}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <my-header></my-header>
    <router-view :key="$route.fullPath" ></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/includes/Header'
import Footer from './components/includes/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    'my-header': Header,
    'my-footer': Footer
  },
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'total'
    ])
  },
  created () {
    // this.$api.get('all-product')
    //   .then(res => {
    //     // let allProduct = JSON.stringify(res.data)
    //     let allProduct = res.data
    //     localStorage.setItem('allProduct', allProduct)
    //     // console.log(JSON.stringify(res.data))
    //     // console.log(res.data)
    //   })
    // // this.getProducts()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  /*margin: -8px;*/
  /*margin-bottom: -8px;*/
}
.itemNo {
  background-color: #ff1744;
  display: inline-block;
  color: white;
  border-radius: 15px;
  padding: 1px 8px;
  position: absolute;
  top: 100%;
  left: 90%;
  transform: translate(-60%, -55%);
}
.shopping-bag {
  position: sticky;
  top: 0;
  z-index: 100;
}
.shopping-bag-position {
  position: sticky;
  top: 0;
  margin-right: 70px;
  z-index: 100;
}
.shopping-bag-icon {
  font-size: 40px;
  padding: 3px;
  color: #ff9f49;
  border: 3px solid #ff9f49;
  border-radius: 10px;
}
  .bag {
    position:absolute;
    right: -58px;
    top: 5px;
  }
  .shopping-bag-icon:hover {
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
</style>
