<script setup lang="ts">
import { ref } from 'vue'
import RouterButton from '@/components/RouterButton.vue'
import TagsForm from '@/components/TagsForm.vue'
import BaseInput from '@/components/BaseInput.vue'
import FormMessage from '@/components/FormMessage.vue'
import { api } from '@/libs/axios.ts'

const movie = ref({ title: '', plot: '', genres: [] as string[] })
const errorMessage = ref('')
const successMessage = ref('')

function onUpdateTags(newTag) {
  if (!movie.value.genres.includes(newTag)) {
    movie.value.genres.push(newTag)
  }
}

function onDeleteTag(tag) {
  movie.value?.genres.delete(tag)
}

function setError(msg: string) {
  errorMessage.value = msg
  setTimeout(() => {
    errorMessage.value = ''
  }, 4000)
}
function setSuccess(msg: string) {
  successMessage.value = msg
  setTimeout(() => {
    successMessage.value = ''
  }, 4000)
}

function resetMovie() {
  movie.value.title = ''
  movie.value.plot = ''
  movie.value.genres = []
}

async function createMovie() {
  if (movie.value?.title.length < 1) {
    setError('Please enter title')
    return
  }
  if (movie.value?.plot.length < 1) {
    setError('Please enter plot')
    return
  }
  if (movie.value?.genres.length < 1) {
    setError('Please select genres')
    return
  }
  try {
    const response = await api.post('/api/movies', movie.value)
    if (response.status !== 200) {
      setError('Something went wrong with the request, please try later')
      return
    }
    setSuccess('Movie created, thank you!')
    resetMovie()
  } catch (error) {
    setError('Something went wrong with the request, please try later')
    console.log('error', error)
  }
}
</script>
<template>
  <div class="w-full flex flex-col items-end">
    <RouterButton text="I want to find a movie!" to="/" />
  </div>
  <div class="w-full md:w-1/2">
    <h2 class="font-bold text-center my-12 text-4xl w-full drop-shadow">
      Please fill all the fields
    </h2>
    <div
      class="bg-white/10 backdrop-blur-lg text-gray-800 rounded-2xl shadow-xl shadow-black/30 w-1/2 px-6 py-10 flex flex-col gap-2 w-full"
    >
      <FormMessage :msg="errorMessage" />
      <FormMessage :msg="successMessage" :isSuccess="true" />
      <BaseInput v-model="movie.title" placeholder="Title..." />
      <BaseInput placeholder="Plot..." :textarea="true" v-model="movie.plot" />
      <TagsForm @updateTags="onUpdateTags" @deleteTag="onDeleteTag" :tags="movie.genres" />
      <button
        type="submit"
        @click="createMovie"
        class="w-full py-3 px-6 rounded-xl font-semibold text-gray-200 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/20"
      >
        Submit
      </button>
    </div>
  </div>
</template>
