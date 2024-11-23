<template>
    <div class="container">
        <h1 class="text-center mb-2">Take our Quiz!</h1>
        <p class="text-center mb-4">Get personalized product recommendations.</p>

        <div class="row">
            <div class="col-md-3 col-sm-6 mb-4" v-for="category in categories" :key="category.title">
                <div class="card h-100">
                    <img :src="category.image" class="card-img-top" :alt="category.title">
                    <div class="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 class="card-title text-white mb-0">{{ category.title }}</h5>
                        <button class="btn btn-primary btn-sm mt-2">TAKE THE QUIZ!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WellnessQuiz',
    data() {
        return {
            categories: [
                { title: 'Cardiac Wellness', image: 'https://himalayawellness.in/cdn/shop/files/Cardiac_wellness.webp?v=1675916590&width=500' },
                { title: 'Digestive Wellness', image: 'https://himalayawellness.in/cdn/shop/files/Digestive_wellness.webp?v=1675916605&width=500' },
                { title: 'Daily Skincare', image: 'https://himalayawellness.in/cdn/shop/files/Daily_skin_care_routine.webp?v=1675916615&width=500' },
                { title: 'Joint Wellness', image: 'https://himalayawellness.in/cdn/shop/files/Joint_wellness.webp?v=1675917549&width=500' },
                { title: 'Reproductive Wellness', image: 'https://himalayawellness.in/cdn/shop/files/Reproductive_wellness.webp?v=1675917480&width=500' },
                { title: 'Hair Concern', image: 'https://himalayawellness.in/cdn/shop/files/Hair_concern_41477837-cb27-486f-933e-2638b876708b.webp?v=1675923688&width=501' },
                { title: 'Urinary Wellness', image: 'https://himalayawellness.in/cdn/shop/files/Urninary_wellness.webp?v=1675923721&width=500' },
                { title: 'Immune wellness', image: 'https://himalayawellness.in/cdn/shop/files/Immune_wellness.webp?v=1675923801&width=500' },
            ]
        }
    }
}
</script>

<style scoped> 

.card-img-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
}

.btn-primary {
    background-color: #006666;
    border-color: #006666;
}

.btn-primary:hover {
    background-color: #005555;
    border-color: #005555;
}
</style>