<script setup lang="ts">
withDefaults(defineProps<{ placeholder: string; textarea?: bool }>(), { textarea: false })
const model = defineModel<string>()
</script>
<template>
  <textarea
    v-if="textarea"
    v-model="model"
    class="border border-white/20 bg-white/80 rounded-lg focus:shadow-lg focus:outline-none py-3 px-2 focus:h-32 transition-all duration-500"
    :placeholder="placeholder"
  ></textarea>
  <input
    v-else
    v-model="model"
    class="border border-white/20 bg-white/60 rounded-lg focus:shadow-lg outline-none py-3 px-2 transition-all duration-500"
    :placeholder="placeholder"
  />
</template>
