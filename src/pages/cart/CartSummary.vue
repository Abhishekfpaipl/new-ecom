<template>
    <div class="row">
        <div class="col-12 col-md-8">
            <slot></slot>
        </div>
        <div class="col-12 col-md-4">
            <PriceDetails :getCartSummary="getCartSummary" :gstAmount="gstAmount"
                :grandTotalWithGSTAndAmount="grandTotalWithGSTAndAmount" />
        </div>
    </div>
</template>

<script>
import PriceDetails from './PriceDetails.vue';
export default {
    components: {
        PriceDetails
    },
    computed: {
        getCartSummary() {
            return this.$store.getters.getCartSummary
        },
        gstAmount() {
            return this.getCartSummary * 0.18;
        },
        grandTotalWithGSTAndAmount() {
            return this.getCartSummary + this.gstAmount;
        },
    }
}
</script>

<style lang="scss" scoped></style>