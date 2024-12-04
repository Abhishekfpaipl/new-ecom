<template>
    <div>
        <div class="">
            <div class="card-body text-start">
                <h3>Account Navigation</h3>
                <ul class="list-group list-group-flush text-start">
                    <li class="list-group-item border-0" v-for="(link, index) in links" :key="index"
                        :class="{ active: isActive(link.route) }">
                        <router-link :to="link.route" class="text-decoration-none text-dark">{{ link.name
                            }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                { name: "My Account", route: "/account" },
                { name: "My Orders", route: "/" },
                { name: "Address Book", route: "/address" },
                { name: "Account Information", route: "/account-information" },
                { name: "My Reviews", route: "/" },
                { name: "Newsletter Subscriptions", route: "/" },
            ]
        };
    },
    methods: {
        isActive(route) {
            return this.$route.path === route; // Compares the current route path with the link route
        }
    }

}
</script>
<style scoped>
.active {
    font-weight: bold;
    color: var(--primary-color);
    /* Example color */
}

.list-group-item.active {
    background-color: var(--primary-color);
    /* Example background color */
}
</style>