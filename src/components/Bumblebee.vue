<template>
  <div class="agiletestware_body bumblebee">
    <Header></Header>
    <Content v-if="$route.name === 'Bumblebee'"></Content>
    <router-view v-if="$route.name === 'BumblebeeRegister'"></router-view>
  </div>
</template>

<script>
const Header = () => import("./Bumblebee/Header.vue");
const Content = () => import("./Bumblebee/Content.vue");
export default {
  name: "Bumblebee",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Header,
    Content
  },
  metaInfo: {
    title: "Bumblebee | HP ALM and HP Performance Center DevOps Enablement Platform",
    titleTemplate: "%s | Agiletestware",
    meta: [
      { vmid: "description", name: "description", content: "Continuous Delivery with HP ALM, HP Performance Center and Jenkins, Bamboo, Teamcity, IBM Urban Code. Flexible and Powerful Integration with Selenium Webdriver and HP ALM." }
    ],
    links: [{ rel: "canonical", href: "https://www.agiletestware.com/bumblebee" }]
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
