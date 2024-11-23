<template>
    <CartTopNav></CartTopNav>
    <div class="container mt-5" style="padding:80px 12px;">
        <CartStepper></CartStepper>
        <MiniAddressNav></MiniAddressNav>
        <div class="row mt-3">
            <div class="col-12 col-md-8 ">
                <div class="border p-2" v-for="(product, productIndex) in products" :key="productIndex">
                    <div class=" d-flex p-2">
                        <img class="rounded" :src="product.image" style="height: 155px; width: 125px; object-fit: fill;">
                        <div class="d-md-flex justify-content-between ms-2 w-100 p-2">
                            <div class="">
                                <p class=" mb-0" style="font-weight: 600;">{{ product.name }}</p>
                                <small class="text-muted">{{ product.type }}</small>
                                <p>Size: {{ product.size }}</p>
                                <p>Qty: {{ product.qty }}</p>
                                <div class="" >
                                    <img class="rounded-circle" :src="product.color"
                                        style="width:40px;height:40px; object-fit: cover; margin: 0.05rem;" />
                                </div>
                                <div class="d-flex my-2 gap-2">
                                    <div class="form-group w-100">
                                        <label for="sizeSelect">Size:</label>
                                        <select v-model="product.selectedSize" class="form-control" id="sizeSelect">
                                            <option v-for="(size, sizeIndex) in product.sizes" :key="sizeIndex"
                                                :value="size.name">
                                                {{ size.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group w-100">
                                        <label for="quantitySelect">Qty:</label>
                                        <select v-model="product.selectedQuantity" class="form-control" id="quantitySelect">
                                            <option v-for="(qty, qtyIndex) in product.quantities" :key="qtyIndex"
                                                :value="qty.name">
                                                {{ qty.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <p class="mb-0 fw-bold">₹ {{ product.price }}</p>
                                <small class="mb-0">Estimated Delivery by {{ product.date }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="d-md-none d-flex gap-2">
                        <button class="btn btn-outline-dark w-100" @click="removeProduct(productIndex)">Remove</button>
                        <button class="btn btn-outline-dark w-100">Move to WishList</button>
                    </div>
                    <div class="d-md-flex d-none justify-content-end gap-2">
                        <button class="btn btn-outline-dark " @click="removeProduct(productIndex)">Remove</button>
                        <button class="btn btn-outline-dark ">Move to WishList</button>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-4">
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
                <PriceDetails />
            </div>

        </div>
        <router-link to="/address-page">
            <button class="btn btn-dark">Next</button>
        </router-link>
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
            selectedSize: ''
        };
    },
    computed: {
        products() {
            // return this.$store.getters['cart/getCart'];
            return this.$store.getters.getCartItem;
        }
    },
    components: {
        PriceDetails,
        CartTopNav,
        CartStepper,
        MiniAddressNav
    },
    methods: {
        removeProduct(productIndex) {
            this.$store.dispatch("removeProduct", productIndex);
           
        },
        showId() {
            console.log(
                this.products.find((prod) => prod.id == 1).price
            )
        }
    }
}
</script>