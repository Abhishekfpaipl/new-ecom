<template>
    <div class="top-padding">
        <div class="d-flex justify-content-between align-items-center shadow p-2 mb-3">
            <div class="flex-fill d-flex align-items-center p-2">
                <i class="bi bi-search"></i>
                <input type="search" placeholder="Search for products" v-model="searchTerm"
                    class="form-control border-0" ref="searchInput" />
            </div>

            <div class="">
                <i class="btn bi bi-filter fs-3" data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas"
                    aria-controls="filterOffcanvas"></i>
                <i class="btn bi bi-arrow-down-up fs-5"></i>
            </div>
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
                                    <input class="form-check-input" type="checkbox" :id="index" :value="filter"
                                        v-model="selectedTypes" />
                                    <label class="form-check-label" :for="'type-' + index">
                                        {{ filter }}
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Main Content -->
        <div class="container-fluid my-5">
            <div class="row">
                <!-- Products -->
                <div class="col-12">
                    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                        <router-link to="/product-page" class="col text-decoration-none text-dark"
                            v-for="product in filteredProducts" :key="product.id">
                            <div class="card rounded-0 border-0">
                                <div class="image-wrapper position-relative overflow-hidden">
                                    <img :src="product.isHovered ? product.images[1] : product.image"
                                        class="img-fluid p-0" @mouseover="product.isHovered = true"
                                        @mouseleave="product.isHovered = false" alt="Product Image" />
                                    <div class="position-absolute d-flex justify-content-between w-100 px-2"
                                        style="top: 3%;">
                                        <span class="badge bg-white text-dark p-2 rounded-pill">{{ product.tag }}</span>
                                        <div class="wh-60 bg-light rounded-circle p-1 px-2"
                                            @click="addToWishlist(product.sid)">
                                            <i
                                                :class="product.wishlistStatus ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'"></i>
                                        </div>
                                    </div> 
                                </div>
                                <div class="card-body text-start ls-1 px-0">
                                    <p class="small mb-0 text-uppercase text-ellipsis2">
                                        {{ product.name }}
                                    </p>
                                    <div v-if="product.reviews" class="small">
                                        <i class="bi bi-star-fill" v-for="star in 5" :key="star"></i>
                                        ({{ product.reviews }})
                                    </div>
                                    <p class="card-text">
                                        ₹ {{ product.price }}
                                        <span v-if="product.mrp" class="text-decoration-line-through text-danger">₹ {{
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
            typeFilters: [
                "Bracelets",
                "Jewellery",
                "Necklace",
                "Earrings",
                "Pendant"
            ],
            selectedTypes: [],
            searchTerm: '',
        }
    },
    computed: {
        products() {
            return this.$store.getters.getProducts
        },
        filteredProducts() {
            const searchTerm = this.searchTerm.toLowerCase();

            // Filter by type
            let filteredByType = this.selectedTypes.length
                ? this.products.filter(product =>
                    this.selectedTypes.includes(product.type)
                )
                : this.products;

            // Filter by search term
            return filteredByType.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        }
    },
    methods: {
        toggleTypeFilter(filter) {
            const index = this.selectedTypes.indexOf(filter);
            if (index === -1) {
                // Add the filter if not already selected
                this.selectedTypes.push(filter);
            } else {
                // Remove the filter if already selected
                this.selectedTypes.splice(index, 1);
            }
        },
        addToWishlist(productId) {
            this.$store.dispatch('saveProduct', productId);
        },
    }

}
</script>
<style></style>