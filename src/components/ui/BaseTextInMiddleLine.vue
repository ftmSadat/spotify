<template>
  <h1 class="text-center text-sm dark:text-light/20 dark:hover:text-light/50
           overflow-hidden before:h-[1px] after:h-[1px] after:bg-zinc-300
           after:inline-block after:relative after:align-middle after:w-2/5
           before:bg-zinc-300 before:inline-block before:relative before:align-middle
           before:w-2/5 before:right-2 after:left-2  p-4
">{{ text }}
  </h1>
</template>

<script setup lang="ts">
import {defineProps} from "vue"

const {text} = defineProps<{ text: string }>()
</script>

<style scoped>

</style>