import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./util/init/index"; //初始化一些js插件 加载 fastclick ,初始化rem 相关参数配置

// 初始化css
import "./assets/style/normalize.css";
import "./assets/style/common.css"; //解决浏览器
import "./assets/style/base.css"; //公共业务样式

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
