<template>
  <section class="grid bg-choose-mode">
    <div class="mt-5 mx-auto">
      <base-logo></base-logo>
    </div>

    <div class="flex flex-col mx-6 items-center justify-end text-center">
      <span class="text-light font-semibold text-lg">Choose mode</span>
      <div class="flex flex-row justify-between w-1/2 h-14 mt-4">
        <button class="backdrop-blur-3xl circleBtn">
          <base-svg-icon name="sun" class="size-10"></base-svg-icon>
        </button>
        <button class="backdrop-blur-3xl circleBtn">
          <base-svg-icon name="moon" class="size-10"></base-svg-icon>
        </button>
      </div>
      <button class="my-10 btn bg-main-green">Get Started</button>
    </div>

  </section>
</template>

<script>

</script>

<style scoped>

</style>