<template>
  <section class="grid bg-get-start ">
    <div class="mt-5 mx-auto">
      <base-logo></base-logo>
    </div>
    <div class="flex items-end">
      <div class="flex flex-col mx-8 items-center text-center">
        <welcome-text title-color="text-lightBG"></welcome-text>
        <button class="my-10 btn bg-mainGreen">Get Started</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WelcomeText from "../components/start-component/WelcomeText.vue";

</script>

<style scoped>

</style>