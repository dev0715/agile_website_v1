<template>
  <div id="download">
    <!-- .bg-overlay -->
    <div class="bg-overlay50 wrap-container20 dragonfly-download">
      <!-- .container -->
      <div class="container">
        <div class="row row-eq-height">
          <div class="col-lg-5 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
            <h4 class="margintop40 dwn-h2">Register with Agiletestware to start using Dragonfly</h4>
            <p class="register_p">Register with Agiletestware to obtain a two week evaluation license for dragonfly. Access to full support and all features during evaluation.</p>
            <div class="btn-section dwn-btn">
              <a class="btn-custom free_trial_track" style="cursor: pointer" title="Dragonfly Trial" @click="gotoRegisterForm()">Free Trial</a>
            </div>
          </div>
          <div class="col-lg-5 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
            <h4 class="margintop40 dwn-h2">Download dragonfly ver 6.1.7 for ReadyAPI</h4>
            <div class="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" href="https://s3-us-west-2.amazonaws.com/agiletestware-dragonfly/downloads/6.1.7/dragonfly-readyapi-ver-6.1.7.exe" class="btn-custom btn-icon dragonfly612_readyapi" title="Dragonfly ReadyAPI"
                ><i class="fa fa-download"></i> Dragonfly 6.1.7 for ReadyAPI</a
              >
            </div>
            <h4 class="dwn-h2">Download dragonfly ver 6.1.7 for ReadyAPI 2.4.0 and older versions of ReadyAPI</h4>
            <div class="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" href="https://s3-us-west-2.amazonaws.com/agiletestware-dragonfly/downloads/6.1.7/dragonfly-readyapi-2.4.0-ver-6.1.7.exe" class="btn-custom btn-icon dragonfly550" title="Dragonfly Legacy"
                ><i class="fa fa-download"></i> Dragonfly 6.1.7 for ReadyAPI 2.4.0</a
              >
            </div>
            <h4 class="dwn-h2">Download dragonfly ver 6.1.5 for SoapUI Open Source 5.3.0 and higher</h4>
            <div class="btn-section margin-bottom40 dwn-btn">
              <a target="_blank" href="https://s3-us-west-2.amazonaws.com/agiletestware-dragonfly/downloads/6.1.5/dragonfly-soapui-ver-6.1.5.exe" class="btn-custom btn-icon dragonfly612_os" title="Dragonfly soapUI OS"
                ><i class="fa fa-download"></i> Dragonfly 6.1.5 for SoapUI OS</a
              >
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
      this.$router.push({ name: "DragonRegister" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
