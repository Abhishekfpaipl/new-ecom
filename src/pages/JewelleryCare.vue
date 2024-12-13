<template>
    <div class="container-fluid top-padding" style="background-color: var(--primary-color);">
        <div class="container mt-5">
            <div class="text-center mb-5">
                <h1 class="mb-3">Keep Your Sparkle On</h1>
                <p class="lead">Jewellery Care Tips</p>
                <p class="text-center">With simple maintenance and attention, you can protect me from wear and tear, and
                    preserve my shine and luster for years to come. Read on for our expert tips on jewellery care.</p>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div class="col" v-for="(image, index) in images" :key="index">
                    <img :src="image" alt="" class="w-100">
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-3 my-5">
                <div class="col mb-4" v-for="(feature, index) in features" :key="index">
                    <div class="d-flex gap-2 align-items-center">
                        <img :src="feature.image"
                            class="img-fluid mb-3" alt="Avoid Water">
                        <h5>{{feature.title}}</h5>
                    </div>
                    <p class="text-start">{{ feature.description }}</p>
                </div>
            </div>
            <div class="text-center py-5">
                <p>That's it! By following these simple tips, you can make sure I stay in great condition and keep
                    shining for years to come. Thanks for taking such good care of me!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JewelleryCare',
    data() {
        return {
            images: [
                "https://whitehathi.com/cdn/shop/files/Rectangle_499.png?v=1680017864",
                "https://whitehathi.com/cdn/shop/files/Rectangle_500.png?v=1680017865",
                "https://whitehathi.com/cdn/shop/files/Rectangle_501.png?v=1680017864",
            ],
            features:[
                {
                    image: "https://whitehathi.com/cdn/shop/files/Rectangle_502.png?v=1680017960",
                    title: "Avoid Water",
                    description:"First things first, I have a secret to tell you, I'm actually allergic to water. Yep, it's true. Exposure to water can make my polish fade faster, and no one wants that. So, to keep me in tip-top shape, please keep me away from showers, moisture, and swimming pools.",
                },
                {
                    image: "https://whitehathi.com/cdn/shop/files/Rectangle_505.png?v=1680017959",
                    title: "Avoid Scents",
                    description:"Now, I know you love to smell great, but please keep in mind that I don't like scents. Even perfumes can tarnish my polish and make me lose my shine. So, if you're planning on spritzing yourself with a little something, please put me away first.",
                },
                {
                    image: "https://whitehathi.com/cdn/shop/files/Rectangle_506.png?v=1680017959",
                    title: "Sleep Separately",
                    description:"I know you love snuggling up to me, but when we get tangled up with clothes or bedsheets, it can cause wear and tear on my precious stones. Instead, I'd like to be put to sleep in the airtight zip lock bag and box that I came in. It's super comfortable in there, and it will help me avoid any unnecessary damage. Please store me in a dry and cool place, too.",
                },
                {
                    image: "https://whitehathi.com/cdn/shop/files/Rectangle_507.png?v=1680017959",
                    title: "First Off, Last On",
                    description:"Last but not least, I want to be the first thing you take off when you get home and the last thing you put on before you head out the door. That way, you can make sure you're handling me with care and not accidentally bumping me into things. Plus, the longer you follow this rule, the longer I'll be a part of your collection. If you need to clean me, please use a dry microfiber cloth.",
                },

            ]
        }
    }
}
</script>