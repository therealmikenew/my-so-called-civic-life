import Vue from "vue";
import VueRouter from "vue-router";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(Vuesax);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
