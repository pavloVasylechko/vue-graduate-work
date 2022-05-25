import Vue from 'vue'
import VueRouter from 'vue-router'
import vHome from '../views/v-home.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome,
    meta:{auth:true}
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/v-login')
  },
  {
    path: '/registration',
    name: 'registration',
    component: ()=> import('../views/v-registration')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  const user = firebase.auth().currentUser
  const requireAuth = to.matched.some(record=>record.meta.auth)

  if(requireAuth && !user){
    next('/login?message=login')
  } else{
    next()
  }
})

export default router
