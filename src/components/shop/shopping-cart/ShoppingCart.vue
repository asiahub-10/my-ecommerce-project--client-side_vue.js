<template>
  <div>
    <div class="mt-4 text-warning font-italic" v-if="itemQuantity <= 0">
      <h3>Your shopping bag is empty</h3>
      <img src="../../../../static/images/empty_chart.png" alt="Empty Cart"/>
      <h5>Please select some products</h5>
    </div>
    <div v-else>
      <div class="table-responsive mt-4">
        <!--Table-->
        <table class="table">
          <thead class="text-center">
          <tr class="bg-warning">
            <th class="font-weight-bold">SL No.</th>
            <th class="th-lg font-weight-bold">Product Image</th>
            <th class="th-lg font-weight-bold">Product Name</th>
            <th class="th-lg font-weight-bold">Product Price</th>
            <th class="th-lg font-weight-bold">Product Quantity</th>
            <th class="th-lg font-weight-bold">Product Total</th>
            <th class="th-lg font-weight-bold text-right">Remove</th>
          </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
          <tr class="text-center" v-for="(item, index) in items"
              :item="item"
              :key="item.id">
            <th scope="row" ><p class="font-weight-bold pt-3 text-dark">{{ index+1 }}</p></th>
            <td><img :src="'http://localhost/my-project/public/'+item.product_image" height="50" width="50"/></td>
            <td> <strong class="d-block py-3 text-dark">{{item.product_name}}</strong></td>
            <td><p class="pt-3 text-dark">{{ price = item.product_price | formatMoney}}</p></td>
            <td>
              <div class="pt-2 text-dark">
                <button type="button" title="Decrease quantity" :disabled="item.quantity <= 1" @click="decreaseQuantity(item)" class="btn p-1 border-0 btn-light" >
                  <i class="fas fa-minus text-danger" style="font-size: medium;"></i>
                </button>
                {{ quantity = item.quantity}}
                <button type="button" title="Increase quantity" :disabled="!item.product_quantity" @click="increaseQuantity(item)" class="btn p-1 border-0 btn-light">
                  <i class="fas fa-plus text-info" style="font-size: medium;"></i>
                </button>
              </div>
            </td>
            <td><p class="pt-3 text-dark">{{ price*quantity | formatMoney}}</p></td>
            <td><RemoveFromCart :product="item" /></td>
          </tr>
          </tbody>
          <!--Table body-->
        </table>
        <!--Table-->
      </div>
      <!--<ShoppingCartItem-->
      <!--v-for="item in items"-->
      <!--:item="item"-->
      <!--:key="item.id" class=""/>-->

      <ShoppingCartSummary />

      <div class="mt-3 row" >
        <div class="col-sm-6">
          <router-link to="/" class="btn btn-amber text-capitalize font-weight-bold" style="font-size: 17px;">
            Back to shopping <i class="fas fa-shopping-cart" style="font-size: medium;"></i>
          </router-link>
        </div>
        <div class="col-sm-6">
          <router-link to="/customer-info" class="btn peach-gradient text-white text-uppercase font-weight-bold" style="font-size: 17px;"
                  :disabled="itemQuantity <= 0"
                  @click="buy">
            Checkout
          </router-link>
        </div>
        <p v-if="orderOnLimit">Order is over limit.</p>
      </div>
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ShoppingCart',
  computed: mapGetters({
    itemQuantity: 'itemsQuantity',
    items: 'cartProducts',
    orderOnLimit: 'orderOnLimit'
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary,
    RemoveFromCart
  },
  methods: {
    ...mapActions([
      'increaseQuantity',
      'decreaseQuantity'
    ]),
    buy () {
      window.alert("You've bought it :)")
      window.location.reload()
    }
  }
}
</script>

<style>
  .vue-logo {
    height: 50px;
    width: 50px;
    background: url('./../../../assets/logo.png') no-repeat center center #ddd;
    background-size: 45%;
  }
</style>
