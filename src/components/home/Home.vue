<template>
    <div>
      <new-product/>
      <slider/>
      <best-sale/>
      <offer/>
    </div>
</template>

<script>
import Slider from './SliderSection'
import NewProduct from './NewProductSection'
import BestSale from './BestSaleSection'
import Offer from './OfferSection'

export default {
  name: 'Home',
  components: {
    'slider': Slider,
    'new-product': NewProduct,
    'best-sale': BestSale,
    'offer': Offer
  }
}
</script>

<style scoped>

</style>
