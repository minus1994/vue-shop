import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/login.vue"
import Home from "../views/home.vue"
import Pie from "../views/pie.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/pie',
    component:Pie
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next()
  const tokenStr=window.sessionStorage.getItem("token")
  if(!tokenStr) return next('/login')
  next()
})

export default router