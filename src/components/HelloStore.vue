<template>
  <div class="flex flex-col items-center">
    <span>{{ userState.userName }}</span>
    <span>{{ userState.email }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'HelloStore',
  setup: () => {
    const userState = inject('userStore');
    return { userState };
  },
});
</script>

<style></style>
