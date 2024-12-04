<template>
    <div class="container top-padding">
        <div class="row">
            <div class="col-md-6">
                <div class="card border-0 text-start">
                    <div class="card-body">
                        <h3 class="text-start mb-5 ls-1">Registered Customers</h3>
                        <form>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                    placeholder="Enter email" required>
                                <label for="email">Email Address *</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="password" placeholder="Password"
                                    required>
                                <label for="password">Password *</label>
                            </div>
                            <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="dataStorage">
                                <label class="form-check-label ls-1" for="dataStorage">By using this form you agree with
                                    the
                                    storage and handling of your data by this website.</label>
                            </div>
                            <button type="submit" class="btn btn-outline-dark rounded-0">Sign In</button>
                            <router-link to="" class="btn btn-link text-dark ls-1">Forgot Your Password ?</router-link>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
                <div class="card text-start border-0">
                    <div class="card-body">
                        <h3 class="text-start ls-1 mb-5">New Customers</h3>
                        <p>By creating an account with our store, you will be able to move through the checkout process
                            faster, store multiple shipping addresses, view and track your orders in your account and
                            more.</p>
                        <router-link to="" class="btn btn-outline-dark rounded-0">Create an Account</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-5 ls-1">
        <div class="row">
            <div class="col-md-4">
                <AccountLinks/> 
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-6">
                        <div class="text-start">
                            <h3 class="mb-4">Contact Information</h3>
                            <p>User Name</p>
                            <p>User Email</p>
                            <div class="d-flex gap-3 align-items-center">
                                <router-link to="" class="btn btn-outline-dark rounded-0">Change Password</router-link>
                                <router-link to="" class="btn btn-outline-dark rounded-0">Edit</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-start">
                            <h3 class="mb-4">Newsletter</h3>
                            <p class="">You aren't subscribed to our newsletter.</p>
                            <p class="">You are subscribed to "General Subscription".</p>
                            <div class="d-flex gap-3 align-items-center">
                                <router-link to="" class="btn btn-outline-dark rounded-0">Edit</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <h3 class="mb-3 text-start">Address Book</h3>
                    <div class="col-md-6 text-start">
                        <h5>Default Billing Address</h5>
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
    name: 'AccountPage',
    components: {
        AccountLinks
    },  

}
</script>
<style> 
</style>