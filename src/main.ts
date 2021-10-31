import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Compfy from "./plugin";
import "./sass/index.scss";

Vue.config.productionTip = false;
Vue.use(Compfy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
