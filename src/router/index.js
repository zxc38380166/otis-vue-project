import {
   createRouter,
   createWebHashHistory
} from 'vue-router'
const routes = [
   {
      path: '/',
      name: 'Home',
      component: ()=> import('../views/ServerLogin.vue'),
   },
   {
      path: '/ServerLogin',
      component: () => import('../views/ServerLogin.vue')
   },
   {
      path: '/ServerBoard',
      component: () => import('../views/ServerBoard.vue'),
      children: [
         {
            path: 'ServerProducts',
            component: () => import('../views/ServerProducts.vue'),
         },
         {
            path: 'ServerOrders',
            component: () => import('../views/ServerOrders.vue')
         },
         {
            path : 'ServerCoupons',
            component:  ()=> import('../views/ServerCoupons.vue')
         }
      ],
   },
   {
      path: '/Base',
      component: () => import('../views/Baseboard.vue'),
      children:
      [
         {
            path: 'BaseCart',
            component: () => import('../views/BaseCart.vue')
         },
         {
            path: 'BaseProducts/:BaseProductsId',
            component: () => import('../views/BaseProducts.vue')
         },
         {
            path: 'checkout/:orderId',
            component: () => import('../views/BaseCheckOut.vue')
         }
      ]
   },
   {
      path: '/UserBoard',
      component:  ()=>import('../views/UserBoard.vue'),
      children:
      [
         {
            path: 'UserProducts',
            component:  ()=>import('../views/UserProducts.vue')
         },
         {
            path:'UserCheckOut',
            component:()=>import('../views/UserCheckOut.vue')
         }
      ]
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router