import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import Cinemas from '@/views/Cinemas.vue'
import Center from '@/views/Center.vue'
import Detail from '@/views/Detail.vue'
import Nowplaying from '@/views/films/Nowplaying.vue'
import Comingsoon from '@/views/films/Comingsoon.vue'


Vue.use(VueRouter) // 注册路由插件
// 配置表,匹配是按照顺序进行的
const routes = [
  {
    path:'/films',
    component:Films,
    children:[
    {
      path:'/films/nowplaying',
      component:Nowplaying
    },

    {
      path:'/films/comingsoon',
      component:Comingsoon
    },
  
    {
      path:'/films',
      redirect:'/films/nowplaying'
    }
  ]
  },

  {
    name: "marthaDetail",
    path:'/detail/:id',// 动态二级路由，获取传过来的id,注意属性命名要一致
    component:Detail
  },

  {
    path:'/cinemas',
    component:Cinemas
  },

  {
    path:'/center',
    component:Center
  },
  // 重定向
  {
    path: '/',
    redirect: '/films'
  },

  // {
  //   path: '*'
  //   redirect: '/films'
  // }
  //如何实现点击跳转
]

const router = new VueRouter({
  mode:"history",
  routes

})

// 全局拦截
// router.beforeEach((to,from,next)=>
// {
//   console.log(to)
//   // next 不限定拦截,继续放行，对情况进行选择
//   if(某几个需要授权的路由)
//   {
//     if(授权通过)
//     {
//       next()
//     }
//     else
//     {
//       next('/login')
//     }
//   }
//   else
//   next()
// })

export default router
