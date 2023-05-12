<template>
  <div class="homebody agiletestwarehome_body">
    <Header></Header>
    <Features></Features>
    <Footer></Footer>
  </div>
</template>

<script>
const Header = () => import("./Home/Header.vue");
const Features = () => import("./Home/Features.vue");
const Footer = () => import("./Home/Footer.vue");
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    Header,
    Features,
    Footer,
  },
  metaInfo: {
    title: "Agiletestware - Software for QA and Development Tools",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Agiletestware provides tools for integrating QA and Dev tools and frameworks with HP ALM. Quality Center, and Gurock TestRail. Our products can integrate soapUI, ReadyAPI, Jenkins, Bamboo, Teamcity, Selenium JUnit, NUNIT, Python, Ruby, and a host of other testing frameworks with HP ALM and Gurock TestRail.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.agiletestware.com" }],
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
