<template>
    <nav class="d-md-none navbar navbar-expand-lg top-brand p-0 border-top position-fixed bottom-0 w-100"
        style="z-index: 9;background-color: #231F20;">
        <div class="container-fluid">
            <div class="navbar-nav d-flex flex-row w-100 justify-content-around ">
                <div class="nav-item" v-for="(link, linkIndex) in links" :key="linkIndex">
                    <router-link :to="link.path" class="nav-link text-secondary"
                        :class="{ 'active': isLinkActive(link) }">
                        <div class="d-flex flex-column align-items-center fw-bold">
                            <i class="bi" :class="link.icon"></i>
                            <div style="font-size: 0.75rem;">{{ link.name }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'BotttomNav',
    data() {
        return {
            links: [
                {
                    path: '/',
                    icon: 'bi-shop-window',
                    name: 'Home'
                }, 
                {
                    path: '/collection-page',
                    icon: 'bi-grid-1x2',
                    name: 'Collection'
                },
                // {
                //     path: '/wishlist-page',
                //     icon: 'bi-heart',
                //     name: 'Favorite'
                // },
                // {
                //     path: '/cart-page',
                //     icon: 'bi-cart',
                //     name: 'Cart'
                // },
                {
                    path: '/account',
                    icon: 'bi-person',
                    name: 'Account'
                },
                {
                    path: '/about-us',
                    icon: 'bi-globe-central-south-asia',
                    name: 'About'
                },
            ]
        }
    },
    methods: {
        isLinkActive(link) {
            return this.$route.matched.some((route) => {
                return route.path === link.path || (route.path !== '/' && link.path.startsWith(route.path));
            });
        },
    },
}
</script>
<style>
.router-link-active.router-link-exact-active.nav-link,
.active {
    color: #EDC3AB !important;
}
</style>