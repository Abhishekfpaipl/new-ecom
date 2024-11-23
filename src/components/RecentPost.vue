<template>
    <div class="container">
        <h2 class="text-center mb-5">Recent Posts</h2>
        <div class="row">
            <div class="col-md-6 mb-4" v-for="post in posts" :key="post.id">
                <div class="card h-100">
                    <img :src="post.image" class="card-img-top" :alt="post.title">
                    <div class="card-body">
                        <p class="small mb-0 text-muted text-start">{{ post.date }} · {{ post.readTime }} read</p>
                        <h2 class="card-title mt-2">{{ post.title }}</h2>
                        <p class="text-muted small my-4">{{ post.category }}</p>
                        <p class="card-text">{{ post.excerpt }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentPosts',
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Himalaya Immunity Boosters (Tablets and Syrups)',
                    image: 'https://dropinblog.net/34243241/files/featured/Himalaya-Immunity-Boosters-Banner.png',
                    date: '07/22/2023 8:28am',
                    readTime: '5 minute',
                    category: 'GENERAL HEALTH',
                    excerpt: 'Adopting a healthy and balanced diet, exercising regularly, maintaining mental health, and most importantly, preparing the immune system are critical...'
                },
                {
                    id: 2,
                    title: 'Kennel Cough in Dogs (Symptoms, Treatment, and Prevention)',
                    image: 'https://dropinblog.net/34243241/files/featured/Kennel-Cough-in-Dogs.png',
                    date: '07/17/2023 8:38am',
                    readTime: '2 minute',
                    category: 'PET CARE',
                    excerpt: 'Kennel cough, also known as canine infectious tracheobronchitis, is a contagious upper respiratory tract infection commonly seen among dogs that are...'
                }
            ]
        }
    }
}
</script>

<style scoped>
.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-img-top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.badge {
    font-weight: normal;
}
</style>