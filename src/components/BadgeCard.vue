<template>
    <div class="container-fluid" style="background-color: #FDF6F0;">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
            <div class="col" v-for="(category, index) in categories" :key="index">
                <div class="card bg-transparent border-0 mb-3">
                    <div class="card-body">
                        <img :src="category.image" :alt="category.title">
                        <p class="small my-2">{{ category.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    image: 'https://whitehathi.com/cdn/shop/files/image_4.svg?v=1680497584',
                    title: 'Handmade with love in India',
                },
                {
                    image: 'https://whitehathi.com/cdn/shop/files/image_4_30054950-c918-432f-8359-6b399eab0d3d.svg?v=1680497611',
                    title: '365 day warranty',
                },
                {
                    image: 'https://whitehathi.com/cdn/shop/files/image_4_97afe8cf-6c6b-4a9d-a815-1adb83370c6d.svg?v=1680497618',
                    title: "18KT real gold on 92.5 sterling silver",
                }
            ]
        }
    }
}
</script>

<style scoped></style>