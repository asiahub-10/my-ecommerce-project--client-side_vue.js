<template>
  <div>
    <div>
      <div class="view overlay rounded card-image">
        <img class="card-img-top rounded" :src="'http://localhost/my-project/public/'+product.product_image" alt="Product Image">
        <router-link  :to="'/product-details/'+product.id">
          <div v-if="product.product_quantity" class="mask peach-gradient-rgba">
            <p class="overlay-text">
              <i class="fas fa-2x fa-eye"></i>
              <br/>
              View details
            </p>
          </div>
          <div v-else class="mask peach-gradient-rgba" style="opacity: 1;">
            <p class="overlay-text text-uppercase font-weight-bold">
              <img src="../../../static/images/empty.png" alt="" class="mx-auto"/>
              Out of Stock
            </p>
          </div>
        </router-link>
      </div>
      <div class="card-content text-center pt-4 bg-white">
        <h5 class="orange-text">{{ product.product_name }}</h5>
        <div class="simpleCart_shelfItem">
          <p class=""><i class="text-muted font-weight-bold">{{product.product_price | formatMoney}}</i></p>
          <span hidden>{{ product.product_quantity }}</span>
          <AddToCart class="btn sunny-morning-gradient btn-block btn-text" :product="product"/>
        </div>
      </div>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import AddToCart from '../shop/products/AddToCart'

export default {
  name: 'BrandProduct',
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>

<style scoped>
  .card-content {
    width: 85%;
    margin: auto;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .card-image {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  }
  .view {
    height: auto;
  }
  .btn-text {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
  }
  .btn:hover {
    box-shadow: 0 8px 11px 0 rgba(0, 0, 0, 0.18), 0 6px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .peach-gradient-rgba {
    background: -webkit-linear-gradient(50deg, rgba(255, 216, 111, .7), rgba(252, 98, 98, .7)) !important;
    background: -o-linear-gradient(50deg, rgba(255, 216, 111, .7), rgba(252, 98, 98, .7)) !important;
    background: linear-gradient(40deg, rgba(255, 216, 111, .7), rgba(252, 98, 98, .7)) !important;
  }
  .overlay-text {
    font-size: 20px;
    font-weight: bold;
    color: white;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
</style>
