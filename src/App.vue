<script setup>
/*
  imports
*/
  import Navbar from '@/components/Layout/Navbar.vue'
</script>

<template>

  <!-- Navbar -->
  <Navbar />

  <!-- Router view -->
  <div class="container is-max-desktop px-2 py-4">
     <router-view></router-view>
  </div>

 
</template>

<style>
@import 'bulma/css/bulma.min.css'
</style>
