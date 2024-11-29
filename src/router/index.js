import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomeView.vue"),
  },
  {
    path: "/product-page",
    name: "product-page",
    component: () => import("@/pages/ProductPage.vue")
  },
  {
    path: "/collection-page",
    name: "CollectionPage",
    component: () => import("@/pages/CollectionPage.vue")
  },
  {
    path: '/cart-page',
    name: 'CartPage',
    component: () => import('@/pages/CartPage.vue')
  },
  {
    path: '/wishlist-page',
    name: 'WishlistPage',
    component: () => import('@/pages/WishlistPage.vue')
  },
  // {
  //   path: '/address-page',
  //   name: 'AddressPage',
  //   component: () => import('@/pages/cart/AddressPage.vue')
  // },
  // {
  //   path: '/payment-page',
  //   name: 'PaymentPage',
  //   component: () => import('@/pages/cart/PaymentPage.vue')
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
