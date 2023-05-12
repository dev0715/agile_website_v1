<template>
  <div id="features" class="wrap-container8040">
    <!-- .container -->
    <div class="container">
      <!-- .row -->
      <div class="row head-images text-center animation animated animation-fade-in-up">
        <div class="margin-bottom40">
          <div class="text-center">
            <h2 class="home-cmp">Our products are used by <span>over 200 great companies</span> around the world</h2>
          </div>
        </div>
        <div class="row margin-bottom40">
          <div id="testimonial-slider" class="owl-carousel">
            <div class="testimonial">
              <div class="pic">
                <img src="../../assets/img/user-avatar.jpg" alt="user avatar" />
              </div>
              <p class="description">
                "We started using Dragonfly from Agiletestware since 2013 and it's been a great tool to export SoapUI/ReadyAPI tests results to HP-ALM Quality Center. But more important is their customer support that goes above and beyond
                to provide a flawless service and tool integration."
              </p>
              <h3 class="title">Sebastian Schrader</h3>
              <small class="post">- Interval International</small>
            </div>
            <div class="testimonial">
              <div class="pic">
                <img src="../../assets/img/user-avatar.jpg" alt="user avatar" />
              </div>
              <p class="description">
                "We started using Dragonfly from Agiletestware since 2013 and it's been a great tool to export SoapUI/ReadyAPI tests results to HP-ALM Quality Center. But more important is their customer support that goes above and beyond
                to provide a flawless service and tool integration."
              </p>
              <h3 class="title">Sebastian Schrader</h3>
              <small class="post">- Interval International</small>
            </div>
          </div>
        </div>
      </div>

      <div class="row head-images-ag-sp six-columns">
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/HPE.png" alt="HPE" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/Air_France.jpg" alt="airfrance" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/FedEx-Logo.png" alt="fedex" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/intel-logo.png" alt="Intel" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/kmdlogosvgsvg.svg" alt="KMD" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/mckesson.jpg" alt="mckesson" /></div>
      </div>
      <div class="row head-images-ag-sp six-columns">
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/barclays.png" alt="barclays" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/logo-visa.png" alt="visa" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/lufthansa.png" alt="lufthansa" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/logo-accenture.png" alt="accenture" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/Fiserv.png" alt="Fiserv" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/Maersk_Logo.svg.png" alt="Maersk" /></div>
      </div>
      <div class="row head-images-ag-sp six-columns margin-bottom40">
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/telenor.png" alt="telenor" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/telus.png" alt="telus" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/Vodaphone.png" alt="Vodaphone" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/Amgen.jpg" alt="Amgen" /></div>
        <div class="margin-bottom20 image-div-sp"><img src="../../assets/img/verizon.jpg" alt="verizon" /></div>
        <div class="margin-bottom20 image-div-sp image-div-sp-last">200+</div>
      </div>
    </div>
    <!-- .row end -->
  </div>
</template>

<script>
export default {
  name: "HomeFeatures",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  created() {},
  mounted() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [990, 1],
      itemsTablet: [768, 1],
      pagination: true,
      navigation: false,
      navigationText: ["", ""],
      slideSpeed: 1000,
      autoPlay: true,
    });
    $("#testimonial-slider").trigger("play.owl.autoplay", [1000]);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
