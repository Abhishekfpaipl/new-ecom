<template>
    <footer class="footer pb-0" style="background-color: var(--primary-color);">
        <div class="container">
            <div class="row">
                <div v-for="(section, index) in footerSections" :key="index" class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h5 class="mb-3 text-start">{{ section.title }}</h5>
                    <p class="text-start" v-if="section.description">{{ section.description }}</p>
                    <p class="text-start" v-if="section.contactInfo">
                        <strong>Email:</strong> <a :href="'mailto:' + section.contactInfo.email">{{
                            section.contactInfo.email }}</a><br>
                        <strong>{{ section.contactInfo.hoursLabel }}:</strong> {{ section.contactInfo.hours }}
                    </p>
                    <ul v-if="section.links" class="list-unstyled">
                        <li v-for="(link, index) in section.links" :key="index" class="text-start">
                            <router-link :to="link.url">{{ link.text }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-white py-3">
            <div class="d-flex justify-content-center align-items-center gap-2">
                <div class="wh-60 p-1 px-2 rounded-circle bg-dark text-white">
                    <i class="bi bi-facebook"></i>
                </div>
                <div class="wh-60 p-1 px-2 rounded-circle bg-dark text-white">
                    <i class="bi bi-instagram"></i>
                </div>
                <div class="wh-60 p-1 px-2 rounded-circle bg-dark text-white">
                    <i class="bi bi-youtube"></i>
                </div>
            </div>
            <p class="text-center text-uppercase mb-2">© Copyright Covisor Infotech Pvt Ltd. 2024.</p>
            <p class="text-center text-uppercase mb-2">All rights reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
    data() {
        return {
            footerSections: [
                {
                    title: 'NEED HELP? WE\'RE ALWAYS THERE',
                    description: 'Everyone who shops from us is one of us, we will never ghost you. Reach out to us & we promise to help you out in the best way possible.',
                    contactInfo: {
                        email: 'help@test.com',
                        hoursLabel: 'Mon - Sat',
                        hours: '10 AM - 7 PM'
                    }
                },
                {
                    title: 'ABOUT US',
                    description: 'Each of your pieces are handcrafted by more than 200 karigars working tirelessly for you. We started this brand in 2020 with an aim of providing jobs to more than 1000 Karigars who lost their livelihood in Covid.'
                },
                {
                    title: 'CARE',
                    links: [
                        { text: 'ABOUT US', url: '/about-us' },
                        { text: 'RETURNS AND REFUNDS', url: '/returns-and-refunds' },
                        { text: 'SHIPPING POLICY', url: '/shipping-policy' },
                        { text: 'JEWELLERY CARE', url: '/jewellery-care' },
                        { text: 'WARRANTY', url: '/warranty' },
                        { text: 'CONTACT US', url: '/contact-us' },
                        { text: 'TERMS & CONDITIONS', url: '/terms' }
                    ]
                },
                {
                    title: 'SHOP',
                    links: [
                        { text: 'JUST LAUNCHED', url: '#' },
                        { text: 'ALL PERSONALIZED', url: '#' },
                        { text: 'BESTSELLERS', url: '#' },
                        { text: 'BRACELETS', url: '#' },
                        { text: 'RINGS', url: '#' },
                        { text: 'NECKLACES', url: '#' }
                    ]
                }
            ]
        };
    }
}
</script>

<style scoped>
.footer {
    padding: 40px 0;
}

.footer h5 {
    font-size: 1.2rem;
    font-weight: 600;
}

.footer a {
    color: #6c757d;
    text-decoration: none;
}

.footer a:hover {
    color: #343a40;
}

@media (max-width: 767.98px) {
    .footer .col-md-6 {
        margin-bottom: 30px;
    }
}
</style>