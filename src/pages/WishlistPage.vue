<template>
    <div class="top-padding">
        <div class="container mt-3">
            <h2 class="text-start mb-4 fs-5">My Wishlist <span class="text-muted">({{ wishlist.length }} items)</span></h2>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col text-decoration-none text-dark" v-for="product in wishlist" :key="product.id">
                    <div class="card rounded-0 border-0">
                        <div class="image-wrapper position-relative overflow-hidden">
                            <img :src="ProductById(product).isHovered ? ProductById(product).images[1] : ProductById(product).image" class="img-fluid p-0"
                                @mouseover="ProductById(product).isHovered = true" @mouseleave="ProductById(product).isHovered = false"
                                alt="Product Image">
                            <div class="position-absolute d-flex  justify-content-between w-100 px-2" style="top: 3%;">
                                <span class="badge bg-white text-dark p-2 rounded-pill">{{ ProductById(product).tag }}</span>
                                <div class="wh-60 bg-light rounded-circle p-1 px-2"
                                    @click="removeFromWishlist(product.id)">
                                    <i class="bi bi-x"></i>
                                </div>
                            </div>
                        </div>
                        <router-link to="/product-page" class="card-body text-start text-decoration-none">
                            <p class="small mb-0 text-uppercase text-ellipsis2">{{ ProductById(product).name }}</p>
                            <div v-if="ProductById(product).reviews" class="small">
                                <i class="bi bi-star-fill" v-for="star in 5" :key="star"></i>
                                ({{ ProductById(product).reviews }})
                            </div>
                            <p class="card-text">₹ {{ ProductById(product).price }} <span v-if="ProductById(product).mrp"
                                    class="text-decoration-line-through text-muted">₹ {{ ProductById(product).mrp }}</span></p>
                            <div class="card-footer bg-transparent">
                                <button class="btn btn-dark w-100 rounded-0 rounded-top-end-0">Add to Cart</button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="my-5">
                <ProductsCard :products="products" title="CUSTOMERS ALSO VIEWED" v-observe />
            </div>
        </div>
    </div>
</template>

<script>
import ProductsCard from "@/components/ProductsCard.vue"
export default {
    components: {
        ProductsCard,
    },
    data() {
        return {
            // items: [
            //     {
            //         id: 1,
            //         name: 'Batman: The Cowl',
            //         description: 'Premium Heavy Gauge Fabric',
            //         membershipPrice: 949,
            //         mrp: 100,
            //         reviews: "118",
            //         tag: "-15% Off",
            //         price: 80,
            //         image: "https://whitehathi.com/cdn/shop/files/IMG_9856.jpg?v=1706217863&width=360",
            //         secondary: "https://whitehathi.com/cdn/shop/files/92.5SterlingSilver18KGoldVermeil1YearAntiTarnishWarrantyPerfectforeverydaywear.png?v=1706217863&width=360",
            //         isHovered: false
            //     },
            //     {
            //         id: 2,
            //         name: 'Punisher: Logo',
            //         description: 'Premium Heavy Gauge Fabric',
            //         membershipPrice: 949,
            //         mrp: null,
            //         reviews: "22",
            //         tag: "",
            //         price: 299,
            //         image: "https://whitehathi.com/cdn/shop/products/DAJ06769...1.jpg?v=1687943574&width=360",
            //         secondary: "https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360",
            //         isHovered: false
            //     },
            //     {
            //         id: 3,
            //         name: 'Solids: Berry Blue',
            //         description: 'Oversized Pullovers',
            //         membershipPrice: 1999,
            //         mrp: 390,
            //         reviews: "2",
            //         tag: "New-in",
            //         price: 340,
            //         image: "https://whitehathi.com/cdn/shop/files/IMG_3090.jpg?v=1713335959&width=360",
            //         secondary: "https://whitehathi.com/cdn/shop/files/IMG_4188.jpg?v=1713335959&width=360",
            //         isHovered: false
            //     },
            //     {
            //         id: 4,
            //         name: 'Solids: Black (Oversized)',
            //         description: 'Oversized Full Sleeve T-Shirts',
            //         membershipPrice: 799,
            //         mrp: 300,
            //         reviews: "",
            //         tag: "-15% Off",
            //         price: 265,
            //         image: "https://whitehathi.com/cdn/shop/files/0N8A0918.jpg?v=1702791455&width=360",
            //         secondary: "https://whitehathi.com/cdn/shop/files/0N8A0917.jpg?v=1702791429&width=360",
            //         isHovered: false
            //     }
            // ],
            secondaryProducts: [
                { id: 1, name: "Lorem ipsum dolor sit amet.", price: 80, image: "https://whitehathi.com/cdn/shop/files/IMG_9973.jpg?v=1687946668&width=493", secondary: "https://whitehathi.com/cdn/shop/products/IMG_2378.jpg?v=1687946668&width=493", isHovered: false },
                { id: 2, name: "Lorem ipsum dolor sit amet.", price: 299, image: "https://whitehathi.com/cdn/shop/files/0N8A1043.jpg?v=1703223520&width=493", secondary: "https://whitehathi.com/cdn/shop/files/0N8A1043...1.jpg?v=1703223553&width=493", isHovered: false },
                { id: 7, name: "Lorem ipsum dolor sit amet.", price: 340, image: "https://whitehathi.com/cdn/shop/files/IMG_8171.jpg?v=1686219223&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8995-1.jpg?v=1686827276&width=493", isHovered: false },
                { id: 4, name: "Lorem ipsum dolor sit amet.", price: 265, image: "https://whitehathi.com/cdn/shop/files/IMG_8880-1.jpg?v=1690360149&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8151-1.jpg?v=1690360149&width=493", isHovered: false },
            ]
        }
    },
    computed: {
        formatPrice() {
            return (value) => `$${value.toFixed(2)}`
        },
        wishlist() {
            return this.$store.getters.getSavedProducts
        },
        products(){
            return this.$store.getters.getProducts
        }
    },
    methods: {
        // removeFromWishlist(productId) {
        //     this.items = this.items.filter(item => item.id !== productId);
        // },
        removeFromWishlist(productIndex) {
            this.$store.dispatch('unSaveProduct', productIndex)
        },
        ProductById(productId) {
            return this.$store.getters.getProduct(productId)
        },
    }
}
</script>
