<template>
  <section class="bg-no-repeat
  bg-[url('./images/union.svg'),_url('../assets/images/bg-l-b-choose-reg-or-sign.png'),_url('./images/union_br_2.svg')]
  bg-[position:right_top,left_bottom,right_bottom]
">
    <div class="flex">
      <button
          class="flex justify-center items-center
                 size-8 mx-3 mt-3 rounded-full p-1
                 bg-zinc-200 dark:bg-zinc-800">
        <base-svg-icon
            name="arrow-left"
            class="fill-darkBG dark:fill-lightBG size-4"
        ></base-svg-icon>
      </button>
    </div>

    <div class="flex flex-col items-center text-center mx-8 mt-10">
      <base-logo></base-logo>
      <welcome-text class="mt-10"></welcome-text>
      <div class="flex justify-between w-full my-10">
        <button class="btn bg-mainGreen  mr-2 ml-4">dfs</button>
        <button class="btn !text-darkBG dark:!text-lightBG mr-4">dfs</button>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import WelcomeText from "../components/start-component/WelcomeText.vue";

</script>

<style scoped>

</style>