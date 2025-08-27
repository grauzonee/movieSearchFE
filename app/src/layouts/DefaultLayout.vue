<script setup lang="ts">
import ghIcon from '@/assets/icons/github-mark.png'
</script>
<template>
  <div
    class="w-100 h-screen px-5 py-2 flex flex-col items-center bg-gradient-to-r from-red-400 to-green-400 text-white font-sans"
  >
    <slot />
    <a href="https://github.com/grauzonee" target="_blank">
      <div class="absolute top-2 left-2 h-10 aspect-square">
        <img :src="ghIcon" class="w-full h-full" />
      </div>
    </a>
  </div>
</template>
