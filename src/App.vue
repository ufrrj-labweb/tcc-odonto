<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="is-fullheigth-100vh">
    <RouterView />
  </div>
  
  <Footer />
</template>

<style>
@import 'bulma/css/bulma.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

/* body {
  margin: 0 auto;
} */

.is-fullheigth-100vh {
  height: 100vh;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
