import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from "../views/Category.vue"
import Detail from "../views/Detail.vue"
import SignUp from "../views/SignUp.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/car/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
