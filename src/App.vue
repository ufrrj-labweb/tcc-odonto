<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="conteudo">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

.conteudo {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
