<template>
  <div id="features6" class="wrap-container400">
    <!-- .container -->
    <div class="container">
      <!-- .row -->
      <div class="row vertical-align">
        <div class="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure class="margin-bottom40">
            <img src="../../assets/images/firefly/firefly_ci.png" alt="HP ALM Compatibility" />
          </figure>
        </div>
        <div class="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
          <div class="margin-bottom40">
            <div class=" ">
              <h2 class="head-h2">Jenkins, Bamboo, TeamCity Support</h2>
            </div>
            <p>Automatic ReadyAPI tests results export if ReadyAPI is being run via Jenkins, Bamboo, or TeamCity</p>
            <div class="list-row">
              <ul class="list-icon">
                <li><i class="fa fa-check"></i>Firefly is automatically enabled and invoked when running ReadyAPI via commandline</li>
                <li><i class="fa fa-check"></i>Run ReadyAPI via any CI system like Jenkins, Bamboo, and Bamboo and automatically export test results/li></li>
                <li><i class="fa fa-check"></i>Run ReadyAPI tests via ReadyAPI Maven Plugin using your CI system and view test results in TestRail</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 visible-xs">
          <figure class="margin-bottom40">
            <img src="../../assets/images/firefly/firefly_ci.png" alt="HP ALM Compatibility" />
          </figure>
        </div>
      </div>
      <!-- .row end -->
    </div>
    <!-- .container end -->
  </div>
</template>

<script>
export default {
  name: "Feature6",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
