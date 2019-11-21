<template>
  <div>
    <!-- banner -->
    <div class="container-fluid">
      <div class="row">
        <div class="card">
          <img src="/static/images/product_banner.jpg" alt="Product Banner" class="card-img-top rounded-0" />
          <!-- breadcrumbs -->
          <div class="centered ">
            <router-link to="/" class="text font-weight-bold text-uppercase "><i class="fas fa-home"></i> Home</router-link> <i class="text-light divider">||</i>
              <span class="font-italic">Products</span>
          </div>
          <!-- //breadcrumbs -->
        </div>
      </div>
    </div>
    <!--//banner -->
    <!-- sidebar & content -->
    <div class="container-fluid">
      <div class="row mt-3">
        <div class=" col-lg-3 col-md-4 col-sm-5 side-bar-column px-3">
          <ul class="list-unstyled card border-0  text-left text-capitalize font-italic side-bar-content">
            <hr class="border-color"/>
            <li class=""><a href="" class="font "><span><img src="/static/images/new.png" alt="Icon" class="mr-2"></span>new arrivals</a></li>
            <hr class="border-color"/>
            <li class=""><a href="" class="font "><span><img src="/static/images/best.png" alt="Icon" class="mr-2"></span>best sales</a></li>
            <hr class="border-color"/>
            <li class=""><a href="" class="font "><span><img src="/static/images/offer.png" alt="Icon" class="mr-2"></span>offers</a></li>
            <hr class="border-color"/>
            <li class=""><p class="font2 "><span><img src="/static/images/list_heading.png" class="list-heading mr-2" alt="Icon"></span>categories</p>
              <ul class="list-unstyled">
                <li class="ml-5 pl-4 mb-2" v-for="category in categories"  v-bind:key="category.id">
                  <router-link :to="'/product/category-product/'+category.id" class="font font-small">
                    <span><img src="/static/images/pointer2.png" alt="Icon" class="mr-2"></span>{{ category.category_name}}
                  </router-link>
                </li>
              </ul>
            </li>
            <hr class="border-color"/>
            <li class=""><p class="font2 "><span><img src="/static/images/list_heading.png" class="list-heading mr-2" alt="Icon"></span>brands</p>
              <ul class="list-unstyled">
                <li class="ml-5 pl-4 mb-2" v-for="brand in brands"  v-bind:key="brand.id">
                  <router-link :to="'/product/brand-product/'+brand.id" class="font font-small">
                    <span><img src="/static/images/pointer2.png" alt="Icon" class="mr-2"></span>{{ brand.brand_name}}
                  </router-link>
                </li>
              </ul>
            </li>
            <hr class="border-color"/>
          </ul>
        </div>
        <div class="col-lg-9 col-md-8 col-sm-7">
          <div class="row">
            <div class="col-sm-6 px-1">
              <img src="/static/images/diccount_offer1.jpg" alt="Image" class="card-img-top rounded-0"/>
            </div>
            <div class="col-sm-6 px-1">
              <img src="/static/images/diccount_offer2.jpg" alt="Image" class="card-img-top rounded-0"/>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- //sidebar & content -->

  </div>
</template>

<script>
export default {
  name: 'CategoryProduct',
  data () {
    return {
      id: this.$route.params.id,
      categoryProducts: [],
      categories: [],
      brands: []
    }
  },
  methods: {
    allCategory: function () {
      this.$http.get('http://localhost/my-project/public/api/all-published-category')
        .then(function (response) {
          this.categories = response.body
        })
    },
    allBrand: function () {
      this.$http.get('http://localhost/my-project/public/api/all-published-brand')
        .then(function (response) {
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
  .text {
    color: rgba(198, 206, 209, 1);
    font-size: medium;
  }
  .divider {
    font-size: x-large;
  }
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
  .text:hover {
    color: #ff9f49;
  }
  .side-bar-content {
    font-size: 18px;
    font-weight: bold;
  }
  .font, .font2 {
    font-family: fira-santa;
    color: dimgrey;
    display: block;
  }
  .font:hover {
    color: #ff9f49;
  }
  @font-face {
    src: url("../../../static/fonts/Fira_Sans/FiraSans-Regular.ttf");
    font-family: fira-santa;
  }
  .list-heading {
    height: 40px;
    width: 40px;
  }
  .side-bar-column {
    /*width: 270px;*/
    border-right: 3px double #ff9f49;
  }
  .border-color {
    border-bottom: 1px solid #ff9f49;
  }
  .content-area {
    margin-left: 270px;
  }
  @media (max-width: 576px) {
    .side-bar-column {
      width: 100%;
      border-right: 0;
    }
  }
</style>
