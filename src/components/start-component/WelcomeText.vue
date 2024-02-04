<template>
  <section class="flex flex-col items-center text-center">
    <span class="dark:text-light font-semibold text-lg" :class="props.titleColor">Enjoy Listening To Music</span>
    <span class="mt-4 text-gray-550">
          Spotify is a proprietary Swedish audio streaming
          and media services provider
      </span>
  </section>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
  titleColor: { type: String, required: false, default: "text-dark" },
}>()
</script>

<style scoped>

</style>