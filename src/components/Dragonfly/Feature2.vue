<template>
  <div id="features3" class="wrap-container400 bg-grey-ag">
    <!-- .container -->
    <div class="container">
      <!-- .row -->
      <div class="row vertical-align">
        <div class="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 hidden-xs">
          <figure class="margin-bottom40">
            <img src="../../assets/images/dragonfly/dragonfly_realtime_updates.png" alt="Realtime Updates" />
          </figure>
        </div>
        <div class="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
          <div class="margin-bottom20">
            <div class="margin-bottom20">
              <h2 class="head-h2">Real-time Updates</h2>
              <p>Automatically send all test results from ReadyAPI to HP ALM without having to lift a finger</p>
            </div>
            <div class="list-row">
              <ul class="list-icon">
                <li><i class="fa fa-check"></i>Dragonfly automatically captures test status, teststep details, groovy logs, and much more</li>
                <li><i class="fa fa-check"></i>Information from ReadyAPI is processed and sent to HP ALM at the end of each testcase run</li>
                <li><i class="fa fa-check"></i>View streaming test results status in ReadyAPI logs</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 visible-xs">
          <figure class="margin-bottom40">
            <img src="../../assets/images/dragonfly/dragonfly_realtime_updates.png" alt="Realtime Updates" />
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
  name: "Feature2",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
