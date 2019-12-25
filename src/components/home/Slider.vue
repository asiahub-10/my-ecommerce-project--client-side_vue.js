<template>
    <div>
      <!-- banner -->
      <div class="banner" id="home1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <!--<vueper-slides autoplay fade :dragging-distance="50" :slide-ratio="1/4" :slide-content-outside="contentPosition" :arrows="false" :speed="2500" >-->
                <!--&lt;!&ndash;<vueper-slide&ndash;&gt;-->
                  <!--&lt;!&ndash;v-for="(slide, i) in slides"&ndash;&gt;-->
                  <!--&lt;!&ndash;:key="i"&ndash;&gt;-->
                  <!--&lt;!&ndash;:image="'http://localhost/my-project/public/' + slide.slider_image"&ndash;&gt;-->
                  <!--&lt;!&ndash;:title="slide.slider_title"&ndash;&gt;-->
                  <!--&lt;!&ndash;:content="slide.slider_description">&ndash;&gt;-->
                <!--&lt;!&ndash;</vueper-slide>&ndash;&gt;-->
                <!--<vueper-slide-->
                  <!--v-for="(slide, i) in slides"-->
                  <!--:key="i"-->
                  <!--:image="'http://localhost/my-project/public/' + slide.slider_image">-->
                  <!--<template v-slot:content>-->
                    <!--&lt;!&ndash; Using Vuetify &ndash;&gt;-->
                    <!--&lt;!&ndash;<v-layout align-center justify-center >&ndash;&gt;-->
                      <!--&lt;!&ndash;&lt;!&ndash;<v-icon color="white" size="5em">access_time</v-icon>&ndash;&gt;&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="text-warning pt-5">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div>{{ slide.slider_title }}</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<div>{{ slide.slider_description }}</div>&ndash;&gt;-->
                      <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-layout>&ndash;&gt;-->
                    <!--<div class="text-warning pt-5">-->
                      <!--<h3>{{ slide.slider_title }}</h3>-->
                      <!--<div>{{ slide.slider_description }}</div>-->
                    <!--</div>-->
                  <!--</template>-->
                <!--</vueper-slide>-->
              <!--</vueper-slides>-->
            </div>
            <div class="col-sm-12">
              <vueper-slides autoplay fade :dragging-distance="50" slide-content-outside="top" :slide-ratio="0.3" >
                <!--<vueper-slide-->
                  <!--v-for="(slide, i) in slides"-->
                  <!--:key="i"-->
                  <!--:image="'http://localhost/my-project/public/' + slide.slider_image"-->
                  <!--:title="'# ' + slide.slider_title"-->
                  <!--:content="slide.slider_description"-->
                  <!--:link="slide.link"></vueper-slide>-->
                <vueper-slide
                  v-for="(slide, i) in slides"
                  :key="i"
                  :image="'http://localhost/my-project/public/' + slide.slider_image">
                  <template v-slot:content>
                    <!-- Using Vuetify -->
                    <!--<v-layout align-center justify-center >-->
                    <!--&lt;!&ndash;<v-icon color="white" size="5em">access_time</v-icon>&ndash;&gt;-->
                    <!--<div class="text-warning pt-5">-->
                    <!--<div>{{ slide.slider_title }}</div>-->
                    <!--<div>{{ slide.slider_description }}</div>-->
                    <!--</div>-->
                    <!--</v-layout>-->
                    <div class="text-warning pt-5" style="position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); z-index: 5;">
                      <h3>{{ slide.slider_title }}</h3>
                      <div>{{ slide.slider_description }}</div>
                    </div>
                  </template>
                </vueper-slide>
              </vueper-slides>
            </div>
            <div class="col-sm-6">
              <div id="carousel-example-3" class="carousel slide carousel-fade" data-ride="carousel">
                <!--Indicators-->
                <ol class="carousel-indicators">
                  <li data-target="#carousel-example-3" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-example-3" data-slide-to="1"></li>
                  <li data-target="#carousel-example-3" data-slide-to="2"></li>
                </ol>
                <!--/.Indicators-->
                <!--Slides-->
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="view">
                      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                           alt="First slide">
                      <div class="mask rgba-black-light"></div>
                    </div>
                    <div class="carousel-caption">
                      <h3 class="h3-responsive">Light mask</h3>
                      <p>First text</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <!--Mask color-->
                    <div class="view">
                      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                           alt="Second slide">
                      <div class="mask rgba-black-strong"></div>
                    </div>
                    <div class="carousel-caption">
                      <h3 class="h3-responsive">Strong mask</h3>
                      <p>Secondary text</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <!--Mask color-->
                    <div class="view">
                      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                           alt="Third slide">
                      <div class="mask rgba-black-slight"></div>
                    </div>
                    <div class="carousel-caption">
                      <h3 class="h3-responsive">Slight mask</h3>
                      <p>Third text</p>
                    </div>
                  </div>
                </div>
                <!--/.Slides-->
                <!--Controls-->
                <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <!--/.Controls-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //banner -->
    </div>
</template>

<script>
// import { slider, slideritem } from 'vue-concise-slider'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Slider',
  data () {
    return {
      autoPlaying: true,
      slides: [],
      options: {
        // currentPage: 0,
        // thresholdDistance: 500,
        // thresholdTime: 100,
        // autoplay: 3000,
        // loop: true,
        // direction: 'vertical',
        // loopedSlides: 1,
        // slidesToScroll: 1,
        // timingFunction: 'ease',
        // speed: 300
      }
    }
  },
  components: {
    // slider,
    // slideritem
    VueperSlides, VueperSlide
  },
  methods: {
    getSlider () {
      this.$api.get('slider')
        .then((res) => {
          this.slides = res.data
        })
    }
    // slide (data) {
    //   console.log(data)
    // },
    // onTap (data) {
    //   console.log(data)
    // },
    // onInit (data) {
    //   console.log(data)
    // }
  },
  created () {
    this.getSlider()
  }
}
</script>

<style scoped>
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

  .vueperslides--fade .vueperslide {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    -webkit-transition: opacity .8s ease-in-out;
    transition: opacity .8s ease-in-out;
    -webkit-transition-duration: inherit;
    transition-duration: inherit;
  }
  .vueperslides--fade .vueperslide--active, .vueperslides--fade .vueperslide--visible {
    transition: 0.3s ease-in-out !important;
    z-index: 1;
    opacity: 1;
  }
</style>
