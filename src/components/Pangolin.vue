<template>
  <div class="agiletestware_body pangolin">
    <Header></Header>
    <Content v-if="$route.name === 'Pangolin'"></Content>
    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <p>Pangolin is now Railflow!</p>
      </template>
      <template v-slot:text>
        <p>We are pleased to announce that Pangolin has been redesigned from the ground up and is now called <a href="https://railflow.io/">Railflow.</a></p>
        <p>Reason why we did this:</p>
        <ol>
          <li>Simplify the overall installation. (Railflow requires no server!)</li>
          <li>Support for all CICD systems like Jenkins, TeamCity, Github, Gitlab, CircleCI etc.</li>
          <li>New and improved pricing and licensing options.</li>
          <li>Tons of new features and capabilities.</li>
        </ol>
      </template>

      <template v-slot:image>
        <a href="https://railflow.io/">
          <img src="../assets/images/pangolin/pangolin_railflow.jpg" alt="Pangolin is now Railflow" />
        </a>
      </template>
    </Modal>
    <router-view v-if="$route.name === 'PangolinRegister'"></router-view>
  </div>
</template>

<script>
const Header = () => import("./Pangolin/Header.vue");
const Content = () => import("./Pangolin/Content.vue");
const Modal = () => import("./Pangolin/Modal.vue");
export default {
  name: "Pangolin",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isModalVisible: true
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  components: {
    Header,
    Content,
    Modal
  },
  created() {
    console.log(this.$route.name);
  },
  metaInfo: {
    title: "Pangolin | CI application plugins, and testing framework solutions for TestRail",
    titleTemplate: "%s | Agiletestware",
    meta: [{ vmid: "description", name: "description", content: "Pangolin is a CI application plugins, and testing framework solutions for TestRail. It provides Codeless integration with Jenkins, Bamboo, TeamCity and IBM UrbanCode." }],
    links: [{ rel: "canonical", href: "https://www.agiletestware.com/pangolin" }]
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
