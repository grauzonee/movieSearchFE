<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import { ref } from 'vue'

const currentTag = ref('')

defineProps<{
  tags: {
    type: string[]
  }
}>()
const emit = defineEmits(['updateTags', 'deleteTag'])

function onInput() {
  emit('updateTags', currentTag.value)
  currentTag.value = ''
}

function onDelete(tag) {
  emit('deleteTag', tag)
}
</script>
<template>
  <div class="flex flex-col w-full gap-2">
    <BaseInput
      placeholder="Type..."
      @keydown.space.prevent="onInput"
      @keydown.enter.prevent="onInput"
      v-model="currentTag"
    />
    <div class="flex flex-row flex-wrap gap-2 w-full">
      <div
        v-for="(tag, index) in tags"
        :key="index"
        class="rounded-lg px-3 font-bold px-1 bg-emerald-300/80 cursor-pointer"
        @click="onDelete(tag)"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>
