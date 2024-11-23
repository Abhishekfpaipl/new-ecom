<template>
  <TopNav />
  <transition name="fade">
    <router-view />
  </transition>
  <FooterBar />
</template>
<script>
import TopNav from "@/components/TopNav.vue"
import FooterBar from "@/components/FooterBar.vue"
export default {
  name: 'App',
  components: {
    TopNav,
    FooterBar,
  },
}
</script>
<style lang="scss">
body {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none; //ios safari
}

#app {
  font-family: libre franklin, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.before-enter {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity .6s ease-out, transform .6s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}

.accordion {
  --bs-accordion-btn-focus-box-shadow: none !important;
}

.form-control {
  box-shadow: none !important;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
