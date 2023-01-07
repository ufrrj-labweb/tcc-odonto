<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/questionario">Questionario</RouterLink>
      </nav> -->
    <!-- </div> -->
  <!-- </header> -->

  <RouterView />
</template>

<style>
@import 'bulma/css/bulma.min.css';

body {
  margin: 0 auto;
  /* background-color: #BEC3C5; */
}

.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
