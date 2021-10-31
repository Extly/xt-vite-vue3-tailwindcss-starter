<template>
  <div class="grid place-items-center min-h-[80vh]">
    <div>
      <img :src="ExtlyLogo" width="300" class="mx-auto" />
      <p class="text-center lg:text-left">
        {{ $t('intro.desc') }}
        <a href="https://tailwindcss.com/" class="text-blue-500 hover:underline"
          >TailwindCSS 2</a
        >
      </p>
      <p class="text-center">
        {{ $t('intro.github') }}
        <a
          class="text-blue-500 hover:underline"
          href="https://github.com/Extly/xt-vite-vue3-tailwindcss-starter"
          >Github Repo</a
        >
      </p>
      <div class="mt-5 text-center">
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded"
          @click="store.$state.count++"
        >
          Count : {{ store.$state.count }}
        </button>
      </div>
      <p class="mt-5 text-center">A sample icon: <Icon icon="ci:home-heart" /></p>
    </div>
    <router-link
      :to="{ name: 'other-page' }"
      class="mt-5 text-center hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
      >{{ $t('pages.other.menu') }}</router-link
    >
  </div>
</template>

<route lang="yaml">
name: home
</route>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useStore } from '@/store';
import ExtlyLogo from '@/assets/logo.png';
import { Icon } from '@iconify/vue';

useHead({
  title: 'Extly | Opinionated vite starter template',
});

const store = useStore();
</script>

<style>
svg {
  margin: auto;
}
</style>
