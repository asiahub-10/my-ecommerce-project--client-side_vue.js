<template>
  <div>
    <!-- single -->
    <div class="single rgba-brown-slight">
      <div class="container pt-5 pb-4">
       <div class="row">
         <div class="col-sm-6 mb-4">
             <zoom-on-hover :img-normal="'http://localhost/my-project/public/'+product.product_image" :img-zoom="'http://localhost/my-project/public/'+product.product_image" :scale="2" class="card-img p-2 product-img mx-auto"></zoom-on-hover>
         </div>
         <div class="col-sm-6 text-left product-details">
           <h3 class="orange-text">{{ product.product_name }}</h3>
           <div class="description">
             <p class="text-muted ">{{ product.product_short_description }}.</p>
           </div>
           <div class="simpleCart_shelfItem">
             <p><i class="item_price text-info font-weight-bold">{{product.product_price | formatMoney}}</i></p>
           </div>
           <AddToCart class="btn sunny-morning-gradient px-3 btn-text" :product="product"/><span v-if="!product.product_quantity" class="text-danger font-italic stock-out add-btn">Out of Stock</span>
         </div>
       </div>
        <!--<p class=" col-sm-6 ml-auto text-left"><a class="btn sunny-morning-gradient px-3 btn-text" href="#">Add to cart</a></p>-->
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
                <a class="nav-link active detail-btn-text" data-toggle="pill" href="#pills-product">
                  Product Detail
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link detail-btn-text" data-toggle="pill" href="#pills-review">
                  Product Review
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mx-auto">
        <div class="tab-content col-sm-12">
          <div class="tab-pane active" id="pills-product">
            <h4 class="text-left">{{ product.product_name }}</h4>
            <!--<p>{{ product.product_long_description }}.</p>-->
            <h5 class="text-justify"><span v-html="product.product_long_description"></span></h5>
          </div>
          <div class="tab-pane" id="pills-review">
            <div class="text-justify text-muted my-3">
              <h6 class="orange lighten-4 d-inline p-2 rounded "><i class="fas fa-user"></i> Ssfdfdsgg</h6>
              <span>12/3/2019</span>
              <br/>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem beatae blanditiis culpa eveniet fugiat ipsam ipsum, laboriosam minima natus necessitatibus obcaecati pariatur quam quidem quo tenetur unde vitae voluptatum?</p>
              <hr/>
              <h6 class="orange lighten-4 d-inline p-2 rounded "><i class="fas fa-user"></i> Asafsdf Ssfd</h6>
              <span>12/3/2019</span>
              <br/>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <hr/>
            </div>
            <h6 v-if="!customerId" class="text-justify font-italic font-weight-bold text-muted">Please click to <a href="/login" class="text-uppercase orange-text">login</a> to add a review. If you do not have an account, click to <a href="/register" class="text-uppercase orange-text">register</a> for registration.</h6>
            <form  class="md-form amber-textarea active-amber-textarea mt-0">
              <textarea :disabled="!customerId" id="reviewInput" class="md-textarea form-control" rows="3"></textarea>
              <label for="reviewInput" style="font-size: large !important;"><i class="fas fa-pencil-alt"></i> Add your review</label>
              <div class="text-left">
                <input :disabled="!customerId" type="submit" class="btn peach-gradient text-white font-weight-bold text-uppercase" style="font-size: large;" value="submit"/>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    <!--detail & review-->

  </div>
</template>

<script>
import AddToCart from '../shop/products/AddToCart'

// if (localStorage.setItem('customerId')) {
//   document.getElementById('reviewInput').disabled = false
//   document.getElementById('reviewBtn').disabled = false
// } else {
//   document.getElementById('reviewInput').disabled = true
//   document.getElementById('reviewBtn').disabled = true
// }

export default {
  name: 'ProductDetails',
  data () {
    return {
      customerId: localStorage.getItem('customerId')
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
    // localStorage.clear()
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
    max-height: 300px;
    max-width: 300px;
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

  .active-amber-textarea.md-form label.active {
    color: #ffa000;
  }
  .amber-textarea textarea.md-textarea:focus:not([readonly]) {
    border-bottom: 1px solid #ffa000;
    box-shadow: 0 1px 0 0 #ffa000;
  }
  .amber-textarea.md-form .prefix.active {
    color: #ffa000;
  }
  .active-amber-textarea.md-form textarea.md-textarea:focus:not([readonly])+label {
    color: #ffa000;
  }

  @media (max-width: 575px) {
    .product-details {
      text-align: center !important;
    }
    .add-btn {
      margin: auto;
    }
  }
</style>
