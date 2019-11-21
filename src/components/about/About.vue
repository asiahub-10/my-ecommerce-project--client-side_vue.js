<template>
    <div>
      <div class="container">
        <div class="row">
          <button type="button" @click="newFunction" class="btn btn-warning">Click Me</button>
          <h1 class="text-danger">{{ value }}</h1>
        </div>
      </div>
      <div class="banner10" id="home1">
        <div class="container">
          <h2>About Us</h2>
        </div>
      </div>
      <div class="breadcrumb_dress">
        <div class="container">
          <ul>
            <li><router-link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</router-link> <i>/</i></li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div class="about">
        <div class="container">
          <div class="w3ls_about_grids">
            <div class="col-md-6 w3ls_about_grid_left">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
              <div class="col-xs-2 w3ls_about_grid_left1">
                <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span>
              </div>
              <div class="col-xs-10 w3ls_about_grid_left2">
                <p>Sunt in culpa qui officia deserunt mollit
                  anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div class="clearfix"> </div>
              <div class="col-xs-2 w3ls_about_grid_left1">
                <span class="glyphicon glyphicon-flash" aria-hidden="true"></span>
              </div>
              <div class="col-xs-10 w3ls_about_grid_left2">
                <p>Sunt in culpa qui officia deserunt mollit
                  anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="col-md-6 w3ls_about_grid_right">
              <img src="../../../static/old/images/77.jpg" alt=" " class="img-responsive" />
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      <!-- //about -->

      <!-- team -->
      <div class="team">
        <div class="container">
          <h3>Meet Our Team</h3>
          <div class="wthree_team_grids">
            <div class="col-md-3 wthree_team_grid">
              <img src="../../../static/old/images/8.png" alt=" " class="img-responsive" />
              <h4>Smith Allen <span>Fashion Designer</span></h4>
              <div class="agileits_social_button">
                <ul>
                  <li><a href="#" class="facebook"> </a></li>
                  <li><a href="#" class="twitter"> </a></li>
                  <li><a href="#" class="google"> </a></li>
                  <li><a href="#" class="pinterest"> </a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 wthree_team_grid">
              <img src="../../../static/old/images/9.png" alt=" " class="img-responsive" />
              <h4>Laura James <span>Fashion Designer</span></h4>
              <div class="agileits_social_button">
                <ul>
                  <li><a href="#" class="facebook"> </a></li>
                  <li><a href="#" class="twitter"> </a></li>
                  <li><a href="#" class="google"> </a></li>
                  <li><a href="#" class="pinterest"> </a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 wthree_team_grid">
              <img src="../../../static/old/images/10.png" alt=" " class="img-responsive" />
              <h4>Crisp Doe <span>Fashion Designer</span></h4>
              <div class="agileits_social_button">
                <ul>
                  <li><a href="#" class="facebook"> </a></li>
                  <li><a href="#" class="twitter"> </a></li>
                  <li><a href="#" class="google"> </a></li>
                  <li><a href="#" class="pinterest"> </a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 wthree_team_grid">
              <img src="../../../static/old/images/11.png" alt=" " class="img-responsive" />
              <h4>Linda Rosy <span>Fashion Designer</span></h4>
              <div class="agileits_social_button">
                <ul>
                  <li><a href="#" class="facebook"> </a></li>
                  <li><a href="#" class="twitter"> </a></li>
                  <li><a href="#" class="google"> </a></li>
                  <li><a href="#" class="pinterest"> </a></li>
                </ul>
              </div>
            </div>
            <div class="clearfix"> </div>
            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
              repellat.</p>
          </div>
        </div>
      </div>
      <!-- //team -->
      <!-- team-bottom -->
      <div class="team-bottom">
        <div class="container">
          <h3>Are You Ready For Awesomeness? Flat <span>50% Offer</span> For Women's</h3>
          <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
            repellat.</p>
          <a href="dresses.html">Shop Now</a>
        </div>
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
