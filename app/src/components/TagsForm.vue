<script setup lang="ts">
import { ref } from 'vue'

const currentTag = ref('')

defineProps<{
  tags: {
    type: string[]
  }
}>()
const emit = defineEmits(['updateTags'])

function onInput() {
  emit('updateTags', currentTag.value)
  currentTag.value = ''
}
</script>
<template>
  <div class="flex flex-col w-full gap-2">
    <input
      placeholder="Type..."
      class="rounded-sm px-3 shadow-md outline-none mb-3"
      @keydown.space.prevent="onInput"
      @keydown.enter.prevent="onInput"
      v-model="currentTag"
    />
    <div v-for="(tag, index) in tags" :key="index" class="rounded-sm px-1">{{ tag }}</div>
  </div>
</template>
