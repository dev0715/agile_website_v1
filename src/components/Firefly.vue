<template>
  <div class="agiletestware_body firefly">
    <Header></Header>
    <Content v-if="$route.name === 'Firefly'"></Content>
    <router-view v-if="$route.name === 'FireflyRegister'"></router-view>
  </div>
</template>

<script>
const Header = () => import("./Firefly/Header.vue");
const Content = () => import("./Firefly/Content.vue");
export default {
  name: "Firefly",
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
    title: "Firefly | ReadyAPI plugin for TestRail TCM",
    titleTemplate: "%s | Agiletestware",
    meta: [
      { vmid: "description", name: "description", content: "Meet Firefly, Powerful ReadyAPI plugin for TestRail integration. Integrate ReadyAPI and TestRail with simple configs. Supports all versions of soapUI, ReadyAPI and TestRail." }
    ],
    links: [{ rel: "canonical", href: "https://www.agiletestware.com/firefly" }]
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
