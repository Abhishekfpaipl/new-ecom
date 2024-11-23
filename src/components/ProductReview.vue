<template>
    <div class="container mt-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2>Product Reviews</h2>
            <div class="d-flex align-items-center gap-2">
                <span class="fw-bold" style="font-size: 50px;">{{ averageRating }}</span>
                <div class="d-flex flex-column">
                    <span class="fs-4 text-warning">
                        <i v-for="star in 5" :key="star" :class="starClass(star)"></i>
                    </span>
                    <span class="text-muted ms-2 small text-start">{{ reviews.length }} REVIEWS</span>
                </div>
            </div>
        </div>
        <button class="btn btn-outline-primary mb-3">Write a review</button>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            <div class="col" v-for="review in reviews" :key="review.id">
                <div class="card p-2 rounded-0 position-relative" style="min-height: 150px;">
                    <div class="d-flex align-items-center mt-4">
                        <div :class="['rounded-circle', 'text-center', 'me-3', review.avatarClass]"
                            style="min-width: 40px; min-height: 40px; line-height: 40px;">
                            {{ review.avatarText }}
                        </div>
                        <div>
                            <h5 class="mb-0 text-start text-ellipsis">{{ review.name }}</h5>
                            <p class="small mb-0 text-muted text-start">{{ review.location }}</p>
                        </div>
                    </div>
                    <div class="text-start px-2 mt-3">
                        <p class="mb-0">{{ review.comment }}</p>
                        
                        <p class="text-muted mb-0" v-if="review.subComment">{{ review.subComment }}</p>
                    </div>
                    <div class="position-absolute top-0 end-0 bg-danger rounded-start-3 px-2 mt-1">
                        <div class="small">
                            <i v-for="star in 5" :key="star" :class="starClass(star, review.rating)" class="text-warning"></i>
                            <small class="text-white ms-2">{{ review.timeAgo }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
</template>

<script>
export default {
    name: 'ProductReviews',
    data() {
        return {
            averageRating: 4.6,
            reviews: [
                { id: 1, name: 'Sanjay Sahu', location: 'JAIPUR, RJ', rating: 3, comment: "It's fine.", subComment: "Delevery it's so very let...", timeAgo: '1 WEEK AGO', avatarClass: 'bg-warning', avatarText: 'S' },
                { id: 2, name: 'Bharat Narayan', location: 'G.WAHEERA, UP', rating: 5, comment: 'Fantastic!', timeAgo: '1 MONTH AGO', avatarClass: 'bg-info', avatarText: 'B' },
                { id: 3, name: 'Prasanna Laks', location: 'HYDERABAD, TELANGANA', rating: 5, comment: 'Highly recommended!', timeAgo: '3 MONTHS AGO', avatarClass: 'bg-success', avatarText: 'P' },
                { id: 4, name: 'Pushpa Shree', location: 'BENGALURU, KA', rating: 4, comment: 'Solid!', subComment: 'Good to use', timeAgo: '3 MONTHS AGO', avatarClass: 'bg-danger', avatarText: 'P' }
            ]
        }
    },
    methods: {
        starClass(index, rating = this.averageRating) {
            return index <= Math.floor(rating) ? 'bi bi-star-fill' : 'bi bi-star'
        }
    }
}
</script> 