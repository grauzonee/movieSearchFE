<script setup lang="ts">
import { ref } from 'vue'

defineEmits(['moviesUpdated'])

const value = ref(null)
</script>
<template>
  <input
    class="h-8 rounded-md shadow shadow-md px-4 text-gray-400 outline-none"
    placeholder="Type..."
    v-model="value"
  />
</template>
