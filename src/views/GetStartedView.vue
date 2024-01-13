<template>
  <section class="grid bg-get-start ">
    <div class="mt-5 mx-auto">
      <base-logo></base-logo>
    </div>
    <div class="flex items-end">
      <div class="flex flex-col mx-8 items-center text-center">
        <welcom-text title-color="text-lightBG"></welcom-text>
        <button class="btn bg-mainGreen">Get Started</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WelcomText from "../components/start-component/WelcomText.vue";

</script>

<style scoped>

</style>