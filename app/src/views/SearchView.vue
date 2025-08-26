<script setup lang="ts">
import { ref } from 'vue'
import SearchForm from '@/components/SearchForm.vue'
import MovieBlock from '@/components/MovieBlock.vue'
import RouterButton from '@/components/RouterButton.vue'
import FormMessage from '@/components/FormMessage.vue'

const movies = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

function onMoviesUpdated(newMovies) {
  movies.value = newMovies
  isLoading.value = false
}

function onIsLoading() {
  movies.value = []
  isLoading.value = true
}

function onError(errorMsg) {
  errorMessage.value = errorMsg
  setTimeout(() => {
    errorMessage.value = ''
  }, 4000)
}
</script>
<template>
  <div class="w-full flex flex-col items-end">
    <RouterButton text="I want to add my own movie!" to="create" />
  </div>
  <div class="w-full md:w-1/2 overflow-hidden">
    <h2 class="font-bold text-center my-12 text-4xl font-sans">
      What kind of movie would you like to watch today?
    </h2>

    <SearchForm @moviesUpdated="onMoviesUpdated" @isLoading="onIsLoading" @onError="onError" />
    <FormMessage :msg="errorMessage" class="mt-2" />
    <transition-group
      tag="div"
      class="flex flex-col gap-3 mt-3 overflow-scroll no-scrollbar max-h-[60vh]"
      name="movies"
    >
      <MovieBlock
        v-for="(movie, key) in movies"
        :key="key"
        :movie="movie"
        :style="{
          transitionDelay: `${key * 100}ms`,
        }"
      />
    </transition-group>
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
<style scoped>
.movies.move,
.movies-enter-active,
.movies-leave-active {
  transition: all 0.5s ease;
}

.movies-enter-from,
.movies-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
