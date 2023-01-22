<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
@import 'bulma/css/bulma.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
