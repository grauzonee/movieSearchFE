<script setup lang="ts">
import { ref } from 'vue'
import SearchForm from '@/components/SearchForm.vue'
import MovieBlock from '@/components/MovieBlock.vue'
import RouterButton from '@/components/RouterButton.vue'

const movies = ref([])
const isLoading = ref(false)

function onMoviesUpdated(newMovies) {
  console.log('onMovieUpdated')
  movies.value = newMovies
  isLoading.value = false
}

function onIsLoading() {
  console.log('onIsLoading')
  movies.value = []
  isLoading.value = true
}
</script>
<template>
  <div class="w-full flex flex-col items-end">
    <RouterButton text="I want to add my own movie!" to="create" />
  </div>
  <h2 class="font-bold text-center my-12 text-4xl w-1/2">
    What kind of movie would you like to watch today?
  </h2>
  <SearchForm class="w-1/2" @moviesUpdated="onMoviesUpdated" @isLoading="onIsLoading" />
  <div class="flex flex-col w-1/2 gap-3 mt-3 overflow-scroll no-scrollbar">
    <MovieBlock v-for="(movie, key) in movies" :key="key" :movie="movie" />
    <span
      v-if="isLoading"
      class="flex items-center justify-center p-3 h-12 bg-white/10 backdrop-blur-lg animate-pulse rounded-lg shadow-lg shadow-indigo-500/30"
    >
      <div
        class="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"
      ></div>
    </span>
  </div>
</template>
