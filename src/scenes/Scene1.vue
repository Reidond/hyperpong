<template>
  <Scene ref="scene" @scene="sceneAvailable">
    <Camera
      type="free"
      :target="camera.target"
      :position="camera.position"
      :alpha="camera.apha"
      :beta="camera.beta"
    ></Camera>
    <HemisphericLight :direction="light.direction"></HemisphericLight>
    <Asset src="/models/raquet_01.glb" />
    <Asset src="/models/raquet_02.glb" :position="[0, 0, -1]" :rotation="[0, Math.PI, 0]" />
    <Asset src="/models/table.glb" :position="[0, 0, -6]" />
    <Asset src="/models/ball.glb" :position="[0, 0, -3]" />
  </Scene>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Vector3,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Color3,
  Texture,
  Scene,
} from 'babylonjs';

export default Vue.extend({
  data() {
    return {
      camera: {
        target: new Vector3(1, Math.PI, 0),
        position: new Vector3(-1.516935404982702, 1.3012184232883162, -1.239267893201698),
        alpha: -1.5707963267948966,
        beta: 1.5707963267948966,
      },
      light: {
        direction: new Vector3(1, 0.5, 0),
      },
    };
  },
  computed: {
    sceneRef() {
      return this.$refs.scene;
    },
  },
  methods: {
    sceneAvailable(scene: Scene) {
      this.createSkybox(scene);
    },
    createSkybox(scene: Scene) {
      const skybox = MeshBuilder.CreateBox('skyBox', { size: 1000.0 }, scene);
      const skyboxMaterial = new StandardMaterial('skyBox', scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.reflectionTexture = new CubeTexture('/textures/skybox', scene);
      skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
      skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
      skyboxMaterial.specularColor = new Color3(0, 0, 0);
      skybox.material = skyboxMaterial;
    },
  },
});
</script>

<style scoped></style>
