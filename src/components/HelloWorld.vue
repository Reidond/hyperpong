<template>
  <Scene class="wrapper">
    <Camera></Camera>
    <HemisphericLight diffuse="#0000FF"></HemisphericLight>
    <Entity :position="[0, 0, 5]">
      <Animation property="rotation.x" :duration="5" :end="Math.PI * 2"></Animation>
      <Animation property="rotation.y" :duration="5" :end="Math.PI * 2"></Animation>
      <Animation property="rotation.z" :duration="5" :end="Math.PI * 2"></Animation>
      <PointLight diffuse="#FF0000"></PointLight>
      <template v-for="x in [0, 4, -4]">
        <template v-for="y in [0, 4, -4]">
          <Box v-for="z in [0, 4, -4]" :key="`${x},${y},${z}`" :position="[x, y, z]"></Box>
        </template>
      </template>
    </Entity>
  </Scene>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
});
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  overflow: hidden;
}
</style>
