<template>
    <div class="container-fluid top-padding" style="background-color: var(--primary-color);">
        <h1 class="text-uppercase ls-1 text-center mb-5">let's find that perfect gift</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-for="(gift, index) in gifts" :key="index">
                <router-link to="" class="card h-100 border-0 bg-transparent">
                    <img :src="gift.image" alt="" class="card-img-top rounded"
                        style="object-fit: cover; height: 300px;">
                    <div class="card-body text-center p-3">
                        <button class="btn btn-outline-dark text-uppercase px-4 py-2">
                            {{ gift.title }}
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 g-3 py-3 justify-content-center">
            <div class="col" v-for="(icon, index) in icons" :key="index">
                <!-- <img src="icon.image" alt=""> -->
                <div class="card h-100 p-2">
                    <i class="bi fs-1" :class="icon.icon"></i>
                    <p class="">{{ icon.name }}</p>
                </div>
            </div>
        </div>
        <div class="container">
            <h5 class="text-center text-uppercase my-3 ls-1">Make it extra special with our complimentary gift wrap and
                personalized gift notes</h5>
            <div class="row row-cols-1 row-cols-md-2 g-3">
                <div class="col" v-for="(data, index ) in datas" :key="index">
                    <router-link :to="'' + data.sid" class="card bg-transparent border-0 text-decoration-none">
                        <div class="card-body">
                            <img class="w-100" :src="data.image" style="height: 400px;object-fit: contain" alt="">
                            <p class="my-3 ls-1">{{ data.title }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "GiftPage",
    data() {
        return {
            gifts: [
                {
                    id: 1,
                    image: "https://whitehathi.com/cdn/shop/files/1_2a933af7-34e5-4232-ba32-5ea04afca71d.jpg?v=1683275142&width=533",
                    title: "personalized jewellery",
                },
                {
                    id: 1,
                    image: "https://whitehathi.com/cdn/shop/files/2_851e33c1-54c8-4548-b49c-d722d56f3077.jpg?v=1683275142&width=533",
                    title: "Shops sets",
                },
                {
                    id: 1,
                    image: "https://whitehathi.com/cdn/shop/files/3.jpg?v=1683275141&width=533",
                    title: "bestsellers",
                },
            ],
            icons: [
                { id: 1, icon: "bi-truck", name: "FREE SHIPPING ON PREPAID ORDERS" },
                { id: 1, icon: "bi-gift", name: "COMPLIMENTARY GIFT PACKAGING" },
                { id: 1, icon: "bi-shield-check", name: "1 YEAR WARRANTY" },
            ],
            datas: [
                {
                    title: "SHOP UNDER ₹2000",
                    sid:"shop-under-2000",
                    image: "https://whitehathi.com/cdn/shop/files/2_1189741c-80a7-4481-81ff-70cbbf5402a1.jpg?v=1683276023&width=533"
                },
                {
                    title: "SHOP UNDER ₹5000",
                    sid:"shop-under-5000",
                    image: "https://whitehathi.com/cdn/shop/files/3_07199eac-ed52-4e3f-94a7-c8ffffb0e870.jpg?v=1683276023&width=533"
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>