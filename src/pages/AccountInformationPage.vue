<template>
    <div class="container mb-5 top-padding ls-1">
        <div class="row">
            <div class="col-md-4">
                <AccountLinks/>
            </div>
            <div class="col-md-8">
                <h3 class="text-start">Account Information</h3>
                <form class="row">
                    <div class="col-md-6">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="First Name" v-model="firstName"
                                placeholder="First Name">
                            <label for="First Name">First Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="Last Name" v-model="lastName"
                                placeholder="Last Name">
                            <label for="Last Name">Last Name</label>
                        </div>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="checkbox" value="" id="changeEmail"
                            v-model="changeEmail" />
                        <label class="form-check-label" for="changeEmail">
                            Change Email
                        </label>
                    </div>
                    <div class="form-check text-start">
                        <input class="form-check-input" type="checkbox" value="" id="changePassword"
                            v-model="changePassword" />
                        <label class="form-check-label" for="changePassword">
                            Change Password
                        </label>
                    </div>
                    <!-- <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="allowRemote"
                            v-model="allowRemote" />
                        <label class="form-check-label" for="allowRemote">
                            Allow remote shopping assistance
                        </label>
                        <div class="form-text text-muted">
                            <small>Allowing remote access may pose a security risk.</small>
                        </div>
                    </div> -->
                </form>
                <div class="row mt-5">
                    <div class="col-12">
                        <h3 v-if="changeEmail || changePassword" class="text-start">CHANGE <span
                                v-if="changeEmail">EMAIL</span> <span v-if="changeEmail && changePassword">AND </span>
                            <span v-if="changePassword">PASSWORD</span></h3>
                        <form class="row">
                            <div v-if="changeEmail" class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="Email"
                                        v-model="email" required>
                                    <label for="email">Email *</label>
                                </div>
                            </div>
                            <div v-if="changeEmail" class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="currentPassword"
                                        placeholder="Current password" v-model="currentPassword" required>
                                    <label for="currentPassword">Current Password *</label>
                                </div>
                            </div>
                            <div v-if="changePassword" class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="newPassword" v-model="newPassword"
                                        placeholder="New password" required>
                                    <label for="newPassword">New Password *</label>
                                </div>
                            </div>
                            <div v-if="changePassword" class="col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="confirmNewPassword"
                                        placeholder="Confirm New Password" v-model="confirmNewPassword" required>
                                    <label for="confirmNewPassword">Confirm New Password *</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mt-5">
                                <button type="submit" class="btn btn-outline-dark rounded-0"
                                    @click.prevent="saveChanges">Save</button>
                                <button type="button" class="btn btn-secondary rounded-0" @click="goBack">Go
                                    back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AccountLinks from '@/components/AccountLinks.vue';
export default {
    name: 'AccountInformationPage',
    components: {
        AccountLinks
    },
    data() {
        return { 
            firstName: '',
            lastName: '',
            changeEmail: false,
            changePassword: false,
            email: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    }
}
</script>