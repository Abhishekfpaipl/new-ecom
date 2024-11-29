<template>
    <div class="container" style="padding-top: 80px;">
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
                <div class="row">
                    <!-- Thumbnail Images -->
                    <div class="col-2">
                        <div class="row">
                            <div class="col-12 mb-3" v-for="(image, index) in thumbnails" :key="index">
                                <img :src="image" class="img-fluid" style="width: 50px; cursor: pointer;"
                                    @click="setMainImage(image)" alt="Product thumbnail" />
                            </div>
                        </div>
                    </div>

                    <!-- Main Image with Arrows -->
                    <div class="col-10 position-relative">
                        <button class="arrow-btn left-arrow" @click="prevImage" aria-label="Previous Image">
                            ←
                        </button>
                        <button class="arrow-btn right-arrow" @click="nextImage" aria-label="Next Image">
                            →
                        </button>
                        <div ref="lightGallery" class="lightgallery">
                            <a href="javascript:void(0);" class="d-block" @click.prevent="openGallery">
                                <img :src="mainImage" class="img-fluid" alt="Main product image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product Details -->
            <div class="col-md-6">
                <h2 class="text-md-start text-center">{{ productName }}</h2>
                <div class="rating text-md-start text-center">
                    <span v-for="n in 5" :key="n" class="star">★</span>
                    <span class="rating-value">{{ rating }}</span>
                    <span class="text-muted"> ({{ reviewCount }}) </span>
                </div>

                <div class="d-flex justify-content-md-start justify-content-center align-items-center gap-3 mt-3">
                    <p class="mb-0 "> MRP: <span class="text-muted text-decoration-line-through fs-4"> ₹{{ originalPrice
                            }}</span></p>
                    <span class="fs-4">₹{{ currentPrice }}</span>
                    <span class="text-danger">Save ₹ {{ savings }}</span>
                </div>

                <p class="text-muted small mb-0 text-md-start text-center">Inclusive of all taxes. Shipping calculated
                    at checkout.</p>

                <!-- Size Selection -->
                <div class="d-flex justify-content-md-start justify-content-center align-items-center gap-3 mt-3">
                    <div class="d-flex flex-column align-items-center" v-for="size in sizes" :key="size.weight">
                        <div class="card">
                            <div class="card-header text-bg-success" @click="selectSize(size.weight)">{{ size.weight }}g
                            </div>
                            <p class="card-body mb-0 p-2">₹{{ size.price }} <span v-if="size.originalPrice"
                                    class="text-decoration-line-through text-muted ">₹{{ size.originalPrice }}</span>
                            </p>
                        </div>
                    </div>
                </div>

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
                <div class="my-3 border p-3">
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
                </div>

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
                    <div class="" v-for="(badge, index) in badges" :key="index">
                        <div
                            class="card h-100 border-0 p-2 d-flex flex-column align-items-center justify-content-center">
                            <img :src="badge.image" class="img-fluid mb-2" style="width: 35px;">
                            <p class="text-center mb-2 small">{{ badge.name }}</p>
                        </div>
                    </div>
                </div>

                <button class="btn btn-dark rounded-0 w-100 mt-3">ADD TO CART</button>
            </div>
        </div>

        <div class="my-5">
            <h2 class="text-center">{{ title }}</h2>
            <p class="text-center ">{{ description }}</p>

            <div class="accordion mt-4" id="soapAccordion">
                <div class="accordion-item rounded-0" v-for="(section, index) in sections" :key="index">
                    <h2 class="accordion-header" :id="'heading' + index">
                        <button class="accordion-button" :class="{ collapsed: index !== 0 }" type="button"
                            data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0"
                            :aria-controls="'collapse' + index">
                            {{ section.title }}
                        </button>
                    </h2>
                    <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 }"
                        :aria-labelledby="'heading' + index" data-bs-parent="#soapAccordion">
                        <div class="accordion-body text-start" v-html="section.content"></div>
                    </div>
                </div>
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
            <ProductReview v-observe />
        </div>
    </div>
</template>

<script>
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/lightgallery.es5";

// import ProductsCard from "@/components/ProductsCard.vue"
import ProductReview from "@/components/ProductReview.vue"
export default {
    components: {
        // ProductsCard,
        ProductReview,
    },
    data() {
        return {
            productName: 'Lakme 9 To 5 Complexion Care Face CC Cream, Beige, SPF 30, Conceals Dark Spots & Blemishes, 30 g (Packaging may vary)',
            rating: 3.7,
            reviewCount: "45",
            originalPrice: "338.00",
            currentPrice: "375.00",
            savings: "37.00",
            sizes: [
                { weight: 125, price: "338.00", originalPrice: "375.00" },
                { weight: 75, price: "290.00" }
            ],
            selectedSize: 125,
            quantity: 1,
            purchaseType: 'one-time',
            subscriptionInterval: 15,
            thumbnails: [
                "https://m.media-amazon.com/images/I/51G+CJkiLUL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/51FaOMJo19L._SX425_.jpg",
                "https://m.media-amazon.com/images/I/51idyVN4DfL._SX425_.jpg",
                "https://m.media-amazon.com/images/I/41EA-pNJ--L._SX425_.jpg",
                "https://m.media-amazon.com/images/I/51SGj88HplL._SX425_.jpg",
                "https://m.media-amazon.com/images/I/51P7+uAmCYL._SX425_.jpg",
            ],
            mainImage:
                "https://m.media-amazon.com/images/I/51G+CJkiLUL._SX679_.jpg",
            lightGalleryInstance: null,
            transitioning: false,

            title: 'About this product',
            description: 'For women who are on the go and could use the extra minutes before stepping out|| Lakme CC cream is here to the rescue. This cream acts as your everyday instant skin stylist and lets you get that perfect look of makeup + skincare for any occasion. It may be work|| party or simply an evening with friends; your personal stylist will help you get the right look for it all. It’s time to move on to a simpler regime without comprising on skincare. The Lakme CC cream moistures|| brightens and freshens your skin while enriching it with a hint of makeup. With sun protection of SPF 30 and makeup benefits like even skin tone and skin coverage|| this cream takes complete care of your complexion. The beige variant of this CC cream blends in seamlessly when applied on light to wheatish skin tone. This cream can also be used along with other products or on its own if you prefer just the lightest touch of make-up. Furthermore|| the Lakme CC cream comes in a chic sturdy packaging with a well fitted rose gold cap. Lakme 9 to 5 CC Cream brings you the best of both worlds: It’s skincare with a touch of makeup to give you the perfect look|| for any occasion|| in an instant.*OLD',
            sections: [
                {
                    title: 'INGREDIENTS',
                    content: 'Cyclopentasiloxane, Ethylhexyl Methoxycinnamate, Glycerin.'
                },
                {
                    title: 'DIRECTIONS',
                    content: 'Take a pea sized amount and dot across face. Dap the cream gently with finger-tips till it completely blends into the skin.'
                },
                {
                    title: 'MANUFACTURER INFORMATION',
                    content: `
            <p><strong>Item Type:</strong> Cream</p>
            <p><strong>Colour:</strong> Beige</p>
            <p><strong>Skin Type:</strong> All</p>
            <p><strong>Finish Type:</strong> Natural</p>
            <p><strong>Recommended Uses For Product:</strong> Dark Spots</p>
            <p><strong>Material Type Free:</strong> Alcohol Free</p>
            <p><strong>Package Information:</strong> Tube</p>
            <p><strong>Brand:</strong> LAKMÉ</p>
            <p><strong>Coverage:</strong> Light</p>
            <p><strong>Product Benefits:</strong> Moisturizing</p> `
                }
            ],
            "ingredients": [
                {
                    "image": "/img/badges/1.png",
                    "title": "Silicone free",
                    "description": "This product is free from silicones, ensuring a natural formulation that doesn't clog pores or leave residue."
                },
                {
                    "image": "/img/badges/2.png",
                    "title": "Made in India",
                    "description": "Proudly manufactured in India, supporting local communities and traditional practices."
                },
                {
                    "image": "/img/badges/3.png",
                    "title": "ISO certified company",
                    "description": "Our company meets the international standards for quality management, ensuring consistent and reliable products."
                },
                {
                    "image": "/img/badges/4.png",
                    "title": "100% guarantee",
                    "description": "We stand by the quality of our product with a 100% satisfaction guarantee."
                },
                {
                    "image": "/img/badges/5.png",
                    "title": "No alcohol",
                    "description": "Free from alcohol, this product is gentle on the skin and maintains its natural moisture balance."
                },
                {
                    "image": "/img/badges/6.png",
                    "title": "FDA Approved",
                    "description": "This product is approved by the FDA, ensuring it meets safety and efficacy standards."
                },
                {
                    "image": "/img/badges/7.png",
                    "title": "Please Recycle",
                    "description": "Help us protect the environment by recycling this packaging after use."
                },
                {
                    "image": "/img/badges/8.png",
                    "title": "Dermatologically Tested",
                    "description": "Tested by dermatologists, this product is safe for all skin types, including sensitive skin."
                },
                {
                    "image": "/img/badges/9.png",
                    "title": "Cruelty Free",
                    "description": "Our product is cruelty-free, meaning it is not tested on animals at any stage of development."
                }
            ],

            secondaryProducts: [
                { id: 1, name: "Lorem ipsum dolor sit amet.", price: 80, image: "https://m.media-amazon.com/images/I/51Z6FDYzi+L._SY450_.jpg", secondary: "https://m.media-amazon.com/images/I/51Jl9IsbScL._SY450_.jpg", isHovered: false },
                { id: 2, name: "Lorem ipsum dolor sit amet.", price: 299, image: "https://m.media-amazon.com/images/I/51g-qdoNeDL._SX679_.jpg", secondary: "https://m.media-amazon.com/images/I/71nkoxFzFmL._SY450_.jpg", isHovered: false },
                { id: 3, name: "Lorem ipsum dolor sit amet.", price: 340, image: "https://m.media-amazon.com/images/I/61NjSOddKhL._SX679_.jpg", secondary: "https://m.media-amazon.com/images/I/71C9um4lClL._SY450_.jpg", isHovered: false },
                { id: 4, name: "Lorem ipsum dolor sit amet.", price: 265, image: "https://m.media-amazon.com/images/I/516hgtw2o8L._SY355_.jpg", secondary: "https://m.media-amazon.com/images/I/61zxmUtWyxL._SY355_.jpg", isHovered: false },
                { id: 5, name: "Lorem ipsum dolor sit amet.", price: 80, image: "https://m.media-amazon.com/images/I/51gpwsRLVFL._SY450_.jpg", secondary: "https://m.media-amazon.com/images/I/61C-mSFIRIL._SY450_.jpg", isHovered: false },
                { id: 6, name: "Lorem ipsum dolor sit amet.", price: 299, image: "https://m.media-amazon.com/images/I/61fqwozv1BL._SY450_.jpg", secondary: "https://m.media-amazon.com/images/I/61P5TLxoeHL._SY450_.jpg", isHovered: false },
                { id: 7, name: "Lorem ipsum dolor sit amet.", price: 340, image: "https://m.media-amazon.com/images/I/71tj31hRI1L._SX466_.jpg", secondary: "https://m.media-amazon.com/images/I/61cUGvXkjtL._SY450_.jpg", isHovered: false },
                { id: 8, name: "Lorem ipsum dolor sit amet.", price: 265, image: "https://m.media-amazon.com/images/I/51FlDhK77dL._SY450_.jpg", secondary: "https://m.media-amazon.com/images/I/61aUDz7HxIL._SY450_.jpg", isHovered: false },
            ],
            badges: [
                {
                    image: "data:image/png;base64,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",
                    name: "Easy Returns"
                },
                {
                    image: "data:image/png;base64,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",
                    name: "1 Year Warranty"
                },
                {
                    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTElEQVR4nO2ZS2xNURSGv2olaCkDIU0x8ChC0DLwSIzExCNCg4kYCErFSBkQBEmnpJ5BVJuYeM2olmEjRBAJYuCtiXhTVaKtrOQ/yU573J57e3q7m9wvOcm9Z+299lpnr73P2utAhgwZMmTwnCJgJ9AAPAGagVagCagHdgOTk9A3Bdijvk3S1Szddq8CmBSnA7OBm0BHhKsduA7MTKBvltq0R9TZAJT0xIGBQJUz4CfgNLBMs5MLDALGAEuB48Bntf0L7AeyHX32+6Bkgb5jwBLpMF250r0cOKM2wQM6AuQk68QI4JaU/AQOAMMi9BsK7FOYWN/zcsCuWt0z2V617Y5hcr7FmZ3hycxE4MRrhUKyWGi9ko5ax4mXwIwU9JUAbxxnIs1MleNEAakzTjqCWDfHxvZAX4HjzOEoC7td4ZTKTIQ9yVZdxTHoK1aYtXWnL9idbE3ERYWuuDgkG22LDqXI2U2iLOyoBIs9LvKd3XFiWINdEtoW6ztnZeuOMGG9hLaH+84K2XojTPhMwgn4T5FsfRom/CFhHv6TJ1vN5i4Eb09LFXxniJN1dOGdhD15CaaLQtlqL8guPJSwR5lmmpgjWx+ECWsk3Iz/bJWt58KE5RJW4z81snXL/05sJvzi+YIfDHyTrbYNh3JPDUrxlzWy8U6iRtvUyBzKwj+ygPuysay7aWtSw5X4xyrZ9jZK+Jc7e7Rlmr6QLwf+u8g7Y8fIu+pgWaYvVMum28kcC6Y7BYRN9D1lsuUXMDXZzhvU+TewiL5jsWwwW9anqiQoRFgFcB7pZ4ESw0gFh0RYLF5wnEnnzCwEvmvsi3Ecl63OddWJ0bX0Pms1lo15STbEQrZKmEGN6mQq5cuI41Q6Zdqa3hgnS+XQNg1yTaXVuDBdddLdprJqr2YXVrD+qgGfA3Nj0DkfeOEkrVbYTgtWoHjkVN4rU4zjHH1z+SNdT5SFp70AcMpZN43A+CQfRqPz2eCEPiv06QsrOO+36AkPSNDe4n6jU7V5r28uXjASuOzMTp0KBJ0pVFGtw9lara93lAIfZKRtCKsdmVUwPzoL2mbFa0YDV5ynbmnOUee/zdwo+hHrlNYEDtibejv9lGnAY132u1+T79lJMwPp4B+umggDgRN8wAAAAABJRU5ErkJggg==",
                    name: "Loved by 30000+ Women"
                },
                {
                    image: "data:image/png;base64,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",
                    name: "Anti Tarnish Waterproof"
                },
            ]
        }
    },
    methods: {
        setMainImage(image) {
            this.triggerTransition(() => {
                this.mainImage = image;
            });
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
        prevImage() {
            const currentIndex = this.thumbnails.indexOf(this.mainImage);
            const prevIndex = (currentIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
            this.triggerTransition(() => {
                this.mainImage = this.thumbnails[prevIndex];
            });
        },
        nextImage() {
            const currentIndex = this.thumbnails.indexOf(this.mainImage);
            const nextIndex = (currentIndex + 1) % this.thumbnails.length;
            this.triggerTransition(() => {
                this.mainImage = this.thumbnails[nextIndex];
            });
        },
        triggerTransition(callback) {
            this.transitioning = true;
            setTimeout(() => {
                callback();
                setTimeout(() => {
                    this.transitioning = false;
                }, 300); // Duration matches the CSS transition time
            }, 10);
        },
    },
    beforeUnmount() {
        // Clean up LightGallery instance before the component is unmounted
        this.destroyLightGallery();
    },
}
</script>

<style scoped>
.star {
    color: gold;
}

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

.lightgallery img {
    cursor: pointer;
}

/* Smooth transition for main image */
.transition-image {
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
}

.transition-image.fade-in {
    opacity: 0;
}

/* Arrow Button Styles */
.arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000;
}

.left-arrow {
    left: 5px;
}

.right-arrow {
    right: 5px;
}

.arrow-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* Add any additional custom styles here */
</style>