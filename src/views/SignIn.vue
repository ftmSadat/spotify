<template>
  <section>
    <in-line-logo-and-back></in-line-logo-and-back>
    <register-header
        class="mt-8 text-sm"
        :title="textLinkHeader"
        route-name=""
    ></register-header>
    <div
        class="mx-8 sm:mx-20 mt-8 h-full "
    >
      <form class="flex flex-col justify-between w-ful h-1/2">
        <div>
          <sign-in-form v-if="isSignIn"></sign-in-form>
          <register-form v-else></register-form>
        </div>
        <div>
          <div class="flex flex-col my-3">
            <button class="btn bg-main-green !rounded-3xl">{{ textSubmitBtn }}</button>
          </div>
          <div class="flex flex-col">
            <base-text-in-middle-line text="Or"></base-text-in-middle-line>
            <div class="flex justify-around ">
              <button class="size-10">
                <img
                    art="google"
                    :src="'./icons/google.svg'"
                    class="w-full">
              </button>
              <button class="size-10">
                <img
                    art="google"
                    :src="'./icons/apple.svg'"
                    class="w-full">
              </button>
            </div>
            <span class="mt-4 font-medium text-sm text-center dark:text-light/70">
          {{ textQuestion }}
          <router-link class="text-blue-500" :to="{name:''}">{{ textLinkFooter }}</router-link>
      </span>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import {onBeforeMount, ref, computed} from "vue"
import {useRoute} from "vue-router";
import InLineLogoAndBack from "@/components/start-component/InLineLogoAndBack.vue"
import RegisterHeader from "@/components/start-component/RegisterHeader.vue";
import SignInForm from "@/components/start-component/SignInForm.vue";
import RegisterForm from "@/components/start-component/RegisterForm.vue";

const route = useRoute()
const isSignIn = ref<boolean>(true)

const textLinkHeader = computed(() => isSignIn.value ? "Sign In" : "Register")
const textSubmitBtn = computed(() => isSignIn.value ? "Sign In" : "Creat Account")
const textQuestion = computed(() => isSignIn.value ? "Not A Member?" : "Do You Have An Account?")
const textLinkFooter = computed(() => isSignIn.value ? "Register Now" : "Sign In")

const isRegister = () => {
  const path = route.path;
  return path.split('/')[1] === 'register' ? true : false
}

onBeforeMount(() => isSignIn.value = !(isRegister()))

</script>

<style scoped>

</style>