<script setup lang="ts">
import { ref } from 'vue'
import RouterButton from '@/components/RouterButton.vue'
import TagsForm from '@/components/TagsForm.vue'
import BaseInput from '@/components/BaseInput.vue'

const movie = ref({ title: '', plot: '', genres: new Set() })

function onUpdateTags(newTag) {
  movie.value?.genres.add(newTag)
}

function onDeleteTag(tag) {
  movie.value?.genres.delete(tag)
}
</script>
<template>
  <div class="w-full flex flex-col items-end">
    <RouterButton text="I want to find a movie!" to="/" />
  </div>
  <h2 class="font-bold text-center my-12 text-4xl w-1/2 drop-shadow">Please fill all the fields</h2>
  <div
    class="bg-white/10 backdrop-blur-lg text-gray-800 rounded-2xl shadow-xl shadow-black/30 w-1/2 px-6 py-10 flex flex-col gap-2"
  >
    <BaseInput v-model="movie.title" placeholder="Title..." />
    <BaseInput placeholder="Plot..." :textarea="true" v-model="movie.plot" />
    <TagsForm @updateTags="onUpdateTags" @deleteTag="onDeleteTag" :tags="movie.genres" />
    <button
      type="submit"
      class="w-full py-3 px-6 rounded-xl font-semibold text-gray-200 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/20"
    >
      Submit
    </button>
  </div>
</template>
