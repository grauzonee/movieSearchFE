<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <RouterLink :to="to">
    <button
      class="border border-emerald-400 rounded-md px-2 pointer hover:bg-white hover:text-gray-800 hover:shadow-md transition-all duration-300"
    >
      {{ text }}
    </button>
  </RouterLink>
</template>
