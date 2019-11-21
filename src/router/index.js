import Vue from 'vue'
import Router from 'vue-router'
// import VueSession from 'vue-session'
import Vuex from 'vuex'
import * as actions from '../store/shop/actions'
import * as getters from '../store/shop/getters'
import products from '../store/shop/modules/products'
import profile from '../store/shop/modules/profile'
import promotions from '../store/shop/modules/promotions'
import shoppingCart from '../store/shop/modules/shopping-cart'

import Content from '../components/home/Home'
import About from '../components/about/About'
import Product from '../components/product/Product'
// import CustomerLogin from '../components/includes/LoggedIn'
// import CategoryProduct from '../components/category/CategoryProduct'
import CategoryProductList from '../components/category/CategoryProductList'
// import BrandProduct from '../components/brand/BrandProduct'
import BrandProductList from '../components/brand/BrandProductList'
// import ProductDetails from '../components/product/ProductDetails'
import SingleProduct from '../components/product/SingleProduct'
import Registration from '../components/customer/Registration'
import Login from '../components/customer/Login'
import ShoppingChart from '../components/shop/ShoppingChart'
import ContactInfo from '../components/checkout/ContactInfo'
import ShippingInfo from '../components/checkout/shipping/ShippingInfo'
import PaymentInfo from '../components/checkout/payment/PaymentInfo'
import Shop from '../components/shop/Shop'

Vue.use(Router)
// Vue.use(VueSession)
Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

export default new Router({
  actions,
  getters,
  modules: {
    products,
    profile,
    promotions,
    shoppingCart
  },
  strict,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Content
      // children: [
      //   {
      //     path: '/:id',
      //     name: 'CustomerLogin',
      //     component: CustomerLogin
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      children: [
        {
          path: 'category-product/:id',
          name: 'CategoryProductList',
          component: CategoryProductList
        },
        {
          path: 'brand-product/:id',
          name: 'BrandProductList',
          component: BrandProductList
        }
      ]
    },
    // {
    //   path: '/product-details/:id',
    //   name: 'ProductDetails',
    //   component: ProductDetails
    // },
    {
      path: '/product-details/:id',
      name: 'SingleProduct',
      component: SingleProduct
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shopping-chart',
      name: 'ShoppingChart',
      component: ShoppingChart
    },

    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/customer-info',
      name: 'ContactInfo',
      component: ContactInfo
    },
    {
      path: '/shipping-info/:id',
      name: 'ShippingInfo',
      component: ShippingInfo
    },
    {
      path: '/payment-info/:id/:name/:mobile/:address',
      name: 'PaymentInfo',
      component: PaymentInfo
    }
  ]

})
