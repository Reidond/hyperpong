<template>
  <div id="app">
    <scene1 />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Scene1 from './scenes/Scene1.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Scene1,
  },
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
