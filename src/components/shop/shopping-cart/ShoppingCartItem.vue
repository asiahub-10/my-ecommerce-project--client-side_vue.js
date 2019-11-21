<template>
  <!--<div class="media mb-3">-->
  <div class="">
    <div class="table-responsive">

      <!--Table-->
      <table class="table">

        <!--Table head-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>#</th>-->
          <!--<th class="th-lg">Lorem ipsum dolor</th>-->
          <!--<th class="th-lg">Lorem ipsum dolor</th>-->
          <!--<th class="th-lg">Lorem ipsum dolor</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--Table head-->

        <!--Table body-->
        <tbody>
        <tr class="text-center">
          <th scope="row">1</th>
          <td><div class="rounded vue-logo"></div></td>
          <td> <strong class="d-block">{{item.product_name}}</strong>
            <span>Quantity: {{item.quantity}} - {{item.product_price | formatMoney}}</span></td>
          <td><RemoveFromCart :product="item" /></td>
        </tr>
        </tbody>
        <!--Table body-->

      </table>
      <!--Table-->

    </div>
    <!--<div class="mr-2">-->
      <!--<div class="rounded vue-logo"></div>-->
    <!--</div>-->

    <!--<div class="media-body">-->
      <!--<strong class="d-block">{{item.product_name}}</strong>-->
      <!--<span>Quantity: {{item.quantity}} - {{item.product_price | formatMoney}}</span>-->
    <!--</div>-->

    <!--<div class="media-right align-middle">-->
      <!--<RemoveFromCart :product="item" />-->
    <!--</div>-->
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  name: 'ShoppingCartItem',
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>

<style scoped>
  .vue-logo {
    height: 50px;
    width: 50px;
    background: url('./../../../assets/logo.png') no-repeat center center #ddd;
    background-size: 45%;
  }
</style>
