<script setup lang="ts">
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="w-full p-4 rounded-2xl shadow-md hover:shadow-lg transition" v-if="movie">
    <span class="font-bold mb-2 block text-xl">{{ movie.title }} ({{ movie.year }})</span>
    <span class="text-xs mb-3 block line-clamp-4">{{ movie.plot }}</span>
    <div class="flex flex-wrap gap-2 mt-2">
      <div
        class="bg-green-100/40 text-gray-600 text-xs py-1 font-semibold px-2 rounded-md shadow-md"
        v-for="(genre, key) in movie.genres"
        :key="key"
      >
        {{ genre }}
      </div>
    </div>
  </div>
</template>
