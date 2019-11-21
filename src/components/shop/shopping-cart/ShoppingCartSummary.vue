<template>
  <div>
    <div class="table-responsive ">
      <!--Table-->
      <table class="table">
       <!--Table body-->
        <tbody class="text-right" style="font-size: 18px;">
          <tr>
            <th></th>
            <th></th>
            <th class="font-weight-bold">Subtotal ({{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }}):</th>
            <td class="font-weight-bold">{{subtotal | formatMoney}}
              <em v-if="productDiscount"><b> (30% OFF applied)</b></em>
            </td>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th class="font-weight-bold">Taxes:</th>
            <td class="font-weight-bold">{{taxes | formatMoney}}</td>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th class="font-weight-bold">Total:</th>
            <td class="font-weight-bold">{{total | formatMoney}}</td>
          </tr>
        </tbody>
        <!--Table body-->
      </table>
      <!--Table-->
    </div>
    <!--<div class="list-group-item">-->
      <!--<strong></strong>-->
      <!--<strong v-if="!totalDiscount"> {{total | formatMoney}}</strong>-->
      <!--<span v-if="totalDiscount">-->
        <!--<strike> {{total + 100 | formatMoney}}</strike>-->
        <!--<strong> {{totalWithDiscount | formatMoney}}</strong>-->
      <!--</span>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ShoppingCartSummary',
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'taxes',
      'shipping',
      'total'
    ]),
    ...mapState({
      productDiscount: state => state.shoppingCart.productDiscount,
      freeShipping: state => state.shoppingCart.freeShipping,
      totalDiscount: state => state.shoppingCart.totalDiscount
    }),
    totalWithDiscount () {
      let total = this.$store.getters.total
      return total > 0 ? this.total : 0
    }
  }
}
</script>
