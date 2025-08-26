<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{ msg: string; isSuccess?: bool }>(), { isSuccess: false })
const bgColor = ref('bg-red-500/40')

onMounted(() => {
  if (props.isSuccess) {
    bgColor.value = 'bg-emerald-500/40'
  }
})
</script>
<template>
  <div
    :class="
      bgColor +
      ' text-white font-bold rounded-md shadow-gray-500/30 shadow-md p-4 mb-3 transition-all delay-300'
    "
    v-if="msg"
  >
    {{ msg }}
  </div>
</template>
