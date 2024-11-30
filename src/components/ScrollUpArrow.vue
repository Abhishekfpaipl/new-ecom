<template>
    <div>
        <!-- Scroll Up Button -->
        <button v-show="showScrollButton" @click="scrollToTop" class="btn btn-dark scroll-up-button">
            ↑
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showScrollButton: false,
        };
    },
    methods: {
        // Scroll to the top of the page
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        // Handle scroll event
        handleScroll() {
            this.showScrollButton = window.scrollY > 200; // Show button if scrolled down 200px
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style>
.scroll-up-button {
    position: fixed;
    bottom: 60px;
    right: 20px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0.8;
    transition: opacity 0.3s;
}

.scroll-up-button:hover {
    opacity: 1;
}
</style>