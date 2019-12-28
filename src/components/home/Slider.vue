<template>
    <div>
      <!-- banner -->
      <div class="banner" id="home1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <vueper-slides autoplay fade :arrows="false" :dragging-distance="50" slide-content-outside="top" :slide-ratio="0.3" >
                <vueper-slide class="mask flex-center pattern-1"
                  v-for="(slide, i) in slides"
                  :key="i"
                  :image="'http://localhost/my-project/public/' + slide.slider_image">
                  <template v-slot:content>
                    <div class="text-light slide-content py-3 w-100 rounded">
                      <h3>{{ slide.slider_title }}</h3>
                      <div>{{ slide.slider_description }}</div>
                    </div>
                  </template>
                </vueper-slide>
              </vueper-slides>
            </div>
          </div>
        </div>
      </div>
      <!-- //banner -->
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Slider',
  data () {
    return {
      autoPlaying: true,
      slides: []
    }
  },
  components: {
    VueperSlides, VueperSlide
  },
  methods: {
    getSlider () {
      this.$api.get('slider')
        .then((res) => {
          this.slides = res.data
        })
    }
  },
  created () {
    this.getSlider()
  }
}
</script>

<style scoped>
  .slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.45);
  }
  .vueperslide__content-wrapper--outside-top {
    transition: 0.3s ease-in-out;
    opacity: 1;
    transform: scale(1);
  }

  .vueperslides--animated .vueperslide__content-wrapper--outside-top {
    transition: 0.15s ease-in-out;
    opacity: 0;
    transform: scale(0);
  }
</style>
