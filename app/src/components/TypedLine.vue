<script setup lang="ts">
import { ref, onMounted } from 'vue'

const typedText = ref('')
const props = withDefaults(defineProps<{ text: string; doType?: boolean }>(), { doType: true })

function typeText() {
  if (!props.doType) {
    return
  }
  if (typedText.value == props.text) {
    setTimeout(() => {
      typedText.value = ''
      typeText()
    }, 1500)
  } else {
    typedText.value += props.text[typedText.value.length]
    setTimeout(typeText, 90)
  }
}

onMounted(() => {
  typeText()
})
</script>
<template>
  <span class="block text-bold">{{ doType ? typedText : text }}</span>
</template>
