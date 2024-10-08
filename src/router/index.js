import Vue from 'vue'
import VueRouter from 'vue-router';
import UserName from '../views/UserName.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user-name'
  },
  {
    path: '/user-name',
    name: 'UserName',
    component: UserName
  },
  {
    path: '/user-birth',
    name: 'UserBirth',
    component: () => import('../views/UserBirth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router