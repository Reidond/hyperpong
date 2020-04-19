import Vue from 'vue';
import VueBabylon from 'vue-babylonjs';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueBabylon);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
