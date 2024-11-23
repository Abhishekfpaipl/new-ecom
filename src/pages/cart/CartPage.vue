<template>
    <CartTopNav></CartTopNav>
    <div class="container" style="padding:80px 12px;">
        <CartStepper></CartStepper>
        <MiniAddressNav></MiniAddressNav>
        <div v-if="cart.length === 0"
            class="bg-light w-100 d-flex flex-column justify-content-center align-items-center my-1"
            style="height: 50%; padding: 90px 0px;">
            <i class="bi bi-cart fs-1"></i>
            <h3>Your cart is empty.</h3>
            <router-link to="/" class="text-decoration-none text-dark mt-3">
                <button class="btn btn-warning">Stat Shopping</button>
            </router-link>
        </div>
        <div class="bg-light p-2 mt-2" v-if="reqAmt > grandTotalWithGSTAndAmount">
            You're just ₹{{ reqAmt - grandTotalWithGSTAndAmount }} away from unlocking free delivery!
            Shipping charges on the below order are ₹99.
        </div>

        <div v-else class="bg-light p-2 mt-2">
            Congratulations! You have successfully unlocked free delivery on this order.
            Shipping is free for this order!
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-8 ">
                <div v-for="(ca, index) in cart" :key="index" class="border">
                    <div class="d-flex p-2">
                        <img class="rounded" :src="ProductById(ca.productId).images[0]"
                            style="height: 155px; width: 125px; object-fit: fill;">

                        <div class="d-md-flex justify-content-between ms-2 w-100 p-2">
                            <div class="">
                                <p class=" mb-0" style="font-weight: 600;">{{ ProductById(ca.productId).name }}</p>
                                <small class="text-muted">{{ ProductById(ca.productId).type }}</small>
                                <div class="d-flex gap-3">
                                    <!-- <div class="d-flex gap-2">
                                        <p class="mb-0">Size:</p>
                                        <p class="mb-0">{{ ca.size }}</p>
                                    </div> -->
                                    <div class="form-group w-100 d-flex">
                                        <label for="sizeSelect">Size:</label>
                                        <select v-model="ca.size" class="form-control-sm ms-2" id="sizeSelect">
                                            <option v-for="(size, sizeIndex) in ProductById(ca.productId).sizes"
                                                :key="sizeIndex" :value="size.name">
                                                {{ size.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <!-- <p class="my-1">Qty: 1</p> -->
                                    <div class="form-group w-100 d-flex">
                                        <label for="quantitySelect">Qty:</label>
                                        <select v-model="ProductById(ca.productId).selectedQuantity"
                                            class="form-control-sm ms-2" id="quantitySelect">
                                            <!-- <option v-for="(qty, qtyIndex) in  ProductById(ca.productId).quantities"
                                                :key="qtyIndex" :value="qty.name">
                                                {{ qty.name }}
                                            </option> -->
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-2 mt-3">
                                    <p class="mb-0">Color: </p>
                                    <img class="rounded-circle" :src="ca.color.img"
                                        style="width:40px;height:40px; object-fit: cover; margin: 0.05rem;" />
                                </div>
                            </div>
                            <div class="">
                                <p class="mb-0 fw-bold">₹ {{ ProductById(ca.productId).price }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-md-none d-flex gap-2 p-2">
                        <button class="btn btn-outline-dark w-100" @click="removeFromCart(ca)">Remove</button>
                        <button class="btn btn-outline-dark w-100"
                            @click="removeFromCart(ca); saveProduct(ProductById(ca.productId).id)">Move to WishList</button>
                    </div>
                    <div class="d-md-flex d-none justify-content-end gap-2 p-2">
                        <button class="btn btn-outline-dark " @click="removeFromCart(ca)">Remove</button>
                        <button class="btn btn-outline-dark "
                            @click="removeFromCart(ca); saveProduct(ProductById(ca.productId).id)">Move to WishList</button>
                    </div>
                    <!-- <div class="">
                        <p>Total {{ ProductById(ca.productId).price * ProductById(ca.productId).selectedQuantity }}</p>
                    </div> -->
                </div>
            </div>

            <div class="col-12 col-md-4">
                <div v-if="cart.length !== 0">
                    <div class="bg-warning p-2 my-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Save an additional Rs 251.43 on this order.
                            </label>
                        </div>
                    </div>
                    <div class="accordion mb-2" id="accordionExample">
                        <div class="accordion-item my-2">
                            <h2 class="accordion-header">
                                <button class="accordion-button d-flex align-item-center collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#coupon" aria-expanded="true"
                                    aria-controls="coupon">
                                    <i class="bi bi-tag fs-4 me-2"></i> Apply Coupon
                                </button>
                            </h2>
                            <div id="coupon" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Coupon Code"
                                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                                        <span class="input-group-text" id="basic-addon2">Apply</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item my-2">
                            <h2 class="accordion-header">
                                <button class="accordion-button d-flex align-item-center collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#voucher" aria-expanded="false"
                                    aria-controls="voucher">
                                    <i class="bi bi-tag fs-4 me-2"></i> Gift Voucher
                                </button>
                            </h2>
                            <div id="voucher" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Gift Voucher Code"
                                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                                        <span class="input-group-text" id="basic-addon2">Apply</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PriceDetails :getCartSummary="getCartSummary" :gstAmount="gstAmount"
                        :grandTotalWithGSTAndAmount="grandTotalWithGSTAndAmount" />
                </div>
            </div>

        </div>
        <router-link to="/address-page">
            <button class="btn btn-dark">Next</button>
        </router-link>
    </div>
    <div class="d-xl-none d-block">
        <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
            <div class="w-100 d-flex align-items-center justify-content-around position-fixed"
                style="height: 63px; bottom: 0; background: #f6f6f6;">
                <router-link to="/" class="text-dark text-decoration-none">
                    <div class="ms-3">
                        <i class="bi bi-shop-window fs-2" style="color: #E35D6A;"></i>
                    </div>
                </router-link>
                <div>
                    <p class="m-0 text-center fw-bold">{{ cart.length }} Catalog</p>
                </div>
                <div class="me-3">
                    <router-link to="/address-page" class="text-decoration-none text-dark">
                        <div class="d-flex align-items-center">
                            <button class="btn btn-warning border py-2 d-flex">
                                <p class="text-center m-0 fw-bold">₹ {{ grandTotalWithGSTAndAmount }}</p>
                                <i class="bi bi-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </router-link>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>
import CartTopNav from '@/components/Navbar/CartTopNav.vue';
import PriceDetails from './PriceDetails.vue';
import CartStepper from './CartStepper.vue';
import MiniAddressNav from './MiniAddressNav.vue';

export default {
    data() {
        return {
            selectedSize: '',
            reqAmt: 1000,
        };
    },
    computed: {
        cart() {
            return this.$store.getters['catalog/getCart']
        },
        getCartSummary() {
            return this.$store.getters['catalog/getCartSummary']
        },
        gstAmount() {
            return this.getCartSummary * 0.18;
        },
        grandTotalWithGSTAndAmount() {
            return this.getCartSummary + this.gstAmount;
        }
    },
    components: {
        PriceDetails,
        CartTopNav,
        CartStepper,
        MiniAddressNav
    },
    methods: {
        ProductById(productId) {
            return this.$store.getters['catalog/getProduct'](productId)
        },
        removeFromCart(productId) {
            const index = this.cart.indexOf(productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
        saveProduct(productId) {
            this.$store.dispatch('catalog/saveProduct', productId)
        },
    }
}
</script>