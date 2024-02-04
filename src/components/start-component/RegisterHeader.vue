<template>
  <div class="flex flex-col text-center">
      <span class="dark:text-light text-xl font-semibold">
     {{ title }}
      </span>
    <span class="dark:text-light/70 mt-2">
        If you need any support
        <router-link class="text-main-green" :to="{name:routeName}">Click Here</router-link>
      </span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const {title, routeName} = defineProps<{
  title: string,
  routeName: string
}>()
</script>

<style scoped>

</style>