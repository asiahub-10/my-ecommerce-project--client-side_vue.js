<template>
  <div>
    <!-- single -->
    <div class="single rgba-brown-slight">
      <div class="container pt-5 pb-4">
       <div class="row">
         <div class="col-sm-6">
           <img :src="'http://localhost/my-project/public/'+product.product_image" class="img-responsive p-2 product-img"/>
         </div>
         <div class="col-sm-6 text-left">
           <h3 class="orange-text">{{ product.product_name }}</h3>
           <div class="description">
             <p class="text-muted ">{{ product.product_short_description }}.</p>
           </div>
           <div class="simpleCart_shelfItem">
             <p><i class="item_price text-info font-weight-bold">{{product.product_price | formatMoney}}</i></p>
           </div>
         </div>
       </div>
        <!--<p class=" col-sm-6 ml-auto text-left"><a class="btn sunny-morning-gradient px-3 btn-text" href="#">Add to cart</a></p>-->
        <p class=" col-sm-6 ml-auto text-left">
          <AddToCart class="btn sunny-morning-gradient px-3 btn-text" :product="product"/><span v-if="!product.product_quantity" class="text-danger font-italic stock-out">Out of Stock</span>
        </p>
      </div>
    </div>
    <!-- single -->

    <!--detail & review-->
    <div class="container my-5">
      <div class="row">
        <div class="card card-body bg-transparent border-0">
          <div class="">
            <ul class="nav nav-pills border-bottom">
              <li class="nav-item">
                <a class="nav-link active detail-btn-text" data-toggle="pill" href="#pills-music">
                  Product Detail
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link detail-btn-text" data-toggle="pill" href="#pills-bus">
                  Product Review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mx-auto">
        <div class="tab-content">
          <div class="tab-pane active" id="pills-music">
            <h4>{{ product.product_name }}</h4>
            <!--<p>{{ product.product_long_description }}.</p>-->
            <h5 class="text-justify"><span v-html="product.product_long_description"></span></h5>
          </div>
          <div class="tab-pane" id="pills-bus">
            <h6 class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis delectus eaque enim esse explicabo facere illum impedit ipsa iste labore laborum, minus necessitatibus nemo neque nisi reprehenderit sequi?
            </h6>
          </div>
        </div>
      </div>
    </div>
    <!--detail & review-->

  </div>
</template>

<script>
import AddToCart from '../shop/products/AddToCart'

export default {
  name: 'ProductDetails',
  data () {
    return {
      // product: {}
      // productId: this.$route.params.id
    }
  },
  props: {
    product: Object
  },
  components: { AddToCart },
  // watch: {
  //   '$route' (to, form) {
  //     this.$http.get('http://localhost/my-project/public/api/product-by-id/' + this.to.params.id)
  //   }
  // },
  methods: {
    // productById: function () {
    //   this.$http.get('http://localhost/my-project/public/api/product-by-id/' + this.productId)
    //     .then(function (res) {
    //       this.product = res.body
    //     })
    // }
  },
  created () {
    // this.productById()
  }
}
</script>

<style scoped>
  .centered {
    font-weight: bold;
    background-color: rgba(128, 128, 128, .5);
    color: rgba(198, 206, 209, 1);
    width: 100%;
    padding: 10px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text {
    color: rgba(198, 206, 209, 1);
    font-size: medium;
  }
  .text:hover {
    color: #ff9f49;
  }
  .product-img {
    border: 4px dashed #ff9f49;
  }
  .btn-text {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    bottom: 0;
  }
  .btn:hover {
    box-shadow: 0 8px 11px 0 rgba(0, 0, 0, 0.18), 0 6px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .border-bottom {
    border-bottom: 3px solid coral !important;
  }
  .detail-btn-text {
    color: coral;
    display: block;
    padding: 10px 20px;
    border: 3px solid coral;
    /*margin-right: 10px;*/
    font-size: 20px;
    font-weight: bold;
    border-radius: 0px;
    border-bottom: 0;
  }
  .nav-pills .nav-link.active .detail-btn-text {
    color: white;
    display: block;
    padding: 10px 20px;
    border: 3px solid coral;
    /*margin-right: 10px;*/
    font-size: 20px;
    font-weight: bold;
    border-radius: 0px;
    background-color: coral;
    border-bottom: 0;
  }
  .nav-pills .nav-link.active,
  .detail-btn-text .show > .nav-link {
    background-color: coral;
  }
  .stock-out {
    font-weight: bold;
    font-size: larger;
  }
</style>
