import Vue from 'vue'// ES6 导入方式
import App from './App.vue'// 导入根组件App
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store'
// 此文件是项目的入口
// 项目中唯一不能改的文件
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,   // 实例化会自动挂载一个router属性
  // this.$router === router
  // 内部的push方法可以实现各种跳转
  // store,
  render: h => h(App)// render渲染
}).$mount('#app')

// 渲染完实例后挂载在app组件
