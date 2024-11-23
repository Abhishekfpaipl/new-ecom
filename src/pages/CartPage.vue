<template>
    <div class="">
        <div class="container py-4">
            <h1 class="h3 mb-4">Shopping Cart</h1>

            <!-- Timer Alert -->
            <div class="alert alert-warning d-flex align-items-center mb-4" role="alert">
                <svg class="bi flex-shrink-0 me-2 text-warning" width="24" height="24" role="img" aria-label="Warning:">
                    <circle cx="12" cy="12" r="10" fill="#ffc107" />
                    <path
                        d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                    <path
                        d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                </svg>
                <div>
                    These products are limited, checkout within {{ formatTime(timeRemaining) }}
                </div>
            </div>

            <!-- Cart Items -->
            <div class="card mb-4">
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
                                        Polish: {{ item.polish }}<br>
                                        Name Letter: {{ item.nameLetter }}
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
                                ₹{{ item.price.toFixed(2) }}
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
                            <p class="mb-0 text-center">₹{{ (item.price * item.quantity).toFixed(2) }}</p>
                        </div>

                        <!-- Remove Button (Desktop) -->
                        <div class="d-none d-md-flex">
                            <button @click="removeItem(item.id)" class="btn btn-link text-danger p-0">Remove</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cart Summary -->
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{{ subtotal.toFixed(2) }}</span>
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
            cartItems: [
                {
                    id: 1,
                    name: 'IRIS INITIAL NECKLACE',
                    image: 'https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360',
                    size: '14-16',
                    polish: 'Gold',
                    nameLetter: 'Libra,A',
                    price: 2849.00,
                    quantity: 1
                },
                {
                    id: 2,
                    name: 'IRIS INITIAL NECKLACE',
                    image: 'https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360',
                    size: '14-16',
                    polish: 'Gold',
                    nameLetter: 'Libra,A',
                    price: 2849.00,
                    quantity: 1
                },
            ]
        }
    },
    computed: {
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