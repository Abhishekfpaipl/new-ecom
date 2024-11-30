
<template>
    <div class=" py-5" style="background-color: var(--primary-color);">
        <div class="container">
            <h2 class="text-center mb-5">LOVED BY CELEBRITIES</h2>

            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item" v-for="(testimonial, index) in testimonials" :key="index"
                        :class="{ active: index === 0 }">
                        <div class="row justify-content-center">
                            <div class="col-md-8 text-center">
                                <img :src="testimonial.image" :alt="testimonial.name" class="testimonial-img mb-4">
                                <p class="mb-3 text-white">{{ testimonial.quote }}</p>
                                <cite class="text-white">{{testimonial.name}}</cite>
                                <blockquote class="blockquote">
                                    <!-- <footer class="blockquote-footer">
                                        <cite title="Source Title">{{ testimonial.name }}</cite>
                                    </footer> -->
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel"
                    data-bs-slide="prev">
                    <i class="bi bi-arrow-left text-dark fs-1"></i>
                    <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span> -->
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel"
                    data-bs-slide="next">
                    <i class="bi bi-arrow-right text-dark fs-1"></i>
                    <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span> -->
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialCarousel',
    data() {
        return {
            testimonials: [
                {
                    name: 'Nauheed Cyrusi',
                    quote: 'Definition of perfection. Your pieces are just the daintiest and prettiest ever!',
                    image: 'https://whitehathi.com/cdn/shop/files/Rectangle_33.jpg?v=1678792425'
                },
                {
                    name: 'Simone Khambatta',
                    quote: "I'm obsessed with everything you make! I can't get enough of it!",
                    image: 'https://whitehathi.com/cdn/shop/files/Simone.png?v=1689347831'
                },
                {
                    name: 'Richa',
                    quote: "I recently purchased a piece of jewellery and I'm really very happy with my purchase.",
                    image: 'https://whitehathi.com/cdn/shop/files/Rectangle_33_7e61e2b4-6525-46ac-bfa8-f5f2b860c55d.svg?v=1680523178'
                }
            ]
        }
    },
    mounted() {
        // Initialize Bootstrap carousel
        new window.bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
            interval: 5000,
            touch: true
        })
    }
}
</script>

<style scoped> 

.testimonial-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;
}

.carousel-control-prev,
.carousel-control-next {
    width: 5%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: #000;
    border-radius: 50%;
    padding: 10px;
}

.blockquote {
    font-size: 1.1rem;
    margin-top: 1.5rem;
}

.blockquote-footer {
    font-size: 1.2rem;
    color: #333;
    margin-top: 1rem;
}

.blockquote-footer cite {
    font-weight: bold;
}
</style>