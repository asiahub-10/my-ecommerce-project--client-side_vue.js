<template>
    <div>
      <!-- registerer -->
      <div class="rgba-orange-slight">
        <div class="container">
          <div class="row py-5">
            <div class="col-sm-6">
              <h3 class="orange-text pt-3">
                Create an Account
                <span>
                  <img src="/static/images/smile.png" alt="Smile Emoji" height="20" width="20"/>
                  <img src="/static/images/smile.png" alt="Smile Emoji" height="20" width="20"/>
                  <img src="/static/images/smile.png" alt="Smile Emoji" height="20" width="20"/>
                </span>
              </h3>
            </div>
            <div class="col-sm-6">
              <router-link to="/registration" class="btn btn-deep-orange font-weight-bold register">Register Now</router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- //registerer -->
      <!-- big footer -->
      <div class="container my-5">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <h4 class="footer-title ">Contact</h4>
            <div class="border-bottom"></div>
            <ul class="list-unstyled text-left text-muted">
              <li><img src="/static/images/icon_shop.png" alt="Icon" height="18" width="18" class="py-2 mr-2"> Baily Road, Dhaka.</li>
              <li><img src="/static/images/icon_email.png" alt="Icon" height="18" width="18" class="py-2 mr-2"> asia_fashion@gmail.com</li>
              <li><img src="/static/images/icon_phone.png" alt="Icon" height="18" width="18" class="py-2 mr-2"> +8801312345678</li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <h3 class="footer-title ">Categories</h3>
            <div class="border-bottom"></div>
            <ul class="list-unstyled text-left">
              <li class="mb-2 " v-for="category in categories" :key="category.id">
                <router-link :to="'/product/category-product/'+category.id" class="text-style">{{ category.category_name}}</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <h4 class="footer-title ">Brands</h4>
            <div class="border-bottom"></div>
            <ul class="list-unstyled text-left">
              <li class="mb-2 " v-for="brand in brands" :key="brand.id">
                <router-link :to="'/product/brand-product/'+brand.id"  class="text-style">{{ brand.brand_name}}</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <h4 class="footer-title">Quick Links</h4>
            <div class="border-bottom"></div>
            <ul class="list-unstyled text-left">
              <li class="mb-2" ><a href="" class="text-style">About Us</a></li>
              <li class="mb-2" ><a href="" class="text-style">Contact Us</a></li>
              <li class="mb-2" ><router-link to="/login" class="text-style">Login</router-link></li>
              <li class="mb-2" ><a href="" class="text-style">Shopping Bag</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- //big footer -->

      <div class="container-fluid rgba-orange-slight">
        <div class="row">
          <div class="card-body py-3">
            <a href=""><i class="fab fa-2x mx-1 fa-facebook-square social-media-icon"></i></a>
            <a href=""><i class="fab fa-2x mx-1 fa-twitter-square social-media-icon"></i></a>
            <a href=""><i class="fab fa-2x mx-1 fa-instagram social-media-icon"></i></a>
            <a href=""><i class="fab fa-2x mx-1 fa-linkedin social-media-icon"></i></a>
            <a href=""><i class="fab fa-2x mx-1 fa-google-plus-square social-media-icon"></i></a>
          </div>
        </div>
      </div>
      <div class="container my-3">
        <p>&copy; 2019 ASIA FASHION. All rights reserved | Design by <span class="orange-text">Asia Rahman</span></p>
      </div>
      <product/>
    </div>
</template>

<script>
import product from '../../api/ShopProduct'
export default {
  name: 'Footer',
  components: {
    product: product
  },
  data () {
    return {
      categories: [],
      brands: []
    }
  },
  methods: {
    allCategory: function () {
      this.$http.get('http://localhost/my-project/public/api/all-published-category')
        .then(function (response) {
          // console.log(response)
          this.categories = response.body
        })
    },
    allBrand: function () {
      this.$http.get('http://localhost/my-project/public/api/all-published-brand')
        .then(function (response) {
          // console.log(response)
          this.brands = response.body
        })
    }
  },
  created () {
    this.allCategory()
    this.allBrand()
  }
}
</script>

<style scoped>
.register {
  font-size: larger;
}
.footer-title{
  text-align: left;
  font-size: 25px;
}
.border-bottom{
  border-top: #ff9f49 3px solid;
  border-bottom: #ff9f49 3px solid;
  width: 20%;
  margin-bottom: 25px;
}
  .text-style {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: lighter;
    color: grey;
  }
  .text-style:hover {
    color: #ff9f49;
  }
  .social-media-icon {
    color: grey;
  }
  .social-media-icon:hover {
    color: #ff9f49;
  }
  /*.social-media-icon2 {*/
    /*color: rgba(255, 152, 0, 1);*/
    /*background: grey;*/
    /*border-radius: 5px;*/
  /*}*/
  /*.social-media-icon2:hover {*/
    /*background: #ff9f49;*/
  /*}*/

</style>
