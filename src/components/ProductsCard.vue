<template>
    <div class="container-fluid">
        <h2 class="text-center my-5 text-uppercase">{{ title }}</h2>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <div class="col text-decoration-none text-dark" v-for="product in products" :key="product.id">
                <div class="card rounded-0 border-0">
                    <div class="image-wrapper position-relative overflow-hidden">
                        <img :src="product.isHovered ? product.secondary : product.image" class="img-fluid p-0"
                            @mouseover="product.isHovered = true" @mouseleave="product.isHovered = false"
                            alt="Product Image">
                        <div class="position-absolute d-flex justify-content-between w-100 px-2" style="top: 3%;">
                            <span class="badge bg-white text-dark p-2 rounded-pill">{{ product.tag }}</span>
                            <div class="wh-60 bg-light rounded-circle p-1 px-2" @click="addToWishlist(product)">
                                <i :class="product.wishlistStatus ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'"></i>
                            </div>
                        </div>
                    </div>
                    <router-link to="/product-detail" class="card-body text-start text-decoration-none">
                        <p class="small mb-0 text-uppercase text-ellipsis2">{{ product.name }}</p>
                        <div v-if="product.reviews" class="small">
                            <i class="bi bi-star-fill" v-for="star in 5" :key="star"></i>
                            ({{ product.reviews }})
                        </div>
                        <p class="card-text">₹ {{ product.price }} <span v-if="product.mrp"
                                class="text-decoration-line-through text-muted">₹ {{ product.mrp }}</span></p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center my-4">
            <button class="btn btn-dark rounded-0">View All</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        products: {
            type: Array,
        },
        title: {
            type: String,
        }
    },
    data() {
        return {
            wishlist: []  // Local array to hold the wishlist products
        };
    },
    methods: {
        addToWishlist(product) {
            // Toggle the wishlist status of the product
            product.wishlistStatus = !product.wishlistStatus;

            // Optionally log the status change
            console.log(product.wishlistStatus ? 'Added to wishlist' : 'Removed from wishlist', product);
        }
    }
}
</script>

<style scoped>
.img-fluid {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    object-fit: contain;
    min-height: 200px;
}

.img-fluid:hover {
    transform: scale(1.1);
}
</style>
