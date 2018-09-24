import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  created () {
    }
})
