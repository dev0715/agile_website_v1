<template>
  <div id="download" class="bg-grey-ag">
    <!-- .bg-overlay -->
    <div class="bg-overlay50 wrap-container20">
      <!-- .container -->
      <div class="container">
        <div class="row row-eq-height">
          <div class="col-lg-5 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
            <h4 class="margintop40 dwn-h2">Register with Agiletestware to start using Firefly</h4>
            <p class="register_p">Register with Agiletestware to obtain a two week evaluation license for Firefly. Access to full support and all features during the evaluation period.</p>
            <div class="btn-section dwn-btn">
              <a class="btn-custom free_trial_track" style="cursor: pointer" title="Firefly Trial" @click="gotoRegisterForm()">Register</a>
            </div>
          </div>
          <div class="col-lg-5 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
            <h4 class="margintop40 dwn-h2">Download Firefly ver 2.4</h4>
            <div class="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" href="https://s3-us-west-2.amazonaws.com/agiletestware-firefly/downloads/2.4/Firefly_windows-x64_2.4.exe" class="btn-custom btn-icon firefly612_readyapi" title="Firefly">
                <i class="fa fa-download"></i> Firefly 2.4
              </a>
              <i class="fa fa-windows" style="color: #4a90e2; font-size: 30px; margin-left: 10px"></i>
            </div>
            <h4 class="margintop40 dwn-h2">Download Firefly ver 2.4 for macOS</h4>
            <div class="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" href="https://agiletestware-firefly.s3-us-west-2.amazonaws.com/downloads/2.4/Firefly_macos_2.4.dmg" class="btn-custom btn-icon firefly612_readyapi" title="Firefly for macOS">
                <i class="fa fa-download"></i> Firefly 2.4 for macOS
              </a>
              <i class="fa fa-apple" style="color: #4a90e2; font-size: 30px; margin-left: 10px"></i>
            </div>
            <h4 class="margintop40 dwn-h2">Download Firefly ver 2.0.8 for ReadyAPI 2.4.0 and older</h4>
            <div class="btn-section margin-bottom40 dwn-btn" style="float: left">
              <a
                target="_blank"
                href="https://s3-us-west-2.amazonaws.com/agiletestware-firefly/downloads/2.0.8/Firefly_windows_readyAPI_2.0.4_2.0.8.exe"
                class="btn-custom btn-icon firefly612_readyapi"
                title="Firefly for ReadyAPI 2.4.0 and older"
              >
                <i class="fa fa-download"></i> Firefly 2.0.8 for ReadyAPI 2.4.0 and older
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- .container end -->
    </div>
    <!-- .bg-overlay end -->
  </div>
</template>

<script>
export default {
  name: "Download",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    gotoRegisterForm() {
      this.$router.push({ name: "FireflyRegister" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
