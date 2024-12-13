<template>
    <div class="container-fluid top-padding" style="background-color: var(--primary-color);">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="mb-4">GET IN TOUCH</h2>
                    <form @submit.prevent="submitForm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="fullName" placeholder="Your Full Name" v-model="fullName" required>
                            <label for="fullName" class="form-label">Your Full Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" placeholder="Your Email Address" v-model="email" required>
                            <label for="email" class="form-label">Your Email Address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="tel" class="form-control" id="mobileNumber" placeholder="Your Mobile Number" v-model="mobileNumber" required>
                            <label for="mobileNumber" class="form-label">Your Mobile Number</label>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="message" placeholder="Your Message" rows="3" v-model="message" required></textarea>
                            <!-- <label for="message" class="form-label">Your Message</label> -->
                        </div>
                        <button type="submit" class="btn btn-primary">SUBMIT NOW</button>
                    </form>
                </div>
                <div class="col-md-6">
                    <div class="text-start">
                        <p>Like to speak to us about our jewellery or an order you've placed?<br>
                            We'll be here Monday to Friday, 10am-6pm (IST).</p>
                        <p><i class="bi bi-envelope"></i> help@jagdambajewellers.com</p>
                        <p>Our dedicated team will aim to get back to you within 24 working hours. If you have an urgent
                            request or experiencing problems placing your order online, please call us on the number above.
                        </p>
                        <p>Put pen to paper and send us a letter or return an item to:<br>
                            28 Promenade, 25/1 Rowland Road, Kolkata 700020</p>
                        <p>What happens next?<br>
                            You will receive an automated email from us acknowledging we have received your message. Our
                            team will always do our best to respond to your query within 12 working hours.</p>
                        <p>Press Enquiries<br>
                            For any PR queries email us at help@jagdambajewellers.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GetInTouch',
    data() {
        return {
            fullName: '',
            email: '',
            mobileNumber: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            // Handle form submission here
            console.log({
                fullName: this.fullName,
                email: this.email,
                mobileNumber: this.mobileNumber,
                message: this.message
            })
        }
    }
}
</script>