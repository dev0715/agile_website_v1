<template>
  <div id="download" class="bg-grey-ag">
    <!-- .bg-overlay -->
    <div class="bg-overlay50 wrap-container20">
      <!-- .container -->
      <div class="container">
        <div class="row row-eq-height">
          <div class="col-lg-6 col-sm-12 col-lg-offset-0 col-md-6 col-sm-offset-0 col-md-offset-0">
            <h4 class="margintop20 dwn-h2 download-normal">Register for a risk free 14 days free trial. Access to Enterprise Support during the evaluation period.</h4>
            <div class="btn-section dwn-btn single-button">
              <a target="_blank" class="btn-custom free_trial_track" title="Pangolin Trial" @click="gotoRegisterForm()" style="cursor: pointer">Register - Free Trial</a>
            </div>
            <h4 class="margintop40 dwn-h2 download-normal">Step 1: Download Pangolin Server ver: 3.4</h4>
            <div class="btn-section margin-bottom20 dwn-btn">
              <a target="_blank" href="https://s3-us-west-2.amazonaws.com/agiletestware-pangolin/3.5/pangolin-windows-x64-3.5.exe" class="btn-custom btn-icon pangolin612_readyapi" title="Pangolin Server"
                ><i class="fa fa-download"></i>Pangolin Server ver: 3.5</a
              >
              <i class="fa fa-windows" style="color: #4a90e2; font-size: 30px; margin-left: 10px"></i>
            </div>
            <div class="btn-section margin-bottom40 dwn-btn">
              <a href="https://s3-us-west-2.amazonaws.com/agiletestware-pangolin/3.5/pangolin-unix-3.5.tar.gz" class="btn-custom btn-icon pangolin612_readyapi" title="Pangolin Server for Linux"
                ><i class="fa fa-download"></i>Pangolin Server ver: 3.5</a
              >
              <img src="../../assets/images/bumblebee/linux-logo_preview.png" class="linux-logo" />
            </div>
            <h4 class="margintop40 dwn-h2 download-normal">Step 2A: Install Jenkins plugin</h4>
            <div class="btn-section margin-bottom40 dwn-btn button-center">
              <img src="../../assets/images/jenkins_logo.png" style="width: 40px; margin-right: 10px" />
              <a target="_blank" href="https://plugins.jenkins.io/pangolin-testrail-connector" class="btn-custom btn-icon pangolin612_readyapi" title="Pangolin Jenkins"><i class="fa fa-download"></i>Jenkins Update Center</a>
            </div>
            <h4 class="margintop40 dwn-h2 download-normal">Step 2B: Install Bamboo add-on from atlassian market place</h4>
            <div class="btn-section margin-bottom40 dwn-btn button-center">
              <img src="../../assets/images/bamboo-logo_preview.png" style="margin-left: -22px" />
              <a
                target="_blank"
                href="https://s3-us-west-2.amazonaws.com/public.maven.agiletestware.com/release/com/agiletestware/bamboo/pangolin-testrail-connector/2.5/pangolin-testrail-connector-2.5.jar"
                class="btn-custom btn-icon pangolin612_readyapi"
                title="Pangolin Bamboo"
                ><i class="fa fa-download"></i>Bamboo Add-on</a
              >
            </div>
            <h4 class="margintop40 dwn-h2 download-normal">Step 2C: Install TeamCity plugin</h4>
            <div class="btn-section margin-bottom40 dwn-btn button-center">
              <img src="../../assets/images/teamcity-logo_preview.png" class="teamcity-logo" />
              <a
                target="_blank"
                href="https://nexus.agiletestware.com/repository/maven-public/com/agiletestware/teamcity/pangolin-testrail-connector-build/2.6/pangolin-testrail-connector-build-2.6.zip"
                class="btn-custom btn-icon pangolin612_readyapi"
                title="Pangolin TeamCity"
                ><i class="fa fa-download"></i>TeamCity Plugin</a
              >
            </div>
            <h4 class="margintop40 dwn-h2 download-normal">Step 2D: Install IBM UrbanCode plugin</h4>
            <div class="btn-section margin-bottom40 dwn-btn button-center">
              <img src="../../assets/images/ibm-logo.png" style="margin-right: 10px" />
              <a target="_blank" href="https://s3-us-west-2.amazonaws.com/agiletestware-pangolin/2.4/urbancode-pangolin-testrail-connector-2.4.zip" class="btn-custom btn-icon pangolin612_readyapi" title="Pangolin UrbanCode"
                ><i class="fa fa-download"></i>IBM UrbanCode Plugin</a
              >
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
            <h4 class="margintop40 dwn-h2">Jenkins User Guide</h4>
            <div class="btn-section dwn-btn single-button">
              <a target="_blank" href="./docs/pangolin-docs/en/latest/ci-integration/jenkins/" class="btn-custom btn-icon free_trial_track" title="Jenkins Docs"><i class="fa fa-book"></i>Jenkins Docs</a>
            </div>
            <h4 class="margintop40 dwn-h2">Bamboo User Guide</h4>
            <div class="btn-section dwn-btn">
              <a target="_blank" href="./docs/pangolin-docs/en/latest/ci-integration/bamboo" class="btn-custom btn-icon free_trial_track" title="Bamboo Docs"><i class="fa fa-book"></i>Bamboo Docs</a>
            </div>
            <h4 class="margintop40 dwn-h2">TeamCity User Guide</h4>
            <div class="btn-section dwn-btn">
              <a target="_blank" href="./docs/pangolin-docs/en/latest/ci-integration/teamcity" class="btn-custom btn-icon free_trial_track" title="TeamCity Docs"><i class="fa fa-book"></i>TeamCity Docs</a>
            </div>
            <h4 class="margintop40 dwn-h2">IBM Urban Code User Guide</h4>
            <div class="btn-section dwn-btn">
              <a target="_blank" href="./docs/pangolin-docs/en/latest/ci-integration/urbancode" class="btn-custom btn-icon free_trial_track" title="Urban Code Docs"><i class="fa fa-book"></i>Urban Code Docs</a>
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
      this.$router.push({ name: "PangolinRegister" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
