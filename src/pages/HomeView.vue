<template>
  <div>
    <HomeBanner
      desktopImage="https://whitehathi.com/cdn/shop/files/800x1800-desktop-002_copy.jpg?v=1731394065&width=750"
      mobileImage="https://whitehathi.com/cdn/shop/files/mobile-04_copy.jpg?v=1731394065" v-observe />
    <div class="my-5">
      <ProductCollection v-observe />
    </div>
    <div class="my-5">
      <BadgeCard v-observe />
    </div>
    <div class="my-5">
      <ProductsCard :products=products title="Shop our most loved designs" v-observe />
    </div>
    <div class="my-5">
      <CollectionCard v-observe />
    </div>
    <div class="my-5">
      <GiftSection v-observe />
    </div>
    <div class="my-5">
      <ReviewSection v-observe />
    </div>
    <div class="my-5">
      <HomeBanner
        desktopImage="https://whitehathi.com/cdn/shop/files/800x1800-desktop-002_copy.jpg?v=1731394065&width=750"
        mobileImage="https://whitehathi.com/cdn/shop/files/mobile-04_copy.jpg?v=1731394065" v-observe />
    </div> 
    <div class="my-5">
      <ProductsCard :products=secondaryProducts title="New launch" v-observe />
    </div>
    <div class="my-5">
      <QuizSection v-observe />
    </div>
    <div class="my-5">
      <RecentPost v-observe />
    </div> 

  </div>
</template>
<script>
import HomeBanner from "@/components/HomeBanner.vue"
import ProductCollection from "@/components/ProductCollection.vue"
import ProductsCard from "@/components/ProductsCard.vue"
import CollectionCard from "@/components/CollectionCard.vue"
import GiftSection from "@/components/GiftSection.vue"
import ReviewSection from "@/components/ReviewSection.vue"
import BadgeCard from "@/components/BadgeCard.vue"

export default {
  name: "HomeView",
  components: {
    HomeBanner,
    ProductCollection,
    ProductsCard,
    CollectionCard,
    GiftSection,
    ReviewSection,
    BadgeCard,
  },
  data() {
    return {
      // products: [
      //   { id: 1, name: "Lorem ipsum dolor sit amet.", mrp: 100, reviews: "118", tag: "-15% Off", price: 80, image: "https://whitehathi.com/cdn/shop/files/IMG_9856.jpg?v=1706217863&width=360", secondary: "https://whitehathi.com/cdn/shop/files/92.5SterlingSilver18KGoldVermeil1YearAntiTarnishWarrantyPerfectforeverydaywear.png?v=1706217863&width=360", isHovered: false },
      //   { id: 2, name: "Lorem ipsum dolor sit amet.", mrp: null, reviews: "22", tag: "", price: 299, image: "https://whitehathi.com/cdn/shop/products/DAJ06769...1.jpg?v=1687943574&width=360", secondary: "https://whitehathi.com/cdn/shop/files/IMG_9865.jpg?v=1687943574&width=360", isHovered: false },
      //   { id: 3, name: "Lorem ipsum dolor sit amet.", mrp: 390, reviews: "2", tag: "New-in", price: 340, image: "https://whitehathi.com/cdn/shop/files/IMG_3090.jpg?v=1713335959&width=360", secondary: "https://whitehathi.com/cdn/shop/files/IMG_4188.jpg?v=1713335959&width=360", isHovered: false },
      //   { id: 4, name: "Lorem ipsum dolor sit amet.", mrp: 300, reviews: "", tag: "-15% Off", price: 265, image: "https://whitehathi.com/cdn/shop/files/0N8A0918.jpg?v=1702791455&width=360", secondary: "https://whitehathi.com/cdn/shop/files/0N8A0917.jpg?v=1702791429&width=360", isHovered: false },
      // ],
      secondaryProducts: [
        { id: 1, name: "Lorem ipsum dolor sit amet.", price: 80, image: "https://whitehathi.com/cdn/shop/files/IMG_9973.jpg?v=1687946668&width=493", secondary: "https://whitehathi.com/cdn/shop/products/IMG_2378.jpg?v=1687946668&width=493", isHovered: false },
        { id: 2, name: "Lorem ipsum dolor sit amet.", price: 299, image: "https://whitehathi.com/cdn/shop/files/0N8A1043.jpg?v=1703223520&width=493", secondary: "https://whitehathi.com/cdn/shop/files/0N8A1043...1.jpg?v=1703223553&width=493", isHovered: false },
        { id: 7, name: "Lorem ipsum dolor sit amet.", price: 340, image: "https://whitehathi.com/cdn/shop/files/IMG_8171.jpg?v=1686219223&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8995-1.jpg?v=1686827276&width=493", isHovered: false },
        { id: 4, name: "Lorem ipsum dolor sit amet.", price: 265, image: "https://whitehathi.com/cdn/shop/files/IMG_8880-1.jpg?v=1690360149&width=493", secondary: "https://whitehathi.com/cdn/shop/files/IMG_8151-1.jpg?v=1690360149&width=493", isHovered: false },
      ]
    }
  },
  computed:{
    products(){
      return this.$store.getters.getProducts
    }
  }
};
</script>
