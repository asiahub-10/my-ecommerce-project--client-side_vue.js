<template>
  <div>
    <div v-if="offers !== null" class="container-fluid mt-2">
      <div class="row" style="border-top: #f6d365 5px double; border-bottom: #f6d365 5px double; ">
        <div class="col-md-6 px-0">
          <div class="h-100 bg-warning" style="padding: 20px 0px;">
            <h4 class="centered text-white font-italic text-uppercase">special offers for your style</h4>
          </div>
        </div>
        <div class="col-md-6 px-0">
          <vueper-slides autoplay :arrows="false" :dragging-distance="50" slide-content-outside="top" :slide-ratio="0.3" >
            <vueper-slide v-for="(offer, i) in offers"
                          :key="i"
                          :image="'http://localhost/my-project/public/' + offer.offer_image">
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'OfferSection',
  data () {
    return {
      offers: []
    }
  },
  components: {
    VueperSlides, VueperSlide
  },
  methods: {
    getSlider () {
      this.$api.get('offer')
        .then((res) => {
          this.offers = res.data
        })
    }
  },
  created () {
    this.getSlider()
  }
}
</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 900;
}
@media (max-width: 768px) {
  .centered {
    position: relative;
    font-weight: 200;
  }
}
</style>
