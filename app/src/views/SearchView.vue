<script setup lang="ts">
import { ref } from 'vue'
import SearchForm from '@/components/SearchForm.vue'
import MovieBlock from '@/components/MovieBlock.vue'

const movies = ref([{ title: 'Tetle', plot: 'Plot', genres: ['drama', 'thriller'] }])

function onMoviesUpdated() {}
</script>
<template>
  <div class="w-full flex flex-col items-end">
    <button
      class="border border-emerald-400 rounded-md px-2 pointer hover:bg-white hover:text-gray-800 hover:shadow-md"
    >
      I want to add my own movie!
    </button>
  </div>
  <h2 class="font-bold text-center my-12 text-4xl w-1/2">
    What kind of movie would you like to watch today?
  </h2>
  <SearchForm class="w-1/2" @moviesUpdated="onMoviesUpdated" />
  <div class="flex flex-col w-1/2 gap-3 mt-3">
    <MovieBlock v-for="(movie, key) in movies" :key="key" :movie="movie" />
  </div>
</template>
