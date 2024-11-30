<template>
    <div class="container top-padding">
        <div class="row mt-3">
            <!-- Product Images -->
            <!-- <div class="col-md-6 col-12">
                <div class="row">
                    <div class="col-2">
                        <div class="row">
                            <div class="col-12 mb-3" v-for="(image, index) in thumbnails" :key="index">
                                <img :src="image" class="img-fluid" style="width: 50px;" @click="setMainImage(image)"
                                    alt="Product thumbnail">
                            </div>
                        </div>
                    </div>
                    <div class="col-10">
                        <img :src="mainImage" class="img-fluid" alt="Himalaya Ayurveda Clear Skin Soap">
                    </div>
                </div>
            </div> -->

            <div class="col-md-6 col-12">
                <div class="row sticky-image">
                    <!-- Thumbnail Images -->
                    <div class="col-2" style="max-height: 300px; overflow-y: auto;">
                        <div class="row">
                            <div class="col-12 mb-3" v-for="(image, index) in product.images" :key="index">
                                <img :src="image" class="img-fluid" style="width: 50px; cursor: pointer;"
                                    @click="setMainImage(image)" alt="Product thumbnail" />
                            </div>
                        </div>
                    </div>

                    <!-- Main Image with LightGallery -->
                    <div class="col-10">
                        <div ref="lightGallery" class="lightgallery">
                            <a href="javascript:void(0);" class="d-block" @click.prevent="openGallery">
                                <img :src="product.image" class="img-fluid" alt="Main product image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Product Details -->
            <div class="col-md-6">
                <h2 class="text-md-start text-center">{{product.name }}</h2>
                <div class="rating text-md-start text-center">
                    <span v-for="n in 5" :key="n" class="star">★</span>
                    <span class="rating-value">{{product.rating }}</span>
                    <span class="text-muted"> ({{ product.reviews }}) </span>
                </div>

                <div class="d-flex justify-content-md-start justify-content-center align-items-center gap-3 mt-3">
                    <p class="mb-0 "> MRP: <span class="text-muted text-decoration-line-through fs-4"> ₹{{ product.mrp}}</span></p>
                    <span class="fs-4">₹{{ product.price }}</span>
                    <span class="text-danger">Save ₹ {{ product.mrp - product.price }}</span>
                </div>

                <p class="text-muted small mb-0 text-md-start text-center">Inclusive of all taxes. Shipping calculated
                    at checkout.</p>


                <!-- Color Selection -->
                <div class="row">
                    <div class="col-12">
                        <p class="text-start mt-3 mb-1 fs-5 fw-bold">OFFERS</p>
                        <ul class="list-unstyled">
                            <li v-for="offer in product.offers" :key="offer.id" class="d-flex align-items-center mb-2">
                                <i class="bi bi-check text-success me-2 fs-5"></i>
                                <span>{{ offer }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-start mt-3 fs-5 fw-bold">CHOOSE YOUR ALPHABET</p>
                        <div class="row row-cols-6 g-3">
                            <div v-for="letter in product.alphabet" :key="letter" class="col mb-3">
                                <div class="btn border rounded-0 w-100 p-2"
                                    :class="{ 'btn-dark': selectedLetter === letter }" @click="selectLetter(letter)">
                                    {{ letter }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="text-start mt-3 fs-5">POLISH : <span class="fw-bold ">{{ selectedColor ?
                            selectedColor.name :
                            "None" }}</span></p>
                        <div class="d-flex align-items-center gap-3">
                            <div v-for="color in product.colors" :key="color.id"
                                class="d-flex flex-column align-items-center mb-3">
                                <label class="d-flex flex-column align-items-center">
                                    <input type="radio" :value="color" v-model="selectedColor" class="d-none" />
                                    <div class="rounded-circle"
                                        :class="['polish-color', selectedColor && selectedColor.bgColor === color.bgColor ? 'border border-2 border-dark' : '']"
                                        :style="{ backgroundColor: color.bgColor }" style="height: 50px; width:50px;">
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <p class="text-start mt-3 fs-5">CHARMS: ZODIAC SIGN</p>
                        <div class="row row-cols-4 g-3">
                            <div class="col mb-3" v-for="charm in product.charms" :key="charm.id" @click="selectCharm(charm)"
                                style="cursor: pointer;">
                                <img :src="charm.image" class="rounded-circle"
                                    :class="{ 'border border-2 border-dark': selectedCharm && selectedCharm.id === charm.id }"
                                    alt="" style="height: 50px;width: 50px;">
                                <p class="text-center">{{ charm.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Size Selection -->
                <!-- <div class="d-flex justify-content-md-start justify-content-center align-items-center gap-3 mt-3">
                    <div class="d-flex flex-column align-items-center" v-for="size in sizes" :key="size.weight">
                        <div class="card">
                            <div class="card-header text-bg-success" @click="selectSize(size.weight)">{{ size.weight }}g
                            </div>
                            <p class="card-body mb-0 p-2">₹{{ size.price }} <span v-if="size.originalPrice"
                                    class="text-decoration-line-through text-muted ">₹{{ size.originalPrice }}</span>
                            </p>
                        </div>
                    </div>
                </div> -->

                <!-- Quantity -->
                <div
                    class="d-flex flex-column justify-content-md-start justify-content-center align-items-md-start align-items-center my-3">
                    <p class="text-md-start text-center">QUANTITY</p>
                    <div class="input-group w-50">
                        <button class="btn btn-outline-secondary border-dark rounded-0 border-end-0"
                            @click="decrementQuantity">-</button>
                        <input type="text" class="form-control text-center border-start-0 border-end-0 border-dark w-50"
                            v-model="quantity">
                        <button class="btn btn-outline-secondary rounded-0 border-dark border-start-0"
                            @click="incrementQuantity">+</button>
                    </div>
                </div>

                <!-- Purchase Options -->
                <!-- <div class="my-3 border p-3">
                    <div class="form-check border-bottom text-md-start text-center pb-2">
                        <input class="form-check-input" type="radio" v-model="purchaseType" value="one-time"
                            id="one-time">
                        <label class="form-check-label" for="one-time">ONE-TIME PURCHASE</label>
                    </div>
                    <div class="form-check text-md-start text-center pt-2">
                        <input class="form-check-input" type="radio" v-model="purchaseType" value="subscribe"
                            id="subscribe">
                        <label class="form-check-label" for="subscribe">
                            SUBSCRIBE AND DELIVER EVERY
                            <select v-model="subscriptionInterval" class="form-select d-inline-block w-auto">
                                <option value="15">15 days</option>
                                <option value="30">30 days</option>
                                <option value="45">45 days</option>
                            </select>
                        </label>
                    </div>
                    <small class="text-muted d-block mt-1">You will get a 5% discount on every recurring order.</small>
                </div> -->

                <button class="btn btn-dark d-flex justify-content-between align-items-center w-100 my-3">
                    <div class="d-flex gap-2 align-items-center">
                        <i class="bi bi-percent rounded-circle border px-2 py-1"></i>
                        <p class="mb-0">Buy 2 get 15% + Extra 10% off</p>
                    </div>
                    <div class="fw-bold">Save25</div>
                </button>
                <button class="btn btn-dark d-flex justify-content-between align-items-center w-100 my-3">
                    <div class="d-flex gap-2 align-items-center">
                        <i class="bi bi-percent rounded-circle border px-2 py-1"></i>
                        <p class="mb-0">Buy 3 get 15% + Extra 15% off</p>
                    </div>
                    <div class="fw-bold">Save30</div>
                </button>

                <div class="d-flex gap-2 justify-content-center align-items-center">
                    <div class="" v-for="(badge, index) in product.badges" :key="index">
                        <div
                            class="card h-100 border-0 p-2 d-flex flex-column align-items-center justify-content-center">
                            <img :src="badge.image" class="img-fluid mb-2" style="width: 35px;">
                            <p class="text-center mb-2 small">{{ badge.name }}</p>
                        </div>
                    </div>
                </div>

                <button class="btn btn-dark rounded-0 w-100 mt-3" @click="addToCart()">ADD TO CART</button>
            </div>
        </div> 
        <!-- <div class="my-5">
            <h3 class="text-center">Key Ingredients</h3>
            <p class="text-center text-muted">Ayurveda texts and modern research back the following facts</p>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                <div class="col" v-for="(ingredient, index) in ingredients" :key="index">
                    <div class="card d-flex flex-folumn align-items-center" style="min-height:230px">
                        <img :src="ingredient.image" class="card-img-top img-fluid"
                            style="max-width: 100px; max-height: 100px;object-fit: contain;" alt="Ingredient thumbnail">
                        <div class="card-body">
                            <h5 class="card-title">{{ ingredient.title }}</h5>
                            <p class="card-text">{{ ingredient.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <div class="my-5">
            <ProductsCard :products=secondaryProducts title="You Might also like" v-observe />
        </div> -->

        <div class="my-5">
            <ProductsCard :products="moreProducts" title="CUSTOMERS ALSO VIEWED" v-observe />
        </div>

        <div class="my-5">
            <ReviewSection v-observe />
        </div>
        <div class="my-5">
            <!-- <ProductReview v-observe /> -->
        </div>
    </div>
</template>

<script>
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail"; // Import the thumbnail plugin
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/lightgallery.es5";

import ProductsCard from "@/components/ProductsCard.vue"
import ReviewSection from "@/components/ReviewSection.vue"
// import ProductReview from "@/components/ProductReview.vue"
export default {
    components: {
        ProductsCard,
        ReviewSection,
        // ProductReview,
    },
    data() {
        return {
            productName: 'Abella',
            rating: 3.7,
            reviewCount: "45",
            originalPrice: "338.00",
            currentPrice: "375.00",
            savings: "37.00",
            // sizes: [
            //     { weight: 125, price: "338.00", originalPrice: "375.00" },
            //     { weight: 75, price: "290.00" }
            // ],
            selectedColor: null, // This will hold the entire color object
            colors: [
                { id: 1, name: "Gold", bgColor: "gold" },
                { id: 2, name: "Rose Gold", bgColor: "mistyrose" },
                { id: 3, name: "Silver", bgColor: "grey" },
            ],
            selectedSize: 125,
            quantity: 1,
            purchaseType: 'one-time',
            subscriptionInterval: 15,
            thumbnails: [
                "https://whitehathi.com/cdn/shop/files/IMG_9856.jpg?v=1706217863&width=823",
                "https://whitehathi.com/cdn/shop/files/0N8A0936.jpg?v=1706217863&width=823",
                "https://whitehathi.com/cdn/shop/products/DAJ06527.jpg?v=1706217863",
                "https://whitehathi.com/cdn/shop/products/image12_c890a190-5d48-42cf-bbec-6162c706036e.jpg?v=1706217863&width=823",
                "https://whitehathi.com/cdn/shop/products/WhatsAppImage2022-02-09at16.58.31_1_120fdb7f-6e86-4d22-b7c3-31f9326d500f.jpg?v=1706217863&width=823",
                "https://whitehathi.com/cdn/shop/files/0N8A0937.jpg?v=1706217863&width=823",
            ],
            mainImage:
                "https://whitehathi.com/cdn/shop/files/IMG_9856.jpg?v=1706217863&width=823",
            lightGalleryInstance: null,
            offers: [
                'Get FLAT 15% OFF',
                '1 Year Anti-Tarnish Warranty',
                'Free Silver Pendant on Prepaid orders above ₹3000',
                'Easy Returns & Exchange'
            ],
            selectedLetter: null,
            alphabet: [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
            ],
            selectedCharm: null, // Property to store the selected charm
            charms: [
                { id: 1, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_26.png", name: 'Capricorn' },
                { id: 2, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_29.png", name: 'Aquarius' },
                { id: 3, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_32.png", name: 'Pisces' },
                { id: 4, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_34.png", name: 'Aries' },
                { id: 5, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_27.png", name: 'Taurus' },
                { id: 6, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_30.png", name: 'Gemini' },
                { id: 7, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_33.png", name: 'Cancer' },
                { id: 8, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_35.png", name: 'Leo' },
                { id: 9, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_28.png", name: 'Virgo' },
                { id: 10, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_31.png", name: 'Libra' },
                { id: 11, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_36.png", name: 'Scorpio' },
                { id: 12, image: "https://cdn.shopify.com/s/files/1/0577/1293/5121/files/Ellipse_37.png", name: 'Sagittarius' }
            ], 
            badges: [
                { name: "Easy returns", image: "/img/easy.png" },
                { name: "1 Year warranty", image: "/img/warranty.png" },
                { name: "Loved by 3000+ womens", image: "/img/loved.png" },
                { name: "Anti Tarnish Waterproof", image: "/img/waterproof.png" },
            ], 
        }
    },
    computed:{
        moreProducts(){
            return this.$store.getters.getProducts
        },
        product(){
            let productId = this.$route.params.productId
            return this.$store.getters.getProduct(productId)
        }
    },
    methods: {
        selectLetter(letter) {
            this.selectedLetter = letter; // Update the selected letter
            console.log('check', this.selectedLetter)
        },
        selectCharm(charm) {
            this.selectedCharm = charm; // Update the selected charm
            console.log('check charm', this.selectedCharm.name)
        },
        setMainImage(image) {
            this.mainImage = image;
        },
        selectSize(weight) {
            this.selectedSize = weight;
        },
        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 1) this.quantity--;
        },
        openGallery() {
            if (!this.lightGalleryInstance) {
                this.lightGalleryInstance = LightGallery(this.$refs.lightGallery, {
                    plugins: [lgZoom, lgThumbnail],
                    dynamic: true,
                    dynamicEl: this.thumbnails.map((img) => ({
                        src: img,
                    })),
                    zoom: true,
                    thumbnail: true,
                });
            }
            this.lightGalleryInstance.openGallery(
                this.thumbnails.indexOf(this.mainImage)
            );
        },
        destroyLightGallery() {
            if (this.lightGalleryInstance) {
                this.lightGalleryInstance.destroy();
                this.lightGalleryInstance = null;
            }
        },
        addToCart() {
            const atc = {
                // productId: this.product.id,
                image: this.mainImage,
                name: this.product.name,
                price: this.product.price,
                quantity: this.quantity,
                letter: this.selectedLetter,
                charm: this.selectedCharm,
                color: this.selectedColor,
                size: this.selectedSize,
            }
            console.log('added', atc)
            this.$store.dispatch('AddToCart', atc);
        },
        saveProduct(productId) {
            this.$store.dispatch('saveProduct', productId);
        },
    },
    beforeUnmount() {
        // Clean up LightGallery instance before the component is unmounted
        this.destroyLightGallery();
    },
    mounted() {
        this.selectedColor = this.colors[0]
    }
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
    color: black !important;
    background-color: var(--brand-color) !important;
    box-shadow: none !important;
}

.accordion-button:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none !important;
}

input[type="radio"].d-none {
    display: none;
}

@media (min-width: 768px) {

    /* Only apply sticky positioning on desktop view */
    .sticky-image {
        position: sticky !important;
        top: 20%;
        /* Adjust top value as per your layout */
    }
}

/* Add any additional custom styles here */
</style>