<template>
    <div class="container-fluid top-padding" style="background-color: var(--primary-color);">
        <div class="container my-5">
            <div class="text-center mb-5">
                <h1 class="mb-3 display-4 fw-bold text-dark">A Brand of Excellence and Sophistication</h1>
                <p class="lead text-secondary">A brand of excellence, a symbol of sophistication!</p>
            </div>

            <div class="row mb-5">
                <div class="col-12">
                    <div class="p-4 bg-transparent rounded shadow-sm">
                        <h2 class="mb-3 text-dark">Our Story</h2>
                        <p class="text-muted">
                            Our story is deeply rooted in the belief that every woman deserves to feel beautiful and
                            confident. We want to create a community of empowered women who inspire each other via
                            their unique journeys. Join us as we celebrate the power of self-expression through our
                            sterling silver jewellery collection.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-6">
                    <div class="p-4 bg-transparent rounded shadow-sm h-100">
                        <h2 class="mb-3 text-dark">Our Approach</h2>
                        <p class="text-muted">
                            We prioritize the needs of our customers by offering a diverse range of affordable and
                            fashionable silver jewellery. We value transparency and honesty in our business
                            practices, ensuring a trusted relationship with our customers. We want every customer to
                            feel special and confident in their purchase.
                        </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-4 bg-transparent rounded shadow-sm h-100">
                        <h2 class="mb-3 text-dark">Our Philosophy</h2>
                        <p class="text-muted">
                            We are totally centered on the belief that every woman deserves to feel beautiful and
                            confident. We strive to create accessible and high-quality silver jewellery that
                            empowers
                            women to embrace their unique style and express themselves. Our ultimate philosophy is
                            to
                            inspire and uplift women around the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center mb-4">Who's Jagdamba Jewellers Jwellers?</h2>
                    <p class="text-center">At Jagdamba Jewellers Jwellers, we believe that jewellery is not just an
                        accessory but an
                        expression of your unique personality. Our collection is designed to help you define
                        yourself,
                        to be
                        a part of your journey, and to celebrate every milestone along the way.</p>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-6">
                    <img src="https://whitehathi.com/cdn/shop/files/Rectangle_514.png?v=1679741099" class="w-75" alt="">
                </div>
                <div class="col-md-6">
                    <div class="text-start">
                        <h2>Our Mission</h2>
                        <p>To create quality jewellery to be worn every day.</p>
                        <p>Our mission is to provide high-quality, unique, and affordable jewellery that captures your
                            individuality. Every piece of our jewellery is thoughtfully crafted with love and care to
                            help
                            you tell your story.</p>
                        <p>Every piece of jewellery has been designed by us, in India. We only work with 100% recycled
                            sterling silver, nothing less, so you can feel confident that you're wearing a piece to
                            treasure
                            for years to come.</p>
                    </div>
                </div>
            </div>
            <div class="row mt-4 align-items-center"> 
                <div class="col-md-6 order-2 order-md-1 ">
                    <div class="text-end">
                        <h2>To Create Jewellery That Tells Your Story</h2>
                        <p>We want to invite you into our world and come along for the ride in yours. Jewellery is our
                            armour, it's our life tapestry, our narrative. Whether instilled by us or created by you,
                            every
                            single piece has meaning.</p>
                        <h2>To Provide Affordable Luxury</h2>
                        <p>With a female-led team, we're passionate about empowering and celebrating women in all their
                            forms. We make jewellery for you, that will look great on him too.</p>
                        <h2>To Give Back</h2>
                        <p>We are passionate about giving back to our community. We believe that small actions can make
                            a
                            big difference, and that's why we donate a portion of our profits to support local charities
                            and
                            initiatives that promote education and health.</p>
                    </div>
                </div>
                <div class="col-md-6 order-1  ">
                    <img src="https://whitehathi.com/cdn/shop/files/Rectangle_515.png?v=1679741207" class="w-75" alt="">
                </div>
            </div>
        </div>

        <!-- <div class="row d-none d-md-flex">
                <div class="col mb-4" v-for="(image, index) in images" :key="index">
                    <img :src="image.src" :alt="image.alt" class="img-fluid w-100">
                </div>
            </div>
            <div class="d-md-none pb-5"> 
                <div class="overflow-hidden w-100 position-relative slider-container">
                    <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                        <div v-for="(image, index) in images" :key="index" class="slide">
                            <img :src="image.src" :alt="image.alt" class="img-fluid w-100" />
                        </div>
                    </div>
                </div>
 
                <div class="d-flex justify-content-center gap-2 mt-3">
                    <span v-for="(image, index) in images" :key="index" class="indicator"
                        :class="{ active: currentIndex === index }" @click="goToSlide(index)"></span>
                </div>
            </div> -->
    </div>
</template>

<script>
export default {
    name: 'OurMission',
    data() {
        return {
            images: [
                {
                    src: "https://whitehathi.com/cdn/shop/files/Rectangle_511.png?v=1679740786",
                    alt: "Image 1",
                },
                {
                    src: "https://whitehathi.com/cdn/shop/files/Rectangle_510.png?v=1679740786",
                    alt: "Image 2",
                },
                {
                    src: "https://whitehathi.com/cdn/shop/files/Rectangle_509.png?v=1679740786",
                    alt: "Image 3",
                },
                {
                    src: "https://whitehathi.com/cdn/shop/files/Rectangle_513.png?v=1679740786",
                    alt: "Image 4",
                },
                {
                    src: "https://whitehathi.com/cdn/shop/files/Rectangle_512.png?v=1679740786",
                    alt: "Image 5",
                },
            ],
            currentIndex: 0,
        };
    },
    methods: {
        goToSlide(index) {
            this.currentIndex = index;
        },
    },
};
</script>

<style scoped>
/* Slider styles */

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
}

.indicator {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
}

.indicator.active {
    background-color: #000;
}
</style>