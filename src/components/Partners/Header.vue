<template>
  <header id="header" class="header-page text-center">
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
            <a href="/"><img src="../../assets/images/agiletestware_logo.png" alt="Agiletestware" /></a>
          </div>
          <!-- site logo -->
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <!--
        <div class="collapse navbar-collapse" id="menu-collapse-1">
          <ul class="nav navbar-nav navbar-right"> 
            <li><a href="/">Home</a></li>
          </ul>
        </div>  -->
      </div>
      <!-- .container end -->
    </nav>
    <!-- #navigation end -->
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
