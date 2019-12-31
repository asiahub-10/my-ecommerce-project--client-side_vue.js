<template>
  <div>
    <div class="container" style="margin-bottom: -35px; z-index: 10; position: relative;">
      <nav class="navbar navbar-expand-md mb-2 bg-white">
        <button class="navbar-toggler mx-auto collapsed" type="button" data-toggle="collapse" data-target="#menuContents" aria-controls="menuContents" aria-expanded="false" aria-label="Toggle navigation" style="">
          <span class="navbar-toggler-icon"><img src="/static/images/nav_icon.png" alt="Nav Image"></span>
        </button>
        <div class="navbar-collapse collapse" id="menuContents" style="">
          <ul class="navbar-nav nav-mega mx-auto">
            <li class="nav-item"><router-link to="/" class="nav-link act text-uppercase">Home</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link act text-uppercase">About</router-link></li>
            <li class="nav-item dropdown mega-dropdown">
              <a class="nav-link dropdown-toggle text-uppercase main-menu" id="dropdownMenu" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">Products <span><i class="fas fa-angle-down dropdown-icon"></i></span>
              </a>
              <div class="dropdown-menu mega-menu v-2 z-depth-1 py-5 px-3 menu"
                   aria-labelledby="dropdownMenu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 col-lg-4 mb-xl-0">
                      <h6 class="text-capitalize font-weight-bold text-muted" style="font-size: large;">Product Categories</h6>
                      <div class="text-border-bottom mb-3"></div>
                      <ul class="list-unstyled">
                        <li class="" v-for="category in categories" :key="category.id">
                          <router-link :to="'/product/category-product/'+category.id" class="text-style py-0">{{ category.category_name}}</router-link>
                          <hr/>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-xl-0">
                      <h6 class="text-capitalize font-weight-bold text-muted" style="font-size: large;">Product Brands</h6>
                      <div class="text-border-bottom mb-3"></div>
                      <ul class="list-unstyled">
                        <li class="" v-for="brand in brands" :key="brand.id">
                          <router-link :to="'/product/brand-product/'+brand.id" class="text-style py-0">{{ brand.brand_name}}</router-link>
                          <hr/>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-12 col-lg-4 mb-xl-0">
                      <img src="/static/images/menu_image.jpg" class="img-fluid menu-image" alt="Product sample image">
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/offer">Offers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </nav>
  </div>
  </div>
</template>

<script>

export default {
  name: 'MenuBar',
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
  .image {

  }
  .nav-item .nav-link {
    padding: 10px 30px;
    color: #8B8B8B;
    font-size: 20px;
  }
  .nav-item .nav-link:hover {
    /*color: #6E6E8B;*/
    font-weight: bold;
    color: #ff9f49;
  }
  .dropdown:hover
  .dropdown-menu {display: block;}
  .text-border-bottom {
    border-bottom: #ff9f49 2px solid;
  }
  .text-style {
    color: #A0A0A0 !important;
    font-size: 16px !important;
    font-weight: bold !important;
    font-family: "Roboto", sans-serif;
    display: block;
  }
  .text-style:hover {
    color: #ff9f49 !important;
  }
  .main-menu {
    position: relative;
  }
  .menu {
    text-align: center;
    width: 90% !important;
    position: absolute;
    top: 45px;
    left: 5% !important;
  }
  .menu-image {
    margin-top: 29px;
    border: 3px dashed #ff9f49;
  }
  .dropdown-toggle {
    position: relative;
  }
  .dropdown-toggle::after {
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    border-left: 0
  }
  .dropdown-icon {
    margin-left: -5px;
    font-size: large;
  }
  @media (max-width: 768px) {
    .menu {
      top: 165px;
    }
    .nav-item {
      text-align: left;
      border-top: 1px solid gainsboro;
    }
  }
</style>
