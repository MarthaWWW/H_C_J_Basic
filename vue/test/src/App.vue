<template>
  <div>
    hello
    <!-- 路由容器 -->
    <!--vue-router3 -1-声明式导航-->
    <!--vue-router4 -1-声明式导航,不支持tag，写法很烦-->
    
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
  <!-- 不能有两个div节点 -->
</template>

<script>
import tabbar from '@/components/Tabbar'
//Vue.component('navbar', navbar)
export default {
  data () {
    return {
     
    }
  },
  components:{
    tabbar
  }
  
}
</script>

<style lang="scss" >
// scss支持嵌套式和参数式写法
//父组件在style标签中后插入，会覆盖子组件的样式,使用scope属性使其局部化
  *{
    margin:0;
    padding:0;
  }
  ul{
    li{
      list-style: none;
    }
  }

  .marthaactive{
    color:red;
  }
</style>
