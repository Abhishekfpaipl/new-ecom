import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomeView.vue"),
  },
  {
    path: "/product-page/:productId",
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
  {
    path: '/contact-us',
    name: 'ContactPage',
    component: () => import('@/pages/ContactPage.vue')
  },
  {
    path: '/about-us',
    name: 'AboutPage',
    component: () => import('@/pages/AboutPage.vue')
  },
  {
    path: '/gifts',
    name: 'GiftPage',
    component: () => import('@/pages/GiftPage.vue')
  },
  {
    path: '/jewellery-care',
    name: 'JewelleryCare',
    component: () => import('@/pages/JewelleryCare.vue')
  },
  {
    path: '/terms',
    name: 'TermsAndConditions',
    component: () => import('@/pages/TermsAndConditions.vue')
  },
  {
    path: '/returns-and-refunds',
    name: 'ReturnAndRefunds',
    component: () => import('@/pages/ReturnAndRefunds.vue')
  },
  {
    path: '/warranty',
    name: 'WarrantyPolicies',
    component: () => import('@/pages/WarrantyPolicies.vue')
  },
  {
    path: '/shipping-policy',
    name: 'ShippingPolicy',
    component: () => import('@/pages/ShippingPolicy.vue')
  },
  {
    path: '/account',
    name: 'AccountPage',
    component: () => import('@/pages/AccountPage.vue')
  },
  {
    path: '/address',
    name: 'AddressPage',
    component: () => import('@/pages/AddressPage.vue')
  },
  {
    path: '/account-information',
    name: 'AccountInformationPage',
    component: () => import('@/pages/AccountInformationPage.vue')
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
