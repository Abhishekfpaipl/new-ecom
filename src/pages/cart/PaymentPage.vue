<template>
    <CartTopNav></CartTopNav>
    <div class="container " style="padding: 80px 12px;">
        <CartStepper></CartStepper>
        <MiniAddressNav></MiniAddressNav>
        <CartSummary>
            <p class="mb-2 fw-bold">Payment Options</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#UPI"
                            aria-expanded="true" aria-controls="UPI">
                            UPI
                        </button>
                    </h2>
                    <div id="UPI" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                                <input type="radio" class="btn-check " name="vbtn-radio" id="Gpay" autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="Gpay">Gpay</label>
                                <input type="radio" class="btn-check " name="vbtn-radio" id="PayTm UPI" autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="PayTm UPI">PayTm UPI</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#Wallets" aria-expanded="false" aria-controls="Wallets">
                            Wallets
                        </button>
                    </h2>
                    <div id="Wallets" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                                <input type="radio" class="btn-check " name="vbtn-radio" id="Paytm" autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="Paytm"><i
                                        class="bi bi-wallet mx-1 text-center "></i>Paytm</label>
                                <input type="radio" class="btn-check " name="vbtn-radio" id="PhonePe" autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="PhonePe"><i
                                        class="bi bi-wallet mx-1 text-center "></i>PhonePe</label>
                                <input type="radio" class="btn-check " name="vbtn-radio" id="FreeCharge" autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="FreeCharge"><i
                                        class="bi bi-wallet mx-1 text-center "></i>FreeCharge</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#Card" aria-expanded="false" aria-controls="Card">
                            Credit & Debit Cards
                        </button>
                    </h2>
                    <div id="Card" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="card">
                                <div class="card-header">
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control" id="cardNumber"
                                            placeholder="xxxx xxxx xxxx xx">
                                        <label for="cardNumber">Card Number</label>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <div class="">
                                            <div class="form-floating mb-3">
                                                <input type="number" class="form-control" id="Month"
                                                    placeholder="name@example.com">
                                                <label for="Month">Month</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="number" class="form-control" id="Year"
                                                    placeholder="name@example.com">
                                                <label for="Year">Year</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control" id="CVV" maxlength="3"
                                                    v-model="cvvValue" @input="handleInput" placeholder="name@example.com">
                                                <label for="CVV">CVV</label>
                                            </div>
                                            <div v-if="isInvalidCVV" class="text-danger">CVV must be exactly 3 digits.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="cardNumber"
                                            placeholder="name@example.com">
                                        <label for="cardNumber">Card Holder Name</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#Netbanking" aria-expanded="false" aria-controls="Netbanking">
                            Netbanking
                        </button>
                    </h2>
                    <div id="Netbanking" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                                <input type="radio" class="btn-check " name="vbtn-radio" id="vbtn-radio1" autocomplete="off"
                                    checked>
                                <label class="btn btn-outline-danger my-2" for="vbtn-radio1"><i
                                        class="bi bi-bank mx-1 text-center "></i>HDFC</label>
                                <input type="radio" class="btn-check " name="vbtn-radio" id="vbtn-radio2"
                                    autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="vbtn-radio2"><i
                                        class="bi bi-bank mx-1 text-center "></i>ICICI</label>
                                <input type="radio" class="btn-check " name="vbtn-radio" id="vbtn-radio3"
                                    autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="vbtn-radio3"><i
                                        class="bi bi-bank mx-1 text-center "></i>SBI</label>
                                <input type="radio" class="btn-check " name="vbtn-radio" id="vbtn-radio4"
                                    autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="vbtn-radio4"><i
                                        class="bi bi-bank mx-1 text-center "></i>Axis</label>
                            </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>HDFC</option>
                                <option value="1">ICICI</option>
                                <option value="2">SBI</option>
                                <option value="3">Axis</option>
                                <option value="4">Andra Bank</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#COD" aria-expanded="false" aria-controls="COD">
                            Cash On Delivery
                        </button>
                    </h2>
                    <div id="COD" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                                <input type="radio" class="btn-check " name="vbtn-radio" id="Cod" autocomplete="off">
                                <label class="btn btn-outline-danger my-2" for="Cod">Cod</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CartSummary>
    </div>
    <div class="">
        <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
            <div class="w-100 d-flex align-items-center justify-content-around position-fixed"
                style="height: 63px; bottom: 0; background: #f6f6f6;">
                <router-link to="/" class="text-dark text-decoration-none">
                    <div class="ms-3">
                        <i class="bi bi-shop-window fs-2" style="color: #E35D6A;"></i>
                    </div>
                </router-link>
                <div>
                    <p class="m-0 text-center fw-bold">1 Catalog</p>
                </div>
                <div class="me-3">
                    <router-link to="/" class="text-decoration-none text-dark">
                        <div class="d-flex align-items-center">
                            <button class="btn btn-warning py-2">
                                Continue
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
import CartStepper from './CartStepper.vue';
import MiniAddressNav from './MiniAddressNav.vue';
import CartSummary from './CartSummary.vue';

export default {
    components: { CartTopNav, CartStepper, MiniAddressNav, CartSummary },
    data() {
        return {
            cvvValue: "",
            isInvalidCVV: false,
        };
    },
    methods: {
        handleInput() {
            // Check the length of the input and set isInvalidCVV accordingly
            if (this.cvvValue.length > 3) {
                this.cvvValue = this.cvvValue.slice(0, 3); // Truncate the input to 3 characters
            }
            this.isInvalidCVV = this.cvvValue.length !== 3;
        },
    },
};
</script>
  
 
  