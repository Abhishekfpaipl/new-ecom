<template>
    <div class="contianer">
        <div class="d-md-none d-flex overflow-x-scroll gap-3 px-2" id="scroll">
            <div v-for="(collection, index) in products" :key="index">
                <router-link to="/product-page" class="text-decoration-none text-dark">
                    <div class="w-100">
                        <img :src="collection.image" style="width:180px;">
                    </div>
                    <p class="truncate mb-1" style="font-size: 12px;">{{ collection.name }}</p>
                    <p class="mb-2 " style="font-size: 12px;">₹{{ collection.price }}</p>
                </router-link>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="width: 300px;">
                <router-link to="/product-page" class="text-decoration-none text-dark">
                    <p class="fs-1" style="width:300px;">View All <i class="bi bi-chevron-right"></i></p>
                </router-link>
            </div>
        </div>
        <div class=" ">
            <div class="d-none d-md-flex overflow-x-scroll gap-3 px-2 " id="scroll" ref="gallery">
                <router-link to="/product-page" class="text-decoration-none text-dark"
                    v-for="(collection, index) in products" :key="index">
                    <div class="w-100">
                        <img :src="collection.image" style="width:300px;">
                    </div>
                    <p class="truncate mb-1" style="font-size: 12px;">{{ collection.name }}</p>
                    <p class="mb-2 " style="font-size: 12px;">₹{{ collection.price }}</p>
                </router-link>
                <!-- <div class="d-flex align-items-center justify-content-center" style="width: 300px;">
                    <router-link to="/product-page" class="text-decoration-none text-dark">
                        <p class="fs-1" style="width:300px;">View All <i class="bi bi-chevron-right"></i></p>
                    </router-link>
                </div> -->
            </div>
            <div class="d-flex align-items-center gap-3 ms-2">
                <i class="bi bi-arrow-left fs-1"  @click="scrollGallery(-1,)"></i> 
                <i class="bi bi-arrow-right fs-1" @click="scrollGallery(1,)"></i> 
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'HomeCollection',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            products: [
                { id: 1, name: "Lorem ipsum dolor sit amet.", price: 80, image: "https://whitehathi.com/cdn/shop/files/IMG_9973.jpg?v=1687946668&width=493", secondary: "https://whitehathi.com/cdn/shop/products/IMG_2378.jpg?v=1687946668&width=493", isHovered: false },
                { id: 2, name: "Lorem ipsum dolor sit amet.", price: 299, image: "https://whitehathi.com/cdn/shop/files/0N8A1043.jpg?v=1703223520&width=493", secondary: "https://whitehathi.com/cdn/shop/files/0N8A1043...1.jpg?v=1703223553&width=493", isHovered: false },
                { id: 3, name: "Lorem ipsum dolor sit amet.", price: 340, image: "https://whitehathi.com/cdn/shop/files/IMG_8171.jpg?v=1686219223&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8995-1.jpg?v=1686827276&width=493", isHovered: false },
                { id: 4, name: "Lorem ipsum dolor sit amet.", image: "https://whitehathi.com/cdn/shop/files/IMG_8880-1.jpg?v=1690360149&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8151-1.jpg?v=1690360149&width=493", isHovered: false },
                { id: 5, name: "Lorem ipsum dolor sit amet.", price: 80, image: "https://whitehathi.com/cdn/shop/files/IMG_9973.jpg?v=1687946668&width=493", secondary: "https://whitehathi.com/cdn/shop/products/IMG_2378.jpg?v=1687946668&width=493", isHovered: false },
                { id: 6, name: "Lorem ipsum dolor sit amet.", price: 299, image: "https://whitehathi.com/cdn/shop/files/0N8A1043.jpg?v=1703223520&width=493", secondary: "https://whitehathi.com/cdn/shop/files/0N8A1043...1.jpg?v=1703223553&width=493", isHovered: false },
                { id: 7, name: "Lorem ipsum dolor sit amet.", price: 340, image: "https://whitehathi.com/cdn/shop/files/IMG_8171.jpg?v=1686219223&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8995-1.jpg?v=1686827276&width=493", isHovered: false },
                { id: 8, name: "Lorem ipsum dolor sit amet.", image: "https://whitehathi.com/cdn/shop/files/IMG_8880-1.jpg?v=1690360149&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8151-1.jpg?v=1690360149&width=493", isHovered: false },

            ],
        }
    },
    computed: {
        showPrevious() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft > 0;
        },
        showNext() {
            const gallery = this.$refs.gallery;
            return gallery.scrollLeft + gallery.offsetWidth < gallery.scrollWidth;
        },
    },
    methods: {
        scrollGallery(direction) {
            const gallery = this.$refs.gallery;
            const scrollAmount = direction * 400;
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        },
    },

}
</script>
<style>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}


.prev-icon {
    position: absolute;
    top: 40%;
    left: 0px;
    background-color: #F4B700;
    padding: 8px;
    display: flex;
}

.next-icon {
    position: absolute;
    top: 40%;
    right: 0px;
    background-color: #F4B700;
    padding: 8px;
    display: flex;
}
</style>