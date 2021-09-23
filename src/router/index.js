import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: 'main',
    }
  },
  {
    path: "/products",
    name: "Products",
    component: () => import('../views/Products.vue'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () => import('../views/Product.vue'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import('../views/About.vue'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import('../views/Cart.vue'),
    meta: {
      layout: 'main',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
