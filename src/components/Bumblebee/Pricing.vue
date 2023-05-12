<template>
  <div id="pricing" class="wrap-container400 bg-pricing-bk">
    <!-- .container -->
    <div class="container">
      <div class="tbl-pricing tbl-prc-recommended">
        <!-- .row -->
        <div class="row">
          <div class="col-sm-12 col-lg-6-pri col-md-offset-3 tbl-prc-col tbl-prc-col-org pricing-item2 text-center-sm" data-animation="animation-fade-in-down" data-delay="600">
            <!-- 2 -->
            <div class="tbl-prc-wrap">
              <div class="tbl-prc-heading">
                <h4>Enterprise License</h4>
              </div>
              <div class="tbl-prc-price">
                <h5>Contact Us</h5>
              </div>
              <hr style="color: #00f; border-top: 2px solid #d4c6c6" />
              <ul class="tbl-prc-list enter-prise" style="max-width:440px; margin-left: auto !important; margin-right:auto;">
                <li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Defect Management workflows (coming soon)</li>
                <li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Email and GoToMeeting Support</li>
                <li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;48 hour support SLA</li>
                <li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Unlimited users/machines</li>
                <li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Unlimited tests uploads/day</li>
                <!--<li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;HP Defect Management integration</li>-->
                <li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Customized workflows and features</li>
                <li><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Prioritized bug fixes and feature requests</li>
              </ul>
              <div class="tbl-prc-footer">
                <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2" class="btn-custom btn-purchase">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <!-- .row end -->
      </div>
    </div>
    <!-- .container end -->
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  created() {
    $(document).ready(function () {
      var animatePricingFunc = function () {
        /* Check the location of each desired element */
        $(".pricing-item1").each(function (i) {
          var top_of_object = $(this).offset().top;
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var top_of_window = $(window).scrollTop();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window > top_of_object && top_of_window < bottom_of_object && $(this).css("visibility") == "hidden") {
            $(this).css("visibility", "visible");
            $(this).animate(
              {
                opacity: 1,
                left: "-=30px",
              },
              1000
            );
          }
        });

        $(".pricing-item2").each(function (i) {
          var top_of_object = $(this).offset().top;
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var top_of_window = $(window).scrollTop();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is partially visible in the window, fade it it */
          if (bottom_of_window > top_of_object && top_of_window < bottom_of_object && $(this).css("visibility") == "hidden") {
            $(this).css("visibility", "visible");
            $(this).animate(
              {
                opacity: 1,
                right: "-=30px",
              },
              1000
            );
          }
        });
      };

      $(window).load(animatePricingFunc);
      $(window).scroll(animatePricingFunc);
    });
  },
  mounted() {},
  methods: {
    gotoRegisterForm() {
      this.$router.push({ name: "BumblebeeRegister" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pricing-item1 {
  opacity: 0;
  visibility: hidden;
}
.pricing-item2 {
  opacity: 0;
  visibility: hidden;
}
</style>
