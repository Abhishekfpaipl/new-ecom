<!-- TopNav.vue -->
<template>
    <div>
        <nav :class="['navbar navbar-expand-lg d-none d-lg-block position-fixed w-100 top-0 border-bottom-0', { 'scrolled': isScrolled }]"
            :style="{
                background: isScrolled
                    ? 'white'
                    : 'linear-gradient(180deg, #000000f2 22.19%, #0000)',
                color: isScrolled ? 'black' : 'white',
                transition: 'background 0.3s, color 0.3s',
            }" style="z-index: 100;">
            <div class="container-fluid d-flex justify-content-between align-items-center px-5 text-white">
                <div class="d-flex align-items-center gap-3" data-bs-toggle="offcanvas" data-bs-target="#desktopSearch"
                    aria-controls="desktopSearch">
                    <i class="bi bi-search fs-4" :style="{ color: isScrolled ? 'black' : 'white' }"></i>
                    <span :style="{ color: isScrolled ? 'black' : 'white' }" class="fs-4">Search</span>
                </div>

                <!-- Logo -->
                <router-link to="/" class="navbar-brand" href="#">
                    <img src="/img/logoblack1.png" alt="White Hathi" height="60"
                        :style="{ filter: isScrolled ? 'invert(1)' : 'invert(0)' }" />
                </router-link>

                <!-- Icons -->
                <div class="d-flex align-items-center gap-3">
                    <router-link to="/wishlist-page" class="text-decoration-none"
                        :style="{ color: isScrolled ? 'black' : 'white' }">
                        <i class="bi bi-heart fs-5"></i>
                    </router-link>
                    <i class="bi bi-person fs-4" :style="{ color: isScrolled ? 'black' : 'white' }"></i>
                    <router-link to="/cart-page" class="text-decoration-none"
                        :style="{ color: isScrolled ? 'black' : 'white' }">
                        <i class="bi bi-bag fs-5"></i>
                    </router-link>
                </div>
            </div>

            <!-- Main Menu -->
            <div class="secondary-nav d-none d-lg-block border-bottom-0">
                <div class="container">
                    <ul class="nav justify-content-center">
                        <li class="nav-item dropdown shop-by-dropdown">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }" href="#">SHOP BY</a>
                            <!-- Shop By Dropdown -->
                            <div class="dropdown-menu">
                                <div class="container">
                                    <a href="#" class="dropdown-toggle-category">
                                        CATEGORY
                                        <i class="bi bi-chevron-down float-end"></i>
                                    </a>
                                    <div class="category-items">
                                        <a href="#" class="dropdown-item">MASOOM'S FAVOURITE</a>
                                        <a href="#" class="dropdown-item">NECKLACES</a>
                                        <a href="#" class="dropdown-item">BRACELETS</a>
                                        <a href="#" class="dropdown-item">EARRINGS</a>
                                        <a href="#" class="dropdown-item">RINGS</a>
                                        <a href="#" class="dropdown-item">ANKLETS</a>
                                        <a href="#" class="dropdown-item">PERSONALIZED JEWELLERY</a>
                                        <a href="#" class="dropdown-item">MANGALSUTRA</a>
                                        <a href="#" class="dropdown-item">COMBO SET</a>
                                        <a href="#" class="dropdown-item">ALL JEWELLERY</a>
                                        <a href="#" class="dropdown-item">BESTSELLERS</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }"
                                href="#">BESTSELLERS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }" href="#">NEW IN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }" href="#">GIFTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }"
                                href="#">PERSONALIZED</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }"
                                href="#">NECKLACES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }" href="#">RINGS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }" href="#">EARRINGS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }"
                                href="#">BRACELETS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }" href="#">ANKLETS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :style="{ color: isScrolled ? 'black' : 'white' }" href="#">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
        <!-- Desktop Search -->
        <div class="offcanvas offcanvas-top" tabindex="-1" id="desktopSearch" aria-labelledby="desktopSearchLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="desktopSearchLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Logo -->
                    <img src="/img/logoblack1.png" alt="White Hathi" height="50"
                        :style="{ filter: isScrolled ? 'invert(1)' : 'invert(0)' }" />

                    <!-- Search -->
                    <div class="search-container border border-2 w-50 ">
                        <div class="input-group">
                            <span class="input-group-text bg-white border-0">
                                <i class="bi bi-search"></i>
                            </span>
                            <input type="text" class="form-control border-0" placeholder="SEARCH">
                        </div>
                    </div>

                    <!-- Icons -->
                    <div class="d-flex align-items-center gap-3">
                        <i class="bi bi-person fs-4"></i>
                        <router-link to="/cart-page" class="text-decoration-none text-dark">
                            <i class="bi bi-bag fs-5"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>


        <!-- Mobile Navigation -->
        <nav :class="['navbar navbar-light text-white d-lg-none position-fixed w-100 top-0', { 'scrolled': isScrolled }]"
            style="z-index: 100; transition: background 0.3s, color 0.3s;">
            <div class="container">
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-list fs-1 text-dark" data-bs-toggle="offcanvas" data-bs-target="#mobileSideMenu"
                        aria-controls="mobileSideMenu"></i>
                    <i class="bi bi-search text-dark fs-4"></i>
                </div>
                <router-link to="/" class="navbar-brand">
                    <img src="/img/logoblack1.png" alt="White Hathi" height="50"
                        :style="{ filter: isScrolled ? 'invert(0)' : 'invert(0)' }" />

                </router-link>
                <div class="d-flex align-items-center gap-2">
                    <router-link to="/wishlist-page" class="text-dark">
                        <i class="bi bi-heart fs-5"></i>
                    </router-link>
                    <router-link to="/cart-page" class="text-dark">
                        <i class="bi bi-cart fs-5"></i>
                    </router-link>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu Sidebar -->

        <div class="offcanvas offcanvas-start w-75" tabindex="-1" id="mobileSideMenu"
            aria-labelledby="mobileSideMenuLabel">
            <div class="offcanvas-header">
                <!-- <h5 class="offcanvas-title" id="mobileSideMenuLabel">Offcanvas</h5> -->
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body px-0">
                <ul class="nav flex-column text-start">
                    <li class="nav-item">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item ">
                                <h2 class="accordion-header">
                                    <button class="px-3 py-2 accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        Shop By
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul class="nav flex-column text-start">
                                            <li class="nav-item"><a class="nav-link" href="#">MASOOM'S FAVOURITE</a>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="#">NECKLACES</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">BRACELETS</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">EARRINGS</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">NECKLACES</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">RINGS</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">ANKLETS</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">PERSONALIZED JEWELLERY</a>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="#">MANGALSUTRA</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">COMBO SET</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">ALL JEWELLERY</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">BESTSELLERS</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">BESTSELLERS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">NEW IN</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">GIFTS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">PERSONALIZED</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">NECKLACES</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">RINGS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">EARRINGS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">MANGALSUTRA</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">BRACELETS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">ANKLETS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data() {
        return {
            isMobileMenuOpen: false,
            isShopByOpen: false,
            isCategoryOpen: false,
            isScrolled: false,
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen
        },
        toggleShopBy() {
            this.isShopByOpen = !this.isShopByOpen
        },
        toggleCategory() {
            this.isCategoryOpen = !this.isCategoryOpen
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 50; // Update the state based on scroll position
        },
    },
    mounted() {
        // Attach the scroll event listener
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        // Clean up the event listener when the component is destroyed
        window.removeEventListener("scroll", this.handleScroll);
    },
}
</script>

<style scoped>
.navbar {
    background: transparent;
    color: inherit;
}

/* Styles when scrolled */
.navbar.scrolled {
    background: white;
    color: black !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Optional shadow for visual distinction */
}


.nav-link {
    color: #333;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
}


.shop-by-dropdown {
    position: relative;
}

.shop-by-dropdown:hover .dropdown-menu {
    display: block;
    opacity: 1;
    visibility: visible;
}

.dropdown-menu {
    display: block;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 250px;
    background: white;
    border: 1px solid #eee;
    border-radius: 0;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dropdown-toggle-category {
    display: block;
    padding: 12px 20px;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #eee;
    font-weight: 500;
}

.dropdown-toggle-category i {
    margin-top: 4px;
}



.dropdown-item {
    padding: 8px 20px;
    color: #333;
    font-size: 0.9rem;
}


/* Vertical line style */
.category-items::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 60px;
    /* Adjust based on your needs */
    bottom: 20px;
    width: 1px;
    background-color: #eee;
}

.dropdown-item {
    position: relative;
    padding-left: 35px;
}
</style>