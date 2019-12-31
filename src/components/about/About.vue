<template>
    <div>
      <div class="container text-justify pt-5 pb-3">
        <p class="text-dark">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloribus earum facilis iusto qui quisquam quos reiciendis. A adipisci animi asperiores cum debitis deleniti dolorum ipsa nihil sunt veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi aperiam beatae cum dignissimos dolore ea, nobis, odit officia omnis perspiciatis quaerat quia quod repellendus! Aliquam corporis eos neque.
        </p>
        <p class="text-dark">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloribus earum facilis iusto qui quisquam quos reiciendis. A adipisci animi asperiores cum debitis deleniti dolorum ipsa nihil sunt veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi aperiam beatae cum dignissimos dolore ea, nobis, odit officia omnis perspiciatis quaerat quia quod repellendus! Aliquam corporis eos neque.
        </p>
        <p class="text-dark">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur doloribus earum facilis iusto qui quisquam quos reiciendis. A adipisci animi asperiores cum debitis deleniti dolorum ipsa nihil sunt veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi aperiam beatae cum dignissimos dolore ea, nobis, odit officia omnis perspiciatis quaerat quia quod repellendus! Aliquam corporis eos neque.
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    newFunction: function () {
      this.$http.get('http://localhost/my-project/public/api/demo')
        .then(function (res) {
          // console.log(res)
          this.value = res.body
        })
    }
  }
}
</script>

<style scoped>

</style>
