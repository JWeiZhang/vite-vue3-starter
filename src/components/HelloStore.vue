<template>
  <div class="flex flex-col items-center">
    <span>{{ userState.userName }}</span>
    <span>{{ userState.email }}</span>
    <button @click="updateMail('test@mail.com')">Update Email</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useInject } from '../store';
import { UserMutations, UserState } from '../store/modules/user';

export default defineComponent({
  name: 'HelloStore',
  setup: () => {
    const {
      state,
      mutations: { updateMail },
    } = useInject<UserState, UserMutations>('userStore');

    return { userState: state, updateMail };
  },
});
</script>

<style></style>
