<template>
  <div>
    <input
        type="text"
        inputmode="search"
        maxlength="200"
        placeholder="Enter Username Or Email"
        class="input w-full py-4"
    >
  </div>
  <div class="mt-3">
    <input
        type="password"
        inputmode="decimal"
        maxlength="200"
        placeholder="Password"
        class="input w-full py-4"
    >
  </div>
  <div class="mt-3">
    <router-link
        to="#"
        class="text-sm font-semibold opacity-80 hover:opacity-90
                   dark:text-light/40 dark:hover:text-light/50
                   ">Recovery Password
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RegisterForm"
}
</script>

<style scoped>

</style>