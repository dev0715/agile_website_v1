<template>
  <div>
    <Introduce></Introduce>
    <Feature></Feature>
    <Feature1></Feature1>
    <Feature2></Feature2>
    <Feature3></Feature3>
    <Feature4></Feature4>
    <Feature5></Feature5>
    <Feature6></Feature6>
    <Feature7></Feature7>
    <Feature8></Feature8>
    <Feature9></Feature9>
    <Feature12></Feature12>
    <Feature10></Feature10>
    <Feature11></Feature11>
    <Pricing></Pricing>
    <Faq></Faq>
    <Download></Download>
  </div>
</template>

<script>
const Introduce = () => import("./Introduce.vue");
const Feature = () => import("./Feature.vue");
const Feature1 = () => import("./Feature1.vue");
const Feature2 = () => import("./Feature2.vue");
const Feature3 = () => import("./Feature3.vue");
const Feature4 = () => import("./Feature4.vue");
const Feature5 = () => import("./Feature5.vue");
const Feature6 = () => import("./Feature6.vue");
const Feature7 = () => import("./Feature7.vue");
const Feature8 = () => import("./Feature8.vue");
const Feature9 = () => import("./Feature9.vue");
const Feature10 = () => import("./Feature10.vue");
const Feature11 = () => import("./Feature11.vue");
const Feature12 = () => import("./Feature12.vue");
const Pricing = () => import("./Pricing.vue");
const Faq = () => import("./Faq.vue");
const Download = () => import("./Download.vue");
export default {
  name: "Content",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    Introduce,
    Feature,
    Feature1,
    Feature2,
    Feature3,
    Feature4,
    Feature5,
    Feature6,
    Feature7,
    Feature8,
    Feature9,
    Feature10,
    Feature11,
    Feature12,
    Pricing,
    Faq,
    Download,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
