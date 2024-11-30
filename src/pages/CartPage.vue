<template>
    <div class="top-padding" style="background-color: var(--primary-color);">
        <div class="container py-4">
            <h1 class="h3 mb-4">Shopping Cart</h1>

            <!-- Timer Alert -->
            <div class="alert alert-warning d-flex align-items-center mb-4" role="alert">
                <i class="bi bi-exclamation-triangle-fill"></i>
                <span class="ms-2">
                    These products are limited, checkout within {{ formatTime(timeRemaining) }}
                </span>
            </div>

            <!-- Cart Items -->
            <div class="card mb-4 rounded-0">
                <div class="card-body">
                    <div class="row d-none d-md-flex mb-3">
                        <div class="col-6">Product</div>
                        <div class="col-2">Price</div>
                        <div class="col-2">Quantity</div>
                        <div class="col-2">Total</div>
                    </div>

                    <div v-for="(item, index) in cartItems" :key="index" class="row align-items-center mb-3">
                        <!-- Product Info -->
                        <div class="col-12 col-md-6 mb-3 mb-md-0">
                            <div class="d-flex align-items-start">
                                <img :src="item.image" class="img-fluid me-3" style="width: 80px;" :alt="item.name">
                                <div class="w-100 text-start">
                                    <h6 class="mb-1">{{ item.name }}</h6>
                                    <div class="text-muted small">
                                        Size in "Inches": {{ item.size }}<br>
                                        <span v-if="item.color">
                                            Polish: {{ item.color.name }}<br>
                                        </span>
                                        <span>Name Letter: {{ item.letter }}</span> <br>
                                        <span v-if="item.charm">ZODIAC SIGN: {{ item.charm.name }}</span>
                                    </div>
                                    <div class="d-flex justify-content-end mt-2 d-md-none">
                                        <button @click="removeItem(item.id)"
                                            class="btn btn-link text-danger p-0 ">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Price -->
                        <div class="col-6 col-md-2">
                            <div class="d-md-none text-muted mb-1">Price:</div>
                            <p class="mb-0 text-center">
                                ₹{{ item.price }}
                            </p>
                        </div>

                        <!-- Quantity -->
                        <div class="col-6 col-md-2">
                            <div class="d-md-none text-muted mb-1">Quantity:</div>
                            <div class="d-flex w-100 align-items-center justify-content-between border">
                                <button @click="updateQuantity(item.id, -1)" class="btn ">-</button>
                                <span class="mx-2">{{ item.quantity }}</span>
                                <button @click="updateQuantity(item.id, 1)" class="btn">+</button>
                            </div>
                        </div>

                        <!-- Total -->
                        <div class="card-footer col-12 col-md-2 mt-5 mt-md-0 text-md-start">
                            <div class="d-md-none text-muted mb-1">Total:</div>
                            <p class="mb-0 text-center">₹{{ item.price * item.quantity }}</p>
                        </div>

                        <!-- Remove Button (Desktop) -->
                        <div class="d-none d-md-flex">
                            <button @click="removeItem(item.id)" class="btn btn-link text-danger p-0">Remove</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="card rounded-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{{ subtotal }}</span>
                    </div>
                    <div class="text-muted small mb-3">Tax included. Shipping calculated at checkout.</div>

                    <div class="alert alert-info mb-3">
                        Extra 5% OFF & Free Pendant<br>
                        on prepaid orders above ₹3000
                    </div>

                    <button class="btn btn-dark w-100 mb-2">
                        CHECKOUT
                        <p class="ms-2 mb-0">Additional Discount on Prepaid</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCart',
    data() {
        return {
            timeRemaining: 300, // 5 minutes in seconds
            // cartItems: [
            //     {
            //         id: 1,
            //         name: 'IRIS INITIAL NECKLACE',
            //         image: 'https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360',
            //         size: '14-16',
            //         polish: 'Gold',
            //         nameLetter: 'Libra,A',
            //         price: 2849.00,
            //         quantity: 1
            //     },
            //     {
            //         id: 2,
            //         name: 'IRIS INITIAL NECKLACE',
            //         image: 'https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360',
            //         size: '14-16',
            //         polish: 'Gold',
            //         nameLetter: 'Libra,A',
            //         price: 2849.00,
            //         quantity: 1
            //     },
            // ]
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters.getCart
        },
        subtotal() {
            return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        }
    },
    methods: {
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60)
            const remainingSeconds = seconds % 60
            return `${minutes}m${remainingSeconds}s`
        },
        updateQuantity(itemId, change) {
            const item = this.cartItems.find(item => item.id === itemId)
            if (item) {
                const newQuantity = item.quantity + change
                if (newQuantity > 0) {
                    item.quantity = newQuantity
                }
            }
        },
        removeItem(itemId) {
            const index = this.cartItems.findIndex(item => item.id === itemId)
            if (index !== -1) {
                this.cartItems.splice(index, 1)
            }
        },
        startTimer() {
            const timer = setInterval(() => {
                if (this.timeRemaining > 0) {
                    this.timeRemaining--
                } else {
                    clearInterval(timer)
                }
            }, 1000)
        }
    },
    mounted() {
        this.startTimer()
    }
}
</script>

<style scoped>
.btn-outline-secondary {
    padding: 0.25rem 0.5rem;
}

@media (max-width: 768px) {
    .card-body {
        padding: 1rem;
    }
}
</style>