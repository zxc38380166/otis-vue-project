import {
   createRouter,
   createWebHashHistory
} from 'vue-router'
import Home from '../views/Login.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
   },
   {
      path: '/login',
      component: () => import('../views/Login.vue')
   },
   {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      children: [
         {
            path: 'Products',
            component: () => import('../views/Products.vue'),
         },
         {
            path: 'Orders',
            component: () => import('../views/Orders.vue')
         },
         {
            path : 'Coupons',
            component:  ()=> import('../views/Coupons.vue')
         }
      ],
   },
   {
      path: '/User',
      component: () => import('../views/Userboard.vue'),
      children:
      [
         {
            path: 'cart',
            component: () => import('../views/Usercart.vue')
         },
         {
            path: 'product/:productId',
            component: () => import('../views/Userproducts.vue')
         },
         {
            path: 'checkout/:orderId',
            component: () => import('../views/UserCheckOut.vue')
         }
      ]
   },
   {
      path: '/UBord',
      component:  ()=>import('../views/UBord.vue'),
      children:
      [
         {
            path: 'Uproducts',
            component:  ()=>import('../views/Uproducts.vue')
         }
      ]
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router