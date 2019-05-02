import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";

// 引入 element-ui
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

// 统一元素的默认样式
import "./assets/styles/reset.css";
import "./assets/styles/main.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
