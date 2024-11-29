<template>
    <div class="top-padding">
        <div class="container mt-4">
            <h1 class="text-center mb-5 text-uppercase">Category Page</h1>
            <div class="d-flex gap-3 justify-content-md-center justify-content-start overflow-x-scroll" id="scroll">
                <button class="btn btn-outline-dark rounded-0 ls-1 text-uppercase" v-for="category in categories"
                    :key="category">{{ category
                    }}</button>
            </div>
        </div>
        <div class="d-flex justify-content-center gap-2 align-items-center my-5">
            <button class="btn btn-outline-dark rounded-0" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#filterOffcanvas" aria-controls="filterOffcanvas">Filter</button>
            <button class="btn btn-outline-dark rounded-0">Featured</button>
        </div>
        <!-- Filters -->

        <div class="offcanvas offcanvas-start" tabindex="-1" id="filterOffcanvas"
            aria-labelledby="filterOffcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="filterOffcanvasLabel">Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="accordion" id="filtersAccordion">
                    <!-- Type Filter -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="typeHeading">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#typeCollapse" aria-expanded="true" aria-controls="typeCollapse">
                                Type
                            </button>
                        </h2>
                        <div id="typeCollapse" class="accordion-collapse collapse show" aria-labelledby="typeHeading"
                            data-bs-parent="#filtersAccordion">
                            <div class="accordion-body">
                                <div class="form-check text-start" v-for="(filter, index) in typeFilters" :key="index">
                                    <input class="form-check-input" type="checkbox" :id="index" :value="index"
                                        v-model="selectedTypes" />
                                    <label class="form-check-label" :for="type">
                                        {{ filter }}
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- Occasion Filter -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="occasionHeading">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#occasionCollapse" aria-expanded="false"
                                aria-controls="occasionCollapse">
                                Occasion
                            </button>
                        </h2>
                        <div id="occasionCollapse" class="accordion-collapse collapse" aria-labelledby="occasionHeading"
                            data-bs-parent="#filtersAccordion">
                            <div class="accordion-body">
                                <div class="form-check" v-for="(count, occasion) in occasionFilters" :key="occasion">
                                    <input class="form-check-input" type="checkbox" :id="occasion"
                                        v-model="selectedOccasions">
                                    <label class="form-check-label" :for="occasion">
                                        {{ occasion }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- Main Content -->
        <div class="container my-5">
            <div class="row">
                <!-- Products -->
                <div class="col-12">
                    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                        <router-link to="/product-page" class="col text-decoration-none text-dark"
                            v-for="product in filteredProducts" :key="product.id">
                            <div class="card rounded-0 border-0">
                                <div class="image-wrapper position-relative overflow-hidden">
                                    <img :src="product.isHovered ? product.secondary : product.image"
                                        class="img-fluid p-0" @mouseover="product.isHovered = true"
                                        @mouseleave="product.isHovered = false" alt="Product Image" />
                                    <span class="badge bg-white text-dark position-absolute p-2 rounded-pill"
                                        style="top: 3%; left: 3%;">
                                        {{ product.tag }}
                                    </span>
                                </div>
                                <div class="card-body text-start">
                                    <p class="small mb-0 text-uppercase text-ellipsis2">
                                        {{ product.name }}
                                    </p>
                                    <div v-if="product.reviews" class="small">
                                        <i class="bi bi-star-fill" v-for="star in 5" :key="star"></i>
                                        ({{ product.reviews }})
                                    </div>
                                    <p class="card-text">
                                        ₹ {{ product.price }}
                                        <span v-if="product.mrp" class="text-decoration-line-through text-muted">₹ {{
                                            product.mrp }}</span>
                                    </p>
                                </div>
                            </div>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: ['Necklace', 'Bracelets', 'Rings', 'Anklets', 'Earrings', 'Combo Set', 'Personalized Jewellery'],
            products: [
                {
                    id: 1,
                    name: "Lorem ipsum dolor sit amet.",
                    mrp: 100,
                    reviews: "118",
                    tag: "-15% Off",
                    price: 80,
                    image: "https://whitehathi.com/cdn/shop/files/IMG_9856.jpg?v=1706217863&width=360",
                    secondary: "https://whitehathi.com/cdn/shop/files/92.5SterlingSilver18KGoldVermeil1YearAntiTarnishWarrantyPerfectforeverydaywear.png?v=1706217863&width=360",
                    isHovered: false,
                    type: "Necklace",
                },
                {
                    id: 2,
                    name: "Lorem ipsum dolor sit amet.",
                    mrp: null,
                    reviews: "22",
                    tag: "",
                    price: 299,
                    image: "https://whitehathi.com/cdn/shop/products/DAJ06769...1.jpg?v=1687943574&width=360",
                    secondary: "https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360",
                    isHovered: false,
                    type: "Bracelets",
                },
                {
                    id: 3,
                    name: "Lorem ipsum dolor sit amet.",
                    mrp: 390,
                    reviews: "2",
                    tag: "New-in",
                    price: 340,
                    image: "https://whitehathi.com/cdn/shop/files/IMG_3090.jpg?v=1713335959&width=360",
                    secondary: "https://whitehathi.com/cdn/shop/files/IMG_4188.jpg?v=1713335959&width=360",
                    isHovered: false,
                    type: "Earrings",
                },
                {
                    id: 4,
                    name: "Lorem ipsum dolor sit amet.",
                    mrp: 300,
                    reviews: "",
                    tag: "-15% Off",
                    price: 265,
                    image: "https://whitehathi.com/cdn/shop/files/0N8A0918.jpg?v=1702791455&width=360",
                    secondary: "https://whitehathi.com/cdn/shop/files/0N8A0917.jpg?v=1702791429&width=360",
                    isHovered: false,
                    type: "Jewellery",
                },
            ], 
            typeFilters: [
                "Bracelets",
                "Jewelry",
                "Necklace",
                "Necklaces",
                "Pendant"
            ],
            occasionFilters: ['Office Wear'],
            selectedTypes: [],
            selectedOccasions: []

        }
    },
    computed: {
        filteredProducts() {
            if (this.selectedTypes.length === 0) {
                return this.products; // Return all products if no type is selected
            }
            return this.products.filter(product =>
                this.selectedTypes.includes(product.type)
            );
        }
    },
    methods: {
    }
}
</script>
<style> 


</style>