<template>
    <div class="countdown-section text-center text-white" style="position: relative; height: 500px; overflow: hidden;">
      <!-- Background Image -->
      <img 
        src="/img/countBanner.jpg" 
        alt="Background Image" 
        class="background-image"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1;"
      />
  
      <!-- Countdown Content -->
      <div class="content-overlay d-flex flex-column justify-content-center align-items-center h-100">
        <h5 class="text-uppercase text-light mb-3">Limited Time Only</h5>
        <h3 class="mb-4">Our Best Offers Won't Be Around Forever</h3>
        <div class="d-flex justify-content-center mb-4">
          <div class="time-box mx-2">
            <span class="d-block display-4">{{ days }}</span>
            <small>Days</small>
          </div>
          <div class="time-box mx-2">
            <span class="d-block display-4">{{ hours }}</span>
            <small>Hours</small>
          </div>
          <div class="time-box mx-2">
            <span class="d-block display-4">{{ minutes }}</span>
            <small>Min</small>
          </div>
          <div class="time-box mx-2">
            <span class="d-block display-4">{{ seconds }}</span>
            <small>Sec</small>
          </div>
        </div>
        <button class="btn btn-light px-4">Shop Offers</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        targetDate: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    methods: {
      updateCountdown() {
        const now = new Date();
        const difference = this.targetDate - now;
  
        if (difference > 0) {
          this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          this.minutes = Math.floor((difference / (1000 * 60)) % 60);
          this.seconds = Math.floor((difference / 1000) % 60);
        } else {
          this.days = this.hours = this.minutes = this.seconds = 0; // Countdown expired
        }
      },
    },
    mounted() {
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000); // Update every second
    },
  };
  </script>
  
  <style scoped>
  .background-image {
    filter: brightness(70%); /* Darkens the background for better text visibility */
  }
  
  .content-overlay {
    position: relative;
    z-index: 1; /* Ensure content is above the background image */
    color: #ffffff;
  }
  
  .time-box {
    text-align: center;
    min-width: 80px;
  }
  
  h3 {
    font-weight: 700;
  }
  </style>
  