import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCookies from 'vue-cookies'
import router from "./routers/Router";
import store from "./settings/VuexStore";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookies);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
