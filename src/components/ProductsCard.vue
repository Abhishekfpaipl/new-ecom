<template>
    <div class="container-fluid">
        <h2 class="text-center my-5 text-uppercase">{{ title }}</h2>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            <router-link to="/product-page" class="col text-decoration-none text-dark" v-for="product in products"
                :key="product.id">
                <div class="card rounded-0 border-0">
                    <div class="image-wrapper position-relative overflow-hidden">
                        <img :src="product.isHovered ? product.secondary : product.image" class="img-fluid p-0"
                            @mouseover="product.isHovered = true" @mouseleave="product.isHovered = false"
                            alt="Product Image">
                        <!-- <div class=""> -->
                            <span class="badge bg-white text-dark position-absolute p-2 rounded-pill" style="top: 3%; left: 3%;">{{
                                product.tag }}</span>
                        <!-- </div> -->
                    </div>
                    <div class="card-body text-start">
                        <p class="small mb-0 text-uppercase text-ellipsis2 ">{{
                            product.name }}</p>
                        <div v-if="product.reviews" class="small">
                            <i class="bi bi-star-fill" v-for="star in 5" :key="star"></i>
                            ({{ product.reviews }})
                        </div>
                        <p class="card-text">₹ {{ product.price }}  <span v-if="product.mrp" class="text-decoration-line-through text-muted">₹ {{ product.mrp }}</span></p>
                        <!-- <button class="btn btn-dark rounded-0 rounded-top-end-0">Add to Cart</button> -->
                    </div>
                </div>
            </router-link>
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
