<template>
    <div class="container-fluid py-5 " style="background-color: var(--primary-color);">
        <div class="text-center mb-5">
            <h6 class="text-uppercase text-secondary mb-2">SHOP BY</h6>
            <h2 class="mb-4">COLLECTION</h2>
        </div>

        <div class="row g-4">
            <div v-for="collection in collections" :key="collection.id" class="col-md-6 col-lg-3">
                <router-link to="/collection-page" class="card h-100 border-0 bg-transparent">
                    <img :src="collection.image" :alt="collection.title" class="card-img-top rounded"
                        style="object-fit: cover; height: 300px;">
                    <div class="card-body text-center p-3">
                        <button class="btn btn-outline-dark text-uppercase px-4 py-2">
                            {{ collection.title }}
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

    <div class="container my-5 fs-3">
        <p>Express yourself with our Everyday wear Jewellery that is handcrafted by Karigars in Kolkata & made using
            92.5 Sterling Silver with 18KT Real Gold Polish.</p>
    </div>
</template>

<script>
export default {
    name: 'JewelryCollection',
    data() {
        return {

        }
    },
    computed: {
        collections() {
            return this.$store.getters.getCollections;
        }
    }
}
</script>

<style scoped>
.card:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
}



.btn-outline-dark:hover {
    background-color: #000;
    color: #fff;
}
</style>