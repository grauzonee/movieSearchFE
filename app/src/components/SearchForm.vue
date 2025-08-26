<script setup lang="ts">
import { ref } from 'vue'
import { api } from '@/libs/axios.ts'
import BaseInput from '@/components/BaseInput.vue'

const emit = defineEmits(['moviesUpdated', 'isLoading', 'onError'])

const value = ref(null)

async function onSubmit() {
  if (value.value.length < 1) {
    return
  }
  try {
    emit('isLoading')
    const params = new URLSearchParams({ q: value.value })
    const response = await api.get('/api/search', { params })
    if (response.status !== 200) {
      emit('onError', 'Error loading data, please try again later')
    } else {
      emit('moviesUpdated', response.data.data)
      value.value = ''
    }
  } catch (error) {
    emit('onError', error.message)
  }
}
</script>
<template>
  <BaseInput
    v-model="value"
    class="text-gray-800 w-full"
    placeholder="I want to watch something about..."
    @keydown.enter.prevent="onSubmit"
  />
</template>
