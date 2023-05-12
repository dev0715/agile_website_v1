<template>
  <div>
    <Header></Header>
    <Technology></Technology>
    <Software></Software>
  </div>
</template>

<script>
const Header = () => import("./Partners/Header.vue");
const Technology = () => import("./Partners/Technology.vue");
const Software = () => import("./Partners/Software.vue");
export default {
  name: "Partners",
  data() {
    return {};
  },
  components: {
    Header,
    Technology,
    Software,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
