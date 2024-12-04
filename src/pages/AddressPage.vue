<template>
    <div class="container mb-5 top-padding">
        <div class="row">
            <div class="col-md-4">
                <AccountLinks />
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-6">
                        <div class="text-start">
                            <h3 class="mb-4">Default Billing Address</h3>
                            <p>You have not set a default billing address.</p>
                            <div class="">
                                <p>User Name</p>
                                <p>User Address</p>
                                <p>User Mobile Number</p>
                            </div>
                            <div class="d-flex gap-3 align-items-center">
                                <router-link to="" class="btn btn-outline-dark rounded-0">Edit Address</router-link>
                                <router-link to="" class="btn btn-outline-dark rounded-0">Manage Address</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-start">
                            <h3 class="mb-4">Addtional Address Entries</h3>
                            <p>You have not set a default billing address.</p>
                            <div class="">
                                <p>User Name</p>
                                <p>User Address</p>
                                <p>User Mobile Number</p>
                            </div>
                            <div class="d-flex gap-3 align-items-center">
                                <router-link to="" class="btn btn-outline-dark rounded-0">Edit Address</router-link>
                                <router-link to="" class="btn btn-outline-dark rounded-0">Delete</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6 text-start">
                        <h5>Default Shipping Address</h5>
                        <p>You have not set a default shipping address.</p>
                        <div class="">
                            <p>User Name</p>
                            <p>User Address</p>
                            <p>User Mobile Number</p>
                        </div>
                        <div class="d-flex gap-3 align-items-center">
                            <router-link to="" class="btn btn-outline-dark rounded-0">Edit Address</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccountLinks from '@/components/AccountLinks.vue';
export default {
    name: 'AddressPage',
    components: {
        AccountLinks
    },
}
</script>