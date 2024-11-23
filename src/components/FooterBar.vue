<template>
    <footer class="bg-light py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <router-link to="/">
                        <img src="/img/logo.png" alt="Logo" style="width:150px; height: 150px;object-fit: contain;">
                    </router-link>
                    <p class="text-uppercase fw-bold">E.com</p>
                </div>

                <!-- Contact Us -->
                <div class="col-md-6 mb-4">
                    <h5 class="text-uppercase mb-3">Contact Us</h5>
                    <p class="text-muted">r k puram sector 5 , new delhi , 110022</p>
                    <p class="text-muted">Call Us: <strong>(011) 23456789</strong><br>Mon-Fri: 9:00am - 5:00pm</p>
                    <p class="text-muted">Email Us: test@gmail.com</p>
                    <p class="text-muted">WhatsApp Us: +91 1234567890</p>
                    <a href="#" class="text-muted">Report Product Related Issues</a>
                </div>
            </div>

            <hr class="my-4">

            <div class="text-center text-muted">
                <p>&copy; 2024 E Com . All Rights Reserved.</p>
                <p class="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad sint omnis voluptatibus
                    hic velit quod voluptatum ab illo aperiam amet.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar',
    data() {
        return {
            quickLinks: ['Ask the Experts', 'Blog', 'Careers', 'Contact Us', 'FAQs', 'Health Help', 'Herb Finder', 'Loyalty Program', 'Research Papers', 'Store Locator', 'Refund policy', 'Terms of Service'],
            policies: ['Shipping', 'Returns & Cancellation', 'Terms of Use', 'Privacy Policy']
        }
    }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>