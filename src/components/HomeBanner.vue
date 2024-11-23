<template>
    <div>
        <img :src="desktopImage"
         style="width: 100%;" class="d-md-block d-none" alt="Banner">
         <img :src="mobileImage"
        style="width: 100%;" class="d-md-none" alt="Banner">
    </div>
</template>
<script>
export default {
    props:{
        desktopImage:{
            type: String
        },
        mobileImage:{
            type: String
        },
    }
}
</script>
<style lang="">

</style>