<script setup lang="ts">
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="rounded-md bg-white text-gray-700 p-4 shadow w-full" v-if="movie">
    <span class="font-bold mb-2 block">{{ movie.title }}</span>
    <span class="text-xs mb-3 block">{{ movie.plot }}</span>
  </div>
</template>
