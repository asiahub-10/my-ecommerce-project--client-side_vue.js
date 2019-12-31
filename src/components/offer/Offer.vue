<template>
  <div>
    <div id="offer" class="my-5">
      <div class="container">
        <h3 class="orange-text mb-4">Special Offers</h3>
        <div v-if="offers !== null" class="container-fluid mt-2">
          <hr/>
          <div v-for="offer in offers" :key="offer.id">
            <div class="row">
              <div class="col-sm-6 h-100">
                <img :src="'http://localhost/my-project/public/'+offer.offer_image" alt="Offer image"/>
              </div>
              <div class="col-sm-6 h-100">
                <div class="card-body">
                  <h5>{{ offer.offer_title }}</h5>
                  <p v-html="offer.offer_description" style="font-size: medium;"></p>
                </div>
              </div>
            </div>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',
  data () {
    return {
      offers: []
    }
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

</style>
