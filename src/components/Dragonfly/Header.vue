<template>
  <header id="header">
    <!-- #navigation -->
    <nav id="navigation" class="navbar">
      <!-- .container -->
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse-1">
            <span class="sr-only">Menu</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand">
            <a href="/dragonfly#header">
              <img src="../../assets/images/dragonfly_logo_home.png" alt="Agiletestware" class="hidden-xs" />
              <img src="../../assets/images/dragonfly_logo.png" alt="Agiletestware" class="visible-xs" />
            </a>
          </div>
          <!-- site logo -->
          <div class="navbar-brand pull-right visible-xs" style="padding-right: 16px">
            <a href="/"><i class="fa fa-home" style="font-size: 32px; color: #fff"/></a>
          </div>
          <!-- home button -->
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="menu-collapse-1">
          <ul class="nav navbar-nav navbar-right" style="overflow: visible">
            <li class="hidden-xs">
              <a href="/"><i class="fa fa-home" style="font-size: 20px"/></a>
            </li>
            <li><a v-bind:href="'/dragonfly#features'" class="smooth-scroll">Features</a></li>
            <li><a href="/docs/dragonfly-docs/en/latest/" target="_blank" class="smooth-scroll">Docs</a></li>
            <li><a href="/dragonfly#pricing" class="smooth-scroll" @click="animationPricing()">Pricing</a></li>
            <li><a href="/dragonfly#download" class="smooth-scroll">Download</a></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Support <span class="caret"></span></a>
              <ul class="dropdown-menu" style="margin-top: -5px">
                <li><a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">Contact Us</a></li>
                <li><a href="https://www.agiletestware.com/partners">Partners</a></li>
              </ul>
            </li>
            <li class="trial-cta"><a class="free_trial_track" style="cursor: pointer" title="Dragonfly Trial" @click="gotoRegisterForm()">Free Trial</a></li>
          </ul>
        </div>
      </div>
      <!-- .container end -->
    </nav>
    <!-- #navigation end -->
    <!-- .header-content -->
    <div class="header-content" v-if="$route.name === 'Dragonfly'">
      <!-- .container -->
      <div class="container">
        <!-- .row -->
        <div class="row header-text-dragonfly">
          <div class="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
            <div class="margin-top40 margin-bottom40">
              <div class="">
                <h1 class="agh1">Dragonfly is a Powerful and Flexible tool for integrating ReadyAPI with HP ALM</h1>
              </div>
              <div class="btn-section">
                <a class="btn-custom btn-freetrial free_trial_track" style="cursor: pointer" title="Dragonfly Trial" @click="gotoRegisterForm()"> Free Trial</a>
                <a class="btn-custom btn-dwn" href="#download"><!--<i class="fa fa-download"></i> -->Download</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 headerimage1"></div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .header-content end -->
  </header>
</template>
<script>
export default {
  name: "DragonflyHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {},
  methods: {
    gotoRegisterForm() {
      this.$router.push({ name: "DragonRegister" });
    },
    gotoSection(section) {
      this.$router.push("/about");
    },
    animationPricing() {
      // $(".animation").css('visibility', 'visible');
    }
  }
};
</script>
