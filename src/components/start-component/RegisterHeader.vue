<template>
  <div class="flex flex-col text-center">
      <span class="dark:text-lightBG text-xl font-semibold">
     {{ title }}
      </span>
    <span class="dark:text-lightBG/70 mt-2">
        If you need any support
        <router-link class="text-mainGreen" :to="{name:routeName}">Click Here</router-link>
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