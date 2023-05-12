<template>
  <div class="agiletestware_body">
    <Header></Header>
    <Content v-if="$route.name === 'Dragonfly'"></Content>
    <router-view v-if="$route.name === 'DragonRegister'"></router-view>
  </div>
</template>

<script>
const Header = () => import("./Dragonfly/Header.vue");
const Content = () => import("./Dragonfly/Content.vue");
export default {
  name: "Dragonfly",
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
    title: "Dragonfly | ReadyAPI and soapUI plugin for HP ALM",
    titleTemplate: "%s | Agiletestware",
    meta: [{ vmid: "description", name: "description", content: "Dragonfly is a Powerful and Flexible tool for integrating ReadyAPI with HP ALM. Supports all versions of ReadyAPI and HP ALM. Download now." }],
    links: [{ rel: "canonical", href: "https://www.agiletestware.com/dragonfly" }]
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
