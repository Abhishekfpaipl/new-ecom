<template>
    <div class="container my-5 position-relative">
        <div id="reviewCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <!-- Loop through reviews using v-for -->
                <div class="carousel-item" v-for="(review, index) in reviews" :key="index"
                    :class="{ active: index === 0 }">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex flex-column justify-content-center h-100">
                                <div class="customer-review">
                                    <div class="d-flex align-items-center mb-3">
                                        <!-- Render stars dynamically -->
                                        <i v-for="star in review.stars" :key="star"
                                            class="bi bi-star-fill text-warning me-1"></i>
                                    </div>
                                    <p class="lead">{{ review.content }}</p>
                                    <p class="text-muted">— {{ review.author }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-end">
                                <img :src="review.image" :alt="`Image for ${review.author}`" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Carousel Controls -->
            <i class="bi bi-arrow-left-circle text-dark fs-1 position-absolute top-50 start-0 translate-middle-y"
                data-bs-target="#reviewCarousel" data-bs-slide="prev" style="cursor: pointer;"></i>
            <i class="bi bi-arrow-right-circle text-dark fs-1 position-absolute top-50 end-0 translate-middle-y"
                data-bs-target="#reviewCarousel" data-bs-slide="next" style="cursor: pointer;"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewCarousel",
    data() {
        return {
            reviews: [
                {
                    stars: 5,
                    content:
                        "The necklace I purchased from Andees is absolutely stunning! The craftsmanship is impeccable, and the design is so unique. I’ve received countless compliments every time I wear it. It’s truly a piece of art that I’ll cherish forever.",
                    author: "Sophia, New York",
                    image: "/img/jewel1.jpg",
                },
                {
                    stars: 5,
                    content:
                        "I bought a pair of earrings from Andees, and they are simply perfect. The sparkle is incredible, and they feel so lightweight yet luxurious. The quality is unmatched, and they’re now my go-to accessory for every occasion.",
                    author: "Aditi, London",
                    image: "/img/jewel2.jpg",
                },
                {
                    stars: 5,
                    content:
                        "Jagdamba Jewellers's bracelets are nothing short of amazing! The intricate detailing and premium materials make them stand out. It was the perfect gift for my sister, and she absolutely loves it. Highly recommend for anyone looking for timeless jewelry!",
                    author: "Rajesh, Mumbai",
                    image: "/img/jewel3.jpg",
                },
            ]
        };
    },
};
</script>

<style scoped>
.customer-review {
    max-width: 480px;
}

.carousel .bi-arrow-left-circle,
.carousel .bi-arrow-right-circle {
    z-index: 10;
    /* Ensure the arrows stay on top of the carousel */
}
</style>