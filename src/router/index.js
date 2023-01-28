import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue')
  },
  // ,
  // {
  //   path: '/create',
  //   name: 'ProductCreate',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ProductCreate.vue')
  // },
  // {
  //   path: '/update',
  //   name: 'ProductUpdate',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ProductUpdate.vue')
  // },
  {
    path: '/sales',
    name: 'SalesList',
    component: () => import(/* webpackChunkName: "about" */ '../views/SalesList.vue')
  }//,
  // {
  //   path: '/image_insert',
  //   name: 'ImageInsert',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ImageInsert.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
