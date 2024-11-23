<template>
    <div class="container" style="padding-top: 76px;">
        <div class="row mt-3">
            <!-- Product Images -->
            <div class="col-md-6 col-12">
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
            mainImage: 'https://m.media-amazon.com/images/I/51G+CJkiLUL._SX679_.jpg',
            thumbnails: [
                'https://m.media-amazon.com/images/I/51G+CJkiLUL._SX679_.jpg',
                'https://m.media-amazon.com/images/I/51FaOMJo19L._SX425_.jpg',
                'https://m.media-amazon.com/images/I/51idyVN4DfL._SX425_.jpg',
                'https://m.media-amazon.com/images/I/41EA-pNJ--L._SX425_.jpg',
                'https://m.media-amazon.com/images/I/51SGj88HplL._SX425_.jpg',
                'https://m.media-amazon.com/images/I/51P7+uAmCYL._SX425_.jpg',
            ],
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
            ]
        }
    },
    methods: {
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
    }
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

/* Add any additional custom styles here */
</style>