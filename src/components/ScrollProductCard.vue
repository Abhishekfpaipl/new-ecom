<template>
    <div class="container">
        <h1 class="text-center mb-5">New Products</h1>

        <!-- Mobile View -->
        <div class="d-md-none d-flex flex-nowrap overflow-x-scroll gap-3 px-2" ref="mobileGallery">
            <div v-for="(product, index) in products" :key="index" class="">
                <router-link to="/" class="text-decoration-none text-dark">
                    <div class="w-100">
                        <img :src="product.image" style="width:180px;">
                    </div>
                    <p class="truncate mb-1" style="font-size: 12px;">{{ product.name }}</p>
                    <p class="mb-2 " style="font-size: 12px;">₹{{ product.price }}</p>
                </router-link>
                <div class="hover-overlay">
                    <button class="btn btn-dark">ADD TO CART</button>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="width: 300px;">
                <router-link to="/" class="text-decoration-none text-dark">
                    <p class="fs-1" style="width:300px;">View All <i class="bi bi-chevron-right"></i></p>
                </router-link>
            </div>
        </div>

        <!-- Desktop View -->
        <div class="position-relative d-none d-md-block">
            <div class="d-flex overflow-x-auto gap-3 px-2" ref="desktopGallery" id="scroll">
                <div v-for="(product, index) in products" :key="index" class="product-wrapper">
                    <div class="product-card">
                        <div class="w-100">
                            <img :src="product.image" style="width:300px;">
                        </div>
                        <p class="truncate mb-1" style="font-size: 12px;">{{ product.name }}</p>
                        <p class="mb-2 " style="font-size: 12px;">₹{{ product.price }}</p>
                    </div>
                    <div class="hover-overlay">
                        <button class="btn btn-dark">ADD TO CART</button>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center" style="width: 300px;">
                    <router-link to="/" class="text-decoration-none text-dark">
                        <p class="fs-1" style="width:300px;">View All <i class="bi bi-chevron-right"></i></p>
                    </router-link>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button class="btn btn-dark position-absolute start-0" @click="scrollGallery(-1, 'desktop')" style="top: 40%;">
                <i class="bi bi-arrow-left"></i>
            </button>
            <button class="btn btn-dark position-absolute end-0" @click="scrollGallery(1, 'desktop')" style="top: 40%;">
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>

        <!-- Mobile Navigation Arrows -->
        <button class="btn btn-dark position-fixed start-0 d-md-none" @click="scrollGallery(-1, 'mobile')" style="top: 40%;">
            <i class="bi bi-arrow-left"></i>
        </button>
        <button class="btn btn-dark position-fixed end-0 d-md-none" @click="scrollGallery(1, 'mobile')" style="top: 40%;">
            <i class="bi bi-arrow-right"></i>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { name: 'Liv.52 DS Sugar Free Syrup', price: 220.00, image: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/Liv52-DS-Syrup-100ml-SF-FOR-PPT_large.jpg?v=1721903268' },
                { name: 'Liv.52 Sugar Free Syrup', price: 150.00, image: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/Liv52-Syrup-100ml-SF-FOR-PPT_large.jpg?v=1721896454' },
                { name: 'Himalaya Mentat Gummies', price: 570.00, image: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/MENTAT-GUMMIES-30s-SIDE1-INDIA-13794-F39-FV_large.jpg?v=1721887866' },
                { name: 'Himalaya Septilin Gummies', price: 570.00, image: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/SEPTILIN-GUMMIES-30s-SIDE1-INDIA-13794-F39-FV_large.jpg?v=1721885637' },
                { name: 'Himalaya Healthy Turmeric Gummies – 30s and 60s', price: 570.00, image: 'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/TURMERIC-GUMMIES-30s-SIDE1-INDIA-13463-F39-FV-Large_large.jpg?v=1716176252' },
                { name: 'Himalaya Baby Rash Relief Cream with Pure Cow Ghee', price: 570.00, image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/BABY-RASH-RELIEF-CREAM-WITH-PURE-COW-GHEE-20G_FOP_large.jpg?v=1715235859", },
                { name: 'Himalaya Baby Derma Cream with Pure Cow Ghee', price: 125.00, image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/BABY-DERMA-CREAM-WITH-PURE-COW-GHEE-50G-CARTON-IND-5057492_FOP_large.jpg?v=1715234287", },
                { name: 'Himalaya Baby Lotion with Pure Cow Ghee', price: 150.00, image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/Himalaya_Baby-Lotion_100ml_FOP_large.jpg?v=1715230965", },
                { name: 'Himalaya Head to Toe Baby Wash with Pure Cow Ghee', price: 150.00, image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/HEAD-TO-TOE-BABY-WASH-WITH-PURE-COW-GHEE-100ML-LABEL-IND-5057330_FOP_large.jpg?v=1715229377", },
                { name: 'Himalaya Youth Eternity Face Wash', price: 299.00, image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/7393055-2_Himalaya-Youth-Eternity-Face-Wash-100ml_FOP_large.jpg?v=1713518926", },
            ],
        }
    },
    methods: {
        scrollGallery(direction, device) {
            const gallery = device === 'mobile' ? this.$refs.mobileGallery : this.$refs.desktopGallery;
            const scrollAmount = direction * 400;
            gallery.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        },
    },
}
</script>

<style scoped>
.product-card {
    position: relative;
    overflow: hidden;
}

.card-img-top {
    object-fit: cover;
}

.hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.product-card:hover .hover-overlay {
    opacity: 1;
}

#scroll::-webkit-scrollbar {
    display: none;
}

.btn-dark {
    background-color: #000;
    color: #fff;
}

@media (max-width: 767.98px) {
    .btn-dark {
        background-color: #000;
        color: #fff;
    }
}
</style>
