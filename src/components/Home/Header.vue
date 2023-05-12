<template>
  <header id="header">
    <nav id="navigation" class="navbar">
      <!-- .container -->
      <div class="container home-header homepagemenu">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <div class="navbar-brand">
            <a href="/">
              <img src="../../assets/img/agiletestware_logo.png" alt="Agiletestware" class="homelogo" />
            </a>
          </div>
          <!-- site logo -->
        </div>
      </div>
    </nav>
    <!-- #navigation end -->
    <!-- .header-content -->
    <div class="header-content">
      <!-- .container -->
      <div class="container home-sections">
        <div class="row text-left home-section">
          <div class="col-sm-6 col-md-6 col-lg-6 home-section-block">
            <!-- 1 -->
            <div data-animation="animation-fade-in-left" class="affa-testimonial animation animated animation-fade-in-left">
              <div class="testimonial-text">
                <div class="testimonialheight">
                  <img alt="Dragonfly Agiletestware" class="margin-bottom15 imgdragonfly" src="../../assets/images/dragonfly_logo_home.png" />
                  <p>ReadyAPI and soapUI plugin for HP ALM</p>
                  <br />
                  <p>Dragonfly plugin allows engineering teams to easily export ReadyAPI tests and test results into HP ALM and automatically create test plans, test cases, design steps, Test Labs, Test Sets, and Test Runs</p>
                  <br />
                </div>
                <div class="btn-section">
                  <a class="btn-custom btn-sucess btn-dragonfly" href="dragonfly">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-6 home-section-block">
            <!-- 2 -->
            <div data-animation="animation-fade-in-right" class="affa-testimonial animation animated animation-fade-in-right">
              <div class="testimonial-text">
                <div class="testimonialheight">
                  <img alt="Bumblebee Agiletestware" class="margin-bottom15 imgbumblebee" src="../../assets/images/Bumblebeelogo.png" />
                  <p>HP ALM and HP Performance Center DevOps enablement platform</p>
                  <br />
                  <p>Integrate Jenkins, Bamboo, TeamCity, IBM Urban Code, Selenium, Appium, JUnit, TestNG, NUnit, Python, and other tools with HP ALM and HP Performance Center</p>
                  <br />
                </div>
                <div class="btn-section">
                  <a class="btn-custom btn-sucess btn-bumblebee" href="bumblebee"> Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-6 home-section-block">
            <!-- 2 -->
            <div data-animation="animation-fade-in-right" class="affa-testimonial animation animated animation-fade-in-right">
              <div class="testimonial-text">
                <div class="testimonialheight">
                  <img alt="Firefly Agiletestware" class="margin-bottom15 imgfirefly" src="../../assets/images/firefly_banner_black.png" />
                  <p>ReadyAPI plugin for TestRail TCM</p>
                  <br />
                  <p>Firefly plugin allows engineering teams to easily export ReadyAPI tests and test results into TestRail and automatically create test cases, test suites, milestones, test runs, and test plans</p>
                  <br />
                </div>
                <div class="btn-section">
                  <a class="btn-custom btn-sucess btn-firefly" href="firefly"> Learn More</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-6 home-section-block">
            <!-- 2 -->
            <div data-animation="animation-fade-in-right" class="affa-testimonial animation animated animation-fade-in-right">
              <div class="testimonial-text product-listing">
                <div class="testimonialheight">
                  <img alt="Pangolin Agiletestware" class="margin-bottom15 imgfirefly" src="../../assets/images/pangolin_logo.png" />
                  <span class="corner-ribbon-tag corner-ribbon-tag-new pangolinribbontag">New</span>
                  <p>CI application plugins, and testing framework solutions for TestRail</p>
                  <br />
                  <p>Integrate Jenkins, Bamboo, TeamCity, IBM Urban Code, Selenium, Appium, JUnit, TestNG, NUnit, and Python with TestRail</p>
                  <br />
                  <br />
                </div>
                <div class="btn-section">
                  <a class="btn-custom btn-sucess btn-pangolin" href="pangolin"> Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .header-content end -->
  </header>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    gotoDragonfly() {
      this.$router.push({ name: "Dragonfly" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
