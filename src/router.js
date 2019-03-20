import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Category},
    {path: '/login', component: Login}
  ]
})

export default router
