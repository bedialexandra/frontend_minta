<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <open-page></open-page>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import OpenPage from "./components/OpenPage.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    OpenPage
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
