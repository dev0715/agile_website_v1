<template>
  <div id="testimonials" class="wrap-container60 bg-grey-ag">
    <!-- .container -->
    <div class="container">
      <div class="">
        <h2 class="head-h2">What Our's Clients Says</h2>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div id="testimonial-slider" class="owl-carousel">
            <div class="testimonial">
              <div class="content">
                <p class="description">
                  "We started using Dragonfly from Agiletestware since 2013 and it's been a great tool to export SoapUI/ReadyAPI tests results to HP-ALM Quality Center. But more important is their customer support that goes above and beyond
                  to provide a flawless service and tool integration."
                </p>
              </div>
              <div class="testimonial-pic">
                <img src="../../assets/images/user-avatar.jpg" alt="user avatar" />
              </div>
              <div class="testimonial-review">
                <h3 class="testimonial-title">Sebastian Schrader</h3>
                <span>Interval International</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .row -->
    <!-- .container end -->
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    $("#testimonial-slider").owlCarousel({
      items: 1,
      itemsDesktop: [1000, 3],
      itemsDesktopSmall: [990, 2],
      itemsTablet: [767, 1],
      pagination: true,
      navigation: false,
      autoPlay: true,
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
