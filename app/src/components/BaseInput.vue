<script setup lang="ts">
withDefaults(defineProps<{ placeholder: string; textarea?: bool }>(), { textarea: false })
const model = defineModel<string>()
</script>
<template>
  <textarea
    v-if="textarea"
    v-model="model"
    class="border border-white/20 bg-white/80 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none py-3 px-2 focus:h-32"
    :placeholder="placeholder"
  ></textarea>
  <input
    v-else
    v-model="model"
    class="border border-white/20 bg-white/80 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none py-3 px-2"
    :placeholder="placeholder"
  />
</template>
