<template>
  <h1 class="text-6xl text-center">Vite 2.x + Vue 3.x + Tailwind 2.x</h1>
  <div class="logo-container">
    <img src="./assets/logo/vite.svg" alt="vite" />
    <img src="./assets/logo/vue.png" alt="vue" />
    <img src="./assets/logo/tailwind.svg" alt="tailwindcss" />
  </div>
  <hello-store></hello-store>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HelloStore from './components/HelloStore.vue';

export default defineComponent({
  name: 'App',
  components: { HelloStore },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo-container {
  margin: 0 auto;
  @apply w-10/12 flex justify-around items-center mt-8;
  img {
    @apply w-60;
  }
}
</style>
